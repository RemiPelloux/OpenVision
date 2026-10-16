import { Du, Wae } from "./dashboard_pb.js";
import { Xti, zke } from "./mcp_exec_pb.js";
import { B$e, Q_t } from "./mcp_pb.js";
import { K8p, Qzr } from "./mcp_pb_2.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var KKm, FPe, oTt, OCi, lns, YKm, Iel, XKm, xel, ZKm, QKm, JKm, eYm, tYm, nYm, iYm, rYm, sYm, oYm, aYm, lYm, cYm, uYm, dYm, hYm, pYm, Ael, mYm, gYm, fYm, vYm, _Ym, bYm, yYm, SYm, kYm, cns, wYm, CYm, TYm, EYm, IYm;
export { Ael, CYm, EYm, FPe, IYm, Iel, JKm, KKm, OCi, QKm, SYm, TYm, XKm, YKm, ZKm, _Ym, aYm, bYm, cYm, cns, dYm, eYm, fYm, gYm, hYm, iYm, kYm, lYm, lns, mYm, nYm, oTt, oYm, pYm, rYm, sYm, tYm, uYm, vYm, wYm, xel, yYm };
var __wakaru_uns_initialized = false;
export function uns() {
if (__wakaru_uns_initialized) return;
__wakaru_uns_initialized = true;
"use strict";
E(), hr(), Q_t(), Du(), zke(), Qzr(), KKm = x.makeEnum("aiserver.v1.McpToolCaller", [
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
]), FPe = x.makeEnum("aiserver.v1.McpPlacement", [
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
]), oTt = x.makeEnum("aiserver.v1.McpPlacementSource", [
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
]), OCi = x.makeEnum("aiserver.v1.McpPlacementProbe", [
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
]), lns = x.makeEnum("aiserver.v1.McpPlacementRequestSource", [
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
]), YKm = x.makeEnum("aiserver.v1.McpRowKind", [
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
]), Iel = x.makeMessageType("aiserver.v1.ListMcpToolsRequest", ()=>[
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
    ]), XKm = x.makeMessageType("aiserver.v1.ListMcpToolsResponse", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: xel,
            repeated: !0
        }
    ]), xel = x.makeMessageType("aiserver.v1.ListMcpToolsResponse.Server", ()=>[
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
            T: B$e,
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
            T: x.getEnumType(Wae)
        },
        {
            no: 7,
            name: "placement",
            kind: "enum",
            T: x.getEnumType(FPe)
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
            T: x.getEnumType(oTt)
        },
        {
            no: 10,
            name: "placement_probe",
            kind: "enum",
            T: x.getEnumType(OCi)
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
            T: x.getEnumType(YKm)
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
}), ZKm = x.makeMessageType("aiserver.v1.CallMcpToolRequest", ()=>[
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
            T: qd
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
            T: x.getEnumType(KKm)
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
    ]), QKm = x.makeMessageType("aiserver.v1.McpToolCallProgress", ()=>[
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
    ]), JKm = x.makeMessageType("aiserver.v1.McpElicitationRequest", ()=>[
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
    ]), eYm = x.makeMessageType("aiserver.v1.NotReachableFromBackend", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(tYm)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), tYm = x.makeEnum("aiserver.v1.NotReachableFromBackend.Reason", [
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
]), nYm = x.makeMessageType("aiserver.v1.McpToolNeedsAuth", ()=>[
        {
            no: 1,
            name: "served_by",
            kind: "enum",
            T: x.getEnumType(Wae)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), iYm = x.makeMessageType("aiserver.v1.McpToolNotRoutable", ()=>[
        {
            no: 1,
            name: "served_by",
            kind: "enum",
            T: x.getEnumType(Wae)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), rYm = x.makeMessageType("aiserver.v1.McpToolNotDialed", ()=>[
        {
            no: 1,
            name: "placement",
            kind: "enum",
            T: x.getEnumType(FPe)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), sYm = x.makeMessageType("aiserver.v1.CallMcpToolOutcome", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: Xti,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "not_reachable",
            kind: "message",
            T: eYm,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "needs_auth",
            kind: "message",
            T: nYm,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "not_routable",
            kind: "message",
            T: iYm,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "not_dialed",
            kind: "message",
            T: rYm,
            oneof: "outcome"
        }
    ]), oYm = x.makeMessageType("aiserver.v1.McpElicitationClosed", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), aYm = x.makeMessageType("aiserver.v1.CallMcpToolResponse", ()=>[
        {
            no: 1,
            name: "progress",
            kind: "message",
            T: QKm,
            oneof: "event"
        },
        {
            no: 2,
            name: "elicitation_request",
            kind: "message",
            T: JKm,
            oneof: "event"
        },
        {
            no: 3,
            name: "outcome",
            kind: "message",
            T: sYm,
            oneof: "event"
        },
        {
            no: 4,
            name: "elicitation_closed",
            kind: "message",
            T: oYm,
            oneof: "event"
        }
    ]), lYm = x.makeMessageType("aiserver.v1.McpElicitationResponse", ()=>[
        {
            no: 1,
            name: "action",
            kind: "enum",
            T: x.getEnumType(cYm)
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: qd
        }
    ]), cYm = x.makeEnum("aiserver.v1.McpElicitationResponse.Action", [
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
]), uYm = x.makeMessageType("aiserver.v1.RespondToMcpElicitationRequest", ()=>[
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
            T: lYm
        }
    ]), dYm = x.makeMessageType("aiserver.v1.RespondToMcpElicitationResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(hYm)
        }
    ]), hYm = x.makeEnum("aiserver.v1.RespondToMcpElicitationResponse.Status", [
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
]), pYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantRequest", ()=>[
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
            T: K8p
        }
    ]), Ael = x.makeMessageType("aiserver.v1.McpToolServiceNotImplemented", ()=>[
        {
            no: 1,
            name: "method",
            kind: "scalar",
            T: 9
        }
    ]), mYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse", ()=>[
        {
            no: 1,
            name: "migrated",
            kind: "message",
            T: gYm,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "server_copy_kept",
            kind: "message",
            T: fYm,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "invalid_grant",
            kind: "message",
            T: vYm,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "reuse_detected",
            kind: "message",
            T: _Ym,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "provider_error",
            kind: "message",
            T: bYm,
            oneof: "outcome"
        },
        {
            no: 6,
            name: "rejected_grok_row",
            kind: "message",
            T: yYm,
            oneof: "outcome"
        },
        {
            no: 7,
            name: "not_implemented",
            kind: "message",
            T: Ael,
            oneof: "outcome"
        },
        {
            no: 8,
            name: "persist_failed",
            kind: "message",
            T: SYm,
            oneof: "outcome"
        },
        {
            no: 9,
            name: "rejected_client_placed",
            kind: "message",
            T: kYm,
            oneof: "outcome"
        }
    ]), gYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.Migrated", [], {
    localName: "MigrateMcpOAuthGrantResponse_Migrated"
}), fYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ServerCopyKept", [], {
    localName: "MigrateMcpOAuthGrantResponse_ServerCopyKept"
}), vYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.InvalidGrant", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_InvalidGrant"
}), _Ym = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ReuseDetected", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_ReuseDetected"
}), bYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ProviderError", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_ProviderError"
}), yYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.RejectedGrokRow", [], {
    localName: "MigrateMcpOAuthGrantResponse_RejectedGrokRow"
}), SYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.PersistFailed", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_PersistFailed"
}), kYm = x.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.RejectedClientPlaced", [], {
    localName: "MigrateMcpOAuthGrantResponse_RejectedClientPlaced"
}), cns = x.makeMessageType("aiserver.v1.SetMcpServerPlacementRequest", ()=>[
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
            T: x.getEnumType(FPe)
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: x.getEnumType(lns)
        }
    ]), wYm = x.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse", ()=>[
        {
            no: 1,
            name: "updated",
            kind: "message",
            T: CYm,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "precondition_failed",
            kind: "message",
            T: TYm,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "rejected_declared_placement",
            kind: "message",
            T: EYm,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "rejected_grok_row",
            kind: "message",
            T: IYm,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "not_implemented",
            kind: "message",
            T: Ael,
            oneof: "outcome"
        }
    ]), CYm = x.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.Updated", ()=>[
        {
            no: 1,
            name: "placement",
            kind: "enum",
            T: x.getEnumType(FPe)
        }
    ], {
    localName: "SetMcpServerPlacementResponse_Updated"
}), TYm = x.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.PreconditionFailed", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SetMcpServerPlacementResponse_PreconditionFailed"
}), EYm = x.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.RejectedDeclaredPlacement", [], {
    localName: "SetMcpServerPlacementResponse_RejectedDeclaredPlacement"
}), IYm = x.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.RejectedGrokRow", [], {
    localName: "SetMcpServerPlacementResponse_RejectedGrokRow"
});

}
