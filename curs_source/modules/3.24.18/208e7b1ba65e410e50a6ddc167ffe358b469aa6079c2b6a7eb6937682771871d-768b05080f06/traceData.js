import { _d } from "./baggage.js";
import { xs } from "./carrier.js";
import { dt } from "./currentScopes.js";
import { Ke } from "./debug-logger.js";
import { Vr } from "./exports.js";
import { Pp } from "./index_2.js";
import { ir } from "./index_3.js";
import { sr } from "./spanUtils.js";
import { Tk } from "./tracing.js";
import { h } from "./tslib.es6.js";
var __wakaru_dI_initialized = false;
export function dI() {
if (__wakaru_dI_initialized) return;
__wakaru_dI_initialized = true;
"use strict";
h(), Pp(), xs(), dt(), Vr(), ir(), _d(), Ke(), sr(), Tk();

}
