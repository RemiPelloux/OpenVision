"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onErrorResumeNextWith = void 0;
const n = require("./module-9031.js"), o = require("./module-5414.js");
exports.onErrorResumeNextWith = function(...e) {
    const t = (0, n.argsOrArgArray)(e);
    return (e)=>(0, o.onErrorResumeNext)(e, ...t);
};
