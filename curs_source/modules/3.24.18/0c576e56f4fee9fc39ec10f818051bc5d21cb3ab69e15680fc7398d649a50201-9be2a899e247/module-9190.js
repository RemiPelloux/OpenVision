"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.zip = void 0;
const n = require("./module-1078.js"), o = require("./module-9031.js"), s = require("./module-744.js"), i = require("./module-5619.js");
exports.zip = function(...e) {
    const t = (0, i.popResultSelector)(e), r = (0, o.argsOrArgArray)(e);
    return r.length ? new n.Observable((e)=>{
        let o = r.map(()=>[]), s = r.map(()=>!1);
        e.add(()=>{
            o = s = null;
        });
        for(let i = 0; !e.closed && i < r.length; i++)(0, n.from)(r[i]).subscribe((0, n.operate)({
            destination: e,
            next: (r)=>{
                if (o[i].push(r), o.every((e)=>e.length)) {
                    const r = o.map((e)=>e.shift());
                    e.next(t ? t(...r) : r), o.some((e, t)=>!e.length && s[t]) && e.complete();
                }
            },
            complete: ()=>{
                s[i] = !0, !o[i].length && e.complete();
            }
        }));
        return ()=>{
            o = s = null;
        };
    }) : s.EMPTY;
};
