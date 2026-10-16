import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
import { Akt, BD, WNn, glo, m1e, uet } from "./waterfall_update_pb.js";
var PJi, LJi, NJi, OJi, eEo, tEo, X3n, FJi;
export { FJi, LJi, NJi, OJi, PJi, X3n, eEo, tEo };
var __wakaru_tn__initialized = false;
export function tn_() {
if (__wakaru_tn__initialized) return;
__wakaru_tn__initialized = true;
"use strict";
x(), bi(), WNn(), PJi = k.makeMessageType("aiserver.v1.WaterfallState", ()=>[
        {
            no: 1,
            name: "spans",
            kind: "message",
            T: LJi,
            repeated: !0
        }
    ]), LJi = k.makeMessageType("aiserver.v1.WaterfallSpan", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_span_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "phase_type",
            kind: "enum",
            T: k.getEnumType(BD)
        },
        {
            no: 11,
            name: "fallback_phase_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "start_time",
            kind: "message",
            T: Nr
        },
        {
            no: 9,
            name: "end",
            kind: "message",
            T: NJi,
            opt: !0
        },
        {
            no: 5,
            name: "logs",
            kind: "message",
            T: X3n,
            repeated: !0
        },
        {
            no: 6,
            name: "status",
            kind: "message",
            T: FJi,
            opt: !0
        },
        {
            no: 7,
            name: "call_to_action",
            kind: "message",
            T: glo,
            opt: !0
        },
        {
            no: 8,
            name: "span_state",
            kind: "message",
            T: OJi
        }
    ]), NJi = k.makeMessageType("aiserver.v1.WaterfallSpanEnd", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "end_status",
            kind: "enum",
            T: k.getEnumType(Akt)
        }
    ]), OJi = k.makeMessageType("aiserver.v1.SpanState", ()=>[
        {
            no: 1,
            name: "git_repos_setup",
            kind: "message",
            T: eEo,
            oneof: "span_state"
        },
        {
            no: 2,
            name: "git_repo_setup",
            kind: "message",
            T: tEo,
            oneof: "span_state"
        }
    ]), eEo = k.makeMessageType("aiserver.v1.GitReposSetupSpanState", []), tEo = k.makeMessageType("aiserver.v1.GitRepoSetupSpanState", ()=>[
        {
            no: 1,
            name: "repo_display_name",
            kind: "scalar",
            T: 9
        }
    ]), X3n = k.makeMessageType("aiserver.v1.WaterfallSpanLog", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "level",
            kind: "enum",
            T: k.getEnumType(m1e)
        }
    ]), FJi = k.makeMessageType("aiserver.v1.WaterfallSpanStatus", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "status_type",
            kind: "enum",
            T: k.getEnumType(uet)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);

}
