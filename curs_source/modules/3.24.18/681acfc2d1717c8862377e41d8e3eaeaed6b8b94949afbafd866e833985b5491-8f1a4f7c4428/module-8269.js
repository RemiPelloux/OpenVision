"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const n = require("./module-3098.js"), r = require("./module-7599.js"), o = require("./module-3672.js"), s = require("./module-5822.js"), i = require("./module-7907.js"), a = require("./module-1193.js"), c = require("./module-8245.js"), l = require("./module-7668.js"), u = require("./module-970.js"), g = require("./module-8814.js"), E = require("./module-609.js"), h = require("./module-8021.js"), d = require("./module-7374.js"), I = require("./module-1101.js"), B = require("./module-2706.js"), Q = [
    c.Any,
    a.Duration,
    l.Empty,
    u.FieldMask,
    g.Struct,
    g.Value,
    g.ListValue,
    i.Timestamp,
    a.Duration,
    h.DoubleValue,
    h.FloatValue,
    h.Int64Value,
    h.Int32Value,
    h.UInt32Value,
    h.UInt64Value,
    h.BoolValue,
    h.StringValue,
    h.BytesValue
], f = [
    (0, E.getEnumType)(g.NullValue)
];
function C(e, t) {
    var A;
    const r = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == d.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (A = e.oneof) || void 0 === A ? void 0 : A.name,
        opt: e.optional,
        req: e.proto.label === d.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let A;
                switch((0, n.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        A = e.mapValue.scalar;
                        break;
                    case "enum":
                        A = p(e.mapValue.enum, t, e);
                        break;
                    case "message":
                        A = p(e.mapValue.message, t, e);
                }
                r.K = e.mapKey, r.V = {
                    kind: e.mapValue.kind,
                    T: A
                };
                break;
            }
        case "message":
            r.T = p(e.message, t, e);
            break;
        case "enum":
            r.T = p(e.enum, t, e), r.default = e.getDefaultValue();
            break;
        case "scalar":
            r.L = e.longType, r.T = e.scalar, r.default = e.getDefaultValue();
    }
    return r;
}
function p(e, t, A) {
    const r = "message" == e.kind ? t.findMessage(e.typeName) : t.findEnum(e.typeName);
    return (0, n.assert)(r, `${e.toString()}" for ${A.toString()} not found`), r;
}
exports.createRegistryFromDescriptors = function(e, t = !0) {
    const A = e instanceof Uint8Array || (0, B.isMessage)(e, d.FileDescriptorSet) ? (0, I.createDescriptorSet)(e) : e, n = new Map, i = new Map, a = new Map, c = new Map, l = {};
    if (t) {
        for (const e of Q)i.set(e.typeName, e);
        for (const e of f)n.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const t = n.get(e);
            if (t) return t;
            const i = A.enums.get(e);
            if (!i) return;
            const a = ("proto3" == i.file.syntax ? r.proto3 : o.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, s.localName)(e)
                })), {});
            return n.set(e, a), a;
        },
        findMessage (e) {
            const t = i.get(e);
            if (t) return t;
            const n = A.messages.get(e);
            if (!n) return;
            const a = "proto3" == n.file.syntax ? r.proto3 : o.proto2, c = [], l = a.makeMessageType(e, ()=>c, {
                localName: (0, s.localName)(n)
            });
            i.set(e, l);
            for (const e of n.fields)c.push(C(e, this));
            return l;
        },
        findService (e) {
            const t = l[e];
            if (t) return t;
            const n = A.services.get(e);
            if (!n) return;
            const r = {};
            for (const e of n.methods){
                const t = p(e.input, this, e), A = p(e.output, this, e);
                r[(0, s.localName)(e)] = {
                    name: e.name,
                    I: t,
                    O: A,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return l[e] = {
                typeName: n.typeName,
                methods: r
            };
        },
        findExtensionFor (e, t) {
            var n;
            if (!A.messages.has(e)) return;
            let r = c.get(e);
            if (!r) {
                r = new Map, c.set(e, r);
                for (const t of A.extensions.values())t.extendee.typeName == e && r.set(t.number, t);
            }
            const o = null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(t);
            return o ? this.findExtension(o.typeName) : void 0;
        },
        findExtension (e) {
            const t = a.get(e);
            if (t) return t;
            const n = A.extensions.get(e);
            if (!n) return;
            const s = p(n.extendee, this, n), i = ("proto3" == n.file.syntax ? r.proto3 : o.proto2).makeExtension(e, s, C(n, this));
            return a.set(e, i), i;
        }
    };
};
