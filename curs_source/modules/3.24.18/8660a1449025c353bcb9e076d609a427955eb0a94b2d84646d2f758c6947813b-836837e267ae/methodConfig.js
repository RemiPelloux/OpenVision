import { $un, Hun, Xqu, Zqu } from "./attributes.js";
import { E } from "./tslib.es6.js";
var Two;
export { Two };
var __wakaru_kzu_initialized = false;
export function kzu() {
if (__wakaru_kzu_initialized) return;
__wakaru_kzu_initialized = true;
"use strict";
E(), Hun(), Two = {
    "tools/call": {
        targetField: "name",
        targetAttribute: Xqu,
        captureArguments: !0,
        argumentsField: "arguments"
    },
    "resources/read": {
        targetField: "uri",
        targetAttribute: $un,
        captureUri: !0
    },
    "resources/subscribe": {
        targetField: "uri",
        targetAttribute: $un
    },
    "resources/unsubscribe": {
        targetField: "uri",
        targetAttribute: $un
    },
    "prompts/get": {
        targetField: "name",
        targetAttribute: Zqu,
        captureName: !0,
        captureArguments: !0,
        argumentsField: "arguments"
    }
};

}
