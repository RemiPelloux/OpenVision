"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const n = require("./module-2706.js");
function s(t) {
    if (!(0, n.isMessage)(t)) return t;
    const e = t.getType(), r = {};
    for (const n of e.fields.byMember()){
        const e = t[n.localName];
        let s;
        if (n.repeated) s = e.map((t)=>i(t));
        else if ("map" == n.kind) {
            s = {};
            for (const [t, r] of Object.entries(e))s[t] = i(r);
        } else if ("oneof" == n.kind) {
            s = n.findField(e.case) ? {
                case: e.case,
                value: i(e.value)
            } : {
                case: void 0
            };
        } else s = i(e);
        r[n.localName] = s;
    }
    return r;
}
function i(t) {
    if (void 0 === t) return t;
    if ((0, n.isMessage)(t)) return s(t);
    if (t instanceof Uint8Array) {
        const e = new Uint8Array(t.byteLength);
        return e.set(t), e;
    }
    return t;
}
exports.toPlainMessage = s;
