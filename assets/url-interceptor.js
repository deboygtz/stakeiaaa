(function () {
    const OLD_URL = 'https://proxt-insta.projetinho-solo.workers.dev';
    const NEW_URL = 'https://mr.userfounded.workers.dev';
    const SST_DOMAIN = 'sst.stalkeia.website';

    function replaceUrl(url) {
        if (typeof url === 'string' && url.includes(OLD_URL)) {
            return url.replace(OLD_URL, NEW_URL);
        }
        return url;
    }

    function isSstRequest(url) {
        return typeof url === 'string' && url.includes(SST_DOMAIN);
    }

    // Intercept Fetch
    const originalFetch = window.fetch;
    window.fetch = function (input, init) {
        if (typeof input === 'string') {
            if (isSstRequest(input)) return originalFetch.call(this, input, init);
            input = replaceUrl(input);
        } else if (input instanceof URL) {
            if (isSstRequest(input.toString())) return originalFetch.call(this, input, init);
            const newUrlStr = replaceUrl(input.toString());
            input = new URL(newUrlStr);
        } else if (input instanceof Request) {
            if (isSstRequest(input.url)) return originalFetch.call(this, input, init);
            const newUrl = replaceUrl(input.url);
            input = new Request(newUrl, input);
        }
        return originalFetch.call(this, input, init);
    };

    // Intercept XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
        if (isSstRequest(url)) return originalOpen.apply(this, arguments);
        arguments[1] = replaceUrl(url);
        return originalOpen.apply(this, arguments);
    };

    // DOM Interceptor
    function processNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const attrs = ['src', 'href', 'data-src', 'data-href'];
            attrs.forEach(attr => {
                const value = node.getAttribute(attr);
                if (value && value.includes(OLD_URL)) {
                    node.setAttribute(attr, replaceUrl(value));
                }
            });
        }
        if (node.childNodes) {
            node.childNodes.forEach(processNode);
        }
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                processNode(node);
            });
            if (mutation.type === 'attributes') {
                const attr = mutation.attributeName;
                const value = mutation.target.getAttribute(attr);
                if (value && value.includes(OLD_URL)) {
                    mutation.target.setAttribute(attr, replaceUrl(value));
                }
            }
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'href', 'data-src', 'data-href']
    });

    // Initial pass
    processNode(document.documentElement);
})();
