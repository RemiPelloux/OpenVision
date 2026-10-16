"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findIndex = void 0;
const n = require("./module-1078.js"), o = require("./module-9730.js");
exports.findIndex = function(e) {
    return (t)=>new n.Observable((r)=>(0, o.createFind)(e, "index", t, r));
};
