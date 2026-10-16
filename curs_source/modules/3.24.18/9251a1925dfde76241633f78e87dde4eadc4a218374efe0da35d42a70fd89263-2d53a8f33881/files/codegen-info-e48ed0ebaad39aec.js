import { require_field_wrapper } from "./private/field-wrapper.js";
import { require_names } from "./private/names.js";
import { require_reify_wkt } from "./private/reify-wkt.js";
import { require_scalars } from "./private/scalars.js";
var __wakaru_require_codegen_info_cache;
export function require_codegen_info() {
if (__wakaru_require_codegen_info_cache) return __wakaru_require_codegen_info_cache;
var exports2 = {};
__wakaru_require_codegen_info_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.codegenInfo = void 0;
var names_js_1 = require_names();
var field_wrapper_js_1 = require_field_wrapper();
var scalars_js_1 = require_scalars();
var reify_wkt_js_1 = require_reify_wkt();
var packageName2 = "@bufbuild/protobuf";
exports2.codegenInfo = {
    packageName: "@bufbuild/protobuf",
    localName: names_js_1.localName,
    reifyWkt: reify_wkt_js_1.reifyWkt,
    getUnwrappedFieldType: field_wrapper_js_1.getUnwrappedFieldType,
    scalarDefaultValue: scalars_js_1.scalarZeroValue,
    scalarZeroValue: scalars_js_1.scalarZeroValue,
    safeIdentifier: names_js_1.safeIdentifier,
    safeObjectProperty: names_js_1.safeObjectProperty,
    symbols: {
        proto2: {
            typeOnly: false,
            privateImportPath: "./proto2.js",
            publicImportPath: packageName2
        },
        proto3: {
            typeOnly: false,
            privateImportPath: "./proto3.js",
            publicImportPath: packageName2
        },
        Message: {
            typeOnly: false,
            privateImportPath: "./message.js",
            publicImportPath: packageName2
        },
        PartialMessage: {
            typeOnly: true,
            privateImportPath: "./message.js",
            publicImportPath: packageName2
        },
        PlainMessage: {
            typeOnly: true,
            privateImportPath: "./message.js",
            publicImportPath: packageName2
        },
        FieldList: {
            typeOnly: true,
            privateImportPath: "./field-list.js",
            publicImportPath: packageName2
        },
        MessageType: {
            typeOnly: true,
            privateImportPath: "./message-type.js",
            publicImportPath: packageName2
        },
        Extension: {
            typeOnly: true,
            privateImportPath: "./extension.js",
            publicImportPath: packageName2
        },
        BinaryReadOptions: {
            typeOnly: true,
            privateImportPath: "./binary-format.js",
            publicImportPath: packageName2
        },
        BinaryWriteOptions: {
            typeOnly: true,
            privateImportPath: "./binary-format.js",
            publicImportPath: packageName2
        },
        JsonReadOptions: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName2
        },
        JsonWriteOptions: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName2
        },
        JsonValue: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName2
        },
        JsonObject: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: packageName2
        },
        protoDouble: {
            typeOnly: false,
            privateImportPath: "./proto-double.js",
            publicImportPath: packageName2
        },
        protoInt64: {
            typeOnly: false,
            privateImportPath: "./proto-int64.js",
            publicImportPath: packageName2
        },
        ScalarType: {
            typeOnly: false,
            privateImportPath: "./scalar.js",
            publicImportPath: packageName2
        },
        LongType: {
            typeOnly: false,
            privateImportPath: "./scalar.js",
            publicImportPath: packageName2
        },
        MethodKind: {
            typeOnly: false,
            privateImportPath: "./service-type.js",
            publicImportPath: packageName2
        },
        MethodIdempotency: {
            typeOnly: false,
            privateImportPath: "./service-type.js",
            publicImportPath: packageName2
        },
        IMessageTypeRegistry: {
            typeOnly: true,
            privateImportPath: "./type-registry.js",
            publicImportPath: packageName2
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

return exports2;
}
