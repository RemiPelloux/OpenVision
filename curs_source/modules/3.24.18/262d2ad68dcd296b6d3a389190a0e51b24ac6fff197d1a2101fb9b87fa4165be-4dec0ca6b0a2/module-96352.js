"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.range = void 0;
const n = require("./module-51078.js"), o = require("./module-744.js"), s = require("./module-55830.js");
exports.range = function(e, t, r) {
    if (null == t && (t = e, e = 0), t <= 0) return o.EMPTY;
    const i = t + e;
    return new n.Observable(r ? (t)=>{
        let n = e;
        const o = ()=>{
            n < i ? (t.next(n++), t.closed || (0, s.executeSchedule)(t, r, o)) : t.complete();
        };
        (0, s.executeSchedule)(t, r, o);
    } : (t)=>{
        let r = e;
        for(; r < i && !t.closed;)t.next(r++);
        t.complete();
    });
};
