"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const n = require("./module-2706.js");
function r(e) {
    if (!(0, n.isMessage)(e)) return e;
    const t = e.getType(), A = {};
    for (const n of t.fields.byMember()){
        const t = e[n.localName];
        let r;
        if (n.repeated) r = t.map((e)=>o(e));
        else if ("map" == n.kind) {
            r = {};
            for (const [e, A] of Object.entries(t))r[e] = o(A);
        } else if ("oneof" == n.kind) {
            r = n.findField(t.case) ? {
                case: t.case,
                value: o(t.value)
            } : {
                case: void 0
            };
        } else r = o(t);
        A[n.localName] = r;
    }
    return A;
}
function o(e) {
    if (void 0 === e) return e;
    if ((0, n.isMessage)(e)) return r(e);
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
exports.toPlainMessage = r;
