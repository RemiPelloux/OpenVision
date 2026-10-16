"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.observeOn = void 0;
const n = require("./module-55830.js"), s = require("./module-51078.js");
exports.observeOn = function(e, t = 0) {
    return (r)=>new s.Observable((o)=>{
            r.subscribe((0, s.operate)({
                destination: o,
                next: (r)=>(0, n.executeSchedule)(o, e, ()=>o.next(r), t),
                error: (r)=>(0, n.executeSchedule)(o, e, ()=>o.error(r), t),
                complete: ()=>(0, n.executeSchedule)(o, e, ()=>o.complete(), t)
            }));
        });
};
