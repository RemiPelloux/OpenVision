Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const r = require("./module-408.js"), o = require("./module-706.js");
exports.wrapField = function(e, t) {
    return (0, o.isMessage)(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t);
}, exports.getUnwrappedFieldType = function(e) {
    if ("message" === e.fieldKind && !e.repeated && null == e.oneof) return a[e.message.typeName];
};
const a = {
    "google.protobuf.DoubleValue": r.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": r.ScalarType.FLOAT,
    "google.protobuf.Int64Value": r.ScalarType.INT64,
    "google.protobuf.UInt64Value": r.ScalarType.UINT64,
    "google.protobuf.Int32Value": r.ScalarType.INT32,
    "google.protobuf.UInt32Value": r.ScalarType.UINT32,
    "google.protobuf.BoolValue": r.ScalarType.BOOL,
    "google.protobuf.StringValue": r.ScalarType.STRING,
    "google.protobuf.BytesValue": r.ScalarType.BYTES
};
