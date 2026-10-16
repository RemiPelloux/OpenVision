Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleReadableStreamLike = void 0;
const s = require("./module-1078.js"), o = require("./module-2534.js");
exports.scheduleReadableStreamLike = function(e, a) {
    return (0, o.scheduleAsyncIterable)((0, s.readableStreamLikeToAsyncGenerator)(e), a);
};
