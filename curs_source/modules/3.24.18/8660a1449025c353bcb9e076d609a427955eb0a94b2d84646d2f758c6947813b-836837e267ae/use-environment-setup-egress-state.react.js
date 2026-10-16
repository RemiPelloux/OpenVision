import { vu } from "./actions.js";
import { pmC } from "./environment-setup-live-egress-reapply.js";
import { nOs } from "./environment-setup-tab-requests.js";
import { zc } from "./glass-notification-service.js";
import { cD } from "./glass-tab-persistence-service.js";
import { d_ } from "./index_205.js";
import { bGl } from "./index_29.ts";
import { E } from "./tslib.es6.js";
import { fLn } from "./use-generalized-env-setup-enabled.react.js";
import { KAt } from "./use-glass-environments.react.js";
import { In } from "./use-service.react_2.js";
var __wakaru__mC_initialized = false;
export function _mC() {
if (__wakaru__mC_initialized) return;
__wakaru__mC_initialized = true;
"use strict";
E(), d_(), bGl(), vu(), fLn(), KAt(), In(), zc(), cD(), pmC(), nOs();

}
