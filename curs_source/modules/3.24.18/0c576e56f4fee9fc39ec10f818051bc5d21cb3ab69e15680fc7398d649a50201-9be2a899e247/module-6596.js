"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.codegenInfo = void 0;
const n = require("./module-5822.js"), o = require("./module-2212.js"), s = require("./module-3836.js"), i = require("./module-7924.js"), a = "@bufbuild/protobuf";
exports.codegenInfo = {
    packageName: "@bufbuild/protobuf",
    localName: n.localName,
    reifyWkt: i.reifyWkt,
    getUnwrappedFieldType: o.getUnwrappedFieldType,
    scalarDefaultValue: s.scalarZeroValue,
    scalarZeroValue: s.scalarZeroValue,
    safeIdentifier: n.safeIdentifier,
    safeObjectProperty: n.safeObjectProperty,
    symbols: {
        proto2: {
            typeOnly: !1,
            privateImportPath: "./proto2.js",
            publicImportPath: a
        },
        proto3: {
            typeOnly: !1,
            privateImportPath: "./proto3.js",
            publicImportPath: a
        },
        Message: {
            typeOnly: !1,
            privateImportPath: "./message.js",
            publicImportPath: a
        },
        PartialMessage: {
            typeOnly: !0,
            privateImportPath: "./message.js",
            publicImportPath: a
        },
        PlainMessage: {
            typeOnly: !0,
            privateImportPath: "./message.js",
            publicImportPath: a
        },
        FieldList: {
            typeOnly: !0,
            privateImportPath: "./field-list.js",
            publicImportPath: a
        },
        MessageType: {
            typeOnly: !0,
            privateImportPath: "./message-type.js",
            publicImportPath: a
        },
        Extension: {
            typeOnly: !0,
            privateImportPath: "./extension.js",
            publicImportPath: a
        },
        BinaryReadOptions: {
            typeOnly: !0,
            privateImportPath: "./binary-format.js",
            publicImportPath: a
        },
        BinaryWriteOptions: {
            typeOnly: !0,
            privateImportPath: "./binary-format.js",
            publicImportPath: a
        },
        JsonReadOptions: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: a
        },
        JsonWriteOptions: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: a
        },
        JsonValue: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: a
        },
        JsonObject: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: a
        },
        protoDouble: {
            typeOnly: !1,
            privateImportPath: "./proto-double.js",
            publicImportPath: a
        },
        protoInt64: {
            typeOnly: !1,
            privateImportPath: "./proto-int64.js",
            publicImportPath: a
        },
        ScalarType: {
            typeOnly: !1,
            privateImportPath: "./scalar.js",
            publicImportPath: a
        },
        LongType: {
            typeOnly: !1,
            privateImportPath: "./scalar.js",
            publicImportPath: a
        },
        MethodKind: {
            typeOnly: !1,
            privateImportPath: "./service-type.js",
            publicImportPath: a
        },
        MethodIdempotency: {
            typeOnly: !1,
            privateImportPath: "./service-type.js",
            publicImportPath: a
        },
        IMessageTypeRegistry: {
            typeOnly: !0,
            privateImportPath: "./type-registry.js",
            publicImportPath: a
        }
    },
    wktSourceFiles: [
        "google/protobuf/compiler/plugin.proto",
        "google/protobuf/any.proto",
        "google/protobuf/api.proto",
        "google/protobuf/descriptor.proto",
        "google/protobuf/duration.proto",
        "google/protobuf/empty.proto",
        "google/protobuf/field_mask.proto",
        "google/protobuf/source_context.proto",
        "google/protobuf/struct.proto",
        "google/protobuf/timestamp.proto",
        "google/protobuf/type.proto",
        "google/protobuf/wrappers.proto"
    ]
};
