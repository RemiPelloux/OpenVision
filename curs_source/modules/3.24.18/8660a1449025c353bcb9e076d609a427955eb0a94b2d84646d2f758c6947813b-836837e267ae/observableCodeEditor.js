import { Nt, Pn, Qe, st } from "./Iwo.js";
import { Jd } from "./autorun.js";
import { Jc } from "./observable.js";
import { Im, W3 } from "./offsetRange.js";
import { avn, s_e } from "./point.js";
import { er, jc } from "./position.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
import { Yv } from "./utils_10.js";
import { Ebt, Ikr, NAe, Pj, Tbt, Zo, _7o, _9t, b7, bc, nwe, wbt } from "./ze.js";
var JGo, Wqd;
export { JGo, Wqd };
var __wakaru_FQ_initialized = false;
export function FQ() {
if (__wakaru_FQ_initialized) return;
__wakaru_FQ_initialized = true;
"use strict";
E(), Pj(), Qe(), Jc(), W3(), jc(), Cy(), avn(), JGo = class t$n extends st {
    constructor(e){
        super(), this.editor = e, this._updateCounter = 0, this._currentTransaction = void 0, this._model = bc(this, this.editor.getModel()), this.model = this._model, this.isReadonly = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(96)), this._versionId = Tbt({
            owner: this,
            lazy: !0
        }, this.editor.getModel()?.getVersionId() ?? null), this.versionId = this._versionId, this._selections = Tbt({
            owner: this,
            equalsFn: wbt(Ikr(bu.selectionsEqual)),
            lazy: !0
        }, this.editor.getSelections() ?? null), this.selections = this._selections, this.positions = b7({
            owner: this,
            equalsFn: wbt(Ikr(er.equals))
        }, (n)=>this.selections.read(n)?.map((i)=>i.getStartPosition()) ?? null), this.isFocused = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, (n)=>{
            const i = this.editor.onDidFocusEditorWidget(n), r = this.editor.onDidBlurEditorWidget(n);
            return {
                dispose () {
                    i.dispose(), r.dispose();
                }
            };
        }, ()=>this.editor.hasWidgetFocus()), this.isTextFocused = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, (n)=>{
            const i = this.editor.onDidFocusEditorText(n), r = this.editor.onDidBlurEditorText(n);
            return {
                dispose () {
                    i.dispose(), r.dispose();
                }
            };
        }, ()=>this.editor.hasTextFocus()), this.inComposition = NAe({
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
        }, ()=>this.editor.inComposition), this.value = _7o(this, (n)=>(this.versionId.read(n), this.model.read(n)?.getValue() ?? ""), (n, i)=>{
            const r = this.model.get();
            r !== null && n !== r.getValue() && r.setValue(n);
        }), this.valueIsEmpty = Zo(this, (n)=>(this.versionId.read(n), this.editor.getModel()?.getValueLength() === 0)), this.cursorSelection = b7({
            owner: this,
            equalsFn: wbt(bu.selectionsEqual)
        }, (n)=>this.selections.read(n)?.[0] ?? null), this.cursorPosition = b7({
            owner: this,
            equalsFn: er.equals
        }, (n)=>this.selections.read(n)?.[0]?.getPosition() ?? null), this.cursorLineNumber = Zo(this, (n)=>this.cursorPosition.read(n)?.lineNumber ?? null), this.onDidType = nwe(this), this.onDidPaste = nwe(this), this.scrollTop = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidScrollChange, ()=>this.editor.getScrollTop()), this.scrollLeft = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidScrollChange, ()=>this.editor.getScrollLeft()), this.layoutInfo = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidLayoutChange, ()=>this.editor.getLayoutInfo()), this.layoutInfoContentLeft = this.layoutInfo.map((n)=>n.contentLeft), this.layoutInfoDecorationsLeft = this.layoutInfo.map((n)=>n.decorationsLeft), this.layoutInfoWidth = this.layoutInfo.map((n)=>n.width), this.layoutInfoMinimap = this.layoutInfo.map((n)=>n.minimap), this.layoutInfoVerticalScrollbarWidth = this.layoutInfo.map((n)=>n.verticalScrollbarWidth), this.contentWidth = NAe({
            owner: this,
            getTransaction: ()=>this._currentTransaction
        }, this.editor.onDidContentSizeChange, ()=>this.editor.getContentWidth()), this._widgetCounter = 0, this.openedPeekWidgets = bc(this, 0), this._register(this.editor.onBeginUpdate(()=>this._beginUpdate())), this._register(this.editor.onEndUpdate(()=>this._endUpdate())), this._register(this.editor.onDidChangeModel(()=>{
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
    static get(e) {
        let n = t$n._map.get(e);
        if (!n) {
            n = new t$n(e), t$n._map.set(e, n);
            const i = e.onDidDispose(()=>{
                const r = t$n._map.get(e);
                r && (t$n._map.delete(e), r.dispose(), i.dispose());
            });
        }
        return n;
    }
    _beginUpdate() {
        this._updateCounter++, this._updateCounter === 1 && (this._currentTransaction = new _9t(()=>{}));
    }
    _endUpdate() {
        if (this._updateCounter--, this._updateCounter === 0) {
            const e = this._currentTransaction;
            this._currentTransaction = void 0, e.finish();
        }
    }
    transaction(e) {
        this._beginUpdate();
        try {
            return e(this._currentTransaction);
        } finally{
            this._endUpdate();
        }
    }
    forceUpdate(e) {
        this._beginUpdate();
        try {
            return this._forceUpdate(), e ? e(this._currentTransaction) : void 0;
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
    getOption(e) {
        return Yv(this, (n)=>this.editor.onDidChangeConfiguration((i)=>{
                i.hasChanged(e) && n(void 0);
            }), ()=>this.editor.getOption(e));
    }
    setDecorations(e) {
        const n = new Nt, i = this.editor.createDecorationsCollection();
        return n.add(Ebt({
            owner: this,
            debugName: ()=>`Apply decorations from ${e.debugName}`
        }, (r)=>{
            const s = e.read(r);
            i.set(s);
        })), n.add({
            dispose: ()=>{
                i.clear();
            }
        }), n;
    }
    createOverlayWidget(e) {
        const n = "observableOverlayWidget" + this._widgetCounter++, i = {
            getDomNode: ()=>e.domNode,
            getPosition: ()=>e.position.get(),
            getId: ()=>n,
            allowEditorOverflow: e.allowEditorOverflow,
            getMinContentWidthInPx: ()=>e.minContentWidthInPx.get()
        };
        this.editor.addOverlayWidget(i);
        const r = Jd((s)=>{
            e.position.read(s), e.minContentWidthInPx.read(s), this.editor.layoutOverlayWidget(i);
        });
        return Pn(()=>{
            r.dispose(), this.editor.removeOverlayWidget(i);
        });
    }
    createContentWidget(e) {
        const n = "observableContentWidget" + this._widgetCounter++, i = {
            getDomNode: ()=>e.domNode,
            getPosition: ()=>e.position.get(),
            getId: ()=>n,
            allowEditorOverflow: e.allowEditorOverflow
        };
        this.editor.addContentWidget(i);
        const r = Jd((s)=>{
            e.position.read(s), this.editor.layoutContentWidget(i);
        });
        return Pn(()=>{
            r.dispose(), this.editor.removeContentWidget(i);
        });
    }
    observeLineOffsetRange(e, n) {
        const i = this.observePosition(e.map((s)=>new er(s.startLineNumber, 1)), n), r = this.observePosition(e.map((s)=>new er(s.endLineNumberExclusive + 1, 1)), n);
        return Zo((s)=>{
            i.read(s), r.read(s);
            const o = e.read(s), a = this.model.read(s)?.getLineCount(), l = (typeof a < "u" && o.startLineNumber > a ? this.editor.getBottomForLineNumber(a) : this.editor.getTopForLineNumber(o.startLineNumber)) - this.scrollTop.read(s), c = o.isEmpty ? l : this.editor.getBottomForLineNumber(o.endLineNumberExclusive - 1) - this.scrollTop.read(s);
            return new Im(l, c);
        });
    }
    observePosition(e, n) {
        let i = e.get();
        const r = Tbt({
            owner: this,
            debugName: ()=>`topLeftOfPosition${i?.toString()}`,
            equalsFn: wbt(s_e.equals)
        }, new s_e(0, 0)), s = "observablePositionWidget" + this._widgetCounter++, o = document.createElement("div"), a = {
            getDomNode: ()=>o,
            getPosition: ()=>i ? {
                    preference: [
                        0
                    ],
                    position: e.get()
                } : null,
            getId: ()=>s,
            allowEditorOverflow: !1,
            afterRender: (l, c)=>{
                const u = this._model.get();
                u && i && i.lineNumber > u.getLineCount() ? r.set(new s_e(0, this.editor.getBottomForLineNumber(u.getLineCount()) - this.scrollTop.get()), void 0) : r.set(c ? new s_e(c.left, c.top) : null, void 0);
            }
        };
        return this.editor.addContentWidget(a), n.add(Jd((l)=>{
            i = e.read(l), this.editor.layoutContentWidget(a);
        })), n.add(Pn(()=>{
            this.editor.removeContentWidget(a);
        })), r;
    }
    isTargetHovered(e, n) {
        const i = bc("isInjectedTextHovered", !1);
        return n.add(this.editor.onMouseMove((r)=>{
            const s = e(r);
            i.set(s, void 0);
        })), n.add(this.editor.onMouseLeave((r)=>{
            i.set(!1, void 0);
        })), i;
    }
}, JGo._map = new Map, Wqd = JGo;

}
