import { uao } from "./A3u.js";
import { Oj, T1, sT } from "./De_3.js";
import { Ct, Lo, S, Se, bt, cn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { oTe, woe } from "./decorations_2.js";
import { Vr, Yi } from "./environmentService.js";
import { Fi, Ig, tOt } from "./files.js";
import { WM } from "./getIconClasses.js";
import { TW, Tre } from "./iconLabel.js";
import { Ze, _t } from "./instantiation.js";
import { dc, yu } from "./label.js";
import { kl, pc } from "./language.js";
import { Ll, fc } from "./model.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { dNn, hNn } from "./notebookDocumentService.js";
import { bu } from "./objects.js";
import { yh } from "./qIc.js";
import { Ac, Li, mM, ml } from "./resources.js";
import { Ag, Xp } from "./textfiles.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
function $Le(e) {
    if (!(!e || !e.resource)) return Ee.isUri(e.resource) ? e.resource : e.resource.primary;
}
function M5h(e) {
    return !e || typeof e == "string" ? e : {
        markdown: e.markdown,
        markdownNotSupportedFallback: e.markdownNotSupportedFallback
    };
}
function P5h(e, t) {
    return e === t ? !0 : !e || !t || typeof e != typeof t || typeof e == "string" || typeof t == "string" ? !1 : e.markdownNotSupportedFallback === t.markdownNotSupportedFallback && yh(e.markdown, t.markdown);
}
function Id_(e, t) {
    return !!e && yh(e.label, t.label) && e.description === t.description && P5h(e.title, t.title) && P5h(e.descriptionTitle, t.descriptionTitle) && e.suffix === t.suffix && yh(e.extraClasses, t.extraClasses) && e.bold === t.bold && e.italic === t.italic && e.strikethrough === t.strikethrough && e.supportIcons === t.supportIcons && yh(e.matches, t.matches) && yh(e.descriptionMatches, t.descriptionMatches) && e.separator === t.separator && e.domId === t.domId && e.disabledCommand === t.disabledCommand && e.labelEscapeNewLines === t.labelEscapeNewLines && e.iconPath === t.iconPath && e.iconElement === t.iconElement;
}
var N0t, X$, Ant, vir;
export { $Le, Ant, Id_, M5h, N0t, P5h, X$, vir };
var __wakaru_Z$_initialized = false;
export function Z$() {
if (__wakaru_Z$_initialized) return;
__wakaru_Z$_initialized = true;
"use strict";
x(), rt(), Qt(), Li(), Tre(), kl(), ci(), Cn(), Ll(), Ag(), oTe(), li(), Fi(), as(), bt(), yu(), WM(), Se(), Ze(), sT(), hNn(), Vr(), bu(), N0t = {
    onDidChangeVisibility: Ct.None
}, X$ = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u){
        super(), this.instantiationService = t, this.configurationService = n, this.modelService = i, this.workspaceService = r, this.languageService = s, this.decorationsService = o, this.themeService = a, this.labelService = c, this.textFileService = l, this.environmentService = u, this._onDidChangeDecorations = this._register(new ve), this.onDidChangeDecorations = this._onDidChangeDecorations.event, this.widgets = [], this.labels = [], this.registerListeners(e);
    }
    registerListeners(e) {
        this._register(e.onDidChangeVisibility((t)=>{
            this.widgets.forEach((n)=>n.notifyVisibilityChanged(t));
        })), this._register(this.languageService.onDidChange(()=>this.widgets.forEach((t)=>t.notifyExtensionsRegistered()))), this._register(this.modelService.onModelLanguageChanged((t)=>{
            t.model.uri && this.widgets.forEach((n)=>n.notifyModelLanguageChanged(t.model));
        })), this._register(this.modelService.onModelAdded((t)=>{
            t.uri && this.widgets.forEach((n)=>n.notifyModelAdded(t));
        })), this._register(this.workspaceService.onDidChangeWorkspaceFolders(()=>{
            this.widgets.forEach((t)=>t.notifyWorkspaceFoldersChange());
        })), this._register(this.decorationsService.onDidChangeDecorations((t)=>{
            let n = !1;
            this.widgets.forEach((i)=>{
                i.notifyFileDecorationsChanges(t) && (n = !0);
            }), n && this._onDidChangeDecorations.fire();
        })), this._register(this.themeService.onDidColorThemeChange(()=>this.widgets.forEach((t)=>t.notifyThemeChange()))), this._register(this.configurationService.onDidChangeConfiguration((t)=>{
            t.affectsConfiguration(tOt) && this.widgets.forEach((n)=>n.notifyFileAssociationsChange());
        })), this._register(this.labelService.onDidChangeFormatters((t)=>{
            this.widgets.forEach((n)=>n.notifyFormattersChange(t.scheme));
        })), this._register(this.textFileService.untitled.onDidChangeLabel((t)=>{
            this.widgets.forEach((n)=>n.notifyUntitledLabelChange(t.resource));
        }));
    }
    get(e) {
        return this.labels[e];
    }
    create(e, t) {
        const n = this.instantiationService.createInstance(vir, e, t), i = {
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
    disposeWidget(e) {
        const t = this.widgets.indexOf(e);
        t > -1 && (this.widgets.splice(t, 1), this.labels.splice(t, 1)), Lo(e);
    }
    clear() {
        this.widgets = Lo(this.widgets), this.labels = [];
    }
    dispose() {
        super.dispose(), this.clear();
    }
}, X$ = ie([
    C(1, _t),
    C(2, qt),
    C(3, fc),
    C(4, Jn),
    C(5, pc),
    C(6, woe),
    C(7, $r),
    C(8, dc),
    C(9, Xp),
    C(10, Yi)
], X$), Ant = class extends X$ {
    get element() {
        return this.label;
    }
    constructor(e, t, n, i, r, s, o, a, c, l, u, h){
        super(N0t, n, i, r, s, o, a, c, l, u, h), this.label = this._register(this.create(e, t));
    }
}, Ant = ie([
    C(2, _t),
    C(3, qt),
    C(4, fc),
    C(5, Jn),
    C(6, pc),
    C(7, woe),
    C(8, $r),
    C(9, dc),
    C(10, Xp),
    C(11, Yi)
], Ant), vir = class extends TW {
    constructor(e, t, n, i, r, s, o, a, c, l){
        super(e, t), this.languageService = n, this.modelService = i, this.decorationsService = r, this.labelService = s, this.textFileService = o, this.contextService = a, this.notebookDocumentService = c, this.environmentService = l, this._onDidRender = this._register(new ve), this.onDidRender = this._onDidRender.event, this.label = void 0, this.decoration = this._register(new cn), this.options = void 0, this.computedIconClasses = void 0, this.computedLanguageId = void 0, this.computedPathLabel = void 0, this.computedWorkspaceFolderLabel = void 0, this.lastRenderedLabelState = void 0, this.needsRedraw = void 0, this.isHidden = !1;
    }
    setLabel(e, t, n) {
        this.lastRenderedLabelState = void 0, super.setLabel(e, t, n);
    }
    notifyVisibilityChanged(e) {
        e === this.isHidden && (this.isHidden = !e, e && this.needsRedraw && (this.render({
            updateIcon: this.needsRedraw === 2,
            updateDecoration: this.needsRedraw === 2
        }), this.needsRedraw = void 0));
    }
    notifyModelLanguageChanged(e) {
        this.handleModelEvent(e);
    }
    notifyModelAdded(e) {
        this.handleModelEvent(e);
    }
    handleModelEvent(e) {
        const t = $Le(this.label);
        t && Ac(e.uri, t) && this.computedLanguageId !== e.getLanguageId() && (this.computedLanguageId = e.getLanguageId(), this.render({
            updateIcon: !0,
            updateDecoration: !1
        }));
    }
    notifyFileDecorationsChanges(e) {
        if (!this.options) return !1;
        const t = $Le(this.label);
        return t && this.options.fileDecorations && e.affectsResource(t) ? this.render({
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
    notifyFormattersChange(e) {
        $Le(this.label)?.scheme === e && this.render({
            updateIcon: !1,
            updateDecoration: !1
        });
    }
    notifyUntitledLabelChange(e) {
        Ac(e, $Le(this.label)) && this.render({
            updateIcon: !1,
            updateDecoration: !1
        });
    }
    notifyWorkspaceFoldersChange() {
        if (typeof this.computedWorkspaceFolderLabel == "string") {
            const e = $Le(this.label);
            Ee.isUri(e) && this.label?.name === this.computedWorkspaceFolderLabel && this.setFile(e, this.options);
        }
    }
    setFile(e, t) {
        const n = t?.hideLabel;
        let i;
        if (!n) {
            if (t?.fileKind === Ig.ROOT_FOLDER) {
                const s = this.contextService.getWorkspaceFolder(e);
                s && (i = s.name, this.computedWorkspaceFolderLabel = i);
            }
            i || (i = Oj(mM(e)));
        }
        let r;
        if (!t?.hidePath) {
            const s = this.labelService.getUriLabel(ml(e), {
                relative: !0
            });
            s && s !== "." && (r = s);
        }
        this.setResource({
            resource: e,
            name: i,
            description: r,
            range: t?.range
        }, t);
    }
    setResource(e, t = Object.create(null)) {
        const n = $Le(e), i = e?.resource && !Ee.isUri(e.resource);
        if (!t.forceLabel && !i && n?.scheme === gt.untitled) {
            const c = this.textFileService.untitled.get(n);
            if (c && !c.hasAssociatedFilePath) {
                if (typeof e.name == "string" && (e.name = c.name), typeof e.description == "string") {
                    const u = c.resource.path;
                    e.name !== u ? e.description = u : e.description = void 0;
                }
                const l = c.resource.path;
                c.name !== l ? t.title = `${c.name} \u2022 ${l}` : t.title = l;
            }
        }
        if (!t.forceLabel && !i && n?.scheme === gt.vscodeNotebookCell) {
            const c = this.notebookDocumentService.getNotebook(n), l = c?.getCellIndex(n);
            c && l !== void 0 && typeof e.name == "string" && (t.title = S(3245, null, e.name, `${l + 1}`)), typeof e.name == "string" && c && l !== void 0 && typeof e.name == "string" && (e.name = S(3246, null, e.name, `${l + 1}`));
        }
        if (!t.forceLabel && !i && n?.scheme === gt.vscodeNotebookCellOutput) {
            const c = this.notebookDocumentService.getNotebook(n), l = uao(n);
            if (l?.cellFragment) {
                if (!l.notebook) return;
                const u = l.notebook.with({
                    scheme: gt.vscodeNotebookCell,
                    fragment: l.cellFragment
                }), h = c?.getCellIndex(u), p = l.outputIndex;
                h !== void 0 && p !== void 0 && typeof e.name == "string" ? e.name = S(3247, null, e.name, `${h + 1}`, `${p + 1}`) : h !== void 0 && typeof e.name == "string" && (e.name = S(3248, null, e.name, `${h + 1}`));
            }
        }
        const r = this.hasResourceChanged(e), s = r || this.hasPathLabelChanged(e), o = this.hasFileKindChanged(t), a = this.hasIconChanged(t);
        this.label = e, this.options = t, r && (this.computedLanguageId = void 0), s && (this.computedPathLabel = void 0), this.render({
            updateIcon: r || o || a,
            updateDecoration: r || o
        });
    }
    hasFileKindChanged(e) {
        const t = e?.fileKind, n = this.options?.fileKind;
        return t !== n;
    }
    hasResourceChanged(e) {
        const t = $Le(e), n = $Le(this.label);
        return t && n ? t.toString() !== n.toString() : !(!t && !n);
    }
    hasPathLabelChanged(e) {
        const t = $Le(e);
        return !!t && this.computedPathLabel !== this.labelService.getUriLabel(t);
    }
    hasIconChanged(e) {
        return this.options?.icon !== e?.icon;
    }
    clear() {
        this.label = void 0, this.options = void 0, this.computedLanguageId = void 0, this.computedIconClasses = void 0, this.computedPathLabel = void 0, this.lastRenderedLabelState = void 0, this.setLabel("");
    }
    render(e) {
        if (this.isHidden) return this.needsRedraw !== 2 && (this.needsRedraw = e.updateIcon || e.updateDecoration ? 2 : 1), !1;
        if (e.updateIcon && (this.computedIconClasses = void 0), !this.label) return !1;
        const t = {
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
        }, n = $Le(this.label);
        if (this.options?.title !== void 0 && (t.title = this.options.title), n && n.scheme !== gt.data && (!this.options?.title || typeof this.options.title != "string" && !this.options.title.markdownNotSupportedFallback) && (this.computedPathLabel || (this.computedPathLabel = this.labelService.getUriLabel(n)), !t.title || typeof t.title == "string" ? t.title = this.computedPathLabel : t.title.markdownNotSupportedFallback || (t.title.markdownNotSupportedFallback = this.computedPathLabel)), this.options && !this.options.hideIcon && (this.computedIconClasses || (this.computedIconClasses = T1(this.modelService, this.languageService, n, this.options.fileKind, this.options.icon)), Ee.isUri(this.options.icon) && (t.iconPath = this.options.icon), this.options.iconElement && (t.iconElement = this.options.iconElement), t.extraClasses = this.computedIconClasses.slice(0)), this.options?.extraClasses && t.extraClasses.push(...this.options.extraClasses), this.options?.fileDecorations && n) {
            e.updateDecoration && (this.decoration.value = this.decorationsService.getDecoration(n, this.options.fileKind !== Ig.FILE));
            const s = this.decoration.value;
            if (s) {
                if (s.tooltip) {
                    if (typeof t.title == "string") t.title = `${t.title} \u2022 ${s.tooltip}`;
                    else if (typeof t.title?.markdown == "string") {
                        const o = `${t.title.markdown} \u2022 ${s.tooltip}`;
                        t.title = {
                            markdown: o,
                            markdownNotSupportedFallback: o
                        };
                    }
                }
                s.strikethrough && (t.strikethrough = !0), this.options.fileDecorations.colors && t.extraClasses.push(s.labelClassName), this.options.fileDecorations.badges && (t.extraClasses.push(s.badgeClassName), t.extraClasses.push(s.iconClassName));
            }
        }
        this.label.range && (t.suffix = this.label.range.startLineNumber !== this.label.range.endLineNumber ? `:${this.label.range.startLineNumber}-${this.label.range.endLineNumber}` : `:${this.label.range.startLineNumber}`);
        const i = Array.isArray(this.label.name) ? [
            ...this.label.name
        ] : this.label.name ?? "", r = {
            label: i,
            description: this.label.description,
            title: M5h(t.title),
            descriptionTitle: M5h(t.descriptionTitle),
            suffix: t.suffix,
            extraClasses: [
                ...t.extraClasses
            ],
            bold: t.bold,
            italic: t.italic,
            strikethrough: t.strikethrough,
            supportIcons: t.supportIcons,
            matches: t.matches?.slice(0),
            descriptionMatches: t.descriptionMatches?.slice(0),
            separator: t.separator,
            domId: t.domId,
            disabledCommand: t.disabledCommand,
            labelEscapeNewLines: t.labelEscapeNewLines,
            iconPath: t.iconPath?.toString(),
            iconElement: t.iconElement
        };
        return Id_(this.lastRenderedLabelState, r) ? !1 : (this.setLabel(i, r.description, t), this.lastRenderedLabelState = r, this._onDidRender.fire(), !0);
    }
    dispose() {
        super.dispose(), this.label = void 0, this.options = void 0, this.computedLanguageId = void 0, this.computedIconClasses = void 0, this.computedPathLabel = void 0, this.computedWorkspaceFolderLabel = void 0, this.lastRenderedLabelState = void 0;
    }
}, vir = ie([
    C(2, pc),
    C(3, fc),
    C(4, woe),
    C(5, dc),
    C(6, Xp),
    C(7, Jn),
    C(8, dNn),
    C(9, Yi)
], vir);

}
