import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { $J } from "./Sol.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { kl } from "./browser.ts";
import { Yh, vS } from "./composer.js";
import { J_, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { iI, w1 } from "./composerLogService.js";
import { I6, Y4 } from "./composerPlanService.js";
import { Bb, Ux } from "./composerViews.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { OOa, Uy, WD1 } from "./ipa.js";
import { hAn } from "./pendingSubagentApproval.js";
import { AB } from "./planFileUtils.js";
import { LM } from "./selectedContextData.js";
import { Cv, J2e, OO, SWt, kA, oqe, rie, vJ, xB } from "./toolCallHumanReviewTypes.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Cbe, rC } from "./utils_23.js";
import { Ai, Xo } from "./uuid_2.js";
import { Hae } from "./yBp.js";
import { ks, pi } from "./ze.js";
var $Ei, fV, Tle, Eie, HJ, Jzt, pAn, HEi, mAn, gAn, eVt;
export { $Ei, Eie, HEi, HJ, Jzt, Tle, eVt, fV, gAn, mAn, pAn };
var __wakaru_WJ_initialized = false;
export function WJ() {
if (__wakaru_WJ_initialized) return;
__wakaru_WJ_initialized = true;
"use strict";
E(), pi(), kl(), Pu(), Qe(), fn(), Xo(), Rn(), It(), Ss(), LM(), hAn(), vS(), uv(), Pl(), I6(), Ux(), rC(), AB(), oqe(), iI(), $Ei = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.composerDataService = t, this.composerService = e, this.analyticsService = n, this._instantiationService = i, this.composerViewsService = r, this._composerLogService = s, this._reviewModelCache = new Map;
    }
    getReviewModelForLastBubbleUnderReview(t) {
        if (!$J(t, this.composerDataService)) return;
        let n;
        try {
            n = this.getLastBubbleWithReviewStatusFromLast2Bubbles(t);
        } catch  {
            return;
        }
        return this.getReviewModelForBubbleWithReview(t, n);
    }
    getReviewModelForLastBubbleUnderReviewUntracked(t) {
        return ks(()=>this.getReviewModelForLastBubbleUnderReview(t));
    }
    getReviewModelForBubbleWithReview(t, e) {
        if (e === void 0) return;
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e.bubbleId);
        if (i !== void 0) return i;
        if (e.bubbleTool === Ct.EDIT_FILE || e.bubbleTool === Ct.EDIT_FILE_V2) {
            if (!this.isToolformerCurrentlyWaitingForEditReview(t)) return;
            const r = new pAn(n, e.bubbleId, this.composerService);
            return this._reviewModelCache.set(e.bubbleId, r), r;
        }
        if (e.bubbleTool === Ct.RUN_TERMINAL_COMMAND_V2) {
            if (!this.isToolformerCurrentlyWaitingForTerminalReview(t)) return;
            const r = new HEi(n, e.bubbleId, this.composerService, this.analyticsService);
            return this._reviewModelCache.set(e.bubbleId, r), r;
        }
        if (e.bubbleTool === Ct.MCP || e.bubbleTool === Ct.READ_MCP_RESOURCE) {
            if (!this.isToolformerCurrentlyWaitingForMCPReview(t)) return;
            const r = new mAn(n, e.bubbleId);
            return this._reviewModelCache.set(e.bubbleId, r), r;
        }
        if (e.bubbleTool === Ct.WEB_FETCH) {
            if (!this.isToolformerCurrentlyWaitingForWebFetchReview(t)) return;
            const r = new gAn(n, e.bubbleId);
            return this._reviewModelCache.set(e.bubbleId, r), r;
        }
        if (e.bubbleTool === Ct.CREATE_PLAN) {
            const r = this._instantiationService.invokeFunction((l)=>l.get(Y4)), o = n.getBubbleData(e.bubbleId)?.additionalData?.planUri;
            if (o) try {
                const l = Hae(o);
                if (!r.isPlanPendingByUri(l)) return;
            } catch  {
                return;
            }
            const a = new eVt(n, e.bubbleId, this.composerDataService, t, r, this.composerViewsService, this._composerLogService);
            return this._reviewModelCache.set(e.bubbleId, a), a;
        }
    }
    getReviewModelForBubble(t, e) {
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e);
        if (i !== void 0) return i;
        const r = n.getBubbleData(e);
        if (r) {
            if (r.tool === Ct.EDIT_FILE || r.tool === Ct.EDIT_FILE_V2) {
                const s = new pAn(n, e, this.composerService);
                return this._reviewModelCache.set(e, s), s;
            }
            if (r.tool === Ct.RUN_TERMINAL_COMMAND_V2) {
                const s = new HEi(n, e, this.composerService, this.analyticsService);
                return this._reviewModelCache.set(e, s), s;
            }
            if (r.tool === Ct.MCP || r.tool === Ct.CALL_MCP_TOOL || r.tool === Ct.READ_MCP_RESOURCE) {
                const s = new mAn(n, e);
                return this._reviewModelCache.set(e, s), s;
            }
            if (r.tool === Ct.WEB_FETCH) {
                const s = new gAn(n, e);
                return this._reviewModelCache.set(e, s), s;
            }
            if (r.tool === Ct.CREATE_PLAN) {
                const s = this._instantiationService.invokeFunction((a)=>a.get(Y4)), o = new eVt(n, e, this.composerDataService, t, s, this.composerViewsService, this._composerLogService);
                return this._reviewModelCache.set(e, o), o;
            }
        }
    }
    getEditReviewModelForBubble(t, e) {
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e);
        if (i !== void 0) return i;
        const r = n.getBubbleData(e);
        if (r && (r.tool === Ct.EDIT_FILE || r.tool === Ct.EDIT_FILE_V2)) {
            const s = new pAn(n, e, this.composerService);
            return this._reviewModelCache.set(e, s), s;
        }
    }
    getTerminalReviewModelForBubble(t, e) {
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e);
        if (i !== void 0) return i;
        const r = n.getBubbleData(e);
        if (r && r.tool === Ct.RUN_TERMINAL_COMMAND_V2) {
            const s = new HEi(n, e, this.composerService, this.analyticsService);
            return this._reviewModelCache.set(e, s), s;
        }
    }
    getMCPReviewModelForBubble(t, e) {
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e);
        if (i !== void 0 && i instanceof mAn) return i;
        const r = n.getBubbleData(e);
        if (r && (r.tool === Ct.MCP || r.tool === Ct.CALL_MCP_TOOL || r.tool === Ct.READ_MCP_RESOURCE)) {
            const s = new mAn(n, e);
            return this._reviewModelCache.set(e, s), s;
        }
    }
    getPlanReviewModelForBubble(t, e) {
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e);
        if (i !== void 0 && i instanceof eVt) return i;
        const r = n.getBubbleData(e);
        if (r && r.tool === Ct.CREATE_PLAN) {
            const s = this._instantiationService.invokeFunction((a)=>a.get(Y4)), o = new eVt(n, e, this.composerDataService, t, s, this.composerViewsService, this._composerLogService);
            return this._reviewModelCache.set(e, o), o;
        }
    }
    getWebFetchReviewModelForBubble(t, e) {
        const n = $J(t, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(e);
        if (i !== void 0 && i instanceof gAn) return i;
        const r = n.getBubbleData(e);
        if (r && r.tool === Ct.WEB_FETCH) {
            const s = new gAn(n, e);
            return this._reviewModelCache.set(e, s), s;
        }
    }
    cleanUpReviewModels(t) {
        const e = this.composerDataService.getLoadedConversationById(t);
        for (const n of e){
            const i = this._reviewModelCache.get(n.bubbleId);
            i && !(i instanceof eVt) && i.reset();
        }
        this._reviewModelCache.clear();
    }
    isToolformerCurrentlyWaitingForReview(t) {
        return this.isToolformerCurrentlyWaitingForEditReview(t);
    }
    isToolformerCurrentlyWaitingForEditReview(t) {
        const e = $J(t, this.composerDataService);
        return e ? e.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = e.getBubbleData(i);
            return r && (r.tool === Ct.EDIT_FILE || r.tool === Ct.EDIT_FILE_V2) && r?.additionalData?.reviewData?.status === Cv.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForTerminalReview(t) {
        const e = $J(t, this.composerDataService);
        return e ? e.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = ks(()=>e.getBubbleData(i));
            return r && r.tool === Ct.RUN_TERMINAL_COMMAND_V2 && r?.additionalData?.reviewData?.status === Cv.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForMCPReview(t) {
        const e = $J(t, this.composerDataService);
        return e ? e.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = ks(()=>e.getBubbleData(i));
            return r && (r.tool === Ct.MCP || r.tool === Ct.CALL_MCP_TOOL || r.tool === Ct.READ_MCP_RESOURCE) && r?.additionalData?.reviewData?.status === Cv.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForPlanReview(t) {
        const e = $J(t, this.composerDataService);
        return e ? e.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = ks(()=>e.getBubbleData(i));
            return r && r.tool === Ct.CREATE_PLAN && r?.additionalData?.reviewData?.status === Cv.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForWebFetchReview(t) {
        const e = $J(t, this.composerDataService);
        return e ? e.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = ks(()=>e.getBubbleData(i));
            return r && r.tool === Ct.WEB_FETCH && r?.additionalData?.reviewData?.status === Cv.REQUESTED;
        }) : !1;
    }
    getLastBubbleWithReviewStatusFromLast2Bubbles(t) {
        const e = this.composerDataService.getComposerData(t), n = $J(t, this.composerDataService);
        if (e?.fullConversationHeadersOnly.length === 0) return;
        const i = ks(()=>e?.fullConversationHeadersOnly.slice(-2).map((s)=>s.bubbleId));
        if (e === void 0 || n === void 0 || i === void 0) return;
        const r = (s)=>{
            if (s.capabilityType !== n.type) return !1;
            const o = s.toolFormerData;
            if (!o || o.tool !== Ct.EDIT_FILE && o.tool !== Ct.EDIT_FILE_V2 && o.tool !== Ct.RUN_TERMINAL_COMMAND_V2 && o.tool !== Ct.MCP && o.tool !== Ct.CALL_MCP_TOOL && o.tool !== Ct.READ_MCP_RESOURCE && o.tool !== Ct.CREATE_PLAN && o.tool !== Ct.WEB_FETCH) return !1;
            const a = s?.toolFormerData?.additionalData?.reviewData;
            return !(!a || a.status !== Cv.REQUESTED);
        };
        for (const s of i.slice().reverse()){
            const o = e.conversationMap[s];
            if (o !== void 0 && r(o)) return {
                bubbleId: o.bubbleId,
                bubbleTool: o.toolFormerData.tool
            };
        }
    }
}, $Ei = Re([
    F(0, no),
    F(1, Yh),
    F(2, Qr),
    F(3, dn),
    F(4, Bb),
    F(5, w1)
], $Ei), fV = jn("toolCallHumanReviewService"), bn(fV, $Ei, 1), Tle = ((t)=>(t.ACCEPT = "accept", t.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently", t.SKIP = "skip", t.NONE = "none", t.ACCEPT_AND_ALLOW_FOLDER = "acceptAndAllowFolder", t))(Tle || {}), Eie = ((t)=>(t.RUN = "run", t.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently", t.ALLOWLIST_COMMANDS = "allowlistCommands", t.SKIP = "skip", t.NONE = "none", t))(Eie || {}), HJ = ((t)=>(t.RUN = "run", t.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently", t.ALLOWLIST_TOOL = "allowlistTool", t.SKIP = "skip", t.NONE = "none", t))(HJ || {}), Jzt = class {
    getIsShowingInput() {
        const t = this.getHumanReviewData();
        return t ? t.isShowingInput : !1;
    }
    setIsShowingInput(t) {
        this.updateReviewData({
            isShowingInput: t
        });
    }
    submitFeedbackText(t, e) {
        this.updateReviewData({
            status: Cv.DONE,
            finalFeedbackText: t,
            finalFeedbackBubbleId: e
        });
    }
    closeInputBox() {
        this.updateReviewData({
            isShowingInput: !1
        });
    }
    getHighlightedOption() {
        const t = this.getHumanReviewData();
        if (t) return t.highlightedOption;
    }
    setHighlightedOption(t) {
        this.updateReviewData({
            highlightedOption: t
        });
    }
    selectHighlightedOption() {
        const t = this.getHighlightedOption();
        t !== void 0 && this.setSelectedOption(t);
    }
    setStatus(t) {
        this.updateReviewData({
            status: t
        });
    }
    getOrCreateInputBoxBubble(t) {
        const e = this.getHumanReviewData();
        if (!e) return;
        if (e.inputBoxBubbleId) return e.inputBoxBubbleId;
        const n = Ai(), i = {
            ...J_(),
            text: "",
            bubbleId: n,
            context: Uy(),
            isReviewEditsFollowup: !0
        };
        return t.setData("conversationMap", n, i), this.updateReviewData({
            inputBoxBubbleId: n
        }), n;
    }
    highlightOptionAbove() {
        const t = this.getHighlightedOption();
        if (t === void 0) return !1;
        const e = this.getCurrentlyDisplayedOptions(), n = e.indexOf(t), i = n === 0 ? e.length - 1 : n - 1;
        return this.setHighlightedOption(e[i]), !0;
    }
    highlightOptionBelow() {
        const t = this.getHighlightedOption();
        if (t === void 0) return !1;
        const e = this.getCurrentlyDisplayedOptions(), n = e.indexOf(t), i = n === e.length - 1 ? 0 : n + 1;
        return this.setHighlightedOption(e[i]), !0;
    }
    reset() {
        this.updateReviewData(this.getDefaultReviewData());
    }
    getKeyboardShortcut(t, e) {
        return e ? "\u23CE" : "";
    }
    handleComposerShortcut(t, e) {
        return !1;
    }
}, pAn = class extends Jzt {
    constructor(t, e, n){
        super(), this.toolFormer = t, this.editFileBubbleId = e, this.composerService = n, this.bubbleId = e;
    }
    getHumanReviewData() {
        const t = this.toolFormer.getBubbleData(this.editFileBubbleId);
        if (!(!t || t.tool !== Ct.EDIT_FILE && t.tool !== Ct.EDIT_FILE_V2)) return t.additionalData?.reviewData;
    }
    updateReviewData(t) {
        const e = this.toolFormer.getBubbleData(this.editFileBubbleId);
        if (!e || e.tool !== Ct.EDIT_FILE && e.tool !== Ct.EDIT_FILE_V2) return;
        const n = e.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.editFileBubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...t
                }
            }
        });
    }
    setSelectedOption(t) {
        this.updateReviewData({
            selectedOption: t
        }), (t === xB.ACCEPT || t === xB.ACCEPT_AND_ALLOW_FOLDER || t === xB.SWITCH_TO_DEFAULT_AGENT_MODE || t === xB.SKIP) && this.setStatus(Cv.DONE), t === xB.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setStatus(Cv.DONE), this.setIsShowingInput(!0), this.composerService.cancelCurrentStep(this.toolFormer.composerId, {
            focusBottomInput: !0
        }));
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === Cv.REQUESTED && this.setSelectedOption(xB.ACCEPT);
    }
    getSelectedOption() {
        const t = this.getHumanReviewData();
        return t ? t.selectedOption : xB.ACCEPT;
    }
    toggleRejectInputBox() {
        this.getIsShowingInput() ? this.closeInputBox() : this.setSelectedOption(xB.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY);
    }
    getCurrentlyDisplayedOptions() {
        return [
            xB.ACCEPT,
            xB.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            xB.SWITCH_TO_DEFAULT_AGENT_MODE
        ];
    }
    getDefaultReviewData() {
        return {
            status: Cv.NONE,
            selectedOption: xB.ACCEPT,
            isShowingInput: !1,
            highlightedOption: void 0,
            firstTimeReviewMode: !1
        };
    }
    getIsFirstTimeReviewMode() {
        const t = this.getHumanReviewData();
        return t ? t.firstTimeReviewMode : !1;
    }
    setIsFirstTimeReviewMode(t) {
        this.updateReviewData({
            firstTimeReviewMode: t
        });
    }
    getHeaderText() {
        return "Keep this edit?";
    }
    getKind() {
        return J2e.EDIT;
    }
    isExecutionBlocking() {
        return !0;
    }
}, HEi = class extends Jzt {
    constructor(t, e, n, i){
        super(), this.toolFormer = t, this.terminalToolBubbleId = e, this.composerService = n, this.analyticsService = i, this.bubbleId = e;
    }
    getHumanReviewData() {
        const t = this.toolFormer.getBubbleData(this.terminalToolBubbleId);
        if (!(!t || t.tool !== Ct.RUN_TERMINAL_COMMAND_V2)) return t.additionalData?.reviewData;
    }
    updateReviewData(t) {
        const e = this.toolFormer.getBubbleData(this.terminalToolBubbleId);
        if (!e || e.tool !== Ct.RUN_TERMINAL_COMMAND_V2) return;
        const n = e.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.terminalToolBubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...t
                }
            }
        });
    }
    setAllowlistCandidates(t) {
        const { candidates: e, suggestedEntries: n } = t, i = OOa(e), { defaultSelectedOptionIds: r, hasClassifierSuggestions: s } = WD1(e, n);
        this.updateReviewData({
            candidatesForAllowlist: e,
            allowlistOptions: i.options,
            defaultAllowlistOptionIds: r,
            selectedAllowlistOptionIds: r,
            appliedAllowlistOptionIds: void 0,
            hasClassifierSuggestions: s
        });
    }
    getAllowlistOptions() {
        return this.getHumanReviewData()?.allowlistOptions ?? [];
    }
    getDefaultAllowlistOptionIds() {
        return this.getHumanReviewData()?.defaultAllowlistOptionIds ?? [];
    }
    getSelectedAllowlistOptionIds() {
        return this.getHumanReviewData()?.selectedAllowlistOptionIds ?? this.getDefaultAllowlistOptionIds();
    }
    setSelectedAllowlistOptionIds(t) {
        this.updateReviewData({
            selectedAllowlistOptionIds: [
                ...new Set(t)
            ]
        });
    }
    setAppliedAllowlistOptionIds(t) {
        this.updateReviewData({
            appliedAllowlistOptionIds: t ? [
                ...new Set(t)
            ] : void 0
        });
    }
    setSelectedOption(t) {
        const n = this.getHumanReviewData()?.approvalType, i = n && n !== SWt.NONE ? n : SWt.USER;
        this.updateReviewData({
            selectedOption: t,
            approvalType: i
        }), (t === kA.RUN || t === kA.ALLOWLIST_COMMANDS || t === kA.SKIP) && this.setStatus(Cv.DONE), t === kA.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setStatus(Cv.DONE), this.setIsShowingInput(!1), this.composerService.cancelCurrentStep(this.toolFormer.composerId, {
            focusBottomInput: !0
        }), this.analyticsService.trackEvent("composer.cancel_chat", {
            composerId: this.toolFormer.composerId,
            source: "composer_cancel_button"
        }));
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === Cv.REQUESTED && this.setSelectedOption(kA.RUN);
    }
    getSelectedOption() {
        const t = this.getHumanReviewData();
        return t ? t.selectedOption : kA.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY;
    }
    toggleRejectInputBox() {
        this.setSelectedOption(kA.SKIP);
    }
    getCurrentlyDisplayedOptions() {
        const t = this.getHumanReviewData();
        return (t?.allowlistOptions?.length ?? 0) > 0 || (t?.candidatesForAllowlist?.length ?? 0) > 0 ? [
            kA.RUN,
            kA.SKIP,
            kA.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            kA.ALLOWLIST_COMMANDS
        ] : [
            kA.RUN,
            kA.SKIP,
            kA.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY
        ];
    }
    getDefaultReviewData() {
        return {
            status: Cv.NONE,
            selectedOption: kA.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            isShowingInput: !1,
            highlightedOption: void 0,
            candidatesForAllowlist: [],
            allowlistOptions: [],
            defaultAllowlistOptionIds: [],
            selectedAllowlistOptionIds: []
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    getHeaderText() {
        const t = this.getHumanReviewData();
        if (t?.isRetry === !0) return "Rerun command?";
        const e = t?.allowlistOptions?.length ? t.allowlistOptions : OOa(t?.candidatesForAllowlist ?? []).options, n = [
            ...new Set(e.map((i)=>i.commandName))
        ];
        return n.length === 1 ? `Run ${n[0]} command?` : n.length > 1 ? `Run ${n.length} commands?` : "Run command?";
    }
    getKind() {
        return J2e.TERMINAL;
    }
    isExecutionBlocking() {
        return !0;
    }
}, mAn = class extends Jzt {
    constructor(t, e){
        super(), this.toolFormer = t, this.bubbleId = e;
    }
    getHumanReviewData() {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if (!(!t || t.tool !== Ct.MCP && t.tool !== Ct.CALL_MCP_TOOL && t.tool !== Ct.READ_MCP_RESOURCE)) return t.additionalData?.reviewData;
    }
    updateReviewData(t) {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if (!e || e.tool !== Ct.MCP && e.tool !== Ct.CALL_MCP_TOOL && e.tool !== Ct.READ_MCP_RESOURCE) return;
        const n = e.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.bubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...t
                }
            }
        });
    }
    setSelectedOption(t) {
        this.updateReviewData({
            selectedOption: t
        }), (t === OO.RUN || t === OO.ALLOWLIST_TOOL || t === OO.SKIP) && this.setStatus(Cv.DONE), t === OO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setStatus(Cv.DONE), this.setIsShowingInput(!1));
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === Cv.REQUESTED && this.setSelectedOption(OO.RUN);
    }
    getSelectedOption() {
        return this.getHumanReviewData()?.selectedOption ?? OO.RUN;
    }
    getCurrentlyDisplayedOptions() {
        const t = [
            OO.RUN,
            OO.SKIP,
            OO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY
        ], n = (this.getHumanReviewData()?.candidatesForAllowlist?.length ?? 0) > 0, i = this.toolFormer.getBubbleData(this.bubbleId);
        if (n && (i?.tool === Ct.MCP || i?.tool === Ct.CALL_MCP_TOOL) && i.params) {
            let r;
            i.tool === Ct.MCP ? r = i.params.tools?.[0]?.name : r = i.params.toolName, r && t.push(OO.ALLOWLIST_TOOL);
        }
        return t;
    }
    getDefaultReviewData() {
        return {
            status: Cv.NONE,
            selectedOption: OO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            isShowingInput: !1,
            highlightedOption: void 0
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    toggleRejectInputBox() {
        this.getIsShowingInput() ? this.closeInputBox() : this.setSelectedOption(OO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY);
    }
    getHeaderText() {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if ((t?.tool === Ct.MCP || t?.tool === Ct.CALL_MCP_TOOL || t?.tool === Ct.READ_MCP_RESOURCE) && t.params) {
            let e, n;
            if (t.tool === Ct.MCP ? (e = t.params.tools?.[0]?.name, n = t.params.tools?.[0]?.serverName) : t.tool === Ct.CALL_MCP_TOOL ? (e = t.params.toolName, n = t.params.server) : (e = "FetchMcpResource", n = t.params.server), e) {
                const i = n ? ` on ${n}` : "";
                return `Run ${e}${i}?`;
            }
        }
        return "Run MCP tool?";
    }
    getKind() {
        return J2e.MCP;
    }
    isExecutionBlocking() {
        return !0;
    }
}, gAn = class extends Jzt {
    constructor(t, e){
        super(), this.toolFormer = t, this.bubbleId = e;
    }
    getHumanReviewData() {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if (!(!t || t.tool !== Ct.WEB_FETCH)) return t.additionalData?.reviewData;
    }
    updateReviewData(t) {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if (!e || e.tool !== Ct.WEB_FETCH) return;
        const n = e.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.bubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...t
                }
            }
        });
    }
    setSelectedOption(t) {
        this.updateReviewData({
            selectedOption: t
        }), (t === vJ.RUN || t === vJ.ALLOWLIST_DOMAIN || t === vJ.SKIP) && this.setStatus(Cv.DONE);
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === Cv.REQUESTED && this.setSelectedOption(vJ.RUN);
    }
    getSelectedOption() {
        return this.getHumanReviewData()?.selectedOption ?? vJ.RUN;
    }
    getCurrentlyDisplayedOptions() {
        return [
            vJ.RUN,
            vJ.SKIP,
            vJ.ALLOWLIST_DOMAIN
        ];
    }
    getDefaultReviewData() {
        return {
            status: Cv.NONE,
            selectedOption: vJ.RUN,
            isShowingInput: !1,
            highlightedOption: void 0
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    toggleRejectInputBox() {
        this.setSelectedOption(vJ.SKIP);
    }
    getHeaderText() {
        return "Fetch URL?";
    }
    getKind() {
        return J2e.WEB_FETCH;
    }
    isExecutionBlocking() {
        return !0;
    }
}, eVt = class extends Jzt {
    constructor(t, e, n, i, r, s, o){
        super(), this.toolFormer = t, this.bubbleId = e, this.composerDataService = n, this.composerPlanService = r, this.composerViewsService = s, this._composerLogService = o, this.composerId = i.data.composerId;
    }
    getFreshHandle() {
        return this.composerDataService.getHandleIfLoaded(this.composerId);
    }
    getHumanReviewData() {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if (!(!t || t.tool !== Ct.CREATE_PLAN)) return t.additionalData?.reviewData;
    }
    updateReviewData(t) {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if (!e || e.tool !== Ct.CREATE_PLAN) return;
        const n = e.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.bubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...t
                }
            }
        });
    }
    setSelectedOption(t, e) {
        this.updateReviewData({
            selectedOption: t
        });
        const n = this.getFreshHandle();
        if (t === rie.APPROVE) {
            if (!n) {
                this._composerLogService.warn("[PlanReviewModel] Cannot approve plan: composer handle not available for", this.composerId);
                return;
            }
            const r = this.toolFormer.getBubbleData(this.bubbleId)?.additionalData?.planUri;
            if (!r) {
                this._composerLogService.warn("[PlanReviewModel] No plan URI in bubble data for", this.bubbleId);
                return;
            }
            const s = rt.parse(r);
            this.setStatus(Cv.DONE), this.composerPlanService.acceptPlan(n, s, this.bubbleId, "manual", {
                unifiedMode: e
            });
        }
        if (t === rie.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setIsShowingInput(!0), this.composerViewsService.focus(this.composerId, !0)), t === rie.EDIT) {
            this.setStatus(Cv.DONE);
            const i = this.toolFormer.getBubbleData(this.bubbleId);
            if (i?.tool === Ct.CREATE_PLAN) {
                const r = i.additionalData?.planUri;
                if (r) {
                    const s = Hae(r);
                    this.composerPlanService.openPlanInEditor(s, {
                        stealFocus: !0,
                        composerId: this.composerId
                    });
                }
            }
        }
    }
    completeWithRunAction() {
        const t = this.getHumanReviewData();
        t?.status === Cv.REQUESTED && this.setSelectedOption(rie.APPROVE, t.preferredUnifiedMode);
    }
    getSelectedOption() {
        return this.getHumanReviewData()?.selectedOption ?? rie.NONE;
    }
    getCurrentlyDisplayedOptions() {
        return [
            rie.APPROVE,
            rie.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            rie.EDIT
        ];
    }
    getDefaultReviewData() {
        return {
            status: Cv.NONE,
            selectedOption: rie.NONE,
            isShowingInput: !1,
            highlightedOption: void 0
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    toggleRejectInputBox() {
        this.getIsShowingInput() && (this.closeInputBox(), this.setSelectedOption(rie.NONE));
    }
    getHeaderText() {
        return "Approve this plan?";
    }
    getKind() {
        return J2e.PLAN;
    }
    isExecutionBlocking() {
        return !1;
    }
    getKeyboardShortcut(t, e) {
        switch(t){
            case rie.APPROVE:
                return Cbe("\u23CE");
            case rie.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
                return "Esc";
            default:
                return e ? Cbe("\u23CE") : "";
        }
    }
};

}
