Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeoutWith = void 0;
const s = require("./module-2665.js"), o = require("./module-7842.js"), r = require("./module-2402.js");
exports.timeoutWith = function(e, a, n) {
    let t, i, m;
    if (n = n ?? s.asyncScheduler, (0, o.isValidDate)(e) ? t = e : "number" == typeof e && (i = e), !a) throw new TypeError("No observable provided to switch to");
    if (m = ()=>a, null == t && null == i) throw new TypeError("No timeout provided.");
    return (0, r.timeout)({
        first: t,
        each: i,
        scheduler: n,
        with: m
    });
};
