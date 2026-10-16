require.r(exports);
require.d(exports, {
    codegenInfo: ()=>codegenInfo
});
var _private_names_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-30.js");
var _private_field_wrapper_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-22.js");
var _private_scalars_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-14.js");
var _private_reify_wkt_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-35.js");
const packageName = "@bufbuild/protobuf";
const codegenInfo = {
    packageName: "@bufbuild/protobuf",
    localName: _private_names_js__WEBPACK_IMPORTED_MODULE_0__.localName,
    reifyWkt: _private_reify_wkt_js__WEBPACK_IMPORTED_MODULE_3__.reifyWkt,
    getUnwrappedFieldType: _private_field_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.getUnwrappedFieldType,
    scalarDefaultValue: _private_scalars_js__WEBPACK_IMPORTED_MODULE_2__.scalarZeroValue,
    scalarZeroValue: _private_scalars_js__WEBPACK_IMPORTED_MODULE_2__.scalarZeroValue,
    safeIdentifier: _private_names_js__WEBPACK_IMPORTED_MODULE_0__.safeIdentifier,
    safeObjectProperty: _private_names_js__WEBPACK_IMPORTED_MODULE_0__.safeObjectProperty,
    symbols: {
        proto2: {
            typeOnly: false,
            privateImportPath: "./proto2.js",
            publicImportPath: packageName
        },
        proto3: {
            typeOnly: false,
            privateImportPath: "./proto3.js",
            publicImportPath: packageName
        },
        Message: {
            typeOnly: false,
            privateImportPath: "./message.js",
            publicImportPath: packageName
        },
        PartialMessage: {
            typeOnly: true,
            privateImportPath: "./message.js",
            publicImportPath: packageName
        },
        PlainMessage: {
            typeOnly: true,
            privateImportPath: "./message.js",
            publicImportPath: packageName
        },
        FieldList: {
            typeOnly: true,
            privateImportPath: "./field-list.js",
            publicImportPath: packageName
        },
        MessageType: {
            typeOnly: true,
            privateImportPath: "./message-type.js",
            publicImportPath: packageName
        },
        Extension: {
            typeOnly: true,
            privateImportPath: "./extension.js",
            publicImportPath: packageName
        },
        BinaryReadOptions: {
            typeOnly: true,
            privateImportPath: "./binary-format.js",
            publicImportPath: packageName
        },
        BinaryWriteOptions: {
            typeOnly: true,
            privateImportPath: "./binary-format.js",
            publicImportPath: packageName
        },
        JsonReadOptions: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName
        },
        JsonWriteOptions: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName
        },
        JsonValue: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName
        },
        JsonObject: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName
        },
        protoDouble: {
            typeOnly: false,
            privateImportPath: "./proto-double.js",
            publicImportPath: packageName
        },
        protoInt64: {
            typeOnly: false,
            privateImportPath: "./proto-int64.js",
            publicImportPath: packageName
        },
        ScalarType: {
            typeOnly: false,
            privateImportPath: "./scalar.js",
            publicImportPath: packageName
        },
        LongType: {
            typeOnly: false,
            privateImportPath: "./scalar.js",
            publicImportPath: packageName
        },
        MethodKind: {
            typeOnly: false,
            privateImportPath: "./service-type.js",
            publicImportPath: packageName
        },
        MethodIdempotency: {
            typeOnly: false,
            privateImportPath: "./service-type.js",
            publicImportPath: packageName
        },
        IMessageTypeRegistry: {
            typeOnly: true,
            privateImportPath: "./type-registry.js",
            publicImportPath: packageName
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
