import { pUi } from "./grok-bot-transcript-entry.js";
import { d_ } from "./index_205.js";
import { _wc } from "./main-bot-agent-message-line.react.js";
import { kwc } from "./main-bot-intro.react.js";
import { HE, t7e } from "./main-bot-name.js";
import { rdT } from "./main-bot-peer-row.react.js";
import { xwc } from "./main-bot-unsupported-card.react.js";
import { E } from "./tslib.es6.js";
var Dwc, N9s, Nwc, qI_, Lwc, zI_, VI_;
export { Dwc, Lwc, N9s, Nwc, VI_, qI_, zI_ };
var __wakaru_Owc_initialized = false;
export function Owc() {
if (__wakaru_Owc_initialized) return;
__wakaru_Owc_initialized = true;
"use strict";
E(), d_(), t7e(), pUi(), _wc(), kwc(), rdT(), xwc(), Dwc = `Connection to ${HE} lost.`, N9s = "main-bot-error", Nwc = "main-bot-reconnecting", qI_ = "main-bot-intro", Lwc = "main-bot-agent-message", zI_ = {
    internal: `${HE} hit an error`,
    timeout: `${HE} ran out of time`,
    "usage-limit": `${HE} is at its usage limit`,
    "rate-limit": `${HE} is rate limited`,
    "policy-blocked": "Blocked by your organization's policy",
    "policy-unavailable": "Your organization's policy check is unavailable",
    unknown: `${HE} could not reply`
}, VI_ = "cloud-agent";

}
