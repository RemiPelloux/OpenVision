"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeLast = void 0;
const n = require("./module-744.js"), s = require("./module-51078.js");
exports.takeLast = function(e) {
    return e <= 0 ? ()=>n.EMPTY : (t)=>new s.Observable((r)=>{
            let n = new Array(e), o = 0;
            t.subscribe((0, s.operate)({
                destination: r,
                next: (t)=>{
                    n[o++ % e] = t;
                },
                complete: ()=>{
                    const t = e <= o ? o : 0, s = Math.min(e, o);
                    for(let o = 0; o < s; o++)r.next(n[(t + o) % e]);
                    r.complete();
                },
                finalize: ()=>{
                    n = null;
                }
            }));
        });
};
