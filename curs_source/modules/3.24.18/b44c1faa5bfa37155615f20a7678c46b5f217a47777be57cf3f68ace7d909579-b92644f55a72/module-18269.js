"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const n = require("./module-43098.js"), s = require("./module-27599.js"), o = require("./module-83672.js"), i = require("./module-75822.js"), a = require("./module-87907.js"), c = require("./module-11193.js"), l = require("./module-48245.js"), u = require("./module-27668.js"), d = require("./module-60970.js"), p = require("./module-78814.js"), m = require("./module-609.js"), h = require("./module-28021.js"), f = require("./module-27374.js"), g = require("./module-51101.js"), y = require("./module-62706.js"), w = [
    l.Any,
    c.Duration,
    u.Empty,
    d.FieldMask,
    p.Struct,
    p.Value,
    p.ListValue,
    a.Timestamp,
    c.Duration,
    h.DoubleValue,
    h.FloatValue,
    h.Int64Value,
    h.Int32Value,
    h.UInt32Value,
    h.UInt64Value,
    h.BoolValue,
    h.StringValue,
    h.BytesValue
], v = [
    (0, m.getEnumType)(p.NullValue)
];
function _(e, t) {
    var r;
    const s = {
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
                        r = A(e.mapValue.enum, t, e);
                        break;
                    case "message":
                        r = A(e.mapValue.message, t, e);
                }
                s.K = e.mapKey, s.V = {
                    kind: e.mapValue.kind,
                    T: r
                };
                break;
            }
        case "message":
            s.T = A(e.message, t, e);
            break;
        case "enum":
            s.T = A(e.enum, t, e), s.default = e.getDefaultValue();
            break;
        case "scalar":
            s.L = e.longType, s.T = e.scalar, s.default = e.getDefaultValue();
    }
    return s;
}
function A(e, t, r) {
    const s = "message" == e.kind ? t.findMessage(e.typeName) : t.findEnum(e.typeName);
    return (0, n.assert)(s, `${e.toString()}" for ${r.toString()} not found`), s;
}
exports.createRegistryFromDescriptors = function(e, t = !0) {
    const r = e instanceof Uint8Array || (0, y.isMessage)(e, f.FileDescriptorSet) ? (0, g.createDescriptorSet)(e) : e, n = new Map, a = new Map, c = new Map, l = new Map, u = {};
    if (t) {
        for (const e of w)a.set(e.typeName, e);
        for (const e of v)n.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const t = n.get(e);
            if (t) return t;
            const a = r.enums.get(e);
            if (!a) return;
            const c = ("proto3" == a.file.syntax ? s.proto3 : o.proto2).makeEnumType(e, a.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, i.localName)(e)
                })), {});
            return n.set(e, c), c;
        },
        findMessage (e) {
            const t = a.get(e);
            if (t) return t;
            const n = r.messages.get(e);
            if (!n) return;
            const c = "proto3" == n.file.syntax ? s.proto3 : o.proto2, l = [], u = c.makeMessageType(e, ()=>l, {
                localName: (0, i.localName)(n)
            });
            a.set(e, u);
            for (const e of n.fields)l.push(_(e, this));
            return u;
        },
        findService (e) {
            const t = u[e];
            if (t) return t;
            const n = r.services.get(e);
            if (!n) return;
            const s = {};
            for (const e of n.methods){
                const t = A(e.input, this, e), r = A(e.output, this, e);
                s[(0, i.localName)(e)] = {
                    name: e.name,
                    I: t,
                    O: r,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return u[e] = {
                typeName: n.typeName,
                methods: s
            };
        },
        findExtensionFor (e, t) {
            var n;
            if (!r.messages.has(e)) return;
            let s = l.get(e);
            if (!s) {
                s = new Map, l.set(e, s);
                for (const t of r.extensions.values())t.extendee.typeName == e && s.set(t.number, t);
            }
            const o = null === (n = l.get(e)) || void 0 === n ? void 0 : n.get(t);
            return o ? this.findExtension(o.typeName) : void 0;
        },
        findExtension (e) {
            const t = c.get(e);
            if (t) return t;
            const n = r.extensions.get(e);
            if (!n) return;
            const i = A(n.extendee, this, n), a = ("proto3" == n.file.syntax ? s.proto3 : o.proto2).makeExtension(e, i, _(n, this));
            return c.set(e, a), a;
        }
    };
};
