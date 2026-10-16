import { D, Gt, Nc, Qe, Vn, en, st, tt } from "./Iwo.js";
import { DMk, a2g, wVe } from "./Ycg.js";
import { or, yi } from "./configuration.js";
import { eye, l9e } from "./decorations_2.js";
import { fo, ps } from "./environmentService.js";
import { ihn, ms, wk } from "./files.js";
import { EB } from "./getIconClasses.js";
import { Snt, mRe } from "./iconLabel.js";
import { It, dn } from "./instantiation.js";
import { Nx, R6e, pR } from "./ipa.js";
import { Yp, qg } from "./label.js";
import { Kp, Ph } from "./language.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { lXr, oXr } from "./notebookDocumentService.js";
import { cp } from "./objects.js";
import { Lr, Mc, gu, l7 } from "./resources.js";
import { Vf, u_ } from "./textfiles.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Rja } from "./yBp.js";
var b2n, ylt, LAi, Fds;
export { Fds, LAi, b2n, ylt };
var __wakaru_dKt_initialized = false;
export function dKt() {
if (__wakaru_dKt_initialized) return;
__wakaru_dKt_initialized = true;
"use strict";
E(), Bt(), fn(), Lr(), Snt(), Kp(), Sr(), or(), xp(), u_(), l9e(), Ki(), ms(), Dl(), Gt(), qg(), EB(), Qe(), It(), Nx(), lXr(), fo(), cp(), b2n = {
    onDidChangeVisibility: en.None
}, ylt = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(), this.instantiationService = e, this.configurationService = n, this.modelService = i, this.workspaceService = r, this.languageService = s, this.decorationsService = o, this.themeService = a, this.labelService = l, this.textFileService = c, this.environmentService = u, this._onDidChangeDecorations = this._register(new tt), this.onDidChangeDecorations = this._onDidChangeDecorations.event, this.widgets = [], this.labels = [], this.registerListeners(t);
    }
    registerListeners(t) {
        this._register(t.onDidChangeVisibility((e)=>{
            this.widgets.forEach((n)=>n.notifyVisibilityChanged(e));
        })), this._register(this.languageService.onDidChange(()=>this.widgets.forEach((e)=>e.notifyExtensionsRegistered()))), this._register(this.modelService.onModelLanguageChanged((e)=>{
            e.model.uri && this.widgets.forEach((n)=>n.notifyModelLanguageChanged(e.model));
        })), this._register(this.modelService.onModelAdded((e)=>{
            e.uri && this.widgets.forEach((n)=>n.notifyModelAdded(e));
        })), this._register(this.workspaceService.onDidChangeWorkspaceFolders(()=>{
            this.widgets.forEach((e)=>e.notifyWorkspaceFoldersChange());
        })), this._register(this.decorationsService.onDidChangeDecorations((e)=>{
            let n = !1;
            this.widgets.forEach((i)=>{
                i.notifyFileDecorationsChanges(e) && (n = !0);
            }), n && this._onDidChangeDecorations.fire();
        })), this._register(this.themeService.onDidColorThemeChange(()=>this.widgets.forEach((e)=>e.notifyThemeChange()))), this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            e.affectsConfiguration(ihn) && this.widgets.forEach((n)=>n.notifyFileAssociationsChange());
        })), this._register(this.labelService.onDidChangeFormatters((e)=>{
            this.widgets.forEach((n)=>n.notifyFormattersChange(e.scheme));
        })), this._register(this.textFileService.untitled.onDidChangeLabel((e)=>{
            this.widgets.forEach((n)=>n.notifyUntitledLabelChange(e.resource));
        }));
    }
    get(t) {
        return this.labels[t];
    }
    create(t, e) {
        const n = this.instantiationService.createInstance(Fds, t, e), i = {
            element: n.element,
            onDidRender: n.onDidRender,
            setLabel: (r, s, o)=>n.setLabel(r, s, o),
            setResource: (r, s)=>n.setResource(r, s),
            setFile: (r, s)=>n.setFile(r, s),
            clear: ()=>n.clear(),
            dispose: ()=>this.disposeWidget(n)
        };
        return this.labels.push(i), this.widgets.push(n), i;
    }
    disposeWidget(t) {
        const e = this.widgets.indexOf(t);
        e > -1 && (this.widgets.splice(e, 1), this.labels.splice(e, 1)), Nc(t);
    }
    clear() {
        this.widgets = Nc(this.widgets), this.labels = [];
    }
    dispose() {
        super.dispose(), this.clear();
    }
}, ylt = Re([
    F(1, dn),
    F(2, yi),
    F(3, dd),
    F(4, yr),
    F(5, Ph),
    F(6, eye),
    F(7, Ml),
    F(8, Yp),
    F(9, Vf),
    F(10, ps)
], ylt), LAi = class extends ylt {
    get element() {
        return this.label;
    }
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(b2n, n, i, r, s, o, a, l, c, u, d), this.label = this._register(this.create(t, e));
    }
}, LAi = Re([
    F(2, dn),
    F(3, yi),
    F(4, dd),
    F(5, yr),
    F(6, Ph),
    F(7, eye),
    F(8, Ml),
    F(9, Yp),
    F(10, Vf),
    F(11, ps)
], LAi), Fds = class extends mRe {
    constructor(t, e, n, i, r, s, o, a, l, c){
        super(t, e), this.languageService = n, this.modelService = i, this.decorationsService = r, this.labelService = s, this.textFileService = o, this.contextService = a, this.notebookDocumentService = l, this.environmentService = c, this._onDidRender = this._register(new tt), this.onDidRender = this._onDidRender.event, this.label = void 0, this.decoration = this._register(new Vn), this.options = void 0, this.computedIconClasses = void 0, this.computedLanguageId = void 0, this.computedPathLabel = void 0, this.computedWorkspaceFolderLabel = void 0, this.lastRenderedLabelState = void 0, this.needsRedraw = void 0, this.isHidden = !1;
    }
    setLabel(t, e, n) {
        this.lastRenderedLabelState = void 0, super.setLabel(t, e, n);
    }
    notifyVisibilityChanged(t) {
        t === this.isHidden && (this.isHidden = !t, t && this.needsRedraw && (this.render({
            updateIcon: this.needsRedraw === 2,
            updateDecoration: this.needsRedraw === 2
        }), this.needsRedraw = void 0));
    }
    notifyModelLanguageChanged(t) {
        this.handleModelEvent(t);
    }
    notifyModelAdded(t) {
        this.handleModelEvent(t);
    }
    handleModelEvent(t) {
        const e = wVe(this.label);
        e && gu(t.uri, e) && this.computedLanguageId !== t.getLanguageId() && (this.computedLanguageId = t.getLanguageId(), this.render({
            updateIcon: !0,
            updateDecoration: !1
        }));
    }
    notifyFileDecorationsChanges(t) {
        if (!this.options) return !1;
        const e = wVe(this.label);
        return e && this.options.fileDecorations && t.affectsResource(e) ? this.render({
            updateIcon: !1,
            updateDecoration: !0
        }) : !1;
    }
    notifyExtensionsRegistered() {
        this.render({
            updateIcon: !0,
            updateDecoration: !1
        });
    }
    notifyThemeChange() {
        this.render({
            updateIcon: !1,
            updateDecoration: !1
        });
    }
    notifyFileAssociationsChange() {
        this.render({
            updateIcon: !0,
            updateDecoration: !1
        });
    }
    notifyFormattersChange(t) {
        wVe(this.label)?.scheme === t && this.render({
            updateIcon: !1,
            updateDecoration: !1
        });
    }
    notifyUntitledLabelChange(t) {
        gu(t, wVe(this.label)) && this.render({
            updateIcon: !1,
            updateDecoration: !1
        });
    }
    notifyWorkspaceFoldersChange() {
        if (typeof this.computedWorkspaceFolderLabel == "string") {
            const t = wVe(this.label);
            rt.isUri(t) && this.label?.name === this.computedWorkspaceFolderLabel && this.setFile(t, this.options);
        }
    }
    setFile(t, e) {
        const n = e?.hideLabel;
        let i;
        if (!n) {
            if (e?.fileKind === wk.ROOT_FOLDER) {
                const s = this.contextService.getWorkspaceFolder(t);
                s && (i = s.name, this.computedWorkspaceFolderLabel = i);
            }
            i || (i = R6e(l7(t)));
        }
        let r;
        if (!e?.hidePath) {
            const s = this.labelService.getUriLabel(Mc(t), {
                relative: !0
            });
            s && s !== "." && (r = s);
        }
        this.setResource({
            resource: t,
            name: i,
            description: r,
            range: e?.range
        }, e);
    }
    setResource(t, e = Object.create(null)) {
        const n = wVe(t), i = t?.resource && !rt.isUri(t.resource);
        if (!e.forceLabel && !i && n?.scheme === Ot.untitled) {
            const l = this.textFileService.untitled.get(n);
            if (l && !l.hasAssociatedFilePath) {
                if (typeof t.name == "string" && (t.name = l.name), typeof t.description == "string") {
                    const u = l.resource.path;
                    t.name !== u ? t.description = u : t.description = void 0;
                }
                const c = l.resource.path;
                l.name !== c ? e.title = `${l.name} \u2022 ${c}` : e.title = c;
            }
        }
        if (!e.forceLabel && !i && n?.scheme === Ot.vscodeNotebookCell) {
            const l = this.notebookDocumentService.getNotebook(n), c = l?.getCellIndex(n);
            l && c !== void 0 && typeof t.name == "string" && (e.title = D(3245, null, t.name, `${c + 1}`)), typeof t.name == "string" && l && c !== void 0 && typeof t.name == "string" && (t.name = D(3246, null, t.name, `${c + 1}`));
        }
        if (!e.forceLabel && !i && n?.scheme === Ot.vscodeNotebookCellOutput) {
            const l = this.notebookDocumentService.getNotebook(n), c = Rja(n);
            if (c?.cellFragment) {
                if (!c.notebook) return;
                const u = c.notebook.with({
                    scheme: Ot.vscodeNotebookCell,
                    fragment: c.cellFragment
                }), d = l?.getCellIndex(u), h = c.outputIndex;
                d !== void 0 && h !== void 0 && typeof t.name == "string" ? t.name = D(3247, null, t.name, `${d + 1}`, `${h + 1}`) : d !== void 0 && typeof t.name == "string" && (t.name = D(3248, null, t.name, `${d + 1}`));
            }
        }
        const r = this.hasResourceChanged(t), s = r || this.hasPathLabelChanged(t), o = this.hasFileKindChanged(e), a = this.hasIconChanged(e);
        this.label = t, this.options = e, r && (this.computedLanguageId = void 0), s && (this.computedPathLabel = void 0), this.render({
            updateIcon: r || o || a,
            updateDecoration: r || o
        });
    }
    hasFileKindChanged(t) {
        const e = t?.fileKind, n = this.options?.fileKind;
        return e !== n;
    }
    hasResourceChanged(t) {
        const e = wVe(t), n = wVe(this.label);
        return e && n ? e.toString() !== n.toString() : !(!e && !n);
    }
    hasPathLabelChanged(t) {
        const e = wVe(t);
        return !!e && this.computedPathLabel !== this.labelService.getUriLabel(e);
    }
    hasIconChanged(t) {
        return this.options?.icon !== t?.icon;
    }
    clear() {
        this.label = void 0, this.options = void 0, this.computedLanguageId = void 0, this.computedIconClasses = void 0, this.computedPathLabel = void 0, this.lastRenderedLabelState = void 0, this.setLabel("");
    }
    render(t) {
        if (this.isHidden) return this.needsRedraw !== 2 && (this.needsRedraw = t.updateIcon || t.updateDecoration ? 2 : 1), !1;
        if (t.updateIcon && (this.computedIconClasses = void 0), !this.label) return !1;
        const e = {
            title: "",
            bold: this.options?.bold,
            italic: this.options?.italic,
            strikethrough: this.options?.strikethrough,
            matches: this.options?.matches,
            descriptionMatches: this.options?.descriptionMatches,
            extraClasses: [],
            separator: this.options?.separator,
            domId: this.options?.domId,
            disabledCommand: this.options?.disabledCommand,
            labelEscapeNewLines: this.options?.labelEscapeNewLines,
            descriptionTitle: this.options?.descriptionTitle,
            supportIcons: this.options?.supportIcons
        }, n = wVe(this.label);
        if (this.options?.title !== void 0 && (e.title = this.options.title), n && n.scheme !== Ot.data && (!this.options?.title || typeof this.options.title != "string" && !this.options.title.markdownNotSupportedFallback) && (this.computedPathLabel || (this.computedPathLabel = this.labelService.getUriLabel(n)), !e.title || typeof e.title == "string" ? e.title = this.computedPathLabel : e.title.markdownNotSupportedFallback || (e.title.markdownNotSupportedFallback = this.computedPathLabel)), this.options && !this.options.hideIcon && (this.computedIconClasses || (this.computedIconClasses = pR(this.modelService, this.languageService, n, this.options.fileKind, this.options.icon)), rt.isUri(this.options.icon) && (e.iconPath = this.options.icon), this.options.iconElement && (e.iconElement = this.options.iconElement), e.extraClasses = this.computedIconClasses.slice(0)), this.options?.extraClasses && e.extraClasses.push(...this.options.extraClasses), this.options?.fileDecorations && n) {
            t.updateDecoration && (this.decoration.value = this.decorationsService.getDecoration(n, this.options.fileKind !== wk.FILE));
            const s = this.decoration.value;
            if (s) {
                if (s.tooltip) {
                    if (typeof e.title == "string") e.title = `${e.title} \u2022 ${s.tooltip}`;
                    else if (typeof e.title?.markdown == "string") {
                        const o = `${e.title.markdown} \u2022 ${s.tooltip}`;
                        e.title = {
                            markdown: o,
                            markdownNotSupportedFallback: o
                        };
                    }
                }
                s.strikethrough && (e.strikethrough = !0), this.options.fileDecorations.colors && e.extraClasses.push(s.labelClassName), this.options.fileDecorations.badges && (e.extraClasses.push(s.badgeClassName), e.extraClasses.push(s.iconClassName));
            }
        }
        this.label.range && (e.suffix = this.label.range.startLineNumber !== this.label.range.endLineNumber ? `:${this.label.range.startLineNumber}-${this.label.range.endLineNumber}` : `:${this.label.range.startLineNumber}`);
        const i = Array.isArray(this.label.name) ? [
            ...this.label.name
        ] : this.label.name ?? "", r = {
            label: i,
            description: this.label.description,
            title: a2g(e.title),
            descriptionTitle: a2g(e.descriptionTitle),
            suffix: e.suffix,
            extraClasses: [
                ...e.extraClasses
            ],
            bold: e.bold,
            italic: e.italic,
            strikethrough: e.strikethrough,
            supportIcons: e.supportIcons,
            matches: e.matches?.slice(0),
            descriptionMatches: e.descriptionMatches?.slice(0),
            separator: e.separator,
            domId: e.domId,
            disabledCommand: e.disabledCommand,
            labelEscapeNewLines: e.labelEscapeNewLines,
            iconPath: e.iconPath?.toString(),
            iconElement: e.iconElement
        };
        return DMk(this.lastRenderedLabelState, r) ? !1 : (this.setLabel(i, r.description, e), this.lastRenderedLabelState = r, this._onDidRender.fire(), !0);
    }
    dispose() {
        super.dispose(), this.label = void 0, this.options = void 0, this.computedLanguageId = void 0, this.computedIconClasses = void 0, this.computedPathLabel = void 0, this.computedWorkspaceFolderLabel = void 0, this.lastRenderedLabelState = void 0;
    }
}, Fds = Re([
    F(2, Ph),
    F(3, dd),
    F(4, eye),
    F(5, Yp),
    F(6, Vf),
    F(7, yr),
    F(8, oXr),
    F(9, ps)
], Fds);

}
