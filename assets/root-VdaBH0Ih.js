import {
    p as t,
    a,
    q as B,
    t as C,
    w as E,
    v as S,
    M as D,
    L as _,
    S as T,
    x as K,
    O as R,
    i as k,
    y as W,
} from "./chunk-EPOLDU6W-CkoexLYk.js";
import { i as O } from "./utm-ClCK1WqV.js";
import { u as I, I as z } from "./context-DVPZRWQf.js";
const H = [
    "save2zip",
    "httrack",
    "website copier",
    "webcopy",
    "teleport",
    "webzip",
    "offline explorer",
    "webripper",
    "sitesnagger",
    "blackwidow",
    "websiteripper",
    "webwhacker",
    "wget",
    "curl",
    "libwww",
    "httpunit",
    "nutch",
    "headless",
    "phantomjs",
    "nightmare",
    "selenium",
    "webdriver",
    "puppeteer",
    "playwright",
    "cypress",
    "bot",
    "crawler",
    "spider",
    "scraper",
    "slurp",
    "mediapartners",
    "adsbot",
    "baiduspider",
    "yandexbot",
    "sogou",
    "exabot",
    "facebot",
    "ia_archiver",
    "archive.org",
    "wayback",
    "axios/",
    "node-fetch",
    "python-requests",
    "python-urllib",
    "java/",
    "go-http-client",
    "okhttp",
    "apache-httpclient",
    "guzzle",
    "link preview",
    "unfurl",
    "url2png",
    "screenshotbot",
],
    P = [
        "windows nt",
        "macintosh",
        "mac os x",
        "linux x86",
        "linux i686",
        "linux amd64",
        "x11",
        "win64",
        "win32",
    ],
    g = [
        "mobile",
        "android",
        "iphone",
        "ipad",
        "ipod",
        "webos",
        "blackberry",
        "opera mini",
        "opera mobi",
        "iemobile",
        "windows phone",
        "silk",
        "kindle",
        "samsung",
        "huawei",
        "xiaomi",
    ];
