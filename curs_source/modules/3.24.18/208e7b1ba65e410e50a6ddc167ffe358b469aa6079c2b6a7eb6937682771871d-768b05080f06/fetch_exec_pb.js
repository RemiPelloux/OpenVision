import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var jte, Hte, qte, Kte;
export { Hte, Kte, jte, qte };
var __wakaru_zte_initialized = false;
export function zte() {
if (__wakaru_zte_initialized) return;
__wakaru_zte_initialized = true;
"use strict";
h(), F(), jte = c.makeMessageType("agent.v1.FetchArgs", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), Hte = c.makeMessageType("agent.v1.FetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: qte,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Kte,
            oneof: "result"
        }
    ]), qte = c.makeMessageType("agent.v1.FetchSuccess", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "content_type",
            kind: "scalar",
            T: 9
        }
    ]), Kte = c.makeMessageType("agent.v1.FetchError", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
