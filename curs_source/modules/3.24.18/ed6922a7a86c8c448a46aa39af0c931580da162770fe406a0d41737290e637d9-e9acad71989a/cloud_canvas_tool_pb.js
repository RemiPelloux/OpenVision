import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var vAu, _Au, cVs, bAu, yAu, SAu, kAu, wAu, CAu, TAu, EAu, xAu, IAu, AAu, RAu;
export { AAu, CAu, EAu, IAu, RAu, SAu, TAu, _Au, bAu, cVs, kAu, vAu, wAu, xAu, yAu };
var __wakaru_Tdv_initialized = false;
export function Tdv() {
if (__wakaru_Tdv_initialized) return;
__wakaru_Tdv_initialized = true;
"use strict";
x(), bi(), vAu = k.makeEnum("agent.v1.WriteCanvasFailReason", [
    {
        no: 0,
        name: "WRITE_CANVAS_FAIL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WRITE_CANVAS_FAIL_REASON_TYPECHECK_FAILED",
        localName: "TYPECHECK_FAILED"
    },
    {
        no: 2,
        name: "WRITE_CANVAS_FAIL_REASON_COMPILE_FAILED",
        localName: "COMPILE_FAILED"
    },
    {
        no: 3,
        name: "WRITE_CANVAS_FAIL_REASON_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 4,
        name: "WRITE_CANVAS_FAIL_REASON_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 5,
        name: "WRITE_CANVAS_FAIL_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 6,
        name: "WRITE_CANVAS_FAIL_REASON_REFUSED",
        localName: "REFUSED"
    }
]), _Au = k.makeEnum("agent.v1.ReadCanvasFailReason", [
    {
        no: 0,
        name: "READ_CANVAS_FAIL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "READ_CANVAS_FAIL_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "READ_CANVAS_FAIL_REASON_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 3,
        name: "READ_CANVAS_FAIL_REASON_REFUSED",
        localName: "REFUSED"
    },
    {
        no: 4,
        name: "READ_CANVAS_FAIL_REASON_INVALID_REFERENCE",
        localName: "INVALID_REFERENCE"
    }
]), cVs = k.makeMessageType("agent.v1.CloudCanvasToolDiagnosticPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "character",
            kind: "scalar",
            T: 5
        }
    ]), bAu = k.makeMessageType("agent.v1.CloudCanvasToolDiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: cVs
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: cVs
        }
    ]), yAu = k.makeMessageType("agent.v1.CloudCanvasToolDiagnostic", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "severity",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: bAu,
            opt: !0
        }
    ]), SAu = k.makeMessageType("agent.v1.WriteCanvasArgs", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "canvas_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), kAu = k.makeMessageType("agent.v1.WriteCanvasSuccess", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), wAu = k.makeMessageType("agent.v1.WriteCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(vAu)
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: yAu,
            repeated: !0
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), CAu = k.makeMessageType("agent.v1.WriteCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: kAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: wAu,
            oneof: "result"
        }
    ]), TAu = k.makeMessageType("agent.v1.WriteCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CAu
        }
    ]), EAu = k.makeMessageType("agent.v1.ReadCanvasArgs", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xAu = k.makeMessageType("agent.v1.ReadCanvasSuccess", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        }
    ]), IAu = k.makeMessageType("agent.v1.ReadCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(_Au)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), AAu = k.makeMessageType("agent.v1.ReadCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: xAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: IAu,
            oneof: "result"
        }
    ]), RAu = k.makeMessageType("agent.v1.ReadCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: EAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AAu
        }
    ]);

}
