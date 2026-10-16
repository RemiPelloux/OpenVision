"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const n = require("./module-3098.js"), o = require("./module-7599.js"), s = require("./module-3672.js"), i = require("./module-5822.js"), a = require("./module-7907.js"), c = require("./module-1193.js"), u = require("./module-8245.js"), l = require("./module-7668.js"), d = require("./module-970.js"), p = require("./module-8814.js"), f = require("./module-609.js"), h = require("./module-8021.js"), m = require("./module-7374.js"), g = require("./module-1101.js"), y = require("./module-2706.js"), _ = [
    u.Any,
    c.Duration,
    l.Empty,
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
    (0, f.getEnumType)(p.NullValue)
];
function w(e, t) {
    var r;
    const o = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == m.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (r = e.oneof) || void 0 === r ? void 0 : r.name,
        opt: e.optional,
        req: e.proto.label === m.FieldDescriptorProto_Label.REQUIRED
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
                        r = b(e.mapValue.enum, t, e);
                        break;
                    case "message":
                        r = b(e.mapValue.message, t, e);
                }
                o.K = e.mapKey, o.V = {
                    kind: e.mapValue.kind,
                    T: r
                };
                break;
            }
        case "message":
            o.T = b(e.message, t, e);
            break;
        case "enum":
            o.T = b(e.enum, t, e), o.default = e.getDefaultValue();
            break;
        case "scalar":
            o.L = e.longType, o.T = e.scalar, o.default = e.getDefaultValue();
    }
    return o;
}
function b(e, t, r) {
    const o = "message" == e.kind ? t.findMessage(e.typeName) : t.findEnum(e.typeName);
    return (0, n.assert)(o, `${e.toString()}" for ${r.toString()} not found`), o;
}
exports.createRegistryFromDescriptors = function(e, t = !0) {
    const r = e instanceof Uint8Array || (0, y.isMessage)(e, m.FileDescriptorSet) ? (0, g.createDescriptorSet)(e) : e, n = new Map, a = new Map, c = new Map, u = new Map, l = {};
    if (t) {
        for (const e of _)a.set(e.typeName, e);
        for (const e of v)n.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const t = n.get(e);
            if (t) return t;
            const a = r.enums.get(e);
            if (!a) return;
            const c = ("proto3" == a.file.syntax ? o.proto3 : s.proto2).makeEnumType(e, a.values.map((e)=>({
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
            const c = "proto3" == n.file.syntax ? o.proto3 : s.proto2, u = [], l = c.makeMessageType(e, ()=>u, {
                localName: (0, i.localName)(n)
            });
            a.set(e, l);
            for (const e of n.fields)u.push(w(e, this));
            return l;
        },
        findService (e) {
            const t = l[e];
            if (t) return t;
            const n = r.services.get(e);
            if (!n) return;
            const o = {};
            for (const e of n.methods){
                const t = b(e.input, this, e), r = b(e.output, this, e);
                o[(0, i.localName)(e)] = {
                    name: e.name,
                    I: t,
                    O: r,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return l[e] = {
                typeName: n.typeName,
                methods: o
            };
        },
        findExtensionFor (e, t) {
            var n;
            if (!r.messages.has(e)) return;
            let o = u.get(e);
            if (!o) {
                o = new Map, u.set(e, o);
                for (const t of r.extensions.values())t.extendee.typeName == e && o.set(t.number, t);
            }
            const s = null === (n = u.get(e)) || void 0 === n ? void 0 : n.get(t);
            return s ? this.findExtension(s.typeName) : void 0;
        },
        findExtension (e) {
            const t = c.get(e);
            if (t) return t;
            const n = r.extensions.get(e);
            if (!n) return;
            const i = b(n.extendee, this, n), a = ("proto3" == n.file.syntax ? o.proto3 : s.proto2).makeExtension(e, i, w(n, this));
            return c.set(e, a), a;
        }
    };
};
