import { Hu } from "./chat_pb.js";
import { Jm } from "./composer_pb.js";
import { att } from "./conversationHeaderQueries.js";
import { PVt } from "./questionnaireDecision.js";
import { jS } from "./store.js";
import { ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var __wakaru_UFn_initialized = false;
export function UFn() {
if (__wakaru_UFn_initialized) return;
__wakaru_UFn_initialized = true;
"use strict";
x(), jS(), Hu(), Jm(), ql(), att(), PVt();

}
