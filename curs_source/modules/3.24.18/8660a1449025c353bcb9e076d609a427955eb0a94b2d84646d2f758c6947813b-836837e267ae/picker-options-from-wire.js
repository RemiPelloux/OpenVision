import { w2t } from "./automations-wire-aliases.js";
import { pie } from "./background_composer_pb.js";
import { V0t } from "./dashboard_pb.js";
import { E } from "./tslib.es6.js";
var i6v, r6v;
export { i6v, r6v };
var __wakaru_Y5n_initialized = false;
export function Y5n() {
if (__wakaru_Y5n_initialized) return;
__wakaru_Y5n_initialized = true;
"use strict";
E(), w2t(), i6v = {
    [V0t.UNSPECIFIED]: "unrecognized",
    [V0t.CHANNEL]: "channel",
    [V0t.DM]: "dm",
    [V0t.GROUP_DM]: "groupDm"
}, r6v = {
    [pie.UNSPECIFIED]: "unspecified",
    [pie.PERSONAL]: "personal",
    [pie.TEAM]: "team",
    [pie.REPOSITORY]: "repository"
};

}
