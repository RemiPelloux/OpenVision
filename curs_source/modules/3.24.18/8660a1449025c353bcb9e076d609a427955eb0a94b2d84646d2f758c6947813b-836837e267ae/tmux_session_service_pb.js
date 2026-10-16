import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { CNg, tbl } from "./pty_host_service_pb.js";
import { E } from "./tslib.es6.js";
var AVe, cps, TNg, ENg, INg, xNg, ANg, RNg, PNg, MNg;
export { ANg, AVe, ENg, INg, MNg, PNg, RNg, TNg, cps, xNg };
var __wakaru_CRi_initialized = false;
export function CRi() {
if (__wakaru_CRi_initialized) return;
__wakaru_CRi_initialized = true;
"use strict";
E(), hr(), CNg(), AVe = x.makeEnum("agent.v1.TmuxSessionKind", [
    {
        no: 0,
        name: "TMUX_SESSION_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TMUX_SESSION_KIND_USER_MANUAL",
        localName: "USER_MANUAL"
    },
    {
        no: 2,
        name: "TMUX_SESSION_KIND_AGENT_BACKGROUND",
        localName: "AGENT_BACKGROUND"
    },
    {
        no: 3,
        name: "TMUX_SESSION_KIND_AGENT_INTERACTIVE",
        localName: "AGENT_INTERACTIVE"
    }
]), cps = x.makeMessageType("agent.v1.TmuxSession", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "session_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(AVe)
        },
        {
            no: 5,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "process_args",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "created_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "attached_client_count",
            kind: "scalar",
            T: 13
        }
    ]), TNg = x.makeMessageType("agent.v1.CreateTmuxSessionRequest", ()=>[
        {
            no: 1,
            name: "session_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(AVe)
        },
        {
            no: 4,
            name: "process",
            kind: "message",
            T: tbl,
            opt: !0
        },
        {
            no: 5,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), ENg = x.makeMessageType("agent.v1.CreateTmuxSessionResponse", ()=>[
        {
            no: 1,
            name: "session",
            kind: "message",
            T: cps
        }
    ]), INg = x.makeMessageType("agent.v1.ListTmuxSessionsRequest", []), xNg = x.makeMessageType("agent.v1.ListTmuxSessionsResponse", ()=>[
        {
            no: 1,
            name: "sessions",
            kind: "message",
            T: cps,
            repeated: !0
        }
    ]), ANg = x.makeMessageType("agent.v1.KillTmuxSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), RNg = x.makeMessageType("agent.v1.KillTmuxSessionResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), PNg = x.makeMessageType("agent.v1.AttachTmuxSessionRequest", ()=>[
        {
            no: 1,
            name: "session_id",
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
    ]), MNg = x.makeMessageType("agent.v1.AttachTmuxSessionResponse", ()=>[
        {
            no: 1,
            name: "pty_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "session",
            kind: "message",
            T: cps
        }
    ]);

}
