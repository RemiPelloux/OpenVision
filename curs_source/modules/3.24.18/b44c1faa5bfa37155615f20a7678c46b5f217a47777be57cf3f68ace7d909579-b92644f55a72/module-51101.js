"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const n = require("./module-27374.js"), s = require("./module-43098.js"), o = require("./module-22422.js"), i = require("./module-75822.js"), a = require("./module-31663.js"), c = require("./module-69301.js"), l = require("./module-3408.js"), u = require("./module-62706.js");
function d(e, t, r) {
    var n, o;
    (0, s.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const i = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== o && o
    }, _(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: A(e, t),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return T(this.proto.sourceCodeInfo, [
                R.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return T(this.proto.sourceCodeInfo, [
                R.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var t;
            return r(null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    });
    t.mapEntries.clear();
    for (const n of e.enumType)h(n, i, void 0, t, r);
    for (const n of e.messageType)f(n, i, void 0, t, r);
    for (const n of e.service)g(n, i, t, r);
    p(i, t, r);
    for (const e of t.mapEntries.values())m(e, t, r);
    for (const e of i.messages)m(e, t, r), p(e, t, r);
    t.mapEntries.clear(), t.files.push(i);
}
function p(e, t, r) {
    switch(e.kind){
        case "file":
            for (const n of e.proto.extension){
                const s = v(n, e, void 0, t, r);
                e.extensions.push(s), t.extensions.set(s.typeName, s);
            }
            break;
        case "message":
            for (const n of e.proto.extension){
                const s = v(n, e.file, e, t, r);
                e.nestedExtensions.push(s), t.extensions.set(s.typeName, s);
            }
            for (const n of e.nestedMessages)p(n, t, r);
    }
}
function m(e, t, r) {
    const n = e.proto.oneofDecl.map((t)=>(function(e, t, r) {
            return (0, s.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
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
                        R.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return T(t.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var n;
                    return r(t.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
                }
            };
        })(t, e, r)), o = new Set;
    for (const s of e.proto.field){
        const i = E(s, n), a = w(s, e.file, e, i, t, r);
        e.fields.push(a), void 0 === i ? e.members.push(a) : (i.fields.push(a), o.has(i) || (o.add(i), e.members.push(i)));
    }
    for (const t of n.filter((e)=>o.has(e)))e.oneofs.push(t);
    for (const n of e.nestedMessages)m(n, t, r);
}
function h(e, t, r, n, o) {
    var a, c, l;
    (0, s.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const u = {
        kind: "enum",
        proto: e,
        deprecated: null !== (c = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== c && c,
        file: t,
        parent: r,
        name: e.name,
        typeName: S(e, r, t),
        values: [],
        sharedPrefix: (0, i.findEnumSharedPrefix)(e.name, e.value.map((e)=>{
            var t;
            return null !== (t = e.name) && void 0 !== t ? t : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const e = this.parent ? [
                ...this.parent.getComments().sourcePath,
                R.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                R.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return T(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n, s;
            return o(null !== (n = null == r ? void 0 : r.getFeatures()) && void 0 !== n ? n : t.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    n.enums.set(u.typeName, u), e.value.forEach((e)=>{
        var r, n;
        (0, s.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, s.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), u.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (n = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== n && n,
            parent: u,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${u.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let t = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (t += " [deprecated = true]"), t;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    R.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return T(t.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var t;
                return o(u.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
            }
        });
    }), (null !== (l = null == r ? void 0 : r.nestedEnums) && void 0 !== l ? l : t.enums).push(u);
}
function f(e, t, r, n, o) {
    var i, a, c, l;
    (0, s.assert)(e.name, "invalid DescriptorProto: missing name");
    const u = {
        kind: "message",
        proto: e,
        deprecated: null !== (a = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== a && a,
        file: t,
        parent: r,
        name: e.name,
        typeName: S(e, r, t),
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
                R.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                R.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return T(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n, s;
            return o(null !== (n = null == r ? void 0 : r.getFeatures()) && void 0 !== n ? n : t.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    !0 === (null === (c = e.options) || void 0 === c ? void 0 : c.mapEntry) ? n.mapEntries.set(u.typeName, u) : ((null !== (l = null == r ? void 0 : r.nestedMessages) && void 0 !== l ? l : t.messages).push(u), n.messages.set(u.typeName, u));
    for (const r of e.enumType)h(r, t, u, n, o);
    for (const r of e.nestedType)f(r, t, u, n, o);
}
function g(e, t, r, n) {
    var o, i;
    (0, s.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const a = {
        kind: "service",
        proto: e,
        deprecated: null !== (i = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== i && i,
        file: t,
        name: e.name,
        typeName: S(e, void 0, t),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                R.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return T(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var r;
            return n(t.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    };
    t.services.push(a), r.services.set(a.typeName, a);
    for (const t of e.method)a.methods.push(y(t, a, r, n));
}
function y(e, t, r, i) {
    var a, c, l;
    let u, d;
    switch((0, s.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, s.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), u = !0 === e.clientStreaming && !0 === e.serverStreaming ? o.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? o.MethodKind.ClientStreaming : !0 === e.serverStreaming ? o.MethodKind.ServerStreaming : o.MethodKind.Unary, null === (a = e.options) || void 0 === a ? void 0 : a.idempotencyLevel){
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            d = o.MethodIdempotency.Idempotent;
            break;
        case n.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            d = o.MethodIdempotency.NoSideEffects;
            break;
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            d = void 0;
    }
    const p = r.messages.get(b(e.inputType)), m = r.messages.get(b(e.outputType));
    (0, s.assert)(p, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, s.assert)(m, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const h = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (l = null === (c = e.options) || void 0 === c ? void 0 : c.deprecated) && void 0 !== l && l,
        parent: t,
        name: h,
        methodKind: u,
        input: p,
        output: m,
        idempotency: d,
        toString: ()=>`rpc ${t.typeName}.${h}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                R.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return T(t.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var r;
            return i(t.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    };
}
function w(e, t, r, o, a, c) {
    var u, d, p;
    (0, s.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, s.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, s.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const m = {
        proto: e,
        deprecated: null !== (d = null === (u = e.options) || void 0 === u ? void 0 : u.deprecated) && void 0 !== d && d,
        name: e.name,
        number: e.number,
        parent: r,
        oneof: o,
        optional: I(e, t.syntax),
        packedByDefault: C(e, c),
        packed: k(t, r, e, c),
        jsonName: e.jsonName === (0, i.fieldJsonName)(e.name) ? void 0 : e.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: B,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                R.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return T(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return c(r.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    }, h = e.label === n.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case n.FieldDescriptorProto_Type.MESSAGE:
        case n.FieldDescriptorProto_Type.GROUP:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const t = a.mapEntries.get(b(e.typeName));
                if (void 0 !== t) return (0, s.assert)(h, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, m), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var t, r;
                    (0, s.assert)(null === (t = e.proto.options) || void 0 === t ? void 0 : t.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, s.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const n = e.fields.find((e)=>1 === e.proto.number);
                    (0, s.assert)(n, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const o = n.scalar;
                    (0, s.assert)(void 0 !== o && o !== l.ScalarType.BYTES && o !== l.ScalarType.FLOAT && o !== l.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (r = n.proto.type) && void 0 !== r ? r : -1}`);
                    const i = e.fields.find((e)=>2 === e.proto.number);
                    switch((0, s.assert)(i, `invalid DescriptorProto: map entry ${e.toString()} is missing value field`), i.fieldKind){
                        case "scalar":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, i), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, i), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: o,
                                mapValue: Object.assign(Object.assign({}, i), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(t));
                const r = a.messages.get(b(e.typeName));
                return (0, s.assert)(void 0 !== r, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, m), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: h,
                    message: r
                });
            }
        case n.FieldDescriptorProto_Type.ENUM:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const t = a.enums.get(b(e.typeName));
                return (0, s.assert)(void 0 !== t, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, m), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: P,
                    repeated: h,
                    enum: t
                });
            }
        default:
            {
                const t = x[e.type];
                return (0, s.assert)(t, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, m), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: P,
                    repeated: h,
                    scalar: t,
                    longType: (null === (p = e.options) || void 0 === p ? void 0 : p.jstype) == n.FieldOptions_JSType.JS_STRING ? l.LongType.STRING : l.LongType.BIGINT
                });
            }
    }
}
function v(e, t, r, n, o) {
    (0, s.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const i = w(e, t, null, void 0, n, o), a = n.messages.get(b(e.extendee));
    return (0, s.assert)(a, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, i), {
        kind: "extension",
        typeName: S(e, r, t),
        parent: r,
        file: t,
        extendee: a,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const r = this.parent ? [
                ...this.parent.getComments().sourcePath,
                R.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                R.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return T(t.proto.sourceCodeInfo, r);
        },
        getFeatures () {
            var n;
            return o((null != r ? r : t).getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    });
}
function _(e, t) {
    let r, s;
    switch(e){
        case void 0:
        case "proto2":
            s = "proto2", r = n.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3", r = n.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(s = "editions", t){
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
                    r = t;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && t === n.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(t)}`);
    return {
        syntax: s,
        edition: r
    };
}
function A(e, t) {
    return e.dependency.map((e)=>{
        const r = t.files.find((t)=>t.proto.name === e);
        return (0, s.assert)(r), r;
    });
}
function S(e, t, r) {
    let n;
    return (0, s.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), n = t ? `${t.typeName}.${e.name}` : void 0 !== r.proto.package ? `${r.proto.package}.${e.name}` : `${e.name}`, n;
}
function b(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function E(e, t) {
    var r;
    const n = e.oneofIndex;
    if (void 0 === n) return;
    let o;
    return !0 !== e.proto3Optional && (o = t[n], (0, s.assert)(o, `invalid FieldDescriptorProto: oneof #${n} for field #${null !== (r = e.number) && void 0 !== r ? r : -1} not found`)), o;
}
function I(e, t) {
    switch(t){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === n.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function C(e, t) {
    const { repeatedFieldEncoding: r } = t();
    if (r != n.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
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
function k(e, t, r, s) {
    var o, i, a, c, l, u;
    switch(r.type){
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case n.Edition.EDITION_PROTO2:
                    return null !== (i = null === (o = r.options) || void 0 === o ? void 0 : o.packed) && void 0 !== i && i;
                case n.Edition.EDITION_PROTO3:
                    return null === (c = null === (a = r.options) || void 0 === a ? void 0 : a.packed) || void 0 === c || c;
                default:
                    {
                        const { repeatedFieldEncoding: o } = s(null !== (l = null == t ? void 0 : t.getFeatures()) && void 0 !== l ? l : e.getFeatures(), null === (u = r.options) || void 0 === u ? void 0 : u.features);
                        return o == n.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, t) {
    var r;
    const s = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, o = (0, u.isMessage)(e, n.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? n.FileDescriptorSet.fromBinary(e).file : e, i = new Map;
    for (const e of o){
        const n = null !== (r = e.edition) && void 0 !== r ? r : _(e.syntax, e.edition).edition;
        let o = i.get(n);
        void 0 === o && (o = (0, c.createFeatureResolver)(n, null == t ? void 0 : t.featureSetDefaults, null == t ? void 0 : t.serializationOptions), i.set(n, o)), d(e, s, o);
    }
    return s;
};
const x = {
    [n.FieldDescriptorProto_Type.DOUBLE]: l.ScalarType.DOUBLE,
    [n.FieldDescriptorProto_Type.FLOAT]: l.ScalarType.FLOAT,
    [n.FieldDescriptorProto_Type.INT64]: l.ScalarType.INT64,
    [n.FieldDescriptorProto_Type.UINT64]: l.ScalarType.UINT64,
    [n.FieldDescriptorProto_Type.INT32]: l.ScalarType.INT32,
    [n.FieldDescriptorProto_Type.FIXED64]: l.ScalarType.FIXED64,
    [n.FieldDescriptorProto_Type.FIXED32]: l.ScalarType.FIXED32,
    [n.FieldDescriptorProto_Type.BOOL]: l.ScalarType.BOOL,
    [n.FieldDescriptorProto_Type.STRING]: l.ScalarType.STRING,
    [n.FieldDescriptorProto_Type.GROUP]: void 0,
    [n.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [n.FieldDescriptorProto_Type.BYTES]: l.ScalarType.BYTES,
    [n.FieldDescriptorProto_Type.UINT32]: l.ScalarType.UINT32,
    [n.FieldDescriptorProto_Type.ENUM]: void 0,
    [n.FieldDescriptorProto_Type.SFIXED32]: l.ScalarType.SFIXED32,
    [n.FieldDescriptorProto_Type.SFIXED64]: l.ScalarType.SFIXED64,
    [n.FieldDescriptorProto_Type.SINT32]: l.ScalarType.SINT32,
    [n.FieldDescriptorProto_Type.SINT64]: l.ScalarType.SINT64
};
function T(e, t) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: t
    };
    for (const r of e.location)if (r.path.length === t.length && !r.path.some((e, r)=>t[r] !== e)) return {
        leadingDetached: r.leadingDetachedComments,
        leading: r.leadingComments,
        trailing: r.trailingComments,
        sourcePath: t
    };
    return {
        leadingDetached: [],
        sourcePath: t
    };
}
var R;
function B() {
    var e, t, r;
    const s = [];
    this.repeated && s.push("repeated"), this.optional && s.push("optional");
    let o;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n.FieldDescriptorProto_Label.REQUIRED && s.push("required"), this.fieldKind){
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
                let t;
                switch(this.mapValue.kind){
                    case "scalar":
                        t = l.ScalarType[this.mapValue.scalar].toLowerCase();
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
    s.push(`${o} ${this.name} = ${this.number}`);
    const i = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && i.push(`packed = ${this.proto.options.packed.toString()}`);
    let a = this.proto.defaultValue;
    return void 0 !== a && (this.proto.type != n.FieldDescriptorProto_Type.BYTES && this.proto.type != n.FieldDescriptorProto_Type.STRING || (a = '"' + a.replace('"', '\\"') + '"'), i.push(`default = ${a}`)), void 0 !== this.jsonName && i.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t = this.proto.options) || void 0 === t ? void 0 : t.jstype) && i.push(`jstype = ${n.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (r = this.proto.options) || void 0 === r ? void 0 : r.deprecated) && i.push("deprecated = true"), i.length > 0 && s.push("[" + i.join(", ") + "]"), s.join(" ");
}
function P() {
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
}(R || (R = {}));
