"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const a = require("./module-2706.js");
function s(e) {
    if (!(0, a.isMessage)(e)) return e;
    const n = e.getType(), t = {};
    for (const a of n.fields.byMember()){
        const n = e[a.localName];
        let s;
        if (a.repeated) s = n.map((e)=>o(e));
        else if ("map" == a.kind) {
            s = {};
            for (const [e, t] of Object.entries(n))s[e] = o(t);
        } else if ("oneof" == a.kind) {
            s = a.findField(n.case) ? {
                case: n.case,
                value: o(n.value)
            } : {
                case: void 0
            };
        } else s = o(n);
        t[a.localName] = s;
    }
    return t;
}
function o(e) {
    if (void 0 === e) return e;
    if ((0, a.isMessage)(e)) return s(e);
    if (e instanceof Uint8Array) {
        const n = new Uint8Array(e.byteLength);
        return n.set(e), n;
    }
    return e;
}
exports.toPlainMessage = s;
