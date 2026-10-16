"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.partition = void 0;
const n = require("./module-87029.js"), s = require("./module-4591.js"), o = require("./module-51078.js");
exports.partition = function(e, t, r) {
    return [
        (0, s.filter)(t, r)((0, o.from)(e)),
        (0, s.filter)((0, n.not)(t, r))((0, o.from)(e))
    ];
};
