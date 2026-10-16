import { Fa, Ga, Gt, Md, SXu, Tr, Vvt, XXu, tt } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { Wo, gr } from "./editorService.js";
import { EAi, bG } from "./encoding.js";
import { Yp, qg } from "./label.js";
import { Kp, Ph } from "./language.js";
import { FEt, gVe } from "./languageDetectionWorkerService.js";
import { dd, xp } from "./model.js";
import { o2n, wMe } from "./textEditorModel.js";
import { PC } from "./textModel.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { P9t } from "./wordHelper.js";
import { WEt, d2n } from "./workingCopy.js";
import { lye, vme } from "./workingCopyBackup.js";
import { V4, rF } from "./workingCopyService.js";
import { E$o, lsi, rwr } from "./ze.js";
var cye;
export { cye };
var __wakaru_Jfl_initialized = false;
export function Jfl() {
if (__wakaru_Jfl_initialized) return;
__wakaru_Jfl_initialized = true;
"use strict";
E(), o2n(), Kp(), xp(), Gt(), lye(), FC(), PC(), V4(), d2n(), u_(), To(), qg(), P9t(), Wo(), Fa(), EAi(), Ga(), FEt(), Ty(), cye = class extends wMe {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g){
        super(o, s, p, g), this.resource = t, this.hasAssociatedFilePath = e, this.initialValue = n, this.preferredLanguageId = i, this.preferredEncoding = r, this.workingCopyBackupService = a, this.textResourceConfigurationService = l, this.workingCopyService = c, this.textFileService = u, this.labelService = d, this.editorService = h, this._onDidChangeContent = this._register(new tt), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidChangeName = this._register(new tt), this.onDidChangeName = this._onDidChangeName.event, this._onDidChangeDirty = this._register(new tt), this.onDidChangeDirty = this._onDidChangeDirty.event, this._onDidChangeEncoding = this._register(new tt), this.onDidChangeEncoding = this._onDidChangeEncoding.event, this._onDidSave = this._register(new tt), this.onDidSave = this._onDidSave.event, this._onDidRevert = this._register(new tt), this.onDidRevert = this._onDidRevert.event, this.typeId = WEt, this.capabilities = 2, this.configuredLabelFormat = "content", this.cachedModelFirstLineWords = void 0, this.ignoreDirtyOnModelContentChange = !1, this.dirty = this.hasAssociatedFilePath || !!this.initialValue, this._register(this.workingCopyService.registerWorkingCopy(this)), i && this.setLanguageId(i), this.onConfigurationChange(void 0, !1), this.registerListeners();
    }
    get name() {
        return this.configuredLabelFormat === "content" && !this.hasAssociatedFilePath && this.cachedModelFirstLineWords ? this.cachedModelFirstLineWords : this.labelService.getUriBasenameLabel(this.resource);
    }
    registerListeners() {
        this._register(this.textResourceConfigurationService.onDidChangeConfiguration((t)=>this.onConfigurationChange(t, !0)));
    }
    onConfigurationChange(t, e) {
        if (!t || t.affectsConfiguration(this.resource, "files.encoding")) {
            const n = this.textResourceConfigurationService.getValue(this.resource, "files.encoding");
            this.configuredEncoding !== n && typeof n == "string" && (this.configuredEncoding = n, e && !this.preferredEncoding && this._onDidChangeEncoding.fire());
        }
        if (!t || t.affectsConfiguration(this.resource, "workbench.editor.untitled.labelFormat")) {
            const n = this.textResourceConfigurationService.getValue(this.resource, "workbench.editor.untitled.labelFormat");
            this.configuredLabelFormat !== n && (n === "content" || n === "name") && (this.configuredLabelFormat = n, e && this._onDidChangeName.fire());
        }
    }
    setLanguageId(t, e) {
        const n = t === cye.ACTIVE_EDITOR_LANGUAGE_ID ? this.editorService.activeTextEditorLanguageId : t;
        this.preferredLanguageId = n, n && super.setLanguageId(n, e);
    }
    getLanguageId() {
        return this.textEditorModel ? this.textEditorModel.getLanguageId() : this.preferredLanguageId;
    }
    getEncoding() {
        return this.preferredEncoding || this.configuredEncoding;
    }
    async setEncoding(t) {
        const e = this.getEncoding();
        this.preferredEncoding = t, e !== this.preferredEncoding && this._onDidChangeEncoding.fire();
    }
    isDirty() {
        return this.dirty;
    }
    isModified() {
        return this.isDirty();
    }
    setDirty(t) {
        this.dirty !== t && (this.dirty = t, this._onDidChangeDirty.fire());
    }
    async save(t) {
        const e = await this.textFileService.save(this.resource, t);
        return e && this._onDidSave.fire({
            reason: t?.reason,
            source: t?.source
        }), !!e;
    }
    async revert() {
        this.ignoreDirtyOnModelContentChange = !0;
        try {
            this.updateTextEditorModel(lsi(""));
        } finally{
            this.ignoreDirtyOnModelContentChange = !1;
        }
        this.setDirty(!1), this._onDidRevert.fire();
    }
    async backup(t) {
        let e;
        return this.isResolved() ? e = await this.textFileService.getEncodedReadable(this.resource, this.createSnapshot() ?? void 0, {
            encoding: bG
        }) : typeof this.initialValue == "string" && (e = XXu(Tr.fromString(this.initialValue))), {
            content: e
        };
    }
    async resolve() {
        let t = !1, e = !1;
        if (this.textEditorModel) this.updateTextEditorModel(void 0, this.preferredLanguageId);
        else {
            let i;
            const r = await this.workingCopyBackupService.resolve(this);
            r ? (i = r.value, e = !0) : i = Vvt(Tr.fromString(this.initialValue || ""));
            const s = await E$o(await this.textFileService.getDecodedStream(this.resource, i, {
                encoding: bG
            }));
            this.createTextEditorModel(s, this.resource, this.preferredLanguageId), t = !0;
        }
        const n = Md(this.textEditorModel);
        return this.installModelListeners(n), t && ((e || this.initialValue) && this.updateNameFromFirstLine(n), this.setDirty(this.hasAssociatedFilePath || !!e || !!this.initialValue), (e || this.initialValue) && this._onDidChangeContent.fire()), super.resolve();
    }
    installModelListeners(t) {
        this._register(t.onDidChangeContent((e)=>this.onModelContentChanged(t, e))), this._register(t.onDidChangeLanguage(()=>this.onConfigurationChange(void 0, !0))), super.installModelListeners(t);
    }
    onModelContentChanged(t, e) {
        this.ignoreDirtyOnModelContentChange || (!this.hasAssociatedFilePath && t.getLineCount() === 1 && t.getLineLength(1) === 0 ? this.setDirty(!1) : this.setDirty(!0)), e.changes.some((n)=>(n.range.startLineNumber === 1 || n.range.endLineNumber === 1) && n.range.startColumn <= cye.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH) && this.updateNameFromFirstLine(t), this._onDidChangeContent.fire(), this.autoDetectLanguage();
    }
    updateNameFromFirstLine(t) {
        if (this.hasAssociatedFilePath) return;
        let e, n = t.getValueInRange({
            startLineNumber: 1,
            endLineNumber: 1,
            startColumn: 1,
            endColumn: cye.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH + 1
        }).trim().replace(/\s+/g, " ").replace(/\u202E/g, "");
        n = n.substr(0, SXu(n, cye.FIRST_LINE_NAME_MAX_LENGTH)[0]), n && rwr().exec(n) && (e = n), e !== this.cachedModelFirstLineWords && (this.cachedModelFirstLineWords = e, this._onDidChangeName.fire());
    }
    isReadonly() {
        return !1;
    }
}, cye.FIRST_LINE_NAME_MAX_LENGTH = 40, cye.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH = cye.FIRST_LINE_NAME_MAX_LENGTH * 10, cye.ACTIVE_EDITOR_LANGUAGE_ID = "${activeEditorLanguage}", cye = Re([
    F(5, Ph),
    F(6, dd),
    F(7, vme),
    F(8, Mw),
    F(9, rF),
    F(10, Vf),
    F(11, Yp),
    F(12, gr),
    F(13, gVe),
    F(14, GS)
], cye);

}
