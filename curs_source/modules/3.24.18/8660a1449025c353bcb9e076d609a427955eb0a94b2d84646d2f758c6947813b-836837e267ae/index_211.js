import { Byk } from "./askQuestionQueryHandler.js";
import { Fyk } from "./askQuestionToolCallHandler.js";
import { Tzt } from "./questionnaireDecision.js";
import { Axn } from "./questionnaireUtils.js";
import { E } from "./tslib.es6.js";
var __wakaru_aIi_initialized = false;
export function aIi() {
if (__wakaru_aIi_initialized) return;
__wakaru_aIi_initialized = true;
"use strict";
E(), Fyk(), Byk(), Tzt(), Axn();

}
