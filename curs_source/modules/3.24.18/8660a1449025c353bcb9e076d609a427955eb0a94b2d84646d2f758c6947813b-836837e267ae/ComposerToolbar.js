import { Hwl } from "./ComposerDebugReproductionToolbar.js";
import { gPn } from "./ComposerDebugReproductionUtils.js";
import { l$k } from "./ComposerGoalSection.js";
import { lcf } from "./ComposerLexicalRenderer.js";
import { dcf } from "./ComposerLoadingDoneOrNumber.js";
import { pcf } from "./ComposerPluginActionCard.js";
import { h$k } from "./ComposerQuestionnaireToolbar.js";
import { v$k } from "./ComposerRichTextInline.js";
import { _$k } from "./ComposerToolbar.css";
import { F$k } from "./ComposerToolbarFileList.js";
import { y9e } from "./ComposerUnifiedContextMenu.js";
import { Di } from "./Iwo.js";
import { zcf } from "./SteerQueueNuxNotice.react.js";
import { Ok, aS, qcf } from "./Ycg.js";
import { vu } from "./actions.js";
import { kIl } from "./agentWindowLayout.js";
import { fMn } from "./agentWindowTabPersistence.js";
import { kl } from "./browser.ts";
import { FS } from "./button_4.js";
import { Ilf } from "./canvasActions.js";
import { DHe } from "./canvasComposer.js";
import { vYt } from "./canvasLinkTarget.js";
import { cme } from "./canvasService.js";
import { sd } from "./chat_pb.js";
import { gs } from "./codicons.js";
import { uv } from "./composerData.js";
import { bme } from "./composerInputEditSession.js";
import { tU } from "./composerMessagesHelpers.js";
import { KQg } from "./composerQueueEditActions.js";
import { XQg } from "./composerQueueKeyboardNavigation.js";
import { Tms } from "./composerToolbarUtils.js";
import { tf } from "./composer_pb.js";
import { Ef } from "./constants_18.js";
import { pa } from "./constants_8.js";
import { KPe } from "./customizeCommandRouting.js";
import { Hn } from "./dom_2.js";
import { KO } from "./experimentHooks.js";
import { ncf } from "./goalDisplayState.js";
import { iye } from "./hooks.js";
import { F6 } from "./iconButton_2.js";
import { FO } from "./index_10.ts";
import { Sus } from "./loadingIndicators.js";
import { hBe } from "./local-fsd-session.js";
import { ub } from "./localAgentRepository.js";
import { Awl } from "./maskedContent.js";
import { AB } from "./planFileUtils.js";
import { mMn } from "./pluginFlowController.js";
import { zKt } from "./pluginOperationHelpers.js";
import { Zjk } from "./queueItemDisplayText.js";
import { CIl } from "./queueRowSendAction.js";
import { Lr } from "./resources.js";
import { $Rn } from "./scrollableDivMaxHeight.js";
import { dN } from "./settingsScrollIds.js";
import { Ole } from "./solidApplicationSetting.js";
import { vo } from "./solidContext.js";
import { sk } from "./solidEventsWrapper.js";
import { Cm } from "./structuredLog.js";
import { Mv } from "./terminal.js";
import { ta } from "./themables.js";
import { $It } from "./timeFormatting.js";
import { Fx } from "./tiptapRichText.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { zjk } from "./useAllInlineDiffs.js";
import { C2i } from "./useComposerChatStatus.js";
import { N0l } from "./useComposerCollectedStatuses.js";
import { yme } from "./useComposerDataHandle.js";
import { oye } from "./useComposerHoverTooltip.js";
import { UVt } from "./useMeasureWidthHeight.js";
import { Kjk } from "./useShouldShowChatToolbar.js";
import { oT } from "./utils_16.js";
import { rC } from "./utils_23.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var FIl, Vcf, Kcf, Ycf, Xcf, Zcf, Qcf, Jcf, euf, tuf, nuf, iuf, cvs, ruf, CMn, suf, BIl, ouf, auf, luf, cuf, uuf, duf, huf, puf, muf, guf, bYt, DPi, uvs;
export { BIl, CMn, DPi, FIl, Jcf, Kcf, Qcf, Vcf, Xcf, Ycf, Zcf, auf, bYt, cuf, cvs, duf, euf, guf, huf, iuf, luf, muf, nuf, ouf, puf, ruf, suf, tuf, uuf, uvs };
var __wakaru_G$k_initialized = false;
export function G$k() {
if (__wakaru_G$k_initialized) return;
__wakaru_G$k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), sd(), Hn(), vu(), pa(), tf(), Pu(), gs(), Di(), Lr(), ta(), fn(), ub(), sk(), cme(), vYt(), DHe(), Cm(), aS(), vo(), FS(), F6(), oye(), UVt(), Sus(), Awl(), iye(), Ilf(), y9e(), FO(), kl(), hBe(), kIl(), fMn(), Ole(), KO(), oT(), zKt(), KPe(), dN(), Mv(), $Rn(), KQg(), XQg(), bme(), uv(), Ef(), zjk(), C2i(), N0l(), yme(), Kjk(), rC(), Zjk(), CIl(), Fx(), ncf(), AB(), $It(), Hwl(), l$k(), gPn(), lcf(), dcf(), tU(), pcf(), h$k(), v$k(), _$k(), F$k(), mMn(), Tms(), zcf(), FIl = wt("<div class=composer-toolbar-queue-item-list>"), Vcf = wt("<div class=composer-toolbar-queue-item><div><div>"), Kcf = wt('<div class="composer-toolbar-queue-item-drop-indicator before">'), Ycf = wt('<div class="anysphere-icon-button flex !w-auto items-center cursor-pointer whitespace-nowrap select-none text-white ![color:var(--vscode-editor-foreground,white)]"><span></span><span aria-hidden=true>'), Xcf = wt("<div data-queue-action=edit>"), Zcf = wt("<div data-queue-action=send>"), Qcf = wt("<div data-queue-action=menu>"), Jcf = wt("<div><div data-queue-action=remove>"), euf = wt('<div class="composer-toolbar-queue-item-drop-indicator after">'), tuf = wt("<div class=composer-toolbar-queue-item-wrapper><div><div></div><div>"), nuf = wt('<svg class=composer-toolbar-background-job-cursor-icon viewBox="0 0 468 532"aria-hidden=true><path d=M444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39Z fill=none stroke=currentColor stroke-width=28 stroke-linejoin=round>'), iuf = wt("<div class=composer-toolbar-background-job-item-list>"), cvs = wt("<span>"), ruf = wt('<div class="composer-toolbar-background-job-item composer-toolbar-background-job-item-clickable"><div class=composer-toolbar-background-job-item-icon></div><div><div class=composer-toolbar-background-job-item-text></div></div><div class=composer-toolbar-background-job-item-actions>'), CMn = wt("<div>"), suf = wt("<div><div><div><div><span></span><div></div></div></div><div>"), BIl = wt("<div><div><div class=composer-toolbar-section-header><div><span></span><div class=composer-toolbar-section-header-label>"), ouf = wt("<div id=composer-toolbar-section>"), auf = wt("<span class=cursor-pointer> File"), luf = wt("<span> File<!> edited"), cuf = wt("<span> File"), uuf = wt("<span>Running Terminal Command"), duf = wt("<span>Waiting for Review"), huf = wt("<span>Waiting for Approval"), puf = wt("<div class=composer-toolbar-section-header><div><div class=composer-toolbar-section-header-label>"), muf = wt("<div><div><div>"), guf = Ok(qcf), bYt = ()=>({
        margin: "0",
        "font-size": "12px",
        "flex-shrink": 0,
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        overflow: "hidden",
        "flex-basis": 0,
        "flex-grow": 1
    }), DPi = (t = !1, e)=>({
        "text-wrap": "nowrap",
        "text-overflow": "ellipsis",
        overflow: "hidden",
        "flex-grow": 1,
        "flex-basis": 0,
        display: "inline-flex",
        "align-items": "center",
        "flex-wrap": "nowrap",
        gap: "4px",
        padding: "4px 8px",
        cursor: t ? "pointer" : "default",
        ...e ? {
            "min-width": e
        } : {}
    }), uvs = {
    generating: {
        label: "Generating",
        loading: !0
    },
    applying: {
        label: "Applying",
        loading: !0
    },
    running: {
        label: "Running Capabilities",
        loading: !0
    },
    cancelled: {
        label: "Stopped",
        loading: !1
    },
    completed: {
        label: "Completed",
        loading: !1
    }
};

}
