"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sampleTime = void 0;
const n = require("./module-2665.js"), s = require("./module-22227.js"), o = require("./module-14952.js");
exports.sampleTime = function(e, t = n.asyncScheduler) {
    return (0, s.sample)((0, o.interval)(e, t));
};
