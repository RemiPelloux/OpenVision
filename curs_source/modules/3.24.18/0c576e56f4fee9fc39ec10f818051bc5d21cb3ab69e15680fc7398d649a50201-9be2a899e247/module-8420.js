"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wrapSpanContext = exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = void 0;
const n = require("./module-3637.js"), o = require("./module-8865.js"), s = /^([0-9a-f]{32})$/i, i = /^[0-9a-f]{16}$/i;
function a(e) {
    return s.test(e) && e !== n.INVALID_TRACEID;
}
function c(e) {
    return i.test(e) && e !== n.INVALID_SPANID;
}
exports.isValidTraceId = a, exports.isValidSpanId = c, exports.isSpanContextValid = function(e) {
    return a(e.traceId) && c(e.spanId);
}, exports.wrapSpanContext = function(e) {
    return new o.NonRecordingSpan(e);
};
