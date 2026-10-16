import { Ct, Se, bt, cn, rn, u3, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { sw } from "./decorators.js";
import { Gb, Z4, en } from "./dom_2.js";
import { JN, oA } from "./linkedList.js";
import { Xt, xo } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var ov, zOt, zT;
export { ov, zOt, zT };
var __wakaru_Ex_initialized = false;
export function Ex() {
if (__wakaru_Ex_initialized) return;
__wakaru_Ex_initialized = true;
"use strict";
x(), en(), lo(), sw(), bt(), Se(), JN(), ((e)=>{
    e.Tap = "-monaco-gesturetap", e.Change = "-monaco-gesturechange", e.Start = "-monaco-gesturestart", e.End = "-monaco-gesturesend", e.Contextmenu = "-monaco-gesturecontextmenu";
})(ov || (ov = {})), zOt = class rQ extends we {
    constructor(){
        super(), this.dispatched = !1, this.targets = new oA, this.ignoreTargets = new oA, this.handle = this._register(new cn), this.activeTouches = {}, this._lastSetTapCountTime = 0, this._register(Ct.runAndSubscribe(Z4, ({ window: t, disposables: n })=>{
            n.add(Xt(t.document, "touchstart", (i)=>this.onTouchStart(i), {
                passive: !1
            })), n.add(Xt(t.document, "touchend", (i)=>this.onTouchEnd(t, i))), n.add(Xt(t.document, "touchmove", (i)=>this.onTouchMove(i), {
                passive: !1
            }));
        }, {
            window: on,
            disposables: this._store
        }));
    }
    static addTarget(t) {
        if (!rQ.isTouchDevice()) return we.None;
        rQ.INSTANCE || (rQ.INSTANCE = u3(new rQ));
        const n = rQ.INSTANCE.targets.push(t);
        return rn(n);
    }
    static ignoreTarget(t) {
        if (!rQ.isTouchDevice()) return we.None;
        rQ.INSTANCE || (rQ.INSTANCE = u3(new rQ));
        const n = rQ.INSTANCE.ignoreTargets.push(t);
        return rn(n);
    }
    static isTouchDevice() {
        return "ontouchstart" in on || navigator.maxTouchPoints > 0;
    }
    dispose() {
        this.handle.clear(), super.dispose();
    }
    onTouchStart(t) {
        const n = Date.now();
        this.handle.clear();
        for(let i = 0, r = t.targetTouches.length; i < r; i++){
            const s = t.targetTouches.item(i);
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
            const o = this.newGestureEvent(ov.Start, s.target);
            o.pageX = s.pageX, o.pageY = s.pageY, this.dispatchEvent(o);
        }
        this.dispatched && (t.preventDefault(), t.stopPropagation(), this.dispatched = !1);
    }
    onTouchEnd(t, n) {
        const i = Date.now(), r = Object.keys(this.activeTouches).length;
        for(let s = 0, o = n.changedTouches.length; s < o; s++){
            const a = n.changedTouches.item(s);
            if (!this.activeTouches.hasOwnProperty(String(a.identifier))) {
                console.warn("move of an UNKNOWN touch", a);
                continue;
            }
            const c = this.activeTouches[a.identifier], l = Date.now() - c.initialTimeStamp;
            if (l < rQ.HOLD_DELAY && Math.abs(c.initialPageX - c.rollingPageX.at(-1)) < 30 && Math.abs(c.initialPageY - c.rollingPageY.at(-1)) < 30) {
                const u = this.newGestureEvent(ov.Tap, c.initialTarget);
                u.pageX = c.rollingPageX.at(-1), u.pageY = c.rollingPageY.at(-1), this.dispatchEvent(u);
            } else if (l >= rQ.HOLD_DELAY && Math.abs(c.initialPageX - c.rollingPageX.at(-1)) < 30 && Math.abs(c.initialPageY - c.rollingPageY.at(-1)) < 30) {
                const u = this.newGestureEvent(ov.Contextmenu, c.initialTarget);
                u.pageX = c.rollingPageX.at(-1), u.pageY = c.rollingPageY.at(-1), this.dispatchEvent(u);
            } else if (r === 1) {
                const u = c.rollingPageX.at(-1), h = c.rollingPageY.at(-1), p = c.rollingTimestamps.at(-1) - c.rollingTimestamps[0], g = u - c.rollingPageX[0], f = h - c.rollingPageY[0], v = [
                    ...this.targets
                ].filter((b)=>c.initialTarget instanceof Node && b.contains(c.initialTarget));
                this.inertia(t, v, i, Math.abs(g) / p, g > 0 ? 1 : -1, u, Math.abs(f) / p, f > 0 ? 1 : -1, h);
            }
            this.dispatchEvent(this.newGestureEvent(ov.End, c.initialTarget)), delete this.activeTouches[a.identifier];
        }
        this.dispatched && (n.preventDefault(), n.stopPropagation(), this.dispatched = !1);
    }
    newGestureEvent(t, n) {
        const i = document.createEvent("CustomEvent");
        return i.initEvent(t, !1, !0), i.initialTarget = n, i.tapCount = 0, i;
    }
    dispatchEvent(t) {
        if (t.type === ov.Tap) {
            const n = new Date().getTime();
            let i = 0;
            n - this._lastSetTapCountTime > rQ.CLEAR_TAP_COUNT_TIME ? i = 1 : i = 2, this._lastSetTapCountTime = n, t.tapCount = i;
        } else (t.type === ov.Change || t.type === ov.Contextmenu) && (this._lastSetTapCountTime = 0);
        if (t.initialTarget instanceof Node) {
            for (const i of this.ignoreTargets)if (i.contains(t.initialTarget)) return;
            const n = [];
            for (const i of this.targets)if (i.contains(t.initialTarget)) {
                let r = 0, s = t.initialTarget;
                for(; s && s !== i;)r++, s = s.parentElement;
                n.push([
                    r,
                    i
                ]);
            }
            n.sort((i, r)=>i[0] - r[0]);
            for (const [i, r] of n)r.dispatchEvent(t), this.dispatched = !0;
        }
    }
    inertia(t, n, i, r, s, o, a, c, l) {
        this.handle.value = Gb(t, ()=>{
            const u = Date.now(), h = u - i;
            let p = 0, g = 0, f = !0;
            r += rQ.SCROLL_FRICTION * h, a += rQ.SCROLL_FRICTION * h, r > 0 && (f = !1, p = s * r * h), a > 0 && (f = !1, g = c * a * h);
            const v = this.newGestureEvent(ov.Change);
            v.translationX = p, v.translationY = g, n.forEach((b)=>b.dispatchEvent(v)), f || this.inertia(t, n, u, r, s, o + p, a, c, l + g);
        });
    }
    onTouchMove(t) {
        const n = Date.now();
        for(let i = 0, r = t.changedTouches.length; i < r; i++){
            const s = t.changedTouches.item(i);
            if (!this.activeTouches.hasOwnProperty(String(s.identifier))) {
                console.warn("end of an UNKNOWN touch", s);
                continue;
            }
            const o = this.activeTouches[s.identifier], a = this.newGestureEvent(ov.Change, o.initialTarget);
            a.translationX = s.pageX - o.rollingPageX.at(-1), a.translationY = s.pageY - o.rollingPageY.at(-1), a.pageX = s.pageX, a.pageY = s.pageY, this.dispatchEvent(a), o.rollingPageX.length > 3 && (o.rollingPageX.shift(), o.rollingPageY.shift(), o.rollingTimestamps.shift()), o.rollingPageX.push(s.pageX), o.rollingPageY.push(s.pageY), o.rollingTimestamps.push(n);
        }
        this.dispatched && (t.preventDefault(), t.stopPropagation(), this.dispatched = !1);
    }
}, zOt.SCROLL_FRICTION = -.005, zOt.HOLD_DELAY = 700, zOt.CLEAR_TAP_COUNT_TIME = 400, ie([
    xo
], zOt, "isTouchDevice", null), zT = zOt;

}
