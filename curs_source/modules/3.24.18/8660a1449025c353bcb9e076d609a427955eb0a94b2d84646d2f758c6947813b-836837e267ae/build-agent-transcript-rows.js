import { eSa } from "./activity-grouping.js";
import { v7S } from "./notification-grouping.js";
import { S7S } from "./steer-placement.js";
import { w7S } from "./subscription-event-grouping.js";
import { f2e } from "./transcript-row-utils.js";
import { E } from "./tslib.es6.js";
import { jtp } from "./turn-work-grouping.js";
var __wakaru_X7S_initialized = false;
export function X7S() {
if (__wakaru_X7S_initialized) return;
__wakaru_X7S_initialized = true;
"use strict";
E(), eSa(), v7S(), S7S(), w7S(), f2e(), jtp();

}
