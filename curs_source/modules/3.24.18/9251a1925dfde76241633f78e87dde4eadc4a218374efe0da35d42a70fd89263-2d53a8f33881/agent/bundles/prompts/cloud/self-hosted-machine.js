var SELF_HOSTED_MACHINE_DESCRIPTION, REMOTE_ENVIRONMENT_SETUP_GUIDANCE, MY_MACHINE_ENVIRONMENT_SETUP_GUIDANCE;
export { MY_MACHINE_ENVIRONMENT_SETUP_GUIDANCE, REMOTE_ENVIRONMENT_SETUP_GUIDANCE, SELF_HOSTED_MACHINE_DESCRIPTION };
var __wakaru_init_self_hosted_machine_initialized = false;
export function init_self_hosted_machine() {
if (__wakaru_init_self_hosted_machine_initialized) return;
__wakaru_init_self_hosted_machine_initialized = true;
"use strict";
SELF_HOSTED_MACHINE_DESCRIPTION = "a self-hosted machine that the user or their team connected to Cursor";
REMOTE_ENVIRONMENT_SETUP_GUIDANCE = "You are executing inside a remote environment. The workspace may not be fully configured yet (e.g. missing dependencies, credentials, or build artifacts). If a command fails due to missing tools, packages, or configuration, first attempt to set up or install the necessary components yourself.";
MY_MACHINE_ENVIRONMENT_SETUP_GUIDANCE = "You are executing on the user's own computer, which they connected to Cursor as a self-hosted machine; it is not an isolated VM. The workspace may not be fully configured yet (e.g. missing dependencies, credentials, or build artifacts). If a command fails due to missing tools, packages, or configuration, prefer project-local setup (such as the repo's package manager or a virtual environment) and avoid system-wide installs or changes to the user's global configuration unless the task requires them.";

}
