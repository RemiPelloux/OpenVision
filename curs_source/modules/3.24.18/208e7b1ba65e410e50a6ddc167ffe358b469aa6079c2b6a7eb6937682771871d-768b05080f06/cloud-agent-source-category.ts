import { Gf, ke } from "./background_composer_pb.js";
import { B9, zn } from "./cloud_agent_source_pb.js";
import { h } from "./tslib.es6.js";
function zDe(e) {
    switch(e){
        case ke.EDITOR:
        case ke.GLASS:
        case ke.CLOUD_META_AGENT:
        case ke.AS_SUBAGENT_FROM_LOCAL:
            return "desktop";
        case ke.SAND_CODING_SUBAGENT:
        case ke.GROK_BOT:
            return "sand";
        case ke.AS_SUBAGENT_FROM_CLOUD:
        case ke.AS_SIDE_CHAT_FROM_CLOUD:
            return "internal";
        case ke.ENVIRONMENT_SETUP_WEB:
        case ke.ENVIRONMENT_SETUP_GLASS:
        case ke.ENVIRONMENT_SETUP_ONBOARDING_AUTO:
            return "setup";
        case ke.GRIND_WEB:
        case ke.WEBSITE:
        case ke.CLOUD_ONBOARDING_WEB:
        case ke.CHANGE_MONITOR_ONBOARDING_WEB:
        case ke.UNSPECIFIED:
        case void 0:
        case ke.GRAPHITE_CHAT_WEB:
        case ke.GRAPHITE_FULL_SELF_DRIVING:
        case ke.FULL_SELF_DRIVING:
        case ke.TEAMS:
        case ke.JIRA:
            return "web";
        case ke.IOS_APP:
            return "mobile";
        case ke.AUTOMATIONS:
            return "automations";
        case ke.API:
            return "api";
        case ke.SDK:
            return "sdk";
        case ke.CLI:
            return "cli";
        case ke.SLACK:
            return "slack";
        case ke.LINEAR:
            return "linear";
        case ke.GITHUB:
        case ke.GITLAB:
        case ke.BITBUCKET:
        case ke.ORIGIN:
            return "scm";
        case ke.BUGBOT_AUTOFIX:
        case ke.GITHUB_CI_AUTOFIX:
            return "bugbot_autofix";
        case ke.QABOT_FRONTEND:
            return "qabot_frontend";
        case ke.LOCAL:
            return "local";
        default:
            {
                const t = e;
                return "web";
            }
    }
}
var BE, Gat, tU, Vat;
export { BE, Gat, Vat, tU, zDe };
var __wakaru_$at_initialized = false;
export function $at() {
if (__wakaru_$at_initialized) return;
__wakaru_$at_initialized = true;
"use strict";
h(), Gf(), B9(), BE = [
    "desktop",
    "web",
    "mobile",
    "slack",
    "linear",
    "scm",
    "cli",
    "sand",
    "setup",
    "sdk",
    "automations",
    "api",
    "bugbot_autofix",
    "qabot_frontend",
    "local",
    "internal"
], Gat = (()=>{
    const e = Object.fromEntries(BE.map((t)=>[
            t,
            []
        ]));
    for (const t of Object.values(ke))typeof t == "number" && t !== ke.UNSPECIFIED && e[zDe(t)].push(t);
    return e;
})(), tU = {
    desktop: zn.DESKTOP,
    sand: zn.SAND,
    web: zn.WEB,
    mobile: zn.MOBILE,
    slack: zn.SLACK,
    linear: zn.LINEAR,
    scm: zn.SCM,
    cli: zn.CLI,
    setup: zn.SETUP,
    sdk: zn.SDK,
    automations: zn.AUTOMATIONS,
    api: zn.API,
    bugbot_autofix: zn.BUGBOT_AUTOFIX,
    qabot_frontend: zn.QABOT_FRONTEND,
    local: zn.LOCAL,
    internal: zn.INTERNAL
}, Vat = new Map(Object.keys(tU).map((e)=>[
        tU[e],
        e
    ]));

}
