"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onErrorResumeNextWith = void 0;
const n = require("./module-79031.js"), s = require("./module-45414.js");
exports.onErrorResumeNextWith = function(...e) {
    const t = (0, n.argsOrArgArray)(e);
    return (e)=>(0, s.onErrorResumeNext)(e, ...t);
};
