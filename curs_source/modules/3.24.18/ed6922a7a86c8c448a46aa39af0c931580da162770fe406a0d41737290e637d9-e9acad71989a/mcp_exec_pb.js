import { AMe, FQe, iDn } from "./mcp_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { EW, fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
import { $Ut, WZe, w0e } from "./utils_pb_2.js";
var kTu, BQe, wTu, sDn, CTu, TTu, ETu, nGs, xTu, iGs, rGs, w4i, ITu, sGs, ATu, oGs, aGs, cGs, lGs, RTu, DTu, MTu, PTu, oDn, aDn, uGs, dGs, LTu, NTu, cDn, lDn, hGs, OTu, FTu, BTu;
export { ATu, BQe, BTu, CTu, DTu, ETu, FTu, ITu, LTu, MTu, NTu, OTu, PTu, RTu, TTu, aDn, aGs, cDn, cGs, dGs, hGs, iGs, kTu, lDn, lGs, nGs, oDn, oGs, rGs, sDn, sGs, uGs, w4i, wTu, xTu };
var __wakaru_P0e_initialized = false;
export function P0e() {
if (__wakaru_P0e_initialized) return;
__wakaru_P0e_initialized = true;
"use strict";
x(), bi(), w0e(), FQe(), kTu = k.makeEnum("agent.v1.McpRefreshPolicy", [
    {
        no: 0,
        name: "MCP_REFRESH_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_REFRESH_POLICY_FORCE_IF_MISSING",
        localName: "FORCE_IF_MISSING"
    },
    {
        no: 2,
        name: "MCP_REFRESH_POLICY_FORCE",
        localName: "FORCE"
    }
]), BQe = k.makeMessageType("agent.v1.McpArgs", ()=>[
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
                T: EW
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
            T: $Ut,
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
            T: wTu,
            repeated: !0
        }
    ]), wTu = k.makeMessageType("agent.v1.McpSymbolicPathArgument", ()=>[
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
    ]), sDn = k.makeMessageType("agent.v1.McpResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: w4i,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ITu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: oGs,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: aGs,
            oneof: "result"
        },
        {
            no: 5,
            name: "tool_not_found",
            kind: "message",
            T: TTu,
            oneof: "result"
        },
        {
            no: 6,
            name: "server_not_found",
            kind: "message",
            T: ETu,
            oneof: "result"
        },
        {
            no: 7,
            name: "approved",
            kind: "message",
            T: CTu,
            oneof: "result"
        }
    ]), CTu = k.makeMessageType("agent.v1.McpApproved", []), TTu = k.makeMessageType("agent.v1.McpToolNotFound", ()=>[
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
            T: sGs,
            opt: !0
        }
    ]), ETu = k.makeMessageType("agent.v1.McpServerNotFound", ()=>[
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
    ]), nGs = k.makeMessageType("agent.v1.McpTextContent", ()=>[
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
            T: WZe,
            opt: !0
        }
    ]), xTu = k.makeMessageType("agent.v1.McpImageContent", ()=>[
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
    ]), iGs = k.makeMessageType("agent.v1.McpToolResultContentItem", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: nGs,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: xTu,
            oneof: "content"
        }
    ]), rGs = k.makeMessageType("agent.v1.SystemReminder", ()=>[
        {
            no: 1,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]), w4i = k.makeMessageType("agent.v1.McpSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: iGs,
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
            T: fd
        },
        {
            no: 4,
            name: "system_reminders",
            kind: "message",
            T: rGs,
            repeated: !0
        }
    ]), ITu = k.makeMessageType("agent.v1.McpError", ()=>[
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
            T: sGs,
            opt: !0
        },
        {
            no: 4,
            name: "http_status",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), sGs = k.makeMessageType("agent.v1.McpRecovery", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(ATu)
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
    ]), ATu = k.makeEnum("agent.v1.McpRecovery.Outcome", [
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
]), oGs = k.makeMessageType("agent.v1.McpRejected", ()=>[
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
    ]), aGs = k.makeMessageType("agent.v1.McpPermissionDenied", ()=>[
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
    ]), cGs = k.makeMessageType("agent.v1.McpStateExecArgs", ()=>[
        {
            no: 1,
            name: "server_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "kick_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "refresh_policy",
            kind: "enum",
            T: k.getEnumType(kTu),
            opt: !0
        }
    ]), lGs = k.makeMessageType("agent.v1.McpStateExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: MTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PTu,
            oneof: "result"
        }
    ]), RTu = k.makeMessageType("agent.v1.McpStateServer", ()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "tools",
            kind: "message",
            T: AMe,
            repeated: !0
        },
        {
            no: 6,
            name: "instructions",
            kind: "message",
            T: iDn,
            repeated: !0
        },
        {
            no: 7,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), DTu = k.makeMessageType("agent.v1.McpStateSuccess", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: RTu,
            repeated: !0
        }
    ]), MTu = k.makeMessageType("agent.v1.McpStateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), PTu = k.makeMessageType("agent.v1.McpStateRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), oDn = k.makeMessageType("agent.v1.ListMcpResourcesExecArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aDn = k.makeMessageType("agent.v1.ListMcpResourcesExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: dGs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: LTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: NTu,
            oneof: "result"
        }
    ]), uGs = k.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", ()=>[
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
}), dGs = k.makeMessageType("agent.v1.ListMcpResourcesSuccess", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: uGs,
            repeated: !0
        }
    ]), LTu = k.makeMessageType("agent.v1.ListMcpResourcesError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), NTu = k.makeMessageType("agent.v1.ListMcpResourcesRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), cDn = k.makeMessageType("agent.v1.ReadMcpResourceExecArgs", ()=>[
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
            T: $Ut,
            opt: !0
        }
    ]), lDn = k.makeMessageType("agent.v1.ReadMcpResourceExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: hGs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: OTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: FTu,
            oneof: "result"
        },
        {
            no: 4,
            name: "not_found",
            kind: "message",
            T: BTu,
            oneof: "result"
        }
    ]), hGs = k.makeMessageType("agent.v1.ReadMcpResourceSuccess", ()=>[
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
            T: WZe,
            opt: !0
        },
        {
            no: 10,
            name: "meta_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OTu = k.makeMessageType("agent.v1.ReadMcpResourceError", ()=>[
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
    ]), FTu = k.makeMessageType("agent.v1.ReadMcpResourceRejected", ()=>[
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
    ]), BTu = k.makeMessageType("agent.v1.ReadMcpResourceNotFound", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]);

}
