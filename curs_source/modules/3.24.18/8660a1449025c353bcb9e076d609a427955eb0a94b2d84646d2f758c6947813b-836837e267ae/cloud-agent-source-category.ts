import { rAl } from "./Ycg.js";
import { ec, pd } from "./background_composer_pb.js";
import { R$a, vX } from "./cloud_agent_source_pb.js";
import { E } from "./tslib.es6.js";
var sAl, Bie, Dzk, oAl, Nzk;
export { Bie, Dzk, Nzk, oAl, sAl };
var __wakaru_Lzk_initialized = false;
export function Lzk() {
if (__wakaru_Lzk_initialized) return;
__wakaru_Lzk_initialized = true;
"use strict";
E(), pd(), R$a(), sAl = [
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
], Bie = {
    desktop: "Desktop",
    sand: "Grok Bot",
    web: "Web",
    mobile: "Mobile",
    slack: "Slack",
    linear: "Linear",
    scm: "Source Control",
    cli: "CLI",
    setup: "Setup",
    sdk: "SDK",
    automations: "Automations",
    api: "API",
    bugbot_autofix: "Bugbot",
    qabot_frontend: "Frontend QA",
    local: "Local",
    internal: "Subagent"
}, Dzk = (()=>{
    const t = Object.fromEntries(sAl.map((e)=>[
            e,
            []
        ]));
    for (const e of Object.values(ec))typeof e == "number" && e !== ec.UNSPECIFIED && t[rAl(e)].push(e);
    return t;
})(), oAl = {
    desktop: vX.DESKTOP,
    sand: vX.SAND,
    web: vX.WEB,
    mobile: vX.MOBILE,
    slack: vX.SLACK,
    linear: vX.LINEAR,
    scm: vX.SCM,
    cli: vX.CLI,
    setup: vX.SETUP,
    sdk: vX.SDK,
    automations: vX.AUTOMATIONS,
    api: vX.API,
    bugbot_autofix: vX.BUGBOT_AUTOFIX,
    qabot_frontend: vX.QABOT_FRONTEND,
    local: vX.LOCAL,
    internal: vX.INTERNAL
}, Nzk = new Map(Object.keys(oAl).map((t)=>[
        oAl[t],
        t
    ]));

}
