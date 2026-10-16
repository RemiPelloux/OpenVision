"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sampleTime = void 0;
const n = require("./module-2665.js"), o = require("./module-2227.js"), s = require("./module-4952.js");
exports.sampleTime = function(e, t = n.asyncScheduler) {
    return (0, o.sample)((0, s.interval)(e, t));
};
