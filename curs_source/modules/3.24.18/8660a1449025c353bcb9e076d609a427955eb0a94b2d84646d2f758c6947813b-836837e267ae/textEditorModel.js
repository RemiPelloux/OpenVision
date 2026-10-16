import { D, Qe, Vn } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { nW, qn } from "./async.js";
import { hlt, x9e } from "./editorModel.js";
import { Kp, Ph } from "./language.js";
import { FEt, gVe, hds } from "./languageDetectionWorkerService.js";
import { dd, xp } from "./model.js";
import { iR, y4 } from "./modesRegistry.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var wMe;
export { wMe };
var __wakaru_o2n_initialized = false;
export function o2n() {
if (__wakaru_o2n_initialized) return;
__wakaru_o2n_initialized = true;
"use strict";
E(), hlt(), Kp(), xp(), Qe(), y4(), FEt(), qn(), Ty(), Bt(), wMe = class extends x9e {
    constructor(t, e, n, i, r){
        super(), this.modelService = t, this.languageService = e, this.languageDetectionService = n, this.accessibilityService = i, this.textEditorModelHandle = void 0, this.modelDisposeListener = this._register(new Vn), this.autoDetectLanguageThrottler = this._register(new nW(wMe.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY)), this._blockLanguageChangeListener = !1, this._languageChangeSource = void 0, r && this.handleExistingModel(r);
    }
    handleExistingModel(t) {
        const e = this.modelService.getModel(t);
        if (!e) throw new Error(`Document with resource ${t.toString(!0)} does not exist`);
        this.textEditorModelHandle = t, this.registerModelDisposeListener(e);
    }
    registerModelDisposeListener(t) {
        this.modelDisposeListener.value = t.onWillDispose(()=>{
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
    setLanguageId(t, e) {
        this._languageChangeSource = "user", this.setLanguageIdInternal(t, e);
    }
    setLanguageIdInternal(t, e) {
        if (this.isResolved() && !(!t || t === this.textEditorModel.getLanguageId())) {
            this._blockLanguageChangeListener = !0;
            try {
                this.textEditorModel.setLanguage(this.languageService.createById(t), e);
            } finally{
                this._blockLanguageChangeListener = !1;
            }
        }
    }
    installModelListeners(t) {
        const e = this._register(t.onDidChangeLanguage((n)=>{
            n.source === hds || this._blockLanguageChangeListener || (this._languageChangeSource = "api", e.dispose());
        }));
    }
    getLanguageId() {
        return this.textEditorModel?.getLanguageId();
    }
    autoDetectLanguage() {
        return this.autoDetectLanguageThrottler.trigger(()=>this.doAutoDetectLanguage());
    }
    async doAutoDetectLanguage() {
        if (this.hasLanguageSetExplicitly || !this.textEditorModelHandle || !this.languageDetectionService.isEnabledForLanguage(this.getLanguageId() ?? iR)) return;
        const t = await this.languageDetectionService.detectLanguage(this.textEditorModelHandle), e = this.getLanguageId();
        if (t && t !== e && !this.isDisposed()) {
            this.setLanguageIdInternal(t, hds);
            const n = this.languageService.getLanguageName(t);
            this.accessibilityService.alert(D(4360, null, n ?? t));
        }
    }
    createTextEditorModel(t, e, n, i) {
        const r = this.getFirstLineText(t), s = this.getOrCreateLanguage(e, this.languageService, n, r);
        return this.doCreateTextEditorModel(t, s, e, i);
    }
    doCreateTextEditorModel(t, e, n, i) {
        let r = n && this.modelService.getModel(n);
        return r ? this.updateTextEditorModel(t, e.languageId) : (r = this.modelService.createModel(t, e, n, void 0, i), this.createdEditorModel = !0, this.registerModelDisposeListener(r)), this.textEditorModelHandle = r.uri, r;
    }
    getFirstLineText(t) {
        const e = t;
        return typeof e.getFirstLineText == "function" ? e.getFirstLineText(1e3) : t.getLineContent(1).substr(0, 1e3);
    }
    getOrCreateLanguage(t, e, n, i) {
        return !n || n === iR ? e.createByFilepathOrFirstLine(t ?? null, i) : e.createById(n);
    }
    updateTextEditorModel(t, e) {
        this.isResolved() && (t && this.modelService.updateModel(this.textEditorModel, t), e && e !== iR && this.textEditorModel.getLanguageId() !== e && this.textEditorModel.setLanguage(this.languageService.createById(e)));
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
}, wMe.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY = 600, wMe = Re([
    F(0, dd),
    F(1, Ph),
    F(2, gVe),
    F(3, GS)
], wMe);

}
