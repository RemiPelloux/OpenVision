Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.tap = void 0;
const s = require("./module-1078.js"), o = require("./module-4896.js");
exports.tap = function(e) {
    const a = (0, s.isFunction)(e) ? {
        next: e
    } : e;
    return a ? (e)=>new s.Observable((n)=>{
            a.subscribe?.();
            let o = !0;
            e.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>{
                    a.next?.(e), n.next(e);
                },
                error: (e)=>{
                    o = !1, a.error?.(e), n.error(e);
                },
                complete: ()=>{
                    o = !1, a.complete?.(), n.complete();
                },
                finalize: ()=>{
                    o && a.unsubscribe?.(), a.finalize?.();
                }
            }));
        }) : o.identity;
};
