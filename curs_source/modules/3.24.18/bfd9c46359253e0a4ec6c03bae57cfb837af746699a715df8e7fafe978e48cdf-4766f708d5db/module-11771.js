"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const n = require("./module-43098.js"), s = require("./module-1802.js");
function o(e, t) {
    const r = e.getType();
    return t.extendee.typeName === r.typeName && !!r.runtime.bin.listUnknownFields(e).find((e)=>e.no == t.field.no);
}
function i(e, t) {
    (0, n.assert)(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, t, r) {
    i(t, e);
    const n = t.runtime.bin.makeReadOptions(r), o = (0, s.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), t.field), [a, c] = (0, s.createExtensionContainer)(t);
    for (const e of o)t.runtime.bin.readField(a, n.readerFactory(e.data), t.field, e.wireType, n);
    return c();
}, exports.setExtension = function(e, t, r, n) {
    i(t, e);
    const s = t.runtime.bin.makeReadOptions(n), a = t.runtime.bin.makeWriteOptions(n);
    if (o(e, t)) {
        const r = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const t of r)e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
    }
    const c = a.writerFactory();
    let l = t.field;
    l.opt || l.repeated || "enum" != l.kind && "scalar" != l.kind || (l = Object.assign(Object.assign({}, t.field), {
        opt: !0
    })), t.runtime.bin.writeField(l, r, c, a);
    const u = s.readerFactory(c.finish());
    for(; u.pos < u.len;){
        const [t, r] = u.tag(), n = u.skip(r, t);
        e.getType().runtime.bin.onUnknownField(e, t, r, n);
    }
}, exports.clearExtension = function(e, t) {
    if (i(t, e), o(e, t)) {
        const r = e.getType().runtime.bin, n = r.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        r.discardUnknownFields(e);
        for (const t of n)r.onUnknownField(e, t.no, t.wireType, t.data);
    }
}, exports.hasExtension = o;
