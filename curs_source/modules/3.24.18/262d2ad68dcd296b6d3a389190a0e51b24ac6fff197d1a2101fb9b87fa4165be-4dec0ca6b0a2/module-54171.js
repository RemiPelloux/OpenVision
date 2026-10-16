"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.partition = void 0;
const n = require("./module-87029.js"), o = require("./module-4591.js");
exports.partition = function(e, t) {
    return (r)=>[
            (0, o.filter)(e, t)(r),
            (0, o.filter)((0, n.not)(e, t))(r)
        ];
};
