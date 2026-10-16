import { Ct, Gpi, Lo, Se, U_, Zjr, bt, om, rn, ve, we, x7 } from "./HVr.js";
import { dr } from "./arrays.js";
import { Ci, Sm } from "./color.js";
import { Gb, en, xi } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { cR } from "./numbers.js";
import { Ve, Xge, Xt, Ye, kb, qK } from "./qIc.js";
import { e6, mwe } from "./scrollable.js";
import { YOt, mA } from "./scrollableElement.js";
import { gkg } from "./splitview.css";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var THc, Byi, b5e, crs, EHc, xHc, fR, ZV;
export { Byi, EHc, THc, ZV, b5e, crs, fR, xHc };
var __wakaru_X7_initialized = false;
export function X7() {
if (__wakaru_X7_initialized) return;
__wakaru_X7_initialized = true;
"use strict";
x(), en(), B7(), qK(), mA(), dr(), Sm(), bt(), Se(), cR(), e6(), gr(), gkg(), qK(), THc = {
    separatorBorder: Ci.transparent
}, Byi = 0, b5e = ((e)=>(e[e.Normal = 0] = "Normal", e[e.Low = 1] = "Low", e[e.High = 2] = "High", e))(b5e || {}), crs = class {
    constructor(e, t, n, i){
        this.container = e, this.view = t, this.disposable = i, this._cachedVisibleSize = void 0, typeof n == "number" ? (this._size = n, this._cachedVisibleSize = void 0, e.classList.add("visible")) : (this._size = 0, this._cachedVisibleSize = n.cachedVisibleSize);
    }
    set size(e) {
        this._size = e;
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
    setVisible(e, t) {
        if (e !== this.visible) {
            e ? (this.size = kb(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof t == "number" ? t : this.size, this.size = 0), this.container.classList.toggle("visible", e);
            try {
                this.view.setVisible?.(e);
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
    set enabled(e) {
        this.container.style.pointerEvents = e ? "" : "none";
    }
    layout(e, t) {
        this.layoutContainer(e);
        try {
            this.view.layout(this.size, e, t);
        } catch (n) {
            console.error("Splitview: Failed to layout view"), console.error(n);
        }
    }
    dispose() {
        this.disposable.dispose();
    }
}, EHc = class extends crs {
    layoutContainer(e) {
        this.container.style.top = `${e}px`, this.container.style.height = `${this.size}px`;
    }
}, xHc = class extends crs {
    layoutContainer(e) {
        this.container.style.left = `${e}px`, this.container.style.width = `${this.size}px`;
    }
}, ((e)=>{
    e.Distribute = {
        type: "distribute"
    };
    function t(r) {
        return {
            type: "split",
            index: r
        };
    }
    e.Split = t;
    function n(r) {
        return {
            type: "auto",
            index: r
        };
    }
    e.Auto = n;
    function i(r) {
        return {
            type: "invisible",
            cachedVisibleSize: r
        };
    }
    e.Invisible = i;
})(fR || (fR = {})), ZV = class extends we {
    constructor(e, t = {}){
        super(), this.size = 0, this._contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.state = 0, this._onDidSashChange = this._register(new ve), this._onDidSashReset = this._register(new ve), this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onDidSashChange = this._onDidSashChange.event, this.onDidSashReset = this._onDidSashReset.event, this.orientation = t.orientation ?? 0, this.inverseAltBehavior = t.inverseAltBehavior ?? !1, this.proportionalLayout = t.proportionalLayout ?? !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, this.el = document.createElement("div"), this.el.classList.add("monaco-split-view2"), this.el.classList.add(this.orientation === 0 ? "vertical" : "horizontal"), e.appendChild(this.el), this.sashContainer = Ye(this.el, Ve(".sash-container")), this.viewContainer = Ve(".split-view-container"), this.scrollable = this._register(new mwe({
            forceIntegerValues: !0,
            smoothScrollDuration: 125,
            scheduleAtNextAnimationFrame: (i)=>Gb(xi(this.el), i)
        })), this.scrollableElement = this._register(new YOt(this.viewContainer, {
            vertical: this.orientation === 0 ? t.scrollbarVisibility ?? 1 : 2,
            horizontal: this.orientation === 1 ? t.scrollbarVisibility ?? 1 : 2
        }, this.scrollable));
        const n = this._register(new mp(this.viewContainer, "scroll")).event;
        this._register(n((i)=>{
            const r = this.scrollableElement.getScrollPosition(), s = Math.abs(this.viewContainer.scrollLeft - r.scrollLeft) <= 1 ? void 0 : this.viewContainer.scrollLeft, o = Math.abs(this.viewContainer.scrollTop - r.scrollTop) <= 1 ? void 0 : this.viewContainer.scrollTop;
            (s !== void 0 || o !== void 0) && this.scrollableElement.setScrollPosition({
                scrollLeft: s,
                scrollTop: o
            });
        })), this.onDidScroll = this.scrollableElement.onScroll, this._register(this.onDidScroll((i)=>{
            i.scrollTopChanged && (this.viewContainer.scrollTop = i.scrollTop), i.scrollLeftChanged && (this.viewContainer.scrollLeft = i.scrollLeft);
        })), Ye(this.el, this.scrollableElement.getDomNode()), this.style(t.styles || THc), t.descriptor && (this.size = t.descriptor.size, t.descriptor.views.forEach((i, r)=>{
            const s = om(i.visible) || i.visible ? i.size : {
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
        return this.viewItems.reduce((e, t)=>e + t.minimumSize, 0);
    }
    get maximumSize() {
        return this.length === 0 ? Number.POSITIVE_INFINITY : this.viewItems.reduce((e, t)=>e + t.maximumSize, 0);
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
    set orthogonalStartSash(e) {
        for (const t of this.sashItems)t.sash.orthogonalStartSash = e;
        this._orthogonalStartSash = e;
    }
    set orthogonalEndSash(e) {
        for (const t of this.sashItems)t.sash.orthogonalEndSash = e;
        this._orthogonalEndSash = e;
    }
    get sashes() {
        return this.sashItems.map((e)=>e.sash);
    }
    set startSnappingEnabled(e) {
        this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
    }
    set endSnappingEnabled(e) {
        this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
    }
    style(e) {
        e.separatorBorder.isTransparent() ? (this.el.classList.remove("separator-border"), this.el.style.removeProperty("--separator-border")) : (this.el.classList.add("separator-border"), this.el.style.setProperty("--separator-border", e.separatorBorder.toString()));
    }
    addView(e, t, n = this.viewItems.length, i) {
        this.doAddView(e, t, n, i);
    }
    removeView(e, t) {
        if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
        if (this.state !== 0) throw new Error("Cant modify splitview");
        this.state = 1;
        try {
            t?.type === "auto" && (this.areViewsDistributed() ? t = {
                type: "distribute"
            } : t = {
                type: "split",
                index: t.index
            });
            const n = t?.type === "split" ? this.viewItems[t.index] : void 0, i = this.viewItems.splice(e, 1)[0];
            if (n && (n.size += i.size), this.viewItems.length >= 1) {
                const s = Math.max(e - 1, 0);
                this.sashItems.splice(s, 1)[0].disposable.dispose();
            }
            this.relayout(), t?.type === "distribute" && this.distributeViewSizes();
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
            const e = this.viewItems.splice(0, this.viewItems.length);
            for (const n of e)n.dispose();
            const t = this.sashItems.splice(0, this.sashItems.length);
            for (const n of t)n.disposable.dispose();
            return this.relayout(), e.map((n)=>n.view);
        } finally{
            this.state = 0;
        }
    }
    moveView(e, t) {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        const n = this.getViewCachedVisibleSize(e), i = typeof n > "u" ? this.getViewSize(e) : fR.Invisible(n), r = this.removeView(e);
        this.addView(r, i, t);
    }
    swapViews(e, t) {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        if (e > t) return this.swapViews(t, e);
        const n = this.getViewSize(e), i = this.getViewSize(t), r = this.removeView(t), s = this.removeView(e);
        this.addView(r, n, e), this.addView(s, i, t);
    }
    isViewVisible(e) {
        if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
        return this.viewItems[e].visible;
    }
    setViewVisible(e, t) {
        if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
        this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
    }
    getViewCachedVisibleSize(e) {
        if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
        return this.viewItems[e].cachedVisibleSize;
    }
    layout(e, t) {
        const n = Math.max(this.size, this._contentSize);
        if (this.size = e, this.layoutContext = t, this.proportions) {
            let i = 0;
            for(let r = 0; r < this.viewItems.length; r++){
                const s = this.viewItems[r], o = this.proportions[r];
                typeof o == "number" ? i += o : e -= s.size;
            }
            for(let r = 0; r < this.viewItems.length; r++){
                const s = this.viewItems[r], o = this.proportions[r];
                typeof o == "number" && i > 0 && (s.size = kb(Math.round(o * e / i), s.minimumSize, s.maximumSize));
            }
        } else {
            const i = x7(this.viewItems.length), r = i.filter((o)=>this.viewItems[o].priority === 1), s = i.filter((o)=>this.viewItems[o].priority === 2);
            this.resize(this.viewItems.length - 1, e - n, void 0, r, s);
        }
        this.distributeEmptySpace(), this.layoutViews();
    }
    saveProportions() {
        this.proportionalLayout && this._contentSize > 0 && (this.proportions = this.viewItems.map((e)=>e.proportionalLayout && e.visible ? e.size / this._contentSize : void 0));
    }
    onSashStart({ sash: e, start: t, alt: n }) {
        Byi++;
        for (const o of this.viewItems)o.enabled = !1;
        const i = this.sashItems.findIndex((o)=>o.sash === e), r = U_(Xt(this.el.ownerDocument.body, "keydown", (o)=>s(this.sashDragState.current, o.altKey)), Xt(this.el.ownerDocument.body, "keyup", ()=>s(this.sashDragState.current, !1))), s = (o, a)=>{
            const c = this.viewItems.map((g)=>g.size);
            let l = Number.NEGATIVE_INFINITY, u = Number.POSITIVE_INFINITY;
            if (this.inverseAltBehavior && (a = !a), a) if (i === this.sashItems.length - 1) {
                const f = this.viewItems[i];
                l = (f.minimumSize - f.size) / 2, u = (f.maximumSize - f.size) / 2;
            } else {
                const f = this.viewItems[i + 1];
                l = (f.size - f.maximumSize) / 2, u = (f.size - f.minimumSize) / 2;
            }
            let h, p;
            if (!a) {
                const g = x7(i, -1), f = x7(i + 1, this.viewItems.length), v = g.reduce((P, N)=>P + (this.viewItems[N].minimumSize - c[N]), 0), b = g.reduce((P, N)=>P + (this.viewItems[N].viewMaximumSize - c[N]), 0), y = f.length === 0 ? Number.POSITIVE_INFINITY : f.reduce((P, N)=>P + (c[N] - this.viewItems[N].minimumSize), 0), T = f.length === 0 ? Number.NEGATIVE_INFINITY : f.reduce((P, N)=>P + (c[N] - this.viewItems[N].viewMaximumSize), 0), E = Math.max(v, T), A = Math.min(y, b), R = this.findFirstSnapIndex(g), D = this.findFirstSnapIndex(f);
                if (typeof R == "number") {
                    const P = this.viewItems[R], N = Math.floor(P.viewMinimumSize / 2);
                    h = {
                        index: R,
                        limitDelta: P.visible ? E - N : E + N,
                        size: P.size
                    };
                }
                if (typeof D == "number") {
                    const P = this.viewItems[D], N = Math.floor(P.viewMinimumSize / 2);
                    p = {
                        index: D,
                        limitDelta: P.visible ? A + N : A - N,
                        size: P.size
                    };
                }
            }
            this.sashDragState = {
                start: o,
                current: o,
                index: i,
                sizes: c,
                minDelta: l,
                maxDelta: u,
                alt: a,
                snapBefore: h,
                snapAfter: p,
                disposable: r
            };
        };
        s(t, n);
    }
    onSashChange({ current: e }) {
        const { index: t, start: n, sizes: i, alt: r, minDelta: s, maxDelta: o, snapBefore: a, snapAfter: c } = this.sashDragState;
        this.sashDragState.current = e;
        const l = e - n, u = this.resize(t, l, i, void 0, void 0, s, o, a, c);
        if (r) {
            const h = t === this.sashItems.length - 1, p = this.viewItems.map((T)=>T.size), g = h ? t : t + 1, f = this.viewItems[g], v = f.size - f.maximumSize, b = f.size - f.minimumSize, y = h ? t - 1 : t + 1;
            this.resize(y, -u, p, void 0, void 0, v, b);
        }
        this.distributeEmptySpace(), this.layoutViews();
    }
    onSashEnd(e) {
        Byi--, this._onDidSashChange.fire(e), this.sashDragState.disposable.dispose(), this.sashDragState = void 0, this.saveProportions(), this.updateScrollableElement();
        for (const t of this.viewItems)t.enabled = !0;
    }
    onViewChange(e, t) {
        const n = this.viewItems.indexOf(e);
        n < 0 || n >= this.viewItems.length || (t = typeof t == "number" ? t : e.size, t = kb(t, e.minimumSize, e.maximumSize), this.inverseAltBehavior && n > 0 ? (this.resize(n - 1, Math.floor((e.size - t) / 2)), this.distributeEmptySpace(), this.layoutViews()) : (e.size = t, this.relayout([
            n
        ], void 0)));
    }
    resizeView(e, t) {
        if (!(e < 0 || e >= this.viewItems.length)) {
            if (this.state !== 0) throw new Error("Cant modify splitview");
            this.state = 1;
            try {
                const n = x7(this.viewItems.length).filter((o)=>o !== e), i = [
                    ...n.filter((o)=>this.viewItems[o].priority === 1),
                    e
                ], r = n.filter((o)=>this.viewItems[o].priority === 2), s = this.viewItems[e];
                t = Math.round(t), t = kb(t, s.minimumSize, Math.min(s.maximumSize, this.size)), s.size = t, this.relayout(i, r);
            } finally{
                this.state = 0;
            }
        }
    }
    isViewExpanded(e) {
        if (e < 0 || e >= this.viewItems.length) return !1;
        for (const t of this.viewItems)if (t !== this.viewItems[e] && t.size > t.minimumSize) return !1;
        return !0;
    }
    distributeViewSizes() {
        const e = [];
        let t = 0;
        for (const o of this.viewItems)o.maximumSize - o.minimumSize > 0 && (e.push(o), t += o.size);
        const n = Math.floor(t / e.length);
        for (const o of e)o.size = kb(n, o.minimumSize, o.maximumSize);
        const i = x7(this.viewItems.length), r = i.filter((o)=>this.viewItems[o].priority === 1), s = i.filter((o)=>this.viewItems[o].priority === 2);
        this.relayout(r, s);
    }
    getViewSize(e) {
        return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
    }
    doAddView(e, t, n = this.viewItems.length, i) {
        if (this.state !== 0) throw new Error("Cant modify splitview");
        this.state = 1;
        try {
            const r = Ve(".split-view-view");
            n === this.viewItems.length ? this.viewContainer.appendChild(r) : this.viewContainer.insertBefore(r, this.viewContainer.children.item(n));
            const s = e.onDidChange((h)=>this.onViewChange(l, h)), o = rn(()=>r.remove()), a = U_(s, o);
            let c;
            typeof t == "number" ? c = t : (t.type === "auto" && (this.areViewsDistributed() ? t = {
                type: "distribute"
            } : t = {
                type: "split",
                index: t.index
            }), t.type === "split" ? c = this.getViewSize(t.index) / 2 : t.type === "invisible" ? c = {
                cachedVisibleSize: t.cachedVisibleSize
            } : c = e.minimumSize);
            const l = this.orientation === 0 ? new EHc(r, e, c, a) : new xHc(r, e, c, a);
            if (this.viewItems.splice(n, 0, l), this.viewItems.length > 1) {
                const h = {
                    orthogonalStartSash: this.orthogonalStartSash,
                    orthogonalEndSash: this.orthogonalEndSash
                }, p = this.orientation === 0 ? new Xge(this.sashContainer, {
                    getHorizontalSashTop: (P)=>this.getSashPosition(P),
                    getHorizontalSashWidth: this.getSashOrthogonalSize
                }, {
                    ...h,
                    orientation: 1
                }) : new Xge(this.sashContainer, {
                    getVerticalSashLeft: (P)=>this.getSashPosition(P),
                    getVerticalSashHeight: this.getSashOrthogonalSize
                }, {
                    ...h,
                    orientation: 0
                }), g = this.orientation === 0 ? (P)=>({
                        sash: p,
                        start: P.startY,
                        current: P.currentY,
                        alt: P.altKey
                    }) : (P)=>({
                        sash: p,
                        start: P.startX,
                        current: P.currentX,
                        alt: P.altKey
                    }), v = Ct.map(p.onDidStart, g)(this.onSashStart, this), y = Ct.map(p.onDidChange, g)(this.onSashChange, this), E = Ct.map(p.onDidEnd, ()=>this.sashItems.findIndex((P)=>P.sash === p))(this.onSashEnd, this), A = p.onDidReset(()=>{
                    const P = this.sashItems.findIndex(($)=>$.sash === p), N = x7(P, -1), O = x7(P + 1, this.viewItems.length), F = this.findFirstSnapIndex(N), H = this.findFirstSnapIndex(O);
                    typeof F == "number" && !this.viewItems[F].visible || typeof H == "number" && !this.viewItems[H].visible || this._onDidSashReset.fire(P);
                }), R = U_(v, y, E, A, p), D = {
                    sash: p,
                    disposable: R
                };
                this.sashItems.splice(n - 1, 0, D);
            }
            r.appendChild(e.element);
            let u;
            typeof t != "number" && t.type === "split" && (u = [
                t.index
            ]), i || this.relayout([
                n
            ], u), !i && typeof t != "number" && t.type === "distribute" && this.distributeViewSizes();
        } finally{
            this.state = 0;
        }
    }
    relayout(e, t) {
        const n = this.viewItems.reduce((i, r)=>i + r.size, 0);
        this.resize(this.viewItems.length - 1, this.size - n, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
    }
    resize(e, t, n = this.viewItems.map((l)=>l.size), i, r, s = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, c) {
        if (e < 0 || e >= this.viewItems.length) return 0;
        const l = x7(e, -1), u = x7(e + 1, this.viewItems.length);
        if (r) for (const D of r)Zjr(l, D), Zjr(u, D);
        if (i) for (const D of i)Gpi(l, D), Gpi(u, D);
        const h = l.map((D)=>this.viewItems[D]), p = l.map((D)=>n[D]), g = u.map((D)=>this.viewItems[D]), f = u.map((D)=>n[D]), v = l.reduce((D, P)=>D + (this.viewItems[P].minimumSize - n[P]), 0), b = l.reduce((D, P)=>D + (this.viewItems[P].maximumSize - n[P]), 0), y = u.length === 0 ? Number.POSITIVE_INFINITY : u.reduce((D, P)=>D + (n[P] - this.viewItems[P].minimumSize), 0), T = u.length === 0 ? Number.NEGATIVE_INFINITY : u.reduce((D, P)=>D + (n[P] - this.viewItems[P].maximumSize), 0), E = Math.max(v, T, s), A = Math.min(y, b, o);
        let R = !1;
        if (a) {
            const D = this.viewItems[a.index], P = t >= a.limitDelta;
            R = P !== D.visible, D.setVisible(P, a.size);
        }
        if (!R && c) {
            const D = this.viewItems[c.index], P = t < c.limitDelta;
            R = P !== D.visible, D.setVisible(P, c.size);
        }
        if (R) return this.resize(e, t, n, i, r, s, o);
        t = kb(t, E, A);
        for(let D = 0, P = t; D < h.length; D++){
            const N = h[D], O = kb(p[D] + P, N.minimumSize, N.maximumSize), F = O - p[D];
            P -= F, N.size = O;
        }
        for(let D = 0, P = t; D < g.length; D++){
            const N = g[D], O = kb(f[D] - P, N.minimumSize, N.maximumSize), F = O - f[D];
            P += F, N.size = O;
        }
        return t;
    }
    distributeEmptySpace(e) {
        const t = this.viewItems.reduce((o, a)=>o + a.size, 0);
        let n = this.size - t;
        const i = x7(this.viewItems.length - 1, -1), r = i.filter((o)=>this.viewItems[o].priority === 1), s = i.filter((o)=>this.viewItems[o].priority === 2);
        for (const o of s)Zjr(i, o);
        for (const o of r)Gpi(i, o);
        typeof e == "number" && Gpi(i, e);
        for(let o = 0; n !== 0 && o < i.length; o++){
            const a = this.viewItems[i[o]], c = kb(a.size + n, a.minimumSize, a.maximumSize), l = c - a.size;
            n -= l, a.size = c;
        }
    }
    layoutViews() {
        this._contentSize = this.viewItems.reduce((t, n)=>t + n.size, 0);
        let e = 0;
        for (const t of this.viewItems)t.layout(e, this.layoutContext), e += t.size;
        this.sashItems.forEach((t)=>t.sash.layout()), this.updateSashEnablement(), Byi === 0 && this.updateScrollableElement();
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
        let e = !1;
        const t = this.viewItems.map((a)=>e = a.size - a.minimumSize > 0 || e);
        e = !1;
        const n = this.viewItems.map((a)=>e = a.maximumSize - a.size > 0 || e), i = [
            ...this.viewItems
        ].reverse();
        e = !1;
        const r = i.map((a)=>e = a.size - a.minimumSize > 0 || e).reverse();
        e = !1;
        const s = i.map((a)=>e = a.maximumSize - a.size > 0 || e).reverse();
        let o = 0;
        for(let a = 0; a < this.sashItems.length; a++){
            const { sash: c } = this.sashItems[a], l = this.viewItems[a];
            o += l.size;
            const u = !(t[a] && s[a + 1]), h = !(n[a] && r[a + 1]);
            if (u && h) {
                const p = x7(a, -1), g = x7(a + 1, this.viewItems.length), f = this.findFirstSnapIndex(p), v = this.findFirstSnapIndex(g), b = typeof f == "number" && !this.viewItems[f].visible, y = typeof v == "number" && !this.viewItems[v].visible;
                b && r[a] && (o > 0 || this.startSnappingEnabled) ? c.state = 1 : y && t[a] && (o < this._contentSize || this.endSnappingEnabled) ? c.state = 2 : c.state = 0;
            } else u && !h ? c.state = 1 : !u && h ? c.state = 2 : c.state = 3;
        }
    }
    getSashPosition(e) {
        let t = 0;
        for(let n = 0; n < this.sashItems.length; n++)if (t += this.viewItems[n].size, this.sashItems[n].sash === e) return t;
        return 0;
    }
    findFirstSnapIndex(e) {
        for (const t of e){
            const n = this.viewItems[t];
            if (n.visible && n.snap) return t;
        }
        for (const t of e){
            const n = this.viewItems[t];
            if (n.visible && n.maximumSize - n.minimumSize > 0) return;
            if (!n.visible && n.snap) return t;
        }
    }
    areViewsDistributed() {
        let e, t;
        for (const n of this.viewItems)if (e = e === void 0 ? n.size : Math.min(e, n.size), t = t === void 0 ? n.size : Math.max(t, n.size), t - e > 2) return !1;
        return !0;
    }
    dispose() {
        this.sashDragState?.disposable.dispose(), Lo(this.viewItems), this.viewItems = [], this.sashItems.forEach((e)=>e.disposable.dispose()), this.sashItems = [], super.dispose();
    }
};

}
