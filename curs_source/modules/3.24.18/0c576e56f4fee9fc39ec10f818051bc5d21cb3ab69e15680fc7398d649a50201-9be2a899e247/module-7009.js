"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const n = require("./module-3098.js"), o = require("./module-1802.js");
function s(e, t) {
    const r = e.getType();
    return t.extendee.typeName === r.typeName && !!r.runtime.bin.listUnknownFields(e).find((e)=>e.no == t.field.no);
}
function i(e, t) {
    (0, n.assert)(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, t, r) {
    i(t, e);
    const n = t.runtime.bin.makeReadOptions(r), s = (0, o.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), t.field), [a, c] = (0, o.createExtensionContainer)(t);
    for (const e of s)t.runtime.bin.readField(a, n.readerFactory(e.data), t.field, e.wireType, n);
    return c();
}, exports.setExtension = function(e, t, r, n) {
    i(t, e);
    const o = t.runtime.bin.makeReadOptions(n), a = t.runtime.bin.makeWriteOptions(n);
    if (s(e, t)) {
        const r = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const t of r)e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
    }
    const c = a.writerFactory();
    let u = t.field;
    u.opt || u.repeated || "enum" != u.kind && "scalar" != u.kind || (u = Object.assign(Object.assign({}, t.field), {
        opt: !0
    })), t.runtime.bin.writeField(u, r, c, a);
    const l = o.readerFactory(c.finish());
    for(; l.pos < l.len;){
        const [t, r] = l.tag(), n = l.skip(r, t);
        e.getType().runtime.bin.onUnknownField(e, t, r, n);
    }
}, exports.clearExtension = function(e, t) {
    if (i(t, e), s(e, t)) {
        const r = e.getType().runtime.bin, n = r.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        r.discardUnknownFields(e);
        for (const t of n)r.onUnknownField(e, t.no, t.wireType, t.data);
    }
}, exports.hasExtension = s;
