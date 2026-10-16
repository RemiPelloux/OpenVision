import { Ktd } from "./cloud-agent.ts";
import { E } from "./tslib.es6.js";
var PI, qOe, zid, txo, Vid, Kid, Yid, Xid, nxo, ixo, Zid, Qid, rxo;
export { Kid, PI, Qid, Vid, Xid, Yid, Zid, ixo, nxo, qOe, rxo, txo, zid };
var __wakaru_Nwy_initialized = false;
export function Nwy() {
if (__wakaru_Nwy_initialized) return;
__wakaru_Nwy_initialized = true;
"use strict";
E(), Ktd(), PI = "side-chat", qOe = "New Side Chat", zid = "Side Chat", txo = 40, Vid = "sideChatCreationRejectedReason", Kid = "too_many_side_chats", Yid = "This agent has reached its side chat limit. Start a new agent to create more side chats.", Xid = new Set([
    "text",
    "hardBreak",
    "mention",
    "mentionNode",
    "commandNode"
]), nxo = "side-chat-boundary:", ixo = "side_chat_boundary", Zid = `Side chat boundary.

Everything before this boundary is inherited history from the parent chat. It is reference context only \u2014 not your current assignment.

Do not continue, execute, or complete any instructions, plans, tool calls, approvals, edits, Project coordinator tasks, task lists, or unanswered questions that appear only before this boundary. The parent's last user message (if any) was for the parent chat; it is not addressed to you unless a message after this boundary explicitly asks you to continue that work.

Only messages after this boundary are active instructions for this side chat.

You are a side chat: a focused conversation alongside the parent. Default to investigating and answering (read, search, analyze). Do not modify files, source, git state, or other workspace state unless the user explicitly asks for that change after this boundary. Keep any requested mutations minimal and local to the side-chat ask.`, Qid = "You are still in a side chat alongside the parent. Follow this turn's user message. Treat parent/inherited context as reference only \u2014 do not resume the parent's pending work unless this turn explicitly asks.", rxo = `<system_reminder>
${Qid}
</system_reminder>`;

}
