import { Ak } from "./applyScopeDataToEvent.js";
import { xs } from "./carrier.js";
import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { OFe } from "./envelope_4.js";
import { Sc } from "./spanOnScope.js";
import { us } from "./time.js";
import { sI } from "./trace-info.js";
import { h } from "./tslib.es6.js";
var __wakaru_aI_initialized = false;
export function aI() {
if (__wakaru_aI_initialized) return;
__wakaru_aI_initialized = true;
"use strict";
h(), xs(), dt(), gt(), Ak(), Ke(), Sc(), us(), sI(), OFe();

}
