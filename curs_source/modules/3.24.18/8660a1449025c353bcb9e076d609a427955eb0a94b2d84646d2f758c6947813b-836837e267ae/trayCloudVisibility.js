import { pd } from "./background_composer_pb.js";
import { E } from "./tslib.es6.js";
var __wakaru_sdk_initialized = false;
export function sdk() {
if (__wakaru_sdk_initialized) return;
__wakaru_sdk_initialized = true;
"use strict";
E(), pd();

}
