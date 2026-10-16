"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const n = require("./module-3098.js"), s = require("./module-1802.js");
function i(t, e) {
    const r = t.getType();
    return e.extendee.typeName === r.typeName && !!r.runtime.bin.listUnknownFields(t).find((t)=>t.no == e.field.no);
}
function o(t, e) {
    (0, n.assert)(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`);
}
exports.getExtension = function(t, e, r) {
    o(e, t);
    const n = e.runtime.bin.makeReadOptions(r), i = (0, s.filterUnknownFields)(t.getType().runtime.bin.listUnknownFields(t), e.field), [a, u] = (0, s.createExtensionContainer)(e);
    for (const t of i)e.runtime.bin.readField(a, n.readerFactory(t.data), e.field, t.wireType, n);
    return u();
}, exports.setExtension = function(t, e, r, n) {
    o(e, t);
    const s = e.runtime.bin.makeReadOptions(n), a = e.runtime.bin.makeWriteOptions(n);
    if (i(t, e)) {
        const r = t.getType().runtime.bin.listUnknownFields(t).filter((t)=>t.no != e.field.no);
        t.getType().runtime.bin.discardUnknownFields(t);
        for (const e of r)t.getType().runtime.bin.onUnknownField(t, e.no, e.wireType, e.data);
    }
    const u = a.writerFactory();
    let c = e.field;
    c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, e.field), {
        opt: !0
    })), e.runtime.bin.writeField(c, r, u, a);
    const l = s.readerFactory(u.finish());
    for(; l.pos < l.len;){
        const [e, r] = l.tag(), n = l.skip(r, e);
        t.getType().runtime.bin.onUnknownField(t, e, r, n);
    }
}, exports.clearExtension = function(t, e) {
    if (o(e, t), i(t, e)) {
        const r = t.getType().runtime.bin, n = r.listUnknownFields(t).filter((t)=>t.no != e.field.no);
        r.discardUnknownFields(t);
        for (const e of n)r.onUnknownField(t, e.no, e.wireType, e.data);
    }
}, exports.hasExtension = i;
