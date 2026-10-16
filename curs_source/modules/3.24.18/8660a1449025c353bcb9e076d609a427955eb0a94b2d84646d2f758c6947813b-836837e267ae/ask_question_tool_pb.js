import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var o5o, Smn, a5o, l5o, c5o, Nve, oni, u5o, Rvd, ani;
export { Nve, Rvd, Smn, a5o, ani, c5o, l5o, o5o, oni, u5o };
var __wakaru_kmn_initialized = false;
export function kmn() {
if (__wakaru_kmn_initialized) return;
__wakaru_kmn_initialized = true;
"use strict";
E(), hr(), o5o = x.makeMessageType("agent.v1.AskQuestionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Smn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Nve
        }
    ]), Smn = x.makeMessageType("agent.v1.AskQuestionArgs", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "questions",
            kind: "message",
            T: a5o,
            repeated: !0
        },
        {
            no: 5,
            name: "run_async",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "async_original_tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), a5o = x.makeMessageType("agent.v1.AskQuestionArgs.Question", ()=>[
        {
            no: 1,
            name: "id",
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
            name: "options",
            kind: "message",
            T: l5o,
            repeated: !0
        },
        {
            no: 4,
            name: "allow_multiple",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "AskQuestionArgs_Question"
}), l5o = x.makeMessageType("agent.v1.AskQuestionArgs.Option", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AskQuestionArgs_Option"
}), c5o = x.makeMessageType("agent.v1.AskQuestionAsync", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        }
    ]), Nve = x.makeMessageType("agent.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: oni,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Rvd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ani,
            oneof: "result"
        },
        {
            no: 4,
            name: "async",
            kind: "message",
            T: c5o,
            oneof: "result"
        }
    ]), oni = x.makeMessageType("agent.v1.AskQuestionSuccess", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: u5o,
            repeated: !0
        }
    ]), u5o = x.makeMessageType("agent.v1.AskQuestionSuccess.Answer", ()=>[
        {
            no: 1,
            name: "question_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "selected_option_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "freeform_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AskQuestionSuccess_Answer"
}), Rvd = x.makeMessageType("agent.v1.AskQuestionError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), ani = x.makeMessageType("agent.v1.AskQuestionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
