import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var au;
export { au };
var __wakaru_bE_initialized = false;
export function bE() {
if (__wakaru_bE_initialized) return;
__wakaru_bE_initialized = true;
"use strict";
E(), hr(), au = x.makeEnum("aiserver.v1.PrivacyMode", [
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
