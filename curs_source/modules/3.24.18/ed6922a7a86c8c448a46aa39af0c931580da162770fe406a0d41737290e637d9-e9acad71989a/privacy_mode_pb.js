import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var xl;
export { xl };
var __wakaru_IR_initialized = false;
export function IR() {
if (__wakaru_IR_initialized) return;
__wakaru_IR_initialized = true;
"use strict";
x(), bi(), xl = k.makeEnum("aiserver.v1.PrivacyMode", [
    {
        no: 0,
        name: "PRIVACY_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVACY_MODE_NO_STORAGE",
        localName: "NO_STORAGE"
    },
    {
        no: 2,
        name: "PRIVACY_MODE_NO_TRAINING",
        localName: "NO_TRAINING"
    },
    {
        no: 3,
        name: "PRIVACY_MODE_USAGE_DATA_TRAINING_ALLOWED",
        localName: "USAGE_DATA_TRAINING_ALLOWED"
    },
    {
        no: 4,
        name: "PRIVACY_MODE_USAGE_CODEBASE_TRAINING_ALLOWED",
        localName: "USAGE_CODEBASE_TRAINING_ALLOWED"
    }
]);

}
