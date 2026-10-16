"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttleTime = void 0;
const n = require("./module-2665.js"), o = require("./module-8733.js"), s = require("./module-444.js");
exports.throttleTime = function(e, t = n.asyncScheduler, r) {
    const i = (0, s.timer)(e, t);
    return (0, o.throttle)(()=>i, r);
};
