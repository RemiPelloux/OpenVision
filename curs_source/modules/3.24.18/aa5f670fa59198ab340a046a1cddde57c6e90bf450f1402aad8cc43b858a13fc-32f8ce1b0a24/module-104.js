require.r(exports);
require.d(exports, {
    ClickAction: ()=>ClickAction,
    ComputerUseAction: ()=>ComputerUseAction,
    ComputerUseArgs: ()=>ComputerUseArgs,
    ComputerUseError: ()=>ComputerUseError,
    ComputerUseResult: ()=>ComputerUseResult,
    ComputerUseSettleOutcome: ()=>ComputerUseSettleOutcome,
    ComputerUseSuccess: ()=>ComputerUseSuccess,
    ComputerUseToolCall: ()=>ComputerUseToolCall,
    Coordinate: ()=>Coordinate,
    CursorPositionAction: ()=>CursorPositionAction,
    DragAction: ()=>DragAction,
    KeyAction: ()=>KeyAction,
    KeyStroke: ()=>KeyStroke,
    MouseButton: ()=>MouseButton,
    MouseDownAction: ()=>MouseDownAction,
    MouseMoveAction: ()=>MouseMoveAction,
    MouseUpAction: ()=>MouseUpAction,
    ScreenshotAction: ()=>ScreenshotAction,
    ScrollAction: ()=>ScrollAction,
    ScrollDirection: ()=>ScrollDirection,
    TypeAction: ()=>TypeAction,
    WaitAction: ()=>WaitAction
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const MouseButton = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.MouseButton", [
    {
        no: 0,
        name: "MOUSE_BUTTON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MOUSE_BUTTON_LEFT",
        localName: "LEFT"
    },
    {
        no: 2,
        name: "MOUSE_BUTTON_RIGHT",
        localName: "RIGHT"
    },
    {
        no: 3,
        name: "MOUSE_BUTTON_MIDDLE",
        localName: "MIDDLE"
    },
    {
        no: 4,
        name: "MOUSE_BUTTON_BACK",
        localName: "BACK"
    },
    {
        no: 5,
        name: "MOUSE_BUTTON_FORWARD",
        localName: "FORWARD"
    }
]);
const ScrollDirection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ScrollDirection", [
    {
        no: 0,
        name: "SCROLL_DIRECTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCROLL_DIRECTION_UP",
        localName: "UP"
    },
    {
        no: 2,
        name: "SCROLL_DIRECTION_DOWN",
        localName: "DOWN"
    },
    {
        no: 3,
        name: "SCROLL_DIRECTION_LEFT",
        localName: "LEFT"
    },
    {
        no: 4,
        name: "SCROLL_DIRECTION_RIGHT",
        localName: "RIGHT"
    }
]);
const KeyStroke = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.KeyStroke", [
    {
        no: 0,
        name: "KEY_STROKE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KEY_STROKE_TAP",
        localName: "TAP"
    },
    {
        no: 2,
        name: "KEY_STROKE_DOWN",
        localName: "DOWN"
    },
    {
        no: 3,
        name: "KEY_STROKE_UP",
        localName: "UP"
    }
]);
const ComputerUseSettleOutcome = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ComputerUseSettleOutcome", [
    {
        no: 0,
        name: "COMPUTER_USE_SETTLE_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMPUTER_USE_SETTLE_OUTCOME_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "COMPUTER_USE_SETTLE_OUTCOME_FIXED",
        localName: "FIXED"
    },
    {
        no: 3,
        name: "COMPUTER_USE_SETTLE_OUTCOME_STABLE",
        localName: "STABLE"
    },
    {
        no: 4,
        name: "COMPUTER_USE_SETTLE_OUTCOME_CAP",
        localName: "CAP"
    },
    {
        no: 5,
        name: "COMPUTER_USE_SETTLE_OUTCOME_CAPTURE_FAILED",
        localName: "CAPTURE_FAILED"
    }
]);
const Coordinate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.Coordinate", ()=>[
        {
            no: 1,
            name: "x",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "y",
            kind: "scalar",
            T: 5
        }
    ]);
const ComputerUseArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ComputerUseArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actions",
            kind: "message",
            T: ComputerUseAction,
            repeated: true
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "bind_unmapped_characters",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "desktop_lease_actor_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "screenshot_settle_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "settle_until_stable",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ComputerUseAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ComputerUseAction", ()=>[
        {
            no: 1,
            name: "mouse_move",
            kind: "message",
            T: MouseMoveAction,
            oneof: "action"
        },
        {
            no: 2,
            name: "click",
            kind: "message",
            T: ClickAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "mouse_down",
            kind: "message",
            T: MouseDownAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "mouse_up",
            kind: "message",
            T: MouseUpAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "drag",
            kind: "message",
            T: DragAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "scroll",
            kind: "message",
            T: ScrollAction,
            oneof: "action"
        },
        {
            no: 7,
            name: "type",
            kind: "message",
            T: TypeAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "key",
            kind: "message",
            T: KeyAction,
            oneof: "action"
        },
        {
            no: 9,
            name: "wait",
            kind: "message",
            T: WaitAction,
            oneof: "action"
        },
        {
            no: 10,
            name: "screenshot",
            kind: "message",
            T: ScreenshotAction,
            oneof: "action"
        },
        {
            no: 11,
            name: "cursor_position",
            kind: "message",
            T: CursorPositionAction,
            oneof: "action"
        }
    ]);
const MouseMoveAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MouseMoveAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: Coordinate
        }
    ]);
const ClickAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ClickAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: Coordinate,
            opt: true
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MouseButton)
        },
        {
            no: 3,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const MouseDownAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MouseDownAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MouseButton)
        }
    ]);
const MouseUpAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MouseUpAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MouseButton)
        }
    ]);
const DragAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DragAction", ()=>[
        {
            no: 1,
            name: "path",
            kind: "message",
            T: Coordinate,
            repeated: true
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MouseButton)
        },
        {
            no: 3,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ScrollAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ScrollAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: Coordinate,
            opt: true
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ScrollDirection)
        },
        {
            no: 3,
            name: "amount",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const TypeAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TypeAction", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const KeyAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.KeyAction", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hold_duration_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "stroke",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(KeyStroke)
        }
    ]);
const WaitAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WaitAction", ()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        }
    ]);
const ScreenshotAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ScreenshotAction", []);
const CursorPositionAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorPositionAction", []);
const ComputerUseResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ComputerUseSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ComputerUseError,
            oneof: "result"
        }
    ]);
const ComputerUseSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ComputerUseSuccess", ()=>[
        {
            no: 1,
            name: "action_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "screenshot",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "log",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "screenshot_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "cursor_position",
            kind: "message",
            T: Coordinate,
            opt: true
        },
        {
            no: 7,
            name: "settle_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "settle_outcome",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ComputerUseSettleOutcome),
            opt: true
        }
    ]);
const ComputerUseError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ComputerUseError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "log",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "screenshot",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "screenshot_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ComputerUseToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ComputerUseToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ComputerUseArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ComputerUseResult
        }
    ]);
