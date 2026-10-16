import { require_descriptor_pb } from "./google/protobuf/descriptor_pb.js";
import { require_is_message } from "./is-message.js";
import { require_assert } from "./private/assert.js";
import { require_feature_set } from "./private/feature-set.js";
import { require_names } from "./private/names.js";
import { require_text_format } from "./private/text-format.js";
import { require_scalar } from "./scalar.js";
import { require_service_type } from "./service-type.js";
var __wakaru_require_create_descriptor_set_cache;
export function require_create_descriptor_set() {
if (__wakaru_require_create_descriptor_set_cache) return __wakaru_require_create_descriptor_set_cache;
var exports2 = {};
__wakaru_require_create_descriptor_set_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createDescriptorSet = void 0;
var descriptor_pb_js_1 = require_descriptor_pb();
var assert_js_1 = require_assert();
var service_type_js_1 = require_service_type();
var names_js_1 = require_names();
var text_format_js_1 = require_text_format();
var feature_set_js_1 = require_feature_set();
var scalar_js_1 = require_scalar();
var is_message_js_1 = require_is_message();
function createDescriptorSet(input, options2) {
    var _a18;
    const cart = {
        files: [],
        enums: new Map(),
        messages: new Map(),
        services: new Map(),
        extensions: new Map(),
        mapEntries: new Map()
    };
    const fileDescriptors = (0, is_message_js_1.isMessage)(input, descriptor_pb_js_1.FileDescriptorSet) ? input.file : input instanceof Uint8Array ? descriptor_pb_js_1.FileDescriptorSet.fromBinary(input).file : input;
    const resolverByEdition = new Map();
    for (const proto of fileDescriptors){
        const edition = (_a18 = proto.edition) !== null && _a18 !== void 0 ? _a18 : parseFileSyntax(proto.syntax, proto.edition).edition;
        let resolveFeatures = resolverByEdition.get(edition);
        if (resolveFeatures === void 0) {
            resolveFeatures = (0, feature_set_js_1.createFeatureResolver)(edition, options2 === null || options2 === void 0 ? void 0 : options2.featureSetDefaults, options2 === null || options2 === void 0 ? void 0 : options2.serializationOptions);
            resolverByEdition.set(edition, resolveFeatures);
        }
        addFile(proto, cart, resolveFeatures);
    }
    return cart;
}
exports2.createDescriptorSet = createDescriptorSet;
function addFile(proto, cart, resolveFeatures) {
    var _a18, _b2;
    (0, assert_js_1.assert)(proto.name, `invalid FileDescriptorProto: missing name`);
    const file = Object.assign(Object.assign({
        kind: "file",
        proto,
        deprecated: (_b2 = (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.deprecated) !== null && _b2 !== void 0 ? _b2 : false
    }, parseFileSyntax(proto.syntax, proto.edition)), {
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
                FieldNumber.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return findComments(this.proto.sourceCodeInfo, [
                FieldNumber.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var _a19;
            return resolveFeatures((_a19 = proto.options) === null || _a19 === void 0 ? void 0 : _a19.features);
        }
    });
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
                const ext2 = newExtension(proto, desc, void 0, cart, resolveFeatures);
                desc.extensions.push(ext2);
                cart.extensions.set(ext2.typeName, ext2);
            }
            break;
        case "message":
            for (const proto of desc.proto.extension){
                const ext2 = newExtension(proto, desc.file, desc, cart, resolveFeatures);
                desc.nestedExtensions.push(ext2);
                cart.extensions.set(ext2.typeName, ext2);
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
        const field4 = newField(proto, message.file, message, oneof, cart, resolveFeatures);
        message.fields.push(field4);
        if (oneof === void 0) {
            message.members.push(field4);
        } else {
            oneof.fields.push(field4);
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
    var _a18, _b2, _c;
    (0, assert_js_1.assert)(proto.name, `invalid EnumDescriptorProto: missing name`);
    const desc = {
        kind: "enum",
        proto,
        deprecated: (_b2 = (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.deprecated) !== null && _b2 !== void 0 ? _b2 : false,
        file,
        parent,
        name: proto.name,
        typeName: makeTypeName(proto, parent, file),
        values: [],
        sharedPrefix: (0, names_js_1.findEnumSharedPrefix)(proto.name, proto.value.map((v2)=>{
            var _a19;
            return (_a19 = v2.name) !== null && _a19 !== void 0 ? _a19 : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const path64 = this.parent ? [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                FieldNumber.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a19, _b3;
            return resolveFeatures((_a19 = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _a19 !== void 0 ? _a19 : file.getFeatures(), (_b3 = proto.options) === null || _b3 === void 0 ? void 0 : _b3.features);
        }
    };
    cart.enums.set(desc.typeName, desc);
    proto.value.forEach((proto4)=>{
        var _a19, _b3;
        (0, assert_js_1.assert)(proto4.name, `invalid EnumValueDescriptorProto: missing name`);
        (0, assert_js_1.assert)(proto4.number !== void 0, `invalid EnumValueDescriptorProto: missing number`);
        desc.values.push({
            kind: "enum_value",
            proto: proto4,
            deprecated: (_b3 = (_a19 = proto4.options) === null || _a19 === void 0 ? void 0 : _a19.deprecated) !== null && _b3 !== void 0 ? _b3 : false,
            parent: desc,
            name: proto4.name,
            number: proto4.number,
            toString () {
                return `enum value ${desc.typeName}.${this.name}`;
            },
            declarationString () {
                var _a20;
                let str3 = `${this.name} = ${this.number}`;
                if (((_a20 = this.proto.options) === null || _a20 === void 0 ? void 0 : _a20.deprecated) === true) {
                    str3 += " [deprecated = true]";
                }
                return str3;
            },
            getComments () {
                const path64 = [
                    ...this.parent.getComments().sourcePath,
                    FieldNumber.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return findComments(file.proto.sourceCodeInfo, path64);
            },
            getFeatures () {
                var _a20;
                return resolveFeatures(desc.getFeatures(), (_a20 = proto4.options) === null || _a20 === void 0 ? void 0 : _a20.features);
            }
        });
    });
    ((_c = parent === null || parent === void 0 ? void 0 : parent.nestedEnums) !== null && _c !== void 0 ? _c : file.enums).push(desc);
}
function addMessage(proto, file, parent, cart, resolveFeatures) {
    var _a18, _b2, _c, _d;
    (0, assert_js_1.assert)(proto.name, `invalid DescriptorProto: missing name`);
    const desc = {
        kind: "message",
        proto,
        deprecated: (_b2 = (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.deprecated) !== null && _b2 !== void 0 ? _b2 : false,
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
            const path64 = this.parent ? [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                FieldNumber.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a19, _b3;
            return resolveFeatures((_a19 = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _a19 !== void 0 ? _a19 : file.getFeatures(), (_b3 = proto.options) === null || _b3 === void 0 ? void 0 : _b3.features);
        }
    };
    if (((_c = proto.options) === null || _c === void 0 ? void 0 : _c.mapEntry) === true) {
        cart.mapEntries.set(desc.typeName, desc);
    } else {
        ((_d = parent === null || parent === void 0 ? void 0 : parent.nestedMessages) !== null && _d !== void 0 ? _d : file.messages).push(desc);
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
    var _a18, _b2;
    (0, assert_js_1.assert)(proto.name, `invalid ServiceDescriptorProto: missing name`);
    const desc = {
        kind: "service",
        proto,
        deprecated: (_b2 = (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.deprecated) !== null && _b2 !== void 0 ? _b2 : false,
        file,
        name: proto.name,
        typeName: makeTypeName(proto, void 0, file),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const path64 = [
                FieldNumber.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a19;
            return resolveFeatures(file.getFeatures(), (_a19 = proto.options) === null || _a19 === void 0 ? void 0 : _a19.features);
        }
    };
    file.services.push(desc);
    cart.services.set(desc.typeName, desc);
    for (const methodProto of proto.method){
        desc.methods.push(newMethod(methodProto, desc, cart, resolveFeatures));
    }
}
function newMethod(proto, parent, cart, resolveFeatures) {
    var _a18, _b2, _c;
    (0, assert_js_1.assert)(proto.name, `invalid MethodDescriptorProto: missing name`);
    (0, assert_js_1.assert)(proto.inputType, `invalid MethodDescriptorProto: missing input_type`);
    (0, assert_js_1.assert)(proto.outputType, `invalid MethodDescriptorProto: missing output_type`);
    let methodKind;
    if (proto.clientStreaming === true && proto.serverStreaming === true) {
        methodKind = service_type_js_1.MethodKind.BiDiStreaming;
    } else if (proto.clientStreaming === true) {
        methodKind = service_type_js_1.MethodKind.ClientStreaming;
    } else if (proto.serverStreaming === true) {
        methodKind = service_type_js_1.MethodKind.ServerStreaming;
    } else {
        methodKind = service_type_js_1.MethodKind.Unary;
    }
    let idempotency;
    switch((_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.idempotencyLevel){
        case descriptor_pb_js_1.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            idempotency = service_type_js_1.MethodIdempotency.Idempotent;
            break;
        case descriptor_pb_js_1.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            idempotency = service_type_js_1.MethodIdempotency.NoSideEffects;
            break;
        case descriptor_pb_js_1.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
            idempotency = void 0;
            break;
    }
    const input = cart.messages.get(trimLeadingDot(proto.inputType));
    const output = cart.messages.get(trimLeadingDot(proto.outputType));
    (0, assert_js_1.assert)(input, `invalid MethodDescriptorProto: input_type ${proto.inputType} not found`);
    (0, assert_js_1.assert)(output, `invalid MethodDescriptorProto: output_type ${proto.inputType} not found`);
    const name17 = proto.name;
    return {
        kind: "rpc",
        proto,
        deprecated: (_c = (_b2 = proto.options) === null || _b2 === void 0 ? void 0 : _b2.deprecated) !== null && _c !== void 0 ? _c : false,
        parent,
        name: name17,
        methodKind,
        input,
        output,
        idempotency,
        toString () {
            return `rpc ${parent.typeName}.${name17}`;
        },
        getComments () {
            const path64 = [
                ...this.parent.getComments().sourcePath,
                FieldNumber.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return findComments(parent.file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a19;
            return resolveFeatures(parent.getFeatures(), (_a19 = proto.options) === null || _a19 === void 0 ? void 0 : _a19.features);
        }
    };
}
function newOneof(proto, parent, resolveFeatures) {
    (0, assert_js_1.assert)(proto.name, `invalid OneofDescriptorProto: missing name`);
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
            const path64 = [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_OneofDecl,
                this.parent.proto.oneofDecl.indexOf(this.proto)
            ];
            return findComments(parent.file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a18;
            return resolveFeatures(parent.getFeatures(), (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.features);
        }
    };
}
function newField(proto, file, parent, oneof, cart, resolveFeatures) {
    var _a18, _b2, _c;
    (0, assert_js_1.assert)(proto.name, `invalid FieldDescriptorProto: missing name`);
    (0, assert_js_1.assert)(proto.number, `invalid FieldDescriptorProto: missing number`);
    (0, assert_js_1.assert)(proto.type, `invalid FieldDescriptorProto: missing type`);
    const common2 = {
        proto,
        deprecated: (_b2 = (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.deprecated) !== null && _b2 !== void 0 ? _b2 : false,
        name: proto.name,
        number: proto.number,
        parent,
        oneof,
        optional: isOptionalField(proto, file.syntax),
        packedByDefault: isPackedFieldByDefault(proto, resolveFeatures),
        packed: isPackedField(file, parent, proto, resolveFeatures),
        jsonName: proto.jsonName === (0, names_js_1.fieldJsonName)(proto.name) ? void 0 : proto.jsonName,
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
            const path64 = [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a19;
            return resolveFeatures(parent.getFeatures(), (_a19 = proto.options) === null || _a19 === void 0 ? void 0 : _a19.features);
        }
    };
    const repeated = proto.label === descriptor_pb_js_1.FieldDescriptorProto_Label.REPEATED;
    switch(proto.type){
        case descriptor_pb_js_1.FieldDescriptorProto_Type.MESSAGE:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.GROUP:
            {
                (0, assert_js_1.assert)(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
                const mapEntry = cart.mapEntries.get(trimLeadingDot(proto.typeName));
                if (mapEntry !== void 0) {
                    (0, assert_js_1.assert)(repeated, `invalid FieldDescriptorProto: expected map entry to be repeated`);
                    return Object.assign(Object.assign(Object.assign({}, common2), {
                        kind: "field",
                        fieldKind: "map",
                        repeated: false
                    }), getMapFieldTypes(mapEntry));
                }
                const message = cart.messages.get(trimLeadingDot(proto.typeName));
                (0, assert_js_1.assert)(message !== void 0, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
                return Object.assign(Object.assign({}, common2), {
                    kind: "field",
                    fieldKind: "message",
                    repeated,
                    message
                });
            }
        case descriptor_pb_js_1.FieldDescriptorProto_Type.ENUM:
            {
                (0, assert_js_1.assert)(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
                const e = cart.enums.get(trimLeadingDot(proto.typeName));
                (0, assert_js_1.assert)(e !== void 0, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
                return Object.assign(Object.assign({}, common2), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue,
                    repeated,
                    enum: e
                });
            }
        default:
            {
                const scalar = fieldTypeToScalarType[proto.type];
                (0, assert_js_1.assert)(scalar, `invalid FieldDescriptorProto: unknown type ${proto.type}`);
                return Object.assign(Object.assign({}, common2), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue,
                    repeated,
                    scalar,
                    longType: ((_c = proto.options) === null || _c === void 0 ? void 0 : _c.jstype) == descriptor_pb_js_1.FieldOptions_JSType.JS_STRING ? scalar_js_1.LongType.STRING : scalar_js_1.LongType.BIGINT
                });
            }
    }
}
function newExtension(proto, file, parent, cart, resolveFeatures) {
    (0, assert_js_1.assert)(proto.extendee, `invalid FieldDescriptorProto: missing extendee`);
    const field4 = newField(proto, file, null, void 0, cart, resolveFeatures);
    const extendee = cart.messages.get(trimLeadingDot(proto.extendee));
    (0, assert_js_1.assert)(extendee, `invalid FieldDescriptorProto: extendee ${proto.extendee} not found`);
    return Object.assign(Object.assign({}, field4), {
        kind: "extension",
        typeName: makeTypeName(proto, parent, file),
        parent,
        file,
        extendee,
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const path64 = this.parent ? [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(proto)
            ] : [
                FieldNumber.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(proto)
            ];
            return findComments(file.proto.sourceCodeInfo, path64);
        },
        getFeatures () {
            var _a18;
            return resolveFeatures((parent !== null && parent !== void 0 ? parent : file).getFeatures(), (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.features);
        }
    });
}
function parseFileSyntax(syntax, edition) {
    let e;
    let s3;
    switch(syntax){
        case void 0:
        case "proto2":
            s3 = "proto2";
            e = descriptor_pb_js_1.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s3 = "proto3";
            e = descriptor_pb_js_1.Edition.EDITION_PROTO3;
            break;
        case "editions":
            s3 = "editions";
            switch(edition){
                case void 0:
                case descriptor_pb_js_1.Edition.EDITION_1_TEST_ONLY:
                case descriptor_pb_js_1.Edition.EDITION_2_TEST_ONLY:
                case descriptor_pb_js_1.Edition.EDITION_99997_TEST_ONLY:
                case descriptor_pb_js_1.Edition.EDITION_99998_TEST_ONLY:
                case descriptor_pb_js_1.Edition.EDITION_99999_TEST_ONLY:
                case descriptor_pb_js_1.Edition.EDITION_UNKNOWN:
                    e = descriptor_pb_js_1.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    e = edition;
                    break;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${syntax}`);
    }
    if (syntax === "editions" && edition === descriptor_pb_js_1.Edition.EDITION_UNKNOWN) {
        throw new Error(`invalid FileDescriptorProto: syntax ${syntax} cannot have edition ${String(edition)}`);
    }
    return {
        syntax: s3,
        edition: e
    };
}
function findFileDependencies(proto, cart) {
    return proto.dependency.map((wantName)=>{
        const dep = cart.files.find((f2)=>f2.proto.name === wantName);
        (0, assert_js_1.assert)(dep);
        return dep;
    });
}
function makeTypeName(proto, parent, file) {
    (0, assert_js_1.assert)(proto.name, `invalid ${proto.getType().typeName}: missing name`);
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
    var _a18, _b2;
    (0, assert_js_1.assert)((_a18 = mapEntry.proto.options) === null || _a18 === void 0 ? void 0 : _a18.mapEntry, `invalid DescriptorProto: expected ${mapEntry.toString()} to be a map entry`);
    (0, assert_js_1.assert)(mapEntry.fields.length === 2, `invalid DescriptorProto: map entry ${mapEntry.toString()} has ${mapEntry.fields.length} fields`);
    const keyField = mapEntry.fields.find((f2)=>f2.proto.number === 1);
    (0, assert_js_1.assert)(keyField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing key field`);
    const mapKey = keyField.scalar;
    (0, assert_js_1.assert)(mapKey !== void 0 && mapKey !== scalar_js_1.ScalarType.BYTES && mapKey !== scalar_js_1.ScalarType.FLOAT && mapKey !== scalar_js_1.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${mapEntry.toString()} has unexpected key type ${(_b2 = keyField.proto.type) !== null && _b2 !== void 0 ? _b2 : -1}`);
    const valueField = mapEntry.fields.find((f2)=>f2.proto.number === 2);
    (0, assert_js_1.assert)(valueField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing value field`);
    switch(valueField.fieldKind){
        case "scalar":
            return {
                mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), {
                    kind: "scalar"
                })
            };
        case "message":
            return {
                mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), {
                    kind: "message"
                })
            };
        case "enum":
            return {
                mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), {
                    kind: "enum"
                })
            };
        default:
            throw new Error("invalid DescriptorProto: unsupported map entry value field");
    }
}
function findOneof(proto, allOneofs) {
    var _a18;
    const oneofIndex = proto.oneofIndex;
    if (oneofIndex === void 0) {
        return void 0;
    }
    let oneof;
    if (proto.proto3Optional !== true) {
        oneof = allOneofs[oneofIndex];
        (0, assert_js_1.assert)(oneof, `invalid FieldDescriptorProto: oneof #${oneofIndex} for field #${(_a18 = proto.number) !== null && _a18 !== void 0 ? _a18 : -1} not found`);
    }
    return oneof;
}
function isOptionalField(proto, syntax) {
    switch(syntax){
        case "proto2":
            return proto.oneofIndex === void 0 && proto.label === descriptor_pb_js_1.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return proto.proto3Optional === true;
        case "editions":
            return false;
    }
}
function isPackedFieldByDefault(proto, resolveFeatures) {
    const { repeatedFieldEncoding } = resolveFeatures();
    if (repeatedFieldEncoding != descriptor_pb_js_1.FeatureSet_RepeatedFieldEncoding.PACKED) {
        return false;
    }
    switch(proto.type){
        case descriptor_pb_js_1.FieldDescriptorProto_Type.STRING:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.BYTES:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.GROUP:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.MESSAGE:
            return false;
        default:
            return true;
    }
}
function isPackedField(file, parent, proto, resolveFeatures) {
    var _a18, _b2, _c, _d, _e2, _f;
    switch(proto.type){
        case descriptor_pb_js_1.FieldDescriptorProto_Type.STRING:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.BYTES:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.GROUP:
        case descriptor_pb_js_1.FieldDescriptorProto_Type.MESSAGE:
            return false;
        default:
            switch(file.edition){
                case descriptor_pb_js_1.Edition.EDITION_PROTO2:
                    return (_b2 = (_a18 = proto.options) === null || _a18 === void 0 ? void 0 : _a18.packed) !== null && _b2 !== void 0 ? _b2 : false;
                case descriptor_pb_js_1.Edition.EDITION_PROTO3:
                    return (_d = (_c = proto.options) === null || _c === void 0 ? void 0 : _c.packed) !== null && _d !== void 0 ? _d : true;
                default:
                    {
                        const { repeatedFieldEncoding } = resolveFeatures((_e2 = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _e2 !== void 0 ? _e2 : file.getFeatures(), (_f = proto.options) === null || _f === void 0 ? void 0 : _f.features);
                        return repeatedFieldEncoding == descriptor_pb_js_1.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
var fieldTypeToScalarType = {
    [descriptor_pb_js_1.FieldDescriptorProto_Type.DOUBLE]: scalar_js_1.ScalarType.DOUBLE,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.FLOAT]: scalar_js_1.ScalarType.FLOAT,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.INT64]: scalar_js_1.ScalarType.INT64,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.UINT64]: scalar_js_1.ScalarType.UINT64,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.INT32]: scalar_js_1.ScalarType.INT32,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.FIXED64]: scalar_js_1.ScalarType.FIXED64,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.FIXED32]: scalar_js_1.ScalarType.FIXED32,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.BOOL]: scalar_js_1.ScalarType.BOOL,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.STRING]: scalar_js_1.ScalarType.STRING,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.GROUP]: void 0,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.MESSAGE]: void 0,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.BYTES]: scalar_js_1.ScalarType.BYTES,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.UINT32]: scalar_js_1.ScalarType.UINT32,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.ENUM]: void 0,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.SFIXED32]: scalar_js_1.ScalarType.SFIXED32,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.SFIXED64]: scalar_js_1.ScalarType.SFIXED64,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.SINT32]: scalar_js_1.ScalarType.SINT32,
    [descriptor_pb_js_1.FieldDescriptorProto_Type.SINT64]: scalar_js_1.ScalarType.SINT64
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
var FieldNumber;
(function(FieldNumber2) {
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
})(FieldNumber || (FieldNumber = {}));
function declarationString() {
    var _a18, _b2, _c;
    const parts = [];
    if (this.repeated) {
        parts.push("repeated");
    }
    if (this.optional) {
        parts.push("optional");
    }
    const file = this.kind === "extension" ? this.file : this.parent.file;
    if (file.syntax == "proto2" && this.proto.label === descriptor_pb_js_1.FieldDescriptorProto_Label.REQUIRED) {
        parts.push("required");
    }
    let type2;
    switch(this.fieldKind){
        case "scalar":
            type2 = scalar_js_1.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            type2 = this.enum.typeName;
            break;
        case "message":
            type2 = this.message.typeName;
            break;
        case "map":
            {
                const k2 = scalar_js_1.ScalarType[this.mapKey].toLowerCase();
                let v2;
                switch(this.mapValue.kind){
                    case "scalar":
                        v2 = scalar_js_1.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        v2 = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        v2 = this.mapValue.message.typeName;
                        break;
                }
                type2 = `map<${k2}, ${v2}>`;
                break;
            }
    }
    parts.push(`${type2} ${this.name} = ${this.number}`);
    const options2 = [];
    if (((_a18 = this.proto.options) === null || _a18 === void 0 ? void 0 : _a18.packed) !== void 0) {
        options2.push(`packed = ${this.proto.options.packed.toString()}`);
    }
    let defaultValue = this.proto.defaultValue;
    if (defaultValue !== void 0) {
        if (this.proto.type == descriptor_pb_js_1.FieldDescriptorProto_Type.BYTES || this.proto.type == descriptor_pb_js_1.FieldDescriptorProto_Type.STRING) {
            defaultValue = '"' + defaultValue.replace('"', '\\"') + '"';
        }
        options2.push(`default = ${defaultValue}`);
    }
    if (this.jsonName !== void 0) {
        options2.push(`json_name = "${this.jsonName}"`);
    }
    if (((_b2 = this.proto.options) === null || _b2 === void 0 ? void 0 : _b2.jstype) !== void 0) {
        options2.push(`jstype = ${descriptor_pb_js_1.FieldOptions_JSType[this.proto.options.jstype]}`);
    }
    if (((_c = this.proto.options) === null || _c === void 0 ? void 0 : _c.deprecated) === true) {
        options2.push(`deprecated = true`);
    }
    if (options2.length > 0) {
        parts.push("[" + options2.join(", ") + "]");
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
            return (0, text_format_js_1.parseTextFormatEnumValue)(this.enum, d);
        case "scalar":
            return (0, text_format_js_1.parseTextFormatScalarValue)(this.scalar, d);
        default:
            return void 0;
    }
}

return exports2;
}
