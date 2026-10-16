import { Gt, Pn, Qe, Vn, en, m4, st } from "./Iwo.js";
import { SM } from "./decorators.js";
import { Hn, Ix, hW } from "./dom_2.js";
import { a7, tL } from "./linkedList.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { li, sl } from "./ze.js";
var mS, Efn, kM;
export { Efn, kM, mS };
var __wakaru_fO_initialized = false;
export function fO() {
if (__wakaru_fO_initialized) return;
__wakaru_fO_initialized = true;
"use strict";
E(), Hn(), Bs(), SM(), Gt(), Qe(), a7(), ((t)=>{
    t.Tap = "-monaco-gesturetap", t.Change = "-monaco-gesturechange", t.Start = "-monaco-gesturestart", t.End = "-monaco-gesturesend", t.Contextmenu = "-monaco-gesturecontextmenu";
})(mS || (mS = {})), Efn = class vue extends st {
    constructor(){
        super(), this.dispatched = !1, this.targets = new tL, this.ignoreTargets = new tL, this.handle = this._register(new Vn), this.activeTouches = {}, this._lastSetTapCountTime = 0, this._register(en.runAndSubscribe(hW, ({ window: e, disposables: n })=>{
            n.add(li(e.document, "touchstart", (i)=>this.onTouchStart(i), {
                passive: !1
            })), n.add(li(e.document, "touchend", (i)=>this.onTouchEnd(e, i))), n.add(li(e.document, "touchmove", (i)=>this.onTouchMove(i), {
                passive: !1
            }));
        }, {
            window: $t,
            disposables: this._store
        }));
    }
    static addTarget(e) {
        if (!vue.isTouchDevice()) return st.None;
        vue.INSTANCE || (vue.INSTANCE = m4(new vue));
        const n = vue.INSTANCE.targets.push(e);
        return Pn(n);
    }
    static ignoreTarget(e) {
        if (!vue.isTouchDevice()) return st.None;
        vue.INSTANCE || (vue.INSTANCE = m4(new vue));
        const n = vue.INSTANCE.ignoreTargets.push(e);
        return Pn(n);
    }
    static isTouchDevice() {
        return "ontouchstart" in $t || navigator.maxTouchPoints > 0;
    }
    dispose() {
        this.handle.clear(), super.dispose();
    }
    onTouchStart(e) {
        const n = Date.now();
        this.handle.clear();
        for(let i = 0, r = e.targetTouches.length; i < r; i++){
            const s = e.targetTouches.item(i);
            this.activeTouches[s.identifier] = {
                id: s.identifier,
                initialTarget: s.target,
                initialTimeStamp: n,
                initialPageX: s.pageX,
                initialPageY: s.pageY,
                rollingTimestamps: [
                    n
                ],
                rollingPageX: [
                    s.pageX
                ],
                rollingPageY: [
                    s.pageY
                ]
            };
            const o = this.newGestureEvent(mS.Start, s.target);
            o.pageX = s.pageX, o.pageY = s.pageY, this.dispatchEvent(o);
        }
        this.dispatched && (e.preventDefault(), e.stopPropagation(), this.dispatched = !1);
    }
    onTouchEnd(e, n) {
        const i = Date.now(), r = Object.keys(this.activeTouches).length;
        for(let s = 0, o = n.changedTouches.length; s < o; s++){
            const a = n.changedTouches.item(s);
            if (!this.activeTouches.hasOwnProperty(String(a.identifier))) {
                console.warn("move of an UNKNOWN touch", a);
                continue;
            }
            const l = this.activeTouches[a.identifier], c = Date.now() - l.initialTimeStamp;
            if (c < vue.HOLD_DELAY && Math.abs(l.initialPageX - l.rollingPageX.at(-1)) < 30 && Math.abs(l.initialPageY - l.rollingPageY.at(-1)) < 30) {
                const u = this.newGestureEvent(mS.Tap, l.initialTarget);
                u.pageX = l.rollingPageX.at(-1), u.pageY = l.rollingPageY.at(-1), this.dispatchEvent(u);
            } else if (c >= vue.HOLD_DELAY && Math.abs(l.initialPageX - l.rollingPageX.at(-1)) < 30 && Math.abs(l.initialPageY - l.rollingPageY.at(-1)) < 30) {
                const u = this.newGestureEvent(mS.Contextmenu, l.initialTarget);
                u.pageX = l.rollingPageX.at(-1), u.pageY = l.rollingPageY.at(-1), this.dispatchEvent(u);
            } else if (r === 1) {
                const u = l.rollingPageX.at(-1), d = l.rollingPageY.at(-1), h = l.rollingTimestamps.at(-1) - l.rollingTimestamps[0], p = u - l.rollingPageX[0], g = d - l.rollingPageY[0], f = [
                    ...this.targets
                ].filter((_)=>l.initialTarget instanceof Node && _.contains(l.initialTarget));
                this.inertia(e, f, i, Math.abs(p) / h, p > 0 ? 1 : -1, u, Math.abs(g) / h, g > 0 ? 1 : -1, d);
            }
            this.dispatchEvent(this.newGestureEvent(mS.End, l.initialTarget)), delete this.activeTouches[a.identifier];
        }
        this.dispatched && (n.preventDefault(), n.stopPropagation(), this.dispatched = !1);
    }
    newGestureEvent(e, n) {
        const i = document.createEvent("CustomEvent");
        return i.initEvent(e, !1, !0), i.initialTarget = n, i.tapCount = 0, i;
    }
    dispatchEvent(e) {
        if (e.type === mS.Tap) {
            const n = new Date().getTime();
            let i = 0;
            n - this._lastSetTapCountTime > vue.CLEAR_TAP_COUNT_TIME ? i = 1 : i = 2, this._lastSetTapCountTime = n, e.tapCount = i;
        } else (e.type === mS.Change || e.type === mS.Contextmenu) && (this._lastSetTapCountTime = 0);
        if (e.initialTarget instanceof Node) {
            for (const i of this.ignoreTargets)if (i.contains(e.initialTarget)) return;
            const n = [];
            for (const i of this.targets)if (i.contains(e.initialTarget)) {
                let r = 0, s = e.initialTarget;
                for(; s && s !== i;)r++, s = s.parentElement;
                n.push([
                    r,
                    i
                ]);
            }
            n.sort((i, r)=>i[0] - r[0]);
            for (const [i, r] of n)r.dispatchEvent(e), this.dispatched = !0;
        }
    }
    inertia(e, n, i, r, s, o, a, l, c) {
        this.handle.value = Ix(e, ()=>{
            const u = Date.now(), d = u - i;
            let h = 0, p = 0, g = !0;
            r += vue.SCROLL_FRICTION * d, a += vue.SCROLL_FRICTION * d, r > 0 && (g = !1, h = s * r * d), a > 0 && (g = !1, p = l * a * d);
            const f = this.newGestureEvent(mS.Change);
            f.translationX = h, f.translationY = p, n.forEach((_)=>_.dispatchEvent(f)), g || this.inertia(e, n, u, r, s, o + h, a, l, c + p);
        });
    }
    onTouchMove(e) {
        const n = Date.now();
        for(let i = 0, r = e.changedTouches.length; i < r; i++){
            const s = e.changedTouches.item(i);
            if (!this.activeTouches.hasOwnProperty(String(s.identifier))) {
                console.warn("end of an UNKNOWN touch", s);
                continue;
            }
            const o = this.activeTouches[s.identifier], a = this.newGestureEvent(mS.Change, o.initialTarget);
            a.translationX = s.pageX - o.rollingPageX.at(-1), a.translationY = s.pageY - o.rollingPageY.at(-1), a.pageX = s.pageX, a.pageY = s.pageY, this.dispatchEvent(a), o.rollingPageX.length > 3 && (o.rollingPageX.shift(), o.rollingPageY.shift(), o.rollingTimestamps.shift()), o.rollingPageX.push(s.pageX), o.rollingPageY.push(s.pageY), o.rollingTimestamps.push(n);
        }
        this.dispatched && (e.preventDefault(), e.stopPropagation(), this.dispatched = !1);
    }
}, Efn.SCROLL_FRICTION = -.005, Efn.HOLD_DELAY = 700, Efn.CLEAR_TAP_COUNT_TIME = 400, Re([
    sl
], Efn, "isTouchDevice", null), kM = Efn;

}
