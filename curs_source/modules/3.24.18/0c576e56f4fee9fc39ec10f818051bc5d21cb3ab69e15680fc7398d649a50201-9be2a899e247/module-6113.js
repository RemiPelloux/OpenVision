"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.iif = void 0;
const n = require("./module-3737.js");
exports.iif = function(e, t, r) {
    return (0, n.defer)(()=>e() ? t : r);
};
