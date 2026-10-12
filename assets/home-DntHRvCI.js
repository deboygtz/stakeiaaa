import { a as t, p as e, w as Z, z as Q } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { M as X } from "./MatrixCanvas-gBTz1CWi.js";
import { u as $ } from "./context-DVPZRWQf.js";
import { g as ee, a as te } from "./random-Bp_wQn4x.js";
import { u as se } from "./useNavigateWithUTM-1Hi9sm_B.js";
import {
  c as J,
  f as ne,
  g as ae,
  a as re,
  b as ie,
  d as U,
  e as oe,
  s as le,
  h as ce,
} from "./api-bupDNBJY.js";
import "./utm-ClCK1WqV.js";
function F({
  text: n,
  speed: r = 60,
  delay: o = 0,
  enabled: y = !0,
  onComplete: b,
}) {
  const [N, f] = t.useState(""),
    [h, i] = t.useState(!1),
    [c, j] = t.useState(!1),
    d = t.useRef(b);
  t.useEffect(() => {
    d.current = b;
  }, [b]);
  const x = t.useCallback(() => {
    (f(""), i(!1), j(!1));
  }, []);
  return (
    t.useEffect(() => {
      if (!y || !n) {
        (f(""), i(!1), j(!1));
        return;
      }
      (f(""), i(!1), j(!1));
      let a = 0,
        m = null,
        w = !1;
      return (
        (m = setTimeout(() => {
          if (w) return;
          j(!0);
          const _ = () => {
            if (!w)
              if (a < n.length) {
                const p = n[a];
                if (p === "<") {
                  const I = n.indexOf(">", a);
                  if (I !== -1) {
                    const E = n.substring(a, I + 1);
                    (f((k) => k + E), (a = I + 1), (m = setTimeout(_, r / 3)));
                    return;
                  }
                }
                (f((I) => I + p), a++, (m = setTimeout(_, r)));
              } else (j(!1), i(!0), d.current?.());
          };
          _();
        }, o)),
        () => {
          ((w = !0), m && clearTimeout(m));
        }
      );
    }, [n, r, o, y]),
    { displayedText: N, isComplete: h, isTyping: c, reset: x }
  );
}
function de({ className: n = "w-5 h-5", strokeWidth: r = 2.5, style: o }) {
  return e.jsxs("svg", {
    className: n,
    style: o,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: r,
    children: [
      e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      }),
      e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
      }),
    ],
  });
}
function Y({ className: n = "w-5 h-5", strokeWidth: r = 2 }) {
  return e.jsx("svg", {
    className: n,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: r,
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 5l7 7-7 7",
    }),
  });
}
function ue({ className: n = "w-5 h-5", strokeWidth: r = 2 }) {
  return e.jsx("svg", {
    className: `animate-spin ${n}`,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: r,
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    }),
  });
}
function fe({ className: n = "w-4 h-4", strokeWidth: r = 2 }) {
  return e.jsx("svg", {
    className: n,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: r,
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    }),
  });
}
function me({ className: n = "w-5 h-5", strokeWidth: r = 2.5 }) {
  return e.jsx("svg", {
    className: n,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: r,
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
    }),
  });
}
function q({ className: n = "w-10 h-10", strokeWidth: r = 2 }) {
  return e.jsx("svg", {
    className: n,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: r,
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    }),
  });
}
function pe({ visible: n }) {
  return e.jsxs("div", {
    style: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "3px",
      justifyContent: "center",
      marginBottom: 0,
      opacity: n ? 1 : 0,
      visibility: n ? "visible" : "hidden",
      transition: "opacity 0.5s ease-in, visibility 0.5s ease-in",
    },
    children: [
      e.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "6px 10px",
        },
        children: [
          e.jsx("svg", {
            style: { color: "#6B59D8", width: "12px", height: "12px" },
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            strokeWidth: 2.5,
            children: e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            }),
          }),
          e.jsx("span", {
            style: {
              fontSize: "11px",
              fontWeight: 400,
              color: "#f5f5f5",
              whiteSpace: "nowrap",
            },
            children: "100% Anônimo",
          }),
        ],
      }),
      e.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "6px 10px",
        },
        children: [
          e.jsx("svg", {
            style: { color: "#6B59D8", width: "12px", height: "12px" },
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            strokeWidth: 2.5,
            children: e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
            }),
          }),
          e.jsx("span", {
            style: {
              fontSize: "11px",
              fontWeight: 400,
              color: "#f5f5f5",
              whiteSpace: "nowrap",
            },
            children: "Sem Senha",
          }),
        ],
      }),
      e.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "6px 10px",
        },
        children: [
          e.jsx("svg", {
            style: { color: "#6B59D8", width: "12px", height: "12px" },
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            strokeWidth: 2.5,
            children: e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5 13l4 4L19 7",
            }),
          }),
          e.jsx("span", {
            style: {
              fontSize: "11px",
              fontWeight: 400,
              color: "#f5f5f5",
              whiteSpace: "nowrap",
            },
            children: "Teste Grátis",
          }),
        ],
      }),
    ],
  });
}
function z(n) {
  return n >= 1e6
    ? (n / 1e6).toFixed(1).replace(".", ",") + " mi"
    : n >= 1e5
      ? Math.floor(n / 1e3) + " mil"
      : n >= 11e3
        ? (n / 1e3).toFixed(1).replace(".", ",") + " mil"
        : n.toLocaleString("pt-BR");
}
function V(n) {
  const r = n.trim().replace(/^@+/, "");
  return r
    ? r.length < 5
      ? {
        valid: !1,
        error: "O nome de usuário deve ter pelo menos 5 caracteres!",
      }
      : /^[a-zA-Z0-9_.-]+$/.test(r)
        ? /[a-zA-Z]/.test(r)
          ? { valid: !0 }
          : {
            valid: !1,
            error: "O nome de usuário deve conter pelo menos 1 letra!",
          }
        : {
          valid: !1,
          error: "O nome de usuário só pode conter letras, números, _, . e -",
        }
    : { valid: !1, error: "Digite um nome de usuário válido!" };
}
function K(n) {
  return n
    .trim()
    .replace(/^@+/, "")
    .replace(/[^a-zA-ZÀ-ÿ0-9_.-]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
function ge() {
  return [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ][new Date().getDay()];
}
function he({ visible: n, initialValue: r = 81455 }) {
  const [o, y] = t.useState(r),
    [b, N] = t.useState(!1),
    f = t.useRef(null);
  (t.useEffect(() => {
    N(!0);
    const c = localStorage.getItem("stats_number");
    c ? y(parseInt(c, 10)) : localStorage.setItem("stats_number", r.toString());
  }, [r]),
    t.useEffect(() => {
      if (!(!n || !b))
        return (
          (f.current = setInterval(() => {
            y((c) => {
              const j = Math.floor(Math.random() * 21) + 11,
                d = c + j;
              return (localStorage.setItem("stats_number", d.toString()), d);
            });
          }, 1e3)),
          () => {
            f.current && clearInterval(f.current);
          }
        );
    }, [n, b]));
  const h = o.toLocaleString("pt-BR"),
    i = ge();
  return e.jsx("div", {
    className: "text-center",
    style: {
      marginTop: "16px",
      opacity: n ? 1 : 0,
      visibility: n ? "visible" : "hidden",
      transition: "opacity 0.5s ease-in, visibility 0.5s ease-in",
    },
    children: e.jsxs("p", {
      className: "text-gray-400 font-medium",
      style: { fontSize: "14px", letterSpacing: "-0.01em" },
      children: [
        e.jsxs("span", {
          style: {
            background: "linear-gradient(135deg, #4a37b6, #ab58f4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700,
          },
          children: ["+", h],
        }),
        " ",
        e.jsxs("span", { children: ["perfis analisados hoje (", i, ")"] }),
      ],
    }),
  });
}
function xe({
  onSubmit: n,
  isLoading: r = !1,
  error: o = null,
  onErrorClear: y,
  onTutorialClick: b,
}) {
  const { t: N } = $(),
    [f, h] = t.useState(""),
    [i, c] = t.useState(!1),
    j = t.useCallback(
      (a) => {
        const m = a.target.value,
          w = K(m);
        (h(w), o && y?.());
        const { valid: u } = V(w);
        c(u);
      },
      [o, y],
    ),
    d = t.useCallback(() => {
      const a = K(f),
        { valid: m, error: w } = V(a);
      m &&
        (window.dataLayer.push({ event: "landing_username_submit" }), n(a));
    }, [f, n]),
    x = t.useCallback(
      (a) => {
        a.key === "Enter" && (a.preventDefault(), d());
      },
      [d],
    );
  return (
    t.useEffect(() => {
      const a = document.getElementById("usernameInput");
      a && a.focus();
    }, []),
    e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className: "relative flex items-center",
          children: [
            e.jsx("span", {
              className:
                "absolute left-4 font-semibold text-lg text-[#4a37b6] z-10",
              children: "@",
            }),
            e.jsx("input", {
              type: "text",
              id: "usernameInput",
              value: f,
              onChange: j,
              onKeyDown: x,
              placeholder: N.landing.inputPlaceholder,
              className:
                "input-dark w-full py-4 pr-14 pl-10 rounded-full transition-all duration-300",
              autoComplete: "off",
              disabled: r,
              style: {
                opacity: r ? 0.6 : 1,
                cursor: r ? "not-allowed" : "text",
              },
            }),
            e.jsx("button", {
              type: "button",
              onClick: d,
              disabled: !i || r,
              className:
                "absolute right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center transition-all duration-300",
              style: {
                display: i || r ? "flex" : "none",
                borderColor: "#4a37b6",
                background: "linear-gradient(135deg, #4a37b6 0%, #ab58f4 100%)",
                color: "#F9F9F9",
                cursor: r ? "not-allowed" : "pointer",
              },
              children: r
                ? e.jsx(ue, { className: "w-5 h-5" })
                : e.jsx(Y, { className: "w-5 h-5" }),
            }),
          ],
        }),
        o &&
        e.jsxs("div", {
          className: "error-message animate-fade-in",
          style: { animation: "fadeInUp 0.3s ease-out" },
          onClick: (a) => {
            a.target.tagName === "A" && (a.preventDefault(), b?.());
          },
          children: [
            e.jsx(fe, { className: "w-4 h-4 flex-shrink-0" }),
            e.jsx("span", { dangerouslySetInnerHTML: { __html: o } }),
          ],
        }),
      ],
    })
  );
}
function ye({
  onUsernameSubmit: n,
  isLoading: r = !1,
  error: o = null,
  onErrorClear: y,
  onTutorialClick: b,
  skipAnimations: N = !1,
}) {
  const { t: f } = $(),
    [h, i] = t.useState(!1);
  t.useEffect(() => {
    i(!0);
  }, []);
  const c = N,
    [j, d] = t.useState(!1),
    [x, a] = t.useState(!1),
    [m, w] = t.useState(!1),
    [u, _] = t.useState(!1),
    [p, I] = t.useState(!1),
    [E, k] = t.useState("");
  t.useEffect(() => {
    h && c && (d(!0), a(!0), w(!0), _(!0));
  }, [h, c]);
  const B = f.landing.titleHtml,
    M = f.landing.subtitleHtml,
    {
      displayedText: C,
      isTyping: L,
      isComplete: T,
    } = F({
      text: B,
      speed: 60,
      delay: 500,
      enabled: h && !c,
      onComplete: () => {
        c || d(!0);
      },
    }),
    {
      displayedText: P,
      isTyping: R,
      isComplete: A,
    } = F({
      text: M,
      speed: 45,
      delay: 200,
      enabled: h && j && !c,
      onComplete: () => {
        c ||
          setTimeout(() => {
            (a(!0), setTimeout(() => w(!0), 300), setTimeout(() => _(!0), 500));
          }, 300);
      },
    }),
    H = t.useCallback(() => {
      (I(!0),
        a(!1),
        k(
          'Digite o nome de usuário da pessoa a ser espionada, sem o arroba "@"',
        ));
    }, []),
    g = '<span class="typing-cursor">|</span>',
    s = () => (h ? (c ? B : L ? (C || "") + g : T ? C : g) : "&nbsp;"),
    l = () =>
      p
        ? E
        : h
          ? c
            ? M
            : j
              ? R
                ? (P || "") + g
                : A
                  ? P
                  : g
              : "&nbsp;"
          : "&nbsp;";
  return e.jsxs("div", {
    className: "w-full max-w-[420px] mx-auto relative",
    children: [
      e.jsxs("div", {
        className: "glass-card",
        style: { borderRadius: "28px", padding: "23px", marginTop: "-30px" },
        children: [
          e.jsx("div", {
            className: "flex justify-center",
            style: { marginBottom: "25px" },
            children: e.jsx("div", {
              style: { maxWidth: "97px" },
              className: "animate-logo-fade-in",
              children: e.jsx("img", {
                alt: "Logo do projeto",
                className: "w-full h-auto object-contain",
                src: "/images/logos/logo-vert-transparente.png",
              }),
            }),
          }),
          e.jsxs("div", {
            className: "text-center",
            style: { marginBottom: "24px" },
            children: [
              e.jsx("h1", {
                className: "font-bold text-gray-100",
                style: {
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                  fontSize: "clamp(25.2px, 4.2vw, 37.8px)",
                  marginBottom: "12px",
                  minHeight: "78px",
                },
                dangerouslySetInnerHTML: { __html: s() },
              }),
              e.jsx("h2", {
                className: "font-medium text-gray-400",
                style: {
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  fontSize: "18px",
                  textAlign: "center",
                  marginBottom: p ? "16px" : "0",
                  minHeight: p ? "auto" : "54px",
                },
                dangerouslySetInnerHTML: { __html: l() },
              }),
            ],
          }),
          e.jsx("div", {
            style: { marginBottom: "20px", minHeight: "56px" },
            children: p
              ? e.jsx(xe, {
                onSubmit: n,
                isLoading: r,
                error: o,
                onErrorClear: y,
                onTutorialClick: b,
              })
              : e.jsx("button", {
                type: "button",
                onClick: H,
                disabled: !x && !c,
                className:
                  "btn-primary btn-shimmer w-full text-white font-semibold transition-all duration-300",
                style: {
                  borderRadius: "24px",
                  padding: "16px 24px",
                  opacity: x || c ? 1 : 0,
                  transform: x || c ? "translateY(0)" : "translateY(10px)",
                  visibility: x || c ? "visible" : "hidden",
                  transition:
                    "opacity 0.4s ease-out, transform 0.4s ease-out, visibility 0.4s ease-out",
                  position: "relative",
                  zIndex: 10,
                },
                children: e.jsxs("span", {
                  className: "flex items-center justify-center gap-2",
                  style: { fontSize: "16px", fontWeight: 600 },
                  children: [
                    e.jsx(de, {
                      className: "animate-eye-blink",
                      style: { width: "20px", height: "20px" },
                    }),
                    e.jsx("span", { children: f.landing.spyNow }),
                  ],
                }),
              }),
          }),
          e.jsx("div", {
            style: {
              opacity: (m || c) && !p ? 1 : 0,
              transform: (m || c) && !p ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
            },
            children: e.jsx(pe, { visible: (m || c) && !p }),
          }),
        ],
      }),
      e.jsx("div", {
        style: {
          opacity: (u || c) && !p ? 1 : 0,
          transform: (u || c) && !p ? "translateY(0)" : "translateY(10px)",
          transition:
            "opacity 0.4s ease-out 0.1s, transform 0.4s ease-out 0.1s",
        },
        children: e.jsx(he, { visible: (u || c) && !p }),
      }),
    ],
  });
}
function ve({ isOpen: n, onClose: r, onConfirm: o, profile: y }) {
  const { t: b } = $(),
    [N, f] = t.useState(!1),
    [h, i] = t.useState(!1),
    c = t.useRef(null),
    j = t.useRef(null),
    { displayedText: d } = F({
      text: b.landing.confirmInstagram,
      speed: 60,
      delay: 200,
      enabled: n,
    });
  if (
    (t.useEffect(() => {
      if (!n) return;
      const a = c.current;
      if (!a) return;
      const m = a.getContext("2d");
      if (!m) return;
      ((a.width = window.innerWidth), (a.height = window.innerHeight));
      const w = "STALKEA.AI",
        u = 13;
      m.font = `${u}px monospace`;
      const _ = Math.floor(a.width / u),
        p = [];
      for (let k = 0; k < _; k++) p[k] = 1;
      const I = () => {
        ((m.fillStyle = "rgba(4, 6, 7, 0.09)"),
          m.fillRect(0, 0, a.width, a.height));
        for (let k = 0; k < p.length; k++) {
          const B = w[Math.floor(Math.random() * w.length)];
          ((m.fillStyle =
            k % 2 === 0
              ? "rgba(74, 55, 182, 0.9)"
              : "rgba(171, 88, 244, 0.9)"),
            m.fillText(B, u * k, u * p[k]),
            p[k]++,
            u * p[k] > a.height && Math.random() > 0.95 && (p[k] = 0));
        }
        j.current = requestAnimationFrame(I);
      },
        E = setInterval(I, 33);
      return () => {
        (clearInterval(E), j.current && cancelAnimationFrame(j.current));
      };
    }, [n]),
      t.useEffect(() => {
        n || (f(!1), i(!1));
      }, [n]),
      !n)
  )
    return null;
  const x = N || h || !y.profile_pic_url;
  return e.jsxs("div", {
    className: "modal-overlay",
    style: { opacity: x ? 1 : 0, transition: "opacity 0.3s ease" },
    children: [
      e.jsx("canvas", {
        ref: c,
        className: "absolute inset-0 pointer-events-none",
        style: { opacity: 0.35 },
      }),
      e.jsxs("div", {
        className:
          "w-full max-w-md rounded-3xl shadow-2xl border border-gray-700/20 transition-all duration-500 ease-out",
        style: {
          background: "#0C1011",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 11,
          padding: "18px",
          opacity: x ? 1 : 0,
          transform: x ? "scale(1)" : "scale(0.95)",
        },
        children: [
          e.jsxs("div", {
            className: "text-center mb-0",
            children: [
              e.jsx("h3", {
                className: "font-bold mb-1",
                style: {
                  fontSize: "1.425rem",
                  background:
                    "linear-gradient(135deg, #4a37b6 0%, #ab58f4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                },
                children: d,
              }),
              e.jsxs("p", {
                className: "text-base text-gray-300 mb-4 mt-2",
                children: [
                  b.landing.confirmQuestion,
                  " ",
                  e.jsxs("span", {
                    className: "font-bold text-white",
                    children: ["@", y.username],
                  }),
                  "?",
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center mb-[18px]",
            children: [
              e.jsx("div", {
                className: "flex-shrink-0 mr-5",
                children: e.jsx("div", {
                  className:
                    "rounded-full overflow-hidden bg-[rgba(74,55,182,0.2)] flex items-center justify-center",
                  style: { width: "81px", height: "81px" },
                  children:
                    y.profile_pic_url && !h
                      ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("img", {
                            src: y.profile_pic_url,
                            alt: "Foto de perfil",
                            className: "w-full h-full object-cover",
                            onLoad: () => f(!0),
                            onError: () => {
                              (i(!0), f(!0));
                            },
                            style: { display: h ? "none" : "block" },
                          }),
                          h &&
                          e.jsx(q, {
                            className: "w-10 h-10 text-[#6B59D8]",
                          }),
                        ],
                      })
                      : e.jsx(q, { className: "w-10 h-10 text-[#6B59D8]" }),
                }),
              }),
              e.jsxs("div", {
                className: "flex-1 flex justify-between text-center gap-5",
                children: [
                  y.media_count !== void 0 &&
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-white font-semibold text-[15px] m-0 mb-0.5 leading-none",
                        children: z(y.media_count),
                      }),
                      e.jsx("p", {
                        className:
                          "text-gray-400 text-[13px] m-0 leading-none whitespace-nowrap",
                        children: b.landing.posts,
                      }),
                    ],
                  }),
                  y.follower_count !== void 0 &&
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-white font-semibold text-[15px] m-0 mb-0.5 leading-none",
                        children: z(y.follower_count),
                      }),
                      e.jsx("p", {
                        className:
                          "text-gray-400 text-[13px] m-0 leading-none whitespace-nowrap",
                        children: b.landing.followers,
                      }),
                    ],
                  }),
                  y.following_count !== void 0 &&
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-white font-semibold text-[15px] m-0 mb-0.5 leading-none",
                        children: z(y.following_count),
                      }),
                      e.jsx("p", {
                        className:
                          "text-gray-400 text-[13px] m-0 leading-none whitespace-nowrap",
                        children: b.landing.following,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.biography &&
          e.jsx("div", {
            className: "mb-5 px-2",
            children: e.jsx("p", {
              className:
                "text-gray-100 text-sm leading-snug whitespace-pre-line m-0",
              style: { lineHeight: 1.4 },
              children: y.biography,
            }),
          }),
          e.jsx("div", {
            className: "text-center mb-4",
            children: e.jsx("div", {
              className:
                "flex items-center justify-center p-[11px_18px] rounded-[11px] w-full",
              style: {
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
              },
              children: e.jsxs("span", {
                className:
                  "text-[10px] font-normal text-red-500 leading-snug text-center",
                children: [
                  e.jsx(me, {
                    className:
                      "w-[17.6px] h-[17.6px] text-red-500 align-middle mr-1 inline-block",
                  }),
                  b.landing.searchWarning,
                ],
              }),
            }),
          }),
          e.jsxs("div", {
            className: "flex space-x-3",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  (window.dataLayer.push({ event: "landing_correct_at" }), r());
                },
                className:
                  "flex-1 py-3 px-4 rounded-2xl text-white font-bold hover:bg-gray-800 transition-colors duration-200 text-sm",
                style: { outline: "2px solid #374151", outlineOffset: "0px" },
                children: b.landing.correctAt,
              }),
              e.jsxs("button", {
                type: "button",
                onClick: () => {
                  (window.dataLayer.push({ event: "landing_confirm_profile" }),
                    o());
                },
                className:
                  "flex-1 py-3 px-4 rounded-2xl text-white font-bold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center text-sm",
                style: {
                  background:
                    "linear-gradient(135deg, #4a37b6 0%, #ab58f4 100%)",
                },
                children: [
                  b.landing.confirm,
                  e.jsx(Y, { className: "w-5 h-5 ml-2 animate-arrow-slide" }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function be({ username: n, onComplete: r, onFetchData: o }) {
  const { t: y } = $(),
    [b, N] = t.useState(""),
    [f, h] = t.useState(!1),
    [i, c] = t.useState("testing"),
    [j, d] = t.useState(0),
    [x, a] = t.useState(!1),
    [m, w] = t.useState(!1),
    [u, _] = t.useState(0),
    p = t.useRef(r),
    I = t.useRef(o),
    E = t.useRef(!1),
    k = t.useRef(!1),
    B = t.useRef(i);
  (t.useEffect(() => {
    ((p.current = r), (I.current = o));
  }, [r, o]),
    t.useEffect(() => {
      k.current = m;
    }, [m]),
    t.useEffect(() => {
      B.current = i;
    }, [i]));
  const M = (C) =>
    !C || C.length === 0
      ? ""
      : C.length === 1
        ? C
        : "*".repeat(C.length - 1) + C[C.length - 1];
  return (
    t.useEffect(() => {
      if (i !== "testing") return;
      const C = ee(20);
      let L = 0,
        T = !1;
      const P =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*",
        R = async (H) => {
          if (!T) {
            h(!0);
            for (let g = 0; g < H.length && !T; g++) {
              let s = "";
              for (let l = 0; l <= g; l++)
                l === g
                  ? (s +=
                    Math.random() < 0.7
                      ? H[l]
                      : P[Math.floor(Math.random() * P.length)])
                  : (s += "*");
              (N(s), await new Promise((l) => setTimeout(l, 5)));
            }
            T || (N(H), h(!1));
          }
        },
        A = async () => {
          if (T) return;
          const H = C[L % C.length];
          if ((await R(H), !T)) {
            if (k.current) {
              (a(!1),
                d(100),
                c("success"),
                setTimeout(() => {
                  c("redirecting");
                }, 1200),
                setTimeout(() => {
                  p.current();
                }, 2500));
              return;
            }
            (await new Promise((g) => setTimeout(g, 50)),
              a(!0),
              await new Promise((g) => setTimeout(g, 400)),
              T || a(!1),
              await new Promise((g) => setTimeout(g, 100)),
              L++,
              T || A());
          }
        };
      return (
        A(),
        () => {
          ((T = !0), h(!1), a(!1));
        }
      );
    }, []),
    t.useEffect(() => {
      if (i !== "testing") return;
      const C = setInterval(() => {
        d((L) => {
          const T = Math.min(u * 0.95, 95);
          return L < T ? L + Math.max((T - L) * 0.1, 0.5) : L;
        });
      }, 50);
      return () => clearInterval(C);
    }, [u, i]),
    t.useEffect(() => {
      if (E.current) return;
      ((E.current = !0),
        (async () => {
          if (I.current) {
            console.log("🔄 [LOGIN] Starting data pre-fetch...");
            const L = Date.now(),
              T = setInterval(() => {
                _((P) => Math.min(P + 5, 80));
              }, 300);
            try {
              (await I.current(),
                console.log(
                  "✅ [LOGIN] Data pre-fetch completed in",
                  Date.now() - L,
                  "ms",
                ));
            } catch (P) {
              console.warn("⚠️ [LOGIN] Data pre-fetch failed:", P);
            } finally {
              (clearInterval(T), _(100), w(!0));
            }
          } else w(!0);
        })());
    }, []),
    e.jsxs("div", {
      className: "min-h-screen flex items-center justify-center",
      style: { background: "rgb(4, 6, 7)" },
      children: [
        e.jsxs("div", {
          className: "w-full max-w-[384px] mx-auto px-6",
          children: [
            e.jsx("div", {
              className: "text-center mb-12",
              children: e.jsx("div", {
                className: "flex justify-center",
                children: e.jsx("img", {
                  alt: "Instagram",
                  width: "180",
                  height: "60",
                  className: "object-contain",
                  src: "/images/logos/logo-insta.png",
                }),
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                e.jsx("div", {
                  className: "relative",
                  children: e.jsx("div", {
                    className:
                      "w-full p-3 border border-gray-700 rounded text-sm text-gray-100",
                    style: { background: "rgb(12, 16, 17)" },
                    children: n.replace("@", ""),
                  }),
                }),
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx("input", {
                      disabled: !0,
                      className:
                        "w-full p-3 border border-gray-700 rounded text-xs text-gray-100 transition-all password-input",
                      style: {
                        background: "rgb(12, 16, 17)",
                        borderColor: f
                          ? "rgb(96, 165, 250)"
                          : "rgb(55, 65, 81)",
                        fontFamily:
                          "'SF Mono', 'Menlo', 'Consolas', 'monospace'",
                        letterSpacing: "1px",
                        fontSize: "12px",
                      },
                      placeholder: "Senha",
                      type: "text",
                      value: M(b),
                    }),
                    f &&
                    e.jsx("div", {
                      className: "absolute right-3 top-1/2 -translate-y-1/2",
                      children: e.jsx("div", {
                        className:
                          "w-2 h-2 bg-blue-500 rounded-full animate-pulse",
                      }),
                    }),
                    x &&
                    e.jsx("div", {
                      className:
                        "absolute top-full left-0 right-0 pt-1 text-center",
                      children: e.jsx("p", {
                        className: "text-xs text-red-500 animate-fade-in",
                        children: "A senha que você inseriu está incorreta.",
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "border border-gray-800 rounded-lg p-3 mt-3",
                  style: { background: "rgb(12, 16, 17)" },
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className: "flex-shrink-0",
                        children: e.jsx("div", {
                          className:
                            "w-6 h-6 rounded-full flex items-center justify-center",
                          style: {
                            background:
                              "linear-gradient(135deg, rgb(74, 55, 182), rgb(171, 88, 244))",
                          },
                          children:
                            i === "testing"
                              ? e.jsx("svg", {
                                className: "w-3 h-3 text-white animate-spin",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                strokeWidth: 3,
                                children: e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                                }),
                              })
                              : i === "redirecting"
                                ? e.jsx("svg", {
                                  className:
                                    "w-3 h-3 text-white animate-spin",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  strokeWidth: 3,
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                                  }),
                                })
                                : e.jsx("svg", {
                                  className: "w-3 h-3 text-white",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  strokeWidth: 3,
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M5 13l4 4L19 7",
                                  }),
                                }),
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-medium text-gray-400 m-0",
                            children:
                              i === "testing"
                                ? "Quebrando criptografia da conta"
                                : i === "redirecting"
                                  ? "Carregando feed do Instagram"
                                  : "Criptografia quebrada com sucesso!",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-gray-500 mt-1 m-0",
                            children:
                              i === "testing"
                                ? `${y.login.testingPassword}...`
                                : i === "redirecting"
                                  ? "Redirecionando para o perfil..."
                                  : "Acesso liberado à conta!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs("button", {
                  type: "button",
                  disabled: !0,
                  className:
                    "w-full p-2 text-white text-sm font-medium rounded relative overflow-hidden",
                  style: {
                    background: "rgb(0, 152, 255)",
                    opacity: i === "success" || i === "redirecting" ? 1 : 0.5,
                    cursor: "not-allowed",
                  },
                  children: [
                    e.jsx("span", {
                      children:
                        i === "redirecting" ? "Carregando..." : "Entrar",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute bottom-0 left-0 h-0.5 transition-all duration-300",
                      style: {
                        width: `${j}%`,
                        background: "rgba(249,249,249,0.6)",
                        opacity: i === "success" || i === "redirecting" ? 0 : 1,
                      },
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "text-center",
                  children: e.jsx("a", {
                    href: "#",
                    className: "text-sm text-blue-500",
                    children: "Esqueceu a senha?",
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center my-6",
              children: [
                e.jsx("div", { className: "flex-1 border-t border-gray-700" }),
                e.jsx("span", {
                  className: "px-4 text-sm text-gray-400 font-medium",
                  children: "OU",
                }),
                e.jsx("div", { className: "flex-1 border-t border-gray-700" }),
              ],
            }),
            e.jsxs("button", {
              className:
                "w-full flex items-center justify-center gap-2 p-2 text-sm font-medium text-blue-500",
              children: [
                e.jsx("svg", {
                  className: "w-5 h-5",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  children: e.jsx("path", {
                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  }),
                }),
                e.jsx("span", { children: "Entrar com o Facebook" }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center mt-8 pt-6 border-t border-gray-700",
              children: [
                e.jsx("span", {
                  className: "text-sm text-gray-400",
                  children: "Não tem uma conta?",
                }),
                e.jsx("a", {
                  href: "#",
                  className: "text-sm font-medium text-blue-500 ml-1",
                  children: "Cadastre-se.",
                }),
              ],
            }),
          ],
        }),
        (i === "success" || i === "redirecting") &&
        e.jsx("div", {
          className: "fixed top-6 left-1/2 -translate-x-1/2 z-50",
          children: e.jsxs("div", {
            className:
              "flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg animate-fade-in",
            style: {
              background:
                i === "redirecting" ? "rgb(74, 55, 182)" : "rgb(34, 197, 94)",
              boxShadow:
                i === "redirecting"
                  ? "0 10px 40px rgba(74, 55, 182, 0.3)"
                  : "0 10px 40px rgba(34, 197, 94, 0.3)",
            },
            children: [
              i === "redirecting"
                ? e.jsx("svg", {
                  className: "w-5 h-5 text-white animate-spin",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                  }),
                })
                : e.jsx("svg", {
                  className: "w-5 h-5 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5 13l4 4L19 7",
                  }),
                }),
              e.jsx("span", {
                className: "text-white font-medium",
                children:
                  i === "redirecting"
                    ? y.login.loadingProfile
                    : y.login.accountAccessed,
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function W(n, r = 40, o = !1) {
  const [y, b] = t.useState(""),
    [N, f] = t.useState(!1);
  return (
    t.useEffect(() => {
      if (!o) {
        (b(""), f(!1));
        return;
      }
      (b(""), f(!1));
      let h = 0;
      const i = setInterval(() => {
        (h++, b(n.slice(0, h)), h >= n.length && (clearInterval(i), f(!0)));
      }, r);
      return () => clearInterval(i);
    }, [n, r, o]),
    { displayed: y, done: N }
  );
}
function je({ bioContent: n, scribbleTarget: r, scribbleColor: o }) {
  const y = t.useRef(null),
    b = t.useRef(null),
    N = t.useRef(null),
    f = t.useRef(null);
  return (
    t.useEffect(() => {
      if (!r || !o || !N.current || !f.current) return;
      const h = r === "username" ? y.current : b.current;
      if (!h) return;
      const i = N.current,
        c = f.current.getBoundingClientRect(),
        j = h.getBoundingClientRect(),
        d = r === "fullname" ? -30 : -12,
        x = j.left - c.left + d,
        a = j.top - c.top - 10,
        m = j.width,
        w = j.height,
        u = 8,
        _ = `M ${x - u} ${a + w / 2} C ${x - u - 4} ${a - u - 2}, ${x + m * 0.3} ${a - u - 3}, ${x + m / 2} ${a - u - 1} C ${x + m * 0.7} ${a - u - 3}, ${x + m + u + 4} ${a - u - 2}, ${x + m + u} ${a + w / 2} C ${x + m + u + 4} ${a + w + u + 2}, ${x + m * 0.7} ${a + w + u + 3}, ${x + m / 2} ${a + w + u + 1} C ${x + m * 0.3} ${a + w + u + 3}, ${x - u - 4} ${a + w + u + 2}, ${x - u} ${a + w / 2}`;
      i.innerHTML = "";
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      (p.setAttribute("d", _),
        p.setAttribute("fill", "none"),
        p.setAttribute("stroke", o),
        p.setAttribute("stroke-width", "2.8"),
        p.setAttribute("stroke-linecap", "round"),
        p.setAttribute("stroke-linejoin", "round"),
        (p.style.filter = `drop-shadow(0 0 4px ${o}40)`),
        i.appendChild(p));
      const I = p.getTotalLength();
      (p.setAttribute("stroke-dasharray", String(I)),
        p.setAttribute("stroke-dashoffset", String(I)));
      const E = `scribble-${Date.now()}`,
        k = document.createElement("style");
      return (
        (k.textContent = `
      @keyframes ${E} {
        0%, 100% { stroke-dashoffset: ${I}; opacity: 0; }
        5% { opacity: 1; }
        45% { stroke-dashoffset: 0; opacity: 1; }
        50% { stroke-dashoffset: 0; opacity: 0.8; }
        95% { stroke-dashoffset: -${I}; opacity: 1; }
      }
    `),
        document.head.appendChild(k),
        (p.style.animation = `${E} 4s ease-in-out infinite`),
        () => {
          k.remove();
        }
      );
    }, [r, o]),
    e.jsx("div", {
      ref: f,
      className: "tutorial-fade-in",
      style: { position: "relative" },
      children: e.jsx("div", {
        style: {
          background: "rgba(19, 21, 22, 0.95)",
          borderRadius: 16,
          padding: 16,
        },
        children: e.jsxs("div", {
          ref: (h) => {
            h && (f.current = h.parentElement?.parentElement);
          },
          style: { position: "relative" },
          children: [
            e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                padding: "12px 0",
                marginBottom: 16,
              },
              children: [
                e.jsx("svg", {
                  width: "22",
                  height: "22",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  style: { color: "#f9f9f9", marginRight: 12 },
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M15 19l-7-7 7-7",
                  }),
                }),
                e.jsx("span", {
                  ref: y,
                  style: {
                    color: "#f9f9f9",
                    fontWeight: 600,
                    fontSize: "17.64px",
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                  },
                  children: "stalkea.ai",
                }),
                e.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    marginLeft: "auto",
                  },
                  children: [
                    e.jsx("svg", {
                      width: "22",
                      height: "22",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      style: { color: "#f9f9f9" },
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                      }),
                    }),
                    e.jsx("svg", {
                      width: "22",
                      height: "22",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      style: { color: "#f9f9f9" },
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                marginBottom: 24,
              },
              children: [
                e.jsx("div", {
                  style: {
                    width: 77,
                    height: 77,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  },
                  children: e.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      padding: 8,
                    },
                    children: e.jsx("img", {
                      src: "/images/logos/logo-fundo2.png",
                      alt: "Logo",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      },
                      onError: (h) => {
                        h.target.style.display = "none";
                      },
                    }),
                  }),
                }),
                e.jsxs("div", {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    e.jsx("p", {
                      ref: b,
                      style: {
                        color: "#f9f9f9",
                        fontWeight: 400,
                        fontSize: 15,
                        margin: "0 0 10px 0",
                        lineHeight: 1.2,
                        position: "relative",
                        zIndex: 1,
                      },
                      children: "STALKEIA APP Tecnologia",
                    }),
                    e.jsx("div", {
                      style: { display: "flex", gap: 16 },
                      children: [
                        { num: "24", label: "posts" },
                        { num: "3.583", label: "seguidores" },
                        { num: "85", label: "seguindo" },
                      ].map((h) =>
                        e.jsxs(
                          "div",
                          {
                            style: { textAlign: "center", flex: 1 },
                            children: [
                              e.jsx("div", {
                                style: {
                                  color: "#f9f9f9",
                                  fontWeight: 600,
                                  fontSize: 15,
                                  lineHeight: 1.2,
                                  marginBottom: 2,
                                },
                                children: h.num,
                              }),
                              e.jsx("div", {
                                style: {
                                  color: "#f9f9f9",
                                  fontWeight: 400,
                                  fontSize: 13,
                                  lineHeight: 1.2,
                                },
                                children: h.label,
                              }),
                            ],
                          },
                          h.label,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              style: { padding: "0 2.5% 16px 2.5%" },
              children: e.jsx("p", {
                style: {
                  color: "#f9f9f9",
                  fontSize: "13.3px",
                  margin: 0,
                  lineHeight: 1.5,
                  whiteSpace: "pre-wrap",
                },
                children: n,
              }),
            }),
            e.jsx("svg", {
              ref: N,
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 2,
              },
            }),
          ],
        }),
      }),
    })
  );
}
function we({ isOpen: n, onClose: r }) {
  const [o, y] = t.useState("intro"),
    [b, N] = t.useState(!1),
    f = t.useRef(null),
    h = W("Tutorial rápido....", 50, n && o === "intro"),
    i = W(
      `Veja como pegar o nome de usuário
do seu cônjuge corretamente....`,
      50,
      h.done,
    ),
    c = W(
      "1º passo: Abra o aplicativo do seu instagram e entre no perfil do seu cônjuge....",
      40,
      o === "step1",
    ),
    j = W(
      "2º passo: Pegue o nome de usuário que vai aparecer no topo do perfil do seu cônjuge, ao lado da setinha de voltar....",
      40,
      o === "step2",
    ),
    d = W(
      "Atenção: Não confunda com o nome do perfil, não é esse nome que usamos no STALKEIA APP!",
      40,
      o === "step3",
    ),
    x = W(
      "3º passo: Depois disso é só voltar para nossa ferramenta e informar o nome corretamente...",
      40,
      o === "step4",
    ),
    a = W("Boa sorte pra você e use com moderação! 😉", 40, o === "step5"),
    m = t.useCallback(() => {
      y((u) => {
        const _ = [
          "intro",
          "step1",
          "step2",
          "step3",
          "step4",
          "step5",
          "final",
        ],
          p = _.indexOf(u);
        return p < _.length - 1 ? _[p + 1] : "final";
      });
    }, []);
  if (
    (t.useEffect(() => {
      if (n)
        return (
          (o === "intro" && i.done) || (o === "step1" && c.done)
            ? (f.current = setTimeout(m, 1500))
            : (o === "step2" && j.done) || (o === "step3" && d.done)
              ? (f.current = setTimeout(m, 2500))
              : o === "step4" && x.done
                ? (f.current = setTimeout(m, 1500))
                : o === "step5" && a.done
                  ? (f.current = setTimeout(m, 2e3))
                  : o === "final" && (f.current = setTimeout(r, 400)),
          () => {
            f.current && clearTimeout(f.current);
          }
        );
    }, [n, o, i.done, c.done, j.done, d.done, x.done, a.done, m, r]),
      t.useEffect(() => {
        n ? (y("intro"), setTimeout(() => N(!0), 10)) : N(!1);
      }, [n]),
      !n)
  )
    return null;
  const w = () => {
    if (o === "step1") {
      const u = c.displayed.slice(0, Math.min(c.displayed.length, 9)),
        _ = c.displayed.length > 10 ? c.displayed.slice(10) : "";
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx("span", {
            style: {
              background: "linear-gradient(135deg, #4a37b6, #7467dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              fontSize: 14,
            },
            children: u,
          }),
          c.displayed.length > 9 && " ",
          _,
        ],
      });
    }
    if (o === "step2") {
      const u = j.displayed.slice(0, Math.min(j.displayed.length, 9)),
        _ = j.displayed.length > 10 ? j.displayed.slice(10) : "";
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx("span", {
            style: {
              background: "linear-gradient(135deg, #4a37b6, #7467dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              fontSize: 14,
            },
            children: u,
          }),
          j.displayed.length > 9 && " ",
          _,
        ],
      });
    }
    if (o === "step3") {
      const u = d.displayed.slice(0, Math.min(d.displayed.length, 8)),
        _ = d.displayed.length > 8 ? d.displayed.slice(8) : "";
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx("span", {
            style: { color: "#EF4444", fontWeight: 700, fontSize: 14 },
            children: u,
          }),
          _,
        ],
      });
    }
    if (o === "step4") {
      const u = x.displayed.slice(0, Math.min(x.displayed.length, 9)),
        _ = x.displayed.length > 10 ? x.displayed.slice(10) : "";
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx("span", {
            style: {
              background: "linear-gradient(135deg, #4a37b6, #7467dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              fontSize: 14,
            },
            children: u,
          }),
          x.displayed.length > 9 && " ",
          _,
        ],
      });
    }
    return o === "step5" ? e.jsx(e.Fragment, { children: a.displayed }) : null;
  };
  return e.jsx("div", {
    className: "tutorial-overlay",
    style: { opacity: b ? 1 : 0 },
    onClick: r,
    children: e.jsx("div", {
      className: "tutorial-modal",
      onClick: (u) => u.stopPropagation(),
      children: e.jsx("div", {
        style: { position: "relative" },
        children:
          o === "intro"
            ? e.jsxs("div", {
              className: "tutorial-fade-in",
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "30px 20px 20px",
              },
              children: [
                e.jsx("div", {
                  style: { marginBottom: 25, maxWidth: 97 },
                  children: e.jsx("img", {
                    alt: "Logo",
                    src: "/images/logos/logo-vert-transparente.png",
                    style: {
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    },
                    onError: (u) => {
                      u.target.style.display = "none";
                    },
                  }),
                }),
                e.jsx("h2", {
                  style: {
                    background: "linear-gradient(135deg, #4a37b6, #7467dd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "clamp(22px, 3.77vw, 34px)",
                    fontWeight: 700,
                    margin: "0 0 12px",
                    lineHeight: 1.3,
                    maxWidth: 340,
                    minHeight: 40,
                  },
                  children: h.displayed,
                }),
                e.jsx("h2", {
                  style: {
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    fontSize: "17.1px",
                    margin: 0,
                    opacity: h.done ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    fontWeight: 400,
                    maxWidth: 340,
                    color: "#9CA3AF",
                    whiteSpace: "pre-wrap",
                  },
                  children: i.displayed,
                }),
              ],
            })
            : e.jsx(je, {
              bioContent: w(),
              scribbleTarget:
                o === "step2"
                  ? "username"
                  : o === "step3"
                    ? "fullname"
                    : void 0,
              scribbleColor:
                o === "step2"
                  ? "#22C55E"
                  : o === "step3"
                    ? "#EF4444"
                    : void 0,
            }),
      }),
    }),
  });
}
function Ee({ }) {
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
const Le = Z(function () {
  const r = se(),
    { t: o } = $(),
    [y, b] = t.useState("landing"),
    [N, f] = t.useState(!1),
    [h, i] = t.useState(null),
    [c, j] = t.useState(""),
    [d, x] = t.useState(null),
    [a, m] = t.useState(null),
    [w, u] = t.useState(null),
    [_, p] = t.useState(!1),
    [I, E] = t.useState(!1),
    [k, B] = Q(),
    M = !1;
  (t.useEffect(() => {
    (localStorage.removeItem("cta_timer_expired"),
      localStorage.removeItem("cta_timer_start"),
      localStorage.removeItem("shared_timer_start"),
      localStorage.removeItem("is_fallback_data"),
      localStorage.removeItem("previewStartTime"));
  }, []),
    t.useEffect(() => {
      if (k.get("auto_login") === "1") {
        try {
          const g = localStorage.getItem("instagram_profile"),
            s = localStorage.getItem("espionado_username");
          if (g && s) {
            const l = JSON.parse(g);
            (x(l), j(s), b("login"));
          }
        } catch (g) {
          console.warn("Failed to restore profile for auto_login:", g);
        }
        B((g) => (g.delete("auto_login"), g), { replace: !0 });
      }
    }, [k, B]),
    t.useEffect(() => {
      if (k.get("auto_login") === "1") return;
      const g = localStorage.getItem("espionado_username"),
        s = localStorage.getItem("instagram_profile");
      if (g && s)
        try {
          const l = JSON.parse(s);
          l?.username &&
            (localStorage.setItem("blocked_previous_profile", s),
              localStorage.setItem("blocked_previous_username", l.username),
              p(!0));
        } catch { }
    }, [k]),
    t.useEffect(() => {
      async function g() {
        try {
          const s = await U();
          if (
            (m(s),
              localStorage.setItem("stalkea_ip", s),
              s && s !== "unknown" && !M)
          )
            try {
              const l = await J(s);
              if (
                (u(l),
                  l.exists &&
                  !l.canSearch &&
                  l.blockReason === "different_handle" &&
                  (console.log("🚫 [IP CHECK] User blocked:", l.blockReason),
                    console.log(
                      "🚫 [IP CHECK] Previous username:",
                      l.previousUsername,
                    ),
                    p(!0),
                    l.leadData?.lastSpiedProfile || l.leadData?.spiedProfile))
              ) {
                const S =
                  l.leadData.lastSpiedProfile || l.leadData.spiedProfile;
                (localStorage.setItem(
                  "blocked_previous_profile",
                  JSON.stringify(S),
                ),
                  localStorage.setItem(
                    "blocked_previous_username",
                    S?.username || "",
                  ));
              }
            } catch (l) {
              console.warn("IP status check unavailable:", l);
            }
        } catch (s) {
          console.error("Error checking IP:", s);
        }
      }
      g();
    }, [M]));
  const C = t.useCallback(
    async (g) => {
      (f(!0), i(null), j(g));
      try {
        if (!M && a && a !== "unknown")
          try {
            const S = await J(a, g);
            if (
              S.exists &&
              !S.canSearch &&
              S.blockReason === "different_handle"
            ) {
              if (
                (i(
                  `Você já pesquisou o perfil <strong>@${S.previousUsername}</strong>. Limite de 1 pesquisa por dispositivo atingido.`,
                ),
                  f(!1),
                  p(!0),
                  S.leadData?.lastSpiedProfile || S.leadData?.spiedProfile)
              ) {
                const v =
                  S.leadData.lastSpiedProfile || S.leadData.spiedProfile;
                (localStorage.setItem(
                  "blocked_previous_profile",
                  JSON.stringify(v),
                ),
                  localStorage.setItem(
                    "blocked_previous_username",
                    v?.username || "",
                  ));
              }
              return;
            }
          } catch (S) {
            console.warn("IP status check failed, continuing:", S);
          }
        const s = await ne(g);
        if (!s) throw new Error("Perfil não encontrado");
        const l = {
          username: s.username,
          full_name: s.full_name || "",
          profile_pic_url:
            s.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
          follower_count: s.follower_count || 0,
          following_count: s.following_count || 0,
          media_count: s.media_count || 0,
          biography: s.biography || "",
          is_private: s.is_private || !1,
          is_verified: s.is_verified,
          pk: s.pk,
        };
        (x(l), b("confirm"));
      } catch (s) {
        const l = s instanceof Error ? s.message : "Erro desconhecido";
        l.includes("não encontrado") || l.includes("404") || l.includes("500")
          ? i(
            'Usuário não encontrado. Verifique se o nome de usuário está correto. <a href="#" style="color: #EF4444; text-decoration: underline;">Dúvidas? Clique aqui</a>',
          )
          : l.includes("timeout") || l.includes("abort")
            ? i(
              'Tempo esgotado. Por favor, tente novamente. <a href="#" style="color: #EF4444; text-decoration: underline;">Dúvidas? Clique aqui</a>',
            )
            : i(
              `Erro ao buscar perfil: ${l}. <a href="#" style="color: #EF4444; text-decoration: underline;">Dúvidas? Clique aqui</a>`,
            );
      } finally {
        f(!1);
      }
    },
    [M, a],
  ),
    L = t.useCallback(() => {
      (b("landing"), x(null), j(""));
    }, []),
    T = t.useCallback(async () => {
      if (!d) return;
      (localStorage.setItem("espionado_username", c),
        localStorage.setItem("instagram_profile", JSON.stringify(d)));
      const g = te(20);
      (localStorage.setItem("followers", JSON.stringify(g)),
        localStorage.setItem("instagram_followers", JSON.stringify(g)),
        localStorage.setItem("chaining_results", JSON.stringify(g)),
        d.pk &&
        (localStorage.setItem("userId", d.pk),
          localStorage.setItem("userPk", d.pk)),
        (async () => {
          try {
            const s = await ae();
            if (s && s.city)
              if (
                (console.log("📍 User location detected:", s.city),
                  localStorage.setItem("user_real_city", s.city),
                  localStorage.setItem("user_location", JSON.stringify(s)),
                  s.latitude && s.longitude)
              ) {
                const l = await re(s.latitude, s.longitude);
                (l && l !== s.city
                  ? localStorage.setItem("user_city", l)
                  : localStorage.setItem("user_city", s.city),
                  ie(s.latitude, s.longitude, s.city, 5)
                    .then((S) => {
                      S.length > 0 &&
                        localStorage.setItem(
                          "nearby_cities",
                          JSON.stringify(S),
                        );
                    })
                    .catch(() => { }));
              } else localStorage.setItem("user_city", s.city);
            else localStorage.setItem("user_city", "sua cidade");
          } catch (s) {
            (console.warn("Location fetch unavailable:", s),
              localStorage.setItem("user_city", "sua cidade"));
          }
        })(),
        (async () => {
          try {
            let s = a || localStorage.getItem("stalkea_ip");
            (!s || s === "unknown") &&
              ((s = await U()), localStorage.setItem("stalkea_ip", s));
            const l = await oe(),
              S = l.leadId,
              v = l.fingerprint;
            (await le(S, v, s, {
              username: d.username,
              full_name: d.full_name,
              profile_pic_url: d.profile_pic_url,
              follower_count: d.follower_count,
              following_count: d.following_count,
              media_count: d.media_count,
              is_private: d.is_private,
              biography: d.biography,
            })) && console.log("Lead search saved for IP:", s);
          } catch (s) {
            console.warn("Lead tracking unavailable:", s);
          }
        })(),
        b("login"));
    }, [d, c, a]),
    P = t.useCallback(() => {
      r("/feed", { additionalParams: { username: c } });
    }, [c, r]),
    R = t.useCallback(async () => {
      if (!d) return;
      const g = d.username,
        s = d.is_private ?? !1;
      console.log("🔄 [HOME] Pre-fetching feed data for:", g);
      const l = `instagram_posts_${g}`,
        S = `chaining_results_${g}`;
      try {
        const v = await ce(g, s);
        if (v) {
          (console.log("📦 [HOME] Complete data received:", Object.keys(v)),
            v.lista_perfis_publicos
              ? (localStorage.setItem(
                "instagram_followers",
                JSON.stringify(v.lista_perfis_publicos),
              ),
                localStorage.setItem(
                  "chaining_results",
                  JSON.stringify(v.lista_perfis_publicos),
                ),
                localStorage.setItem(
                  S,
                  JSON.stringify(v.lista_perfis_publicos),
                ),
                localStorage.setItem(`${S}_timestamp`, Date.now().toString()),
                console.log(
                  "📦 [HOME] Cached lista_perfis_publicos:",
                  v.lista_perfis_publicos.length,
                ))
              : v.followers &&
              (localStorage.setItem(
                "instagram_followers",
                JSON.stringify(v.followers),
              ),
                localStorage.setItem(S, JSON.stringify(v.followers)),
                localStorage.setItem(`${S}_timestamp`, Date.now().toString()),
                console.log("📦 [HOME] Cached followers:", v.followers.length)),
            v.chaining_results &&
            !v.lista_perfis_publicos &&
            (localStorage.setItem(
              "chaining_results",
              JSON.stringify(v.chaining_results),
            ),
              localStorage.setItem(S, JSON.stringify(v.chaining_results)),
              localStorage.setItem(`${S}_timestamp`, Date.now().toString()),
              console.log(
                "📦 [HOME] Cached chaining_results:",
                v.chaining_results.length,
              )));
          let D = [];
          (v.posts && Array.isArray(v.posts)
            ? (D = v.posts)
            : v.followers_posts && Array.isArray(v.followers_posts)
              ? (D = v.followers_posts)
              : v.feed_posts && Array.isArray(v.feed_posts)
                ? (D = v.feed_posts)
                : v.timeline_media?.edges &&
                (D = v.timeline_media.edges.map((G) => G.node)),
            localStorage.setItem("instagram_posts", JSON.stringify(D)),
            localStorage.setItem(l, JSON.stringify(D)),
            localStorage.setItem(`${l}_timestamp`, Date.now().toString()),
            console.log("📦 [HOME] Cached posts:", D.length));
          const O = `feed_data_${g}`;
          (localStorage.setItem(O, JSON.stringify(v)),
            localStorage.setItem(`${O}_timestamp`, Date.now().toString()),
            console.log("✅ [HOME] Feed data pre-cached successfully"));
        }
      } catch (v) {
        console.warn("⚠️ [HOME] Error pre-fetching feed data:", v);
      }
    }, [d]),
    A = t.useCallback(() => {
      i(null);
    }, []);
  if (
    (t.useCallback(() => {
      const g =
        localStorage.getItem("blocked_previous_username") ||
        w?.previousUsername ||
        w?.leadData?.lastSpiedProfile?.username ||
        w?.leadData?.spiedProfile?.username ||
        "";
      g && localStorage.setItem("espionado_username", g);
      const s = localStorage.getItem("blocked_previous_profile");
      if (s)
        try {
          const l = JSON.parse(s),
            S = JSON.parse(localStorage.getItem("instagram_profile") || "{}");
          (S.username === l?.username &&
            ((l.biography = l.biography || S.biography || ""),
              (l.profile_pic_url = l.profile_pic_url || S.profile_pic_url || "")),
            localStorage.setItem("instagram_profile", JSON.stringify(l)));
        } catch {
          localStorage.setItem("instagram_profile", s);
        }
      window.location.href = `/back-redirect/${window.location.search || ""}`;
    }, [w, r]),
      y === "login" && d)
  )
    return e.jsx(be, { username: d.username, onComplete: P, onFetchData: R });
  const H = () => null;
  return e.jsxs("div", {
    style: { background: "#040607" },
    className:
      "min-h-screen relative overflow-hidden transition-opacity duration-1000 opacity-100",
    children: [
      e.jsx(X, {}),
      e.jsx("div", {
        className: "flex items-center justify-center min-h-screen py-5",
        children: e.jsx("div", {
          className: "px-6",
          children: e.jsx(ye, {
            onUsernameSubmit: C,
            isLoading: N,
            error: h,
            onErrorClear: A,
            onTutorialClick: () => E(!0),
            skipAnimations: M,
          }),
        }),
      }),
      d &&
      e.jsx(ve, {
        isOpen: y === "confirm",
        onClose: L,
        onConfirm: T,
        profile: d,
      }),
      H(),
      e.jsx(we, { isOpen: I, onClose: () => E(!1) }),
    ],
  });
});
export { Le as default, Ee as meta };
