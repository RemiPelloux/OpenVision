"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleIterable = void 0;
const n = require("./module-51078.js"), o = require("./module-35292.js"), s = require("./module-55830.js");
exports.scheduleIterable = function(e, t) {
    return new n.Observable((r)=>{
        let i;
        return (0, s.executeSchedule)(r, t, ()=>{
            i = e[o.iterator](), (0, s.executeSchedule)(r, t, ()=>{
                let e, t;
                try {
                    ({ value: e, done: t } = i.next());
                } catch (e) {
                    return void r.error(e);
                }
                t ? r.complete() : r.next(e);
            }, 0, !0);
        }), ()=>(0, n.isFunction)(i?.return) && i.return();
    });
};
