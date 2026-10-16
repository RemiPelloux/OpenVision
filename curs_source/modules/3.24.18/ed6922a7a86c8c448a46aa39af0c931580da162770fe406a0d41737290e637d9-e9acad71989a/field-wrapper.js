import { LKe } from "./is-message.js";
import { Lc, jwe } from "./scalar.js";
import { x } from "./tslib.es6.js";
var twg;
export { twg };
var __wakaru_rss_initialized = false;
export function rss() {
if (__wakaru_rss_initialized) return;
__wakaru_rss_initialized = true;
"use strict";
x(), jwe(), LKe(), twg = {
    "google.protobuf.DoubleValue": Lc.DOUBLE,
    "google.protobuf.FloatValue": Lc.FLOAT,
    "google.protobuf.Int64Value": Lc.INT64,
    "google.protobuf.UInt64Value": Lc.UINT64,
    "google.protobuf.Int32Value": Lc.INT32,
    "google.protobuf.UInt32Value": Lc.UINT32,
    "google.protobuf.BoolValue": Lc.BOOL,
    "google.protobuf.StringValue": Lc.STRING,
    "google.protobuf.BytesValue": Lc.BYTES
};

}
