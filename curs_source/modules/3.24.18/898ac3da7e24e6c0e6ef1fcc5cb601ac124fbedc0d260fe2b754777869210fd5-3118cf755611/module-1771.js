"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const t = require("./module-3098.js"), s = require("./module-1802.js");
function o(e, n) {
    const a = e.getType();
    return n.extendee.typeName === a.typeName && !!a.runtime.bin.listUnknownFields(e).find((e)=>e.no == n.field.no);
}
function r(e, n) {
    (0, t.assert)(e.extendee.typeName == n.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, n, a) {
    r(n, e);
    const t = n.runtime.bin.makeReadOptions(a), o = (0, s.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), n.field), [i, A] = (0, s.createExtensionContainer)(n);
    for (const e of o)n.runtime.bin.readField(i, t.readerFactory(e.data), n.field, e.wireType, t);
    return A();
}, exports.setExtension = function(e, n, a, t) {
    r(n, e);
    const s = n.runtime.bin.makeReadOptions(t), i = n.runtime.bin.makeWriteOptions(t);
    if (o(e, n)) {
        const a = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != n.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const n of a)e.getType().runtime.bin.onUnknownField(e, n.no, n.wireType, n.data);
    }
    const A = i.writerFactory();
    let l = n.field;
    l.opt || l.repeated || "enum" != l.kind && "scalar" != l.kind || (l = Object.assign(Object.assign({}, n.field), {
        opt: !0
    })), n.runtime.bin.writeField(l, a, A, i);
    const c = s.readerFactory(A.finish());
    for(; c.pos < c.len;){
        const [n, a] = c.tag(), t = c.skip(a, n);
        e.getType().runtime.bin.onUnknownField(e, n, a, t);
    }
}, exports.clearExtension = function(e, n) {
    if (r(n, e), o(e, n)) {
        const a = e.getType().runtime.bin, t = a.listUnknownFields(e).filter((e)=>e.no != n.field.no);
        a.discardUnknownFields(e);
        for (const n of t)a.onUnknownField(e, n.no, n.wireType, n.data);
    }
}, exports.hasExtension = o;
