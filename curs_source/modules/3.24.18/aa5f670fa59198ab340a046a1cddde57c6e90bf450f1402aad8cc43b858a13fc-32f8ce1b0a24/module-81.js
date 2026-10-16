require.r(exports);
require.d(exports, {
    ReadTodosArgs: ()=>ReadTodosArgs,
    ReadTodosError: ()=>ReadTodosError,
    ReadTodosResult: ()=>ReadTodosResult,
    ReadTodosSuccess: ()=>ReadTodosSuccess,
    ReadTodosToolCall: ()=>ReadTodosToolCall,
    TodoItem: ()=>TodoItem,
    TodoStatus: ()=>TodoStatus,
    UpdateTodosArgs: ()=>UpdateTodosArgs,
    UpdateTodosError: ()=>UpdateTodosError,
    UpdateTodosResult: ()=>UpdateTodosResult,
    UpdateTodosSuccess: ()=>UpdateTodosSuccess,
    UpdateTodosToolCall: ()=>UpdateTodosToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const TodoStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.TodoStatus", [
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
]);
const TodoItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TodoItem", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(TodoStatus)
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
            repeated: true
        }
    ]);
const UpdateTodosToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: UpdateTodosArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UpdateTodosResult
        }
    ]);
const UpdateTodosArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateTodosArgs", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]);
const UpdateTodosResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UpdateTodosSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: UpdateTodosError,
            oneof: "result"
        }
    ]);
const UpdateTodosSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
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
    ]);
const UpdateTodosError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadTodosToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadTodosToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadTodosArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadTodosResult
        }
    ]);
const ReadTodosArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadTodosArgs", ()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(TodoStatus),
            repeated: true
        },
        {
            no: 2,
            name: "id_filter",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ReadTodosResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadTodosResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadTodosSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadTodosError,
            oneof: "result"
        }
    ]);
const ReadTodosSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadTodosSuccess", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        }
    ]);
const ReadTodosError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadTodosError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
