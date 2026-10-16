import { Gt, Nt, Pn, Qe, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { YW, jTn } from "./aiCodeTypes.js";
import { Fae, Ss, _be } from "./aiMiscServices.js";
import { cb, sC } from "./backendClient.js";
import { _Gt } from "./cppDebouncingService.js";
import { HYr } from "./cppUtils.js";
import { WYr, sja } from "./cpp_connectweb.js";
import { C9o, Yni, lW } from "./cpp_pb.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Em, Rh } from "./resolverService.js";
import { Uv, Xv } from "./telemetry.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { ija, lCt } from "./yBp.js";
var Abe, GYr;
export { Abe, GYr };
var __wakaru_X6e_initialized = false;
export function X6e() {
if (__wakaru_X6e_initialized) return;
__wakaru_X6e_initialized = true;
"use strict";
E(), Rn(), It(), _Gt(), HYr(), Ss(), jTn(), Xv(), Sr(), lW(), Qe(), sja(), sC(), Em(), Gt(), el(), Abe = jn("cppEventLoggerService"), GYr = class {
    constructor(t, e, n, i, r, s, o){
        this._cppTelemetryService = t, this._telemetryService = e, this._workspaceContextService = n, this._instantiationService = i, this._textModelService = r, this._reactiveStorageService = s, this._aiCodeTrackingService = o, this._onDidAcceptAiContent = new tt, this.onDidAcceptAiContent = this._onDidAcceptAiContent.event, this._onDidSuggestCpp = new tt, this.onDidSuggestCpp = this._onDidSuggestCpp.event, this._onDidRejectCpp = new tt, this.onDidRejectCpp = this._onDidRejectCpp.event, this._onDidApplyCppEdits = new tt, this.onDidApplyCppEdits = this._onDidApplyCppEdits.event, this.editorChangedTimeoutMap = {}, this.recordDebouncedCursorPosition = ija((a, l)=>{
            if (a.isDisposed()) return;
            const c = {
                case: "debouncedCursorPosition",
                position: l,
                modelVersion: a.getVersionId(),
                model: a
            };
            this._cppTelemetryService.recordCppSessionEvent(c);
        }, 150), this.cppServiceBackendClient = this._instantiationService.createInstance(cb, {
            service: WYr
        }), this.recordCppSessionEvent = this._cppTelemetryService.recordCppSessionEvent.bind(this._cppTelemetryService);
    }
    cppClient() {
        return this.cppServiceBackendClient.get();
    }
    async forceFlushExtHostEventLogger() {
        await this.extHostEventLogger?.forceFlush();
    }
    getExtension(t) {
        const n = this._workspaceContextService.asRelativePath(t).split(".").pop();
        if (n !== void 0 && n.length > 0 && n.length < 8) return n.toLowerCase();
    }
    registerExtHostEventLogger(t) {
        return this.extHostEventLogger = t, {
            dispose: ()=>{
                this.extHostEventLogger = void 0;
            }
        };
    }
    recordExtHostEvent(t) {
        this._cppTelemetryService.canWeTrackTelem && this.extHostEventLogger?.recordExtHostEvent(t);
    }
    recordScrollEvent(t, e, n) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "scrollEvent",
            editorId: n,
            visibleRanges: e,
            modelVersion: t.getVersionId(),
            model: t
        });
    }
    recordEditorCloseEvent(t) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "editorClose",
            editorId: t
        });
    }
    recordAiEvent(t, e, n) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "aiEvent",
            requestId: t,
            startOrEnd: e,
            source: n
        });
    }
    recordCmdKEvent(t, e) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "cmdKEvent",
            event: e,
            model: t,
            modelVersion: t.getVersionId()
        });
    }
    recordChatEvent(t) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "chatEvent",
            event: t
        });
    }
    recordBugBotEvent(t) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "bugBotEvent",
            event: t
        });
    }
    recordLspSuggestionEvent(t, e, n, i) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "lspSuggestionEvent",
            editorId: e,
            model: t,
            modelVersion: t.getVersionId(),
            requestId: i,
            suggestions: n
        });
    }
    recordChangedEditor(t, e, n, i) {
        const r = {
            case: "editorChanged",
            modelVersion: t.getVersionId(),
            model: t,
            position: e,
            visibleRanges: n,
            editorId: i
        };
        this._cppTelemetryService.recordCppSessionEvent(r);
    }
    recordPartialAcceptSuggestionEvent(t, e, n) {
        const i = lCt(t, e), r = {
            case: "acceptCppPartial",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: e.modelVersionWhenCreated,
                originalText: e.originalText ?? "",
                suggestionId: e.monotonicallyIncreasingSuggestionId,
                suggestionText: e.replaceText,
                rangeOfSuggestionInCurrentModel: i ? {
                    endColumn: i.endColumn,
                    endLineNumber: i.endLineNumber,
                    startColumn: i.startColumn,
                    startLineNumber: i.startLineNumber
                } : void 0,
                bindingId: e.bindingId
            },
            edit: n,
            modelVersion: t.getVersionId(),
            model: t
        };
        this._cppTelemetryService.recordCppSessionEvent(r), this._telemetryService.publicLogCapture("cursor.acceptcppsuggestionpartial");
        const s = e.uri.path.split("/").pop();
        this.recordCppFate(e.requestId, Yni.PARTIAL_ACCEPT, s, performance.now());
        const o = this._workspaceContextService.asRelativePath(t.uri);
        this._aiCodeTrackingService.storeGeneratedContent(o, e.originalText ?? "", e.replaceText, {
            source: YW.TAB,
            fileExtension: this.getExtension(e.uri),
            fileName: o,
            requestId: e.requestId
        }).catch((a)=>console.error("[AiCodeTracking] Error storing partial accept:", a)), this._onDidAcceptAiContent.fire({
            file: this._workspaceContextService.asRelativePath(t.uri),
            previousContent: e.originalText ?? "",
            updatedContent: e.replaceText,
            source: YW.TAB,
            range: {
                ...e.range,
                endLineNumber: e.range.endLineNumberInclusive
            },
            requestId: e.requestId,
            cppSource: e.source
        });
    }
    recordAcceptSuggestionEvent(t, e) {
        const n = lCt(t, e), i = {
            case: "acceptCpp",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: e.modelVersionWhenCreated,
                originalText: e.originalText ?? "",
                suggestionId: e.monotonicallyIncreasingSuggestionId,
                suggestionText: e.replaceText,
                rangeOfSuggestionInCurrentModel: n ? {
                    endColumn: n.endColumn,
                    endLineNumber: n.endLineNumber,
                    startColumn: n.startColumn,
                    startLineNumber: n.startLineNumber
                } : void 0,
                bindingId: e.bindingId
            },
            modelVersion: t.getVersionId(),
            model: t
        };
        this._cppTelemetryService.recordCppSessionEvent(i), this._telemetryService.publicLogCapture("cursor.acceptcppsuggestion");
        const r = this.getExtension(e.uri);
        this.recordCppFate(e.requestId, Yni.ACCEPT, r, performance.now());
        const s = this._workspaceContextService.asRelativePath(t.uri);
        this._aiCodeTrackingService.storeGeneratedContent(s, e.originalText ?? "", e.replaceText, {
            source: YW.TAB,
            fileExtension: this.getExtension(e.uri),
            fileName: s,
            requestId: e.requestId
        }).catch((o)=>console.error("[AiCodeTracking] Error storing accept:", o)), this._onDidAcceptAiContent.fire({
            requestId: e.requestId,
            file: this._workspaceContextService.asRelativePath(t.uri),
            previousContent: e.originalText ?? "",
            updatedContent: e.replaceText,
            source: YW.TAB,
            range: {
                ...e.range,
                endLineNumber: e.range.endLineNumberInclusive
            },
            cppSource: e.source
        });
    }
    recordRejectSuggestionEvent(t, e) {
        const n = lCt(t, e), i = {
            case: "rejectCpp",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: e.modelVersionWhenCreated,
                originalText: e.originalText ?? "",
                suggestionId: e.monotonicallyIncreasingSuggestionId,
                suggestionText: e.replaceText,
                rangeOfSuggestionInCurrentModel: n ? {
                    endColumn: n.endColumn,
                    endLineNumber: n.endLineNumber,
                    startColumn: n.startColumn,
                    startLineNumber: n.startLineNumber
                } : void 0,
                bindingId: e.bindingId
            },
            modelVersion: t.getVersionId(),
            model: t
        };
        this._cppTelemetryService.recordCppSessionEvent(i), this._telemetryService.publicLogCapture("cursor.rejectcppsuggestion");
        const r = this.getExtension(e.uri);
        this.recordCppFate(e.requestId, Yni.REJECT, r, performance.now()), this._onDidRejectCpp.fire({
            requestId: e.requestId,
            file: this._workspaceContextService.asRelativePath(t.uri),
            previousContent: e.originalText ?? "",
            updatedContent: e.replaceText,
            source: YW.TAB,
            range: {
                ...e.range,
                endLineNumber: e.range.endLineNumberInclusive
            },
            cppSource: e.source
        });
    }
    recordFinishedCppGeneration(t, e) {
        const n = {
            case: "finishedCppGeneration",
            model: t,
            recoverableData: e,
            modelVersion: t.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n), this._telemetryService.publicLogCapture("cursor.fullcppsuggestion");
    }
    recordCppSuggestionEvent(t, e, n) {
        const i = lCt(t, e), r = {
            case: "suggestCpp",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: e.modelVersionWhenCreated,
                originalText: e.originalText ?? "",
                suggestionId: e.monotonicallyIncreasingSuggestionId,
                suggestionText: e.replaceText,
                rangeOfSuggestionInCurrentModel: i ? {
                    endColumn: i.endColumn,
                    endLineNumber: i.endLineNumber,
                    startColumn: i.startColumn,
                    startLineNumber: i.startLineNumber
                } : void 0,
                bindingId: e.bindingId
            },
            recoverableData: n,
            modelVersion: t.getVersionId(),
            model: t
        };
        this._cppTelemetryService.recordCppSessionEvent(r), this._telemetryService.publicLogCapture("cursor.suggestcpp"), this._onDidSuggestCpp.fire({
            requestId: e.requestId,
            file: this._workspaceContextService.asRelativePath(t.uri),
            previousContent: e.originalText ?? "",
            updatedContent: e.replaceText,
            source: YW.TAB,
            range: {
                ...e.range,
                endLineNumber: e.range.endLineNumberInclusive
            },
            cppSource: e.source
        });
    }
    recordCppTriggerEvent(t, e, n, i) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "cppTrigger",
            generationUUID: e,
            cursorPosition: n,
            modelVersion: t.getVersionId(),
            model: t,
            source: i
        });
    }
    recordAcceptCursorPredictionEvent(t, e) {
        const n = {
            case: "acceptCursorPredictionEvent",
            prediction: e,
            model: t,
            modelVersion: t.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n);
    }
    recordRejectCursorPredictionEvent(t, e) {
        const n = {
            case: "rejectCursorPredictionEvent",
            prediction: e,
            model: t,
            modelVersion: t.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n);
    }
    recordSuggestCursorPredictionEvent(t, e) {
        const n = {
            case: "suggestCursorPredictionEvent",
            prediction: e,
            model: t,
            modelVersion: t.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n);
    }
    recordModelOpenedEvent(t) {
        const e = {
            case: "modelOpened",
            model: t,
            modelVersion: t.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(e), this._telemetryService.publicLogCapture("cursor.modelopened");
    }
    recordLinterChange(t) {
        const e = {
            case: "linterError",
            errors: t.errors,
            model: t.model,
            modelVersion: t.modelVersion
        };
        this._cppTelemetryService.recordCppSessionEvent(e);
    }
    recordClipboardChange(t) {
        const e = {
            case: "clipboardChange",
            text: t
        };
        this._cppTelemetryService.recordCppSessionEvent(e);
    }
    recordQuickActionsChange(t) {
        const e = {
            case: "quickActionsChange",
            ...t
        };
        this._cppTelemetryService.recordCppSessionEvent(e);
    }
    recordQuickActionFired(t) {
        const e = {
            case: "quickActionFired",
            ...t
        };
        this._cppTelemetryService.recordCppSessionEvent(e);
    }
    recordCppFate(t, e, n, i) {
        const r = new C9o({
            requestId: t,
            fate: e,
            performanceNowTime: i,
            extension: n
        }), s = new Promise((o, a)=>{
            setTimeout(()=>a(new Error("Timeout recording CPP fate event")), 2e3);
        });
        this.cppClient().then((o)=>{
            Promise.race([
                o.recordCppFate(r, {}),
                s
            ]).then(()=>{}).catch((a)=>{
                console.warn("Error recording CPP fate event:", a);
            });
        });
    }
    recordBugBotLinterEvent({ model: t, requestId: e, eventType: n }) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "bugBotLinterEvent",
            requestId: e,
            eventType: n,
            model: t,
            modelVersion: t.getVersionId()
        });
    }
    recordAnythingQuickAccessSelectionEvent(t, e, n) {
        const i = new Nt, r = new Set, s = e.map((a)=>{
            if (a.type === "separator" || a.type === "section" || r.size > 16 && !r.has(a.resource.toString())) return a;
            r.add(a.resource.toString());
            const l = this._textModelService.createModelReference(a.resource);
            return i.add(Pn(async ()=>{
                (await l).dispose();
            })), {
                ...a,
                textModelPromise: l
            };
        }), o = {
            case: "anythingQuickAccessSelectionEvent",
            query: t,
            items: s,
            selectedIndices: n
        };
        this._cppTelemetryService.recordCppSessionEvent(o, i);
    }
    fireApplyCppEdits(t) {
        this._onDidApplyCppEdits.fire(t);
    }
}, GYr = Re([
    F(0, Fae),
    F(1, Uv),
    F(2, yr),
    F(3, dn),
    F(4, Rh),
    F(5, sa),
    F(6, _be)
], GYr), bn(Abe, GYr, 1);

}
