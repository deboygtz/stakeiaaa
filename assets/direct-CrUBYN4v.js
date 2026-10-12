import { z as L, p as e, a as n, w as H } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { u as E } from "./useNavigateWithUTM-1Hi9sm_B.js";
import { u as A } from "./context-DVPZRWQf.js";
import { B as $ } from "./BlockedPopup-RPTI6beX.js";
import { P as W } from "./PreviewBanner-DpTiVZze.js";
import { d as Z, c as J } from "./api-bupDNBJY.js";
import "./utm-ClCK1WqV.js";
function V({ username: t, onCameraClick: i, onNewMessageClick: s }) {
  const r = E(),
    [c] = L(),
    o = t.replace(/^@+/, "").trim().toLowerCase(),
    u = () => {
      const m = c.get("username");
      r("/feed", { additionalParams: m ? { username: m } : void 0 });
    };
  return e.jsxs("div", {
    className:
      "dm-header flex items-center justify-between px-4 py-3 border-b border-gray-800",
    style: {
      backgroundColor: "#0B1014",
    },
    children: [
      e.jsxs("div", {
        className: "flex items-center space-x-3",
        children: [
          e.jsx("button", {
            type: "button",
            onClick: u,
            className: "p-1 transition-colors",
            "aria-label": "Voltar",
            style: { background: "none", border: "none", cursor: "pointer" },
            children: e.jsx("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#F9F9F9",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: e.jsx("path", { d: "M15 18l-6-6 6-6" }),
            }),
          }),
          e.jsx("h1", {
            id: "header-username",
            style: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontSize: "20px",
              color: "rgb(249, 249, 249)",
              fontWeight: 600,
              letterSpacing: "-0.3px",
            },
            children: o || "instagram",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex items-center space-x-4",
        children: [
          e.jsx("svg", {
            id: "camera-icon-header",
            width: "24",
            height: "24",
            viewBox: "0 0 69 69",
            fill: "none",
            style: { cursor: "pointer" },
            onClick: i,
            children: e.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.8471 0.558896C27.5641 1.4949 25.7521 3.6039 19.6111 13.6319C17.4081 17.2299 15.3201 19.0549 10.7811 21.3459C7.51206 22.9959 3.92306 25.5089 2.80506 26.9299C-2.18494 33.2729 -0.395945 40.6819 7.20506 45.1619C16.6311 50.7169 18.1311 52.0689 21.3811 57.9379C25.9281 66.1469 28.6881 68.4199 34.1131 68.4199C39.7151 68.4199 43.4841 65.3589 47.7611 57.3319C50.5401 52.1179 51.8141 50.8849 58.1341 47.2889C65.8431 42.9029 68.6341 39.4949 68.6341 34.4659C68.6341 29.1849 66.2281 26.1259 58.4791 21.5519C51.9381 17.6909 50.6991 16.4519 47.1581 10.2269C42.1781 1.4739 37.4551 -1.3261 30.8471 0.558896ZM41.2421 12.4199C45.1841 19.3819 49.6631 23.8629 56.6341 27.8189C61.6411 30.6609 62.1341 31.2509 62.1341 34.4039C62.1341 37.6079 61.6531 38.1459 55.6941 41.6109C47.6871 46.2669 46.2451 47.7059 41.6841 55.5939C38.3161 61.4189 37.7551 61.9199 34.6011 61.9199C31.8761 61.9199 30.7941 61.3069 29.3111 58.9199C21.8511 46.9169 21.0491 46.0149 14.8281 42.6199C11.3601 40.7279 7.82105 38.1079 6.96305 36.7999C5.56105 34.6599 5.55806 34.1839 6.93406 32.0839C7.77606 30.7989 11.5491 27.9159 15.3181 25.6769C21.4241 22.0489 22.6481 20.7729 26.5451 13.9609C30.8301 6.4719 30.9931 6.3219 34.5231 6.6179C37.7361 6.8869 38.4661 7.5179 41.2421 12.4199ZM22.9431 26.0559C21.4701 29.8949 26.7831 32.7159 28.9671 29.2539C29.7301 28.0449 29.6571 27.1529 28.7041 26.0039C26.9931 23.9429 23.7431 23.9719 22.9431 26.0559ZM40.0181 25.8619C38.9531 28.6369 40.0901 30.9199 42.5391 30.9199C45.6931 30.9199 47.4801 28.1439 45.7041 26.0039C44.0621 24.0259 40.7541 23.9429 40.0181 25.8619ZM40.0651 37.4749C36.5741 39.7759 31.7631 39.9849 29.0751 37.9519C28.0081 37.1439 26.0901 36.4689 24.8141 36.4519C22.9831 36.4269 22.5621 36.8859 22.8141 38.6359C23.3121 42.0869 29.1181 45.4199 34.6341 45.4199C42.3761 45.4199 49.6601 39.1099 44.8751 36.5489C43.4611 35.7919 42.2691 36.0219 40.0651 37.4749Z",
              fill: "#F9F9F9",
            }),
          }),
          e.jsxs("svg", {
            id: "new-message-icon",
            "aria-label": "Nova mensagem",
            fill: "#F9F9F9",
            height: "24",
            role: "img",
            viewBox: "0 0 24 24",
            width: "24",
            style: { cursor: "pointer" },
            onClick: s,
            children: [
              e.jsx("title", { children: "Nova mensagem" }),
              e.jsx("path", {
                d: "M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952",
                fill: "none",
                stroke: "#F9F9F9",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
              }),
              e.jsx("path", {
                d: "M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z",
                fill: "none",
                stroke: "#F9F9F9",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
              }),
              e.jsx("line", {
                fill: "none",
                stroke: "#F9F9F9",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                x1: "16.848",
                x2: "20.076",
                y1: "3.924",
                y2: "7.153",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function q() {
  return e.jsx("div", {
    className: "absolute left-3 w-5 h-5",
    style: { top: "11px" },
    children: e.jsx("div", {
      style: { width: "20px", height: "20px" },
      children: e.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 500 500",
        width: "500",
        height: "500",
        preserveAspectRatio: "xMidYMid meet",
        style: {
          width: "100%",
          height: "100%",
          transform: "translate3d(0px, 0px, 0px)",
          contentVisibility: "visible",
        },
        children: [
          e.jsxs("defs", {
            children: [
              e.jsx("clipPath", {
                id: "__lottie_element_2",
                children: e.jsx("rect", {
                  width: "500",
                  height: "500",
                  x: "0",
                  y: "0",
                }),
              }),
              e.jsx("g", {
                id: "__lottie_element_3",
                children: e.jsx("g", {
                  transform: "matrix(1,0,0,1,217,229)",
                  opacity: "1",
                  style: { display: "block" },
                  children: e.jsx("g", {
                    opacity: "1",
                    transform: "matrix(1,0,0,1,33,21)",
                    children: e.jsx("path", {
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      fillOpacity: "0",
                      strokeMiterlimit: "4",
                      stroke: "rgb(101,101,101)",
                      strokeOpacity: "1",
                      strokeWidth: "80",
                      d: "M107.43711853027344,-123.74400329589844 C137.5516815185547,-89.05899810791016 165.66978454589844,-50.757450103759766 168.593994140625,2.0230000019073486 C170.96469116210938,46.05605697631836 157.39999389648438,90.08799743652344 123.74400329589844,123.74400329589844 C89.572998046875,157.9149932861328 44.7859992980957,175 0,175 C-44.7859992980957,175 -89.572998046875,157.9149932861328 -123.74400329589844,123.74400329589844 C-157.40899658203125,90.0790023803711 -169.7324676513672,46.09290313720703 -168.59414672851562,1.9889999628067017 C-167.37847900390625,-44.77629852294922 -146.09210205078125,-85.59001159667969 -107.43626403808594,-123.74400329589844 C-74.98016357421875,-155.78973388671875 -38.30464172363281,-175.2530059814453 0.8683412075042725,-174.9969940185547 C39.4625244140625,-174.7449951171875 77.98967742919922,-157.66099548339844 107.43711853027344,-123.74400329589844z",
                    }),
                  }),
                }),
              }),
              e.jsxs("linearGradient", {
                id: "__lottie_element_9",
                spreadMethod: "pad",
                gradientUnits: "userSpaceOnUse",
                x1: "-179.9929962158203",
                y1: "-7.324999809265137",
                x2: "200.80799865722656",
                y2: "8.270000457763672",
                children: [
                  e.jsx("stop", { offset: "1%", stopColor: "rgb(250,17,247)" }),
                  e.jsx("stop", {
                    offset: "18%",
                    stopColor: "rgb(135,30,234)",
                  }),
                  e.jsx("stop", { offset: "52%", stopColor: "rgb(19,43,221)" }),
                  e.jsx("stop", {
                    offset: "85%",
                    stopColor: "rgb(15,124,238)",
                  }),
                  e.jsx("stop", {
                    offset: "99%",
                    stopColor: "rgb(11,206,255)",
                  }),
                ],
              }),
              e.jsx("mask", {
                id: "__lottie_element_3_1",
                maskType: "alpha",
                children: e.jsx("use", { xlinkHref: "#__lottie_element_3" }),
              }),
            ],
          }),
          e.jsx("g", {
            clipPath: "url(#__lottie_element_2)",
            children: e.jsx("g", {
              mask: "url(#__lottie_element_3_1)",
              style: { display: "block" },
              children: e.jsx("g", {
                transform:
                  "matrix(0.28873103857040405,0.9574102759361267,-0.9574102759361267,0.28873103857040405,260.5774841308594,212.34210205078125)",
                opacity: "1",
                children: e.jsx("g", {
                  opacity: "1",
                  transform: "matrix(1,0,0,1,33,21)",
                  children: e.jsx("path", {
                    fill: "url(#__lottie_element_9)",
                    fillOpacity: "1",
                    d: "M155.36000061035156,-155.32899475097656 C198.9080047607422,-111.78099822998047 220.35499572753906,-54.500999450683594 219.69900512695312,2.572000026702881 C219.06300354003906,57.95199966430664 197.61599731445312,113.13800048828125 155.36000061035156,155.3939971923828 C112.45800018310547,198.29600524902344 56.229000091552734,219.7469940185547 -0.0010000000474974513,219.7469940185547 C-56.23099899291992,219.7469940185547 -112.46099853515625,198.29600524902344 -155.36300659179688,155.3939971923828 C-197.6300048828125,113.12699890136719 -219.0749969482422,57.92399978637695 -219.7010040283203,2.5290000438690186 C-220.34500122070312,-54.529998779296875 -198.89999389648438,-111.79199981689453 -155.36300659179688,-155.32899475097656 C-112.14199829101562,-198.5500030517578 -55.39400100708008,-220 1.253999948501587,-219.67799377441406 C57.064998626708984,-219.36099243164062 112.7770004272461,-197.91200256347656 155.36000061035156,-155.32899475097656z",
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
function G({ onBlockedSearch: t }) {
  const { t: i } = A(),
    [s, r] = n.useState(""),
    c = n.useRef(null),
    o = n.useRef(null),
    u = n.useCallback(
      (f) => {
        const h = f.target.value;
        (r(h),
          h.length > 0
            ? o.current ||
            ((o.current = Date.now()),
              c.current && clearTimeout(c.current),
              (c.current = setTimeout(() => {
                (t(), r(""), (o.current = null));
              }, 3e3)))
            : (c.current && (clearTimeout(c.current), (c.current = null)),
              (o.current = null)));
      },
      [t],
    ),
    m = n.useCallback(() => {
      (c.current && (clearTimeout(c.current), (c.current = null)),
        (o.current = null));
    }, []);
  return (
    n.useEffect(
      () => () => {
        c.current && clearTimeout(c.current);
      },
      [],
    ),
    e.jsx("div", {
      className: "px-4 pb-0",
      children: e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx(q, {}),
          e.jsx("input", {
            type: "text",
            placeholder: i.direct.searchPlaceholder,
            value: s,
            onChange: u,
            onBlur: m,
            className:
              "w-full pl-10 pr-3 py-[11px] rounded-full text-[16.5px] bg-[rgb(37,40,45)] text-[rgb(142,147,153)] border-none outline-none",
            style: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            },
          }),
        ],
      }),
    })
  );
}
function K({ children: t, isMusic: i = !1 }) {
  return e.jsx("div", {
    className: `relative speech-bubble ${i ? "speech-bubble-music" : "text-center"}`,
    style: {
      padding: "6px 10px",
      overflow: "visible",
      textAlign: i ? "left" : "center",
    },
    children: e.jsx("div", {
      style: { position: "relative", zIndex: 1 },
      children: t,
    }),
  });
}
function X({ title: t, artist: i }) {
  const s = t === "APT.",
    r = n.useRef(null),
    c = n.useRef(
      `scrollText_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    );
  return (
    n.useEffect(() => {
      if (r.current && !s) {
        const u = r.current.scrollWidth / 2 / 16.5,
          m = c.current,
          f = document.createElement("style");
        return (
          (f.textContent = `
        @keyframes ${m} {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `),
          document.head.appendChild(f),
          (r.current.style.animation = `${m} ${u}s linear infinite`),
          () => {
            document.head.removeChild(f);
          }
        );
      }
    }, [t, s]),
    e.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
        width: "100%",
      },
      children: [
        e.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            width: "100%",
            justifyContent: s ? "center" : void 0,
          },
          children: [
            e.jsxs("svg", {
              fill: "rgb(249, 249, 249)",
              viewBox: "0 0 24 30",
              width: "8",
              height: "10",
              style: { flexShrink: 0, color: "rgb(249, 249, 249)" },
              children: [
                e.jsx("title", {
                  children:
                    "Ícone representando ondas sonoras com três barras verticais que mudam de altura de maneira pulsante",
                }),
                e.jsx("rect", {
                  height: "30",
                  rx: "2",
                  ry: "2",
                  width: "4",
                  y: "0",
                  fill: "rgb(249, 249, 249)",
                }),
                e.jsx("rect", {
                  height: "10",
                  rx: "2",
                  ry: "2",
                  width: "4",
                  x: "10",
                  y: "10",
                  fill: "rgb(249, 249, 249)",
                }),
                e.jsx("rect", {
                  height: "30",
                  rx: "2",
                  ry: "2",
                  width: "4",
                  x: "20",
                  y: "0",
                  fill: "rgb(249, 249, 249)",
                }),
              ],
            }),
            s
              ? e.jsx("span", {
                style: {
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  fontSize: "10px",
                  color: "rgb(249, 249, 249)",
                  lineHeight: 1.2,
                  fontWeight: "bold",
                  textAlign: "center",
                },
                children: t,
              })
              : e.jsx("div", {
                style: {
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: "60px",
                  flex: 1,
                },
                children: e.jsxs("span", {
                  ref: r,
                  className: "music-title-scroll",
                  "data-text": t,
                  style: {
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    fontSize: "10px",
                    color: "rgb(249, 249, 249)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  },
                  children: [
                    t,
                    " ",
                    e.jsx("span", {
                      style: { marginLeft: "20px" },
                      children: t,
                    }),
                  ],
                }),
              }),
          ],
        }),
        e.jsx("span", {
          style: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontSize: "10px",
            color: "rgba(249, 249, 249, 0.7)",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            width: "100%",
            textAlign: "center",
          },
          children: i,
        }),
      ],
    })
  );
}
function Y({ stories: t, onStoryClick: i }) {
  return e.jsxs("div", {
    className: "relative",
    children: [
      e.jsx("div", {
        className:
          "flex space-x-4 stories-container scrollbar-hide overflow-x-auto mt-4",
        style: {
          paddingLeft: "16px",
          paddingRight: "0px",
          scrollBehavior: "smooth",
          width: "calc(100% + 32px)",
        },
        id: "storiesContainer",
        children: t.map((s, r) => {
          const c = s.profilePic || "/images/avatars/perfil-sem-foto.jpeg",
            o = r === t.length - 1;
          return e.jsx(
            "div",
            {
              className: `shrink-0 text-center relative ${o ? "pr-8" : ""}`,
              children: e.jsxs("button", {
                type: "button",
                onClick: () => i(s),
                className: "relative w-fit mx-auto cursor-pointer",
                style: {
                  background: "none",
                  border: "none",
                  padding: "0",
                  paddingTop: "45px",
                  margin: "0",
                  overflow: "visible",
                },
                children: [
                  !s.isLocked &&
                  e.jsx("div", {
                    className: "absolute z-30",
                    style: {
                      top: "10px",
                      left: 0,
                      right: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      height: "40px",
                      overflow: "visible",
                    },
                    children: e.jsx(K, {
                      isMusic: s.isMusicNote,
                      children:
                        s.isMusicNote && s.music
                          ? e.jsx(X, {
                            title: s.music.title,
                            artist: s.music.artist,
                          })
                          : e.jsx("span", {
                            className: "block",
                            style: {
                              position: "relative",
                              zIndex: 1,
                              fontFamily:
                                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                              fontSize: "10px",
                              color: s.isOwn
                                ? "#A8A8A8"
                                : "rgb(249, 249, 249)",
                              lineHeight: 1.2,
                            },
                            children:
                              s.label || (s.isOwn, "Conte as novidades"),
                          }),
                    }),
                  }),
                  e.jsx("div", {
                    className: "mx-auto rounded-full overflow-hidden relative",
                    style: {
                      width: "69px",
                      height: "69px",
                      zIndex: 1,
                      backgroundColor: "rgb(31, 41, 55)",
                      display: "block",
                      transform: "translateZ(0)",
                      WebkitTransform: "translateZ(0)",
                    },
                    children: s.isLocked
                      ? e.jsx("div", {
                        className:
                          "w-full h-full flex items-center justify-center",
                        style: {
                          backgroundColor: "rgb(55, 65, 81)",
                          filter: "blur(2px)",
                        },
                        children: e.jsx("svg", {
                          className: "w-5 h-5 text-white",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          style: { position: "absolute", zIndex: 10 },
                          children: e.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                          }),
                        }),
                      })
                      : e.jsx("img", {
                        alt: s.username,
                        src: c,
                        loading: r < 3 ? "eager" : "lazy",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          backgroundColor: "transparent",
                          margin: 0,
                          padding: 0,
                          opacity: 0.8,
                          borderRadius: "50%",
                          clipPath: "circle(50%)",
                          WebkitClipPath: "circle(50%)",
                        },
                        onError: (u) => {
                          const m = u.target;
                          if (
                            !m.src.includes("av-fallback-") &&
                            !m.src.includes("perfil-sem-foto") &&
                            !m.src.includes("perfil-espionado")
                          )
                            if (s.isOwn)
                              m.src = "/images/avatars/perfil-espionado.jpeg";
                            else {
                              const f = ((r - 1) % 14) + 1;
                              ((m.src = `/images/avatars/fallback/av-fallback-${f}.jpg`),
                                (m.style.filter = "blur(5px)"),
                                (m.style.webkitFilter = "blur(5px)"));
                            }
                        },
                      }),
                  }),
                  e.jsx("p", {
                    className: "text-center text-sm mt-1 w-16",
                    style: {
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                      marginLeft: "auto",
                      marginRight: "auto",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      color: s.isOwn ? "#A8A8A8" : "rgb(209, 213, 219)",
                      fontSize: "12.18px",
                    },
                    children: s.displayName,
                  }),
                ],
              }),
            },
            s.username,
          );
        }),
      }),
      e.jsx("div", {
        className:
          "absolute top-0 right-0 h-full w-8 bg-linear-to-l from-[#0B1014] to-transparent pointer-events-none",
      }),
    ],
  });
}
function Q({ opacity: t = 0.4 }) {
  return e.jsx("svg", {
    width: "19.2",
    height: "19.2",
    viewBox: "0 0 66 64",
    fill: "none",
    style: { opacity: t },
    children: e.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24.743 0.806959C22.974 1.01696 20.854 2.54296 18.826 5.06696C16.383 8.10696 14.966 9.00096 12.583 9.00396C10.887 9.00596 8.01 9.91596 6.19 11.026C0.838 14.289 0 17.748 0 36.582C0 51.783 0.187 53.561 2.159 57.069C5.68 63.333 8.651 64 33.052 64C55.815 64 58.402 63.529 63 58.551C65.45 55.898 65.506 55.477 65.811 37.491C66.071 22.148 65.858 18.626 64.513 16.024C62.544 12.217 57.524 9.00896 53.527 9.00396C51.336 9.00096 49.627 7.96696 47.027 5.07196C43.551 1.19996 43.384 1.13796 35.5 0.811961C31.1 0.629961 26.259 0.627959 24.743 0.806959ZM43.216 9.57496C44.622 12.66 48.789 15 52.878 15C54.903 15 56.518 15.843 57.927 17.635C59.831 20.055 60 21.594 60 36.524C60 59.297 62.313 57.5 33.052 57.5C3.655 57.5 6 59.35 6 36.204C6 20.562 6.122 19.499 8.174 17.314C9.469 15.936 11.511 15 13.224 15C17.15 15 21.289 12.696 22.954 9.58496C24.282 7.10396 24.693 6.99996 33.19 6.99996C41.731 6.99996 42.084 7.09096 43.216 9.57496ZM27 19.722C15.76 23.945 13.183 40.493 22.611 47.908C30.698 54.27 42.974 51.753 47.612 42.783C51.201 35.844 48.564 25.701 42.015 21.25C38.771 19.046 30.925 18.247 27 19.722ZM40.077 27.923C46.612 34.459 42.201 45.273 33 45.273C23.799 45.273 19.388 34.459 25.923 27.923C30.039 23.807 35.961 23.807 40.077 27.923Z",
      fill: "#F9F9F9",
    }),
  });
}
function R() {
  return e.jsx("svg", {
    fill: "none",
    stroke: "#F9F9F9",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    style: { filter: "drop-shadow(0 0 6px rgba(0, 0, 0, 1))", opacity: 0.8 },
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    }),
  });
}
function ee(t) {
  if (!t) return 0;
  const i = t.trim().toLowerCase();
  if (i.includes("agora")) return 0;
  const s = i.match(/(\d+)/),
    r = s ? parseInt(s[1]) : 0;
  return i.includes("sem")
    ? r * 7 * 24 * 60
    : i.includes("min")
      ? r
      : i.includes("h")
        ? r * 60
        : i.includes("d")
          ? r * 24 * 60
          : 0;
}
function te(t) {
  if (t === 0) return " • Agora";
  if (t < 60) return ` • ${t} min`;
  const i = Math.floor(t / 60);
  return i >= 24 ? ` • ${Math.floor(i / 24)} d` : ` • ${i} h`;
}
function se({ chat: t, onChatClick: i, initialTime: s }) {
  const [r, c] = n.useState(t.time),
    o = n.useRef(null);
  n.useEffect(() => {
    if (t.isLocked) return;
    const l = `chat-time-start-${t.id}`;
    let a = localStorage.getItem(l);
    if (!a) {
      const C = ee(s || t.time),
        g = Date.now() - C * 60 * 1e3;
      (localStorage.setItem(l, g.toString()), (a = g.toString()));
    }
    o.current = parseInt(a);
    const d = () => {
      if (!o.current) return;
      const C = Math.floor((Date.now() - o.current) / 6e4);
      c(te(C));
    };
    d();
    const v = setInterval(d, 6e4);
    return () => clearInterval(v);
  }, [t.id, t.isLocked, t.time, s]);
  const u = t.isUnread && !t.isLocked,
    m =
      t.profilePic.includes("/images/screenshots/") ||
      t.profilePic.includes("chat1.png") ||
      t.profilePic.includes("chat2.png") ||
      t.profilePic.includes("chat3.png"),
    f = t.profilePic || "/images/avatars/perfil-sem-foto.jpeg",
    h = !t.isLocked && !t.isClickable && !m;
  return e.jsxs("div", {
    className: `chat-item ${u ? "chat-unread" : ""} ${t.isClickable ? "chat-clickable" : ""}`,
    onClick: () => i(t),
    style: {
      display: "flex",
      alignItems: "center",
      padding: "12px 0",
      cursor: t.isClickable || t.isLocked ? "pointer" : "default",
    },
    children: [
      e.jsxs("div", {
        className: "chat-avatar-container",
        style: { position: "relative", marginRight: "12px", flexShrink: 0 },
        children: [
          e.jsx("div", {
            className: `chat-avatar-wrapper ${t.isLocked ? "locked-avatar" : ""}`,
            style: {
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              overflow: t.isLocked ? "visible" : "hidden",
              position: "relative",
              filter: t.isLocked ? "blur(5px)" : "none",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            },
            children: t.isLocked
              ? t.profilePic && !t.profilePic.includes("perfil-sem-foto")
                ? e.jsx("img", {
                  src: t.profilePic,
                  alt: t.displayName,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    opacity: 0.8,
                  },
                  onError: (l) => {
                    const a = l.target;
                    ((a.style.display = "none"),
                      a.parentElement &&
                      (a.parentElement.style.backgroundColor =
                        "rgb(75, 85, 99)"));
                  },
                })
                : e.jsx("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgb(75, 85, 99)",
                    borderRadius: "50%",
                  },
                })
              : e.jsxs(e.Fragment, {
                children: [
                  h &&
                  e.jsx("div", {
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                    },
                    children: e.jsx(R, {}),
                  }),
                  e.jsx("img", {
                    src: f,
                    alt: t.displayName,
                    className: "chat-photo",
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      clipPath: "circle(50%)",
                      WebkitClipPath: "circle(50%)",
                      opacity: 0.8,
                      filter: "blur(5px)",
                      WebkitFilter: "blur(5px)",
                      position: "relative",
                      zIndex: 1,
                    },
                    onError: (l) => {
                      const a = l.target;
                      !a.src.includes("av-fallback-") &&
                        !a.src.includes("perfil-sem-foto") &&
                        ((a.src = "/images/avatars/perfil-sem-foto.jpeg"),
                          (a.style.filter = "blur(5px)"),
                          (a.style.webkitFilter = "blur(5px)"));
                    },
                  }),
                ],
              }),
          }),
          t.isLocked &&
          e.jsx("div", {
            className: "chat-lock-icon",
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              pointerEvents: "none",
              overflow: "visible",
            },
            children: e.jsx(R, {}),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "chat-content",
        style: { flex: 1, minWidth: 0 },
        children: [
          e.jsx("div", {
            className: "chat-item-header",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            },
            children: e.jsx("h3", {
              className: "chat-item-name",
              style: {
                fontSize: "15px",
                fontWeight: u ? 600 : 400,
                color: u ? "#F9F9F9" : "#F6F6F6",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
              children: t.displayName,
            }),
          }),
          e.jsxs("div", {
            className: "chat-message-row",
            style: {
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
              marginTop: "3px",
            },
            children: [
              e.jsx("span", {
                className: "chat-message-text",
                style: {
                  color: u ? "#F9F9F9" : "#A8A8A8",
                  fontWeight: u ? 600 : 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.3px",
                  marginRight: "4px",
                },
                children: t.lastMessage,
              }),
              e.jsx("span", {
                className: "chat-time",
                style: { color: "#A8A8A8", fontWeight: 400, flexShrink: 0 },
                children: r,
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "chat-actions",
        style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginLeft: "12px",
          flexShrink: 0,
        },
        children: [
          u &&
          e.jsx("div", {
            className: "chat-unread-dot",
            style: {
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "rgb(81, 122, 255)",
            },
          }),
          e.jsx(Q, { opacity: u ? 1 : 0.4 }),
        ],
      }),
    ],
  });
}
function ie() {
  return e.jsx("div", {
    className: "flex justify-center items-center py-5",
    children: e.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      className: "animate-spin",
      children: [
        e.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "#F9F9F9",
          strokeWidth: "2",
          strokeOpacity: "0.3",
          fill: "none",
        }),
        e.jsx("path", {
          d: "M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12",
          stroke: "#F9F9F9",
          strokeWidth: "2",
          strokeLinecap: "round",
          fill: "none",
        }),
      ],
    }),
  });
}
function ae({
  chats: t,
  onChatClick: i,
  onLoadMore: s,
  onPedidosClick: r,
  hasMore: c,
  isLoading: o,
}) {
  const [u, m] = n.useState(7),
    [f, h] = n.useState(!1),
    l = n.useRef(!1),
    a = n.useRef(null),
    d = n.useRef(u);
  ((d.current = u),
    n.useEffect(() => {
      const g = () => {
        if (l.current || o) return;
        const N = window.scrollY + window.innerHeight,
          M = document.documentElement.scrollHeight;
        N >= M - 100 &&
          (d.current < t.length
            ? ((l.current = !0),
              h(!0),
              (a.current = setTimeout(() => {
                (m((S) => Math.min(S + 5, t.length)), h(!1), (l.current = !1));
              }, 1200)))
            : c &&
            ((l.current = !0),
              h(!0),
              (a.current = setTimeout(() => {
                (h(!1), (l.current = !1), s());
              }, 1500))));
      };
      return (
        window.addEventListener("scroll", g, { passive: !0 }),
        () => {
          (window.removeEventListener("scroll", g),
            a.current && clearTimeout(a.current));
        }
      );
    }, [t.length, c, s, o]));
  const { t: v } = A(),
    C = n.useCallback(
      (g) => {
        if (g.isLocked) {
          i(g);
          return;
        }
        i(g);
      },
      [i],
    );
  return e.jsxs("div", {
    className: "px-4 pb-16",
    children: [
      e.jsxs("div", {
        className: "flex justify-between items-center py-3 mt-2",
        children: [
          e.jsx("h2", {
            className: "text-lg font-semibold text-white",
            style: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            },
            children: v.direct.messagesHeader,
          }),
          e.jsxs("button", {
            type: "button",
            onClick: r,
            className:
              "text-sm text-[rgb(81,122,255)] font-normal bg-transparent border-none cursor-pointer",
            style: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            },
            children: [v.direct.requests, " (4)"],
          }),
        ],
      }),
      t.slice(0, u).map((g) => e.jsx(se, { chat: g, onChatClick: C }, g.id)),
      (o || f) && e.jsx(ie, {}),
    ],
  });
}
function ge({ }) {
  return [
    { title: "STALKEA: Stalkea Instagram | Ver Curtidas e Atividades do Cônjuge" },
    {
      name: "description",
      content:
        "Descubra como stalkea um perfil no Instagram e ver curtidas, seguidores e atividades de forma simples. Analise interações e descubra o que acontece no perfil.",
    },
    {
      name: "keywords",
      content:
        "stalkea, stalkea ai, stalkeia ia, stalkear instagram, ver curtidas instagram, stalkear cônjuge instagram, ver atividades instagram, stalkear perfil instagram",
    },
  ];
}
function I(t) {
  return !t || t.length === 0
    ? "xxx*****"
    : t.includes("*")
      ? t
      : (t.length >= 3 ? t.substring(0, 3) : t) + "*****";
}
function re() {
  const t = new Date(),
    i = t.getDate().toString().padStart(2, "0"),
    s = (t.getMonth() + 1).toString().padStart(2, "0");
  return `${i}/${s}❤️`;
}
const T = "direct_read_chats";
function O() {
  if (typeof window > "u") return new Set();
  try {
    const t = localStorage.getItem(T);
    if (t) return new Set(JSON.parse(t));
  } catch {
    console.warn("Error reading read chats from localStorage");
  }
  return new Set();
}
function ne(t) {
  if (!(typeof window > "u"))
    try {
      const i = O();
      (i.add(t), localStorage.setItem(T, JSON.stringify([...i])));
    } catch {
      console.warn("Error saving read chat to localStorage");
    }
}
function oe(t, i) {
  const s = [],
    r = [
      "Conte as novidades",
      "Preguiça Hoje 🥱🥱",
      "O vontde fudê a 3 😈",
      re(),
      "alguém?? #tedio",
      "Já não aguento mais!",
      "👀",
    ],
    c = [
      { title: "Coração Partido (Ao Vivo)", artist: "Grupo Menos É Mais" },
      {
        title: "365 Dias (Vida Mansa)",
        artist: "MC Marks, MC Ryan SP, MC Jvila, MC Bruno MS, MC Magal",
      },
      { title: "APT.", artist: "Rosé & Bruno Mars" },
      { title: "What's I've Done", artist: "Link Park" },
      {
        title: "Oh Garota Eu Quero Você Só Pra Mim",
        artist: "Oruam, Zé Felipe, MC Tuto, MC Rodrigo Do CN",
      },
    ];
  s.push({
    username: t?.username || "user",
    displayName: "Sua nota",
    profilePic: t?.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
    hasStory: !1,
    isOwn: !0,
    label: r[0],
  });
  const o = i.filter((a) => a.username).slice(0, 9),
    u =
      typeof window < "u" ? localStorage.getItem("direct_stories_order") : null;
  if (u)
    try {
      const a = JSON.parse(u);
      o.sort((d, v) => {
        const C = a.indexOf(d.username),
          g = a.indexOf(v.username);
        return (C === -1 ? 999 : C) - (g === -1 ? 999 : g);
      });
    } catch { }
  else {
    for (let a = o.length - 1; a > 0; a--) {
      const d = Math.floor(Math.random() * (a + 1));
      [o[a], o[d]] = [o[d], o[a]];
    }
    typeof window < "u" &&
      localStorage.setItem(
        "direct_stories_order",
        JSON.stringify(o.map((a) => a.username)),
      );
  }
  let m = 0,
    f = 1;
  o.forEach((a, d) => {
    const v = d === o.length - 1,
      C = d === 1 || d === 4 || d === 6 || d === 7 || v;
    let g = r[f % r.length];
    (g === "O vontde fudê a 3 😈" && (f++, (g = r[f % r.length])),
      C || f++,
      s.push({
        username: a.username,
        displayName: I(a.username),
        profilePic: a.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
        hasStory: !0,
        isMusicNote: C,
        music: C ? c[m++ % c.length] : void 0,
        label: C ? void 0 : g,
      }),
      d === 1 &&
      s.push({
        username: "swing_special",
        displayName: "Swi*******",
        profilePic: "/images/screenshots/StorySwing.png",
        hasStory: !0,
        label: "O vontde fudê a 3 😈",
      }));
  });
  let h = null;
  if (typeof window < "u") {
    try {
      const a = localStorage.getItem("nearby_cities");
      if (a) {
        const d = JSON.parse(a);
        d.length > 0 && (h = d[0]);
      }
    } catch { }
    h || (h = localStorage.getItem("user_city"));
  }
  const l = h && h !== "sua cidade" ? `📍💦 ${h} ` : "📍💦";
  return (
    s.push({
      username: "marc_special",
      displayName: "Marc*******",
      profilePic: "/images/screenshots/playboy.jpg",
      hasStory: !0,
      label: l,
    }),
    s
  );
}
function le(t, i) {
  const s = [],
    r = [
      {
        id: "chat_15",
        displayName: "Fer*****",
        profilePic: "/images/screenshots/chat1.png",
        lastMessage: `${i?.full_name?.split(" ")[0] || i?.username || "vc"} adivinha o que vc esqueceu aqui? kkkkk`,
        time: " • Agora",
        isUnread: !0,
        isClickable: !0,
        chatIndex: 1,
      },
      {
        id: "chat_17",
        displayName: I(t[0]?.username || "usuario"),
        profilePic:
          t[0]?.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
        lastMessage: "Encaminhou um reel de jonas.milgrau",
        time: " • 33 min",
        isUnread: !0,
        isClickable: !0,
        chatIndex: 5,
      },
      {
        id: "chat_18",
        displayName: I(t[1]?.username || "usuario"),
        profilePic:
          t[1]?.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
        lastMessage: "Blz depois a gente se fala",
        time: " • 2 h",
        isUnread: !1,
        isClickable: !0,
        chatIndex: 4,
      },
      {
        id: "chat_16",
        displayName: "And*****",
        profilePic: "/images/screenshots/chat2.png",
        lastMessage: "Reagiu com 👍 à sua mensagem",
        time: " • 6 h",
        isUnread: !1,
        isClickable: !0,
        chatIndex: 2,
      },
      {
        id: "chat_19",
        displayName: "𝕭𝖗𝖚****",
        profilePic: "/images/screenshots/chat3.png",
        lastMessage: "4 novas mensagens",
        time: " • 22 h",
        isUnread: !0,
        isClickable: !0,
        chatIndex: 3,
      },
    ],
    c = O();
  s.push(
    ...r.map((l) => ({
      ...l,
      isLocked: !1,
      username: l.id,
      isUnread: l.isUnread && !c.has(l.id),
    })),
  );
  const o = [
    "Enviou um reel de dr.diegooficial",
    "Enviado sexta-feira",
    "Enviou uma mensagem de voz",
    "kkkkkkkkkk",
    "Curtiu sua mensagem",
    "🔥🔥",
    "Enviado",
    "Enviado segunda-feira",
    "Delícia você 😈 😈",
    "Curtiu sua mensagem",
    "Enviado quinta-feira",
    "Ah sim entendi",
    "😈😈",
  ],
    u = [
      "2 d",
      "2 d",
      "2 d",
      "2 d",
      "2 d",
      "3 d",
      "3 d",
      "3 d",
      "4 d",
      "4 d",
      "6 d",
      "1 sem",
      "2 sem",
    ],
    m = t.slice(2),
    f = 7,
    h = u.length;
  for (let l = 0; l < h; l++) {
    const d = l < f && l < m.length ? m[l] : null;
    s.push({
      id: `locked_${l}`,
      username: d?.username || `user_${l}`,
      displayName: d ? I(d.username) : "*****",
      profilePic: d?.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
      lastMessage: o[l % o.length],
      time: ` • ${u[l % u.length]}`,
      isUnread: !1,
      isLocked: !0,
      isClickable: !1,
    });
  }
  return s;
}
const xe = H(function () {
  const [i] = L(),
    s = E(),
    r = i.get("username") || "",
    [c, o] = n.useState(r),
    [u, m] = n.useState(null),
    [f, h] = n.useState([]),
    [l, a] = n.useState([]),
    [d, v] = n.useState({ isOpen: !1, action: "" }),
    [C, g] = n.useState(!1),
    [N, M] = n.useState(!1),
    S =
      typeof window < "u" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");
  (n.useEffect(() => {
    localStorage.getItem("cta_timer_expired");
  }, [s]),
    n.useEffect(() => {
      async function p() {
        const w =
          r ||
          localStorage.getItem("username") ||
          localStorage.getItem("espionado_username");
        if (!(S || !w))
          try {
            const x = await Z();
            if (!x || x === "unknown") return;
            const y = await J(x, w);
            if (
              y.exists &&
              !y.canSearch &&
              y.blockReason === "different_handle"
            ) {
              if (
                (console.log(
                  "🚫 [DIRECT IP CHECK] User blocked:",
                  y.blockReason,
                ),
                  y.leadData?.lastSpiedProfile || y.leadData?.spiedProfile)
              ) {
                const k =
                  y.leadData.lastSpiedProfile || y.leadData.spiedProfile;
                try {
                  const j = JSON.parse(
                    localStorage.getItem("instagram_profile") || "{}",
                  );
                  j.username === k?.username &&
                    Object.assign(k, {
                      biography: k.biography || j.biography || "",
                      profile_pic_url:
                        k.profile_pic_url || j.profile_pic_url || "",
                    });
                } catch { }
                (localStorage.setItem(
                  "blocked_previous_profile",
                  JSON.stringify(k),
                ),
                  localStorage.setItem(
                    "blocked_previous_username",
                    k?.username || "",
                  ),
                  localStorage.setItem("espionado_username", k?.username || ""),
                  localStorage.setItem("instagram_profile", JSON.stringify(k)));
              }
              return;
            }
          } catch (x) {
            console.warn("IP status check failed on direct:", x);
          }
      }
      p();
    }, [r, s, S]),
    n.useEffect(() => {
      let p = r;
      if (!p) {
        const _ =
          localStorage.getItem("username") ||
          localStorage.getItem("espionado_username");
        _ && ((p = _), o(_));
      }
      const w = localStorage.getItem("instagram_profile");
      let x = null;
      if (w)
        try {
          ((x = JSON.parse(w)),
            m(x),
            !p && x?.username && ((p = x.username), o(x.username)));
        } catch {
          console.warn("Error parsing profile data");
        }
      if (!p) {
        s("/");
        return;
      }
      let y = [];
      const j =
        localStorage.getItem(`chaining_results_${p}`) ||
        localStorage.getItem("chaining_results"),
        P =
          localStorage.getItem(`instagram_followers_${p}`) ||
          localStorage.getItem("instagram_followers") ||
          localStorage.getItem("followers");
      if (j)
        try {
          ((y = JSON.parse(j)),
            console.log("📦 [DIRECT] Loaded chaining data:", y.length));
        } catch {
          console.warn("Error parsing chaining data");
        }
      if (y.length === 0 && P)
        try {
          ((y = JSON.parse(P)),
            console.log("📦 [DIRECT] Loaded followers data:", y.length));
        } catch {
          console.warn("Error parsing followers data");
        }
      (h(oe(x, y)), a(le(y, x)), M(!0));
    }, [r, s]));
  const b = n.useCallback((p) => {
    v({ isOpen: !0, action: p });
  }, []),
    U = n.useCallback(() => {
      v({ isOpen: !1, action: "" });
    }, []),
    B = n.useCallback(
      (p) => {
        if (p.isLocked) {
          b("desbloquear essa conversa");
          return;
        }
        p.isClickable &&
          p.chatIndex &&
          (ne(p.id),
            a((w) => w.map((x) => (x.id === p.id ? { ...x, isUnread: !1 } : x))),
            sessionStorage.setItem(
              `chat-${p.chatIndex}-user-name`,
              p.displayName,
            ),
            sessionStorage.setItem(
              `chat-${p.chatIndex}-user-photo`,
              p.profilePic,
            ),
            s(`/chat/${p.chatIndex}`));
      },
      [b, s],
    ),
    z = n.useCallback(
      (p) => {
        p.isOwn || b("Visualizar story");
      },
      [b],
    ),
    D = n.useCallback(() => {
      b("carregar mais mensagens");
    }, [b]),
    F = n.useCallback(() => {
      const p = new URLSearchParams(i);
      window.location.href = `/cta?${p.toString()}`;
    }, [i]);
  return N
    ? e.jsxs("div", {
      className: "dm-screen",
      style: {
        fontFamily:
          '"Arbitare Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      },
      children: [
        e.jsxs("div", {
          className: "dm-panel",
          children: [
            e.jsx(V, {
              username: c,
              onCameraClick: () => b("Câmera"),
              onNewMessageClick: () => b("Nova mensagem"),
            }),
            e.jsx(G, { onBlockedSearch: () => b("Meta AI") }),
            e.jsx(Y, { stories: f, onStoryClick: z }),
            e.jsx(ae, {
              chats: l,
              onChatClick: B,
              onLoadMore: D,
              onPedidosClick: () => b("Pedidos"),
              hasMore: !0,
              isLoading: C,
            }),
            e.jsx(W, { onGoToCTA: F, bottomPosition: "0px" }),
          ],
        }),
        e.jsx("div", {
          className: "dm-right-panel",
          children: e.jsxs("div", {
            className: "dm-placeholder",
            children: [
              e.jsx("svg", { viewBox: "0 0 24 24", fill: "none", width: "72", height: "72", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" }) }),
              e.jsx("h2", { className: "dm-ph-title", children: "Suas mensagens" }),
              e.jsx("p", { className: "dm-ph-sub", children: "Envie mensagens privadas para algu\u00e9m" }),
            ],
          }),
        }),
        e.jsx($, {
          isOpen: d.isOpen,
          action: d.action,
          onClose: U,
          onGoToCTA: F,
        }),
      ],
    })
    : e.jsx("div", {
      className: "min-h-screen bg-[#0b1014] flex items-center justify-center",
      children: e.jsx("div", {
        className:
          "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500",
      }),
    });
});
export { xe as default, ge as meta };
