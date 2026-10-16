import { Owc } from "./grok-bot-transcript-entries.react.js";
import { pUi } from "./grok-bot-transcript-entry.js";
import { t7e } from "./main-bot-name.js";
import { Fx_ } from "./main-bot-transcript-row-model.js";
import { xwc } from "./main-bot-unsupported-card.react.js";
import { kqr } from "./stripMarkdownToPlainText.js";
import { E } from "./tslib.es6.js";
var qx_, zx_, e0c, Vx_, Kx_, Yx_, Xx_, Zx_, Qx_, t0c, Jx_, n0c;
export { Jx_, Kx_, Qx_, Vx_, Xx_, Yx_, Zx_, e0c, n0c, qx_, t0c, zx_ };
var __wakaru_i0c_initialized = false;
export function i0c() {
if (__wakaru_i0c_initialized) return;
__wakaru_i0c_initialized = true;
"use strict";
E(), kqr(), t7e(), Owc(), pUi(), Fx_(), xwc(), qx_ = "working", zx_ = "reconnecting", e0c = "intro", Vx_ = 168, Kx_ = {
    human: 52,
    assistantMarkdown: 32,
    hostRow: 48,
    statusLine: 29,
    toolPlaceholder: 29,
    tailStatus: 29
}, Yx_ = 64, Xx_ = 4, Zx_ = {}, Qx_ = {}, t0c = new WeakMap, Jx_ = {
    working: !0,
    activity: "thinking",
    retrying: !1,
    updatedAtMs: 0,
    staleAfterMs: 0
}, n0c = new WeakMap;

}
