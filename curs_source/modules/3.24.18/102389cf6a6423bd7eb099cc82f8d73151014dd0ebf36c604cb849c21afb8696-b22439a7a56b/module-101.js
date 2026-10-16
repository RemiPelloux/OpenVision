Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const o = require("./module-374.js"), s = require("./module-98.js"), t = require("./module-422.js"), r = require("./module-822.js"), i = require("./module-663.js"), m = require("./module-301.js"), l = require("./module-408.js"), d = require("./module-706.js");
function c(e, a, n) {
    var o, t;
    (0, s.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const r = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (t = null === (o = e.options) || void 0 === o ? void 0 : o.deprecated) && void 0 !== t && t
    }, N(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: v(e, a),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return h(this.proto.sourceCodeInfo, [
                M.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return h(this.proto.sourceCodeInfo, [
                M.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var a;
            return n(null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    });
    a.mapEntries.clear();
    for (const o of e.enumType)p(o, r, void 0, a, n);
    for (const o of e.messageType)u(o, r, void 0, a, n);
    for (const o of e.service)k(o, r, a, n);
    T(r, a, n);
    for (const e of a.mapEntries.values())_(e, a, n);
    for (const e of r.messages)_(e, a, n), T(e, a, n);
    a.mapEntries.clear(), a.files.push(r);
}
function T(e, a, n) {
    switch(e.kind){
        case "file":
            for (const o of e.proto.extension){
                const s = f(o, e, void 0, a, n);
                e.extensions.push(s), a.extensions.set(s.typeName, s);
            }
            break;
        case "message":
            for (const o of e.proto.extension){
                const s = f(o, e.file, e, a, n);
                e.nestedExtensions.push(s), a.extensions.set(s.typeName, s);
            }
            for (const o of e.nestedMessages)T(o, a, n);
    }
}
function _(e, a, n) {
    const o = e.proto.oneofDecl.map((a)=>(function(e, a, n) {
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
                        M.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return h(a.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var o;
                    return n(a.getFeatures(), null === (o = e.options) || void 0 === o ? void 0 : o.features);
                }
            };
        })(a, e, n)), t = new Set;
    for (const s of e.proto.field){
        const r = R(s, o), i = E(s, e.file, e, r, a, n);
        e.fields.push(i), void 0 === r ? e.members.push(i) : (r.fields.push(i), t.has(r) || (t.add(r), e.members.push(r)));
    }
    for (const a of o.filter((e)=>t.has(e)))e.oneofs.push(a);
    for (const o of e.nestedMessages)_(o, a, n);
}
function p(e, a, n, o, t) {
    var i, m, l;
    (0, s.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const d = {
        kind: "enum",
        proto: e,
        deprecated: null !== (m = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== m && m,
        file: a,
        parent: n,
        name: e.name,
        typeName: y(e, n, a),
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
                M.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                M.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return h(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var o, s;
            return t(null !== (o = null == n ? void 0 : n.getFeatures()) && void 0 !== o ? o : a.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    o.enums.set(d.typeName, d), e.value.forEach((e)=>{
        var n, o;
        (0, s.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, s.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), d.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== o && o,
            parent: d,
            name: e.name,
            number: e.number,
            toString () {
                return `enum value ${d.typeName}.${this.name}`;
            },
            declarationString () {
                var e;
                let a = `${this.name} = ${this.number}`;
                return !0 === (null === (e = this.proto.options) || void 0 === e ? void 0 : e.deprecated) && (a += " [deprecated = true]"), a;
            },
            getComments () {
                const e = [
                    ...this.parent.getComments().sourcePath,
                    M.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return h(a.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var a;
                return t(d.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
            }
        });
    }), (null !== (l = null == n ? void 0 : n.nestedEnums) && void 0 !== l ? l : a.enums).push(d);
}
function u(e, a, n, o, t) {
    var r, i, m, l;
    (0, s.assert)(e.name, "invalid DescriptorProto: missing name");
    const d = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== i && i,
        file: a,
        parent: n,
        name: e.name,
        typeName: y(e, n, a),
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
                M.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                M.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return h(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var o, s;
            return t(null !== (o = null == n ? void 0 : n.getFeatures()) && void 0 !== o ? o : a.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    };
    !0 === (null === (m = e.options) || void 0 === m ? void 0 : m.mapEntry) ? o.mapEntries.set(d.typeName, d) : ((null !== (l = null == n ? void 0 : n.nestedMessages) && void 0 !== l ? l : a.messages).push(d), o.messages.set(d.typeName, d));
    for (const n of e.enumType)p(n, a, d, o, t);
    for (const n of e.nestedType)u(n, a, d, o, t);
}
function k(e, a, n, o) {
    var t, r;
    (0, s.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (r = null === (t = e.options) || void 0 === t ? void 0 : t.deprecated) && void 0 !== r && r,
        file: a,
        name: e.name,
        typeName: y(e, void 0, a),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                M.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return h(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return o(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
    a.services.push(i), n.services.set(i.typeName, i);
    for (const a of e.method)i.methods.push(g(a, i, n, o));
}
function g(e, a, n, r) {
    var i, m, l;
    let d, c;
    switch((0, s.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, s.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), d = !0 === e.clientStreaming && !0 === e.serverStreaming ? t.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? t.MethodKind.ClientStreaming : !0 === e.serverStreaming ? t.MethodKind.ServerStreaming : t.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case o.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            c = t.MethodIdempotency.Idempotent;
            break;
        case o.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            c = t.MethodIdempotency.NoSideEffects;
            break;
        case o.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            c = void 0;
    }
    const T = n.messages.get(S(e.inputType)), _ = n.messages.get(S(e.outputType));
    (0, s.assert)(T, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, s.assert)(_, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const p = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (l = null === (m = e.options) || void 0 === m ? void 0 : m.deprecated) && void 0 !== l && l,
        parent: a,
        name: p,
        methodKind: d,
        input: T,
        output: _,
        idempotency: c,
        toString: ()=>`rpc ${a.typeName}.${p}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                M.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return h(a.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return r(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
}
function E(e, a, n, t, i, m) {
    var d, c, T;
    (0, s.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, s.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, s.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const _ = {
        proto: e,
        deprecated: null !== (c = null === (d = e.options) || void 0 === d ? void 0 : d.deprecated) && void 0 !== c && c,
        name: e.name,
        number: e.number,
        parent: n,
        oneof: t,
        optional: I(e, a.syntax),
        packedByDefault: O(e, m),
        packed: A(a, n, e, m),
        jsonName: e.jsonName === (0, r.fieldJsonName)(e.name) ? void 0 : e.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: P,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                M.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return h(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a;
            return m(n.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    }, p = e.label === o.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case o.FieldDescriptorProto_Type.MESSAGE:
        case o.FieldDescriptorProto_Type.GROUP:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const a = i.mapEntries.get(S(e.typeName));
                if (void 0 !== a) return (0, s.assert)(p, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, _), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var a, n;
                    (0, s.assert)(null === (a = e.proto.options) || void 0 === a ? void 0 : a.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, s.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const o = e.fields.find((e)=>1 === e.proto.number);
                    (0, s.assert)(o, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const t = o.scalar;
                    (0, s.assert)(void 0 !== t && t !== l.ScalarType.BYTES && t !== l.ScalarType.FLOAT && t !== l.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (n = o.proto.type) && void 0 !== n ? n : -1}`);
                    const r = e.fields.find((e)=>2 === e.proto.number);
                    switch((0, s.assert)(r, `invalid DescriptorProto: map entry ${e.toString()} is missing value field`), r.fieldKind){
                        case "scalar":
                            return {
                                mapKey: t,
                                mapValue: Object.assign(Object.assign({}, r), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: t,
                                mapValue: Object.assign(Object.assign({}, r), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: t,
                                mapValue: Object.assign(Object.assign({}, r), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(a));
                const n = i.messages.get(S(e.typeName));
                return (0, s.assert)(void 0 !== n, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, _), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: p,
                    message: n
                });
            }
        case o.FieldDescriptorProto_Type.ENUM:
            {
                (0, s.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const a = i.enums.get(S(e.typeName));
                return (0, s.assert)(void 0 !== a, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, _), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: D,
                    repeated: p,
                    enum: a
                });
            }
        default:
            {
                const a = C[e.type];
                return (0, s.assert)(a, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, _), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: D,
                    repeated: p,
                    scalar: a,
                    longType: (null === (T = e.options) || void 0 === T ? void 0 : T.jstype) == o.FieldOptions_JSType.JS_STRING ? l.LongType.STRING : l.LongType.BIGINT
                });
            }
    }
}
function f(e, a, n, o, t) {
    (0, s.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const r = E(e, a, null, void 0, o, t), i = o.messages.get(S(e.extendee));
    return (0, s.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, r), {
        kind: "extension",
        typeName: y(e, n, a),
        parent: n,
        file: a,
        extendee: i,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const n = this.parent ? [
                ...this.parent.getComments().sourcePath,
                M.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                M.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return h(a.proto.sourceCodeInfo, n);
        },
        getFeatures () {
            var o;
            return t((null != n ? n : a).getFeatures(), null === (o = e.options) || void 0 === o ? void 0 : o.features);
        }
    });
}
function N(e, a) {
    let n, s;
    switch(e){
        case void 0:
        case "proto2":
            s = "proto2", n = o.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3", n = o.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(s = "editions", a){
                case void 0:
                case o.Edition.EDITION_1_TEST_ONLY:
                case o.Edition.EDITION_2_TEST_ONLY:
                case o.Edition.EDITION_99997_TEST_ONLY:
                case o.Edition.EDITION_99998_TEST_ONLY:
                case o.Edition.EDITION_99999_TEST_ONLY:
                case o.Edition.EDITION_UNKNOWN:
                    n = o.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    n = a;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && a === o.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(a)}`);
    return {
        syntax: s,
        edition: n
    };
}
function v(e, a) {
    return e.dependency.map((e)=>{
        const n = a.files.find((a)=>a.proto.name === e);
        return (0, s.assert)(n), n;
    });
}
function y(e, a, n) {
    let o;
    return (0, s.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), o = a ? `${a.typeName}.${e.name}` : void 0 !== n.proto.package ? `${n.proto.package}.${e.name}` : `${e.name}`, o;
}
function S(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function R(e, a) {
    var n;
    const o = e.oneofIndex;
    if (void 0 === o) return;
    let t;
    return !0 !== e.proto3Optional && (t = a[o], (0, s.assert)(t, `invalid FieldDescriptorProto: oneof #${o} for field #${null !== (n = e.number) && void 0 !== n ? n : -1} not found`)), t;
}
function I(e, a) {
    switch(a){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === o.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function O(e, a) {
    const { repeatedFieldEncoding: n } = a();
    if (n != o.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(e.type){
        case o.FieldDescriptorProto_Type.STRING:
        case o.FieldDescriptorProto_Type.BYTES:
        case o.FieldDescriptorProto_Type.GROUP:
        case o.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function A(e, a, n, s) {
    var t, r, i, m, l, d;
    switch(n.type){
        case o.FieldDescriptorProto_Type.STRING:
        case o.FieldDescriptorProto_Type.BYTES:
        case o.FieldDescriptorProto_Type.GROUP:
        case o.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case o.Edition.EDITION_PROTO2:
                    return null !== (r = null === (t = n.options) || void 0 === t ? void 0 : t.packed) && void 0 !== r && r;
                case o.Edition.EDITION_PROTO3:
                    return null === (m = null === (i = n.options) || void 0 === i ? void 0 : i.packed) || void 0 === m || m;
                default:
                    {
                        const { repeatedFieldEncoding: t } = s(null !== (l = null == a ? void 0 : a.getFeatures()) && void 0 !== l ? l : e.getFeatures(), null === (d = n.options) || void 0 === d ? void 0 : d.features);
                        return t == o.FeatureSet_RepeatedFieldEncoding.PACKED;
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
    }, t = (0, d.isMessage)(e, o.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? o.FileDescriptorSet.fromBinary(e).file : e, r = new Map;
    for (const e of t){
        const o = null !== (n = e.edition) && void 0 !== n ? n : N(e.syntax, e.edition).edition;
        let t = r.get(o);
        void 0 === t && (t = (0, m.createFeatureResolver)(o, null == a ? void 0 : a.featureSetDefaults, null == a ? void 0 : a.serializationOptions), r.set(o, t)), c(e, s, t);
    }
    return s;
};
const C = {
    [o.FieldDescriptorProto_Type.DOUBLE]: l.ScalarType.DOUBLE,
    [o.FieldDescriptorProto_Type.FLOAT]: l.ScalarType.FLOAT,
    [o.FieldDescriptorProto_Type.INT64]: l.ScalarType.INT64,
    [o.FieldDescriptorProto_Type.UINT64]: l.ScalarType.UINT64,
    [o.FieldDescriptorProto_Type.INT32]: l.ScalarType.INT32,
    [o.FieldDescriptorProto_Type.FIXED64]: l.ScalarType.FIXED64,
    [o.FieldDescriptorProto_Type.FIXED32]: l.ScalarType.FIXED32,
    [o.FieldDescriptorProto_Type.BOOL]: l.ScalarType.BOOL,
    [o.FieldDescriptorProto_Type.STRING]: l.ScalarType.STRING,
    [o.FieldDescriptorProto_Type.GROUP]: void 0,
    [o.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [o.FieldDescriptorProto_Type.BYTES]: l.ScalarType.BYTES,
    [o.FieldDescriptorProto_Type.UINT32]: l.ScalarType.UINT32,
    [o.FieldDescriptorProto_Type.ENUM]: void 0,
    [o.FieldDescriptorProto_Type.SFIXED32]: l.ScalarType.SFIXED32,
    [o.FieldDescriptorProto_Type.SFIXED64]: l.ScalarType.SFIXED64,
    [o.FieldDescriptorProto_Type.SINT32]: l.ScalarType.SINT32,
    [o.FieldDescriptorProto_Type.SINT64]: l.ScalarType.SINT64
};
function h(e, a) {
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
var M;
function P() {
    var e, a, n;
    const s = [];
    this.repeated && s.push("repeated"), this.optional && s.push("optional");
    let t;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === o.FieldDescriptorProto_Label.REQUIRED && s.push("required"), this.fieldKind){
        case "scalar":
            t = l.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            t = this.enum.typeName;
            break;
        case "message":
            t = this.message.typeName;
            break;
        case "map":
            {
                const e = l.ScalarType[this.mapKey].toLowerCase();
                let a;
                switch(this.mapValue.kind){
                    case "scalar":
                        a = l.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        a = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        a = this.mapValue.message.typeName;
                }
                t = `map<${e}, ${a}>`;
                break;
            }
    }
    s.push(`${t} ${this.name} = ${this.number}`);
    const r = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && r.push(`packed = ${this.proto.options.packed.toString()}`);
    let i = this.proto.defaultValue;
    return void 0 !== i && (this.proto.type != o.FieldDescriptorProto_Type.BYTES && this.proto.type != o.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), r.push(`default = ${i}`)), void 0 !== this.jsonName && r.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (a = this.proto.options) || void 0 === a ? void 0 : a.jstype) && r.push(`jstype = ${o.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (n = this.proto.options) || void 0 === n ? void 0 : n.deprecated) && r.push("deprecated = true"), r.length > 0 && s.push("[" + r.join(", ") + "]"), s.join(" ");
}
function D() {
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
}(M || (M = {}));
