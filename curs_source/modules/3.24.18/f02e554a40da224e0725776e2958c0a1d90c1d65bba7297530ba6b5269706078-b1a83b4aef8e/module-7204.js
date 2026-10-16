"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.permuteDomain = function(t, e) {
    const r = (0, n.getPublicSuffix)(t, {
        allowSpecialUseDomain: e
    });
    if (!r) return;
    if (r == t) return [
        t
    ];
    "." == t.slice(-1) && (t = t.slice(0, -1));
    const s = t.slice(0, -(r.length + 1)).split(".").reverse();
    let i = r;
    const o = [
        i
    ];
    for(; s.length;){
        i = `${s.shift()}.${i}`, o.push(i);
    }
    return o;
};
const n = require("./module-6098.js");