function V(e) {
    const s = e.toLowerCase();
    return H.some((r) => s.includes(r));
}
function F() {
    if (typeof window > "u") return !1;
    const e = window.navigator,
        s = (e.userAgent || "").toLowerCase(),
        r = g.some((n) => s.includes(n));
    return !!(
        e.webdriver ||
        window.document?.documentElement?.getAttribute("webdriver") ||
        window.__puppeteer_evaluation_script__ ||
        window.__playwright__ ||
        window.callPhantom ||
        window._phantom ||
        window.__nightmare ||
        window._Selenium_IDE_Recorder ||
        window._selenium ||
        window.callSelenium ||
        window.domAutomation ||
        window.domAutomationController ||
        (!r &&
            ((e.plugins?.length === 0 && !e.languages?.length) ||
                (window.outerWidth === 0 && window.outerHeight === 0)))
    );
}
function q(e) {
    const s = e.toLowerCase(),
        r = g.some((n) => s.includes(n));
    if (typeof window < "u") {
        const n = window.innerWidth <= 1024,
            i = "ontouchstart" in window || navigator.maxTouchPoints > 0,
            o = "orientation" in window || "orientation" in screen;
        return (r || n) && (i || o);
    }
    return r;
}
function U() {
    if (typeof window > "u") return !1;
    try {
        return window.self !== window.top;
    } catch {
        return !0;
    }
}
function Q() {
    if (typeof window > "u") return !1;
    const e = navigator.userAgent.toLowerCase();
    if (
        [
            "fban",
            "fbav",
            "instagram",
            "twitter",
            "line",
            "snapchat",
            "tiktok",
            "whatsapp",
            "telegram",
        ].some((n) => e.includes(n))
    )
        return !1;
    if (["webview", "wv)", "; wv"].some((n) => e.includes(n))) {
        const n = e.includes("chrome"),
            i = e.includes("safari"),
            o = e.includes("mobile");
        if (!n && !i && !o) return !0;
    }
    return !1;
}
function G() {
    if (typeof window > "u") return !1;
    const e = window.navigator;
    if (
        !e.languages ||
        e.languages.length === 0 ||
        e.hardwareConcurrency === void 0
    )
        return !0;
    if (
        !("connection" in e) &&
        !("mozConnection" in e) &&
        !("webkitConnection" in e)
    ) {
        const s = e.userAgent.toLowerCase();
        s.includes("android") || s.includes("iphone");
    }
    return !1;
}
function j() {
    if (typeof window > "u" || typeof navigator > "u")
        return {
            isBlocked: !1,
            reason: null,
            details: "Server-side rendering",
            isMobile: !1,
            userAgent: "",
        };
    const e = navigator.userAgent,
        s = e.toLowerCase();
    if (V(s))
        return {
            isBlocked: !0,
            reason: "bot",
            details: "Bot ou crawler detectado",
            isMobile: !1,
            userAgent: e,
        };
    if (F())
        return {
            isBlocked: !0,
            reason: "headless",
            details: "Navegador headless detectado",
            isMobile: !1,
            userAgent: e,
        };
    if (G())
        return {
            isBlocked: !0,
            reason: "automation",
            details: "Ferramenta de automação detectada",
            isMobile: !1,
            userAgent: e,
        };
    if (U())
        return {
            isBlocked: !0,
            reason: "iframe",
            details: "Acesso via iframe não permitido",
            isMobile: !1,
            userAgent: e,
        };
    if (Q())
        return {
            isBlocked: !0,
            reason: "webview_suspicious",
            details: "WebView suspeito detectado",
            isMobile: !1,
            userAgent: e,
        };
    const r = q(e);
    return !r && (P.some((i) => s.includes(i)) || !r)
        ? {
            isBlocked: !1,
            reason: null,
            details: "Acesso permitido",
            isMobile: !0,
            userAgent: e,
        }
        : {
            isBlocked: !1,
            reason: null,
            details: "Acesso permitido",
            isMobile: !0,
            userAgent: e,
        };
}
function J() {
    typeof document > "u" ||
        document.addEventListener("contextmenu", (e) => (e.preventDefault(), !1));
}
function Y() {
    typeof document > "u" ||
        (document.addEventListener("selectstart", (e) => (e.preventDefault(), !1)),
            document.addEventListener("copy", (e) => (e.preventDefault(), !1)));
}
function X() {
    typeof document > "u" ||
        document.addEventListener("keydown", (e) => {
            if (
                (e.ctrlKey && e.key === "s") ||
                (e.ctrlKey && e.key === "u") ||
                (e.ctrlKey && e.shiftKey && e.key === "I") ||
                (e.ctrlKey && e.shiftKey && e.key === "J") ||
                (e.ctrlKey && e.shiftKey && e.key === "C") ||
                e.key === "F12" ||
                (e.metaKey && e.altKey && e.key === "i") ||
                (e.metaKey && e.altKey && e.key === "j") ||
                (e.metaKey && e.altKey && e.key === "u")
            )
                return (e.preventDefault(), !1);
        });
}
function $() {
    typeof document > "u" ||
        document.addEventListener("dragstart", (e) => (e.preventDefault(), !1));
}
function Z() {
    if (typeof document > "u") return;
    const e = document.createElement("a");
    ((e.href = "/trap"),
        (e.style.cssText =
            "position:absolute;left:-9999px;top:-9999px;visibility:hidden;"),
        (e.className = "download-all hidden-link scraper-trap"),
        (e.textContent = "Download All Content"),
        document.body.appendChild(e));
}
function ee() {
    (J(), Y(), X(), $(), Z());
}
function te(e) {
    return () => { };
}
function se() {
    if (typeof window > "u") return !1;
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1";
}
const L = {
    desktop: t.jsx("svg", {
        className: "w-16 h-16 text-purple-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
        }),
    }),
    bot: t.jsx("svg", {
        className: "w-16 h-16 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
        }),
    }),
    headless: t.jsx("svg", {
        className: "w-16 h-16 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
        }),
    }),
    crawler: t.jsx("svg", {
        className: "w-16 h-16 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
        }),
    }),
    save2zip: t.jsx("svg", {
        className: "w-16 h-16 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
        }),
    }),
    devtools: t.jsx("svg", {
        className: "w-16 h-16 text-yellow-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
        }),
    }),
    iframe: t.jsx("svg", {
        className: "w-16 h-16 text-yellow-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
        }),
    }),
    webview_suspicious: t.jsx("svg", {
        className: "w-16 h-16 text-yellow-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
        }),
    }),
    automation: t.jsx("svg", {
        className: "w-16 h-16 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5,
        children: t.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
        }),
    }),
},
    ne = {
        desktop: "mobileOnly",
        bot: "botDetected",
        headless: "headlessBrowser",
        crawler: "crawler",
        save2zip: "scraper",
        devtools: "devtools",
        iframe: "iframe",
        webview_suspicious: "suspiciousBrowser",
        automation: "automation",
    };
