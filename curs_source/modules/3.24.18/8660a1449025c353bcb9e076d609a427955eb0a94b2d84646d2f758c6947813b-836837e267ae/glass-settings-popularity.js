import { YOv } from "./BPv.js";
import { E } from "./tslib.es6.js";
var ZOv, QOv, JOv;
export { JOv, QOv, ZOv };
var __wakaru_o80_initialized = false;
export function o80() {
if (__wakaru_o80_initialized) return;
__wakaru_o80_initialized = true;
"use strict";
E(), ZOv = [
    "Light Theme",
    "Dark Theme",
    "Manage Themes",
    "Explore Subagent Model",
    "Tool Call Density",
    "Usage Summary",
    "Submit with Ctrl + Enter",
    "Auto-Approve Mode Transitions",
    "Auto-Accept Web Search",
    "Commit Attribution",
    "PR Attribution",
    "Open Agents Window on Startup",
    "Branch Prefix",
    "Themed Diff Backgrounds",
    "Code Font Size",
    "UI Font Size",
    "Reduce Transparency",
    "Text Size",
    "Font Smoothing",
    "Hide Email Address",
    "Auto Format on Agent Finish",
    "UI Font Family",
    "Code Font Family"
], QOv = {
    "submit with \u2318 + enter": "submit with ctrl + enter"
}, JOv = new Map(ZOv.map((t, e)=>[
        YOv(t),
        e
    ]));

}
