import { Fu } from "./line-normalizer.ts";
import { ml } from "./murmurhash.ts";
import { h } from "./tslib.es6.js";
var __wakaru_Art_initialized = false;
export function Art() {
if (__wakaru_Art_initialized) return;
__wakaru_Art_initialized = true;
"use strict";
h(), Fu(), ml();

}
