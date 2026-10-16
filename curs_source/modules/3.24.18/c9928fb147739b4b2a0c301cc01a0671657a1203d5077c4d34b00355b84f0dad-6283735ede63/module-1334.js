Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sampleTime = void 0;
const s = require("./module-2665.js"), o = require("./module-2227.js"), r = require("./module-4952.js");
exports.sampleTime = function(e, a = s.asyncScheduler) {
    return (0, o.sample)((0, r.interval)(e, a));
};
