"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TimeInterval = exports.timeInterval = void 0;
const n = require("./module-2665.js"), o = require("./module-1078.js");
exports.timeInterval = function(e = n.asyncScheduler) {
    return (t)=>new o.Observable((r)=>{
            let n = e.now();
            t.subscribe((0, o.operate)({
                destination: r,
                next: (t)=>{
                    const o = e.now(), i = o - n;
                    n = o, r.next(new s(t, i));
                }
            }));
        });
};
class s {
    value;
    interval;
    constructor(e, t){
        this.value = e, this.interval = t;
    }
}
exports.TimeInterval = s;
