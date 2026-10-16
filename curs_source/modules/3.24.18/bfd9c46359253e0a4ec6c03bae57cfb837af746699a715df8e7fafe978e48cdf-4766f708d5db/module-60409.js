"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TimeInterval = exports.timeInterval = void 0;
const n = require("./module-2665.js"), s = require("./module-51078.js");
exports.timeInterval = function(e = n.asyncScheduler) {
    return (t)=>new s.Observable((r)=>{
            let n = e.now();
            t.subscribe((0, s.operate)({
                destination: r,
                next: (t)=>{
                    const s = e.now(), i = s - n;
                    n = s, r.next(new o(t, i));
                }
            }));
        });
};
class o {
    value;
    interval;
    constructor(e, t){
        this.value = e, this.interval = t;
    }
}
exports.TimeInterval = o;
