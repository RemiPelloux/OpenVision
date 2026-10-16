Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeWhile = void 0;
const s = require("./module-1078.js");
exports.takeWhile = function(e, a = !1) {
    return (n)=>new s.Observable((o)=>{
            let r = 0;
            const t = (0, s.operate)({
                destination: o,
                next: (n)=>{
                    e(n, r++) ? o.next(n) : (t.unsubscribe(), a && o.next(n), o.complete());
                }
            });
            n.subscribe(t);
        });
};
