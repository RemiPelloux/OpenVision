"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeoutWith = void 0;
const n = require("./module-2665.js"), s = require("./module-97842.js"), o = require("./module-22402.js");
exports.timeoutWith = function(e, t, r) {
    let i, a, c;
    if (r = r ?? n.asyncScheduler, (0, s.isValidDate)(e) ? i = e : "number" == typeof e && (a = e), !t) throw new TypeError("No observable provided to switch to");
    if (c = ()=>t, null == i && null == a) throw new TypeError("No timeout provided.");
    return (0, o.timeout)({
        first: i,
        each: a,
        scheduler: r,
        with: c
    });
};
