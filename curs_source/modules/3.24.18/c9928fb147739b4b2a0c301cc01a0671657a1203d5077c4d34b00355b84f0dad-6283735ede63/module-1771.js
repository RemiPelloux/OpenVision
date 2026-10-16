Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const s = require("./module-3098.js"), o = require("./module-1802.js");
function r(e, a) {
    const n = e.getType();
    return a.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((e)=>e.no == a.field.no);
}
function t(e, a) {
    (0, s.assert)(e.extendee.typeName == a.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, a, n) {
    t(a, e);
    const s = a.runtime.bin.makeReadOptions(n), r = (0, o.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), a.field), [i, m] = (0, o.createExtensionContainer)(a);
    for (const e of r)a.runtime.bin.readField(i, s.readerFactory(e.data), a.field, e.wireType, s);
    return m();
}, exports.setExtension = function(e, a, n, s) {
    t(a, e);
    const o = a.runtime.bin.makeReadOptions(s), i = a.runtime.bin.makeWriteOptions(s);
    if (r(e, a)) {
        const n = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != a.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const a of n)e.getType().runtime.bin.onUnknownField(e, a.no, a.wireType, a.data);
    }
    const m = i.writerFactory();
    let l = a.field;
    l.opt || l.repeated || "enum" != l.kind && "scalar" != l.kind || (l = Object.assign(Object.assign({}, a.field), {
        opt: !0
    })), a.runtime.bin.writeField(l, n, m, i);
    const d = o.readerFactory(m.finish());
    for(; d.pos < d.len;){
        const [a, n] = d.tag(), s = d.skip(n, a);
        e.getType().runtime.bin.onUnknownField(e, a, n, s);
    }
}, exports.clearExtension = function(e, a) {
    if (t(a, e), r(e, a)) {
        const n = e.getType().runtime.bin, s = n.listUnknownFields(e).filter((e)=>e.no != a.field.no);
        n.discardUnknownFields(e);
        for (const a of s)n.onUnknownField(e, a.no, a.wireType, a.data);
    }
}, exports.hasExtension = r;
