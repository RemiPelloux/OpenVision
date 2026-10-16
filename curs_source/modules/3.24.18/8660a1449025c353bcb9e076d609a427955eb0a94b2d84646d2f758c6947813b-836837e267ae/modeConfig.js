import { E } from "./tslib.es6.js";
var BJg, pgs;
export { BJg, pgs };
var __wakaru_mgs_initialized = false;
export function mgs() {
if (__wakaru_mgs_initialized) return;
__wakaru_mgs_initialized = true;
"use strict";
E(), BJg = [
    {
        id: "plan",
        label: "Plan",
        icon: "list-todo",
        color: "yellow",
        placeholder: "Plan changes",
        description: "Generate an implementation plan"
    },
    {
        id: "debug",
        label: "Debug",
        icon: "bugbot",
        color: "red",
        placeholder: "Debug issues",
        description: "Pinpoint the root cause of an issue"
    },
    {
        id: "chat",
        label: "Ask",
        icon: "chat-bubble-question",
        color: "green",
        placeholder: "Ask questions",
        description: "Answer questions without making edits"
    }
], pgs = {
    id: "multitask",
    label: "Multitask",
    icon: "circles",
    color: "purple",
    placeholder: "Coordinate tasks",
    description: "Orchestrate multiple subagents in parallel"
};

}
