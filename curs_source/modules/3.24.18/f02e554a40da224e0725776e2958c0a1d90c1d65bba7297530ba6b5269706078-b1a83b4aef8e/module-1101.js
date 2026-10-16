"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const n = require("./module-7374.js"), s = require("./module-3098.js"), i = require("./module-2422.js"), o = require("./module-5822.js"), a = require("./module-1663.js"), u = require("./module-9301.js"), c = require("./module-3408.js"), l = require("./module-2706.js");
function m(t, e, r) {
    var n, i;
    (0, s.assert)(t.name, "invalid FileDescriptorProto: missing name");
    const o = Object.assign(Object.assign({
        kind: "file",
        proto: t,
        deprecated: null !== (i = null === (n = t.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== i && i
    }, w(t.syntax, t.edition)), {
        name: t.name.replace(/\.proto/, ""),
        dependencies: S(t, e),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return v(this.proto.sourceCodeInfo, [
                q.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return v(this.proto.sourceCodeInfo, [
                q.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var e;
            return r(null === (e = t.options) || void 0 === e ? void 0 : e.features);
        }
    });
    e.mapEntries.clear();
    for (const n of t.enumType)p(n, o, void 0, e, r);
    for (const n of t.messageType)h(n, o, void 0, e, r);
    for (const n of t.service)g(n, o, e, r);
    d(o, e, r);
    for (const t of e.mapEntries.values())f(t, e, r);
    for (const t of o.messages)f(t, e, r), d(t, e, r);
    e.mapEntries.clear(), e.files.push(o);
}
function d(t, e, r) {
    switch(t.kind){
        case "file":
            for (const n of t.proto.extension){
                const s = y(n, t, void 0, e, r);
                t.extensions.push(s), e.extensions.set(s.typeName, s);
            }
            break;
        case "message":
            for (const n of t.proto.extension){
                const s = y(n, t.file, t, e, r);
                t.nestedExtensions.push(s), e.extensions.set(s.typeName, s);
            }
            for (const n of t.nestedMessages)d(n, e, r);
    }
}
function f(t, e, r) {
    const n = t.proto.oneofDecl.map((e)=>(function(t, e, r) {
            return (0, s.assert)(t.name, "invalid OneofDescriptorProto: missing name"), {
                kind: "oneof",
                proto: t,
                deprecated: !1,
                parent: e,
                fields: [],
                name: t.name,
                toString () {
                    return `oneof ${e.typeName}.${this.name}`;
                },
                getComments () {
                    const t = [
                        ...this.parent.getComments().sourcePath,
                        q.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return v(e.file.proto.sourceCodeInfo, t);
                },
                getFeatures () {
                    var n;
                    return r(e.getFeatures(), null === (n = t.options) || void 0 === n ? void 0 : n.features);
                }
            };
        })(e, t, r)), i = new Set;
    for (const s of t.proto.field){
        const o = E(s, n), a = _(s, t.file, t, o, e, r);
        t.fields.push(a), void 0 === o ? t.members.push(a) : (o.fields.push(a), i.has(o) || (i.add(o), t.members.push(o)));
    }
    for (const e of n.filter((t)=>i.has(t)))t.oneofs.push(e);
    for (const n of t.nestedMessages)f(n, e, r);
}
function p(t, e, r, n, i) {
    var a, u, c;
    (0, s.assert)(t.name, "invalid EnumDescriptorProto: missing name");
    const l = {
        kind: "enum",
        proto: t,
        deprecated: null !== (u = null === (a = t.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== u && u,
        file: e,
        parent: r,
        name: t.name,
        typeName: J(t, r, e),
        values: [],
        sharedPrefix: (0, o.findEnumSharedPrefix)(t.name, t.value.map((t)=>{
            var e;
            return null !== (e = t.name) && void 0 !== e ? e : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const t = this.parent ? [
                ...this.parent.getComments().sourcePath,
                q.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                q.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return v(e.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var n, s;
            return i(null !== (n = null == r ? void 0 : r.getFeatures()) && void 0 !== n ? n : e.getFeatures(), null === (s = t.options) || void 0 === s ? void 0 : s.features);
        }
    };
    n.enums.set(l.typeName, l), t.value.forEach((t)=>{
        var r, n;
        (0, s.assert)(t.name, "invalid EnumValueDescriptorProto: missing name"), (0, s.assert)(void 0 !== t.number, "invalid EnumValueDescriptorProto: missing number"), l.values.push({
            kind: "enum_value",
            proto: t,
            deprecated: null !== (n = null === (r = t.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== n && n,
            parent: l,
            name: t.name,
            number: t.number,
            toString () {
                return `enum value ${l.typeName}.${this.name}`;
            },
            declarationString () {
                var t;
                let e = `${this.name} = ${this.number}`;
                return !0 === (null === (t = this.proto.options) || void 0 === t ? void 0 : t.deprecated) && (e += " [deprecated = true]"), e;
            },
            getComments () {
                const t = [
                    ...this.parent.getComments().sourcePath,
                    q.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return v(e.proto.sourceCodeInfo, t);
            },
            getFeatures () {
                var e;
                return i(l.getFeatures(), null === (e = t.options) || void 0 === e ? void 0 : e.features);
            }
        });
    }), (null !== (c = null == r ? void 0 : r.nestedEnums) && void 0 !== c ? c : e.enums).push(l);
}
function h(t, e, r, n, i) {
    var o, a, u, c;
    (0, s.assert)(t.name, "invalid DescriptorProto: missing name");
    const l = {
        kind: "message",
        proto: t,
        deprecated: null !== (a = null === (o = t.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== a && a,
        file: e,
        parent: r,
        name: t.name,
        typeName: J(t, r, e),
        fields: [],
        oneofs: [],
        members: [],
        nestedEnums: [],
        nestedMessages: [],
        nestedExtensions: [],
        toString () {
            return `message ${this.typeName}`;
        },
        getComments () {
            const t = this.parent ? [
                ...this.parent.getComments().sourcePath,
                q.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                q.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return v(e.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var n, s;
            return i(null !== (n = null == r ? void 0 : r.getFeatures()) && void 0 !== n ? n : e.getFeatures(), null === (s = t.options) || void 0 === s ? void 0 : s.features);
        }
    };
    !0 === (null === (u = t.options) || void 0 === u ? void 0 : u.mapEntry) ? n.mapEntries.set(l.typeName, l) : ((null !== (c = null == r ? void 0 : r.nestedMessages) && void 0 !== c ? c : e.messages).push(l), n.messages.set(l.typeName, l));
    for (const r of t.enumType)p(r, e, l, n, i);
    for (const r of t.nestedType)h(r, e, l, n, i);
}
function g(t, e, r, n) {
    var i, o;
    (0, s.assert)(t.name, "invalid ServiceDescriptorProto: missing name");
    const a = {
        kind: "service",
        proto: t,
        deprecated: null !== (o = null === (i = t.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== o && o,
        file: e,
        name: t.name,
        typeName: J(t, void 0, e),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const t = [
                q.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return v(e.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var r;
            return n(e.getFeatures(), null === (r = t.options) || void 0 === r ? void 0 : r.features);
        }
    };
    e.services.push(a), r.services.set(a.typeName, a);
    for (const e of t.method)a.methods.push(A(e, a, r, n));
}
function A(t, e, r, o) {
    var a, u, c;
    let l, m;
    switch((0, s.assert)(t.name, "invalid MethodDescriptorProto: missing name"), (0, s.assert)(t.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s.assert)(t.outputType, "invalid MethodDescriptorProto: missing output_type"), l = !0 === t.clientStreaming && !0 === t.serverStreaming ? i.MethodKind.BiDiStreaming : !0 === t.clientStreaming ? i.MethodKind.ClientStreaming : !0 === t.serverStreaming ? i.MethodKind.ServerStreaming : i.MethodKind.Unary, null === (a = t.options) || void 0 === a ? void 0 : a.idempotencyLevel){
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            m = i.MethodIdempotency.Idempotent;
            break;
        case n.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            m = i.MethodIdempotency.NoSideEffects;
            break;
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            m = void 0;
    }
    const d = r.messages.get(B(t.inputType)), f = r.messages.get(B(t.outputType));
    (0, s.assert)(d, `invalid MethodDescriptorProto: input_type ${t.inputType} not found`), (0, s.assert)(f, `invalid MethodDescriptorProto: output_type ${t.inputType} not found`);
    const p = t.name;
    return {
        kind: "rpc",
        proto: t,
        deprecated: null !== (c = null === (u = t.options) || void 0 === u ? void 0 : u.deprecated) && void 0 !== c && c,
        parent: e,
        name: p,
        methodKind: l,
        input: d,
        output: f,
        idempotency: m,
        toString: ()=>`rpc ${e.typeName}.${p}`,
        getComments () {
            const t = [
                ...this.parent.getComments().sourcePath,
                q.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return v(e.file.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var r;
            return o(e.getFeatures(), null === (r = t.options) || void 0 === r ? void 0 : r.features);
        }
    };
}
function _(t, e, r, i, a, u) {
    var l, m, d;
    (0, s.assert)(t.name, "invalid FieldDescriptorProto: missing name"), (0, s.assert)(t.number, "invalid FieldDescriptorProto: missing number"), (0, s.assert)(t.type, "invalid FieldDescriptorProto: missing type");
    const f = {
        proto: t,
        deprecated: null !== (m = null === (l = t.options) || void 0 === l ? void 0 : l.deprecated) && void 0 !== m && m,
        name: t.name,
        number: t.number,
        parent: r,
        oneof: i,
        optional: I(t, e.syntax),
        packedByDefault: C(t, u),
        packed: b(e, r, t, u),
        jsonName: t.jsonName === (0, o.fieldJsonName)(t.name) ? void 0 : t.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: R,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const t = [
                ...this.parent.getComments().sourcePath,
                q.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return v(e.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var e;
            return u(r.getFeatures(), null === (e = t.options) || void 0 === e ? void 0 : e.features);
        }
    }, p = t.label === n.FieldDescriptorProto_Label.REPEATED;
    switch(t.type){
        case n.FieldDescriptorProto_Type.MESSAGE:
        case n.FieldDescriptorProto_Type.GROUP:
            {
                (0, s.assert)(t.typeName, "invalid FieldDescriptorProto: missing type_name");
                const e = a.mapEntries.get(B(t.typeName));
                if (void 0 !== e) return (0, s.assert)(p, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, f), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(t) {
                    var e, r;
                    (0, s.assert)(null === (e = t.proto.options) || void 0 === e ? void 0 : e.mapEntry, `invalid DescriptorProto: expected ${t.toString()} to be a map entry`), (0, s.assert)(2 === t.fields.length, `invalid DescriptorProto: map entry ${t.toString()} has ${t.fields.length} fields`);
                    const n = t.fields.find((t)=>1 === t.proto.number);
                    (0, s.assert)(n, `invalid DescriptorProto: map entry ${t.toString()} is missing key field`);
                    const i = n.scalar;
                    (0, s.assert)(void 0 !== i && i !== c.ScalarType.BYTES && i !== c.ScalarType.FLOAT && i !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${t.toString()} has unexpected key type ${null !== (r = n.proto.type) && void 0 !== r ? r : -1}`);
                    const o = t.fields.find((t)=>2 === t.proto.number);
                    switch((0, s.assert)(o, `invalid DescriptorProto: map entry ${t.toString()} is missing value field`), o.fieldKind){
                        case "scalar":
                            return {
                                mapKey: i,
                                mapValue: Object.assign(Object.assign({}, o), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: i,
                                mapValue: Object.assign(Object.assign({}, o), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: i,
                                mapValue: Object.assign(Object.assign({}, o), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(e));
                const r = a.messages.get(B(t.typeName));
                return (0, s.assert)(void 0 !== r, `invalid FieldDescriptorProto: type_name ${t.typeName} not found`), Object.assign(Object.assign({}, f), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: p,
                    message: r
                });
            }
        case n.FieldDescriptorProto_Type.ENUM:
            {
                (0, s.assert)(t.typeName, "invalid FieldDescriptorProto: missing type_name");
                const e = a.enums.get(B(t.typeName));
                return (0, s.assert)(void 0 !== e, `invalid FieldDescriptorProto: type_name ${t.typeName} not found`), Object.assign(Object.assign({}, f), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: P,
                    repeated: p,
                    enum: e
                });
            }
        default:
            {
                const e = k[t.type];
                return (0, s.assert)(e, `invalid FieldDescriptorProto: unknown type ${t.type}`), Object.assign(Object.assign({}, f), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: P,
                    repeated: p,
                    scalar: e,
                    longType: (null === (d = t.options) || void 0 === d ? void 0 : d.jstype) == n.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT
                });
            }
    }
}
function y(t, e, r, n, i) {
    (0, s.assert)(t.extendee, "invalid FieldDescriptorProto: missing extendee");
    const o = _(t, e, null, void 0, n, i), a = n.messages.get(B(t.extendee));
    return (0, s.assert)(a, `invalid FieldDescriptorProto: extendee ${t.extendee} not found`), Object.assign(Object.assign({}, o), {
        kind: "extension",
        typeName: J(t, r, e),
        parent: r,
        file: e,
        extendee: a,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const r = this.parent ? [
                ...this.parent.getComments().sourcePath,
                q.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(t)
            ] : [
                q.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(t)
            ];
            return v(e.proto.sourceCodeInfo, r);
        },
        getFeatures () {
            var n;
            return i((null != r ? r : e).getFeatures(), null === (n = t.options) || void 0 === n ? void 0 : n.features);
        }
    });
}
function w(t, e) {
    let r, s;
    switch(t){
        case void 0:
        case "proto2":
            s = "proto2", r = n.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3", r = n.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(s = "editions", e){
                case void 0:
                case n.Edition.EDITION_1_TEST_ONLY:
                case n.Edition.EDITION_2_TEST_ONLY:
                case n.Edition.EDITION_99997_TEST_ONLY:
                case n.Edition.EDITION_99998_TEST_ONLY:
                case n.Edition.EDITION_99999_TEST_ONLY:
                case n.Edition.EDITION_UNKNOWN:
                    r = n.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    r = e;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${t}`);
    }
    if ("editions" === t && e === n.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${t} cannot have edition ${String(e)}`);
    return {
        syntax: s,
        edition: r
    };
}
function S(t, e) {
    return t.dependency.map((t)=>{
        const r = e.files.find((e)=>e.proto.name === t);
        return (0, s.assert)(r), r;
    });
}
function J(t, e, r) {
    let n;
    return (0, s.assert)(t.name, `invalid ${t.getType().typeName}: missing name`), n = e ? `${e.typeName}.${t.name}` : void 0 !== r.proto.package ? `${r.proto.package}.${t.name}` : `${t.name}`, n;
}
function B(t) {
    return t.startsWith(".") ? t.substring(1) : t;
}
function E(t, e) {
    var r;
    const n = t.oneofIndex;
    if (void 0 === n) return;
    let i;
    return !0 !== t.proto3Optional && (i = e[n], (0, s.assert)(i, `invalid FieldDescriptorProto: oneof #${n} for field #${null !== (r = t.number) && void 0 !== r ? r : -1} not found`)), i;
}
function I(t, e) {
    switch(e){
        case "proto2":
            return void 0 === t.oneofIndex && t.label === n.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === t.proto3Optional;
        case "editions":
            return !1;
    }
}
function C(t, e) {
    const { repeatedFieldEncoding: r } = e();
    if (r != n.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(t.type){
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function b(t, e, r, s) {
    var i, o, a, u, c, l;
    switch(r.type){
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(t.edition){
                case n.Edition.EDITION_PROTO2:
                    return null !== (o = null === (i = r.options) || void 0 === i ? void 0 : i.packed) && void 0 !== o && o;
                case n.Edition.EDITION_PROTO3:
                    return null === (u = null === (a = r.options) || void 0 === a ? void 0 : a.packed) || void 0 === u || u;
                default:
                    {
                        const { repeatedFieldEncoding: i } = s(null !== (c = null == e ? void 0 : e.getFeatures()) && void 0 !== c ? c : t.getFeatures(), null === (l = r.options) || void 0 === l ? void 0 : l.features);
                        return i == n.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(t, e) {
    var r;
    const s = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, i = (0, l.isMessage)(t, n.FileDescriptorSet) ? t.file : t instanceof Uint8Array ? n.FileDescriptorSet.fromBinary(t).file : t, o = new Map;
    for (const t of i){
        const n = null !== (r = t.edition) && void 0 !== r ? r : w(t.syntax, t.edition).edition;
        let i = o.get(n);
        void 0 === i && (i = (0, u.createFeatureResolver)(n, null == e ? void 0 : e.featureSetDefaults, null == e ? void 0 : e.serializationOptions), o.set(n, i)), m(t, s, i);
    }
    return s;
};
const k = {
    [n.FieldDescriptorProto_Type.DOUBLE]: c.ScalarType.DOUBLE,
    [n.FieldDescriptorProto_Type.FLOAT]: c.ScalarType.FLOAT,
    [n.FieldDescriptorProto_Type.INT64]: c.ScalarType.INT64,
    [n.FieldDescriptorProto_Type.UINT64]: c.ScalarType.UINT64,
    [n.FieldDescriptorProto_Type.INT32]: c.ScalarType.INT32,
    [n.FieldDescriptorProto_Type.FIXED64]: c.ScalarType.FIXED64,
    [n.FieldDescriptorProto_Type.FIXED32]: c.ScalarType.FIXED32,
    [n.FieldDescriptorProto_Type.BOOL]: c.ScalarType.BOOL,
    [n.FieldDescriptorProto_Type.STRING]: c.ScalarType.STRING,
    [n.FieldDescriptorProto_Type.GROUP]: void 0,
    [n.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [n.FieldDescriptorProto_Type.BYTES]: c.ScalarType.BYTES,
    [n.FieldDescriptorProto_Type.UINT32]: c.ScalarType.UINT32,
    [n.FieldDescriptorProto_Type.ENUM]: void 0,
    [n.FieldDescriptorProto_Type.SFIXED32]: c.ScalarType.SFIXED32,
    [n.FieldDescriptorProto_Type.SFIXED64]: c.ScalarType.SFIXED64,
    [n.FieldDescriptorProto_Type.SINT32]: c.ScalarType.SINT32,
    [n.FieldDescriptorProto_Type.SINT64]: c.ScalarType.SINT64
};
function v(t, e) {
    if (!t) return {
        leadingDetached: [],
        sourcePath: e
    };
    for (const r of t.location)if (r.path.length === e.length && !r.path.some((t, r)=>e[r] !== t)) return {
        leadingDetached: r.leadingDetachedComments,
        leading: r.leadingComments,
        trailing: r.trailingComments,
        sourcePath: e
    };
    return {
        leadingDetached: [],
        sourcePath: e
    };
}
var q;
function R() {
    var t, e, r;
    const s = [];
    this.repeated && s.push("repeated"), this.optional && s.push("optional");
    let i;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n.FieldDescriptorProto_Label.REQUIRED && s.push("required"), this.fieldKind){
        case "scalar":
            i = c.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            i = this.enum.typeName;
            break;
        case "message":
            i = this.message.typeName;
            break;
        case "map":
            {
                const t = c.ScalarType[this.mapKey].toLowerCase();
                let e;
                switch(this.mapValue.kind){
                    case "scalar":
                        e = c.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        e = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        e = this.mapValue.message.typeName;
                }
                i = `map<${t}, ${e}>`;
                break;
            }
    }
    s.push(`${i} ${this.name} = ${this.number}`);
    const o = [];
    void 0 !== (null === (t = this.proto.options) || void 0 === t ? void 0 : t.packed) && o.push(`packed = ${this.proto.options.packed.toString()}`);
    let a = this.proto.defaultValue;
    return void 0 !== a && (this.proto.type != n.FieldDescriptorProto_Type.BYTES && this.proto.type != n.FieldDescriptorProto_Type.STRING || (a = '"' + a.replace('"', '\\"') + '"'), o.push(`default = ${a}`)), void 0 !== this.jsonName && o.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.jstype) && o.push(`jstype = ${n.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (r = this.proto.options) || void 0 === r ? void 0 : r.deprecated) && o.push("deprecated = true"), o.length > 0 && s.push("[" + o.join(", ") + "]"), s.join(" ");
}
function P() {
    const t = this.proto.defaultValue;
    if (void 0 !== t) switch(this.fieldKind){
        case "enum":
            return (0, a.parseTextFormatEnumValue)(this.enum, t);
        case "scalar":
            return (0, a.parseTextFormatScalarValue)(this.scalar, t);
        default:
            return;
    }
}
!function(t) {
    t[t.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", t[t.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", t[t.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", t[t.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", t[t.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", t[t.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", t[t.DescriptorProto_Field = 2] = "DescriptorProto_Field", t[t.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", t[t.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", t[t.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", t[t.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", t[t.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", t[t.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
}(q || (q = {}));
