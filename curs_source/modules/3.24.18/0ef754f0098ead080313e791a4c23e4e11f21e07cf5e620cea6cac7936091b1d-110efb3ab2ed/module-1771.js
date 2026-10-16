"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtension = exports.clearExtension = exports.setExtension = exports.getExtension = void 0;
const t = require("./module-3098.js"), s = require("./module-1802.js");
function o(e, a) {
    const n = e.getType();
    return a.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((e)=>e.no == a.field.no);
}
function r(e, a) {
    (0, t.assert)(e.extendee.typeName == a.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
exports.getExtension = function(e, a, n) {
    r(a, e);
    const t = a.runtime.bin.makeReadOptions(n), o = (0, s.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), a.field), [i, l] = (0, s.createExtensionContainer)(a);
    for (const e of o)a.runtime.bin.readField(i, t.readerFactory(e.data), a.field, e.wireType, t);
    return l();
}, exports.setExtension = function(e, a, n, t) {
    r(a, e);
    const s = a.runtime.bin.makeReadOptions(t), i = a.runtime.bin.makeWriteOptions(t);
    if (o(e, a)) {
        const n = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != a.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const a of n)e.getType().runtime.bin.onUnknownField(e, a.no, a.wireType, a.data);
    }
    const l = i.writerFactory();
    let d = a.field;
    d.opt || d.repeated || "enum" != d.kind && "scalar" != d.kind || (d = Object.assign(Object.assign({}, a.field), {
        opt: !0
    })), a.runtime.bin.writeField(d, n, l, i);
    const m = s.readerFactory(l.finish());
    for(; m.pos < m.len;){
        const [a, n] = m.tag(), t = m.skip(n, a);
        e.getType().runtime.bin.onUnknownField(e, a, n, t);
    }
}, exports.clearExtension = function(e, a) {
    if (r(a, e), o(e, a)) {
        const n = e.getType().runtime.bin, t = n.listUnknownFields(e).filter((e)=>e.no != a.field.no);
        n.discardUnknownFields(e);
        for (const a of t)n.onUnknownField(e, a.no, a.wireType, a.data);
    }
}, exports.hasExtension = o;
