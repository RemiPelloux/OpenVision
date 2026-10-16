import { Hve } from "./change-id.ts";
import { Sf } from "./git-repo-utils.ts";
import { Fu } from "./line-normalizer.ts";
import { ml } from "./murmurhash.ts";
import { h } from "./tslib.es6.js";
import { ul } from "./types_2.ts";
var __wakaru_Ort_initialized = false;
export function Ort() {
if (__wakaru_Ort_initialized) return;
__wakaru_Ort_initialized = true;
"use strict";
h(), Hve(), Sf(), Fu(), ml(), ul();

}
