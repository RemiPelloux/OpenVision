"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const t = require("./module-7374.js"), s = require("./module-3098.js"), o = require("./module-2422.js"), r = require("./module-5822.js"), i = require("./module-1663.js"), l = require("./module-9301.js"), d = require("./module-3408.js"), m = require("./module-2706.js");
function c(e, a, n) {
    var t, o;
    (0, s.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const r = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (o = null === (t = e.options) || void 0 === t ? void 0 : t.deprecated) && void 0 !== o && o
    }, E(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: f(e, a),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return B(this.proto.sourceCodeInfo, [
                w.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return B(this.proto.sourceCodeInfo, [
                w.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var a;
            return n(null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    });
    a.mapEntries.clear();
    for (const t of e.enumType)u(t, r, void 0, a, n);
    for (const t of e.messageType)g(t, r, void 0, a, n);
    for (const t of e.service)T(t, r, a, n);
    p(r, a, n);
    for (const e of a.mapEntries.values())A(e, a, n);
    for (const e of r.messages)A(e, a, n), p(e, a, n);
    a.mapEntries.clear(), a.files.push(r);
}
function p(e, a, n) {
    switch(e.kind){
        case "file":
            for (const t of e.proto.extension){
                const s = _(t, e, void 0, a, n);
                e.extensions.push(s), a.extensions.set(s.typeName, s);
            }
            break;
        case "message":
            for (const t of e.proto.extension){
                const s = _(t, e.file, e, a, n);
                e.nestedExtensions.push(s), a.extensions.set(s.typeName, s);
            }
            for (const t of e.nestedMessages)p(t, a, n);
    }
}
function A(e, a, n) {
    const t = e.proto.oneofDecl.map((a)=>(function(e, a, n) {
            return (0, s.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
                kind: "oneof",
                proto: e,
                deprecated: !1,
                parent: a,
                fields: [],
                name: e.name,
                toString () {
                    return `oneof ${a.typeName}.${this.name}`;
                },
                getComments () {
                    const e = [
                        ...this.parent.getComments().sourcePath,
                        w.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return B(a.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var t;
                    return n(a.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
                }
            };
        })(a, e, n)), o = new Set;
    for (const s of e.proto.field){
        const r = v(s, t), i = k(s, e.file, e, r, a, n);
        e.fields.push(i), void 0 === r ? e.members.push(i) : (r.fields.push(i), o.has(r) || (o.add(r), e.members.push(r)));
    }
    for (const a of t.filter((e)=>o.has(e)))e.oneofs.push(a);
    for (const t of e.nestedMessages)A(t, a, n);
}
function u(e, a, n, t, o) {
    var i, l, d;
    (0, s.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const m = {
        kind: "enum",
        proto: e,
        deprecated: null !== (l = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== l && l,
        file: a,
        parent: n,
        name: e.name,
        typeName: C(e, n, a),
        values: [],
        sharedPrefix: (0, r.findEnumSharedPrefix)(e.name, e.value.map((e)=>{
            var a;
            return null !== (a = e.name) && void 0 !== a ? a : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const e = this.parent ? [
                ...this.parent.getComments().sourcePath,
                w.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                w.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return B(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t, s;
            return o(null !== (t = null == n ? void 0 : n.getFeatures()) && void 0 !== t ? t : a.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    t.enums.set(m.typeName, m), e.value.forEach((e)=>{
        var n, t;
        (0, s.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, s.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), m.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (t = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== t && t,
            parent: m,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${m.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let a = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (a += " [deprecated = true]"), a;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    w.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return B(a.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var a;
                return o(m.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
            }
        });
    }), (null !== (d = null == n ? void 0 : n.nestedEnums) && void 0 !== d ? d : a.enums).push(m);
}
function g(e, a, n, t, o) {
    var r, i, l, d;
    (0, s.assert)(e.name, "invalid DescriptorProto: missing name");
    const m = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== i && i,
        file: a,
        parent: n,
        name: e.name,
        typeName: C(e, n, a),
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
                w.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                w.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return B(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t, s;
            return o(null !== (t = null == n ? void 0 : n.getFeatures()) && void 0 !== t ? t : a.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    !0 === (null === (l = e.options) || void 0 === l ? void 0 : l.mapEntry) ? t.mapEntries.set(m.typeName, m) : ((null !== (d = null == n ? void 0 : n.nestedMessages) && void 0 !== d ? d : a.messages).push(m), t.messages.set(m.typeName, m));
    for (const n of e.enumType)u(n, a, m, t, o);
    for (const n of e.nestedType)g(n, a, m, t, o);
}
function T(e, a, n, t) {
    var o, r;
    (0, s.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (r = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== r && r,
        file: a,
        name: e.name,
        typeName: C(e, void 0, a),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                w.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return B(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return t(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
    a.services.push(i), n.services.set(i.typeName, i);
    for (const a of e.method)i.methods.push(h(a, i, n, t));
}
function h(e, a, n, r) {
    var i, l, d;
    let m, c;
    switch((0, s.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, s.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), m = !0 === e.clientStreaming && !0 === e.serverStreaming ? o.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? o.MethodKind.ClientStreaming : !0 === e.serverStreaming ? o.MethodKind.ServerStreaming : o.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case t.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            c = o.MethodIdempotency.Idempotent;
            break;
        case t.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            c = o.MethodIdempotency.NoSideEffects;
            break;
        case t.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            c = void 0;
    }
    const p = n.messages.get(I(e.inputType)), A = n.messages.get(I(e.outputType));
    (0, s.assert)(p, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, s.assert)(A, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const u = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (d = null === (l = e.options) || void 0 === l ? void 0 : l.deprecated) && void 0 !== d && d,
        parent: a,
        name: u,
        methodKind: m,
        input: p,
        output: A,
        idempotency: c,
        toString: ()=>`rpc ${a.typeName}.${u}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                w.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return B(a.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return r(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
}
function k(e, a, n, o, i, l) {
    var m, c, p;
    (0, s.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, s.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, s.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const A = {
        proto: e,
        deprecated: null !== (c = null === (m = e.options) || void 0 === m ? void 0 : m.deprecated) && void 0 !== c && c,
        name: e.name,
        number: e.number,
        parent: n,
        oneof: o,
        optional: y(e, a.syntax),
        packedByDefault: S(e, l),
        packed: R(a, n, e, l),
        jsonName: e.jsonName === (0, r.fieldJsonName)(e.name) ? void 0 : e.jsonName,
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
                w.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return B(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a;
            return l(n.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    }, u = e.label === t.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case t.FieldDescriptorProto_Type.MESSAGE:
        case t.FieldDescriptorProto_Type.GROUP:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const a = i.mapEntries.get(I(e.typeName));
                if (void 0 !== a) return (0, s.assert)(u, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, A), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var a, n;
                    (0, s.assert)(null === (a = e.proto.options) || void 0 === a ? void 0 : a.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, s.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const t = e.fields.find((e)=>1 === e.proto.number);
                    (0, s.assert)(t, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const o = t.scalar;
                    (0, s.assert)(void 0 !== o && o !== d.ScalarType.BYTES && o !== d.ScalarType.FLOAT && o !== d.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (n = t.proto.type) && void 0 !== n ? n : -1}`);
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
                }(a));
                const n = i.messages.get(I(e.typeName));
                return (0, s.assert)(void 0 !== n, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, A), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: u,
                    message: n
                });
            }
        case t.FieldDescriptorProto_Type.ENUM:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const a = i.enums.get(I(e.typeName));
                return (0, s.assert)(void 0 !== a, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, A), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: Q,
                    repeated: u,
                    enum: a
                });
            }
        default:
            {
                const a = N[e.type];
                return (0, s.assert)(a, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, A), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: Q,
                    repeated: u,
                    scalar: a,
                    longType: (null === (p = e.options) || void 0 === p ? void 0 : p.jstype) == t.FieldOptions_JSType.JS_STRING ? d.LongType.STRING : d.LongType.BIGINT
                });
            }
    }
}
function _(e, a, n, t, o) {
    (0, s.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const r = k(e, a, null, void 0, t, o), i = t.messages.get(I(e.extendee));
    return (0, s.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, r), {
        kind: "extension",
        typeName: C(e, n, a),
        parent: n,
        file: a,
        extendee: i,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const n = this.parent ? [
                ...this.parent.getComments().sourcePath,
                w.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                w.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return B(a.proto.sourceCodeInfo, n);
        },
        getFeatures () {
            var t;
            return o((null != n ? n : a).getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    });
}
function E(e, a) {
    let n, s;
    switch(e){
        case void 0:
        case "proto2":
            s = "proto2", n = t.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3", n = t.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(s = "editions", a){
                case void 0:
                case t.Edition.EDITION_1_TEST_ONLY:
                case t.Edition.EDITION_2_TEST_ONLY:
                case t.Edition.EDITION_99997_TEST_ONLY:
                case t.Edition.EDITION_99998_TEST_ONLY:
                case t.Edition.EDITION_99999_TEST_ONLY:
                case t.Edition.EDITION_UNKNOWN:
                    n = t.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    n = a;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && a === t.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(a)}`);
    return {
        syntax: s,
        edition: n
    };
}
function f(e, a) {
    return e.dependency.map((e)=>{
        const n = a.files.find((a)=>a.proto.name === e);
        return (0, s.assert)(n), n;
    });
}
function C(e, a, n) {
    let t;
    return (0, s.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), t = a ? `${a.typeName}.${e.name}` : void 0 !== n.proto.package ? `${n.proto.package}.${e.name}` : `${e.name}`, t;
}
function I(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function v(e, a) {
    var n;
    const t = e.oneofIndex;
    if (void 0 === t) return;
    let o;
    return !0 !== e.proto3Optional && (o = a[t], (0, s.assert)(o, `invalid FieldDescriptorProto: oneof #${t} for field #${null !== (n = e.number) && void 0 !== n ? n : -1} not found`)), o;
}
function y(e, a) {
    switch(a){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === t.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function S(e, a) {
    const { repeatedFieldEncoding: n } = a();
    if (n != t.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
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
function R(e, a, n, s) {
    var o, r, i, l, d, m;
    switch(n.type){
        case t.FieldDescriptorProto_Type.STRING:
        case t.FieldDescriptorProto_Type.BYTES:
        case t.FieldDescriptorProto_Type.GROUP:
        case t.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case t.Edition.EDITION_PROTO2:
                    return null !== (r = null === (o = n.options) || void 0 === o ? void 0 : o.packed) && void 0 !== r && r;
                case t.Edition.EDITION_PROTO3:
                    return null === (l = null === (i = n.options) || void 0 === i ? void 0 : i.packed) || void 0 === l || l;
                default:
                    {
                        const { repeatedFieldEncoding: o } = s(null !== (d = null == a ? void 0 : a.getFeatures()) && void 0 !== d ? d : e.getFeatures(), null === (m = n.options) || void 0 === m ? void 0 : m.features);
                        return o == t.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, a) {
    var n;
    const s = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, o = (0, m.isMessage)(e, t.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? t.FileDescriptorSet.fromBinary(e).file : e, r = new Map;
    for (const e of o){
        const t = null !== (n = e.edition) && void 0 !== n ? n : E(e.syntax, e.edition).edition;
        let o = r.get(t);
        void 0 === o && (o = (0, l.createFeatureResolver)(t, null == a ? void 0 : a.featureSetDefaults, null == a ? void 0 : a.serializationOptions), r.set(t, o)), c(e, s, o);
    }
    return s;
};
const N = {
    [t.FieldDescriptorProto_Type.DOUBLE]: d.ScalarType.DOUBLE,
    [t.FieldDescriptorProto_Type.FLOAT]: d.ScalarType.FLOAT,
    [t.FieldDescriptorProto_Type.INT64]: d.ScalarType.INT64,
    [t.FieldDescriptorProto_Type.UINT64]: d.ScalarType.UINT64,
    [t.FieldDescriptorProto_Type.INT32]: d.ScalarType.INT32,
    [t.FieldDescriptorProto_Type.FIXED64]: d.ScalarType.FIXED64,
    [t.FieldDescriptorProto_Type.FIXED32]: d.ScalarType.FIXED32,
    [t.FieldDescriptorProto_Type.BOOL]: d.ScalarType.BOOL,
    [t.FieldDescriptorProto_Type.STRING]: d.ScalarType.STRING,
    [t.FieldDescriptorProto_Type.GROUP]: void 0,
    [t.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [t.FieldDescriptorProto_Type.BYTES]: d.ScalarType.BYTES,
    [t.FieldDescriptorProto_Type.UINT32]: d.ScalarType.UINT32,
    [t.FieldDescriptorProto_Type.ENUM]: void 0,
    [t.FieldDescriptorProto_Type.SFIXED32]: d.ScalarType.SFIXED32,
    [t.FieldDescriptorProto_Type.SFIXED64]: d.ScalarType.SFIXED64,
    [t.FieldDescriptorProto_Type.SINT32]: d.ScalarType.SINT32,
    [t.FieldDescriptorProto_Type.SINT64]: d.ScalarType.SINT64
};
function B(e, a) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: a
    };
    for (const n of e.location)if (n.path.length === a.length && !n.path.some((e, n)=>a[n] !== e)) return {
        leadingDetached: n.leadingDetachedComments,
        leading: n.leadingComments,
        trailing: n.trailingComments,
        sourcePath: a
    };
    return {
        leadingDetached: [],
        sourcePath: a
    };
}
var w;
function b() {
    var e, a, n;
    const s = [];
    this.repeated && s.push("repeated"), this.optional && s.push("optional");
    let o;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === t.FieldDescriptorProto_Label.REQUIRED && s.push("required"), this.fieldKind){
        case "scalar":
            o = d.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            o = this.enum.typeName;
            break;
        case "message":
            o = this.message.typeName;
            break;
        case "map":
            {
                const e = d.ScalarType[this.mapKey].toLowerCase();
                let a;
                switch(this.mapValue.kind){
                    case "scalar":
                        a = d.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        a = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        a = this.mapValue.message.typeName;
                }
                o = `map<${e}, ${a}>`;
                break;
            }
    }
    s.push(`${o} ${this.name} = ${this.number}`);
    const r = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && r.push(`packed = ${this.proto.options.packed.toString()}`);
    let i = this.proto.defaultValue;
    return void 0 !== i && (this.proto.type != t.FieldDescriptorProto_Type.BYTES && this.proto.type != t.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), r.push(`default = ${i}`)), void 0 !== this.jsonName && r.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (a = this.proto.options) || void 0 === a ? void 0 : a.jstype) && r.push(`jstype = ${t.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (n = this.proto.options) || void 0 === n ? void 0 : n.deprecated) && r.push("deprecated = true"), r.length > 0 && s.push("[" + r.join(", ") + "]"), s.join(" ");
}
function Q() {
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
}(w || (w = {}));
