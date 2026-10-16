Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const o = require("./module-98.js"), s = require("./module-599.js"), t = require("./module-291.js"), r = require("./module-822.js"), i = require("./module-907.js"), m = require("./module-574.js"), l = require("./module-245.js"), d = require("./module-668.js"), c = require("./module-970.js"), T = require("./module-814.js"), _ = require("./module-609.js"), p = require("./module-21.js"), u = require("./module-374.js"), k = require("./module-101.js"), g = require("./module-706.js"), E = [
    l.Any,
    m.Duration,
    d.Empty,
    c.FieldMask,
    T.Struct,
    T.Value,
    T.ListValue,
    i.Timestamp,
    m.Duration,
    p.DoubleValue,
    p.FloatValue,
    p.Int64Value,
    p.Int32Value,
    p.UInt32Value,
    p.UInt64Value,
    p.BoolValue,
    p.StringValue,
    p.BytesValue
], f = [
    (0, _.getEnumType)(T.NullValue)
];
function N(e, a) {
    var n;
    const s = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == u.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (n = e.oneof) || void 0 === n ? void 0 : n.name,
        opt: e.optional,
        req: e.proto.label === u.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let n;
                switch((0, o.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        n = e.mapValue.scalar;
                        break;
                    case "enum":
                        n = v(e.mapValue.enum, a, e);
                        break;
                    case "message":
                        n = v(e.mapValue.message, a, e);
                }
                s.K = e.mapKey, s.V = {
                    kind: e.mapValue.kind,
                    T: n
                };
                break;
            }
        case "message":
            s.T = v(e.message, a, e);
            break;
        case "enum":
            s.T = v(e.enum, a, e), s.default = e.getDefaultValue();
            break;
        case "scalar":
            s.L = e.longType, s.T = e.scalar, s.default = e.getDefaultValue();
    }
    return s;
}
function v(e, a, n) {
    const s = "message" == e.kind ? a.findMessage(e.typeName) : a.findEnum(e.typeName);
    return (0, o.assert)(s, `${e.toString()}" for ${n.toString()} not found`), s;
}
exports.createRegistryFromDescriptors = function(e, a = !0) {
    const n = e instanceof Uint8Array || (0, g.isMessage)(e, u.FileDescriptorSet) ? (0, k.createDescriptorSet)(e) : e, o = new Map, i = new Map, m = new Map, l = new Map, d = {};
    if (a) {
        for (const e of E)i.set(e.typeName, e);
        for (const e of f)o.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const a = o.get(e);
            if (a) return a;
            const i = n.enums.get(e);
            if (!i) return;
            const m = ("proto3" == i.file.syntax ? s.proto3 : t.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, r.localName)(e)
                })), {});
            return o.set(e, m), m;
        },
        findMessage (e) {
            const a = i.get(e);
            if (a) return a;
            const o = n.messages.get(e);
            if (!o) return;
            const m = "proto3" == o.file.syntax ? s.proto3 : t.proto2, l = [], d = m.makeMessageType(e, ()=>l, {
                localName: (0, r.localName)(o)
            });
            i.set(e, d);
            for (const e of o.fields)l.push(N(e, this));
            return d;
        },
        findService (e) {
            const a = d[e];
            if (a) return a;
            const o = n.services.get(e);
            if (!o) return;
            const s = {};
            for (const e of o.methods){
                const a = v(e.input, this, e), n = v(e.output, this, e);
                s[(0, r.localName)(e)] = {
                    name: e.name,
                    I: a,
                    O: n,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return d[e] = {
                typeName: o.typeName,
                methods: s
            };
        },
        findExtensionFor (e, a) {
            var o;
            if (!n.messages.has(e)) return;
            let s = l.get(e);
            if (!s) {
                s = new Map, l.set(e, s);
                for (const a of n.extensions.values())a.extendee.typeName == e && s.set(a.number, a);
            }
            const t = null === (o = l.get(e)) || void 0 === o ? void 0 : o.get(a);
            return t ? this.findExtension(t.typeName) : void 0;
        },
        findExtension (e) {
            const a = m.get(e);
            if (a) return a;
            const o = n.extensions.get(e);
            if (!o) return;
            const r = v(o.extendee, this, o), i = ("proto3" == o.file.syntax ? s.proto3 : t.proto2).makeExtension(e, r, N(o, this));
            return m.set(e, i), i;
        }
    };
};
