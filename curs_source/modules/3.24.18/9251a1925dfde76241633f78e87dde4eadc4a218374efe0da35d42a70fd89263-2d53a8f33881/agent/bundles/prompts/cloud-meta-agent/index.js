import { init_constants6 } from "../../constants.js";
import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
import { init_background_composer_pb } from "../../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
var NAMED_AGENT_HOME_SESSION_KIND, NAMED_AGENT_SLACK_THREAD_SESSION_KIND, NAMED_AGENT_SLACK_CHANNEL_SESSION_KIND, NAMED_AGENT_GLASS_SESSION_KIND, NAMED_AGENT_TIMER_SESSION_KIND, NAMED_AGENT_SUBSCRIPTION_EVENT_SESSION_KIND, NAMED_AGENT_GITHUB_PR_SESSION_KIND, UNATTENDED_SESSION_DELIVERY_GUIDANCE;
export { NAMED_AGENT_GITHUB_PR_SESSION_KIND, NAMED_AGENT_GLASS_SESSION_KIND, NAMED_AGENT_HOME_SESSION_KIND, NAMED_AGENT_SLACK_CHANNEL_SESSION_KIND, NAMED_AGENT_SLACK_THREAD_SESSION_KIND, NAMED_AGENT_SUBSCRIPTION_EVENT_SESSION_KIND, NAMED_AGENT_TIMER_SESSION_KIND, UNATTENDED_SESSION_DELIVERY_GUIDANCE };
var __wakaru_init_cloud_meta_agent_initialized = false;
export function init_cloud_meta_agent() {
if (__wakaru_init_cloud_meta_agent_initialized) return;
__wakaru_init_cloud_meta_agent_initialized = true;
"use strict";
init_jsx_runtime();
init_background_composer_pb();
init_constants6();
NAMED_AGENT_HOME_SESSION_KIND = "home";
NAMED_AGENT_SLACK_THREAD_SESSION_KIND = "slack_thread";
NAMED_AGENT_SLACK_CHANNEL_SESSION_KIND = "slack_channel";
NAMED_AGENT_GLASS_SESSION_KIND = "glass";
NAMED_AGENT_TIMER_SESSION_KIND = "timer";
NAMED_AGENT_SUBSCRIPTION_EVENT_SESSION_KIND = "subscription_event";
NAMED_AGENT_GITHUB_PR_SESSION_KIND = "github_pr";
UNATTENDED_SESSION_DELIVERY_GUIDANCE = "no one is necessarily watching it live, so deliver anything user-relevant through your configured channels rather than assuming your assistant text is seen.";

}
