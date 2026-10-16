Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const r = require("./module-706.js");
function o(e) {
    if (!(0, r.isMessage)(e)) return e;
    const t = e.getType(), n = {};
    for (const r of t.fields.byMember()){
        const t = e[r.localName];
        let o;
        if (r.repeated) o = t.map((e)=>a(e));
        else if ("map" == r.kind) {
            o = {};
            for (const [e, n] of Object.entries(t))o[e] = a(n);
        } else if ("oneof" == r.kind) {
            o = r.findField(t.case) ? {
                case: t.case,
                value: a(t.value)
            } : {
                case: void 0
            };
        } else o = a(t);
        n[r.localName] = o;
    }
    return n;
}
function a(e) {
    if (void 0 === e) return e;
    if ((0, r.isMessage)(e)) return o(e);
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
exports.toPlainMessage = o;
