import { Smi } from "./get-default-variant.js";
import { Hba } from "./param-matching.js";
import { _3S } from "./serving-tier.js";
import { E } from "./tslib.es6.js";
var __wakaru_kmi_initialized = false;
export function kmi() {
if (__wakaru_kmi_initialized) return;
__wakaru_kmi_initialized = true;
"use strict";
E(), Hba(), _3S(), Smi();

}
