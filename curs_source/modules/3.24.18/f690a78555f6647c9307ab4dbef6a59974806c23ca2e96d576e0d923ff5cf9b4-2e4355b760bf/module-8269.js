"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const n = require("./module-3098.js"), r = require("./module-7599.js"), o = require("./module-3672.js"), s = require("./module-5822.js"), a = require("./module-7907.js"), i = require("./module-1193.js"), c = require("./module-8245.js"), l = require("./module-7668.js"), g = require("./module-970.js"), E = require("./module-8814.js"), u = require("./module-609.js"), d = require("./module-8021.js"), I = require("./module-7374.js"), h = require("./module-1101.js"), Q = require("./module-2706.js"), m = [
    c.Any,
    i.Duration,
    l.Empty,
    g.FieldMask,
    E.Struct,
    E.Value,
    E.ListValue,
    a.Timestamp,
    i.Duration,
    d.DoubleValue,
    d.FloatValue,
    d.Int64Value,
    d.Int32Value,
    d.UInt32Value,
    d.UInt64Value,
    d.BoolValue,
    d.StringValue,
    d.BytesValue
], C = [
    (0, u.getEnumType)(E.NullValue)
];
function B(e, A) {
    var t;
    const r = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == I.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (t = e.oneof) || void 0 === t ? void 0 : t.name,
        opt: e.optional,
        req: e.proto.label === I.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let t;
                switch((0, n.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        t = e.mapValue.scalar;
                        break;
                    case "enum":
                        t = p(e.mapValue.enum, A, e);
                        break;
                    case "message":
                        t = p(e.mapValue.message, A, e);
                }
                r.K = e.mapKey, r.V = {
                    kind: e.mapValue.kind,
                    T: t
                };
                break;
            }
        case "message":
            r.T = p(e.message, A, e);
            break;
        case "enum":
            r.T = p(e.enum, A, e), r.default = e.getDefaultValue();
            break;
        case "scalar":
            r.L = e.longType, r.T = e.scalar, r.default = e.getDefaultValue();
    }
    return r;
}
function p(e, A, t) {
    const r = "message" == e.kind ? A.findMessage(e.typeName) : A.findEnum(e.typeName);
    return (0, n.assert)(r, `${e.toString()}" for ${t.toString()} not found`), r;
}
exports.createRegistryFromDescriptors = function(e, A = !0) {
    const t = e instanceof Uint8Array || (0, Q.isMessage)(e, I.FileDescriptorSet) ? (0, h.createDescriptorSet)(e) : e, n = new Map, a = new Map, i = new Map, c = new Map, l = {};
    if (A) {
        for (const e of m)a.set(e.typeName, e);
        for (const e of C)n.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const A = n.get(e);
            if (A) return A;
            const a = t.enums.get(e);
            if (!a) return;
            const i = ("proto3" == a.file.syntax ? r.proto3 : o.proto2).makeEnumType(e, a.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, s.localName)(e)
                })), {});
            return n.set(e, i), i;
        },
        findMessage (e) {
            const A = a.get(e);
            if (A) return A;
            const n = t.messages.get(e);
            if (!n) return;
            const i = "proto3" == n.file.syntax ? r.proto3 : o.proto2, c = [], l = i.makeMessageType(e, ()=>c, {
                localName: (0, s.localName)(n)
            });
            a.set(e, l);
            for (const e of n.fields)c.push(B(e, this));
            return l;
        },
        findService (e) {
            const A = l[e];
            if (A) return A;
            const n = t.services.get(e);
            if (!n) return;
            const r = {};
            for (const e of n.methods){
                const A = p(e.input, this, e), t = p(e.output, this, e);
                r[(0, s.localName)(e)] = {
                    name: e.name,
                    I: A,
                    O: t,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return l[e] = {
                typeName: n.typeName,
                methods: r
            };
        },
        findExtensionFor (e, A) {
            var n;
            if (!t.messages.has(e)) return;
            let r = c.get(e);
            if (!r) {
                r = new Map, c.set(e, r);
                for (const A of t.extensions.values())A.extendee.typeName == e && r.set(A.number, A);
            }
            const o = null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(A);
            return o ? this.findExtension(o.typeName) : void 0;
        },
        findExtension (e) {
            const A = i.get(e);
            if (A) return A;
            const n = t.extensions.get(e);
            if (!n) return;
            const s = p(n.extendee, this, n), a = ("proto3" == n.file.syntax ? r.proto3 : o.proto2).makeExtension(e, s, B(n, this));
            return i.set(e, a), a;
        }
    };
};
