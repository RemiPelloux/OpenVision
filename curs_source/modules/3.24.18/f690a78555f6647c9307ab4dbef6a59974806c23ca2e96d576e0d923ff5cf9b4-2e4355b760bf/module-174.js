"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const n = require("./module-2706.js");
function r(e) {
    if (!(0, n.isMessage)(e)) return e;
    const A = e.getType(), t = {};
    for (const n of A.fields.byMember()){
        const A = e[n.localName];
        let r;
        if (n.repeated) r = A.map((e)=>o(e));
        else if ("map" == n.kind) {
            r = {};
            for (const [e, t] of Object.entries(A))r[e] = o(t);
        } else if ("oneof" == n.kind) {
            r = n.findField(A.case) ? {
                case: A.case,
                value: o(A.value)
            } : {
                case: void 0
            };
        } else r = o(A);
        t[n.localName] = r;
    }
    return t;
}
function o(e) {
    if (void 0 === e) return e;
    if ((0, n.isMessage)(e)) return r(e);
    if (e instanceof Uint8Array) {
        const A = new Uint8Array(e.byteLength);
        return A.set(e), A;
    }
    return e;
}
exports.toPlainMessage = r;
