import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { hu, kD, xf, y5 } from "./utils_pb.js";
var Pvd, Lvd, Nvd, ano, KSt, cno, RHi, Ovd, Fvd, Bvd, Uvd, $vd, Hvd, Wvd, Gvd, Vvd, jvd, qvd;
export { $vd, Bvd, Fvd, Gvd, Hvd, KSt, Lvd, Nvd, Ovd, Pvd, RHi, Uvd, Vvd, Wvd, ano, cno, jvd, qvd };
var __wakaru_wHt_initialized = false;
export function wHt() {
if (__wakaru_wHt_initialized) return;
__wakaru_wHt_initialized = true;
"use strict";
x(), bi(), hu(), Pvd = k.makeEnum("aiserver.v1.BugbotDeeplinkEventKind", [
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
]), Lvd = k.makeEnum("aiserver.v1.BugbotFeedbackReaction", [
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
]), Nvd = k.makeEnum("aiserver.v1.BugBotRunStatus", [
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
]), ano = k.makeMessageType("aiserver.v1.BugLocation", ()=>[
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
    ]), KSt = k.makeMessageType("aiserver.v1.BugReport", ()=>[
        {
            no: 1,
            name: "locations",
            kind: "message",
            T: ano,
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
    ]), cno = k.makeMessageType("aiserver.v1.BugReports", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: KSt,
            repeated: !0
        }
    ]), RHi = k.makeMessageType("aiserver.v1.StreamBugBotRequest", ()=>[
        {
            no: 1,
            name: "git_diff",
            kind: "message",
            T: y5
        },
        {
            no: 13,
            name: "context_files",
            kind: "message",
            T: kD,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: Ovd,
            opt: !0
        },
        {
            no: 14,
            name: "deep_review",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Ovd = k.makeMessageType("aiserver.v1.StreamBugBotRequest.Range", ()=>[
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
}), Fvd = k.makeMessageType("aiserver.v1.LogDeeplinkEventRequest", ()=>[
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
            T: k.getEnumType(Pvd)
        }
    ]), Bvd = k.makeMessageType("aiserver.v1.LogDeeplinkEventResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), Uvd = k.makeMessageType("aiserver.v1.GetEncryptedBugDataRequest", ()=>[
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
    ]), $vd = k.makeMessageType("aiserver.v1.GetEncryptedBugDataResponse", ()=>[
        {
            no: 1,
            name: "bug_report",
            kind: "message",
            T: KSt
        }
    ]), Hvd = k.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleRequest", ()=>[
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
    ]), Wvd = k.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleResponse", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: KSt,
            repeated: !0
        }
    ]), Gvd = k.makeMessageType("aiserver.v1.AddBugbotFeedbackRequest", ()=>[
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
            T: k.getEnumType(Lvd)
        },
        {
            no: 3,
            name: "feedback",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Vvd = k.makeMessageType("aiserver.v1.AddBugbotFeedbackResponse", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        }
    ]), jvd = k.makeMessageType("aiserver.v1.GetBugBotRunEtaRequest", ()=>[
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
    ]), qvd = k.makeMessageType("aiserver.v1.GetBugBotRunEtaResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Nvd)
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
