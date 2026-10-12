const d = "/api/proxy";
const H = "/api/proxy/hikerapi.php";
function q() {
    try { return localStorage.getItem("api_primary_source") || "proxy" } catch { return "proxy" }
}
function V(o) {
    if (o !== "proxy" && o !== "hikerapi") return console.warn('Invalid API source, use "proxy" or "hikerapi"'), !1;
    try { return localStorage.setItem("api_primary_source", o), !0 } catch (e) { return console.error("Failed to set API source:", e), !1 }
}
async function W(o, e = {}) {
    const n = new URLSearchParams(e).toString(), r = `${H}?path=${encodeURIComponent(o)}${n ? `&${n}` : ""}`, t = await (await fetch(r, { method: "GET", headers: { "Content-Type": "application/json", "X-Site-Key": "f36ea0b8b6c2a6bbd745bc50e473bfc5b39d0c2a075a38e9" } })).json();
    if (t.error) throw new Error(t.error);
    return t;
}
function J(o) {
    if (!o || typeof o !== "string") return o;
    return o.includes("cdninstagram.com") || o.includes("fbcdn.net") ? `https://proxt-insta.projetinho-solo.workers.dev/?url=${encodeURIComponent(o)}` : o;
}
function K(o) {
    return (o || []).map((e) => ({ ...e, profile_pic_url: J(e.profile_pic_url) || e.profile_pic_url }));
}
function Y(o, e) {
    return {
        pk: o.pk || o.id || "",
        username: o.username || e,
        full_name: o.full_name || "",
        biography: o.biography || "",
        profile_pic_url: J(o.profile_pic_url || o.hd_profile_pic_url_info?.url) || "/images/avatars/perfil-sem-foto.jpeg",
        is_private: o.is_private || !1,
        is_verified: o.is_verified || !1,
        is_business: o.is_business || !1,
        media_count: o.media_count || 0,
        follower_count: o.follower_count || 0,
        following_count: o.following_count || 0,
        pk_id: o.pk_id || o.pk || "",
    };
}
function R(o) {
    return o
        ? (o.startsWith("/") ||
            o.startsWith("data:") ||
            o.includes("userfounded.workers.dev") ||
            o.includes("image-proxy.php"),
            o)
        : "/images/avatars/perfil-sem-foto.jpeg";
}
function z(o, e = 640) {
    if (!o || o.length === 0) return "";
    const n = o
        .filter((t) => t.width && t.width >= e)
        .sort((t, a) => (t.width || 0) - (a.width || 0));
    return n.length > 0
        ? n[0].url
        : [...o].sort((t, a) => (a.width || 0) - (t.width || 0))[0]?.url ||
        o[0]?.url ||
        "";
}
function M(o, e = 640) {
    if (!o) return "";
    if (o.startsWith("/") || o.startsWith("data:")) return o;
    let n = o,
        r = !1;
    const t = "userfounded.workers.dev";
    if (o.includes(t))
        try {
            const c = new URL(o).searchParams.get("url");
            c && ((n = decodeURIComponent(c)), (r = !0));
        } catch {
            return o;
        }
    if (!n.includes("cdninstagram.com") && !n.includes("fbcdn.net")) return o;
    const a = `s${e}x${e}`;
    let s = !1;
    try {
        const i = n.match(/([?&])stp=([^&]+)/);
        if (i) {
            const l = i[2];
            if (/s\d+x\d+/.test(l)) {
                const u = l.replace(/s\d+x\d+/, a);
                ((n = n.replace(`stp=${l}`, `stp=${u}`)), (s = !0));
            }
        }
        !s &&
            /\/s\d+x\d+\//.test(n) &&
            ((n = n.replace(/\/s\d+x\d+\//, `/${a}/`)), (s = !0));
        const c = r ? `https://mr.${t}/?url=${encodeURIComponent(n)}` : n;
        return (
            typeof window < "u" &&
            s &&
            localStorage.getItem("debugOptimizedImages") === "1" &&
            console.log("[getOptimizedImageUrl]", {
                targetWidth: e,
                modified: s,
                original: o.slice(0, 80) + "...",
                result: c.slice(0, 80) + "...",
            }),
            c
        );
    } catch {
        return o;
    }
}
async function f(o, e = {}, n = 3e4) {
    const r = new AbortController(),
        t = setTimeout(() => r.abort(), n);
    try {
        const a = await fetch(o, { ...e, signal: r.signal });
        return (clearTimeout(t), a);
    } catch (a) {
        throw (clearTimeout(t), a);
    }
}
async function b() {
    const o = [];
    (o.push(navigator.userAgent || ""),
        o.push(navigator.language || ""),
        o.push(Intl.DateTimeFormat().resolvedOptions().timeZone || ""),
        o.push(`${screen.width}x${screen.height}x${screen.colorDepth}`));
    const e = Array.from(navigator.plugins || [])
        .map((r) => r.name)
        .join(",");
    o.push(e);
    try {
        const r = document.createElement("canvas"),
            t = r.getContext("2d");
        t &&
            ((t.textBaseline = "top"),
                (t.font = "14px Arial"),
                (t.fillStyle = "#f60"),
                t.fillRect(125, 1, 62, 20),
                (t.fillStyle = "#069"),
                t.fillText("Stalkeia.com", 2, 15),
                (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
                t.fillText("Stalkeia.com", 4, 17),
                o.push(r.toDataURL()));
    } catch {
        o.push("canvas-error");
    }
    try {
        const r = document.createElement("canvas"),
            t = r.getContext("webgl") || r.getContext("experimental-webgl");
        if (t) {
            const a = t.getExtension("WEBGL_debug_renderer_info");
            if (a) {
                const s = t.getParameter(a.UNMASKED_VENDOR_WEBGL),
                    i = t.getParameter(a.UNMASKED_RENDERER_WEBGL);
                o.push(`${s}~${i}`);
            }
        }
    } catch {
        o.push("webgl-error");
    }
    (o.push(navigator.platform || ""),
        o.push(navigator.hardwareConcurrency?.toString() || ""),
        o.push(navigator.deviceMemory?.toString() || ""));
    const n = o.join("|||");
    return w(n);
}
async function w(o) {
    const n = new TextEncoder().encode(o),
        r = await crypto.subtle.digest("SHA-256", n);
    return Array.from(new Uint8Array(r))
        .map((a) => a.toString(16).padStart(2, "0"))
        .join("");
}
async function v() {
    const o = [
        { url: "https://api.ipify.org?format=json", extract: (e) => e.ip },
        { url: "https://api64.ipify.org?format=json", extract: (e) => e.ip },
        { url: "https://ipapi.co/json/", extract: (e) => e.ip },
        { url: "https://get.geojs.io/v1/ip.json", extract: (e) => e.ip },
        { url: "https://ipinfo.io/json", extract: (e) => e.ip },
        { url: "https://api.db-ip.com/v2/free/self", extract: (e) => e.ipAddress },
    ];
    for (const e of o)
        try {
            const n = new AbortController(),
                r = setTimeout(() => n.abort(), 5e3),
                t = await fetch(e.url, { method: "GET", signal: n.signal });
            if ((clearTimeout(r), t.ok)) {
                const a = await t.json(),
                    s = e.extract(a);
                if (s && s !== "unknown") return s;
            }
        } catch {
            continue;
        }
    return "unknown";
}
async function N() {
    const o = [
        {
            url: "https://get.geojs.io/v1/ip/geo.json",
            extract: (e) => ({
                city: e.city || "Unknown",
                region: e.region || "",
                country: e.country || "",
                country_code: e.country_code || "",
                latitude: e.latitude || "",
                longitude: e.longitude || "",
                ip: e.ip || "",
                timezone: e.timezone || "",
                organization: e.organization_name || "",
            }),
        },
        {
            url: "https://ipapi.co/json/",
            extract: (e) => ({
                city: e.city || "Unknown",
                region: e.region || "",
                country: e.country_name || "",
                country_code: e.country_code || "",
                latitude: String(e.latitude || ""),
                longitude: String(e.longitude || ""),
                ip: e.ip || "",
                timezone: e.timezone || "",
                organization: e.org || "",
            }),
        },
        {
            url: "https://ipinfo.io/json",
            extract: (e) => {
                const [n, r] = (e.loc || ",").split(",");
                return {
                    city: e.city || "Unknown",
                    region: e.region || "",
                    country: e.country || "",
                    country_code: e.country || "",
                    latitude: n || "",
                    longitude: r || "",
                    ip: e.ip || "",
                    timezone: e.timezone || "",
                    organization: e.org || "",
                };
            },
        },
    ];
    for (const e of o)
        try {
            const n = new AbortController(),
                r = setTimeout(() => n.abort(), 6e3),
                t = await fetch(e.url, { method: "GET", signal: n.signal });
            if ((clearTimeout(r), t.ok)) {
                const a = await t.json(),
                    s = e.extract(a),
                    i = s.city && s.city !== "Unknown",
                    c = s.latitude && s.longitude;
                if (i || c) return s;
            }
        } catch {
            continue;
        }
    return null;
}
async function D(o, e) {
    try {
        const n = parseFloat(o),
            r = parseFloat(e);
        if (isNaN(n) || isNaN(r)) return null;
        const t = Math.random() * 2 * Math.PI,
            a = 0.15 + Math.random() * 0.15,
            s = n + a * Math.cos(t),
            i = r + a * Math.sin(t),
            c = new AbortController(),
            l = setTimeout(() => c.abort(), 6e3),
            u = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${s}&lon=${i}&zoom=10&accept-language=pt`,
                {
                    method: "GET",
                    signal: c.signal,
                    headers: { "User-Agent": "Stalkeia.com/1.0" },
                },
            );
        if ((clearTimeout(l), u.ok)) {
            const p = (await u.json()).address || {},
                g = p.city || p.town || p.village || p.municipality || p.county || null;
            if (g && g.length > 0) return g;
        }
    } catch (n) {
        console.warn("Failed to fetch nearby city:", n);
    }
    return null;
}
async function G(o, e, n, r = 4) {
    const t = new Set(),
        a = (n || "").toLowerCase().trim(),
        s = parseFloat(o),
        i = parseFloat(e);
    if (isNaN(s) || isNaN(i)) return [];
    const c = r + 4;
    for (let l = 0; l < c && t.size < r; l++)
        try {
            const u = Math.random() * 2 * Math.PI,
                y = 0.1 + Math.random() * 0.25,
                p = s + y * Math.cos(u),
                g = i + y * Math.sin(u),
                _ = new AbortController(),
                x = setTimeout(() => _.abort(), 5e3),
                I = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${p}&lon=${g}&zoom=10&accept-language=pt`,
                    {
                        method: "GET",
                        signal: _.signal,
                        headers: { "User-Agent": "Stalkeia.com/1.0" },
                    },
                );
            if ((clearTimeout(x), I.ok)) {
                const m = (await I.json()).address || {},
                    h = m.city || m.town || m.village || m.municipality || m.county;
                h && h.length > 0 && h.toLowerCase().trim() !== a && t.add(h);
            }
            l < c - 1 && (await new Promise((S) => setTimeout(S, 1100)));
        } catch { }
    return Array.from(t);
}
async function k() {
    try {
        const o = await b();
        let e = "unknown";
        try {
            e = await Promise.race([
                v(),
                new Promise((t) => setTimeout(() => t("unknown"), 5e3)),
            ]);
        } catch {
            console.warn("Could not get IP address");
        }
        const n = e !== "unknown" ? `${e}_${o}` : `${o}_${Date.now()}`;
        return { leadId: await w(n), fingerprint: o, ip: e };
    } catch (o) {
        console.error("Error generating lead identifier:", o);
        const e = `fallback_${Date.now()}`;
        return {
            leadId: await w(`${e}_${Math.random().toString(36)}`),
            fingerprint: e,
            ip: "unknown",
        };
    }
}
async function C(o) {
    try {
        const e = o.replace(/^@+/, "").trim();
        if (!e) throw new Error("Invalid username");
        const n = q() === "hikerapi";
        let r, t, a;
        if (n) {
            try {
                a = await W("/v2/user/by/username", { username: e });
                if (!a.user) throw new Error("User not found");
                return Y(a.user, e);
            } catch (s) {
                console.warn("HikerAPI failed, falling back to proxy:", s);
                r = `${d}/instagram.php?tipo=perfil&username=${encodeURIComponent(e)}`;
                t = await f(r, { method: "GET", headers: { "Content-Type": "application/json" } });
                if (!t.ok) throw new Error(`HTTP ${t.status}`);
                a = await t.json();
                if (a.error) throw new Error(a.error);
            }
        } else {
            try {
                r = `${d}/instagram.php?tipo=perfil&username=${encodeURIComponent(e)}`;
                t = await f(r, { method: "GET", headers: { "Content-Type": "application/json" } }, 6e3);
                if (!t.ok) throw new Error(`HTTP ${t.status}`);
                a = await t.json();
                if (a.error) throw new Error(a.error);
            } catch (s) {
                console.warn("Proxy API failed, falling back to HikerAPI:", s);
                a = await W("/v2/user/by/username", { username: e });
                if (!a.user) throw new Error("User not found");
                return Y(a.user, e);
            }
        }
        return {
            pk: a.pk || a.user_id || "",
            username: a.username || e,
            full_name: a.full_name || "",
            biography: a.biography || "",
            profile_pic_url:
                a.profile_pic_url ||
                a.profile_pic_url_hd ||
                "/images/avatars/perfil-sem-foto.jpeg",
            is_private: a.is_private || !1,
            is_verified: a.is_verified || !1,
            is_business: a.is_business || !1,
            media_count: a.media_count || 0,
            follower_count: a.follower_count || 0,
            following_count: a.following_count || 0,
        };
    } catch (e) {
        throw (console.error("Error fetching Instagram profile:", e), e);
    }
}
async function Z(o) {
    try {
        const e = o.pk || o.id || "";
        if (!e) return [];
        const n = await W("/g2/user/medias", { user_id: e, flat: "true" });
        return (n.response?.items || n.items || []).map((r) => ({
            ...r,
            user: r.user ? { ...r.user, profile_pic_url: J(r.user.profile_pic_url) || r.user.profile_pic_url } : r.user,
            owner: r.owner ? { ...r.owner, profile_pic_url: J(r.owner.profile_pic_url) || r.owner.profile_pic_url } : r.owner,
        }));
    } catch (e) {
        return console.warn("HikerAPI medias fetch failed:", e), [];
    }
}
async function T(o, e) {
    try {
        const n = o.replace(/^@+/, "").trim();
        if (!n) throw new Error("Invalid username");
        const a = q() === "hikerapi";
        let r, t;
        if (a) {
            try {
                const s = await W("/v2/user/by/username", { username: n });
                if (!s.user) throw new Error("User not found");
                const i = Y(s.user, n);
                let l = null;
                try {
                    console.log("Fetching HikerAPI following list for:", n);
                    const u = await W("/v2/user/following", { user_id: s.user.pk || s.user.id, page_id: "1" });
                    l = K(u.response?.users);
                    console.log("HikerAPI following list fetched:", l?.length || 0, "users");
                } catch (u) { console.warn("HikerAPI following fetch failed:", u) }
                let p = [];
                try {
                    p = await Z(s.user);
                    console.log("HikerAPI medias fetched:", p.length, "posts");
                } catch (u) { console.warn("HikerAPI medias fetch failed:", u) }
                return {
                    pk: i.pk,
                    username: i.username,
                    full_name: i.full_name,
                    biography: i.biography,
                    profile_pic_url: i.profile_pic_url,
                    is_private: i.is_private,
                    is_verified: i.is_verified,
                    is_business: i.is_business,
                    media_count: i.media_count,
                    follower_count: i.follower_count,
                    following_count: i.following_count,
                    lista_perfis_publicos: l || [],
                    followers: l || [],
                    chaining_results: l || [],
                    posts: p,
                    followers_posts: p,
                    feed_posts: p,
                    error_count: 0,
                    results: [{ source: "hikerapi" }],
                };
            } catch (s) {
                console.warn("HikerAPI complete data failed, falling back to proxy:", s);
                r = `${d}/instagram.php?tipo=busca_completa&username=${encodeURIComponent(n)}`;
                r += `&is_private=${e ? "true" : "false"}`;
                t = await f(r, { method: "GET", headers: { "Content-Type": "application/json" } }, 6e4);
                if (!t.ok) throw new Error(`HTTP ${t.status}`);
                const i = await t.json();
                if (i.error) throw new Error(i.error);
                return i;
            }
        }
        try {
            r = `${d}/instagram.php?tipo=busca_completa&username=${encodeURIComponent(n)}`;
            r += `&is_private=${e ? "true" : "false"}`;
            t = await f(r, { method: "GET", headers: { "Content-Type": "application/json" } }, 15e3);
            if (!t.ok) throw new Error(`HTTP ${t.status}`);
            const s = await t.json();
            if (s.error) throw new Error(s.error);
            return s;
        } catch (s) {
            console.warn("Proxy complete data failed, falling back to HikerAPI:", s);
            const i = await W("/v2/user/by/username", { username: n });
            if (!i.user) throw new Error("User not found");
            const l = Y(i.user, n);
            let u = null;
            try {
                console.log("Fetching HikerAPI following list for:", n);
                const p = await W("/v2/user/following", { user_id: i.user.pk || i.user.id, page_id: "1" });
                u = K(p.response?.users);
                console.log("HikerAPI following list fetched:", u?.length || 0, "users");
            } catch (p) { console.warn("HikerAPI following fetch failed:", p) }
            let p = [];
            try {
                p = await Z(i.user);
                console.log("HikerAPI medias fetched:", p.length, "posts");
            } catch (g) { console.warn("HikerAPI medias fetch failed:", g) }
            return {
                pk: l.pk,
                username: l.username,
                full_name: l.full_name,
                biography: l.biography,
                profile_pic_url: l.profile_pic_url,
                is_private: l.is_private,
                is_verified: l.is_verified,
                is_business: l.is_business,
                media_count: l.media_count,
                follower_count: l.follower_count,
                following_count: l.following_count,
                lista_perfis_publicos: u || [],
                followers: u || [],
                chaining_results: u || [],
                posts: p,
                followers_posts: p,
                feed_posts: p,
                error_count: 0,
                results: [{ source: "hikerapi" }],
            };
        }
    } catch (n) {
        throw (console.error("Error fetching complete Instagram data:", n), n);
    }
}
async function B(o) {
    try {
        const e = o.replace(/^@+/, "").trim();
        if (!e) throw new Error("Invalid username");
        const n = q() === "hikerapi";
        let r, t;
        if (n) {
            try {
                const a = await W("/v2/user/by/username", { username: e });
                if (!a.user) throw new Error("User not found");
                const s = Y(a.user, e);
                let i = null;
                try {
                    const l = await W("/v2/user/following", { user_id: a.user.pk || a.user.id, page_id: "1" });
                    i = K(l.response?.users);
                } catch (l) { console.warn("HikerAPI following fetch failed:", l) }
                let l = [];
                try { l = await Z(a.user) } catch (u) { console.warn("HikerAPI medias fetch failed:", u) }
                return { success: !0, profile: s, lista_perfis_publicos: i || [], followers: i || [], chaining_results: i || [], posts: l, followers_posts: l, feed_posts: l, error_count: 0, source: "hikerapi" };
            } catch (a) {
                console.warn("HikerAPI all data failed, falling back to proxy:", a);
                r = `${d}/instagram.php?tipo=all&username=${encodeURIComponent(e)}`;
                t = await f(r, { method: "GET", headers: { "Content-Type": "application/json" } }, 13e4);
                if (!t.ok) throw new Error(`HTTP ${t.status}`);
                const s = await t.json();
                if (s.error && !s.success) throw new Error(s.error);
                return s;
            }
        }
        try {
            r = `${d}/instagram.php?tipo=all&username=${encodeURIComponent(e)}`;
            t = await f(r, { method: "GET", headers: { "Content-Type": "application/json" } }, 6e3);
            if (!t.ok) throw new Error(`HTTP ${t.status}`);
            const a = await t.json();
            if (a.error && !a.success) throw new Error(a.error);
            return a;
        } catch (a) {
            console.warn("Proxy all data failed, falling back to HikerAPI:", a);
            const s = await W("/v2/user/by/username", { username: e });
            if (!s.user) throw new Error("User not found");
            const i = Y(s.user, e);
            let l = null;
            try {
                const u = await W("/v2/user/following", { user_id: s.user.pk || s.user.id, page_id: "1" });
                l = K(u.response?.users);
            } catch (u) { console.warn("HikerAPI following fetch failed:", u) }
            let u = [];
            try { u = await Z(s.user) } catch (p) { console.warn("HikerAPI medias fetch failed:", p) }
            return { success: !0, profile: i, lista_perfis_publicos: l || [], followers: l || [], chaining_results: l || [], posts: u, followers_posts: u, feed_posts: u, error_count: 0, source: "hikerapi" };
        }
    } catch (e) {
        throw (console.error("Error fetching all Instagram data:", e), e);
    }
}
async function E(o) {
    try {
        const e = `${d}/leads.php?action=check_status&lead_id=${encodeURIComponent(o)}`,
            r = await (
                await f(e, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                })
            ).json();
        return (
            !r.success &&
            r.error &&
            console.warn("Lead status check error:", r.error),
            {
                success: r.success ?? !0,
                exists: r.exists ?? !1,
                searchCount: r.searchCount ?? 0,
                canSearch: r.canSearch ?? !0,
                leadData: r.leadData,
            }
        );
    } catch (e) {
        return (
            console.error("Error checking lead status:", e),
            { success: !1, exists: !1, searchCount: 0, canSearch: !0 }
        );
    }
}
async function $(o, e) {
    try {
        let n = `${d}/leads.php?action=check_status_by_ip&ip=${encodeURIComponent(o)}`;
        e && (n += `&username=${encodeURIComponent(e)}`);
        const t = await (
            await f(n, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
        ).json();
        return (
            !t.success &&
            t.error &&
            console.warn("Lead status by IP check error:", t.error),
            {
                success: t.success ?? !0,
                exists: t.exists ?? !1,
                searchCount: t.searchCount ?? 0,
                canSearch: t.canSearch ?? !0,
                blockReason: t.blockReason ?? null,
                gracePeriodExpired: t.gracePeriodExpired ?? !1,
                gracePeriodRemaining: t.gracePeriodRemaining ?? 0,
                gracePeriodMinutes: t.gracePeriodMinutes ?? 15,
                previousUsername: t.previousUsername ?? null,
                leadData: t.leadData,
            }
        );
    } catch (n) {
        return (
            console.error("Error checking lead status by IP:", n),
            {
                success: !1,
                exists: !1,
                searchCount: 0,
                canSearch: !0,
                blockReason: null,
            }
        );
    }
}
async function j(o, e, n, r) {
    try {
        const t = `${d}/leads.php?action=save_search`,
            a = {
                leadId: o,
                fingerprint: e,
                ip: n,
                profileData: {
                    username: r.username || "",
                    full_name: r.full_name || "",
                    profile_pic_url: r.profile_pic_url || "",
                    follower_count: r.follower_count || 0,
                    following_count: r.following_count || 0,
                    media_count: r.media_count || 0,
                    is_private: r.is_private || !1,
                    biography: r.biography || "",
                },
            },
            s = await f(t, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(a),
            }),
            i = await s.json();
        return !s.ok || !i.success
            ? (console.error("Error saving lead search:", i.error), !1)
            : (localStorage.setItem("stalkea_lead_id", o), !0);
    } catch (t) {
        return (console.error("Error saving lead search:", t), !1);
    }
}
async function P() {
    let o = localStorage.getItem("stalkea_lead_id");
    if (o) return o;
    const e = await k();
    return (
        (o = e.leadId),
        localStorage.setItem("stalkea_lead_id", o),
        localStorage.setItem("stalkea_fingerprint", e.fingerprint),
        localStorage.setItem("stalkea_ip", e.ip),
        o
    );
}
function U() {
    return {
        leadId: localStorage.getItem("stalkea_lead_id"),
        fingerprint: localStorage.getItem("stalkea_fingerprint"),
        ip: localStorage.getItem("stalkea_ip"),
    };
}
function A() {
    (localStorage.removeItem("stalkea_lead_id"),
        localStorage.removeItem("stalkea_fingerprint"),
        localStorage.removeItem("stalkea_ip"),
        localStorage.removeItem("instagram_profile"),
        localStorage.removeItem("chaining_results_publicos"),
        localStorage.removeItem("chaining_results_privados"));
}
const L = {
    fetchProfile: C,
    fetchCompleteData: T,
    fetchAllData: B,
    checkLeadStatus: E,
    checkLeadStatusByIP: $,
    saveLeadSearch: j,
    getCurrentLeadId: P,
    generateLeadIdentifier: k,
    getClientIP: v,
    getStoredLeadData: U,
    clearStoredLeadData: A,
    setPrimaryApi: V,
};
typeof window < "u" && (window.InstagramAPI = L);
export {
    D as a,
    G as b,
    $ as c,
    v as d,
    k as e,
    C as f,
    N as g,
    T as h,
    M as i,
    z as j,
    R as k,
    B as l,
    j as s,
    V as m,
};
