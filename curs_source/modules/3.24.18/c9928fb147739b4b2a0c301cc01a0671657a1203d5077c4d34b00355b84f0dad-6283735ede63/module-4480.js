Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scan = void 0;
const s = require("./module-1078.js"), o = require("./module-9904.js");
exports.scan = function(e, a) {
    const n = arguments.length >= 2;
    return (r)=>new s.Observable((s)=>(0, o.scanInternals)(e, a, n, !0, !1, r, s));
};
