Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
const s = require("./module-1078.js"), o = require("./module-2901.js");
function r(e) {
    return e[e.length - 1];
}
exports.popResultSelector = function(e) {
    return (0, s.isFunction)(r(e)) ? e.pop() : void 0;
}, exports.popScheduler = function(e) {
    return (0, o.isScheduler)(r(e)) ? e.pop() : void 0;
}, exports.popNumber = function(e, a) {
    return "number" == typeof r(e) ? e.pop() : a;
};
