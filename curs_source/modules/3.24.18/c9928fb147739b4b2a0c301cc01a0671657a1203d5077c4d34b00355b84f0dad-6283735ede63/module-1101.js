Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDescriptorSet = void 0;
const s = require("./module-7374.js"), o = require("./module-3098.js"), r = require("./module-2422.js"), t = require("./module-5822.js"), i = require("./module-1663.js"), m = require("./module-9301.js"), l = require("./module-3408.js"), d = require("./module-2706.js");
function c(e, a, n) {
    var s, r;
    (0, o.assert)(e.name, "invalid FileDescriptorProto: missing name");
    const t = Object.assign(Object.assign({
        kind: "file",
        proto: e,
        deprecated: null !== (r = null === (s = e.options) || void 0 === s ? void 0 : s.deprecated) && void 0 !== r && r
    }, y(e.syntax, e.edition)), {
        name: e.name.replace(/\.proto/, ""),
        dependencies: S(e, a),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return M(this.proto.sourceCodeInfo, [
                C.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return M(this.proto.sourceCodeInfo, [
                C.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var a;
            return n(null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    });
    a.mapEntries.clear();
    for (const s of e.enumType)_(s, t, void 0, a, n);
    for (const s of e.messageType)k(s, t, void 0, a, n);
    for (const s of e.service)u(s, t, a, n);
    T(t, a, n);
    for (const e of a.mapEntries.values())p(e, a, n);
    for (const e of t.messages)p(e, a, n), T(e, a, n);
    a.mapEntries.clear(), a.files.push(t);
}
function T(e, a, n) {
    switch(e.kind){
        case "file":
            for (const s of e.proto.extension){
                const o = v(s, e, void 0, a, n);
                e.extensions.push(o), a.extensions.set(o.typeName, o);
            }
            break;
        case "message":
            for (const s of e.proto.extension){
                const o = v(s, e.file, e, a, n);
                e.nestedExtensions.push(o), a.extensions.set(o.typeName, o);
            }
            for (const s of e.nestedMessages)T(s, a, n);
    }
}
function p(e, a, n) {
    const s = e.proto.oneofDecl.map((a)=>(function(e, a, n) {
            return (0, o.assert)(e.name, "invalid OneofDescriptorProto: missing name"), {
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
                        C.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto)
                    ];
                    return M(a.file.proto.sourceCodeInfo, e);
                },
                getFeatures () {
                    var s;
                    return n(a.getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
                }
            };
        })(a, e, n)), r = new Set;
    for (const o of e.proto.field){
        const t = f(o, s), i = E(o, e.file, e, t, a, n);
        e.fields.push(i), void 0 === t ? e.members.push(i) : (t.fields.push(i), r.has(t) || (r.add(t), e.members.push(t)));
    }
    for (const a of s.filter((e)=>r.has(e)))e.oneofs.push(a);
    for (const s of e.nestedMessages)p(s, a, n);
}
function _(e, a, n, s, r) {
    var i, m, l;
    (0, o.assert)(e.name, "invalid EnumDescriptorProto: missing name");
    const d = {
        kind: "enum",
        proto: e,
        deprecated: null !== (m = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) && void 0 !== m && m,
        file: a,
        parent: n,
        name: e.name,
        typeName: R(e, n, a),
        values: [],
        sharedPrefix: (0, t.findEnumSharedPrefix)(e.name, e.value.map((e)=>{
            var a;
            return null !== (a = e.name) && void 0 !== a ? a : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const e = this.parent ? [
                ...this.parent.getComments().sourcePath,
                C.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                C.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return M(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var s, o;
            return r(null !== (s = null == n ? void 0 : n.getFeatures()) && void 0 !== s ? s : a.getFeatures(), null === (o = e.options) || void 0 === o ? void 0 : o.features);
        }
    };
    s.enums.set(d.typeName, d), e.value.forEach((e)=>{
        var n, s;
        (0, o.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"), (0, o.assert)(void 0 !== e.number, "invalid EnumValueDescriptorProto: missing number"), d.values.push({
            kind: "enum_value",
            proto: e,
            deprecated: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) && void 0 !== s && s,
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
                    C.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return M(a.proto.sourceCodeInfo, e);
            },
            getFeatures () {
                var a;
                return r(d.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
            }
        });
    }), (null !== (l = null == n ? void 0 : n.nestedEnums) && void 0 !== l ? l : a.enums).push(d);
}
function k(e, a, n, s, r) {
    var t, i, m, l;
    (0, o.assert)(e.name, "invalid DescriptorProto: missing name");
    const d = {
        kind: "message",
        proto: e,
        deprecated: null !== (i = null === (t = e.options) || void 0 === t ? void 0 : t.deprecated) && void 0 !== i && i,
        file: a,
        parent: n,
        name: e.name,
        typeName: R(e, n, a),
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
                C.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                C.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return M(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var s, o;
            return r(null !== (s = null == n ? void 0 : n.getFeatures()) && void 0 !== s ? s : a.getFeatures(), null === (o = e.options) || void 0 === o ? void 0 : o.features);
        }
    };
    !0 === (null === (m = e.options) || void 0 === m ? void 0 : m.mapEntry) ? s.mapEntries.set(d.typeName, d) : ((null !== (l = null == n ? void 0 : n.nestedMessages) && void 0 !== l ? l : a.messages).push(d), s.messages.set(d.typeName, d));
    for (const n of e.enumType)_(n, a, d, s, r);
    for (const n of e.nestedType)k(n, a, d, s, r);
}
function u(e, a, n, s) {
    var r, t;
    (0, o.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
    const i = {
        kind: "service",
        proto: e,
        deprecated: null !== (t = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) && void 0 !== t && t,
        file: a,
        name: e.name,
        typeName: R(e, void 0, a),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const e = [
                C.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return M(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return s(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
    a.services.push(i), n.services.set(i.typeName, i);
    for (const a of e.method)i.methods.push(g(a, i, n, s));
}
function g(e, a, n, t) {
    var i, m, l;
    let d, c;
    switch((0, o.assert)(e.name, "invalid MethodDescriptorProto: missing name"), (0, o.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"), d = !0 === e.clientStreaming && !0 === e.serverStreaming ? r.MethodKind.BiDiStreaming : !0 === e.clientStreaming ? r.MethodKind.ClientStreaming : !0 === e.serverStreaming ? r.MethodKind.ServerStreaming : r.MethodKind.Unary, null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel){
        case s.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            c = r.MethodIdempotency.Idempotent;
            break;
        case s.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            c = r.MethodIdempotency.NoSideEffects;
            break;
        case s.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            c = void 0;
    }
    const T = n.messages.get(I(e.inputType)), p = n.messages.get(I(e.outputType));
    (0, o.assert)(T, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), (0, o.assert)(p, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const _ = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: null !== (l = null === (m = e.options) || void 0 === m ? void 0 : m.deprecated) && void 0 !== l && l,
        parent: a,
        name: _,
        methodKind: d,
        input: T,
        output: p,
        idempotency: c,
        toString: ()=>`rpc ${a.typeName}.${_}`,
        getComments () {
            const e = [
                ...this.parent.getComments().sourcePath,
                C.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return M(a.file.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var n;
            return t(a.getFeatures(), null === (n = e.options) || void 0 === n ? void 0 : n.features);
        }
    };
}
function E(e, a, n, r, i, m) {
    var d, c, T;
    (0, o.assert)(e.name, "invalid FieldDescriptorProto: missing name"), (0, o.assert)(e.number, "invalid FieldDescriptorProto: missing number"), (0, o.assert)(e.type, "invalid FieldDescriptorProto: missing type");
    const p = {
        proto: e,
        deprecated: null !== (c = null === (d = e.options) || void 0 === d ? void 0 : d.deprecated) && void 0 !== c && c,
        name: e.name,
        number: e.number,
        parent: n,
        oneof: r,
        optional: N(e, a.syntax),
        packedByDefault: O(e, m),
        packed: h(a, n, e, m),
        jsonName: e.jsonName === (0, t.fieldJsonName)(e.name) ? void 0 : e.jsonName,
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
                C.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return M(a.proto.sourceCodeInfo, e);
        },
        getFeatures () {
            var a;
            return m(n.getFeatures(), null === (a = e.options) || void 0 === a ? void 0 : a.features);
        }
    }, _ = e.label === s.FieldDescriptorProto_Label.REPEATED;
    switch(e.type){
        case s.FieldDescriptorProto_Type.MESSAGE:
        case s.FieldDescriptorProto_Type.GROUP:
            {
                (0, o.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const a = i.mapEntries.get(I(e.typeName));
                if (void 0 !== a) return (0, o.assert)(_, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, p), {
                    kind: "field",
                    fieldKind: "map",
                    repeated: !1
                }), function(e) {
                    var a, n;
                    (0, o.assert)(null === (a = e.proto.options) || void 0 === a ? void 0 : a.mapEntry, `invalid DescriptorProto: expected ${e.toString()} to be a map entry`), (0, o.assert)(2 === e.fields.length, `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`);
                    const s = e.fields.find((e)=>1 === e.proto.number);
                    (0, o.assert)(s, `invalid DescriptorProto: map entry ${e.toString()} is missing key field`);
                    const r = s.scalar;
                    (0, o.assert)(void 0 !== r && r !== l.ScalarType.BYTES && r !== l.ScalarType.FLOAT && r !== l.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (n = s.proto.type) && void 0 !== n ? n : -1}`);
                    const t = e.fields.find((e)=>2 === e.proto.number);
                    switch((0, o.assert)(t, `invalid DescriptorProto: map entry ${e.toString()} is missing value field`), t.fieldKind){
                        case "scalar":
                            return {
                                mapKey: r,
                                mapValue: Object.assign(Object.assign({}, t), {
                                    kind: "scalar"
                                })
                            };
                        case "message":
                            return {
                                mapKey: r,
                                mapValue: Object.assign(Object.assign({}, t), {
                                    kind: "message"
                                })
                            };
                        case "enum":
                            return {
                                mapKey: r,
                                mapValue: Object.assign(Object.assign({}, t), {
                                    kind: "enum"
                                })
                            };
                        default:
                            throw new Error("invalid DescriptorProto: unsupported map entry value field");
                    }
                }(a));
                const n = i.messages.get(I(e.typeName));
                return (0, o.assert)(void 0 !== n, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, p), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: _,
                    message: n
                });
            }
        case s.FieldDescriptorProto_Type.ENUM:
            {
                (0, o.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
                const a = i.enums.get(I(e.typeName));
                return (0, o.assert)(void 0 !== a, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), Object.assign(Object.assign({}, p), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: U,
                    repeated: _,
                    enum: a
                });
            }
        default:
            {
                const a = A[e.type];
                return (0, o.assert)(a, `invalid FieldDescriptorProto: unknown type ${e.type}`), Object.assign(Object.assign({}, p), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: U,
                    repeated: _,
                    scalar: a,
                    longType: (null === (T = e.options) || void 0 === T ? void 0 : T.jstype) == s.FieldOptions_JSType.JS_STRING ? l.LongType.STRING : l.LongType.BIGINT
                });
            }
    }
}
function v(e, a, n, s, r) {
    (0, o.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
    const t = E(e, a, null, void 0, s, r), i = s.messages.get(I(e.extendee));
    return (0, o.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), Object.assign(Object.assign({}, t), {
        kind: "extension",
        typeName: R(e, n, a),
        parent: n,
        file: a,
        extendee: i,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const n = this.parent ? [
                ...this.parent.getComments().sourcePath,
                C.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(e)
            ] : [
                C.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(e)
            ];
            return M(a.proto.sourceCodeInfo, n);
        },
        getFeatures () {
            var s;
            return r((null != n ? n : a).getFeatures(), null === (s = e.options) || void 0 === s ? void 0 : s.features);
        }
    });
}
function y(e, a) {
    let n, o;
    switch(e){
        case void 0:
        case "proto2":
            o = "proto2", n = s.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            o = "proto3", n = s.Edition.EDITION_PROTO3;
            break;
        case "editions":
            switch(o = "editions", a){
                case void 0:
                case s.Edition.EDITION_1_TEST_ONLY:
                case s.Edition.EDITION_2_TEST_ONLY:
                case s.Edition.EDITION_99997_TEST_ONLY:
                case s.Edition.EDITION_99998_TEST_ONLY:
                case s.Edition.EDITION_99999_TEST_ONLY:
                case s.Edition.EDITION_UNKNOWN:
                    n = s.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    n = a;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
    }
    if ("editions" === e && a === s.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(a)}`);
    return {
        syntax: o,
        edition: n
    };
}
function S(e, a) {
    return e.dependency.map((e)=>{
        const n = a.files.find((a)=>a.proto.name === e);
        return (0, o.assert)(n), n;
    });
}
function R(e, a, n) {
    let s;
    return (0, o.assert)(e.name, `invalid ${e.getType().typeName}: missing name`), s = a ? `${a.typeName}.${e.name}` : void 0 !== n.proto.package ? `${n.proto.package}.${e.name}` : `${e.name}`, s;
}
function I(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
function f(e, a) {
    var n;
    const s = e.oneofIndex;
    if (void 0 === s) return;
    let r;
    return !0 !== e.proto3Optional && (r = a[s], (0, o.assert)(r, `invalid FieldDescriptorProto: oneof #${s} for field #${null !== (n = e.number) && void 0 !== n ? n : -1} not found`)), r;
}
function N(e, a) {
    switch(a){
        case "proto2":
            return void 0 === e.oneofIndex && e.label === s.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return !0 === e.proto3Optional;
        case "editions":
            return !1;
    }
}
function O(e, a) {
    const { repeatedFieldEncoding: n } = a();
    if (n != s.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
    switch(e.type){
        case s.FieldDescriptorProto_Type.STRING:
        case s.FieldDescriptorProto_Type.BYTES:
        case s.FieldDescriptorProto_Type.GROUP:
        case s.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            return !0;
    }
}
function h(e, a, n, o) {
    var r, t, i, m, l, d;
    switch(n.type){
        case s.FieldDescriptorProto_Type.STRING:
        case s.FieldDescriptorProto_Type.BYTES:
        case s.FieldDescriptorProto_Type.GROUP:
        case s.FieldDescriptorProto_Type.MESSAGE:
            return !1;
        default:
            switch(e.edition){
                case s.Edition.EDITION_PROTO2:
                    return null !== (t = null === (r = n.options) || void 0 === r ? void 0 : r.packed) && void 0 !== t && t;
                case s.Edition.EDITION_PROTO3:
                    return null === (m = null === (i = n.options) || void 0 === i ? void 0 : i.packed) || void 0 === m || m;
                default:
                    {
                        const { repeatedFieldEncoding: r } = o(null !== (l = null == a ? void 0 : a.getFeatures()) && void 0 !== l ? l : e.getFeatures(), null === (d = n.options) || void 0 === d ? void 0 : d.features);
                        return r == s.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
exports.createDescriptorSet = function(e, a) {
    var n;
    const o = {
        files: [],
        enums: new Map,
        messages: new Map,
        services: new Map,
        extensions: new Map,
        mapEntries: new Map
    }, r = (0, d.isMessage)(e, s.FileDescriptorSet) ? e.file : e instanceof Uint8Array ? s.FileDescriptorSet.fromBinary(e).file : e, t = new Map;
    for (const e of r){
        const s = null !== (n = e.edition) && void 0 !== n ? n : y(e.syntax, e.edition).edition;
        let r = t.get(s);
        void 0 === r && (r = (0, m.createFeatureResolver)(s, null == a ? void 0 : a.featureSetDefaults, null == a ? void 0 : a.serializationOptions), t.set(s, r)), c(e, o, r);
    }
    return o;
};
const A = {
    [s.FieldDescriptorProto_Type.DOUBLE]: l.ScalarType.DOUBLE,
    [s.FieldDescriptorProto_Type.FLOAT]: l.ScalarType.FLOAT,
    [s.FieldDescriptorProto_Type.INT64]: l.ScalarType.INT64,
    [s.FieldDescriptorProto_Type.UINT64]: l.ScalarType.UINT64,
    [s.FieldDescriptorProto_Type.INT32]: l.ScalarType.INT32,
    [s.FieldDescriptorProto_Type.FIXED64]: l.ScalarType.FIXED64,
    [s.FieldDescriptorProto_Type.FIXED32]: l.ScalarType.FIXED32,
    [s.FieldDescriptorProto_Type.BOOL]: l.ScalarType.BOOL,
    [s.FieldDescriptorProto_Type.STRING]: l.ScalarType.STRING,
    [s.FieldDescriptorProto_Type.GROUP]: void 0,
    [s.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [s.FieldDescriptorProto_Type.BYTES]: l.ScalarType.BYTES,
    [s.FieldDescriptorProto_Type.UINT32]: l.ScalarType.UINT32,
    [s.FieldDescriptorProto_Type.ENUM]: void 0,
    [s.FieldDescriptorProto_Type.SFIXED32]: l.ScalarType.SFIXED32,
    [s.FieldDescriptorProto_Type.SFIXED64]: l.ScalarType.SFIXED64,
    [s.FieldDescriptorProto_Type.SINT32]: l.ScalarType.SINT32,
    [s.FieldDescriptorProto_Type.SINT64]: l.ScalarType.SINT64
};
function M(e, a) {
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
var C;
function b() {
    var e, a, n;
    const o = [];
    this.repeated && o.push("repeated"), this.optional && o.push("optional");
    let r;
    switch("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === s.FieldDescriptorProto_Label.REQUIRED && o.push("required"), this.fieldKind){
        case "scalar":
            r = l.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            r = this.enum.typeName;
            break;
        case "message":
            r = this.message.typeName;
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
                r = `map<${e}, ${a}>`;
                break;
            }
    }
    o.push(`${r} ${this.name} = ${this.number}`);
    const t = [];
    void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) && t.push(`packed = ${this.proto.options.packed.toString()}`);
    let i = this.proto.defaultValue;
    return void 0 !== i && (this.proto.type != s.FieldDescriptorProto_Type.BYTES && this.proto.type != s.FieldDescriptorProto_Type.STRING || (i = '"' + i.replace('"', '\\"') + '"'), t.push(`default = ${i}`)), void 0 !== this.jsonName && t.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (a = this.proto.options) || void 0 === a ? void 0 : a.jstype) && t.push(`jstype = ${s.FieldOptions_JSType[this.proto.options.jstype]}`), !0 === (null === (n = this.proto.options) || void 0 === n ? void 0 : n.deprecated) && t.push("deprecated = true"), t.length > 0 && o.push("[" + t.join(", ") + "]"), o.join(" ");
}
function U() {
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
}(C || (C = {}));
