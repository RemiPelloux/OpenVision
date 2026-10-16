import { He, Se, cn, we } from "./HVr.js";
import { ac, bn } from "./async.js";
import { tc } from "./colorRegistry.js";
import { Fn, en, xi, zp } from "./dom_2.js";
import { Upt, VOt } from "./globalPointerMoveMonitor.js";
import { J_, ew } from "./mouseEvent.js";
import { Bmn, Is, Xt, ces, dS, les, nw, pvg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var jfn, ues, D5c, M5c, tRe, P5c, L5c, N5c, des, hes, O5c;
export { D5c, L5c, M5c, N5c, O5c, P5c, des, hes, jfn, tRe, ues };
var __wakaru_jOt_initialized = false;
export function jOt() {
if (__wakaru_jOt_initialized) return;
__wakaru_jOt_initialized = true;
"use strict";
x(), en(), nw(), VOt(), ew(), bn(), Se(), tc(), jfn = class {
    constructor(e, t){
        this.x = e, this.y = t, this._pageCoordinatesBrand = void 0;
    }
    toClientCoordinates(e) {
        return new ues(this.x - e.scrollX, this.y - e.scrollY);
    }
}, ues = class {
    constructor(e, t){
        this.clientX = e, this.clientY = t, this._clientCoordinatesBrand = void 0;
    }
    toPageCoordinates(e) {
        return new jfn(this.clientX + e.scrollX, this.clientY + e.scrollY);
    }
}, D5c = class {
    constructor(e, t, n, i){
        this.x = e, this.y = t, this.width = n, this.height = i, this._editorPagePositionBrand = void 0;
    }
}, M5c = class {
    constructor(e, t){
        this.x = e, this.y = t, this._positionRelativeToEditorBrand = void 0;
    }
}, tRe = class extends J_ {
    constructor(e, t, n){
        super(xi(n), e), this._editorMouseEventBrand = void 0, this.isFromPointerCapture = t, this.pos = new jfn(this.posx, this.posy), this.editorPos = ces(n), this.relativePos = les(n, this.editorPos, this.pos);
    }
}, P5c = class {
    constructor(e){
        this._editorViewDomNode = e;
    }
    _create(e) {
        return new tRe(e, !1, this._editorViewDomNode);
    }
    onContextMenu(e, t) {
        return Xt(e, Fn.CONTEXT_MENU, (n)=>{
            t(this._create(n));
        });
    }
    onMouseUp(e, t) {
        return Xt(e, Fn.MOUSE_UP, (n)=>{
            t(this._create(n));
        });
    }
    onMouseDown(e, t) {
        return Xt(e, Fn.MOUSE_DOWN, (n)=>{
            t(this._create(n));
        });
    }
    onPointerDown(e, t) {
        return Xt(e, Fn.POINTER_DOWN, (n)=>{
            t(this._create(n), n.pointerId);
        });
    }
    onMouseLeave(e, t) {
        return Xt(e, Fn.MOUSE_LEAVE, (n)=>{
            t(this._create(n));
        });
    }
    onMouseMove(e, t) {
        return Xt(e, Fn.MOUSE_MOVE, (n)=>t(this._create(n)));
    }
}, L5c = class {
    constructor(e){
        this._editorViewDomNode = e;
    }
    _create(e) {
        return new tRe(e, !1, this._editorViewDomNode);
    }
    onPointerUp(e, t) {
        return Xt(e, "pointerup", (n)=>{
            t(this._create(n));
        });
    }
    onPointerDown(e, t) {
        return Xt(e, Fn.POINTER_DOWN, (n)=>{
            t(this._create(n), n.pointerId);
        });
    }
    onPointerLeave(e, t) {
        return Xt(e, Fn.POINTER_LEAVE, (n)=>{
            t(this._create(n));
        });
    }
    onPointerMove(e, t) {
        return Xt(e, "pointermove", (n)=>t(this._create(n)));
    }
}, N5c = class extends we {
    constructor(e){
        super(), this._keydownListener = this._register(new cn), this._editorViewDomNode = e, this._globalPointerMoveMonitor = this._register(new Upt);
    }
    startMonitoring(e, t, n, i, r) {
        this._keydownListener.value = zp(e.ownerDocument, "keydown", (s)=>{
            s.toKeyCodeChord().isModifierKey() || this._globalPointerMoveMonitor.stopMonitoring(!0, s.browserEvent);
        }, !0), this._globalPointerMoveMonitor.startMonitoring(e, t, n, (s)=>{
            i(new tRe(s, !0, this._editorViewDomNode));
        }, (s)=>{
            this._keydownListener.clear(), r(s);
        });
    }
    stopMonitoring() {
        this._globalPointerMoveMonitor.stopMonitoring(!0);
    }
}, des = class Tkm {
    constructor(t){
        this._editor = t, this._instanceId = ++Tkm._idPool, this._counter = 0, this._rules = new Map, this._garbageCollectionScheduler = new ac(()=>this.garbageCollect(), 1e3);
    }
    createClassNameRef(t) {
        const n = this.getOrCreateRule(t);
        return n.increaseRefCount(), {
            className: n.className,
            dispose: ()=>{
                n.decreaseRefCount(), this._garbageCollectionScheduler.schedule();
            }
        };
    }
    getOrCreateRule(t) {
        const n = this.computeUniqueKey(t);
        let i = this._rules.get(n);
        if (!i) {
            const r = this._counter++;
            i = new O5c(n, `dyn-rule-${this._instanceId}-${r}`, Bmn(this._editor.getContainerDomNode()) ? this._editor.getContainerDomNode() : void 0, t), this._rules.set(n, i);
        }
        return i;
    }
    computeUniqueKey(t) {
        return JSON.stringify(t);
    }
    garbageCollect() {
        for (const t of this._rules.values())t.hasReferences() || (this._rules.delete(t.key), t.dispose());
    }
}, des._idPool = 0, hes = des, O5c = class {
    constructor(e, t, n, i){
        this.key = e, this.className = t, this.properties = i, this._referenceCount = 0, this._styleElementDisposables = new He, this._styleElement = dS(n, void 0, this._styleElementDisposables), this._styleElement.textContent = this.getCssText(this.className, this.properties);
    }
    getCssText(e, t) {
        let n = `.${e} {`;
        for(const i in t){
            const r = t[i];
            let s;
            typeof r == "object" ? s = Is(r.id) : s = r;
            const o = pvg(i);
            n += `
	${o}: ${s};`;
        }
        return n += `
}`, n;
    }
    dispose() {
        this._styleElementDisposables.dispose(), this._styleElement = void 0;
    }
    increaseRefCount() {
        this._referenceCount++;
    }
    decreaseRefCount() {
        this._referenceCount--;
    }
    hasReferences() {
        return this._referenceCount > 0;
    }
};

}
