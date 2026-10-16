import { a } from "./business-error.js";
function hd(e, t, r) {
    function n(l) {
        return l && l.indexOf("###") > -1 ? l.replace(/###/g, ".") : l;
    }
    a(n, "cleanKey");
    function o() {
        return !e || typeof e == "string";
    }
    a(o, "canNotTraverseDeeper");
    for(var i = typeof t != "string" ? [].concat(t) : t.split("."); i.length > 1;){
        if (o()) return {};
        var s = n(i.shift());
        if (lc.indexOf(s) > -1) return {};
        !e[s] && r && (e[s] = new r), e = e[s];
    }
    if (o()) return {};
    var c = n(i.shift());
    return lc.indexOf(c) > -1 ? {} : {
        obj: e,
        k: c
    };
}
function Ew(e, t, r) {
    var n = hd(e, t, Object), o = n.obj, i = n.k;
    o !== void 0 && (o[i] = r);
}
function kw(e, t) {
    var r = hd(e, t), n = r.obj, o = r.k;
    if (n) return n[o];
}
function Tw(e) {
    return Cw.call(Iw.call(arguments, 1), function(t) {
        if (t) for(var r = 0, n = Object.keys(t); r < n.length; r++){
            var o = n[r];
            lc.indexOf(o) > -1 || e[o] === void 0 && (e[o] = t[o]);
        }
    }), e;
}
var lc, xd, Cw, Iw;
export { Cw, Ew, Iw, Tw, hd, kw, lc, xd };
var __wakaru_p6_initialized = false;
export function p6() {
if (__wakaru_p6_initialized) return;
__wakaru_p6_initialized = true;
lc = [
    "__proto__",
    "constructor",
    "prototype"
], a(hd, "getLastOfPath"), a(Ew, "setPath"), a(kw, "getPath"), xd = [], Cw = xd.forEach, Iw = xd.slice, a(Tw, "defaults");

}
