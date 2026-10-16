"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const a = require("./module-7374.js"), s = require("./module-3098.js"), o = require("./module-2422.js"), r = require("./module-5822.js"), i = require("./module-1663.js"), A = require("./module-9301.js"), c = require("./module-3408.js"), l = require("./module-2706.js");
function d(e, n, t) {
    var a, o;
    (0, s.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const r = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (o = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== o && o
    }, f(e.syntax, e.edition)), {
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
            return N(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return N(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var n;
            return t(null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    });
    n.mapEntries.clear();
    for (const a of e.enumType)g(a, r, void 0, n, t);
    for (const a of e.messageType)p(a, r, void 0, n, t);
    for (const a of e.service)E(a, r, n, t);
    m(r, n, t);
    for (const e of n.mapEntries.values())u(e, n, t);
    for (const e of r.messages)u(e, n, t), m(e, n, t);
    n.mapEntries.clear(), n.files.push(r);
}
function m(e, n, t) {
    switch(e.kind){
        case "file":
            for (const a of e.proto.extension){
                const s = k(a, e, void 0, n, t);
                e.extensions.push(s), n.extensions.set(s.typeName, s);
            }
            break;
        case "message":
            for (const a of e.proto.extension){
                const s = k(a, e.file, e, n, t);
                e.nestedExtensions.push(s), n.extensions.set(s.typeName, s);
            }
            for (const a of e.nestedMessages)m(a, n, t);
    }
}
function u(e, n, t) {
    const a = e.proto.oneofDecl.map((n)=>(function(e, n, t) {
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
                    return N(n.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var a;
                    return t(n.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
                }
            };
        })(n, e, t)), o = new Set;
    for (const s of e.proto.field){
        const r = y(s, a), i = T(s, e.file, e, r, n, t);
        e.fields.push(i), void 0 === r ? e.members.push(i) : (r.fields.push(i), o.has(r) || (o.add(r), e.members.push(r)));
    }
    for (const n of a.filter((e)=>o.has(e)))e.oneofs.push(n);
    for (const a of e.nestedMessages)u(a, n, t);
}
function g(e, n, t, a, o) {
    var i, A, c;
    (0, s.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const l = {
        kind: "enum",
        proto: e,
        deprecated: null !== (A = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== A && A,
        file: n,
        parent: t,
        name: e.name,
        typeName: I(e, t, n),
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
            return N(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a, s;
            return o(null !== (a = null == t ? void 0 : t.getFeatures()) && void 0 !== a ? a : n.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    a.enums.set(l.typeName, l), e.value.forEach((e)=>{
        var t, a;
        (0, s.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, s.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), l.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (a = null === (t = e.options) || void 0 === t ? void 0 : t.deprecated) && void 0 !== a && a,
            parent: l,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${l.typeName}.${this.name}`;
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
                return N(n.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var n;
                return o(l.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
            }
        });
    }), (null !== (c = null == t ? void 0 : t.nestedEnums) && void 0 !== c ? c : n.enums).push(l);
}
function p(e, n, t, a, o) {
    var r, i, A, c;
    (0, s.assert)(e.name, "invalid DescriptorProto: missing name");
    const l = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== i && i,
        file: n,
        parent: t,
        name: e.name,
        typeName: I(e, t, n),
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
            return N(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a, s;
            return o(null !== (a = null == t ? void 0 : t.getFeatures()) && void 0 !== a ? a : n.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    !0 === (null === (A = e.options) || void 0 === A ? void 0 : A.mapEntry) ? a.mapEntries.set(l.typeName, l) : ((null !== (c = null == t ? void 0 : t.nestedMessages) && void 0 !== c ? c : n.messages).push(l), a.messages.set(l.typeName, l));
    for (const t of e.enumType)g(t, n, l, a, o);
    for (const t of e.nestedType)p(t, n, l, a, o);
}
function E(e, n, t, a) {
    var o, r;
    (0, s.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (r = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== r && r,
        file: n,
        name: e.name,
        typeName: I(e, void 0, n),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                S.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return N(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return a(n.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    };
    n.services.push(i), t.services.set(i.typeName, i);
    for (const n of e.method)i.methods.push(h(n, i, t, a));
}
function h(e, n, t, r) {
    var i, A, c;
    let l, d;
    switch((0, s.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, s.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), l = !0 === e.clientStreaming && !0 === e.serverStreaming ? o.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? o.MethodKind.ClientStreaming : !0 === e.serverStreaming ? o.MethodKind.ServerStreaming : o.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case a.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            d = o.MethodIdempotency.Idempotent;
            break;
        case a.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            d = o.MethodIdempotency.NoSideEffects;
            break;
        case a.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            d = void 0;
    }
    const m = t.messages.get(C(e.inputType)), u = t.messages.get(C(e.outputType));
    (0, s.assert)(m, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, s.assert)(u, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const g = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (c = null === (A = e.options) || void 0 === A ? void 0 : A.deprecated) && void 0 !== c && c,
        parent: n,
        name: g,
        methodKind: l,
        input: m,
        output: u,
        idempotency: d,
        toString: ()=>`rpc ${n.typeName}.${g}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return N(n.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return r(n.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    };
}
function T(e, n, t, o, i, A) {
    var l, d, m;
    (0, s.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, s.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, s.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const u = {
        proto: e,
        deprecated: null !== (d = null === (l = e.options) || void 0 === l ? void 0 : l.deprecated) && void 0 !== d && d,
        name: e.name,
        number: e.number,
        parent: t,
        oneof: o,
        optional: B(e, n.syntax),
        packedByDefault: Q(e, A),
        packed: v(n, t, e, A),
        jsonName: e.jsonName === (0, r.fieldJsonName)(e.name) ? void 0 : e.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: w,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return N(n.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return A(t.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    }, g = e.label === a.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case a.FieldDescriptorProto_Type.MESSAGE:
        case a.FieldDescriptorProto_Type.GROUP:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const n = i.mapEntries.get(C(e.typeName));
                if (void 0 !== n) return (0, s.assert)(g, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var n, t;
                    (0, s.assert)(null === (n = e.proto.options) || void 0 === n ? void 0 : n.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, s.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const a = e.fields.find((e)=>1 === e.proto.number);
                    (0, s.assert)(a, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const o = a.scalar;
                    (0, s.assert)(void 0 !== o && o !== c.ScalarType.BYTES && o !== c.ScalarType.FLOAT && o !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (t = a.proto.type) && void 0 !== t ? t : -1}`);
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
                const t = i.messages.get(C(e.typeName));
                return (0, s.assert)(void 0 !== t, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: g,
                    message: t
                });
            }
        case a.FieldDescriptorProto_Type.ENUM:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const n = i.enums.get(C(e.typeName));
                return (0, s.assert)(void 0 !== n, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: b,
                    repeated: g,
                    enum: n
                });
            }
        default:
            {
                const n = R[e.type];
                return (0, s.assert)(n, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, u), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: b,
                    repeated: g,
                    scalar: n,
                    longType: (null === (m = e.options) || void 0 === m ? void 0 : m.jstype) == a.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT
                });
            }
    }
}
function k(e, n, t, a, o) {
    (0, s.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const r = T(e, n, null, void 0, a, o), i = a.messages.get(C(e.extendee));
    return (0, s.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, r), {
        kind: "extension",
        typeName: I(e, t, n),
        parent: t,
        file: n,
        extendee: i,
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
            return N(n.proto.sourceCodeInfo, t);
        },
        getFeatures () {
            var a;
            return o((null != t ? t : n).getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    });
}
function f(e, n) {
    let t, s;
    switch(e){
        case void 0:
        case "proto2":
            s = "proto2", t = a.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3", t = a.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(s = "editions", n){
                case void 0:
                case a.Edition.EDITION_1_TEST_ONLY:
                case a.Edition.EDITION_2_TEST_ONLY:
                case a.Edition.EDITION_99997_TEST_ONLY:
                case a.Edition.EDITION_99998_TEST_ONLY:
                case a.Edition.EDITION_99999_TEST_ONLY:
                case a.Edition.EDITION_UNKNOWN:
                    t = a.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    t = n;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && n === a.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(n)}`);
    return {
        syntax: s,
        edition: t
    };
}
function _(e, n) {
    return e.dependency.map((e)=>{
        const t = n.files.find((n)=>n.proto.name === e);
        return (0, s.assert)(t), t;
    });
}
function I(e, n, t) {
    let a;
    return (0, s.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), a = n ? `${n.typeName}.${e.name}` : void 0 !== t.proto.package ? `${t.proto.package}.${e.name}` : `${e.name}`, a;
}
function C(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function y(e, n) {
    var t;
    const a = e.oneofIndex;
    if (void 0 === a) return;
    let o;
    return !0 !== e.proto3Optional && (o = n[a], (0, s.assert)(o, `invalid FieldDescriptorProto: oneof #${a} for field #${null !== (t = e.number) && void 0 !== t ? t : -1} not found`)), o;
}
function B(e, n) {
    switch(n){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === a.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function Q(e, n) {
    const { repeatedFieldEncoding: t } = n();
    if (t != a.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(e.type){
        case a.FieldDescriptorProto_Type.STRING:
        case a.FieldDescriptorProto_Type.BYTES:
        case a.FieldDescriptorProto_Type.GROUP:
        case a.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function v(e, n, t, s) {
    var o, r, i, A, c, l;
    switch(t.type){
        case a.FieldDescriptorProto_Type.STRING:
        case a.FieldDescriptorProto_Type.BYTES:
        case a.FieldDescriptorProto_Type.GROUP:
        case a.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case a.Edition.EDITION_PROTO2:
                    return null !== (r = null === (o = t.options) || void 0 === o ? void 0 : o.packed) && void 0 !== r && r;
                case a.Edition.EDITION_PROTO3:
                    return null === (A = null === (i = t.options) || void 0 === i ? void 0 : i.packed) || void 0 === A || A;
                default:
                    {
                        const { repeatedFieldEncoding: o } = s(null !== (c = null == n ? void 0 : n.getFeatures()) && void 0 !== c ? c : e.getFeatures(), null === (l = t.options) || void 0 === l ? void 0 : l.features);
                        return o == a.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, n) {
    var t;
    const s = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, o = (0, l.isMessage)(e, a.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? a.FileDescriptorSet.fromBinary(e).file : e, r = new Map;
    for (const e of o){
        const a = null !== (t = e.edition) && void 0 !== t ? t : f(e.syntax, e.edition).edition;
        let o = r.get(a);
        void 0 === o && (o = (0, A.createFeatureResolver)(a, null == n ? void 0 : n.featureSetDefaults, null == n ? void 0 : n.serializationOptions), r.set(a, o)), d(e, s, o);
    }
    return s;
};
const R = {
    [a.FieldDescriptorProto_Type.DOUBLE]: c.ScalarType.DOUBLE,
    [a.FieldDescriptorProto_Type.FLOAT]: c.ScalarType.FLOAT,
    [a.FieldDescriptorProto_Type.INT64]: c.ScalarType.INT64,
    [a.FieldDescriptorProto_Type.UINT64]: c.ScalarType.UINT64,
    [a.FieldDescriptorProto_Type.INT32]: c.ScalarType.INT32,
    [a.FieldDescriptorProto_Type.FIXED64]: c.ScalarType.FIXED64,
    [a.FieldDescriptorProto_Type.FIXED32]: c.ScalarType.FIXED32,
    [a.FieldDescriptorProto_Type.BOOL]: c.ScalarType.BOOL,
    [a.FieldDescriptorProto_Type.STRING]: c.ScalarType.STRING,
    [a.FieldDescriptorProto_Type.GROUP]: void 0,
    [a.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [a.FieldDescriptorProto_Type.BYTES]: c.ScalarType.BYTES,
    [a.FieldDescriptorProto_Type.UINT32]: c.ScalarType.UINT32,
    [a.FieldDescriptorProto_Type.ENUM]: void 0,
    [a.FieldDescriptorProto_Type.SFIXED32]: c.ScalarType.SFIXED32,
    [a.FieldDescriptorProto_Type.SFIXED64]: c.ScalarType.SFIXED64,
    [a.FieldDescriptorProto_Type.SINT32]: c.ScalarType.SINT32,
    [a.FieldDescriptorProto_Type.SINT64]: c.ScalarType.SINT64
};
function N(e, n) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: n
    };
    for (const t of e.location)if (t.path.length === n.length && !t.path.some((e, t)=>n[t] !== e)) return {
        leadingDetached: t.leadingDetachedComments,
        leading: t.leadingComments,
        trailing: t.trailingComments,
        sourcePath: n
    };
    return {
        leadingDetached: [],
        sourcePath: n
    };
}
var S;
function w() {
    var e, n, t;
    const s = [];
    this.repeated && s.push("repeated"), this.optional && s.push("optional");
    let o;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === a.FieldDescriptorProto_Label.REQUIRED && s.push("required"), this.fieldKind){
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
                let n;
                switch(this.mapValue.kind){
                    case "scalar":
                        n = c.ScalarType[this.mapValue.scalar].toLowerCase();
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
    return void 0 !== i && (this.proto.type != a.FieldDescriptorProto_Type.BYTES && this.proto.type != a.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), r.push(`default = ${i}`)), void 0 !== this.jsonName && r.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (n = this.proto.options) || void 0 === n ? void 0 : n.jstype) && r.push(`jstype = ${a.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (t = this.proto.options) || void 0 === t ? void 0 : t.deprecated) && r.push("deprecated = true"), r.length > 0 && s.push("[" + r.join(", ") + "]"), s.join(" ");
}
function b() {
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
