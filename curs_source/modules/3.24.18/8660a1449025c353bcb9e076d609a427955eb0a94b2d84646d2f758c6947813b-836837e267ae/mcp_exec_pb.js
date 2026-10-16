import { B$e, Kti, Q_t } from "./mcp_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { nz, qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
import { O_t, Ppn, i5e } from "./utils_pb_2.js";
var ovd, U$e, avd, Xti, lvd, cvd, uvd, aSr, dvd, lSr, WOo, Zti, hvd, GOo, pvd, qOo, zOo, VOo, KOo, mvd, gvd, fvd, vvd, Qti, Jti, YOo, XOo, _vd, bvd, eni, tni, ZOo, yvd, Svd, kvd;
export { GOo, Jti, KOo, Qti, Svd, U$e, VOo, WOo, XOo, Xti, YOo, ZOo, Zti, _vd, aSr, avd, bvd, cvd, dvd, eni, fvd, gvd, hvd, kvd, lSr, lvd, mvd, ovd, pvd, qOo, tni, uvd, vvd, yvd, zOo };
var __wakaru_zke_initialized = false;
export function zke() {
if (__wakaru_zke_initialized) return;
__wakaru_zke_initialized = true;
"use strict";
E(), hr(), i5e(), Q_t(), ovd = x.makeEnum("agent.v1.McpRefreshPolicy", [
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
]), U$e = x.makeMessageType("agent.v1.McpArgs", ()=>[
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
                T: nz
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
            T: Ppn,
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
            T: avd,
            repeated: !0
        }
    ]), avd = x.makeMessageType("agent.v1.McpSymbolicPathArgument", ()=>[
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
    ]), Xti = x.makeMessageType("agent.v1.McpResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Zti,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: hvd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: qOo,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: zOo,
            oneof: "result"
        },
        {
            no: 5,
            name: "tool_not_found",
            kind: "message",
            T: cvd,
            oneof: "result"
        },
        {
            no: 6,
            name: "server_not_found",
            kind: "message",
            T: uvd,
            oneof: "result"
        },
        {
            no: 7,
            name: "approved",
            kind: "message",
            T: lvd,
            oneof: "result"
        }
    ]), lvd = x.makeMessageType("agent.v1.McpApproved", []), cvd = x.makeMessageType("agent.v1.McpToolNotFound", ()=>[
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
            T: GOo,
            opt: !0
        }
    ]), uvd = x.makeMessageType("agent.v1.McpServerNotFound", ()=>[
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
    ]), aSr = x.makeMessageType("agent.v1.McpTextContent", ()=>[
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
            T: O_t,
            opt: !0
        }
    ]), dvd = x.makeMessageType("agent.v1.McpImageContent", ()=>[
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
    ]), lSr = x.makeMessageType("agent.v1.McpToolResultContentItem", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: aSr,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: dvd,
            oneof: "content"
        }
    ]), WOo = x.makeMessageType("agent.v1.SystemReminder", ()=>[
        {
            no: 1,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]), Zti = x.makeMessageType("agent.v1.McpSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: lSr,
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
            T: qd
        },
        {
            no: 4,
            name: "system_reminders",
            kind: "message",
            T: WOo,
            repeated: !0
        }
    ]), hvd = x.makeMessageType("agent.v1.McpError", ()=>[
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
            T: GOo,
            opt: !0
        },
        {
            no: 4,
            name: "http_status",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), GOo = x.makeMessageType("agent.v1.McpRecovery", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: x.getEnumType(pvd)
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
    ]), pvd = x.makeEnum("agent.v1.McpRecovery.Outcome", [
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
]), qOo = x.makeMessageType("agent.v1.McpRejected", ()=>[
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
    ]), zOo = x.makeMessageType("agent.v1.McpPermissionDenied", ()=>[
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
    ]), VOo = x.makeMessageType("agent.v1.McpStateExecArgs", ()=>[
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
            T: x.getEnumType(ovd),
            opt: !0
        }
    ]), KOo = x.makeMessageType("agent.v1.McpStateExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: gvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: fvd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: vvd,
            oneof: "result"
        }
    ]), mvd = x.makeMessageType("agent.v1.McpStateServer", ()=>[
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
            T: B$e,
            repeated: !0
        },
        {
            no: 6,
            name: "instructions",
            kind: "message",
            T: Kti,
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
    ]), gvd = x.makeMessageType("agent.v1.McpStateSuccess", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: mvd,
            repeated: !0
        }
    ]), fvd = x.makeMessageType("agent.v1.McpStateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), vvd = x.makeMessageType("agent.v1.McpStateRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Qti = x.makeMessageType("agent.v1.ListMcpResourcesExecArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Jti = x.makeMessageType("agent.v1.ListMcpResourcesExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: XOo,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _vd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: bvd,
            oneof: "result"
        }
    ]), YOo = x.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", ()=>[
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
}), XOo = x.makeMessageType("agent.v1.ListMcpResourcesSuccess", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: YOo,
            repeated: !0
        }
    ]), _vd = x.makeMessageType("agent.v1.ListMcpResourcesError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), bvd = x.makeMessageType("agent.v1.ListMcpResourcesRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), eni = x.makeMessageType("agent.v1.ReadMcpResourceExecArgs", ()=>[
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
            T: Ppn,
            opt: !0
        }
    ]), tni = x.makeMessageType("agent.v1.ReadMcpResourceExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ZOo,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: yvd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Svd,
            oneof: "result"
        },
        {
            no: 4,
            name: "not_found",
            kind: "message",
            T: kvd,
            oneof: "result"
        }
    ]), ZOo = x.makeMessageType("agent.v1.ReadMcpResourceSuccess", ()=>[
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
            T: O_t,
            opt: !0
        },
        {
            no: 10,
            name: "meta_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), yvd = x.makeMessageType("agent.v1.ReadMcpResourceError", ()=>[
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
    ]), Svd = x.makeMessageType("agent.v1.ReadMcpResourceRejected", ()=>[
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
    ]), kvd = x.makeMessageType("agent.v1.ReadMcpResourceNotFound", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]);

}
