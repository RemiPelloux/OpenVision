"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.observeOn = void 0;
const n = require("./module-55830.js"), o = require("./module-51078.js");
exports.observeOn = function(e, t = 0) {
    return (r)=>new o.Observable((s)=>{
            r.subscribe((0, o.operate)({
                destination: s,
                next: (r)=>(0, n.executeSchedule)(s, e, ()=>s.next(r), t),
                error: (r)=>(0, n.executeSchedule)(s, e, ()=>s.error(r), t),
                complete: ()=>(0, n.executeSchedule)(s, e, ()=>s.complete(), t)
            }));
        });
};
