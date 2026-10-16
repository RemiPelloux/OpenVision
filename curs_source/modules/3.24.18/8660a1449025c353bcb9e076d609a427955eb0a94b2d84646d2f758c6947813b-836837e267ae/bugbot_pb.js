import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hu, Mg, rL, xj } from "./utils_pb.js";
var Ohd, Fhd, Bhd, _Do, m4t, bDo, Obr, Uhd, jhd, $hd, yDo, Hhd, SDo, Whd, Ghd, qhd, zhd, Vhd;
export { $hd, Bhd, Fhd, Ghd, Hhd, Obr, Ohd, SDo, Uhd, Vhd, Whd, _Do, bDo, jhd, m4t, qhd, yDo, zhd };
var __wakaru_g4t_initialized = false;
export function g4t() {
if (__wakaru_g4t_initialized) return;
__wakaru_g4t_initialized = true;
"use strict";
E(), hr(), Hu(), Ohd = x.makeEnum("aiserver.v1.BugbotDeeplinkEventKind", [
    {
        no: 0,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_CLICKED",
        localName: "CLICKED"
    },
    {
        no: 2,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_DIALOG_SHOWN",
        localName: "HANDLED_DIALOG_SHOWN"
    },
    {
        no: 3,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_CHAT_CREATED",
        localName: "HANDLED_CHAT_CREATED"
    },
    {
        no: 4,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_ERROR",
        localName: "ERROR"
    },
    {
        no: 5,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_FIX_IN_WEB",
        localName: "HANDLED_FIX_IN_WEB"
    }
]), Fhd = x.makeEnum("aiserver.v1.BugbotFeedbackReaction", [
    {
        no: 0,
        name: "BUGBOT_FEEDBACK_REACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGBOT_FEEDBACK_REACTION_THUMBS_UP",
        localName: "THUMBS_UP"
    },
    {
        no: 2,
        name: "BUGBOT_FEEDBACK_REACTION_THUMBS_DOWN",
        localName: "THUMBS_DOWN"
    }
]), Bhd = x.makeEnum("aiserver.v1.BugBotRunStatus", [
    {
        no: 0,
        name: "BUG_BOT_RUN_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUG_BOT_RUN_STATUS_NO_RUN",
        localName: "NO_RUN"
    },
    {
        no: 2,
        name: "BUG_BOT_RUN_STATUS_IN_PROGRESS",
        localName: "IN_PROGRESS"
    },
    {
        no: 3,
        name: "BUG_BOT_RUN_STATUS_COMPLETED",
        localName: "COMPLETED"
    }
]), _Do = x.makeMessageType("aiserver.v1.BugLocation", ()=>[
        {
            no: 1,
            name: "file",
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
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "code_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), m4t = x.makeMessageType("aiserver.v1.BugReport", ()=>[
        {
            no: 1,
            name: "locations",
            kind: "message",
            T: _Do,
            repeated: !0
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "confidence",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 5,
            name: "category",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "rationale",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "triggered_by_rule_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "model_confidence",
            kind: "scalar",
            T: 2,
            opt: !0
        }
    ]), bDo = x.makeMessageType("aiserver.v1.BugReports", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: m4t,
            repeated: !0
        }
    ]), Obr = x.makeMessageType("aiserver.v1.StreamBugBotRequest", ()=>[
        {
            no: 1,
            name: "git_diff",
            kind: "message",
            T: xj
        },
        {
            no: 13,
            name: "context_files",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
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
            name: "bug_detection_guidelines",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "iterations",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "unified_context_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "in_background_subsidized",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "price_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "has_telemetry",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "constrain_to_file",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "constrain_to_range",
            kind: "message",
            T: Uhd,
            opt: !0
        },
        {
            no: 14,
            name: "deep_review",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Uhd = x.makeMessageType("aiserver.v1.StreamBugBotRequest.Range", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "StreamBugBotRequest_Range"
}), jhd = x.makeMessageType("aiserver.v1.LogDeeplinkEventRequest", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "bug_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "comment_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "event",
            kind: "enum",
            T: x.getEnumType(Ohd)
        }
    ]), $hd = x.makeMessageType("aiserver.v1.LogDeeplinkEventResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), yDo = x.makeMessageType("aiserver.v1.GetEncryptedBugDataRequest", ()=>[
        {
            no: 1,
            name: "redis_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "encryption_key",
            kind: "scalar",
            T: 9
        }
    ]), Hhd = x.makeMessageType("aiserver.v1.GetEncryptedBugDataResponse", ()=>[
        {
            no: 1,
            name: "bug_report",
            kind: "message",
            T: m4t
        }
    ]), SDo = x.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleRequest", ()=>[
        {
            no: 1,
            name: "redis_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "encryption_key",
            kind: "scalar",
            T: 9
        }
    ]), Whd = x.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleResponse", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: m4t,
            repeated: !0
        }
    ]), Ghd = x.makeMessageType("aiserver.v1.AddBugbotFeedbackRequest", ()=>[
        {
            no: 1,
            name: "comment_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "reaction",
            kind: "enum",
            T: x.getEnumType(Fhd)
        },
        {
            no: 3,
            name: "feedback",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), qhd = x.makeMessageType("aiserver.v1.AddBugbotFeedbackResponse", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        }
    ]), zhd = x.makeMessageType("aiserver.v1.GetBugBotRunEtaRequest", ()=>[
        {
            no: 1,
            name: "repository_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repository_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pr_number",
            kind: "scalar",
            T: 5
        }
    ]), Vhd = x.makeMessageType("aiserver.v1.GetBugBotRunEtaResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(Bhd)
        },
        {
            no: 2,
            name: "estimated_completion_time_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]);

}
