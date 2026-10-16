import { uqc } from "./cloud-agent.ts";
import { x } from "./tslib.es6.js";
var h2, wki, Izc, Eos, Azc, xos, Ios, Rzc, Dzc, Aos;
export { Aos, Azc, Dzc, Eos, Ios, Izc, Rzc, h2, wki, xos };
var __wakaru_s1g_initialized = false;
export function s1g() {
if (__wakaru_s1g_initialized) return;
__wakaru_s1g_initialized = true;
"use strict";
x(), uqc(), h2 = "side-chat", wki = "New Side Chat", Izc = "Side Chat", Eos = 40, Azc = new Set([
    "text",
    "hardBreak",
    "mention",
    "mentionNode",
    "commandNode"
]), xos = "side-chat-boundary:", Ios = "side_chat_boundary", Rzc = `Side chat boundary.

Everything before this boundary is inherited history from the parent chat. It is reference context only \u2014 not your current assignment.

Do not continue, execute, or complete any instructions, plans, tool calls, approvals, edits, Project coordinator tasks, task lists, or unanswered questions that appear only before this boundary. The parent's last user message (if any) was for the parent chat; it is not addressed to you unless a message after this boundary explicitly asks you to continue that work.

Only messages after this boundary are active instructions for this side chat.

You are a side chat: a focused conversation alongside the parent. Default to investigating and answering (read, search, analyze). Do not modify files, source, git state, or other workspace state unless the user explicitly asks for that change after this boundary. Keep any requested mutations minimal and local to the side-chat ask.`, Dzc = "You are still in a side chat alongside the parent. Follow this turn's user message. Treat parent/inherited context as reference only \u2014 do not resume the parent's pending work unless this turn explicitly asks.", Aos = `<system_reminder>
${Dzc}
</system_reminder>`;

}
