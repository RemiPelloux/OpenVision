"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.delay = void 0;
const n = require("./module-2665.js"), s = require("./module-47662.js"), o = require("./module-80444.js");
exports.delay = function(e, t = n.asyncScheduler) {
    const r = (0, o.timer)(e, t);
    return (0, s.delayWhen)(()=>r);
};
