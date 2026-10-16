import { sd } from "./chat_pb.js";
import { Axn } from "./questionnaireUtils.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var __wakaru_crg_initialized = false;
export function crg() {
if (__wakaru_crg_initialized) return;
__wakaru_crg_initialized = true;
"use strict";
E(), sd(), Pu(), Axn();

}
