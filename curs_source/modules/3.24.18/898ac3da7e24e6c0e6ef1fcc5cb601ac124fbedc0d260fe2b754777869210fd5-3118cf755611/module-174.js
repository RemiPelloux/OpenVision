"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const t = require("./module-2706.js");
function s(e) {
    if (!(0, t.isMessage)(e)) return e;
    const n = e.getType(), a = {};
    for (const t of n.fields.byMember()){
        const n = e[t.localName];
        let s;
        if (t.repeated) s = n.map((e)=>o(e));
        else if ("map" == t.kind) {
            s = {};
            for (const [e, a] of Object.entries(n))s[e] = o(a);
        } else if ("oneof" == t.kind) {
            s = t.findField(n.case) ? {
                case: n.case,
                value: o(n.value)
            } : {
                case: void 0
            };
        } else s = o(n);
        a[t.localName] = s;
    }
    return a;
}
function o(e) {
    if (void 0 === e) return e;
    if ((0, t.isMessage)(e)) return s(e);
    if (e instanceof Uint8Array) {
        const n = new Uint8Array(e.byteLength);
        return n.set(e), n;
    }
    return e;
}
exports.toPlainMessage = s;
