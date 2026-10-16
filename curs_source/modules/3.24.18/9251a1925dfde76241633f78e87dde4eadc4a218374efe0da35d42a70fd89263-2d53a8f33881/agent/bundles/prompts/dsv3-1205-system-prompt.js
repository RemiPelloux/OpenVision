import { init_agent_type_description } from "./agent-type-description.js";
import { init_background_setup_status } from "./cloud/background-setup-status.js";
import { init_no_repository_access } from "./cloud/no-repository-access.js";
import { init_self_hosted_machine } from "./cloud/self-hosted-machine.js";
import { init_shared2 } from "./shared.js";
import { init_slack_sender_types } from "./slack-sender-types.js";
import { init_environment_setup_source } from "../utils/environment-setup-source.js";
import { init_background_composer_pb } from "../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
var __wakaru_init_dsv3_1205_system_prompt_initialized = false;
export function init_dsv3_1205_system_prompt() {
if (__wakaru_init_dsv3_1205_system_prompt_initialized) return;
__wakaru_init_dsv3_1205_system_prompt_initialized = true;
"use strict";
init_background_composer_pb();
init_environment_setup_source();
init_agent_type_description();
init_background_setup_status();
init_self_hosted_machine();
init_no_repository_access();
init_shared2();
init_slack_sender_types();

}
