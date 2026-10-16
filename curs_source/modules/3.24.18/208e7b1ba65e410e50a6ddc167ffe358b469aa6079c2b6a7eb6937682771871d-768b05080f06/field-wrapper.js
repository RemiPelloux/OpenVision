import { vo } from "./is-message.js";
import { V, pi } from "./scalar.js";
import { h } from "./tslib.es6.js";
var Uje;
export { Uje };
var __wakaru_AM_initialized = false;
export function AM() {
if (__wakaru_AM_initialized) return;
__wakaru_AM_initialized = true;
"use strict";
h(), pi(), vo(), Uje = {
    "google.protobuf.DoubleValue": V.DOUBLE,
    "google.protobuf.FloatValue": V.FLOAT,
    "google.protobuf.Int64Value": V.INT64,
    "google.protobuf.UInt64Value": V.UINT64,
    "google.protobuf.Int32Value": V.INT32,
    "google.protobuf.UInt32Value": V.UINT32,
    "google.protobuf.BoolValue": V.BOOL,
    "google.protobuf.StringValue": V.STRING,
    "google.protobuf.BytesValue": V.BYTES
};

}
