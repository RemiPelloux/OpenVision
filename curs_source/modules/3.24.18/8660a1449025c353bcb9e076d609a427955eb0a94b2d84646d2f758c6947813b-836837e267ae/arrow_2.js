import { HKt } from "./getAlignment.js";
import { twl } from "./getLengthFromAxis.js";
import { WKt } from "./getMainAxisFromPlacement.js";
import { nwl } from "./getPaddingObject.js";
import { E } from "./tslib.es6.js";
import { ewl } from "./within.js";
var __wakaru_TLk_initialized = false;
export function TLk() {
if (__wakaru_TLk_initialized) return;
__wakaru_TLk_initialized = true;
"use strict";
E(), HKt(), twl(), WKt(), nwl(), ewl();

}
