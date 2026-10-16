Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const o = require("./module-408.js"), s = require("./module-706.js");
exports.wrapField = function(e, a) {
    return (0, s.isMessage)(a) || !e.fieldWrapper ? a : e.fieldWrapper.wrapField(a);
}, exports.getUnwrappedFieldType = function(e) {
    if ("message" === e.fieldKind && !e.repeated && null == e.oneof) return t[e.message.typeName];
};
const t = {
    "google.protobuf.DoubleValue": o.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": o.ScalarType.FLOAT,
    "google.protobuf.Int64Value": o.ScalarType.INT64,
    "google.protobuf.UInt64Value": o.ScalarType.UINT64,
    "google.protobuf.Int32Value": o.ScalarType.INT32,
    "google.protobuf.UInt32Value": o.ScalarType.UINT32,
    "google.protobuf.BoolValue": o.ScalarType.BOOL,
    "google.protobuf.StringValue": o.ScalarType.STRING,
    "google.protobuf.BytesValue": o.ScalarType.BYTES
};
