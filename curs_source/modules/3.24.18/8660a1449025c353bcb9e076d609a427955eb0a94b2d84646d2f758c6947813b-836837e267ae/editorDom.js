import { Nt, Qe, Vn, st } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { Ap } from "./colorRegistry.js";
import { Hn, Pr, n0, ws } from "./dom_2.js";
import { lBt, wfn } from "./globalPointerMoveMonitor.js";
import { i2, iT } from "./mouseEvent.js";
import { E } from "./tslib.es6.js";
import { Aii, U3, Xa, bP, dHo, hHo, li, oMy } from "./ze.js";
var bsi, pHo, qUd, zUd, mHe, VUd, KUd, YUd, mHo, gHo, XUd;
export { KUd, VUd, XUd, YUd, bsi, gHo, mHe, mHo, pHo, qUd, zUd };
var __wakaru_Cfn_initialized = false;
export function Cfn() {
if (__wakaru_Cfn_initialized) return;
__wakaru_Cfn_initialized = true;
"use strict";
E(), Hn(), U3(), wfn(), i2(), qn(), Qe(), Ap(), bsi = class {
    constructor(t, e){
        this.x = t, this.y = e, this._pageCoordinatesBrand = void 0;
    }
    toClientCoordinates(t) {
        return new pHo(this.x - t.scrollX, this.y - t.scrollY);
    }
}, pHo = class {
    constructor(t, e){
        this.clientX = t, this.clientY = e, this._clientCoordinatesBrand = void 0;
    }
    toPageCoordinates(t) {
        return new bsi(this.clientX + t.scrollX, this.clientY + t.scrollY);
    }
}, qUd = class {
    constructor(t, e, n, i){
        this.x = t, this.y = e, this.width = n, this.height = i, this._editorPagePositionBrand = void 0;
    }
}, zUd = class {
    constructor(t, e){
        this.x = t, this.y = e, this._positionRelativeToEditorBrand = void 0;
    }
}, mHe = class extends iT {
    constructor(t, e, n){
        super(ws(n), t), this._editorMouseEventBrand = void 0, this.isFromPointerCapture = e, this.pos = new bsi(this.posx, this.posy), this.editorPos = dHo(n), this.relativePos = hHo(n, this.editorPos, this.pos);
    }
}, VUd = class {
    constructor(t){
        this._editorViewDomNode = t;
    }
    _create(t) {
        return new mHe(t, !1, this._editorViewDomNode);
    }
    onContextMenu(t, e) {
        return li(t, Pr.CONTEXT_MENU, (n)=>{
            e(this._create(n));
        });
    }
    onMouseUp(t, e) {
        return li(t, Pr.MOUSE_UP, (n)=>{
            e(this._create(n));
        });
    }
    onMouseDown(t, e) {
        return li(t, Pr.MOUSE_DOWN, (n)=>{
            e(this._create(n));
        });
    }
    onPointerDown(t, e) {
        return li(t, Pr.POINTER_DOWN, (n)=>{
            e(this._create(n), n.pointerId);
        });
    }
    onMouseLeave(t, e) {
        return li(t, Pr.MOUSE_LEAVE, (n)=>{
            e(this._create(n));
        });
    }
    onMouseMove(t, e) {
        return li(t, Pr.MOUSE_MOVE, (n)=>e(this._create(n)));
    }
}, KUd = class {
    constructor(t){
        this._editorViewDomNode = t;
    }
    _create(t) {
        return new mHe(t, !1, this._editorViewDomNode);
    }
    onPointerUp(t, e) {
        return li(t, "pointerup", (n)=>{
            e(this._create(n));
        });
    }
    onPointerDown(t, e) {
        return li(t, Pr.POINTER_DOWN, (n)=>{
            e(this._create(n), n.pointerId);
        });
    }
    onPointerLeave(t, e) {
        return li(t, Pr.POINTER_LEAVE, (n)=>{
            e(this._create(n));
        });
    }
    onPointerMove(t, e) {
        return li(t, "pointermove", (n)=>e(this._create(n)));
    }
}, YUd = class extends st {
    constructor(t){
        super(), this._keydownListener = this._register(new Vn), this._editorViewDomNode = t, this._globalPointerMoveMonitor = this._register(new lBt);
    }
    startMonitoring(t, e, n, i, r) {
        this._keydownListener.value = n0(t.ownerDocument, "keydown", (s)=>{
            s.toKeyCodeChord().isModifierKey() || this._globalPointerMoveMonitor.stopMonitoring(!0, s.browserEvent);
        }, !0), this._globalPointerMoveMonitor.startMonitoring(t, e, n, (s)=>{
            i(new mHe(s, !0, this._editorViewDomNode));
        }, (s)=>{
            this._keydownListener.clear(), r(s);
        });
    }
    stopMonitoring() {
        this._globalPointerMoveMonitor.stopMonitoring(!0);
    }
}, mHo = class XAb {
    constructor(e){
        this._editor = e, this._instanceId = ++XAb._idPool, this._counter = 0, this._rules = new Map, this._garbageCollectionScheduler = new Yu(()=>this.garbageCollect(), 1e3);
    }
    createClassNameRef(e) {
        const n = this.getOrCreateRule(e);
        return n.increaseRefCount(), {
            className: n.className,
            dispose: ()=>{
                n.decreaseRefCount(), this._garbageCollectionScheduler.schedule();
            }
        };
    }
    getOrCreateRule(e) {
        const n = this.computeUniqueKey(e);
        let i = this._rules.get(n);
        if (!i) {
            const r = this._counter++;
            i = new XUd(n, `dyn-rule-${this._instanceId}-${r}`, Aii(this._editor.getContainerDomNode()) ? this._editor.getContainerDomNode() : void 0, e), this._rules.set(n, i);
        }
        return i;
    }
    computeUniqueKey(e) {
        return JSON.stringify(e);
    }
    garbageCollect() {
        for (const e of this._rules.values())e.hasReferences() || (this._rules.delete(e.key), e.dispose());
    }
}, mHo._idPool = 0, gHo = mHo, XUd = class {
    constructor(t, e, n, i){
        this.key = t, this.className = e, this.properties = i, this._referenceCount = 0, this._styleElementDisposables = new Nt, this._styleElement = bP(n, void 0, this._styleElementDisposables), this._styleElement.textContent = this.getCssText(this.className, this.properties);
    }
    getCssText(t, e) {
        let n = `.${t} {`;
        for(const i in e){
            const r = e[i];
            let s;
            typeof r == "object" ? s = Xa(r.id) : s = r;
            const o = oMy(i);
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
