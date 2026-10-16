"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUnwrappedFieldType = exports.wrapField = void 0;
const n = require("./module-3408.js"), r = require("./module-2706.js");
exports.wrapField = function(e, A) {
    return (0, r.isMessage)(A) || !e.fieldWrapper ? A : e.fieldWrapper.wrapField(A);
}, exports.getUnwrappedFieldType = function(e) {
    if ("message" === e.fieldKind && !e.repeated && null == e.oneof) return o[e.message.typeName];
};
const o = {
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
