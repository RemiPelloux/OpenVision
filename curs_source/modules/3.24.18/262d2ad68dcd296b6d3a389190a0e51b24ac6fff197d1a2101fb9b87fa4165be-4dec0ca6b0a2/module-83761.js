"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dematerialize = void 0;
const n = require("./module-98216.js"), o = require("./module-51078.js");
exports.dematerialize = function() {
    return (e)=>new o.Observable((t)=>{
            e.subscribe((0, o.operate)({
                destination: t,
                next: (e)=>(0, n.observeNotification)(e, t)
            }));
        });
};
