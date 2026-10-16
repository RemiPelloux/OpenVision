import { external_exports } from "../../external_exports.js";
import { init_zod } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var slackStatusPhraseSchema;
export { slackStatusPhraseSchema };
var __wakaru_init_slack_status_phrase_initialized = false;
export function init_slack_status_phrase() {
if (__wakaru_init_slack_status_phrase_initialized) return;
__wakaru_init_slack_status_phrase_initialized = true;
"use strict";
init_zod();
slackStatusPhraseSchema = external_exports.string().trim().min(4).max(50).regex(/^is [^\r\n<>]+$/);

}
