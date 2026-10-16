import { i } from "./plugin-brand-icon.js";
function vhr(r) {
    const e = String(r), a = /\r?\n|\r/g;
    let s = a.exec(e), l = 0;
    const u = [];
    for(; s;)u.push(NPt(e.slice(l, s.index), l > 0, !0), s[0]), l = s.index + s[0].length, s = a.exec(e);
    return u.push(NPt(e.slice(l), l > 0, !1)), u.join("");
}
function NPt(r, e, a) {
    let s = 0, l = r.length;
    if (e) {
        let u = r.codePointAt(s);
        for(; u === MPt || u === RPt;)s++, u = r.codePointAt(s);
    }
    if (a) {
        let u = r.codePointAt(l - 1);
        for(; u === MPt || u === RPt;)l--, u = r.codePointAt(l - 1);
    }
    return l > s ? r.slice(s, l) : "";
}
var MPt, RPt;
export { MPt, NPt, RPt, vhr };
var __wakaru_s4i_initialized = false;
export function s4i() {
if (__wakaru_s4i_initialized) return;
__wakaru_s4i_initialized = true;
MPt = 9, RPt = 32, i(vhr, "trimLines"), i(NPt, "trimLine");

}
