Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.max = void 0;
const s = require("./module-8339.js"), o = require("./module-1078.js");
exports.max = function(e) {
    return (0, s.reduce)((0, o.isFunction)(e) ? (a, n)=>e(a, n) > 0 ? a : n : (e, a)=>e > a ? e : a);
};
