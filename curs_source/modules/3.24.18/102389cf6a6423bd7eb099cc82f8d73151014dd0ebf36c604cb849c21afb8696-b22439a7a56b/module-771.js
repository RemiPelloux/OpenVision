Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const o = require("./module-98.js"), s = require("./module-802.js");
function t(e, a) {
    const n = e.getType();
    return a.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((e)=>e.no == a.field.no);
}
function r(e, a) {
    (0, o.assert)(e.extendee.typeName == a.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, a, n) {
    r(a, e);
    const o = a.runtime.bin.makeReadOptions(n), t = (0, s.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), a.field), [i, m] = (0, s.createExtensionContainer)(a);
    for (const e of t)a.runtime.bin.readField(i, o.readerFactory(e.data), a.field, e.wireType, o);
    return m();
}, exports.setExtension = function(e, a, n, o) {
    r(a, e);
    const s = a.runtime.bin.makeReadOptions(o), i = a.runtime.bin.makeWriteOptions(o);
    if (t(e, a)) {
        const n = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != a.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const a of n)e.getType().runtime.bin.onUnknownField(e, a.no, a.wireType, a.data);
    }
    const m = i.writerFactory();
    let l = a.field;
    l.opt || l.repeated || "enum" != l.kind && "scalar" != l.kind || (l = Object.assign(Object.assign({}, a.field), {
        opt: !0
    })), a.runtime.bin.writeField(l, n, m, i);
    const d = s.readerFactory(m.finish());
    for(; d.pos < d.len;){
        const [a, n] = d.tag(), o = d.skip(n, a);
        e.getType().runtime.bin.onUnknownField(e, a, n, o);
    }
}, exports.clearExtension = function(e, a) {
    if (r(a, e), t(e, a)) {
        const n = e.getType().runtime.bin, o = n.listUnknownFields(e).filter((e)=>e.no != a.field.no);
        n.discardUnknownFields(e);
        for (const a of o)n.onUnknownField(e, a.no, a.wireType, a.data);
    }
}, exports.hasExtension = t;
