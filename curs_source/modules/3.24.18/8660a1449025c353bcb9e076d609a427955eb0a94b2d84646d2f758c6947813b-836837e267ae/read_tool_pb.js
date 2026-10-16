import { Wde, Xet } from "./cursor_rules_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var IAe, pmn, qke, $fd, qti, B4t;
export { $fd, B4t, IAe, pmn, qke, qti };
var __wakaru_X_t_initialized = false;
export function X_t() {
if (__wakaru_X_t_initialized) return;
__wakaru_X_t_initialized = true;
"use strict";
E(), hr(), Xet(), IAe = x.makeMessageType("agent.v1.ReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: pmn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: qke
        }
    ]), pmn = x.makeMessageType("agent.v1.ReadToolArgs", ()=>[
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
    ]), qke = x.makeMessageType("agent.v1.ReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: qti,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: B4t,
            oneof: "result"
        }
    ]), $fd = x.makeMessageType("agent.v1.ReadRange", ()=>[
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
    ]), qti = x.makeMessageType("agent.v1.ReadToolSuccess", ()=>[
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
            T: $fd,
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
            T: Wde,
            repeated: !0
        }
    ]), B4t = x.makeMessageType("agent.v1.ReadToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
