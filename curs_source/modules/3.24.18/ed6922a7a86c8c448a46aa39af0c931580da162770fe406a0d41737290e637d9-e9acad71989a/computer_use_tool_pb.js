import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Ibt, zUt, Bfu, Ufu, KUt, nIn, LBs, $fu, Hfu, Wfu, Gfu, Vfu, jfu, qfu, zfu, Kfu, Yfu, Xfu, iIn, NBs, OBs, FBs;
export { $fu, Bfu, FBs, Gfu, Hfu, Ibt, KUt, Kfu, LBs, NBs, OBs, Ufu, Vfu, Wfu, Xfu, Yfu, iIn, jfu, nIn, qfu, zUt, zfu };
var __wakaru_rIn_initialized = false;
export function rIn() {
if (__wakaru_rIn_initialized) return;
__wakaru_rIn_initialized = true;
"use strict";
x(), bi(), Ibt = k.makeEnum("agent.v1.MouseButton", [
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
]), zUt = k.makeEnum("agent.v1.ScrollDirection", [
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
]), Bfu = k.makeEnum("agent.v1.KeyStroke", [
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
]), Ufu = k.makeEnum("agent.v1.ComputerUseSettleOutcome", [
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
]), KUt = k.makeMessageType("agent.v1.Coordinate", ()=>[
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
    ]), nIn = k.makeMessageType("agent.v1.ComputerUseArgs", ()=>[
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
            T: LBs,
            repeated: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "bind_unmapped_characters",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "desktop_lease_actor_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "screenshot_settle_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "settle_until_stable",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), LBs = k.makeMessageType("agent.v1.ComputerUseAction", ()=>[
        {
            no: 1,
            name: "mouse_move",
            kind: "message",
            T: $fu,
            oneof: "action"
        },
        {
            no: 2,
            name: "click",
            kind: "message",
            T: Hfu,
            oneof: "action"
        },
        {
            no: 3,
            name: "mouse_down",
            kind: "message",
            T: Wfu,
            oneof: "action"
        },
        {
            no: 4,
            name: "mouse_up",
            kind: "message",
            T: Gfu,
            oneof: "action"
        },
        {
            no: 5,
            name: "drag",
            kind: "message",
            T: Vfu,
            oneof: "action"
        },
        {
            no: 6,
            name: "scroll",
            kind: "message",
            T: jfu,
            oneof: "action"
        },
        {
            no: 7,
            name: "type",
            kind: "message",
            T: qfu,
            oneof: "action"
        },
        {
            no: 8,
            name: "key",
            kind: "message",
            T: zfu,
            oneof: "action"
        },
        {
            no: 9,
            name: "wait",
            kind: "message",
            T: Kfu,
            oneof: "action"
        },
        {
            no: 10,
            name: "screenshot",
            kind: "message",
            T: Yfu,
            oneof: "action"
        },
        {
            no: 11,
            name: "cursor_position",
            kind: "message",
            T: Xfu,
            oneof: "action"
        }
    ]), $fu = k.makeMessageType("agent.v1.MouseMoveAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: KUt
        }
    ]), Hfu = k.makeMessageType("agent.v1.ClickAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: KUt,
            opt: !0
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: k.getEnumType(Ibt)
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
            opt: !0
        }
    ]), Wfu = k.makeMessageType("agent.v1.MouseDownAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: k.getEnumType(Ibt)
        }
    ]), Gfu = k.makeMessageType("agent.v1.MouseUpAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: k.getEnumType(Ibt)
        }
    ]), Vfu = k.makeMessageType("agent.v1.DragAction", ()=>[
        {
            no: 1,
            name: "path",
            kind: "message",
            T: KUt,
            repeated: !0
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: k.getEnumType(Ibt)
        },
        {
            no: 3,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jfu = k.makeMessageType("agent.v1.ScrollAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: KUt,
            opt: !0
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: k.getEnumType(zUt)
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
            opt: !0
        }
    ]), qfu = k.makeMessageType("agent.v1.TypeAction", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), zfu = k.makeMessageType("agent.v1.KeyAction", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "stroke",
            kind: "enum",
            T: k.getEnumType(Bfu)
        }
    ]), Kfu = k.makeMessageType("agent.v1.WaitAction", ()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        }
    ]), Yfu = k.makeMessageType("agent.v1.ScreenshotAction", []), Xfu = k.makeMessageType("agent.v1.CursorPositionAction", []), iIn = k.makeMessageType("agent.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: NBs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: OBs,
            oneof: "result"
        }
    ]), NBs = k.makeMessageType("agent.v1.ComputerUseSuccess", ()=>[
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
            opt: !0
        },
        {
            no: 4,
            name: "log",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "screenshot_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "cursor_position",
            kind: "message",
            T: KUt,
            opt: !0
        },
        {
            no: 7,
            name: "settle_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "settle_outcome",
            kind: "enum",
            T: k.getEnumType(Ufu),
            opt: !0
        }
    ]), OBs = k.makeMessageType("agent.v1.ComputerUseError", ()=>[
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
            opt: !0
        },
        {
            no: 5,
            name: "screenshot",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "screenshot_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FBs = k.makeMessageType("agent.v1.ComputerUseToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: nIn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: iIn
        }
    ]);

}
