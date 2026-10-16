import { Chr } from "./applyScopeDataToEvent.js";
import { mhr } from "./constants.js";
import { JA } from "./currentScopes.js";
import { HWu } from "./debug-ids.js";
import { BWu } from "./eventProcessors.js";
import { uve } from "./misc.js";
import { EFt } from "./normalize.js";
import { UYn } from "./scope.js";
import { Wje } from "./string.js";
import { pke } from "./time.js";
import { E } from "./tslib.es6.js";
var WWu;
export { WWu };
var __wakaru_gko_initialized = false;
export function gko() {
if (__wakaru_gko_initialized) return;
__wakaru_gko_initialized = true;
"use strict";
E(), mhr(), JA(), BWu(), UYn(), Chr(), HWu(), uve(), EFt(), Wje(), pke(), WWu = [
    "user",
    "level",
    "extra",
    "contexts",
    "tags",
    "fingerprint",
    "propagationContext"
];

}
