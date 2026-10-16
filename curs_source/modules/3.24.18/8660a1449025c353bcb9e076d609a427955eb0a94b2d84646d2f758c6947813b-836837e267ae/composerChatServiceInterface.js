import { Di } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var l0;
export { l0 };
var __wakaru_mV_initialized = false;
export function mV() {
if (__wakaru_mV_initialized) return;
__wakaru_mV_initialized = true;
"use strict";
E(), Di(), It(), l0 = jn("composerChatService");

}
