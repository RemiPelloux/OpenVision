"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const n = require("./module-7374.js"), r = require("./module-3098.js"), o = require("./module-2422.js"), s = require("./module-5822.js"), a = require("./module-1663.js"), i = require("./module-9301.js"), c = require("./module-3408.js"), l = require("./module-2706.js");
function g(e, A, t) {
    var n, o;
    (0, r.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const s = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== o && o
    }, B(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: p(e, A),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return R(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return R(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var A;
            return t(null === (A = e.options) || void 0 === A ? void 0 : A.features);
        }
    });
    A.mapEntries.clear();
    for (const n of e.enumType)d(n, s, void 0, A, t);
    for (const n of e.messageType)I(n, s, void 0, A, t);
    for (const n of e.service)h(n, s, A, t);
    E(s, A, t);
    for (const e of A.mapEntries.values())u(e, A, t);
    for (const e of s.messages)u(e, A, t), E(e, A, t);
    A.mapEntries.clear(), A.files.push(s);
}
function E(e, A, t) {
    switch(e.kind){
        case "file":
            for (const n of e.proto.extension){
                const r = C(n, e, void 0, A, t);
                e.extensions.push(r), A.extensions.set(r.typeName, r);
            }
            break;
        case "message":
            for (const n of e.proto.extension){
                const r = C(n, e.file, e, A, t);
                e.nestedExtensions.push(r), A.extensions.set(r.typeName, r);
            }
            for (const n of e.nestedMessages)E(n, A, t);
    }
}
function u(e, A, t) {
    const n = e.proto.oneofDecl.map((A)=>(function(e, A, t) {
            return (0, r.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
                kind: "oneof",
                proto: e,
                deprecated: !1,
                parent: A,
                fields: [],
                name: e.name,
                toString () {
                    return `oneof ${A.typeName}.${this.name}`;
                },
                getComments () {
                    const e = [
                        ...this.parent.getComments().sourcePath,
                        S.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return R(A.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var n;
                    return t(A.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
                }
            };
        })(A, e, t)), o = new Set;
    for (const r of e.proto.field){
        const s = T(r, n), a = m(r, e.file, e, s, A, t);
        e.fields.push(a), void 0 === s ? e.members.push(a) : (s.fields.push(a), o.has(s) || (o.add(s), e.members.push(s)));
    }
    for (const A of n.filter((e)=>o.has(e)))e.oneofs.push(A);
    for (const n of e.nestedMessages)u(n, A, t);
}
function d(e, A, t, n, o) {
    var a, i, c;
    (0, r.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const l = {
        kind: "enum",
        proto: e,
        deprecated: null !== (i = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== i && i,
        file: A,
        parent: t,
        name: e.name,
        typeName: f(e, t, A),
        values: [],
        sharedPrefix: (0, s.findEnumSharedPrefix)(e.name, e.value.map((e)=>{
            var A;
            return null !== (A = e.name) && void 0 !== A ? A : "";
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
            return R(A.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n, r;
            return o(null !== (n = null == t ? void 0 : t.getFeatures()) && void 0 !== n ? n : A.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    };
    n.enums.set(l.typeName, l), e.value.forEach((e)=>{
        var t, n;
        (0, r.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, r.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), l.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (n = null === (t = e.options) || void 0 === t ? void 0 : t.deprecated) && void 0 !== n && n,
            parent: l,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${l.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let A = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (A += " [deprecated = true]"), A;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    S.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return R(A.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var A;
                return o(l.getFeatures(), null === (A = e.options) || void 0 === A ? void 0 : A.features);
            }
        });
    }), (null !== (c = null == t ? void 0 : t.nestedEnums) && void 0 !== c ? c : A.enums).push(l);
}
function I(e, A, t, n, o) {
    var s, a, i, c;
    (0, r.assert)(e.name, "invalid DescriptorProto: missing name");
    const l = {
        kind: "message",
        proto: e,
        deprecated: null !== (a = null === (s = e.options) || void 0 === s ? void 0 : s.deprecated) && void 0 !== a && a,
        file: A,
        parent: t,
        name: e.name,
        typeName: f(e, t, A),
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
            return R(A.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n, r;
            return o(null !== (n = null == t ? void 0 : t.getFeatures()) && void 0 !== n ? n : A.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    };
    !0 === (null === (i = e.options) || void 0 === i ? void 0 : i.mapEntry) ? n.mapEntries.set(l.typeName, l) : ((null !== (c = null == t ? void 0 : t.nestedMessages) && void 0 !== c ? c : A.messages).push(l), n.messages.set(l.typeName, l));
    for (const t of e.enumType)d(t, A, l, n, o);
    for (const t of e.nestedType)I(t, A, l, n, o);
}
function h(e, A, t, n) {
    var o, s;
    (0, r.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const a = {
        kind: "service",
        proto: e,
        deprecated: null !== (s = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== s && s,
        file: A,
        name: e.name,
        typeName: f(e, void 0, A),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                S.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return R(A.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return n(A.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    };
    A.services.push(a), t.services.set(a.typeName, a);
    for (const A of e.method)a.methods.push(Q(A, a, t, n));
}
function Q(e, A, t, s) {
    var a, i, c;
    let l, g;
    switch((0, r.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, r.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, r.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), l = !0 === e.clientStreaming && !0 === e.serverStreaming ? o.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? o.MethodKind.ClientStreaming : !0 === e.serverStreaming ? o.MethodKind.ServerStreaming : o.MethodKind.Unary, null === (a = e.options) || void 0 === a ? void 0 : a.idempotencyLevel){
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            g = o.MethodIdempotency.Idempotent;
            break;
        case n.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            g = o.MethodIdempotency.NoSideEffects;
            break;
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            g = void 0;
    }
    const E = t.messages.get(y(e.inputType)), u = t.messages.get(y(e.outputType));
    (0, r.assert)(E, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, r.assert)(u, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const d = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (c = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== c && c,
        parent: A,
        name: d,
        methodKind: l,
        input: E,
        output: u,
        idempotency: g,
        toString: ()=>`rpc ${A.typeName}.${d}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return R(A.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return s(A.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    };
}
function m(e, A, t, o, a, i) {
    var l, g, E;
    (0, r.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, r.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, r.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const u = {
        proto: e,
        deprecated: null !== (g = null === (l = e.options) || void 0 === l ? void 0 : l.deprecated) && void 0 !== g && g,
        name: e.name,
        number: e.number,
        parent: t,
        oneof: o,
        optional: k(e, A.syntax),
        packedByDefault: w(e, i),
        packed: N(A, t, e, i),
        jsonName: e.jsonName === (0, s.fieldJsonName)(e.name) ? void 0 : e.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: b,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return R(A.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var A;
            return i(t.getFeatures(), null === (A = e.options) || void 0 === A ? void 0 : A.features);
        }
    }, d = e.label === n.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case n.FieldDescriptorProto_Type.MESSAGE:
        case n.FieldDescriptorProto_Type.GROUP:
            {
                (0, r.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const A = a.mapEntries.get(y(e.typeName));
                if (void 0 !== A) return (0, r.assert)(d, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var A, t;
                    (0, r.assert)(null === (A = e.proto.options) || void 0 === A ? void 0 : A.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, r.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const n = e.fields.find((e)=>1 === e.proto.number);
                    (0, r.assert)(n, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const o = n.scalar;
                    (0, r.assert)(void 0 !== o && o !== c.ScalarType.BYTES && o !== c.ScalarType.FLOAT && o !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (t = n.proto.type) && void 0 !== t ? t : -1}`);
                    const s = e.fields.find((e)=>2 === e.proto.number);
                    switch((0, r.assert)(s, `invalid DescriptorProto: map entry ${e.toString()} is missing value field`), s.fieldKind){
                        case "scalar":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, s), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, s), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, s), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(A));
                const t = a.messages.get(y(e.typeName));
                return (0, r.assert)(void 0 !== t, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: d,
                    message: t
                });
            }
        case n.FieldDescriptorProto_Type.ENUM:
            {
                (0, r.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const A = a.enums.get(y(e.typeName));
                return (0, r.assert)(void 0 !== A, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: F,
                    repeated: d,
                    enum: A
                });
            }
        default:
            {
                const A = D[e.type];
                return (0, r.assert)(A, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: F,
                    repeated: d,
                    scalar: A,
                    longType: (null === (E = e.options) || void 0 === E ? void 0 : E.jstype) == n.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT
                });
            }
    }
}
function C(e, A, t, n, o) {
    (0, r.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const s = m(e, A, null, void 0, n, o), a = n.messages.get(y(e.extendee));
    return (0, r.assert)(a, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, s), {
        kind: "extension",
        typeName: f(e, t, A),
        parent: t,
        file: A,
        extendee: a,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const t = this.parent ? [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                S.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return R(A.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var n;
            return o((null != t ? t : A).getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    });
}
function B(e, A) {
    let t, r;
    switch(e){
        case void 0:
        case "proto2":
            r = "proto2", t = n.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            r = "proto3", t = n.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(r = "editions", A){
                case void 0:
                case n.Edition.EDITION_1_TEST_ONLY:
                case n.Edition.EDITION_2_TEST_ONLY:
                case n.Edition.EDITION_99997_TEST_ONLY:
                case n.Edition.EDITION_99998_TEST_ONLY:
                case n.Edition.EDITION_99999_TEST_ONLY:
                case n.Edition.EDITION_UNKNOWN:
                    t = n.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    t = A;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && A === n.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(A)}`);
    return {
        syntax: r,
        edition: t
    };
}
function p(e, A) {
    return e.dependency.map((e)=>{
        const t = A.files.find((A)=>A.proto.name === e);
        return (0, r.assert)(t), t;
    });
}
function f(e, A, t) {
    let n;
    return (0, r.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), n = A ? `${A.typeName}.${e.name}` : void 0 !== t.proto.package ? `${t.proto.package}.${e.name}` : `${e.name}`, n;
}
function y(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function T(e, A) {
    var t;
    const n = e.oneofIndex;
    if (void 0 === n) return;
    let o;
    return !0 !== e.proto3Optional && (o = A[n], (0, r.assert)(o, `invalid FieldDescriptorProto: oneof #${n} for field #${null !== (t = e.number) && void 0 !== t ? t : -1} not found`)), o;
}
function k(e, A) {
    switch(A){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === n.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function w(e, A) {
    const { repeatedFieldEncoding: t } = A();
    if (t != n.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(e.type){
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function N(e, A, t, r) {
    var o, s, a, i, c, l;
    switch(t.type){
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case n.Edition.EDITION_PROTO2:
                    return null !== (s = null === (o = t.options) || void 0 === o ? void 0 : o.packed) && void 0 !== s && s;
                case n.Edition.EDITION_PROTO3:
                    return null === (i = null === (a = t.options) || void 0 === a ? void 0 : a.packed) || void 0 === i || i;
                default:
                    {
                        const { repeatedFieldEncoding: o } = r(null !== (c = null == A ? void 0 : A.getFeatures()) && void 0 !== c ? c : e.getFeatures(), null === (l = t.options) || void 0 === l ? void 0 : l.features);
                        return o == n.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, A) {
    var t;
    const r = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, o = (0, l.isMessage)(e, n.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? n.FileDescriptorSet.fromBinary(e).file : e, s = new Map;
    for (const e of o){
        const n = null !== (t = e.edition) && void 0 !== t ? t : B(e.syntax, e.edition).edition;
        let o = s.get(n);
        void 0 === o && (o = (0, i.createFeatureResolver)(n, null == A ? void 0 : A.featureSetDefaults, null == A ? void 0 : A.serializationOptions), s.set(n, o)), g(e, r, o);
    }
    return r;
};
const D = {
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
function R(e, A) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: A
    };
    for (const t of e.location)if (t.path.length === A.length && !t.path.some((e, t)=>A[t] !== e)) return {
        leadingDetached: t.leadingDetachedComments,
        leading: t.leadingComments,
        trailing: t.trailingComments,
        sourcePath: A
    };
    return {
        leadingDetached: [],
        sourcePath: A
    };
}
var S;
function b() {
    var e, A, t;
    const r = [];
    this.repeated && r.push("repeated"), this.optional && r.push("optional");
    let o;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n.FieldDescriptorProto_Label.REQUIRED && r.push("required"), this.fieldKind){
        case "scalar":
            o = c.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            o = this.enum.typeName;
            break;
        case "message":
            o = this.message.typeName;
            break;
        case "map":
            {
                const e = c.ScalarType[this.mapKey].toLowerCase();
                let A;
                switch(this.mapValue.kind){
                    case "scalar":
                        A = c.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        A = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        A = this.mapValue.message.typeName;
                }
                o = `map<${e}, ${A}>`;
                break;
            }
    }
    r.push(`${o} ${this.name} = ${this.number}`);
    const s = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && s.push(`packed = ${this.proto.options.packed.toString()}`);
    let a = this.proto.defaultValue;
    return void 0 !== a && (this.proto.type != n.FieldDescriptorProto_Type.BYTES && this.proto.type != n.FieldDescriptorProto_Type.STRING || (a = '"' + a.replace('"', '\\"') + '"'), s.push(`default = ${a}`)), void 0 !== this.jsonName && s.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (A = this.proto.options) || void 0 === A ? void 0 : A.jstype) && s.push(`jstype = ${n.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (t = this.proto.options) || void 0 === t ? void 0 : t.deprecated) && s.push("deprecated = true"), s.length > 0 && r.push("[" + s.join(", ") + "]"), r.join(" ");
}
function F() {
    const e = this.proto.defaultValue;
    if (void 0 !== e) switch(this.fieldKind){
        case "enum":
            return (0, a.parseTextFormatEnumValue)(this.enum, e);
        case "scalar":
            return (0, a.parseTextFormatScalarValue)(this.scalar, e);
        default:
            return;
    }
}
!function(e) {
    e[e.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e[e.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e[e.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e[e.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e[e.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e[e.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e[e.DescriptorProto_Field = 2] = "DescriptorProto_Field", e[e.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e[e.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e[e.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e[e.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e[e.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e[e.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
}(S || (S = {}));
