import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var eBo, aId, tBo, lId, cId, uId, nBo;
export { aId, cId, eBo, lId, nBo, tBo, uId };
var __wakaru_dId_initialized = false;
export function dId() {
if (__wakaru_dId_initialized) return;
__wakaru_dId_initialized = true;
"use strict";
E(), hr(), eBo = x.makeMessageType("aiserver.v1.ContextAST", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: aId,
            repeated: !0
        }
    ]), aId = x.makeMessageType("aiserver.v1.ContainerTree", ()=>[
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
            T: tBo,
            repeated: !0
        }
    ]), tBo = x.makeMessageType("aiserver.v1.ContainerTreeNode", ()=>[
        {
            no: 1,
            name: "container",
            kind: "message",
            T: cId,
            oneof: "node"
        },
        {
            no: 2,
            name: "blob",
            kind: "message",
            T: uId,
            oneof: "node"
        },
        {
            no: 3,
            name: "symbol",
            kind: "message",
            T: lId,
            oneof: "node"
        }
    ]), lId = x.makeMessageType("aiserver.v1.ContainerTreeNode.Symbol", ()=>[
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
            T: nBo,
            repeated: !0
        },
        {
            no: 7,
            name: "score",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ContainerTreeNode_Symbol"
}), cId = x.makeMessageType("aiserver.v1.ContainerTreeNode.Container", ()=>[
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
            T: tBo,
            repeated: !0
        },
        {
            no: 6,
            name: "references",
            kind: "message",
            T: nBo,
            repeated: !0
        },
        {
            no: 7,
            name: "score",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ContainerTreeNode_Container"
}), uId = x.makeMessageType("aiserver.v1.ContainerTreeNode.Blob", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ContainerTreeNode_Blob"
}), nBo = x.makeMessageType("aiserver.v1.ContainerTreeNode.Reference", ()=>[
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

}
