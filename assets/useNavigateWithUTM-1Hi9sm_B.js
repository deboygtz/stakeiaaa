import { q as o, a as c } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { b as u, g as m } from "./utm-ClCK1WqV.js";
function h() {
    const a = o();
    return c.useCallback(
        (r, t) => {
            const { additionalParams: i, ...n } = t || {},
                e = u(r, i);
            a(e, n);
        },
        [a],
    );
}
function M() {
    const a = m(),
        s = new URLSearchParams();
    return (
        Object.entries(a).forEach(([r, t]) => {
            t && s.set(r, t);
        }),
        s.toString()
    );
}
export { M as a, h as u };
