import { t6k } from "./BillingStatusBanner.js";
import { l6k } from "./ClassicUsageNoticeTrays.js";
import { VUk } from "./ComposerActionNotification.js";
import { jUk } from "./ComposerAutocompleteHeuristicPlugin.js";
import { Hwl } from "./ComposerDebugReproductionToolbar.js";
import { gPn } from "./ComposerDebugReproductionUtils.js";
import { c6k } from "./ComposerFullInputBox.css";
import { PJg } from "./ComposerKeybindingPopup.js";
import { E6k } from "./ComposerLexicalPlugins.js";
import { x6k } from "./ComposerLoginButton.js";
import { KUk } from "./ComposerMCPSuccessNotification.js";
import { d7k } from "./ComposerUnifiedBottomBar.js";
import { zEl } from "./ComposerWarningPopup.js";
import { faf } from "./ContextUsageTray.react.js";
import { L7k } from "./ExternalLink.js";
import { gKt, vhs } from "./GhostTextNode.js";
import { U0l } from "./GhostTextUtils.js";
import { wFk } from "./GrokBotContextualBannerClassic.js";
import { qJ } from "./ImageUtil.js";
import { Di, Qe } from "./Iwo.js";
import { igs } from "./LimitHitBubbleClassic.js";
import { Xat, bEt } from "./MentionNode.js";
import { qUk } from "./PromptSuggestionGhostTextPlugin.js";
import { AFk } from "./ThirdPartyUsageNudgeClassic.js";
import { x7k } from "./UnifiedUsageBanner.js";
import { ujk } from "./VoiceDictationServicePlugin.js";
import { Ok, PUk, aS, gaf } from "./Ycg.js";
import { $ze } from "./agentClientService.js";
import { Dms } from "./agentTranscriptService.js";
import { oVe } from "./aiConfigHelper.js";
import { xls } from "./canvasNavigationCommands.js";
import { sd } from "./chat_pb.js";
import { gs } from "./codicons.js";
import { DUk } from "./composer-realtime-voice-tray.react.js";
import { UJ } from "./composerChatService.js";
import { H4 } from "./composerContextKeys.js";
import { uv } from "./composerData.js";
import { cTe } from "./composerErrorActions.js";
import { bme } from "./composerInputEditSession.js";
import { tU } from "./composerMessagesHelpers.js";
import { HPe } from "./composerModeUtils.js";
import { FT, Vst } from "./composerNotificationService.js";
import { Qlt } from "./composerPaneContexts.js";
import { KQg } from "./composerQueueEditActions.js";
import { XQg } from "./composerQueueKeyboardNavigation.js";
import { QQg } from "./composerRunEverythingAction.js";
import { asl } from "./composerSubmitAnalytics.js";
import { tf } from "./composer_pb.js";
import { Ef } from "./constants_18.js";
import { $Ok } from "./constants_21.js";
import { pa } from "./constants_8.js";
import { AEl } from "./contextUsageCanvasFileContents.js";
import { Xof } from "./contextUsageTrayModel.js";
import { Du } from "./dashboard_pb.js";
import { s_l } from "./errorHooks.js";
import { KO } from "./experimentHooks.js";
import { D5k } from "./fullInputBox.js";
import { _Pn } from "./hooks_2.js";
import { FO } from "./index_10.ts";
import { Mt } from "./index_197.js";
import { aIi } from "./index_211.js";
import { ajk } from "./index_219.js";
import { kEt } from "./inlineDiffTypes.js";
import { Paf } from "./insertParsedPromptSuggestionIntoLexical.js";
import { Ak, aRa } from "./ipa.js";
import { nT } from "./keyboardEvent.js";
import { M7k } from "./keycaps.js";
import { Dbe } from "./limitHitExperimentUtils.js";
import { CCe } from "./mcpConstants.js";
import { y2 } from "./mcpServiceTypes.js";
import { Q2i } from "./modelDialogueStorage.js";
import { W4e } from "./modelNudgeUtils.js";
import { Ks } from "./notification.js";
import { PPn } from "./openFullscreenVideoModal.js";
import { Mfs } from "./parsePromptSuggestionSlashCommands.js";
import { wTe } from "./pluginUtils.js";
import { IA } from "./pluginsProviderService.js";
import { eIt } from "./promptAttachmentUtil.js";
import { Pms } from "./promptBarService.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { epe } from "./remoteHosts.js";
import { wPn } from "./runEditorBugbot.js";
import { LM } from "./selectedContextData.js";
import { zde } from "./server_config_pb.js";
import { IL } from "./simpleButton.js";
import { Ole } from "./solidApplicationSetting.js";
import { vo } from "./solidContext.js";
import { sk } from "./solidEventsWrapper.js";
import { ta } from "./themables.js";
import { Fx } from "./tiptapRichText.js";
import { WJ } from "./toolCallHumanReviewService.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { QW } from "./usageLimitPolicyStatusService.js";
import { C2i } from "./useComposerChatStatus.js";
import { N0l } from "./useComposerCollectedStatuses.js";
import { tJg } from "./useComposerContextSideEffects.js";
import { yme } from "./useComposerDataHandle.js";
import { BFk } from "./useComposerImages.js";
import { nJg } from "./useComposerSupports.js";
import { UVt } from "./useMeasureWidthHeight.js";
import { jFk } from "./useShouldShowCancelAndResume.js";
import { rJg } from "./useStartNewChatWithSummary.js";
import { wu } from "./utilities_3.js";
import { rC } from "./utils_23.js";
import { Xo } from "./uuid_2.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var dlf, EPi, YEl, hlf, $fs, plf, mlf, glf, flf, vlf, XEl, _lf, blf, ylf, Slf, klf;
export { $fs, EPi, Slf, XEl, YEl, _lf, blf, dlf, flf, glf, hlf, klf, mlf, plf, vlf, ylf };
var __wakaru_ZEl_initialized = false;
export function ZEl() {
if (__wakaru_ZEl_initialized) return;
__wakaru_ZEl_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), FO(), Mt(), pi(), Ak(), sd(), tf(), Pu(), nT(), gs(), pa(), Di(), ta(), Xo(), kEt(), Ole(), epe(), Pms(), LM(), $Ok(), oVe(), Du(), zde(), Um(), aIi(), Dbe(), $ze(), QW(), Dms(), KO(), _Pn(), aS(), vo(), wPn(), D5k(), qJ(), Xat(), eIt(), s_l(), UVt(), PPn(), igs(), wFk(), AFk(), xls(), IL(), HPe(), H4(), uv(), KQg(), XQg(), Fx(), bme(), QQg(), W4e(), Ef(), N0l(), tJg(), yme(), BFk(), nJg(), jFk(), rJg(), rC(), cTe(), vhs(), U0l(), t6k(), l6k(), Hwl(), gPn(), c6k(), PJg(), E6k(), x6k(), tU(), asl(), d7k(), Q2i(), x7k(), Qe(), Ks(), sk(), wu(), CCe(), Vst(), y2(), IA(), M7k(), L7k(), UJ(), C2i(), WJ(), AEl(), Xof(), wTe(), DUk(), faf(), jUk(), Paf(), Mfs(), qUk(), VUk(), KUk(), Qlt(), zEl(), ajk(), ujk(), dlf = wt("<span>Try <!> "), EPi = wt("<div>"), YEl = wt("<div><div>"), hlf = wt("<div>Allow agent to see and interact with <!>?"), $fs = wt("<div class=composer-limit-hit-bubble-gap>"), plf = wt("<div class=composer-input-edit-banner><span class=composer-input-edit-banner-text></span><button class=composer-input-edit-banner-cancel>"), mlf = wt("<span>"), glf = wt("<span>Skip and Continue"), flf = wt("<div><div class=composer-input-blur-wrapper>"), vlf = wt("<div class=composer-context-usage-tray-slot>"), XEl = ()=>({
        onError (e) {
            throw e;
        },
        nodes: [
            bEt,
            gKt
        ]
    }), _lf = Ok(gaf), blf = Ok(aRa), ylf = Ok(PUk), Slf = !1, klf = new Set([
    FT.MCP,
    FT.NetworkAccess,
    FT.GitHubAuth
]);

}
