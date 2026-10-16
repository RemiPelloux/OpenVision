Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.auditTime = void 0;
const s = require("./module-2665.js"), o = require("./module-2698.js"), r = require("./module-444.js");
exports.auditTime = function(e, a = s.asyncScheduler) {
    return (0, o.audit)(()=>(0, r.timer)(e, a));
};
