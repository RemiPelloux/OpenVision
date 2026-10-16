import { D, Gt, Nc, Nt, Qe, en, tt } from "./Iwo.js";
import { jVo } from "./LYd.js";
import { vu, za } from "./actions.js";
import { Xs, yo } from "./cancellation.js";
import { gs, yt } from "./codicons.js";
import { _b, ls } from "./color.js";
import { Yh, vS } from "./composer.js";
import { Ef, hDa } from "./constants_18.js";
import { fwe, r6 } from "./dnd.js";
import { Hn, n0, nd } from "./dom_2.js";
import { l_e, xwe } from "./embeddedCodeEditorWidget.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { Yp, qg } from "./label.js";
import { PHe, d2 } from "./listService.js";
import { iR, y4 } from "./modesRegistry.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { qc } from "./opener.js";
import { w5y } from "./outlineEntries.js";
import { Rwe, p_e } from "./outlineModel.js";
import { $Bt, Avn, Goi, HBt, NEr, c_e, gnt, jBt } from "./peekView.js";
import { Qs, qt } from "./range.js";
import { MHe, ZBt, iSt } from "./referencesModel.js";
import { DYd, IVo, PYd, QBt, RYd, aIr, k5y, oIr } from "./referencesTree.js";
import { _5y } from "./referencesWidget.css";
import { Em, Rh } from "./resolverService.js";
import { Lr, Mc, l7 } from "./resources.js";
import { A7, dRe, uRe } from "./splitview.js";
import { Kg, PC, sB } from "./textModel.js";
import { Gn, ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { oT } from "./utils_16.js";
import { AS, Ii, NYd, P_, R0, fr, kwe, lne } from "./ze.js";
var qDa, SPp, kPp, wPp, XHr, ZHr;
export { SPp, XHr, ZHr, kPp, qDa, wPp };
var __wakaru_PI1_initialized = false;
export function PI1() {
if (__wakaru_PI1_initialized) return;
__wakaru_PI1_initialized = true;
"use strict";
E(), Hn(), kwe(), dRe(), _b(), Gt(), Ma(), Qe(), Ki(), Lr(), _5y(), xwe(), Qs(), PC(), y4(), Em(), k5y(), c_e(), Bt(), It(), ru(), qg(), d2(), Dl(), iSt(), fwe(), qc(), p_e(), yo(), w5y(), vu(), ta(), gs(), vS(), oT(), Ef(), qDa = class R2b {
    constructor(e, n){
        this._editor = e, this._model = n, this._decorations = new Map, this._decorationIgnoreSet = new Set, this._callOnDispose = new Nt, this._callOnModelChange = new Nt, this._callOnDispose.add(this._editor.onDidChangeModel(()=>this._onModelChanged())), this._onModelChanged();
    }
    dispose() {
        this._callOnModelChange.dispose(), this._callOnDispose.dispose(), this.removeDecorations();
    }
    _onModelChanged() {
        this._callOnModelChange.clear();
        const e = this._editor.getModel();
        if (e) {
            for (const n of this._model.references)if (n.uri.toString() === e.uri.toString()) {
                this._addDecorations(n.parent);
                return;
            }
        }
    }
    _addDecorations(e) {
        if (!this._editor.hasModel()) return;
        this._callOnModelChange.add(this._editor.getModel().onDidChangeDecorations(()=>this._onDecorationChanged()));
        const n = [], i = [];
        for(let r = 0, s = e.children.length; r < s; r++){
            const o = e.children[r];
            this._decorationIgnoreSet.has(o.id) || o.uri.toString() === this._editor.getModel().uri.toString() && (n.push({
                range: o.range,
                options: R2b.DecorationOptions
            }), i.push(r));
        }
        this._editor.changeDecorations((r)=>{
            const s = r.deltaDecorations([], n);
            for(let o = 0; o < s.length; o++)this._decorations.set(s[o], e.children[i[o]]);
        });
    }
    _onDecorationChanged() {
        const e = [], n = this._editor.getModel();
        if (n) {
            for (const [i, r] of this._decorations){
                const s = n.getDecorationRange(i);
                if (!s) continue;
                let o = !1;
                if (!qt.equalsRange(s, r.range)) {
                    if (qt.spansMultipleLines(s)) o = !0;
                    else {
                        const a = r.range.endColumn - r.range.startColumn, l = s.endColumn - s.startColumn;
                        a !== l && (o = !0);
                    }
                    o ? (this._decorationIgnoreSet.add(r.id), e.push(i)) : r.range = s;
                }
            }
            for(let i = 0, r = e.length; i < r; i++)this._decorations.delete(e[i]);
            this._editor.removeDecorations(e);
        }
    }
    removeDecorations() {
        this._editor.removeDecorations([
            ...this._decorations.keys()
        ]), this._decorations.clear();
    }
}, qDa.DecorationOptions = Kg.register({
    description: "reference-decoration",
    stickiness: 1,
    className: "reference-decoration"
}), SPp = qDa, kPp = class {
    constructor(){
        this.ratio = .7, this.heightInLines = 18;
    }
    static fromJSON(t) {
        let e, n;
        try {
            const i = JSON.parse(t);
            e = i.ratio, n = i.heightInLines;
        } catch  {}
        return {
            ratio: e || .7,
            heightInLines: n || 18
        };
    }
}, wPp = class extends PHe {
}, XHr = class {
    constructor(t){
        this.labelService = t, this.disposables = new Nt;
    }
    getDragURI(t) {
        return t instanceof ZBt ? t.uri.toString() : t instanceof MHe ? lne(t.uri, t.range).toString() : null;
    }
    getDragLabel(t) {
        return t.length === 0 ? void 0 : t.map((n)=>this.labelService.getUriBasenameLabel(n.uri)).join(", ");
    }
    onDragStart(t, e) {
        if (!e.dataTransfer) return;
        const i = t.elements.map((r)=>this.getDragURI(r)).filter(Boolean);
        i.length && (e.dataTransfer.setData(r6.RESOURCES, JSON.stringify(i)), e.dataTransfer.setData(r6.TEXT, i.join(`
`)));
    }
    onDragOver() {
        return !1;
    }
    drop() {}
    dispose() {
        this.disposables.dispose();
    }
}, XHr = Re([
    F(0, Yp)
], XHr), ZHr = class extends gnt {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(t, {
            showFrame: !1,
            showArrow: !0,
            isResizeable: !0,
            isAccessible: !0,
            supportOnTitleClick: !0
        }, s), this._defaultTreeKeyboardSupport = e, this.layoutData = n, this._textModelResolverService = r, this._instantiationService = s, this._peekViewService = o, this._uriLabel = a, this._keybindingService = l, this._outlineModelService = c, this.composerService = u, this._textModelService = d, this._disposeOnNewModel = new Nt, this._callOnDispose = new Nt, this._onDidSelectReference = new tt, this.onDidSelectReference = this._onDidSelectReference.event, this._dim = new nd(0, 0), this._isClosing = !1, this._applyTheme(i.getColorTheme()), this._callOnDispose.add(i.onDidColorThemeChange(this._applyTheme.bind(this))), this._peekViewService.addExclusiveWidget(t, this), this.create();
    }
    get isClosing() {
        return this._isClosing;
    }
    dispose() {
        this._isClosing = !0, this.setModel(void 0), this._callOnDispose.dispose(), this._disposeOnNewModel.dispose(), Nc(this._preview), Nc(this._previewNotAvailableMessage), Nc(this._tree), Nc(this._previewModelReference), this._splitView.dispose(), super.dispose();
    }
    _applyTheme(t) {
        const e = t.getColor(Avn) || ls.transparent;
        this.style({
            arrowColor: e,
            frameColor: e,
            headerBackgroundColor: t.getColor(jBt) || ls.transparent,
            primaryHeadingColor: t.getColor($Bt),
            secondaryHeadingColor: t.getColor(HBt)
        });
    }
    show(t) {
        super.show(t, this.layoutData.heightInLines || 18);
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
    _onTitleClick(t) {
        this._preview && this._preview.getModel() && this._onDidSelectReference.fire({
            element: this._getFocusedReference(),
            kind: t.ctrlKey || t.metaKey || t.altKey ? "side" : "open",
            source: "title"
        });
    }
    _fillHead(t, e) {
        if (super._fillHead(t, e), !this._actionbarWidget) return;
        const n = new za("peekview.composer", D(1222, null), `peekview-composer-button ${Gn.asClassName(yt.symbolMethod)}`, !0, ()=>{
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
        const t = [];
        for (const n of this._model.groups){
            const i = n.uri;
            for (const r of n.children){
                let s;
                s = await jVo(this._textModelService, i, new qt({
                    startLineNumber: r.range.startLineNumber - hDa,
                    startColumn: 1,
                    endLineNumber: r.range.endLineNumber + hDa + 1,
                    endColumn: 1
                })), s && t.push(s);
            }
        }
        const e = await this.composerService.createComposer({});
        e && t.length > 0 && this.composerService.addCodeSelectionsWithInlineMentionsBatch(e.composerId, t, "editor"), this.dispose();
    }
    _fillBody(t) {
        this.setCssClass("reference-zone-widget"), this._messageContainer = fr(t, Ii("div.messages")), AS(this._messageContainer), this._splitView = new uRe(t, {
            orientation: P_.HORIZONTAL
        }), this._previewContainer = fr(t, Ii("div.preview.inline"));
        const e = {
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
        this._preview = this._instantiationService.createInstance(l_e, this._previewContainer, e, {}, this.editor), AS(this._previewContainer), this._previewNotAvailableMessage = this._instantiationService.createInstance(sB, D(1223, null), iR, sB.DEFAULT_CREATION_OPTIONS, null, !1, !1), this._treeContainer = fr(t, Ii("div.ref-tree.inline"));
        const n = {
            keyboardSupport: this._defaultTreeKeyboardSupport,
            accessibilityProvider: new DYd,
            keyboardNavigationLabelProvider: this._instantiationService.createInstance(aIr),
            identityProvider: new PYd,
            openOnSingleClick: !0,
            selectionNavigation: !0,
            overrideStyles: {
                listBackground: NEr
            },
            dnd: this._instantiationService.createInstance(XHr)
        };
        this._defaultTreeKeyboardSupport && this._callOnDispose.add(n0(this._treeContainer, "keydown", (r)=>{
            r.equals(Ze.Escape) && (this._keybindingService.dispatchEvent(r, r.target), r.stopPropagation());
        }, !0)), this._tree = this._instantiationService.createInstance(wPp, "ReferencesWidget", this._treeContainer, new RYd, [
            this._instantiationService.createInstance(QBt),
            this._instantiationService.createInstance(IVo)
        ], this._instantiationService.createInstance(oIr), n), this._splitView.addView({
            onDidChange: en.None,
            element: this._previewContainer,
            minimumSize: 200,
            maximumSize: Number.MAX_VALUE,
            layout: (r)=>{
                this._preview.layout({
                    height: this._dim.height,
                    width: r
                });
            }
        }, A7.Distribute), this._splitView.addView({
            onDidChange: en.None,
            element: this._treeContainer,
            minimumSize: 100,
            maximumSize: Number.MAX_VALUE,
            layout: (r)=>{
                this._treeContainer.style.height = `${this._dim.height}px`, this._treeContainer.style.width = `${r}px`, this._tree.layout(this._dim.height, r);
            }
        }, A7.Distribute), this._disposables.add(this._splitView.onDidSashChange(()=>{
            this._dim.width && (this.layoutData.ratio = this._splitView.getViewSize(0) / this._dim.width);
        }, void 0));
        const i = (r, s)=>{
            r instanceof MHe && (s === "show" && this._revealReference(r, !1), this._onDidSelectReference.fire({
                element: r,
                kind: s,
                source: "tree"
            }));
        };
        this._disposables.add(this._tree.onDidOpen((r)=>{
            r.sideBySide ? i(r.element, "side") : r.editorOptions.pinned ? i(r.element, "goto") : i(r.element, "show");
        })), AS(this._treeContainer);
    }
    _onWidth(t) {
        this._dim && this._doLayoutBody(this._dim.height, t);
    }
    _doLayoutBody(t, e) {
        super._doLayoutBody(t, e), this._dim = new nd(e, t), this.layoutData.heightInLines = this._viewZone ? this._viewZone.heightInLines : this.layoutData.heightInLines, this._splitView.layout(e), this._splitView.resizeView(0, e * this.layoutData.ratio);
    }
    setSelection(t) {
        return this._revealReference(t, !0).then(()=>{
            this._model && (this._tree.setSelection([
                t
            ]), this._tree.setFocus([
                t
            ]));
        });
    }
    setModel(t) {
        return this._disposeOnNewModel.clear(), this._model = t, this._model ? this._onNewModel() : Promise.resolve();
    }
    _onNewModel() {
        return this._model ? this._model.isEmpty ? (this.setTitle(""), this._messageContainer.innerText = D(1224, null), R0(this._messageContainer), Promise.resolve(void 0)) : (AS(this._messageContainer), this._decorationsManager = new SPp(this._preview, this._model), this._disposeOnNewModel.add(this._decorationsManager), this._disposeOnNewModel.add(this._model.onDidChangeReferenceRange((t)=>this._tree.rerender(t))), this._disposeOnNewModel.add(this._preview.onMouseDown((t)=>{
            const { event: e, target: n } = t;
            if (e.detail !== 2) return;
            const i = this._getFocusedReference();
            i && this._onDidSelectReference.fire({
                element: {
                    uri: i.uri,
                    range: n.range
                },
                kind: e.ctrlKey || e.metaKey || e.altKey ? "side" : "open",
                source: "editor"
            });
        })), this.container.classList.add("results-loaded"), R0(this._treeContainer), R0(this._previewContainer), this._splitView.layout(this._dim.width), this.focusOnReferenceTree(), this._tree.setInput(this._model.groups.length === 1 ? this._model.groups[0] : this._model)) : Promise.resolve(void 0);
    }
    _getFocusedReference() {
        const [t] = this._tree.getFocus();
        if (t instanceof MHe) return t;
        if (t instanceof ZBt && t.children.length > 0) return t.children[0];
    }
    async revealReference(t) {
        await this._revealReference(t, !1), this._onDidSelectReference.fire({
            element: t,
            kind: "goto",
            source: "tree"
        });
    }
    async _revealReference(t, e) {
        if (this._revealedReference === t) return;
        if (this._revealedReference = t, t.uri.scheme !== Ot.inMemory) {
            const s = await this._textModelResolverService.createModelReference(t.uri);
            try {
                const o = s.object.textEditorModel, a = await this._outlineModelService.getOrCreate(o, Xs.None), c = NYd(a.getTopLevelSymbols(), 7).reduce((u, d)=>(d.kind === 11 || d.kind === 5 || d.kind === 4) && (u === null || d.level > u.level) && qt.lift(d.range).containsRange(qt.lift(t.range)) ? d : u, null);
                this.setTitle(l7(t.uri), this._uriLabel.getUriLabel(Mc(t.uri)) + (c !== null ? " > " + c.name : ""));
            } finally{
                s.dispose();
            }
        } else this.setTitle(D(1225, null));
        const n = this._textModelResolverService.createModelReference(t.uri);
        this._tree.getInput() === t.parent ? this._tree.reveal(t) : (e && this._tree.reveal(t.parent), await this._tree.expand(t.parent), this._tree.reveal(t));
        const i = await n;
        if (!this._model) {
            i.dispose();
            return;
        }
        Nc(this._previewModelReference);
        const r = i.object;
        if (r) {
            const s = this._preview.getModel() === r.textEditorModel ? 0 : 1, o = qt.lift(t.range).collapseToStart();
            this._previewModelReference = i, this._preview.setModel(r.textEditorModel), this._preview.setSelection(o), this._preview.revealRangeInCenter(o, s);
        } else this._preview.setModel(this._previewNotAvailableMessage), i.dispose();
    }
}, ZHr = Re([
    F(3, Ml),
    F(4, Rh),
    F(5, dn),
    F(6, Goi),
    F(7, Yp),
    F(8, Al),
    F(9, Rwe),
    F(10, Yh),
    F(11, Rh)
], ZHr);

}
