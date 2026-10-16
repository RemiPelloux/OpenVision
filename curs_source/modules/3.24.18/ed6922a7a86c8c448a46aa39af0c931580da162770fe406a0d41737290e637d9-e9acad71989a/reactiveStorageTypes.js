import { BE, Bp, Kb, W3, Wc, dl, r_ } from "./De_3.js";
import { en, xi } from "./dom_2.js";
import { nu, r5, sa } from "./qIc.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var E1, qve, XO, AQe, H1u;
export { AQe, E1, H1u, XO, qve };
var __wakaru_uX_initialized = false;
export function uX() {
if (__wakaru_uX_initialized) return;
__wakaru_uX_initialized = true;
"use strict";
x(), Kb(), en(), ql(), lo(), E1 = ((e)=>(e[e.None = 0] = "None", e[e.Code = 1] = "Code", e[e.File = 2] = "File", e[e.Failure = 3] = "Failure", e[e.Image = 4] = "Image", e[e.Folder = 5] = "Folder", e[e.Docs = 6] = "Docs", e[e.CursorRule = 7] = "CursorRule", e[e.GitDiff = 8] = "GitDiff", e))(E1 || {}), qve = class {
    constructor(){
        this._ref = void 0, this._editor = void 0, this._unregisterEditorUpdateListener = void 0, this._lastIsEmpty = void 0, this.promisedFocus = !1, this._promisedFocusActiveInForeignInput = !1, this._triggerScrollToBottom = void 0, this._pendingSuggestion = !1, this._pendingSuggestionReqId = void 0, this._suggestion = void 0, this._bufferedSuggestion = void 0, this._suggestionListeners = new Set;
    }
    registerTextAreaElement(e, t) {
        this._ref = e, this._unregisterEditorUpdateListener?.(), this._unregisterEditorUpdateListener = void 0, this._lastIsEmpty = void 0, this._editor = t, this._editor && (this._unregisterEditorUpdateListener = this._editor.registerUpdateListener(()=>{
            const n = this.isEmpty();
            this._lastIsEmpty === void 0 && (this._lastIsEmpty = n), this._lastIsEmpty !== n && this._suggestion !== void 0 && this._notifySuggestionListeners(), this._lastIsEmpty = n;
        })), this.promisedFocus && this.focus(void 0, !0);
    }
    detachTextAreaElement(e) {
        e !== void 0 && this._ref !== e || (this._ref = void 0, this._editor = void 0, this._unregisterEditorUpdateListener?.(), this._unregisterEditorUpdateListener = void 0, this._lastIsEmpty = void 0, this.promisedFocus = !1);
    }
    registerFocusElement(e) {
        this._ref = e, this.promisedFocus && this.focus(void 0, !0);
    }
    detachFocusElement(e) {
        e !== void 0 && this._ref !== e || (this._ref = void 0, this.promisedFocus = !1);
    }
    runEditorUpdate(e) {
        this._editor && this._editor.update(()=>{
            e();
        });
    }
    registerScrollToBottomTrigger(e) {
        this._triggerScrollToBottom = e;
    }
    clearScrollToBottomTrigger() {
        this._triggerScrollToBottom = void 0;
    }
    insertAtSymbol() {
        this._editor && this._editor.update(()=>{
            const e = r_(" @"), t = Bp();
            let n = t.getLastChild();
            n === null && (n = BE(), t.append(n)), n.append(e), t.selectEnd();
        });
    }
    isEmpty() {
        if (this._editor) {
            const e = this._editor.getEditorState();
            let t = !0;
            return e.read(()=>{
                const n = Bp(), i = (o)=>{
                    if (dl(o)) return o.getTextContent();
                    if (W3(o)) return `
`;
                    if (Wc(o)) {
                        let a = "";
                        for (const c of o.getChildren())a += i(c);
                        return a;
                    }
                    return o.getTextContent();
                };
                t = i(n).replace(/[\u200B\uFEFF]/g, "").trim().length === 0;
            }), t;
        }
        return !0;
    }
    setText(e) {
        this._editor && this._editor.update(()=>{
            const t = Bp();
            t.clear();
            const n = BE();
            n.append(r_(e)), t.append(n), t.selectEnd();
        });
    }
    setTextIfEmpty(e) {
        return this.isEmpty() ? (this.setText(e), !0) : !1;
    }
    enablePendingSuggestion() {
        if (this._pendingSuggestion = !0, this._bufferedSuggestion && this.isEmpty()) {
            if (!(this._pendingSuggestionReqId !== void 0 && this._bufferedSuggestion.reqId !== void 0 && this._bufferedSuggestion.reqId !== this._pendingSuggestionReqId)) {
                this._suggestion = {
                    text: this._bufferedSuggestion.text,
                    reqId: this._bufferedSuggestion.reqId ?? this._pendingSuggestionReqId
                }, this._bufferedSuggestion = void 0, this._pendingSuggestionReqId = void 0, this._pendingSuggestion = !1, this._notifySuggestionListeners();
                return;
            }
            this._bufferedSuggestion = void 0;
        }
        this._suggestion !== void 0 && (this._suggestion = void 0, this._notifySuggestionListeners());
    }
    setPendingSuggestionReqId(e) {
        this._pendingSuggestionReqId = e;
    }
    disablePendingSuggestion() {
        this._pendingSuggestion = !1, this._bufferedSuggestion = void 0, this._pendingSuggestionReqId = void 0, this.clearSuggestionText();
    }
    setSuggestionText(e, t) {
        this._pendingSuggestion && this.isEmpty() ? (this._suggestion = {
            text: e,
            reqId: t ?? this._pendingSuggestionReqId
        }, this._pendingSuggestionReqId = void 0, this._pendingSuggestion = !1, this._notifySuggestionListeners()) : !this._pendingSuggestion && this.isEmpty() && (this._bufferedSuggestion = {
            text: e,
            reqId: t
        });
    }
    getSuggestionText() {
        if (this.isEmpty()) return this._suggestion?.text;
    }
    getSuggestionReqId() {
        if (this.isEmpty()) return this._suggestion?.reqId;
    }
    clearSuggestionText() {
        this._suggestion !== void 0 && (this._suggestion = void 0, this._notifySuggestionListeners());
    }
    onSuggestionChange(e) {
        return this._suggestionListeners.add(e), ()=>this._suggestionListeners.delete(e);
    }
    _notifySuggestionListeners() {
        for (const e of this._suggestionListeners)e();
    }
    focus(e, t, n) {
        if (this._ref) {
            const i = this.promisedFocus;
            this.promisedFocus = !1;
            const r = ()=>{
                if (this._ref?.focus(), this._editor === void 0) {
                    e?.(), this._triggerScrollToBottom?.();
                    return;
                }
                this._editor.update(()=>{
                    const u = Bp();
                    n ? u.selectStart() : u.selectEnd(), e?.(), this._triggerScrollToBottom?.();
                });
            }, s = i ? this._promisedFocusActiveInForeignInput : this._isActiveElementForeignInput(), o = ()=>!s && this._isActiveElementForeignInput(), a = (u)=>{
                setTimeout(()=>{
                    if (u && this.isFocused()) return;
                    const h = this._ref?.ownerDocument.activeElement;
                    nu(h) && h.closest(".quick-input-widget") || o() || r();
                }, 25);
            }, l = sa() === on;
            t || !l ? o() || (r(), t && l && a(!1)) : a();
        } else {
            this.promisedFocus = !0;
            const i = sa().document.activeElement;
            this._promisedFocusActiveInForeignInput = nu(i) && (r5(i) || i.isContentEditable);
        }
    }
    isFocused() {
        if (!this._ref) return !1;
        const e = xi(this._ref).document.activeElement;
        return e === this._ref || this._ref.contains(e);
    }
    _isActiveElementForeignInput() {
        const e = this._ref?.ownerDocument.activeElement;
        return !nu(e) || e === this._ref || this._ref && this._ref.contains(e) ? !1 : r5(e) || e.isContentEditable;
    }
    getRef() {
        return this._ref;
    }
}, XO = {
    alwaysKeepComposerInBound: !0,
    defaultCapabilities: [],
    autoApplyFilesOutsideContext: !0,
    yoloCommandAllowlist: [],
    yoloCommandDenylist: [],
    smartAllowlistDenylist: [],
    yoloMcpToolsDisabled: !1,
    doNotShowYoloModeWarningAgain: !1,
    doNotShowFullYoloModeWarningAgain: !1,
    selectedFakeStreamerId: null,
    yoloDeleteFileDisabled: !1,
    yoloOutsideWorkspaceDisabled: !0,
    yoloEnableRunEverything: !1,
    enableSmartAuto: !1,
    isWebSearchToolEnabled: !0,
    isWebSearchToolEnabled2: !1,
    isWebSearchToolEnabled3: null,
    autoAcceptWebSearchTool: !1,
    isWebFetchToolEnabled: null,
    webFetchDomainAllowlist: [],
    autoApproveModeTransitions: !1,
    mcpAuthBlocking: !0,
    autoApprovedModeTransitions: [],
    autoRejectedModeTransitions: [],
    backgroundComposerEnv: "dev",
    useLegacyTerminalTool: !1,
    modes4: [
        {
            id: "agent",
            name: "Agent",
            actionId: "composerMode.agent",
            icon: "infinity",
            description: "Plan, search, make edits, run commands",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !0,
            autoFix: !0,
            autoRun: !0,
            fullAutoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "triage",
            name: "Triage",
            actionId: "composerMode.triage",
            icon: "rocket",
            description: "Coordinate long-horizon tasks with delegated subagents",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !1,
            autoRun: !0,
            fullAutoRun: !1,
            enabledTools: [
                nt.TASK_V2,
                nt.APPLY_AGENT_DIFF
            ],
            enabledMcpServers: []
        },
        {
            id: "plan",
            name: "Plan",
            actionId: "composerMode.plan",
            icon: "todos",
            description: "Create detailed plans for accomplishing tasks",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !1,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "spec",
            name: "Spec",
            actionId: "composerMode.spec",
            icon: "checklist",
            description: "Create structured plans with implementation steps",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !1,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "debug",
            name: "Debug",
            actionId: "composerMode.debug",
            icon: "bug",
            description: "Systematically diagnose and fix bugs using runtime traces",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !0,
            autoFix: !1,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "multitask",
            name: "Multitask",
            actionId: "composerMode.multitask",
            icon: "circles",
            description: "Run and coordinate multiple tasks in parallel",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !0,
            autoFix: !1,
            autoRun: !0,
            fullAutoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "chat",
            name: "Ask",
            actionId: "composerMode.chat",
            icon: "chat",
            description: "Ask Cursor questions about your codebase",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !0,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        }
    ],
    codeBlockDisplayPreference: "collapsed",
    thinkingLevel: "none",
    composerMigrationVersion: !1
}, AQe = [], H1u = {
    cppModels: []
};

}
