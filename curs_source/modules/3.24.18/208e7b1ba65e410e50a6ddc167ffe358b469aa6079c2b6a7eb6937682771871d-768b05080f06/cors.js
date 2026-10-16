import { Oy } from "./headers.js";
import { FH } from "./headers_2.js";
import { Hc } from "./headers_3.js";
import { h } from "./tslib.es6.js";
var __wakaru_cqe_initialized = false;
export function cqe() {
if (__wakaru_cqe_initialized) return;
__wakaru_cqe_initialized = true;
"use strict";
h(), Hc(), Oy(), FH();

}
