"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleReadableStreamLike = void 0;
const n = require("./module-1078.js"), o = require("./module-2534.js");
exports.scheduleReadableStreamLike = function(e, t) {
    return (0, o.scheduleAsyncIterable)((0, n.readableStreamLikeToAsyncGenerator)(e), t);
};
