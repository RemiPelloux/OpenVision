"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const n = require("./module-4193.js");
exports.isMessage = function(t, e) {
    if (null === t || "object" != typeof t) return !1;
    if (!Object.getOwnPropertyNames(n.Message.prototype).every((e)=>e in t && "function" == typeof t[e])) return !1;
    const r = t.getType();
    return null !== r && "function" == typeof r && "typeName" in r && "string" == typeof r.typeName && (void 0 === e || r.typeName == e.typeName);
};
