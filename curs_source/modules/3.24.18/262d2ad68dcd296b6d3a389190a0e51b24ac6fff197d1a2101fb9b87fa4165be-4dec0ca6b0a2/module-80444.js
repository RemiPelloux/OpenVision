"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timer = void 0;
const n = require("./module-51078.js"), o = require("./module-2665.js"), s = require("./module-82901.js"), i = require("./module-97842.js"), a = require("./module-55830.js");
exports.timer = function(e = 0, t, r = o.asyncScheduler) {
    let l = -1;
    return null != t && ((0, s.isScheduler)(t) ? r = t : l = t), new n.Observable((t)=>{
        let n = (0, i.isValidDate)(e) ? +e - r.now() : e;
        n < 0 && (n = 0);
        let o = 0;
        return (0, a.executeSchedule)(t, r, ()=>{
            t.next(o++), 0 <= l ? (0, a.executeSchedule)(t, r, ()=>{
                t.next(o++);
            }, l, !0) : t.complete();
        }, n);
    });
};
