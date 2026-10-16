"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteBaggage = exports.setBaggage = exports.getActiveBaggage = exports.getBaggage = void 0;
const n = require("./module-3917.js"), o = (0, require("./module-92954.js").createContextKey)("OpenTelemetry Baggage Key");
function s(e) {
    return e.getValue(o) || void 0;
}
exports.getBaggage = s, exports.getActiveBaggage = function() {
    return s(n.ContextAPI.getInstance().active());
}, exports.setBaggage = function(e, t) {
    return e.setValue(o, t);
}, exports.deleteBaggage = function(e) {
    return e.deleteValue(o);
};
