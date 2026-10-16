"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
const n = require("./module-51078.js"), s = require("./module-82901.js");
function o(e) {
    return e[e.length - 1];
}
exports.popResultSelector = function(e) {
    return (0, n.isFunction)(o(e)) ? e.pop() : void 0;
}, exports.popScheduler = function(e) {
    return (0, s.isScheduler)(o(e)) ? e.pop() : void 0;
}, exports.popNumber = function(e, t) {
    return "number" == typeof o(e) ? e.pop() : t;
};
