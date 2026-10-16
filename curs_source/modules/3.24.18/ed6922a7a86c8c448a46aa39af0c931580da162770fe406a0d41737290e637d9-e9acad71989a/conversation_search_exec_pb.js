import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var H4i, TDn, Q7t, rVs, sVs, oVs;
export { H4i, Q7t, TDn, oVs, rVs, sVs };
var __wakaru_EDn_initialized = false;
export function EDn() {
if (__wakaru_EDn_initialized) return;
__wakaru_EDn_initialized = true;
"use strict";
x(), bi(), H4i = k.makeEnum("agent.v1.ConversationSearchSource", [
    {
        no: 0,
        name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONVERSATION_SEARCH_SOURCE_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 2,
        name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE",
        localName: "CLOUD_CACHE"
    }
]), TDn = k.makeMessageType("agent.v1.ConversationSearchArgs", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Q7t = k.makeMessageType("agent.v1.ConversationSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: rVs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: oVs,
            oneof: "result"
        }
    ]), rVs = k.makeMessageType("agent.v1.ConversationSearchSuccess", ()=>[
        {
            no: 1,
            name: "hits",
            kind: "message",
            T: sVs,
            repeated: !0
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "partial",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "rebuilding",
            kind: "scalar",
            T: 8
        }
    ]), sVs = k.makeMessageType("agent.v1.ConversationSearchHit", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: k.getEnumType(H4i)
        },
        {
            no: 4,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "snippet",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oVs = k.makeMessageType("agent.v1.ConversationSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
