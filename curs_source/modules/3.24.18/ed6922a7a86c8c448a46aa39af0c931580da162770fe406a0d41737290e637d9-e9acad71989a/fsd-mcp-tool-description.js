import { x } from "./tslib.es6.js";
var Sxs, Z4l;
export { Sxs, Z4l };
var __wakaru_kxs_initialized = false;
export function kxs() {
if (__wakaru_kxs_initialized) return;
__wakaru_kxs_initialized = true;
"use strict";
x(), Sxs = {
    list_outputs: "Listed FSD outputs",
    record_outputs: "Recorded FSD output",
    update_output: "Updated FSD output",
    supersede_output: "Superseded FSD output",
    dismiss_output: "Dismissed FSD output",
    get_pr_metadata: "Read PR metadata",
    get_pr_comments: "Read PR comments",
    get_pr_ci: "Read PR CI",
    notify: "Sent FSD Slack update",
    set_slack_thread_status: "Updated FSD Slack status",
    start: "Started FSD",
    stop: "Stopped FSD"
}, Z4l = {
    start: {
        loading: "Starting FSD",
        completed: "Started FSD",
        error: "Couldn't start FSD"
    },
    stop: {
        loading: "Stopping FSD",
        completed: "Stopped FSD",
        error: "Couldn't stop FSD"
    }
};

}
