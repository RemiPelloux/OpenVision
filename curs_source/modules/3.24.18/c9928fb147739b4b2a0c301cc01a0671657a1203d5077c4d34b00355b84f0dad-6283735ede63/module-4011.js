Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEventPattern = void 0;
const s = require("./module-1078.js"), o = require("./module-5683.js");
exports.fromEventPattern = function e(a, n, r) {
    return r ? (0, o.mapOneOrManyArgs)(r)(e(a, n)) : new s.Observable((e)=>{
        const o = (...a)=>e.next(1 === a.length ? a[0] : a), r = a(o);
        return (0, s.isFunction)(n) ? ()=>n(o, r) : void 0;
    });
};
