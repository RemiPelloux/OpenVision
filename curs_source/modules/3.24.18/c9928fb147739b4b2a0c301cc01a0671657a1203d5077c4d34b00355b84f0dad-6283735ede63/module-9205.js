Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.schedulePromise = void 0;
const s = require("./module-1078.js"), o = require("./module-6448.js"), r = require("./module-4464.js");
exports.schedulePromise = function(e, a) {
    return (0, s.from)(e).pipe((0, r.subscribeOn)(a), (0, o.observeOn)(a));
};
