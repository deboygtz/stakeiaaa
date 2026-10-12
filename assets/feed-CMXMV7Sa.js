import { z as fe, p as e, a as i, w as Se } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { u as he } from "./useNavigateWithUTM-1Hi9sm_B.js";
import { u as pe } from "./context-DVPZRWQf.js";
import { i as J, j as Pe, d as Fe, c as Ie, h as Ee } from "./api-bupDNBJY.js";
import { P as Me } from "./PreviewBanner-DpTiVZze.js";
import { B as Le } from "./BlockedPopup-RPTI6beX.js";
import "./random-Bp_wQn4x.js";
import "./utm-ClCK1WqV.js";
function Ae({
  isHidden: s,
  unreadMessages: g,
  onMessagesClick: h,
  onNotificationsClick: l,
}) {
  const m = he(),
    [v] = fe(),
    S = () => {
      // window.dataLayer.push({
      //   event: "pageview",
      //   page_location: `${window.location.origin}/direct${window.location.search || ""}`,
      //   page_title: "direct",
      //   page: {
      //     url: `${window.location.origin}/direct${window.location.search || ""}`,
      //     title: "direct",
      //   },
      // });
      const E = v.get("username");
      m("/direct", { additionalParams: E ? { username: E } : void 0 });
    };
  return e.jsxs("header", {
    className: `fd-header fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-[#0b1014] flex items-center justify-between transition-transform duration-300 ${s ? "-translate-y-full" : "translate-y-0"}`,
    children: [
      e.jsx("div", {
        className: "flex items-center",
        children: e.jsx("img", {
          alt: "Instagram",
          src: "/images/logos/logo-insta.png",
          className: "h-7 object-contain mt-1",
        }),
      }),
      e.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          e.jsxs("button", {
            type: "button",
            onClick: l,
            className: "relative bg-transparent border-none cursor-pointer",
            children: [
              e.jsxs("svg", {
                "aria-label": "Notifications",
                className: "x1lliihq x1n2onr6 x5n08af",
                fill: "currentColor",
                height: "24",
                role: "img",
                viewBox: "0 0 24 24",
                width: "24",
                children: [
                  e.jsx("title", { children: "Notifications" }),
                  e.jsx("path", {
                    d: "M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z",
                  }),
                ],
              }),
              e.jsx("span", {
                className:
                  "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full",
              }),
            ],
          }),
          e.jsxs("button", {
            type: "button",
            onClick: S,
            className: "relative bg-transparent border-none cursor-pointer",
            children: [
              e.jsxs("svg", {
                "aria-label": "Messages",
                className: "x1lliihq x1n2onr6 x5n08af",
                fill: "currentColor",
                height: "24",
                role: "img",
                viewBox: "0 0 24 24",
                width: "24",
                children: [
                  e.jsx("title", { children: "Messages" }),
                  e.jsx("path", {
                    d: "M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                  }),
                  e.jsx("line", {
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    x1: "7.488",
                    x2: "15.515",
                    y1: "12.208",
                    y2: "7.641",
                  }),
                ],
              }),
              g > 0 &&
              e.jsx("span", {
                className:
                  "absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold px-1",
                children: g,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function De({ stories: s, onStoryClick: g, onAddStoryClick: h }) {
  return e.jsx("div", {
    className: "overflow-x-auto scrollbar-hide",
    style: { padding: "12px 16px" },
    children: e.jsx("div", {
      className: "flex",
      style: { gap: "12px" },
      children: s.map((l, m) =>
        e.jsxs(
          "div",
          {
            className: "flex flex-col items-center shrink-0",
            style: { gap: "4px" },
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => (m === 0 ? h() : g(l)),
                className:
                  "story-button bg-transparent border-none cursor-pointer p-0 w-[79px] h-[79px] min-[390px]:w-[91px] min-[390px]:h-[91px]",
                children:
                  m === 0
                    ? e.jsxs("div", {
                      className: "fd-story-ring fd-story-ring--own rounded-full relative overflow-visible",
                      style: {
                        width: "100%",
                        height: "100%",
                        background: "rgb(31, 41, 55)",
                      },
                      children: [
                        e.jsx("div", {
                          className:
                            "w-full h-full rounded-full overflow-hidden",
                          children: e.jsx("img", {
                            alt: l.displayName,
                            src: l.profilePic,
                            loading: "eager",
                            decoding: "async",
                            className: "w-full h-full object-cover",
                            style: { opacity: 0.8 },
                            onError: (v) => {
                              v.target.src =
                                "/images/avatars/perfil-sem-foto.jpeg";
                            },
                          }),
                        }),
                        e.jsx("div", {
                          className:
                            "absolute flex items-center justify-center rounded-full cursor-pointer",
                          style: {
                            bottom: "-2px",
                            right: "-2px",
                            width: "26px",
                            height: "26px",
                            backgroundColor: "#F9F9F9",
                            border: "2.6px solid rgb(31, 41, 55)",
                            zIndex: 30,
                          },
                          children: e.jsxs("svg", {
                            width: "15",
                            height: "14.5",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "rgb(31, 41, 55)",
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                              e.jsx("line", {
                                x1: "12",
                                y1: "5",
                                x2: "12",
                                y2: "19",
                              }),
                              e.jsx("line", {
                                x1: "5",
                                y1: "12",
                                x2: "19",
                                y2: "12",
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                    : l.isLocked
                      ? e.jsx("div", {
                        className: "w-full h-full rounded-full",
                        style: {
                          padding: "3px",
                          background:
                            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                        },
                        children: e.jsx("div", {
                          className: "w-full h-full rounded-full",
                          style: {
                            background: "rgb(11, 16, 20)",
                            padding: "2px",
                          },
                          children: e.jsx("div", {
                            className:
                              "w-full h-full rounded-full overflow-hidden relative flex items-center justify-center",
                            style: {
                              background: "rgb(55, 65, 81)",
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                            },
                            children: e.jsx("div", {
                              className:
                                "absolute flex items-center justify-center",
                              style: {
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "20px",
                                height: "20px",
                                zIndex: 10,
                              },
                              children: e.jsxs("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  e.jsx("rect", {
                                    x: "3",
                                    y: "11",
                                    width: "18",
                                    height: "11",
                                    rx: "2",
                                    ry: "2",
                                  }),
                                  e.jsx("path", {
                                    d: "M7 11V7a5 5 0 0 1 10 0v4",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      })
                      : e.jsx("div", {
                        className: "w-full h-full rounded-full",
                        style: {
                          padding: "3px",
                          background: l.isCloseFriend
                            ? "#44B051"
                            : "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                        },
                        children: e.jsx("div", {
                          className: "w-full h-full rounded-full",
                          style: {
                            background: "rgb(11, 16, 20)",
                            padding: "2px",
                          },
                          children: e.jsx("div", {
                            className:
                              "w-full h-full rounded-full overflow-hidden relative",
                            style: { background: "rgb(31, 41, 55)" },
                            children: e.jsx("img", {
                              alt: l.displayName,
                              src: l.profilePic,
                              loading: "lazy",
                              decoding: "async",
                              className: "w-full h-full object-cover",
                              style: {
                                opacity: 0.8,
                                ...(l.isBlurred
                                  ? {
                                    filter: "blur(5px)",
                                    WebkitFilter: "blur(5px)",
                                    clipPath: "circle(50%)",
                                    WebkitClipPath: "circle(50%)",
                                    transform: "scale(1.1) translateZ(0)",
                                  }
                                  : {}),
                              },
                              onError: (v) => {
                                v.target.src =
                                  "/images/avatars/perfil-sem-foto.jpeg";
                              },
                            }),
                          }),
                        }),
                      }),
              }),
              e.jsx("span", {
                className:
                  "story-username text-center overflow-hidden text-ellipsis whitespace-nowrap max-w-[79px] min-[390px]:max-w-[91px]",
                style: { fontSize: "12px", color: "rgba(229, 231, 231, 1)" },
                children: m === 0 ? "Seu story" : l.displayName,
              }),
            ],
          },
          l.username,
        ),
      ),
    }),
  });
}
function Ue({
  post: s,
  onLike: g,
  onSave: h,
  onComment: l,
  onShare: m,
  onRepost: v,
  onMoreOptions: S,
  onProfileClick: E,
}) {
  const { t: I } = pe(),
    [L, U] = i.useState(!1),
    [te, K] = i.useState(!0),
    [Z, M] = i.useState(!1),
    [$, B] = i.useState(!1),
    [q, z] = i.useState(!1),
    j = i.useRef(null),
    H = i.useRef(null),
    Y = () => {
      (s.isLiked || (U(!0), setTimeout(() => U(!1), 400)), g());
    },
    G = (p) => {
      if ((p.preventDefault(), p.stopPropagation(), !!j.current))
        if (
          (H.current && clearTimeout(H.current),
            B(!0),
            (H.current = setTimeout(() => B(!1), 800)),
            j.current.paused)
        ) {
          const y = j.current.play();
          y !== void 0 &&
            y
              .then(() => {
                (j.current && ((j.current.muted = !1), K(!1)), M(!0));
              })
              .catch(() => {
                j.current &&
                  ((j.current.muted = !0),
                    j.current
                      .play()
                      .then(() => {
                        (M(!0), K(!0));
                      })
                      .catch(() => {
                        M(!1);
                      }));
              });
        } else (j.current.pause(), M(!1));
    },
    X = (p) => {
      (p.stopPropagation(),
        j.current &&
        ((j.current.muted = !j.current.muted), K(j.current.muted)));
    },
    T = (p) =>
      p >= 1e6
        ? (p / 1e6).toFixed(1).replace(".", ",").replace(",0", "") + " mi"
        : p >= 1e4
          ? (p / 1e3).toFixed(1).replace(".", ",").replace(",0", "") + " mil"
          : p >= 1e3
            ? p.toString().slice(0, -3) + "." + p.toString().slice(-3)
            : p.toString(),
    R =
      s.caption.length > 80 && !q
        ? s.caption.substring(0, 80).trim() + "..."
        : s.caption;
  return e.jsxs("article", {
    className: "bg-[#0b1014] mb-4",
    children: [
      e.jsxs("div", {
        className: "px-4 py-3 flex items-center justify-between",
        children: [
          e.jsxs("button", {
            type: "button",
            onClick: E,
            className:
              "flex items-center gap-3 bg-transparent border-none cursor-pointer",
            children: [
              e.jsxs("div", {
                className:
                  "w-8 h-8 rounded-full overflow-hidden bg-gray-800 relative",
                children: [
                  e.jsx("img", {
                    alt: s.displayUsername,
                    src: s.profilePic,
                    className: "w-full h-full object-cover opacity-80",
                    decoding: "async",
                    style:
                      s.isFallback && !s.useRealAvatar
                        ? {
                          filter: "blur(4px)",
                          WebkitFilter: "blur(4px)",
                          clipPath: "circle(50%)",
                          WebkitClipPath: "circle(50%)",
                          transform: "translateZ(0)",
                        }
                        : void 0,
                    onError: (p) => {
                      p.target.src = "/images/avatars/perfil-sem-foto.jpeg";
                    },
                  }),
                  s.isFallback &&
                  !s.useRealAvatar &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.4)" },
                    children: e.jsx("svg", {
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      style: {
                        width: "12px",
                        height: "12px",
                        color: "#F9F9F9",
                      },
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                      }),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-left",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-semibold text-white m-0",
                        children: s.displayUsername,
                      }),
                      s.isVerified &&
                      e.jsx("img", {
                        src: "/images/icons/verificado-ig.png",
                        alt: "Verificado",
                        className: "w-3 h-3 object-contain",
                      }),
                    ],
                  }),
                  s.location &&
                  e.jsx("p", {
                    className: "text-xs text-gray-400 m-0",
                    children: s.location,
                  }),
                ],
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: S,
            className: "bg-transparent border-none cursor-pointer",
            children: e.jsxs("svg", {
              className: "w-5 h-5 text-white",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: [
                e.jsx("circle", { cx: "12", cy: "5", r: "1.5" }),
                e.jsx("circle", { cx: "12", cy: "12", r: "1.5" }),
                e.jsx("circle", { cx: "12", cy: "19", r: "1.5" }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "w-full bg-[#121824] flex flex-col items-center justify-center relative overflow-hidden",
        style: { aspectRatio: s.aspectRatio },
        children: [
          s.isFallback
            ? e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center w-full h-full",
              children: [
                e.jsx("svg", {
                  className: "w-12 h-12 text-gray-500 mb-3",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  }),
                }),
                e.jsx("p", {
                  className: "text-gray-400 font-medium m-0",
                  children: I.feed.restrictedContent,
                }),
                s.date &&
                e.jsx("p", {
                  className: "text-gray-500 text-sm mt-1",
                  children: s.date,
                }),
              ],
            })
            : s.videoUrl
              ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx("video", {
                    ref: j,
                    src: s.videoUrl,
                    poster: s.imageUrl ? J(s.imageUrl, 480) : void 0,
                    playsInline: !0,
                    loop: !0,
                    muted: !0,
                    preload: "metadata",
                    onClick: G,
                    className: "w-full h-full object-cover cursor-pointer",
                    style: {
                      backgroundImage: s.imageUrl
                        ? `url(${s.imageUrl})`
                        : void 0,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "absolute",
                      inset: 0,
                    },
                  }),
                  $ &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none",
                    style: { zIndex: 2 },
                    children: e.jsx("div", {
                      className:
                        "w-14 h-14 rounded-full bg-black/50 flex items-center justify-center animate-fade-out-fast",
                      children: Z
                        ? e.jsxs("svg", {
                          className: "w-7 h-7",
                          fill: "white",
                          viewBox: "0 0 24 24",
                          children: [
                            e.jsx("rect", {
                              x: "6",
                              y: "4",
                              width: "4",
                              height: "16",
                              rx: "1",
                            }),
                            e.jsx("rect", {
                              x: "14",
                              y: "4",
                              width: "4",
                              height: "16",
                              rx: "1",
                            }),
                          ],
                        })
                        : e.jsx("svg", {
                          className: "w-7 h-7 ml-1",
                          fill: "white",
                          viewBox: "0 0 24 24",
                          children: e.jsx("polygon", {
                            points: "5,3 19,12 5,21",
                          }),
                        }),
                    }),
                  }),
                  !Z &&
                  !$ &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none",
                    style: { zIndex: 2 },
                    children: e.jsx("div", {
                      className:
                        "w-14 h-14 rounded-full bg-black/40 flex items-center justify-center",
                      children: e.jsx("svg", {
                        className: "w-7 h-7 ml-1",
                        fill: "white",
                        viewBox: "0 0 24 24",
                        children: e.jsx("polygon", {
                          points: "5,3 19,12 5,21",
                        }),
                      }),
                    }),
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: X,
                    className:
                      "absolute bottom-4 right-4 w-6 h-6 rounded-full bg-black/75 flex items-center justify-center",
                    style: { zIndex: 3 },
                    children: te
                      ? e.jsxs("svg", {
                        className: "w-[13px] h-[13px]",
                        fill: "none",
                        stroke: "white",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        children: [
                          e.jsx("polygon", {
                            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
                            fill: "white",
                          }),
                          e.jsx("path", {
                            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
                          }),
                          e.jsx("path", {
                            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
                          }),
                          e.jsx("line", {
                            x1: "2",
                            y1: "2",
                            x2: "22",
                            y2: "22",
                            strokeWidth: 2.2,
                          }),
                        ],
                      })
                      : e.jsxs("svg", {
                        className: "w-[13px] h-[13px]",
                        fill: "none",
                        stroke: "white",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        children: [
                          e.jsx("polygon", {
                            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
                            fill: "white",
                          }),
                          e.jsx("path", {
                            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
                          }),
                          e.jsx("path", {
                            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
                          }),
                        ],
                      }),
                  }),
                ],
              })
              : s.imageUrl
                ? e.jsx("img", {
                  src: s.imageUrl,
                  alt: `Post de ${s.displayUsername}`,
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                  decoding: "async",
                  onError: (p) => {
                    const y = p.target;
                    ((y.onerror = null),
                      (y.src =
                        s.profilePic ||
                        "/images/avatars/perfil-sem-foto.jpeg"));
                  },
                })
                : null,
          !s.isFallback && !s.imageUrl && !s.videoUrl
            ? e.jsxs("div", {
              className: "flex flex-col items-center justify-center",
              children: [
                e.jsx("svg", {
                  className: "w-12 h-12 text-gray-500 mb-3",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  }),
                }),
                e.jsx("p", {
                  className: "text-gray-400 font-medium m-0",
                  children: I.feed.restrictedContent,
                }),
                s.date &&
                e.jsx("p", {
                  className: "text-gray-500 text-sm mt-1",
                  children: s.date,
                }),
              ],
            })
            : null,
          L &&
          e.jsx("div", {
            className:
              "absolute w-[26px] h-[26px] animate-like-heart pointer-events-none",
            style: {
              bottom: 0,
              left: 16,
              background:
                "radial-gradient(circle, #ff3040 0%, #ff6b35 40%, #ff8c42 80%, #ffa500 100%)",
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
            },
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-4 py-3",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: Y,
                    className:
                      "flex items-center gap-1 bg-transparent border-none cursor-pointer relative",
                    children: [
                      s.isLiked
                        ? e.jsxs("svg", {
                          "aria-label": "Descurtir",
                          fill: "currentColor",
                          height: "24",
                          role: "img",
                          viewBox: "0 0 48 48",
                          width: "24",
                          children: [
                            e.jsx("title", { children: "Descurtir" }),
                            e.jsx("path", {
                              d: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
                              fill: "#FF3040",
                            }),
                          ],
                        })
                        : e.jsxs("svg", {
                          "aria-label": "Curtir",
                          fill: "currentColor",
                          height: "24",
                          role: "img",
                          viewBox: "0 0 24 24",
                          width: "24",
                          children: [
                            e.jsx("title", { children: "Curtir" }),
                            e.jsx("path", {
                              d: "M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z",
                              fill: "#F5F5F5",
                            }),
                          ],
                        }),
                      s.likes > 0 &&
                      e.jsx("span", {
                        className: "text-sm font-semibold text-white",
                        children: T(s.likes),
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: l,
                    className:
                      "flex items-center gap-1 bg-transparent border-none cursor-pointer",
                    children: [
                      e.jsxs("svg", {
                        "aria-label": "Comment",
                        className: "w-6 h-6 text-white",
                        fill: "currentColor",
                        height: "24",
                        role: "img",
                        viewBox: "0 0 24 24",
                        width: "24",
                        children: [
                          e.jsx("title", { children: "Comment" }),
                          e.jsx("path", {
                            d: "M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z",
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                          }),
                        ],
                      }),
                      s.comments > 0 &&
                      e.jsx("span", {
                        className: "text-sm font-semibold text-white",
                        children: T(s.comments),
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: v,
                    className:
                      "flex items-center gap-1 bg-transparent border-none cursor-pointer",
                    children: [
                      e.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-6 h-6 text-white",
                        viewBox: "0 0 62 62",
                        fill: "none",
                        children: [
                          e.jsx("g", {
                            clipPath: "url(#clip0_repost)",
                            children: e.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M31.0109 2.30423C31.0109 2.47139 30.6601 2.69623 30.2313 2.80384C29.759 2.922 29.3784 3.29105 29.2656 3.74011C29.1631 4.14761 28.9546 4.481 28.8024 4.481C28.6498 4.481 28.5252 4.69033 28.5252 4.94618C28.5252 5.20204 28.6498 5.41137 28.8024 5.41137C28.9546 5.41137 29.1712 5.77701 29.2836 6.22421C29.5077 7.11551 30.157 7.89237 30.6781 7.89237C30.8611 7.89237 31.0109 8.1017 31.0109 8.35756C31.0109 8.61341 31.2206 8.82274 31.4769 8.82274C31.7332 8.82274 31.943 9.03208 31.943 9.28793C31.943 9.54378 32.1527 9.75312 32.409 9.75312C32.6654 9.75312 32.8751 9.96245 32.8751 10.2183C32.8751 10.4742 33.0149 10.6835 33.1858 10.6835C33.3567 10.6835 33.4965 10.823 33.4965 10.9936C33.4965 11.1924 30.6038 11.3037 25.4402 11.3037C18.6935 11.3037 17.3084 11.3794 16.9182 11.7689C16.6618 12.0248 16.0926 12.2341 15.653 12.2341C15.2136 12.2341 14.8542 12.3585 14.8542 12.5107C14.8542 12.6627 14.4773 12.8817 14.0165 12.997C13.5557 13.1124 12.7261 13.6858 12.1731 14.271C11.62 14.8565 11.0182 15.3354 10.8358 15.3354C10.6534 15.3354 10.5043 15.4814 10.5043 15.6604C10.5043 15.839 10.1644 16.2995 9.74895 16.6838C9.33353 17.068 8.89885 17.7593 8.78327 18.2198C8.66738 18.6801 8.44802 19.0569 8.29577 19.0569C8.14322 19.0569 8.01863 19.4157 8.01863 19.8542C8.01863 20.293 7.8089 20.8612 7.55257 21.117C7.16232 21.5065 7.08651 22.8863 7.08651 29.5986V37.615L8.01863 37.8194C8.53129 37.9317 8.95074 38.1522 8.95074 38.3091C8.95074 38.7312 10.4574 38.6558 10.9943 38.2071C12.4207 37.0146 12.3685 37.3201 12.3685 30.177C12.3685 24.5259 12.4487 23.2746 12.8346 22.8891C13.0909 22.6332 13.3006 22.0849 13.3006 21.6709C13.3006 21.2566 13.4404 20.9176 13.6113 20.9176C13.7822 20.9176 13.922 20.7641 13.922 20.5765C13.922 20.1327 15.932 18.1265 16.3766 18.1265C16.5646 18.1265 16.7184 17.9885 16.7184 17.8201C16.7184 17.6514 17.2777 17.4244 17.9612 17.3152C18.6448 17.206 19.204 16.9952 19.204 16.8463C19.204 16.6974 22.4198 16.5759 26.3503 16.5759C30.9074 16.5759 33.4965 16.6881 33.4965 16.886C33.4965 17.0566 33.3567 17.1961 33.1858 17.1961C33.0149 17.1961 32.8751 17.4054 32.8751 17.6613C32.8751 17.9172 32.6654 18.1265 32.409 18.1265C32.1527 18.1265 31.943 18.3358 31.943 18.5917C31.943 18.8475 31.7923 19.0569 31.6083 19.0569C31.1125 19.0569 29.5738 20.6828 29.3228 21.4724C29.2029 21.8495 28.9745 22.1581 28.8151 22.1581C28.6557 22.1581 28.5252 22.4372 28.5252 22.7784C28.5252 23.1195 28.6498 23.3986 28.8024 23.3986C28.9546 23.3986 29.1671 23.7475 29.2743 24.1739C29.3815 24.6003 29.6164 24.9492 29.796 24.9492C29.9759 24.9492 30.3329 25.1586 30.5892 25.4144C31.1165 25.941 32.5644 26.0474 32.5644 25.5599C32.5644 25.3837 32.8089 25.1474 33.1081 25.0345C33.806 24.7706 34.4286 24.1559 34.4286 23.7307C34.4286 23.5481 34.6383 23.3986 34.8947 23.3986C35.151 23.3986 35.3607 23.1893 35.3607 22.9334C35.3607 22.6776 35.5705 22.4682 35.8268 22.4682C36.0831 22.4682 36.2929 22.2589 36.2929 22.003C36.2929 21.7472 36.4426 21.5379 36.6256 21.5379C37.0559 21.5379 37.8464 20.7489 37.8464 20.3194C37.8464 20.1367 38.0561 19.9872 38.3124 19.9872C38.5688 19.9872 38.7785 19.7779 38.7785 19.522C38.7785 19.2662 38.9882 19.0569 39.2446 19.0569C39.5009 19.0569 39.7106 18.8475 39.7106 18.5917C39.7106 18.3358 39.8604 18.1265 40.0434 18.1265C40.4737 18.1265 41.2641 17.3375 41.2641 16.908C41.2641 16.7253 41.4739 16.5759 41.7302 16.5759C41.9865 16.5759 42.1963 16.3665 42.1963 16.1107C42.1963 15.8548 42.406 15.6455 42.6623 15.6455C43.0203 15.6455 43.1284 15.2491 43.1284 13.9398C43.1284 12.6305 43.0203 12.2341 42.6623 12.2341C42.406 12.2341 42.1963 12.0248 42.1963 11.7689C42.1963 11.5131 41.9865 11.3037 41.7302 11.3037C41.4739 11.3037 41.2641 11.1543 41.2641 10.9716C41.2641 10.5421 40.4737 9.75312 40.0434 9.75312C39.8604 9.75312 39.7106 9.54378 39.7106 9.28793C39.7106 9.03208 39.5009 8.82274 39.2446 8.82274C38.9882 8.82274 38.7785 8.61341 38.7785 8.35756C38.7785 8.1017 38.5688 7.89237 38.3124 7.89237C38.0561 7.89237 37.8464 7.74289 37.8464 7.56023C37.8464 7.1307 37.0559 6.34175 36.6256 6.34175C36.4426 6.34175 36.2929 6.13241 36.2929 5.87656C36.2929 5.62071 36.0831 5.41137 35.8268 5.41137C35.5705 5.41137 35.3607 5.20204 35.3607 4.94618C35.3607 4.69033 35.151 4.481 34.8947 4.481C34.6383 4.481 34.4286 4.33152 34.4286 4.14885C34.4286 3.72367 33.806 3.10901 33.1081 2.84509C32.8089 2.7322 32.5644 2.49589 32.5644 2.31974C32.5644 2.1439 32.2148 2 31.7876 2C31.3604 2 31.0109 2.13677 31.0109 2.30423ZM49.8514 25.4144C49.7532 25.6703 49.4037 25.8796 49.0747 25.8796C48.7459 25.8796 48.392 26.1004 48.2883 26.3702C48.1845 26.64 48.0997 29.8597 48.0997 33.5251C48.0997 39.0357 48.0189 40.2703 47.6336 40.6549C47.3773 40.9107 47.1676 41.4699 47.1676 41.8975C47.1676 42.6846 44.7742 45.4175 44.085 45.4175C43.9008 45.4175 43.7498 45.6268 43.7498 45.8826C43.7498 46.2185 43.4046 46.3478 42.507 46.3478C41.8234 46.3478 41.2641 46.4874 41.2641 46.658C41.2641 46.8558 38.675 46.9681 34.1179 46.9681C29.5608 46.9681 26.9717 46.8558 26.9717 46.658C26.9717 46.4874 27.1115 46.3478 27.2824 46.3478C27.4533 46.3478 27.5931 46.1385 27.5931 45.8826C27.5931 45.6268 27.7519 45.4175 27.9457 45.4175C28.1399 45.4175 28.6225 45.0686 29.0186 44.6421C29.4144 44.2157 29.8849 43.8668 30.0638 43.8668C30.2431 43.8668 30.3894 43.6693 30.3894 43.4274C30.3894 43.1858 30.4945 42.9417 30.6225 42.8847C30.7505 42.8279 31.0876 42.3382 31.3713 41.7968C31.8522 40.8791 31.8522 40.7374 31.3713 39.7136C31.0087 38.9411 30.6479 38.6118 30.1564 38.605C29.7718 38.5994 29.4573 38.4552 29.4573 38.2846C29.4573 38.114 29.2476 37.9745 28.9913 37.9745C28.7349 37.9745 28.5252 38.114 28.5252 38.2846C28.5252 38.4552 28.1058 38.5947 27.5931 38.5947C27.0804 38.5947 26.661 38.7442 26.661 38.9269C26.661 39.3564 25.8705 40.1453 25.4402 40.1453C25.2572 40.1453 25.1074 40.3547 25.1074 40.6105C25.1074 40.8664 24.8977 41.0757 24.6414 41.0757C24.3851 41.0757 24.1753 41.285 24.1753 41.5409C24.1753 41.7968 23.9656 42.0061 23.7093 42.0061C23.4529 42.0061 23.2432 42.1556 23.2432 42.3382C23.2432 42.7678 22.4528 43.5567 22.0224 43.5567C21.8394 43.5567 21.6897 43.766 21.6897 44.0219C21.6897 44.2778 21.48 44.4871 21.2236 44.4871C20.9673 44.4871 20.7576 44.6964 20.7576 44.9523C20.7576 45.2081 20.5478 45.4175 20.2915 45.4175C20.0352 45.4175 19.8254 45.5669 19.8254 45.7496C19.8254 46.1791 19.035 46.9681 18.6047 46.9681C18.4217 46.9681 18.2719 47.1774 18.2719 47.4333C18.2719 47.6891 18.0622 47.8985 17.8059 47.8985C17.4504 47.8985 17.3404 48.2849 17.3429 49.5266C17.3457 51.0348 17.4371 51.2348 18.5826 52.2402C19.2628 52.8372 19.8208 53.5002 19.8223 53.7133C19.8242 53.9267 19.96 54.101 20.1243 54.101C20.5422 54.101 23.2432 56.7628 23.2432 57.1746C23.2432 57.3604 23.3871 57.5123 23.5629 57.5123C23.7388 57.5123 24.7784 58.4194 25.8727 59.5281C27.5835 61.2608 28.0184 61.5439 28.9708 61.5439C29.5801 61.5439 30.0787 61.4044 30.0787 61.2338C30.0787 61.0633 30.2773 60.9237 30.5203 60.9237C30.7629 60.9237 31.0537 60.505 31.1662 59.9933C31.2787 59.4816 31.4996 59.0629 31.6568 59.0629C31.8143 59.0629 31.943 58.8536 31.943 58.5978C31.943 58.3419 31.8059 58.1326 31.6382 58.1326C31.4707 58.1326 31.2457 57.7837 31.1386 57.3573C31.0314 56.9308 30.8188 56.582 30.6666 56.582C30.514 56.582 30.3894 56.3726 30.3894 56.1168C30.3894 55.8609 30.1797 55.6516 29.9234 55.6516C29.6671 55.6516 29.4573 55.4422 29.4573 55.1864C29.4573 54.9305 29.3066 54.7212 29.1227 54.7212C28.688 54.7212 26.9717 53.0081 26.9717 52.5742C26.9717 52.3438 29.5757 52.2402 35.3607 52.2402C40.7462 52.2402 43.7498 52.1292 43.7498 51.9301C43.7498 51.7595 44.0195 51.62 44.3491 51.62C44.6785 51.62 45.1579 51.4106 45.4142 51.1548C45.6706 50.8989 46.1742 50.6896 46.5337 50.6896C46.8932 50.6896 47.2676 50.4802 47.3658 50.2244C47.4643 49.9685 47.7396 49.7592 47.9776 49.7592C48.2156 49.7592 48.4104 49.629 48.4104 49.4699C48.4104 49.3108 48.6829 49.0943 49.0159 48.9889C49.349 48.8834 49.7147 48.5032 49.8291 48.1444C49.9431 47.7853 50.3697 47.1833 50.777 46.8065C51.1844 46.43 51.5174 45.8237 51.5174 45.4593C51.5174 45.0776 51.7147 44.7972 51.9835 44.7972C52.2911 44.7972 52.4496 44.4899 52.4496 43.8926C52.4496 43.3951 52.6245 42.9303 52.8379 42.8592C53.1316 42.7619 53.249 40.8183 53.3195 34.885C53.4087 27.3657 53.3866 27.0159 52.7885 26.4598C52.4455 26.1407 52.0192 25.8796 51.8412 25.8796C51.6632 25.8796 51.5174 25.6703 51.5174 25.4144C51.5174 25.1307 51.2275 24.9492 50.7739 24.9492C50.365 24.9492 49.9499 25.1586 49.8514 25.4144ZM75.5437 36.5789C75.5452 37.7729 75.6012 38.2232 75.6686 37.58C75.7357 36.9365 75.7348 35.9596 75.6661 35.4091C75.5974 34.8583 75.5424 35.3849 75.5437 36.5789ZM11.0238 85.9663C22.8443 86.0112 42.2789 86.0112 54.2119 85.9663C66.1445 85.9213 56.4732 85.8844 32.7197 85.8844C8.96628 85.8844 -0.79703 85.9213 11.0238 85.9663Z",
                              fill: "currentColor",
                            }),
                          }),
                          e.jsx("defs", {
                            children: e.jsx("clipPath", {
                              id: "clip0_repost",
                              children: e.jsx("rect", {
                                width: "62",
                                height: "62",
                                fill: "white",
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.reposts > 0 &&
                      e.jsx("span", {
                        className: "text-sm font-semibold text-white",
                        children: T(s.reposts),
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: m,
                    className:
                      "flex items-center gap-1 bg-transparent border-none cursor-pointer",
                    children: [
                      e.jsxs("svg", {
                        "aria-label": "Share",
                        className: "w-6 h-6 text-white",
                        fill: "currentColor",
                        height: "24",
                        role: "img",
                        viewBox: "0 0 24 24",
                        width: "24",
                        children: [
                          e.jsx("title", { children: "Share" }),
                          e.jsx("path", {
                            d: "M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z",
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                          }),
                          e.jsx("line", {
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            x1: "7.488",
                            x2: "15.515",
                            y1: "12.208",
                            y2: "7.641",
                          }),
                        ],
                      }),
                      s.shares > 0 &&
                      e.jsx("span", {
                        className: "text-sm font-semibold text-white",
                        children: T(s.shares),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                onClick: h,
                className: "bg-transparent border-none cursor-pointer",
                children: e.jsx("svg", {
                  className: "w-6 h-6 text-white",
                  fill: s.isSaved ? "currentColor" : "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
                  }),
                }),
              }),
            ],
          }),
          s.caption &&
          e.jsx("div", {
            className: "flex flex-col gap-2",
            children: e.jsxs("p", {
              className: "text-sm text-white m-0 leading-[1.4]",
              children: [
                e.jsx("span", {
                  className: "font-semibold",
                  children: s.displayUsername,
                }),
                " ",
                R.split(
                  `
`,
                ).map((p, y) =>
                  e.jsxs(
                    "span",
                    {
                      children: [
                        p,
                        y <
                        R.split(`
`).length -
                        1 && e.jsx("br", {}),
                      ],
                    },
                    y,
                  ),
                ),
                s.caption.length > 80 &&
                !q &&
                e.jsx("button", {
                  type: "button",
                  onClick: () => z(!0),
                  className:
                    "text-gray-400 bg-transparent border-none cursor-pointer ml-1",
                  children: "mais",
                }),
              ],
            }),
          }),
          s.date &&
          e.jsx("p", {
            className: "text-xs text-gray-400 m-0 mt-2",
            children: s.date,
          }),
        ],
      }),
    ],
  });
}
function Be({
  profilePic: s,
  onHomeClick: g,
  onSearchClick: h,
  onAddClick: l,
  onReelsClick: m,
  onProfileClick: v,
}) {
  return e.jsxs("nav", {
    className:
      "fixed bottom-0 left-0 right-0 z-[1001] px-6 py-4 bg-[#0b1014] border-t border-gray-800 flex items-center justify-between lg:hidden",
    children: [
      e.jsx("button", {
        type: "button",
        onClick: g,
        className: "bg-transparent border-none cursor-pointer",
        children: e.jsx("svg", {
          className: "w-6 h-6 text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 2,
          children: e.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
          }),
        }),
      }),
      e.jsx("button", {
        type: "button",
        onClick: h,
        className: "bg-transparent border-none cursor-pointer",
        children: e.jsx("svg", {
          className: "w-6 h-6 text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 2,
          children: e.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
          }),
        }),
      }),
      e.jsx("button", {
        type: "button",
        onClick: l,
        className: "bg-transparent border-none cursor-pointer",
        children: e.jsx("svg", {
          className: "w-6 h-6 text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 2,
          children: e.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4v16m8-8H4",
          }),
        }),
      }),
      e.jsx("button", {
        type: "button",
        onClick: m,
        className: "bg-transparent border-none cursor-pointer",
        children: e.jsxs("svg", {
          className: "w-6 h-6 text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 2,
          children: [
            e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
            }),
            e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            }),
          ],
        }),
      }),
      e.jsx("button", {
        type: "button",
        onClick: v,
        className: "relative bg-transparent border-none cursor-pointer",
        children: e.jsx("div", {
          className:
            "w-6 h-6 rounded-full overflow-hidden bg-gray-800 border-2 border-white",
          children: e.jsx("img", {
            alt: "Profile",
            src: s || "/images/avatars/perfil-sem-foto.jpeg",
            className: "w-full h-full object-cover",
            onError: (S) => {
              S.target.src = "/images/avatars/perfil-sem-foto.jpeg";
            },
          }),
        }),
      }),
    ],
  });
}
function Te({ senderName: s, message: g, onClick: h, onClose: l, profilePic: v }) {
  const { t: m } = pe(),
    [S, I] = i.useState(!1);
  i.useEffect(() => {
    const E = setTimeout(() => {
      (I(!0), setTimeout(l, 300));
    }, 5e3);
    return () => clearTimeout(E);
  }, [l]);
  const E = () => {
    (I(!0), setTimeout(h, 300));
  };
  return e.jsxs("div", {
    className: `fixed top-[70px] left-0 right-0 mx-auto z-[1001] flex items-center gap-[13px] w-[calc(100%-20px)] max-w-[380px] p-[10px_14px] rounded-[14px] cursor-pointer ${S ? "notification-hiding" : "animate-notification-slide-in"}`,
    style: {
      background: "rgba(28, 28, 30, 0.8)",
      backdropFilter: "blur(30px) saturate(180%)",
      WebkitBackdropFilter: "blur(30px) saturate(180%)",
      border: "0.5px solid rgba(255, 255, 255, 0.15)",
      boxShadow:
        "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 0.5px 0 rgba(255, 255, 255, 0.15)",
    },
    onClick: E,
    children: [
      e.jsx("div", {
        className:
          "w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-transparent",
        children: e.jsx("img", {
          src: "/images/screenshots/chat1.png",
          alt: "Instagram",
          className: "w-full h-full object-cover",
          style: { filter: "blur(5px)", WebkitFilter: "blur(5px)" },
        }),
      }),
      e.jsxs("div", {
        className: "flex-1 flex flex-col gap-0 min-w-0 relative leading-[1.2]",
        children: [
          e.jsx("span", {
            className:
              "absolute top-0 right-0 text-[13px] font-normal whitespace-nowrap",
            style: {
              color: "rgba(255, 255, 255, 0.5)",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
            },
            children: m.common.now,
          }),
          e.jsx("p", {
            className:
              "text-[15px] font-semibold m-0 mb-[2px] leading-[1.2] pr-[10px]",
            style: {
              color: "rgba(255, 255, 255, 0.85)",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: "-0.01em",
            },
            children: "Instagram",
          }),
          e.jsxs("p", {
            className:
              "text-[15px] font-normal m-0 leading-[1.2] pr-[10px] line-clamp-3",
            style: {
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: "-0.01em",
            },
            children: [s, " ", m.notification.sentAMessage, ': "', g, '"'],
          }),
        ],
      }),
    ],
  });
}
function N({ className: s }) {
  return e.jsx("div", {
    className: `bg-gray-800 rounded animate-pulse ${s || ""}`,
    style: {
      background:
        "linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)",
      backgroundSize: "200% 100%",
      animation: "skeleton-shimmer 1.5s ease-in-out infinite",
    },
  });
}
function Re() {
  return e.jsxs("article", {
    className: "bg-[#0b1014] mb-4",
    children: [
      e.jsxs("div", {
        className: "px-4 py-3 flex items-center gap-3",
        children: [
          e.jsx(N, { className: "w-8 h-8 rounded-full flex-shrink-0" }),
          e.jsx("div", {
            className: "flex-1",
            children: e.jsx(N, { className: "h-3 w-24 rounded" }),
          }),
          e.jsx(N, { className: "w-5 h-5 rounded" }),
        ],
      }),
      e.jsx(N, { className: "w-full aspect-square" }),
      e.jsxs("div", {
        className: "px-4 py-3",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsx(N, { className: "w-7 h-7 rounded" }),
                  e.jsx(N, { className: "w-7 h-7 rounded" }),
                  e.jsx(N, { className: "w-7 h-7 rounded" }),
                  e.jsx(N, { className: "w-7 h-7 rounded" }),
                ],
              }),
              e.jsx(N, { className: "w-7 h-7 rounded" }),
            ],
          }),
          e.jsx(N, { className: "h-3 w-20 rounded mb-2" }),
          e.jsxs("div", {
            className: "flex flex-col gap-1.5",
            children: [
              e.jsx(N, { className: "h-3 w-full rounded" }),
              e.jsx(N, { className: "h-3 w-3/4 rounded" }),
            ],
          }),
          e.jsx(N, { className: "h-2.5 w-16 rounded mt-3" }),
        ],
      }),
    ],
  });
}
function Oe({ count: s = 2 }) {
  return e.jsx(e.Fragment, {
    children: [...Array(s)].map((g, h) => e.jsx(Re, {}, h)),
  });
}
function Ye({ }) {
  return [
    {
      title:
        "STALKEA: Stalkea Instagram | Ver Curtidas e Atividades do Cônjuge",
    },
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
function $e() {
  try {
    const s =
      new URLSearchParams(window.location.search).get("username") ||
      localStorage.getItem("espionado_username") ||
      "";
    if (!s) return !1;
    const g = `instagram_posts_${s}_timestamp`,
      h = localStorage.getItem(g);
    return !h || Date.now() - parseInt(h, 10) > 1800 * 1e3
      ? !1
      : !!localStorage.getItem(`instagram_posts_${s}`);
  } catch {
    return !1;
  }
}
const Ge = Se(function () {
  const [g] = fe(),
    h = he(),
    l = g.get("username") || localStorage.getItem("espionado_username") || "",
    [m, v] = i.useState(null),
    [S, E] = i.useState([]),
    [I, L] = i.useState([]),
    [U, te] = i.useState(4),
    [K, Z] = i.useState(!1),
    [M, $] = i.useState(!1),
    [B, q] = i.useState(!1),
    [z, j] = i.useState(!1),
    [H, Y] = i.useState(!1),
    [G, X] = i.useState({ isOpen: !1, action: "" }),
    [T, R] = i.useState(!1),
    [p, y] = i.useState(0),
    [ne, Q] = i.useState(() => !$e()),
    [ge, W] = i.useState(!1),
    se = i.useRef(0),
    ae = i.useRef(null),
    re = i.useRef(!1),
    xe = 7,
    Ce = [1, 3, 5],
    O = i.useCallback(
      () =>
        Ce.filter((a) => localStorage.getItem(`chat-${a}-read`) !== "true")
          .length,
      [],
    );
  (i.useEffect(() => {
    // window.dataLayer.push({
    //   event: "pageview",
    //   page_location: window.location.href,
    //   page_title: "feed",
    //   page: {
    //     url: window.location.href,
    //     title: "feed",
    //   },
    // });
  }, []),
    i.useEffect(() => {
      y(O());
      const a = () => y(O());
      window.addEventListener("focus", a);
      const r = () => {
        document.visibilityState === "visible" && y(O());
      };
      return (
        document.addEventListener("visibilitychange", r),
        () => {
          (window.removeEventListener("focus", a),
            document.removeEventListener("visibilitychange", r));
        }
      );
    }, [O]));
  const be = !1,
    oe = "shared_timer_start",
    ve = 600 * 1e3,
    ce = "cta_timer_expired";
  (i.useEffect(() => {
    (localStorage.getItem(ce),
      localStorage.getItem(oe) ||
      localStorage.setItem(oe, Date.now().toString()));
    const r = setInterval(() => {
      const t = localStorage.getItem(oe);
      t &&
        Date.now() - parseInt(t) >= ve &&
        (localStorage.setItem(ce, "1"),
          (window.location.href = `/cta/${window.location.search || ""}`));
    }, 1e3);
    return () => clearInterval(r);
  }, [h]),
    i.useEffect(() => {
      async function a() {
        if (l)
          try {
            const r = await Fe();
            if (!r || r === "unknown") return;
            const t = await Ie(r, l);
            if (t.exists && !t.canSearch) {
              if (
                (console.log("🚫 [FEED IP CHECK] User blocked:", t.blockReason),
                  t.leadData?.lastSpiedProfile || t.leadData?.spiedProfile)
              ) {
                const d =
                  t.leadData.lastSpiedProfile || t.leadData.spiedProfile;
                try {
                  const b = JSON.parse(
                    localStorage.getItem("instagram_profile") || "{}",
                  );
                  b.username === d?.username &&
                    Object.assign(d, {
                      biography: d.biography || b.biography || "",
                    });
                } catch { }
                (localStorage.setItem(
                  "blocked_previous_profile",
                  JSON.stringify(d),
                ),
                  localStorage.setItem(
                    "blocked_previous_username",
                    d?.username || "",
                  ),
                  localStorage.setItem("espionado_username", d?.username || ""),
                  localStorage.setItem("instagram_profile", JSON.stringify(d)));
              }
              if (t.blockReason === "different_handle") return;
            }
          } catch (r) {
            console.warn("IP status check failed on feed:", r);
          }
      }
      a();
    }, [l, h, be]),
    i.useEffect(() => {
      if (!l) {
        localStorage.getItem("espionado_username") || h("/");
        return;
      }
      const a = localStorage.getItem("instagram_profile");
      if (a)
        try {
          v(JSON.parse(a));
        } catch {
          console.warn("Failed to parse saved profile");
        }
    }, [l, h]),
    i.useEffect(() => {
      if (!m) return;
      (() => {
        const r = [];
        r.push({
          username: m.username,
          displayName: "Seu story",
          profilePic:
            m.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
          hasStory: !1,
          isCloseFriend: !1,
        });
        let t = [];
        const d = localStorage.getItem("chaining_results"),
          b =
            localStorage.getItem("instagram_followers") ||
            localStorage.getItem("followers");
        if (d)
          try {
            ((t = JSON.parse(d)),
              console.log("📱 [STORIES] Using chaining_results:", t.length));
          } catch {
            console.warn("Error parsing chaining data");
          }
        if (t.length === 0 && b)
          try {
            ((t = JSON.parse(b)),
              console.log("📱 [STORIES] Using followers:", t.length));
          } catch {
            console.warn("Error parsing followers data");
          }
        const x = t.filter((f) => f.username).slice(0, 14),
          k = localStorage.getItem("feed_stories_order");
        if (k)
          try {
            const f = JSON.parse(k);
            x.sort((c, o) => {
              const u = f.indexOf(c.username),
                n = f.indexOf(o.username);
              return (u === -1 ? 999 : u) - (n === -1 ? 999 : n);
            });
          } catch { }
        else {
          for (let f = x.length - 1; f > 0; f--) {
            const c = Math.floor(Math.random() * (f + 1));
            [x[f], x[c]] = [x[c], x[f]];
          }
          localStorage.setItem(
            "feed_stories_order",
            JSON.stringify(x.map((f) => f.username)),
          );
        }
        x.forEach((f, c) => {
          const o = f.profile_pic_url || "",
            u = !o || o.startsWith("/images/avatars/fallback/");
          r.push({
            username: f.username,
            displayName: ie(f.username),
            profilePic: o || "/images/avatars/perfil-sem-foto.jpeg",
            hasStory: !0,
            isCloseFriend: c < 3,
            isBlurred: u,
            isLocked: !0,
          });
        });
        for (let f = 0; f < 5; f++) {
          const c = "abcdefghijklmnopqrstuvwxyz";
          r.push({
            username: `locked_${f}`,
            displayName: c[f % c.length] + "******",
            profilePic: "",
            hasStory: !0,
            isLocked: !0,
          });
        }
        E(r);
      })();
    }, [m, ne, ge]));
  const V = i.useCallback((a, r) => {
    const t = a.post || a.node || a,
      d = a.de_usuario || a.user || a,
      b = t.image_versions2?.candidates,
      x =
        (b?.length ? Pe(b, 640) : "") ||
        J(t.image_url || "") ||
        J(t.thumbnail_src || t.display_url || "") ||
        J(t.thumbnail_url || "") ||
        J(a.image_url || "") ||
        "",
      k = t.video_url || t.video_versions?.[0]?.url || a.video_url || "",
      f =
        t.media_type === "VIDEO" ||
        t.media_type === 2 ||
        t.is_video === !0 ||
        t.product_type === "clips" ||
        !!k,
      c =
        a.de_usuario?.username ||
        d.username ||
        a.username ||
        t.user?.username ||
        t.owner?.username ||
        "usuario",
      o =
        a.de_usuario?.profile_pic_url ||
        d.profile_pic_url ||
        a.profile_pic_url ||
        t.user?.profile_pic_url ||
        "/images/avatars/perfil-sem-foto.jpeg";
    let u = "";
    typeof t.caption == "string"
      ? (u = t.caption)
      : t.caption?.text
        ? (u = t.caption.text)
        : t.edge_media_to_caption?.edges?.[0]?.node?.text &&
        (u = t.edge_media_to_caption.edges[0].node.text);
    const n =
      t.taken_at ||
      t.taken_at_timestamp ||
      a.taken_at ||
      Math.floor(Date.now() / 1e3) - r * 86400;
    return {
      id: `api_${t.pk || t.id || a.pk || r}_${Date.now()}`,
      username: c,
      displayUsername: ie(c),
      profilePic: o,
      imageUrl: x,
      videoUrl: k,
      mediaType: f ? "video" : "image",
      likes:
        t.like_count ||
        t.edge_liked_by?.count ||
        Math.floor(Math.random() * 180) + 20,
      comments:
        t.comment_count ||
        t.edge_media_to_comment?.count ||
        Math.floor(Math.random() * 30),
      reposts: Math.floor(Math.random() * 10),
      shares: Math.floor(Math.random() * 5),
      caption: u,
      location: t.location?.name || t.location?.short_name || "",
      date: me(n),
      timestamp: n,
      isLiked: Math.random() > 0.5,
      isSaved: Math.random() > 0.7,
      isVerified:
        a.de_usuario?.is_verified || d.is_verified || a.is_verified || !1,
      isReal: !0,
      isFallback: !1,
      aspectRatio: "1 / 1",
    };
  }, []),
    je = 1800 * 1e3,
    le = i.useCallback((a) => {
      const r = `${a}_timestamp`,
        t = localStorage.getItem(r);
      return t ? Date.now() - parseInt(t, 10) < je : !1;
    }, []),
    _ = i.useCallback((a, r) => {
      try {
        (localStorage.setItem(a, JSON.stringify(r)),
          localStorage.setItem(`${a}_timestamp`, Date.now().toString()));
      } catch (t) {
        console.warn("⚠️ [CACHE] Error saving to localStorage:", t);
      }
    }, []),
    A = i.useCallback((a) => {
      try {
        const r = localStorage.getItem(a);
        if (r) return JSON.parse(r);
      } catch (r) {
        console.warn("⚠️ [CACHE] Error loading from localStorage:", r);
      }
      return null;
    }, []),
    de = i.useCallback(() => {
      const a = [
        `chaining_results_${l}`,
        "chaining_results",
        "instagram_followers",
        `instagram_followers_${l}`,
      ];
      for (const r of a)
        try {
          const t = localStorage.getItem(r);
          if (t) {
            const d = JSON.parse(t);
            if (Array.isArray(d) && d.length > 0) return d;
          }
        } catch { }
      return [];
    }, [l]),
    ee = i.useCallback(
      (a) => {
        const r = Math.max(0, 7 - a);
        if (r === 0) return [];
        const t = de(),
          d = t.length > 0,
          b = [
            "And*****",
            "Fran*****",
            "Antô*****",
            "Adri*****",
            "Juli*****",
            "Már*****",
            "Fern*****",
            "Patr*****",
            "Ali*****",
            "Bru*****",
          ],
          x = [
            "/images/avatars/fallback/av-fallback-1.jpg",
            "/images/avatars/fallback/av-fallback-2.jpg",
            "/images/avatars/fallback/av-fallback-3.jpg",
            "/images/avatars/fallback/av-fallback-4.jpg",
            "/images/avatars/fallback/av-fallback-5.jpg",
            "/images/avatars/fallback/av-fallback-6.jpg",
          ];
        let k = [];
        try {
          const c = localStorage.getItem("nearby_cities");
          c && (k = JSON.parse(c));
        } catch { }
        if (k.length === 0) {
          const c = localStorage.getItem("user_city");
          c && c !== "sua cidade" && (k = [c]);
        }
        const f = [];
        for (let c = 0; c < r; c++) {
          const o = Math.floor(Math.random() * 5 * 24),
            u = Date.now() / 1e3 - o * 3600,
            n = k.length > 0 ? k[c % k.length] : "";
          let C, w, F;
          if (d) {
            const D = t[c % t.length];
            ((F = D.username || `user_${c}`),
              (C = ie(F)),
              (w = D.profile_pic_url || x[c % x.length]));
          } else
            ((F = `user_${c}`),
              (C = b[c % b.length]?.toLowerCase() || ""),
              (w = x[c % x.length]));
          f.push({
            id: `fallback_${c}`,
            username: F.toLowerCase(),
            displayUsername: C,
            profilePic: w,
            imageUrl: "",
            videoUrl: "",
            mediaType: "image",
            likes: Math.floor(Math.random() * 180) + 20,
            comments: Math.floor(Math.random() * 30),
            reposts: Math.floor(Math.random() * 10),
            shares: Math.floor(Math.random() * 5),
            caption: "",
            location: n,
            date: me(u),
            timestamp: u,
            isLiked: Math.random() > 0.5,
            isSaved: Math.random() > 0.7,
            isVerified: !1,
            isReal: !1,
            isFallback: !0,
            useRealAvatar: d,
            aspectRatio: "1 / 1",
          });
        }
        return f;
      },
      [de],
    );
  (i.useEffect(() => {
    if (!m || !l) return;
    (async () => {
      const r = [],
        t = `feed_data_${l}`,
        d = `instagram_posts_${l}`,
        b = `chaining_results_${l}`,
        x = le(d),
        k = le(b);
      if ((x || Q(!0), x)) {
        console.log("📦 [FEED] Using cached data for:", l);
        const o = A(d);
        if (
          (o &&
            Array.isArray(o) &&
            (o.length > 0
              ? (console.log("📦 [FEED] Loaded cached posts:", o.length),
                o.slice(0, 12).forEach((n, C) => {
                  const w = V(n, C);
                  w && (w.imageUrl || w.videoUrl) && r.push(w);
                }))
              : console.log(
                "📦 [FEED] Cached posts are empty, using fallback only",
              )),
            !k)
        ) {
          const n = A("chaining_results") || A("instagram_followers");
          n && _(b, n);
        }
        const u = ee(r.length);
        (u.length > 0 &&
          (r.push(...u),
            W(!0),
            localStorage.setItem("is_fallback_data", "true")),
          r.sort((n, C) =>
            n.isFallback !== C.isFallback
              ? n.isFallback
                ? 1
                : -1
              : C.timestamp - n.timestamp,
          ),
          L(r),
          Q(!1));
        return;
      }
      const f = [
        `instagram_posts_${l}`,
        "instagram_posts",
        "feed_real_posts",
        `feed_data_${l}`,
      ];
      for (const o of f)
        try {
          const u = localStorage.getItem(o);
          if (u) {
            const n = JSON.parse(u),
              C = Array.isArray(n)
                ? n
                : n?.posts && Array.isArray(n.posts)
                  ? n.posts
                  : null;
            if (
              C &&
              C.length > 0 &&
              (console.log(`📦 [FEED] Recovered ${C.length} posts from ${o}`),
                C.slice(0, 12).forEach((w, F) => {
                  const D = V(w, F);
                  D && (D.imageUrl || D.videoUrl) && r.push(D);
                }),
                r.length > 0)
            ) {
              _(d, C);
              break;
            }
          }
        } catch { }
      if (r.length > 0) {
        console.log("📦 [FEED] Using localStorage posts, skipping API");
        const o = ee(r.length);
        (o.length > 0 &&
          (r.push(...o),
            W(!0),
            localStorage.setItem("is_fallback_data", "true")),
          r.sort((u, n) =>
            u.isFallback !== n.isFallback
              ? u.isFallback
                ? 1
                : -1
              : n.timestamp - u.timestamp,
          ),
          L(r),
          Q(!1));
        return;
      }
      console.log("📦 [FEED] Fetching fresh data from API for:", l);
      try {
        const o = await Ee(l, m.is_private ?? !1);
        if (
          (console.log("📦 [FEED] Complete data from API:", o),
            (o.error_count && o.error_count > 0) ||
              (o.results?.[0]?.source && o.results[0].source !== "mediafy")
              ? (console.log(
                "🔄 [FEED] API used fallback source:",
                o.results?.[0]?.source,
              ),
                localStorage.setItem("is_fallback_data", "true"),
                W(!0))
              : (localStorage.removeItem("is_fallback_data"), W(!1)),
            o)
        ) {
          (o.lista_perfis_publicos
            ? (_("instagram_followers", o.lista_perfis_publicos),
              _("chaining_results", o.lista_perfis_publicos),
              _(b, o.lista_perfis_publicos),
              console.log(
                "📦 [FEED] Cached lista_perfis_publicos:",
                o.lista_perfis_publicos.length,
              ))
            : o.followers &&
            (_("instagram_followers", o.followers),
              _(b, o.followers),
              console.log("📦 [FEED] Cached followers:", o.followers.length)),
            o.chaining_results &&
            !o.lista_perfis_publicos &&
            (_("chaining_results", o.chaining_results),
              _(b, o.chaining_results),
              console.log(
                "📦 [FEED] Cached chaining_results:",
                o.chaining_results.length,
              )));
          let n = [];
          (o.posts && Array.isArray(o.posts)
            ? ((n = o.posts),
              console.log("📦 [FEED] Using posts array:", n.length))
            : o.followers_posts && Array.isArray(o.followers_posts)
              ? ((n = o.followers_posts),
                console.log("📦 [FEED] Using followers_posts:", n.length))
              : o.feed_posts && Array.isArray(o.feed_posts)
                ? ((n = o.feed_posts),
                  console.log("📦 [FEED] Using feed_posts:", n.length))
                : o.timeline_media?.edges &&
                ((n = o.timeline_media.edges.map((C) => C.node)),
                  console.log("📦 [FEED] Using timeline_media:", n.length)),
            n.slice(0, 12).forEach((C, w) => {
              const F = V(C, w);
              F && (F.imageUrl || F.videoUrl) && r.push(F);
            }),
            console.log("📦 [FEED] Processed posts with media:", r.length),
            _("instagram_posts", n),
            _(d, n),
            _(t, o));
        }
      } catch (o) {
        console.warn("⚠️ [FEED] Error fetching posts from API:", o);
        const u = A(d) || A("instagram_posts") || A("feed_real_posts");
        u &&
          u.length > 0 &&
          (console.log(
            "📦 [FEED] Loading from fallback cache:",
            u.length,
            "posts",
          ),
            u.slice(0, 8).forEach((n, C) => {
              const w = V(n, C);
              w && r.push(w);
            }));
      }
      const c = ee(r.length);
      (c.length > 0 &&
        (r.push(...c), W(!0), localStorage.setItem("is_fallback_data", "true")),
        r.sort((o, u) =>
          o.isFallback !== u.isFallback
            ? o.isFallback
              ? 1
              : -1
            : u.timestamp - o.timestamp,
        ),
        L(r),
        Q(!1));
    })();
  }, [m, l, V, ee, le, _, A]),
    i.useEffect(() => {
      const a = () => {
        const t = window.scrollY;
        (t > se.current && t > 50 ? Y(!0) : t < se.current && Y(!1),
          (se.current = t));
        const d = window.scrollY + window.innerHeight,
          b = document.documentElement.scrollHeight;
        if (d >= b - 300) {
          if (re.current || M || B) return;
          if (z) {
            (Z(!0),
              q(!0),
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100));
            return;
          }
          !z &&
            U < I.length &&
            ((re.current = !0),
              $(!0),
              setTimeout(() => {
                (te((x) => Math.min(x + 3, xe, I.length)),
                  $(!1),
                  (re.current = !1),
                  j(!0));
              }, 1e3));
        }
      },
        r = () => {
          (ae.current && clearTimeout(ae.current),
            (ae.current = setTimeout(a, 10)));
        };
      return (
        window.addEventListener("scroll", r, { passive: !0 }),
        () => window.removeEventListener("scroll", r)
      );
    }, [U, I.length, M, B, z]),
    i.useEffect(() => {
      const a = `ios-notification-shown-${l}`;
      if (localStorage.getItem(a) === "true") return;
      const r = setTimeout(() => {
        (R(!0), localStorage.setItem(a, "true"));
      }, 1e4);
      return () => clearTimeout(r);
    }, [l]));
  const P = i.useCallback((a) => {
    X({ isOpen: !0, action: a });
  }, []),
    ke = i.useCallback(() => {
      X({ isOpen: !1, action: "" });
    }, []),
    ue = i.useCallback(() => {
      const a = new URLSearchParams(g);
      (l && a.set("username", l),
        (window.location.href = `/cta/?${a.toString()}`));
    }, [g, l]),
    we = i.useCallback((a) => {
      L((r) =>
        r.map((t) =>
          t.id === a
            ? {
              ...t,
              isLiked: !t.isLiked,
              likes: t.isLiked ? t.likes - 1 : t.likes + 1,
            }
            : t,
        ),
      );
    }, []),
    ye = i.useCallback((a) => {
      L((r) => r.map((t) => (t.id === a ? { ...t, isSaved: !t.isSaved } : t)));
    }, []),
    _e = i.useCallback(() => {
      (R(!1),
        sessionStorage.setItem("chat-1-user-name", "Fer*****"),
        sessionStorage.setItem(
          "chat-1-user-photo",
          "/images/screenshots/chat1.png",
        ),
        localStorage.setItem("chat-1-read", "true"));
      try {
        const a = localStorage.getItem("direct_read_chats"),
          r = a ? JSON.parse(a) : [];
        (r.includes("chat_15") || r.push("chat_15"),
          localStorage.setItem("direct_read_chats", JSON.stringify(r)));
      } catch { }
      (y(O()), h("/chat/1"));
    }, [h, O]),
    Ne = i.useCallback(() => {
      R(!1);
    }, []);
  return m
    ? e.jsxs("div", {
      className: "fd-screen min-h-screen bg-[#0b1014] text-white lg:flex lg:flex-row lg:h-screen lg:overflow-hidden lg:pb-0",
      children: [
        e.jsxs("nav", {
          className: "fd-left-nav", children: [
            e.jsxs("div", { className: "fd-nav-logo", children: [e.jsx("img", { src: "/images/logos/logo-insta.png", alt: "Instagram", className: "h-7 object-contain lg:hidden" }), e.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "28", height: "28", className: "hidden lg:block", children: e.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" }) })] }),
            e.jsxs("div", {
              className: "fd-nav-items", children: [
                e.jsx("button", { onClick: () => P("P\u00e1gina inicial"), className: "fd-nav-btn fd-nav-btn--active", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: e.jsx("path", { d: "M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" }) }) }), e.jsx("span", { className: "fd-nav-label", children: "P\u00e1gina inicial" })] }),
                e.jsx("button", { onClick: () => P("Reels"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsx("svg", { "aria-label": "Reels", fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", children: e.jsx("path", { d: "M22.935 7.468c-.063-1.36-.307-2.142-.512-2.67a5.341 5.341 0 0 0-1.27-1.95 5.345 5.345 0 0 0-1.95-1.27c-.53-.206-1.311-.45-2.672-.513C15.333 1.012 14.976 1 12 1s-3.333.012-4.532.065c-1.36.063-2.142.307-2.67.512-.77.298-1.371.69-1.95 1.27a5.36 5.36 0 0 0-1.27 1.95c-.206.53-.45 1.311-.513 2.672C1.012 8.667 1 9.024 1 12s.012 3.333.065 4.532c.063 1.36.307 2.142.512 2.67.297.77.69 1.372 1.27 1.95.58.581 1.181.974 1.95 1.27.53.206 1.311.45 2.672.513C8.667 22.988 9.024 23 12 23s3.333-.012 4.532-.065c1.36-.063 2.142-.307 2.67-.512a5.33 5.33 0 0 0 1.95-1.27 5.356 5.356 0 0 0 1.27-1.95c.206-.53.45-1.311.513-2.672.053-1.198.065-1.555.065-4.531s-.012-3.333-.065-4.532Zm-1.998 8.972c-.05 1.07-.228 1.652-.38 2.04-.197.51-.434.874-.82 1.258a3.362 3.362 0 0 1-1.258.82c-.387.151-.97.33-2.038.379-1.162.052-1.51.063-4.441.063s-3.28-.01-4.44-.063c-1.07-.05-1.652-.228-2.04-.38a3.354 3.354 0 0 1-1.258-.82 3.362 3.362 0 0 1-.82-1.258c-.151-.387-.33-.97-.379-2.038C3.011 15.28 3 14.931 3 12s.01-3.28.063-4.44c.05-1.07.228-1.652.38-2.04.197-.51.434-.875.82-1.26a3.372 3.372 0 0 1 1.258-.819c.387-.15.97-.329 2.038-.378C8.72 3.011 9.069 3 12 3s3.28.01 4.44.063c1.07.05 1.652.228 2.04.38.51.197.874.433 1.258.82.385.382.622.747.82 1.258.151.387.33.97.379 2.038C20.989 8.72 21 9.069 21 12s-.01 3.28-.063 4.44Zm-4.584-6.828-5.25-3a2.725 2.725 0 0 0-2.745.01A2.722 2.722 0 0 0 6.988 9v6c0 .992.512 1.88 1.37 2.379.432.25.906.376 1.38.376.468 0 .937-.123 1.365-.367l5.25-3c.868-.496 1.385-1.389 1.385-2.388s-.517-1.892-1.385-2.388Zm-.993 3.04-5.25 3a.74.74 0 0 1-.748-.003.74.74 0 0 1-.374-.649V9a.74.74 0 0 1 .374-.65.737.737 0 0 1 .748-.002l5.25 3c.341.196.378.521.378.652s-.037.456-.378.651Z" }) }) }), e.jsx("span", { className: "fd-nav-label", children: "Reels" })] }),
                e.jsxs("button", { onClick: () => { const a = g.get("username"); h("/direct", { additionalParams: a ? { username: a } : void 0 }); }, className: "fd-nav-btn", children: [e.jsxs("span", { className: "fd-nav-icon fd-nav-icon-wrap", children: [e.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("path", { d: "M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z", strokeLinejoin: "round" }), e.jsx("line", { x1: "7.488", x2: "15.515", y1: "12.208", y2: "7.641" })] }), p > 0 && e.jsx("span", { className: "absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold px-1", children: p })] }), e.jsx("span", { className: "fd-nav-label", children: "Mensagens" })] }),
                e.jsx("button", { onClick: () => P("Pesquisa"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("circle", { cx: "11", cy: "11", r: "8" }), e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }) }), e.jsx("span", { className: "fd-nav-label", children: "Pesquisa" })] }),
                e.jsx("button", { onClick: () => P("Explorar"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("circle", { cx: "12", cy: "12", r: "10" }), e.jsx("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })] }) }), e.jsx("span", { className: "fd-nav-label", children: "Explorar" })] }),
                e.jsxs("button", { onClick: () => P("Notifica\u00e7\u00f5es"), className: "fd-nav-btn", children: [e.jsxs("span", { className: "fd-nav-icon fd-nav-icon-wrap", children: [e.jsx("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }) }), e.jsx("span", { className: "fd-notif-dot" })] }), e.jsx("span", { className: "fd-nav-label", children: "Notifica\u00e7\u00f5es" })] }),
                e.jsx("button", { onClick: () => P("Criar"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }), e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "16" }), e.jsx("line", { x1: "8", y1: "12", x2: "16", y2: "12" })] }) }), e.jsx("span", { className: "fd-nav-label", children: "Criar" })] }),
                e.jsx("button", { onClick: () => P("Painel"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("rect", { x: "3", y: "12", width: "4", height: "9", rx: "1" }), e.jsx("rect", { x: "10", y: "7", width: "4", height: "14", rx: "1" }), e.jsx("rect", { x: "17", y: "3", width: "4", height: "18", rx: "1" })] }) }), e.jsx("span", { className: "fd-nav-label", children: "Painel" })] }),
                e.jsxs("button", { onClick: () => P("Perfil"), className: "fd-nav-btn", children: [e.jsxs("span", { className: "fd-nav-icon fd-nav-icon--avatar", children: [e.jsx("img", { src: (m == null ? void 0 : m.profile_pic_url) || "/images/avatars/perfil-sem-foto.jpeg", alt: "", className: "fd-avatar", onError: (a) => { a.target.src = "/images/avatars/perfil-sem-foto.jpeg" } })] }), e.jsx("span", { className: "fd-nav-label", children: "Perfil" })] }),
              ]
            }),
            e.jsxs("div", {
              className: "fd-nav-bottom", children: [
                e.jsx("button", { onClick: () => P("Mais"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsx("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: e.jsx("path", { d: "M3 6h18M3 12h18M3 18h18" }) }) }), e.jsx("span", { className: "fd-nav-label", children: "Mais" })] }),
                e.jsx("button", { onClick: () => P("Meta"), className: "fd-nav-btn", children: [e.jsx("span", { className: "fd-nav-icon", children: e.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: "24", height: "24", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5" }), e.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.5" }), e.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5" }), e.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5" })] }) }), e.jsx("span", { className: "fd-nav-label", children: "Também da Meta" })] }),
              ]
            }),
          ]
        }),
        e.jsxs("div", {
          className: "fd-center", children: [
            e.jsx(Ae, {
              isHidden: H,
              unreadMessages: p,
              onMessagesClick: () => P("Mensagens"),
              onNotificationsClick: () => {
                const a = new URLSearchParams(g);
                (l && a.set("username", l), h(`/notifications?${a.toString()}`));
              },
            }),
            e.jsxs("div", {
              className: "fd-stories-outer", children: [
                // e.jsx("button", {
                //   className: "fd-stories-arrow fd-stories-arrow--prev",
                //   onClick: () => {
                //     const s = document.querySelector(".fd-stories-outer .overflow-x-auto");
                //     s && (s.scrollLeft -= 300);
                //   },
                //   children: e.jsx("svg", { viewBox: "0 0 24 24", fill: "none", width: "16", height: "16", stroke: "#000", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M15 18l-6-6 6-6" }) })
                // }),
                e.jsx("div", {
                  className: "padding-top-60",
                  children: e.jsx(De, {
                    stories: S,
                    onStoryClick: (a) => {
                      a.username !== m.username && P("Visualizar story");
                    },
                    onAddStoryClick: () => P("Adicionar story"),
                  }),
                }),
                // e.jsx("button", {
                //   className: "fd-stories-arrow fd-stories-arrow--next",
                //   onClick: () => {
                //     const s = document.querySelector(".fd-stories-outer .overflow-x-auto");
                //     s && (s.scrollLeft += 300);
                //   },
                //   children: e.jsx("svg", { viewBox: "0 0 24 24", fill: "none", width: "16", height: "16", stroke: "#000", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M9 18l6-6-6-6" }) })
                // }),
              ]
            }),
            B &&
            e.jsxs("div", {
              className: "flex items-center gap-3 animate-fade-in-banner",
              style: {
                padding: "20px 16px",
                background: "rgb(11, 16, 20)",
                marginBottom: "16px",
              },
              children: [
                e.jsx("div", {
                  className:
                    "all-posts-seen-icon shrink-0 flex items-center justify-center rounded-full relative",
                  style: {
                    width: "28.8px",
                    height: "28.8px",
                    background: "rgb(11, 16, 20)",
                    padding: "2px",
                  },
                  children: e.jsxs("svg", {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                      width: "16px",
                      height: "16px",
                      position: "relative",
                      zIndex: 1,
                    },
                    children: [
                      e.jsx("defs", {
                        children: e.jsxs("linearGradient", {
                          id: "gradient-check-feed",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%",
                          children: [
                            e.jsx("stop", {
                              offset: "0%",
                              style: { stopColor: "#833AB4", stopOpacity: 1 },
                            }),
                            e.jsx("stop", {
                              offset: "20%",
                              style: { stopColor: "#C13584", stopOpacity: 1 },
                            }),
                            e.jsx("stop", {
                              offset: "40%",
                              style: { stopColor: "#E1306C", stopOpacity: 1 },
                            }),
                            e.jsx("stop", {
                              offset: "60%",
                              style: { stopColor: "#FD1D1D", stopOpacity: 1 },
                            }),
                            e.jsx("stop", {
                              offset: "80%",
                              style: { stopColor: "#F77737", stopOpacity: 1 },
                            }),
                            e.jsx("stop", {
                              offset: "100%",
                              style: { stopColor: "#FCAF45", stopOpacity: 1 },
                            }),
                          ],
                        }),
                      }),
                      e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "3",
                        d: "M5 13l4 4L19 7",
                        stroke: "url(#gradient-check-feed)",
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  style: {
                    fontSize: "11.2px",
                    color: "rgb(168, 168, 168)",
                    lineHeight: "1.4",
                    flex: 1,
                  },
                  children: [
                    "Você viu todas as publicações disponíveis na prévia grátis, seja membro VIP para ver todos os posts.",
                    " ",
                    e.jsx("span", {
                      onClick: () => {
                        window.location.href = `/cta/${window.location.search || ""}`;
                      },
                      style: {
                        color: "rgb(0, 149, 246)",
                        textDecoration: "none",
                        cursor: "pointer",
                      },
                      children: "Virar VIP",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "mt-4",
              children: ne
                ? e.jsx(Oe, { count: 4 })
                : I.length === 0
                  ? e.jsx("div", {
                    className:
                      "flex flex-col items-center justify-center py-12 gap-4",
                    children: e.jsx("p", {
                      className: "text-gray-400 text-sm",
                      children: "Nenhuma publicação encontrada",
                    }),
                  })
                  : e.jsxs(e.Fragment, {
                    children: [
                      I.slice(0, U).map((a) =>
                        e.jsx(
                          Ue,
                          {
                            post: a,
                            onLike: () => we(a.id),
                            onSave: () => ye(a.id),
                            onComment: () => P("Comentar"),
                            onShare: () => P("Enviar"),
                            onRepost: () => P("Repostar"),
                            onMoreOptions: () => P("Mais opções"),
                            onProfileClick: () => P("Perfil"),
                          },
                          a.id,
                        ),
                      ),
                      M &&
                      e.jsx("div", {
                        className: "flex justify-center py-6",
                        children: e.jsx("div", {
                          className: "instagram-spinner",
                          children: e.jsxs("svg", {
                            className: "animate-spin",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              e.jsx("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "rgba(255,255,255,0.2)",
                                strokeWidth: "3",
                                fill: "none",
                              }),
                              e.jsx("path", {
                                d: "M12 2C6.48 2 2 6.48 2 12",
                                stroke: "white",
                                strokeWidth: "3",
                                strokeLinecap: "round",
                                fill: "none",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
            }),
          ]
        }),
        e.jsxs("aside", {
          className: "fd-right-panel", children: [
            e.jsxs("div", {
              className: "fd-rp-profile", children: [
                e.jsx("img", { src: (m == null ? void 0 : m.profile_pic_url) || "/images/avatars/perfil-sem-foto.jpeg", alt: "", className: "fd-rp-avatar", style: { width: "44px", height: "44px" }, onError: (ev) => { ev.target.src = "/images/avatars/perfil-sem-foto.jpeg" } }),
                e.jsxs("div", {
                  className: "fd-rp-info", children: [
                    e.jsx("span", { className: "fd-rp-username", children: (m == null ? void 0 : m.username) || "usu\u00e1rio" }),
                    e.jsx("span", { className: "fd-rp-name", children: (m == null ? void 0 : m.full_name) || (m == null ? void 0 : m.username) || "" }),
                  ]
                }),
                e.jsx("button", { className: "fd-rp-switch", onClick: () => P("Trocar conta"), children: "Mudar" }),
              ]
            }),
            e.jsxs("div", {
              className: "fd-rp-suggestions", children: [
                e.jsxs("div", {
                  className: "fd-rp-sugg-header", children: [
                    e.jsx("span", { className: "fd-rp-sugg-label", children: "Sugest\u00f5es para voc\u00ea" }),
                    e.jsx("button", { className: "fd-rp-ver-tudo", children: "Ver tudo" }),
                  ]
                }),
                S.slice(1, 5).map((t) => e.jsxs("div", {
                  className: "fd-rp-sugg-item", children: [
                    e.jsx("img", { src: t.profilePic || "/images/avatars/perfil-sem-foto.jpeg", alt: "", className: "fd-rp-sugg-avatar", style: { width: "32px", height: "32px" }, onError: (ev) => { ev.target.src = "/images/avatars/perfil-sem-foto.jpeg" } }),
                    e.jsxs("div", {
                      className: "fd-rp-sugg-info", children: [
                        e.jsx("span", { className: "fd-rp-sugg-name", children: t.username }),
                        e.jsx("span", { className: "fd-rp-sugg-sub", children: "Seguido(a) por " + ((t.full_name == null ? void 0 : t.full_name.split(" ")[0]) || "algu\u00e9m") }),
                      ]
                    }),
                    e.jsx("button", { className: "fd-rp-follow", children: "Seguindo" }),
                  ]
                }, t.username || t.id)),
              ]
            }),
            e.jsx("div", { className: "fd-rp-footer", children: e.jsx("div", { className: "fd-rp-footer-links", children: "Sobre \u2022 Ajuda \u2022 Imprensa \u2022 API \u2022 Carreiras \u2022 Privacidade \u2022 Termos \u2022 Localiza\u00e7\u00f5es \u2022 Idioma \u2022 Meta Verified" }) }),
          ]
        }),
        e.jsx(Me, { onGoToCTA: ue, bottomPosition: "1px" }),
        e.jsx(Be, {
          profilePic: m.profile_pic_url,
          onHomeClick: () => { },
          onSearchClick: () => P("Buscar"),
          onAddClick: () => P("Adicionar conteúdo"),
          onReelsClick: () => P("Reels"),
          onProfileClick: () => P("Perfil"),
        }),
        e.jsx(Le, {
          isOpen: G.isOpen,
          action: G.action,
          onClose: ke,
          onGoToCTA: ue,
        }),
        T &&
        e.jsx(Te, {
          senderName: "Fer*****",
          message: `${m?.full_name?.split(" ")[0] || m?.username || "vc"} adivinha o que vc esqueceu aqui? kkkkk`,
          onClick: _e,
          onClose: Ne,
          profilePic: S[1]?.profilePic,
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
function ie(s) {
  return !s || s.length === 0
    ? "xxx*****"
    : s.includes("*")
      ? s
      : (s.length >= 3 ? s.substring(0, 3) : s) + "*****";
}
function me(s) {
  if (!s || s <= 0) return "";
  const h = Date.now() / 1e3 - s,
    l = Math.floor(h / 3600),
    m = Math.floor(h / 86400);
  if (l < 1) return "Agora";
  if (l < 24) return `há ${l} hora${l > 1 ? "s" : ""}`;
  if (m <= 7) return `há ${m} dia${m > 1 ? "s" : ""}`;
  const v = new Date(s * 1e3),
    S = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
  return `${v.getDate()} de ${S[v.getMonth()]} de ${v.getFullYear()}`;
}
export { Ge as default, Ye as meta };
