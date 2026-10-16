"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const t = require("./module-2706.js");
function s(e) {
    if (!(0, t.isMessage)(e)) return e;
    const a = e.getType(), n = {};
    for (const t of a.fields.byMember()){
        const a = e[t.localName];
        let s;
        if (t.repeated) s = a.map((e)=>o(e));
        else if ("map" == t.kind) {
            s = {};
            for (const [e, n] of Object.entries(a))s[e] = o(n);
        } else if ("oneof" == t.kind) {
            s = t.findField(a.case) ? {
                case: a.case,
                value: o(a.value)
            } : {
                case: void 0
            };
        } else s = o(a);
        n[t.localName] = s;
    }
    return n;
}
function o(e) {
    if (void 0 === e) return e;
    if ((0, t.isMessage)(e)) return s(e);
    if (e instanceof Uint8Array) {
        const a = new Uint8Array(e.byteLength);
        return a.set(e), a;
    }
    return e;
}
exports.toPlainMessage = s;
