import { Qe } from "./Iwo.js";
import { cp } from "./objects.js";
import { jlt } from "./persistent-state.js";
import { E } from "./tslib.es6.js";
var __wakaru_CTe_initialized = false;
export function CTe() {
if (__wakaru_CTe_initialized) return;
__wakaru_CTe_initialized = true;
"use strict";
E(), Qe(), cp(), jlt();

}
