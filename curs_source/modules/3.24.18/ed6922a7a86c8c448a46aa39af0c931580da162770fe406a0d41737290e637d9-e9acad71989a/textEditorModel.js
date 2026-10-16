import { S, Se, cn } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { TO, bn } from "./async.js";
import { bTe, dhe } from "./editorModel.js";
import { kl, pc } from "./language.js";
import { $nr, NLe, hhe } from "./languageDetectionWorkerService.js";
import { Ll, fc } from "./model.js";
import { $T, Sy } from "./modesRegistry.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var obe;
export { obe };
var __wakaru_ezt_initialized = false;
export function ezt() {
if (__wakaru_ezt_initialized) return;
__wakaru_ezt_initialized = true;
"use strict";
x(), bTe(), kl(), Ll(), Se(), $T(), NLe(), bn(), Op(), rt(), obe = class extends dhe {
    constructor(e, t, n, i, r){
        super(), this.modelService = e, this.languageService = t, this.languageDetectionService = n, this.accessibilityService = i, this.textEditorModelHandle = void 0, this.modelDisposeListener = this._register(new cn), this.autoDetectLanguageThrottler = this._register(new TO(obe.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY)), this._blockLanguageChangeListener = !1, this._languageChangeSource = void 0, r && this.handleExistingModel(r);
    }
    handleExistingModel(e) {
        const t = this.modelService.getModel(e);
        if (!t) throw new Error(`Document with resource ${e.toString(!0)} does not exist`);
        this.textEditorModelHandle = e, this.registerModelDisposeListener(t);
    }
    registerModelDisposeListener(e) {
        this.modelDisposeListener.value = e.onWillDispose(()=>{
            this.textEditorModelHandle = void 0, this.dispose();
        });
    }
    get textEditorModel() {
        return this.textEditorModelHandle ? this.modelService.getModel(this.textEditorModelHandle) : null;
    }
    isReadonly() {
        return !0;
    }
    get languageChangeSource() {
        return this._languageChangeSource;
    }
    get hasLanguageSetExplicitly() {
        return typeof this._languageChangeSource == "string";
    }
    setLanguageId(e, t) {
        this._languageChangeSource = "user", this.setLanguageIdInternal(e, t);
    }
    setLanguageIdInternal(e, t) {
        if (this.isResolved() && !(!e || e === this.textEditorModel.getLanguageId())) {
            this._blockLanguageChangeListener = !0;
            try {
                this.textEditorModel.setLanguage(this.languageService.createById(e), t);
            } finally{
                this._blockLanguageChangeListener = !1;
            }
        }
    }
    installModelListeners(e) {
        const t = this._register(e.onDidChangeLanguage((n)=>{
            n.source === $nr || this._blockLanguageChangeListener || (this._languageChangeSource = "api", t.dispose());
        }));
    }
    getLanguageId() {
        return this.textEditorModel?.getLanguageId();
    }
    autoDetectLanguage() {
        return this.autoDetectLanguageThrottler.trigger(()=>this.doAutoDetectLanguage());
    }
    async doAutoDetectLanguage() {
        if (this.hasLanguageSetExplicitly || !this.textEditorModelHandle || !this.languageDetectionService.isEnabledForLanguage(this.getLanguageId() ?? Sy)) return;
        const e = await this.languageDetectionService.detectLanguage(this.textEditorModelHandle), t = this.getLanguageId();
        if (e && e !== t && !this.isDisposed()) {
            this.setLanguageIdInternal(e, $nr);
            const n = this.languageService.getLanguageName(e);
            this.accessibilityService.alert(S(4360, null, n ?? e));
        }
    }
    createTextEditorModel(e, t, n, i) {
        const r = this.getFirstLineText(e), s = this.getOrCreateLanguage(t, this.languageService, n, r);
        return this.doCreateTextEditorModel(e, s, t, i);
    }
    doCreateTextEditorModel(e, t, n, i) {
        let r = n && this.modelService.getModel(n);
        return r ? this.updateTextEditorModel(e, t.languageId) : (r = this.modelService.createModel(e, t, n, void 0, i), this.createdEditorModel = !0, this.registerModelDisposeListener(r)), this.textEditorModelHandle = r.uri, r;
    }
    getFirstLineText(e) {
        const t = e;
        return typeof t.getFirstLineText == "function" ? t.getFirstLineText(1e3) : e.getLineContent(1).substr(0, 1e3);
    }
    getOrCreateLanguage(e, t, n, i) {
        return !n || n === Sy ? t.createByFilepathOrFirstLine(e ?? null, i) : t.createById(n);
    }
    updateTextEditorModel(e, t) {
        this.isResolved() && (e && this.modelService.updateModel(this.textEditorModel, e), t && t !== Sy && this.textEditorModel.getLanguageId() !== t && this.textEditorModel.setLanguage(this.languageService.createById(t)));
    }
    createSnapshot() {
        return this.textEditorModel ? this.textEditorModel.createSnapshot(!0) : null;
    }
    isResolved() {
        return !!this.textEditorModelHandle;
    }
    dispose() {
        this.modelDisposeListener.dispose(), this.textEditorModelHandle && this.createdEditorModel && this.modelService.destroyModel(this.textEditorModelHandle), this.textEditorModelHandle = void 0, this.createdEditorModel = !1, super.dispose();
    }
}, obe.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY = 600, obe = ie([
    C(0, fc),
    C(1, pc),
    C(2, hhe),
    C(3, ym)
], obe);

}
