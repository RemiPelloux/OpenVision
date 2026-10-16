"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const a = require("./module-3098.js"), s = require("./module-7599.js"), o = require("./module-3672.js"), r = require("./module-5822.js"), i = require("./module-7907.js"), A = require("./module-1193.js"), c = require("./module-8245.js"), l = require("./module-7668.js"), d = require("./module-970.js"), m = require("./module-8814.js"), u = require("./module-609.js"), g = require("./module-8021.js"), p = require("./module-7374.js"), E = require("./module-1101.js"), h = require("./module-2706.js"), T = [
    c.Any,
    A.Duration,
    l.Empty,
    d.FieldMask,
    m.Struct,
    m.Value,
    m.ListValue,
    i.Timestamp,
    A.Duration,
    g.DoubleValue,
    g.FloatValue,
    g.Int64Value,
    g.Int32Value,
    g.UInt32Value,
    g.UInt64Value,
    g.BoolValue,
    g.StringValue,
    g.BytesValue
], k = [
    (0, u.getEnumType)(m.NullValue)
];
function f(e, n) {
    var t;
    const s = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == p.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (t = e.oneof) || void 0 === t ? void 0 : t.name,
        opt: e.optional,
        req: e.proto.label === p.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let t;
                switch((0, a.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        t = e.mapValue.scalar;
                        break;
                    case "enum":
                        t = _(e.mapValue.enum, n, e);
                        break;
                    case "message":
                        t = _(e.mapValue.message, n, e);
                }
                s.K = e.mapKey, s.V = {
                    kind: e.mapValue.kind,
                    T: t
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
function _(e, n, t) {
    const s = "message" == e.kind ? n.findMessage(e.typeName) : n.findEnum(e.typeName);
    return (0, a.assert)(s, `${e.toString()}" for ${t.toString()} not found`), s;
}
exports.createRegistryFromDescriptors = function(e, n = !0) {
    const t = e instanceof Uint8Array || (0, h.isMessage)(e, p.FileDescriptorSet) ? (0, E.createDescriptorSet)(e) : e, a = new Map, i = new Map, A = new Map, c = new Map, l = {};
    if (n) {
        for (const e of T)i.set(e.typeName, e);
        for (const e of k)a.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const n = a.get(e);
            if (n) return n;
            const i = t.enums.get(e);
            if (!i) return;
            const A = ("proto3" == i.file.syntax ? s.proto3 : o.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, r.localName)(e)
                })), {});
            return a.set(e, A), A;
        },
        findMessage (e) {
            const n = i.get(e);
            if (n) return n;
            const a = t.messages.get(e);
            if (!a) return;
            const A = "proto3" == a.file.syntax ? s.proto3 : o.proto2, c = [], l = A.makeMessageType(e, ()=>c, {
                localName: (0, r.localName)(a)
            });
            i.set(e, l);
            for (const e of a.fields)c.push(f(e, this));
            return l;
        },
        findService (e) {
            const n = l[e];
            if (n) return n;
            const a = t.services.get(e);
            if (!a) return;
            const s = {};
            for (const e of a.methods){
                const n = _(e.input, this, e), t = _(e.output, this, e);
                s[(0, r.localName)(e)] = {
                    name: e.name,
                    I: n,
                    O: t,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return l[e] = {
                typeName: a.typeName,
                methods: s
            };
        },
        findExtensionFor (e, n) {
            var a;
            if (!t.messages.has(e)) return;
            let s = c.get(e);
            if (!s) {
                s = new Map, c.set(e, s);
                for (const n of t.extensions.values())n.extendee.typeName == e && s.set(n.number, n);
            }
            const o = null === (a = c.get(e)) || void 0 === a ? void 0 : a.get(n);
            return o ? this.findExtension(o.typeName) : void 0;
        },
        findExtension (e) {
            const n = A.get(e);
            if (n) return n;
            const a = t.extensions.get(e);
            if (!a) return;
            const r = _(a.extendee, this, a), i = ("proto3" == a.file.syntax ? s.proto3 : o.proto2).makeExtension(e, r, f(a, this));
            return A.set(e, i), i;
        }
    };
};
