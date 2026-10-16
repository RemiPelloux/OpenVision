import { Uoo, VJe } from "./A3u.js";
import { He, Se, bt, rn, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { M6, YHt } from "./aiCodeTypes.js";
import { Tse, hX, la } from "./aiMiscServices.js";
import { db, nE } from "./backendClient.js";
import { gkt } from "./cppDebouncingService.js";
import { hGi } from "./cppUtils.js";
import { Hoo, pGi } from "./cpp_connectweb.js";
import { UU, _no, dLn } from "./cpp_pb.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Nl, bc } from "./resolverService.js";
import { $h, np } from "./telemetry.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
var Gse, mGi;
export { Gse, mGi };
var __wakaru_r1e_initialized = false;
export function r1e() {
if (__wakaru_r1e_initialized) return;
__wakaru_r1e_initialized = true;
"use strict";
x(), Pn(), Ze(), gkt(), hGi(), la(), YHt(), np(), ci(), UU(), Se(), Hoo(), nE(), Nl(), bt(), Ha(), Gse = vn("cppEventLoggerService"), mGi = class {
    constructor(e, t, n, i, r, s, o){
        this._cppTelemetryService = e, this._telemetryService = t, this._workspaceContextService = n, this._instantiationService = i, this._textModelService = r, this._reactiveStorageService = s, this._aiCodeTrackingService = o, this._onDidAcceptAiContent = new ve, this.onDidAcceptAiContent = this._onDidAcceptAiContent.event, this._onDidSuggestCpp = new ve, this.onDidSuggestCpp = this._onDidSuggestCpp.event, this._onDidRejectCpp = new ve, this.onDidRejectCpp = this._onDidRejectCpp.event, this._onDidApplyCppEdits = new ve, this.onDidApplyCppEdits = this._onDidApplyCppEdits.event, this.editorChangedTimeoutMap = {}, this.recordDebouncedCursorPosition = Uoo((a, c)=>{
            if (a.isDisposed()) return;
            const l = {
                case: "debouncedCursorPosition",
                position: c,
                modelVersion: a.getVersionId(),
                model: a
            };
            this._cppTelemetryService.recordCppSessionEvent(l);
        }, 150), this.cppServiceBackendClient = this._instantiationService.createInstance(db, {
            service: pGi
        }), this.recordCppSessionEvent = this._cppTelemetryService.recordCppSessionEvent.bind(this._cppTelemetryService);
    }
    cppClient() {
        return this.cppServiceBackendClient.get();
    }
    async forceFlushExtHostEventLogger() {
        await this.extHostEventLogger?.forceFlush();
    }
    getExtension(e) {
        const n = this._workspaceContextService.asRelativePath(e).split(".").pop();
        if (n !== void 0 && n.length > 0 && n.length < 8) return n.toLowerCase();
    }
    registerExtHostEventLogger(e) {
        return this.extHostEventLogger = e, {
            dispose: ()=>{
                this.extHostEventLogger = void 0;
            }
        };
    }
    recordExtHostEvent(e) {
        this._cppTelemetryService.canWeTrackTelem && this.extHostEventLogger?.recordExtHostEvent(e);
    }
    recordScrollEvent(e, t, n) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "scrollEvent",
            editorId: n,
            visibleRanges: t,
            modelVersion: e.getVersionId(),
            model: e
        });
    }
    recordEditorCloseEvent(e) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "editorClose",
            editorId: e
        });
    }
    recordAiEvent(e, t, n) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "aiEvent",
            requestId: e,
            startOrEnd: t,
            source: n
        });
    }
    recordCmdKEvent(e, t) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "cmdKEvent",
            event: t,
            model: e,
            modelVersion: e.getVersionId()
        });
    }
    recordChatEvent(e) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "chatEvent",
            event: e
        });
    }
    recordBugBotEvent(e) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "bugBotEvent",
            event: e
        });
    }
    recordLspSuggestionEvent(e, t, n, i) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "lspSuggestionEvent",
            editorId: t,
            model: e,
            modelVersion: e.getVersionId(),
            requestId: i,
            suggestions: n
        });
    }
    recordChangedEditor(e, t, n, i) {
        const r = {
            case: "editorChanged",
            modelVersion: e.getVersionId(),
            model: e,
            position: t,
            visibleRanges: n,
            editorId: i
        };
        this._cppTelemetryService.recordCppSessionEvent(r);
    }
    recordPartialAcceptSuggestionEvent(e, t, n) {
        const i = VJe(e, t), r = {
            case: "acceptCppPartial",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: t.modelVersionWhenCreated,
                originalText: t.originalText ?? "",
                suggestionId: t.monotonicallyIncreasingSuggestionId,
                suggestionText: t.replaceText,
                rangeOfSuggestionInCurrentModel: i ? {
                    endColumn: i.endColumn,
                    endLineNumber: i.endLineNumber,
                    startColumn: i.startColumn,
                    startLineNumber: i.startLineNumber
                } : void 0,
                bindingId: t.bindingId
            },
            edit: n,
            modelVersion: e.getVersionId(),
            model: e
        };
        this._cppTelemetryService.recordCppSessionEvent(r), this._telemetryService.publicLogCapture("cursor.acceptcppsuggestionpartial");
        const s = t.uri.path.split("/").pop();
        this.recordCppFate(t.requestId, dLn.PARTIAL_ACCEPT, s, performance.now());
        const o = this._workspaceContextService.asRelativePath(e.uri);
        this._aiCodeTrackingService.storeGeneratedContent(o, t.originalText ?? "", t.replaceText, {
            source: M6.TAB,
            fileExtension: this.getExtension(t.uri),
            fileName: o,
            requestId: t.requestId
        }).catch((a)=>console.error("[AiCodeTracking] Error storing partial accept:", a)), this._onDidAcceptAiContent.fire({
            file: this._workspaceContextService.asRelativePath(e.uri),
            previousContent: t.originalText ?? "",
            updatedContent: t.replaceText,
            source: M6.TAB,
            range: {
                ...t.range,
                endLineNumber: t.range.endLineNumberInclusive
            },
            requestId: t.requestId,
            cppSource: t.source
        });
    }
    recordAcceptSuggestionEvent(e, t) {
        const n = VJe(e, t), i = {
            case: "acceptCpp",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: t.modelVersionWhenCreated,
                originalText: t.originalText ?? "",
                suggestionId: t.monotonicallyIncreasingSuggestionId,
                suggestionText: t.replaceText,
                rangeOfSuggestionInCurrentModel: n ? {
                    endColumn: n.endColumn,
                    endLineNumber: n.endLineNumber,
                    startColumn: n.startColumn,
                    startLineNumber: n.startLineNumber
                } : void 0,
                bindingId: t.bindingId
            },
            modelVersion: e.getVersionId(),
            model: e
        };
        this._cppTelemetryService.recordCppSessionEvent(i), this._telemetryService.publicLogCapture("cursor.acceptcppsuggestion");
        const r = this.getExtension(t.uri);
        this.recordCppFate(t.requestId, dLn.ACCEPT, r, performance.now());
        const s = this._workspaceContextService.asRelativePath(e.uri);
        this._aiCodeTrackingService.storeGeneratedContent(s, t.originalText ?? "", t.replaceText, {
            source: M6.TAB,
            fileExtension: this.getExtension(t.uri),
            fileName: s,
            requestId: t.requestId
        }).catch((o)=>console.error("[AiCodeTracking] Error storing accept:", o)), this._onDidAcceptAiContent.fire({
            requestId: t.requestId,
            file: this._workspaceContextService.asRelativePath(e.uri),
            previousContent: t.originalText ?? "",
            updatedContent: t.replaceText,
            source: M6.TAB,
            range: {
                ...t.range,
                endLineNumber: t.range.endLineNumberInclusive
            },
            cppSource: t.source
        });
    }
    recordRejectSuggestionEvent(e, t) {
        const n = VJe(e, t), i = {
            case: "rejectCpp",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: t.modelVersionWhenCreated,
                originalText: t.originalText ?? "",
                suggestionId: t.monotonicallyIncreasingSuggestionId,
                suggestionText: t.replaceText,
                rangeOfSuggestionInCurrentModel: n ? {
                    endColumn: n.endColumn,
                    endLineNumber: n.endLineNumber,
                    startColumn: n.startColumn,
                    startLineNumber: n.startLineNumber
                } : void 0,
                bindingId: t.bindingId
            },
            modelVersion: e.getVersionId(),
            model: e
        };
        this._cppTelemetryService.recordCppSessionEvent(i), this._telemetryService.publicLogCapture("cursor.rejectcppsuggestion");
        const r = this.getExtension(t.uri);
        this.recordCppFate(t.requestId, dLn.REJECT, r, performance.now()), this._onDidRejectCpp.fire({
            requestId: t.requestId,
            file: this._workspaceContextService.asRelativePath(e.uri),
            previousContent: t.originalText ?? "",
            updatedContent: t.replaceText,
            source: M6.TAB,
            range: {
                ...t.range,
                endLineNumber: t.range.endLineNumberInclusive
            },
            cppSource: t.source
        });
    }
    recordFinishedCppGeneration(e, t) {
        const n = {
            case: "finishedCppGeneration",
            model: e,
            recoverableData: t,
            modelVersion: e.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n), this._telemetryService.publicLogCapture("cursor.fullcppsuggestion");
    }
    recordCppSuggestionEvent(e, t, n) {
        const i = VJe(e, t), r = {
            case: "suggestCpp",
            currentlyShownCppSuggestion: {
                modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: t.modelVersionWhenCreated,
                originalText: t.originalText ?? "",
                suggestionId: t.monotonicallyIncreasingSuggestionId,
                suggestionText: t.replaceText,
                rangeOfSuggestionInCurrentModel: i ? {
                    endColumn: i.endColumn,
                    endLineNumber: i.endLineNumber,
                    startColumn: i.startColumn,
                    startLineNumber: i.startLineNumber
                } : void 0,
                bindingId: t.bindingId
            },
            recoverableData: n,
            modelVersion: e.getVersionId(),
            model: e
        };
        this._cppTelemetryService.recordCppSessionEvent(r), this._telemetryService.publicLogCapture("cursor.suggestcpp"), this._onDidSuggestCpp.fire({
            requestId: t.requestId,
            file: this._workspaceContextService.asRelativePath(e.uri),
            previousContent: t.originalText ?? "",
            updatedContent: t.replaceText,
            source: M6.TAB,
            range: {
                ...t.range,
                endLineNumber: t.range.endLineNumberInclusive
            },
            cppSource: t.source
        });
    }
    recordCppTriggerEvent(e, t, n, i) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "cppTrigger",
            generationUUID: t,
            cursorPosition: n,
            modelVersion: e.getVersionId(),
            model: e,
            source: i
        });
    }
    recordAcceptCursorPredictionEvent(e, t) {
        const n = {
            case: "acceptCursorPredictionEvent",
            prediction: t,
            model: e,
            modelVersion: e.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n);
    }
    recordRejectCursorPredictionEvent(e, t) {
        const n = {
            case: "rejectCursorPredictionEvent",
            prediction: t,
            model: e,
            modelVersion: e.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n);
    }
    recordSuggestCursorPredictionEvent(e, t) {
        const n = {
            case: "suggestCursorPredictionEvent",
            prediction: t,
            model: e,
            modelVersion: e.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(n);
    }
    recordModelOpenedEvent(e) {
        const t = {
            case: "modelOpened",
            model: e,
            modelVersion: e.getVersionId()
        };
        this._cppTelemetryService.recordCppSessionEvent(t), this._telemetryService.publicLogCapture("cursor.modelopened");
    }
    recordLinterChange(e) {
        const t = {
            case: "linterError",
            errors: e.errors,
            model: e.model,
            modelVersion: e.modelVersion
        };
        this._cppTelemetryService.recordCppSessionEvent(t);
    }
    recordClipboardChange(e) {
        const t = {
            case: "clipboardChange",
            text: e
        };
        this._cppTelemetryService.recordCppSessionEvent(t);
    }
    recordQuickActionsChange(e) {
        const t = {
            case: "quickActionsChange",
            ...e
        };
        this._cppTelemetryService.recordCppSessionEvent(t);
    }
    recordQuickActionFired(e) {
        const t = {
            case: "quickActionFired",
            ...e
        };
        this._cppTelemetryService.recordCppSessionEvent(t);
    }
    recordCppFate(e, t, n, i) {
        const r = new _no({
            requestId: e,
            fate: t,
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
    recordBugBotLinterEvent({ model: e, requestId: t, eventType: n }) {
        this._cppTelemetryService.recordCppSessionEvent({
            case: "bugBotLinterEvent",
            requestId: t,
            eventType: n,
            model: e,
            modelVersion: e.getVersionId()
        });
    }
    recordAnythingQuickAccessSelectionEvent(e, t, n) {
        const i = new He, r = new Set, s = t.map((a)=>{
            if (a.type === "separator" || a.type === "section" || r.size > 16 && !r.has(a.resource.toString())) return a;
            r.add(a.resource.toString());
            const c = this._textModelService.createModelReference(a.resource);
            return i.add(rn(async ()=>{
                (await c).dispose();
            })), {
                ...a,
                textModelPromise: c
            };
        }), o = {
            case: "anythingQuickAccessSelectionEvent",
            query: e,
            items: s,
            selectedIndices: n
        };
        this._cppTelemetryService.recordCppSessionEvent(o, i);
    }
    fireApplyCppEdits(e) {
        this._onDidApplyCppEdits.fire(e);
    }
}, mGi = ie([
    C(0, hX),
    C(1, $h),
    C(2, Jn),
    C(3, _t),
    C(4, bc),
    C(5, Do),
    C(6, Tse)
], mGi), mn(Gse, mGi, 1);

}
