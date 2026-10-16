var AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS, SLACK_CHANNEL_POST_ID;
export { AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS, SLACK_CHANNEL_POST_ID };
var __wakaru_init_slack_channel_id_initialized = false;
export function init_slack_channel_id() {
if (__wakaru_init_slack_channel_id_initialized) return;
__wakaru_init_slack_channel_id_initialized = true;
"use strict";
AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS = 10;
SLACK_CHANNEL_POST_ID = /^[CG][A-Z0-9]{8,20}$/;

}
