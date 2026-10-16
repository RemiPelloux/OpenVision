import { Ct, He, S, Se, V9, bt, tl, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { Tc, en } from "./dom_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { LLe, T0t } from "./editorWithViewState.js";
import { Wh, jd, rKc, xc } from "./editor_2.js";
import { tbe, uTe } from "./editor_4.js";
import { Ze, _t } from "./instantiation.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { Fd, Umn, Ve, Wbn, xp } from "./qIc.js";
import { Ac, Li } from "./resources.js";
import { Tk, d8 } from "./sideBySideEditorInput.js";
import { Xl_ } from "./sidebysideeditor.css";
import { X7, ZV, fR } from "./splitview.js";
import { Vn, yn } from "./storage_2.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { $r, as } from "./themeService.js";
import { Ry, j3h, q3h } from "./theme_2.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
function Gu_(e) {
    const t = e;
    return typeof t?.primary == "object" && typeof t.secondary == "object";
}
var J5, IBh;
export { Gu_, IBh, J5 };
var __wakaru_f5n_initialized = false;
export function f5n() {
if (__wakaru_f5n_initialized) return;
__wakaru_f5n_initialized = true;
"use strict";
x(), Xl_(), rt(), en(), rr(), xc(), d8(), Ze(), as(), Nc(), X7(), bt(), Vn(), gr(), Cn(), uTe(), Se(), Ry(), T0t(), M_(), Ni(), Li(), Qt(), J5 = class extends LLe {
    constructor(e, t, n, i, r, s, o, a){
        super(J5.ID, e, J5.VIEW_STATE_PREFERENCE_KEY, t, i, s, n, o, a), this.configurationService = r, this.onDidCreateEditors = this._register(new ve), this._onDidChangeSizeConstraints = this._register(new V9), this.onDidChangeSizeConstraints = Ct.any(this.onDidCreateEditors.event, this._onDidChangeSizeConstraints.event), this._onDidChangeSelection = this._register(new ve), this.onDidChangeSelection = this._onDidChangeSelection.event, this.primaryEditorPane = void 0, this.secondaryEditorPane = void 0, this.splitviewDisposables = this._register(new He), this.editorDisposables = this._register(new He), this.dimension = new Tc(0, 0), this.lastFocusedSide = void 0, this.orientation = this.configurationService.getValue(J5.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? xp.VERTICAL : xp.HORIZONTAL, this.registerListeners();
    }
    get minimumPrimaryWidth() {
        return this.primaryEditorPane ? this.primaryEditorPane.minimumWidth : 0;
    }
    get maximumPrimaryWidth() {
        return this.primaryEditorPane ? this.primaryEditorPane.maximumWidth : Number.POSITIVE_INFINITY;
    }
    get minimumPrimaryHeight() {
        return this.primaryEditorPane ? this.primaryEditorPane.minimumHeight : 0;
    }
    get maximumPrimaryHeight() {
        return this.primaryEditorPane ? this.primaryEditorPane.maximumHeight : Number.POSITIVE_INFINITY;
    }
    get minimumSecondaryWidth() {
        return this.secondaryEditorPane ? this.secondaryEditorPane.minimumWidth : 0;
    }
    get maximumSecondaryWidth() {
        return this.secondaryEditorPane ? this.secondaryEditorPane.maximumWidth : Number.POSITIVE_INFINITY;
    }
    get minimumSecondaryHeight() {
        return this.secondaryEditorPane ? this.secondaryEditorPane.minimumHeight : 0;
    }
    get maximumSecondaryHeight() {
        return this.secondaryEditorPane ? this.secondaryEditorPane.maximumHeight : Number.POSITIVE_INFINITY;
    }
    set minimumWidth(e) {}
    set maximumWidth(e) {}
    set minimumHeight(e) {}
    set maximumHeight(e) {}
    get minimumWidth() {
        return this.minimumPrimaryWidth + this.minimumSecondaryWidth;
    }
    get maximumWidth() {
        return this.maximumPrimaryWidth + this.maximumSecondaryWidth;
    }
    get minimumHeight() {
        return this.minimumPrimaryHeight + this.minimumSecondaryHeight;
    }
    get maximumHeight() {
        return this.maximumPrimaryHeight + this.maximumSecondaryHeight;
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>this.onConfigurationUpdated(e)));
    }
    onConfigurationUpdated(e) {
        e.affectsConfiguration(J5.SIDE_BY_SIDE_LAYOUT_SETTING) && (this.orientation = this.configurationService.getValue(J5.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? xp.VERTICAL : xp.HORIZONTAL, this.splitview && this.recreateSplitview());
    }
    recreateSplitview() {
        const e = tl(this.getContainer()), t = this.getSplitViewRatio();
        this.splitview && (this.splitview.el.remove(), this.splitviewDisposables.clear()), this.createSplitView(e, t), this.layout(this.dimension);
    }
    getSplitViewRatio() {
        let e;
        if (this.splitview) {
            const t = this.splitview.getViewSize(0), n = this.splitview.getViewSize(1);
            if (Math.abs(t - n) > 1) {
                const i = this.splitview.orientation === xp.HORIZONTAL ? this.dimension.width : this.dimension.height;
                e = t / i;
            }
        }
        return e;
    }
    createEditor(e) {
        e.classList.add("side-by-side-editor"), this.secondaryEditorContainer = Ve(".side-by-side-editor-container.editor-instance"), this.primaryEditorContainer = Ve(".side-by-side-editor-container.editor-instance"), this.createSplitView(e);
    }
    createSplitView(e, t) {
        this.splitview = this.splitviewDisposables.add(new ZV(e, {
            orientation: this.orientation
        })), this.splitviewDisposables.add(this.splitview.onDidSashReset(()=>this.splitview?.distributeViewSizes())), this.orientation === xp.HORIZONTAL ? this.splitview.orthogonalEndSash = this._boundarySashes?.bottom : (this.splitview.orthogonalStartSash = this._boundarySashes?.left, this.splitview.orthogonalEndSash = this._boundarySashes?.right);
        let n = fR.Distribute, i = fR.Distribute;
        if (t) {
            const o = this.splitview.orientation === xp.HORIZONTAL ? this.dimension.width : this.dimension.height;
            n = Math.round(o * t), i = o - n, this.splitview.layout(this.orientation === xp.HORIZONTAL ? this.dimension.width : this.dimension.height);
        }
        const r = tl(this.secondaryEditorContainer);
        this.splitview.addView({
            element: r,
            layout: (o)=>this.layoutPane(this.secondaryEditorPane, o),
            minimumSize: this.orientation === xp.HORIZONTAL ? tbe.width : tbe.height,
            maximumSize: Number.POSITIVE_INFINITY,
            onDidChange: Ct.None
        }, n);
        const s = tl(this.primaryEditorContainer);
        this.splitview.addView({
            element: s,
            layout: (o)=>this.layoutPane(this.primaryEditorPane, o),
            minimumSize: this.orientation === xp.HORIZONTAL ? tbe.width : tbe.height,
            maximumSize: Number.POSITIVE_INFINITY,
            onDidChange: Ct.None
        }, i), this.updateStyles();
    }
    getTitle() {
        return this.input ? this.input.getName() : S(3782, null);
    }
    async setInput(e, t, n, i) {
        const r = this.input;
        await super.setInput(e, t, n, i), (!r || !e.matches(r)) && (r && this.disposeEditors(), this.createEditors(e));
        const { primary: s, secondary: o, viewState: a } = this.loadViewState(e, t, n);
        if (this.lastFocusedSide = a?.focus, typeof a?.ratio == "number" && this.splitview) {
            const c = this.splitview.orientation === xp.HORIZONTAL ? this.dimension.width : this.dimension.height;
            this.splitview.resizeView(0, Math.round(c * a.ratio));
        } else this.splitview?.distributeViewSizes();
        await Promise.all([
            this.secondaryEditorPane?.setInput(e.secondary, o, n, i),
            this.primaryEditorPane?.setInput(e.primary, s, n, i)
        ]), typeof t?.target == "number" && (this.lastFocusedSide = t.target);
    }
    loadViewState(e, t, n) {
        const i = Gu_(t?.viewState) ? t?.viewState : this.loadEditorViewState(e, n);
        let r = Object.create(null), s;
        return t?.target === jd.SECONDARY ? s = {
            ...t
        } : r = {
            ...t
        }, r.viewState = i?.primary, i?.secondary && (s ? s.viewState = i?.secondary : s = {
            viewState: i.secondary
        }), {
            primary: r,
            secondary: s,
            viewState: i
        };
    }
    createEditors(e) {
        this.secondaryEditorPane = this.doCreateEditor(e.secondary, tl(this.secondaryEditorContainer)), this.primaryEditorPane = this.doCreateEditor(e.primary, tl(this.primaryEditorContainer)), this.layout(this.dimension), this._onDidChangeSizeConstraints.input = Ct.any(Ct.map(this.secondaryEditorPane.onDidChangeSizeConstraints, ()=>{}), Ct.map(this.primaryEditorPane.onDidChangeSizeConstraints, ()=>{})), this.onDidCreateEditors.fire(void 0), this.editorDisposables.add(this.primaryEditorPane.onDidFocus(()=>this.onDidFocusChange(jd.PRIMARY))), this.editorDisposables.add(this.secondaryEditorPane.onDidFocus(()=>this.onDidFocusChange(jd.SECONDARY)));
    }
    doCreateEditor(e, t) {
        const n = kn.as(Wh.EditorPane).getEditorPane(e);
        if (!n) throw new Error("No editor pane descriptor for editor found");
        const i = n.instantiate(this.instantiationService, this.group);
        return i.create(t), i.setVisible(this.isVisible()), Wbn(i) && this.editorDisposables.add(i.onDidChangeSelection((r)=>this._onDidChangeSelection.fire(r))), this.editorDisposables.add(i), i;
    }
    onDidFocusChange(e) {
        this.lastFocusedSide = e, this._onDidChangeControl.fire();
    }
    getSelection() {
        const e = this.getLastFocusedEditorPane();
        if (Wbn(e)) {
            const t = e.getSelection();
            if (t) return new IBh(t, e === this.primaryEditorPane ? jd.PRIMARY : jd.SECONDARY);
        }
    }
    setOptions(e) {
        super.setOptions(e), typeof e?.target == "number" && (this.lastFocusedSide = e.target), this.getLastFocusedEditorPane()?.setOptions(e);
    }
    setEditorVisible(e) {
        this.primaryEditorPane?.setVisible(e), this.secondaryEditorPane?.setVisible(e), super.setEditorVisible(e);
    }
    clearInput() {
        super.clearInput(), this.primaryEditorPane?.clearInput(), this.secondaryEditorPane?.clearInput(), this.disposeEditors();
    }
    focus() {
        super.focus(), this.getLastFocusedEditorPane()?.focus();
    }
    getLastFocusedEditorPane() {
        return this.lastFocusedSide === jd.SECONDARY ? this.secondaryEditorPane : this.primaryEditorPane;
    }
    layout(e) {
        this.dimension = e, tl(this.splitview).layout(this.orientation === xp.HORIZONTAL ? e.width : e.height);
    }
    setBoundarySashes(e) {
        this._boundarySashes = e, this.splitview && (this.splitview.orthogonalEndSash = e.bottom);
    }
    layoutPane(e, t) {
        e?.layout(this.orientation === xp.HORIZONTAL ? new Tc(t, this.dimension.height) : new Tc(this.dimension.width, t));
    }
    getControl() {
        return this.getLastFocusedEditorPane()?.getControl();
    }
    getPrimaryEditorPane() {
        return this.primaryEditorPane;
    }
    getSecondaryEditorPane() {
        return this.secondaryEditorPane;
    }
    tracksEditorViewState(e) {
        return e instanceof Tk;
    }
    computeEditorViewState(e) {
        if (!this.input || !Ac(e, this.toEditorViewStateResource(this.input))) return;
        const t = this.primaryEditorPane?.getViewState(), n = this.secondaryEditorPane?.getViewState();
        if (!(!t || !n)) return {
            primary: t,
            secondary: n,
            focus: this.lastFocusedSide,
            ratio: this.getSplitViewRatio()
        };
    }
    toEditorViewStateResource(e) {
        let t, n;
        if (e instanceof Tk && (t = e.primary.resource, n = e.secondary.resource), !(!n || !t)) return Ee.from({
            scheme: "sideBySide",
            path: `${Umn(n.toString())}${Umn(t.toString())}`
        });
    }
    updateStyles() {
        super.updateStyles(), this.primaryEditorContainer && (this.orientation === xp.HORIZONTAL ? (this.primaryEditorContainer.style.borderLeftWidth = "1px", this.primaryEditorContainer.style.borderLeftStyle = "solid", this.primaryEditorContainer.style.borderLeftColor = this.getColor(q3h) ?? "", this.primaryEditorContainer.style.borderTopWidth = "0") : (this.primaryEditorContainer.style.borderTopWidth = "1px", this.primaryEditorContainer.style.borderTopStyle = "solid", this.primaryEditorContainer.style.borderTopColor = this.getColor(j3h) ?? "", this.primaryEditorContainer.style.borderLeftWidth = "0"));
    }
    dispose() {
        this.disposeEditors(), super.dispose();
    }
    disposeEditors() {
        this.editorDisposables.clear(), this.secondaryEditorPane = void 0, this.primaryEditorPane = void 0, this.lastFocusedSide = void 0, this.secondaryEditorContainer && Fd(this.secondaryEditorContainer), this.primaryEditorContainer && Fd(this.primaryEditorContainer);
    }
}, J5.ID = rKc, J5.SIDE_BY_SIDE_LAYOUT_SETTING = "workbench.editor.splitInGroupLayout", J5.VIEW_STATE_PREFERENCE_KEY = "sideBySideEditorViewState", J5 = ie([
    C(1, _t),
    C(2, $r),
    C(3, yn),
    C(4, qt),
    C(5, $v),
    C(6, hn),
    C(7, gs)
], J5), IBh = class OCm {
    constructor(t, n){
        this.selection = t, this.side = n;
    }
    compare(t) {
        return !(t instanceof OCm) || this.side !== t.side ? 3 : this.selection.compare(t.selection);
    }
    restore(t) {
        const n = {
            ...t,
            target: this.side
        };
        return this.selection.restore(n);
    }
};

}
