require.r(exports);
require.d(exports, {
    getUnwrappedFieldType: ()=>getUnwrappedFieldType,
    wrapField: ()=>wrapField
});
var _scalar_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-17.js");
var _is_message_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-23.js");
function wrapField(type, value) {
    const isMsg = (0, _is_message_js__WEBPACK_IMPORTED_MODULE_1__.isMessage)(value);
    if (!isMsg && !type.fieldWrapper) {
        return new type(value);
    } else if (isMsg || !type.fieldWrapper) {
        return value;
    }
    return type.fieldWrapper.wrapField(value);
}
function getUnwrappedFieldType(field) {
    if (field.fieldKind !== "message") {
        return void 0;
    }
    if (field.repeated) {
        return void 0;
    }
    if (field.oneof != void 0) {
        return void 0;
    }
    return wktWrapperToScalarType[field.message.typeName];
}
const wktWrapperToScalarType = {
    "google.protobuf.DoubleValue": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FLOAT,
    "google.protobuf.Int64Value": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64,
    "google.protobuf.UInt64Value": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT64,
    "google.protobuf.Int32Value": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32,
    "google.protobuf.UInt32Value": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT32,
    "google.protobuf.BoolValue": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL,
    "google.protobuf.StringValue": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING,
    "google.protobuf.BytesValue": _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES
};
