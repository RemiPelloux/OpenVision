Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttleTime = void 0;
const s = require("./module-2665.js"), o = require("./module-8733.js"), r = require("./module-444.js");
exports.throttleTime = function(e, a = s.asyncScheduler, n) {
    const t = (0, r.timer)(e, a);
    return (0, o.throttle)(()=>t, n);
};
