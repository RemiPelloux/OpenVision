import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Qyd, Jyd, z5o, eSd, tSd, nSd, iSd, rSd, sSd, oSd, aSd, lSd, cSd, uSd, dSd;
export { Jyd, Qyd, aSd, cSd, dSd, eSd, iSd, lSd, nSd, oSd, rSd, sSd, tSd, uSd, z5o };
var __wakaru_xIy_initialized = false;
export function xIy() {
if (__wakaru_xIy_initialized) return;
__wakaru_xIy_initialized = true;
"use strict";
E(), hr(), Qyd = x.makeEnum("agent.v1.WriteCanvasFailReason", [
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
]), Jyd = x.makeEnum("agent.v1.ReadCanvasFailReason", [
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
]), z5o = x.makeMessageType("agent.v1.CloudCanvasToolDiagnosticPosition", ()=>[
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
    ]), eSd = x.makeMessageType("agent.v1.CloudCanvasToolDiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: z5o
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: z5o
        }
    ]), tSd = x.makeMessageType("agent.v1.CloudCanvasToolDiagnostic", ()=>[
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
            T: eSd,
            opt: !0
        }
    ]), nSd = x.makeMessageType("agent.v1.WriteCanvasArgs", ()=>[
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
    ]), iSd = x.makeMessageType("agent.v1.WriteCanvasSuccess", ()=>[
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
    ]), rSd = x.makeMessageType("agent.v1.WriteCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(Qyd)
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: tSd,
            repeated: !0
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sSd = x.makeMessageType("agent.v1.WriteCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: iSd,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: rSd,
            oneof: "result"
        }
    ]), oSd = x.makeMessageType("agent.v1.WriteCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: nSd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: sSd
        }
    ]), aSd = x.makeMessageType("agent.v1.ReadCanvasArgs", ()=>[
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
    ]), lSd = x.makeMessageType("agent.v1.ReadCanvasSuccess", ()=>[
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
    ]), cSd = x.makeMessageType("agent.v1.ReadCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(Jyd)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), uSd = x.makeMessageType("agent.v1.ReadCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: lSd,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: cSd,
            oneof: "result"
        }
    ]), dSd = x.makeMessageType("agent.v1.ReadCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: aSd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: uSd
        }
    ]);

}
