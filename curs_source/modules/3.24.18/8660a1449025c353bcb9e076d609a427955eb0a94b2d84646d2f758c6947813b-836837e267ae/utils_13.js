import { Nt, Qe, st } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { El, yo } from "./cancellation.js";
import { K0r, V0r } from "./elementSizeObserver.js";
import { Jc } from "./observable.js";
import { jc } from "./position.js";
import { Qs } from "./range.js";
import { WAe } from "./textLength.js";
import { E } from "./tslib.es6.js";
import { Fyt, bc, mg } from "./ze.js";
var EGo, uTr, CBt, IGo, KGd, YGd, TBt, dTr, XGd;
export { CBt, EGo, IGo, KGd, TBt, XGd, YGd, dTr, uTr };
var __wakaru_bwe_initialized = false;
export function bwe() {
if (__wakaru_bwe_initialized) return;
__wakaru_bwe_initialized = true;
"use strict";
E(), p4(), yo(), Qe(), Jc(), K0r(), jc(), Qs(), WAe(), EGo = class extends st {
    constructor(t, e){
        super(), this._automaticLayout = !1, this.elementSizeObserver = this._register(new V0r(t, e)), this._width = bc(this, this.elementSizeObserver.getWidth()), this._height = bc(this, this.elementSizeObserver.getHeight()), this._register(this.elementSizeObserver.onDidChange((n)=>mg((i)=>{
                this._width.set(this.elementSizeObserver.getWidth(), i), this._height.set(this.elementSizeObserver.getHeight(), i);
            })));
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get automaticLayout() {
        return this._automaticLayout;
    }
    observe(t) {
        this.elementSizeObserver.observe(t);
    }
    setAutomaticLayout(t) {
        this._automaticLayout = t, t ? this.elementSizeObserver.startObserving() : this.elementSizeObserver.stopObserving();
    }
}, uTr = class extends st {
    constructor(t, e, n){
        super(), this._register(new KGd(t, n)), this._register(Fyt(n, {
            height: e.actualHeight,
            top: e.actualTop
        }));
    }
}, CBt = class {
    constructor(t, e){
        this._afterLineNumber = t, this.heightInPx = e, this.domNode = document.createElement("div"), this._actualTop = bc(this, void 0), this._actualHeight = bc(this, void 0), this.actualTop = this._actualTop, this.actualHeight = this._actualHeight, this.showInHiddenAreas = !0, this.onChange = this._afterLineNumber, this.onDomNodeTop = (n)=>{
            this._actualTop.set(n, void 0);
        }, this.onComputedHeight = (n)=>{
            this._actualHeight.set(n, void 0);
        };
    }
    get afterLineNumber() {
        return this._afterLineNumber.get();
    }
}, IGo = class lRb {
    constructor(e, n){
        this._editor = e, this._domElement = n, this._overlayWidgetId = `managedOverlayWidget-${lRb._counter++}`, this._overlayWidget = {
            getId: ()=>this._overlayWidgetId,
            getDomNode: ()=>this._domElement,
            getPosition: ()=>null
        }, this._editor.addOverlayWidget(this._overlayWidget);
    }
    dispose() {
        this._editor.removeOverlayWidget(this._overlayWidget);
    }
}, IGo._counter = 0, KGd = IGo, YGd = class extends El {
    dispose() {
        super.dispose(!0);
    }
}, TBt = class {
    static create(t, e = void 0) {
        return new dTr(t, t, e);
    }
    static createWithDisposable(t, e, n = void 0) {
        const i = new Nt;
        return i.add(e), i.add(t), new dTr(t, i, n);
    }
    static createOfNonDisposable(t, e, n = void 0) {
        return new dTr(t, e, n);
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, dTr = class extends TBt {
    constructor(t, e, n){
        super(), this.object = t, this._disposable = e, this._debugOwner = n, this._refCount = 1, this._isDisposed = !1, this._owners = [], n && this._addOwner(n);
    }
    _addOwner(t) {
        t && this._owners.push(t);
    }
    createNewRef(t) {
        return this._refCount++, t && this._addOwner(t), new XGd(this, t);
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this._decreaseRefCount(this._debugOwner));
    }
    _decreaseRefCount(t) {
        if (this._refCount--, this._refCount === 0 && this._disposable.dispose(), t) {
            const e = this._owners.indexOf(t);
            e !== -1 && this._owners.splice(e, 1);
        }
    }
}, XGd = class extends TBt {
    constructor(t, e){
        super(), this._base = t, this._debugOwner = e, this._isDisposed = !1;
    }
    get object() {
        return this._base.object;
    }
    createNewRef(t) {
        return this._base.createNewRef(t);
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this._base._decreaseRefCount(this._debugOwner));
    }
};

}
