import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var kGs, z7t, wGs, CGs, TGs, Ise, fDn, EGs, zTu, vDn;
export { CGs, EGs, Ise, TGs, fDn, kGs, vDn, wGs, z7t, zTu };
var __wakaru_K7t_initialized = false;
export function K7t() {
if (__wakaru_K7t_initialized) return;
__wakaru_K7t_initialized = true;
"use strict";
x(), bi(), kGs = k.makeMessageType("agent.v1.AskQuestionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: z7t
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ise
        }
    ]), z7t = k.makeMessageType("agent.v1.AskQuestionArgs", ()=>[
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
            T: wGs,
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
    ]), wGs = k.makeMessageType("agent.v1.AskQuestionArgs.Question", ()=>[
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
            T: CGs,
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
}), CGs = k.makeMessageType("agent.v1.AskQuestionArgs.Option", ()=>[
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
}), TGs = k.makeMessageType("agent.v1.AskQuestionAsync", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        }
    ]), Ise = k.makeMessageType("agent.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fDn,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: zTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: vDn,
            oneof: "result"
        },
        {
            no: 4,
            name: "async",
            kind: "message",
            T: TGs,
            oneof: "result"
        }
    ]), fDn = k.makeMessageType("agent.v1.AskQuestionSuccess", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: EGs,
            repeated: !0
        }
    ]), EGs = k.makeMessageType("agent.v1.AskQuestionSuccess.Answer", ()=>[
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
}), zTu = k.makeMessageType("agent.v1.AskQuestionError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), vDn = k.makeMessageType("agent.v1.AskQuestionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
