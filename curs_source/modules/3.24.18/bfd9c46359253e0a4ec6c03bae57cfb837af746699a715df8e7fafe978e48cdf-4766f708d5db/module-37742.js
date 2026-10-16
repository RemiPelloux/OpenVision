"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.take = void 0;
const n = require("./module-744.js"), s = require("./module-51078.js");
exports.take = function(e) {
    return e <= 0 ? ()=>n.EMPTY : (t)=>new s.Observable((r)=>{
            let n = 0;
            const o = (0, s.operate)({
                destination: r,
                next: (t)=>{
                    ++n < e ? r.next(t) : (o.unsubscribe(), r.next(t), r.complete());
                }
            });
            t.subscribe(o);
        });
};
