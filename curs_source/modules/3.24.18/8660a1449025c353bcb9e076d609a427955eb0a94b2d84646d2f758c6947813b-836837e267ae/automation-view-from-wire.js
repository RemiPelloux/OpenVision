import { YFv } from "./action-draft-from-wire.js";
import { w2t } from "./automations-wire-aliases.js";
import { SPe } from "./automations_pb.js";
import { CDs } from "./trigger-draft-from-wire.js";
import { E } from "./tslib.es6.js";
import { C4i } from "./workflow-draft-from-wire.js";
var n6v;
export { n6v };
var __wakaru_TDs_initialized = false;
export function TDs() {
if (__wakaru_TDs_initialized) return;
__wakaru_TDs_initialized = true;
"use strict";
E(), w2t(), YFv(), CDs(), C4i(), n6v = {
    [SPe.UNSPECIFIED]: "unspecified",
    [SPe.UI]: "ui",
    [SPe.DEPLOY]: "deploy",
    [SPe.ANY]: "any"
};

}
