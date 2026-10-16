"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const n = require("./module-2706.js");
function o(e) {
    if (!(0, n.isMessage)(e)) return e;
    const t = e.getType(), r = {};
    for (const n of t.fields.byMember()){
        const t = e[n.localName];
        let o;
        if (n.repeated) o = t.map((e)=>s(e));
        else if ("map" == n.kind) {
            o = {};
            for (const [e, r] of Object.entries(t))o[e] = s(r);
        } else if ("oneof" == n.kind) {
            o = n.findField(t.case) ? {
                case: t.case,
                value: s(t.value)
            } : {
                case: void 0
            };
        } else o = s(t);
        r[n.localName] = o;
    }
    return r;
}
function s(e) {
    if (void 0 === e) return e;
    if ((0, n.isMessage)(e)) return o(e);
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
exports.toPlainMessage = o;
