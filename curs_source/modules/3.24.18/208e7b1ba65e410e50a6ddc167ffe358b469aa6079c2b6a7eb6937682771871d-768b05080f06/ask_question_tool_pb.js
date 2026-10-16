import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Lte, tw, Ute, xte, Fte, gu, Wte, Bte, Gte, Vte;
export { Bte, Fte, Gte, Lte, Ute, Vte, Wte, gu, tw, xte };
var __wakaru_$te_initialized = false;
export function $te() {
if (__wakaru_$te_initialized) return;
__wakaru_$te_initialized = true;
"use strict";
h(), F(), Lte = c.makeMessageType("agent.v1.AskQuestionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: tw
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gu
        }
    ]), tw = c.makeMessageType("agent.v1.AskQuestionArgs", ()=>[
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
            T: Ute,
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
    ]), Ute = c.makeMessageType("agent.v1.AskQuestionArgs.Question", ()=>[
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
            T: xte,
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
}), xte = c.makeMessageType("agent.v1.AskQuestionArgs.Option", ()=>[
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
}), Fte = c.makeMessageType("agent.v1.AskQuestionAsync", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        }
    ]), gu = c.makeMessageType("agent.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Wte,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Gte,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Vte,
            oneof: "result"
        },
        {
            no: 4,
            name: "async",
            kind: "message",
            T: Fte,
            oneof: "result"
        }
    ]), Wte = c.makeMessageType("agent.v1.AskQuestionSuccess", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: Bte,
            repeated: !0
        }
    ]), Bte = c.makeMessageType("agent.v1.AskQuestionSuccess.Answer", ()=>[
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
}), Gte = c.makeMessageType("agent.v1.AskQuestionError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), Vte = c.makeMessageType("agent.v1.AskQuestionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
