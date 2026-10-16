import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var QF, xAe, zti, Zyr, Qyr, Jyr, Hfd, Wfd, Gfd, qfd, zfd, Vfd;
export { Gfd, Hfd, Jyr, QF, Qyr, Vfd, Wfd, Zyr, qfd, xAe, zfd, zti };
var __wakaru_Zet_initialized = false;
export function Zet() {
if (__wakaru_Zet_initialized) return;
__wakaru_Zet_initialized = true;
"use strict";
E(), hr(), QF = x.makeEnum("agent.v1.TodoStatus", [
    {
        no: 0,
        name: "TODO_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TODO_STATUS_PENDING",
        localName: "PENDING"
    },
    {
        no: 2,
        name: "TODO_STATUS_IN_PROGRESS",
        localName: "IN_PROGRESS"
    },
    {
        no: 3,
        name: "TODO_STATUS_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 4,
        name: "TODO_STATUS_CANCELLED",
        localName: "CANCELLED"
    }
]), xAe = x.makeMessageType("agent.v1.TodoItem", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: x.getEnumType(QF)
        },
        {
            no: 4,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), zti = x.makeMessageType("agent.v1.UpdateTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Zyr
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Qyr
        }
    ]), Zyr = x.makeMessageType("agent.v1.UpdateTodosArgs", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: xAe,
            repeated: !0
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]), Qyr = x.makeMessageType("agent.v1.UpdateTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Jyr,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Hfd,
            oneof: "result"
        }
    ]), Jyr = x.makeMessageType("agent.v1.UpdateTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: xAe,
            repeated: !0
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "was_merge",
            kind: "scalar",
            T: 8
        }
    ]), Hfd = x.makeMessageType("agent.v1.UpdateTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Wfd = x.makeMessageType("agent.v1.ReadTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Gfd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: qfd
        }
    ]), Gfd = x.makeMessageType("agent.v1.ReadTodosArgs", ()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: x.getEnumType(QF),
            repeated: !0
        },
        {
            no: 2,
            name: "id_filter",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), qfd = x.makeMessageType("agent.v1.ReadTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: zfd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Vfd,
            oneof: "result"
        }
    ]), zfd = x.makeMessageType("agent.v1.ReadTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: xAe,
            repeated: !0
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        }
    ]), Vfd = x.makeMessageType("agent.v1.ReadTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
