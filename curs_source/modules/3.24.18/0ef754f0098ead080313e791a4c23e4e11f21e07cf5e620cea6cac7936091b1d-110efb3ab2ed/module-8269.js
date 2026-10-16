"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const t = require("./module-3098.js"), s = require("./module-7599.js"), o = require("./module-3672.js"), r = require("./module-5822.js"), i = require("./module-7907.js"), l = require("./module-1193.js"), d = require("./module-8245.js"), m = require("./module-7668.js"), c = require("./module-970.js"), p = require("./module-8814.js"), A = require("./module-609.js"), u = require("./module-8021.js"), g = require("./module-7374.js"), T = require("./module-1101.js"), h = require("./module-2706.js"), k = [
    d.Any,
    l.Duration,
    m.Empty,
    c.FieldMask,
    p.Struct,
    p.Value,
    p.ListValue,
    i.Timestamp,
    l.Duration,
    u.DoubleValue,
    u.FloatValue,
    u.Int64Value,
    u.Int32Value,
    u.UInt32Value,
    u.UInt64Value,
    u.BoolValue,
    u.StringValue,
    u.BytesValue
], _ = [
    (0, A.getEnumType)(p.NullValue)
];
function E(e, a) {
    var n;
    const s = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == g.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (n = e.oneof) || void 0 === n ? void 0 : n.name,
        opt: e.optional,
        req: e.proto.label === g.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let n;
                switch((0, t.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        n = e.mapValue.scalar;
                        break;
                    case "enum":
                        n = f(e.mapValue.enum, a, e);
                        break;
                    case "message":
                        n = f(e.mapValue.message, a, e);
                }
                s.K = e.mapKey, s.V = {
                    kind: e.mapValue.kind,
                    T: n
                };
                break;
            }
        case "message":
            s.T = f(e.message, a, e);
            break;
        case "enum":
            s.T = f(e.enum, a, e), s.default = e.getDefaultValue();
            break;
        case "scalar":
            s.L = e.longType, s.T = e.scalar, s.default = e.getDefaultValue();
    }
    return s;
}
function f(e, a, n) {
    const s = "message" == e.kind ? a.findMessage(e.typeName) : a.findEnum(e.typeName);
    return (0, t.assert)(s, `${e.toString()}" for ${n.toString()} not found`), s;
}
exports.createRegistryFromDescriptors = function(e, a = !0) {
    const n = e instanceof Uint8Array || (0, h.isMessage)(e, g.FileDescriptorSet) ? (0, T.createDescriptorSet)(e) : e, t = new Map, i = new Map, l = new Map, d = new Map, m = {};
    if (a) {
        for (const e of k)i.set(e.typeName, e);
        for (const e of _)t.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const a = t.get(e);
            if (a) return a;
            const i = n.enums.get(e);
            if (!i) return;
            const l = ("proto3" == i.file.syntax ? s.proto3 : o.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, r.localName)(e)
                })), {});
            return t.set(e, l), l;
        },
        findMessage (e) {
            const a = i.get(e);
            if (a) return a;
            const t = n.messages.get(e);
            if (!t) return;
            const l = "proto3" == t.file.syntax ? s.proto3 : o.proto2, d = [], m = l.makeMessageType(e, ()=>d, {
                localName: (0, r.localName)(t)
            });
            i.set(e, m);
            for (const e of t.fields)d.push(E(e, this));
            return m;
        },
        findService (e) {
            const a = m[e];
            if (a) return a;
            const t = n.services.get(e);
            if (!t) return;
            const s = {};
            for (const e of t.methods){
                const a = f(e.input, this, e), n = f(e.output, this, e);
                s[(0, r.localName)(e)] = {
                    name: e.name,
                    I: a,
                    O: n,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return m[e] = {
                typeName: t.typeName,
                methods: s
            };
        },
        findExtensionFor (e, a) {
            var t;
            if (!n.messages.has(e)) return;
            let s = d.get(e);
            if (!s) {
                s = new Map, d.set(e, s);
                for (const a of n.extensions.values())a.extendee.typeName == e && s.set(a.number, a);
            }
            const o = null === (t = d.get(e)) || void 0 === t ? void 0 : t.get(a);
            return o ? this.findExtension(o.typeName) : void 0;
        },
        findExtension (e) {
            const a = l.get(e);
            if (a) return a;
            const t = n.extensions.get(e);
            if (!t) return;
            const r = f(t.extendee, this, t), i = ("proto3" == t.file.syntax ? s.proto3 : o.proto2).makeExtension(e, r, E(t, this));
            return l.set(e, i), i;
        }
    };
};
