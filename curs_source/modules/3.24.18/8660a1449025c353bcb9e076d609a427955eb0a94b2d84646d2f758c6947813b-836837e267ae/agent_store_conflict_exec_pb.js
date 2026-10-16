import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var u9o, Pwd, Mwd, Dwd, Nwd, Lwd;
export { Dwd, Lwd, Mwd, Nwd, Pwd, u9o };
var __wakaru_jIy_initialized = false;
export function jIy() {
if (__wakaru_jIy_initialized) return;
__wakaru_jIy_initialized = true;
"use strict";
E(), hr(), u9o = x.makeMessageType("agent.v1.AgentStoreConflictCursor", ()=>[
        {
            no: 1,
            name: "journal_epoch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "seq",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "last_event_id",
            kind: "scalar",
            T: 9
        }
    ]), Pwd = x.makeMessageType("agent.v1.AgentStoreConflictArgs", ()=>[
        {
            no: 1,
            name: "cursor",
            kind: "message",
            T: u9o,
            opt: !0
        },
        {
            no: 2,
            name: "advance",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "include_quota_notices",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Mwd = x.makeMessageType("agent.v1.AgentStoreConflictEvent", ()=>[
        {
            no: 1,
            name: "v",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "journal_epoch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "seq",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "ts_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "original_rel_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "conflict_rel_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "original_abs_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "conflict_abs_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "preserved_bytes",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 13,
            name: "scope_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "limit_bytes",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 15,
            name: "usage_bytes",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), Dwd = x.makeMessageType("agent.v1.AgentStoreConflictResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Nwd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Lwd,
            oneof: "result"
        }
    ]), Nwd = x.makeMessageType("agent.v1.AgentStoreConflictSuccess", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: Mwd,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "message",
            T: u9o
        },
        {
            no: 3,
            name: "gap",
            kind: "scalar",
            T: 8
        }
    ]), Lwd = x.makeMessageType("agent.v1.AgentStoreConflictError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
