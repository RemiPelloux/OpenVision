"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
const n = require("./module-51078.js"), o = require("./module-82901.js");
function s(e) {
    return e[e.length - 1];
}
exports.popResultSelector = function(e) {
    return (0, n.isFunction)(s(e)) ? e.pop() : void 0;
}, exports.popScheduler = function(e) {
    return (0, o.isScheduler)(s(e)) ? e.pop() : void 0;
}, exports.popNumber = function(e, t) {
    return "number" == typeof s(e) ? e.pop() : t;
};
