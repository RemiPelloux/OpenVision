import { $my } from "./attributeExtraction.js";
import { Hun } from "./attributes.js";
import { JA } from "./currentScopes.js";
import { dQ } from "./index_2.js";
import { kzu } from "./methodConfig.js";
import { gzu } from "./piiFiltering.js";
import { QH } from "./semanticAttributes.js";
import { E } from "./tslib.es6.js";
var __wakaru_qmy_initialized = false;
export function qmy() {
if (__wakaru_qmy_initialized) return;
__wakaru_qmy_initialized = true;
"use strict";
E(), JA(), QH(), dQ(), $my(), Hun(), kzu(), gzu();

}
