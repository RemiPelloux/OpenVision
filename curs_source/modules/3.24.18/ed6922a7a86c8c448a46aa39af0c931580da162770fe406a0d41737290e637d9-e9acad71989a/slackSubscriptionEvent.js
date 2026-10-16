import { zd } from "./agent_pb.js";
import { eG } from "./pullRequestIdentity.js";
import { x } from "./tslib.es6.js";
var gpo, fpo, Zkt, GWt, tZd, vpo, nZd, iZd, oqi, _po, rZd;
export { GWt, Zkt, _po, fpo, gpo, iZd, nZd, oqi, rZd, tZd, vpo };
var __wakaru_bpo_initialized = false;
export function bpo() {
if (__wakaru_bpo_initialized) return;
__wakaru_bpo_initialized = true;
"use strict";
x(), eG(), zd(), gpo = "Slack subscription event:", fpo = "Slack message", Zkt = 120, GWt = 280, tZd = new Set([
    "slack",
    "github",
    "linear",
    "origin",
    "timer"
]), vpo = new Set([
    "Linear issue created",
    "Linear issue status changed",
    "GitHub event",
    "Linear event",
    "Origin event",
    "Slack message",
    "Subscription event"
]), nZd = new Set([
    "A subscribed pull request changed. Use the linked PR for details if needed",
    "A new message was posted in a subscribed Slack channel or thread",
    "A subscribed GitHub event was received",
    "A subscribed Linear event was received",
    "A subscribed Origin event was received",
    "A subscription event was received",
    "A scheduled timer fired"
]), iZd = [
    "routing key:",
    "subscription id:",
    "team id:",
    "channel id:",
    "thread id:",
    "thread ts:",
    "message id:",
    "message ts:"
], oqi = "Scheduled: ", _po = "Timer: ", rZd = new Set([
    "opened",
    "reopened",
    "ready_for_review",
    "converted_to_draft",
    "merged",
    "closed"
]);

}
