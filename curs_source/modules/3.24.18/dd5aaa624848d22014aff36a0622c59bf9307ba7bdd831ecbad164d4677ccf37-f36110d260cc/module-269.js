Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistryFromDescriptors = void 0;
const r = require("./module-98.js"), o = require("./module-599.js"), a = require("./module-291.js"), s = require("./module-822.js"), i = require("./module-907.js"), l = require("./module-574.js"), u = require("./module-245.js"), c = require("./module-668.js"), m = require("./module-970.js"), p = require("./module-814.js"), d = require("./module-609.js"), f = require("./module-21.js"), T = require("./module-374.js"), g = require("./module-101.js"), E = require("./module-706.js"), y = [
    u.Any,
    l.Duration,
    c.Empty,
    m.FieldMask,
    p.Struct,
    p.Value,
    p.ListValue,
    i.Timestamp,
    l.Duration,
    f.DoubleValue,
    f.FloatValue,
    f.Int64Value,
    f.Int32Value,
    f.UInt32Value,
    f.UInt64Value,
    f.BoolValue,
    f.StringValue,
    f.BytesValue
], h = [
    (0, d.getEnumType)(p.NullValue)
];
function N(e, t) {
    var n;
    const o = {
        kind: e.fieldKind,
        no: e.number,
        name: e.name,
        jsonName: e.jsonName,
        delimited: e.proto.type == T.FieldDescriptorProto_Type.GROUP,
        repeated: e.repeated,
        packed: e.packed,
        oneof: null === (n = e.oneof) || void 0 === n ? void 0 : n.name,
        opt: e.optional,
        req: e.proto.label === T.FieldDescriptorProto_Label.REQUIRED
    };
    switch(e.fieldKind){
        case "map":
            {
                let n;
                switch((0, r.assert)("field" == e.kind), e.mapValue.kind){
                    case "scalar":
                        n = e.mapValue.scalar;
                        break;
                    case "enum":
                        n = _(e.mapValue.enum, t, e);
                        break;
                    case "message":
                        n = _(e.mapValue.message, t, e);
                }
                o.K = e.mapKey, o.V = {
                    kind: e.mapValue.kind,
                    T: n
                };
                break;
            }
        case "message":
            o.T = _(e.message, t, e);
            break;
        case "enum":
            o.T = _(e.enum, t, e), o.default = e.getDefaultValue();
            break;
        case "scalar":
            o.L = e.longType, o.T = e.scalar, o.default = e.getDefaultValue();
    }
    return o;
}
function _(e, t, n) {
    const o = "message" == e.kind ? t.findMessage(e.typeName) : t.findEnum(e.typeName);
    return (0, r.assert)(o, `${e.toString()}" for ${n.toString()} not found`), o;
}
exports.createRegistryFromDescriptors = function(e, t = !0) {
    const n = e instanceof Uint8Array || (0, E.isMessage)(e, T.FileDescriptorSet) ? (0, g.createDescriptorSet)(e) : e, r = new Map, i = new Map, l = new Map, u = new Map, c = {};
    if (t) {
        for (const e of y)i.set(e.typeName, e);
        for (const e of h)r.set(e.typeName, e);
    }
    return {
        findEnum (e) {
            const t = r.get(e);
            if (t) return t;
            const i = n.enums.get(e);
            if (!i) return;
            const l = ("proto3" == i.file.syntax ? o.proto3 : a.proto2).makeEnumType(e, i.values.map((e)=>({
                    no: e.number,
                    name: e.name,
                    localName: (0, s.localName)(e)
                })), {});
            return r.set(e, l), l;
        },
        findMessage (e) {
            const t = i.get(e);
            if (t) return t;
            const r = n.messages.get(e);
            if (!r) return;
            const l = "proto3" == r.file.syntax ? o.proto3 : a.proto2, u = [], c = l.makeMessageType(e, ()=>u, {
                localName: (0, s.localName)(r)
            });
            i.set(e, c);
            for (const e of r.fields)u.push(N(e, this));
            return c;
        },
        findService (e) {
            const t = c[e];
            if (t) return t;
            const r = n.services.get(e);
            if (!r) return;
            const o = {};
            for (const e of r.methods){
                const t = _(e.input, this, e), n = _(e.output, this, e);
                o[(0, s.localName)(e)] = {
                    name: e.name,
                    I: t,
                    O: n,
                    kind: e.methodKind,
                    idempotency: e.idempotency
                };
            }
            return c[e] = {
                typeName: r.typeName,
                methods: o
            };
        },
        findExtensionFor (e, t) {
            var r;
            if (!n.messages.has(e)) return;
            let o = u.get(e);
            if (!o) {
                o = new Map, u.set(e, o);
                for (const t of n.extensions.values())t.extendee.typeName == e && o.set(t.number, t);
            }
            const a = null === (r = u.get(e)) || void 0 === r ? void 0 : r.get(t);
            return a ? this.findExtension(a.typeName) : void 0;
        },
        findExtension (e) {
            const t = l.get(e);
            if (t) return t;
            const r = n.extensions.get(e);
            if (!r) return;
            const s = _(r.extendee, this, r), i = ("proto3" == r.file.syntax ? o.proto3 : a.proto2).makeExtension(e, s, N(r, this));
            return l.set(e, i), i;
        }
    };
};
