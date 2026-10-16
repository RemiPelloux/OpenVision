import { xs } from "./carrier.js";
import { oi } from "./dsn.js";
import { bc } from "./normalize.js";
import { h } from "./tslib.es6.js";
import { dn } from "./worldwide.js";
var __wakaru_hs_initialized = false;
export function hs() {
if (__wakaru_hs_initialized) return;
__wakaru_hs_initialized = true;
"use strict";
h(), xs(), oi(), bc(), dn();

}
