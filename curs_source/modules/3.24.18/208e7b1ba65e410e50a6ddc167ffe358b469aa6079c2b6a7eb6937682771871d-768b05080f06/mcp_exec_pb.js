import { Eg } from "./mcp_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { To, ba } from "./struct_pb.js";
import { h } from "./tslib.es6.js";
import { Rg, So, ko } from "./utils_pb.js";
var kq, Sq, yq, wq, Eq, bq, Rq, Cq, Iq, gP, fP, Aq, _P, Mq, vP, TP, Pq, Nq, Dq, Oq, Lq, Uq, xq, Fq, Wq, Bq, Gq, Vq;
export { Aq, Bq, Cq, Dq, Eq, Fq, Gq, Iq, Lq, Mq, Nq, Oq, Pq, Rq, Sq, TP, Uq, Vq, Wq, _P, bq, fP, gP, kq, vP, wq, xq, yq };
var __wakaru_Cg_initialized = false;
export function Cg() {
if (__wakaru_Cg_initialized) return;
__wakaru_Cg_initialized = true;
"use strict";
h(), F(), So(), Eg(), kq = c.makeMessageType("agent.v1.McpArgs", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: To
            }
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "smart_mode_approval",
            kind: "message",
            T: Rg,
            opt: !0
        },
        {
            no: 7,
            name: "smart_mode_approval_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "symbolic_path_arguments",
            kind: "message",
            T: Sq,
            repeated: !0
        }
    ]), Sq = c.makeMessageType("agent.v1.McpSymbolicPathArgument", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]), yq = c.makeMessageType("agent.v1.McpResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fP,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Aq,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: vP,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: TP,
            oneof: "result"
        },
        {
            no: 5,
            name: "tool_not_found",
            kind: "message",
            T: Eq,
            oneof: "result"
        },
        {
            no: 6,
            name: "server_not_found",
            kind: "message",
            T: bq,
            oneof: "result"
        },
        {
            no: 7,
            name: "approved",
            kind: "message",
            T: wq,
            oneof: "result"
        }
    ]), wq = c.makeMessageType("agent.v1.McpApproved", []), Eq = c.makeMessageType("agent.v1.McpToolNotFound", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available_tools",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "recovery",
            kind: "message",
            T: _P,
            opt: !0
        }
    ]), bq = c.makeMessageType("agent.v1.McpServerNotFound", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available_servers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Rq = c.makeMessageType("agent.v1.McpTextContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_location",
            kind: "message",
            T: ko,
            opt: !0
        }
    ]), Cq = c.makeMessageType("agent.v1.McpImageContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), Iq = c.makeMessageType("agent.v1.McpToolResultContentItem", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: Rq,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: Cq,
            oneof: "content"
        }
    ]), gP = c.makeMessageType("agent.v1.SystemReminder", ()=>[
        {
            no: 1,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]), fP = c.makeMessageType("agent.v1.McpSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: Iq,
            repeated: !0
        },
        {
            no: 2,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "structured_content",
            kind: "message",
            T: ba
        },
        {
            no: 4,
            name: "system_reminders",
            kind: "message",
            T: gP,
            repeated: !0
        }
    ]), Aq = c.makeMessageType("agent.v1.McpError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "needs_auth",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "recovery",
            kind: "message",
            T: _P,
            opt: !0
        },
        {
            no: 4,
            name: "http_status",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), _P = c.makeMessageType("agent.v1.McpRecovery", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: c.getEnumType(Mq)
        },
        {
            no: 2,
            name: "fresh_input_schema_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "available_tools",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Mq = c.makeEnum("agent.v1.McpRecovery.Outcome", [
    {
        no: 0,
        name: "OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTCOME_CHANGED",
        localName: "CHANGED"
    },
    {
        no: 2,
        name: "OUTCOME_REMOVED",
        localName: "REMOVED"
    },
    {
        no: 3,
        name: "OUTCOME_UNCHANGED",
        localName: "UNCHANGED"
    },
    {
        no: 4,
        name: "OUTCOME_REFRESH_FAILED",
        localName: "REFRESH_FAILED"
    }
]), vP = c.makeMessageType("agent.v1.McpRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]), TP = c.makeMessageType("agent.v1.McpPermissionDenied", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]), Pq = c.makeMessageType("agent.v1.ListMcpResourcesExecArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Nq = c.makeMessageType("agent.v1.ListMcpResourcesExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Oq,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Lq,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Uq,
            oneof: "result"
        }
    ]), Dq = c.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "ListMcpResourcesExecResult_McpResource"
}), Oq = c.makeMessageType("agent.v1.ListMcpResourcesSuccess", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: Dq,
            repeated: !0
        }
    ]), Lq = c.makeMessageType("agent.v1.ListMcpResourcesError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Uq = c.makeMessageType("agent.v1.ListMcpResourcesRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), xq = c.makeMessageType("agent.v1.ReadMcpResourceExecArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "smart_mode_approval",
            kind: "message",
            T: Rg,
            opt: !0
        }
    ]), Fq = c.makeMessageType("agent.v1.ReadMcpResourceExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Wq,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Bq,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Gq,
            oneof: "result"
        },
        {
            no: 4,
            name: "not_found",
            kind: "message",
            T: Vq,
            oneof: "result"
        }
    ]), Wq = c.makeMessageType("agent.v1.ReadMcpResourceSuccess", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "content"
        },
        {
            no: 6,
            name: "blob",
            kind: "scalar",
            T: 12,
            oneof: "content"
        },
        {
            no: 7,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "output_location",
            kind: "message",
            T: ko,
            opt: !0
        },
        {
            no: 10,
            name: "meta_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Bq = c.makeMessageType("agent.v1.ReadMcpResourceError", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Gq = c.makeMessageType("agent.v1.ReadMcpResourceRejected", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Vq = c.makeMessageType("agent.v1.ReadMcpResourceNotFound", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]);

}
