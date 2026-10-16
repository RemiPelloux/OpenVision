"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEventPattern = void 0;
const n = require("./module-51078.js"), s = require("./module-65683.js");
exports.fromEventPattern = function e(t, r, o) {
    return o ? (0, s.mapOneOrManyArgs)(o)(e(t, r)) : new n.Observable((e)=>{
        const s = (...t)=>e.next(1 === t.length ? t[0] : t), o = t(s);
        return (0, n.isFunction)(r) ? ()=>r(s, o) : void 0;
    });
};
