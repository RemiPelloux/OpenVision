var PINNED_PROMPT_CONFIG;
export { PINNED_PROMPT_CONFIG };
var __wakaru_init_private_inference_model_initialized = false;
export function init_private_inference_model() {
if (__wakaru_init_private_inference_model_initialized) return;
__wakaru_init_private_inference_model_initialized = true;
"use strict";
PINNED_PROMPT_CONFIG = {
    loopNudge: void 0,
    progressReminderThreshold: void 0,
    longReasoningReminder: void 0,
    effortLevel: void 0,
    supportsAssistantMessagePrefill: true,
    enableLineNumbers: true,
    useSparseReadLineNumbers: false,
    postToolReminders: []
};

}
