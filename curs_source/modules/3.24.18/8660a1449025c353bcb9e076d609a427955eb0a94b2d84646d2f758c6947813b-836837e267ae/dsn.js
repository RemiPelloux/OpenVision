import { qR } from "./debug-build.js";
import { JC } from "./debug-logger.js";
import { E } from "./tslib.es6.js";
var lWu, cWu;
export { cWu, lWu };
var __wakaru_kOe_initialized = false;
export function kOe() {
if (__wakaru_kOe_initialized) return;
__wakaru_kOe_initialized = true;
"use strict";
E(), qR(), JC(), lWu = /^o(\d+)\./, cWu = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

}
