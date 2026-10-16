import { Fg, RN } from "./cursor_rules_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Ree, Cee, Iee, Aee, Mee, Pee;
export { Aee, Cee, Iee, Mee, Pee, Ree };
var __wakaru_Aqe_initialized = false;
export function Aqe() {
if (__wakaru_Aqe_initialized) return;
__wakaru_Aqe_initialized = true;
"use strict";
h(), F(), RN(), Ree = c.makeMessageType("agent.v1.ReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Cee
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Iee
        }
    ]), Cee = c.makeMessageType("agent.v1.ReadToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "include_line_numbers",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Iee = c.makeMessageType("agent.v1.ReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Mee,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Pee,
            oneof: "result"
        }
    ]), Aee = c.makeMessageType("agent.v1.ReadRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "end_line",
            kind: "scalar",
            T: 13
        }
    ]), Mee = c.makeMessageType("agent.v1.ReadToolSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
            oneof: "output"
        },
        {
            no: 6,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 9,
            name: "data_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 10,
            name: "content_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 2,
            name: "is_empty",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "exceeded_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "file_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "read_range",
            kind: "message",
            T: Aee,
            opt: !0
        },
        {
            no: 11,
            name: "include_line_numbers",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "related_cursor_rule_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 13,
            name: "related_cursor_rules",
            kind: "message",
            T: Fg,
            repeated: !0
        }
    ]), Pee = c.makeMessageType("agent.v1.ReadToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
