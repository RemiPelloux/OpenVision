import { Mt } from "./index_197.js";
import { aBe } from "./index_20.ts";
import { afs } from "./index_23.ts";
import { EG } from "./realtimeVoiceService.js";
import { lWl } from "./settingsCatalog.js";
import { $ye } from "./settingsTabContainer.react.js";
import { E } from "./tslib.es6.js";
import { yye } from "./use-service-event-state.react.js";
import { Lg } from "./use-service.react.js";
import { laf } from "./use-voice-preview.react.js";
import { lHl } from "./useTrackSettingChange.react.js";
import { FCl, Mgs, Pgs } from "./voice-settings.ts";
import { tev } from "./voiceSubmitKeywordsEntry.react.js";
var Wnv, Gnv, qnv;
export { Gnv, Wnv, qnv };
var __wakaru_znv_initialized = false;
export function znv() {
if (__wakaru_znv_initialized) return;
__wakaru_znv_initialized = true;
"use strict";
E(), aBe(), afs(), Mt(), yye(), Lg(), EG(), laf(), lWl(), $ye(), lHl(), tev(), Wnv = Pgs.map((t)=>({
        value: t.id,
        label: t.label
    })), Gnv = Mgs.map((t)=>({
        value: `${t.value}`,
        label: t.label
    })), qnv = FCl.map((t)=>({
        value: t.id,
        label: t.label
    }));

}
