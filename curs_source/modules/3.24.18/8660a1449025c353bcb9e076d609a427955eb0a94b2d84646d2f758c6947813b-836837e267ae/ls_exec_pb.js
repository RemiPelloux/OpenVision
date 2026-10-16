import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Het, Wke } from "./sandbox_pb.js";
import { E } from "./tslib.es6.js";
var Fpn, k4t, Ngd, Bpn, Lgd, Yei, Ogd, Fgd, eyr, Xei;
export { Bpn, Fgd, Fpn, Lgd, Ngd, Ogd, Xei, Yei, eyr, k4t };
var __wakaru_zet_initialized = false;
export function zet() {
if (__wakaru_zet_initialized) return;
__wakaru_zet_initialized = true;
"use strict";
E(), hr(), Het(), Fpn = x.makeMessageType("agent.v1.LsArgs", ()=>[
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
            T: Wke,
            opt: !0
        },
        {
            no: 5,
            name: "timeout_ms",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), k4t = x.makeMessageType("agent.v1.LsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Ngd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Yei,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Ogd,
            oneof: "result"
        },
        {
            no: 4,
            name: "timeout",
            kind: "message",
            T: Fgd,
            oneof: "result"
        }
    ]), Ngd = x.makeMessageType("agent.v1.LsSuccess", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: Bpn
        }
    ]), Bpn = x.makeMessageType("agent.v1.LsDirectoryTreeNode", ()=>[
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
            T: Bpn,
            repeated: !0
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: Lgd,
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
    ]), Lgd = x.makeMessageType("agent.v1.LsDirectoryTreeNode.File", ()=>[
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
            T: eyr,
            opt: !0
        }
    ], {
    localName: "LsDirectoryTreeNode_File"
}), Yei = x.makeMessageType("agent.v1.LsError", ()=>[
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
    ]), Ogd = x.makeMessageType("agent.v1.LsRejected", ()=>[
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
    ]), Fgd = x.makeMessageType("agent.v1.LsTimeout", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: Bpn
        }
    ]), eyr = x.makeMessageType("agent.v1.TerminalMetadata", ()=>[
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
            T: Xei,
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
            T: Xei,
            opt: !0
        }
    ]), Xei = x.makeMessageType("agent.v1.TerminalMetadata.Command", ()=>[
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
