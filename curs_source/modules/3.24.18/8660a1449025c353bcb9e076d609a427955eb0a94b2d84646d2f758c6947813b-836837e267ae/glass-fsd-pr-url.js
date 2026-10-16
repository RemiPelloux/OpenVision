import { XS } from "./githubUtils.js";
import { Ki } from "./network.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var Wu_;
export { Wu_ };
var __wakaru_PEe_initialized = false;
export function PEe() {
if (__wakaru_PEe_initialized) return;
__wakaru_PEe_initialized = true;
"use strict";
E(), Ki(), XS(), Mk(), Wu_ = /^[a-z][a-z\d+.-]*:\/\//i;

}
