Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const r = require("./module-193.js");
exports.isMessage = function(e, t) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(r.Message.prototype).every((t)=>t in e && "function" == typeof e[t])) return !1;
    const n = e.getType();
    return null !== n && "function" == typeof n && "typeName" in n && "string" == typeof n.typeName && (void 0 === t || n.typeName == t.typeName);
};
