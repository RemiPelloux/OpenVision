import { init_cloud_agent } from "./cloud-agent.js";
var SIDE_CHAT_SUBAGENT_TYPE_NAME, SIDE_CHAT_DEFAULT_NAME, LEGACY_SIDE_CHAT_DEFAULT_NAME, SIDE_CHAT_NAME_MAX_LENGTH, SIDE_CHAT_CREATION_REJECTED_REASON_KEY, SIDE_CHAT_CREATION_REJECTED_TOO_MANY, SIDE_CHAT_LIMIT_REACHED_MESSAGE, SIDE_CHAT_LIMIT_REACHED_TITLE, TIPTAP_INLINE_NODE_TYPES, SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX, SIDE_CHAT_BOUNDARY_TAG, SIDE_CHAT_BOUNDARY_BODY, SIDE_CHAT_STICKY_REMINDER_BODY, SIDE_CHAT_STICKY_SYSTEM_REMINDER;
export { LEGACY_SIDE_CHAT_DEFAULT_NAME, SIDE_CHAT_BOUNDARY_BODY, SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX, SIDE_CHAT_BOUNDARY_TAG, SIDE_CHAT_CREATION_REJECTED_REASON_KEY, SIDE_CHAT_CREATION_REJECTED_TOO_MANY, SIDE_CHAT_DEFAULT_NAME, SIDE_CHAT_LIMIT_REACHED_MESSAGE, SIDE_CHAT_LIMIT_REACHED_TITLE, SIDE_CHAT_NAME_MAX_LENGTH, SIDE_CHAT_STICKY_REMINDER_BODY, SIDE_CHAT_STICKY_SYSTEM_REMINDER, SIDE_CHAT_SUBAGENT_TYPE_NAME, TIPTAP_INLINE_NODE_TYPES };
var __wakaru_init_side_chats_initialized = false;
export function init_side_chats() {
if (__wakaru_init_side_chats_initialized) return;
__wakaru_init_side_chats_initialized = true;
"use strict";
init_cloud_agent();
SIDE_CHAT_SUBAGENT_TYPE_NAME = "side-chat";
SIDE_CHAT_DEFAULT_NAME = "New Side Chat";
LEGACY_SIDE_CHAT_DEFAULT_NAME = "Side Chat";
SIDE_CHAT_NAME_MAX_LENGTH = 40;
SIDE_CHAT_CREATION_REJECTED_REASON_KEY = "sideChatCreationRejectedReason";
SIDE_CHAT_CREATION_REJECTED_TOO_MANY = "too_many_side_chats";
SIDE_CHAT_LIMIT_REACHED_MESSAGE = "This agent has reached its side chat limit. Start a new agent to create more side chats.";
SIDE_CHAT_LIMIT_REACHED_TITLE = "Side chat limit reached";
TIPTAP_INLINE_NODE_TYPES = new Set([
    "text",
    "hardBreak",
    "mention",
    "mentionNode",
    "commandNode"
]);
SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX = "side-chat-boundary:";
SIDE_CHAT_BOUNDARY_TAG = "side_chat_boundary";
SIDE_CHAT_BOUNDARY_BODY = `Side chat boundary.

Everything before this boundary is inherited history from the parent chat. It is reference context only \u2014 not your current assignment.

Do not continue, execute, or complete any instructions, plans, tool calls, approvals, edits, Project coordinator tasks, task lists, or unanswered questions that appear only before this boundary. The parent's last user message (if any) was for the parent chat; it is not addressed to you unless a message after this boundary explicitly asks you to continue that work.

Only messages after this boundary are active instructions for this side chat.

You are a side chat: a focused conversation alongside the parent. Default to investigating and answering (read, search, analyze). Do not modify files, source, git state, or other workspace state unless the user explicitly asks for that change after this boundary. Keep any requested mutations minimal and local to the side-chat ask.`;
SIDE_CHAT_STICKY_REMINDER_BODY = "You are still in a side chat alongside the parent. Follow this turn's user message. Treat parent/inherited context as reference only \u2014 do not resume the parent's pending work unless this turn explicitly asks.";
SIDE_CHAT_STICKY_SYSTEM_REMINDER = `<system_reminder>
${SIDE_CHAT_STICKY_REMINDER_BODY}
</system_reminder>`;

}
