import { require_is_message } from "../is-message.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_field_wrapper_cache;
export function require_field_wrapper() {
if (__wakaru_require_field_wrapper_cache) return __wakaru_require_field_wrapper_cache;
var exports2 = {};
__wakaru_require_field_wrapper_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.getUnwrappedFieldType = exports2.wrapField = void 0;
var scalar_js_1 = require_scalar();
var is_message_js_1 = require_is_message();
function wrapField2(type2, value) {
    if ((0, is_message_js_1.isMessage)(value) || !type2.fieldWrapper) {
        return value;
    }
    return type2.fieldWrapper.wrapField(value);
}
exports2.wrapField = wrapField2;
function getUnwrappedFieldType(field4) {
    if (field4.fieldKind !== "message") {
        return void 0;
    }
    if (field4.repeated) {
        return void 0;
    }
    if (field4.oneof != void 0) {
        return void 0;
    }
    return wktWrapperToScalarType2[field4.message.typeName];
}
exports2.getUnwrappedFieldType = getUnwrappedFieldType;
var wktWrapperToScalarType2 = {
    "google.protobuf.DoubleValue": scalar_js_1.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": scalar_js_1.ScalarType.FLOAT,
    "google.protobuf.Int64Value": scalar_js_1.ScalarType.INT64,
    "google.protobuf.UInt64Value": scalar_js_1.ScalarType.UINT64,
    "google.protobuf.Int32Value": scalar_js_1.ScalarType.INT32,
    "google.protobuf.UInt32Value": scalar_js_1.ScalarType.UINT32,
    "google.protobuf.BoolValue": scalar_js_1.ScalarType.BOOL,
    "google.protobuf.StringValue": scalar_js_1.ScalarType.STRING,
    "google.protobuf.BytesValue": scalar_js_1.ScalarType.BYTES
};

return exports2;
}
