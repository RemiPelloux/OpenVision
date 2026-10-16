import { Ak } from "./applyScopeDataToEvent.js";
import { yk } from "./constants_2.js";
import { dt } from "./currentScopes.js";
import { cW } from "./debug-ids.js";
import { aW } from "./eventProcessors.js";
import { es } from "./misc.js";
import { bc } from "./normalize.js";
import { Ap } from "./scope.js";
import { Ui } from "./string.js";
import { us } from "./time.js";
import { h } from "./tslib.es6.js";
var lW;
export { lW };
var __wakaru_nI_initialized = false;
export function nI() {
if (__wakaru_nI_initialized) return;
__wakaru_nI_initialized = true;
"use strict";
h(), yk(), dt(), aW(), Ap(), Ak(), cW(), es(), bc(), Ui(), us(), lW = [
    "user",
    "level",
    "extra",
    "contexts",
    "tags",
    "fingerprint",
    "propagationContext"
];

}
