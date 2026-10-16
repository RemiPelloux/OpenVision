"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const t = require("./module-4193.js");
exports.isMessage = function(e, n) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(t.Message.prototype).every((n)=>n in e && "function" == typeof e[n])) return !1;
    const a = e.getType();
    return null !== a && "function" == typeof a && "typeName" in a && "string" == typeof a.typeName && (void 0 === n || a.typeName == n.typeName);
};
