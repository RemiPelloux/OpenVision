import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Kno, KSd, Yno, YSd, XSd, ZSd, Xno;
export { KSd, Kno, XSd, Xno, YSd, Yno, ZSd };
var __wakaru_QSd_initialized = false;
export function QSd() {
if (__wakaru_QSd_initialized) return;
__wakaru_QSd_initialized = true;
"use strict";
x(), bi(), Kno = k.makeMessageType("aiserver.v1.ContextAST", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: KSd,
            repeated: !0
        }
    ]), KSd = k.makeMessageType("aiserver.v1.ContainerTree", ()=>[
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
            T: Yno,
            repeated: !0
        }
    ]), Yno = k.makeMessageType("aiserver.v1.ContainerTreeNode", ()=>[
        {
            no: 1,
            name: "container",
            kind: "message",
            T: XSd,
            oneof: "node"
        },
        {
            no: 2,
            name: "blob",
            kind: "message",
            T: ZSd,
            oneof: "node"
        },
        {
            no: 3,
            name: "symbol",
            kind: "message",
            T: YSd,
            oneof: "node"
        }
    ]), YSd = k.makeMessageType("aiserver.v1.ContainerTreeNode.Symbol", ()=>[
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
            T: Xno,
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
}), XSd = k.makeMessageType("aiserver.v1.ContainerTreeNode.Container", ()=>[
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
            T: Yno,
            repeated: !0
        },
        {
            no: 6,
            name: "references",
            kind: "message",
            T: Xno,
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
}), ZSd = k.makeMessageType("aiserver.v1.ContainerTreeNode.Blob", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ContainerTreeNode_Blob"
}), Xno = k.makeMessageType("aiserver.v1.ContainerTreeNode.Reference", ()=>[
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
