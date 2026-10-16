import { kLt } from "./baggage.js";
import { NT } from "./currentScopes.js";
import { wLt } from "./hasSpansEnabled.js";
import { KH } from "./index_2.js";
import { YB } from "./is.js";
import { W9 } from "./semanticAttributes.js";
import { Shi } from "./sentryNonRecordingSpan.js";
import { zH } from "./spanUtils.js";
import { hVr } from "./traceData.js";
import { x } from "./tslib.es6.js";
import { Fhi } from "./url.js";
var __wakaru__sg_initialized = false;
export function _sg() {
if (__wakaru__sg_initialized) return;
__wakaru__sg_initialized = true;
"use strict";
x(), NT(), W9(), KH(), Shi(), kLt(), wLt(), YB(), zH(), hVr(), Fhi();

}
