import { He, Se, rn, we } from "./HVr.js";
import { Hc } from "./autorun.js";
import { qa } from "./observable.js";
import { Mh, uR } from "./offsetRange.js";
import { NFt, yre } from "./point.js";
import { Yn, ya } from "./position.js";
import { Ds, EK, Ege, Jie, Nht, Tgi, Xo, Yqe, g3, pBe, sYr, zqe } from "./qIc.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
var Kns, g7c;
export { Kns, g7c };
var __wakaru_kW_initialized = false;
export function kW() {
if (__wakaru_kW_initialized) return;
__wakaru_kW_initialized = true;
"use strict";
x(), Jie(), Se(), qa(), uR(), ya(), _f(), NFt(), Kns = class Rin extends we {
    constructor(t){
        super(), this.editor = t, this._updateCounter = 0, this._currentTransaction = void 0, this._model = Xo(this, this.editor.getModel()), this.model = this._model, this.isReadonly = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(96)), this._versionId = Yqe({
            owner: this,
            lazy: !0
        }, this.editor.getModel()?.getVersionId() ?? null), this.versionId = this._versionId, this._selections = Yqe({
            owner: this,
            equalsFn: zqe(Tgi(za.selectionsEqual)),
            lazy: !0
        }, this.editor.getSelections() ?? null), this.selections = this._selections, this.positions = g3({
            owner: this,
            equalsFn: zqe(Tgi(Yn.equals))
        }, (n)=>this.selections.read(n)?.map((i)=>i.getStartPosition()) ?? null), this.isFocused = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, (n)=>{
            const i = this.editor.onDidFocusEditorWidget(n), r = this.editor.onDidBlurEditorWidget(n);
            return {
                dispose () {
                    i.dispose(), r.dispose();
                }
            };
        }, ()=>this.editor.hasWidgetFocus()), this.isTextFocused = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, (n)=>{
            const i = this.editor.onDidFocusEditorText(n), r = this.editor.onDidBlurEditorText(n);
            return {
                dispose () {
                    i.dispose(), r.dispose();
                }
            };
        }, ()=>this.editor.hasTextFocus()), this.inComposition = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, (n)=>{
            const i = this.editor.onDidCompositionStart(()=>{
                n(void 0);
            }), r = this.editor.onDidCompositionEnd(()=>{
                n(void 0);
            });
            return {
                dispose () {
                    i.dispose(), r.dispose();
                }
            };
        }, ()=>this.editor.inComposition), this.value = sYr(this, (n)=>(this.versionId.read(n), this.model.read(n)?.getValue() ?? ""), (n, i)=>{
            const r = this.model.get();
            r !== null && n !== r.getValue() && r.setValue(n);
        }), this.valueIsEmpty = Ds(this, (n)=>(this.versionId.read(n), this.editor.getModel()?.getValueLength() === 0)), this.cursorSelection = g3({
            owner: this,
            equalsFn: zqe(za.selectionsEqual)
        }, (n)=>this.selections.read(n)?.[0] ?? null), this.cursorPosition = g3({
            owner: this,
            equalsFn: Yn.equals
        }, (n)=>this.selections.read(n)?.[0]?.getPosition() ?? null), this.cursorLineNumber = Ds(this, (n)=>this.cursorPosition.read(n)?.lineNumber ?? null), this.onDidType = EK(this), this.onDidPaste = EK(this), this.scrollTop = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidScrollChange, ()=>this.editor.getScrollTop()), this.scrollLeft = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidScrollChange, ()=>this.editor.getScrollLeft()), this.layoutInfo = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidLayoutChange, ()=>this.editor.getLayoutInfo()), this.layoutInfoContentLeft = this.layoutInfo.map((n)=>n.contentLeft), this.layoutInfoDecorationsLeft = this.layoutInfo.map((n)=>n.decorationsLeft), this.layoutInfoWidth = this.layoutInfo.map((n)=>n.width), this.layoutInfoMinimap = this.layoutInfo.map((n)=>n.minimap), this.layoutInfoVerticalScrollbarWidth = this.layoutInfo.map((n)=>n.verticalScrollbarWidth), this.contentWidth = Ege({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidContentSizeChange, ()=>this.editor.getContentWidth()), this._widgetCounter = 0, this.openedPeekWidgets = Xo(this, 0), this._register(this.editor.onBeginUpdate(()=>this._beginUpdate())), this._register(this.editor.onEndUpdate(()=>this._endUpdate())), this._register(this.editor.onDidChangeModel(()=>{
            this._beginUpdate();
            try {
                this._model.set(this.editor.getModel(), this._currentTransaction), this._forceUpdate();
            } finally{
                this._endUpdate();
            }
        })), this._register(this.editor.onDidType((n)=>{
            this._beginUpdate();
            try {
                this._forceUpdate(), this.onDidType.trigger(this._currentTransaction, n);
            } finally{
                this._endUpdate();
            }
        })), this._register(this.editor.onDidPaste((n)=>{
            this._beginUpdate();
            try {
                this._forceUpdate(), this.onDidPaste.trigger(this._currentTransaction, n);
            } finally{
                this._endUpdate();
            }
        })), this._register(this.editor.onDidChangeModelContent((n)=>{
            this._beginUpdate();
            try {
                this._versionId.set(this.editor.getModel()?.getVersionId() ?? null, this._currentTransaction, n), this._forceUpdate();
            } finally{
                this._endUpdate();
            }
        })), this._register(this.editor.onDidChangeCursorSelection((n)=>{
            this._beginUpdate();
            try {
                this._selections.set(this.editor.getSelections(), this._currentTransaction, n), this._forceUpdate();
            } finally{
                this._endUpdate();
            }
        }));
    }
    static get(t) {
        let n = Rin._map.get(t);
        if (!n) {
            n = new Rin(t), Rin._map.set(t, n);
            const i = t.onDidDispose(()=>{
                const r = Rin._map.get(t);
                r && (Rin._map.delete(t), r.dispose(), i.dispose());
            });
        }
        return n;
    }
    _beginUpdate() {
        this._updateCounter++, this._updateCounter === 1 && (this._currentTransaction = new Nht(()=>{}));
    }
    _endUpdate() {
        if (this._updateCounter--, this._updateCounter === 0) {
            const t = this._currentTransaction;
            this._currentTransaction = void 0, t.finish();
        }
    }
    transaction(t) {
        this._beginUpdate();
        try {
            return t(this._currentTransaction);
        } finally{
            this._endUpdate();
        }
    }
    forceUpdate(t) {
        this._beginUpdate();
        try {
            return this._forceUpdate(), t ? t(this._currentTransaction) : void 0;
        } finally{
            this._endUpdate();
        }
    }
    _forceUpdate() {
        this._beginUpdate();
        try {
            this._model.set(this.editor.getModel(), this._currentTransaction), this._versionId.set(this.editor.getModel()?.getVersionId() ?? null, this._currentTransaction, void 0), this._selections.set(this.editor.getSelections(), this._currentTransaction, void 0);
        } finally{
            this._endUpdate();
        }
    }
    getOption(t) {
        return qp(this, (n)=>this.editor.onDidChangeConfiguration((i)=>{
                i.hasChanged(t) && n(void 0);
            }), ()=>this.editor.getOption(t));
    }
    setDecorations(t) {
        const n = new He, i = this.editor.createDecorationsCollection();
        return n.add(pBe({
            owner: this,
            debugName: ()=>`Apply decorations from ${t.debugName}`
        }, (r)=>{
            const s = t.read(r);
            i.set(s);
        })), n.add({
            dispose: ()=>{
                i.clear();
            }
        }), n;
    }
    createOverlayWidget(t) {
        const n = "observableOverlayWidget" + this._widgetCounter++, i = {
            getDomNode: ()=>t.domNode,
            getPosition: ()=>t.position.get(),
            getId: ()=>n,
            allowEditorOverflow: t.allowEditorOverflow,
            getMinContentWidthInPx: ()=>t.minContentWidthInPx.get()
        };
        this.editor.addOverlayWidget(i);
        const r = Hc((s)=>{
            t.position.read(s), t.minContentWidthInPx.read(s), this.editor.layoutOverlayWidget(i);
        });
        return rn(()=>{
            r.dispose(), this.editor.removeOverlayWidget(i);
        });
    }
    createContentWidget(t) {
        const n = "observableContentWidget" + this._widgetCounter++, i = {
            getDomNode: ()=>t.domNode,
            getPosition: ()=>t.position.get(),
            getId: ()=>n,
            allowEditorOverflow: t.allowEditorOverflow
        };
        this.editor.addContentWidget(i);
        const r = Hc((s)=>{
            t.position.read(s), this.editor.layoutContentWidget(i);
        });
        return rn(()=>{
            r.dispose(), this.editor.removeContentWidget(i);
        });
    }
    observeLineOffsetRange(t, n) {
        const i = this.observePosition(t.map((s)=>new Yn(s.startLineNumber, 1)), n), r = this.observePosition(t.map((s)=>new Yn(s.endLineNumberExclusive + 1, 1)), n);
        return Ds((s)=>{
            i.read(s), r.read(s);
            const o = t.read(s), a = this.model.read(s)?.getLineCount(), c = (typeof a < "u" && o.startLineNumber > a ? this.editor.getBottomForLineNumber(a) : this.editor.getTopForLineNumber(o.startLineNumber)) - this.scrollTop.read(s), l = o.isEmpty ? c : this.editor.getBottomForLineNumber(o.endLineNumberExclusive - 1) - this.scrollTop.read(s);
            return new Mh(c, l);
        });
    }
    observePosition(t, n) {
        let i = t.get();
        const r = Yqe({
            owner: this,
            debugName: ()=>`topLeftOfPosition${i?.toString()}`,
            equalsFn: zqe(yre.equals)
        }, new yre(0, 0)), s = "observablePositionWidget" + this._widgetCounter++, o = document.createElement("div"), a = {
            getDomNode: ()=>o,
            getPosition: ()=>i ? {
                    preference: [
                        0
                    ],
                    position: t.get()
                } : null,
            getId: ()=>s,
            allowEditorOverflow: !1,
            afterRender: (c, l)=>{
                const u = this._model.get();
                u && i && i.lineNumber > u.getLineCount() ? r.set(new yre(0, this.editor.getBottomForLineNumber(u.getLineCount()) - this.scrollTop.get()), void 0) : r.set(l ? new yre(l.left, l.top) : null, void 0);
            }
        };
        return this.editor.addContentWidget(a), n.add(Hc((c)=>{
            i = t.read(c), this.editor.layoutContentWidget(a);
        })), n.add(rn(()=>{
            this.editor.removeContentWidget(a);
        })), r;
    }
    isTargetHovered(t, n) {
        const i = Xo("isInjectedTextHovered", !1);
        return n.add(this.editor.onMouseMove((r)=>{
            const s = t(r);
            i.set(s, void 0);
        })), n.add(this.editor.onMouseLeave((r)=>{
            i.set(!1, void 0);
        })), i;
    }
}, Kns._map = new Map, g7c = Kns;

}
