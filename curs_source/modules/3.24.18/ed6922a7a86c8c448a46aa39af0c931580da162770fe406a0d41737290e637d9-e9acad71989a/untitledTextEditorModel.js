import { Fo, Ps, bt, jxc, nzr, tl, ve, wAe, wi } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { Ni, hn } from "./editorService.js";
import { J6, k5n } from "./encoding.js";
import { dc, yu } from "./label.js";
import { kl, pc } from "./language.js";
import { NLe, hhe } from "./languageDetectionWorkerService.js";
import { Ll, fc } from "./model.js";
import { Mfn, egn, o_i } from "./qIc.js";
import { ezt, obe } from "./textEditorModel.js";
import { Mv } from "./textModel.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { NAe } from "./wordHelper.js";
import { szt, ynt } from "./workingCopy.js";
import { Y$, hZ } from "./workingCopyBackup.js";
import { $D, dL } from "./workingCopyService.js";
var Roe;
export { Roe };
var __wakaru_bDo_initialized = false;
export function bDo() {
if (__wakaru_bDo_initialized) return;
__wakaru_bDo_initialized = true;
"use strict";
x(), ezt(), kl(), Ll(), bt(), hZ(), M_(), Mv(), dL(), szt(), Ag(), gr(), yu(), NAe(), Ni(), Ps(), k5n(), Fo(), NLe(), Op(), Roe = class extends obe {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f){
        super(o, s, g, f), this.resource = e, this.hasAssociatedFilePath = t, this.initialValue = n, this.preferredLanguageId = i, this.preferredEncoding = r, this.workingCopyBackupService = a, this.textResourceConfigurationService = c, this.workingCopyService = l, this.textFileService = u, this.labelService = h, this.editorService = p, this._onDidChangeContent = this._register(new ve), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidChangeName = this._register(new ve), this.onDidChangeName = this._onDidChangeName.event, this._onDidChangeDirty = this._register(new ve), this.onDidChangeDirty = this._onDidChangeDirty.event, this._onDidChangeEncoding = this._register(new ve), this.onDidChangeEncoding = this._onDidChangeEncoding.event, this._onDidSave = this._register(new ve), this.onDidSave = this._onDidSave.event, this._onDidRevert = this._register(new ve), this.onDidRevert = this._onDidRevert.event, this.typeId = ynt, this.capabilities = 2, this.configuredLabelFormat = "content", this.cachedModelFirstLineWords = void 0, this.ignoreDirtyOnModelContentChange = !1, this.dirty = this.hasAssociatedFilePath || !!this.initialValue, this._register(this.workingCopyService.registerWorkingCopy(this)), i && this.setLanguageId(i), this.onConfigurationChange(void 0, !1), this.registerListeners();
    }
    get name() {
        return this.configuredLabelFormat === "content" && !this.hasAssociatedFilePath && this.cachedModelFirstLineWords ? this.cachedModelFirstLineWords : this.labelService.getUriBasenameLabel(this.resource);
    }
    registerListeners() {
        this._register(this.textResourceConfigurationService.onDidChangeConfiguration((e)=>this.onConfigurationChange(e, !0)));
    }
    onConfigurationChange(e, t) {
        if (!e || e.affectsConfiguration(this.resource, "files.encoding")) {
            const n = this.textResourceConfigurationService.getValue(this.resource, "files.encoding");
            this.configuredEncoding !== n && typeof n == "string" && (this.configuredEncoding = n, t && !this.preferredEncoding && this._onDidChangeEncoding.fire());
        }
        if (!e || e.affectsConfiguration(this.resource, "workbench.editor.untitled.labelFormat")) {
            const n = this.textResourceConfigurationService.getValue(this.resource, "workbench.editor.untitled.labelFormat");
            this.configuredLabelFormat !== n && (n === "content" || n === "name") && (this.configuredLabelFormat = n, t && this._onDidChangeName.fire());
        }
    }
    setLanguageId(e, t) {
        const n = e === Roe.ACTIVE_EDITOR_LANGUAGE_ID ? this.editorService.activeTextEditorLanguageId : e;
        this.preferredLanguageId = n, n && super.setLanguageId(n, t);
    }
    getLanguageId() {
        return this.textEditorModel ? this.textEditorModel.getLanguageId() : this.preferredLanguageId;
    }
    getEncoding() {
        return this.preferredEncoding || this.configuredEncoding;
    }
    async setEncoding(e) {
        const t = this.getEncoding();
        this.preferredEncoding = e, t !== this.preferredEncoding && this._onDidChangeEncoding.fire();
    }
    isDirty() {
        return this.dirty;
    }
    isModified() {
        return this.isDirty();
    }
    setDirty(e) {
        this.dirty !== e && (this.dirty = e, this._onDidChangeDirty.fire());
    }
    async save(e) {
        const t = await this.textFileService.save(this.resource, e);
        return t && this._onDidSave.fire({
            reason: e?.reason,
            source: e?.source
        }), !!t;
    }
    async revert() {
        this.ignoreDirtyOnModelContentChange = !0;
        try {
            this.updateTextEditorModel(Mfn(""));
        } finally{
            this.ignoreDirtyOnModelContentChange = !1;
        }
        this.setDirty(!1), this._onDidRevert.fire();
    }
    async backup(e) {
        let t;
        return this.isResolved() ? t = await this.textFileService.getEncodedReadable(this.resource, this.createSnapshot() ?? void 0, {
            encoding: J6
        }) : typeof this.initialValue == "string" && (t = nzr(wi.fromString(this.initialValue))), {
            content: t
        };
    }
    async resolve() {
        let e = !1, t = !1;
        if (this.textEditorModel) this.updateTextEditorModel(void 0, this.preferredLanguageId);
        else {
            let i;
            const r = await this.workingCopyBackupService.resolve(this);
            r ? (i = r.value, t = !0) : i = wAe(wi.fromString(this.initialValue || ""));
            const s = await o_i(await this.textFileService.getDecodedStream(this.resource, i, {
                encoding: J6
            }));
            this.createTextEditorModel(s, this.resource, this.preferredLanguageId), e = !0;
        }
        const n = tl(this.textEditorModel);
        return this.installModelListeners(n), e && ((t || this.initialValue) && this.updateNameFromFirstLine(n), this.setDirty(this.hasAssociatedFilePath || !!t || !!this.initialValue), (t || this.initialValue) && this._onDidChangeContent.fire()), super.resolve();
    }
    installModelListeners(e) {
        this._register(e.onDidChangeContent((t)=>this.onModelContentChanged(e, t))), this._register(e.onDidChangeLanguage(()=>this.onConfigurationChange(void 0, !0))), super.installModelListeners(e);
    }
    onModelContentChanged(e, t) {
        this.ignoreDirtyOnModelContentChange || (!this.hasAssociatedFilePath && e.getLineCount() === 1 && e.getLineLength(1) === 0 ? this.setDirty(!1) : this.setDirty(!0)), t.changes.some((n)=>(n.range.startLineNumber === 1 || n.range.endLineNumber === 1) && n.range.startColumn <= Roe.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH) && this.updateNameFromFirstLine(e), this._onDidChangeContent.fire(), this.autoDetectLanguage();
    }
    updateNameFromFirstLine(e) {
        if (this.hasAssociatedFilePath) return;
        let t, n = e.getValueInRange({
            startLineNumber: 1,
            endLineNumber: 1,
            startColumn: 1,
            endColumn: Roe.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH + 1
        }).trim().replace(/\s+/g, " ").replace(/\u202E/g, "");
        n = n.substr(0, jxc(n, Roe.FIRST_LINE_NAME_MAX_LENGTH)[0]), n && egn().exec(n) && (t = n), t !== this.cachedModelFirstLineWords && (this.cachedModelFirstLineWords = t, this._onDidChangeName.fire());
    }
    isReadonly() {
        return !1;
    }
}, Roe.FIRST_LINE_NAME_MAX_LENGTH = 40, Roe.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH = Roe.FIRST_LINE_NAME_MAX_LENGTH * 10, Roe.ACTIVE_EDITOR_LANGUAGE_ID = "${activeEditorLanguage}", Roe = ie([
    C(5, pc),
    C(6, fc),
    C(7, Y$),
    C(8, $v),
    C(9, $D),
    C(10, Xp),
    C(11, dc),
    C(12, hn),
    C(13, hhe),
    C(14, ym)
], Roe);

}
