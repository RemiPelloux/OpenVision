require.r(exports);
require.d(exports, {
    createDescriptorSet: ()=>createDescriptorSet
});
var _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-38.js");
var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-10.js");
var _service_type_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-36.js");
var _private_names_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-30.js");
var _private_text_format_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-39.js");
var _private_feature_set_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-40.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-17.js");
var _is_message_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-23.js");
function createDescriptorSet(input, options) {
    const cart = {
        files: [],
        enums: new Map(),
        messages: new Map(),
        services: new Map(),
        extensions: new Map(),
        mapEntries: new Map()
    };
    const fileDescriptors = (0, _is_message_js__WEBPACK_IMPORTED_MODULE_7__.isMessage)(input, _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FileDescriptorSet) ? input.file : input instanceof Uint8Array ? _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FileDescriptorSet.fromBinary(input).file : input;
    const resolverByEdition = new Map();
    for (const proto of fileDescriptors){
        const edition = proto.edition ?? parseFileSyntax(proto.syntax, proto.edition).edition;
        let resolveFeatures = resolverByEdition.get(edition);
        if (resolveFeatures === void 0) {
            resolveFeatures = (0, _private_feature_set_js__WEBPACK_IMPORTED_MODULE_5__.createFeatureResolver)(edition, options?.featureSetDefaults, options?.serializationOptions);
            resolverByEdition.set(edition, resolveFeatures);
        }
        addFile(proto, cart, resolveFeatures);
    }
    return cart;
}
function addFile(proto, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid FileDescriptorProto: missing name`);
    const file = {
        kind: "file",
        proto,
        deprecated: proto.options?.deprecated ?? false,
        ...parseFileSyntax(proto.syntax, proto.edition),
        name: proto.name.replace(/\.proto/, ""),
        dependencies: findFileDependencies(proto, cart),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return findComments(this.proto.sourceCodeInfo, [
                12
            ]);
        },
        getPackageComments () {
            return findComments(this.proto.sourceCodeInfo, [
                2
            ]);
        },
        getFeatures () {
            return resolveFeatures(proto.options?.features);
        }
    };
    cart.mapEntries.clear();
    for (const enumProto of proto.enumType){
        addEnum(enumProto, file, void 0, cart, resolveFeatures);
    }
    for (const messageProto of proto.messageType){
        addMessage(messageProto, file, void 0, cart, resolveFeatures);
    }
    for (const serviceProto of proto.service){
        addService(serviceProto, file, cart, resolveFeatures);
    }
    addExtensions(file, cart, resolveFeatures);
    for (const mapEntry of cart.mapEntries.values()){
        addFields(mapEntry, cart, resolveFeatures);
    }
    for (const message of file.messages){
        addFields(message, cart, resolveFeatures);
        addExtensions(message, cart, resolveFeatures);
    }
    cart.mapEntries.clear();
    cart.files.push(file);
}
function addExtensions(desc, cart, resolveFeatures) {
    switch(desc.kind){
        case "file":
            for (const proto of desc.proto.extension){
                const ext = newExtension(proto, desc, void 0, cart, resolveFeatures);
                desc.extensions.push(ext);
                cart.extensions.set(ext.typeName, ext);
            }
            break;
        case "message":
            for (const proto of desc.proto.extension){
                const ext = newExtension(proto, desc.file, desc, cart, resolveFeatures);
                desc.nestedExtensions.push(ext);
                cart.extensions.set(ext.typeName, ext);
            }
            for (const message of desc.nestedMessages){
                addExtensions(message, cart, resolveFeatures);
            }
            break;
    }
}
function addFields(message, cart, resolveFeatures) {
    const allOneofs = message.proto.oneofDecl.map((proto)=>newOneof(proto, message, resolveFeatures));
    const oneofsSeen = new Set();
    for (const proto of message.proto.field){
        const oneof = findOneof(proto, allOneofs);
        const field = newField(proto, message.file, message, oneof, cart, resolveFeatures);
        message.fields.push(field);
        if (oneof === void 0) {
            message.members.push(field);
        } else {
            oneof.fields.push(field);
            if (!oneofsSeen.has(oneof)) {
                oneofsSeen.add(oneof);
                message.members.push(oneof);
            }
        }
    }
    for (const oneof of allOneofs.filter((o)=>oneofsSeen.has(o))){
        message.oneofs.push(oneof);
    }
    for (const child of message.nestedMessages){
        addFields(child, cart, resolveFeatures);
    }
}
function addEnum(proto, file, parent, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid EnumDescriptorProto: missing name`);
    const desc = {
        kind: "enum",
        proto,
        deprecated: proto.options?.deprecated ?? false,
        file,
        parent,
        name: proto.name,
        typeName: makeTypeName(proto, parent, file),
        values: [],
        sharedPrefix: (0, _private_names_js__WEBPACK_IMPORTED_MODULE_3__.findEnumSharedPrefix)(proto.name, proto.value.map((v)=>v.name ?? "")),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const path = this.parent ? [
                ...this.parent.getComments().sourcePath,
                4,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                5,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures(parent?.getFeatures() ?? file.getFeatures(), proto.options?.features);
        }
    };
    cart.enums.set(desc.typeName, desc);
    proto.value.forEach((proto2)=>{
        (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto2.name, `invalid EnumValueDescriptorProto: missing name`);
        (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto2.number !== void 0, `invalid EnumValueDescriptorProto: missing number`);
        desc.values.push({
            kind: "enum_value",
            proto: proto2,
            deprecated: proto2.options?.deprecated ?? false,
            parent: desc,
            name: proto2.name,
            number: proto2.number,
            toString () {
                return `enum value ${desc.typeName}.${this.name}`;
            },
            declarationString () {
                let str = `${this.name} = ${this.number}`;
                if (this.proto.options?.deprecated === true) {
                    str += " [deprecated = true]";
                }
                return str;
            },
            getComments () {
                const path = [
                    ...this.parent.getComments().sourcePath,
                    2,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return findComments(file.proto.sourceCodeInfo, path);
            },
            getFeatures () {
                return resolveFeatures(desc.getFeatures(), proto2.options?.features);
            }
        });
    });
    (parent?.nestedEnums ?? file.enums).push(desc);
}
function addMessage(proto, file, parent, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid DescriptorProto: missing name`);
    const desc = {
        kind: "message",
        proto,
        deprecated: proto.options?.deprecated ?? false,
        file,
        parent,
        name: proto.name,
        typeName: makeTypeName(proto, parent, file),
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
            const path = this.parent ? [
                ...this.parent.getComments().sourcePath,
                3,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                4,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures(parent?.getFeatures() ?? file.getFeatures(), proto.options?.features);
        }
    };
    if (proto.options?.mapEntry === true) {
        cart.mapEntries.set(desc.typeName, desc);
    } else {
        (parent?.nestedMessages ?? file.messages).push(desc);
        cart.messages.set(desc.typeName, desc);
    }
    for (const enumProto of proto.enumType){
        addEnum(enumProto, file, desc, cart, resolveFeatures);
    }
    for (const messageProto of proto.nestedType){
        addMessage(messageProto, file, desc, cart, resolveFeatures);
    }
}
function addService(proto, file, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid ServiceDescriptorProto: missing name`);
    const desc = {
        kind: "service",
        proto,
        deprecated: proto.options?.deprecated ?? false,
        file,
        name: proto.name,
        typeName: makeTypeName(proto, void 0, file),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const path = [
                6,
                this.file.proto.service.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures(file.getFeatures(), proto.options?.features);
        }
    };
    file.services.push(desc);
    cart.services.set(desc.typeName, desc);
    for (const methodProto of proto.method){
        desc.methods.push(newMethod(methodProto, desc, cart, resolveFeatures));
    }
}
function newMethod(proto, parent, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid MethodDescriptorProto: missing name`);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.inputType, `invalid MethodDescriptorProto: missing input_type`);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.outputType, `invalid MethodDescriptorProto: missing output_type`);
    let methodKind;
    if (proto.clientStreaming === true && proto.serverStreaming === true) {
        methodKind = _service_type_js__WEBPACK_IMPORTED_MODULE_2__.MethodKind.BiDiStreaming;
    } else if (proto.clientStreaming === true) {
        methodKind = _service_type_js__WEBPACK_IMPORTED_MODULE_2__.MethodKind.ClientStreaming;
    } else if (proto.serverStreaming === true) {
        methodKind = _service_type_js__WEBPACK_IMPORTED_MODULE_2__.MethodKind.ServerStreaming;
    } else {
        methodKind = _service_type_js__WEBPACK_IMPORTED_MODULE_2__.MethodKind.Unary;
    }
    let idempotency;
    switch(proto.options?.idempotencyLevel){
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            idempotency = _service_type_js__WEBPACK_IMPORTED_MODULE_2__.MethodIdempotency.Idempotent;
            break;
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            idempotency = _service_type_js__WEBPACK_IMPORTED_MODULE_2__.MethodIdempotency.NoSideEffects;
            break;
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            idempotency = void 0;
            break;
    }
    const input = cart.messages.get(trimLeadingDot(proto.inputType));
    const output = cart.messages.get(trimLeadingDot(proto.outputType));
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(input, `invalid MethodDescriptorProto: input_type ${proto.inputType} not found`);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(output, `invalid MethodDescriptorProto: output_type ${proto.inputType} not found`);
    const name = proto.name;
    return {
        kind: "rpc",
        proto,
        deprecated: proto.options?.deprecated ?? false,
        parent,
        name,
        methodKind,
        input,
        output,
        idempotency,
        toString () {
            return `rpc ${parent.typeName}.${name}`;
        },
        getComments () {
            const path = [
                ...this.parent.getComments().sourcePath,
                2,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return findComments(parent.file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures(parent.getFeatures(), proto.options?.features);
        }
    };
}
function newOneof(proto, parent, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid OneofDescriptorProto: missing name`);
    return {
        kind: "oneof",
        proto,
        deprecated: false,
        parent,
        fields: [],
        name: proto.name,
        toString () {
            return `oneof ${parent.typeName}.${this.name}`;
        },
        getComments () {
            const path = [
                ...this.parent.getComments().sourcePath,
                8,
                this.parent.proto.oneofDecl.indexOf(this.proto)
            ];
            return findComments(parent.file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures(parent.getFeatures(), proto.options?.features);
        }
    };
}
function newField(proto, file, parent, oneof, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid FieldDescriptorProto: missing name`);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.number, `invalid FieldDescriptorProto: missing number`);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.type, `invalid FieldDescriptorProto: missing type`);
    const common = {
        proto,
        deprecated: proto.options?.deprecated ?? false,
        name: proto.name,
        number: proto.number,
        parent,
        oneof,
        optional: isOptionalField(proto, file.syntax),
        packedByDefault: isPackedFieldByDefault(proto, resolveFeatures),
        packed: isPackedField(file, parent, proto, resolveFeatures),
        jsonName: proto.jsonName === (0, _private_names_js__WEBPACK_IMPORTED_MODULE_3__.fieldJsonName)(proto.name) ? void 0 : proto.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString,
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const path = [
                ...this.parent.getComments().sourcePath,
                2,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures(parent.getFeatures(), proto.options?.features);
        }
    };
    const repeated = proto.label === _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Label.REPEATED;
    switch(proto.type){
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.MESSAGE:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.GROUP:
            {
                (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
                const mapEntry = cart.mapEntries.get(trimLeadingDot(proto.typeName));
                if (mapEntry !== void 0) {
                    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(repeated, `invalid FieldDescriptorProto: expected map entry to be repeated`);
                    return {
                        ...common,
                        kind: "field",
                        fieldKind: "map",
                        repeated: false,
                        ...getMapFieldTypes(mapEntry)
                    };
                }
                const message = cart.messages.get(trimLeadingDot(proto.typeName));
                (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(message !== void 0, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
                return {
                    ...common,
                    kind: "field",
                    fieldKind: "message",
                    repeated,
                    message
                };
            }
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.ENUM:
            {
                (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
                const e = cart.enums.get(trimLeadingDot(proto.typeName));
                (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(e !== void 0, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
                return {
                    ...common,
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue,
                    repeated,
                    enum: e
                };
            }
        default:
            {
                const scalar = fieldTypeToScalarType[proto.type];
                (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(scalar, `invalid FieldDescriptorProto: unknown type ${proto.type}`);
                return {
                    ...common,
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue,
                    repeated,
                    scalar,
                    longType: proto.options?.jstype == _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldOptions_JSType.JS_STRING ? _scalar_js__WEBPACK_IMPORTED_MODULE_6__.LongType.STRING : _scalar_js__WEBPACK_IMPORTED_MODULE_6__.LongType.BIGINT
                };
            }
    }
}
function newExtension(proto, file, parent, cart, resolveFeatures) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.extendee, `invalid FieldDescriptorProto: missing extendee`);
    const field = newField(proto, file, null, void 0, cart, resolveFeatures);
    const extendee = cart.messages.get(trimLeadingDot(proto.extendee));
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(extendee, `invalid FieldDescriptorProto: extendee ${proto.extendee} not found`);
    return {
        ...field,
        kind: "extension",
        typeName: makeTypeName(proto, parent, file),
        parent,
        file,
        extendee,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const path = this.parent ? [
                ...this.parent.getComments().sourcePath,
                6,
                this.parent.proto.extension.indexOf(proto)
            ] : [
                7,
                this.file.proto.extension.indexOf(proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            return resolveFeatures((parent ?? file).getFeatures(), proto.options?.features);
        }
    };
}
function parseFileSyntax(syntax, edition) {
    let e;
    let s;
    switch(syntax){
        case void 0:
        case "proto2":
            s = "proto2";
            e = _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3";
            e = _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_PROTO3;
            break;
        case "editions":
            s = "editions";
            switch(edition){
                case void 0:
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_1_TEST_ONLY:
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_2_TEST_ONLY:
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_99997_TEST_ONLY:
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_99998_TEST_ONLY:
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_99999_TEST_ONLY:
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_UNKNOWN:
                    e = _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    e = edition;
                    break;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${syntax}`);
    }
    if (syntax === "editions" && edition === _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_UNKNOWN) {
        throw new Error(`invalid FileDescriptorProto: syntax ${syntax} cannot have edition ${String(edition)}`);
    }
    return {
        syntax: s,
        edition: e
    };
}
function findFileDependencies(proto, cart) {
    return proto.dependency.map((wantName)=>{
        const dep = cart.files.find((f)=>f.proto.name === wantName);
        (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(dep);
        return dep;
    });
}
function makeTypeName(proto, parent, file) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(proto.name, `invalid ${proto.getType().typeName}: missing name`);
    let typeName;
    if (parent) {
        typeName = `${parent.typeName}.${proto.name}`;
    } else if (file.proto.package !== void 0) {
        typeName = `${file.proto.package}.${proto.name}`;
    } else {
        typeName = `${proto.name}`;
    }
    return typeName;
}
function trimLeadingDot(typeName) {
    return typeName.startsWith(".") ? typeName.substring(1) : typeName;
}
function getMapFieldTypes(mapEntry) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(mapEntry.proto.options?.mapEntry, `invalid DescriptorProto: expected ${mapEntry.toString()} to be a map entry`);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(mapEntry.fields.length === 2, `invalid DescriptorProto: map entry ${mapEntry.toString()} has ${mapEntry.fields.length} fields`);
    const keyField = mapEntry.fields.find((f)=>f.proto.number === 1);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(keyField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing key field`);
    const mapKey = keyField.scalar;
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(mapKey !== void 0 && mapKey !== _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.BYTES && mapKey !== _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.FLOAT && mapKey !== _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${mapEntry.toString()} has unexpected key type ${keyField.proto.type ?? -1}`);
    const valueField = mapEntry.fields.find((f)=>f.proto.number === 2);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(valueField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing value field`);
    switch(valueField.fieldKind){
        case "scalar":
            return {
                mapKey,
                mapValue: {
                    ...valueField,
                    kind: "scalar"
                }
            };
        case "message":
            return {
                mapKey,
                mapValue: {
                    ...valueField,
                    kind: "message"
                }
            };
        case "enum":
            return {
                mapKey,
                mapValue: {
                    ...valueField,
                    kind: "enum"
                }
            };
        default:
            throw new Error("invalid DescriptorProto: unsupported map entry value field");
    }
}
function findOneof(proto, allOneofs) {
    const oneofIndex = proto.oneofIndex;
    if (oneofIndex === void 0) {
        return void 0;
    }
    let oneof;
    if (proto.proto3Optional !== true) {
        oneof = allOneofs[oneofIndex];
        (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(oneof, `invalid FieldDescriptorProto: oneof #${oneofIndex} for field #${proto.number ?? -1} not found`);
    }
    return oneof;
}
function isOptionalField(proto, syntax) {
    switch(syntax){
        case "proto2":
            return proto.oneofIndex === void 0 && proto.label === _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return proto.proto3Optional === true;
        case "editions":
            return false;
    }
}
function isPackedFieldByDefault(proto, resolveFeatures) {
    const { repeatedFieldEncoding } = resolveFeatures();
    if (repeatedFieldEncoding != _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSet_RepeatedFieldEncoding.PACKED) {
        return false;
    }
    switch(proto.type){
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.STRING:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.BYTES:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.GROUP:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.MESSAGE:
            return false;
        default:
            return true;
    }
}
function isPackedField(file, parent, proto, resolveFeatures) {
    switch(proto.type){
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.STRING:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.BYTES:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.GROUP:
        case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.MESSAGE:
            return false;
        default:
            switch(file.edition){
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_PROTO2:
                    return proto.options?.packed ?? false;
                case _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition.EDITION_PROTO3:
                    return proto.options?.packed ?? true;
                default:
                    {
                        const { repeatedFieldEncoding } = resolveFeatures(parent?.getFeatures() ?? file.getFeatures(), proto.options?.features);
                        return repeatedFieldEncoding == _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
const fieldTypeToScalarType = {
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.DOUBLE]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.DOUBLE,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.FLOAT]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.FLOAT,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.INT64]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.INT64,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.UINT64]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.UINT64,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.INT32]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.INT32,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.FIXED64]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.FIXED64,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.FIXED32]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.FIXED32,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.BOOL]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.BOOL,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.STRING]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.STRING,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.GROUP]: void 0,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.BYTES]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.BYTES,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.UINT32]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.UINT32,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.ENUM]: void 0,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.SFIXED32]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.SFIXED32,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.SFIXED64]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.SFIXED64,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.SINT32]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.SINT32,
    [_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.SINT64]: _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType.SINT64
};
function findComments(sourceCodeInfo, sourcePath) {
    if (!sourceCodeInfo) {
        return {
            leadingDetached: [],
            sourcePath
        };
    }
    for (const location of sourceCodeInfo.location){
        if (location.path.length !== sourcePath.length) {
            continue;
        }
        if (location.path.some((value, index)=>sourcePath[index] !== value)) {
            continue;
        }
        return {
            leadingDetached: location.leadingDetachedComments,
            leading: location.leadingComments,
            trailing: location.trailingComments,
            sourcePath
        };
    }
    return {
        leadingDetached: [],
        sourcePath
    };
}
var FieldNumber = ((FieldNumber2)=>{
    FieldNumber2[FieldNumber2["FileDescriptorProto_Package"] = 2] = "FileDescriptorProto_Package";
    FieldNumber2[FieldNumber2["FileDescriptorProto_MessageType"] = 4] = "FileDescriptorProto_MessageType";
    FieldNumber2[FieldNumber2["FileDescriptorProto_EnumType"] = 5] = "FileDescriptorProto_EnumType";
    FieldNumber2[FieldNumber2["FileDescriptorProto_Service"] = 6] = "FileDescriptorProto_Service";
    FieldNumber2[FieldNumber2["FileDescriptorProto_Extension"] = 7] = "FileDescriptorProto_Extension";
    FieldNumber2[FieldNumber2["FileDescriptorProto_Syntax"] = 12] = "FileDescriptorProto_Syntax";
    FieldNumber2[FieldNumber2["DescriptorProto_Field"] = 2] = "DescriptorProto_Field";
    FieldNumber2[FieldNumber2["DescriptorProto_NestedType"] = 3] = "DescriptorProto_NestedType";
    FieldNumber2[FieldNumber2["DescriptorProto_EnumType"] = 4] = "DescriptorProto_EnumType";
    FieldNumber2[FieldNumber2["DescriptorProto_Extension"] = 6] = "DescriptorProto_Extension";
    FieldNumber2[FieldNumber2["DescriptorProto_OneofDecl"] = 8] = "DescriptorProto_OneofDecl";
    FieldNumber2[FieldNumber2["EnumDescriptorProto_Value"] = 2] = "EnumDescriptorProto_Value";
    FieldNumber2[FieldNumber2["ServiceDescriptorProto_Method"] = 2] = "ServiceDescriptorProto_Method";
    return FieldNumber2;
})(FieldNumber || {});
function declarationString() {
    const parts = [];
    if (this.repeated) {
        parts.push("repeated");
    }
    if (this.optional) {
        parts.push("optional");
    }
    const file = this.kind === "extension" ? this.file : this.parent.file;
    if (file.syntax == "proto2" && this.proto.label === _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Label.REQUIRED) {
        parts.push("required");
    }
    let type;
    switch(this.fieldKind){
        case "scalar":
            type = _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            type = this.enum.typeName;
            break;
        case "message":
            type = this.message.typeName;
            break;
        case "map":
            {
                const k = _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType[this.mapKey].toLowerCase();
                let v;
                switch(this.mapValue.kind){
                    case "scalar":
                        v = _scalar_js__WEBPACK_IMPORTED_MODULE_6__.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        v = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        v = this.mapValue.message.typeName;
                        break;
                }
                type = `map<${k}, ${v}>`;
                break;
            }
    }
    parts.push(`${type} ${this.name} = ${this.number}`);
    const options = [];
    if (this.proto.options?.packed !== void 0) {
        options.push(`packed = ${this.proto.options.packed.toString()}`);
    }
    let defaultValue = this.proto.defaultValue;
    if (defaultValue !== void 0) {
        if (this.proto.type == _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.BYTES || this.proto.type == _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldDescriptorProto_Type.STRING) {
            defaultValue = '"' + defaultValue.replace('"', '\\"') + '"';
        }
        options.push(`default = ${defaultValue}`);
    }
    if (this.jsonName !== void 0) {
        options.push(`json_name = "${this.jsonName}"`);
    }
    if (this.proto.options?.jstype !== void 0) {
        options.push(`jstype = ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FieldOptions_JSType[this.proto.options.jstype]}`);
    }
    if (this.proto.options?.deprecated === true) {
        options.push(`deprecated = true`);
    }
    if (options.length > 0) {
        parts.push("[" + options.join(", ") + "]");
    }
    return parts.join(" ");
}
function getDefaultValue() {
    const d = this.proto.defaultValue;
    if (d === void 0) {
        return void 0;
    }
    switch(this.fieldKind){
        case "enum":
            return (0, _private_text_format_js__WEBPACK_IMPORTED_MODULE_4__.parseTextFormatEnumValue)(this.enum, d);
        case "scalar":
            return (0, _private_text_format_js__WEBPACK_IMPORTED_MODULE_4__.parseTextFormatScalarValue)(this.scalar, d);
        default:
            return void 0;
    }
}
