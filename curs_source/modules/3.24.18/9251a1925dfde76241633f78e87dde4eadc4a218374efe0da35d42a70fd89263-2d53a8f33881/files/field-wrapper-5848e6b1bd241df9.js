import { init_is_message } from "../is-message.js";
import { ScalarType, init_scalar } from "../scalar.js";
var wktWrapperToScalarType;
export { wktWrapperToScalarType };
var __wakaru_init_field_wrapper_initialized = false;
export function init_field_wrapper() {
if (__wakaru_init_field_wrapper_initialized) return;
__wakaru_init_field_wrapper_initialized = true;
init_scalar();
init_is_message();
wktWrapperToScalarType = {
    "google.protobuf.DoubleValue": ScalarType.DOUBLE,
    "google.protobuf.FloatValue": ScalarType.FLOAT,
    "google.protobuf.Int64Value": ScalarType.INT64,
    "google.protobuf.UInt64Value": ScalarType.UINT64,
    "google.protobuf.Int32Value": ScalarType.INT32,
    "google.protobuf.UInt32Value": ScalarType.UINT32,
    "google.protobuf.BoolValue": ScalarType.BOOL,
    "google.protobuf.StringValue": ScalarType.STRING,
    "google.protobuf.BytesValue": ScalarType.BYTES
};

}
