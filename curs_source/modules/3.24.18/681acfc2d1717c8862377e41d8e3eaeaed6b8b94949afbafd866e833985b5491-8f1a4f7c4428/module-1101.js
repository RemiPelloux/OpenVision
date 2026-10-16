"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const n = require("./module-7374.js"), r = require("./module-3098.js"), o = require("./module-2422.js"), s = require("./module-5822.js"), i = require("./module-1663.js"), a = require("./module-9301.js"), c = require("./module-3408.js"), l = require("./module-2706.js");
function u(e, t, A) {
    var n, o;
    (0, r.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const s = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== o && o
    }, C(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: p(e, t),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return D(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return D(this.proto.sourceCodeInfo, [
                S.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var t;
            return A(null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    });
    t.mapEntries.clear();
    for (const n of e.enumType)h(n, s, void 0, t, A);
    for (const n of e.messageType)d(n, s, void 0, t, A);
    for (const n of e.service)I(n, s, t, A);
    g(s, t, A);
    for (const e of t.mapEntries.values())E(e, t, A);
    for (const e of s.messages)E(e, t, A), g(e, t, A);
    t.mapEntries.clear(), t.files.push(s);
}
function g(e, t, A) {
    switch(e.kind){
        case "file":
            for (const n of e.proto.extension){
                const r = f(n, e, void 0, t, A);
                e.extensions.push(r), t.extensions.set(r.typeName, r);
            }
            break;
        case "message":
            for (const n of e.proto.extension){
                const r = f(n, e.file, e, t, A);
                e.nestedExtensions.push(r), t.extensions.set(r.typeName, r);
            }
            for (const n of e.nestedMessages)g(n, t, A);
    }
}
function E(e, t, A) {
    const n = e.proto.oneofDecl.map((t)=>(function(e, t, A) {
            return (0, r.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
                kind: "oneof",
                proto: e,
                deprecated: !1,
                parent: t,
                fields: [],
                name: e.name,
                toString () {
                    return `oneof ${t.typeName}.${this.name}`;
                },
                getComments () {
                    const e = [
                        ...this.parent.getComments().sourcePath,
                        S.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return D(t.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var n;
                    return A(t.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
                }
            };
        })(t, e, A)), o = new Set;
    for (const r of e.proto.field){
        const s = w(r, n), i = Q(r, e.file, e, s, t, A);
        e.fields.push(i), void 0 === s ? e.members.push(i) : (s.fields.push(i), o.has(s) || (o.add(s), e.members.push(s)));
    }
    for (const t of n.filter((e)=>o.has(e)))e.oneofs.push(t);
    for (const n of e.nestedMessages)E(n, t, A);
}
function h(e, t, A, n, o) {
    var i, a, c;
    (0, r.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const l = {
        kind: "enum",
        proto: e,
        deprecated: null !== (a = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== a && a,
        file: t,
        parent: A,
        name: e.name,
        typeName: m(e, A, t),
        values: [],
        sharedPrefix: (0, s.findEnumSharedPrefix)(e.name, e.value.map((e)=>{
            var t;
            return null !== (t = e.name) && void 0 !== t ? t : "";
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
            return D(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n, r;
            return o(null !== (n = null == A ? void 0 : A.getFeatures()) && void 0 !== n ? n : t.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    };
    n.enums.set(l.typeName, l), e.value.forEach((e)=>{
        var A, n;
        (0, r.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, r.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), l.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (n = null === (A = e.options) || void 0 === A ? void 0 : A.deprecated) && void 0 !== n && n,
            parent: l,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${l.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let t = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (t += " [deprecated = true]"), t;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    S.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return D(t.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var t;
                return o(l.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
            }
        });
    }), (null !== (c = null == A ? void 0 : A.nestedEnums) && void 0 !== c ? c : t.enums).push(l);
}
function d(e, t, A, n, o) {
    var s, i, a, c;
    (0, r.assert)(e.name, "invalid DescriptorProto: missing name");
    const l = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (s = e.options) || void 0 === s ? void 0 : s.deprecated) && void 0 !== i && i,
        file: t,
        parent: A,
        name: e.name,
        typeName: m(e, A, t),
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
            return D(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n, r;
            return o(null !== (n = null == A ? void 0 : A.getFeatures()) && void 0 !== n ? n : t.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    };
    !0 === (null === (a = e.options) || void 0 === a ? void 0 : a.mapEntry) ? n.mapEntries.set(l.typeName, l) : ((null !== (c = null == A ? void 0 : A.nestedMessages) && void 0 !== c ? c : t.messages).push(l), n.messages.set(l.typeName, l));
    for (const A of e.enumType)h(A, t, l, n, o);
    for (const A of e.nestedType)d(A, t, l, n, o);
}
function I(e, t, A, n) {
    var o, s;
    (0, r.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (s = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== s && s,
        file: t,
        name: e.name,
        typeName: m(e, void 0, t),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                S.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return D(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var A;
            return n(t.getFeatures(), null === (A = e.options) || void 0 === A ? void 0 : A.features);
        }
    };
    t.services.push(i), A.services.set(i.typeName, i);
    for (const t of e.method)i.methods.push(B(t, i, A, n));
}
function B(e, t, A, s) {
    var i, a, c;
    let l, u;
    switch((0, r.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, r.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, r.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), l = !0 === e.clientStreaming && !0 === e.serverStreaming ? o.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? o.MethodKind.ClientStreaming : !0 === e.serverStreaming ? o.MethodKind.ServerStreaming : o.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            u = o.MethodIdempotency.Idempotent;
            break;
        case n.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            u = o.MethodIdempotency.NoSideEffects;
            break;
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            u = void 0;
    }
    const g = A.messages.get(y(e.inputType)), E = A.messages.get(y(e.outputType));
    (0, r.assert)(g, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, r.assert)(E, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const h = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (c = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== c && c,
        parent: t,
        name: h,
        methodKind: l,
        input: g,
        output: E,
        idempotency: u,
        toString: ()=>`rpc ${t.typeName}.${h}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                S.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return D(t.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var A;
            return s(t.getFeatures(), null === (A = e.options) || void 0 === A ? void 0 : A.features);
        }
    };
}
function Q(e, t, A, o, i, a) {
    var l, u, g;
    (0, r.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, r.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, r.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const E = {
        proto: e,
        deprecated: null !== (u = null === (l = e.options) || void 0 === l ? void 0 : l.deprecated) && void 0 !== u && u,
        name: e.name,
        number: e.number,
        parent: A,
        oneof: o,
        optional: k(e, t.syntax),
        packedByDefault: b(e, a),
        packed: N(t, A, e, a),
        jsonName: e.jsonName === (0, s.fieldJsonName)(e.name) ? void 0 : e.jsonName,
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
            const e = [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return D(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return a(A.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    }, h = e.label === n.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case n.FieldDescriptorProto_Type.MESSAGE:
        case n.FieldDescriptorProto_Type.GROUP:
            {
                (0, r.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const t = i.mapEntries.get(y(e.typeName));
                if (void 0 !== t) return (0, r.assert)(h, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, E), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var t, A;
                    (0, r.assert)(null === (t = e.proto.options) || void 0 === t ? void 0 : t.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, r.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const n = e.fields.find((e)=>1 === e.proto.number);
                    (0, r.assert)(n, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const o = n.scalar;
                    (0, r.assert)(void 0 !== o && o !== c.ScalarType.BYTES && o !== c.ScalarType.FLOAT && o !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (A = n.proto.type) && void 0 !== A ? A : -1}`);
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
                }(t));
                const A = i.messages.get(y(e.typeName));
                return (0, r.assert)(void 0 !== A, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, E), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: h,
                    message: A
                });
            }
        case n.FieldDescriptorProto_Type.ENUM:
            {
                (0, r.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const t = i.enums.get(y(e.typeName));
                return (0, r.assert)(void 0 !== t, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, E), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: F,
                    repeated: h,
                    enum: t
                });
            }
        default:
            {
                const t = T[e.type];
                return (0, r.assert)(t, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, E), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: F,
                    repeated: h,
                    scalar: t,
                    longType: (null === (g = e.options) || void 0 === g ? void 0 : g.jstype) == n.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT
                });
            }
    }
}
function f(e, t, A, n, o) {
    (0, r.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const s = Q(e, t, null, void 0, n, o), i = n.messages.get(y(e.extendee));
    return (0, r.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, s), {
        kind: "extension",
        typeName: m(e, A, t),
        parent: A,
        file: t,
        extendee: i,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const A = this.parent ? [
                ...this.parent.getComments().sourcePath,
                S.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                S.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return D(t.proto.sourceCodeInfo, A);
        },
        getFeatures () {
            var n;
            return o((null != A ? A : t).getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    });
}
function C(e, t) {
    let A, r;
    switch(e){
        case void 0:
        case "proto2":
            r = "proto2", A = n.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            r = "proto3", A = n.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(r = "editions", t){
                case void 0:
                case n.Edition.EDITION_1_TEST_ONLY:
                case n.Edition.EDITION_2_TEST_ONLY:
                case n.Edition.EDITION_99997_TEST_ONLY:
                case n.Edition.EDITION_99998_TEST_ONLY:
                case n.Edition.EDITION_99999_TEST_ONLY:
                case n.Edition.EDITION_UNKNOWN:
                    A = n.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    A = t;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && t === n.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(t)}`);
    return {
        syntax: r,
        edition: A
    };
}
function p(e, t) {
    return e.dependency.map((e)=>{
        const A = t.files.find((t)=>t.proto.name === e);
        return (0, r.assert)(A), A;
    });
}
function m(e, t, A) {
    let n;
    return (0, r.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), n = t ? `${t.typeName}.${e.name}` : void 0 !== A.proto.package ? `${A.proto.package}.${e.name}` : `${e.name}`, n;
}
function y(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function w(e, t) {
    var A;
    const n = e.oneofIndex;
    if (void 0 === n) return;
    let o;
    return !0 !== e.proto3Optional && (o = t[n], (0, r.assert)(o, `invalid FieldDescriptorProto: oneof #${n} for field #${null !== (A = e.number) && void 0 !== A ? A : -1} not found`)), o;
}
function k(e, t) {
    switch(t){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === n.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function b(e, t) {
    const { repeatedFieldEncoding: A } = t();
    if (A != n.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
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
function N(e, t, A, r) {
    var o, s, i, a, c, l;
    switch(A.type){
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case n.Edition.EDITION_PROTO2:
                    return null !== (s = null === (o = A.options) || void 0 === o ? void 0 : o.packed) && void 0 !== s && s;
                case n.Edition.EDITION_PROTO3:
                    return null === (a = null === (i = A.options) || void 0 === i ? void 0 : i.packed) || void 0 === a || a;
                default:
                    {
                        const { repeatedFieldEncoding: o } = r(null !== (c = null == t ? void 0 : t.getFeatures()) && void 0 !== c ? c : e.getFeatures(), null === (l = A.options) || void 0 === l ? void 0 : l.features);
                        return o == n.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, t) {
    var A;
    const r = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, o = (0, l.isMessage)(e, n.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? n.FileDescriptorSet.fromBinary(e).file : e, s = new Map;
    for (const e of o){
        const n = null !== (A = e.edition) && void 0 !== A ? A : C(e.syntax, e.edition).edition;
        let o = s.get(n);
        void 0 === o && (o = (0, a.createFeatureResolver)(n, null == t ? void 0 : t.featureSetDefaults, null == t ? void 0 : t.serializationOptions), s.set(n, o)), u(e, r, o);
    }
    return r;
};
const T = {
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
function D(e, t) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: t
    };
    for (const A of e.location)if (A.path.length === t.length && !A.path.some((e, A)=>t[A] !== e)) return {
        leadingDetached: A.leadingDetachedComments,
        leading: A.leadingComments,
        trailing: A.trailingComments,
        sourcePath: t
    };
    return {
        leadingDetached: [],
        sourcePath: t
    };
}
var S;
function R() {
    var e, t, A;
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
                let t;
                switch(this.mapValue.kind){
                    case "scalar":
                        t = c.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        t = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        t = this.mapValue.message.typeName;
                }
                o = `map<${e}, ${t}>`;
                break;
            }
    }
    r.push(`${o} ${this.name} = ${this.number}`);
    const s = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && s.push(`packed = ${this.proto.options.packed.toString()}`);
    let i = this.proto.defaultValue;
    return void 0 !== i && (this.proto.type != n.FieldDescriptorProto_Type.BYTES && this.proto.type != n.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), s.push(`default = ${i}`)), void 0 !== this.jsonName && s.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t = this.proto.options) || void 0 === t ? void 0 : t.jstype) && s.push(`jstype = ${n.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (A = this.proto.options) || void 0 === A ? void 0 : A.deprecated) && s.push("deprecated = true"), s.length > 0 && r.push("[" + s.join(", ") + "]"), r.join(" ");
}
function F() {
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
