Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shareReplay = void 0;
const s = require("./module-9482.js"), o = require("./module-3054.js");
exports.shareReplay = function(e, a, n) {
    let r, t = !1;
    return e && "object" == typeof e ? { bufferSize: r = 1 / 0, windowTime: a = 1 / 0, refCount: t = !1, scheduler: n } = e : r = e ?? 1 / 0, (0, o.share)({
        connector: ()=>new s.ReplaySubject(r, a, n),
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: t
    });
};
