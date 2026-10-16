"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timer = void 0;
const n = require("./module-51078.js"), s = require("./module-2665.js"), o = require("./module-82901.js"), i = require("./module-97842.js"), a = require("./module-55830.js");
exports.timer = function(e = 0, t, r = s.asyncScheduler) {
    let c = -1;
    return null != t && ((0, o.isScheduler)(t) ? r = t : c = t), new n.Observable((t)=>{
        let n = (0, i.isValidDate)(e) ? +e - r.now() : e;
        n < 0 && (n = 0);
        let s = 0;
        return (0, a.executeSchedule)(t, r, ()=>{
            t.next(s++), 0 <= c ? (0, a.executeSchedule)(t, r, ()=>{
                t.next(s++);
            }, c, !0) : t.complete();
        }, n);
    });
};
