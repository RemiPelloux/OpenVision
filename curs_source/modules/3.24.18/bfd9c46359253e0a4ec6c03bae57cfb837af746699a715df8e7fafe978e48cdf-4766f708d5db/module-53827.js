"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteBaggage = exports.setBaggage = exports.getActiveBaggage = exports.getBaggage = void 0;
const n = require("./module-3917.js"), s = (0, require("./module-92954.js").createContextKey)("OpenTelemetry Baggage Key");
function o(e) {
    return e.getValue(s) || void 0;
}
exports.getBaggage = o, exports.getActiveBaggage = function() {
    return o(n.ContextAPI.getInstance().active());
}, exports.setBaggage = function(e, t) {
    return e.setValue(s, t);
}, exports.deleteBaggage = function(e) {
    return e.deleteValue(s);
};
