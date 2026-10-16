import { E } from "./tslib.es6.js";
var Xsv, Zsv, Qsv, Jsv, eQt, NEs, eov, tov, LEs, OEs, FEs, nov, iov, rov, sov, oov, aov, lov;
export { FEs, Jsv, LEs, NEs, OEs, Qsv, Xsv, Zsv, aov, eQt, eov, iov, lov, nov, oov, rov, sov, tov };
var __wakaru_uZw_initialized = false;
export function uZw() {
if (__wakaru_uZw_initialized) return;
__wakaru_uZw_initialized = true;
E(), Xsv = "cursor-cloud", Zsv = "request-environment-setup-actions", Qsv = 20, Jsv = 50, eQt = 256, NEs = 4e3, eov = "env_setup_actions", tov = /<(add_secrets|add_test_login|add_egress_allowlist_domain|external_action)\b/i, LEs = /<!\[CDATA\[|\]\]>|<\/\s*env_setup_actions\s*>/gi, OEs = /([A-Za-z_][\w:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g, FEs = /<!\[CDATA\[/gi, nov = [
    "environment setup is unblocked. please continue with your main task and update agents.md.",
    "unblock agent and proceed with environment setup.",
    "unlock testing and proceed with environment setup."
], iov = [
    "environment setup is incomplete. please continue with your main task as best you can and update agents.md.",
    "proceed as best you can to unblock agent with incomplete setup.",
    "proceed as best you can to unlock testing with incomplete setup."
], rov = [
    "blocking actions resolved. please continue with the environment setup.",
    "environment setup actions are resolved. continue with the main task.",
    "please proceed with hello world task and update agents.md."
], sov = "env setup action status:", oov = /^- .+:\s*(done|not done)(?:$|\s*\()/, aov = [
    "the user chose to",
    "the user completed",
    "the user approved"
], lov = [
    "the user skipped",
    "the user rejected"
];

}
