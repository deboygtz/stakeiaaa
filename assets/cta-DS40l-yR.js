import { w as H, a as t, p as e } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { M as G } from "./MatrixCanvas-gBTz1CWi.js";
import { g as K } from "./utm-ClCK1WqV.js";
import { B as Q } from "./BlockedPopup-RPTI6beX.js";
import "./context-DVPZRWQf.js";
function ne() {
  if (typeof document > "u") return null;
  const s = document.cookie.match(/(?:^|;\s*)st_user_id=([^;]*)/);
  const a = s ? decodeURIComponent(s[1].trim()) : "";
  return a || null;
}
function ae(s) {
  const r = "https://go.perfectpay.com.br/PPU38CQ72R6",
    a = K(),
    i = new URLSearchParams();
  (a.utm_source && i.set("utm_source", a.utm_source),
    a.utm_medium && i.set("utm_medium", a.utm_medium),
    a.utm_campaign && i.set("utm_campaign", a.utm_campaign),
    a.utm_term && i.set("utm_term", a.utm_term),
    a.utm_content && i.set("utm_content", a.utm_content),
    a.src && i.set("src", a.src),
    i.set("sck", ne() ?? "null"),
    s && i.set("ref", s));
  return `${r}?${i.toString()}`;
}
function te({ }) {
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
const X = 600 * 1e3,
  P = "shared_timer_start",
  T = "cta_timer_expired",
  ie = H(function () {
    const [n, A] = t.useState(null),
      [o, j] = t.useState(""),
      [E, f] = t.useState("10:00"),
      [u, S] = t.useState(!1),
      [I, z] = t.useState(null),
      [y, C] = t.useState(0),
      [p, v] = t.useState({ messages: [], isTyping: !1, typingSent: !1 }),
      [M, _] = t.useState({ isOpen: !1, action: "" }),
      [N, V] = t.useState(!1),
      x = t.useRef(null);
    t.useRef(0);
    const k = t.useRef(null),
      q = t.useRef(!1);
    (t.useEffect(() => {
      ((q.current = u),
        u && window.history.pushState(null, "", window.location.href));
    }, [u]),
      t.useEffect(() => {
        const s = () => {
          q.current &&
            (window.location.href = `/back-redirect/${window.location.search || ""}`);
        };
        return (
          window.addEventListener("popstate", s),
          () => window.removeEventListener("popstate", s)
        );
      }, []),
      t.useEffect(() => {
        const s = localStorage.getItem("instagram_profile"),
          a =
            localStorage.getItem("espionado_username") ||
            localStorage.getItem("username") ||
            "";
        if (s)
          try {
            const i = JSON.parse(s);
            (A(i), j(i.username || a));
          } catch {
            j(a);
          }
        else j(a);
      }, []),
      t.useEffect(() => {
        if (localStorage.getItem(T) === "1") {
          (S(!0), f("00:00"));
          return;
        }
        let s = localStorage.getItem(P);
        s || ((s = Date.now().toString()), localStorage.setItem(P, s));
        const a = parseInt(s),
          i = (h) => {
            const c = Math.max(0, Math.floor(h / 1e3)),
              L = Math.floor(c / 60),
              d = c % 60;
            return `${L.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
          },
          r = () => {
            const h = Date.now() - a,
              c = X - h;
            return c <= 0
              ? (S(!0), f("00:00"), localStorage.setItem(T, "1"), !1)
              : (f(i(c)), !0);
          };
        if (!r()) return;
        const m = setInterval(() => {
          r() || clearInterval(m);
        }, 1e3);
        return () => clearInterval(m);
      }, []),
      t.useEffect(() => {
        const s = setInterval(() => {
          C((a) => (a + 1) % 3);
        }, 4e3);
        return () => clearInterval(s);
      }, []),
      t.useEffect(() => {
        const a = [
          {
            text: `E aí, bora ver tudo do instagram de ${n?.full_name?.split(" ")[0] || o || "ele(a)"}?`,
            isSent: !1,
          },
          { text: "Boraa, vou comprar meu acesso VIP 🔥", isSent: !0 },
        ];
        let i = !0;
        const r = [],
          m = (c) => {
            if (!i) return;
            if (c >= a.length) {
              v({ messages: [], isTyping: !1, typingSent: !1 });
              const d = setTimeout(() => m(0), 500);
              r.push(d);
              return;
            }
            v((d) => ({ ...d, isTyping: !0, typingSent: a[c].isSent }));
            const L = setTimeout(() => {
              if (!i) return;
              v((U) => ({
                messages: [...U.messages, a[c]],
                isTyping: !1,
                typingSent: !1,
              }));
              const d = setTimeout(() => m(c + 1), 2e3);
              r.push(d);
            }, 2e3);
            r.push(L);
          },
          h = setTimeout(() => m(0), 1e3);
        return (
          r.push(h),
          () => {
            ((i = !1), r.forEach((c) => clearTimeout(c)));
          }
        );
      }, [n, o]),
      t.useEffect(() => {
        x.current && (x.current.scrollTop = x.current.scrollHeight);
      }, [p]),
      t.useEffect(() => {
        const s = () => {
          if (k.current) {
            const a = k.current.getBoundingClientRect();
            V(a.top <= 100);
          }
        };
        return (
          window.addEventListener("scroll", s, { passive: !0 }),
          () => window.removeEventListener("scroll", s)
        );
      }, []));
    const B = () => {
      const s = document.getElementById("pricing-section");
      s && s.scrollIntoView({ behavior: "smooth", block: "center" });
    },
      W = (s) => {
        z((a) => (a === s ? null : s));
      },
      g = t.useCallback((s) => {
        _({ isOpen: !0, action: s });
      }, []),
      R = t.useCallback(() => {
        _({ isOpen: !1, action: "" });
      }, []),
      b = (s) =>
        s >= 1e6
          ? (s / 1e6).toFixed(1).replace(".", ",") + " mi"
          : s >= 1e5
            ? Math.floor(s / 1e3) + " mil"
            : s >= 11e3
              ? (s / 1e3).toFixed(1).replace(".", ",") + " mil"
              : s >= 1e3
                ? s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                : s.toString(),
      l = n?.full_name?.split(" ")[0] || o || "ele(a)",
      w = n?.profile_pic_url || "/images/avatars/perfil-sem-foto.jpeg",
      O = t.useMemo(() => ae(o), [o]),
      $ = [
        {
          q: "A ferramenta realmente funciona?",
          a: "Sim! O STALKEIA APP utiliza tecnologia avançada para acessar dados do Instagram de forma completamente invisível. Milhares de usuários já confirmaram a eficácia da ferramenta.",
        },
        {
          q: "A pessoa vai saber que eu stalkeei o perfil dela?",
          a: "Não! O acesso é 100% invisível. A pessoa não recebe nenhuma notificação e não há rastros de que você visualizou o perfil dela.",
        },
        {
          q: "Funciona em perfis privados?",
          a: "Sim! O STALKEIA APP funciona em qualquer tipo de perfil, incluindo perfis privados, contas verificadas e perfis comerciais.",
        },
        {
          q: "Preciso instalar alguma coisa?",
          a: "Não! O STALKEIA APP funciona totalmente na nuvem. Você só precisa acessar pelo navegador, sem precisar baixar ou instalar nada no seu dispositivo.",
        },
        {
          q: "Como funciona a garantia?",
          a: "Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
        },
        {
          q: "Quanto tempo tenho acesso?",
          a: "O acesso é vitalício! Uma vez adquirido, você pode usar a ferramenta para sempre, sem mensalidades ou renovações.",
        },
      ],
      F = [
        {
          name: "Marcosvianad",
          time: "3h",
          avatar: "/images/avatars/avatar-depoimento-1.jpg",
          text: "Achei q era golpe mas testei msm assim. Paguei, em 3 min recebi o acesso. Tava tudo lá: directs, fotos q ele apagava, até a localização funcionou. Valeu cada centavo.",
        },
        {
          name: "Gieselferreira_34",
          time: "5h",
          avatar: "/images/avatars/avatar-depoimento-2.jpg",
          text: 'O acesso foi super rapido. Paguei no pix e em menos de 2 min já tava vendo tudo. Os stories "melhores amigos" q ele postava escondido de mim. Sistema funciona msm de verdade.',
        },
        {
          name: "o__prozind34",
          time: "1d",
          avatar: "/images/avatars/avatar-depoimento-3.jpg",
          text: "Na versão completa testei com @ do boy e vi um monte de coisa. Localização, fotos escondidas, até conversas apagadas. Foi exatamente como mostrou.",
        },
      ],
      D = [
        { src: "/images/screenshots/pack1.1.chat2.png", span: !0 },
        { src: "/images/screenshots/nudes1-chat1.jpg", span: !1 },
        { src: "/images/screenshots/nudes1-chat2.jpg", span: !1 },
        { src: "/images/screenshots/fotoblur1.jpg", span: !1 },
        { src: "/images/screenshots/chat2.nudes1.png", span: !1 },
        { src: "/images/screenshots/chat5.1a.png", span: !1 },
      ];
    return e.jsxs("div", {
      className: "cta-page min-h-screen bg-[#040607] text-white relative",
      children: [
        e.jsx(G, {}),
        e.jsxs("div", {
          className: "cta-timer-bar",
          children: [
            e.jsx("p", {
              children: u
                ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("strong", {
                      style: { fontWeight: 900 },
                      children: "Finalize sua compra agora!",
                    }),
                    e.jsx("br", {}),
                    e.jsx("span", {
                      style: { display: "inline-block", marginTop: "3px" },
                      children:
                        "Não saia ou recarregue essa página, a espionagem não pode ser realizada novamente.",
                    }),
                  ],
                })
                : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("strong", {
                      style: { fontWeight: 900 },
                      children: [
                        "Finalize sua compra em",
                        " ",
                        e.jsx("span", { id: "countdown", children: E }),
                      ],
                    }),
                    e.jsx("br", {}),
                    e.jsxs("span", {
                      style: { display: "inline-block", marginTop: "3px" },
                      children: [
                        "Ao zerar o cronômetro, nunca mais será possível acessar o instagram de ",
                        l,
                        ".",
                      ],
                    }),
                  ],
                }),
            }),
            e.jsx("div", {
              style: {
                overflow: "hidden",
                maxWidth: N ? "0" : "200px",
                opacity: N ? 0 : 1,
                marginLeft: N ? "0" : "12px",
                transition:
                  "max-width 0.3s ease, opacity 0.3s ease, margin-left 0.3s ease",
              },
              children: e.jsxs("button", {
                className: "cta-timer-button",
                onClick: B,
                style: { whiteSpace: "nowrap" },
                children: ["Desbloquear", e.jsx("br", {}), "Acesso Agora"],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "cta-container",
          children: [
            e.jsxs("div", {
              className: "cta-logo-section",
              children: [
                e.jsx("img", {
                  src: "/images/logos/logo-vert-transparente.png",
                  alt: "STALKEIA APP Logo",
                }),
                e.jsxs("h1", {
                  className: "cta-main-title",
                  children: [
                    "A maior ferramenta",
                    e.jsx("br", {}),
                    "de ",
                    e.jsx("span", {
                      className: "cta-gradient",
                      children: "Stalker",
                    }),
                    " do Brasil",
                  ],
                }),
              ],
            }),
            (o || n) &&
            e.jsxs("div", {
              className: "cta-profile-card",
              children: [
                e.jsxs("div", {
                  className: "cta-profile-card-content",
                  children: [
                    e.jsx("div", {
                      className: "cta-profile-card-avatar-wrapper",
                      children: e.jsx("div", {
                        className: "cta-profile-card-avatar-border",
                        children: e.jsx("div", {
                          className: "cta-profile-card-avatar-inner",
                          children: e.jsx("img", {
                            alt: "Perfil",
                            src: w,
                            className: "cta-profile-card-avatar-img",
                            onError: (s) => {
                              const a = s.target;
                              a.src.includes("perfil-sem-foto") ||
                                (a.src =
                                  "/images/avatars/perfil-sem-foto.jpeg");
                            },
                          }),
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      className: "cta-profile-card-info",
                      children: [
                        e.jsx("h2", {
                          className: "cta-profile-card-username",
                          children: n?.full_name || o || "Pessoa Investigada",
                        }),
                        e.jsxs("p", {
                          className: "cta-profile-card-name",
                          children: ["@", o || "pessoa_investigada"],
                        }),
                        n &&
                        e.jsxs("div", {
                          className: "cta-profile-card-stats",
                          children: [
                            e.jsxs("div", {
                              className: "cta-profile-card-stat",
                              children: [
                                e.jsx("span", {
                                  className: "cta-profile-card-stat-number",
                                  children: b(n.media_count || 0),
                                }),
                                e.jsxs("span", {
                                  className: "cta-profile-card-stat-label",
                                  children: [" ", "posts"],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "cta-profile-card-stat",
                              children: [
                                e.jsx("span", {
                                  className: "cta-profile-card-stat-number",
                                  children: b(n.follower_count || 0),
                                }),
                                e.jsxs("span", {
                                  className: "cta-profile-card-stat-label",
                                  children: [" ", "seguidores"],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "cta-profile-card-stat",
                              children: [
                                e.jsx("span", {
                                  className: "cta-profile-card-stat-number",
                                  children: b(n.following_count || 0),
                                }),
                                e.jsxs("span", {
                                  className: "cta-profile-card-stat-label",
                                  children: [" ", "seguindo"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n?.biography &&
                e.jsx("p", {
                  className: "cta-profile-card-bio",
                  children: n.biography,
                }),
              ],
            }),
            e.jsx("div", {
              className: "cta-profile-card-badge",
              children: e.jsxs("p", {
                className: "cta-badge-text",
                children: [
                  e.jsx("strong", {
                    className: "cta-badge-title",
                    children: "Espionagem 100% finalizada!",
                  }),
                  " ",
                  "🥳",
                  e.jsx("br", {}),
                  e.jsx("span", {
                    className: "cta-badge-line-1",
                    children: "Adquira seu acesso VIP e tenha",
                  }),
                  e.jsx("br", {}),
                  e.jsx("span", {
                    className: "cta-badge-line-2",
                    children: "acesso imediatamente a:",
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "cta-scroll-indicator",
              children: e.jsx("svg", {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                }),
              }),
            }),
            e.jsxs("div", {
              className: "cta-features-section",
              children: [
                e.jsxs("div", {
                  className: "cta-feature-item",
                  children: [
                    e.jsxs("div", {
                      className: "cta-feature-header",
                      children: [
                        e.jsxs("div", {
                          className: "cta-headline-cta",
                          children: [
                            e.jsx("svg", {
                              className: "cta-feature-icon",
                              fill: "none",
                              stroke: "#6B59D8",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                              }),
                            }),
                            e.jsxs("h3", {
                              className: "cta-feature-title",
                              children: ["Veja Mídias de ", l],
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "cta-feature-desc",
                          children: [
                            "Veja todas as mídias recebidas e",
                            e.jsx("br", {}),
                            "enviadas, incluindo itens apagados.",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "cta-media-grid-instagram",
                      children: D.map((s, a) =>
                        e.jsxs(
                          "div",
                          {
                            className: "cta-media-item-gallery",
                            style: s.span
                              ? {
                                gridColumn: "span 2",
                                gridRow: "span 2",
                                cursor: "pointer",
                              }
                              : { cursor: "pointer" },
                            onClick: () => g("Ver mídia bloqueada"),
                            children: [
                              e.jsx("img", {
                                src: s.src,
                                alt: "",
                                style: {
                                  filter: "blur(12px)brightness(.7)",
                                  transition: "filter 0.5s",
                                },
                                onError: (i) => {
                                  const r = i.target;
                                  r.src =
                                    "/images/avatars/fallback/av-fallback-1.jpg";
                                },
                              }),
                              e.jsx("div", {
                                className: "cta-media-overlay",
                                children: e.jsxs("svg", {
                                  width: s.span ? 32 : 24,
                                  height: s.span ? 32 : 24,
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    e.jsx("rect", {
                                      width: "18",
                                      height: "11",
                                      x: "3",
                                      y: "11",
                                      rx: "2",
                                      ry: "2",
                                    }),
                                    e.jsx("path", {
                                      d: "M7 11V7a5 5 0 0 1 10 0v4",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          a,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "cta-feature-item",
                  children: [
                    e.jsxs("div", {
                      className: "cta-feature-header",
                      children: [
                        e.jsxs("div", {
                          className: "cta-headline-cta",
                          children: [
                            e.jsxs("svg", {
                              className: "cta-feature-icon",
                              fill: "none",
                              stroke: "#6B59D8",
                              viewBox: "0 0 24 24",
                              children: [
                                e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                                }),
                                e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                                }),
                              ],
                            }),
                            e.jsx("h3", {
                              className: "cta-feature-title",
                              children: "Localização em tempo real",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "cta-feature-desc",
                          children: [
                            "Veja onde ",
                            l,
                            " está agora, e",
                            e.jsx("br", {}),
                            "os últimos locais por onde passou.",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "cta-map-preview",
                      children: e.jsxs("div", {
                        className: "cta-map-container",
                        children: [
                          e.jsxs("div", {
                            className: "cta-map-image-wrapper",
                            children: [
                              e.jsx("img", {
                                src: "/images/screenshots/fundomaps.png",
                                alt: "Mapa",
                              }),
                              e.jsx("div", {
                                className: "cta-location-profile",
                                children: e.jsx("img", {
                                  src: w,
                                  alt: "Profile",
                                  className: "cta-location-profile-img",
                                  onError: (s) => {
                                    const a = s.target;
                                    a.src.includes("perfil-sem-foto") ||
                                      (a.src =
                                        "/images/avatars/perfil-sem-foto.jpeg");
                                  },
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "cta-location-info",
                            children: [
                              e.jsx("div", {
                                className: "cta-location-name",
                                children: "Localização Atual",
                              }),
                              e.jsxs("p", {
                                className: "cta-profile-card-name",
                                children: ["@", o || "pessoa_investigada"],
                              }),
                              e.jsx("button", {
                                type: "button",
                                className: "cta-message-system-btn",
                                onClick: () =>
                                  g("Ver localização em tempo real"),
                                children: "Ver",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "cta-feature-item",
                  children: [
                    e.jsxs("div", {
                      className: "cta-feature-header",
                      children: [
                        e.jsxs("div", {
                          className: "cta-headline-cta",
                          children: [
                            e.jsxs("svg", {
                              className: "cta-feature-icon",
                              fill: "none",
                              stroke: "#8B2C8B",
                              viewBox: "0 0 24 24",
                              children: [
                                e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                }),
                                e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                }),
                              ],
                            }),
                            e.jsx("h3", {
                              className: "cta-feature-title",
                              children: "Stories e posts ocultos",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "cta-feature-desc",
                          children: [
                            'Veja stories de "Melhores Amigos" e',
                            e.jsx("br", {}),
                            "posts que ",
                            l,
                            " ocultou de você.",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "cta-stories-grid",
                      children: [
                        e.jsxs("div", {
                          className: "cta-story-item",
                          "data-image": "cf1.png",
                          onClick: () => g("Ver conteúdo restrito"),
                          style: { cursor: "pointer" },
                          children: [
                            e.jsxs("svg", {
                              className: "cta-story-icon",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              viewBox: "0 0 24 24",
                              children: [
                                e.jsx("rect", {
                                  width: "18",
                                  height: "11",
                                  x: "3",
                                  y: "11",
                                  rx: "2",
                                  ry: "2",
                                }),
                                e.jsx("path", {
                                  d: "M7 11V7a5 5 0 0 1 10 0v4",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "cta-story-text",
                              children: "Conteúdo restrito",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "cta-story-item",
                          "data-image": "cf2.png",
                          onClick: () => g("Ver conteúdo restrito"),
                          style: { cursor: "pointer" },
                          children: [
                            e.jsxs("svg", {
                              className: "cta-story-icon",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              viewBox: "0 0 24 24",
                              children: [
                                e.jsx("rect", {
                                  width: "18",
                                  height: "11",
                                  x: "3",
                                  y: "11",
                                  rx: "2",
                                  ry: "2",
                                }),
                                e.jsx("path", {
                                  d: "M7 11V7a5 5 0 0 1 10 0v4",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "cta-story-text",
                              children: "Conteúdo restrito",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "cta-feature-item",
                  style: { borderBottom: "none" },
                  children: [
                    e.jsxs("div", {
                      className: "cta-feature-header",
                      children: [
                        e.jsxs("div", {
                          className: "cta-headline-cta",
                          children: [
                            e.jsx("svg", {
                              className: "cta-feature-icon",
                              fill: "none",
                              stroke: "#00A1E0",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                              }),
                            }),
                            e.jsx("h3", {
                              className: "cta-feature-title",
                              children: "Mensagens do Direct",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "cta-feature-desc",
                          children: [
                            "Veja literalmente todas as mensagens de",
                            e.jsx("br", {}),
                            l,
                            ", incluindo mensagens temporárias",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "cta-chat-preview",
                      children: [
                        e.jsxs("div", {
                          className: "cta-chat-header",
                          children: [
                            e.jsxs("div", {
                              className: "cta-chat-user-info",
                              children: [
                                e.jsx("div", {
                                  className: "cta-chat-avatar",
                                  style: {
                                    backgroundImage: `url('${w}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  },
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className: "cta-chat-name",
                                      children: l,
                                    }),
                                    e.jsxs("div", {
                                      className: "cta-chat-status",
                                      children: [
                                        e.jsx("span", {
                                          className: "cta-status-dot",
                                        }),
                                        "online",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              style: {
                                display: "flex",
                                gap: "clamp(12px, 3.5vw, 16px)",
                              },
                              children: [
                                e.jsx("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  style: {
                                    width: "clamp(16px, 4.5vw, 20px)",
                                    height: "clamp(16px, 4.5vw, 20px)",
                                  },
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                  }),
                                }),
                                e.jsx("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  style: {
                                    width: "clamp(16px, 4.5vw, 20px)",
                                    height: "clamp(16px, 4.5vw, 20px)",
                                  },
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "cta-chat-messages",
                          ref: x,
                          children: [
                            p.messages
                              .filter((s) => s != null)
                              .map((s, a) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `cta-message ${s.isSent ? "cta-message-sent" : ""}`,
                                    children: s.isSent
                                      ? e.jsx("div", {
                                        className: "cta-message-bubble",
                                        children: s.text,
                                      })
                                      : e.jsx("div", {
                                        className: "cta-message-video",
                                        children: e.jsx("div", {
                                          style: {
                                            color: "white",
                                            fontSize:
                                              "clamp(12px, 3vw, 14px)",
                                          },
                                          children: s.text,
                                        }),
                                      }),
                                  },
                                  a,
                                ),
                              ),
                            p.isTyping &&
                            e.jsx("div", {
                              className: `cta-message ${p.typingSent ? "cta-message-sent" : ""}`,
                              children: e.jsxs("div", {
                                className: `cta-typing-indicator ${p.typingSent ? "cta-typing-indicator-sent" : ""}`,
                                children: [
                                  e.jsx("span", {}),
                                  e.jsx("span", {}),
                                  e.jsx("span", {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "cta-scroll-indicator",
              children: e.jsx("svg", {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                }),
              }),
            }),
            e.jsxs("div", {
              className: "cta-tool-section",
              id: "pricing-section",
              ref: k,
              children: [
                e.jsx("div", {
                  className: "cta-tool-logo cta-tool-logo-big",
                  children: e.jsx("img", {
                    src: "/images/logos/logo-vert-transparente.png",
                    alt: "STALKEIA APP Logo",
                  }),
                }),
                e.jsxs("div", {
                  className: "cta-tool-title",
                  children: [
                    "Com o ",
                    e.jsx("span", {
                      className: "cta-gradient",
                      children: "STALKEIA APP",
                    }),
                    " você vai ter",
                    e.jsx("br", {}),
                    "acesso completo ao instagram",
                    e.jsx("br", {}),
                    "de ",
                    l,
                    " por apenas:",
                  ],
                }),
                e.jsxs("div", {
                  className: "cta-pricing-value-container",
                  children: [
                    e.jsx("p", {
                      className: "cta-pricing-old-price",
                      children: "De: R$ 279,90",
                    }),
                    e.jsxs("div", {
                      className: "cta-pricing-current-price",
                      children: [
                        e.jsxs("p", {
                          className: "cta-pricing-amount",
                          children: [
                            "R$ 47",
                            e.jsx("span", {
                              className: "cta-pricing-cents",
                              children: ",90",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "cta-pricing-note-slider",
                          children: e.jsxs("div", {
                            className: "cta-pricing-note-track",
                            children: [
                              [
                                "Pagamento único",
                                "Acesso imediato",
                                "Pagamento seguro",
                                "30 dias de garantia",
                              ].map((s, a) =>
                                e.jsxs(
                                  "span",
                                  {
                                    className: "cta-pricing-note-item",
                                    children: [
                                      e.jsx("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        width: "14",
                                        height: "14",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M5 13l4 4L19 7",
                                        }),
                                      }),
                                      s,
                                    ],
                                  },
                                  a,
                                ),
                              ),
                              [
                                "Pagamento único",
                                "Acesso imediato",
                                "Pagamento seguro",
                                "30 dias de garantia",
                              ].map((s, a) =>
                                e.jsxs(
                                  "span",
                                  {
                                    className: "cta-pricing-note-item",
                                    children: [
                                      e.jsx("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        width: "14",
                                        height: "14",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M5 13l4 4L19 7",
                                        }),
                                      }),
                                      s,
                                    ],
                                  },
                                  a + 4,
                                ),
                              ),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("ul", {
                  className: "cta-pricing-benefits",
                  children: [
                    e.jsxs("li", {
                      className: "cta-pricing-benefit-item",
                      children: [
                        e.jsx("svg", {
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
                        e.jsxs("span", {
                          children: ["Todas as mensagens do direct de ", l],
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      className: "cta-pricing-benefit-item",
                      children: [
                        e.jsx("svg", {
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
                          children:
                            "Todas as fotos sem censura (incluindo apagadas)",
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      className: "cta-pricing-benefit-item",
                      children: [
                        e.jsx("svg", {
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
                          children:
                            "Localização em tempo real e locais que esteve",
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      className: "cta-pricing-benefit-item",
                      children: [
                        e.jsx("svg", {
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
                        e.jsxs("span", {
                          children: [
                            "Alerta sempre que ",
                            l,
                            " interagir com alguém",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      className: "cta-pricing-benefit-item",
                      children: [
                        e.jsx("svg", {
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
                          children: "2 bônus surpresa avaliados em R$120,00",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("a", {
                  href: O,
                  className: "cta-pricing-cta-button",
                  onClick: (ev) => {
                    ev.preventDefault();
                    const checkoutUrl = ae(o);
                    let redirected = !1;
                    const goToCheckout = () => {
                      redirected || ((redirected = !0), (window.location.href = checkoutUrl));
                    };
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: "pre_checkout_front",
                      eventCallback: goToCheckout,
                      eventTimeout: 2e3,
                    });
                    setTimeout(goToCheckout, 400);
                  },
                  children: [
                    e.jsx("span", {
                      className: "cta-pricing-cta-main",
                      children: "Acessar tudo agora mesmo",
                    }),
                    e.jsx("span", {
                      className: "cta-pricing-cta-sub",
                      children: "Acesso liberado em até 2 minutos",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "cta-scroll-indicator cta-scroll-indicator-tool",
              children: e.jsx("svg", {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                }),
              }),
            }),
            e.jsxs("div", {
              className: "cta-testimonials-section",
              children: [
                e.jsxs("h2", {
                  className: "cta-testimonials-title",
                  children: [
                    "Veja o que falam as pessoas",
                    e.jsx("br", {}),
                    "que usam o ",
                    e.jsx("span", {
                      className: "cta-gradient",
                      children: "STALKEIA APP",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "cta-testimonials-slider",
                  children: [
                    e.jsx("div", {
                      className: "cta-testimonials-track",
                      style: { transform: `translateX(-${y * 33.333333}%)` },
                      children: F.map((s, a) =>
                        e.jsx(
                          "div",
                          {
                            className: "cta-testimonial-slide",
                            children: e.jsxs("div", {
                              className: "cta-testimonial",
                              children: [
                                e.jsxs("div", {
                                  className: "cta-testimonial-header",
                                  children: [
                                    e.jsx("div", {
                                      className: "cta-testimonial-avatar",
                                      children: e.jsx("img", {
                                        src: s.avatar,
                                        alt: "Avatar",
                                        style: {
                                          width: "100%",
                                          height: "100%",
                                          borderRadius: "50%",
                                          objectFit: "cover",
                                        },
                                        onError: (i) => {
                                          const r = i.target;
                                          r.src =
                                            "/images/avatars/fallback/av-fallback-1.jpg";
                                        },
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("h4", { children: s.name }),
                                        e.jsx("div", {
                                          className: "cta-testimonial-time",
                                          children: s.time,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "cta-testimonial-text",
                                  children: s.text,
                                }),
                              ],
                            }),
                          },
                          a,
                        ),
                      ),
                    }),
                    e.jsx("div", {
                      className: "cta-slider-dots",
                      children: [0, 1, 2].map((s) =>
                        e.jsx(
                          "span",
                          {
                            className: `cta-dot ${y === s ? "active" : ""}`,
                            onClick: () => C(s),
                          },
                          s,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "cta-attention-alert",
              children: [
                e.jsx("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                  }),
                }),
                e.jsxs("span", {
                  children: [
                    "As informações acessadas são ",
                    e.jsx("strong", { children: "extremamente sensíveis" }),
                    ". Use com responsabilidade.",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "cta-faq-new",
              children: [
                e.jsx("h2", {
                  className: "cta-faq-new-title",
                  children: "Perguntas Frequentes",
                }),
                e.jsx("div", {
                  className: "cta-faq-new-list",
                  children: $.map((s, a) =>
                    e.jsxs(
                      "div",
                      {
                        className: `cta-faq-new-item ${I === a ? "active" : ""}`,
                        children: [
                          e.jsxs("button", {
                            className: "cta-faq-new-btn",
                            onClick: () => W(a),
                            children: [
                              e.jsx("span", { children: s.q }),
                              e.jsx("span", {
                                className: "cta-faq-new-icon",
                                children: "+",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "cta-faq-new-answer",
                            children: e.jsx("p", { children: s.a }),
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "cta-guarantee-box",
              children: [
                e.jsxs("h3", {
                  children: [
                    e.jsx("svg", {
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                      }),
                    }),
                    "Garantia de 30 Dias",
                  ],
                }),
                e.jsx("p", {
                  children:
                    "Teste sem risco! Se não gostar ou por algum motivo não se adaptar, devolvemos 100% do seu dinheiro.",
                }),
              ],
            }),
          ],
        }),
        e.jsx(Q, {
          isOpen: M.isOpen,
          action: M.action,
          onClose: R,
          onGoToCTA: B,
        }),
      ],
    });
  });
export { ie as default, te as meta };
