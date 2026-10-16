import { Dqy, Mqy, qph, sFe } from "./LYd.js";
import { Bbn, Ubn, fit } from "./index_43.js";
import { nui } from "./index_44.js";
import { E } from "./tslib.es6.js";
var L7t, Vph, Kph, uMr, Yph;
export { Kph, L7t, Vph, Yph, uMr };
var __wakaru_Nqy_initialized = false;
export function Nqy() {
if (__wakaru_Nqy_initialized) return;
__wakaru_Nqy_initialized = true;
E(), nui(), Ubn(), L7t = {
    indicator: "indicator",
    textOnly: "text-only",
    remove: "remove"
}, Vph = new Set([
    "https:",
    "http:",
    "irc:",
    "ircs:",
    "mailto:",
    "xmpp:",
    "blob:"
]), Kph = new Set([
    "javascript:",
    "data:",
    "file:",
    "vbscript:"
]), uMr = Symbol("node-seen"), Yph = (t, e, n, i, r, s, o, a, l)=>{
    const c = (u, d, h)=>{
        if (u.type !== "element" || u[uMr]) return Bbn;
        if (u.tagName === "a") {
            const p = qph(u.properties.href, e, t, !1, !1, r);
            if (p === null) {
                if (u[uMr] = !0, sFe(u, c), h && typeof d == "number") {
                    const g = Mqy(u, a, o);
                    if (g.type === "remove") return h.children.splice(d, 1), [
                        fit,
                        d
                    ];
                    h.children[d] = g.element;
                }
                return fit;
            } else return u.properties.href = p, u.properties.target = "_blank", u.properties.rel = "noopener noreferrer", Bbn;
        }
        if (u.tagName === "img") {
            const p = qph(u.properties.src, n, t, i, !0, r);
            if (p === null) {
                if (u[uMr] = !0, sFe(u, c), h && typeof d == "number") {
                    const g = Dqy(u, l, s);
                    if (g.type === "remove") return h.children.splice(d, 1), [
                        fit,
                        d
                    ];
                    h.children[d] = g.element;
                }
                return fit;
            } else return u.properties.src = p, Bbn;
        }
        return Bbn;
    };
    return c;
};

}
