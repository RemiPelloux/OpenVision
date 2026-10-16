import { rbt, z4t } from "./agent_skills_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { qd } from "./struct_pb.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
var Rk, l1i, tTn, tVr, J8p, nVr, KFa, iVr, e7p, t7p, n7p, rVr, tot, i7p, c1i, YFa, r7p, u1i, s7p, XFa, o7p, sVr, a7p, ZFa, l7p, QFa, c7p, JFa, u7p, e6a, d7p, t6a, h7p, n6a, p7p, oVr, m7p, aVr, g7p, f7p, v7p, d1i, i6a, _7p, r6a, b7p, y7p, S7p, k7p, w7p, s6a, C7p, T7p, E7p, I7p, x7p, A7p;
export { A7p, C7p, E7p, I7p, J8p, JFa, KFa, QFa, Rk, S7p, T7p, XFa, YFa, ZFa, _7p, a7p, aVr, b7p, c1i, c7p, d1i, d7p, e6a, e7p, f7p, g7p, h7p, i6a, i7p, iVr, k7p, l1i, l7p, m7p, n6a, n7p, nVr, o7p, oVr, p7p, r6a, r7p, rVr, s6a, s7p, sVr, t6a, t7p, tTn, tVr, tot, u1i, u7p, v7p, w7p, x7p, y7p };
var __wakaru_dX_initialized = false;
export function dX() {
if (__wakaru_dX_initialized) return;
__wakaru_dX_initialized = true;
"use strict";
E(), hr(), rbt(), Rk = x.makeEnum("aiserver.v1.FullSelfDrivingMode", [
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
]), l1i = x.makeEnum("aiserver.v1.FullSelfDrivingRunSuggestionState", [
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
]), tTn = x.makeEnum("aiserver.v1.FullSelfDrivingCloudCommandAction", [
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
]), tVr = x.makeMessageType("aiserver.v1.SetFullSelfDrivingConfigRequest", ()=>[
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
            T: x.getEnumType(Rk)
        }
    ]), J8p = x.makeMessageType("aiserver.v1.SetFullSelfDrivingConfigResponse", ()=>[
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
            T: x.getEnumType(Rk)
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
    ]), nVr = x.makeMessageType("aiserver.v1.GetFullSelfDrivingConfigRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), KFa = x.makeMessageType("aiserver.v1.GetFullSelfDrivingConfigResponse", ()=>[
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
            T: x.getEnumType(Rk)
        },
        {
            no: 4,
            name: "auto_started",
            kind: "scalar",
            T: 8
        }
    ]), iVr = x.makeMessageType("aiserver.v1.ListFullSelfDrivingRunsRequest", ()=>[
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
    ]), e7p = x.makeMessageType("aiserver.v1.FullSelfDrivingRunLiveStatus", ()=>[
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
            T: Js
        }
    ]), t7p = x.makeMessageType("aiserver.v1.FullSelfDrivingRun", ()=>[
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
            T: Js
        },
        {
            no: 4,
            name: "first_finished_at",
            kind: "message",
            T: Js
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
            T: e7p,
            opt: !0
        }
    ]), n7p = x.makeMessageType("aiserver.v1.ListFullSelfDrivingRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: t7p,
            repeated: !0
        }
    ]), rVr = x.makeMessageType("aiserver.v1.ListFullSelfDrivingFindingsRequest", ()=>[
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
    ]), tot = x.makeMessageType("aiserver.v1.FullSelfDrivingFinding", ()=>[
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
            T: Js
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
            T: qd
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
    ]), i7p = x.makeMessageType("aiserver.v1.ListFullSelfDrivingFindingsResponse", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: tot,
            repeated: !0
        }
    ]), c1i = x.makeMessageType("aiserver.v1.FullSelfDrivingOutputInput", ()=>[
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
            T: qd
        }
    ]), YFa = x.makeMessageType("aiserver.v1.RecordFullSelfDrivingOutputsRequest", ()=>[
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
            T: c1i,
            repeated: !0
        }
    ]), r7p = x.makeMessageType("aiserver.v1.RecordFullSelfDrivingOutputsResponse", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: tot,
            repeated: !0
        }
    ]), u1i = x.makeMessageType("aiserver.v1.UpdateFullSelfDrivingOutputRequest", ()=>[
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
            T: qd
        }
    ]), s7p = x.makeMessageType("aiserver.v1.UpdateFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: tot
        }
    ]), XFa = x.makeMessageType("aiserver.v1.SupersedeFullSelfDrivingOutputRequest", ()=>[
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
    ]), o7p = x.makeMessageType("aiserver.v1.SupersedeFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: tot
        }
    ]), sVr = x.makeMessageType("aiserver.v1.DismissFullSelfDrivingOutputRequest", ()=>[
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
    ]), a7p = x.makeMessageType("aiserver.v1.DismissFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: tot
        }
    ]), ZFa = x.makeMessageType("aiserver.v1.UndoFullSelfDrivingOutputRequest", ()=>[
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
    ]), l7p = x.makeMessageType("aiserver.v1.UndoFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: tot
        }
    ]), QFa = x.makeMessageType("aiserver.v1.GetFullSelfDrivingRunSuggestionRequest", ()=>[
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
    ]), c7p = x.makeMessageType("aiserver.v1.GetFullSelfDrivingRunSuggestionResponse", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: x.getEnumType(l1i)
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
    ]), JFa = x.makeMessageType("aiserver.v1.ApplyFullSelfDrivingSuggestionRequest", ()=>[
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
    ]), u7p = x.makeMessageType("aiserver.v1.ApplyFullSelfDrivingSuggestionResponse", ()=>[
        {
            no: 1,
            name: "new_pr_head_sha",
            kind: "scalar",
            T: 9
        }
    ]), e6a = x.makeMessageType("aiserver.v1.UpdateFullSelfDrivingFindingStatusRequest", ()=>[
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
    ]), d7p = x.makeMessageType("aiserver.v1.UpdateFullSelfDrivingFindingStatusResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: tot
        }
    ]), t6a = x.makeMessageType("aiserver.v1.RunFullSelfDrivingWorkflowSuggestionRequest", ()=>[
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
    ]), h7p = x.makeMessageType("aiserver.v1.RunFullSelfDrivingWorkflowSuggestionResponse", ()=>[
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
    ]), n6a = x.makeMessageType("aiserver.v1.BuildFullSelfDrivingTriageContextRequest", ()=>[
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
            T: x.getEnumType(Rk)
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
    ]), p7p = x.makeMessageType("aiserver.v1.BuildFullSelfDrivingTriageContextResponse", ()=>[
        {
            no: 1,
            name: "triage_json",
            kind: "scalar",
            T: 9
        }
    ]), oVr = x.makeMessageType("aiserver.v1.PrepareLocalFullSelfDrivingRunRequest", ()=>[
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
            T: x.getEnumType(Rk)
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
    ]), m7p = x.makeMessageType("aiserver.v1.PrepareLocalFullSelfDrivingRunResponse", ()=>[
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
            T: x.getEnumType(Rk)
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
            T: z4t,
            repeated: !0
        }
    ]), aVr = x.makeMessageType("aiserver.v1.RunFullSelfDrivingCloudCommandRequest", ()=>[
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
            T: x.getEnumType(Rk)
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
    ]), g7p = x.makeMessageType("aiserver.v1.RunFullSelfDrivingCloudCommandResponse", ()=>[
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
            T: x.getEnumType(tTn)
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(Rk)
        }
    ]), f7p = x.makeMessageType("aiserver.v1.EnrollExternalFullSelfDrivingRunRequest", ()=>[
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
            T: x.getEnumType(Rk)
        },
        {
            no: 4,
            name: "enable_config",
            kind: "scalar",
            T: 8
        }
    ]), v7p = x.makeMessageType("aiserver.v1.EnrollExternalFullSelfDrivingRunResponse", ()=>[
        {
            no: 1,
            name: "enrolled",
            kind: "scalar",
            T: 8
        }
    ]), d1i = x.makeMessageType("aiserver.v1.FullSelfDrivingPrScopedSuggestion", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: tot
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
    ]), i6a = x.makeMessageType("aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionRequest", ()=>[
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
            T: c1i
        }
    ]), _7p = x.makeMessageType("aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "message",
            T: d1i
        }
    ]), r6a = x.makeMessageType("aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsRequest", ()=>[
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
    ]), b7p = x.makeMessageType("aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: d1i,
            repeated: !0
        }
    ]), y7p = x.makeMessageType("aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusRequest", ()=>[
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
    ]), S7p = x.makeMessageType("aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "message",
            T: d1i
        }
    ]), k7p = x.makeMessageType("aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionRequest", ()=>[
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
    ]), w7p = x.makeMessageType("aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionResponse", ()=>[
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
            T: d1i
        }
    ]), s6a = x.makeMessageType("aiserver.v1.FullSelfDrivingAutoApplyConfig", ()=>[
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
            T: Js
        },
        {
            no: 7,
            name: "producer",
            kind: "scalar",
            T: 9
        }
    ]), C7p = x.makeMessageType("aiserver.v1.RecordFullSelfDrivingAutoApplyConfigRequest", ()=>[
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
    ]), T7p = x.makeMessageType("aiserver.v1.RecordFullSelfDrivingAutoApplyConfigResponse", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: s6a
        }
    ]), E7p = x.makeMessageType("aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigRequest", ()=>[
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
    ]), I7p = x.makeMessageType("aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigResponse", ()=>[
        {
            no: 1,
            name: "deleted",
            kind: "scalar",
            T: 8
        }
    ]), x7p = x.makeMessageType("aiserver.v1.ListFullSelfDrivingAutoApplyConfigsRequest", ()=>[
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
    ]), A7p = x.makeMessageType("aiserver.v1.ListFullSelfDrivingAutoApplyConfigsResponse", ()=>[
        {
            no: 1,
            name: "configs",
            kind: "message",
            T: s6a,
            repeated: !0
        }
    ]);

}
