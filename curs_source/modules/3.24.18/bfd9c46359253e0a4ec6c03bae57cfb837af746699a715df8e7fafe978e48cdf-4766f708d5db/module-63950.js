"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skip = void 0;
const n = require("./module-4591.js");
exports.skip = function(e) {
    return (0, n.filter)((t, r)=>e <= r);
};
