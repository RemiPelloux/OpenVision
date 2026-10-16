Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const r = require("./module-374.js"), o = require("./module-98.js"), a = require("./module-422.js"), s = require("./module-822.js"), i = require("./module-663.js"), l = require("./module-301.js"), u = require("./module-408.js"), c = require("./module-706.js");
function m(e, t, n) {
    var r, a;
    (0, o.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const s = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (a = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== a && a
    }, N(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: _(e, t),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return P(this.proto.sourceCodeInfo, [
                F.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return P(this.proto.sourceCodeInfo, [
                F.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var t;
            return n(null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    });
    t.mapEntries.clear();
    for (const r of e.enumType)f(r, s, void 0, t, n);
    for (const r of e.messageType)T(r, s, void 0, t, n);
    for (const r of e.service)g(r, s, t, n);
    p(s, t, n);
    for (const e of t.mapEntries.values())d(e, t, n);
    for (const e of s.messages)d(e, t, n), p(e, t, n);
    t.mapEntries.clear(), t.files.push(s);
}
function p(e, t, n) {
    switch(e.kind){
        case "file":
            for (const r of e.proto.extension){
                const o = h(r, e, void 0, t, n);
                e.extensions.push(o), t.extensions.set(o.typeName, o);
            }
            break;
        case "message":
            for (const r of e.proto.extension){
                const o = h(r, e.file, e, t, n);
                e.nestedExtensions.push(o), t.extensions.set(o.typeName, o);
            }
            for (const r of e.nestedMessages)p(r, t, n);
    }
}
function d(e, t, n) {
    const r = e.proto.oneofDecl.map((t)=>(function(e, t, n) {
            return (0, o.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
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
                        F.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return P(t.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var r;
                    return n(t.getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
                }
            };
        })(t, e, n)), a = new Set;
    for (const o of e.proto.field){
        const s = w(o, r), i = y(o, e.file, e, s, t, n);
        e.fields.push(i), void 0 === s ? e.members.push(i) : (s.fields.push(i), a.has(s) || (a.add(s), e.members.push(s)));
    }
    for (const t of r.filter((e)=>a.has(e)))e.oneofs.push(t);
    for (const r of e.nestedMessages)d(r, t, n);
}
function f(e, t, n, r, a) {
    var i, l, u;
    (0, o.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const c = {
        kind: "enum",
        proto: e,
        deprecated: null !== (l = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== l && l,
        file: t,
        parent: n,
        name: e.name,
        typeName: I(e, n, t),
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
                F.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                F.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return P(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var r, o;
            return a(null !== (r = null == n ? void 0 : n.getFeatures()) && void 0 !== r ? r : t.getFeatures(), null === (o = e.options) || void 0 === o ? void 0 : o.features);
        }
    };
    r.enums.set(c.typeName, c), e.value.forEach((e)=>{
        var n, r;
        (0, o.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, o.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), c.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (r = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== r && r,
            parent: c,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${c.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let t = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (t += " [deprecated = true]"), t;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    F.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return P(t.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var t;
                return a(c.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
            }
        });
    }), (null !== (u = null == n ? void 0 : n.nestedEnums) && void 0 !== u ? u : t.enums).push(c);
}
function T(e, t, n, r, a) {
    var s, i, l, u;
    (0, o.assert)(e.name, "invalid DescriptorProto: missing name");
    const c = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (s = e.options) || void 0 === s ? void 0 : s.deprecated) && void 0 !== i && i,
        file: t,
        parent: n,
        name: e.name,
        typeName: I(e, n, t),
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
                F.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                F.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return P(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var r, o;
            return a(null !== (r = null == n ? void 0 : n.getFeatures()) && void 0 !== r ? r : t.getFeatures(), null === (o = e.options) || void 0 === o ? void 0 : o.features);
        }
    };
    !0 === (null === (l = e.options) || void 0 === l ? void 0 : l.mapEntry) ? r.mapEntries.set(c.typeName, c) : ((null !== (u = null == n ? void 0 : n.nestedMessages) && void 0 !== u ? u : t.messages).push(c), r.messages.set(c.typeName, c));
    for (const n of e.enumType)f(n, t, c, r, a);
    for (const n of e.nestedType)T(n, t, c, r, a);
}
function g(e, t, n, r) {
    var a, s;
    (0, o.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (s = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) && void 0 !== s && s,
        file: t,
        name: e.name,
        typeName: I(e, void 0, t),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                F.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return P(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return r(t.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
    t.services.push(i), n.services.set(i.typeName, i);
    for (const t of e.method)i.methods.push(E(t, i, n, r));
}
function E(e, t, n, s) {
    var i, l, u;
    let c, m;
    switch((0, o.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, o.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), c = !0 === e.clientStreaming && !0 === e.serverStreaming ? a.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? a.MethodKind.ClientStreaming : !0 === e.serverStreaming ? a.MethodKind.ServerStreaming : a.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case r.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            m = a.MethodIdempotency.Idempotent;
            break;
        case r.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            m = a.MethodIdempotency.NoSideEffects;
            break;
        case r.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            m = void 0;
    }
    const p = n.messages.get(S(e.inputType)), d = n.messages.get(S(e.outputType));
    (0, o.assert)(p, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, o.assert)(d, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const f = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (u = null === (l = e.options) || void 0 === l ? void 0 : l.deprecated) && void 0 !== u && u,
        parent: t,
        name: f,
        methodKind: c,
        input: p,
        output: d,
        idempotency: m,
        toString: ()=>`rpc ${t.typeName}.${f}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                F.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return P(t.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return s(t.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
}
function y(e, t, n, a, i, l) {
    var c, m, p;
    (0, o.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, o.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, o.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const d = {
        proto: e,
        deprecated: null !== (m = null === (c = e.options) || void 0 === c ? void 0 : c.deprecated) && void 0 !== m && m,
        name: e.name,
        number: e.number,
        parent: n,
        oneof: a,
        optional: O(e, t.syntax),
        packedByDefault: b(e, l),
        packed: k(t, n, e, l),
        jsonName: e.jsonName === (0, s.fieldJsonName)(e.name) ? void 0 : e.jsonName,
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
                F.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return P(t.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var t;
            return l(n.getFeatures(), null === (t = e.options) || void 0 === t ? void 0 : t.features);
        }
    }, f = e.label === r.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case r.FieldDescriptorProto_Type.MESSAGE:
        case r.FieldDescriptorProto_Type.GROUP:
            {
                (0, o.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const t = i.mapEntries.get(S(e.typeName));
                if (void 0 !== t) return (0, o.assert)(f, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, d), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var t, n;
                    (0, o.assert)(null === (t = e.proto.options) || void 0 === t ? void 0 : t.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, o.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const r = e.fields.find((e)=>1 === e.proto.number);
                    (0, o.assert)(r, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const a = r.scalar;
                    (0, o.assert)(void 0 !== a && a !== u.ScalarType.BYTES && a !== u.ScalarType.FLOAT && a !== u.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (n = r.proto.type) && void 0 !== n ? n : -1}`);
                    const s = e.fields.find((e)=>2 === e.proto.number);
                    switch((0, o.assert)(s, `invalid DescriptorProto: map entry ${e.toString()} is missing value field`), s.fieldKind){
                        case "scalar":
                            return {
                                mapKey: a,
                                mapValue: Object.assign(Object.assign({}, s), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: a,
                                mapValue: Object.assign(Object.assign({}, s), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: a,
                                mapValue: Object.assign(Object.assign({}, s), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(t));
                const n = i.messages.get(S(e.typeName));
                return (0, o.assert)(void 0 !== n, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, d), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: f,
                    message: n
                });
            }
        case r.FieldDescriptorProto_Type.ENUM:
            {
                (0, o.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const t = i.enums.get(S(e.typeName));
                return (0, o.assert)(void 0 !== t, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, d), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: R,
                    repeated: f,
                    enum: t
                });
            }
        default:
            {
                const t = v[e.type];
                return (0, o.assert)(t, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, d), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: R,
                    repeated: f,
                    scalar: t,
                    longType: (null === (p = e.options) || void 0 === p ? void 0 : p.jstype) == r.FieldOptions_JSType.JS_STRING ? u.LongType.STRING : u.LongType.BIGINT
                });
            }
    }
}
function h(e, t, n, r, a) {
    (0, o.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const s = y(e, t, null, void 0, r, a), i = r.messages.get(S(e.extendee));
    return (0, o.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, s), {
        kind: "extension",
        typeName: I(e, n, t),
        parent: n,
        file: t,
        extendee: i,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const n = this.parent ? [
                ...this.parent.getComments().sourcePath,
                F.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                F.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return P(t.proto.sourceCodeInfo, n);
        },
        getFeatures () {
            var r;
            return a((null != n ? n : t).getFeatures(), null === (r = e.options) || void 0 === r ? void 0 : r.features);
        }
    });
}
function N(e, t) {
    let n, o;
    switch(e){
        case void 0:
        case "proto2":
            o = "proto2", n = r.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            o = "proto3", n = r.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(o = "editions", t){
                case void 0:
                case r.Edition.EDITION_1_TEST_ONLY:
                case r.Edition.EDITION_2_TEST_ONLY:
                case r.Edition.EDITION_99997_TEST_ONLY:
                case r.Edition.EDITION_99998_TEST_ONLY:
                case r.Edition.EDITION_99999_TEST_ONLY:
                case r.Edition.EDITION_UNKNOWN:
                    n = r.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    n = t;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && t === r.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(t)}`);
    return {
        syntax: o,
        edition: n
    };
}
function _(e, t) {
    return e.dependency.map((e)=>{
        const n = t.files.find((t)=>t.proto.name === e);
        return (0, o.assert)(n), n;
    });
}
function I(e, t, n) {
    let r;
    return (0, o.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), r = t ? `${t.typeName}.${e.name}` : void 0 !== n.proto.package ? `${n.proto.package}.${e.name}` : `${e.name}`, r;
}
function S(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function w(e, t) {
    var n;
    const r = e.oneofIndex;
    if (void 0 === r) return;
    let a;
    return !0 !== e.proto3Optional && (a = t[r], (0, o.assert)(a, `invalid FieldDescriptorProto: oneof #${r} for field #${null !== (n = e.number) && void 0 !== n ? n : -1} not found`)), a;
}
function O(e, t) {
    switch(t){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === r.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function b(e, t) {
    const { repeatedFieldEncoding: n } = t();
    if (n != r.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(e.type){
        case r.FieldDescriptorProto_Type.STRING:
        case r.FieldDescriptorProto_Type.BYTES:
        case r.FieldDescriptorProto_Type.GROUP:
        case r.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function k(e, t, n, o) {
    var a, s, i, l, u, c;
    switch(n.type){
        case r.FieldDescriptorProto_Type.STRING:
        case r.FieldDescriptorProto_Type.BYTES:
        case r.FieldDescriptorProto_Type.GROUP:
        case r.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case r.Edition.EDITION_PROTO2:
                    return null !== (s = null === (a = n.options) || void 0 === a ? void 0 : a.packed) && void 0 !== s && s;
                case r.Edition.EDITION_PROTO3:
                    return null === (l = null === (i = n.options) || void 0 === i ? void 0 : i.packed) || void 0 === l || l;
                default:
                    {
                        const { repeatedFieldEncoding: a } = o(null !== (u = null == t ? void 0 : t.getFeatures()) && void 0 !== u ? u : e.getFeatures(), null === (c = n.options) || void 0 === c ? void 0 : c.features);
                        return a == r.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, t) {
    var n;
    const o = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, a = (0, c.isMessage)(e, r.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? r.FileDescriptorSet.fromBinary(e).file : e, s = new Map;
    for (const e of a){
        const r = null !== (n = e.edition) && void 0 !== n ? n : N(e.syntax, e.edition).edition;
        let a = s.get(r);
        void 0 === a && (a = (0, l.createFeatureResolver)(r, null == t ? void 0 : t.featureSetDefaults, null == t ? void 0 : t.serializationOptions), s.set(r, a)), m(e, o, a);
    }
    return o;
};
const v = {
    [r.FieldDescriptorProto_Type.DOUBLE]: u.ScalarType.DOUBLE,
    [r.FieldDescriptorProto_Type.FLOAT]: u.ScalarType.FLOAT,
    [r.FieldDescriptorProto_Type.INT64]: u.ScalarType.INT64,
    [r.FieldDescriptorProto_Type.UINT64]: u.ScalarType.UINT64,
    [r.FieldDescriptorProto_Type.INT32]: u.ScalarType.INT32,
    [r.FieldDescriptorProto_Type.FIXED64]: u.ScalarType.FIXED64,
    [r.FieldDescriptorProto_Type.FIXED32]: u.ScalarType.FIXED32,
    [r.FieldDescriptorProto_Type.BOOL]: u.ScalarType.BOOL,
    [r.FieldDescriptorProto_Type.STRING]: u.ScalarType.STRING,
    [r.FieldDescriptorProto_Type.GROUP]: void 0,
    [r.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [r.FieldDescriptorProto_Type.BYTES]: u.ScalarType.BYTES,
    [r.FieldDescriptorProto_Type.UINT32]: u.ScalarType.UINT32,
    [r.FieldDescriptorProto_Type.ENUM]: void 0,
    [r.FieldDescriptorProto_Type.SFIXED32]: u.ScalarType.SFIXED32,
    [r.FieldDescriptorProto_Type.SFIXED64]: u.ScalarType.SFIXED64,
    [r.FieldDescriptorProto_Type.SINT32]: u.ScalarType.SINT32,
    [r.FieldDescriptorProto_Type.SINT64]: u.ScalarType.SINT64
};
function P(e, t) {
    if (!e) return {
        leadingDetached: [],
        sourcePath: t
    };
    for (const n of e.location)if (n.path.length === t.length && !n.path.some((e, n)=>t[n] !== e)) return {
        leadingDetached: n.leadingDetachedComments,
        leading: n.leadingComments,
        trailing: n.trailingComments,
        sourcePath: t
    };
    return {
        leadingDetached: [],
        sourcePath: t
    };
}
var F;
function D() {
    var e, t, n;
    const o = [];
    this.repeated && o.push("repeated"), this.optional && o.push("optional");
    let a;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === r.FieldDescriptorProto_Label.REQUIRED && o.push("required"), this.fieldKind){
        case "scalar":
            a = u.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            a = this.enum.typeName;
            break;
        case "message":
            a = this.message.typeName;
            break;
        case "map":
            {
                const e = u.ScalarType[this.mapKey].toLowerCase();
                let t;
                switch(this.mapValue.kind){
                    case "scalar":
                        t = u.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        t = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        t = this.mapValue.message.typeName;
                }
                a = `map<${e}, ${t}>`;
                break;
            }
    }
    o.push(`${a} ${this.name} = ${this.number}`);
    const s = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && s.push(`packed = ${this.proto.options.packed.toString()}`);
    let i = this.proto.defaultValue;
    return void 0 !== i && (this.proto.type != r.FieldDescriptorProto_Type.BYTES && this.proto.type != r.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), s.push(`default = ${i}`)), void 0 !== this.jsonName && s.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t = this.proto.options) || void 0 === t ? void 0 : t.jstype) && s.push(`jstype = ${r.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (n = this.proto.options) || void 0 === n ? void 0 : n.deprecated) && s.push("deprecated = true"), s.length > 0 && o.push("[" + s.join(", ") + "]"), o.join(" ");
}
function R() {
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
}(F || (F = {}));
