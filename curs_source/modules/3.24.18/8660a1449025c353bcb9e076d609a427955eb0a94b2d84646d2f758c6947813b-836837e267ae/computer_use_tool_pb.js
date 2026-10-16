import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var w4t, Upn, Bgd, Ugd, jpn, Zei, m3o, jgd, $gd, Hgd, Wgd, Ggd, qgd, zgd, Vgd, Kgd, Ygd, Xgd, Qei, g3o, f3o, v3o;
export { $gd, Bgd, Ggd, Hgd, Kgd, Qei, Ugd, Upn, Vgd, Wgd, Xgd, Ygd, Zei, f3o, g3o, jgd, jpn, m3o, qgd, v3o, w4t, zgd };
var __wakaru_Jei_initialized = false;
export function Jei() {
if (__wakaru_Jei_initialized) return;
__wakaru_Jei_initialized = true;
"use strict";
E(), hr(), w4t = x.makeEnum("agent.v1.MouseButton", [
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
]), Upn = x.makeEnum("agent.v1.ScrollDirection", [
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
]), Bgd = x.makeEnum("agent.v1.KeyStroke", [
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
]), Ugd = x.makeEnum("agent.v1.ComputerUseSettleOutcome", [
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
]), jpn = x.makeMessageType("agent.v1.Coordinate", ()=>[
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
    ]), Zei = x.makeMessageType("agent.v1.ComputerUseArgs", ()=>[
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
            T: m3o,
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
    ]), m3o = x.makeMessageType("agent.v1.ComputerUseAction", ()=>[
        {
            no: 1,
            name: "mouse_move",
            kind: "message",
            T: jgd,
            oneof: "action"
        },
        {
            no: 2,
            name: "click",
            kind: "message",
            T: $gd,
            oneof: "action"
        },
        {
            no: 3,
            name: "mouse_down",
            kind: "message",
            T: Hgd,
            oneof: "action"
        },
        {
            no: 4,
            name: "mouse_up",
            kind: "message",
            T: Wgd,
            oneof: "action"
        },
        {
            no: 5,
            name: "drag",
            kind: "message",
            T: Ggd,
            oneof: "action"
        },
        {
            no: 6,
            name: "scroll",
            kind: "message",
            T: qgd,
            oneof: "action"
        },
        {
            no: 7,
            name: "type",
            kind: "message",
            T: zgd,
            oneof: "action"
        },
        {
            no: 8,
            name: "key",
            kind: "message",
            T: Vgd,
            oneof: "action"
        },
        {
            no: 9,
            name: "wait",
            kind: "message",
            T: Kgd,
            oneof: "action"
        },
        {
            no: 10,
            name: "screenshot",
            kind: "message",
            T: Ygd,
            oneof: "action"
        },
        {
            no: 11,
            name: "cursor_position",
            kind: "message",
            T: Xgd,
            oneof: "action"
        }
    ]), jgd = x.makeMessageType("agent.v1.MouseMoveAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: jpn
        }
    ]), $gd = x.makeMessageType("agent.v1.ClickAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: jpn,
            opt: !0
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: x.getEnumType(w4t)
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
    ]), Hgd = x.makeMessageType("agent.v1.MouseDownAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: x.getEnumType(w4t)
        }
    ]), Wgd = x.makeMessageType("agent.v1.MouseUpAction", ()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: x.getEnumType(w4t)
        }
    ]), Ggd = x.makeMessageType("agent.v1.DragAction", ()=>[
        {
            no: 1,
            name: "path",
            kind: "message",
            T: jpn,
            repeated: !0
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: x.getEnumType(w4t)
        },
        {
            no: 3,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), qgd = x.makeMessageType("agent.v1.ScrollAction", ()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: jpn,
            opt: !0
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: x.getEnumType(Upn)
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
    ]), zgd = x.makeMessageType("agent.v1.TypeAction", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Vgd = x.makeMessageType("agent.v1.KeyAction", ()=>[
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
            T: x.getEnumType(Bgd)
        }
    ]), Kgd = x.makeMessageType("agent.v1.WaitAction", ()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        }
    ]), Ygd = x.makeMessageType("agent.v1.ScreenshotAction", []), Xgd = x.makeMessageType("agent.v1.CursorPositionAction", []), Qei = x.makeMessageType("agent.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: g3o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: f3o,
            oneof: "result"
        }
    ]), g3o = x.makeMessageType("agent.v1.ComputerUseSuccess", ()=>[
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
            T: jpn,
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
            T: x.getEnumType(Ugd),
            opt: !0
        }
    ]), f3o = x.makeMessageType("agent.v1.ComputerUseError", ()=>[
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
    ]), v3o = x.makeMessageType("agent.v1.ComputerUseToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Zei
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Qei
        }
    ]);

}
