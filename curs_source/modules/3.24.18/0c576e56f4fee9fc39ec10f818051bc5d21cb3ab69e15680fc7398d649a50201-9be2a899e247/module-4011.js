"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEventPattern = void 0;
const n = require("./module-1078.js"), o = require("./module-5683.js");
exports.fromEventPattern = function e(t, r, s) {
    return s ? (0, o.mapOneOrManyArgs)(s)(e(t, r)) : new n.Observable((e)=>{
        const o = (...t)=>e.next(1 === t.length ? t[0] : t), s = t(o);
        return (0, n.isFunction)(r) ? ()=>r(o, s) : void 0;
    });
};
