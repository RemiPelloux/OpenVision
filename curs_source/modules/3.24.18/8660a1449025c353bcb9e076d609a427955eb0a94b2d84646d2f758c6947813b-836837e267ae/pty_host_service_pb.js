import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var tbl, cNg, uNg, dNg, hNg, pNg, mNg, gNg, fNg, vNg, _Ng, bNg, yNg, SNg, kNg, wNg;
export { SNg, _Ng, bNg, cNg, dNg, fNg, gNg, hNg, kNg, mNg, pNg, tbl, uNg, vNg, wNg, yNg };
var __wakaru_CNg_initialized = false;
export function CNg() {
if (__wakaru_CNg_initialized) return;
__wakaru_CNg_initialized = true;
"use strict";
E(), hr(), tbl = x.makeMessageType("agent.v1.Process", ()=>[
        {
            no: 1,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), cNg = x.makeMessageType("agent.v1.SpawnPtyRequest", ()=>[
        {
            no: 1,
            name: "process",
            kind: "message",
            T: tbl,
            opt: !0
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "cols",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "rows",
            kind: "scalar",
            T: 13
        }
    ]), uNg = x.makeMessageType("agent.v1.SpawnPtyResponse", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        }
    ]), dNg = x.makeMessageType("agent.v1.AttachPtyRequest", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_event_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), hNg = x.makeMessageType("agent.v1.PtyEvent", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pty_data",
            kind: "message",
            T: pNg,
            oneof: "data"
        },
        {
            no: 3,
            name: "pty_exited",
            kind: "message",
            T: mNg,
            oneof: "data"
        }
    ]), pNg = x.makeMessageType("agent.v1.PtyData", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), mNg = x.makeMessageType("agent.v1.PtyExited", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "signal",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), gNg = x.makeMessageType("agent.v1.SendInputRequest", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), fNg = x.makeMessageType("agent.v1.SendInputResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), vNg = x.makeMessageType("agent.v1.ResizePtyRequest", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cols",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "rows",
            kind: "scalar",
            T: 13
        }
    ]), _Ng = x.makeMessageType("agent.v1.ResizePtyResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), bNg = x.makeMessageType("agent.v1.ListPtysRequest", []), yNg = x.makeMessageType("agent.v1.ListPtysResponse", ()=>[
        {
            no: 1,
            name: "ptys",
            kind: "message",
            T: SNg,
            repeated: !0
        }
    ]), SNg = x.makeMessageType("agent.v1.PtyInfo", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cols",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "rows",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "pid",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "process_args",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), kNg = x.makeMessageType("agent.v1.TerminatePtyRequest", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        }
    ]), wNg = x.makeMessageType("agent.v1.TerminatePtyResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);

}
