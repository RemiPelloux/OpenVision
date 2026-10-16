import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var hie, gie, fie, _ie, vie, Tie;
export { Tie, _ie, fie, gie, hie, vie };
var __wakaru_kie_initialized = false;
export function kie() {
if (__wakaru_kie_initialized) return;
__wakaru_kie_initialized = true;
"use strict";
h(), F(), hie = c.makeEnum("agent.v1.ConversationSearchSource", [
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
]), gie = c.makeMessageType("agent.v1.ConversationSearchArgs", ()=>[
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
    ]), fie = c.makeMessageType("agent.v1.ConversationSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _ie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Tie,
            oneof: "result"
        }
    ]), _ie = c.makeMessageType("agent.v1.ConversationSearchSuccess", ()=>[
        {
            no: 1,
            name: "hits",
            kind: "message",
            T: vie,
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
    ]), vie = c.makeMessageType("agent.v1.ConversationSearchHit", ()=>[
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
            T: c.getEnumType(hie)
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
    ]), Tie = c.makeMessageType("agent.v1.ConversationSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
