import { EA, Iio } from "./aiserver_pb.js";
import { KSt, wHt } from "./bugbot_pb.js";
import { cWi, lWi, mro } from "./conversations_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { ffe, hu, y5 } from "./utils_pb.js";
var gro, qId, fro, zId, KId, YId, XId, ZId, QId, vro, JId, _ro, bro, eAd, tAd, nAd, iAd, rAd, sAd, oAd, aAd, cAd, lAd, uAd, dAd, hAd, pAd, mAd, gAd, fAd, vAd, _Ad, bAd, yAd, SAd;
export { JId, KId, QId, SAd, XId, YId, ZId, _Ad, _ro, aAd, bAd, bro, cAd, dAd, eAd, fAd, fro, gAd, gro, hAd, iAd, lAd, mAd, nAd, oAd, pAd, qId, rAd, sAd, tAd, uAd, vAd, vro, yAd, zId };
var __wakaru_kAd_initialized = false;
export function kAd() {
if (__wakaru_kAd_initialized) return;
__wakaru_kAd_initialized = true;
"use strict";
x(), bi(), hu(), wHt(), EA(), mro(), gro = k.makeEnum("aiserver.v1.CodeTourDoneReason", [
    {
        no: 0,
        name: "CODE_TOUR_DONE_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CODE_TOUR_DONE_REASON_OK",
        localName: "OK"
    },
    {
        no: 2,
        name: "CODE_TOUR_DONE_REASON_INVALID_REQUEST",
        localName: "INVALID_REQUEST"
    },
    {
        no: 3,
        name: "CODE_TOUR_DONE_REASON_DIFF_TOO_LONG",
        localName: "DIFF_TOO_LONG"
    },
    {
        no: 4,
        name: "CODE_TOUR_DONE_REASON_ERROR",
        localName: "ERROR"
    },
    {
        no: 5,
        name: "CODE_TOUR_DONE_REASON_CANCELLED",
        localName: "CANCELLED"
    }
]), qId = k.makeMessageType("aiserver.v1.BugConfigRequest", ()=>[
        {
            no: 1,
            name: "telem_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "bug_bot_dismissed_notification_last_10_times_unix_ms",
            kind: "scalar",
            T: 1,
            repeated: !0
        },
        {
            no: 3,
            name: "bug_bot_viewed_notification_last_10_times_unix_ms",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ]), fro = k.makeMessageType("aiserver.v1.BugConfigResponse", ()=>[
        {
            no: 1,
            name: "linter_strategy_v1",
            kind: "message",
            T: zId
        },
        {
            no: 2,
            name: "bug_bot_v1",
            kind: "message",
            T: YId
        },
        {
            no: 3,
            name: "linter_strategy_v2",
            kind: "message",
            T: KId
        }
    ]), zId = k.makeMessageType("aiserver.v1.BugConfigResponse.LinterStrategyV1", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "try_trigger_on_save",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "wait_between_triggers_ms",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "BugConfigResponse_LinterStrategyV1"
}), KId = k.makeMessageType("aiserver.v1.BugConfigResponse.LinterStrategyV2", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "wait_between_triggers_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "debounce_triggers_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "keep_lines_around_chunk",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "prevent_triggering_for_files_with_this_many_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "prevent_triggering_when_lints",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "BugConfigResponse_LinterStrategyV2"
}), YId = k.makeMessageType("aiserver.v1.BugConfigResponse.BugBotV1", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "is_subsidized",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "background_call_frequency_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "kill_switch",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "show_intrusive_notification_only_if_last_time_was_more_than_ms_ago",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "background_diff_absolute_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "background_diff_min_min_token_threshold",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "background_diff_min_max_token_threshold",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "background_diff_last_commit_less_than_this_many_ms_ago",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 15,
            name: "background_unified_context_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 16,
            name: "background_diff_include_uncommitted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "default_diff_context_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "diff_absolute_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "custom_instructions_max_char_length",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "default_fallback_iterations",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "threshold_for_expensive_run_modal_cents",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 17,
            name: "cheap_model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "cheap_absolute_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 19,
            name: "expensive_absolute_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "BugConfigResponse_BugBotV1"
}), XId = k.makeMessageType("aiserver.v1.StreamBugBotLinterRequest", ()=>[
        {
            no: 1,
            name: "git_diff",
            kind: "message",
            T: y5
        },
        {
            no: 2,
            name: "active_file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cursor_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "telem_enabled",
            kind: "scalar",
            T: 8
        }
    ]), ZId = k.makeMessageType("aiserver.v1.StreamBugBotLinterResponse", ()=>[
        {
            no: 1,
            name: "bugs",
            kind: "message",
            T: KSt,
            repeated: !0
        }
    ]), QId = k.makeMessageType("aiserver.v1.ChunkDiff", ()=>[
        {
            no: 1,
            name: "diff_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "new_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "old_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "new_lines",
            kind: "scalar",
            T: 5
        }
    ]), vro = k.makeMessageType("aiserver.v1.ReviewRequestV2", ()=>[
        {
            no: 1,
            name: "file_diffs",
            kind: "message",
            T: JId,
            repeated: !0
        },
        {
            no: 2,
            name: "linter_rules",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "also_find_hard_bugs",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "save_request_as",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), JId = k.makeMessageType("aiserver.v1.ReviewRequestV2.FileDiff", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ffe
        },
        {
            no: 2,
            name: "chunk_diffs",
            kind: "message",
            T: QId,
            repeated: !0
        }
    ], {
    localName: "ReviewRequestV2_FileDiff"
}), _ro = k.makeMessageType("aiserver.v1.ReviewBugV2", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "severity",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "tldr",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "full_chunk_start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "full_chunk_end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "full_chunk_total_lines",
            kind: "scalar",
            T: 5
        }
    ]), bro = k.makeMessageType("aiserver.v1.ReviewResponseV2", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: _ro
        }
    ]), eAd = k.makeMessageType("aiserver.v1.ReviewChatRequestV2", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ffe
        },
        {
            no: 2,
            name: "bug",
            kind: "message",
            T: _ro
        },
        {
            no: 3,
            name: "linter_rules",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "messages",
            kind: "message",
            T: Iio,
            repeated: !0
        }
    ]), tAd = k.makeMessageType("aiserver.v1.ReviewChatResponseV2", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), nAd = k.makeMessageType("aiserver.v1.StreamCodeTourRequest", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: rAd
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: y5
        },
        {
            no: 3,
            name: "user_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "idempotency_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "max_steps",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "commit_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "system_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "diff_references_only",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "prompt_construction_mode",
            kind: "enum",
            T: k.getEnumType(iAd),
            opt: !0
        },
        {
            no: 11,
            name: "raw_user_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "background_composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "reviewer_intent",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "diff_scope",
            kind: "message",
            T: sAd,
            opt: !0
        },
        {
            no: 15,
            name: "section_regeneration",
            kind: "message",
            T: aAd,
            opt: !0
        },
        {
            no: 16,
            name: "tour_type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iAd = k.makeEnum("aiserver.v1.StreamCodeTourRequest.PromptConstructionMode", [
    {
        no: 0,
        name: "PROMPT_CONSTRUCTION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PROMPT_CONSTRUCTION_MODE_SERVER_COMPACT",
        localName: "SERVER_COMPACT"
    },
    {
        no: 2,
        name: "PROMPT_CONSTRUCTION_MODE_CLIENT_RAW",
        localName: "CLIENT_RAW"
    }
]), rAd = k.makeMessageType("aiserver.v1.StreamCodeTourRequest.PullRequestReference", ()=>[
        {
            no: 1,
            name: "provider",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repository",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pull_request_number",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamCodeTourRequest_PullRequestReference"
}), sAd = k.makeMessageType("aiserver.v1.StreamCodeTourRequest.DiffScope", ()=>[
        {
            no: 1,
            name: "base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "commit_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "depth",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "stack",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "stack_heads",
            kind: "message",
            T: oAd,
            repeated: !0
        },
        {
            no: 8,
            name: "stack_tip",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ], {
    localName: "StreamCodeTourRequest_DiffScope"
}), oAd = k.makeMessageType("aiserver.v1.StreamCodeTourRequest.StackMemberHead", ()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamCodeTourRequest_StackMemberHead"
}), aAd = k.makeMessageType("aiserver.v1.StreamCodeTourRequest.SectionRegeneration", ()=>[
        {
            no: 1,
            name: "heading_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "heading_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamCodeTourRequest_SectionRegeneration"
}), cAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "message",
            T: lAd,
            oneof: "event"
        },
        {
            no: 2,
            name: "done",
            kind: "message",
            T: dAd,
            oneof: "event"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: hAd,
            oneof: "event"
        },
        {
            no: 7,
            name: "markdown_delta",
            kind: "message",
            T: pAd,
            oneof: "event"
        },
        {
            no: 8,
            name: "thinking_delta",
            kind: "message",
            T: mAd,
            oneof: "event"
        },
        {
            no: 4,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "blame",
            kind: "message",
            T: gAd,
            opt: !0
        }
    ]), lAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse.StatusEvent", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(uAd)
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "structured_inputs_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "depth_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "stack_scope_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "stack_heads_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "tour_type_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "StreamCodeTourResponse_StatusEvent"
}), uAd = k.makeEnum("aiserver.v1.StreamCodeTourResponse.StatusEvent.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_STARTED",
        localName: "STARTED"
    },
    {
        no: 2,
        name: "STATUS_PROCESSING",
        localName: "PROCESSING"
    }
]), dAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse.DoneEvent", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(gro)
        },
        {
            no: 2,
            name: "regenerated_tour_markdown",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "base_tour_markdown_sha256",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamCodeTourResponse_DoneEvent"
}), hAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse.ErrorEvent", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(gro)
        }
    ], {
    localName: "StreamCodeTourResponse_ErrorEvent"
}), pAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse.MarkdownDeltaEvent", ()=>[
        {
            no: 1,
            name: "markdown_delta",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamCodeTourResponse_MarkdownDeltaEvent"
}), mAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse.ThinkingDeltaEvent", ()=>[
        {
            no: 1,
            name: "thinking_delta",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamCodeTourResponse_ThinkingDeltaEvent"
}), gAd = k.makeMessageType("aiserver.v1.StreamCodeTourResponse.Blame", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: cWi,
            repeated: !0
        },
        {
            no: 2,
            name: "conversations",
            kind: "message",
            T: lWi,
            repeated: !0
        }
    ], {
    localName: "StreamCodeTourResponse_Blame"
}), fAd = k.makeMessageType("aiserver.v1.StreamBugFindingResponse", ()=>[
        {
            no: 1,
            name: "bugs",
            kind: "message",
            T: vAd,
            repeated: !0
        }
    ]), vAd = k.makeMessageType("aiserver.v1.StreamBugFindingResponse.Bug", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "code_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "severity",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "confidence",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamBugFindingResponse_Bug"
}), _Ad = k.makeMessageType("aiserver.v1.StreamBugFindingRequest", ()=>[
        {
            no: 1,
            name: "file_diffs",
            kind: "message",
            T: bAd,
            repeated: !0
        }
    ]), bAd = k.makeMessageType("aiserver.v1.StreamBugFindingRequest.FileDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "message",
            T: SAd,
            repeated: !0
        },
        {
            no: 3,
            name: "hunks",
            kind: "message",
            T: yAd,
            repeated: !0
        },
        {
            no: 4,
            name: "old_relative_workspace_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "not_truncated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamBugFindingRequest_FileDiff"
}), yAd = k.makeMessageType("aiserver.v1.StreamBugFindingRequest.FileDiff.Hunk", ()=>[
        {
            no: 1,
            name: "old_start_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "new_start_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "old_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "StreamBugFindingRequest_FileDiff_Hunk"
}), SAd = k.makeMessageType("aiserver.v1.StreamBugFindingRequest.FileDiff.Line", ()=>[
        {
            no: 1,
            name: "one_indexed_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "line",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamBugFindingRequest_FileDiff_Line"
});

}
