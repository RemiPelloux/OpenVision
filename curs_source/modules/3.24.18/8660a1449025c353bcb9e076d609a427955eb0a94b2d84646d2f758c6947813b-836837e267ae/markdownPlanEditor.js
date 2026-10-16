import { Qe, Vn } from "./Iwo.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { I6, Y4 } from "./composerPlanService.js";
import { Hi, Rr } from "./contextkey.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { iKt, mVe } from "./editorWithViewState.js";
import { od, sT } from "./editor_2.js";
import { is, ms } from "./files.js";
import { It, dn } from "./instantiation.js";
import { Sks, qct } from "./markdownPlanEditorActions.js";
import { EEw } from "./markdownPlanEditorFindWidget.css";
import { E$, _xi } from "./markdownPlanEditorInput.js";
import { Ki, Ot } from "./network.js";
import { TEw, bks } from "./planEditorFindController.js";
import { bxi, uTe, yxi } from "./planEditorModeService.js";
import { FFf, _Ew } from "./renderMarkdownPlanEditor.js";
import { Zi, ki } from "./storage_2.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var jme;
export { jme };
var __wakaru_$Ff_initialized = false;
export function $Ff() {
if (__wakaru_$Ff_initialized) return;
__wakaru_$Ff_initialized = true;
"use strict";
E(), iKt(), Dl(), _xi(), Zi(), It(), od(), Ld(), _Ew(), Qe(), Ki(), yxi(), Hi(), Sks(), Pl(), I6(), ms(), Wo(), TEw(), FC(), EEw(), jme = class extends mVe {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(jme.ID, t, jme.VIEW_STATE_PREFERENCE_KEY, i, n, d, e, c, u), this.contextKeyService = r, this.planEditorModeService = s, this.composerDataService = o, this.composerPlanService = a, this.fileService = l, this.planChangeListener = this._register(new Vn), this.fileWatcher = this._register(new Vn), this.globalMarkdownPlanEditorActiveContextKey = qct.bindTo(this.contextKeyService);
    }
    get scopedContextKeyService() {
        return this._scopedContextKeyService;
    }
    computeEditorViewState(t) {
        if (!this.markdownPlanRendering) return;
        const e = this.markdownPlanRendering.getViewState?.();
        if (e) return e;
    }
    tracksEditorViewState(t) {
        return t instanceof E$;
    }
    tracksDisposedEditorViewState() {
        return !0;
    }
    toEditorViewStateResource(t) {
        return t.resource;
    }
    createEditor(t) {
        this._scopedContextKeyService = this.contextKeyService.createScoped(t), this.markdownPlanEditorActiveContextKey = qct.bindTo(this._scopedContextKeyService);
    }
    async setInput(t, e, n, i) {
        if (this.planEditorModeService.getMode(t.resource) === uTe.RAW) {
            const l = e?.override;
            if (l === E$.EditorID || l === jme.ID) this.planEditorModeService.setMode(t.resource, uTe.RICH);
            else {
                await this.editorService.openEditor({
                    resource: t.resource,
                    options: {
                        ...e,
                        override: sT.id
                    }
                });
                return;
            }
        }
        if (!await this.fileService.exists(t.resource)) {
            console.log("[MarkdownPlanEditor] File does not exist, attempting redirect resolution for:", t.resource.toString());
            try {
                const l = await this.composerPlanService.resolveCurrentUri(t.resource);
                if (l.toString() !== t.resource.toString()) {
                    console.log("[MarkdownPlanEditor] Redirecting to resolved URI:", l.toString());
                    const c = this.editorService.findEditors(l);
                    if (c.length > 0) {
                        console.log("[MarkdownPlanEditor] Resolved URI already open, focusing existing editor");
                        const d = c[0];
                        await this.group.closeEditor(t), await this.editorService.openEditor(d.editor, {
                            preserveFocus: e?.preserveFocus
                        }, d.groupId);
                        return;
                    }
                    const u = this.instantiationService.createInstance(E$, l);
                    await this.group.replaceEditors([
                        {
                            editor: t,
                            replacement: u,
                            options: {
                                ...e,
                                preserveFocus: e?.preserveFocus
                            }
                        }
                    ]);
                    return;
                }
            } catch (l) {
                console.warn("[MarkdownPlanEditor] Failed to resolve redirect:", l);
            }
        }
        const o = this.loadEditorViewState(t, n);
        await super.setInput(t, e, n, i), this.markdownPlanRendering && this.markdownPlanRendering.dispose();
        const a = this.getContainer();
        a && (a.tabIndex = 0, a.setAttribute("role", "document"), a.style.outline = "none", this.markdownPlanRendering = FFf(a, this.instantiationService, t, this), this.setupPlanChangeListener(t), this.setupFileWatcher(t.resource), this.setupFindWidget(a), this.markdownPlanEditorActiveContextKey?.set(!0), this.globalMarkdownPlanEditorActiveContextKey?.set(!0), o && this.markdownPlanRendering.setViewState && this.markdownPlanRendering.setViewState(o));
    }
    clearInput() {
        super.clearInput(), this.markdownPlanRendering?.dispose(), this.markdownPlanRendering = void 0, this.cleanupPlanChangeListener(), this.cleanupFileWatcher(), this.cleanupFindWidget(), this.markdownPlanEditorActiveContextKey?.set(!1), this.globalMarkdownPlanEditorActiveContextKey?.set(!1);
    }
    setupFileWatcher(t) {
        this.cleanupFileWatcher(), this.fileWatcher.value = this.fileService.onDidFilesChange(async (e)=>{
            e.contains(t) && this.markdownPlanRendering?.reload && await this.markdownPlanRendering.reload();
        });
    }
    cleanupFileWatcher() {
        this.fileWatcher.clear();
    }
    layout(t) {
        this.findController?.layout(t.width);
    }
    focus() {
        super.focus();
        const t = this.getContainer();
        t && t.focus();
    }
    setEditorVisible(t) {
        super.setEditorVisible(t), this.markdownPlanEditorActiveContextKey?.set(t), this.globalMarkdownPlanEditorActiveContextKey?.set(t);
    }
    setupPlanChangeListener(t) {
        if (t.resource.scheme !== Ot.cursorPlan) return;
        const e = this.composerPlanService.onDidPlanUpdate(async (n)=>{
            n.uri.toString() === t.resource.toString() && await t.save(this.group.id);
        });
        this.planChangeListener.value = e;
    }
    cleanupPlanChangeListener() {
        this.planChangeListener.clear();
    }
    setupFindWidget(t) {
        this.findController?.dispose(), this.findController = this.instantiationService.createInstance(bks, {
            getContainer: ()=>this.getContainer()
        }), this.findController.mount(t);
    }
    cleanupFindWidget() {
        this.findController?.dispose(), this.findController = void 0;
    }
    revealFindWidget() {
        this.findController?.reveal();
    }
    getFindWidget() {
        return this.findController?.getWidget();
    }
    dispose() {
        this.markdownPlanRendering?.dispose(), this.markdownPlanRendering = void 0, this.cleanupPlanChangeListener(), this.cleanupFileWatcher(), this.cleanupFindWidget(), this.markdownPlanEditorActiveContextKey?.set(!1), this.globalMarkdownPlanEditorActiveContextKey?.set(!1), super.dispose();
    }
}, jme.ID = "markdownPlanEditor", jme.VIEW_STATE_PREFERENCE_KEY = "markdownPlanEditorViewState", jme = Re([
    F(1, Ml),
    F(2, ki),
    F(3, dn),
    F(4, Rr),
    F(5, bxi),
    F(6, no),
    F(7, Y4),
    F(8, is),
    F(9, gr),
    F(10, _a),
    F(11, Mw)
], jme);

}
