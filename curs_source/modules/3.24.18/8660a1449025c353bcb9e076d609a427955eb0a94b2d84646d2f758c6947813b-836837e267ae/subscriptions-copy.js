import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var Ok_, Fk_;
export { Fk_, Ok_ };
var __wakaru_fQC_initialized = false;
export function fQC() {
if (__wakaru_fQC_initialized) return;
__wakaru_fQC_initialized = true;
"use strict";
E(), Bt(), Ok_ = {
    label: "Subscriptions",
    pillNoun: D("glass.agentPanel.subscriptionsPill.noun", "Listening"),
    pillActionLabel: (t)=>D("glass.agentPanel.subscriptionsPill.view", "View subscriptions ({0})", String(t)),
    closeTrayLabel: "Close subscriptions tray",
    emptyStatus: "No subscriptions yet",
    loadError: "Failed to load subscriptions",
    removeTooltip: "Remove Subscription",
    removeAriaLabel: (t)=>`Remove subscription ${t}`,
    unknownActivity: "Subscription activity",
    sessionKindLabel: "Subscription event"
}, Fk_ = {
    label: "Triggers",
    pillNoun: D("glass.agentPanel.triggersPill.noun", "Triggers"),
    pillActionLabel: (t)=>D("glass.agentPanel.triggersPill.view", "View triggers ({0})", String(t)),
    closeTrayLabel: "Close triggers tray",
    emptyStatus: "No triggers yet",
    loadError: "Failed to load triggers",
    removeTooltip: "Remove Trigger",
    removeAriaLabel: (t)=>`Remove trigger: ${t}`,
    unknownActivity: "Trigger activity",
    sessionKindLabel: "Trigger"
};

}
