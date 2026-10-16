import { fie, gie, kie } from "./conversation_search_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Sie;
export { Sie };
var __wakaru_hKe_initialized = false;
export function hKe() {
if (__wakaru_hKe_initialized) return;
__wakaru_hKe_initialized = true;
"use strict";
h(), F(), kie(), Sie = c.makeMessageType("agent.v1.SearchConversationsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: gie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: fie
        }
    ]);

}
