"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const a = require("./module-4193.js");
exports.isMessage = function(e, n) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(a.Message.prototype).every((n)=>n in e && "function" == typeof e[n])) return !1;
    const t = e.getType();
    return null !== t && "function" == typeof t && "typeName" in t && "string" == typeof t.typeName && (void 0 === n || t.typeName == n.typeName);
};
