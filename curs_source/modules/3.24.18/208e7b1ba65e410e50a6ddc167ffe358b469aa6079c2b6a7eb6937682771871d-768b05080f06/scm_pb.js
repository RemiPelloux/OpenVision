import { K9 } from "./cloud_agent_scope_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Cwe, Iwe, Awe, aL, Mwe, Pwe;
export { Awe, Cwe, Iwe, Mwe, Pwe, aL };
var __wakaru_Wat_initialized = false;
export function Wat() {
if (__wakaru_Wat_initialized) return;
__wakaru_Wat_initialized = true;
"use strict";
h(), F(), K9(), Cwe = c.makeEnum("aiserver.v1.SCMMergeMethod", [
    {
        no: 0,
        name: "SCM_MERGE_METHOD_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_MERGE_METHOD_MERGE"
    },
    {
        no: 2,
        name: "SCM_MERGE_METHOD_SQUASH"
    },
    {
        no: 3,
        name: "SCM_MERGE_METHOD_REBASE"
    }
]), Iwe = c.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityVerdict", ()=>[
        {
            no: 1,
            name: "verdict",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blockers",
            kind: "message",
            T: Awe,
            repeated: !0
        },
        {
            no: 3,
            name: "landed_pull_request_numbers",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 4,
            name: "default_merge_method",
            kind: "enum",
            T: c.getEnumType(Cwe),
            opt: !0
        },
        {
            no: 5,
            name: "evaluated_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Awe = c.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityBlocker", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pull_request_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "required_checks_state",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "required_approval_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "approved_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "conflict_inherited_from_downstack",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "invalid_stack_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aL = c.makeMessageType("aiserver.v1.PRCheckStatus", ()=>[
        {
            no: 1,
            name: "overall_state",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "success_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "failure_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "pending_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "neutral_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "skipped_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "checks",
            kind: "message",
            T: Pwe,
            repeated: !0
        },
        {
            no: 9,
            name: "required_failure_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "required_pending_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "action_required_count",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Mwe = c.makeMessageType("aiserver.v1.PRCheckAnnotation", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "annotation_level",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Pwe = c.makeMessageType("aiserver.v1.PRCheck", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "details_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "started_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "completed_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "provider",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "provider_check_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "can_rerun",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "rerun_disabled_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "annotations",
            kind: "message",
            T: Mwe,
            repeated: !0
        },
        {
            no: 12,
            name: "annotations_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "is_required",
            kind: "scalar",
            T: 8
        }
    ]);

}
