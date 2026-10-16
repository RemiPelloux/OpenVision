import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { Ca, Ng } from "./sandbox_pb.js";
import { h } from "./tslib.es6.js";
var $z, jz, Hz, mu, qz, Kz, zz, Yz, KP, zP;
export { $z, Hz, KP, Kz, Yz, jz, mu, qz, zP, zz };
var __wakaru_Lg_initialized = false;
export function Lg() {
if (__wakaru_Lg_initialized) return;
__wakaru_Lg_initialized = true;
"use strict";
h(), F(), Ng(), $z = c.makeMessageType("agent.v1.LsArgs", ()=>[
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
            T: Ca,
            opt: !0
        },
        {
            no: 5,
            name: "timeout_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), jz = c.makeMessageType("agent.v1.LsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Hz,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Kz,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: zz,
            oneof: "result"
        },
        {
            no: 4,
            name: "timeout",
            kind: "message",
            T: Yz,
            oneof: "result"
        }
    ]), Hz = c.makeMessageType("agent.v1.LsSuccess", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: mu
        }
    ]), mu = c.makeMessageType("agent.v1.LsDirectoryTreeNode", ()=>[
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
            T: mu,
            repeated: !0
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: qz,
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
    ]), qz = c.makeMessageType("agent.v1.LsDirectoryTreeNode.File", ()=>[
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
            T: KP,
            opt: !0
        }
    ], {
    localName: "LsDirectoryTreeNode_File"
}), Kz = c.makeMessageType("agent.v1.LsError", ()=>[
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
    ]), zz = c.makeMessageType("agent.v1.LsRejected", ()=>[
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
    ]), Yz = c.makeMessageType("agent.v1.LsTimeout", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: mu
        }
    ]), KP = c.makeMessageType("agent.v1.TerminalMetadata", ()=>[
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
            T: zP,
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
            T: zP,
            opt: !0
        }
    ]), zP = c.makeMessageType("agent.v1.TerminalMetadata.Command", ()=>[
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
