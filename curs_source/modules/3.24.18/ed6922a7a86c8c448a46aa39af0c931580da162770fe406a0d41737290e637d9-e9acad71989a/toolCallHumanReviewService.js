import { bX } from "./A3u.js";
import { ZS, uKs, ymv } from "./De_3.js";
import { uG } from "./ECo.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { Yu } from "./browser.ts";
import { Hh, Xy } from "./composer.js";
import { Af, Wf } from "./composerData.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { lb, n0 } from "./composerLogService.js";
import { aG, gq } from "./composerPlanService.js";
import { Hv, rE } from "./composerViews.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { aQi } from "./pendingSubagentApproval.js";
import { eF } from "./planFileUtils.js";
import { lr, mn, qn, vn } from "./qIc.js";
import { iL } from "./selectedContextData.js";
import { GM, Gj, JO, O4e, Qve, dg, oSt, oT, zW } from "./toolCallHumanReviewTypes.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ose, _C } from "./utils_23.js";
import { Js, zn } from "./uuid.js";
var x3n, kq, tZ, wq, dG, xCt, pjt, I3n, mjt, gjt, ICt;
export { I3n, ICt, dG, gjt, kq, mjt, pjt, tZ, wq, x3n, xCt };
var __wakaru_ote_initialized = false;
export function ote() {
if (__wakaru_ote_initialized) return;
__wakaru_ote_initialized = true;
"use strict";
x(), qn(), Yu(), ql(), Se(), Qt(), Js(), Pn(), Ze(), la(), iL(), aQi(), Xy(), Wf(), nl(), aG(), rE(), _C(), eF(), O4e(), n0(), x3n = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this.composerDataService = e, this.composerService = t, this.analyticsService = n, this._instantiationService = i, this.composerViewsService = r, this._composerLogService = s, this._reviewModelCache = new Map;
    }
    getReviewModelForLastBubbleUnderReview(e) {
        if (!uG(e, this.composerDataService)) return;
        let n;
        try {
            n = this.getLastBubbleWithReviewStatusFromLast2Bubbles(e);
        } catch  {
            return;
        }
        return this.getReviewModelForBubbleWithReview(e, n);
    }
    getReviewModelForLastBubbleUnderReviewUntracked(e) {
        return lr(()=>this.getReviewModelForLastBubbleUnderReview(e));
    }
    getReviewModelForBubbleWithReview(e, t) {
        if (t === void 0) return;
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t.bubbleId);
        if (i !== void 0) return i;
        if (t.bubbleTool === nt.EDIT_FILE || t.bubbleTool === nt.EDIT_FILE_V2) {
            if (!this.isToolformerCurrentlyWaitingForEditReview(e)) return;
            const r = new pjt(n, t.bubbleId, this.composerService);
            return this._reviewModelCache.set(t.bubbleId, r), r;
        }
        if (t.bubbleTool === nt.RUN_TERMINAL_COMMAND_V2) {
            if (!this.isToolformerCurrentlyWaitingForTerminalReview(e)) return;
            const r = new I3n(n, t.bubbleId, this.composerService, this.analyticsService);
            return this._reviewModelCache.set(t.bubbleId, r), r;
        }
        if (t.bubbleTool === nt.MCP || t.bubbleTool === nt.READ_MCP_RESOURCE) {
            if (!this.isToolformerCurrentlyWaitingForMCPReview(e)) return;
            const r = new mjt(n, t.bubbleId);
            return this._reviewModelCache.set(t.bubbleId, r), r;
        }
        if (t.bubbleTool === nt.WEB_FETCH) {
            if (!this.isToolformerCurrentlyWaitingForWebFetchReview(e)) return;
            const r = new gjt(n, t.bubbleId);
            return this._reviewModelCache.set(t.bubbleId, r), r;
        }
        if (t.bubbleTool === nt.CREATE_PLAN) {
            const r = this._instantiationService.invokeFunction((c)=>c.get(gq)), o = n.getBubbleData(t.bubbleId)?.additionalData?.planUri;
            if (o) try {
                const c = bX(o);
                if (!r.isPlanPendingByUri(c)) return;
            } catch  {
                return;
            }
            const a = new ICt(n, t.bubbleId, this.composerDataService, e, r, this.composerViewsService, this._composerLogService);
            return this._reviewModelCache.set(t.bubbleId, a), a;
        }
    }
    getReviewModelForBubble(e, t) {
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t);
        if (i !== void 0) return i;
        const r = n.getBubbleData(t);
        if (r) {
            if (r.tool === nt.EDIT_FILE || r.tool === nt.EDIT_FILE_V2) {
                const s = new pjt(n, t, this.composerService);
                return this._reviewModelCache.set(t, s), s;
            }
            if (r.tool === nt.RUN_TERMINAL_COMMAND_V2) {
                const s = new I3n(n, t, this.composerService, this.analyticsService);
                return this._reviewModelCache.set(t, s), s;
            }
            if (r.tool === nt.MCP || r.tool === nt.CALL_MCP_TOOL || r.tool === nt.READ_MCP_RESOURCE) {
                const s = new mjt(n, t);
                return this._reviewModelCache.set(t, s), s;
            }
            if (r.tool === nt.WEB_FETCH) {
                const s = new gjt(n, t);
                return this._reviewModelCache.set(t, s), s;
            }
            if (r.tool === nt.CREATE_PLAN) {
                const s = this._instantiationService.invokeFunction((a)=>a.get(gq)), o = new ICt(n, t, this.composerDataService, e, s, this.composerViewsService, this._composerLogService);
                return this._reviewModelCache.set(t, o), o;
            }
        }
    }
    getEditReviewModelForBubble(e, t) {
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t);
        if (i !== void 0) return i;
        const r = n.getBubbleData(t);
        if (r && (r.tool === nt.EDIT_FILE || r.tool === nt.EDIT_FILE_V2)) {
            const s = new pjt(n, t, this.composerService);
            return this._reviewModelCache.set(t, s), s;
        }
    }
    getTerminalReviewModelForBubble(e, t) {
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t);
        if (i !== void 0) return i;
        const r = n.getBubbleData(t);
        if (r && r.tool === nt.RUN_TERMINAL_COMMAND_V2) {
            const s = new I3n(n, t, this.composerService, this.analyticsService);
            return this._reviewModelCache.set(t, s), s;
        }
    }
    getMCPReviewModelForBubble(e, t) {
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t);
        if (i !== void 0 && i instanceof mjt) return i;
        const r = n.getBubbleData(t);
        if (r && (r.tool === nt.MCP || r.tool === nt.CALL_MCP_TOOL || r.tool === nt.READ_MCP_RESOURCE)) {
            const s = new mjt(n, t);
            return this._reviewModelCache.set(t, s), s;
        }
    }
    getPlanReviewModelForBubble(e, t) {
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t);
        if (i !== void 0 && i instanceof ICt) return i;
        const r = n.getBubbleData(t);
        if (r && r.tool === nt.CREATE_PLAN) {
            const s = this._instantiationService.invokeFunction((a)=>a.get(gq)), o = new ICt(n, t, this.composerDataService, e, s, this.composerViewsService, this._composerLogService);
            return this._reviewModelCache.set(t, o), o;
        }
    }
    getWebFetchReviewModelForBubble(e, t) {
        const n = uG(e, this.composerDataService);
        if (!n) return;
        const i = this._reviewModelCache.get(t);
        if (i !== void 0 && i instanceof gjt) return i;
        const r = n.getBubbleData(t);
        if (r && r.tool === nt.WEB_FETCH) {
            const s = new gjt(n, t);
            return this._reviewModelCache.set(t, s), s;
        }
    }
    cleanUpReviewModels(e) {
        const t = this.composerDataService.getLoadedConversationById(e);
        for (const n of t){
            const i = this._reviewModelCache.get(n.bubbleId);
            i && !(i instanceof ICt) && i.reset();
        }
        this._reviewModelCache.clear();
    }
    isToolformerCurrentlyWaitingForReview(e) {
        return this.isToolformerCurrentlyWaitingForEditReview(e);
    }
    isToolformerCurrentlyWaitingForEditReview(e) {
        const t = uG(e, this.composerDataService);
        return t ? t.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = t.getBubbleData(i);
            return r && (r.tool === nt.EDIT_FILE || r.tool === nt.EDIT_FILE_V2) && r?.additionalData?.reviewData?.status === dg.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForTerminalReview(e) {
        const t = uG(e, this.composerDataService);
        return t ? t.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = lr(()=>t.getBubbleData(i));
            return r && r.tool === nt.RUN_TERMINAL_COMMAND_V2 && r?.additionalData?.reviewData?.status === dg.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForMCPReview(e) {
        const t = uG(e, this.composerDataService);
        return t ? t.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = lr(()=>t.getBubbleData(i));
            return r && (r.tool === nt.MCP || r.tool === nt.CALL_MCP_TOOL || r.tool === nt.READ_MCP_RESOURCE) && r?.additionalData?.reviewData?.status === dg.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForPlanReview(e) {
        const t = uG(e, this.composerDataService);
        return t ? t.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = lr(()=>t.getBubbleData(i));
            return r && r.tool === nt.CREATE_PLAN && r?.additionalData?.reviewData?.status === dg.REQUESTED;
        }) : !1;
    }
    isToolformerCurrentlyWaitingForWebFetchReview(e) {
        const t = uG(e, this.composerDataService);
        return t ? t.pendingDecisions().userInteractionBubbleIds.some((i)=>{
            const r = lr(()=>t.getBubbleData(i));
            return r && r.tool === nt.WEB_FETCH && r?.additionalData?.reviewData?.status === dg.REQUESTED;
        }) : !1;
    }
    getLastBubbleWithReviewStatusFromLast2Bubbles(e) {
        const t = this.composerDataService.getComposerData(e), n = uG(e, this.composerDataService);
        if (t?.fullConversationHeadersOnly.length === 0) return;
        const i = lr(()=>t?.fullConversationHeadersOnly.slice(-2).map((s)=>s.bubbleId));
        if (t === void 0 || n === void 0 || i === void 0) return;
        const r = (s)=>{
            if (s.capabilityType !== n.type) return !1;
            const o = s.toolFormerData;
            if (!o || o.tool !== nt.EDIT_FILE && o.tool !== nt.EDIT_FILE_V2 && o.tool !== nt.RUN_TERMINAL_COMMAND_V2 && o.tool !== nt.MCP && o.tool !== nt.CALL_MCP_TOOL && o.tool !== nt.READ_MCP_RESOURCE && o.tool !== nt.CREATE_PLAN && o.tool !== nt.WEB_FETCH) return !1;
            const a = s?.toolFormerData?.additionalData?.reviewData;
            return !(!a || a.status !== dg.REQUESTED);
        };
        for (const s of i.slice().reverse()){
            const o = t.conversationMap[s];
            if (o !== void 0 && r(o)) return {
                bubbleId: o.bubbleId,
                bubbleTool: o.toolFormerData.tool
            };
        }
    }
}, x3n = ie([
    C(0, Zs),
    C(1, Hh),
    C(2, ca),
    C(3, _t),
    C(4, Hv),
    C(5, lb)
], x3n), kq = vn("toolCallHumanReviewService"), mn(kq, x3n, 1), tZ = ((e)=>(e.ACCEPT = "accept", e.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently", e.SKIP = "skip", e.NONE = "none", e.ACCEPT_AND_ALLOW_FOLDER = "acceptAndAllowFolder", e))(tZ || {}), wq = ((e)=>(e.RUN = "run", e.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently", e.ALLOWLIST_COMMANDS = "allowlistCommands", e.SKIP = "skip", e.NONE = "none", e))(wq || {}), dG = ((e)=>(e.RUN = "run", e.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently", e.ALLOWLIST_TOOL = "allowlistTool", e.SKIP = "skip", e.NONE = "none", e))(dG || {}), xCt = class {
    getIsShowingInput() {
        const e = this.getHumanReviewData();
        return e ? e.isShowingInput : !1;
    }
    setIsShowingInput(e) {
        this.updateReviewData({
            isShowingInput: e
        });
    }
    submitFeedbackText(e, t) {
        this.updateReviewData({
            status: dg.DONE,
            finalFeedbackText: e,
            finalFeedbackBubbleId: t
        });
    }
    closeInputBox() {
        this.updateReviewData({
            isShowingInput: !1
        });
    }
    getHighlightedOption() {
        const e = this.getHumanReviewData();
        if (e) return e.highlightedOption;
    }
    setHighlightedOption(e) {
        this.updateReviewData({
            highlightedOption: e
        });
    }
    selectHighlightedOption() {
        const e = this.getHighlightedOption();
        e !== void 0 && this.setSelectedOption(e);
    }
    setStatus(e) {
        this.updateReviewData({
            status: e
        });
    }
    getOrCreateInputBoxBubble(e) {
        const t = this.getHumanReviewData();
        if (!t) return;
        if (t.inputBoxBubbleId) return t.inputBoxBubbleId;
        const n = zn(), i = {
            ...Af(),
            text: "",
            bubbleId: n,
            context: ZS(),
            isReviewEditsFollowup: !0
        };
        return e.setData("conversationMap", n, i), this.updateReviewData({
            inputBoxBubbleId: n
        }), n;
    }
    highlightOptionAbove() {
        const e = this.getHighlightedOption();
        if (e === void 0) return !1;
        const t = this.getCurrentlyDisplayedOptions(), n = t.indexOf(e), i = n === 0 ? t.length - 1 : n - 1;
        return this.setHighlightedOption(t[i]), !0;
    }
    highlightOptionBelow() {
        const e = this.getHighlightedOption();
        if (e === void 0) return !1;
        const t = this.getCurrentlyDisplayedOptions(), n = t.indexOf(e), i = n === t.length - 1 ? 0 : n + 1;
        return this.setHighlightedOption(t[i]), !0;
    }
    reset() {
        this.updateReviewData(this.getDefaultReviewData());
    }
    getKeyboardShortcut(e, t) {
        return t ? "\u23CE" : "";
    }
    handleComposerShortcut(e, t) {
        return !1;
    }
}, pjt = class extends xCt {
    constructor(e, t, n){
        super(), this.toolFormer = e, this.editFileBubbleId = t, this.composerService = n, this.bubbleId = t;
    }
    getHumanReviewData() {
        const e = this.toolFormer.getBubbleData(this.editFileBubbleId);
        if (!(!e || e.tool !== nt.EDIT_FILE && e.tool !== nt.EDIT_FILE_V2)) return e.additionalData?.reviewData;
    }
    updateReviewData(e) {
        const t = this.toolFormer.getBubbleData(this.editFileBubbleId);
        if (!t || t.tool !== nt.EDIT_FILE && t.tool !== nt.EDIT_FILE_V2) return;
        const n = t.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.editFileBubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...e
                }
            }
        });
    }
    setSelectedOption(e) {
        this.updateReviewData({
            selectedOption: e
        }), (e === JO.ACCEPT || e === JO.ACCEPT_AND_ALLOW_FOLDER || e === JO.SWITCH_TO_DEFAULT_AGENT_MODE || e === JO.SKIP) && this.setStatus(dg.DONE), e === JO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setStatus(dg.DONE), this.setIsShowingInput(!0), this.composerService.cancelCurrentStep(this.toolFormer.composerId, {
            focusBottomInput: !0
        }));
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === dg.REQUESTED && this.setSelectedOption(JO.ACCEPT);
    }
    getSelectedOption() {
        const e = this.getHumanReviewData();
        return e ? e.selectedOption : JO.ACCEPT;
    }
    toggleRejectInputBox() {
        this.getIsShowingInput() ? this.closeInputBox() : this.setSelectedOption(JO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY);
    }
    getCurrentlyDisplayedOptions() {
        return [
            JO.ACCEPT,
            JO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            JO.SWITCH_TO_DEFAULT_AGENT_MODE
        ];
    }
    getDefaultReviewData() {
        return {
            status: dg.NONE,
            selectedOption: JO.ACCEPT,
            isShowingInput: !1,
            highlightedOption: void 0,
            firstTimeReviewMode: !1
        };
    }
    getIsFirstTimeReviewMode() {
        const e = this.getHumanReviewData();
        return e ? e.firstTimeReviewMode : !1;
    }
    setIsFirstTimeReviewMode(e) {
        this.updateReviewData({
            firstTimeReviewMode: e
        });
    }
    getHeaderText() {
        return "Keep this edit?";
    }
    getKind() {
        return Qve.EDIT;
    }
    isExecutionBlocking() {
        return !0;
    }
}, I3n = class extends xCt {
    constructor(e, t, n, i){
        super(), this.toolFormer = e, this.terminalToolBubbleId = t, this.composerService = n, this.analyticsService = i, this.bubbleId = t;
    }
    getHumanReviewData() {
        const e = this.toolFormer.getBubbleData(this.terminalToolBubbleId);
        if (!(!e || e.tool !== nt.RUN_TERMINAL_COMMAND_V2)) return e.additionalData?.reviewData;
    }
    updateReviewData(e) {
        const t = this.toolFormer.getBubbleData(this.terminalToolBubbleId);
        if (!t || t.tool !== nt.RUN_TERMINAL_COMMAND_V2) return;
        const n = t.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.terminalToolBubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...e
                }
            }
        });
    }
    setAllowlistCandidates(e) {
        const { candidates: t, suggestedEntries: n } = e, i = uKs(t), { defaultSelectedOptionIds: r, hasClassifierSuggestions: s } = ymv(t, n);
        this.updateReviewData({
            candidatesForAllowlist: t,
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
    setSelectedAllowlistOptionIds(e) {
        this.updateReviewData({
            selectedAllowlistOptionIds: [
                ...new Set(e)
            ]
        });
    }
    setAppliedAllowlistOptionIds(e) {
        this.updateReviewData({
            appliedAllowlistOptionIds: e ? [
                ...new Set(e)
            ] : void 0
        });
    }
    setSelectedOption(e) {
        const n = this.getHumanReviewData()?.approvalType, i = n && n !== oSt.NONE ? n : oSt.USER;
        this.updateReviewData({
            selectedOption: e,
            approvalType: i
        }), (e === oT.RUN || e === oT.ALLOWLIST_COMMANDS || e === oT.SKIP) && this.setStatus(dg.DONE), e === oT.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setStatus(dg.DONE), this.setIsShowingInput(!1), this.composerService.cancelCurrentStep(this.toolFormer.composerId, {
            focusBottomInput: !0
        }), this.analyticsService.trackEvent("composer.cancel_chat", {
            composerId: this.toolFormer.composerId,
            source: "composer_cancel_button"
        }));
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === dg.REQUESTED && this.setSelectedOption(oT.RUN);
    }
    getSelectedOption() {
        const e = this.getHumanReviewData();
        return e ? e.selectedOption : oT.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY;
    }
    toggleRejectInputBox() {
        this.setSelectedOption(oT.SKIP);
    }
    getCurrentlyDisplayedOptions() {
        const e = this.getHumanReviewData();
        return (e?.allowlistOptions?.length ?? 0) > 0 || (e?.candidatesForAllowlist?.length ?? 0) > 0 ? [
            oT.RUN,
            oT.SKIP,
            oT.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            oT.ALLOWLIST_COMMANDS
        ] : [
            oT.RUN,
            oT.SKIP,
            oT.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY
        ];
    }
    getDefaultReviewData() {
        return {
            status: dg.NONE,
            selectedOption: oT.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
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
        const e = this.getHumanReviewData();
        if (e?.isRetry === !0) return "Rerun command?";
        const t = e?.allowlistOptions?.length ? e.allowlistOptions : uKs(e?.candidatesForAllowlist ?? []).options, n = [
            ...new Set(t.map((i)=>i.commandName))
        ];
        return n.length === 1 ? `Run ${n[0]} command?` : n.length > 1 ? `Run ${n.length} commands?` : "Run command?";
    }
    getKind() {
        return Qve.TERMINAL;
    }
    isExecutionBlocking() {
        return !0;
    }
}, mjt = class extends xCt {
    constructor(e, t){
        super(), this.toolFormer = e, this.bubbleId = t;
    }
    getHumanReviewData() {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if (!(!e || e.tool !== nt.MCP && e.tool !== nt.CALL_MCP_TOOL && e.tool !== nt.READ_MCP_RESOURCE)) return e.additionalData?.reviewData;
    }
    updateReviewData(e) {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if (!t || t.tool !== nt.MCP && t.tool !== nt.CALL_MCP_TOOL && t.tool !== nt.READ_MCP_RESOURCE) return;
        const n = t.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.bubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...e
                }
            }
        });
    }
    setSelectedOption(e) {
        this.updateReviewData({
            selectedOption: e
        }), (e === GM.RUN || e === GM.ALLOWLIST_TOOL || e === GM.SKIP) && this.setStatus(dg.DONE), e === GM.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setStatus(dg.DONE), this.setIsShowingInput(!1));
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === dg.REQUESTED && this.setSelectedOption(GM.RUN);
    }
    getSelectedOption() {
        return this.getHumanReviewData()?.selectedOption ?? GM.RUN;
    }
    getCurrentlyDisplayedOptions() {
        const e = [
            GM.RUN,
            GM.SKIP,
            GM.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY
        ], n = (this.getHumanReviewData()?.candidatesForAllowlist?.length ?? 0) > 0, i = this.toolFormer.getBubbleData(this.bubbleId);
        if (n && (i?.tool === nt.MCP || i?.tool === nt.CALL_MCP_TOOL) && i.params) {
            let r;
            i.tool === nt.MCP ? r = i.params.tools?.[0]?.name : r = i.params.toolName, r && e.push(GM.ALLOWLIST_TOOL);
        }
        return e;
    }
    getDefaultReviewData() {
        return {
            status: dg.NONE,
            selectedOption: GM.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            isShowingInput: !1,
            highlightedOption: void 0
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    toggleRejectInputBox() {
        this.getIsShowingInput() ? this.closeInputBox() : this.setSelectedOption(GM.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY);
    }
    getHeaderText() {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if ((e?.tool === nt.MCP || e?.tool === nt.CALL_MCP_TOOL || e?.tool === nt.READ_MCP_RESOURCE) && e.params) {
            let t, n;
            if (e.tool === nt.MCP ? (t = e.params.tools?.[0]?.name, n = e.params.tools?.[0]?.serverName) : e.tool === nt.CALL_MCP_TOOL ? (t = e.params.toolName, n = e.params.server) : (t = "FetchMcpResource", n = e.params.server), t) {
                const i = n ? ` on ${n}` : "";
                return `Run ${t}${i}?`;
            }
        }
        return "Run MCP tool?";
    }
    getKind() {
        return Qve.MCP;
    }
    isExecutionBlocking() {
        return !0;
    }
}, gjt = class extends xCt {
    constructor(e, t){
        super(), this.toolFormer = e, this.bubbleId = t;
    }
    getHumanReviewData() {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if (!(!e || e.tool !== nt.WEB_FETCH)) return e.additionalData?.reviewData;
    }
    updateReviewData(e) {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if (!t || t.tool !== nt.WEB_FETCH) return;
        const n = t.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.bubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...e
                }
            }
        });
    }
    setSelectedOption(e) {
        this.updateReviewData({
            selectedOption: e
        }), (e === zW.RUN || e === zW.ALLOWLIST_DOMAIN || e === zW.SKIP) && this.setStatus(dg.DONE);
    }
    completeWithRunAction() {
        this.getHumanReviewData()?.status === dg.REQUESTED && this.setSelectedOption(zW.RUN);
    }
    getSelectedOption() {
        return this.getHumanReviewData()?.selectedOption ?? zW.RUN;
    }
    getCurrentlyDisplayedOptions() {
        return [
            zW.RUN,
            zW.SKIP,
            zW.ALLOWLIST_DOMAIN
        ];
    }
    getDefaultReviewData() {
        return {
            status: dg.NONE,
            selectedOption: zW.RUN,
            isShowingInput: !1,
            highlightedOption: void 0
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    toggleRejectInputBox() {
        this.setSelectedOption(zW.SKIP);
    }
    getHeaderText() {
        return "Fetch URL?";
    }
    getKind() {
        return Qve.WEB_FETCH;
    }
    isExecutionBlocking() {
        return !0;
    }
}, ICt = class extends xCt {
    constructor(e, t, n, i, r, s, o){
        super(), this.toolFormer = e, this.bubbleId = t, this.composerDataService = n, this.composerPlanService = r, this.composerViewsService = s, this._composerLogService = o, this.composerId = i.data.composerId;
    }
    getFreshHandle() {
        return this.composerDataService.getHandleIfLoaded(this.composerId);
    }
    getHumanReviewData() {
        const e = this.toolFormer.getBubbleData(this.bubbleId);
        if (!(!e || e.tool !== nt.CREATE_PLAN)) return e.additionalData?.reviewData;
    }
    updateReviewData(e) {
        const t = this.toolFormer.getBubbleData(this.bubbleId);
        if (!t || t.tool !== nt.CREATE_PLAN) return;
        const n = t.additionalData?.reviewData;
        this.toolFormer.setBubbleData(this.bubbleId, {
            additionalData: {
                reviewData: {
                    ...this.getDefaultReviewData(),
                    ...n,
                    ...e
                }
            }
        });
    }
    setSelectedOption(e, t) {
        this.updateReviewData({
            selectedOption: e
        });
        const n = this.getFreshHandle();
        if (e === Gj.APPROVE) {
            if (!n) {
                this._composerLogService.warn("[PlanReviewModel] Cannot approve plan: composer handle not available for", this.composerId);
                return;
            }
            const r = this.toolFormer.getBubbleData(this.bubbleId)?.additionalData?.planUri;
            if (!r) {
                this._composerLogService.warn("[PlanReviewModel] No plan URI in bubble data for", this.bubbleId);
                return;
            }
            const s = Ee.parse(r);
            this.setStatus(dg.DONE), this.composerPlanService.acceptPlan(n, s, this.bubbleId, "manual", {
                unifiedMode: t
            });
        }
        if (e === Gj.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY && (this.setIsShowingInput(!0), this.composerViewsService.focus(this.composerId, !0)), e === Gj.EDIT) {
            this.setStatus(dg.DONE);
            const i = this.toolFormer.getBubbleData(this.bubbleId);
            if (i?.tool === nt.CREATE_PLAN) {
                const r = i.additionalData?.planUri;
                if (r) {
                    const s = bX(r);
                    this.composerPlanService.openPlanInEditor(s, {
                        stealFocus: !0,
                        composerId: this.composerId
                    });
                }
            }
        }
    }
    completeWithRunAction() {
        const e = this.getHumanReviewData();
        e?.status === dg.REQUESTED && this.setSelectedOption(Gj.APPROVE, e.preferredUnifiedMode);
    }
    getSelectedOption() {
        return this.getHumanReviewData()?.selectedOption ?? Gj.NONE;
    }
    getCurrentlyDisplayedOptions() {
        return [
            Gj.APPROVE,
            Gj.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            Gj.EDIT
        ];
    }
    getDefaultReviewData() {
        return {
            status: dg.NONE,
            selectedOption: Gj.NONE,
            isShowingInput: !1,
            highlightedOption: void 0
        };
    }
    getIsFirstTimeReviewMode() {
        return !1;
    }
    setIsFirstTimeReviewMode() {}
    toggleRejectInputBox() {
        this.getIsShowingInput() && (this.closeInputBox(), this.setSelectedOption(Gj.NONE));
    }
    getHeaderText() {
        return "Approve this plan?";
    }
    getKind() {
        return Qve.PLAN;
    }
    isExecutionBlocking() {
        return !1;
    }
    getKeyboardShortcut(e, t) {
        switch(e){
            case Gj.APPROVE:
                return Ose("\u23CE");
            case Gj.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
                return "Esc";
            default:
                return t ? Ose("\u23CE") : "";
        }
    }
};

}
