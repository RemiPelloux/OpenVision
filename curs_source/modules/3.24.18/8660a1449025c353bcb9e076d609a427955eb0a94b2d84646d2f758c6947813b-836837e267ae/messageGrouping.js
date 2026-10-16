import { ju } from "./agent_pb.js";
import { sd } from "./chat_pb.js";
import { E } from "./tslib.es6.js";
var __wakaru_qSi_initialized = false;
export function qSi() {
if (__wakaru_qSi_initialized) return;
__wakaru_qSi_initialized = true;
"use strict";
E(), sd(), ju();

}
