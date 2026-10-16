"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const t = require("./module-7374.js"), s = require("./module-3098.js"), o = require("./module-2422.js"), r = require("./module-5822.js"), i = require("./module-1663.js"), A = require("./module-9301.js"), l = require("./module-3408.js"), c = require("./module-2706.js");
function m(e, n, a) {
    var t, o;
    (0, s.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const r = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (o = null === (t = e.options) || void 0 === t ? void 0 : t.deprecated) && void 0 !== o && o
    }, h(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: _(e, n),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return v(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return v(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var n;
            return a(null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    });
    n.mapEntries.clear();
    for (const t of e.enumType)u(t, r, void 0, n, a);
    for (const t of e.messageType)E(t, r, void 0, n, a);
    for (const t of e.service)p(t, r, n, a);
    d(r, n, a);
    for (const e of n.mapEntries.values())g(e, n, a);
    for (const e of r.messages)g(e, n, a), d(e, n, a);
    n.mapEntries.clear(), n.files.push(r);
}
function d(e, n, a) {
    switch(e.kind){
        case "file":
            for (const t of e.proto.extension){
                const s = I(t, e, void 0, n, a);
                e.extensions.push(s), n.extensions.set(s.typeName, s);
            }
            break;
        case "message":
            for (const t of e.proto.extension){
                const s = I(t, e.file, e, n, a);
                e.nestedExtensions.push(s), n.extensions.set(s.typeName, s);
            }
            for (const t of e.nestedMessages)d(t, n, a);
    }
}
function g(e, n, a) {
    const t = e.proto.oneofDecl.map((n)=>(function(e, n, a) {
            return (0, s.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
                kind: "oneof",
                proto: e,
                deprecated: !1,
                parent: n,
                fields: [],
                name: e.name,
                toString () {
                    return `oneof ${n.typeName}.${this.name}`;
                },
                getComments () {
                    const e = [
                        ...this.parent.getComments().sourcePath,
                        S.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return v(n.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var t;
                    return a(n.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
                }
            };
        })(n, e, a)), o = new Set;
    for (const s of e.proto.field){
        const r = B(s, t), i = k(s, e.file, e, r, n, a);
        e.fields.push(i), void 0 === r ? e.members.push(i) : (r.fields.push(i), o.has(r) || (o.add(r), e.members.push(r)));
    }
    for (const n of t.filter((e)=>o.has(e)))e.oneofs.push(n);
    for (const t of e.nestedMessages)g(t, n, a);
}
function u(e, n, a, t, o) {
    var i, A, l;
    (0, s.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const c = {
        kind: "enum",
        proto: e,
        deprecated: null !== (A = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== A && A,
        file: n,
        parent: a,
        name: e.name,
        typeName: C(e, a, n),
        values: [],
        sharedPrefix: (0, r.findEnumSharedPrefix)(e.name, e.value.map((e)=>{
            var n;
            return null !== (n = e.name) && void 0 !== n ? n : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const e = this.parent ? [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                S.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return v(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t, s;
            return o(null !== (t = null == a ? void 0 : a.getFeatures()) && void 0 !== t ? t : n.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    t.enums.set(c.typeName, c), e.value.forEach((e)=>{
        var a, t;
        (0, s.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, s.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), c.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (t = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== t && t,
            parent: c,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${c.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let n = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (n += " [deprecated = true]"), n;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    S.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return v(n.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var n;
                return o(c.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
            }
        });
    }), (null !== (l = null == a ? void 0 : a.nestedEnums) && void 0 !== l ? l : n.enums).push(c);
}
function E(e, n, a, t, o) {
    var r, i, A, l;
    (0, s.assert)(e.name, "invalid DescriptorProto: missing name");
    const c = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== i && i,
        file: n,
        parent: a,
        name: e.name,
        typeName: C(e, a, n),
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
            const e = this.parent ? [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                S.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return v(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t, s;
            return o(null !== (t = null == a ? void 0 : a.getFeatures()) && void 0 !== t ? t : n.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    !0 === (null === (A = e.options) || void 0 === A ? void 0 : A.mapEntry) ? t.mapEntries.set(c.typeName, c) : ((null !== (l = null == a ? void 0 : a.nestedMessages) && void 0 !== l ? l : n.messages).push(c), t.messages.set(c.typeName, c));
    for (const a of e.enumType)u(a, n, c, t, o);
    for (const a of e.nestedType)E(a, n, c, t, o);
}
function p(e, n, a, t) {
    var o, r;
    (0, s.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (r = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== r && r,
        file: n,
        name: e.name,
        typeName: C(e, void 0, n),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                S.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return v(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a;
            return t(n.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    };
    n.services.push(i), a.services.set(i.typeName, i);
    for (const n of e.method)i.methods.push(T(n, i, a, t));
}
function T(e, n, a, r) {
    var i, A, l;
    let c, m;
    switch((0, s.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, s.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), c = !0 === e.clientStreaming && !0 === e.serverStreaming ? o.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? o.MethodKind.ClientStreaming : !0 === e.serverStreaming ? o.MethodKind.ServerStreaming : o.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case t.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            m = o.MethodIdempotency.Idempotent;
            break;
        case t.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            m = o.MethodIdempotency.NoSideEffects;
            break;
        case t.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            m = void 0;
    }
    const d = a.messages.get(f(e.inputType)), g = a.messages.get(f(e.outputType));
    (0, s.assert)(d, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, s.assert)(g, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const u = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (l = null === (A = e.options) || void 0 === A ? void 0 : A.deprecated) && void 0 !== l && l,
        parent: n,
        name: u,
        methodKind: c,
        input: d,
        output: g,
        idempotency: m,
        toString: ()=>`rpc ${n.typeName}.${u}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return v(n.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a;
            return r(n.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    };
}
function k(e, n, a, o, i, A) {
    var c, m, d;
    (0, s.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, s.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, s.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const g = {
        proto: e,
        deprecated: null !== (m = null === (c = e.options) || void 0 === c ? void 0 : c.deprecated) && void 0 !== m && m,
        name: e.name,
        number: e.number,
        parent: a,
        oneof: o,
        optional: Q(e, n.syntax),
        packedByDefault: y(e, A),
        packed: R(n, a, e, A),
        jsonName: e.jsonName === (0, r.fieldJsonName)(e.name) ? void 0 : e.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: D,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return v(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return A(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    }, u = e.label === t.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case t.FieldDescriptorProto_Type.MESSAGE:
        case t.FieldDescriptorProto_Type.GROUP:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const n = i.mapEntries.get(f(e.typeName));
                if (void 0 !== n) return (0, s.assert)(u, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, g), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var n, a;
                    (0, s.assert)(null === (n = e.proto.options) || void 0 === n ? void 0 : n.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, s.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const t = e.fields.find((e)=>1 === e.proto.number);
                    (0, s.assert)(t, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const o = t.scalar;
                    (0, s.assert)(void 0 !== o && o !== l.ScalarType.BYTES && o !== l.ScalarType.FLOAT && o !== l.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (a = t.proto.type) && void 0 !== a ? a : -1}`);
                    const r = e.fields.find((e)=>2 === e.proto.number);
                    switch((0, s.assert)(r, `invalid DescriptorProto: map entry ${e.toString()} is missing value field`), r.fieldKind){
                        case "scalar":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, r), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, r), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, r), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(n));
                const a = i.messages.get(f(e.typeName));
                return (0, s.assert)(void 0 !== a, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, g), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: u,
                    message: a
                });
            }
        case t.FieldDescriptorProto_Type.ENUM:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const n = i.enums.get(f(e.typeName));
                return (0, s.assert)(void 0 !== n, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, g), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: w,
                    repeated: u,
                    enum: n
                });
            }
        default:
            {
                const n = N[e.type];
                return (0, s.assert)(n, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, g), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: w,
                    repeated: u,
                    scalar: n,
                    longType: (null === (d = e.options) || void 0 === d ? void 0 : d.jstype) == t.FieldOptions_JSType.JS_STRING ? l.LongType.STRING : l.LongType.BIGINT
                });
            }
    }
}
function I(e, n, a, t, o) {
    (0, s.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const r = k(e, n, null, void 0, t, o), i = t.messages.get(f(e.extendee));
    return (0, s.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, r), {
        kind: "extension",
        typeName: C(e, a, n),
        parent: a,
        file: n,
        extendee: i,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const a = this.parent ? [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                S.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return v(n.proto.sourceCodeInfo, a);
        },
        getFeatures () {
            var t;
            return o((null != a ? a : n).getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    });
}
function h(e, n) {
    let a, s;
    switch(e){
        case void 0:
        case "proto2":
            s = "proto2", a = t.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3", a = t.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(s = "editions", n){
                case void 0:
                case t.Edition.EDITION_1_TEST_ONLY:
                case t.Edition.EDITION_2_TEST_ONLY:
                case t.Edition.EDITION_99997_TEST_ONLY:
                case t.Edition.EDITION_99998_TEST_ONLY:
                case t.Edition.EDITION_99999_TEST_ONLY:
                case t.Edition.EDITION_UNKNOWN:
                    a = t.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    a = n;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && n === t.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(n)}`);
    return {
        syntax: s,
        edition: a
    };
}
function _(e, n) {
    return e.dependency.map((e)=>{
        const a = n.files.find((n)=>n.proto.name === e);
        return (0, s.assert)(a), a;
    });
}
function C(e, n, a) {
    let t;
    return (0, s.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), t = n ? `${n.typeName}.${e.name}` : void 0 !== a.proto.package ? `${a.proto.package}.${e.name}` : `${e.name}`, t;
}
function f(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function B(e, n) {
    var a;
    const t = e.oneofIndex;
    if (void 0 === t) return;
    let o;
    return !0 !== e.proto3Optional && (o = n[t], (0, s.assert)(o, `invalid FieldDescriptorProto: oneof #${t} for field #${null !== (a = e.number) && void 0 !== a ? a : -1} not found`)), o;
}
function Q(e, n) {
    switch(n){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === t.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function y(e, n) {
    const { repeatedFieldEncoding: a } = n();
    if (a != t.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(e.type){
        case t.FieldDescriptorProto_Type.STRING:
        case t.FieldDescriptorProto_Type.BYTES:
        case t.FieldDescriptorProto_Type.GROUP:
        case t.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function R(e, n, a, s) {
    var o, r, i, A, l, c;
    switch(a.type){
        case t.FieldDescriptorProto_Type.STRING:
        case t.FieldDescriptorProto_Type.BYTES:
        case t.FieldDescriptorProto_Type.GROUP:
        case t.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case t.Edition.EDITION_PROTO2:
                    return null !== (r = null === (o = a.options) || void 0 === o ? void 0 : o.packed) && void 0 !== r && r;
                case t.Edition.EDITION_PROTO3:
                    return null === (A = null === (i = a.options) || void 0 === i ? void 0 : i.packed) || void 0 === A || A;
                default:
                    {
                        const { repeatedFieldEncoding: o } = s(null !== (l = null == n ? void 0 : n.getFeatures()) && void 0 !== l ? l : e.getFeatures(), null === (c = a.options) || void 0 === c ? void 0 : c.features);
                        return o == t.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, n) {
    var a;
    const s = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, o = (0, c.isMessage)(e, t.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? t.FileDescriptorSet.fromBinary(e).file : e, r = new Map;
    for (const e of o){
        const t = null !== (a = e.edition) && void 0 !== a ? a : h(e.syntax, e.edition).edition;
        let o = r.get(t);
        void 0 === o && (o = (0, A.createFeatureResolver)(t, null == n ? void 0 : n.featureSetDefaults, null == n ? void 0 : n.serializationOptions), r.set(t, o)), m(e, s, o);
    }
    return s;
};
const N = {
    [t.FieldDescriptorProto_Type.DOUBLE]: l.ScalarType.DOUBLE,
    [t.FieldDescriptorProto_Type.FLOAT]: l.ScalarType.FLOAT,
    [t.FieldDescriptorProto_Type.INT64]: l.ScalarType.INT64,
    [t.FieldDescriptorProto_Type.UINT64]: l.ScalarType.UINT64,
    [t.FieldDescriptorProto_Type.INT32]: l.ScalarType.INT32,
    [t.FieldDescriptorProto_Type.FIXED64]: l.ScalarType.FIXED64,
    [t.FieldDescriptorProto_Type.FIXED32]: l.ScalarType.FIXED32,
    [t.FieldDescriptorProto_Type.BOOL]: l.ScalarType.BOOL,
    [t.FieldDescriptorProto_Type.STRING]: l.ScalarType.STRING,
    [t.FieldDescriptorProto_Type.GROUP]: void 0,
    [t.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [t.FieldDescriptorProto_Type.BYTES]: l.ScalarType.BYTES,
    [t.FieldDescriptorProto_Type.UINT32]: l.ScalarType.UINT32,
    [t.FieldDescriptorProto_Type.ENUM]: void 0,
    [t.FieldDescriptorProto_Type.SFIXED32]: l.ScalarType.SFIXED32,
    [t.FieldDescriptorProto_Type.SFIXED64]: l.ScalarType.SFIXED64,
    [t.FieldDescriptorProto_Type.SINT32]: l.ScalarType.SINT32,
    [t.FieldDescriptorProto_Type.SINT64]: l.ScalarType.SINT64
};
function v(e, n) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: n
    };
    for (const a of e.location)if (a.path.length === n.length && !a.path.some((e, a)=>n[a] !== e)) return {
        leadingDetached: a.leadingDetachedComments,
        leading: a.leadingComments,
        trailing: a.trailingComments,
        sourcePath: n
    };
    return {
        leadingDetached: [],
        sourcePath: n
    };
}
var S;
function D() {
    var e, n, a;
    const s = [];
    this.repeated && s.push("repeated"), this.optional && s.push("optional");
    let o;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === t.FieldDescriptorProto_Label.REQUIRED && s.push("required"), this.fieldKind){
        case "scalar":
            o = l.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            o = this.enum.typeName;
            break;
        case "message":
            o = this.message.typeName;
            break;
        case "map":
            {
                const e = l.ScalarType[this.mapKey].toLowerCase();
                let n;
                switch(this.mapValue.kind){
                    case "scalar":
                        n = l.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        n = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        n = this.mapValue.message.typeName;
                }
                o = `map<${e}, ${n}>`;
                break;
            }
    }
    s.push(`${o} ${this.name} = ${this.number}`);
    const r = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && r.push(`packed = ${this.proto.options.packed.toString()}`);
    let i = this.proto.defaultValue;
    return void 0 !== i && (this.proto.type != t.FieldDescriptorProto_Type.BYTES && this.proto.type != t.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), r.push(`default = ${i}`)), void 0 !== this.jsonName && r.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (n = this.proto.options) || void 0 === n ? void 0 : n.jstype) && r.push(`jstype = ${t.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (a = this.proto.options) || void 0 === a ? void 0 : a.deprecated) && r.push("deprecated = true"), r.length > 0 && s.push("[" + r.join(", ") + "]"), s.join(" ");
}
function w() {
    const e = this.proto.defaultValue;
    if (void 0 !== e) switch(this.fieldKind){
        case "enum":
            return (0, i.parseTextFormatEnumValue)(this.enum, e);
        case "scalar":
            return (0, i.parseTextFormatScalarValue)(this.scalar, e);
        default:
            return;
    }
}
!function(e) {
    e[e.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e[e.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e[e.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e[e.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e[e.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e[e.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e[e.DescriptorProto_Field = 2] = "DescriptorProto_Field", e[e.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e[e.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e[e.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e[e.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e[e.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e[e.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
}(S || (S = {}));
