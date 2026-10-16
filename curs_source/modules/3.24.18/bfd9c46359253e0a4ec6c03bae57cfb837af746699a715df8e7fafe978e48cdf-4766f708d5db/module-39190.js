"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.zip = void 0;
const n = require("./module-51078.js"), s = require("./module-79031.js"), o = require("./module-744.js"), i = require("./module-25619.js");
exports.zip = function(...e) {
    const t = (0, i.popResultSelector)(e), r = (0, s.argsOrArgArray)(e);
    return r.length ? new n.Observable((e)=>{
        let s = r.map(()=>[]), o = r.map(()=>!1);
        e.add(()=>{
            s = o = null;
        });
        for(let i = 0; !e.closed && i < r.length; i++)(0, n.from)(r[i]).subscribe((0, n.operate)({
            destination: e,
            next: (r)=>{
                if (s[i].push(r), s.every((e)=>e.length)) {
                    const r = s.map((e)=>e.shift());
                    e.next(t ? t(...r) : r), s.some((e, t)=>!e.length && o[t]) && e.complete();
                }
            },
            complete: ()=>{
                o[i] = !0, !s[i].length && e.complete();
            }
        }));
        return ()=>{
            s = o = null;
        };
    }) : o.EMPTY;
};
