import { Smi } from "./get-default-variant.js";
import { wmi } from "./mode.js";
import { Hba } from "./param-matching.js";
import { E } from "./tslib.es6.js";
var __wakaru_BVh_initialized = false;
export function BVh() {
if (__wakaru_BVh_initialized) return;
__wakaru_BVh_initialized = true;
"use strict";
E(), Smi(), Hba(), wmi();

}
