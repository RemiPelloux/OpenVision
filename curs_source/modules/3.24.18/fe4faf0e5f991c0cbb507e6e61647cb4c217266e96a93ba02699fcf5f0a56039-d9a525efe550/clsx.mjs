import { i } from "./plugin-brand-icon.js";
function oTt(r) {
    var e, a, s = "";
    if (typeof r == "string" || typeof r == "number") s += r;
    else if (typeof r == "object") if (Array.isArray(r)) {
        var l = r.length;
        for(e = 0; e < l; e++)r[e] && (a = oTt(r[e])) && (s && (s += " "), s += a);
    } else for(a in r)r[a] && (s && (s += " "), s += a);
    return s;
}
function gme() {
    for(var r, e, a = 0, s = "", l = arguments.length; a < l; a++)(r = arguments[a]) && (e = oTt(r)) && (s && (s += " "), s += e);
    return s;
}
export { gme, oTt };
var __wakaru_sTt_initialized = false;
export function sTt() {
if (__wakaru_sTt_initialized) return;
__wakaru_sTt_initialized = true;
i(oTt, "r"), i(gme, "clsx");

}
