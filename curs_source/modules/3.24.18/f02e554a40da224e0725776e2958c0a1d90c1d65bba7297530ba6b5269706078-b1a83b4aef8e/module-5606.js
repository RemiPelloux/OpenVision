"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseDate = function(t) {
    if (!t) return;
    const e = t.split(r);
    let n, a, u, c, l, m;
    for(let t = 0; t < e.length; t++){
        const r = (e[t] ?? "").trim();
        if (r.length) {
            if (void 0 === u) {
                const t = i(r);
                if (t) {
                    n = t[0], a = t[1], u = t[2];
                    continue;
                }
            }
            if (void 0 === c) {
                const t = s(r, 1, 2, !0);
                if (void 0 !== t) {
                    c = t;
                    continue;
                }
            }
            if (void 0 === l) {
                const t = o(r);
                if (void 0 !== t) {
                    l = t;
                    continue;
                }
            }
            if (void 0 === m) {
                const t = s(r, 2, 4, !0);
                void 0 !== t && (m = t, m >= 70 && m <= 99 ? m += 1900 : m >= 0 && m <= 69 && (m += 2e3));
            }
        }
    }
    if (void 0 === c || void 0 === l || void 0 === m || void 0 === n || void 0 === a || void 0 === u || c < 1 || c > 31 || m < 1601 || n > 23 || a > 59 || u > 59) return;
    return new Date(Date.UTC(m, l, c, n, a, u));
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
function s(t, e, r, n) {
    let s = 0;
    for(; s < t.length;){
        const e = t.charCodeAt(s);
        if (e <= 47 || e >= 58) break;
        s++;
    }
    if (!(s < e || s > r) && (n || s == t.length)) return parseInt(t.slice(0, s), 10);
}
function i(t) {
    const e = t.split(":"), r = [
        0,
        0,
        0
    ];
    if (3 === e.length) {
        for(let t = 0; t < 3; t++){
            const n = 2 == t, i = e[t];
            if (void 0 === i) return;
            const o = s(i, 1, 2, n);
            if (void 0 === o) return;
            r[t] = o;
        }
        return r;
    }
}
function o(t) {
    switch(t = String(t).slice(0, 3).toLowerCase()){
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
