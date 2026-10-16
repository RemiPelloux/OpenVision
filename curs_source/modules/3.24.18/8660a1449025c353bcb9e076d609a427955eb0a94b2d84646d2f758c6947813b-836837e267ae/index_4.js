import { mmy } from "./handlers_2.js";
import { Rte } from "./object.js";
import { Qmy } from "./transport.js";
import { E } from "./tslib.es6.js";
import { Jhr } from "./validation.js";
var Ewo;
export { Ewo };
var __wakaru_egy_initialized = false;
export function egy() {
if (__wakaru_egy_initialized) return;
__wakaru_egy_initialized = true;
"use strict";
E(), Rte(), mmy(), Qmy(), Jhr(), Ewo = new WeakSet;

}
