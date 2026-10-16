import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { U6e, zue } from "./sandbox_pb.js";
import { x } from "./tslib.es6.js";
var jUt, xbt, Lfu, qUt, Nfu, eIn, Ofu, Ffu, E3i, tIn;
export { E3i, Ffu, Lfu, Nfu, Ofu, eIn, jUt, qUt, tIn, xbt };
var __wakaru_G6e_initialized = false;
export function G6e() {
if (__wakaru_G6e_initialized) return;
__wakaru_G6e_initialized = true;
"use strict";
x(), bi(), U6e(), jUt = k.makeMessageType("agent.v1.LsArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ignore",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
        },
        {
            no: 5,
            name: "timeout_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), xbt = k.makeMessageType("agent.v1.LsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Lfu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: eIn,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Ofu,
            oneof: "result"
        },
        {
            no: 4,
            name: "timeout",
            kind: "message",
            T: Ffu,
            oneof: "result"
        }
    ]), Lfu = k.makeMessageType("agent.v1.LsSuccess", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: qUt
        }
    ]), qUt = k.makeMessageType("agent.v1.LsDirectoryTreeNode", ()=>[
        {
            no: 1,
            name: "abs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "children_dirs",
            kind: "message",
            T: qUt,
            repeated: !0
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: Nfu,
            repeated: !0
        },
        {
            no: 4,
            name: "children_were_processed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "full_subtree_extension_counts",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 5
            }
        },
        {
            no: 6,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), Nfu = k.makeMessageType("agent.v1.LsDirectoryTreeNode.File", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "terminal_metadata",
            kind: "message",
            T: E3i,
            opt: !0
        }
    ], {
    localName: "LsDirectoryTreeNode_File"
}), eIn = k.makeMessageType("agent.v1.LsError", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Ofu = k.makeMessageType("agent.v1.LsRejected", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Ffu = k.makeMessageType("agent.v1.LsTimeout", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: qUt
        }
    ]), E3i = k.makeMessageType("agent.v1.TerminalMetadata", ()=>[
        {
            no: 1,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "last_commands",
            kind: "message",
            T: tIn,
            repeated: !0
        },
        {
            no: 3,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "current_command",
            kind: "message",
            T: tIn,
            opt: !0
        }
    ]), tIn = k.makeMessageType("agent.v1.TerminalMetadata.Command", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "timestamp_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ], {
    localName: "TerminalMetadata_Command"
});

}
