"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScheduler = void 0;
const n = require("./module-1078.js");
exports.isScheduler = function(e) {
    return e && (0, n.isFunction)(e.schedule);
};
