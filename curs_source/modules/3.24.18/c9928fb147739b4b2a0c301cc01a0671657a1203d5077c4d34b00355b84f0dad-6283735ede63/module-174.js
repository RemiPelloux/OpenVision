Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = void 0;
const s = require("./module-2706.js");
function o(e) {
    if (!(0, s.isMessage)(e)) return e;
    const a = e.getType(), n = {};
    for (const s of a.fields.byMember()){
        const a = e[s.localName];
        let o;
        if (s.repeated) o = a.map((e)=>r(e));
        else if ("map" == s.kind) {
            o = {};
            for (const [e, n] of Object.entries(a))o[e] = r(n);
        } else if ("oneof" == s.kind) {
            o = s.findField(a.case) ? {
                case: a.case,
                value: r(a.value)
            } : {
                case: void 0
            };
        } else o = r(a);
        n[s.localName] = o;
    }
    return n;
}
function r(e) {
    if (void 0 === e) return e;
    if ((0, s.isMessage)(e)) return o(e);
    if (e instanceof Uint8Array) {
        const a = new Uint8Array(e.byteLength);
        return a.set(e), a;
    }
    return e;
}
exports.toPlainMessage = o;
