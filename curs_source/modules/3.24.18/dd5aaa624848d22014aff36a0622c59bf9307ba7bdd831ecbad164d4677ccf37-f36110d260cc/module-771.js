Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const r = require("./module-98.js"), o = require("./module-802.js");
function a(e, t) {
    const n = e.getType();
    return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((e)=>e.no == t.field.no);
}
function s(e, t) {
    (0, r.assert)(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, t, n) {
    s(t, e);
    const r = t.runtime.bin.makeReadOptions(n), a = (0, o.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), t.field), [i, l] = (0, o.createExtensionContainer)(t);
    for (const e of a)t.runtime.bin.readField(i, r.readerFactory(e.data), t.field, e.wireType, r);
    return l();
}, exports.setExtension = function(e, t, n, r) {
    s(t, e);
    const o = t.runtime.bin.makeReadOptions(r), i = t.runtime.bin.makeWriteOptions(r);
    if (a(e, t)) {
        const n = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const t of n)e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
    }
    const l = i.writerFactory();
    let u = t.field;
    u.opt || u.repeated || "enum" != u.kind && "scalar" != u.kind || (u = Object.assign(Object.assign({}, t.field), {
        opt: !0
    })), t.runtime.bin.writeField(u, n, l, i);
    const c = o.readerFactory(l.finish());
    for(; c.pos < c.len;){
        const [t, n] = c.tag(), r = c.skip(n, t);
        e.getType().runtime.bin.onUnknownField(e, t, n, r);
    }
}, exports.clearExtension = function(e, t) {
    if (s(t, e), a(e, t)) {
        const n = e.getType().runtime.bin, r = n.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        n.discardUnknownFields(e);
        for (const t of r)n.onUnknownField(e, t.no, t.wireType, t.data);
    }
}, exports.hasExtension = a;
