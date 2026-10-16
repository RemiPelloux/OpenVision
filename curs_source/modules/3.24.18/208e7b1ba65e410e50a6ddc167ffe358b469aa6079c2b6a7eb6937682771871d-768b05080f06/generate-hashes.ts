import { Sf } from "./git-repo-utils.ts";
import { Fu } from "./line-normalizer.ts";
import { ml } from "./murmurhash.ts";
import { h } from "./tslib.es6.js";
import { ul } from "./types_2.ts";
var __wakaru_Irt_initialized = false;
export function Irt() {
if (__wakaru_Irt_initialized) return;
__wakaru_Irt_initialized = true;
"use strict";
h(), Sf(), Fu(), ml(), ul();

}
