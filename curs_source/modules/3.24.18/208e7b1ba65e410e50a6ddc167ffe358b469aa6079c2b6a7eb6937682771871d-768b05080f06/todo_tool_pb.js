import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var CN, hu, Nee, Dee, Oee, Lee, Uee, xee, Fee, Wee, Bee, Gee;
export { Bee, CN, Dee, Fee, Gee, Lee, Nee, Oee, Uee, Wee, hu, xee };
var __wakaru_Vee_initialized = false;
export function Vee() {
if (__wakaru_Vee_initialized) return;
__wakaru_Vee_initialized = true;
"use strict";
h(), F(), CN = c.makeEnum("agent.v1.TodoStatus", [
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
]), hu = c.makeMessageType("agent.v1.TodoItem", ()=>[
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
            T: c.getEnumType(CN)
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
    ]), Nee = c.makeMessageType("agent.v1.UpdateTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Dee
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Oee
        }
    ]), Dee = c.makeMessageType("agent.v1.UpdateTodosArgs", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: hu,
            repeated: !0
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]), Oee = c.makeMessageType("agent.v1.UpdateTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Lee,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Uee,
            oneof: "result"
        }
    ]), Lee = c.makeMessageType("agent.v1.UpdateTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: hu,
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
    ]), Uee = c.makeMessageType("agent.v1.UpdateTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), xee = c.makeMessageType("agent.v1.ReadTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Fee
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Wee
        }
    ]), Fee = c.makeMessageType("agent.v1.ReadTodosArgs", ()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: c.getEnumType(CN),
            repeated: !0
        },
        {
            no: 2,
            name: "id_filter",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Wee = c.makeMessageType("agent.v1.ReadTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Bee,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Gee,
            oneof: "result"
        }
    ]), Bee = c.makeMessageType("agent.v1.ReadTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: hu,
            repeated: !0
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        }
    ]), Gee = c.makeMessageType("agent.v1.ReadTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
