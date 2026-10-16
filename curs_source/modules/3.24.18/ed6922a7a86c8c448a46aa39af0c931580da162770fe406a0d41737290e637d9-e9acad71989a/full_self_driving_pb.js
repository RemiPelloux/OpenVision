import { Fyt, GQe } from "./agent_skills_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { fd } from "./struct_pb.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
var zj, T5u, E5u, x5u, I5u, A5u, R5u, D5u, M5u, P5u, L5u, N5u, G4e, O5u, KXs, F5u, B5u, U5u, $5u, H5u, W5u, G5u, V5u, j5u, q5u, z5u, K5u, Y5u, X5u, Z5u, Q5u, J5u, e9u, t9u, n9u, i9u, r9u, s9u, o9u, a9u, c9u, rPn, l9u, u9u, d9u, h9u, p9u, m9u, g9u, f9u, YXs, v9u, _9u, b9u, y9u, S9u, k9u;
export { $5u, A5u, B5u, D5u, E5u, F5u, G4e, G5u, H5u, I5u, J5u, K5u, KXs, L5u, M5u, N5u, O5u, P5u, Q5u, R5u, S9u, T5u, U5u, V5u, W5u, X5u, Y5u, YXs, Z5u, _9u, a9u, b9u, c9u, d9u, e9u, f9u, g9u, h9u, i9u, j5u, k9u, l9u, m9u, n9u, o9u, p9u, q5u, r9u, rPn, s9u, t9u, u9u, v9u, x5u, y9u, z5u, zj };
var __wakaru_w9u_initialized = false;
export function w9u() {
if (__wakaru_w9u_initialized) return;
__wakaru_w9u_initialized = true;
"use strict";
x(), bi(), GQe(), zj = k.makeEnum("aiserver.v1.FullSelfDrivingMode", [
    {
        no: 0,
        name: "FULL_SELF_DRIVING_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FULL_SELF_DRIVING_MODE_SUGGEST",
        localName: "SUGGEST"
    },
    {
        no: 2,
        name: "FULL_SELF_DRIVING_MODE_APPLY",
        localName: "APPLY"
    }
]), T5u = k.makeEnum("aiserver.v1.FullSelfDrivingRunSuggestionState", [
    {
        no: 0,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_NO_CHANGES",
        localName: "NO_CHANGES"
    },
    {
        no: 3,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_READY",
        localName: "READY"
    },
    {
        no: 4,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_NOT_SUGGEST_MODE",
        localName: "NOT_SUGGEST_MODE"
    }
]), E5u = k.makeEnum("aiserver.v1.FullSelfDrivingCloudCommandAction", [
    {
        no: 0,
        name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_SPAWNED",
        localName: "SPAWNED"
    },
    {
        no: 2,
        name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_FOLLOWED_UP",
        localName: "FOLLOWED_UP"
    }
]), x5u = k.makeMessageType("aiserver.v1.SetFullSelfDrivingConfigRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        }
    ]), I5u = k.makeMessageType("aiserver.v1.SetFullSelfDrivingConfigResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 3,
            name: "spawned_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "auto_started",
            kind: "scalar",
            T: 8
        }
    ]), A5u = k.makeMessageType("aiserver.v1.GetFullSelfDrivingConfigRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), R5u = k.makeMessageType("aiserver.v1.GetFullSelfDrivingConfigResponse", ()=>[
        {
            no: 1,
            name: "has_config",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 4,
            name: "auto_started",
            kind: "scalar",
            T: 8
        }
    ]), D5u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingRunsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), M5u = k.makeMessageType("aiserver.v1.FullSelfDrivingRunLiveStatus", ()=>[
        {
            no: 1,
            name: "state",
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
            name: "loading_messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "updated_at",
            kind: "message",
            T: Nr
        }
    ]), P5u = k.makeMessageType("aiserver.v1.FullSelfDrivingRun", ()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "created_at",
            kind: "message",
            T: Nr
        },
        {
            no: 4,
            name: "first_finished_at",
            kind: "message",
            T: Nr
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "auto_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "files_changed",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "active_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "latest_status_update",
            kind: "message",
            T: M5u,
            opt: !0
        }
    ]), L5u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: P5u,
            repeated: !0
        }
    ]), N5u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingFindingsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "include_superseded",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "kinds",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), G4e = k.makeMessageType("aiserver.v1.FullSelfDrivingFinding", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_updated_at",
            kind: "message",
            T: Nr
        },
        {
            no: 3,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "payload",
            kind: "message",
            T: fd
        },
        {
            no: 11,
            name: "superseded_by_stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "superseded_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "dismissed_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "dedupe_key",
            kind: "scalar",
            T: 9
        }
    ]), O5u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingFindingsResponse", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: G4e,
            repeated: !0
        }
    ]), KXs = k.makeMessageType("aiserver.v1.FullSelfDrivingOutputInput", ()=>[
        {
            no: 1,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "payload",
            kind: "message",
            T: fd
        }
    ]), F5u = k.makeMessageType("aiserver.v1.RecordFullSelfDrivingOutputsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "outputs",
            kind: "message",
            T: KXs,
            repeated: !0
        }
    ]), B5u = k.makeMessageType("aiserver.v1.RecordFullSelfDrivingOutputsResponse", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: G4e,
            repeated: !0
        }
    ]), U5u = k.makeMessageType("aiserver.v1.UpdateFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "clear_severity",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "action",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "clear_action",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "payload",
            kind: "message",
            T: fd
        }
    ]), $5u = k.makeMessageType("aiserver.v1.UpdateFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: G4e
        }
    ]), H5u = k.makeMessageType("aiserver.v1.SupersedeFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "replacement_stable_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), W5u = k.makeMessageType("aiserver.v1.SupersedeFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: G4e
        }
    ]), G5u = k.makeMessageType("aiserver.v1.DismissFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), V5u = k.makeMessageType("aiserver.v1.DismissFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: G4e
        }
    ]), j5u = k.makeMessageType("aiserver.v1.UndoFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        }
    ]), q5u = k.makeMessageType("aiserver.v1.UndoFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: G4e
        }
    ]), z5u = k.makeMessageType("aiserver.v1.GetFullSelfDrivingRunSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), K5u = k.makeMessageType("aiserver.v1.GetFullSelfDrivingRunSuggestionResponse", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: k.getEnumType(T5u)
        },
        {
            no: 2,
            name: "side_branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "create_pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "already_applied",
            kind: "scalar",
            T: 8
        }
    ]), Y5u = k.makeMessageType("aiserver.v1.ApplyFullSelfDrivingSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "preview_base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), X5u = k.makeMessageType("aiserver.v1.ApplyFullSelfDrivingSuggestionResponse", ()=>[
        {
            no: 1,
            name: "new_pr_head_sha",
            kind: "scalar",
            T: 9
        }
    ]), Z5u = k.makeMessageType("aiserver.v1.UpdateFullSelfDrivingFindingStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "status",
            kind: "scalar",
            T: 9
        }
    ]), Q5u = k.makeMessageType("aiserver.v1.UpdateFullSelfDrivingFindingStatusResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: G4e
        }
    ]), J5u = k.makeMessageType("aiserver.v1.RunFullSelfDrivingWorkflowSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]), e9u = k.makeMessageType("aiserver.v1.RunFullSelfDrivingWorkflowSuggestionResponse", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "spawned_new_run",
            kind: "scalar",
            T: 8
        }
    ]), t9u = k.makeMessageType("aiserver.v1.BuildFullSelfDrivingTriageContextRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "trigger_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "event_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 5,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "fetch_ci_log_excerpts",
            kind: "scalar",
            T: 8
        }
    ]), n9u = k.makeMessageType("aiserver.v1.BuildFullSelfDrivingTriageContextResponse", ()=>[
        {
            no: 1,
            name: "triage_json",
            kind: "scalar",
            T: 9
        }
    ]), i9u = k.makeMessageType("aiserver.v1.PrepareLocalFullSelfDrivingRunRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 3,
            name: "trigger_description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), r9u = k.makeMessageType("aiserver.v1.PrepareLocalFullSelfDrivingRunResponse", ()=>[
        {
            no: 1,
            name: "local_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "triage_context_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "skill_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "skills",
            kind: "message",
            T: Fyt,
            repeated: !0
        }
    ]), s9u = k.makeMessageType("aiserver.v1.RunFullSelfDrivingCloudCommandRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 3,
            name: "user_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "trigger_description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), o9u = k.makeMessageType("aiserver.v1.RunFullSelfDrivingCloudCommandResponse", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action",
            kind: "enum",
            T: k.getEnumType(E5u)
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        }
    ]), a9u = k.makeMessageType("aiserver.v1.EnrollExternalFullSelfDrivingRunRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(zj)
        },
        {
            no: 4,
            name: "enable_config",
            kind: "scalar",
            T: 8
        }
    ]), c9u = k.makeMessageType("aiserver.v1.EnrollExternalFullSelfDrivingRunResponse", ()=>[
        {
            no: 1,
            name: "enrolled",
            kind: "scalar",
            T: 8
        }
    ]), rPn = k.makeMessageType("aiserver.v1.FullSelfDrivingPrScopedSuggestion", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: G4e
        },
        {
            no: 2,
            name: "producer",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "producer_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "created_by_user_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "created_by_team_id",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), l9u = k.makeMessageType("aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "producer",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "producer_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output",
            kind: "message",
            T: KXs
        }
    ]), u9u = k.makeMessageType("aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "message",
            T: rPn
        }
    ]), d9u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "include_superseded",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "kinds",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), h9u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: rPn,
            repeated: !0
        }
    ]), p9u = k.makeMessageType("aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), m9u = k.makeMessageType("aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "message",
            T: rPn
        }
    ]), g9u = k.makeMessageType("aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]), f9u = k.makeMessageType("aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionResponse", ()=>[
        {
            no: 1,
            name: "new_pr_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "suggestion",
            kind: "message",
            T: rPn
        }
    ]), YXs = k.makeMessageType("aiserver.v1.FullSelfDrivingAutoApplyConfig", ()=>[
        {
            no: 1,
            name: "match_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "created_at",
            kind: "message",
            T: Nr
        },
        {
            no: 7,
            name: "producer",
            kind: "scalar",
            T: 9
        }
    ]), v9u = k.makeMessageType("aiserver.v1.RecordFullSelfDrivingAutoApplyConfigRequest", ()=>[
        {
            no: 1,
            name: "match_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "producer",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _9u = k.makeMessageType("aiserver.v1.RecordFullSelfDrivingAutoApplyConfigResponse", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: YXs
        }
    ]), b9u = k.makeMessageType("aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigRequest", ()=>[
        {
            no: 1,
            name: "match_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "producer",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), y9u = k.makeMessageType("aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigResponse", ()=>[
        {
            no: 1,
            name: "deleted",
            kind: "scalar",
            T: 8
        }
    ]), S9u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingAutoApplyConfigsRequest", ()=>[
        {
            no: 1,
            name: "repo_owner",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "producer",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), k9u = k.makeMessageType("aiserver.v1.ListFullSelfDrivingAutoApplyConfigsResponse", ()=>[
        {
            no: 1,
            name: "configs",
            kind: "message",
            T: YXs,
            repeated: !0
        }
    ]);

}
