"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.raceWith = void 0;
const n = require("./module-240.js"), o = require("./module-1078.js"), s = require("./module-4896.js");
exports.raceWith = function(...e) {
    return e.length ? (t)=>new o.Observable((r)=>{
            (0, n.raceInit)([
                t,
                ...e
            ])(r);
        }) : s.identity;
};
