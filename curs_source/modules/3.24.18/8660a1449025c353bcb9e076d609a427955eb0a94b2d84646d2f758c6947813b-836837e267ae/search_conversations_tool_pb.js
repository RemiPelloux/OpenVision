import { Emn, _ni, bni } from "./conversation_search_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var gyd;
export { gyd };
var __wakaru_IIy_initialized = false;
export function IIy() {
if (__wakaru_IIy_initialized) return;
__wakaru_IIy_initialized = true;
"use strict";
E(), hr(), bni(), gyd = x.makeMessageType("agent.v1.SearchConversationsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _ni
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Emn
        }
    ]);

}
