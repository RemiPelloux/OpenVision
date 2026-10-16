"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.interval = void 0;
const n = require("./module-2665.js"), s = require("./module-80444.js");
exports.interval = function(e = 0, t = n.asyncScheduler) {
    return e < 0 && (e = 0), (0, s.timer)(e, e, t);
};
