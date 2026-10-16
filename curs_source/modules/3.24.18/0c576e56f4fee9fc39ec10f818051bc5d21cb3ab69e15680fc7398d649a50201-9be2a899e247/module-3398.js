"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.joinAllInternals = void 0;
const n = require("./module-4896.js"), o = require("./module-5683.js"), s = require("./module-7410.js"), i = require("./module-1207.js"), a = require("./module-2471.js");
exports.joinAllInternals = function(e, t) {
    return (0, s.pipe)((0, a.toArray)(), (0, i.mergeMap)((t)=>e(t)), t ? (0, o.mapOneOrManyArgs)(t) : n.identity);
};
