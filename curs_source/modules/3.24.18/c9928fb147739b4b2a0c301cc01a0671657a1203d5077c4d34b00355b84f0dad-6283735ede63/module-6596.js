Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.codegenInfo = void 0;
const s = require("./module-5822.js"), o = require("./module-2212.js"), r = require("./module-1455.js"), t = require("./module-7924.js"), i = "@bufbuild/protobuf";
exports.codegenInfo = {
    packageName: "@bufbuild/protobuf",
    localName: s.localName,
    reifyWkt: t.reifyWkt,
    getUnwrappedFieldType: o.getUnwrappedFieldType,
    scalarDefaultValue: r.scalarZeroValue,
    scalarZeroValue: r.scalarZeroValue,
    safeIdentifier: s.safeIdentifier,
    safeObjectProperty: s.safeObjectProperty,
    symbols: {
        proto2: {
            typeOnly: !1,
            privateImportPath: "./proto2.js",
            publicImportPath: i
        },
        proto3: {
            typeOnly: !1,
            privateImportPath: "./proto3.js",
            publicImportPath: i
        },
        Message: {
            typeOnly: !1,
            privateImportPath: "./message.js",
            publicImportPath: i
        },
        PartialMessage: {
            typeOnly: !0,
            privateImportPath: "./message.js",
            publicImportPath: i
        },
        PlainMessage: {
            typeOnly: !0,
            privateImportPath: "./message.js",
            publicImportPath: i
        },
        FieldList: {
            typeOnly: !0,
            privateImportPath: "./field-list.js",
            publicImportPath: i
        },
        MessageType: {
            typeOnly: !0,
            privateImportPath: "./message-type.js",
            publicImportPath: i
        },
        Extension: {
            typeOnly: !0,
            privateImportPath: "./extension.js",
            publicImportPath: i
        },
        BinaryReadOptions: {
            typeOnly: !0,
            privateImportPath: "./binary-format.js",
            publicImportPath: i
        },
        BinaryWriteOptions: {
            typeOnly: !0,
            privateImportPath: "./binary-format.js",
            publicImportPath: i
        },
        JsonReadOptions: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: i
        },
        JsonWriteOptions: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: i
        },
        JsonValue: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: i
        },
        JsonObject: {
            typeOnly: !0,
            privateImportPath: "./json-format.js",
            publicImportPath: i
        },
        protoDouble: {
            typeOnly: !1,
            privateImportPath: "./proto-double.js",
            publicImportPath: i
        },
        protoInt64: {
            typeOnly: !1,
            privateImportPath: "./proto-int64.js",
            publicImportPath: i
        },
        ScalarType: {
            typeOnly: !1,
            privateImportPath: "./scalar.js",
            publicImportPath: i
        },
        LongType: {
            typeOnly: !1,
            privateImportPath: "./scalar.js",
            publicImportPath: i
        },
        MethodKind: {
            typeOnly: !1,
            privateImportPath: "./service-type.js",
            publicImportPath: i
        },
        MethodIdempotency: {
            typeOnly: !1,
            privateImportPath: "./service-type.js",
            publicImportPath: i
        },
        IMessageTypeRegistry: {
            typeOnly: !0,
            privateImportPath: "./type-registry.js",
            publicImportPath: i
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
