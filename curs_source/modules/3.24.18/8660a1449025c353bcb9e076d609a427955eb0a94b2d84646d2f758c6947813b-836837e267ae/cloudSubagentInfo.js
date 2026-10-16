import { pd } from "./background_composer_pb.js";
import { sd } from "./chat_pb.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var __wakaru_Ypg_initialized = false;
export function Ypg() {
if (__wakaru_Ypg_initialized) return;
__wakaru_Ypg_initialized = true;
"use strict";
E(), nl(), pd(), sd();

}
