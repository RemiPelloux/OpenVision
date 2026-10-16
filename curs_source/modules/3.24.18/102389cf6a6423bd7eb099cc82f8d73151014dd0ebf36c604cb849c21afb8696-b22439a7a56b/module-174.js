Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const o = require("./module-706.js");
function s(e) {
    if (!(0, o.isMessage)(e)) return e;
    const a = e.getType(), n = {};
    for (const o of a.fields.byMember()){
        const a = e[o.localName];
        let s;
        if (o.repeated) s = a.map((e)=>t(e));
        else if ("map" == o.kind) {
            s = {};
            for (const [e, n] of Object.entries(a))s[e] = t(n);
        } else if ("oneof" == o.kind) {
            s = o.findField(a.case) ? {
                case: a.case,
                value: t(a.value)
            } : {
                case: void 0
            };
        } else s = t(a);
        n[o.localName] = s;
    }
    return n;
}
function t(e) {
    if (void 0 === e) return e;
    if ((0, o.isMessage)(e)) return s(e);
    if (e instanceof Uint8Array) {
        const a = new Uint8Array(e.byteLength);
        return a.set(e), a;
    }
    return e;
}
exports.toPlainMessage = s;
