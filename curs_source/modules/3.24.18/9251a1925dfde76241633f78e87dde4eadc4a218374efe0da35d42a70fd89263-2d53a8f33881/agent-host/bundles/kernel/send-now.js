import { init_action_adapters } from "./action-adapters.js";
import { init_turn_queue } from "./turn-queue.js";
import { init_turn_steering } from "./turn-steering.js";
import { init_client4 } from "../public-api/client.js";
var AgentHostSendNowRequiresUserMessageError;
export { AgentHostSendNowRequiresUserMessageError };
var __wakaru_init_send_now_initialized = false;
export function init_send_now() {
if (__wakaru_init_send_now_initialized) return;
__wakaru_init_send_now_initialized = true;
"use strict";
init_client4();
init_action_adapters();
init_turn_queue();
init_turn_steering();
AgentHostSendNowRequiresUserMessageError = class extends Error {
    constructor(){
        super("delivery and replaceQueuedTurnId are only valid on userMessageAction");
        this.code = "SEND_NOW_REQUIRES_USER_MESSAGE";
        this.name = "AgentHostSendNowRequiresUserMessageError";
    }
};

}
