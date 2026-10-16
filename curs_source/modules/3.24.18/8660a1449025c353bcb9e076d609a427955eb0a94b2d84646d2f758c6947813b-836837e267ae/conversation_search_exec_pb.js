import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var wSr, _ni, Emn, H5o, W5o, G5o;
export { Emn, G5o, H5o, W5o, _ni, wSr };
var __wakaru_bni_initialized = false;
export function bni() {
if (__wakaru_bni_initialized) return;
__wakaru_bni_initialized = true;
"use strict";
E(), hr(), wSr = x.makeEnum("agent.v1.ConversationSearchSource", [
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
]), _ni = x.makeMessageType("agent.v1.ConversationSearchArgs", ()=>[
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
    ]), Emn = x.makeMessageType("agent.v1.ConversationSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: H5o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: G5o,
            oneof: "result"
        }
    ]), H5o = x.makeMessageType("agent.v1.ConversationSearchSuccess", ()=>[
        {
            no: 1,
            name: "hits",
            kind: "message",
            T: W5o,
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
    ]), W5o = x.makeMessageType("agent.v1.ConversationSearchHit", ()=>[
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
            T: x.getEnumType(wSr)
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
    ]), G5o = x.makeMessageType("agent.v1.ConversationSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
