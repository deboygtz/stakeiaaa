const c = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "sck",
    "src",
],
    a = "stalkea_utm_params";
function u() {
    if (typeof window > "u") return {};
    const t = new URLSearchParams(window.location.search),
        r = {};
    return (
        c.forEach((e) => {
            const n = t.get(e);
            n && (r[e] = n);
        }),
        r
    );
}
function f() {
    if (typeof window > "u") return {};
    try {
        const t = localStorage.getItem(a);
        return t ? JSON.parse(t) : {};
    } catch {
        return {};
    }
}
function m(t) {
    if (!(typeof window > "u"))
        try {
            const e = { ...f(), ...t };
            localStorage.setItem(a, JSON.stringify(e));
        } catch { }
}
function g() {
    const t = u(),
        e = { ...f() };
    return (
        c.forEach((n) => {
            t[n] && (e[n] = t[n]);
        }),
        Object.keys(t).length > 0 && m(e),
        e
    );
}
function d(t, r) {
    const e = g(),
        n = new URLSearchParams();
    (r &&
        Object.entries(r).forEach(([o, s]) => {
            s && n.set(o, s);
        }),
        c.forEach((o) => {
            const s = e[o];
            s && n.set(o, s);
        }));
    const i = n.toString();
    return i ? `${t}?${i}` : t;
}
function h() {
    const t = u();
    Object.keys(t).length > 0 && m(t);
}
export { d as b, g, h as i };
