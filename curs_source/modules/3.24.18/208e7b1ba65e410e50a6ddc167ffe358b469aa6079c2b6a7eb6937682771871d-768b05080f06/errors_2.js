import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { u8 } from "./globalError.js";
import { m8 } from "./globalUnhandledRejection.js";
import { sr } from "./spanUtils.js";
import { fd } from "./spanstatus.js";
import { h } from "./tslib.es6.js";
var __wakaru_j3e_initialized = false;
export function j3e() {
if (__wakaru_j3e_initialized) return;
__wakaru_j3e_initialized = true;
"use strict";
h(), gt(), u8(), m8(), Ke(), sr(), fd();

}
