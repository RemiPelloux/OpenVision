import { He, Se, we } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { Ar, Eo } from "./cancellation.js";
import { f5c, ies } from "./elementSizeObserver.js";
import { qa } from "./observable.js";
import { ya } from "./position.js";
import { Uh, Xo, sKe } from "./qIc.js";
import { qi } from "./range.js";
import { $ge } from "./textLength.js";
import { x } from "./tslib.es6.js";
var kns, Bbi, imt, wns, y8c, S8c, rmt, Ubi, k8c;
export { Bbi, S8c, Ubi, imt, k8c, kns, rmt, wns, y8c };
var __wakaru_Dle_initialized = false;
export function Dle() {
if (__wakaru_Dle_initialized) return;
__wakaru_Dle_initialized = true;
"use strict";
x(), FT(), Ar(), Se(), qa(), f5c(), ya(), qi(), $ge(), kns = class extends we {
    constructor(e, t){
        super(), this._automaticLayout = !1, this.elementSizeObserver = this._register(new ies(e, t)), this._width = Xo(this, this.elementSizeObserver.getWidth()), this._height = Xo(this, this.elementSizeObserver.getHeight()), this._register(this.elementSizeObserver.onDidChange((n)=>Uh((i)=>{
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
    observe(e) {
        this.elementSizeObserver.observe(e);
    }
    setAutomaticLayout(e) {
        this._automaticLayout = e, e ? this.elementSizeObserver.startObserving() : this.elementSizeObserver.stopObserving();
    }
}, Bbi = class extends we {
    constructor(e, t, n){
        super(), this._register(new y8c(e, n)), this._register(sKe(n, {
            height: t.actualHeight,
            top: t.actualTop
        }));
    }
}, imt = class {
    constructor(e, t){
        this._afterLineNumber = e, this.heightInPx = t, this.domNode = document.createElement("div"), this._actualTop = Xo(this, void 0), this._actualHeight = Xo(this, void 0), this.actualTop = this._actualTop, this.actualHeight = this._actualHeight, this.showInHiddenAreas = !0, this.onChange = this._afterLineNumber, this.onDomNodeTop = (n)=>{
            this._actualTop.set(n, void 0);
        }, this.onComputedHeight = (n)=>{
            this._actualHeight.set(n, void 0);
        };
    }
    get afterLineNumber() {
        return this._afterLineNumber.get();
    }
}, wns = class Fkm {
    constructor(t, n){
        this._editor = t, this._domElement = n, this._overlayWidgetId = `managedOverlayWidget-${Fkm._counter++}`, this._overlayWidget = {
            getId: ()=>this._overlayWidgetId,
            getDomNode: ()=>this._domElement,
            getPosition: ()=>null
        }, this._editor.addOverlayWidget(this._overlayWidget);
    }
    dispose() {
        this._editor.removeOverlayWidget(this._overlayWidget);
    }
}, wns._counter = 0, y8c = wns, S8c = class extends Eo {
    dispose() {
        super.dispose(!0);
    }
}, rmt = class {
    static create(e, t = void 0) {
        return new Ubi(e, e, t);
    }
    static createWithDisposable(e, t, n = void 0) {
        const i = new He;
        return i.add(t), i.add(e), new Ubi(e, i, n);
    }
    static createOfNonDisposable(e, t, n = void 0) {
        return new Ubi(e, t, n);
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, Ubi = class extends rmt {
    constructor(e, t, n){
        super(), this.object = e, this._disposable = t, this._debugOwner = n, this._refCount = 1, this._isDisposed = !1, this._owners = [], n && this._addOwner(n);
    }
    _addOwner(e) {
        e && this._owners.push(e);
    }
    createNewRef(e) {
        return this._refCount++, e && this._addOwner(e), new k8c(this, e);
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this._decreaseRefCount(this._debugOwner));
    }
    _decreaseRefCount(e) {
        if (this._refCount--, this._refCount === 0 && this._disposable.dispose(), e) {
            const t = this._owners.indexOf(e);
            t !== -1 && this._owners.splice(t, 1);
        }
    }
}, k8c = class extends rmt {
    constructor(e, t){
        super(), this._base = e, this._debugOwner = t, this._isDisposed = !1;
    }
    get object() {
        return this._base.object;
    }
    createNewRef(e) {
        return this._base.createNewRef(e);
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this._base._decreaseRefCount(this._debugOwner));
    }
};

}
