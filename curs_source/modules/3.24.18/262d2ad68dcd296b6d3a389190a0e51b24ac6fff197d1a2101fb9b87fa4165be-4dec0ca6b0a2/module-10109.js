"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shareReplay = void 0;
const n = require("./module-89482.js"), o = require("./module-33054.js");
exports.shareReplay = function(e, t, r) {
    let s, i = !1;
    return e && "object" == typeof e ? { bufferSize: s = 1 / 0, windowTime: t = 1 / 0, refCount: i = !1, scheduler: r } = e : s = e ?? 1 / 0, (0, o.share)({
        connector: ()=>new n.ReplaySubject(s, t, r),
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: i
    });
};
