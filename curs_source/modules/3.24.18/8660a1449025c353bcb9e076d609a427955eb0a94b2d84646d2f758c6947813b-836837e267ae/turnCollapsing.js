import { ju } from "./agent_pb.js";
import { sd } from "./chat_pb.js";
import { E } from "./tslib.es6.js";
var __wakaru_ESi_initialized = false;
export function ESi() {
if (__wakaru_ESi_initialized) return;
__wakaru_ESi_initialized = true;
"use strict";
E(), sd(), ju();

}
