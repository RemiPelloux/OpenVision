require.r(exports);
require.d(exports, {
    ContainerTree: ()=>ContainerTree,
    ContainerTreeNode: ()=>ContainerTreeNode,
    ContainerTreeNode_Blob: ()=>ContainerTreeNode_Blob,
    ContainerTreeNode_Container: ()=>ContainerTreeNode_Container,
    ContainerTreeNode_Reference: ()=>ContainerTreeNode_Reference,
    ContainerTreeNode_Symbol: ()=>ContainerTreeNode_Symbol,
    ContextAST: ()=>ContextAST
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ContextAST = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextAST", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: ContainerTree,
            repeated: true
        }
    ]);
const ContainerTree = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContainerTree", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "nodes",
            kind: "message",
            T: ContainerTreeNode,
            repeated: true
        }
    ]);
const ContainerTreeNode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContainerTreeNode", ()=>[
        {
            no: 1,
            name: "container",
            kind: "message",
            T: ContainerTreeNode_Container,
            oneof: "node"
        },
        {
            no: 2,
            name: "blob",
            kind: "message",
            T: ContainerTreeNode_Blob,
            oneof: "node"
        },
        {
            no: 3,
            name: "symbol",
            kind: "message",
            T: ContainerTreeNode_Symbol,
            oneof: "node"
        }
    ]);
const ContainerTreeNode_Symbol = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContainerTreeNode.Symbol", ()=>[
        {
            no: 1,
            name: "doc_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "references",
            kind: "message",
            T: ContainerTreeNode_Reference,
            repeated: true
        },
        {
            no: 7,
            name: "score",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ContainerTreeNode_Symbol"
});
const ContainerTreeNode_Container = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContainerTreeNode.Container", ()=>[
        {
            no: 1,
            name: "doc_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "header",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trailer",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "children",
            kind: "message",
            T: ContainerTreeNode,
            repeated: true
        },
        {
            no: 6,
            name: "references",
            kind: "message",
            T: ContainerTreeNode_Reference,
            repeated: true
        },
        {
            no: 7,
            name: "score",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ContainerTreeNode_Container"
});
const ContainerTreeNode_Blob = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContainerTreeNode.Blob", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ContainerTreeNode_Blob"
});
const ContainerTreeNode_Reference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContainerTreeNode.Reference", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContainerTreeNode_Reference"
});
