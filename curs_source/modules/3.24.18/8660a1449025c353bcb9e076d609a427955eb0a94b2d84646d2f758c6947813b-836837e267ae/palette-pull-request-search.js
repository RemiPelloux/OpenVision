import { kl } from "./browser.ts";
import { XS } from "./githubUtils.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var qLv, zLv;
export { qLv, zLv };
var __wakaru_VLv_initialized = false;
export function VLv() {
if (__wakaru_VLv_initialized) return;
__wakaru_VLv_initialized = true;
"use strict";
E(), kl(), XS(), Mk(), qLv = /^(?:(pr)\s+)?(#)?([0-9]+)$/i, zLv = 4;

}
