import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Ug, Jz, Xz, Qz, pu, Zz, YP, eY, tY, nY, rY, sY, iY, aY, oY, cY, lY, dY, uY, JP, XP, mY;
export { JP, Jz, Qz, Ug, XP, Xz, YP, Zz, aY, cY, dY, eY, iY, lY, mY, nY, oY, pu, rY, sY, tY, uY };
var __wakaru_QP_initialized = false;
export function QP() {
if (__wakaru_QP_initialized) return;
__wakaru_QP_initialized = true;
"use strict";
h(), F(), Ug = c.makeEnum("agent.v1.MouseButton", [
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
]), Jz = c.makeEnum("agent.v1.ScrollDirection", [
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
]), Xz = c.makeEnum("agent.v1.KeyStroke", [
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
]), Qz = c.makeEnum("agent.v1.ComputerUseSettleOutcome", [
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
]), pu = c.makeMessageType("agent.v1.Coordinate", ()=>[
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
    ]), Zz = c.makeMessageType("agent.v1.ComputerUseArgs", ()=>[
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
            T: YP,
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
    ]), YP = c.makeMessageType("agent.v1.ComputerUseAction", ()=>[
        {
            no: 1,
            name: "mouse_move",
            kind: "message",
            T: eY,
            oneof: "action"
        },
        {
            no: 2,
            name: "click",
            kind: "message",
            T: tY,
            oneof: "action"
        },
        {
            no: 3,
            name: "mouse_down",
            kind: "message",
            T: nY,
            oneof: "action"
        },
        {
            no: 4,
            name: "mouse_up",
            kind: "message",
            T: rY,
            oneof: "action"
        },
        {
            no: 5,
            name: "drag",
            kind: "message",
            T: sY,
            oneof: "action"
        },
        {
            no: 6,
            name: "scroll",
            kind: "message",
            T: iY,
            oneof: "action"
        },
        {
            no: 7,
            name: "type",
            kind: "message",
            T: aY,
            oneof: "action"
        },
        {
            no: 8,
            name: "key",
            kind: "message",
            T: oY,
            oneof: "action"
        },
        {
            no: 9,
            name: "wait",
            kind: "message",
            T: cY,
            oneof: "action"
        },
        {
            no: 10,
            name: "screenshot",
            kind: "message",
            T: lY,
            oneof: "action"
        },
        {
            no: 11,
            name: "cursor_position",
            kind: "message",
            T: dY,
            oneof: "action"
        }
    ]), eY = c.makeMessageType("agent.v1.MouseMoveAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: pu
        }
    ]), tY = c.makeMessageType("agent.v1.ClickAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: pu,
            opt: !0
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: c.getEnumType(Ug)
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
    ]), nY = c.makeMessageType("agent.v1.MouseDownAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: c.getEnumType(Ug)
        }
    ]), rY = c.makeMessageType("agent.v1.MouseUpAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: c.getEnumType(Ug)
        }
    ]), sY = c.makeMessageType("agent.v1.DragAction", ()=>[
        {
            no: 1,
            name: "path",
            kind: "message",
            T: pu,
            repeated: !0
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: c.getEnumType(Ug)
        },
        {
            no: 3,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iY = c.makeMessageType("agent.v1.ScrollAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: pu,
            opt: !0
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: c.getEnumType(Jz)
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
    ]), aY = c.makeMessageType("agent.v1.TypeAction", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), oY = c.makeMessageType("agent.v1.KeyAction", ()=>[
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
            T: c.getEnumType(Xz)
        }
    ]), cY = c.makeMessageType("agent.v1.WaitAction", ()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        }
    ]), lY = c.makeMessageType("agent.v1.ScreenshotAction", []), dY = c.makeMessageType("agent.v1.CursorPositionAction", []), uY = c.makeMessageType("agent.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: JP,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: XP,
            oneof: "result"
        }
    ]), JP = c.makeMessageType("agent.v1.ComputerUseSuccess", ()=>[
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
            T: pu,
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
            T: c.getEnumType(Qz),
            opt: !0
        }
    ]), XP = c.makeMessageType("agent.v1.ComputerUseError", ()=>[
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
    ]), mY = c.makeMessageType("agent.v1.ComputerUseToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Zz
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: uY
        }
    ]);

}
