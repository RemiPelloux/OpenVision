"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const t = require("./module-3408.js"), s = require("./module-2706.js");
exports.wrapField = function(e, n) {
    return (0, s.isMessage)(n) || !e.fieldWrapper ? n : e.fieldWrapper.wrapField(n);
}, exports.getUnwrappedFieldType = function(e) {
    if ("message" === e.fieldKind && !e.repeated && null == e.oneof) return o[e.message.typeName];
};
const o = {
    "google.protobuf.DoubleValue": t.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": t.ScalarType.FLOAT,
    "google.protobuf.Int64Value": t.ScalarType.INT64,
    "google.protobuf.UInt64Value": t.ScalarType.UINT64,
    "google.protobuf.Int32Value": t.ScalarType.INT32,
    "google.protobuf.UInt32Value": t.ScalarType.UINT32,
    "google.protobuf.BoolValue": t.ScalarType.BOOL,
    "google.protobuf.StringValue": t.ScalarType.STRING,
    "google.protobuf.BytesValue": t.ScalarType.BYTES
};
