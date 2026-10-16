"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseDate = function(e) {
    if (!e) return;
    const t = e.split(r);
    let n, a, c, l, u, d;
    for(let e = 0; e < t.length; e++){
        const r = (t[e] ?? "").trim();
        if (r.length) {
            if (void 0 === c) {
                const e = o(r);
                if (e) {
                    n = e[0], a = e[1], c = e[2];
                    continue;
                }
            }
            if (void 0 === l) {
                const e = s(r, 1, 2, !0);
                if (void 0 !== e) {
                    l = e;
                    continue;
                }
            }
            if (void 0 === u) {
                const e = i(r);
                if (void 0 !== e) {
                    u = e;
                    continue;
                }
            }
            if (void 0 === d) {
                const e = s(r, 2, 4, !0);
                void 0 !== e && (d = e, d >= 70 && d <= 99 ? d += 1900 : d >= 0 && d <= 69 && (d += 2e3));
            }
        }
    }
    if (void 0 === l || void 0 === u || void 0 === d || void 0 === n || void 0 === a || void 0 === c || l < 1 || l > 31 || d < 1601 || n > 23 || a > 59 || c > 59) return;
    return new Date(Date.UTC(d, u, l, n, a, c));
};
const r = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, n = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
};
function s(e, t, r, n) {
    let s = 0;
    for(; s < e.length;){
        const t = e.charCodeAt(s);
        if (t <= 47 || t >= 58) break;
        s++;
    }
    if (!(s < t || s > r) && (n || s == e.length)) return parseInt(e.slice(0, s), 10);
}
function o(e) {
    const t = e.split(":"), r = [
        0,
        0,
        0
    ];
    if (3 === t.length) {
        for(let e = 0; e < 3; e++){
            const n = 2 == e, o = t[e];
            if (void 0 === o) return;
            const i = s(o, 1, 2, n);
            if (void 0 === i) return;
            r[e] = i;
        }
        return r;
    }
}
function i(e) {
    switch(e = String(e).slice(0, 3).toLowerCase()){
        case "jan":
            return n.jan;
        case "feb":
            return n.feb;
        case "mar":
            return n.mar;
        case "apr":
            return n.apr;
        case "may":
            return n.may;
        case "jun":
            return n.jun;
        case "jul":
            return n.jul;
        case "aug":
            return n.aug;
        case "sep":
            return n.sep;
        case "oct":
            return n.oct;
        case "nov":
            return n.nov;
        case "dec":
            return n.dec;
        default:
            return;
    }
}
