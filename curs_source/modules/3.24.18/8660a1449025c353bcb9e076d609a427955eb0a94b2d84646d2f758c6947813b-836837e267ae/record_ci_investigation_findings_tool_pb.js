import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var obd, abd, lbd, cbd, ubd, dbd, hbd;
export { abd, cbd, dbd, hbd, lbd, obd, ubd };
var __wakaru_vIy_initialized = false;
export function vIy() {
if (__wakaru_vIy_initialized) return;
__wakaru_vIy_initialized = true;
"use strict";
E(), hr(), obd = x.makeMessageType("agent.v1.RecordCiInvestigationFinding", ()=>[
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
    ]), abd = x.makeMessageType("agent.v1.RecordCiInvestigationOverall", ()=>[
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
    ]), lbd = x.makeMessageType("agent.v1.RecordCiInvestigationFindingsArgs", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: obd,
            repeated: !0
        },
        {
            no: 2,
            name: "overall",
            kind: "message",
            T: abd,
            opt: !0
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), cbd = x.makeMessageType("agent.v1.RecordCiInvestigationFindingsSuccess", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), ubd = x.makeMessageType("agent.v1.RecordCiInvestigationFindingsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), dbd = x.makeMessageType("agent.v1.RecordCiInvestigationFindingsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: cbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ubd,
            oneof: "result"
        }
    ]), hbd = x.makeMessageType("agent.v1.RecordCiInvestigationFindingsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: lbd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: dbd
        }
    ]);

}
