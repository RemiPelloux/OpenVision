"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const n = require("./module-3098.js"), r = require("./module-1802.js");
function o(e, A) {
    const t = e.getType();
    return A.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(e).find((e)=>e.no == A.field.no);
}
function s(e, A) {
    (0, n.assert)(e.extendee.typeName == A.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, A, t) {
    s(A, e);
    const n = A.runtime.bin.makeReadOptions(t), o = (0, r.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), A.field), [a, i] = (0, r.createExtensionContainer)(A);
    for (const e of o)A.runtime.bin.readField(a, n.readerFactory(e.data), A.field, e.wireType, n);
    return i();
}, exports.setExtension = function(e, A, t, n) {
    s(A, e);
    const r = A.runtime.bin.makeReadOptions(n), a = A.runtime.bin.makeWriteOptions(n);
    if (o(e, A)) {
        const t = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != A.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const A of t)e.getType().runtime.bin.onUnknownField(e, A.no, A.wireType, A.data);
    }
    const i = a.writerFactory();
    let c = A.field;
    c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, A.field), {
        opt: !0
    })), A.runtime.bin.writeField(c, t, i, a);
    const l = r.readerFactory(i.finish());
    for(; l.pos < l.len;){
        const [A, t] = l.tag(), n = l.skip(t, A);
        e.getType().runtime.bin.onUnknownField(e, A, t, n);
    }
}, exports.clearExtension = function(e, A) {
    if (s(A, e), o(e, A)) {
        const t = e.getType().runtime.bin, n = t.listUnknownFields(e).filter((e)=>e.no != A.field.no);
        t.discardUnknownFields(e);
        for (const A of n)t.onUnknownField(e, A.no, A.wireType, A.data);
    }
}, exports.hasExtension = o;
