"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleIterable = void 0;
const n = require("./module-51078.js"), s = require("./module-35292.js"), o = require("./module-55830.js");
exports.scheduleIterable = function(e, t) {
    return new n.Observable((r)=>{
        let i;
        return (0, o.executeSchedule)(r, t, ()=>{
            i = e[s.iterator](), (0, o.executeSchedule)(r, t, ()=>{
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
