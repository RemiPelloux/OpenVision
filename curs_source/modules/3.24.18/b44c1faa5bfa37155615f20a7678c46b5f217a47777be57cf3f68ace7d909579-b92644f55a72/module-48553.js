"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleArray = void 0;
const n = require("./module-51078.js"), s = require("./module-55830.js");
exports.scheduleArray = function(e, t) {
    return new n.Observable((r)=>{
        let n = 0;
        const o = ()=>{
            n === e.length ? r.complete() : (r.next(e[n++]), (0, s.executeSchedule)(r, t, o));
        };
        return (0, s.executeSchedule)(r, t, o);
    });
};
