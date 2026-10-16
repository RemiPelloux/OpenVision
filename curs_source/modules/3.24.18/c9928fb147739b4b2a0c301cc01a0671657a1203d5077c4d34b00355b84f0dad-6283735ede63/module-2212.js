Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const s = require("./module-3408.js"), o = require("./module-2706.js");
exports.wrapField = function(e, a) {
    return (0, o.isMessage)(a) || !e.fieldWrapper ? a : e.fieldWrapper.wrapField(a);
}, exports.getUnwrappedFieldType = function(e) {
    if ("message" === e.fieldKind && !e.repeated && null == e.oneof) return r[e.message.typeName];
};
const r = {
    "google.protobuf.DoubleValue": s.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": s.ScalarType.FLOAT,
    "google.protobuf.Int64Value": s.ScalarType.INT64,
    "google.protobuf.UInt64Value": s.ScalarType.UINT64,
    "google.protobuf.Int32Value": s.ScalarType.INT32,
    "google.protobuf.UInt32Value": s.ScalarType.UINT32,
    "google.protobuf.BoolValue": s.ScalarType.BOOL,
    "google.protobuf.StringValue": s.ScalarType.STRING,
    "google.protobuf.BytesValue": s.ScalarType.BYTES
};
