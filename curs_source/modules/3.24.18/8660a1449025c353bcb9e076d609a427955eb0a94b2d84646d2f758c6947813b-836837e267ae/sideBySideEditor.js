import { D, Gt, Md, Nt, Qe, eY, en, tt } from "./Iwo.js";
import { cai } from "./LYd.js";
import { UPk } from "./Ycg.js";
import { or, yi } from "./configuration.js";
import { Hn, nd } from "./dom_2.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { iKt, mVe } from "./editorWithViewState.js";
import { Nm, Zv, hXd, od } from "./editor_2.js";
import { hMe, m9e } from "./editor_4.js";
import { It, dn } from "./instantiation.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { Lr, gu } from "./resources.js";
import { bV, dC } from "./sideBySideEditorInput.js";
import { B2k } from "./sidebysideeditor.css";
import { A7, dRe, uRe } from "./splitview.js";
import { Zi, ki } from "./storage_2.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Dl, Ml } from "./themeService.js";
import { I2, kAg, wAg } from "./theme_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, P_, Pii, uy } from "./ze.js";
var I$, eRg;
export { I$, eRg };
var __wakaru_bAi_initialized = false;
export function bAi() {
if (__wakaru_bAi_initialized) return;
__wakaru_bAi_initialized = true;
"use strict";
E(), B2k(), Bt(), Hn(), Eo(), od(), bV(), It(), Dl(), Ld(), dRe(), Gt(), Zi(), To(), or(), m9e(), Qe(), I2(), iKt(), FC(), Wo(), Lr(), fn(), I$ = class extends mVe {
    constructor(t, e, n, i, r, s, o, a){
        super(I$.ID, t, I$.VIEW_STATE_PREFERENCE_KEY, e, i, s, n, o, a), this.configurationService = r, this.onDidCreateEditors = this._register(new tt), this._onDidChangeSizeConstraints = this._register(new eY), this.onDidChangeSizeConstraints = en.any(this.onDidCreateEditors.event, this._onDidChangeSizeConstraints.event), this._onDidChangeSelection = this._register(new tt), this.onDidChangeSelection = this._onDidChangeSelection.event, this.primaryEditorPane = void 0, this.secondaryEditorPane = void 0, this.splitviewDisposables = this._register(new Nt), this.editorDisposables = this._register(new Nt), this.dimension = new nd(0, 0), this.lastFocusedSide = void 0, this.orientation = this.configurationService.getValue(I$.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? P_.VERTICAL : P_.HORIZONTAL, this.registerListeners();
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
    set minimumWidth(t) {}
    set maximumWidth(t) {}
    set minimumHeight(t) {}
    set maximumHeight(t) {}
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
        this._register(this.configurationService.onDidChangeConfiguration((t)=>this.onConfigurationUpdated(t)));
    }
    onConfigurationUpdated(t) {
        t.affectsConfiguration(I$.SIDE_BY_SIDE_LAYOUT_SETTING) && (this.orientation = this.configurationService.getValue(I$.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? P_.VERTICAL : P_.HORIZONTAL, this.splitview && this.recreateSplitview());
    }
    recreateSplitview() {
        const t = Md(this.getContainer()), e = this.getSplitViewRatio();
        this.splitview && (this.splitview.el.remove(), this.splitviewDisposables.clear()), this.createSplitView(t, e), this.layout(this.dimension);
    }
    getSplitViewRatio() {
        let t;
        if (this.splitview) {
            const e = this.splitview.getViewSize(0), n = this.splitview.getViewSize(1);
            if (Math.abs(e - n) > 1) {
                const i = this.splitview.orientation === P_.HORIZONTAL ? this.dimension.width : this.dimension.height;
                t = e / i;
            }
        }
        return t;
    }
    createEditor(t) {
        t.classList.add("side-by-side-editor"), this.secondaryEditorContainer = Ii(".side-by-side-editor-container.editor-instance"), this.primaryEditorContainer = Ii(".side-by-side-editor-container.editor-instance"), this.createSplitView(t);
    }
    createSplitView(t, e) {
        this.splitview = this.splitviewDisposables.add(new uRe(t, {
            orientation: this.orientation
        })), this.splitviewDisposables.add(this.splitview.onDidSashReset(()=>this.splitview?.distributeViewSizes())), this.orientation === P_.HORIZONTAL ? this.splitview.orthogonalEndSash = this._boundarySashes?.bottom : (this.splitview.orthogonalStartSash = this._boundarySashes?.left, this.splitview.orthogonalEndSash = this._boundarySashes?.right);
        let n = A7.Distribute, i = A7.Distribute;
        if (e) {
            const o = this.splitview.orientation === P_.HORIZONTAL ? this.dimension.width : this.dimension.height;
            n = Math.round(o * e), i = o - n, this.splitview.layout(this.orientation === P_.HORIZONTAL ? this.dimension.width : this.dimension.height);
        }
        const r = Md(this.secondaryEditorContainer);
        this.splitview.addView({
            element: r,
            layout: (o)=>this.layoutPane(this.secondaryEditorPane, o),
            minimumSize: this.orientation === P_.HORIZONTAL ? hMe.width : hMe.height,
            maximumSize: Number.POSITIVE_INFINITY,
            onDidChange: en.None
        }, n);
        const s = Md(this.primaryEditorContainer);
        this.splitview.addView({
            element: s,
            layout: (o)=>this.layoutPane(this.primaryEditorPane, o),
            minimumSize: this.orientation === P_.HORIZONTAL ? hMe.width : hMe.height,
            maximumSize: Number.POSITIVE_INFINITY,
            onDidChange: en.None
        }, i), this.updateStyles();
    }
    getTitle() {
        return this.input ? this.input.getName() : D(3782, null);
    }
    async setInput(t, e, n, i) {
        const r = this.input;
        await super.setInput(t, e, n, i), (!r || !t.matches(r)) && (r && this.disposeEditors(), this.createEditors(t));
        const { primary: s, secondary: o, viewState: a } = this.loadViewState(t, e, n);
        if (this.lastFocusedSide = a?.focus, typeof a?.ratio == "number" && this.splitview) {
            const l = this.splitview.orientation === P_.HORIZONTAL ? this.dimension.width : this.dimension.height;
            this.splitview.resizeView(0, Math.round(l * a.ratio));
        } else this.splitview?.distributeViewSizes();
        await Promise.all([
            this.secondaryEditorPane?.setInput(t.secondary, o, n, i),
            this.primaryEditorPane?.setInput(t.primary, s, n, i)
        ]), typeof e?.target == "number" && (this.lastFocusedSide = e.target);
    }
    loadViewState(t, e, n) {
        const i = UPk(e?.viewState) ? e?.viewState : this.loadEditorViewState(t, n);
        let r = Object.create(null), s;
        return e?.target === Nm.SECONDARY ? s = {
            ...e
        } : r = {
            ...e
        }, r.viewState = i?.primary, i?.secondary && (s ? s.viewState = i?.secondary : s = {
            viewState: i.secondary
        }), {
            primary: r,
            secondary: s,
            viewState: i
        };
    }
    createEditors(t) {
        this.secondaryEditorPane = this.doCreateEditor(t.secondary, Md(this.secondaryEditorContainer)), this.primaryEditorPane = this.doCreateEditor(t.primary, Md(this.primaryEditorContainer)), this.layout(this.dimension), this._onDidChangeSizeConstraints.input = en.any(en.map(this.secondaryEditorPane.onDidChangeSizeConstraints, ()=>{}), en.map(this.primaryEditorPane.onDidChangeSizeConstraints, ()=>{})), this.onDidCreateEditors.fire(void 0), this.editorDisposables.add(this.primaryEditorPane.onDidFocus(()=>this.onDidFocusChange(Nm.PRIMARY))), this.editorDisposables.add(this.secondaryEditorPane.onDidFocus(()=>this.onDidFocusChange(Nm.SECONDARY)));
    }
    doCreateEditor(t, e) {
        const n = Fi.as(Zv.EditorPane).getEditorPane(t);
        if (!n) throw new Error("No editor pane descriptor for editor found");
        const i = n.instantiate(this.instantiationService, this.group);
        return i.create(e), i.setVisible(this.isVisible()), cai(i) && this.editorDisposables.add(i.onDidChangeSelection((r)=>this._onDidChangeSelection.fire(r))), this.editorDisposables.add(i), i;
    }
    onDidFocusChange(t) {
        this.lastFocusedSide = t, this._onDidChangeControl.fire();
    }
    getSelection() {
        const t = this.getLastFocusedEditorPane();
        if (cai(t)) {
            const e = t.getSelection();
            if (e) return new eRg(e, t === this.primaryEditorPane ? Nm.PRIMARY : Nm.SECONDARY);
        }
    }
    setOptions(t) {
        super.setOptions(t), typeof t?.target == "number" && (this.lastFocusedSide = t.target), this.getLastFocusedEditorPane()?.setOptions(t);
    }
    setEditorVisible(t) {
        this.primaryEditorPane?.setVisible(t), this.secondaryEditorPane?.setVisible(t), super.setEditorVisible(t);
    }
    clearInput() {
        super.clearInput(), this.primaryEditorPane?.clearInput(), this.secondaryEditorPane?.clearInput(), this.disposeEditors();
    }
    focus() {
        super.focus(), this.getLastFocusedEditorPane()?.focus();
    }
    getLastFocusedEditorPane() {
        return this.lastFocusedSide === Nm.SECONDARY ? this.secondaryEditorPane : this.primaryEditorPane;
    }
    layout(t) {
        this.dimension = t, Md(this.splitview).layout(this.orientation === P_.HORIZONTAL ? t.width : t.height);
    }
    setBoundarySashes(t) {
        this._boundarySashes = t, this.splitview && (this.splitview.orthogonalEndSash = t.bottom);
    }
    layoutPane(t, e) {
        t?.layout(this.orientation === P_.HORIZONTAL ? new nd(e, this.dimension.height) : new nd(this.dimension.width, e));
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
    tracksEditorViewState(t) {
        return t instanceof dC;
    }
    computeEditorViewState(t) {
        if (!this.input || !gu(t, this.toEditorViewStateResource(this.input))) return;
        const e = this.primaryEditorPane?.getViewState(), n = this.secondaryEditorPane?.getViewState();
        if (!(!e || !n)) return {
            primary: e,
            secondary: n,
            focus: this.lastFocusedSide,
            ratio: this.getSplitViewRatio()
        };
    }
    toEditorViewStateResource(t) {
        let e, n;
        if (t instanceof dC && (e = t.primary.resource, n = t.secondary.resource), !(!n || !e)) return rt.from({
            scheme: "sideBySide",
            path: `${Pii(n.toString())}${Pii(e.toString())}`
        });
    }
    updateStyles() {
        super.updateStyles(), this.primaryEditorContainer && (this.orientation === P_.HORIZONTAL ? (this.primaryEditorContainer.style.borderLeftWidth = "1px", this.primaryEditorContainer.style.borderLeftStyle = "solid", this.primaryEditorContainer.style.borderLeftColor = this.getColor(wAg) ?? "", this.primaryEditorContainer.style.borderTopWidth = "0") : (this.primaryEditorContainer.style.borderTopWidth = "1px", this.primaryEditorContainer.style.borderTopStyle = "solid", this.primaryEditorContainer.style.borderTopColor = this.getColor(kAg) ?? "", this.primaryEditorContainer.style.borderLeftWidth = "0"));
    }
    dispose() {
        this.disposeEditors(), super.dispose();
    }
    disposeEditors() {
        this.editorDisposables.clear(), this.secondaryEditorPane = void 0, this.primaryEditorPane = void 0, this.lastFocusedSide = void 0, this.secondaryEditorContainer && uy(this.secondaryEditorContainer), this.primaryEditorContainer && uy(this.primaryEditorContainer);
    }
}, I$.ID = hXd, I$.SIDE_BY_SIDE_LAYOUT_SETTING = "workbench.editor.splitInGroupLayout", I$.VIEW_STATE_PREFERENCE_KEY = "sideBySideEditorViewState", I$ = Re([
    F(1, dn),
    F(2, Ml),
    F(3, ki),
    F(4, yi),
    F(5, Mw),
    F(6, gr),
    F(7, _a)
], I$), eRg = class CPb {
    constructor(e, n){
        this.selection = e, this.side = n;
    }
    compare(e) {
        return !(e instanceof CPb) || this.side !== e.side ? 3 : this.selection.compare(e.selection);
    }
    restore(e) {
        const n = {
            ...e,
            target: this.side
        };
        return this.selection.restore(n);
    }
};

}
