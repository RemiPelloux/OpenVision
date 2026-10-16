import { EDn, Q7t, TDn } from "./conversation_search_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var LIu;
export { LIu };
var __wakaru_Cdv_initialized = false;
export function Cdv() {
if (__wakaru_Cdv_initialized) return;
__wakaru_Cdv_initialized = true;
"use strict";
x(), bi(), EDn(), LIu = k.makeMessageType("agent.v1.SearchConversationsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: TDn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Q7t
        }
    ]);

}
