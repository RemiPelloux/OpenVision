"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const n = require("./module-3408.js"), s = require("./module-2706.js");
exports.wrapField = function(t, e) {
    return (0, s.isMessage)(e) || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
}, exports.getUnwrappedFieldType = function(t) {
    if ("message" === t.fieldKind && !t.repeated && null == t.oneof) return i[t.message.typeName];
};
const i = {
    "google.protobuf.DoubleValue": n.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": n.ScalarType.FLOAT,
    "google.protobuf.Int64Value": n.ScalarType.INT64,
    "google.protobuf.UInt64Value": n.ScalarType.UINT64,
    "google.protobuf.Int32Value": n.ScalarType.INT32,
    "google.protobuf.UInt32Value": n.ScalarType.UINT32,
    "google.protobuf.BoolValue": n.ScalarType.BOOL,
    "google.protobuf.StringValue": n.ScalarType.STRING,
    "google.protobuf.BytesValue": n.ScalarType.BYTES
};
