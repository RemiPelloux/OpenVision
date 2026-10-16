import { UQv } from "./askQuestionQueryHandler.js";
import { BQv } from "./askQuestionToolCallHandler.js";
import { PVt } from "./questionnaireDecision.js";
import { DVt } from "./questionnaireUtils.js";
import { x } from "./tslib.es6.js";
var __wakaru_YQi_initialized = false;
export function YQi() {
if (__wakaru_YQi_initialized) return;
__wakaru_YQi_initialized = true;
"use strict";
x(), BQv(), UQv(), PVt(), DVt();

}
