import { $g, _w } from "./dashboard_pb.js";
import { Cg, yq } from "./mcp_exec_pb.js";
import { Eg, lP } from "./mcp_pb.js";
import { mP, uP } from "./mcp_pb_2.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { ba } from "./struct_pb.js";
import { h } from "./tslib.es6.js";
var yue, Qc, wue, Eue, bue, Rue, vw, Cue, Iue, Aue, Mue, Pue, Nue, Due, Oue, Lue, Uue, xue, Fue, Wue, Bue, Gue, Vue, $ue, jue, CD, ID, Hue, que, Kue, zue, Yue, Jue, Xue, Que, Zue, eme, tme, nme, rme, sme, ime;
export { $ue, Aue, Bue, CD, Cue, Due, Eue, Fue, Gue, Hue, ID, Iue, Jue, Kue, Lue, Mue, Nue, Oue, Pue, Qc, Que, Rue, Uue, Vue, Wue, Xue, Yue, Zue, bue, eme, ime, jue, nme, que, rme, sme, tme, vw, wue, xue, yue, zue };
var __wakaru_ame_initialized = false;
export function ame() {
if (__wakaru_ame_initialized) return;
__wakaru_ame_initialized = true;
"use strict";
h(), F(), Eg(), _w(), Cg(), mP(), yue = c.makeEnum("aiserver.v1.McpToolCaller", [
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
]), Qc = c.makeEnum("aiserver.v1.McpPlacement", [
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
]), wue = c.makeEnum("aiserver.v1.McpPlacementSource", [
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
]), Eue = c.makeEnum("aiserver.v1.McpPlacementProbe", [
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
]), bue = c.makeEnum("aiserver.v1.McpPlacementRequestSource", [
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
]), Rue = c.makeEnum("aiserver.v1.McpRowKind", [
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
]), vw = c.makeMessageType("aiserver.v1.ListMcpToolsRequest", ()=>[
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
    ]), Cue = c.makeMessageType("aiserver.v1.ListMcpToolsResponse", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: Iue,
            repeated: !0
        }
    ]), Iue = c.makeMessageType("aiserver.v1.ListMcpToolsResponse.Server", ()=>[
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
            T: lP,
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
            T: c.getEnumType($g)
        },
        {
            no: 7,
            name: "placement",
            kind: "enum",
            T: c.getEnumType(Qc)
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
            T: c.getEnumType(wue)
        },
        {
            no: 10,
            name: "placement_probe",
            kind: "enum",
            T: c.getEnumType(Eue)
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
            T: c.getEnumType(Rue)
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
}), Aue = c.makeMessageType("aiserver.v1.CallMcpToolRequest", ()=>[
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
            T: ba
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
            T: c.getEnumType(yue)
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
    ]), Mue = c.makeMessageType("aiserver.v1.McpToolCallProgress", ()=>[
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
    ]), Pue = c.makeMessageType("aiserver.v1.McpElicitationRequest", ()=>[
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
    ]), Nue = c.makeMessageType("aiserver.v1.NotReachableFromBackend", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: c.getEnumType(Due)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), Due = c.makeEnum("aiserver.v1.NotReachableFromBackend.Reason", [
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
]), Oue = c.makeMessageType("aiserver.v1.McpToolNeedsAuth", ()=>[
        {
            no: 1,
            name: "served_by",
            kind: "enum",
            T: c.getEnumType($g)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), Lue = c.makeMessageType("aiserver.v1.McpToolNotRoutable", ()=>[
        {
            no: 1,
            name: "served_by",
            kind: "enum",
            T: c.getEnumType($g)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), Uue = c.makeMessageType("aiserver.v1.McpToolNotDialed", ()=>[
        {
            no: 1,
            name: "placement",
            kind: "enum",
            T: c.getEnumType(Qc)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), xue = c.makeMessageType("aiserver.v1.CallMcpToolOutcome", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: yq,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "not_reachable",
            kind: "message",
            T: Nue,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "needs_auth",
            kind: "message",
            T: Oue,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "not_routable",
            kind: "message",
            T: Lue,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "not_dialed",
            kind: "message",
            T: Uue,
            oneof: "outcome"
        }
    ]), Fue = c.makeMessageType("aiserver.v1.McpElicitationClosed", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), Wue = c.makeMessageType("aiserver.v1.CallMcpToolResponse", ()=>[
        {
            no: 1,
            name: "progress",
            kind: "message",
            T: Mue,
            oneof: "event"
        },
        {
            no: 2,
            name: "elicitation_request",
            kind: "message",
            T: Pue,
            oneof: "event"
        },
        {
            no: 3,
            name: "outcome",
            kind: "message",
            T: xue,
            oneof: "event"
        },
        {
            no: 4,
            name: "elicitation_closed",
            kind: "message",
            T: Fue,
            oneof: "event"
        }
    ]), Bue = c.makeMessageType("aiserver.v1.McpElicitationResponse", ()=>[
        {
            no: 1,
            name: "action",
            kind: "enum",
            T: c.getEnumType(Gue)
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: ba
        }
    ]), Gue = c.makeEnum("aiserver.v1.McpElicitationResponse.Action", [
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
]), Vue = c.makeMessageType("aiserver.v1.RespondToMcpElicitationRequest", ()=>[
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
            T: Bue
        }
    ]), $ue = c.makeMessageType("aiserver.v1.RespondToMcpElicitationResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: c.getEnumType(jue)
        }
    ]), jue = c.makeEnum("aiserver.v1.RespondToMcpElicitationResponse.Status", [
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
]), CD = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantRequest", ()=>[
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
            T: uP
        }
    ]), ID = c.makeMessageType("aiserver.v1.McpToolServiceNotImplemented", ()=>[
        {
            no: 1,
            name: "method",
            kind: "scalar",
            T: 9
        }
    ]), Hue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse", ()=>[
        {
            no: 1,
            name: "migrated",
            kind: "message",
            T: que,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "server_copy_kept",
            kind: "message",
            T: Kue,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "invalid_grant",
            kind: "message",
            T: zue,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "reuse_detected",
            kind: "message",
            T: Yue,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "provider_error",
            kind: "message",
            T: Jue,
            oneof: "outcome"
        },
        {
            no: 6,
            name: "rejected_grok_row",
            kind: "message",
            T: Xue,
            oneof: "outcome"
        },
        {
            no: 7,
            name: "not_implemented",
            kind: "message",
            T: ID,
            oneof: "outcome"
        },
        {
            no: 8,
            name: "persist_failed",
            kind: "message",
            T: Que,
            oneof: "outcome"
        },
        {
            no: 9,
            name: "rejected_client_placed",
            kind: "message",
            T: Zue,
            oneof: "outcome"
        }
    ]), que = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.Migrated", [], {
    localName: "MigrateMcpOAuthGrantResponse_Migrated"
}), Kue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ServerCopyKept", [], {
    localName: "MigrateMcpOAuthGrantResponse_ServerCopyKept"
}), zue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.InvalidGrant", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_InvalidGrant"
}), Yue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ReuseDetected", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_ReuseDetected"
}), Jue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.ProviderError", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_ProviderError"
}), Xue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.RejectedGrokRow", [], {
    localName: "MigrateMcpOAuthGrantResponse_RejectedGrokRow"
}), Que = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.PersistFailed", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MigrateMcpOAuthGrantResponse_PersistFailed"
}), Zue = c.makeMessageType("aiserver.v1.MigrateMcpOAuthGrantResponse.RejectedClientPlaced", [], {
    localName: "MigrateMcpOAuthGrantResponse_RejectedClientPlaced"
}), eme = c.makeMessageType("aiserver.v1.SetMcpServerPlacementRequest", ()=>[
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
            T: c.getEnumType(Qc)
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: c.getEnumType(bue)
        }
    ]), tme = c.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse", ()=>[
        {
            no: 1,
            name: "updated",
            kind: "message",
            T: nme,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "precondition_failed",
            kind: "message",
            T: rme,
            oneof: "outcome"
        },
        {
            no: 3,
            name: "rejected_declared_placement",
            kind: "message",
            T: sme,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "rejected_grok_row",
            kind: "message",
            T: ime,
            oneof: "outcome"
        },
        {
            no: 5,
            name: "not_implemented",
            kind: "message",
            T: ID,
            oneof: "outcome"
        }
    ]), nme = c.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.Updated", ()=>[
        {
            no: 1,
            name: "placement",
            kind: "enum",
            T: c.getEnumType(Qc)
        }
    ], {
    localName: "SetMcpServerPlacementResponse_Updated"
}), rme = c.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.PreconditionFailed", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SetMcpServerPlacementResponse_PreconditionFailed"
}), sme = c.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.RejectedDeclaredPlacement", [], {
    localName: "SetMcpServerPlacementResponse_RejectedDeclaredPlacement"
}), ime = c.makeMessageType("aiserver.v1.SetMcpServerPlacementResponse.RejectedGrokRow", [], {
    localName: "SetMcpServerPlacementResponse_RejectedGrokRow"
});

}
