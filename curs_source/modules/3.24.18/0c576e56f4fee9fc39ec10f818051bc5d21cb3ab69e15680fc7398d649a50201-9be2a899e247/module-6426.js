"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ignoreElements = void 0;
const n = require("./module-1078.js"), o = require("./module-4462.js");
exports.ignoreElements = function() {
    return (e)=>new n.Observable((t)=>{
            e.subscribe((0, n.operate)({
                destination: t,
                next: o.noop
            }));
        });
};
