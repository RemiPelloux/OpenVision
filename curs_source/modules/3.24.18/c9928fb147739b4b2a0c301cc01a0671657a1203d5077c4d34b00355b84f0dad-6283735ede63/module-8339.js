Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reduce = void 0;
const s = require("./module-9904.js"), o = require("./module-1078.js");
exports.reduce = function(e, a) {
    const n = arguments.length >= 2;
    return (r)=>new o.Observable((o)=>(0, s.scanInternals)(e, a, n, !1, !0, r, o));
};
