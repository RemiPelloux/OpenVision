"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const a = require("./module-3098.js"), s = require("./module-1802.js");
function o(e, n) {
    const t = e.getType();
    return n.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(e).find((e)=>e.no == n.field.no);
}
function r(e, n) {
    (0, a.assert)(e.extendee.typeName == n.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, n, t) {
    r(n, e);
    const a = n.runtime.bin.makeReadOptions(t), o = (0, s.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), n.field), [i, A] = (0, s.createExtensionContainer)(n);
    for (const e of o)n.runtime.bin.readField(i, a.readerFactory(e.data), n.field, e.wireType, a);
    return A();
}, exports.setExtension = function(e, n, t, a) {
    r(n, e);
    const s = n.runtime.bin.makeReadOptions(a), i = n.runtime.bin.makeWriteOptions(a);
    if (o(e, n)) {
        const t = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != n.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const n of t)e.getType().runtime.bin.onUnknownField(e, n.no, n.wireType, n.data);
    }
    const A = i.writerFactory();
    let c = n.field;
    c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, n.field), {
        opt: !0
    })), n.runtime.bin.writeField(c, t, A, i);
    const l = s.readerFactory(A.finish());
    for(; l.pos < l.len;){
        const [n, t] = l.tag(), a = l.skip(t, n);
        e.getType().runtime.bin.onUnknownField(e, n, t, a);
    }
}, exports.clearExtension = function(e, n) {
    if (r(n, e), o(e, n)) {
        const t = e.getType().runtime.bin, a = t.listUnknownFields(e).filter((e)=>e.no != n.field.no);
        t.discardUnknownFields(e);
        for (const n of a)t.onUnknownField(e, n.no, n.wireType, n.data);
    }
}, exports.hasExtension = o;
