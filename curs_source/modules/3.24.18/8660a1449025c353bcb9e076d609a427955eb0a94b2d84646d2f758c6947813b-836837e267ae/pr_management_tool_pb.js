import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var r_d, s_d, o_d, k5o, a_d, l_d, c_d, u_d, d_d, h_d, p_d, fni, m_d, mSr, g_d, f_d, v_d, __d, b_d;
export { __d, a_d, b_d, c_d, d_d, f_d, fni, g_d, h_d, k5o, l_d, mSr, m_d, o_d, p_d, r_d, s_d, u_d, v_d };
var __wakaru_w5o_initialized = false;
export function w5o() {
if (__wakaru_w5o_initialized) return;
__wakaru_w5o_initialized = true;
"use strict";
E(), hr(), r_d = x.makeEnum("agent.v1.MergePrMode", [
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
]), s_d = x.makeEnum("agent.v1.MergePrMethod", [
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
]), o_d = x.makeEnum("agent.v1.PullRequestStatus", [
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
]), k5o = x.makeMessageType("agent.v1.PrManagementArgs", ()=>[
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
            T: a_d,
            oneof: "action"
        },
        {
            no: 3,
            name: "update_pr",
            kind: "message",
            T: l_d,
            oneof: "action"
        },
        {
            no: 4,
            name: "post_comment",
            kind: "message",
            T: c_d,
            oneof: "action"
        },
        {
            no: 5,
            name: "resolve_comment",
            kind: "message",
            T: u_d,
            oneof: "action"
        },
        {
            no: 6,
            name: "get_ci_status",
            kind: "message",
            T: d_d,
            oneof: "action"
        },
        {
            no: 7,
            name: "set_pr_status",
            kind: "message",
            T: h_d,
            oneof: "action"
        },
        {
            no: 8,
            name: "merge_pr",
            kind: "message",
            T: p_d,
            oneof: "action"
        }
    ]), a_d = x.makeMessageType("agent.v1.CreatePrAction", ()=>[
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
    ]), l_d = x.makeMessageType("agent.v1.UpdatePrAction", ()=>[
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
    ]), c_d = x.makeMessageType("agent.v1.PostCommentAction", ()=>[
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
    ]), u_d = x.makeMessageType("agent.v1.ResolveCommentAction", ()=>[
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
    ]), d_d = x.makeMessageType("agent.v1.GetCiStatusAction", ()=>[
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
    ]), h_d = x.makeMessageType("agent.v1.SetPrStatusAction", ()=>[
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
            T: x.getEnumType(o_d)
        }
    ]), p_d = x.makeMessageType("agent.v1.MergePrAction", ()=>[
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
            T: x.getEnumType(r_d)
        },
        {
            no: 5,
            name: "method",
            kind: "enum",
            T: x.getEnumType(s_d)
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
    ]), fni = x.makeMessageType("agent.v1.PrManagementResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: m_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: mSr,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: g_d,
            oneof: "result"
        },
        {
            no: 4,
            name: "registered",
            kind: "message",
            T: f_d,
            oneof: "result"
        },
        {
            no: 5,
            name: "needs_confirmation",
            kind: "message",
            T: v_d,
            oneof: "result"
        }
    ]), m_d = x.makeMessageType("agent.v1.PrManagementSuccess", ()=>[
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
    ]), mSr = x.makeMessageType("agent.v1.PrManagementError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), g_d = x.makeMessageType("agent.v1.PrManagementRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), f_d = x.makeMessageType("agent.v1.PrManagementRegistered", ()=>[
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
    ]), v_d = x.makeMessageType("agent.v1.PrManagementNeedsConfirmation", ()=>[
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
    ]), __d = x.makeMessageType("agent.v1.PrManagementToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: k5o
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: fni
        }
    ]), b_d = x.makeMessageType("agent.v1.PrManagementRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: k5o
        }
    ]);

}
