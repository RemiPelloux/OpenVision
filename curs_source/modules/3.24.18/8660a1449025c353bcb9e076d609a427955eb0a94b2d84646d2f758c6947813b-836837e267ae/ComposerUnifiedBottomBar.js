import { F6k } from "./ComposerUnifiedBottomBar.css";
import { y9e } from "./ComposerUnifiedContextMenu.js";
import { Q6k } from "./ComposerUnifiedDropdown.js";
import { qJ } from "./ImageUtil.js";
import { Di, Qe } from "./Iwo.js";
import { itf } from "./ParameterizedModelPicker.js";
import { B4k } from "./RecordingWaveform.react.js";
import { N6k } from "./TokenRing.js";
import { L4k } from "./VoiceSettingsDropdown.js";
import { F4k, Ok, aS, i7k } from "./Ycg.js";
import { OCn } from "./backgroundComposerData.js";
import { wm } from "./buildFlags.js";
import { sd } from "./chat_pb.js";
import { J0l } from "./classicVoiceOwnerId.js";
import { gs } from "./codicons.js";
import { s7k } from "./composer-realtime-voice-start.react.js";
import { UJ } from "./composerChatService.js";
import { tU } from "./composerMessagesHelpers.js";
import { j4k } from "./composerRealtimeVoiceMicHover.js";
import { a7k } from "./composerRealtimeVoiceStartAgent.js";
import { asl } from "./composerSubmitAnalytics.js";
import { tf } from "./composer_pb.js";
import { Ef } from "./constants_18.js";
import { pa } from "./constants_8.js";
import { KO } from "./experimentHooks.js";
import { eCl } from "./formatTokenCount.js";
import { iye } from "./hooks.js";
import { Iw } from "./hoverWidget.js";
import { F6 } from "./iconButton_2.js";
import { Z0l } from "./localLoopChrome.js";
import { mgs } from "./modeConfig.js";
import { eIt } from "./promptAttachmentUtil.js";
import { vo } from "./solidContext.js";
import { ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { C2i } from "./useComposerChatStatus.js";
import { yme } from "./useComposerDataHandle.js";
import { oye } from "./useComposerHoverTooltip.js";
import { O6k } from "./useComposerMode.js";
import { Jat } from "./useLargeHoverTooltip.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var ffs, Usf, gEl, jsf, $sf, Hsf, Wsf, Gsf, qsf, zsf, Vsf, Ksf, Ysf, Xsf, Zsf, Qsf, Jsf, fEl;
export { $sf, Gsf, Hsf, Jsf, Ksf, Qsf, Usf, Vsf, Wsf, Xsf, Ysf, Zsf, fEl, ffs, gEl, jsf, qsf, zsf };
var __wakaru_d7k_initialized = false;
export function d7k() {
if (__wakaru_d7k_initialized) return;
__wakaru_d7k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), mgs(), aS(), vo(), yme(), sd(), tf(), Iw(), gs(), Qe(), pa(), Di(), ta(), wm(), KO(), Z0l(), J0l(), OCn(), qJ(), eIt(), F6(), N6k(), Jat(), iye(), UJ(), Ef(), C2i(), oye(), O6k(), eCl(), F6k(), y9e(), Q6k(), tU(), asl(), itf(), L4k(), B4k(), j4k(), s7k(), a7k(), ffs = wt("<div>"), Usf = wt("<span>%"), gEl = wt("<span>"), jsf = wt("<div>and <!> more"), $sf = wt("<div><div>Active Rules</div><div>"), Hsf = wt("<span> context used"), Wsf = wt('<div class="composer-unified-dropdown composer-unified-fake-dropdown disabled"data-mode=agent aria-disabled=true><div></div><span>'), Gsf = wt('<div class="flex gap-1">'), qsf = wt('<div class="composer-turn-runtime-indicator composer-turn-runtime-indicator-reload-required"data-turn-runtime=local-reload-required><span class=composer-turn-runtime-indicator-dot></span>Reload for Local'), zsf = wt('<div class="composer-turn-runtime-indicator composer-turn-runtime-indicator-backend-routed"data-turn-runtime=backend-routed><span class=composer-turn-runtime-indicator-dot></span>Backend'), Vsf = wt('<div class="flex items-center composer-context-usage-indicator"><div>'), Ksf = wt("<input type=file multiple>"), Ysf = wt('<div class=composer-bar-input-buttons><div class="button-container composer-button-area">'), Xsf = wt("<div class=composer-turn-runtime-indicator data-turn-runtime=local><span class=composer-turn-runtime-indicator-dot></span>Local"), Zsf = wt("<div class=send-with-mode>"), Qsf = Ok(F4k), Jsf = Ok(i7k), fEl = {
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1
};

}
