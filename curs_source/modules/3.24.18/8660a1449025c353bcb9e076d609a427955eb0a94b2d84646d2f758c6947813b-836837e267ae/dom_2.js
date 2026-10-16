import { Di, Ei, Gt, Nt, Pn, Qe, XKu, en, m4, st, tt, xr } from "./Iwo.js";
import { tR } from "./SZu.js";
import { AI, iTo, qn } from "./async.js";
import { A_, bbt } from "./browser_2.js";
import { Sbt } from "./canIUse.js";
import { pa } from "./constants_8.js";
import { $xy } from "./domObservable.js";
import { kbt } from "./dompurify.js";
import { Xy } from "./hash.js";
import { nT, rv } from "./keyboardEvent.js";
import { i2 } from "./mouseEvent.js";
import { Hxy } from "./n.js";
import { Ki, MOe, Ot } from "./network.js";
import { b4 } from "./numbers.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { $t, Bs } from "./window.js";
import { $u, Dkr, Ii, JE, N5d, S9t, Wxy, _5d, li, xbt } from "./ze.js";
var B5d, ws, Ukr, ooe, Mii, pO, Wve, w9t, hW, U5d, L7o, j5d, n0, _gn, Rbt, C9t, Ix, bgn, O7o, Jte, jkr, nd, F7o, Xde, Pr, Dd, $5d, H5d, lAy, W5d, cAy, Gve, aoe, G5d;
export { $5d, B5d, C9t, Dd, F7o, G5d, Gve, H5d, Ix, Jte, L7o, Mii, O7o, Pr, Rbt, U5d, Ukr, W5d, Wve, Xde, _gn, aoe, bgn, cAy, hW, j5d, jkr, lAy, n0, nd, ooe, pO, w9t, ws };
var __wakaru_Hn_initialized = false;
export function Hn() {
if (__wakaru_Hn_initialized) return;
__wakaru_Hn_initialized = true;
"use strict";
E(), A_(), Sbt(), nT(), i2(), qn(), Ei(), Gt(), kbt(), Qe(), Ki(), Di(), fn(), Xy(), Bs(), b4(), pa(), $xy(), Hxy(), { registerWindow: B5d, getWindow: ws, getDocument: Ukr, getWindows: ooe, getWindowsCount: Mii, getWindowId: pO, getWindowById: Wve, hasWindow: w9t, onDidRegisterWindow: hW, onWillUnregisterWindow: U5d, onDidUnregisterWindow: L7o } = (function() {
    const t = new Map;
    XKu($t, 1);
    const e = {
        window: $t,
        disposables: new Nt
    };
    t.set($t.vscodeWindowId, e);
    const n = new tt, i = new tt, r = new tt;
    function s(o, a) {
        return (typeof o == "number" ? t.get(o) : void 0) ?? (a ? e : void 0);
    }
    return {
        onDidRegisterWindow: n.event,
        onWillUnregisterWindow: r.event,
        onDidUnregisterWindow: i.event,
        registerWindow (o) {
            if (t.has(o.vscodeWindowId)) return st.None;
            const a = new Nt, l = {
                window: o,
                disposables: a.add(new Nt)
            };
            return t.set(o.vscodeWindowId, l), a.add(Pn(()=>{
                t.delete(o.vscodeWindowId), i.fire(o);
            })), a.add(li(o, Pr.BEFORE_UNLOAD, ()=>{
                r.fire(o);
            })), n.fire(l), a;
        },
        getWindows () {
            return t.values();
        },
        getWindowsCount () {
            return t.size;
        },
        getWindowId (o) {
            return o.vscodeWindowId;
        },
        hasWindow (o) {
            return t.has(o);
        },
        getWindowById: s,
        getWindow (o) {
            const a = o;
            if (a?.ownerDocument?.defaultView) return a.ownerDocument.defaultView.window;
            const l = o;
            return l?.view ? l.view.window : $t;
        },
        getDocument (o) {
            return ws(o).document;
        }
    };
})(), j5d = class {
    constructor(t, e, n, i){
        this._node = t, this._type = e, this._handler = n, this._options = i || !1, this._node.addEventListener(this._type, this._handler, this._options);
    }
    dispose() {
        this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
    }
}, n0 = function(e, n, i, r) {
    let s = i;
    return n === "click" || n === "mousedown" || n === "contextmenu" ? s = _5d(ws(e), i) : (n === "keydown" || n === "keypress" || n === "keyup") && (s = Wxy(i)), li(e, n, s, r);
}, _gn = function(e, n, i) {
    const r = _5d(ws(e), n);
    return Dkr(e, r, i);
}, Rbt = class extends iTo {
    constructor(t, e){
        super(t, e);
    }
}, bgn = class extends AI {
    constructor(t){
        super(), this.defaultTarget = t && ws(t);
    }
    cancelAndSet(t, e, n) {
        return super.cancelAndSet(t, e, n ?? this.defaultTarget);
    }
}, O7o = class {
    constructor(t, e = 0){
        this._runner = t, this.priority = e, this._canceled = !1;
    }
    dispose() {
        this._canceled = !0;
    }
    execute() {
        if (!this._canceled) try {
            this._runner();
        } catch (t) {
            xr(t);
        }
    }
    static sort(t, e) {
        return e.priority - t.priority;
    }
}, (function() {
    const t = new Map, e = new Map, n = (i)=>{
        e.set(i, !1);
        const r = t.get(i) ?? [];
        t.set(i, []), r.sort(O7o.sort);
        for (const s of r)s.execute();
    };
    Ix = (i, r, s = 0)=>{
        const o = pO(i), a = new O7o(r, s);
        let l = t.get(o);
        return l || (l = [], t.set(o, l)), l.push(a), e.get(o) || (e.set(o, !0), i.requestAnimationFrame(()=>n(o))), a;
    }, C9t = Ix;
})(), Jte = class ZSe {
    static convertToPixels(e, n) {
        return parseFloat(n) || 0;
    }
    static getDimension(e, n) {
        const i = S9t(e), r = i ? i.getPropertyValue(n) : "0";
        return ZSe.convertToPixels(e, r);
    }
    static getBorderLeftWidth(e) {
        return ZSe.getDimension(e, "border-left-width");
    }
    static getBorderRightWidth(e) {
        return ZSe.getDimension(e, "border-right-width");
    }
    static getBorderTopWidth(e) {
        return ZSe.getDimension(e, "border-top-width");
    }
    static getBorderBottomWidth(e) {
        return ZSe.getDimension(e, "border-bottom-width");
    }
    static getPaddingLeft(e) {
        return ZSe.getDimension(e, "padding-left");
    }
    static getPaddingRight(e) {
        return ZSe.getDimension(e, "padding-right");
    }
    static getPaddingTop(e) {
        return ZSe.getDimension(e, "padding-top");
    }
    static getPaddingBottom(e) {
        return ZSe.getDimension(e, "padding-bottom");
    }
    static getMarginLeft(e) {
        return ZSe.getDimension(e, "margin-left");
    }
    static getMarginTop(e) {
        return ZSe.getDimension(e, "margin-top");
    }
    static getMarginRight(e) {
        return ZSe.getDimension(e, "margin-right");
    }
    static getMarginBottom(e) {
        return ZSe.getDimension(e, "margin-bottom");
    }
}, jkr = class GYs {
    constructor(e, n){
        this.width = e, this.height = n;
    }
    with(e = this.width, n = this.height) {
        return e !== this.width || n !== this.height ? new GYs(e, n) : this;
    }
    static is(e) {
        return typeof e == "object" && typeof e.height == "number" && typeof e.width == "number";
    }
    static lift(e) {
        return e instanceof GYs ? e : new GYs(e.width, e.height);
    }
    static equals(e, n) {
        return e === n ? !0 : !e || !n ? !1 : e.width === n.width && e.height === n.height;
    }
}, jkr.None = new jkr(0, 0), nd = jkr, F7o = "parentFlowToElementId", Xde = new class {
    constructor(){
        this.mutationObservers = new Map;
    }
    observe(t, e, n) {
        let i = this.mutationObservers.get(t);
        i || (i = new Map, this.mutationObservers.set(t, i));
        const r = tR(n);
        let s = i.get(r);
        if (s) s.users += 1;
        else {
            const o = new tt, a = new MutationObserver((c)=>o.fire(c));
            a.observe(t, n);
            const l = s = {
                users: 1,
                observer: a,
                onDidMutate: o.event
            };
            e.add(Pn(()=>{
                l.users -= 1, l.users === 0 && (o.dispose(), a.disconnect(), i?.delete(r), i?.size === 0 && this.mutationObservers.delete(t));
            })), i.set(r, s);
        }
        return s.onDidMutate;
    }
}, Pr = {
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
    ANIMATION_START: bbt ? "webkitAnimationStart" : "animationstart",
    ANIMATION_END: bbt ? "webkitAnimationEnd" : "animationend",
    ANIMATION_ITERATION: bbt ? "webkitAnimationIteration" : "animationiteration"
}, Dd = {
    stop: (t, e)=>(t.preventDefault(), e && t.stopPropagation(), t)
}, $5d = class XQc extends st {
    constructor(e){
        super(), this._onDidFocus = this._register(new tt), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new tt), this.onDidBlur = this._onDidBlur.event;
        let n = XQc.hasFocusWithin(e), i = !1;
        const r = ()=>{
            i = !1, n || (n = !0, this._onDidFocus.fire());
        }, s = ()=>{
            n && (i = !0, ($u(e) ? ws(e) : e).setTimeout(()=>{
                i && (i = !1, n = !1, this._onDidBlur.fire());
            }, 0));
        };
        this._refreshStateHandler = ()=>{
            XQc.hasFocusWithin(e) !== n && (n ? s() : r());
        }, this._register(li(e, Pr.FOCUS, r, !0)), this._register(li(e, Pr.BLUR, s, !0)), $u(e) && (this._register(li(e, Pr.FOCUS_IN, ()=>this._refreshStateHandler())), this._register(li(e, Pr.FOCUS_OUT, ()=>this._refreshStateHandler())));
    }
    static hasFocusWithin(e) {
        if ($u(e)) {
            const n = xbt(e), i = n ? n.activeElement : e.ownerDocument.activeElement;
            return JE(i, e);
        } else {
            const n = e;
            return JE(n.document.activeElement, n.document);
        }
    }
    refreshState() {
        this._refreshStateHandler();
    }
}, H5d = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/, Ii.SVG = function(t, e, ...n) {
    return N5d("http://www.w3.org/2000/svg", t, e, ...n);
}, MOe.setPreferredWebSchema(/^https:/.test($t.location.href) ? "https" : "http"), lAy = [
    Ot.http,
    Ot.https,
    Ot.command
], W5d = Object.freeze([
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
]), cAy = Object.freeze({
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
}), Gve = class W3t extends tt {
    constructor(){
        super(), this._subscriptions = new Nt, m4(this._subscriptions), this._keyStatus = {
            altKey: !1,
            shiftKey: !1,
            ctrlKey: !1,
            metaKey: !1
        }, this._subscriptions.add(en.runAndSubscribe(hW, ({ window: e, disposables: n })=>this.registerListeners(e, n), {
            window: $t,
            disposables: this._subscriptions
        }));
    }
    registerListeners(e, n) {
        n.add(li(e, "keydown", (i)=>{
            if (i.defaultPrevented) return;
            const r = new rv(i);
            if (!(r.keyCode === 6 && i.repeat)) {
                if (i.altKey && !this._keyStatus.altKey) this._keyStatus.lastKeyPressed = "alt";
                else if (i.ctrlKey && !this._keyStatus.ctrlKey) this._keyStatus.lastKeyPressed = "ctrl";
                else if (i.metaKey && !this._keyStatus.metaKey) this._keyStatus.lastKeyPressed = "meta";
                else if (i.shiftKey && !this._keyStatus.shiftKey) this._keyStatus.lastKeyPressed = "shift";
                else if (r.keyCode !== 6) this._keyStatus.lastKeyPressed = void 0;
                else return;
                this._keyStatus.altKey = i.altKey, this._keyStatus.ctrlKey = i.ctrlKey, this._keyStatus.metaKey = i.metaKey, this._keyStatus.shiftKey = i.shiftKey, this._keyStatus.lastKeyPressed && (this._keyStatus.event = i, this.fire(this._keyStatus));
            }
        }, !0)), n.add(li(e, "keyup", (i)=>{
            i.defaultPrevented || (!i.altKey && this._keyStatus.altKey ? this._keyStatus.lastKeyReleased = "alt" : !i.ctrlKey && this._keyStatus.ctrlKey ? this._keyStatus.lastKeyReleased = "ctrl" : !i.metaKey && this._keyStatus.metaKey ? this._keyStatus.lastKeyReleased = "meta" : !i.shiftKey && this._keyStatus.shiftKey ? this._keyStatus.lastKeyReleased = "shift" : this._keyStatus.lastKeyReleased = void 0, this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased && (this._keyStatus.lastKeyPressed = void 0), this._keyStatus.altKey = i.altKey, this._keyStatus.ctrlKey = i.ctrlKey, this._keyStatus.metaKey = i.metaKey, this._keyStatus.shiftKey = i.shiftKey, this._keyStatus.lastKeyReleased && (this._keyStatus.event = i, this.fire(this._keyStatus)));
        }, !0)), n.add(li(e.document.body, "mousedown", ()=>{
            this._keyStatus.lastKeyPressed = void 0;
        }, !0)), n.add(li(e.document.body, "mouseup", ()=>{
            this._keyStatus.lastKeyPressed = void 0;
        }, !0)), n.add(li(e.document.body, "mousemove", (i)=>{
            i.buttons && (this._keyStatus.lastKeyPressed = void 0);
        }, !0)), n.add(li(e, "blur", ()=>{
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
        return W3t.instance || (W3t.instance = new W3t), W3t.instance;
    }
    static disposeInstance() {
        W3t.instance && (W3t.instance.dispose(), W3t.instance = void 0);
    }
    dispose() {
        super.dispose(), this._subscriptions.dispose();
    }
}, aoe = class extends st {
    constructor(t, e){
        super(), this.element = t, this.callbacks = e, this.counter = 0, this.dragStartTime = 0, this.registerListeners();
    }
    registerListeners() {
        this.callbacks.onDragStart && this._register(li(this.element, Pr.DRAG_START, (t)=>{
            this.callbacks.onDragStart?.(t);
        })), this.callbacks.onDrag && this._register(li(this.element, Pr.DRAG, (t)=>{
            this.callbacks.onDrag?.(t);
        })), this._register(li(this.element, Pr.DRAG_ENTER, (t)=>{
            this.counter++, this.dragStartTime = t.timeStamp, this.callbacks.onDragEnter?.(t);
        })), this._register(li(this.element, Pr.DRAG_OVER, (t)=>{
            t.preventDefault(), this.callbacks.onDragOver?.(t, t.timeStamp - this.dragStartTime);
        })), this._register(li(this.element, Pr.DRAG_LEAVE, (t)=>{
            this.counter--, this.counter === 0 && (this.dragStartTime = 0, this.callbacks.onDragLeave?.(t));
        })), this._register(li(this.element, Pr.DRAG_END, (t)=>{
            this.counter = 0, this.dragStartTime = 0, this.callbacks.onDragEnd?.(t);
        })), this._register(li(this.element, Pr.DROP, (t)=>{
            this.counter = 0, this.dragStartTime = 0, this.callbacks.onDrop?.(t);
        }));
    }
}, G5d = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;

}