function re({ reason: e, details: s }) {
    const { t: r } = I(),
        n = ne[e] || "botDetected",
        i = r.cloaker[n],
        o = L[e] || L.bot;
    return t.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6",
        style: {
            background: "linear-gradient(180deg, #040607 0%, #0a0d10 100%)",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        },
        children: t.jsxs("div", {
            className: "w-full max-w-md text-center",
            style: {
                background: "rgba(7, 9, 10, 0.9)",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                borderRadius: "24px",
                padding: "40px 24px",
            },
            children: [
                t.jsx("div", {
                    className: "flex justify-center mb-6",
                    children: t.jsx("div", {
                        className: "p-4 rounded-full",
                        style: {
                            background: "rgba(255, 255, 255, 0.05)",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                        },
                        children: o,
                    }),
                }),
                t.jsx("h1", {
                    className: "text-2xl font-bold text-white mb-4",
                    style: { letterSpacing: "-0.02em" },
                    children: i.title,
                }),
                t.jsx("p", {
                    className: "text-gray-400 text-base mb-6 leading-relaxed",
                    style: { letterSpacing: "-0.01em" },
                    children: i.message,
                }),
                e === "desktop" &&
                t.jsxs("div", {
                    className: "mt-6 p-4 rounded-xl",
                    style: {
                        background: "rgba(74, 55, 182, 0.15)",
                        border: "1px solid rgba(74, 55, 182, 0.3)",
                    },
                    children: [
                        t.jsxs("div", {
                            className: "flex items-center justify-center gap-3 mb-3",
                            children: [
                                t.jsx("svg", {
                                    className: "w-5 h-5 text-purple-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: t.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                                    }),
                                }),
                                t.jsx("span", {
                                    className: "text-purple-300 font-medium",
                                    children: "Como acessar",
                                }),
                            ],
                        }),
                        t.jsxs("ol", {
                            className: "text-left text-sm text-gray-400 space-y-2 pl-4",
                            children: [
                                t.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        t.jsx("span", {
                                            className: "text-purple-400 font-semibold",
                                            children: "1.",
                                        }),
                                        "Abra a câmera do seu celular",
                                    ],
                                }),
                                t.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        t.jsx("span", {
                                            className: "text-purple-400 font-semibold",
                                            children: "2.",
                                        }),
                                        "Escaneie o QR code abaixo",
                                    ],
                                }),
                                t.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        t.jsx("span", {
                                            className: "text-purple-400 font-semibold",
                                            children: "3.",
                                        }),
                                        "Acesse o link que aparecer",
                                    ],
                                }),
                            ],
                        }),
                        t.jsx("div", {
                            className:
                                "mt-4 mx-auto w-32 h-32 rounded-lg flex items-center justify-center",
                            style: { background: "white" },
                            children: t.jsx("div", {
                                className: "grid grid-cols-5 gap-1 p-2",
                                children: Array.from({ length: 25 }, (d, u) =>
                                    t.jsx(
                                        "div",
                                        {
                                            className: `w-4 h-4 ${[0, 1, 2, 4, 5, 6, 10, 12, 14, 18, 19, 20, 22, 23, 24].includes(u) ? "bg-black" : "bg-white"}`,
                                            style: { borderRadius: "2px" },
                                        },
                                        u,
                                    ),
                                ),
                            }),
                        }),
                        t.jsx("p", {
                            className: "text-xs text-gray-500 mt-2",
                            children: "Ou copie o link e envie para seu celular",
                        }),
                    ],
                }),
                s && !1,
                t.jsx("div", {
                    className: "mt-8 pt-6 border-t border-gray-800",
                    children: t.jsx("p", {
                        className: "text-xs text-gray-600",
                        children: "Protegido por STALKEIA APP Security",
                    }),
                }),
            ],
        }),
    });
}
function ie({
    children: e,
    disabled: s = !1,
    onBlocked: r,
    blockedComponent: n,
    detectDevTools: i = !0,
}) {
    const [o, d] = a.useState(!1),
        [u, p] = a.useState(null),
        [N, w] = a.useState(""),
        [A, x] = a.useState(!0),
        [h, M] = a.useState(!1),
        v = B(),
        c = C(),
        f = a.useCallback(() => {
            c.pathname !== "/white-page" && v("/white-page", { replace: !0 });
        }, [v, c.pathname]),
        b = a.useCallback(() => {
            !h &&
                !s &&
                (d(!0),
                    p("devtools"),
                    w("DevTools opened"),
                    r?.({
                        isBlocked: !0,
                        reason: "devtools",
                        details: "DevTools opened",
                        isMobile: !1,
                        userAgent: navigator.userAgent,
                    }),
                    f());
        }, [h, s, r, f]);
    return (
        a.useEffect(() => {
            const m = se();
            if ((M(m), m || s)) {
                x(!1);
                return;
            }
            if (c.pathname === "/white-page") {
                x(!1);
                return;
            }
            const l = j();
            (l.isBlocked ? (d(!0), p(l.reason), w(l.details), r?.(l), f()) : ee(),
                x(!1));
            let y;
            return (
                i && !m && (y = te(b)),
                () => {
                    y?.();
                }
            );
        }, [s, i, b, r, c.pathname, f]),
        a.useEffect(() => {
            if (h || s || o || c.pathname === "/white-page") return;
            const m = setTimeout(() => {
                const l = j();
                l.isBlocked && !o && (d(!0), p(l.reason), w(l.details), r?.(l), f());
            }, 3e3);
            return () => clearTimeout(m);
        }, [h, s, o, r, c.pathname, f]),
        A && c.pathname !== "/white-page"
            ? t.jsx("div", {
                className: "min-h-screen flex items-center justify-center",
                style: { background: "#040607" },
                children: t.jsxs("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                        t.jsx("div", {
                            className:
                                "w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin",
                        }),
                        t.jsx("p", {
                            className: "text-gray-500 text-sm",
                            children: "Verificando...",
                        }),
                    ],
                }),
            })
            : o && u && c.pathname !== "/white-page"
                ? n
                    ? t.jsx(t.Fragment, { children: n })
                    : t.jsx(re, { reason: u, details: N })
                : t.jsx(t.Fragment, { children: e })
    );
}
const ce = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600&display=swap",
    },
    {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "shortcut icon", href: "/favicon.png" },
    { rel: "apple-touch-icon", href: "/favicon.png" },
];
function de() {
    return [
        { charSet: "utf-8" },
        {
            name: "viewport",
            content:
                "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
            httpEquiv: "Cache-Control",
            content: "no-cache, no-store, must-revalidate",
        },
        { httpEquiv: "Pragma", content: "no-cache" },
        { httpEquiv: "Expires", content: "0" },
    ];
}
function ue({ children: e }) {
    return t.jsxs("html", {
        lang: "pt-BR",
        children: [
            t.jsxs("head", {
                children: [
                    t.jsx("meta", { charSet: "utf-8" }),
                    t.jsx("meta", {
                        name: "viewport",
                        content:
                            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                    }),
                    t.jsx(D, {}),
                    t.jsx(_, {}),
                ],
            }),
            t.jsxs("body", {
                className: "font-inter antialiased",
                children: [e, t.jsx(T, {}), t.jsx(K, {})],
            }),
        ],
    });
}
const fe = E(function () {
    return (
        a.useEffect(() => {
            O();
        }, []),
        t.jsx(z, {
            children: t.jsx(ie, {
                detectDevTools: !0,
                onBlocked: (s) => {
                    console.log("🚫 [CLOAKER] Access blocked:", s.reason, s.details);
                },
                children: t.jsx(R, {}),
            }),
        })
    );
}),
    pe = S(function ({ error: s }) {
        if (k(s) && s.status === 404) return t.jsx(W, { to: "/", replace: !0 });
        let r = "Oops!",
            n = "Ocorreu um erro inesperado.",
            i;
        return (
            k(s) && ((r = "Erro"), (n = s.statusText || n)),
            t.jsx("main", {
                className:
                    "min-h-screen bg-[#040607] flex items-center justify-center p-4",
                children: t.jsxs("div", {
                    className: "text-center text-white",
                    children: [
                        t.jsx("h1", { className: "text-4xl font-bold mb-4", children: r }),
                        t.jsx("p", { className: "text-gray-400", children: n }),
                        i,
                    ],
                }),
            })
        );
    });
export {
    pe as ErrorBoundary,
    ue as Layout,
    fe as default,
    ce as links,
    de as meta,
};
