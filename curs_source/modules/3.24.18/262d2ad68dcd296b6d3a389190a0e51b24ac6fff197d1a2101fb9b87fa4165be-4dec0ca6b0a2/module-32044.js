"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.tap = void 0;
const n = require("./module-51078.js"), o = require("./module-44896.js");
exports.tap = function(e) {
    const t = (0, n.isFunction)(e) ? {
        next: e
    } : e;
    return t ? (e)=>new n.Observable((r)=>{
            t.subscribe?.();
            let o = !0;
            e.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    t.next?.(e), r.next(e);
                },
                error: (e)=>{
                    o = !1, t.error?.(e), r.error(e);
                },
                complete: ()=>{
                    o = !1, t.complete?.(), r.complete();
                },
                finalize: ()=>{
                    o && t.unsubscribe?.(), t.finalize?.();
                }
            }));
        }) : o.identity;
};
