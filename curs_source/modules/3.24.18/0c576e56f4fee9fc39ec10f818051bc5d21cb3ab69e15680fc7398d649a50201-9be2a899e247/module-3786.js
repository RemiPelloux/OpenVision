"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeLast = void 0;
const n = require("./module-744.js"), o = require("./module-1078.js");
exports.takeLast = function(e) {
    return e <= 0 ? ()=>n.EMPTY : (t)=>new o.Observable((r)=>{
            let n = new Array(e), s = 0;
            t.subscribe((0, o.operate)({
                destination: r,
                next: (t)=>{
                    n[s++ % e] = t;
                },
                complete: ()=>{
                    const t = e <= s ? s : 0, o = Math.min(e, s);
                    for(let s = 0; s < o; s++)r.next(n[(t + s) % e]);
                    r.complete();
                },
                finalize: ()=>{
                    n = null;
                }
            }));
        });
};
