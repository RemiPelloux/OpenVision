import { ju } from "./agent_pb.js";
import { kl } from "./browser.ts";
import { sd } from "./chat_pb.js";
import { REn } from "./cloudAgentResubmit.js";
import { Gaw } from "./composerCheckpointMessageShared.js";
import { wwf } from "./composerHumanMessageGeneratingSelector.js";
import { olw } from "./composerHumanRowBodyExpanded.js";
import { zwf } from "./composerHumanRowRoute.js";
import { pys } from "./composerHumanRowSlackMentions.js";
import { DMl } from "./composerMessagesContexts.js";
import { tU } from "./composerMessagesHelpers.js";
import { $eg } from "./composerSendMessageCapability.js";
import { bTt } from "./composerSendMessageTranscript.js";
import { tf } from "./composer_pb.js";
import { Ef } from "./constants_18.js";
import { Lqa } from "./fsdSimulatedMessageIntegration.js";
import { d_ } from "./index_205.js";
import { elw } from "./projectClassicLexicalRichText.js";
import { vDi } from "./promptInputCommandContext.js";
import { v1 } from "./store.js";
import { nlw } from "./subagentPreviewMention.js";
import { Fx } from "./tiptapRichText.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var vys;
export { vys };
var __wakaru_Xwf_initialized = false;
export function Xwf() {
if (__wakaru_Xwf_initialized) return;
__wakaru_Xwf_initialized = true;
"use strict";
E(), pi(), v1(), d_(), kl(), ju(), sd(), REn(), vDi(), Pu(), tf(), Gaw(), $eg(), Ef(), DMl(), wwf(), tU(), Lqa(), elw(), Fx(), nlw(), zwf(), bTt(), olw(), pys(), vys = {
    dimmed: !1,
    pointerEventsNone: !1,
    hiddenSimulated: !1,
    humanMessageStyle: void 0,
    isSticky: !1,
    stickyExempt: !1,
    isBeingEdited: !1,
    isSelected: !1,
    disableResubmits: !0,
    cloudReadonlyStandalone: !1,
    clickAction: "none",
    isPlanMode: !1,
    slackDisplay: void 0,
    simulatedAction: void 0,
    body: {
        kind: "placeholder",
        text: ""
    },
    bodyExpanded: !1,
    images: [],
    videos: [],
    slackThreads: [],
    senderAttribution: void 0,
    showStopButton: !1,
    showRestoreButton: !1,
    stopKeybinding: void 0,
    showCheckedOutChip: !1,
    showGlassPromptContextMenu: !1,
    todoAdjacentLayout: !1,
    todoSummary: void 0,
    planExecution: void 0
};

}
