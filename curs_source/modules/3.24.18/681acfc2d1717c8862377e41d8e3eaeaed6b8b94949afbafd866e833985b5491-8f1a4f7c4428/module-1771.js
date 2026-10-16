"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const n = require("./module-3098.js"), r = require("./module-1802.js");
function o(e, t) {
    const A = e.getType();
    return t.extendee.typeName === A.typeName && !!A.runtime.bin.listUnknownFields(e).find((e)=>e.no == t.field.no);
}
function s(e, t) {
    (0, n.assert)(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, t, A) {
    s(t, e);
    const n = t.runtime.bin.makeReadOptions(A), o = (0, r.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), t.field), [i, a] = (0, r.createExtensionContainer)(t);
    for (const e of o)t.runtime.bin.readField(i, n.readerFactory(e.data), t.field, e.wireType, n);
    return a();
}, exports.setExtension = function(e, t, A, n) {
    s(t, e);
    const r = t.runtime.bin.makeReadOptions(n), i = t.runtime.bin.makeWriteOptions(n);
    if (o(e, t)) {
        const A = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const t of A)e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
    }
    const a = i.writerFactory();
    let c = t.field;
    c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, t.field), {
        opt: !0
    })), t.runtime.bin.writeField(c, A, a, i);
    const l = r.readerFactory(a.finish());
    for(; l.pos < l.len;){
        const [t, A] = l.tag(), n = l.skip(A, t);
        e.getType().runtime.bin.onUnknownField(e, t, A, n);
    }
}, exports.clearExtension = function(e, t) {
    if (s(t, e), o(e, t)) {
        const A = e.getType().runtime.bin, n = A.listUnknownFields(e).filter((e)=>e.no != t.field.no);
        A.discardUnknownFields(e);
        for (const t of n)A.onUnknownField(e, t.no, t.wireType, t.data);
    }
}, exports.hasExtension = o;
