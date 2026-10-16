import { ju } from "./agent_pb.js";
import { E } from "./tslib.es6.js";
var gb_, fb_, vb_, _b_;
export { _b_, fb_, gb_, vb_ };
var __wakaru_uSc_initialized = false;
export function uSc() {
if (__wakaru_uSc_initialized) return;
__wakaru_uSc_initialized = true;
"use strict";
E(), ju(), gb_ = {
    configVersion: "unavailable",
    probes: [],
    steps: [],
    serverFacts: new Map
}, fb_ = new Set([]), vb_ = new Map([
    [
        "vercel",
        new Set([
            "list_projects"
        ])
    ]
]), _b_ = new Set([
    "origin_vercel_connected",
    "origin_vercel_publish_access",
    "vercel_repo_link",
    "vercel_team_plan"
]);

}
