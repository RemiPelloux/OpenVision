"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.auditTime = void 0;
const n = require("./module-2665.js"), s = require("./module-72698.js"), o = require("./module-80444.js");
exports.auditTime = function(e, t = n.asyncScheduler) {
    return (0, s.audit)(()=>(0, o.timer)(e, t));
};
