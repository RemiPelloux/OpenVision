import { Di } from "./Iwo.js";
import { qn } from "./async.js";
import { pP } from "./extpath.js";
import { eic } from "./multi-root-workspace-fallback-name.js";
import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var __wakaru_nic_initialized = false;
export function nic() {
if (__wakaru_nic_initialized) return;
__wakaru_nic_initialized = true;
"use strict";
E(), qn(), pP(), Ki(), Di(), fn(), eic();

}
