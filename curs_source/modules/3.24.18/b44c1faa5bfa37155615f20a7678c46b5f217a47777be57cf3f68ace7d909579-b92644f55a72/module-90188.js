"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findIndex = void 0;
const n = require("./module-51078.js"), s = require("./module-39730.js");
exports.findIndex = function(e) {
    return (t)=>new n.Observable((r)=>(0, s.createFind)(e, "index", t, r));
};
