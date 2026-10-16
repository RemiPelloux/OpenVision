import { Bpr, Dte, Gt, N1, Nc, Ov, Pn, Qe, U0o, en, st, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { _b, ls } from "./color.js";
import { Hn, Ix, ws } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { b4 } from "./numbers.js";
import { coe, rHe } from "./scrollable.js";
import { E7, Tsi } from "./scrollableElement.js";
import { XOy } from "./splitview.css";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { I5e, Ii, f1, fr, kwe, li } from "./ze.js";
var _Kd, LEr, GBt, Ozo, bKd, yKd, A7, uRe;
export { A7, GBt, LEr, Ozo, _Kd, bKd, uRe, yKd };
var __wakaru_dRe_initialized = false;
export function dRe() {
if (__wakaru_dRe_initialized) return;
__wakaru_dRe_initialized = true;
"use strict";
E(), Hn(), voe(), kwe(), E7(), bo(), _b(), Gt(), Qe(), b4(), coe(), To(), XOy(), kwe(), _Kd = {
    separatorBorder: ls.transparent
}, LEr = 0, GBt = ((t)=>(t[t.Normal = 0] = "Normal", t[t.Low = 1] = "Low", t[t.High = 2] = "High", t))(GBt || {}), Ozo = class {
    constructor(t, e, n, i){
        this.container = t, this.view = e, this.disposable = i, this._cachedVisibleSize = void 0, typeof n == "number" ? (this._size = n, this._cachedVisibleSize = void 0, t.classList.add("visible")) : (this._size = 0, this._cachedVisibleSize = n.cachedVisibleSize);
    }
    set size(t) {
        this._size = t;
    }
    get size() {
        return this._size;
    }
    get cachedVisibleSize() {
        return this._cachedVisibleSize;
    }
    get visible() {
        return typeof this._cachedVisibleSize > "u";
    }
    setVisible(t, e) {
        if (t !== this.visible) {
            t ? (this.size = f1(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof e == "number" ? e : this.size, this.size = 0), this.container.classList.toggle("visible", t);
            try {
                this.view.setVisible?.(t);
            } catch (n) {
                console.error("Splitview: Failed to set visible view"), console.error(n);
            }
        }
    }
    get minimumSize() {
        return this.visible ? this.view.minimumSize : 0;
    }
    get viewMinimumSize() {
        return this.view.minimumSize;
    }
    get maximumSize() {
        return this.visible ? this.view.maximumSize : 0;
    }
    get viewMaximumSize() {
        return this.view.maximumSize;
    }
    get priority() {
        return this.view.priority;
    }
    get proportionalLayout() {
        return this.view.proportionalLayout ?? !0;
    }
    get snap() {
        return !!this.view.snap;
    }
    set enabled(t) {
        this.container.style.pointerEvents = t ? "" : "none";
    }
    layout(t, e) {
        this.layoutContainer(t);
        try {
            this.view.layout(this.size, t, e);
        } catch (n) {
            console.error("Splitview: Failed to layout view"), console.error(n);
        }
    }
    dispose() {
        this.disposable.dispose();
    }
}, bKd = class extends Ozo {
    layoutContainer(t) {
        this.container.style.top = `${t}px`, this.container.style.height = `${this.size}px`;
    }
}, yKd = class extends Ozo {
    layoutContainer(t) {
        this.container.style.left = `${t}px`, this.container.style.width = `${this.size}px`;
    }
}, ((t)=>{
    t.Distribute = {
        type: "distribute"
    };
    function e(r) {
        return {
            type: "split",
            index: r
        };
    }
    t.Split = e;
    function n(r) {
        return {
            type: "auto",
            index: r
        };
    }
    t.Auto = n;
    function i(r) {
        return {
            type: "invisible",
            cachedVisibleSize: r
        };
    }
    t.Invisible = i;
})(A7 || (A7 = {})), uRe = class extends st {
    constructor(t, e = {}){
        super(), this.size = 0, this._contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.state = 0, this._onDidSashChange = this._register(new tt), this._onDidSashReset = this._register(new tt), this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onDidSashChange = this._onDidSashChange.event, this.onDidSashReset = this._onDidSashReset.event, this.orientation = e.orientation ?? 0, this.inverseAltBehavior = e.inverseAltBehavior ?? !1, this.proportionalLayout = e.proportionalLayout ?? !0, this.getSashOrthogonalSize = e.getSashOrthogonalSize, this.el = document.createElement("div"), this.el.classList.add("monaco-split-view2"), this.el.classList.add(this.orientation === 0 ? "vertical" : "horizontal"), t.appendChild(this.el), this.sashContainer = fr(this.el, Ii(".sash-container")), this.viewContainer = Ii(".split-view-container"), this.scrollable = this._register(new rHe({
            forceIntegerValues: !0,
            smoothScrollDuration: 125,
            scheduleAtNextAnimationFrame: (i)=>Ix(ws(this.el), i)
        })), this.scrollableElement = this._register(new Tsi(this.viewContainer, {
            vertical: this.orientation === 0 ? e.scrollbarVisibility ?? 1 : 2,
            horizontal: this.orientation === 1 ? e.scrollbarVisibility ?? 1 : 2
        }, this.scrollable));
        const n = this._register(new Gg(this.viewContainer, "scroll")).event;
        this._register(n((i)=>{
            const r = this.scrollableElement.getScrollPosition(), s = Math.abs(this.viewContainer.scrollLeft - r.scrollLeft) <= 1 ? void 0 : this.viewContainer.scrollLeft, o = Math.abs(this.viewContainer.scrollTop - r.scrollTop) <= 1 ? void 0 : this.viewContainer.scrollTop;
            (s !== void 0 || o !== void 0) && this.scrollableElement.setScrollPosition({
                scrollLeft: s,
                scrollTop: o
            });
        })), this.onDidScroll = this.scrollableElement.onScroll, this._register(this.onDidScroll((i)=>{
            i.scrollTopChanged && (this.viewContainer.scrollTop = i.scrollTop), i.scrollLeftChanged && (this.viewContainer.scrollLeft = i.scrollLeft);
        })), fr(this.el, this.scrollableElement.getDomNode()), this.style(e.styles || _Kd), e.descriptor && (this.size = e.descriptor.size, e.descriptor.views.forEach((i, r)=>{
            const s = Ov(i.visible) || i.visible ? i.size : {
                type: "invisible",
                cachedVisibleSize: i.size
            }, o = i.view;
            this.doAddView(o, s, r, !0);
        }), this._contentSize = this.viewItems.reduce((i, r)=>i + r.size, 0), this.saveProportions());
    }
    get contentSize() {
        return this._contentSize;
    }
    get length() {
        return this.viewItems.length;
    }
    get minimumSize() {
        return this.viewItems.reduce((t, e)=>t + e.minimumSize, 0);
    }
    get maximumSize() {
        return this.length === 0 ? Number.POSITIVE_INFINITY : this.viewItems.reduce((t, e)=>t + e.maximumSize, 0);
    }
    get orthogonalStartSash() {
        return this._orthogonalStartSash;
    }
    get orthogonalEndSash() {
        return this._orthogonalEndSash;
    }
    get startSnappingEnabled() {
        return this._startSnappingEnabled;
    }
    get endSnappingEnabled() {
        return this._endSnappingEnabled;
    }
    set orthogonalStartSash(t) {
        for (const e of this.sashItems)e.sash.orthogonalStartSash = t;
        this._orthogonalStartSash = t;
    }
    set orthogonalEndSash(t) {
        for (const e of this.sashItems)e.sash.orthogonalEndSash = t;
        this._orthogonalEndSash = t;
    }
    get sashes() {
        return this.sashItems.map((t)=>t.sash);
    }
    set startSnappingEnabled(t) {
        this._startSnappingEnabled !== t && (this._startSnappingEnabled = t, this.updateSashEnablement());
    }
    set endSnappingEnabled(t) {
        this._endSnappingEnabled !== t && (this._endSnappingEnabled = t, this.updateSashEnablement());
    }
    style(t) {
        t.separatorBorder.isTransparent() ? (this.el.classList.remove("separator-border"), this.el.style.removeProperty("--separator-border")) : (this.el.classList.add("separator-border"), this.el.style.setProperty("--separator-border", t.separatorBorder.toString()));
    }
    addView(t, e, n = this.viewItems.length, i) {
        this.doAddView(t, e, n, i);
    }
    removeView(t, e) {
        if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
        if (this.state !== 0) throw new Error("Cant modify splitview");
        this.state = 1;
        try {
            e?.type === "auto" && (this.areViewsDistributed() ? e = {
                type: "distribute"
            } : e = {
                type: "split",
                index: e.index
            });
            const n = e?.type === "split" ? this.viewItems[e.index] : void 0, i = this.viewItems.splice(t, 1)[0];
            if (n && (n.size += i.size), this.viewItems.length >= 1) {
                const s = Math.max(t - 1, 0);
                this.sashItems.splice(s, 1)[0].disposable.dispose();
            }
            this.relayout(), e?.type === "distribute" && this.distributeViewSizes();
            const r = i.view;
            return i.dispose(), r;
        } finally{
            this.state = 0;
        }
    }
    removeAllViews() {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        this.state = 1;
        try {
            const t = this.viewItems.splice(0, this.viewItems.length);
            for (const n of t)n.dispose();
            const e = this.sashItems.splice(0, this.sashItems.length);
            for (const n of e)n.disposable.dispose();
            return this.relayout(), t.map((n)=>n.view);
        } finally{
            this.state = 0;
        }
    }
    moveView(t, e) {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        const n = this.getViewCachedVisibleSize(t), i = typeof n > "u" ? this.getViewSize(t) : A7.Invisible(n), r = this.removeView(t);
        this.addView(r, i, e);
    }
    swapViews(t, e) {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        if (t > e) return this.swapViews(e, t);
        const n = this.getViewSize(t), i = this.getViewSize(e), r = this.removeView(e), s = this.removeView(t);
        this.addView(r, n, t), this.addView(s, i, e);
    }
    isViewVisible(t) {
        if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
        return this.viewItems[t].visible;
    }
    setViewVisible(t, e) {
        if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
        this.viewItems[t].setVisible(e), this.distributeEmptySpace(t), this.layoutViews(), this.saveProportions();
    }
    getViewCachedVisibleSize(t) {
        if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
        return this.viewItems[t].cachedVisibleSize;
    }
    layout(t, e) {
        const n = Math.max(this.size, this._contentSize);
        if (this.size = t, this.layoutContext = e, this.proportions) {
            let i = 0;
            for(let r = 0; r < this.viewItems.length; r++){
                const s = this.viewItems[r], o = this.proportions[r];
                typeof o == "number" ? i += o : t -= s.size;
            }
            for(let r = 0; r < this.viewItems.length; r++){
                const s = this.viewItems[r], o = this.proportions[r];
                typeof o == "number" && i > 0 && (s.size = f1(Math.round(o * t / i), s.minimumSize, s.maximumSize));
            }
        } else {
            const i = Dte(this.viewItems.length), r = i.filter((o)=>this.viewItems[o].priority === 1), s = i.filter((o)=>this.viewItems[o].priority === 2);
            this.resize(this.viewItems.length - 1, t - n, void 0, r, s);
        }
        this.distributeEmptySpace(), this.layoutViews();
    }
    saveProportions() {
        this.proportionalLayout && this._contentSize > 0 && (this.proportions = this.viewItems.map((t)=>t.proportionalLayout && t.visible ? t.size / this._contentSize : void 0));
    }
    onSashStart({ sash: t, start: e, alt: n }) {
        LEr++;
        for (const o of this.viewItems)o.enabled = !1;
        const i = this.sashItems.findIndex((o)=>o.sash === t), r = N1(li(this.el.ownerDocument.body, "keydown", (o)=>s(this.sashDragState.current, o.altKey)), li(this.el.ownerDocument.body, "keyup", ()=>s(this.sashDragState.current, !1))), s = (o, a)=>{
            const l = this.viewItems.map((p)=>p.size);
            let c = Number.NEGATIVE_INFINITY, u = Number.POSITIVE_INFINITY;
            if (this.inverseAltBehavior && (a = !a), a) if (i === this.sashItems.length - 1) {
                const g = this.viewItems[i];
                c = (g.minimumSize - g.size) / 2, u = (g.maximumSize - g.size) / 2;
            } else {
                const g = this.viewItems[i + 1];
                c = (g.size - g.maximumSize) / 2, u = (g.size - g.minimumSize) / 2;
            }
            let d, h;
            if (!a) {
                const p = Dte(i, -1), g = Dte(i + 1, this.viewItems.length), f = p.reduce((I, A)=>I + (this.viewItems[A].minimumSize - l[A]), 0), _ = p.reduce((I, A)=>I + (this.viewItems[A].viewMaximumSize - l[A]), 0), b = g.length === 0 ? Number.POSITIVE_INFINITY : g.reduce((I, A)=>I + (l[A] - this.viewItems[A].minimumSize), 0), y = g.length === 0 ? Number.NEGATIVE_INFINITY : g.reduce((I, A)=>I + (l[A] - this.viewItems[A].viewMaximumSize), 0), S = Math.max(f, y), k = Math.min(b, _), C = this.findFirstSnapIndex(p), T = this.findFirstSnapIndex(g);
                if (typeof C == "number") {
                    const I = this.viewItems[C], A = Math.floor(I.viewMinimumSize / 2);
                    d = {
                        index: C,
                        limitDelta: I.visible ? S - A : S + A,
                        size: I.size
                    };
                }
                if (typeof T == "number") {
                    const I = this.viewItems[T], A = Math.floor(I.viewMinimumSize / 2);
                    h = {
                        index: T,
                        limitDelta: I.visible ? k + A : k - A,
                        size: I.size
                    };
                }
            }
            this.sashDragState = {
                start: o,
                current: o,
                index: i,
                sizes: l,
                minDelta: c,
                maxDelta: u,
                alt: a,
                snapBefore: d,
                snapAfter: h,
                disposable: r
            };
        };
        s(e, n);
    }
    onSashChange({ current: t }) {
        const { index: e, start: n, sizes: i, alt: r, minDelta: s, maxDelta: o, snapBefore: a, snapAfter: l } = this.sashDragState;
        this.sashDragState.current = t;
        const c = t - n, u = this.resize(e, c, i, void 0, void 0, s, o, a, l);
        if (r) {
            const d = e === this.sashItems.length - 1, h = this.viewItems.map((y)=>y.size), p = d ? e : e + 1, g = this.viewItems[p], f = g.size - g.maximumSize, _ = g.size - g.minimumSize, b = d ? e - 1 : e + 1;
            this.resize(b, -u, h, void 0, void 0, f, _);
        }
        this.distributeEmptySpace(), this.layoutViews();
    }
    onSashEnd(t) {
        LEr--, this._onDidSashChange.fire(t), this.sashDragState.disposable.dispose(), this.sashDragState = void 0, this.saveProportions(), this.updateScrollableElement();
        for (const e of this.viewItems)e.enabled = !0;
    }
    onViewChange(t, e) {
        const n = this.viewItems.indexOf(t);
        n < 0 || n >= this.viewItems.length || (e = typeof e == "number" ? e : t.size, e = f1(e, t.minimumSize, t.maximumSize), this.inverseAltBehavior && n > 0 ? (this.resize(n - 1, Math.floor((t.size - e) / 2)), this.distributeEmptySpace(), this.layoutViews()) : (t.size = e, this.relayout([
            n
        ], void 0)));
    }
    resizeView(t, e) {
        if (!(t < 0 || t >= this.viewItems.length)) {
            if (this.state !== 0) throw new Error("Cant modify splitview");
            this.state = 1;
            try {
                const n = Dte(this.viewItems.length).filter((o)=>o !== t), i = [
                    ...n.filter((o)=>this.viewItems[o].priority === 1),
                    t
                ], r = n.filter((o)=>this.viewItems[o].priority === 2), s = this.viewItems[t];
                e = Math.round(e), e = f1(e, s.minimumSize, Math.min(s.maximumSize, this.size)), s.size = e, this.relayout(i, r);
            } finally{
                this.state = 0;
            }
        }
    }
    isViewExpanded(t) {
        if (t < 0 || t >= this.viewItems.length) return !1;
        for (const e of this.viewItems)if (e !== this.viewItems[t] && e.size > e.minimumSize) return !1;
        return !0;
    }
    distributeViewSizes() {
        const t = [];
        let e = 0;
        for (const o of this.viewItems)o.maximumSize - o.minimumSize > 0 && (t.push(o), e += o.size);
        const n = Math.floor(e / t.length);
        for (const o of t)o.size = f1(n, o.minimumSize, o.maximumSize);
        const i = Dte(this.viewItems.length), r = i.filter((o)=>this.viewItems[o].priority === 1), s = i.filter((o)=>this.viewItems[o].priority === 2);
        this.relayout(r, s);
    }
    getViewSize(t) {
        return t < 0 || t >= this.viewItems.length ? -1 : this.viewItems[t].size;
    }
    doAddView(t, e, n = this.viewItems.length, i) {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        this.state = 1;
        try {
            const r = Ii(".split-view-view");
            n === this.viewItems.length ? this.viewContainer.appendChild(r) : this.viewContainer.insertBefore(r, this.viewContainer.children.item(n));
            const s = t.onDidChange((d)=>this.onViewChange(c, d)), o = Pn(()=>r.remove()), a = N1(s, o);
            let l;
            typeof e == "number" ? l = e : (e.type === "auto" && (this.areViewsDistributed() ? e = {
                type: "distribute"
            } : e = {
                type: "split",
                index: e.index
            }), e.type === "split" ? l = this.getViewSize(e.index) / 2 : e.type === "invisible" ? l = {
                cachedVisibleSize: e.cachedVisibleSize
            } : l = t.minimumSize);
            const c = this.orientation === 0 ? new bKd(r, t, l, a) : new yKd(r, t, l, a);
            if (this.viewItems.splice(n, 0, c), this.viewItems.length > 1) {
                const d = {
                    orthogonalStartSash: this.orthogonalStartSash,
                    orthogonalEndSash: this.orthogonalEndSash
                }, h = this.orientation === 0 ? new I5e(this.sashContainer, {
                    getHorizontalSashTop: (I)=>this.getSashPosition(I),
                    getHorizontalSashWidth: this.getSashOrthogonalSize
                }, {
                    ...d,
                    orientation: 1
                }) : new I5e(this.sashContainer, {
                    getVerticalSashLeft: (I)=>this.getSashPosition(I),
                    getVerticalSashHeight: this.getSashOrthogonalSize
                }, {
                    ...d,
                    orientation: 0
                }), p = this.orientation === 0 ? (I)=>({
                        sash: h,
                        start: I.startY,
                        current: I.currentY,
                        alt: I.altKey
                    }) : (I)=>({
                        sash: h,
                        start: I.startX,
                        current: I.currentX,
                        alt: I.altKey
                    }), f = en.map(h.onDidStart, p)(this.onSashStart, this), b = en.map(h.onDidChange, p)(this.onSashChange, this), S = en.map(h.onDidEnd, ()=>this.sashItems.findIndex((I)=>I.sash === h))(this.onSashEnd, this), k = h.onDidReset(()=>{
                    const I = this.sashItems.findIndex((N)=>N.sash === h), A = Dte(I, -1), P = Dte(I + 1, this.viewItems.length), M = this.findFirstSnapIndex(A), O = this.findFirstSnapIndex(P);
                    typeof M == "number" && !this.viewItems[M].visible || typeof O == "number" && !this.viewItems[O].visible || this._onDidSashReset.fire(I);
                }), C = N1(f, b, S, k, h), T = {
                    sash: h,
                    disposable: C
                };
                this.sashItems.splice(n - 1, 0, T);
            }
            r.appendChild(t.element);
            let u;
            typeof e != "number" && e.type === "split" && (u = [
                e.index
            ]), i || this.relayout([
                n
            ], u), !i && typeof e != "number" && e.type === "distribute" && this.distributeViewSizes();
        } finally{
            this.state = 0;
        }
    }
    relayout(t, e) {
        const n = this.viewItems.reduce((i, r)=>i + r.size, 0);
        this.resize(this.viewItems.length - 1, this.size - n, void 0, t, e), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
    }
    resize(t, e, n = this.viewItems.map((c)=>c.size), i, r, s = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, l) {
        if (t < 0 || t >= this.viewItems.length) return 0;
        const c = Dte(t, -1), u = Dte(t + 1, this.viewItems.length);
        if (r) for (const T of r)U0o(c, T), U0o(u, T);
        if (i) for (const T of i)Bpr(c, T), Bpr(u, T);
        const d = c.map((T)=>this.viewItems[T]), h = c.map((T)=>n[T]), p = u.map((T)=>this.viewItems[T]), g = u.map((T)=>n[T]), f = c.reduce((T, I)=>T + (this.viewItems[I].minimumSize - n[I]), 0), _ = c.reduce((T, I)=>T + (this.viewItems[I].maximumSize - n[I]), 0), b = u.length === 0 ? Number.POSITIVE_INFINITY : u.reduce((T, I)=>T + (n[I] - this.viewItems[I].minimumSize), 0), y = u.length === 0 ? Number.NEGATIVE_INFINITY : u.reduce((T, I)=>T + (n[I] - this.viewItems[I].maximumSize), 0), S = Math.max(f, y, s), k = Math.min(b, _, o);
        let C = !1;
        if (a) {
            const T = this.viewItems[a.index], I = e >= a.limitDelta;
            C = I !== T.visible, T.setVisible(I, a.size);
        }
        if (!C && l) {
            const T = this.viewItems[l.index], I = e < l.limitDelta;
            C = I !== T.visible, T.setVisible(I, l.size);
        }
        if (C) return this.resize(t, e, n, i, r, s, o);
        e = f1(e, S, k);
        for(let T = 0, I = e; T < d.length; T++){
            const A = d[T], P = f1(h[T] + I, A.minimumSize, A.maximumSize), M = P - h[T];
            I -= M, A.size = P;
        }
        for(let T = 0, I = e; T < p.length; T++){
            const A = p[T], P = f1(g[T] - I, A.minimumSize, A.maximumSize), M = P - g[T];
            I += M, A.size = P;
        }
        return e;
    }
    distributeEmptySpace(t) {
        const e = this.viewItems.reduce((o, a)=>o + a.size, 0);
        let n = this.size - e;
        const i = Dte(this.viewItems.length - 1, -1), r = i.filter((o)=>this.viewItems[o].priority === 1), s = i.filter((o)=>this.viewItems[o].priority === 2);
        for (const o of s)U0o(i, o);
        for (const o of r)Bpr(i, o);
        typeof t == "number" && Bpr(i, t);
        for(let o = 0; n !== 0 && o < i.length; o++){
            const a = this.viewItems[i[o]], l = f1(a.size + n, a.minimumSize, a.maximumSize), c = l - a.size;
            n -= c, a.size = l;
        }
    }
    layoutViews() {
        this._contentSize = this.viewItems.reduce((e, n)=>e + n.size, 0);
        let t = 0;
        for (const e of this.viewItems)e.layout(t, this.layoutContext), t += e.size;
        this.sashItems.forEach((e)=>e.sash.layout()), this.updateSashEnablement(), LEr === 0 && this.updateScrollableElement();
    }
    updateScrollableElement() {
        this.orientation === 0 ? this.scrollableElement.setScrollDimensions({
            height: this.size,
            scrollHeight: this._contentSize
        }) : this.scrollableElement.setScrollDimensions({
            width: this.size,
            scrollWidth: this._contentSize
        });
    }
    updateSashEnablement() {
        let t = !1;
        const e = this.viewItems.map((a)=>t = a.size - a.minimumSize > 0 || t);
        t = !1;
        const n = this.viewItems.map((a)=>t = a.maximumSize - a.size > 0 || t), i = [
            ...this.viewItems
        ].reverse();
        t = !1;
        const r = i.map((a)=>t = a.size - a.minimumSize > 0 || t).reverse();
        t = !1;
        const s = i.map((a)=>t = a.maximumSize - a.size > 0 || t).reverse();
        let o = 0;
        for(let a = 0; a < this.sashItems.length; a++){
            const { sash: l } = this.sashItems[a], c = this.viewItems[a];
            o += c.size;
            const u = !(e[a] && s[a + 1]), d = !(n[a] && r[a + 1]);
            if (u && d) {
                const h = Dte(a, -1), p = Dte(a + 1, this.viewItems.length), g = this.findFirstSnapIndex(h), f = this.findFirstSnapIndex(p), _ = typeof g == "number" && !this.viewItems[g].visible, b = typeof f == "number" && !this.viewItems[f].visible;
                _ && r[a] && (o > 0 || this.startSnappingEnabled) ? l.state = 1 : b && e[a] && (o < this._contentSize || this.endSnappingEnabled) ? l.state = 2 : l.state = 0;
            } else u && !d ? l.state = 1 : !u && d ? l.state = 2 : l.state = 3;
        }
    }
    getSashPosition(t) {
        let e = 0;
        for(let n = 0; n < this.sashItems.length; n++)if (e += this.viewItems[n].size, this.sashItems[n].sash === t) return e;
        return 0;
    }
    findFirstSnapIndex(t) {
        for (const e of t){
            const n = this.viewItems[e];
            if (n.visible && n.snap) return e;
        }
        for (const e of t){
            const n = this.viewItems[e];
            if (n.visible && n.maximumSize - n.minimumSize > 0) return;
            if (!n.visible && n.snap) return e;
        }
    }
    areViewsDistributed() {
        let t, e;
        for (const n of this.viewItems)if (t = t === void 0 ? n.size : Math.min(t, n.size), e = e === void 0 ? n.size : Math.max(e, n.size), e - t > 2) return !1;
        return !0;
    }
    dispose() {
        this.sashDragState?.disposable.dispose(), Nc(this.viewItems), this.viewItems = [], this.sashItems.forEach((t)=>t.disposable.dispose()), this.sashItems = [], super.dispose();
    }
};

}
