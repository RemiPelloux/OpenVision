import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var wEu, CEu, TEu, BGs, EEu, xEu, IEu, AEu, REu, DEu, MEu, wDn, PEu, M4i, LEu, NEu, OEu, FEu, BEu;
export { AEu, BEu, BGs, CEu, DEu, EEu, FEu, IEu, LEu, M4i, MEu, NEu, OEu, PEu, REu, TEu, wDn, wEu, xEu };
var __wakaru_UGs_initialized = false;
export function UGs() {
if (__wakaru_UGs_initialized) return;
__wakaru_UGs_initialized = true;
"use strict";
x(), bi(), wEu = k.makeEnum("agent.v1.MergePrMode", [
    {
        no: 0,
        name: "MERGE_PR_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MERGE_PR_MODE_MERGE",
        localName: "MERGE"
    },
    {
        no: 2,
        name: "MERGE_PR_MODE_AUTO",
        localName: "AUTO"
    },
    {
        no: 3,
        name: "MERGE_PR_MODE_DISABLE_AUTO",
        localName: "DISABLE_AUTO"
    }
]), CEu = k.makeEnum("agent.v1.MergePrMethod", [
    {
        no: 0,
        name: "MERGE_PR_METHOD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MERGE_PR_METHOD_MERGE",
        localName: "MERGE"
    },
    {
        no: 2,
        name: "MERGE_PR_METHOD_SQUASH",
        localName: "SQUASH"
    }
]), TEu = k.makeEnum("agent.v1.PullRequestStatus", [
    {
        no: 0,
        name: "PULL_REQUEST_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PULL_REQUEST_STATUS_OPEN",
        localName: "OPEN"
    },
    {
        no: 2,
        name: "PULL_REQUEST_STATUS_CLOSED",
        localName: "CLOSED"
    }
]), BGs = k.makeMessageType("agent.v1.PrManagementArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "create_pr",
            kind: "message",
            T: EEu,
            oneof: "action"
        },
        {
            no: 3,
            name: "update_pr",
            kind: "message",
            T: xEu,
            oneof: "action"
        },
        {
            no: 4,
            name: "post_comment",
            kind: "message",
            T: IEu,
            oneof: "action"
        },
        {
            no: 5,
            name: "resolve_comment",
            kind: "message",
            T: AEu,
            oneof: "action"
        },
        {
            no: 6,
            name: "get_ci_status",
            kind: "message",
            T: REu,
            oneof: "action"
        },
        {
            no: 7,
            name: "set_pr_status",
            kind: "message",
            T: DEu,
            oneof: "action"
        },
        {
            no: 8,
            name: "merge_pr",
            kind: "message",
            T: MEu,
            oneof: "action"
        }
    ]), EEu = k.makeMessageType("agent.v1.CreatePrAction", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "skip_branch_prefix_check",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "stack_on_pr_number",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), xEu = k.makeMessageType("agent.v1.UpdatePrAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "remove_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "stack_on_pr_number",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 10,
            name: "clear_stack",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), IEu = k.makeMessageType("agent.v1.PostCommentAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "in_reply_to",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "side",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "reply_to_reference",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), AEu = k.makeMessageType("agent.v1.ResolveCommentAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "comment_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "comment_reference",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), REu = k.makeMessageType("agent.v1.GetCiStatusAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), DEu = k.makeMessageType("agent.v1.SetPrStatusAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: k.getEnumType(TEu)
        }
    ]), MEu = k.makeMessageType("agent.v1.MergePrAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(wEu)
        },
        {
            no: 5,
            name: "method",
            kind: "enum",
            T: k.getEnumType(CEu)
        },
        {
            no: 6,
            name: "expected_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "expected_member_head_shas",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "downstack",
            kind: "scalar",
            T: 8
        }
    ]), wDn = k.makeMessageType("agent.v1.PrManagementResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: M4i,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: LEu,
            oneof: "result"
        },
        {
            no: 4,
            name: "registered",
            kind: "message",
            T: NEu,
            oneof: "result"
        },
        {
            no: 5,
            name: "needs_confirmation",
            kind: "message",
            T: OEu,
            oneof: "result"
        }
    ]), PEu = k.makeMessageType("agent.v1.PrManagementSuccess", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), M4i = k.makeMessageType("agent.v1.PrManagementError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), LEu = k.makeMessageType("agent.v1.PrManagementRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), NEu = k.makeMessageType("agent.v1.PrManagementRegistered", ()=>[
        {
            no: 1,
            name: "message",
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
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), OEu = k.makeMessageType("agent.v1.PrManagementNeedsConfirmation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "discovered_pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "discovered_pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "discovered_pr_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), FEu = k.makeMessageType("agent.v1.PrManagementToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: BGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: wDn
        }
    ]), BEu = k.makeMessageType("agent.v1.PrManagementRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: BGs
        }
    ]);

}
