import { Jh, yX } from "./dashboard_pb.js";
import { P0e, sDn } from "./mcp_exec_pb.js";
import { AMe, FQe } from "./mcp_pb.js";
import { R7i, t5u } from "./mcp_pb_2.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
var vlh, F_e, Qet, $On, XKi, _lh, ubo, blh, dbo, ylh, Slh, klh, wlh, Clh, Tlh, Elh, xlh, Ilh, Alh, Rlh, Dlh, Mlh, Plh, Llh, Nlh, Olh, hbo, Flh, Blh, Ulh, $lh, Hlh, Wlh, Glh, Vlh, jlh, ZKi, qlh, zlh, Klh, Ylh, Xlh;
export { $On, $lh, Alh, Blh, Clh, Dlh, Elh, F_e, Flh, Glh, Hlh, Ilh, Klh, Llh, Mlh, Nlh, Olh, Plh, Qet, Rlh, Slh, Tlh, Ulh, Vlh, Wlh, XKi, Xlh, Ylh, ZKi, _lh, blh, dbo, hbo, jlh, klh, qlh, ubo, vlh, wlh, xlh, ylh, zlh };
var __wakaru_QKi_initialized = false;
export function QKi() {
if (__wakaru_QKi_initialized) return;
__wakaru_QKi_initialized = true;
"use strict";
x(), bi(), FQe(), Jh(), P0e(), R7i(), vlh = k.makeEnum("aiserver.v1.McpToolCaller", [
    {
        no: 0,
        name: "MCP_TOOL_CALLER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_TOOL_CALLER_IDE",
        localName: "IDE"
    },
    {
        no: 2,
        name: "MCP_TOOL_CALLER_GLASS",
        localName: "GLASS"
    },
    {
        no: 3,
        name: "MCP_TOOL_CALLER_AGENT_HOST_LOCAL_LOOP",
        localName: "AGENT_HOST_LOCAL_LOOP"
    }
]), F_e = k.makeEnum("aiserver.v1.McpPlacement", [
    {
        no: 0,
        name: "MCP_PLACEMENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_PLACEMENT_SERVER",
        localName: "SERVER"
    },
    {
        no: 2,
        name: "MCP_PLACEMENT_CLIENT",
        localName: "CLIENT"
    },
    {
        no: 3,
        name: "MCP_PLACEMENT_UNDECIDED",
        localName: "UNDECIDED"
    }
]), Qet = k.makeEnum("aiserver.v1.McpPlacementSource", [
    {
        no: 0,
        name: "MCP_PLACEMENT_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_PLACEMENT_SOURCE_EXPLICIT",
        localName: "EXPLICIT"
    },
    {
        no: 2,
        name: "MCP_PLACEMENT_SOURCE_TEAM_DEFAULT",
        localName: "TEAM_DEFAULT"
    },
    {
        no: 3,
        name: "MCP_PLACEMENT_SOURCE_PROBE",
        localName: "PROBE"
    },
    {
        no: 4,
        name: "MCP_PLACEMENT_SOURCE_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 5,
        name: "MCP_PLACEMENT_SOURCE_LOGIN",
        localName: "LOGIN"
    },
    {
        no: 6,
        name: "MCP_PLACEMENT_SOURCE_CLIENT_PROBE",
        localName: "CLIENT_PROBE"
    },
    {
        no: 7,
        name: "MCP_PLACEMENT_SOURCE_NONE",
        localName: "NONE"
    }
]), $On = k.makeEnum("aiserver.v1.McpPlacementProbe", [
    {
        no: 0,
        name: "MCP_PLACEMENT_PROBE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_PLACEMENT_PROBE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "MCP_PLACEMENT_PROBE_SERVER_CAPABLE",
        localName: "SERVER_CAPABLE"
    },
    {
        no: 3,
        name: "MCP_PLACEMENT_PROBE_UNREACHABLE",
        localName: "UNREACHABLE"
    },
    {
        no: 4,
        name: "MCP_PLACEMENT_PROBE_INCONCLUSIVE",
        localName: "INCONCLUSIVE"
    }
]), XKi = k.makeEnum("aiserver.v1.McpPlacementRequestSource", [
    {
        no: 0,
        name: "MCP_PLACEMENT_REQUEST_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_PLACEMENT_REQUEST_SOURCE_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 2,
        name: "MCP_PLACEMENT_REQUEST_SOURCE_CLIENT_PROBE",
        localName: "CLIENT_PROBE"
    }
]), _lh = k.makeEnum("aiserver.v1.McpRowKind", [
    {
        no: 0,
        name: "MCP_ROW_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_ROW_KIND_PLUGIN",
        localName: "PLUGIN"
    },
    {
        no: 2,
        name: "MCP_ROW_KIND_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 3,
        name: "MCP_ROW_KIND_TEAM",
        localName: "TEAM"
    }
]), ubo = k.makeMessageType("aiserver.v1.ListMcpToolsRequest", ()=>[
        {
            no: 1,
            name: "server_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "mcp_config_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), blh = k.makeMessageType("aiserver.v1.ListMcpToolsResponse", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: dbo,
            repeated: !0
        }
    ]), dbo = k.makeMessageType("aiserver.v1.ListMcpToolsResponse.Server", ()=>[
        {
            no: 1,
            name: "server_identifier",
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
            name: "tools",
            kind: "message",
            T: AMe,
            repeated: !0
        },
        {
            no: 4,
            name: "account_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "row_server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "served_by",
            kind: "enum",
            T: k.getEnumType(yX)
        },
        {
            no: 7,
            name: "placement",
            kind: "enum",
            T: k.getEnumType(F_e)
        },
        {
            no: 8,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "placement_source",
            kind: "enum",
            T: k.getEnumType(Qet)
        },
        {
            no: 10,
            name: "placement_probe",
            kind: "enum",
            T: k.getEnumType($On)
        },
        {
            no: 11,
            name: "placement_probe_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "overridden_declared_placement",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "row_kind",
            kind: "enum",
            T: k.getEnumType(_lh)
        },
        {
            no: 14,
            name: "viewer_can_decide",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "plugin_db_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListMcpToolsResponse_Server"
}), ylh = k.makeMessageType("aiserver.v1.CallMcpToolRequest", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "args",
            kind: "message",
            T: fd
        },
        {
            no: 4,
            name: "account_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "caller",
            kind: "enum",
            T: k.getEnumType(vlh)
        },
        {
            no: 8,
            name: "device_tag",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "client_approved",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "mcp_config_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Slh = k.makeMessageType("aiserver.v1.McpToolCallProgress", ()=>[
        {
            no: 1,
            name: "progress",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "total",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), klh = k.makeMessageType("aiserver.v1.McpElicitationRequest", ()=>[
        {
            no: 1,
            name: "request_id",
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
            name: "requested_schema_json",
            kind: "scalar",
            T: 9
        }
    ]), wlh = k.makeMessageType("aiserver.v1.NotReachableFromBackend", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(Clh)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), Clh = k.makeEnum("aiserver.v1.NotReachableFromBackend.Reason", [
    {
        no: 0,
        name: "REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REASON_DNS",
        localName: "DNS"
    },
    {
        no: 2,
        name: "REASON_CONNECTION_REFUSED",
        localName: "CONNECTION_REFUSED"
    },
    {
        no: 3,
        name: "REASON_TLS",
        localName: "TLS"
    },
    {
        no: 4,
        name: "REASON_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 5,
        name: "REASON_HTTP_5XX",
        localName: "HTTP_5XX"
    },
    {
        no: 6,
        name: "REASON_OTHER",
        localName: "OTHER"
    }
]), Tlh = k.makeMessageType("aiserver.v1.McpToolNeedsAuth", ()=>[
        {
            no: 1,
            name: "served_by",
            kind: "enum",
            T: k.getEnumType(yX)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), Elh = k.makeMessageType("aiserver.v1.McpToolNotRoutable", ()=>[
        {
            no: 1,
            name: "served_by",
            kind: "enum",
            T: k.getEnumType(yX)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), xlh = k.makeMessageType("aiserver.v1.McpToolNotDialed", ()=>[
        {
            no: 1,
            name: "placement",
            kind: "enum",
            T: k.getEnumType(F_e)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), Ilh = k.makeMessageType("aiserver.v1.CallMcpToolOutcome", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: sDn,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "not_reachable",
            kind: "message",
            T: wlh,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "needs_auth",
            kind: "message",
            T: Tlh,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "not_routable",
            kind: "message",
            T: Elh,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "not_dialed",
            kind: "message",
            T: xlh,
            oneof: "outcome"
        }
    ]), Alh = k.makeMessageType("aiserver.v1.McpElicitationClosed", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), Rlh = k.makeMessageType("aiserver.v1.CallMcpToolResponse", ()=>[
        {
            no: 1,
            name: "progress",
            kind: "message",
            T: Slh,
            oneof: "event"
        },
        {
            no: 2,
            name: "elicitation_request",
            kind: "message",
            T: klh,
            oneof: "event"
        },
        {
            no: 3,
            name: "outcome",
            kind: "message",
            T: Ilh,
            oneof: "event"
        },
        {
            no: 4,
            name: "elicitation_closed",
            kind: "message",
            T: Alh,
            oneof: "event"
        }
    ]), Dlh = k.makeMessageType("aiserver.v1.McpElicitationResponse", ()=>[
        {
            no: 1,
            name: "action",
            kind: "enum",
            T: k.getEnumType(Mlh)
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: fd
        }
    ]), Mlh = k.makeEnum("aiserver.v1.McpElicitationResponse.Action", [
    {
        no: 0,
        name: "ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ACTION_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 2,
        name: "ACTION_DECLINE",
        localName: "DECLINE"
    },
    {
        no: 3,
        name: "ACTION_CANCEL",
        localName: "CANCEL"
    }
]), Plh = k.makeMessageType("aiserver.v1.RespondToMcpElicitationRequest", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "response",
            kind: "message",
            T: Dlh
        }
    ]), Llh = k.makeMessageType("aiserver.v1.RespondToMcpElicitationResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Nlh)
        }
    ]), Nlh = k.makeEnum("aiserver.v1.RespondToMcpElicitationResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 3,
        name: "STATUS_ALREADY_RESOLVED",
        localName: "ALREADY_RESOLVED"
    },
    {
        no: 4,
        name: "STATUS_NOT_IMPLEMENTED",
        localName: "NOT_IMPLEMENTED"
    }
]), Olh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantRequest", ()=>[
        {
            no: 1,
            name: "server_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "refresh_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "client_information",
            kind: "message",
            T: t5u
        }
    ]), hbo = k.makeMessageType("aiserver.v1.McpToolServiceNotImplemented", ()=>[
        {
            no: 1,
            name: "method",
            kind: "scalar",
            T: 9
        }
    ]), Flh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse", ()=>[
        {
            no: 1,
            name: "migrated",
            kind: "message",
            T: Blh,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "server_copy_kept",
            kind: "message",
            T: Ulh,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "invalid_grant",
            kind: "message",
            T: $lh,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "reuse_detected",
            kind: "message",
            T: Hlh,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "provider_error",
            kind: "message",
            T: Wlh,
            oneof: "outcome"
        },
        {
            no: 6,
            name: "rejected_grok_row",
            kind: "message",
            T: Glh,
            oneof: "outcome"
        },
        {
            no: 7,
            name: "not_implemented",
            kind: "message",
            T: hbo,
            oneof: "outcome"
        },
        {
            no: 8,
            name: "persist_failed",
            kind: "message",
            T: Vlh,
            oneof: "outcome"
        },
        {
            no: 9,
            name: "rejected_client_placed",
            kind: "message",
            T: jlh,
            oneof: "outcome"
        }
    ]), Blh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.Migrated", [], {
    localName: "MigrateMcpOAuthGrantResponse_Migrated"
}), Ulh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ServerCopyKept", [], {
    localName: "MigrateMcpOAuthGrantResponse_ServerCopyKept"
}), $lh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.InvalidGrant", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_InvalidGrant"
}), Hlh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ReuseDetected", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_ReuseDetected"
}), Wlh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ProviderError", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_ProviderError"
}), Glh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.RejectedGrokRow", [], {
    localName: "MigrateMcpOAuthGrantResponse_RejectedGrokRow"
}), Vlh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.PersistFailed", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_PersistFailed"
}), jlh = k.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.RejectedClientPlaced", [], {
    localName: "MigrateMcpOAuthGrantResponse_RejectedClientPlaced"
}), ZKi = k.makeMessageType("aiserver.v1.SetMcpServerPlacementRequest", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "placement",
            kind: "enum",
            T: k.getEnumType(F_e)
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: k.getEnumType(XKi)
        }
    ]), qlh = k.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse", ()=>[
        {
            no: 1,
            name: "updated",
            kind: "message",
            T: zlh,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "precondition_failed",
            kind: "message",
            T: Klh,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "rejected_declared_placement",
            kind: "message",
            T: Ylh,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "rejected_grok_row",
            kind: "message",
            T: Xlh,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "not_implemented",
            kind: "message",
            T: hbo,
            oneof: "outcome"
        }
    ]), zlh = k.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.Updated", ()=>[
        {
            no: 1,
            name: "placement",
            kind: "enum",
            T: k.getEnumType(F_e)
        }
    ], {
    localName: "SetMcpServerPlacementResponse_Updated"
}), Klh = k.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.PreconditionFailed", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SetMcpServerPlacementResponse_PreconditionFailed"
}), Ylh = k.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.RejectedDeclaredPlacement", [], {
    localName: "SetMcpServerPlacementResponse_RejectedDeclaredPlacement"
}), Xlh = k.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.RejectedGrokRow", [], {
    localName: "SetMcpServerPlacementResponse_RejectedGrokRow"
});

}
