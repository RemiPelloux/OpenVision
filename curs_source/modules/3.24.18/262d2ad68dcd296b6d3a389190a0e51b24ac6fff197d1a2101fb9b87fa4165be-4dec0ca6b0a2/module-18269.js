"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const n = require("./module-43098.js"), o = require("./module-27599.js"), s = require("./module-83672.js"), i = require("./module-75822.js"), a = require("./module-87907.js"), l = require("./module-11193.js"), c = require("./module-48245.js"), u = require("./module-27668.js"), d = require("./module-60970.js"), p = require("./module-78814.js"), h = require("./module-609.js"), m = require("./module-28021.js"), f = require("./module-27374.js"), g = require("./module-51101.js"), y = require("./module-62706.js"), v = [
    c.Any,
    l.Duration,
    u.Empty,
    d.FieldMask,
    p.Struct,
    p.Value,
    p.ListValue,
    a.Timestamp,
    l.Duration,
    m.DoubleValue,
    m.FloatValue,
    m.Int64Value,
    m.Int32Value,
    m.UInt32Value,
    m.UInt64Value,
    m.BoolValue,
    m.StringValue,
    m.BytesValue
], w = [
    (0, h.getEnumType)(p.NullValue)
];
function b(e, t) {
    var r;
    const o = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == f.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (r = e.oneof) || void 0 === r ? void 0 : r.name,
        opt: e.optional,
        req: e.proto.label === f.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let r;
                switch((0, n.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        r = e.mapValue.scalar;
                        break;
                    case "enum":
                        r = _(e.mapValue.enum, t, e);
                        break;
                    case "message":
                        r = _(e.mapValue.message, t, e);
                }
                o.K = e.mapKey, o.V = {
                    kind: e.mapValue.kind,
                    T: r
                };
                break;
            }
        case "message":
            o.T = _(e.message, t, e);
            break;
        case "enum":
            o.T = _(e.enum, t, e), o.default = e.getDefaultValue();
            break;
        case "scalar":
            o.L = e.longType, o.T = e.scalar, o.default = e.getDefaultValue();
    }
    return o;
}
function _(e, t, r) {
    const o = "message" == e.kind ? t.findMessage(e.typeName) : t.findEnum(e.typeName);
    return (0, n.assert)(o, `${e.toString()}" for ${r.toString()} not found`), o;
}
exports.createRegistryFromDescriptors = function(e, t = !0) {
    const r = e instanceof Uint8Array || (0, y.isMessage)(e, f.FileDescriptorSet) ? (0, g.createDescriptorSet)(e) : e, n = new Map, a = new Map, l = new Map, c = new Map, u = {};
    if (t) {
        for (const e of v)a.set(e.typeName, e);
        for (const e of w)n.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const t = n.get(e);
            if (t) return t;
            const a = r.enums.get(e);
            if (!a) return;
            const l = ("proto3" == a.file.syntax ? o.proto3 : s.proto2).makeEnumType(e, a.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, i.localName)(e)
                })), {});
            return n.set(e, l), l;
        },
        findMessage (e) {
            const t = a.get(e);
            if (t) return t;
            const n = r.messages.get(e);
            if (!n) return;
            const l = "proto3" == n.file.syntax ? o.proto3 : s.proto2, c = [], u = l.makeMessageType(e, ()=>c, {
                localName: (0, i.localName)(n)
            });
            a.set(e, u);
            for (const e of n.fields)c.push(b(e, this));
            return u;
        },
        findService (e) {
            const t = u[e];
            if (t) return t;
            const n = r.services.get(e);
            if (!n) return;
            const o = {};
            for (const e of n.methods){
                const t = _(e.input, this, e), r = _(e.output, this, e);
                o[(0, i.localName)(e)] = {
                    name: e.name,
                    I: t,
                    O: r,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return u[e] = {
                typeName: n.typeName,
                methods: o
            };
        },
        findExtensionFor (e, t) {
            var n;
            if (!r.messages.has(e)) return;
            let o = c.get(e);
            if (!o) {
                o = new Map, c.set(e, o);
                for (const t of r.extensions.values())t.extendee.typeName == e && o.set(t.number, t);
            }
            const s = null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(t);
            return s ? this.findExtension(s.typeName) : void 0;
        },
        findExtension (e) {
            const t = l.get(e);
            if (t) return t;
            const n = r.extensions.get(e);
            if (!n) return;
            const i = _(n.extendee, this, n), a = ("proto3" == n.file.syntax ? o.proto3 : s.proto2).makeExtension(e, i, b(n, this));
            return l.set(e, a), a;
        }
    };
};
