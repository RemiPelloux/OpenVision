"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.interval = void 0;
const n = require("./module-2665.js"), o = require("./module-444.js");
exports.interval = function(e = 0, t = n.asyncScheduler) {
    return e < 0 && (e = 0), (0, o.timer)(e, e, t);
};
