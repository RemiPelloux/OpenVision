"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.count = void 0;
const n = require("./module-8339.js");
exports.count = function(e) {
    return (0, n.reduce)((t, r, n)=>!e || e(r, n) ? t + 1 : t, 0);
};
