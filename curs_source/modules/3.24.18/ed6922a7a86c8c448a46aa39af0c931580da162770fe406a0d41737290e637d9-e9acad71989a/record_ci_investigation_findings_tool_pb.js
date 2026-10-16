import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Txu, Exu, xxu, Ixu, Axu, Rxu, Dxu;
export { Axu, Dxu, Exu, Ixu, Rxu, Txu, xxu };
var __wakaru_mdv_initialized = false;
export function mdv() {
if (__wakaru_mdv_initialized) return;
__wakaru_mdv_initialized = true;
"use strict";
x(), bi(), Txu = k.makeMessageType("agent.v1.RecordCiInvestigationFinding", ()=>[
        {
            no: 1,
            name: "check_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "details_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tldr",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "root_cause",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "failing_signal",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "suggested_next_step",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "diff_relation",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "diff_relation_evidence",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "flake_assessment",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "flake_evidence",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "rerun_available",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "rerun_evidence",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "recommended_action",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "recommended_action_evidence",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "confidence",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Exu = k.makeMessageType("agent.v1.RecordCiInvestigationOverall", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "themes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "recommended_action",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "recommended_action_evidence",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "check_keys",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), xxu = k.makeMessageType("agent.v1.RecordCiInvestigationFindingsArgs", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: Txu,
            repeated: !0
        },
        {
            no: 2,
            name: "overall",
            kind: "message",
            T: Exu,
            opt: !0
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), Ixu = k.makeMessageType("agent.v1.RecordCiInvestigationFindingsSuccess", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Axu = k.makeMessageType("agent.v1.RecordCiInvestigationFindingsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Rxu = k.makeMessageType("agent.v1.RecordCiInvestigationFindingsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Ixu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Axu,
            oneof: "result"
        }
    ]), Dxu = k.makeMessageType("agent.v1.RecordCiInvestigationFindingsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: xxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Rxu
        }
    ]);

}
