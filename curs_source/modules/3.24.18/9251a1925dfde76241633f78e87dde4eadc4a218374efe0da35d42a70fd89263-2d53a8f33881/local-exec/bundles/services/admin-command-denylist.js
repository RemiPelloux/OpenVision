import { init_dist3 } from "../../../utils/dist/index.js";
var ADMIN_COMMAND_DENYLIST_UNANALYZABLE_REASON, ANSI_C_ESCAPES;
export { ADMIN_COMMAND_DENYLIST_UNANALYZABLE_REASON, ANSI_C_ESCAPES };
var __wakaru_init_admin_command_denylist2_initialized = false;
export function init_admin_command_denylist2() {
if (__wakaru_init_admin_command_denylist2_initialized) return;
__wakaru_init_admin_command_denylist2_initialized = true;
"use strict";
init_dist3();
ADMIN_COMMAND_DENYLIST_UNANALYZABLE_REASON = `Denied: this command could not be conclusively analyzed against your team's administrator command denylist, so it was blocked (fail-closed) and was not executed. It cannot be approved from this conversation; only a user can run it manually outside the agent. You may continue working on the task.`;
ANSI_C_ESCAPES = {
    a: "\x07",
    b: "\b",
    e: "\x1B",
    E: "\x1B",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	",
    v: "\v",
    "\\": "\\",
    "'": "'",
    '"': '"',
    "?": "?"
};

}
