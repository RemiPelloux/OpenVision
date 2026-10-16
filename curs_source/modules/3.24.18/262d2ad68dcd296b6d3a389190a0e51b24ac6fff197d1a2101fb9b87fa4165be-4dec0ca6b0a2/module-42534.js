"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleAsyncIterable = void 0;
const n = require("./module-51078.js"), o = require("./module-55830.js");
exports.scheduleAsyncIterable = function(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new n.Observable((r)=>{
        (0, o.executeSchedule)(r, t, ()=>{
            const n = e[Symbol.asyncIterator]();
            (0, o.executeSchedule)(r, t, ()=>{
                n.next().then((e)=>{
                    e.done ? r.complete() : r.next(e.value);
                });
            }, 0, !0);
        });
    });
};
