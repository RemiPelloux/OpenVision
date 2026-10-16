import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { fn } from "./is.js";
import { es } from "./misc.js";
import { nI } from "./prepareEvent.js";
import { dk } from "./session.js";
import { us } from "./time.js";
import { h } from "./tslib.es6.js";
import { dn } from "./worldwide.js";
var __wakaru_Vr_initialized = false;
export function Vr() {
if (__wakaru_Vr_initialized) return;
__wakaru_Vr_initialized = true;
"use strict";
h(), dt(), gt(), dk(), Ke(), fn(), es(), nI(), us(), dn();

}
