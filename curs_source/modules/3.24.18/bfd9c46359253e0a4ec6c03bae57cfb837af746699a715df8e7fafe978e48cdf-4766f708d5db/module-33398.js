"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.joinAllInternals = void 0;
const n = require("./module-44896.js"), s = require("./module-65683.js"), o = require("./module-57410.js"), i = require("./module-51207.js"), a = require("./module-22471.js");
exports.joinAllInternals = function(e, t) {
    return (0, o.pipe)((0, a.toArray)(), (0, i.mergeMap)((t)=>e(t)), t ? (0, s.mapOneOrManyArgs)(t) : n.identity);
};
