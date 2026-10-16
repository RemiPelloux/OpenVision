"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeoutWith = void 0;
const n = require("./module-2665.js"), o = require("./module-97842.js"), s = require("./module-22402.js");
exports.timeoutWith = function(e, t, r) {
    let i, a, l;
    if (r = r ?? n.asyncScheduler, (0, o.isValidDate)(e) ? i = e : "number" == typeof e && (a = e), !t) throw new TypeError("No observable provided to switch to");
    if (l = ()=>t, null == i && null == a) throw new TypeError("No timeout provided.");
    return (0, s.timeout)({
        first: i,
        each: a,
        scheduler: r,
        with: l
    });
};
