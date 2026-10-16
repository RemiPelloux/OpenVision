require.r(exports);
require.d(exports, {
    LsArgs: ()=>LsArgs,
    LsDirectoryTreeNode: ()=>LsDirectoryTreeNode,
    LsDirectoryTreeNode_File: ()=>LsDirectoryTreeNode_File,
    LsError: ()=>LsError,
    LsRejected: ()=>LsRejected,
    LsResult: ()=>LsResult,
    LsSuccess: ()=>LsSuccess,
    LsTimeout: ()=>LsTimeout,
    TerminalMetadata: ()=>TerminalMetadata,
    TerminalMetadata_Command: ()=>TerminalMetadata_Command
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-71.js");
const LsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsArgs", ()=>[
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
            repeated: true
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
            T: _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__.SandboxPolicy,
            opt: true
        },
        {
            no: 5,
            name: "timeout_ms",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const LsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: LsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: LsError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: LsRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "timeout",
            kind: "message",
            T: LsTimeout,
            oneof: "result"
        }
    ]);
const LsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsSuccess", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: LsDirectoryTreeNode
        }
    ]);
const LsDirectoryTreeNode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsDirectoryTreeNode", ()=>[
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
            T: LsDirectoryTreeNode,
            repeated: true
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: LsDirectoryTreeNode_File,
            repeated: true
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
    ]);
const LsDirectoryTreeNode_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsDirectoryTreeNode.File", ()=>[
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
            T: TerminalMetadata,
            opt: true
        }
    ], {
    localName: "LsDirectoryTreeNode_File"
});
const LsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsError", ()=>[
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
    ]);
const LsRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsRejected", ()=>[
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
    ]);
const LsTimeout = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsTimeout", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: LsDirectoryTreeNode
        }
    ]);
const TerminalMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TerminalMetadata", ()=>[
        {
            no: 1,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "last_commands",
            kind: "message",
            T: TerminalMetadata_Command,
            repeated: true
        },
        {
            no: 3,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "current_command",
            kind: "message",
            T: TerminalMetadata_Command,
            opt: true
        }
    ]);
const TerminalMetadata_Command = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TerminalMetadata.Command", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "timestamp_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ], {
    localName: "TerminalMetadata_Command"
});
