import { Ei } from "./Iwo.js";
import { jKr } from "./communicationProfile.js";
import { dp } from "./connect.js";
import { E } from "./tslib.es6.js";
var __wakaru_RF1_initialized = false;
export function RF1() {
if (__wakaru_RF1_initialized) return;
__wakaru_RF1_initialized = true;
"use strict";
E(), dp(), Ei(), jKr();

}
