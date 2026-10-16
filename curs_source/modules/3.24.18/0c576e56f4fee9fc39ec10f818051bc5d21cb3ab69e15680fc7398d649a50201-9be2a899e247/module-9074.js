"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.delay = void 0;
const n = require("./module-2665.js"), o = require("./module-7662.js"), s = require("./module-444.js");
exports.delay = function(e, t = n.asyncScheduler) {
    const r = (0, s.timer)(e, t);
    return (0, o.delayWhen)(()=>r);
};
