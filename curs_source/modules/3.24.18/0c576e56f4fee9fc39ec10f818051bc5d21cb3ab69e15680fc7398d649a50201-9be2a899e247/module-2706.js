"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const n = require("./module-4193.js");
exports.isMessage = function(e, t) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(n.Message.prototype).every((t)=>t in e && "function" == typeof e[t])) return !1;
    const r = e.getType();
    return null !== r && "function" == typeof r && "typeName" in r && "string" == typeof r.typeName && (void 0 === t || r.typeName == t.typeName);
};
