import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var yN, Kve, eDn, p4i, m4i, g4i, rTu, sTu, oTu, aTu, cTu, lTu;
export { Kve, aTu, cTu, eDn, g4i, lTu, m4i, oTu, p4i, rTu, sTu, yN };
var __wakaru_b4e_initialized = false;
export function b4e() {
if (__wakaru_b4e_initialized) return;
__wakaru_b4e_initialized = true;
"use strict";
x(), bi(), yN = k.makeEnum("agent.v1.TodoStatus", [
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
]), Kve = k.makeMessageType("agent.v1.TodoItem", ()=>[
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
            T: k.getEnumType(yN)
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
    ]), eDn = k.makeMessageType("agent.v1.UpdateTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: p4i
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: m4i
        }
    ]), p4i = k.makeMessageType("agent.v1.UpdateTodosArgs", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: Kve,
            repeated: !0
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]), m4i = k.makeMessageType("agent.v1.UpdateTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: g4i,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: rTu,
            oneof: "result"
        }
    ]), g4i = k.makeMessageType("agent.v1.UpdateTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: Kve,
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
    ]), rTu = k.makeMessageType("agent.v1.UpdateTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), sTu = k.makeMessageType("agent.v1.ReadTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: oTu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: aTu
        }
    ]), oTu = k.makeMessageType("agent.v1.ReadTodosArgs", ()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: k.getEnumType(yN),
            repeated: !0
        },
        {
            no: 2,
            name: "id_filter",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), aTu = k.makeMessageType("agent.v1.ReadTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: cTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: lTu,
            oneof: "result"
        }
    ]), cTu = k.makeMessageType("agent.v1.ReadTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: Kve,
            repeated: !0
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        }
    ]), lTu = k.makeMessageType("agent.v1.ReadTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
