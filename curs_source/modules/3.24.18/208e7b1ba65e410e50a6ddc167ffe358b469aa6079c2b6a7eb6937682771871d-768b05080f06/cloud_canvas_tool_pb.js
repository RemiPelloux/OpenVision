import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var rae, sae, jN, iae, aae, oae, cae, lae, dae, uae, mae, pae, hae, gae, fae;
export { aae, cae, dae, fae, gae, hae, iae, jN, lae, mae, oae, pae, rae, sae, uae };
var __wakaru__Ke_initialized = false;
export function _Ke() {
if (__wakaru__Ke_initialized) return;
__wakaru__Ke_initialized = true;
"use strict";
h(), F(), rae = c.makeEnum("agent.v1.WriteCanvasFailReason", [
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
]), sae = c.makeEnum("agent.v1.ReadCanvasFailReason", [
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
]), jN = c.makeMessageType("agent.v1.CloudCanvasToolDiagnosticPosition", ()=>[
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
    ]), iae = c.makeMessageType("agent.v1.CloudCanvasToolDiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: jN
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: jN
        }
    ]), aae = c.makeMessageType("agent.v1.CloudCanvasToolDiagnostic", ()=>[
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
            T: iae,
            opt: !0
        }
    ]), oae = c.makeMessageType("agent.v1.WriteCanvasArgs", ()=>[
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
    ]), cae = c.makeMessageType("agent.v1.WriteCanvasSuccess", ()=>[
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
    ]), lae = c.makeMessageType("agent.v1.WriteCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: c.getEnumType(rae)
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: aae,
            repeated: !0
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dae = c.makeMessageType("agent.v1.WriteCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: cae,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: lae,
            oneof: "result"
        }
    ]), uae = c.makeMessageType("agent.v1.WriteCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: oae
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: dae
        }
    ]), mae = c.makeMessageType("agent.v1.ReadCanvasArgs", ()=>[
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
    ]), pae = c.makeMessageType("agent.v1.ReadCanvasSuccess", ()=>[
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
    ]), hae = c.makeMessageType("agent.v1.ReadCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: c.getEnumType(sae)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gae = c.makeMessageType("agent.v1.ReadCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: pae,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: hae,
            oneof: "result"
        }
    ]), fae = c.makeMessageType("agent.v1.ReadCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: mae
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gae
        }
    ]);

}
