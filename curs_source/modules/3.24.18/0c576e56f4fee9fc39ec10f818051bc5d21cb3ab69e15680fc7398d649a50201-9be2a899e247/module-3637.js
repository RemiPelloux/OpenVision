"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
const n = require("./module-4638.js");
exports.INVALID_SPANID = "0000000000000000", exports.INVALID_TRACEID = "00000000000000000000000000000000", exports.INVALID_SPAN_CONTEXT = {
    traceId: exports.INVALID_TRACEID,
    spanId: exports.INVALID_SPANID,
    traceFlags: n.TraceFlags.NONE
};
