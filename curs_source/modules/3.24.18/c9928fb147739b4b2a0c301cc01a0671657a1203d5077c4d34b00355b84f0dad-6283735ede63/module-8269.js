Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const s = require("./module-3098.js"), o = require("./module-7599.js"), r = require("./module-3672.js"), t = require("./module-5822.js"), i = require("./module-7907.js"), m = require("./module-1193.js"), l = require("./module-8245.js"), d = require("./module-7668.js"), c = require("./module-970.js"), T = require("./module-8814.js"), p = require("./module-609.js"), _ = require("./module-8021.js"), k = require("./module-7374.js"), u = require("./module-1101.js"), g = require("./module-2706.js"), E = [
    l.Any,
    m.Duration,
    d.Empty,
    c.FieldMask,
    T.Struct,
    T.Value,
    T.ListValue,
    i.Timestamp,
    m.Duration,
    _.DoubleValue,
    _.FloatValue,
    _.Int64Value,
    _.Int32Value,
    _.UInt32Value,
    _.UInt64Value,
    _.BoolValue,
    _.StringValue,
    _.BytesValue
], v = [
    (0, p.getEnumType)(T.NullValue)
];
function y(e, a) {
    var n;
    const o = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == k.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (n = e.oneof) || void 0 === n ? void 0 : n.name,
        opt: e.optional,
        req: e.proto.label === k.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let n;
                switch((0, s.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        n = e.mapValue.scalar;
                        break;
                    case "enum":
                        n = S(e.mapValue.enum, a, e);
                        break;
                    case "message":
                        n = S(e.mapValue.message, a, e);
                }
                o.K = e.mapKey, o.V = {
                    kind: e.mapValue.kind,
                    T: n
                };
                break;
            }
        case "message":
            o.T = S(e.message, a, e);
            break;
        case "enum":
            o.T = S(e.enum, a, e), o.default = e.getDefaultValue();
            break;
        case "scalar":
            o.L = e.longType, o.T = e.scalar, o.default = e.getDefaultValue();
    }
    return o;
}
function S(e, a, n) {
    const o = "message" == e.kind ? a.findMessage(e.typeName) : a.findEnum(e.typeName);
    return (0, s.assert)(o, `${e.toString()}" for ${n.toString()} not found`), o;
}
exports.createRegistryFromDescriptors = function(e, a = !0) {
    const n = e instanceof Uint8Array || (0, g.isMessage)(e, k.FileDescriptorSet) ? (0, u.createDescriptorSet)(e) : e, s = new Map, i = new Map, m = new Map, l = new Map, d = {};
    if (a) {
        for (const e of E)i.set(e.typeName, e);
        for (const e of v)s.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const a = s.get(e);
            if (a) return a;
            const i = n.enums.get(e);
            if (!i) return;
            const m = ("proto3" == i.file.syntax ? o.proto3 : r.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, t.localName)(e)
                })), {});
            return s.set(e, m), m;
        },
        findMessage (e) {
            const a = i.get(e);
            if (a) return a;
            const s = n.messages.get(e);
            if (!s) return;
            const m = "proto3" == s.file.syntax ? o.proto3 : r.proto2, l = [], d = m.makeMessageType(e, ()=>l, {
                localName: (0, t.localName)(s)
            });
            i.set(e, d);
            for (const e of s.fields)l.push(y(e, this));
            return d;
        },
        findService (e) {
            const a = d[e];
            if (a) return a;
            const s = n.services.get(e);
            if (!s) return;
            const o = {};
            for (const e of s.methods){
                const a = S(e.input, this, e), n = S(e.output, this, e);
                o[(0, t.localName)(e)] = {
                    name: e.name,
                    I: a,
                    O: n,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return d[e] = {
                typeName: s.typeName,
                methods: o
            };
        },
        findExtensionFor (e, a) {
            var s;
            if (!n.messages.has(e)) return;
            let o = l.get(e);
            if (!o) {
                o = new Map, l.set(e, o);
                for (const a of n.extensions.values())a.extendee.typeName == e && o.set(a.number, a);
            }
            const r = null === (s = l.get(e)) || void 0 === s ? void 0 : s.get(a);
            return r ? this.findExtension(r.typeName) : void 0;
        },
        findExtension (e) {
            const a = m.get(e);
            if (a) return a;
            const s = n.extensions.get(e);
            if (!s) return;
            const t = S(s.extendee, this, s), i = ("proto3" == s.file.syntax ? o.proto3 : r.proto2).makeExtension(e, t, y(s, this));
            return m.set(e, i), i;
        }
    };
};
