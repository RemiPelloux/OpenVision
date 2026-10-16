"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.auditTime = void 0;
const n = require("./module-2665.js"), o = require("./module-72698.js"), s = require("./module-80444.js");
exports.auditTime = function(e, t = n.asyncScheduler) {
    return (0, o.audit)(()=>(0, s.timer)(e, t));
};
