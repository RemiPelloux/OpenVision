import { Di } from "./Iwo.js";
import { hOi } from "./agentAppearanceSettings.js";
import { oOi } from "./agents-config.helpers.js";
import { Tos } from "./composerMigrationUtils.js";
import { pa } from "./constants_8.js";
import { Mt } from "./index_197.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { EG } from "./realtimeVoiceService.js";
import { FKe } from "./settings-switch.react.js";
import { dN } from "./settingsScrollIds.js";
import { Zi } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { Jpe } from "./usageDataService.js";
import { EDe } from "./use-config-value-read-write.react.js";
import { D$ } from "./use-feature-gate.react.js";
import { YTe } from "./use-reactive-storage.react.js";
import { bHl } from "./use-root-application-property.react.js";
import { Lg } from "./use-service.react.js";
import { ZB } from "./use-solid-selector.react.js";
import { wu } from "./utilities_3.js";
import { tev } from "./voiceSubmitKeywordsEntry.react.js";
var zTs, pOi, yHl, iev, rev;
export { iev, pOi, rev, yHl, zTs };
var __wakaru_QHw_initialized = false;
export function QHw() {
if (__wakaru_QHw_initialized) return;
__wakaru_QHw_initialized = true;
"use strict";
E(), Mt(), pa(), Di(), el(), wu(), hOi(), dN(), Tos(), EG(), Jpe(), tev(), oOi(), FKe(), EDe(), D$(), bHl(), YTe(), Lg(), ZB(), Zi(), zTs = {
    label: "Steer",
    description: "Steer the agent without stopping it"
}, pOi = {
    label: "Interrupt",
    description: "Stop the agent and send the message"
}, yHl = {
    queue: "Queue",
    steer: zTs.label,
    "stop-and-send": pOi.label,
    interrupt: pOi.label
}, iev = [
    {
        value: "queue",
        label: "Queue",
        description: "Send after Agent finishes"
    },
    {
        value: "steer",
        ...zTs
    },
    {
        value: "stop-and-send",
        ...pOi
    }
], rev = [
    {
        value: "steer",
        ...zTs
    },
    {
        value: "interrupt",
        ...pOi
    }
];

}
