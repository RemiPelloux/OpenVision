"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const n = require("./module-4193.js");
exports.isMessage = function(e, t) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(n.Message.prototype).every((t)=>t in e && "function" == typeof e[t])) return !1;
    const A = e.getType();
    return null !== A && "function" == typeof A && "typeName" in A && "string" == typeof A.typeName && (void 0 === t || A.typeName == t.typeName);
};
