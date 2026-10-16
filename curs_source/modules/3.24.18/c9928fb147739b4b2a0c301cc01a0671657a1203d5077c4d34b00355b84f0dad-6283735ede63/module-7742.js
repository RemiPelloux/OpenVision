Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.take = void 0;
const s = require("./module-744.js"), o = require("./module-1078.js");
exports.take = function(e) {
    return e <= 0 ? ()=>s.EMPTY : (a)=>new o.Observable((n)=>{
            let s = 0;
            const r = (0, o.operate)({
                destination: n,
                next: (a)=>{
                    ++s < e ? n.next(a) : (r.unsubscribe(), n.next(a), n.complete());
                }
            });
            a.subscribe(r);
        });
};
