"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dematerialize = void 0;
const n = require("./module-98216.js"), s = require("./module-51078.js");
exports.dematerialize = function() {
    return (e)=>new s.Observable((t)=>{
            e.subscribe((0, s.operate)({
                destination: t,
                next: (e)=>(0, n.observeNotification)(e, t)
            }));
        });
};
