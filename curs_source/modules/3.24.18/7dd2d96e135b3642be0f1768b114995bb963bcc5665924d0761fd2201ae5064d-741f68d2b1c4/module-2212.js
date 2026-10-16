"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const a = require("./module-3408.js"), s = require("./module-2706.js");
exports.wrapField = function(e, n) {
    return (0, s.isMessage)(n) || !e.fieldWrapper ? n : e.fieldWrapper.wrapField(n);
}, exports.getUnwrappedFieldType = function(e) {
    if ("message" === e.fieldKind && !e.repeated && null == e.oneof) return o[e.message.typeName];
};
const o = {
    "google.protobuf.DoubleValue": a.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": a.ScalarType.FLOAT,
    "google.protobuf.Int64Value": a.ScalarType.INT64,
    "google.protobuf.UInt64Value": a.ScalarType.UINT64,
    "google.protobuf.Int32Value": a.ScalarType.INT32,
    "google.protobuf.UInt32Value": a.ScalarType.UINT32,
    "google.protobuf.BoolValue": a.ScalarType.BOOL,
    "google.protobuf.StringValue": a.ScalarType.STRING,
    "google.protobuf.BytesValue": a.ScalarType.BYTES
};
