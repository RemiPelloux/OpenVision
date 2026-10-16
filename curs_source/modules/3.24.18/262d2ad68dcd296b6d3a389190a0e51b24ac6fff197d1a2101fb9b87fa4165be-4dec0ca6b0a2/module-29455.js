"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.combineLatestWith = void 0;
const n = require("./module-1503.js"), o = require("./module-51078.js");
exports.combineLatestWith = function(...e) {
    return (t)=>new o.Observable((r)=>(0, n.combineLatestInit)([
                t,
                ...e
            ])(r));
};
