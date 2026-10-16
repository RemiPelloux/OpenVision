"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleReadableStreamLike = void 0;
const n = require("./module-51078.js"), s = require("./module-42534.js");
exports.scheduleReadableStreamLike = function(e, t) {
    return (0, s.scheduleAsyncIterable)((0, n.readableStreamLikeToAsyncGenerator)(e), t);
};
