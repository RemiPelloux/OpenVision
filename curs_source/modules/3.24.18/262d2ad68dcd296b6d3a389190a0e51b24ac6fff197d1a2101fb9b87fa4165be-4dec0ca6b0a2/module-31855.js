"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleObservable = void 0;
const n = require("./module-51078.js"), o = require("./module-36448.js"), s = require("./module-54464.js");
exports.scheduleObservable = function(e, t) {
    return (0, n.from)(e).pipe((0, s.subscribeOn)(t), (0, o.observeOn)(t));
};
