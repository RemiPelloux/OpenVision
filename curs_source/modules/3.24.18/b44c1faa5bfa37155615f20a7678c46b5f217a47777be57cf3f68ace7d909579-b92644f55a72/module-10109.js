"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shareReplay = void 0;
const n = require("./module-89482.js"), s = require("./module-33054.js");
exports.shareReplay = function(e, t, r) {
    let o, i = !1;
    return e && "object" == typeof e ? { bufferSize: o = 1 / 0, windowTime: t = 1 / 0, refCount: i = !1, scheduler: r } = e : o = e ?? 1 / 0, (0, s.share)({
        connector: ()=>new n.ReplaySubject(o, t, r),
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: i
    });
};
