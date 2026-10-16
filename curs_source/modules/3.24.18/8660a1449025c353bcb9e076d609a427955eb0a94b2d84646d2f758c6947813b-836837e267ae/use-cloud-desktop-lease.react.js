import { pd } from "./background_composer_pb.js";
import { kl } from "./browser.ts";
import { dp } from "./connect.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var __wakaru_VmC_initialized = false;
export function VmC() {
if (__wakaru_VmC_initialized) return;
__wakaru_VmC_initialized = true;
"use strict";
E(), nl(), pd(), kl(), dp();

}
