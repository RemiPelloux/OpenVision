import { _Ne, wir } from "./defined-info.js";
import { Cw, bir } from "./info.js";
import { iJ, tNt } from "./normalize.js";
import { i } from "./plugin-brand-icon.js";
function oJ(r, e) {
    const a = iJ(e);
    let s = e, l = Cw;
    if (a in r.normal) return r.property[r.normal[a]];
    if (a.length > 4 && a.slice(0, 4) === "data" && Tir.test(e)) {
        if (e.charAt(4) === "-") {
            const u = e.slice(5).replace(dNt, Eir);
            s = "data" + u.charAt(0).toUpperCase() + u.slice(1);
        } else {
            const u = e.slice(4);
            if (!dNt.test(u)) {
                let p = u.replace(Air, Sir);
                p.charAt(0) !== "-" && (p = "-" + p), e = "data" + p;
            }
        }
        l = _Ne;
    }
    return new l(s, e);
}
function Sir(r) {
    return "-" + r.toLowerCase();
}
function Eir(r) {
    return r.charAt(1).toUpperCase();
}
var Air, dNt, Tir;
export { Air, Eir, Sir, Tir, dNt, oJ };
var __wakaru_avi_initialized = false;
export function avi() {
if (__wakaru_avi_initialized) return;
__wakaru_avi_initialized = true;
wir(), bir(), tNt(), Air = /[A-Z]/g, dNt = /-[a-z]/g, Tir = /^data[-\w.:]+$/i, i(oJ, "find"), i(Sir, "kebab"), i(Eir, "camelcase");

}
