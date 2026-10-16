"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const t = require("./module-3098.js"), s = require("./module-7599.js"), o = require("./module-3672.js"), r = require("./module-5822.js"), i = require("./module-7907.js"), A = require("./module-1193.js"), l = require("./module-8245.js"), c = require("./module-7668.js"), m = require("./module-970.js"), d = require("./module-8814.js"), g = require("./module-609.js"), u = require("./module-8021.js"), E = require("./module-7374.js"), p = require("./module-1101.js"), T = require("./module-2706.js"), k = [
    l.Any,
    A.Duration,
    c.Empty,
    m.FieldMask,
    d.Struct,
    d.Value,
    d.ListValue,
    i.Timestamp,
    A.Duration,
    u.DoubleValue,
    u.FloatValue,
    u.Int64Value,
    u.Int32Value,
    u.UInt32Value,
    u.UInt64Value,
    u.BoolValue,
    u.StringValue,
    u.BytesValue
], I = [
    (0, g.getEnumType)(d.NullValue)
];
function h(e, n) {
    var a;
    const s = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == E.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (a = e.oneof) || void 0 === a ? void 0 : a.name,
        opt: e.optional,
        req: e.proto.label === E.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let a;
                switch((0, t.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        a = e.mapValue.scalar;
                        break;
                    case "enum":
                        a = _(e.mapValue.enum, n, e);
                        break;
                    case "message":
                        a = _(e.mapValue.message, n, e);
                }
                s.K = e.mapKey, s.V = {
                    kind: e.mapValue.kind,
                    T: a
                };
                break;
            }
        case "message":
            s.T = _(e.message, n, e);
            break;
        case "enum":
            s.T = _(e.enum, n, e), s.default = e.getDefaultValue();
            break;
        case "scalar":
            s.L = e.longType, s.T = e.scalar, s.default = e.getDefaultValue();
    }
    return s;
}
function _(e, n, a) {
    const s = "message" == e.kind ? n.findMessage(e.typeName) : n.findEnum(e.typeName);
    return (0, t.assert)(s, `${e.toString()}" for ${a.toString()} not found`), s;
}
exports.createRegistryFromDescriptors = function(e, n = !0) {
    const a = e instanceof Uint8Array || (0, T.isMessage)(e, E.FileDescriptorSet) ? (0, p.createDescriptorSet)(e) : e, t = new Map, i = new Map, A = new Map, l = new Map, c = {};
    if (n) {
        for (const e of k)i.set(e.typeName, e);
        for (const e of I)t.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const n = t.get(e);
            if (n) return n;
            const i = a.enums.get(e);
            if (!i) return;
            const A = ("proto3" == i.file.syntax ? s.proto3 : o.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, r.localName)(e)
                })), {});
            return t.set(e, A), A;
        },
        findMessage (e) {
            const n = i.get(e);
            if (n) return n;
            const t = a.messages.get(e);
            if (!t) return;
            const A = "proto3" == t.file.syntax ? s.proto3 : o.proto2, l = [], c = A.makeMessageType(e, ()=>l, {
                localName: (0, r.localName)(t)
            });
            i.set(e, c);
            for (const e of t.fields)l.push(h(e, this));
            return c;
        },
        findService (e) {
            const n = c[e];
            if (n) return n;
            const t = a.services.get(e);
            if (!t) return;
            const s = {};
            for (const e of t.methods){
                const n = _(e.input, this, e), a = _(e.output, this, e);
                s[(0, r.localName)(e)] = {
                    name: e.name,
                    I: n,
                    O: a,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return c[e] = {
                typeName: t.typeName,
                methods: s
            };
        },
        findExtensionFor (e, n) {
            var t;
            if (!a.messages.has(e)) return;
            let s = l.get(e);
            if (!s) {
                s = new Map, l.set(e, s);
                for (const n of a.extensions.values())n.extendee.typeName == e && s.set(n.number, n);
            }
            const o = null === (t = l.get(e)) || void 0 === t ? void 0 : t.get(n);
            return o ? this.findExtension(o.typeName) : void 0;
        },
        findExtension (e) {
            const n = A.get(e);
            if (n) return n;
            const t = a.extensions.get(e);
            if (!t) return;
            const r = _(t.extendee, this, t), i = ("proto3" == t.file.syntax ? s.proto3 : o.proto2).makeExtension(e, r, h(t, this));
            return A.set(e, i), i;
        }
    };
};
