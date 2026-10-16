"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinctUntilKeyChanged = void 0;
const n = require("./module-7529.js");
exports.distinctUntilKeyChanged = function(e, t) {
    return (0, n.distinctUntilChanged)((r, n)=>t ? t(r[e], n[e]) : r[e] === n[e]);
};
