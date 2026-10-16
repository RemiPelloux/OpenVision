import { AEc, Ct, He, Se, bt, jn, ns, rn, si, u3, ve, we } from "./HVr.js";
import { _zr, bI, bn } from "./async.js";
import { Gqe, n_ } from "./browser_2.js";
import { EAe } from "./canIUse.js";
import { So } from "./constants_8.js";
import { Ihg } from "./domObservable.js";
import { GNt } from "./dompurify.js";
import { T_ } from "./hash.js";
import { gu, jg } from "./keyboardEvent.js";
import { ew } from "./mouseEvent.js";
import { Ahg } from "./n.js";
import { gt, iwe, li } from "./network.js";
import { cR } from "./numbers.js";
import { Bht, HDc, Lmn, Nmn, Odg, Rhg, Ve, Xqe, Xt, _Yr, cC, iw, nu } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { lo, on } from "./window.js";
var VDc, xi, Bgi, xK, $mn, OV, ere, Hht, Z4, jDc, TYr, qDc, zp, bBe, EYr, yBe, SBe, Gb, u2t, xYr, FV, Ugi, Tc, IYr, M7, Fn, Gc, zDc, KDc, YDc, AYr, XDc, awe, nW, RYr, DYr;
export { $mn, AYr, Bgi, DYr, EYr, FV, Fn, Gb, Gc, Hht, IYr, KDc, M7, OV, RYr, SBe, TYr, Tc, Ugi, VDc, XDc, YDc, Z4, awe, bBe, ere, jDc, nW, qDc, u2t, xK, xYr, xi, yBe, zDc, zp };
var __wakaru_en_initialized = false;
export function en() {
if (__wakaru_en_initialized) return;
__wakaru_en_initialized = true;
"use strict";
x(), n_(), EAe(), jg(), ew(), bn(), si(), bt(), GNt(), Se(), li(), jn(), Qt(), T_(), lo(), cR(), So(), Ihg(), Ahg(), { registerWindow: VDc, getWindow: xi, getDocument: Bgi, getWindows: xK, getWindowsCount: $mn, getWindowId: OV, getWindowById: ere, hasWindow: Hht, onDidRegisterWindow: Z4, onWillUnregisterWindow: jDc, onDidUnregisterWindow: TYr } = (function() {
    const e = new Map;
    AEc(on, 1);
    const t = {
        window: on,
        disposables: new He
    };
    e.set(on.vscodeWindowId, t);
    const n = new ve, i = new ve, r = new ve;
    function s(o, a) {
        return (typeof o == "number" ? e.get(o) : void 0) ?? (a ? t : void 0);
    }
    return {
        onDidRegisterWindow: n.event,
        onWillUnregisterWindow: r.event,
        onDidUnregisterWindow: i.event,
        registerWindow (o) {
            if (e.has(o.vscodeWindowId)) return we.None;
            const a = new He, c = {
                window: o,
                disposables: a.add(new He)
            };
            return e.set(o.vscodeWindowId, c), a.add(rn(()=>{
                e.delete(o.vscodeWindowId), i.fire(o);
            })), a.add(Xt(o, Fn.BEFORE_UNLOAD, ()=>{
                r.fire(o);
            })), n.fire(c), a;
        },
        getWindows () {
            return e.values();
        },
        getWindowsCount () {
            return e.size;
        },
        getWindowId (o) {
            return o.vscodeWindowId;
        },
        hasWindow (o) {
            return e.has(o);
        },
        getWindowById: s,
        getWindow (o) {
            const a = o;
            if (a?.ownerDocument?.defaultView) return a.ownerDocument.defaultView.window;
            const c = o;
            return c?.view ? c.view.window : on;
        },
        getDocument (o) {
            return xi(o).document;
        }
    };
})(), qDc = class {
    constructor(e, t, n, i){
        this._node = e, this._type = t, this._handler = n, this._options = i || !1, this._node.addEventListener(this._type, this._handler, this._options);
    }
    dispose() {
        this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
    }
}, zp = function(t, n, i, r) {
    let s = i;
    return n === "click" || n === "mousedown" || n === "contextmenu" ? s = _Yr(xi(t), i) : (n === "keydown" || n === "keypress" || n === "keyup") && (s = Rhg(i)), Xt(t, n, s, r);
}, bBe = function(t, n, i) {
    const r = _Yr(xi(t), n);
    return Lmn(t, r, i);
}, EYr = function(t, n, i) {
    const r = _Yr(xi(t), n);
    return Nmn(t, r, i);
}, yBe = class extends _zr {
    constructor(e, t){
        super(e, t);
    }
}, u2t = class extends bI {
    constructor(e){
        super(), this.defaultTarget = e && xi(e);
    }
    cancelAndSet(e, t, n) {
        return super.cancelAndSet(e, t, n ?? this.defaultTarget);
    }
}, xYr = class {
    constructor(e, t = 0){
        this._runner = e, this.priority = t, this._canceled = !1;
    }
    dispose() {
        this._canceled = !0;
    }
    execute() {
        if (!this._canceled) try {
            this._runner();
        } catch (e) {
            ns(e);
        }
    }
    static sort(e, t) {
        return t.priority - e.priority;
    }
}, (function() {
    const e = new Map, t = new Map, n = (i)=>{
        t.set(i, !1);
        const r = e.get(i) ?? [];
        e.set(i, []), r.sort(xYr.sort);
        for (const s of r)s.execute();
    };
    Gb = (i, r, s = 0)=>{
        const o = OV(i), a = new xYr(r, s);
        let c = e.get(o);
        return c || (c = [], e.set(o, c)), c.push(a), t.get(o) || (t.set(o, !0), i.requestAnimationFrame(()=>n(o))), a;
    }, SBe = Gb;
})(), FV = class Dae {
    static convertToPixels(t, n) {
        return parseFloat(n) || 0;
    }
    static getDimension(t, n) {
        const i = Bht(t), r = i ? i.getPropertyValue(n) : "0";
        return Dae.convertToPixels(t, r);
    }
    static getBorderLeftWidth(t) {
        return Dae.getDimension(t, "border-left-width");
    }
    static getBorderRightWidth(t) {
        return Dae.getDimension(t, "border-right-width");
    }
    static getBorderTopWidth(t) {
        return Dae.getDimension(t, "border-top-width");
    }
    static getBorderBottomWidth(t) {
        return Dae.getDimension(t, "border-bottom-width");
    }
    static getPaddingLeft(t) {
        return Dae.getDimension(t, "padding-left");
    }
    static getPaddingRight(t) {
        return Dae.getDimension(t, "padding-right");
    }
    static getPaddingTop(t) {
        return Dae.getDimension(t, "padding-top");
    }
    static getPaddingBottom(t) {
        return Dae.getDimension(t, "padding-bottom");
    }
    static getMarginLeft(t) {
        return Dae.getDimension(t, "margin-left");
    }
    static getMarginTop(t) {
        return Dae.getDimension(t, "margin-top");
    }
    static getMarginRight(t) {
        return Dae.getDimension(t, "margin-right");
    }
    static getMarginBottom(t) {
        return Dae.getDimension(t, "margin-bottom");
    }
}, Ugi = class e1r {
    constructor(t, n){
        this.width = t, this.height = n;
    }
    with(t = this.width, n = this.height) {
        return t !== this.width || n !== this.height ? new e1r(t, n) : this;
    }
    static is(t) {
        return typeof t == "object" && typeof t.height == "number" && typeof t.width == "number";
    }
    static lift(t) {
        return t instanceof e1r ? t : new e1r(t.width, t.height);
    }
    static equals(t, n) {
        return t === n ? !0 : !t || !n ? !1 : t.width === n.width && t.height === n.height;
    }
}, Ugi.None = new Ugi(0, 0), Tc = Ugi, IYr = "parentFlowToElementId", M7 = new class {
    constructor(){
        this.mutationObservers = new Map;
    }
    observe(e, t, n) {
        let i = this.mutationObservers.get(e);
        i || (i = new Map, this.mutationObservers.set(e, i));
        const r = cC(n);
        let s = i.get(r);
        if (s) s.users += 1;
        else {
            const o = new ve, a = new MutationObserver((l)=>o.fire(l));
            a.observe(e, n);
            const c = s = {
                users: 1,
                observer: a,
                onDidMutate: o.event
            };
            t.add(rn(()=>{
                c.users -= 1, c.users === 0 && (o.dispose(), a.disconnect(), i?.delete(r), i?.size === 0 && this.mutationObservers.delete(e));
            })), i.set(r, s);
        }
        return s.onDidMutate;
    }
}, Fn = {
    CLICK: "click",
    AUXCLICK: "auxclick",
    DBLCLICK: "dblclick",
    MOUSE_UP: "mouseup",
    MOUSE_DOWN: "mousedown",
    MOUSE_OVER: "mouseover",
    MOUSE_MOVE: "mousemove",
    MOUSE_OUT: "mouseout",
    MOUSE_ENTER: "mouseenter",
    MOUSE_LEAVE: "mouseleave",
    MOUSE_WHEEL: "wheel",
    POINTER_UP: "pointerup",
    POINTER_DOWN: "pointerdown",
    POINTER_MOVE: "pointermove",
    POINTER_LEAVE: "pointerleave",
    CONTEXT_MENU: "contextmenu",
    WHEEL: "wheel",
    KEY_DOWN: "keydown",
    KEY_PRESS: "keypress",
    KEY_UP: "keyup",
    LOAD: "load",
    BEFORE_UNLOAD: "beforeunload",
    UNLOAD: "unload",
    PAGE_SHOW: "pageshow",
    PAGE_HIDE: "pagehide",
    PASTE: "paste",
    ABORT: "abort",
    ERROR: "error",
    RESIZE: "resize",
    SCROLL: "scroll",
    FULLSCREEN_CHANGE: "fullscreenchange",
    WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
    SELECT: "select",
    CHANGE: "change",
    SUBMIT: "submit",
    RESET: "reset",
    FOCUS: "focus",
    FOCUS_IN: "focusin",
    FOCUS_OUT: "focusout",
    BLUR: "blur",
    INPUT: "input",
    STORAGE: "storage",
    DRAG_START: "dragstart",
    DRAG: "drag",
    DRAG_ENTER: "dragenter",
    DRAG_LEAVE: "dragleave",
    DRAG_OVER: "dragover",
    DROP: "drop",
    DRAG_END: "dragend",
    ANIMATION_START: Gqe ? "webkitAnimationStart" : "animationstart",
    ANIMATION_END: Gqe ? "webkitAnimationEnd" : "animationend",
    ANIMATION_ITERATION: Gqe ? "webkitAnimationIteration" : "animationiteration"
}, Gc = {
    stop: (e, t)=>(e.preventDefault(), t && e.stopPropagation(), e)
}, zDc = class uIa extends we {
    constructor(t){
        super(), this._onDidFocus = this._register(new ve), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new ve), this.onDidBlur = this._onDidBlur.event;
        let n = uIa.hasFocusWithin(t), i = !1;
        const r = ()=>{
            i = !1, n || (n = !0, this._onDidFocus.fire());
        }, s = ()=>{
            n && (i = !0, (nu(t) ? xi(t) : t).setTimeout(()=>{
                i && (i = !1, n = !1, this._onDidBlur.fire());
            }, 0));
        };
        this._refreshStateHandler = ()=>{
            uIa.hasFocusWithin(t) !== n && (n ? s() : r());
        }, this._register(Xt(t, Fn.FOCUS, r, !0)), this._register(Xt(t, Fn.BLUR, s, !0)), nu(t) && (this._register(Xt(t, Fn.FOCUS_IN, ()=>this._refreshStateHandler())), this._register(Xt(t, Fn.FOCUS_OUT, ()=>this._refreshStateHandler())));
    }
    static hasFocusWithin(t) {
        if (nu(t)) {
            const n = Xqe(t), i = n ? n.activeElement : t.ownerDocument.activeElement;
            return iw(i, t);
        } else {
            const n = t;
            return iw(n.document.activeElement, n.document);
        }
    }
    refreshState() {
        this._refreshStateHandler();
    }
}, KDc = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/, Ve.SVG = function(e, t, ...n) {
    return HDc("http://www.w3.org/2000/svg", e, t, ...n);
}, iwe.setPreferredWebSchema(/^https:/.test(on.location.href) ? "https" : "http"), YDc = [
    gt.http,
    gt.https,
    gt.command
], AYr = Object.freeze([
    "a",
    "abbr",
    "b",
    "bdo",
    "blockquote",
    "br",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "li",
    "mark",
    "ol",
    "p",
    "pre",
    "q",
    "rp",
    "rt",
    "ruby",
    "samp",
    "small",
    "small",
    "source",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
]), XDc = Object.freeze({
    ALLOWED_TAGS: [
        "a",
        "button",
        "blockquote",
        "code",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hr",
        "input",
        "label",
        "li",
        "p",
        "pre",
        "select",
        "small",
        "span",
        "strong",
        "textarea",
        "ul",
        "ol"
    ],
    ALLOWED_ATTR: [
        "href",
        "data-href",
        "data-command",
        "target",
        "title",
        "name",
        "src",
        "alt",
        "class",
        "id",
        "role",
        "tabindex",
        "style",
        "data-code",
        "width",
        "height",
        "align",
        "x-dispatch",
        "required",
        "checked",
        "placeholder",
        "type",
        "start"
    ],
    RETURN_DOM: !1,
    RETURN_DOM_FRAGMENT: !1,
    RETURN_TRUSTED_TYPE: !0
}), awe = class qot extends ve {
    constructor(){
        super(), this._subscriptions = new He, u3(this._subscriptions), this._keyStatus = {
            altKey: !1,
            shiftKey: !1,
            ctrlKey: !1,
            metaKey: !1
        }, this._subscriptions.add(Ct.runAndSubscribe(Z4, ({ window: t, disposables: n })=>this.registerListeners(t, n), {
            window: on,
            disposables: this._subscriptions
        }));
    }
    registerListeners(t, n) {
        n.add(Xt(t, "keydown", (i)=>{
            if (i.defaultPrevented) return;
            const r = new gu(i);
            if (!(r.keyCode === 6 && i.repeat)) {
                if (i.altKey && !this._keyStatus.altKey) this._keyStatus.lastKeyPressed = "alt";
                else if (i.ctrlKey && !this._keyStatus.ctrlKey) this._keyStatus.lastKeyPressed = "ctrl";
                else if (i.metaKey && !this._keyStatus.metaKey) this._keyStatus.lastKeyPressed = "meta";
                else if (i.shiftKey && !this._keyStatus.shiftKey) this._keyStatus.lastKeyPressed = "shift";
                else if (r.keyCode !== 6) this._keyStatus.lastKeyPressed = void 0;
                else return;
                this._keyStatus.altKey = i.altKey, this._keyStatus.ctrlKey = i.ctrlKey, this._keyStatus.metaKey = i.metaKey, this._keyStatus.shiftKey = i.shiftKey, this._keyStatus.lastKeyPressed && (this._keyStatus.event = i, this.fire(this._keyStatus));
            }
        }, !0)), n.add(Xt(t, "keyup", (i)=>{
            i.defaultPrevented || (!i.altKey && this._keyStatus.altKey ? this._keyStatus.lastKeyReleased = "alt" : !i.ctrlKey && this._keyStatus.ctrlKey ? this._keyStatus.lastKeyReleased = "ctrl" : !i.metaKey && this._keyStatus.metaKey ? this._keyStatus.lastKeyReleased = "meta" : !i.shiftKey && this._keyStatus.shiftKey ? this._keyStatus.lastKeyReleased = "shift" : this._keyStatus.lastKeyReleased = void 0, this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased && (this._keyStatus.lastKeyPressed = void 0), this._keyStatus.altKey = i.altKey, this._keyStatus.ctrlKey = i.ctrlKey, this._keyStatus.metaKey = i.metaKey, this._keyStatus.shiftKey = i.shiftKey, this._keyStatus.lastKeyReleased && (this._keyStatus.event = i, this.fire(this._keyStatus)));
        }, !0)), n.add(Xt(t.document.body, "mousedown", ()=>{
            this._keyStatus.lastKeyPressed = void 0;
        }, !0)), n.add(Xt(t.document.body, "mouseup", ()=>{
            this._keyStatus.lastKeyPressed = void 0;
        }, !0)), n.add(Xt(t.document.body, "mousemove", (i)=>{
            i.buttons && (this._keyStatus.lastKeyPressed = void 0);
        }, !0)), n.add(Xt(t, "blur", ()=>{
            this.resetKeyStatus();
        }));
    }
    get keyStatus() {
        return this._keyStatus;
    }
    get isModifierPressed() {
        return this._keyStatus.altKey || this._keyStatus.ctrlKey || this._keyStatus.metaKey || this._keyStatus.shiftKey;
    }
    resetKeyStatus() {
        this.doResetKeyStatus(), this.fire(this._keyStatus);
    }
    doResetKeyStatus() {
        this._keyStatus = {
            altKey: !1,
            shiftKey: !1,
            ctrlKey: !1,
            metaKey: !1
        };
    }
    static getInstance() {
        return qot.instance || (qot.instance = new qot), qot.instance;
    }
    static disposeInstance() {
        qot.instance && (qot.instance.dispose(), qot.instance = void 0);
    }
    dispose() {
        super.dispose(), this._subscriptions.dispose();
    }
}, nW = class extends we {
    constructor(e, t){
        super(), this.element = e, this.callbacks = t, this.counter = 0, this.dragStartTime = 0, this.registerListeners();
    }
    registerListeners() {
        this.callbacks.onDragStart && this._register(Xt(this.element, Fn.DRAG_START, (e)=>{
            this.callbacks.onDragStart?.(e);
        })), this.callbacks.onDrag && this._register(Xt(this.element, Fn.DRAG, (e)=>{
            this.callbacks.onDrag?.(e);
        })), this._register(Xt(this.element, Fn.DRAG_ENTER, (e)=>{
            this.counter++, this.dragStartTime = e.timeStamp, this.callbacks.onDragEnter?.(e);
        })), this._register(Xt(this.element, Fn.DRAG_OVER, (e)=>{
            e.preventDefault(), this.callbacks.onDragOver?.(e, e.timeStamp - this.dragStartTime);
        })), this._register(Xt(this.element, Fn.DRAG_LEAVE, (e)=>{
            this.counter--, this.counter === 0 && (this.dragStartTime = 0, this.callbacks.onDragLeave?.(e));
        })), this._register(Xt(this.element, Fn.DRAG_END, (e)=>{
            this.counter = 0, this.dragStartTime = 0, this.callbacks.onDragEnd?.(e);
        })), this._register(Xt(this.element, Fn.DROP, (e)=>{
            this.counter = 0, this.dragStartTime = 0, this.callbacks.onDrop?.(e);
        }));
    }
}, RYr = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/, DYr = class {
    constructor(e, t, n){
        this.originX = e, this.originY = t, this.points = new Int16Array(8);
        const { top: i, left: r, right: s, bottom: o } = n.getBoundingClientRect(), a = this.points;
        let c = 0;
        a[c++] = r, a[c++] = i, a[c++] = s, a[c++] = i, a[c++] = r, a[c++] = o, a[c++] = s, a[c++] = o;
    }
    contains(e, t) {
        const { points: n, originX: i, originY: r } = this;
        for(let s = 0; s < 4; s++){
            const o = 2 * s, a = 2 * ((s + 1) % 4);
            if (Odg(e, t, i, r, n[o], n[o + 1], n[a], n[a + 1])) return !0;
        }
        return !1;
    }
};

}
