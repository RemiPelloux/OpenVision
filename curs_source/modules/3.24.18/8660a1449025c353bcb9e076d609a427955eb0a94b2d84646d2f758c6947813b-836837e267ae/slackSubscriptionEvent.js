import { ju } from "./agent_pb.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var eKa, tKa, hqt, HEn, l9m, nKa, c9m, u9m, sJr, iKa, d9m;
export { HEn, c9m, d9m, eKa, hqt, iKa, l9m, nKa, sJr, tKa, u9m };
var __wakaru_rKa_initialized = false;
export function rKa() {
if (__wakaru_rKa_initialized) return;
__wakaru_rKa_initialized = true;
"use strict";
E(), Mk(), ju(), eKa = "Slack subscription event:", tKa = "Slack message", hqt = 120, HEn = 280, l9m = new Set([
    "slack",
    "github",
    "linear",
    "origin",
    "timer"
]), nKa = new Set([
    "Linear issue created",
    "Linear issue status changed",
    "GitHub event",
    "Linear event",
    "Origin event",
    "Slack message",
    "Subscription event"
]), c9m = new Set([
    "A subscribed pull request changed. Use the linked PR for details if needed",
    "A new message was posted in a subscribed Slack channel or thread",
    "A subscribed GitHub event was received",
    "A subscribed Linear event was received",
    "A subscribed Origin event was received",
    "A subscription event was received",
    "A scheduled timer fired"
]), u9m = [
    "routing key:",
    "subscription id:",
    "team id:",
    "channel id:",
    "thread id:",
    "thread ts:",
    "message id:",
    "message ts:"
], sJr = "Scheduled: ", iKa = "Timer: ", d9m = new Set([
    "opened",
    "reopened",
    "ready_for_review",
    "converted_to_draft",
    "merged",
    "closed"
]);

}
