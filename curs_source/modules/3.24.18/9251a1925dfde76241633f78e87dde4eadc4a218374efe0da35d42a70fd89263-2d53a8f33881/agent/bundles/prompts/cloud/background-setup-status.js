import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
var BACKGROUND_SETUP_STATUS_GUIDANCE, START_SCRIPT_STATUS_GUIDANCE;
export { BACKGROUND_SETUP_STATUS_GUIDANCE, START_SCRIPT_STATUS_GUIDANCE };
var __wakaru_init_background_setup_status_initialized = false;
export function init_background_setup_status() {
if (__wakaru_init_background_setup_status_initialized) return;
__wakaru_init_background_setup_status_initialized = true;
"use strict";
init_jsx_runtime();
BACKGROUND_SETUP_STATUS_GUIDANCE = "Your environment may still be finishing setup (e.g. installing dependencies) in the background, even after earlier steps have run. Before relying on a fully set-up environment \u2014 linting, building, running tests, starting the app, or installing more dependencies \u2014 check the setup status: if `/tmp/cursor/async-install/install-user.status` exists, setup has finished and the file contains its exit code (`0` means success); if that file is missing but `/tmp/cursor/async-install/install-user.log` exists, that state is ambiguous, so verify that the async install process is currently running before waiting. When a live setup PID is available, stream the log with a process-bound wait such as `tail --pid=<pid> -f <log-path>`; if no live setup process can be found, do not wait indefinitely on the log: inspect it for setup/startup failure clues and continue or remediate as appropriate. Never kill a running setup process. If neither file exists, there is no background setup to wait on. Read-only exploration and editing never need to wait.";
START_SCRIPT_STATUS_GUIDANCE = "Not every environment has a `start` script (the `start` field of `.cursor/environment.json`). When one is present it is launched detached on boot to bring up services such as Docker, databases, and dev servers, and nothing waits on it, so when it fails you are not told. Before assuming those services are up, look under `/tmp/cursor/start-user/`. Read `start-user.log` for the script's output. If `start-user.status` exists, the script has already exited and the file holds its exit code: nonzero means it failed, and even `0` means anything it was holding in the foreground is gone. If only the log exists, the script is still running. Do not infer from missing files alone whether services are up or down.";

}
