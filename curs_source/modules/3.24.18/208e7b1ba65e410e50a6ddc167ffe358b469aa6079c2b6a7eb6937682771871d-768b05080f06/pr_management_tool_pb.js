import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Dne, One, Lne, LN, Une, xne, Fne, Wne, Bne, Gne, Vne, UN, $ne, jne, Hne, qne, Kne, zne, Yne;
export { $ne, Bne, Dne, Fne, Gne, Hne, Kne, LN, Lne, One, UN, Une, Vne, Wne, Yne, jne, qne, xne, zne };
var __wakaru_Kqe_initialized = false;
export function Kqe() {
if (__wakaru_Kqe_initialized) return;
__wakaru_Kqe_initialized = true;
"use strict";
h(), F(), Dne = c.makeEnum("agent.v1.MergePrMode", [
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
]), One = c.makeEnum("agent.v1.MergePrMethod", [
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
]), Lne = c.makeEnum("agent.v1.PullRequestStatus", [
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
]), LN = c.makeMessageType("agent.v1.PrManagementArgs", ()=>[
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
            T: Une,
            oneof: "action"
        },
        {
            no: 3,
            name: "update_pr",
            kind: "message",
            T: xne,
            oneof: "action"
        },
        {
            no: 4,
            name: "post_comment",
            kind: "message",
            T: Fne,
            oneof: "action"
        },
        {
            no: 5,
            name: "resolve_comment",
            kind: "message",
            T: Wne,
            oneof: "action"
        },
        {
            no: 6,
            name: "get_ci_status",
            kind: "message",
            T: Bne,
            oneof: "action"
        },
        {
            no: 7,
            name: "set_pr_status",
            kind: "message",
            T: Gne,
            oneof: "action"
        },
        {
            no: 8,
            name: "merge_pr",
            kind: "message",
            T: Vne,
            oneof: "action"
        }
    ]), Une = c.makeMessageType("agent.v1.CreatePrAction", ()=>[
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
    ]), xne = c.makeMessageType("agent.v1.UpdatePrAction", ()=>[
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
    ]), Fne = c.makeMessageType("agent.v1.PostCommentAction", ()=>[
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
    ]), Wne = c.makeMessageType("agent.v1.ResolveCommentAction", ()=>[
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
    ]), Bne = c.makeMessageType("agent.v1.GetCiStatusAction", ()=>[
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
    ]), Gne = c.makeMessageType("agent.v1.SetPrStatusAction", ()=>[
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
            T: c.getEnumType(Lne)
        }
    ]), Vne = c.makeMessageType("agent.v1.MergePrAction", ()=>[
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
            T: c.getEnumType(Dne)
        },
        {
            no: 5,
            name: "method",
            kind: "enum",
            T: c.getEnumType(One)
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
    ]), UN = c.makeMessageType("agent.v1.PrManagementResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: $ne,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: jne,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Hne,
            oneof: "result"
        },
        {
            no: 4,
            name: "registered",
            kind: "message",
            T: qne,
            oneof: "result"
        },
        {
            no: 5,
            name: "needs_confirmation",
            kind: "message",
            T: Kne,
            oneof: "result"
        }
    ]), $ne = c.makeMessageType("agent.v1.PrManagementSuccess", ()=>[
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
    ]), jne = c.makeMessageType("agent.v1.PrManagementError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Hne = c.makeMessageType("agent.v1.PrManagementRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), qne = c.makeMessageType("agent.v1.PrManagementRegistered", ()=>[
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
    ]), Kne = c.makeMessageType("agent.v1.PrManagementNeedsConfirmation", ()=>[
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
    ]), zne = c.makeMessageType("agent.v1.PrManagementToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: LN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UN
        }
    ]), Yne = c.makeMessageType("agent.v1.PrManagementRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: LN
        }
    ]);

}
