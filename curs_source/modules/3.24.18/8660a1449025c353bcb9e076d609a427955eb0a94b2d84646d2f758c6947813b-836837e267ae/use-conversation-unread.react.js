import { Qe } from "./Iwo.js";
import { bge } from "./agent-selection.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { hg_ } from "./conversation-unread.js";
import { N2 } from "./glass-host-service.js";
import { Zu } from "./glass-log-service.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { L4l } from "./use-glass-polling-active.react.js";
import { S4n } from "./use-reactive-effect.react.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
var Tg_, Eg_;
export { Eg_, Tg_ };
var __wakaru_R4C_initialized = false;
export function R4C() {
if (__wakaru_R4C_initialized) return;
__wakaru_R4C_initialized = true;
"use strict";
E(), Mt(), Qe(), wl(), L4l(), S4n(), In(), Af(), N2(), Zu(), bge(), hg_(), Tg_ = {
    lastReadAtMs: void 0,
    latestMessageBubbleId: void 0,
    latestMessageAtMs: void 0,
    anchors: [],
    messageBubbleIds: [],
    incomingMessageCount: 0,
    incomingMessageBubbleIds: []
}, Eg_ = {
    agentId: void 0
};

}
