import { C5t, T5t, a9e } from "./index_38.js";
import { Wkn } from "./index_39.js";
import { QFg, ZFg, wdl, yCe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var bft, Tdl, Edl, ZTi, xdl;
export { Edl, Tdl, ZTi, bft, xdl };
var __wakaru_JFg_initialized = false;
export function JFg() {
if (__wakaru_JFg_initialized) return;
__wakaru_JFg_initialized = true;
x(), Wkn(), T5t(), bft = {
    indicator: "indicator",
    textOnly: "text-only",
    remove: "remove"
}, Tdl = new Set([
    "https:",
    "http:",
    "irc:",
    "ircs:",
    "mailto:",
    "xmpp:",
    "blob:"
]), Edl = new Set([
    "javascript:",
    "data:",
    "file:",
    "vbscript:"
]), ZTi = Symbol("node-seen"), xdl = (e, t, n, i, r, s, o, a, c)=>{
    const l = (u, h, p)=>{
        if (u.type !== "element" || u[ZTi]) return C5t;
        if (u.tagName === "a") {
            const g = wdl(u.properties.href, t, e, !1, !1, r);
            if (g === null) {
                if (u[ZTi] = !0, yCe(u, l), p && typeof h == "number") {
                    const f = ZFg(u, a, o);
                    if (f.type === "remove") return p.children.splice(h, 1), [
                        a9e,
                        h
                    ];
                    p.children[h] = f.element;
                }
                return a9e;
            } else return u.properties.href = g, u.properties.target = "_blank", u.properties.rel = "noopener noreferrer", C5t;
        }
        if (u.tagName === "img") {
            const g = wdl(u.properties.src, n, e, i, !0, r);
            if (g === null) {
                if (u[ZTi] = !0, yCe(u, l), p && typeof h == "number") {
                    const f = QFg(u, c, s);
                    if (f.type === "remove") return p.children.splice(h, 1), [
                        a9e,
                        h
                    ];
                    p.children[h] = f.element;
                }
                return a9e;
            } else return u.properties.src = g, C5t;
        }
        return C5t;
    };
    return l;
};

}
