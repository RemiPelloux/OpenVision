import { Ct, He, Lo, S, Se, bt, ve } from "./HVr.js";
import { Vo, er } from "./actions.js";
import { C, ie } from "./actions_2.js";
import { Ar, Ji } from "./cancellation.js";
import { Pe, _i } from "./codicons.js";
import { Ci, Sm } from "./color.js";
import { Hh, Xy } from "./composer.js";
import { $8t, eg } from "./constants_18.js";
import { jK, yD } from "./dnd.js";
import { Tc, en, zp } from "./dom_2.js";
import { Y7, r6 } from "./embeddedCodeEditorWidget.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { dc, yu } from "./label.js";
import { fU, km } from "./listService.js";
import { $T, Sy } from "./modesRegistry.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { ko } from "./opener.js";
import { $Wc } from "./outlineEntries.js";
import { Ere, xre } from "./outlineModel.js";
import { Hwe, QFt, SKe, bKe, hRe, lU, s_n, yKe } from "./peekView.js";
import { Ep, Lki, Ve, Xrs, Ye, m5, qK, tf, xp } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Tmt, gRe, xKe } from "./referencesModel.js";
import { Emt, FWc, Hkg, Krs, OWc, UWc, aSi, cSi } from "./referencesTree.js";
import { Fkg } from "./referencesWidget.css";
import { Nl, bc } from "./resolverService.js";
import { Li, mM, ml } from "./resources.js";
import { X7, ZV, fR } from "./splitview.js";
import { Mv, Vd, yM } from "./textModel.js";
import { Ft, Sr } from "./themables.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { b1 } from "./utils_16.js";
var L$s, Aku, Rku, Dku, A9i, R9i;
export { A9i, Aku, Dku, L$s, R9i, Rku };
var __wakaru_ucv_initialized = false;
export function ucv() {
if (__wakaru_ucv_initialized) return;
__wakaru_ucv_initialized = true;
"use strict";
x(), en(), qK(), X7(), Sm(), bt(), Pr(), Se(), li(), Li(), Fkg(), Y7(), qi(), Mv(), $T(), Nl(), Hkg(), lU(), rt(), Ze(), no(), yu(), km(), as(), xKe(), jK(), ko(), xre(), Ar(), $Wc(), Vo(), Sr(), _i(), Xy(), b1(), eg(), L$s = class Kwm {
    constructor(t, n){
        this._editor = t, this._model = n, this._decorations = new Map, this._decorationIgnoreSet = new Set, this._callOnDispose = new He, this._callOnModelChange = new He, this._callOnDispose.add(this._editor.onDidChangeModel(()=>this._onModelChanged())), this._onModelChanged();
    }
    dispose() {
        this._callOnModelChange.dispose(), this._callOnDispose.dispose(), this.removeDecorations();
    }
    _onModelChanged() {
        this._callOnModelChange.clear();
        const t = this._editor.getModel();
        if (t) {
            for (const n of this._model.references)if (n.uri.toString() === t.uri.toString()) {
                this._addDecorations(n.parent);
                return;
            }
        }
    }
    _addDecorations(t) {
        if (!this._editor.hasModel()) return;
        this._callOnModelChange.add(this._editor.getModel().onDidChangeDecorations(()=>this._onDecorationChanged()));
        const n = [], i = [];
        for(let r = 0, s = t.children.length; r < s; r++){
            const o = t.children[r];
            this._decorationIgnoreSet.has(o.id) || o.uri.toString() === this._editor.getModel().uri.toString() && (n.push({
                range: o.range,
                options: Kwm.DecorationOptions
            }), i.push(r));
        }
        this._editor.changeDecorations((r)=>{
            const s = r.deltaDecorations([], n);
            for(let o = 0; o < s.length; o++)this._decorations.set(s[o], t.children[i[o]]);
        });
    }
    _onDecorationChanged() {
        const t = [], n = this._editor.getModel();
        if (n) {
            for (const [i, r] of this._decorations){
                const s = n.getDecorationRange(i);
                if (!s) continue;
                let o = !1;
                if (!dt.equalsRange(s, r.range)) {
                    if (dt.spansMultipleLines(s)) o = !0;
                    else {
                        const a = r.range.endColumn - r.range.startColumn, c = s.endColumn - s.startColumn;
                        a !== c && (o = !0);
                    }
                    o ? (this._decorationIgnoreSet.add(r.id), t.push(i)) : r.range = s;
                }
            }
            for(let i = 0, r = t.length; i < r; i++)this._decorations.delete(t[i]);
            this._editor.removeDecorations(t);
        }
    }
    removeDecorations() {
        this._editor.removeDecorations([
            ...this._decorations.keys()
        ]), this._decorations.clear();
    }
}, L$s.DecorationOptions = Vd.register({
    description: "reference-decoration",
    stickiness: 1,
    className: "reference-decoration"
}), Aku = L$s, Rku = class {
    constructor(){
        this.ratio = .7, this.heightInLines = 18;
    }
    static fromJSON(e) {
        let t, n;
        try {
            const i = JSON.parse(e);
            t = i.ratio, n = i.heightInLines;
        } catch  {}
        return {
            ratio: t || .7,
            heightInLines: n || 18
        };
    }
}, Dku = class extends fU {
}, A9i = class {
    constructor(e){
        this.labelService = e, this.disposables = new He;
    }
    getDragURI(e) {
        return e instanceof Tmt ? e.uri.toString() : e instanceof gRe ? m5(e.uri, e.range).toString() : null;
    }
    getDragLabel(e) {
        return e.length === 0 ? void 0 : e.map((n)=>this.labelService.getUriBasenameLabel(n.uri)).join(", ");
    }
    onDragStart(e, t) {
        if (!t.dataTransfer) return;
        const i = e.elements.map((r)=>this.getDragURI(r)).filter(Boolean);
        i.length && (t.dataTransfer.setData(yD.RESOURCES, JSON.stringify(i)), t.dataTransfer.setData(yD.TEXT, i.join(`
`)));
    }
    onDragOver() {
        return !1;
    }
    drop() {}
    dispose() {
        this.disposables.dispose();
    }
}, A9i = ie([
    C(0, dc)
], A9i), R9i = class extends hRe {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h){
        super(e, {
            showFrame: !1,
            showArrow: !0,
            isResizeable: !0,
            isAccessible: !0,
            supportOnTitleClick: !0
        }, s), this._defaultTreeKeyboardSupport = t, this.layoutData = n, this._textModelResolverService = r, this._instantiationService = s, this._peekViewService = o, this._uriLabel = a, this._keybindingService = c, this._outlineModelService = l, this.composerService = u, this._textModelService = h, this._disposeOnNewModel = new He, this._callOnDispose = new He, this._onDidSelectReference = new ve, this.onDidSelectReference = this._onDidSelectReference.event, this._dim = new Tc(0, 0), this._isClosing = !1, this._applyTheme(i.getColorTheme()), this._callOnDispose.add(i.onDidColorThemeChange(this._applyTheme.bind(this))), this._peekViewService.addExclusiveWidget(e, this), this.create();
    }
    get isClosing() {
        return this._isClosing;
    }
    dispose() {
        this._isClosing = !0, this.setModel(void 0), this._callOnDispose.dispose(), this._disposeOnNewModel.dispose(), Lo(this._preview), Lo(this._previewNotAvailableMessage), Lo(this._tree), Lo(this._previewModelReference), this._splitView.dispose(), super.dispose();
    }
    _applyTheme(e) {
        const t = e.getColor(Hwe) || Ci.transparent;
        this.style({
            arrowColor: t,
            frameColor: t,
            headerBackgroundColor: e.getColor(bKe) || Ci.transparent,
            primaryHeadingColor: e.getColor(yKe),
            secondaryHeadingColor: e.getColor(SKe)
        });
    }
    show(e) {
        super.show(e, this.layoutData.heightInLines || 18);
    }
    focusOnReferenceTree() {
        this._tree.domFocus();
    }
    focusOnPreviewEditor() {
        this._preview.focus();
    }
    isPreviewEditorFocused() {
        return this._preview.hasTextFocus();
    }
    getPreviewEditor() {
        return this._preview;
    }
    _onTitleClick(e) {
        this._preview && this._preview.getModel() && this._onDidSelectReference.fire({
            element: this._getFocusedReference(),
            kind: e.ctrlKey || e.metaKey || e.altKey ? "side" : "open",
            source: "title"
        });
    }
    _fillHead(e, t) {
        if (super._fillHead(e, t), !this._actionbarWidget) return;
        const n = new er("peekview.composer", S(1222, null), `peekview-composer-button ${Ft.asClassName(Pe.symbolMethod)}`, !0, ()=>{
            this._openReferencesInComposer();
        });
        this._disposables.add(n), this._actionbarWidget.push(n, {
            label: !1,
            icon: !0,
            index: 0
        });
    }
    async _openReferencesInComposer() {
        if (!this._model) return;
        const e = [];
        for (const n of this._model.groups){
            const i = n.uri;
            for (const r of n.children){
                let s;
                s = await Lki(this._textModelService, i, new dt({
                    startLineNumber: r.range.startLineNumber - $8t,
                    startColumn: 1,
                    endLineNumber: r.range.endLineNumber + $8t + 1,
                    endColumn: 1
                })), s && e.push(s);
            }
        }
        const t = await this.composerService.createComposer({});
        t && e.length > 0 && this.composerService.addCodeSelectionsWithInlineMentionsBatch(t.composerId, e, "editor"), this.dispose();
    }
    _fillBody(e) {
        this.setCssClass("reference-zone-widget"), this._messageContainer = Ye(e, Ve("div.messages")), Ep(this._messageContainer), this._splitView = new ZV(e, {
            orientation: xp.HORIZONTAL
        }), this._previewContainer = Ye(e, Ve("div.preview.inline"));
        const t = {
            scrollBeyondLastLine: !1,
            scrollbar: {
                verticalScrollbarSize: 14,
                horizontal: "auto",
                useShadows: !0,
                verticalHasArrows: !1,
                horizontalHasArrows: !1,
                alwaysConsumeMouseWheel: !0
            },
            overviewRulerLanes: 2,
            fixedOverflowWidgets: !0,
            minimap: {
                enabled: !1
            }
        };
        this._preview = this._instantiationService.createInstance(r6, this._previewContainer, t, {}, this.editor), Ep(this._previewContainer), this._previewNotAvailableMessage = this._instantiationService.createInstance(yM, S(1223, null), Sy, yM.DEFAULT_CREATION_OPTIONS, null, !1, !1), this._treeContainer = Ye(e, Ve("div.ref-tree.inline"));
        const n = {
            keyboardSupport: this._defaultTreeKeyboardSupport,
            accessibilityProvider: new UWc,
            keyboardNavigationLabelProvider: this._instantiationService.createInstance(cSi),
            identityProvider: new FWc,
            openOnSingleClick: !0,
            selectionNavigation: !0,
            overrideStyles: {
                listBackground: s_n
            },
            dnd: this._instantiationService.createInstance(A9i)
        };
        this._defaultTreeKeyboardSupport && this._callOnDispose.add(zp(this._treeContainer, "keydown", (r)=>{
            r.equals(fe.Escape) && (this._keybindingService.dispatchEvent(r, r.target), r.stopPropagation());
        }, !0)), this._tree = this._instantiationService.createInstance(Dku, "ReferencesWidget", this._treeContainer, new OWc, [
            this._instantiationService.createInstance(Emt),
            this._instantiationService.createInstance(Krs)
        ], this._instantiationService.createInstance(aSi), n), this._splitView.addView({
            onDidChange: Ct.None,
            element: this._previewContainer,
            minimumSize: 200,
            maximumSize: Number.MAX_VALUE,
            layout: (r)=>{
                this._preview.layout({
                    height: this._dim.height,
                    width: r
                });
            }
        }, fR.Distribute), this._splitView.addView({
            onDidChange: Ct.None,
            element: this._treeContainer,
            minimumSize: 100,
            maximumSize: Number.MAX_VALUE,
            layout: (r)=>{
                this._treeContainer.style.height = `${this._dim.height}px`, this._treeContainer.style.width = `${r}px`, this._tree.layout(this._dim.height, r);
            }
        }, fR.Distribute), this._disposables.add(this._splitView.onDidSashChange(()=>{
            this._dim.width && (this.layoutData.ratio = this._splitView.getViewSize(0) / this._dim.width);
        }, void 0));
        const i = (r, s)=>{
            r instanceof gRe && (s === "show" && this._revealReference(r, !1), this._onDidSelectReference.fire({
                element: r,
                kind: s,
                source: "tree"
            }));
        };
        this._disposables.add(this._tree.onDidOpen((r)=>{
            r.sideBySide ? i(r.element, "side") : r.editorOptions.pinned ? i(r.element, "goto") : i(r.element, "show");
        })), Ep(this._treeContainer);
    }
    _onWidth(e) {
        this._dim && this._doLayoutBody(this._dim.height, e);
    }
    _doLayoutBody(e, t) {
        super._doLayoutBody(e, t), this._dim = new Tc(t, e), this.layoutData.heightInLines = this._viewZone ? this._viewZone.heightInLines : this.layoutData.heightInLines, this._splitView.layout(t), this._splitView.resizeView(0, t * this.layoutData.ratio);
    }
    setSelection(e) {
        return this._revealReference(e, !0).then(()=>{
            this._model && (this._tree.setSelection([
                e
            ]), this._tree.setFocus([
                e
            ]));
        });
    }
    setModel(e) {
        return this._disposeOnNewModel.clear(), this._model = e, this._model ? this._onNewModel() : Promise.resolve();
    }
    _onNewModel() {
        return this._model ? this._model.isEmpty ? (this.setTitle(""), this._messageContainer.innerText = S(1224, null), tf(this._messageContainer), Promise.resolve(void 0)) : (Ep(this._messageContainer), this._decorationsManager = new Aku(this._preview, this._model), this._disposeOnNewModel.add(this._decorationsManager), this._disposeOnNewModel.add(this._model.onDidChangeReferenceRange((e)=>this._tree.rerender(e))), this._disposeOnNewModel.add(this._preview.onMouseDown((e)=>{
            const { event: t, target: n } = e;
            if (t.detail !== 2) return;
            const i = this._getFocusedReference();
            i && this._onDidSelectReference.fire({
                element: {
                    uri: i.uri,
                    range: n.range
                },
                kind: t.ctrlKey || t.metaKey || t.altKey ? "side" : "open",
                source: "editor"
            });
        })), this.container.classList.add("results-loaded"), tf(this._treeContainer), tf(this._previewContainer), this._splitView.layout(this._dim.width), this.focusOnReferenceTree(), this._tree.setInput(this._model.groups.length === 1 ? this._model.groups[0] : this._model)) : Promise.resolve(void 0);
    }
    _getFocusedReference() {
        const [e] = this._tree.getFocus();
        if (e instanceof gRe) return e;
        if (e instanceof Tmt && e.children.length > 0) return e.children[0];
    }
    async revealReference(e) {
        await this._revealReference(e, !1), this._onDidSelectReference.fire({
            element: e,
            kind: "goto",
            source: "tree"
        });
    }
    async _revealReference(e, t) {
        if (this._revealedReference === e) return;
        if (this._revealedReference = e, e.uri.scheme !== gt.inMemory) {
            const s = await this._textModelResolverService.createModelReference(e.uri);
            try {
                const o = s.object.textEditorModel, a = await this._outlineModelService.getOrCreate(o, Ji.None), l = Xrs(a.getTopLevelSymbols(), 7).reduce((u, h)=>(h.kind === 11 || h.kind === 5 || h.kind === 4) && (u === null || h.level > u.level) && dt.lift(h.range).containsRange(dt.lift(e.range)) ? h : u, null);
                this.setTitle(mM(e.uri), this._uriLabel.getUriLabel(ml(e.uri)) + (l !== null ? " > " + l.name : ""));
            } finally{
                s.dispose();
            }
        } else this.setTitle(S(1225, null));
        const n = this._textModelResolverService.createModelReference(e.uri);
        this._tree.getInput() === e.parent ? this._tree.reveal(e) : (t && this._tree.reveal(e.parent), await this._tree.expand(e.parent), this._tree.reveal(e));
        const i = await n;
        if (!this._model) {
            i.dispose();
            return;
        }
        Lo(this._previewModelReference);
        const r = i.object;
        if (r) {
            const s = this._preview.getModel() === r.textEditorModel ? 0 : 1, o = dt.lift(e.range).collapseToStart();
            this._previewModelReference = i, this._preview.setModel(r.textEditorModel), this._preview.setSelection(o), this._preview.revealRangeInCenter(o, s);
        } else this._preview.setModel(this._previewNotAvailableMessage), i.dispose();
    }
}, R9i = ie([
    C(3, $r),
    C(4, bc),
    C(5, _t),
    C(6, QFt),
    C(7, dc),
    C(8, qr),
    C(9, Ere),
    C(10, Hh),
    C(11, bc)
], R9i);

}
