"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.merge = void 0;
const n = require("./module-51078.js"), o = require("./module-6102.js"), s = require("./module-744.js"), i = require("./module-25619.js"), a = require("./module-69880.js");
exports.merge = function(...e) {
    const t = (0, i.popScheduler)(e), r = (0, i.popNumber)(e, 1 / 0), l = e;
    return l.length ? 1 === l.length ? (0, n.from)(l[0]) : (0, o.mergeAll)(r)(t ? (0, a.scheduled)(l, t) : (0, n.from)(l)) : s.EMPTY;
};
