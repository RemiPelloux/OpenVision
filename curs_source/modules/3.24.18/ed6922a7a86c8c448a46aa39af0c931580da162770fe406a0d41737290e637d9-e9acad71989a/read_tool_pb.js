import { Cee, _4e } from "./cursor_rules_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var IMe, JRn, M0e, iTu, h4i, H7t;
export { H7t, IMe, JRn, M0e, h4i, iTu };
var __wakaru_W7t_initialized = false;
export function W7t() {
if (__wakaru_W7t_initialized) return;
__wakaru_W7t_initialized = true;
"use strict";
x(), bi(), _4e(), IMe = k.makeMessageType("agent.v1.ReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: JRn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: M0e
        }
    ]), JRn = k.makeMessageType("agent.v1.ReadToolArgs", ()=>[
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
    ]), M0e = k.makeMessageType("agent.v1.ReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: h4i,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: H7t,
            oneof: "result"
        }
    ]), iTu = k.makeMessageType("agent.v1.ReadRange", ()=>[
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
    ]), h4i = k.makeMessageType("agent.v1.ReadToolSuccess", ()=>[
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
            T: iTu,
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
            T: Cee,
            repeated: !0
        }
    ]), H7t = k.makeMessageType("agent.v1.ReadToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
