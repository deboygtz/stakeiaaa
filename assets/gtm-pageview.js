(function () {
  window.dataLayer = window.dataLayer || [];

  function wrapPush(pushFunc) {
    return function () {
      var filteredArgs = [];
      for (var i = 0; i < arguments.length; i++) {
        var item = arguments[i];
        if (item && item.event === "pageview") {
          var isDuplicate = false;
          // Procura retroativamente o último evento de pageview no dataLayer
          for (var j = window.dataLayer.length - 1; j >= 0; j--) {
            var prevItem = window.dataLayer[j];
            if (prevItem && prevItem.event === "pageview") {
              if (prevItem.page_location === item.page_location) {
                isDuplicate = true;
              }
              break;
            }
          }
          if (isDuplicate) {
            continue;
          }
        }
        filteredArgs.push(item);
      }
      if (filteredArgs.length > 0) {
        return pushFunc.apply(this, filteredArgs);
      }
    };
  }

  var currentPush = wrapPush(window.dataLayer.push || Array.prototype.push);

  Object.defineProperty(window.dataLayer, "push", {
    configurable: true,
    enumerable: true,
    get: function () {
      return currentPush;
    },
    set: function (newPush) {
      currentPush = wrapPush(newPush);
    }
  });

  function pushPageview() {
    window.dataLayer.push({
      event: "pageview",
      page_location: window.location.href,
      page_title: document.title,
      page: {
        url: window.location.href,
        title: document.title,
      },
    });
  }

  pushPageview();

  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(this, arguments);
    pushPageview();
  };

  history.replaceState = function () {
    originalReplaceState.apply(this, arguments);
    pushPageview();
  };

  window.addEventListener("popstate", pushPageview);
})();

