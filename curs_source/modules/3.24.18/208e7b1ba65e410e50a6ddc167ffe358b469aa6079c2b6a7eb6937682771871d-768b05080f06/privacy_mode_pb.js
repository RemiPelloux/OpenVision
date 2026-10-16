import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var vq;
export { vq };
var __wakaru_Tq_initialized = false;
export function Tq() {
if (__wakaru_Tq_initialized) return;
__wakaru_Tq_initialized = true;
"use strict";
h(), F(), vq = c.makeEnum("aiserver.v1.PrivacyMode", [
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
