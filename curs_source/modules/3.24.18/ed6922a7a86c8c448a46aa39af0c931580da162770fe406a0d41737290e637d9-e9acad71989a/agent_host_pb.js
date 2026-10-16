import { Hm, X4i, Yb, l$t, ode, qyt, tL, x1, zd } from "./agent_pb.js";
import { GQe, lVs } from "./agent_skills_pb.js";
import { Cee, _4e } from "./cursor_rules_pb.js";
import { IR, xl } from "./privacy_mode_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Bj, DDn, J7t, MDn, O0e, RDn } from "./request_context_exec_pb.js";
import { MD, Uj } from "./requested_model_pb.js";
import { Byt, jW } from "./selected_context_pb.js";
import { EW, fd } from "./struct_pb.js";
import { G4i, xDn } from "./system_prompt_pb.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
import { hu, vk } from "./utils_pb.js";
var Fbh, V1e, j1e, oZi, r3n, dCt, Bbh, hCt, KVt, aZi, Two, ZX, _oe, Ubh, Ewo, xwo, $bh, Iwo, Hbh, Wbh, Gbh, Awo, Rwo, cZi, Vbh, jbh, qbh, sLe, btt, Dwo, Mwo, lZi, Pwo, Lwo, Nwo, Owo, zbh, Fwo, Bwo, Kbh, Uwo, YVt, uZi, $wo, Hwo, Wwo, Gwo, s3n, o3n, Vwo, ytt, dZi, hZi, jwo, Ybh, Xbh, Zbh, Qbh, Jbh, eyh, tyh, nyh, iyh, ryh, syh, oyh, ayh, qwo, pCt, cyh, Stt, mCt, zwo, a3n, c3n, l3n, pZi, mZi, lyh, uyh, Kwo, gZi, fZi, vZi, _Zi, dyh, hyh, pyh, Ywo, Xwo, Zwo, Qwo, myh, gyh, fyh, vyh, _yh, byh, yyh, ktt, bZi, Syh, Jwo, eCo, kyh, wyh, Cyh, Tyh, Eyh, xyh, Iyh, Ayh, Ryh, Dyh, Myh, Pyh, oLe, Lyh, Nyh, Oyh, Fyh, Byh, Uyh, $yh, Hyh, Wyh, Gyh, Vyh, jyh, qyh, zyh, Kyh, tCo, Yyh, Xyh, Zyh, Qyh, Jyh, yZi, eSh, SZi;
export { $bh, $wo, $yh, Awo, Ayh, Bbh, Bwo, Byh, Cyh, Dwo, Dyh, Ewo, Eyh, Fbh, Fwo, Fyh, Gbh, Gwo, Gyh, Hbh, Hwo, Hyh, Iwo, Iyh, Jbh, Jwo, Jyh, KVt, Kbh, Kwo, Kyh, Lwo, Lyh, Mwo, Myh, Nwo, Nyh, Owo, Oyh, Pwo, Pyh, Qbh, Qwo, Qyh, Rwo, Ryh, SZi, Stt, Syh, Two, Tyh, Ubh, Uwo, Uyh, V1e, Vbh, Vwo, Vyh, Wbh, Wwo, Wyh, Xbh, Xwo, Xyh, YVt, Ybh, Ywo, Yyh, ZX, Zbh, Zwo, Zyh, _Zi, _oe, _yh, a3n, aZi, ayh, bZi, btt, byh, c3n, cZi, cyh, dCt, dZi, dyh, eCo, eSh, eyh, fZi, fyh, gZi, gyh, hCt, hZi, hyh, iyh, j1e, jbh, jwo, jyh, ktt, kyh, l3n, lZi, lyh, mCt, mZi, myh, nyh, o3n, oLe, oZi, oyh, pCt, pZi, pyh, qbh, qwo, qyh, r3n, ryh, s3n, sLe, syh, tCo, tyh, uZi, uyh, vZi, vyh, wyh, xwo, xyh, yZi, ytt, yyh, zbh, zwo, zyh };
var __wakaru_bq_initialized = false;
export function bq() {
if (__wakaru_bq_initialized) return;
__wakaru_bq_initialized = true;
"use strict";
x(), bi(), zd(), GQe(), Uj(), _4e(), Bj(), jW(), IR(), hu(), G4i(), Fbh = k.makeEnum("agent.v1.SubagentInteractionPolicy", [
    {
        no: 0,
        name: "SUBAGENT_INTERACTION_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_INTERACTION_POLICY_AUTO_REJECT",
        localName: "AUTO_REJECT"
    },
    {
        no: 2,
        name: "SUBAGENT_INTERACTION_POLICY_BUBBLE_TO_PARENT",
        localName: "BUBBLE_TO_PARENT"
    },
    {
        no: 3,
        name: "SUBAGENT_INTERACTION_POLICY_SURFACE_TO_USER",
        localName: "SURFACE_TO_USER"
    }
]), V1e = k.makeEnum("agent.v1.AgentHostSessionStatus", [
    {
        no: 0,
        name: "AGENT_HOST_SESSION_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_SESSION_STATUS_IDLE",
        localName: "IDLE"
    },
    {
        no: 2,
        name: "AGENT_HOST_SESSION_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 3,
        name: "AGENT_HOST_SESSION_STATUS_AWAITING_INPUT",
        localName: "AWAITING_INPUT"
    }
]), j1e = k.makeEnum("agent.v1.AgentHostSkillSource", [
    {
        no: 0,
        name: "AGENT_HOST_SKILL_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_SKILL_SOURCE_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "AGENT_HOST_SKILL_SOURCE_WORKSPACE",
        localName: "WORKSPACE"
    },
    {
        no: 3,
        name: "AGENT_HOST_SKILL_SOURCE_NESTED_WORKSPACE",
        localName: "NESTED_WORKSPACE"
    },
    {
        no: 4,
        name: "AGENT_HOST_SKILL_SOURCE_TEAM",
        localName: "TEAM"
    },
    {
        no: 5,
        name: "AGENT_HOST_SKILL_SOURCE_BUILT_IN",
        localName: "BUILT_IN"
    },
    {
        no: 6,
        name: "AGENT_HOST_SKILL_SOURCE_PLUGIN",
        localName: "PLUGIN"
    }
]), oZi = k.makeEnum("agent.v1.AgentHostSendDelivery", [
    {
        no: 0,
        name: "AGENT_HOST_SEND_DELIVERY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_SEND_DELIVERY_QUEUE",
        localName: "QUEUE"
    },
    {
        no: 2,
        name: "AGENT_HOST_SEND_DELIVERY_NOW",
        localName: "NOW"
    },
    {
        no: 3,
        name: "AGENT_HOST_SEND_DELIVERY_STEERED",
        localName: "STEERED"
    },
    {
        no: 4,
        name: "AGENT_HOST_SEND_DELIVERY_INTERRUPTED",
        localName: "INTERRUPTED"
    }
]), r3n = k.makeEnum("agent.v1.AgentHostApprovalBlockReason", [
    {
        no: 0,
        name: "AGENT_HOST_APPROVAL_BLOCK_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_APPROVAL_BLOCK_REASON_OUT_OF_WORKSPACE",
        localName: "OUT_OF_WORKSPACE"
    },
    {
        no: 2,
        name: "AGENT_HOST_APPROVAL_BLOCK_REASON_PROTECTED_CONFIG",
        localName: "PROTECTED_CONFIG"
    },
    {
        no: 3,
        name: "AGENT_HOST_APPROVAL_BLOCK_REASON_WORKSPACE_WRITE",
        localName: "WORKSPACE_WRITE"
    }
]), dCt = k.makeEnum("agent.v1.AgentHostApprovalHookSource", [
    {
        no: 0,
        name: "AGENT_HOST_APPROVAL_HOOK_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_APPROVAL_HOOK_SOURCE_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "AGENT_HOST_APPROVAL_HOOK_SOURCE_PROJECT",
        localName: "PROJECT"
    },
    {
        no: 3,
        name: "AGENT_HOST_APPROVAL_HOOK_SOURCE_ENTERPRISE",
        localName: "ENTERPRISE"
    },
    {
        no: 4,
        name: "AGENT_HOST_APPROVAL_HOOK_SOURCE_TEAM",
        localName: "TEAM"
    }
]), Bbh = k.makeEnum("agent.v1.AgentHostApprovalOperationType", [
    {
        no: 0,
        name: "AGENT_HOST_APPROVAL_OPERATION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_APPROVAL_OPERATION_TYPE_WRITE",
        localName: "WRITE"
    },
    {
        no: 2,
        name: "AGENT_HOST_APPROVAL_OPERATION_TYPE_READ",
        localName: "READ"
    },
    {
        no: 3,
        name: "AGENT_HOST_APPROVAL_OPERATION_TYPE_SHELL",
        localName: "SHELL"
    },
    {
        no: 4,
        name: "AGENT_HOST_APPROVAL_OPERATION_TYPE_DELETE",
        localName: "DELETE"
    },
    {
        no: 5,
        name: "AGENT_HOST_APPROVAL_OPERATION_TYPE_MCP",
        localName: "MCP"
    }
]), hCt = k.makeEnum("agent.v1.AgentHostInteractionResponseStatus", [
    {
        no: 0,
        name: "AGENT_HOST_INTERACTION_RESPONSE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_INTERACTION_RESPONSE_STATUS_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "AGENT_HOST_INTERACTION_RESPONSE_STATUS_ALREADY_RESOLVED",
        localName: "ALREADY_RESOLVED"
    },
    {
        no: 3,
        name: "AGENT_HOST_INTERACTION_RESPONSE_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    }
]), KVt = k.makeEnum("agent.v1.AgentHostBackgroundWorkKind", [
    {
        no: 0,
        name: "AGENT_HOST_BACKGROUND_WORK_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_BACKGROUND_WORK_KIND_SHELL",
        localName: "SHELL"
    },
    {
        no: 2,
        name: "AGENT_HOST_BACKGROUND_WORK_KIND_SUBAGENT",
        localName: "SUBAGENT"
    }
]), aZi = k.makeEnum("agent.v1.AgentHostBackgroundWorkState", [
    {
        no: 0,
        name: "AGENT_HOST_BACKGROUND_WORK_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_BACKGROUND_WORK_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "AGENT_HOST_BACKGROUND_WORK_STATE_QUEUED",
        localName: "QUEUED"
    }
]), Two = k.makeEnum("agent.v1.AgentHostShellLifecycleState", [
    {
        no: 0,
        name: "AGENT_HOST_SHELL_LIFECYCLE_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_SHELL_LIFECYCLE_STATE_STARTING",
        localName: "STARTING"
    },
    {
        no: 2,
        name: "AGENT_HOST_SHELL_LIFECYCLE_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 3,
        name: "AGENT_HOST_SHELL_LIFECYCLE_STATE_EXITED",
        localName: "EXITED"
    },
    {
        no: 4,
        name: "AGENT_HOST_SHELL_LIFECYCLE_STATE_ABORTED",
        localName: "ABORTED"
    }
]), ZX = k.makeEnum("agent.v1.AgentHostTurnOutcome", [
    {
        no: 0,
        name: "AGENT_HOST_TURN_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_TURN_OUTCOME_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 2,
        name: "AGENT_HOST_TURN_OUTCOME_INTERRUPTED",
        localName: "INTERRUPTED"
    },
    {
        no: 3,
        name: "AGENT_HOST_TURN_OUTCOME_FAILED",
        localName: "FAILED"
    }
]), _oe = k.makeEnum("agent.v1.AgentHostTurnInterruptInitiator", [
    {
        no: 0,
        name: "AGENT_HOST_TURN_INTERRUPT_INITIATOR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_TURN_INTERRUPT_INITIATOR_USER_STOP",
        localName: "USER_STOP"
    },
    {
        no: 2,
        name: "AGENT_HOST_TURN_INTERRUPT_INITIATOR_FOLLOW_UP",
        localName: "FOLLOW_UP"
    },
    {
        no: 3,
        name: "AGENT_HOST_TURN_INTERRUPT_INITIATOR_CLIENT_ERROR",
        localName: "CLIENT_ERROR"
    },
    {
        no: 4,
        name: "AGENT_HOST_TURN_INTERRUPT_INITIATOR_HOST",
        localName: "HOST"
    }
]), Ubh = k.makeEnum("agent.v1.AgentHostTurnStopReason", [
    {
        no: 0,
        name: "AGENT_HOST_TURN_STOP_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_HOST_TURN_STOP_REASON_MAX_STEPS_REACHED",
        localName: "MAX_STEPS_REACHED"
    }
]), Ewo = k.makeMessageType("agent.v1.CreateAgentHostSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "initial_history",
            kind: "message",
            T: Hm,
            opt: !0
        },
        {
            no: 3,
            name: "session_options",
            kind: "message",
            T: xwo,
            opt: !0
        },
        {
            no: 4,
            name: "client_instance_id",
            kind: "scalar",
            T: 9
        }
    ]), xwo = k.makeMessageType("agent.v1.AgentHostSessionOptions", ()=>[
        {
            no: 1,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "worktree_main_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "is_glass_root",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "interaction_policy",
            kind: "enum",
            T: k.getEnumType(Fbh),
            opt: !0
        },
        {
            no: 5,
            name: "owning_project",
            kind: "message",
            T: Iwo,
            opt: !0
        },
        {
            no: 6,
            name: "local_subagent_limits",
            kind: "message",
            T: $bh,
            opt: !0
        },
        {
            no: 7,
            name: "hosted_mcp_routing_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "hosted_mcp_local_grant_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), $bh = k.makeMessageType("agent.v1.AgentHostLocalSubagentLimits", ()=>[
        {
            no: 1,
            name: "max_running",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Iwo = k.makeMessageType("agent.v1.AgentHostOwningProject", ()=>[
        {
            no: 1,
            name: "project_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "project_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Hbh = k.makeMessageType("agent.v1.CreateAgentHostSessionResponse", []), Wbh = k.makeMessageType("agent.v1.ForkAgentHostSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "through_turn_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Gbh = k.makeMessageType("agent.v1.ForkAgentHostSessionResponse", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), Awo = k.makeMessageType("agent.v1.ListAgentHostSessionsRequest", ()=>[
        {
            no: 1,
            name: "include_children",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "parent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "workspace_paths_filter",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "match_any_workspace_root",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "owner_client_instance_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "include_owner_unrooted_sessions",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Rwo = k.makeMessageType("agent.v1.ListAgentHostSessionsResponse", ()=>[
        {
            no: 1,
            name: "sessions",
            kind: "message",
            T: sLe,
            repeated: !0
        }
    ]), cZi = k.makeMessageType("agent.v1.WatchAgentHostSessionsRequest", ()=>[
        {
            no: 1,
            name: "workspace_paths_filter",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "match_any_workspace_root",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "owner_client_instance_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "include_owner_unrooted_sessions",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Vbh = k.makeMessageType("agent.v1.HasAgentHostSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), jbh = k.makeMessageType("agent.v1.HasAgentHostSessionResponse", ()=>[
        {
            no: 1,
            name: "exists",
            kind: "scalar",
            T: 8
        }
    ]), qbh = k.makeMessageType("agent.v1.SessionParent", ()=>[
        {
            no: 1,
            name: "parent_session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "root_session_id",
            kind: "scalar",
            T: 9
        }
    ]), sLe = k.makeMessageType("agent.v1.AgentHostSession", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: k.getEnumType(V1e)
        },
        {
            no: 3,
            name: "last_event_id",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "forked_from_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "parent",
            kind: "message",
            T: qbh,
            opt: !0
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "updated_at",
            kind: "message",
            T: Nr,
            opt: !0
        },
        {
            no: 8,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "running_turn_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "queued_turn_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 13,
            name: "workspace",
            kind: "message",
            T: Owo,
            opt: !0
        }
    ]), btt = k.makeMessageType("agent.v1.WatchAgentHostSessionsEvent", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: Dwo,
            oneof: "event"
        },
        {
            no: 2,
            name: "added",
            kind: "message",
            T: Mwo,
            oneof: "event"
        },
        {
            no: 3,
            name: "updated",
            kind: "message",
            T: lZi,
            oneof: "event"
        },
        {
            no: 4,
            name: "deleted",
            kind: "message",
            T: Pwo,
            oneof: "event"
        },
        {
            no: 5,
            name: "keepalive",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Dwo = k.makeMessageType("agent.v1.AgentHostSessionsSnapshot", ()=>[
        {
            no: 1,
            name: "sessions",
            kind: "message",
            T: sLe,
            repeated: !0
        }
    ]), Mwo = k.makeMessageType("agent.v1.AgentHostSessionAdded", ()=>[
        {
            no: 1,
            name: "session",
            kind: "message",
            T: sLe
        }
    ]), lZi = k.makeMessageType("agent.v1.AgentHostSessionUpdated", ()=>[
        {
            no: 1,
            name: "session",
            kind: "message",
            T: sLe
        }
    ]), Pwo = k.makeMessageType("agent.v1.AgentHostSessionDeleted", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), Lwo = k.makeMessageType("agent.v1.ListAgentHostWorkspacesRequest", []), Nwo = k.makeMessageType("agent.v1.ListAgentHostWorkspacesResponse", ()=>[
        {
            no: 1,
            name: "workspaces",
            kind: "message",
            T: Owo,
            repeated: !0
        }
    ]), Owo = k.makeMessageType("agent.v1.AgentHostWorkspace", ()=>[
        {
            no: 1,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "worktree_main_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "display_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zbh = k.makeMessageType("agent.v1.ListAgentHostSkillsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "refresh",
            kind: "scalar",
            T: 8
        }
    ]), Fwo = k.makeMessageType("agent.v1.ListAgentHostSkillsResponse", ()=>[
        {
            no: 1,
            name: "skills",
            kind: "message",
            T: Bwo,
            repeated: !0
        },
        {
            no: 2,
            name: "scan_errors",
            kind: "message",
            T: Kbh,
            repeated: !0
        },
        {
            no: 3,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Bwo = k.makeMessageType("agent.v1.AgentHostSkill", ()=>[
        {
            no: 1,
            name: "skill",
            kind: "message",
            T: lVs
        },
        {
            no: 2,
            name: "qualified_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_default",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: k.getEnumType(j1e)
        }
    ]), Kbh = k.makeMessageType("agent.v1.AgentHostSkillScanError", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Uwo = k.makeMessageType("agent.v1.SendAgentHostMessageRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: ode,
            opt: !0
        },
        {
            no: 5,
            name: "turn_options",
            kind: "message",
            T: SZi,
            opt: !0
        },
        {
            no: 6,
            name: "requested_model",
            kind: "message",
            T: MD,
            opt: !0
        },
        {
            no: 7,
            name: "message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YVt = k.makeMessageType("agent.v1.SendAgentHostActionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action",
            kind: "message",
            T: x1
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: ode,
            opt: !0
        },
        {
            no: 5,
            name: "turn_options",
            kind: "message",
            T: SZi,
            opt: !0
        },
        {
            no: 6,
            name: "requested_model",
            kind: "message",
            T: MD,
            opt: !0
        },
        {
            no: 7,
            name: "base_history",
            kind: "message",
            T: Hm,
            opt: !0
        },
        {
            no: 8,
            name: "request_context_decoration",
            kind: "message",
            T: uZi,
            opt: !0
        },
        {
            no: 9,
            name: "delivery",
            kind: "enum",
            T: k.getEnumType(oZi),
            opt: !0
        },
        {
            no: 10,
            name: "replace_queued_turn_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), uZi = k.makeMessageType("agent.v1.RequestContextDecoration", ()=>[
        {
            no: 1,
            name: "smart_mode_classifier_auto_mode_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "disabled_team_rules",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "admin_command_denylist",
            kind: "message",
            T: $wo,
            opt: !0
        },
        {
            no: 4,
            name: "commit_attribution_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "pr_attribution_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "mounted_agent_stores",
            kind: "message",
            T: Hwo,
            opt: !0
        },
        {
            no: 7,
            name: "web_search_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "web_fetch_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "read_lints_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "search_conversations_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "appended_rules",
            kind: "message",
            T: Cee,
            repeated: !0
        },
        {
            no: 12,
            name: "filtered_browser_mcp_provider_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 13,
            name: "git_repo_branch_ancestry",
            kind: "message",
            T: Wwo,
            opt: !0
        },
        {
            no: 14,
            name: "admin_permissions_auto_run",
            kind: "message",
            T: O0e,
            opt: !0
        },
        {
            no: 15,
            name: "user_permissions_auto_run",
            kind: "message",
            T: O0e,
            opt: !0
        },
        {
            no: 16,
            name: "project_permissions_auto_run",
            kind: "message",
            T: O0e,
            opt: !0
        },
        {
            no: 17,
            name: "hooks_config",
            kind: "message",
            T: DDn,
            opt: !0
        },
        {
            no: 18,
            name: "hooks_additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "debug_mode_config",
            kind: "message",
            T: J7t,
            opt: !0
        },
        {
            no: 20,
            name: "recently_added_plugin",
            kind: "message",
            T: MDn,
            opt: !0
        },
        {
            no: 21,
            name: "prefetch_file_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 22,
            name: "sandbox_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), $wo = k.makeMessageType("agent.v1.StringListOverlay", ()=>[
        {
            no: 1,
            name: "values",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Hwo = k.makeMessageType("agent.v1.MountedAgentStoreListOverlay", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: RDn,
            repeated: !0
        }
    ]), Wwo = k.makeMessageType("agent.v1.GitRepoBranchAncestry", ()=>[
        {
            no: 1,
            name: "repo_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "current_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_ancestor",
            kind: "scalar",
            T: 8
        }
    ]), Gwo = k.makeMessageType("agent.v1.SendAgentHostMessageResponse", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "delivered_as",
            kind: "enum",
            T: k.getEnumType(oZi),
            opt: !0
        }
    ]), s3n = k.makeMessageType("agent.v1.SendAgentHostActionResponse", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "delivered_as",
            kind: "enum",
            T: k.getEnumType(oZi),
            opt: !0
        }
    ]), o3n = k.makeMessageType("agent.v1.DeleteAgentHostSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), Vwo = k.makeMessageType("agent.v1.DeleteAgentHostSessionResponse", []), ytt = k.makeMessageType("agent.v1.InterruptAgentHostTurnRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "session_tree",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "initiated_by",
            kind: "enum",
            T: k.getEnumType(_oe),
            opt: !0
        }
    ]), dZi = k.makeMessageType("agent.v1.InterruptAgentHostTurnResponse", ()=>[
        {
            no: 1,
            name: "interrupted",
            kind: "scalar",
            T: 8
        }
    ]), hZi = k.makeMessageType("agent.v1.CancelQueuedAgentHostTurnRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "initiated_by",
            kind: "enum",
            T: k.getEnumType(_oe),
            opt: !0
        }
    ]), jwo = k.makeMessageType("agent.v1.CancelQueuedAgentHostTurnResponse", ()=>[
        {
            no: 1,
            name: "cancelled",
            kind: "scalar",
            T: 8
        }
    ]), Ybh = k.makeMessageType("agent.v1.ReorderQueuedAgentHostTurnsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "turn_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Xbh = k.makeMessageType("agent.v1.ReorderQueuedAgentHostTurnsResponse", []), Zbh = k.makeMessageType("agent.v1.EditQueuedAgentHostTurnRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_message",
            kind: "message",
            T: Qbh,
            oneof: "edit"
        },
        {
            no: 4,
            name: "shell_command",
            kind: "message",
            T: eyh,
            oneof: "edit"
        }
    ]), Qbh = k.makeMessageType("agent.v1.QueuedAgentHostUserMessageEdit", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "images",
            kind: "message",
            T: Jbh,
            opt: !0
        }
    ]), Jbh = k.makeMessageType("agent.v1.QueuedAgentHostImages", ()=>[
        {
            no: 1,
            name: "images",
            kind: "message",
            T: Byt,
            repeated: !0
        }
    ]), eyh = k.makeMessageType("agent.v1.QueuedAgentHostShellCommandEdit", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]), tyh = k.makeMessageType("agent.v1.EditQueuedAgentHostTurnResponse", ()=>[
        {
            no: 1,
            name: "edited",
            kind: "scalar",
            T: 8
        }
    ]), nyh = k.makeMessageType("agent.v1.AgentHostApprovalWriteDetails", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_new_file",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "diff_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "before",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "after",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "block_reason",
            kind: "enum",
            T: k.getEnumType(r3n),
            opt: !0
        }
    ]), iyh = k.makeMessageType("agent.v1.AgentHostApprovalReadDetails", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ryh = k.makeMessageType("agent.v1.AgentHostApprovalShellDetails", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "hook_source",
            kind: "enum",
            T: k.getEnumType(dCt),
            opt: !0
        },
        {
            no: 6,
            name: "is_sandbox_available",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "is_sandbox_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "can_allowlist",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "not_allowed_commands",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "suggested_allowlist_entries",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "smart_mode_approval_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "smart_mode_approval_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), syh = k.makeMessageType("agent.v1.AgentHostApprovalDeleteDetails", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), oyh = k.makeMessageType("agent.v1.AgentHostApprovalMcpDetails", ()=>[
        {
            no: 1,
            name: "name",
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
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: EW
            }
        },
        {
            no: 5,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "hook_source",
            kind: "enum",
            T: k.getEnumType(dCt),
            opt: !0
        },
        {
            no: 8,
            name: "can_allowlist",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "smart_mode_approval_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "smart_mode_approval_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ayh = k.makeMessageType("agent.v1.AgentHostApprovalOperation", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(Bbh)
        },
        {
            no: 2,
            name: "write",
            kind: "message",
            T: nyh,
            oneof: "details"
        },
        {
            no: 3,
            name: "read",
            kind: "message",
            T: iyh,
            oneof: "details"
        },
        {
            no: 4,
            name: "shell",
            kind: "message",
            T: ryh,
            oneof: "details"
        },
        {
            no: 5,
            name: "delete",
            kind: "message",
            T: syh,
            oneof: "details"
        },
        {
            no: 6,
            name: "mcp",
            kind: "message",
            T: oyh,
            oneof: "details"
        }
    ]), qwo = k.makeMessageType("agent.v1.AgentHostApprovalRequest", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "operation",
            kind: "message",
            T: ayh
        },
        {
            no: 3,
            name: "offered_allowlist_entries",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), pCt = k.makeMessageType("agent.v1.AgentHostApprovalResult", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "allowlist_entries",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), cyh = k.makeMessageType("agent.v1.McpElicitationRequest", ()=>[
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
    ]), Stt = k.makeMessageType("agent.v1.McpElicitationResponse", ()=>[
        {
            no: 1,
            name: "action",
            kind: "enum",
            T: k.getEnumType(mCt)
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: fd
        }
    ]), mCt = k.makeEnum("agent.v1.McpElicitationResponse.Action", [
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
]), zwo = k.makeMessageType("agent.v1.AgentHostMcpElicitationRequest", ()=>[
        {
            no: 1,
            name: "server_name",
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
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "elicitation",
            kind: "message",
            T: cyh
        }
    ]), a3n = k.makeMessageType("agent.v1.RespondToAgentHostInteractionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "interaction_response",
            kind: "message",
            T: tL,
            oneof: "answer"
        },
        {
            no: 4,
            name: "exec_approval",
            kind: "message",
            T: pCt,
            oneof: "answer"
        },
        {
            no: 5,
            name: "mcp_elicitation",
            kind: "message",
            T: Stt,
            oneof: "answer"
        }
    ]), c3n = k.makeMessageType("agent.v1.RespondToAgentHostInteractionResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(hCt)
        }
    ]), l3n = k.makeMessageType("agent.v1.AgentHostPendingInteraction", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "interaction_query",
            kind: "message",
            T: qyt,
            oneof: "question"
        },
        {
            no: 4,
            name: "exec_approval",
            kind: "message",
            T: qwo,
            oneof: "question"
        },
        {
            no: 5,
            name: "mcp_elicitation",
            kind: "message",
            T: zwo,
            oneof: "question"
        }
    ]), pZi = k.makeMessageType("agent.v1.WatchAgentHostSessionInteractionsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), mZi = k.makeMessageType("agent.v1.WatchAgentHostSessionInteractionsEvent", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: lyh,
            oneof: "event"
        },
        {
            no: 2,
            name: "state",
            kind: "message",
            T: uyh,
            oneof: "event"
        }
    ]), lyh = k.makeMessageType("agent.v1.AgentHostSessionInteractionsSnapshot", ()=>[
        {
            no: 1,
            name: "interactions",
            kind: "message",
            T: l3n,
            repeated: !0
        }
    ]), uyh = k.makeMessageType("agent.v1.AgentHostSessionInteractionsState", ()=>[
        {
            no: 1,
            name: "interactions",
            kind: "message",
            T: l3n,
            repeated: !0
        }
    ]), Kwo = k.makeMessageType("agent.v1.AgentHostBackgroundWork", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(KVt)
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: k.getEnumType(aZi)
        },
        {
            no: 4,
            name: "owner_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "has_abort",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), gZi = k.makeMessageType("agent.v1.WatchAgentHostSessionBackgroundWorkRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(KVt),
            opt: !0
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: k.getEnumType(aZi),
            opt: !0
        },
        {
            no: 4,
            name: "owner_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fZi = k.makeMessageType("agent.v1.WatchAgentHostSessionBackgroundWorkEvent", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: hyh,
            oneof: "event"
        },
        {
            no: 2,
            name: "state",
            kind: "message",
            T: pyh,
            oneof: "event"
        }
    ]), vZi = k.makeMessageType("agent.v1.WatchAgentHostSessionTurnLifecycleRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), _Zi = k.makeMessageType("agent.v1.WatchAgentHostSessionTurnLifecycleEvent", ()=>[
        {
            no: 1,
            name: "ready",
            kind: "message",
            T: dyh,
            oneof: "event"
        },
        {
            no: 2,
            name: "lifecycle",
            kind: "message",
            T: Nyh,
            oneof: "event"
        }
    ]), dyh = k.makeMessageType("agent.v1.AgentHostTurnLifecycleWatchReady", []), hyh = k.makeMessageType("agent.v1.AgentHostSessionBackgroundWorkSnapshot", ()=>[
        {
            no: 1,
            name: "work",
            kind: "message",
            T: Kwo,
            repeated: !0
        }
    ]), pyh = k.makeMessageType("agent.v1.AgentHostSessionBackgroundWorkState", ()=>[
        {
            no: 1,
            name: "work",
            kind: "message",
            T: Kwo,
            repeated: !0
        }
    ]), Ywo = k.makeMessageType("agent.v1.AbortAgentHostBackgroundWorkRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "work_id",
            kind: "scalar",
            T: 9
        }
    ]), Xwo = k.makeMessageType("agent.v1.AbortAgentHostBackgroundWorkResponse", ()=>[
        {
            no: 1,
            name: "aborted",
            kind: "scalar",
            T: 8
        }
    ]), Zwo = k.makeMessageType("agent.v1.AbortAllAgentHostBackgroundWorkRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(KVt),
            opt: !0
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: k.getEnumType(aZi),
            opt: !0
        },
        {
            no: 4,
            name: "owner_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Qwo = k.makeMessageType("agent.v1.AbortAllAgentHostBackgroundWorkResponse", ()=>[
        {
            no: 1,
            name: "aborted_count",
            kind: "scalar",
            T: 13
        }
    ]), myh = k.makeMessageType("agent.v1.WatchAgentHostSessionShellOutputRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "include_snapshot",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "from_output_offset",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), gyh = k.makeMessageType("agent.v1.WatchAgentHostSessionShellOutputEvent", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: fyh,
            oneof: "event"
        },
        {
            no: 2,
            name: "output",
            kind: "message",
            T: vyh,
            oneof: "event"
        },
        {
            no: 3,
            name: "lifecycle",
            kind: "message",
            T: _yh,
            oneof: "event"
        }
    ]), fyh = k.makeMessageType("agent.v1.AgentHostShellOutputSnapshot", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "state",
            kind: "enum",
            T: k.getEnumType(Two)
        },
        {
            no: 5,
            name: "buffered_output",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "next_output_offset",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "adopted",
            kind: "scalar",
            T: 8
        }
    ]), vyh = k.makeMessageType("agent.v1.AgentHostShellOutputChunk", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_offset",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "stdout",
            kind: "scalar",
            T: 12,
            oneof: "stream"
        },
        {
            no: 4,
            name: "stderr",
            kind: "scalar",
            T: 12,
            oneof: "stream"
        },
        {
            no: 5,
            name: "is_backpressured",
            kind: "scalar",
            T: 8
        }
    ]), _yh = k.makeMessageType("agent.v1.AgentHostShellLifecycle", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: k.getEnumType(Two)
        },
        {
            no: 3,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "abort_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), byh = k.makeMessageType("agent.v1.WriteAgentHostSessionShellInputRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), yyh = k.makeMessageType("agent.v1.WriteAgentHostSessionShellInputResponse", ()=>[
        {
            no: 1,
            name: "bytes_accepted",
            kind: "scalar",
            T: 4
        }
    ]), ktt = k.makeMessageType("agent.v1.AttachAgentHostSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_event_id",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 3,
            name: "background_task_completions_only",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "client_instance_id",
            kind: "scalar",
            T: 9
        }
    ]), bZi = k.makeMessageType("agent.v1.GetAgentHostSessionBlobsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blob_ids",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 3,
            name: "max_response_bytes",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), Syh = k.makeMessageType("agent.v1.AgentHostSessionBlob", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), Jwo = k.makeMessageType("agent.v1.GetAgentHostSessionBlobsResponse", ()=>[
        {
            no: 1,
            name: "blobs",
            kind: "message",
            T: Syh,
            repeated: !0
        },
        {
            no: 2,
            name: "missing_blob_ids",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 4,
            name: "oversize_blob_ids",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 3,
            name: "remaining_blob_ids",
            kind: "scalar",
            T: 12,
            repeated: !0
        }
    ]), eCo = k.makeMessageType("agent.v1.ReadAgentHostFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_offset",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "read_limit",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "cached_mtime_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), kyh = k.makeMessageType("agent.v1.ReadAgentHostFileResponse", ()=>[
        {
            no: 1,
            name: "total_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "mtime_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "chunk",
            kind: "message",
            T: wyh,
            oneof: "result"
        },
        {
            no: 4,
            name: "not_modified",
            kind: "message",
            T: Cyh,
            oneof: "result"
        },
        {
            no: 5,
            name: "too_large",
            kind: "message",
            T: Tyh,
            oneof: "result"
        }
    ]), wyh = k.makeMessageType("agent.v1.AgentHostFileChunk", ()=>[
        {
            no: 1,
            name: "offset",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), Cyh = k.makeMessageType("agent.v1.AgentHostFileNotModified", []), Tyh = k.makeMessageType("agent.v1.AgentHostFileTooLarge", ()=>[
        {
            no: 1,
            name: "max_bytes",
            kind: "scalar",
            T: 4
        }
    ]), Eyh = k.makeMessageType("agent.v1.GetAgentHostDaemonInfoRequest", ()=>[
        {
            no: 1,
            name: "expected_api_schema_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "desired_local_loop_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "allow_newer_schema",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), xyh = k.makeMessageType("agent.v1.GetAgentHostDaemonInfoResponse", ()=>[
        {
            no: 1,
            name: "daemon_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "api_schema_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "local_loop_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "listen_address",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "process_pid",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "running_session_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "build_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "capabilities",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Iyh = k.makeMessageType("agent.v1.ShutdownAgentHostDaemonRequest", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "only_if_idle",
            kind: "scalar",
            T: 8
        }
    ]), Ayh = k.makeMessageType("agent.v1.ShutdownAgentHostDaemonResponse", ()=>[
        {
            no: 1,
            name: "shutdown_scheduled",
            kind: "scalar",
            T: 8
        }
    ]), Ryh = k.makeMessageType("agent.v1.UpdateAgentHostDaemonAuthRequest", ()=>[
        {
            no: 1,
            name: "access_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "issued_at_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 4,
            name: "client_instance_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "signed_out",
            kind: "scalar",
            T: 8
        }
    ]), Dyh = k.makeMessageType("agent.v1.UpdateAgentHostDaemonAuthResponse", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "rejection_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "privacy_mode",
            kind: "enum",
            T: k.getEnumType(xl)
        }
    ]), Myh = k.makeMessageType("agent.v1.SetAgentHostSessionTitleRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Pyh = k.makeMessageType("agent.v1.SetAgentHostSessionTitleResponse", []), oLe = k.makeMessageType("agent.v1.AgentHostSessionEvent", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 4
        },
        {
            no: 14,
            name: "keepalive",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "interaction_update",
            kind: "message",
            T: Yb,
            oneof: "event"
        },
        {
            no: 3,
            name: "conversation_state",
            kind: "message",
            T: Hm,
            oneof: "event"
        },
        {
            no: 4,
            name: "turn_started",
            kind: "message",
            T: tCo,
            oneof: "event"
        },
        {
            no: 8,
            name: "turn_awaiting_input",
            kind: "message",
            T: Xyh,
            oneof: "event"
        },
        {
            no: 9,
            name: "turn_settled",
            kind: "message",
            T: yZi,
            oneof: "event"
        },
        {
            no: 10,
            name: "interaction_resolved",
            kind: "message",
            T: Jyh,
            oneof: "event"
        },
        {
            no: 11,
            name: "subagent_started",
            kind: "message",
            T: Kyh,
            oneof: "event"
        },
        {
            no: 12,
            name: "background_task_completed",
            kind: "message",
            T: Lyh,
            oneof: "event"
        },
        {
            no: 13,
            name: "turn_interactions_superseded",
            kind: "message",
            T: Yyh,
            oneof: "event"
        }
    ]), Lyh = k.makeMessageType("agent.v1.AgentHostBackgroundTaskCompleted", ()=>[
        {
            no: 1,
            name: "completion",
            kind: "message",
            T: X4i
        }
    ]), Nyh = k.makeMessageType("agent.v1.AgentHostTurnLifecycle", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "network_phase_started",
            kind: "message",
            T: Fyh,
            oneof: "event"
        },
        {
            no: 3,
            name: "response_metadata",
            kind: "message",
            T: Uyh,
            oneof: "event"
        },
        {
            no: 4,
            name: "connection_state_changed",
            kind: "message",
            T: Hyh,
            oneof: "event"
        },
        {
            no: 5,
            name: "first_message",
            kind: "message",
            T: Vyh,
            oneof: "event"
        },
        {
            no: 6,
            name: "first_message_network",
            kind: "message",
            T: jyh,
            oneof: "event"
        },
        {
            no: 7,
            name: "first_non_heartbeat_response",
            kind: "message",
            T: qyh,
            oneof: "event"
        },
        {
            no: 8,
            name: "ttft_breakdown",
            kind: "message",
            T: zyh,
            oneof: "event"
        },
        {
            no: 9,
            name: "finished",
            kind: "message",
            T: Oyh,
            oneof: "event"
        },
        {
            no: 10,
            name: "turn_runtime_selected",
            kind: "message",
            T: Byh,
            oneof: "event"
        }
    ]), Oyh = k.makeMessageType("agent.v1.AgentHostTurnLifecycleFinished", []), Fyh = k.makeMessageType("agent.v1.AgentHostNetworkPhaseStarted", []), Byh = k.makeMessageType("agent.v1.AgentHostTurnRuntimeSelected", ()=>[
        {
            no: 1,
            name: "runtime",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Uyh = k.makeMessageType("agent.v1.AgentHostResponseMetadata", ()=>[
        {
            no: 1,
            name: "server_region",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "transport_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $yh = k.makeMessageType("agent.v1.AgentHostReconnectTrigger", ()=>[
        {
            no: 1,
            name: "error_class",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "connect_code",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 3,
            name: "connect_code_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "error_code",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 5,
            name: "count_as_server_error",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "count_as_transport_error",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "stall_aborted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "originating_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "attempt_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "endpoint_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "transport_failure_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "transport_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "loop",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Hyh = k.makeMessageType("agent.v1.AgentHostConnectionStateChanged", ()=>[
        {
            no: 1,
            name: "connected",
            kind: "message",
            T: Wyh,
            oneof: "state"
        },
        {
            no: 2,
            name: "reconnecting",
            kind: "message",
            T: Gyh,
            oneof: "state"
        }
    ]), Wyh = k.makeMessageType("agent.v1.AgentHostConnected", []), Gyh = k.makeMessageType("agent.v1.AgentHostReconnecting", ()=>[
        {
            no: 1,
            name: "attempt",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "trigger",
            kind: "message",
            T: $yh,
            opt: !0
        }
    ]), Vyh = k.makeMessageType("agent.v1.AgentHostFirstMessage", ()=>[
        {
            no: 1,
            name: "elapsed_ms",
            kind: "scalar",
            T: 1
        }
    ]), jyh = k.makeMessageType("agent.v1.AgentHostFirstMessageNetwork", ()=>[
        {
            no: 1,
            name: "elapsed_ms",
            kind: "scalar",
            T: 1
        }
    ]), qyh = k.makeMessageType("agent.v1.AgentHostFirstNonHeartbeatResponse", ()=>[
        {
            no: 1,
            name: "handshake_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "attempt",
            kind: "scalar",
            T: 13
        }
    ]), zyh = k.makeMessageType("agent.v1.AgentHostTtftBreakdown", ()=>[
        {
            no: 1,
            name: "server_first_token_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "pre_stream_setup_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "wait_for_first_event_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "provider_ttft_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "slow_pool_wait_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "attempt",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "client_prep_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 8,
            name: "client_clock",
            kind: "scalar",
            T: 8
        }
    ]), Kyh = k.makeMessageType("agent.v1.AgentHostSubagentStarted", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "child_session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "root_session_id",
            kind: "scalar",
            T: 9
        }
    ]), tCo = k.makeMessageType("agent.v1.AgentHostTurnStarted", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        }
    ]), Yyh = k.makeMessageType("agent.v1.AgentHostTurnInteractionsSuperseded", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "replay_action_from_state",
            kind: "message",
            T: Hm,
            oneof: "continuation"
        },
        {
            no: 3,
            name: "resume_from_checkpoint",
            kind: "message",
            T: Hm,
            oneof: "continuation"
        }
    ]), Xyh = k.makeMessageType("agent.v1.AgentHostTurnAwaitingInput", ()=>[
        {
            no: 1,
            name: "turn_id",
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
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "interaction_query",
            kind: "message",
            T: qyt,
            oneof: "question"
        },
        {
            no: 5,
            name: "exec_approval",
            kind: "message",
            T: qwo,
            oneof: "question"
        },
        {
            no: 6,
            name: "mcp_elicitation",
            kind: "message",
            T: zwo,
            oneof: "question"
        }
    ]), Zyh = k.makeMessageType("agent.v1.AgentHostInteractionCancelled", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Qyh = k.makeMessageType("agent.v1.AgentHostInteractionFailed", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Jyh = k.makeMessageType("agent.v1.AgentHostInteractionResolved", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "responded",
            kind: "message",
            T: tL,
            oneof: "resolution"
        },
        {
            no: 4,
            name: "cancelled",
            kind: "message",
            T: Zyh,
            oneof: "resolution"
        },
        {
            no: 5,
            name: "failed",
            kind: "message",
            T: Qyh,
            oneof: "resolution"
        },
        {
            no: 6,
            name: "exec_approval",
            kind: "message",
            T: pCt,
            oneof: "resolution"
        },
        {
            no: 7,
            name: "mcp_elicitation",
            kind: "message",
            T: Stt,
            oneof: "resolution"
        }
    ]), yZi = k.makeMessageType("agent.v1.AgentHostTurnSettled", ()=>[
        {
            no: 1,
            name: "turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(ZX)
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "error",
            kind: "message",
            T: eSh,
            opt: !0
        },
        {
            no: 5,
            name: "interrupted_by",
            kind: "enum",
            T: k.getEnumType(_oe),
            opt: !0
        },
        {
            no: 6,
            name: "stop_reason",
            kind: "enum",
            T: k.getEnumType(Ubh),
            opt: !0
        }
    ]), eSh = k.makeMessageType("agent.v1.AgentHostTurnError", ()=>[
        {
            no: 1,
            name: "kind",
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
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_retryable",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "connect_code",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "inference_request_error_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "error_details",
            kind: "message",
            T: vk,
            opt: !0
        },
        {
            no: 9,
            name: "action",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), SZi = k.makeMessageType("agent.v1.AgentHostTurnOptions", ()=>[
        {
            no: 1,
            name: "generation_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "custom_system_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "exclude_workspace_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "enable_agent_retries",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "fixed_retry_delay_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "endless_retries",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "is_running_in_test",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "stall_advisory_timeout_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 10,
            name: "stall_fail_timeout_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 11,
            name: "selected_subagent_models",
            kind: "message",
            T: MD,
            repeated: !0
        },
        {
            no: 12,
            name: "subagent_model_overrides",
            kind: "message",
            T: l$t,
            repeated: !0
        },
        {
            no: 13,
            name: "request_context_blob_transport_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "request_context_blob_max_bytes",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 15,
            name: "request_context_dynamic_inline_max_bytes",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 16,
            name: "suggest_next_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "blob_encryption_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "client_supports_inline_images",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "client_supports_preview_card",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "client_supports_send_to_user",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 22,
            name: "client_supports_routed_model_update",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "request_headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 24,
            name: "system_prompt_spec",
            kind: "message",
            T: xDn,
            opt: !0
        },
        {
            no: 25,
            name: "max_steps",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 26,
            name: "allowed_tools",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 27,
            name: "excluded_tools",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 28,
            name: "can_create_cloud_subagents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "started_as_new_project",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "first_project_onboarding",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 31,
            name: "harness",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 32,
            name: "subagent_smart_mode_auto_run",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 33,
            name: "local_loop_gate_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]);

}
