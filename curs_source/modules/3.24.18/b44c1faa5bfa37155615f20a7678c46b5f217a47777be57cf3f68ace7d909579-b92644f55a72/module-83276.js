"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSpanContext = exports.setSpanContext = exports.deleteSpan = exports.setSpan = exports.getActiveSpan = exports.getSpan = void 0;
const n = require("./module-92954.js"), s = require("./module-98865.js"), o = require("./module-3917.js"), i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
function a(e) {
    return e.getValue(i) || void 0;
}
function c(e, t) {
    return e.setValue(i, t);
}
exports.getSpan = a, exports.getActiveSpan = function() {
    return a(o.ContextAPI.getInstance().active());
}, exports.setSpan = c, exports.deleteSpan = function(e) {
    return e.deleteValue(i);
}, exports.setSpanContext = function(e, t) {
    return c(e, new s.NonRecordingSpan(t));
}, exports.getSpanContext = function(e) {
    var t;
    return null === (t = a(e)) || void 0 === t ? void 0 : t.spanContext();
};
