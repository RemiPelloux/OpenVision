"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const n = require("./module-4193.js");
exports.isMessage = function(e, A) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(n.Message.prototype).every((A)=>A in e && "function" == typeof e[A])) return !1;
    const t = e.getType();
    return null !== t && "function" == typeof t && "typeName" in t && "string" == typeof t.typeName && (void 0 === A || t.typeName == A.typeName);
};
