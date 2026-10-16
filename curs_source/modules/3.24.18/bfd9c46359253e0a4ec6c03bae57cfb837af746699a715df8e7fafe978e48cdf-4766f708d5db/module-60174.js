"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const n = require("./module-62706.js");
function s(e) {
    if (!(0, n.isMessage)(e)) return e;
    const t = e.getType(), r = {};
    for (const n of t.fields.byMember()){
        const t = e[n.localName];
        let s;
        if (n.repeated) s = t.map((e)=>o(e));
        else if ("map" == n.kind) {
            s = {};
            for (const [e, r] of Object.entries(t))s[e] = o(r);
        } else if ("oneof" == n.kind) {
            s = n.findField(t.case) ? {
                case: t.case,
                value: o(t.value)
            } : {
                case: void 0
            };
        } else s = o(t);
        r[n.localName] = s;
    }
    return r;
}
function o(e) {
    if (void 0 === e) return e;
    if ((0, n.isMessage)(e)) return s(e);
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
exports.toPlainMessage = s;
