Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isMessage = void 0;
const o = require("./module-193.js");
exports.isMessage = function(e, a) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(o.Message.prototype).every((a)=>a in e && "function" == typeof e[a])) return !1;
    const n = e.getType();
    return null !== n && "function" == typeof n && "typeName" in n && "string" == typeof n.typeName && (void 0 === a || n.typeName == a.typeName);
};
