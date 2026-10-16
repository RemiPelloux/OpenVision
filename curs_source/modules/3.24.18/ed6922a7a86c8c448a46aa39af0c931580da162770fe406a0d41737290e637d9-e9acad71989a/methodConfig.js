import { A0c, FLt, OLt, R0c } from "./attributes.js";
import { x } from "./tslib.es6.js";
var UVr;
export { UVr };
var __wakaru_t1c_initialized = false;
export function t1c() {
if (__wakaru_t1c_initialized) return;
__wakaru_t1c_initialized = true;
"use strict";
x(), FLt(), UVr = {
    "tools/call": {
        targetField: "name",
        targetAttribute: A0c,
        captureArguments: !0,
        argumentsField: "arguments"
    },
    "resources/read": {
        targetField: "uri",
        targetAttribute: OLt,
        captureUri: !0
    },
    "resources/subscribe": {
        targetField: "uri",
        targetAttribute: OLt
    },
    "resources/unsubscribe": {
        targetField: "uri",
        targetAttribute: OLt
    },
    "prompts/get": {
        targetField: "name",
        targetAttribute: R0c,
        captureName: !0,
        captureArguments: !0,
        argumentsField: "arguments"
    }
};

}
