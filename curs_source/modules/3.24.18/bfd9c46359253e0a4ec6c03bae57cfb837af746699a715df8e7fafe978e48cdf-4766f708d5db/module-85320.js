"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttleTime = void 0;
const n = require("./module-2665.js"), s = require("./module-28733.js"), o = require("./module-80444.js");
exports.throttleTime = function(e, t = n.asyncScheduler, r) {
    const i = (0, o.timer)(e, t);
    return (0, s.throttle)(()=>i, r);
};
