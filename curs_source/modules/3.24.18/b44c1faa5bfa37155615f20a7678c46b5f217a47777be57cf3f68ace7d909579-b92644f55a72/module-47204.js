"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.permuteDomain = function(e, t) {
    const r = (0, n.getPublicSuffix)(e, {
        allowSpecialUseDomain: t
    });
    if (!r) return;
    if (r == e) return [
        e
    ];
    "." == e.slice(-1) && (e = e.slice(0, -1));
    const s = e.slice(0, -(r.length + 1)).split(".").reverse();
    let o = r;
    const i = [
        o
    ];
    for(; s.length;){
        o = `${s.shift()}.${o}`, i.push(o);
    }
    return i;
};
const n = require("./module-16098.js");
