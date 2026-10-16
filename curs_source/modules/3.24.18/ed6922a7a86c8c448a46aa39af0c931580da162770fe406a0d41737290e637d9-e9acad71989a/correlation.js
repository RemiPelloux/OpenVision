import { NT } from "./currentScopes.js";
import { KH } from "./index_2.js";
import { K0c } from "./piiFiltering.js";
import { Osg } from "./resultExtraction.js";
import { x } from "./tslib.es6.js";
var rpi;
export { rpi };
var __wakaru_$sg_initialized = false;
export function $sg() {
if (__wakaru_$sg_initialized) return;
__wakaru_$sg_initialized = true;
"use strict";
x(), NT(), KH(), K0c(), Osg(), rpi = new WeakMap;

}
