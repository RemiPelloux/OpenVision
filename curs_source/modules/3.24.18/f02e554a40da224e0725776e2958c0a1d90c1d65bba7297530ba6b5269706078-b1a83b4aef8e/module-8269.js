"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const n = require("./module-3098.js"), s = require("./module-7599.js"), i = require("./module-3672.js"), o = require("./module-5822.js"), a = require("./module-7907.js"), u = require("./module-1193.js"), c = require("./module-8245.js"), l = require("./module-7668.js"), m = require("./module-970.js"), d = require("./module-8814.js"), f = require("./module-609.js"), p = require("./module-8021.js"), h = require("./module-7374.js"), g = require("./module-1101.js"), A = require("./module-2706.js"), _ = [
    c.Any,
    u.Duration,
    l.Empty,
    m.FieldMask,
    d.Struct,
    d.Value,
    d.ListValue,
    a.Timestamp,
    u.Duration,
    p.DoubleValue,
    p.FloatValue,
    p.Int64Value,
    p.Int32Value,
    p.UInt32Value,
    p.UInt64Value,
    p.BoolValue,
    p.StringValue,
    p.BytesValue
], y = [
    (0, f.getEnumType)(d.NullValue)
];
function w(t, e) {
    var r;
    const s = {
        kind: t.fieldKind,
        no: t.number,
        name: t.name,
        jsonName: t.jsonName,
        delimited: t.proto.type == h.FieldDescriptorProto_Type.GROUP,
        repeated: t.repeated,
        packed: t.packed,
        oneof: null === (r = t.oneof) || void 0 === r ? void 0 : r.name,
        opt: t.optional,
        req: t.proto.label === h.FieldDescriptorProto_Label.REQUIRED
    };
    switch(t.fieldKind){
        case "map":
            {
                let r;
                switch((0, n.assert)("field" == t.kind), t.mapValue.kind){
                    case "scalar":
                        r = t.mapValue.scalar;
                        break;
                    case "enum":
                        r = S(t.mapValue.enum, e, t);
                        break;
                    case "message":
                        r = S(t.mapValue.message, e, t);
                }
                s.K = t.mapKey, s.V = {
                    kind: t.mapValue.kind,
                    T: r
                };
                break;
            }
        case "message":
            s.T = S(t.message, e, t);
            break;
        case "enum":
            s.T = S(t.enum, e, t), s.default = t.getDefaultValue();
            break;
        case "scalar":
            s.L = t.longType, s.T = t.scalar, s.default = t.getDefaultValue();
    }
    return s;
}
function S(t, e, r) {
    const s = "message" == t.kind ? e.findMessage(t.typeName) : e.findEnum(t.typeName);
    return (0, n.assert)(s, `${t.toString()}" for ${r.toString()} not found`), s;
}
exports.createRegistryFromDescriptors = function(t, e = !0) {
    const r = t instanceof Uint8Array || (0, A.isMessage)(t, h.FileDescriptorSet) ? (0, g.createDescriptorSet)(t) : t, n = new Map, a = new Map, u = new Map, c = new Map, l = {};
    if (e) {
        for (const t of _)a.set(t.typeName, t);
        for (const t of y)n.set(t.typeName, t);
    }
    return {
        findEnum (t) {
            const e = n.get(t);
            if (e) return e;
            const a = r.enums.get(t);
            if (!a) return;
            const u = ("proto3" == a.file.syntax ? s.proto3 : i.proto2).makeEnumType(t, a.values.map((t)=>({
                    no: t.number,
                    name: t.name,
                    localName: (0, o.localName)(t)
                })), {});
            return n.set(t, u), u;
        },
        findMessage (t) {
            const e = a.get(t);
            if (e) return e;
            const n = r.messages.get(t);
            if (!n) return;
            const u = "proto3" == n.file.syntax ? s.proto3 : i.proto2, c = [], l = u.makeMessageType(t, ()=>c, {
                localName: (0, o.localName)(n)
            });
            a.set(t, l);
            for (const t of n.fields)c.push(w(t, this));
            return l;
        },
        findService (t) {
            const e = l[t];
            if (e) return e;
            const n = r.services.get(t);
            if (!n) return;
            const s = {};
            for (const t of n.methods){
                const e = S(t.input, this, t), r = S(t.output, this, t);
                s[(0, o.localName)(t)] = {
                    name: t.name,
                    I: e,
                    O: r,
                    kind: t.methodKind,
                    idempotency: t.idempotency
                };
            }
            return l[t] = {
                typeName: n.typeName,
                methods: s
            };
        },
        findExtensionFor (t, e) {
            var n;
            if (!r.messages.has(t)) return;
            let s = c.get(t);
            if (!s) {
                s = new Map, c.set(t, s);
                for (const e of r.extensions.values())e.extendee.typeName == t && s.set(e.number, e);
            }
            const i = null === (n = c.get(t)) || void 0 === n ? void 0 : n.get(e);
            return i ? this.findExtension(i.typeName) : void 0;
        },
        findExtension (t) {
            const e = u.get(t);
            if (e) return e;
            const n = r.extensions.get(t);
            if (!n) return;
            const o = S(n.extendee, this, n), a = ("proto3" == n.file.syntax ? s.proto3 : i.proto2).makeExtension(t, o, w(n, this));
            return u.set(t, a), a;
        }
    };
};
