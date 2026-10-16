Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.delay = void 0;
const s = require("./module-2665.js"), o = require("./module-7662.js"), r = require("./module-444.js");
exports.delay = function(e, a = s.asyncScheduler) {
    const n = (0, r.timer)(e, a);
    return (0, o.delayWhen)(()=>n);
};
