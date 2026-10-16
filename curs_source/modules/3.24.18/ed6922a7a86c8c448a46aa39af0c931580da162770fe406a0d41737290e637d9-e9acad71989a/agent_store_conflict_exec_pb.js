import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var kYs, fOu, vOu, _Ou, bOu, yOu;
export { _Ou, bOu, fOu, kYs, vOu, yOu };
var __wakaru_Jfv_initialized = false;
export function Jfv() {
if (__wakaru_Jfv_initialized) return;
__wakaru_Jfv_initialized = true;
"use strict";
x(), bi(), kYs = k.makeMessageType("agent.v1.AgentStoreConflictCursor", ()=>[
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
    ]), fOu = k.makeMessageType("agent.v1.AgentStoreConflictArgs", ()=>[
        {
            no: 1,
            name: "cursor",
            kind: "message",
            T: kYs,
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
    ]), vOu = k.makeMessageType("agent.v1.AgentStoreConflictEvent", ()=>[
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
    ]), _Ou = k.makeMessageType("agent.v1.AgentStoreConflictResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: bOu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: yOu,
            oneof: "result"
        }
    ]), bOu = k.makeMessageType("agent.v1.AgentStoreConflictSuccess", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: vOu,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "message",
            T: kYs
        },
        {
            no: 3,
            name: "gap",
            kind: "scalar",
            T: 8
        }
    ]), yOu = k.makeMessageType("agent.v1.AgentStoreConflictError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
