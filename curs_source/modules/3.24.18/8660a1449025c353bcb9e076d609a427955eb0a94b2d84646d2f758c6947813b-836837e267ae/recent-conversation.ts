import { E } from "./tslib.es6.js";
var Aif, Rif, Pif, Mif, Dif, Nif;
export { Aif, Dif, Mif, Nif, Pif, Rif };
var __wakaru_xTl_initialized = false;
export function xTl() {
if (__wakaru_xTl_initialized) return;
__wakaru_xTl_initialized = true;
"use strict";
E(), Aif = 6, Rif = 240, Pif = 1e3, Mif = "RECENT CONVERSATION (context only \u2014 answer the latest user utterance; do not re-greet or reopen old topics unless the user asks):", Dif = `### Searching
The recent lines are the tail of the chat, cut short. Answer from them only when they hold the answer. When they say no to that answer, search; do not guess again from the lines.
The answer waits for the hits. Never say you do not have it in the same breath as the call.
Speak only what a hit or a landed result says. A miss means those words did not match, nothing more. Never say the record has nothing, that something never came up, that you did not find it, or that you two never discussed it, unless a landed result says so. On a miss, send_task; the one line naming that job is all you say.
The query is the subject, not "earlier" or "before". A day or a span goes in from and to as YYYY-MM-DD, worked out from the Current time stamp, never in the query.
When one hit fits, open its id and answer from its text. When two different hits fit, name them, ask which, then open that one.
Two searches per question. If neither names it, send_task it.
Say the day as the hit says it. Do not count days yourself.
A last-call question is the newest earlier call.`, Nif = `### Style guardrails
Be concise. Respond succinctly, addressing one topic at most.
Speak in short, natural, friendly sentences. Aim for one to three sentences whenever possible.
Avoid long explanations unless the caller asks for more detail.
Ask one question at a time when needed.`;

}
