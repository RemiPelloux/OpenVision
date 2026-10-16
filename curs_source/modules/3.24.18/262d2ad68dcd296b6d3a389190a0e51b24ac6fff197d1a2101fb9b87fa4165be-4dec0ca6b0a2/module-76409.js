"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.concat = void 0;
const n = require("./module-51078.js"), o = require("./module-3006.js"), s = require("./module-25619.js"), i = require("./module-69880.js");
exports.concat = function(...e) {
    const t = (0, s.popScheduler)(e);
    return (0, o.concatAll)()(t ? (0, i.scheduled)(e, t) : (0, n.from)(e));
};
