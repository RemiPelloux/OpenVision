"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.raceWith = void 0;
const n = require("./module-20240.js"), s = require("./module-51078.js"), o = require("./module-44896.js");
exports.raceWith = function(...e) {
    return e.length ? (t)=>new s.Observable((r)=>{
            (0, n.raceInit)([
                t,
                ...e
            ])(r);
        }) : o.identity;
};
