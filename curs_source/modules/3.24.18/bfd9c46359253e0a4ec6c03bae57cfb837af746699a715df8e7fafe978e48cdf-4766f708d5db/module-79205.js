"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.schedulePromise = void 0;
const n = require("./module-51078.js"), s = require("./module-36448.js"), o = require("./module-54464.js");
exports.schedulePromise = function(e, t) {
    return (0, n.from)(e).pipe((0, o.subscribeOn)(t), (0, s.observeOn)(t));
};
