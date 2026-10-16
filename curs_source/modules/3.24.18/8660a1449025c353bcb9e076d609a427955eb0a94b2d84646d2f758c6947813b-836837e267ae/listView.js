import { Ec, Ei, Gt, Nt, Pn, Qe, Vn, en, jpr, kk, st, tt, xh } from "./Iwo.js";
import { bo } from "./arrays.js";
import { II, qn } from "./async.js";
import { SM } from "./decorators.js";
import { fwe, r6 } from "./dnd.js";
import { Jfn } from "./dnd_2.js";
import { Hn, Ix, Ukr, ws } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { b4 } from "./numbers.js";
import { SGd, mNy } from "./rangeMap.js";
import { IY, sTr } from "./range_2.js";
import { gNy, kGd } from "./rowCache.js";
import { coe, rHe } from "./scrollable.js";
import { E7, Tsi } from "./scrollableElement.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { $u, JE, Lkr, O5d, Qfn, RC, Rii, f1, fGo, ggn, k9t, li, sl, vNy } from "./ze.js";
var Nyt, T5e, Lyt, wGd, vGo, CGd, i_e, TGd;
export { CGd, Lyt, Nyt, T5e, TGd, i_e, vGo, wGd };
var __wakaru_oTr_initialized = false;
export function oTr() {
if (__wakaru_oTr_initialized) return;
__wakaru_oTr_initialized = true;
"use strict";
E(), fwe(), Hn(), voe(), fO(), E7(), bo(), qn(), SM(), Gt(), Qe(), sTr(), coe(), mNy(), gNy(), Ei(), b4(), Jfn(), Nyt = {
    CurrentDragAndDropData: void 0
}, T5e = {
    useShadows: !0,
    verticalScrollMode: 1,
    setRowLineHeight: !0,
    setRowHeight: !0,
    supportDynamicHeights: !1,
    dnd: {
        getDragElements (t) {
            return [
                t
            ];
        },
        getDragURI () {
            return null;
        },
        onDragStart () {},
        onDragOver () {
            return !1;
        },
        drop () {},
        dispose () {}
    },
    horizontalScrolling: !1,
    transformOptimization: !0,
    alwaysConsumeMouseWheel: !0
}, Lyt = class {
    get context() {
        return this._context;
    }
    set context(t) {
        this._context = t;
    }
    constructor(t){
        this.elements = t;
    }
    update() {}
    getData() {
        return this.elements;
    }
}, wGd = class {
    constructor(t){
        this.elements = t;
    }
    update() {}
    getData() {
        return this.elements;
    }
}, vGo = class {
    constructor(){
        this.types = [], this.files = [];
    }
    update(t) {
        if (t.types && this.types.splice(0, this.types.length, ...t.types), t.files) {
            this.files.splice(0, this.files.length);
            for(let e = 0; e < t.files.length; e++){
                const n = t.files.item(e);
                n && (n.size || n.type) && this.files.push(n);
            }
        }
    }
    getData() {
        return {
            types: this.types,
            files: this.files
        };
    }
}, CGd = class {
    constructor(t){
        t?.getSetSize ? this.getSetSize = t.getSetSize.bind(t) : this.getSetSize = (e, n, i)=>i, t?.getPosInSet ? this.getPosInSet = t.getPosInSet.bind(t) : this.getPosInSet = (e, n)=>n + 1, t?.getRole ? this.getRole = t.getRole.bind(t) : this.getRole = (e)=>"listitem", t?.isChecked ? this.isChecked = t.isChecked.bind(t) : this.isChecked = (e)=>{};
    }
}, i_e = class aRb {
    constructor(e, n, i, r = T5e){
        if (this.virtualDelegate = n, this.domId = `list_id_${++aRb.InstanceCount}`, this.renderers = new Map, this.renderWidth = 0, this._scrollHeight = 0, this.disposables = new Nt, this.scrollableElementUpdateDisposable = this.disposables.add(new Vn), this.scrollableElementWidthDelayer = new II(50), this.splicing = !1, this.dragOverAnimationDisposable = this.disposables.add(new Vn), this.dragOverAnimationStopDisposable = this.disposables.add(new Vn), this.dragOverMouseY = 0, this.canDrop = !1, this.currentDragFeedbackDisposable = this.disposables.add(new Vn), this.onDragLeaveTimeout = this.disposables.add(new Vn), this.currentSelectionDisposable = this.disposables.add(new Vn), this._onDidChangeContentHeight = new tt, this._onDidChangeContentWidth = new tt, this.onDidChangeContentHeight = en.latch(this._onDidChangeContentHeight.event, void 0, this.disposables), this.onDidChangeContentWidth = en.latch(this._onDidChangeContentWidth.event, void 0, this.disposables), this._horizontalScrolling = !1, r.horizontalScrolling && r.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
        this.items = [], this.itemId = 0, this.rangeMap = this.createRangeMap(r.paddingTop ?? 0);
        for (const o of i)this.renderers.set(o.templateId, o);
        if (this.cache = this.disposables.add(new kGd(this.renderers)), this.lastRenderTop = 0, this.lastRenderHeight = 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-list", this.domNode.classList.add(this.domId), this.domNode.tabIndex = 0, this.domNode.classList.toggle("mouse-support", typeof r.mouseSupport == "boolean" ? r.mouseSupport : !0), this._horizontalScrolling = r.horizontalScrolling ?? T5e.horizontalScrolling, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this.paddingBottom = typeof r.paddingBottom > "u" ? 0 : r.paddingBottom, this.itemGap = typeof r.itemGap > "u" ? 0 : r.itemGap, this.accessibilityProvider = new CGd(r.accessibilityProvider), this.rowsContainer = document.createElement("div"), this.rowsContainer.className = "monaco-list-rows", (r.transformOptimization ?? T5e.transformOptimization) && (this.rowsContainer.style.transform = "translate3d(0px, 0px, 0px)", this.rowsContainer.style.overflow = "hidden", this.rowsContainer.style.contain = "strict"), this.disposables.add(kM.addTarget(this.rowsContainer)), this.scrollable = this.disposables.add(new rHe({
            forceIntegerValues: !0,
            smoothScrollDuration: r.smoothScrolling ?? !1 ? 125 : 0,
            scheduleAtNextAnimationFrame: (o)=>Ix(ws(this.domNode), o)
        })), this.scrollableElement = this.disposables.add(new Tsi(this.rowsContainer, {
            alwaysConsumeMouseWheel: r.alwaysConsumeMouseWheel ?? T5e.alwaysConsumeMouseWheel,
            horizontal: 1,
            vertical: r.verticalScrollMode ?? T5e.verticalScrollMode,
            useShadows: r.useShadows ?? T5e.useShadows,
            mouseWheelScrollSensitivity: r.mouseWheelScrollSensitivity,
            fastScrollSensitivity: r.fastScrollSensitivity,
            scrollByPage: r.scrollByPage
        }, this.scrollable)), this.domNode.appendChild(this.scrollableElement.getDomNode()), e.appendChild(this.domNode), this.scrollableElement.onScroll(this.onScroll, this, this.disposables), this.disposables.add(li(this.rowsContainer, mS.Change, (o)=>this.onTouchChange(o))), this.disposables.add(li(this.scrollableElement.getDomNode(), "scroll", (o)=>{
            const a = o.target, l = a.scrollTop;
            a.scrollTop = 0, r.scrollToActiveElement && this.setScrollTop(this.scrollTop + l);
        })), this.disposables.add(li(this.domNode, "dragover", (o)=>this.onDragOver(this.toDragEvent(o)))), this.disposables.add(li(this.domNode, "drop", (o)=>this.onDrop(this.toDragEvent(o)))), this.disposables.add(li(this.domNode, "dragleave", (o)=>this.onDragLeave(this.toDragEvent(o)))), this.disposables.add(li(this.domNode, "dragend", (o)=>this.onDragEnd(o))), r.userSelection) {
            if (r.dnd) throw new Error("DND and user selection cannot be used simultaneously");
            this.disposables.add(li(this.domNode, "mousedown", (o)=>this.onPotentialSelectionStart(o)));
        }
        this.setRowLineHeight = r.setRowLineHeight ?? T5e.setRowLineHeight, this.setRowHeight = r.setRowHeight ?? T5e.setRowHeight, this.supportDynamicHeights = r.supportDynamicHeights ?? T5e.supportDynamicHeights, this.dnd = r.dnd ?? this.disposables.add(T5e.dnd), this.layout(r.initialSize?.height, r.initialSize?.width), r.scrollToActiveElement && this._setupFocusObserver(e);
    }
    get contentHeight() {
        return this.rangeMap.size;
    }
    get contentWidth() {
        return this.scrollWidth ?? 0;
    }
    get onDidScroll() {
        return this.scrollableElement.onScroll;
    }
    get onWillScroll() {
        return this.scrollableElement.onWillScroll;
    }
    get containerDomNode() {
        return this.rowsContainer;
    }
    get scrollableElementDomNode() {
        return this.scrollableElement.getDomNode();
    }
    get horizontalScrolling() {
        return this._horizontalScrolling;
    }
    set horizontalScrolling(e) {
        if (e !== this._horizontalScrolling) {
            if (e && this.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
            if (this._horizontalScrolling = e, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this._horizontalScrolling) {
                for (const n of this.items)this.measureItemWidth(n);
                this.updateScrollWidth(), this.scrollableElement.setScrollDimensions({
                    width: ggn(this.domNode)
                }), this.rowsContainer.style.width = `${Math.max(this.scrollWidth || 0, this.renderWidth)}px`;
            } else this.scrollableElementWidthDelayer.cancel(), this.scrollableElement.setScrollDimensions({
                width: this.renderWidth,
                scrollWidth: this.renderWidth
            }), this.rowsContainer.style.width = "";
        }
    }
    _setupFocusObserver(e) {
        this.disposables.add(li(e, "focus", ()=>{
            const n = RC();
            this.activeElement !== n && n !== null && (this.activeElement = n, this._scrollToActiveElement(this.activeElement, e));
        }, !0));
    }
    _scrollToActiveElement(e, n) {
        const i = n.getBoundingClientRect(), s = e.getBoundingClientRect().top - i.top;
        s < 0 && this.setScrollTop(this.scrollTop + s);
    }
    updateOptions(e) {
        if (e.paddingBottom !== void 0 && (this.paddingBottom = e.paddingBottom, this.scrollableElement.setScrollDimensions({
            scrollHeight: this.scrollHeight
        })), e.smoothScrolling !== void 0 && this.scrollable.setSmoothScrollDuration(e.smoothScrolling ? 125 : 0), e.horizontalScrolling !== void 0 && (this.horizontalScrolling = e.horizontalScrolling), e.itemGap !== void 0 && e.itemGap !== this.itemGap) {
            this.itemGap = e.itemGap;
            const i = this.items.slice();
            this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this._splice(0, i.length, i.map((r)=>r.element));
        }
        let n;
        if (e.scrollByPage !== void 0 && (n = {
            ...n ?? {},
            scrollByPage: e.scrollByPage
        }), e.mouseWheelScrollSensitivity !== void 0 && (n = {
            ...n ?? {},
            mouseWheelScrollSensitivity: e.mouseWheelScrollSensitivity
        }), e.fastScrollSensitivity !== void 0 && (n = {
            ...n ?? {},
            fastScrollSensitivity: e.fastScrollSensitivity
        }), n && this.scrollableElement.updateOptions(n), e.paddingTop !== void 0 && e.paddingTop !== this.rangeMap.paddingTop) {
            const i = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), r = e.paddingTop - this.rangeMap.paddingTop;
            this.rangeMap.paddingTop = e.paddingTop, this.render(i, Math.max(0, this.lastRenderTop + r), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.lastRenderTop, this.lastRenderHeight);
        }
    }
    delegateScrollFromMouseWheelEvent(e) {
        this.scrollableElement.delegateScrollFromMouseWheelEvent(e);
    }
    delegateVerticalScrollbarPointerDown(e) {
        this.scrollableElement.delegateVerticalScrollbarPointerDown(e);
    }
    updateElementHeight(e, n, i) {
        if (e < 0 || e >= this.items.length) return;
        const r = this.items[e].size;
        if (typeof n > "u") {
            if (!this.supportDynamicHeights) {
                console.warn("Dynamic heights not supported", new Error().stack);
                return;
            }
            this.items[e].lastDynamicHeightWidth = void 0, n = r + this.probeDynamicHeight(e);
        }
        if (r === n) return;
        const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        let o = 0;
        e < s.start || i !== null && i > e && i < s.end ? o = n - r : o = 0;
        const a = this.itemGap > 0 ? n + this.itemGap : n;
        this.rangeMap.splice(e, 1, [
            {
                size: a
            }
        ]), this.items[e].size = n, this.render(s, Math.max(0, this.lastRenderTop + o), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights ? this._rerender(this.lastRenderTop, this.lastRenderHeight) : this._onDidChangeContentHeight.fire(this.contentHeight);
    }
    createRangeMap(e) {
        return new SGd(e);
    }
    splice(e, n, i = []) {
        if (this.splicing) throw new Error("Can't run recursive splices.");
        this.splicing = !0;
        try {
            return this._splice(e, n, i);
        } finally{
            this.splicing = !1, this._onDidChangeContentHeight.fire(this.contentHeight);
        }
    }
    _splice(e, n, i = []) {
        const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), s = {
            start: e,
            end: e + n
        }, o = IY.intersect(r, s), a = new Map;
        for(let C = o.end - 1; C >= o.start; C--){
            const T = this.items[C];
            if (T.dragStartDisposable.dispose(), T.checkedDisposable.dispose(), T.row) {
                let I = a.get(T.templateId);
                I || (I = [], a.set(T.templateId, I));
                const A = this.renderers.get(T.templateId);
                A && A.disposeElement && A.disposeElement(T.element, C, T.row.templateData, T.size), I.unshift(T.row);
            }
            T.row = null, T.stale = !0;
        }
        const l = {
            start: e + n,
            end: this.items.length
        }, c = IY.intersect(l, r), u = IY.relativeComplement(l, r), d = i.map((C)=>({
                id: String(this.itemId++),
                element: C,
                templateId: this.virtualDelegate.getTemplateId(C),
                size: this.virtualDelegate.getHeight(C),
                width: void 0,
                hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(C),
                lastDynamicHeightWidth: void 0,
                row: null,
                uri: void 0,
                dropTarget: !1,
                dragStartDisposable: st.None,
                checkedDisposable: st.None,
                stale: !1
            }));
        let h;
        if (e === 0 && n >= this.items.length) {
            if (this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this.itemGap > 0) {
                const C = d.map((T)=>({
                        ...T,
                        size: T.size + this.itemGap
                    }));
                if (C.length > 0) {
                    const T = C[C.length - 1];
                    C[C.length - 1] = {
                        ...T,
                        size: T.size - this.itemGap
                    };
                }
                this.rangeMap.splice(0, 0, C);
            } else this.rangeMap.splice(0, 0, d);
            h = this.items, this.items = d;
        } else {
            if (this.itemGap > 0) {
                const C = d.map((T)=>({
                        ...T,
                        size: T.size + this.itemGap
                    }));
                if (C.length > 0 && e + C.length === this.items.length + C.length) {
                    const T = C[C.length - 1];
                    C[C.length - 1] = {
                        ...T,
                        size: T.size - this.itemGap
                    };
                }
                this.rangeMap.splice(e, n, C);
            } else this.rangeMap.splice(e, n, d);
            h = jpr(this.items, e, n, d);
        }
        const p = i.length - n, g = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), f = fGo(c, p), _ = IY.intersect(g, f);
        for(let C = _.start; C < _.end; C++)this.updateItemInDOM(this.items[C], C);
        const b = IY.relativeComplement(f, g);
        for (const C of b)for(let T = C.start; T < C.end; T++)this.removeItemFromDOM(T);
        const y = u.map((C)=>fGo(C, p)), k = [
            {
                start: e,
                end: e + i.length
            },
            ...y
        ].map((C)=>IY.intersect(g, C)).reverse();
        for (const C of k)for(let T = C.end - 1; T >= C.start; T--){
            const I = this.items[T], P = a.get(I.templateId)?.pop();
            this.insertItemInDOM(T, P);
        }
        for (const C of a.values())for (const T of C)this.cache.release(T);
        return this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight), h.map((C)=>C.element);
    }
    eventuallyUpdateScrollDimensions() {
        this._scrollHeight = this.contentHeight, this.rowsContainer.style.height = `${this._scrollHeight}px`, this.scrollableElementUpdateDisposable.value || (this.scrollableElementUpdateDisposable.value = Ix(ws(this.domNode), ()=>{
            this.scrollableElement.setScrollDimensions({
                scrollHeight: this.scrollHeight
            }), this.updateScrollWidth(), this.scrollableElementUpdateDisposable.clear();
        }));
    }
    eventuallyUpdateScrollWidth() {
        if (!this.horizontalScrolling) {
            this.scrollableElementWidthDelayer.cancel();
            return;
        }
        this.scrollableElementWidthDelayer.trigger(()=>this.updateScrollWidth());
    }
    updateScrollWidth() {
        if (!this.horizontalScrolling) return;
        let e = 0;
        for (const n of this.items)typeof n.width < "u" && (e = Math.max(e, n.width));
        this.scrollWidth = e, this.scrollableElement.setScrollDimensions({
            scrollWidth: e === 0 ? 0 : e + 10
        }), this._onDidChangeContentWidth.fire(this.scrollWidth);
    }
    updateWidth(e) {
        if (!this.horizontalScrolling || typeof this.scrollWidth > "u") return;
        const n = this.items[e];
        this.measureItemWidth(n), typeof n.width < "u" && n.width > this.scrollWidth && (this.scrollWidth = n.width, this.scrollableElement.setScrollDimensions({
            scrollWidth: this.scrollWidth + 10
        }), this._onDidChangeContentWidth.fire(this.scrollWidth));
    }
    rerender() {
        if (this.supportDynamicHeights) {
            for (const e of this.items)e.lastDynamicHeightWidth = void 0;
            this._rerender(this.lastRenderTop, this.lastRenderHeight);
        }
    }
    get length() {
        return this.items.length;
    }
    get renderHeight() {
        return this.scrollableElement.getScrollDimensions().height;
    }
    get firstVisibleIndex() {
        return this.getVisibleRange(this.lastRenderTop, this.lastRenderHeight).start;
    }
    get firstMostlyVisibleIndex() {
        const e = this.firstVisibleIndex, n = this.rangeMap.positionAt(e), i = this.rangeMap.positionAt(e + 1);
        return i !== -1 && (i - n) / 2 + n < this.scrollTop ? e + 1 : e;
    }
    get lastVisibleIndex() {
        return this.getRenderRange(this.lastRenderTop, this.lastRenderHeight).end - 1;
    }
    element(e) {
        return this.items[e].element;
    }
    indexOf(e) {
        return this.items.findIndex((n)=>n.element === e);
    }
    domElement(e) {
        const n = this.items[e].row;
        return n && n.domNode;
    }
    elementHeight(e) {
        return this.items[e].size;
    }
    elementTop(e) {
        return this.rangeMap.positionAt(e);
    }
    indexAt(e) {
        return this.rangeMap.indexAt(e);
    }
    indexAfter(e) {
        return this.rangeMap.indexAfter(e);
    }
    layout(e, n) {
        const i = {
            height: typeof e == "number" ? e : Lkr(this.domNode)
        };
        this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), i.scrollHeight = this.scrollHeight), this.scrollableElement.setScrollDimensions(i), typeof n < "u" && (this.renderWidth = n, this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight)), this.horizontalScrolling && this.scrollableElement.setScrollDimensions({
            width: typeof n == "number" ? n : ggn(this.domNode)
        });
    }
    render(e, n, i, r, s, o = !1) {
        const a = this.getRenderRange(n, i), l = IY.relativeComplement(a, e).reverse(), c = IY.relativeComplement(e, a);
        if (o) {
            const u = IY.intersect(e, a);
            for(let d = u.start; d < u.end; d++)this.updateItemInDOM(this.items[d], d);
        }
        this.cache.transact(()=>{
            for (const u of c)for(let d = u.start; d < u.end; d++)this.removeItemFromDOM(d);
            for (const u of l)for(let d = u.end - 1; d >= u.start; d--)this.insertItemInDOM(d);
        }), r !== void 0 && (this.rowsContainer.style.left = `-${r}px`), this.rowsContainer.style.top = `-${n}px`, this.horizontalScrolling && s !== void 0 && (this.rowsContainer.style.width = `${Math.max(s, this.renderWidth)}px`), this.lastRenderTop = n, this.lastRenderHeight = i;
    }
    insertItemInDOM(e, n) {
        const i = this.items[e];
        if (!i.row) if (n) i.row = n, i.stale = !0;
        else {
            const l = this.cache.alloc(i.templateId);
            i.row = l.row, i.stale ||= l.isReusingConnectedDomNode;
        }
        const r = this.accessibilityProvider.getRole(i.element) || "listitem";
        i.row.domNode.setAttribute("role", r);
        const s = this.accessibilityProvider.isChecked(i.element);
        if (typeof s == "boolean") i.row.domNode.setAttribute("aria-checked", String(!!s));
        else if (s) {
            const l = (c)=>i.row.domNode.setAttribute("aria-checked", String(!!c));
            l(s.value), i.checkedDisposable = s.onDidChange(()=>l(s.value));
        }
        if (i.stale || !i.row.domNode.parentElement) {
            const l = this.items.at(e + 1)?.row?.domNode ?? null;
            (i.row.domNode.parentElement !== this.rowsContainer || i.row.domNode.nextElementSibling !== l) && this.rowsContainer.insertBefore(i.row.domNode, l), i.stale = !1;
        }
        this.updateItemInDOM(i, e);
        const o = this.renderers.get(i.templateId);
        if (!o) throw new Error(`No renderer found for template id ${i.templateId}`);
        o?.renderElement(i.element, e, i.row.templateData, i.size);
        const a = this.dnd.getDragURI(i.element);
        i.dragStartDisposable.dispose(), i.row.domNode.draggable = !!a, a && (i.dragStartDisposable = li(i.row.domNode, "dragstart", (l)=>this.onDragStart(i.element, a, l))), this.horizontalScrolling && (this.measureItemWidth(i), this.eventuallyUpdateScrollWidth());
    }
    measureItemWidth(e) {
        if (!e.row || !e.row.domNode) return;
        e.row.domNode.style.width = "fit-content", e.width = ggn(e.row.domNode);
        const n = ws(e.row.domNode).getComputedStyle(e.row.domNode);
        n.paddingLeft && (e.width += parseFloat(n.paddingLeft)), n.paddingRight && (e.width += parseFloat(n.paddingRight)), e.row.domNode.style.width = "";
    }
    updateItemInDOM(e, n) {
        e.row.domNode.style.top = `${this.elementTop(n)}px`, this.setRowHeight && (e.row.domNode.style.height = `${e.size}px`), this.setRowLineHeight && (e.row.domNode.style.lineHeight = `${e.size}px`), e.row.domNode.setAttribute("data-index", `${n}`), e.row.domNode.setAttribute("data-last-element", n === this.length - 1 ? "true" : "false"), e.row.domNode.setAttribute("data-parity", n % 2 === 0 ? "even" : "odd"), e.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(e.element, n, this.length))), e.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(e.element, n))), e.row.domNode.setAttribute("id", this.getElementDomId(n)), e.row.domNode.classList.toggle("drop-target", e.dropTarget);
    }
    removeItemFromDOM(e) {
        const n = this.items[e];
        if (n.dragStartDisposable.dispose(), n.checkedDisposable.dispose(), n.row) {
            const i = this.renderers.get(n.templateId);
            i && i.disposeElement && i.disposeElement(n.element, e, n.row.templateData, n.size), this.cache.release(n.row), n.row = null;
        }
        this.horizontalScrolling && this.eventuallyUpdateScrollWidth();
    }
    getScrollTop() {
        return this.scrollableElement.getScrollPosition().scrollTop;
    }
    setScrollTop(e, n) {
        this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), this.scrollableElement.setScrollDimensions({
            scrollHeight: this.scrollHeight
        })), this.scrollableElement.setScrollPosition({
            scrollTop: e,
            reuseAnimation: n
        });
    }
    getScrollLeft() {
        return this.scrollableElement.getScrollPosition().scrollLeft;
    }
    setScrollLeft(e) {
        this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), this.scrollableElement.setScrollDimensions({
            scrollWidth: this.scrollWidth
        })), this.scrollableElement.setScrollPosition({
            scrollLeft: e
        });
    }
    get scrollTop() {
        return this.getScrollTop();
    }
    set scrollTop(e) {
        this.setScrollTop(e);
    }
    get scrollHeight() {
        return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom;
    }
    get onMouseClick() {
        return en.map(this.disposables.add(new Gg(this.domNode, "click")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseDblClick() {
        return en.map(this.disposables.add(new Gg(this.domNode, "dblclick")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseMiddleClick() {
        return en.filter(en.map(this.disposables.add(new Gg(this.domNode, "auxclick")).event, (e)=>this.toMouseEvent(e), this.disposables), (e)=>e.browserEvent.button === 1, this.disposables);
    }
    get onMouseUp() {
        return en.map(this.disposables.add(new Gg(this.domNode, "mouseup")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseDown() {
        return en.map(this.disposables.add(new Gg(this.domNode, "mousedown")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseOver() {
        return en.map(this.disposables.add(new Gg(this.domNode, "mouseover")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseMove() {
        return en.map(this.disposables.add(new Gg(this.domNode, "mousemove")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseOut() {
        return en.map(this.disposables.add(new Gg(this.domNode, "mouseout")).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onContextMenu() {
        return en.any(en.map(this.disposables.add(new Gg(this.domNode, "contextmenu")).event, (e)=>this.toMouseEvent(e), this.disposables), en.map(this.disposables.add(new Gg(this.domNode, mS.Contextmenu)).event, (e)=>this.toGestureEvent(e), this.disposables));
    }
    get onTouchStart() {
        return en.map(this.disposables.add(new Gg(this.domNode, "touchstart")).event, (e)=>this.toTouchEvent(e), this.disposables);
    }
    get onTap() {
        return en.map(this.disposables.add(new Gg(this.rowsContainer, mS.Tap)).event, (e)=>this.toGestureEvent(e), this.disposables);
    }
    toMouseEvent(e) {
        const n = this.getItemIndexFromEventTarget(e.target || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element;
        return {
            browserEvent: e,
            index: n,
            element: r
        };
    }
    toTouchEvent(e) {
        const n = this.getItemIndexFromEventTarget(e.target || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element;
        return {
            browserEvent: e,
            index: n,
            element: r
        };
    }
    toGestureEvent(e) {
        const n = this.getItemIndexFromEventTarget(e.initialTarget || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element;
        return {
            browserEvent: e,
            index: n,
            element: r
        };
    }
    toDragEvent(e) {
        const n = this.getItemIndexFromEventTarget(e.target || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element, s = this.getTargetSector(e, n);
        return {
            browserEvent: e,
            index: n,
            element: r,
            sector: s
        };
    }
    onScroll(e) {
        try {
            const n = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            this.render(n, e.scrollTop, e.height, e.scrollLeft, e.scrollWidth), this.supportDynamicHeights && this._rerender(e.scrollTop, e.height, e.inSmoothScrolling);
        } catch (n) {
            throw console.error("Got bad scroll event:", e), n;
        }
    }
    onTouchChange(e) {
        e.preventDefault(), e.stopPropagation(), this.scrollTop -= e.translationY;
    }
    onDragStart(e, n, i) {
        if (!i.dataTransfer) return;
        const r = this.dnd.getDragElements(e);
        i.dataTransfer.effectAllowed = "copyMove", i.dataTransfer.setData(r6.TEXT, n);
        let s;
        this.dnd.getDragLabel && (s = this.dnd.getDragLabel(r, i)), typeof s > "u" && (s = String(r.length)), Qfn(i, this.domNode, s, [
            this.domId
        ]), this.domNode.classList.add("dragging"), this.currentDragData = new Lyt(r), Nyt.CurrentDragAndDropData = new wGd(r), this.dnd.onDragStart?.(this.currentDragData, i);
    }
    onPotentialSelectionStart(e) {
        const n = Ukr(this.domNode), i = new Nt;
        this.currentSelectionDisposable.value = i;
        const r = i.add(new Nt);
        r.add(li(this.domNode, "selectstart", ()=>{
            r.add(li(n, "mousemove", (s)=>{
                n.getSelection()?.isCollapsed === !1 && this.setupDragAndDropScrollTopAnimation(s);
            })), i.add(Pn(()=>{
                const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
                this.currentSelectionBounds = void 0, this.render(s, this.lastRenderTop, this.lastRenderHeight, void 0, void 0);
            })), i.add(li(n, "selectionchange", ()=>{
                const s = n.getSelection();
                if (!s || s.isCollapsed) {
                    r.isDisposed && i.dispose();
                    return;
                }
                let o = this.getIndexOfListElement(s.anchorNode), a = this.getIndexOfListElement(s.focusNode);
                o !== void 0 && a !== void 0 && (a < o && ([o, a] = [
                    a,
                    o
                ]), this.currentSelectionBounds = {
                    start: o,
                    end: a
                });
            }));
        })), r.add(li(n, "mouseup", ()=>{
            r.dispose(), this.teardownDragAndDropScrollTopAnimation(), n.getSelection()?.isCollapsed !== !1 && i.dispose();
        }));
    }
    getIndexOfListElement(e) {
        if (!(!e || !this.domNode.contains(e))) for(; e && e !== this.domNode;){
            if (e.dataset?.index) return Number(e.dataset.index);
            e = e.parentElement;
        }
    }
    onDragOver(e) {
        if (e.browserEvent.preventDefault(), this.onDragLeaveTimeout.clear(), Nyt.CurrentDragAndDropData && Nyt.CurrentDragAndDropData.getData() === "vscode-ui" || (this.setupDragAndDropScrollTopAnimation(e.browserEvent), !e.browserEvent.dataTransfer)) return !1;
        if (!this.currentDragData) if (Nyt.CurrentDragAndDropData) this.currentDragData = Nyt.CurrentDragAndDropData;
        else {
            if (!e.browserEvent.dataTransfer.types) return !1;
            this.currentDragData = new vGo;
        }
        const n = this.dnd.onDragOver(this.currentDragData, e.element, e.index, e.sector, e.browserEvent);
        if (this.canDrop = typeof n == "boolean" ? n : n.accept, !this.canDrop) return this.currentDragFeedback = void 0, this.currentDragFeedbackDisposable.clear(), !1;
        e.browserEvent.dataTransfer.dropEffect = typeof n != "boolean" && n.effect?.type === 0 ? "copy" : "move";
        let i;
        typeof n != "boolean" && n.feedback ? i = n.feedback : typeof e.index > "u" ? i = [
            -1
        ] : i = [
            e.index
        ], i = kk(i).filter((s)=>s >= -1 && s < this.length).sort((s, o)=>s - o), i = i[0] === -1 ? [
            -1
        ] : i;
        let r = typeof n != "boolean" && n.effect && n.effect.position ? n.effect.position : "drop-target";
        if (vNy(this.currentDragFeedback, i) && this.currentDragFeedbackPosition === r) return !0;
        if (this.currentDragFeedback = i, this.currentDragFeedbackPosition = r, this.currentDragFeedbackDisposable.clear(), i[0] === -1) this.domNode.classList.add(r), this.rowsContainer.classList.add(r), this.currentDragFeedbackDisposable.value = Pn(()=>{
            this.domNode.classList.remove(r), this.rowsContainer.classList.remove(r);
        });
        else {
            if (i.length > 1 && r !== "drop-target") throw new Error("Can't use multiple feedbacks with position different than 'over'");
            r === "drop-target-after" && i[0] < this.length - 1 && (i[0] += 1, r = "drop-target-before");
            for (const s of i){
                const o = this.items[s];
                o.dropTarget = !0, o.row?.domNode.classList.add(r);
            }
            this.currentDragFeedbackDisposable.value = Pn(()=>{
                for (const s of i){
                    const o = this.items[s];
                    o.dropTarget = !1, o.row?.domNode.classList.remove(r);
                }
            });
        }
        return !0;
    }
    onDragLeave(e) {
        this.onDragLeaveTimeout.value = Ec(()=>this.clearDragOverFeedback(), 100), this.currentDragData && this.dnd.onDragLeave?.(this.currentDragData, e.element, e.index, e.browserEvent);
    }
    onDrop(e) {
        if (!this.canDrop) return;
        const n = this.currentDragData;
        this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, Nyt.CurrentDragAndDropData = void 0, !(!n || !e.browserEvent.dataTransfer) && (e.browserEvent.preventDefault(), n.update(e.browserEvent.dataTransfer), this.dnd.drop(n, e.element, e.index, e.sector, e.browserEvent));
    }
    onDragEnd(e) {
        this.canDrop = !1, this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, Nyt.CurrentDragAndDropData = void 0, this.dnd.onDragEnd?.(e);
    }
    clearDragOverFeedback() {
        this.currentDragFeedback = void 0, this.currentDragFeedbackPosition = void 0, this.currentDragFeedbackDisposable.clear();
    }
    setupDragAndDropScrollTopAnimation(e) {
        if (!this.dragOverAnimationDisposable.value) {
            const n = k9t(this.domNode).top;
            this.dragOverAnimationDisposable.value = O5d(ws(this.domNode), this.animateDragAndDropScrollTop.bind(this, n));
        }
        this.dragOverAnimationStopDisposable.value = Ec(()=>{
            this.dragOverAnimationDisposable.clear();
        }, 1e3), this.dragOverMouseY = e.pageY;
    }
    animateDragAndDropScrollTop(e) {
        if (this.dragOverMouseY === void 0) return;
        const n = this.dragOverMouseY - e, i = this.renderHeight - 35;
        n < 35 ? this.scrollTop += Math.max(-14, Math.floor(.3 * (n - 35))) : n > i && (this.scrollTop += Math.min(14, Math.floor(.3 * (n - i))));
    }
    teardownDragAndDropScrollTopAnimation() {
        this.dragOverAnimationStopDisposable.clear(), this.dragOverAnimationDisposable.clear();
    }
    getTargetSector(e, n) {
        if (n === void 0) return;
        const i = e.offsetY / this.items[n].size, r = Math.floor(i / .25);
        return f1(r, 0, 3);
    }
    getItemIndexFromEventTarget(e) {
        const n = this.scrollableElement.getDomNode();
        let i = e;
        for(; ($u(i) || Rii(i)) && i !== this.rowsContainer && n.contains(i);){
            const r = i.getAttribute("data-index");
            if (r) {
                const s = Number(r);
                if (!isNaN(s)) return s;
            }
            i = i.parentElement;
        }
    }
    getVisibleRange(e, n) {
        return {
            start: this.rangeMap.indexAt(e),
            end: this.rangeMap.indexAfter(e + n - 1)
        };
    }
    getRenderRange(e, n) {
        const i = this.getVisibleRange(e, n);
        if (this.currentSelectionBounds) {
            const r = this.rangeMap.count;
            i.start = Math.min(i.start, this.currentSelectionBounds.start, r), i.end = Math.min(Math.max(i.end, this.currentSelectionBounds.end + 1), r);
        }
        return i;
    }
    _rerender(e, n, i) {
        const r = this.getRenderRange(e, n);
        let s, o;
        e === this.elementTop(r.start) ? (s = r.start, o = 0) : r.end - r.start > 1 && (s = r.start + 1, o = this.elementTop(s) - e);
        let a = 0;
        for(;;){
            const l = this.getRenderRange(e, n);
            let c = !1;
            for(let u = l.start; u < l.end; u++){
                const d = this.probeDynamicHeight(u);
                d !== 0 && this.rangeMap.splice(u, 1, [
                    this.items[u]
                ]), a += d, c = c || d !== 0;
            }
            if (!c) {
                a !== 0 && this.eventuallyUpdateScrollDimensions();
                const u = IY.relativeComplement(r, l);
                for (const h of u)for(let p = h.start; p < h.end; p++)this.items[p].row && this.removeItemFromDOM(p);
                const d = IY.relativeComplement(l, r).reverse();
                for (const h of d)for(let p = h.end - 1; p >= h.start; p--)this.insertItemInDOM(p);
                for(let h = l.start; h < l.end; h++)this.items[h].row && this.updateItemInDOM(this.items[h], h);
                if (typeof s == "number") {
                    const h = this.scrollable.getFutureScrollPosition().scrollTop - e, p = this.elementTop(s) - o + h;
                    this.setScrollTop(p, i);
                }
                this._onDidChangeContentHeight.fire(this.contentHeight);
                return;
            }
        }
    }
    probeDynamicHeight(e) {
        const n = this.items[e], i = this.probeDynamicHeightForItem(n, e);
        return i > 0 && this.virtualDelegate.setDynamicHeight?.(n.element, n.size), i;
    }
    probeDynamicHeightForItem(e, n) {
        if (this.virtualDelegate.getDynamicHeight) {
            const o = this.virtualDelegate.getDynamicHeight(e.element);
            if (o !== null) {
                const a = e.size;
                return e.size = o, e.lastDynamicHeightWidth = this.renderWidth, o - a;
            }
        }
        if (!e.hasDynamicHeight || e.lastDynamicHeightWidth === this.renderWidth || this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(e.element)) return 0;
        const i = e.size;
        if (e.row) return e.row.domNode.style.height = "", e.size = e.row.domNode.offsetHeight, e.size === 0 && !JE(e.row.domNode, ws(e.row.domNode).document.body) && console.warn("Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!", new Error().stack), e.lastDynamicHeightWidth = this.renderWidth, e.size - i;
        const { row: r } = this.cache.alloc(e.templateId);
        r.domNode.style.height = "", this.rowsContainer.appendChild(r.domNode);
        const s = this.renderers.get(e.templateId);
        if (!s) throw new xh("Missing renderer for templateId: " + e.templateId);
        return s.renderElement(e.element, n, r.templateData, void 0), e.size = r.domNode.offsetHeight, s.disposeElement?.(e.element, n, r.templateData, void 0), e.lastDynamicHeightWidth = this.renderWidth, r.domNode.remove(), this.cache.release(r), e.size - i;
    }
    getElementDomId(e) {
        return `${this.domId}_${e}`;
    }
    dispose() {
        this.currentSelectionDisposable.clear(), this.currentDragFeedbackDisposable.clear();
        for (const e of this.items)if (e.dragStartDisposable.dispose(), e.checkedDisposable.dispose(), e.row) {
            const n = this.renderers.get(e.row.templateId);
            n && (n.disposeElement?.(e.element, -1, e.row.templateData, void 0), n.disposeTemplate(e.row.templateData));
        }
        this.items = [], this.domNode?.remove(), this.disposables.dispose();
    }
}, i_e.InstanceCount = 0, Re([
    sl
], i_e.prototype, "onMouseClick", null), Re([
    sl
], i_e.prototype, "onMouseDblClick", null), Re([
    sl
], i_e.prototype, "onMouseMiddleClick", null), Re([
    sl
], i_e.prototype, "onMouseUp", null), Re([
    sl
], i_e.prototype, "onMouseDown", null), Re([
    sl
], i_e.prototype, "onMouseOver", null), Re([
    sl
], i_e.prototype, "onMouseMove", null), Re([
    sl
], i_e.prototype, "onMouseOut", null), Re([
    sl
], i_e.prototype, "onContextMenu", null), Re([
    sl
], i_e.prototype, "onTouchStart", null), Re([
    sl
], i_e.prototype, "onTap", null), TGd = i_e;

}
