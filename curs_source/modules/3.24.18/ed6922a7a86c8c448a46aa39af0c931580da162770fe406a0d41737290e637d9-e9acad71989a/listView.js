import { Cl, Ct, He, Se, Xm, Zu, bt, cn, jpi, rn, si, ve, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { bn, xg } from "./async.js";
import { sw } from "./decorators.js";
import { jK, yD } from "./dnd.js";
import { tmt } from "./dnd_2.js";
import { Bgi, Gb, en, xi } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { cR } from "./numbers.js";
import { $ht, Cyg, GDc, Omn, SYr, Uht, WS, Xt, emt, iw, kb, nu, pns, xo } from "./qIc.js";
import { QUc, Syg } from "./rangeMap.js";
import { Mbi, j7 } from "./range_2.js";
import { JUc, kyg } from "./rowCache.js";
import { e6, mwe } from "./scrollable.js";
import { YOt, mA } from "./scrollableElement.js";
import { Ex, ov, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
var tKe, w3, Lwe, Kge, mns, kFt, e8c, bre, gns;
export { Kge, Lwe, bre, e8c, gns, kFt, mns, tKe, w3 };
var __wakaru_nKe_initialized = false;
export function nKe() {
if (__wakaru_nKe_initialized) return;
__wakaru_nKe_initialized = true;
"use strict";
x(), jK(), en(), B7(), Ex(), mA(), dr(), bn(), sw(), bt(), Se(), Mbi(), e6(), Syg(), kyg(), si(), cR(), tmt(), tKe = {
    CurrentDragAndDropData: void 0
}, w3 = ((e)=>(e[e.TOP = 0] = "TOP", e[e.CENTER_TOP = 1] = "CENTER_TOP", e[e.CENTER_BOTTOM = 2] = "CENTER_BOTTOM", e[e.BOTTOM = 3] = "BOTTOM", e))(w3 || {}), Lwe = {
    useShadows: !0,
    verticalScrollMode: 1,
    setRowLineHeight: !0,
    setRowHeight: !0,
    supportDynamicHeights: !1,
    dnd: {
        getDragElements (e) {
            return [
                e
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
}, Kge = class {
    get context() {
        return this._context;
    }
    set context(e) {
        this._context = e;
    }
    constructor(e){
        this.elements = e;
    }
    update() {}
    getData() {
        return this.elements;
    }
}, mns = class {
    constructor(e){
        this.elements = e;
    }
    update() {}
    getData() {
        return this.elements;
    }
}, kFt = class {
    constructor(){
        this.types = [], this.files = [];
    }
    update(e) {
        if (e.types && this.types.splice(0, this.types.length, ...e.types), e.files) {
            this.files.splice(0, this.files.length);
            for(let t = 0; t < e.files.length; t++){
                const n = e.files.item(t);
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
}, e8c = class {
    constructor(e){
        e?.getSetSize ? this.getSetSize = e.getSetSize.bind(e) : this.getSetSize = (t, n, i)=>i, e?.getPosInSet ? this.getPosInSet = e.getPosInSet.bind(e) : this.getPosInSet = (t, n)=>n + 1, e?.getRole ? this.getRole = e.getRole.bind(e) : this.getRole = (t)=>"listitem", e?.isChecked ? this.isChecked = e.isChecked.bind(e) : this.isChecked = (t)=>{};
    }
}, bre = class Okm {
    constructor(t, n, i, r = Lwe){
        if (this.virtualDelegate = n, this.domId = `list_id_${++Okm.InstanceCount}`, this.renderers = new Map, this.renderWidth = 0, this._scrollHeight = 0, this.disposables = new He, this.scrollableElementUpdateDisposable = this.disposables.add(new cn), this.scrollableElementWidthDelayer = new xg(50), this.splicing = !1, this.dragOverAnimationDisposable = this.disposables.add(new cn), this.dragOverAnimationStopDisposable = this.disposables.add(new cn), this.dragOverMouseY = 0, this.canDrop = !1, this.currentDragFeedbackDisposable = this.disposables.add(new cn), this.onDragLeaveTimeout = this.disposables.add(new cn), this.currentSelectionDisposable = this.disposables.add(new cn), this._onDidChangeContentHeight = new ve, this._onDidChangeContentWidth = new ve, this.onDidChangeContentHeight = Ct.latch(this._onDidChangeContentHeight.event, void 0, this.disposables), this.onDidChangeContentWidth = Ct.latch(this._onDidChangeContentWidth.event, void 0, this.disposables), this._horizontalScrolling = !1, r.horizontalScrolling && r.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
        this.items = [], this.itemId = 0, this.rangeMap = this.createRangeMap(r.paddingTop ?? 0);
        for (const o of i)this.renderers.set(o.templateId, o);
        if (this.cache = this.disposables.add(new JUc(this.renderers)), this.lastRenderTop = 0, this.lastRenderHeight = 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-list", this.domNode.classList.add(this.domId), this.domNode.tabIndex = 0, this.domNode.classList.toggle("mouse-support", typeof r.mouseSupport == "boolean" ? r.mouseSupport : !0), this._horizontalScrolling = r.horizontalScrolling ?? Lwe.horizontalScrolling, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this.paddingBottom = typeof r.paddingBottom > "u" ? 0 : r.paddingBottom, this.itemGap = typeof r.itemGap > "u" ? 0 : r.itemGap, this.accessibilityProvider = new e8c(r.accessibilityProvider), this.rowsContainer = document.createElement("div"), this.rowsContainer.className = "monaco-list-rows", (r.transformOptimization ?? Lwe.transformOptimization) && (this.rowsContainer.style.transform = "translate3d(0px, 0px, 0px)", this.rowsContainer.style.overflow = "hidden", this.rowsContainer.style.contain = "strict"), this.disposables.add(zT.addTarget(this.rowsContainer)), this.scrollable = this.disposables.add(new mwe({
            forceIntegerValues: !0,
            smoothScrollDuration: r.smoothScrolling ?? !1 ? 125 : 0,
            scheduleAtNextAnimationFrame: (o)=>Gb(xi(this.domNode), o)
        })), this.scrollableElement = this.disposables.add(new YOt(this.rowsContainer, {
            alwaysConsumeMouseWheel: r.alwaysConsumeMouseWheel ?? Lwe.alwaysConsumeMouseWheel,
            horizontal: 1,
            vertical: r.verticalScrollMode ?? Lwe.verticalScrollMode,
            useShadows: r.useShadows ?? Lwe.useShadows,
            mouseWheelScrollSensitivity: r.mouseWheelScrollSensitivity,
            fastScrollSensitivity: r.fastScrollSensitivity,
            scrollByPage: r.scrollByPage
        }, this.scrollable)), this.domNode.appendChild(this.scrollableElement.getDomNode()), t.appendChild(this.domNode), this.scrollableElement.onScroll(this.onScroll, this, this.disposables), this.disposables.add(Xt(this.rowsContainer, ov.Change, (o)=>this.onTouchChange(o))), this.disposables.add(Xt(this.scrollableElement.getDomNode(), "scroll", (o)=>{
            const a = o.target, c = a.scrollTop;
            a.scrollTop = 0, r.scrollToActiveElement && this.setScrollTop(this.scrollTop + c);
        })), this.disposables.add(Xt(this.domNode, "dragover", (o)=>this.onDragOver(this.toDragEvent(o)))), this.disposables.add(Xt(this.domNode, "drop", (o)=>this.onDrop(this.toDragEvent(o)))), this.disposables.add(Xt(this.domNode, "dragleave", (o)=>this.onDragLeave(this.toDragEvent(o)))), this.disposables.add(Xt(this.domNode, "dragend", (o)=>this.onDragEnd(o))), r.userSelection) {
            if (r.dnd) throw new Error("DND and user selection cannot be used simultaneously");
            this.disposables.add(Xt(this.domNode, "mousedown", (o)=>this.onPotentialSelectionStart(o)));
        }
        this.setRowLineHeight = r.setRowLineHeight ?? Lwe.setRowLineHeight, this.setRowHeight = r.setRowHeight ?? Lwe.setRowHeight, this.supportDynamicHeights = r.supportDynamicHeights ?? Lwe.supportDynamicHeights, this.dnd = r.dnd ?? this.disposables.add(Lwe.dnd), this.layout(r.initialSize?.height, r.initialSize?.width), r.scrollToActiveElement && this._setupFocusObserver(t);
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
    set horizontalScrolling(t) {
        if (t !== this._horizontalScrolling) {
            if (t && this.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
            if (this._horizontalScrolling = t, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this._horizontalScrolling) {
                for (const n of this.items)this.measureItemWidth(n);
                this.updateScrollWidth(), this.scrollableElement.setScrollDimensions({
                    width: $ht(this.domNode)
                }), this.rowsContainer.style.width = `${Math.max(this.scrollWidth || 0, this.renderWidth)}px`;
            } else this.scrollableElementWidthDelayer.cancel(), this.scrollableElement.setScrollDimensions({
                width: this.renderWidth,
                scrollWidth: this.renderWidth
            }), this.rowsContainer.style.width = "";
        }
    }
    _setupFocusObserver(t) {
        this.disposables.add(Xt(t, "focus", ()=>{
            const n = WS();
            this.activeElement !== n && n !== null && (this.activeElement = n, this._scrollToActiveElement(this.activeElement, t));
        }, !0));
    }
    _scrollToActiveElement(t, n) {
        const i = n.getBoundingClientRect(), s = t.getBoundingClientRect().top - i.top;
        s < 0 && this.setScrollTop(this.scrollTop + s);
    }
    updateOptions(t) {
        if (t.paddingBottom !== void 0 && (this.paddingBottom = t.paddingBottom, this.scrollableElement.setScrollDimensions({
            scrollHeight: this.scrollHeight
        })), t.smoothScrolling !== void 0 && this.scrollable.setSmoothScrollDuration(t.smoothScrolling ? 125 : 0), t.horizontalScrolling !== void 0 && (this.horizontalScrolling = t.horizontalScrolling), t.itemGap !== void 0 && t.itemGap !== this.itemGap) {
            this.itemGap = t.itemGap;
            const i = this.items.slice();
            this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this._splice(0, i.length, i.map((r)=>r.element));
        }
        let n;
        if (t.scrollByPage !== void 0 && (n = {
            ...n ?? {},
            scrollByPage: t.scrollByPage
        }), t.mouseWheelScrollSensitivity !== void 0 && (n = {
            ...n ?? {},
            mouseWheelScrollSensitivity: t.mouseWheelScrollSensitivity
        }), t.fastScrollSensitivity !== void 0 && (n = {
            ...n ?? {},
            fastScrollSensitivity: t.fastScrollSensitivity
        }), n && this.scrollableElement.updateOptions(n), t.paddingTop !== void 0 && t.paddingTop !== this.rangeMap.paddingTop) {
            const i = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), r = t.paddingTop - this.rangeMap.paddingTop;
            this.rangeMap.paddingTop = t.paddingTop, this.render(i, Math.max(0, this.lastRenderTop + r), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.lastRenderTop, this.lastRenderHeight);
        }
    }
    delegateScrollFromMouseWheelEvent(t) {
        this.scrollableElement.delegateScrollFromMouseWheelEvent(t);
    }
    delegateVerticalScrollbarPointerDown(t) {
        this.scrollableElement.delegateVerticalScrollbarPointerDown(t);
    }
    updateElementHeight(t, n, i) {
        if (t < 0 || t >= this.items.length) return;
        const r = this.items[t].size;
        if (typeof n > "u") {
            if (!this.supportDynamicHeights) {
                console.warn("Dynamic heights not supported", new Error().stack);
                return;
            }
            this.items[t].lastDynamicHeightWidth = void 0, n = r + this.probeDynamicHeight(t);
        }
        if (r === n) return;
        const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        let o = 0;
        t < s.start || i !== null && i > t && i < s.end ? o = n - r : o = 0;
        const a = this.itemGap > 0 ? n + this.itemGap : n;
        this.rangeMap.splice(t, 1, [
            {
                size: a
            }
        ]), this.items[t].size = n, this.render(s, Math.max(0, this.lastRenderTop + o), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights ? this._rerender(this.lastRenderTop, this.lastRenderHeight) : this._onDidChangeContentHeight.fire(this.contentHeight);
    }
    createRangeMap(t) {
        return new QUc(t);
    }
    splice(t, n, i = []) {
        if (this.splicing) throw new Error("Can't run recursive splices.");
        this.splicing = !0;
        try {
            return this._splice(t, n, i);
        } finally{
            this.splicing = !1, this._onDidChangeContentHeight.fire(this.contentHeight);
        }
    }
    _splice(t, n, i = []) {
        const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), s = {
            start: t,
            end: t + n
        }, o = j7.intersect(r, s), a = new Map;
        for(let R = o.end - 1; R >= o.start; R--){
            const D = this.items[R];
            if (D.dragStartDisposable.dispose(), D.checkedDisposable.dispose(), D.row) {
                let P = a.get(D.templateId);
                P || (P = [], a.set(D.templateId, P));
                const N = this.renderers.get(D.templateId);
                N && N.disposeElement && N.disposeElement(D.element, R, D.row.templateData, D.size), P.unshift(D.row);
            }
            D.row = null, D.stale = !0;
        }
        const c = {
            start: t + n,
            end: this.items.length
        }, l = j7.intersect(c, r), u = j7.relativeComplement(c, r), h = i.map((R)=>({
                id: String(this.itemId++),
                element: R,
                templateId: this.virtualDelegate.getTemplateId(R),
                size: this.virtualDelegate.getHeight(R),
                width: void 0,
                hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(R),
                lastDynamicHeightWidth: void 0,
                row: null,
                uri: void 0,
                dropTarget: !1,
                dragStartDisposable: we.None,
                checkedDisposable: we.None,
                stale: !1
            }));
        let p;
        if (t === 0 && n >= this.items.length) {
            if (this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this.itemGap > 0) {
                const R = h.map((D)=>({
                        ...D,
                        size: D.size + this.itemGap
                    }));
                if (R.length > 0) {
                    const D = R[R.length - 1];
                    R[R.length - 1] = {
                        ...D,
                        size: D.size - this.itemGap
                    };
                }
                this.rangeMap.splice(0, 0, R);
            } else this.rangeMap.splice(0, 0, h);
            p = this.items, this.items = h;
        } else {
            if (this.itemGap > 0) {
                const R = h.map((D)=>({
                        ...D,
                        size: D.size + this.itemGap
                    }));
                if (R.length > 0 && t + R.length === this.items.length + R.length) {
                    const D = R[R.length - 1];
                    R[R.length - 1] = {
                        ...D,
                        size: D.size - this.itemGap
                    };
                }
                this.rangeMap.splice(t, n, R);
            } else this.rangeMap.splice(t, n, h);
            p = jpi(this.items, t, n, h);
        }
        const g = i.length - n, f = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), v = pns(l, g), b = j7.intersect(f, v);
        for(let R = b.start; R < b.end; R++)this.updateItemInDOM(this.items[R], R);
        const y = j7.relativeComplement(v, f);
        for (const R of y)for(let D = R.start; D < R.end; D++)this.removeItemFromDOM(D);
        const T = u.map((R)=>pns(R, g)), A = [
            {
                start: t,
                end: t + i.length
            },
            ...T
        ].map((R)=>j7.intersect(f, R)).reverse();
        for (const R of A)for(let D = R.end - 1; D >= R.start; D--){
            const P = this.items[D], O = a.get(P.templateId)?.pop();
            this.insertItemInDOM(D, O);
        }
        for (const R of a.values())for (const D of R)this.cache.release(D);
        return this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight), p.map((R)=>R.element);
    }
    eventuallyUpdateScrollDimensions() {
        this._scrollHeight = this.contentHeight, this.rowsContainer.style.height = `${this._scrollHeight}px`, this.scrollableElementUpdateDisposable.value || (this.scrollableElementUpdateDisposable.value = Gb(xi(this.domNode), ()=>{
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
        let t = 0;
        for (const n of this.items)typeof n.width < "u" && (t = Math.max(t, n.width));
        this.scrollWidth = t, this.scrollableElement.setScrollDimensions({
            scrollWidth: t === 0 ? 0 : t + 10
        }), this._onDidChangeContentWidth.fire(this.scrollWidth);
    }
    updateWidth(t) {
        if (!this.horizontalScrolling || typeof this.scrollWidth > "u") return;
        const n = this.items[t];
        this.measureItemWidth(n), typeof n.width < "u" && n.width > this.scrollWidth && (this.scrollWidth = n.width, this.scrollableElement.setScrollDimensions({
            scrollWidth: this.scrollWidth + 10
        }), this._onDidChangeContentWidth.fire(this.scrollWidth));
    }
    rerender() {
        if (this.supportDynamicHeights) {
            for (const t of this.items)t.lastDynamicHeightWidth = void 0;
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
        const t = this.firstVisibleIndex, n = this.rangeMap.positionAt(t), i = this.rangeMap.positionAt(t + 1);
        return i !== -1 && (i - n) / 2 + n < this.scrollTop ? t + 1 : t;
    }
    get lastVisibleIndex() {
        return this.getRenderRange(this.lastRenderTop, this.lastRenderHeight).end - 1;
    }
    element(t) {
        return this.items[t].element;
    }
    indexOf(t) {
        return this.items.findIndex((n)=>n.element === t);
    }
    domElement(t) {
        const n = this.items[t].row;
        return n && n.domNode;
    }
    elementHeight(t) {
        return this.items[t].size;
    }
    elementTop(t) {
        return this.rangeMap.positionAt(t);
    }
    indexAt(t) {
        return this.rangeMap.indexAt(t);
    }
    indexAfter(t) {
        return this.rangeMap.indexAfter(t);
    }
    layout(t, n) {
        const i = {
            height: typeof t == "number" ? t : Omn(this.domNode)
        };
        this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), i.scrollHeight = this.scrollHeight), this.scrollableElement.setScrollDimensions(i), typeof n < "u" && (this.renderWidth = n, this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight)), this.horizontalScrolling && this.scrollableElement.setScrollDimensions({
            width: typeof n == "number" ? n : $ht(this.domNode)
        });
    }
    render(t, n, i, r, s, o = !1) {
        const a = this.getRenderRange(n, i), c = j7.relativeComplement(a, t).reverse(), l = j7.relativeComplement(t, a);
        if (o) {
            const u = j7.intersect(t, a);
            for(let h = u.start; h < u.end; h++)this.updateItemInDOM(this.items[h], h);
        }
        this.cache.transact(()=>{
            for (const u of l)for(let h = u.start; h < u.end; h++)this.removeItemFromDOM(h);
            for (const u of c)for(let h = u.end - 1; h >= u.start; h--)this.insertItemInDOM(h);
        }), r !== void 0 && (this.rowsContainer.style.left = `-${r}px`), this.rowsContainer.style.top = `-${n}px`, this.horizontalScrolling && s !== void 0 && (this.rowsContainer.style.width = `${Math.max(s, this.renderWidth)}px`), this.lastRenderTop = n, this.lastRenderHeight = i;
    }
    insertItemInDOM(t, n) {
        const i = this.items[t];
        if (!i.row) if (n) i.row = n, i.stale = !0;
        else {
            const c = this.cache.alloc(i.templateId);
            i.row = c.row, i.stale ||= c.isReusingConnectedDomNode;
        }
        const r = this.accessibilityProvider.getRole(i.element) || "listitem";
        i.row.domNode.setAttribute("role", r);
        const s = this.accessibilityProvider.isChecked(i.element);
        if (typeof s == "boolean") i.row.domNode.setAttribute("aria-checked", String(!!s));
        else if (s) {
            const c = (l)=>i.row.domNode.setAttribute("aria-checked", String(!!l));
            c(s.value), i.checkedDisposable = s.onDidChange(()=>c(s.value));
        }
        if (i.stale || !i.row.domNode.parentElement) {
            const c = this.items.at(t + 1)?.row?.domNode ?? null;
            (i.row.domNode.parentElement !== this.rowsContainer || i.row.domNode.nextElementSibling !== c) && this.rowsContainer.insertBefore(i.row.domNode, c), i.stale = !1;
        }
        this.updateItemInDOM(i, t);
        const o = this.renderers.get(i.templateId);
        if (!o) throw new Error(`No renderer found for template id ${i.templateId}`);
        o?.renderElement(i.element, t, i.row.templateData, i.size);
        const a = this.dnd.getDragURI(i.element);
        i.dragStartDisposable.dispose(), i.row.domNode.draggable = !!a, a && (i.dragStartDisposable = Xt(i.row.domNode, "dragstart", (c)=>this.onDragStart(i.element, a, c))), this.horizontalScrolling && (this.measureItemWidth(i), this.eventuallyUpdateScrollWidth());
    }
    measureItemWidth(t) {
        if (!t.row || !t.row.domNode) return;
        t.row.domNode.style.width = "fit-content", t.width = $ht(t.row.domNode);
        const n = xi(t.row.domNode).getComputedStyle(t.row.domNode);
        n.paddingLeft && (t.width += parseFloat(n.paddingLeft)), n.paddingRight && (t.width += parseFloat(n.paddingRight)), t.row.domNode.style.width = "";
    }
    updateItemInDOM(t, n) {
        t.row.domNode.style.top = `${this.elementTop(n)}px`, this.setRowHeight && (t.row.domNode.style.height = `${t.size}px`), this.setRowLineHeight && (t.row.domNode.style.lineHeight = `${t.size}px`), t.row.domNode.setAttribute("data-index", `${n}`), t.row.domNode.setAttribute("data-last-element", n === this.length - 1 ? "true" : "false"), t.row.domNode.setAttribute("data-parity", n % 2 === 0 ? "even" : "odd"), t.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(t.element, n, this.length))), t.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(t.element, n))), t.row.domNode.setAttribute("id", this.getElementDomId(n)), t.row.domNode.classList.toggle("drop-target", t.dropTarget);
    }
    removeItemFromDOM(t) {
        const n = this.items[t];
        if (n.dragStartDisposable.dispose(), n.checkedDisposable.dispose(), n.row) {
            const i = this.renderers.get(n.templateId);
            i && i.disposeElement && i.disposeElement(n.element, t, n.row.templateData, n.size), this.cache.release(n.row), n.row = null;
        }
        this.horizontalScrolling && this.eventuallyUpdateScrollWidth();
    }
    getScrollTop() {
        return this.scrollableElement.getScrollPosition().scrollTop;
    }
    setScrollTop(t, n) {
        this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), this.scrollableElement.setScrollDimensions({
            scrollHeight: this.scrollHeight
        })), this.scrollableElement.setScrollPosition({
            scrollTop: t,
            reuseAnimation: n
        });
    }
    getScrollLeft() {
        return this.scrollableElement.getScrollPosition().scrollLeft;
    }
    setScrollLeft(t) {
        this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), this.scrollableElement.setScrollDimensions({
            scrollWidth: this.scrollWidth
        })), this.scrollableElement.setScrollPosition({
            scrollLeft: t
        });
    }
    get scrollTop() {
        return this.getScrollTop();
    }
    set scrollTop(t) {
        this.setScrollTop(t);
    }
    get scrollHeight() {
        return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom;
    }
    get onMouseClick() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "click")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onMouseDblClick() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "dblclick")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onMouseMiddleClick() {
        return Ct.filter(Ct.map(this.disposables.add(new mp(this.domNode, "auxclick")).event, (t)=>this.toMouseEvent(t), this.disposables), (t)=>t.browserEvent.button === 1, this.disposables);
    }
    get onMouseUp() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "mouseup")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onMouseDown() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "mousedown")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onMouseOver() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "mouseover")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onMouseMove() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "mousemove")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onMouseOut() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "mouseout")).event, (t)=>this.toMouseEvent(t), this.disposables);
    }
    get onContextMenu() {
        return Ct.any(Ct.map(this.disposables.add(new mp(this.domNode, "contextmenu")).event, (t)=>this.toMouseEvent(t), this.disposables), Ct.map(this.disposables.add(new mp(this.domNode, ov.Contextmenu)).event, (t)=>this.toGestureEvent(t), this.disposables));
    }
    get onTouchStart() {
        return Ct.map(this.disposables.add(new mp(this.domNode, "touchstart")).event, (t)=>this.toTouchEvent(t), this.disposables);
    }
    get onTap() {
        return Ct.map(this.disposables.add(new mp(this.rowsContainer, ov.Tap)).event, (t)=>this.toGestureEvent(t), this.disposables);
    }
    toMouseEvent(t) {
        const n = this.getItemIndexFromEventTarget(t.target || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element;
        return {
            browserEvent: t,
            index: n,
            element: r
        };
    }
    toTouchEvent(t) {
        const n = this.getItemIndexFromEventTarget(t.target || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element;
        return {
            browserEvent: t,
            index: n,
            element: r
        };
    }
    toGestureEvent(t) {
        const n = this.getItemIndexFromEventTarget(t.initialTarget || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element;
        return {
            browserEvent: t,
            index: n,
            element: r
        };
    }
    toDragEvent(t) {
        const n = this.getItemIndexFromEventTarget(t.target || null), i = typeof n > "u" ? void 0 : this.items[n], r = i && i.element, s = this.getTargetSector(t, n);
        return {
            browserEvent: t,
            index: n,
            element: r,
            sector: s
        };
    }
    onScroll(t) {
        try {
            const n = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            this.render(n, t.scrollTop, t.height, t.scrollLeft, t.scrollWidth), this.supportDynamicHeights && this._rerender(t.scrollTop, t.height, t.inSmoothScrolling);
        } catch (n) {
            throw console.error("Got bad scroll event:", t), n;
        }
    }
    onTouchChange(t) {
        t.preventDefault(), t.stopPropagation(), this.scrollTop -= t.translationY;
    }
    onDragStart(t, n, i) {
        if (!i.dataTransfer) return;
        const r = this.dnd.getDragElements(t);
        i.dataTransfer.effectAllowed = "copyMove", i.dataTransfer.setData(yD.TEXT, n);
        let s;
        this.dnd.getDragLabel && (s = this.dnd.getDragLabel(r, i)), typeof s > "u" && (s = String(r.length)), emt(i, this.domNode, s, [
            this.domId
        ]), this.domNode.classList.add("dragging"), this.currentDragData = new Kge(r), tKe.CurrentDragAndDropData = new mns(r), this.dnd.onDragStart?.(this.currentDragData, i);
    }
    onPotentialSelectionStart(t) {
        const n = Bgi(this.domNode), i = new He;
        this.currentSelectionDisposable.value = i;
        const r = i.add(new He);
        r.add(Xt(this.domNode, "selectstart", ()=>{
            r.add(Xt(n, "mousemove", (s)=>{
                n.getSelection()?.isCollapsed === !1 && this.setupDragAndDropScrollTopAnimation(s);
            })), i.add(rn(()=>{
                const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
                this.currentSelectionBounds = void 0, this.render(s, this.lastRenderTop, this.lastRenderHeight, void 0, void 0);
            })), i.add(Xt(n, "selectionchange", ()=>{
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
        })), r.add(Xt(n, "mouseup", ()=>{
            r.dispose(), this.teardownDragAndDropScrollTopAnimation(), n.getSelection()?.isCollapsed !== !1 && i.dispose();
        }));
    }
    getIndexOfListElement(t) {
        if (!(!t || !this.domNode.contains(t))) for(; t && t !== this.domNode;){
            if (t.dataset?.index) return Number(t.dataset.index);
            t = t.parentElement;
        }
    }
    onDragOver(t) {
        if (t.browserEvent.preventDefault(), this.onDragLeaveTimeout.clear(), tKe.CurrentDragAndDropData && tKe.CurrentDragAndDropData.getData() === "vscode-ui" || (this.setupDragAndDropScrollTopAnimation(t.browserEvent), !t.browserEvent.dataTransfer)) return !1;
        if (!this.currentDragData) if (tKe.CurrentDragAndDropData) this.currentDragData = tKe.CurrentDragAndDropData;
        else {
            if (!t.browserEvent.dataTransfer.types) return !1;
            this.currentDragData = new kFt;
        }
        const n = this.dnd.onDragOver(this.currentDragData, t.element, t.index, t.sector, t.browserEvent);
        if (this.canDrop = typeof n == "boolean" ? n : n.accept, !this.canDrop) return this.currentDragFeedback = void 0, this.currentDragFeedbackDisposable.clear(), !1;
        t.browserEvent.dataTransfer.dropEffect = typeof n != "boolean" && n.effect?.type === 0 ? "copy" : "move";
        let i;
        typeof n != "boolean" && n.feedback ? i = n.feedback : typeof t.index > "u" ? i = [
            -1
        ] : i = [
            t.index
        ], i = Xm(i).filter((s)=>s >= -1 && s < this.length).sort((s, o)=>s - o), i = i[0] === -1 ? [
            -1
        ] : i;
        let r = typeof n != "boolean" && n.effect && n.effect.position ? n.effect.position : "drop-target";
        if (Cyg(this.currentDragFeedback, i) && this.currentDragFeedbackPosition === r) return !0;
        if (this.currentDragFeedback = i, this.currentDragFeedbackPosition = r, this.currentDragFeedbackDisposable.clear(), i[0] === -1) this.domNode.classList.add(r), this.rowsContainer.classList.add(r), this.currentDragFeedbackDisposable.value = rn(()=>{
            this.domNode.classList.remove(r), this.rowsContainer.classList.remove(r);
        });
        else {
            if (i.length > 1 && r !== "drop-target") throw new Error("Can't use multiple feedbacks with position different than 'over'");
            r === "drop-target-after" && i[0] < this.length - 1 && (i[0] += 1, r = "drop-target-before");
            for (const s of i){
                const o = this.items[s];
                o.dropTarget = !0, o.row?.domNode.classList.add(r);
            }
            this.currentDragFeedbackDisposable.value = rn(()=>{
                for (const s of i){
                    const o = this.items[s];
                    o.dropTarget = !1, o.row?.domNode.classList.remove(r);
                }
            });
        }
        return !0;
    }
    onDragLeave(t) {
        this.onDragLeaveTimeout.value = Cl(()=>this.clearDragOverFeedback(), 100), this.currentDragData && this.dnd.onDragLeave?.(this.currentDragData, t.element, t.index, t.browserEvent);
    }
    onDrop(t) {
        if (!this.canDrop) return;
        const n = this.currentDragData;
        this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, tKe.CurrentDragAndDropData = void 0, !(!n || !t.browserEvent.dataTransfer) && (t.browserEvent.preventDefault(), n.update(t.browserEvent.dataTransfer), this.dnd.drop(n, t.element, t.index, t.sector, t.browserEvent));
    }
    onDragEnd(t) {
        this.canDrop = !1, this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, tKe.CurrentDragAndDropData = void 0, this.dnd.onDragEnd?.(t);
    }
    clearDragOverFeedback() {
        this.currentDragFeedback = void 0, this.currentDragFeedbackPosition = void 0, this.currentDragFeedbackDisposable.clear();
    }
    setupDragAndDropScrollTopAnimation(t) {
        if (!this.dragOverAnimationDisposable.value) {
            const n = Uht(this.domNode).top;
            this.dragOverAnimationDisposable.value = GDc(xi(this.domNode), this.animateDragAndDropScrollTop.bind(this, n));
        }
        this.dragOverAnimationStopDisposable.value = Cl(()=>{
            this.dragOverAnimationDisposable.clear();
        }, 1e3), this.dragOverMouseY = t.pageY;
    }
    animateDragAndDropScrollTop(t) {
        if (this.dragOverMouseY === void 0) return;
        const n = this.dragOverMouseY - t, i = this.renderHeight - 35;
        n < 35 ? this.scrollTop += Math.max(-14, Math.floor(.3 * (n - 35))) : n > i && (this.scrollTop += Math.min(14, Math.floor(.3 * (n - i))));
    }
    teardownDragAndDropScrollTopAnimation() {
        this.dragOverAnimationStopDisposable.clear(), this.dragOverAnimationDisposable.clear();
    }
    getTargetSector(t, n) {
        if (n === void 0) return;
        const i = t.offsetY / this.items[n].size, r = Math.floor(i / .25);
        return kb(r, 0, 3);
    }
    getItemIndexFromEventTarget(t) {
        const n = this.scrollableElement.getDomNode();
        let i = t;
        for(; (nu(i) || SYr(i)) && i !== this.rowsContainer && n.contains(i);){
            const r = i.getAttribute("data-index");
            if (r) {
                const s = Number(r);
                if (!isNaN(s)) return s;
            }
            i = i.parentElement;
        }
    }
    getVisibleRange(t, n) {
        return {
            start: this.rangeMap.indexAt(t),
            end: this.rangeMap.indexAfter(t + n - 1)
        };
    }
    getRenderRange(t, n) {
        const i = this.getVisibleRange(t, n);
        if (this.currentSelectionBounds) {
            const r = this.rangeMap.count;
            i.start = Math.min(i.start, this.currentSelectionBounds.start, r), i.end = Math.min(Math.max(i.end, this.currentSelectionBounds.end + 1), r);
        }
        return i;
    }
    _rerender(t, n, i) {
        const r = this.getRenderRange(t, n);
        let s, o;
        t === this.elementTop(r.start) ? (s = r.start, o = 0) : r.end - r.start > 1 && (s = r.start + 1, o = this.elementTop(s) - t);
        let a = 0;
        for(;;){
            const c = this.getRenderRange(t, n);
            let l = !1;
            for(let u = c.start; u < c.end; u++){
                const h = this.probeDynamicHeight(u);
                h !== 0 && this.rangeMap.splice(u, 1, [
                    this.items[u]
                ]), a += h, l = l || h !== 0;
            }
            if (!l) {
                a !== 0 && this.eventuallyUpdateScrollDimensions();
                const u = j7.relativeComplement(r, c);
                for (const p of u)for(let g = p.start; g < p.end; g++)this.items[g].row && this.removeItemFromDOM(g);
                const h = j7.relativeComplement(c, r).reverse();
                for (const p of h)for(let g = p.end - 1; g >= p.start; g--)this.insertItemInDOM(g);
                for(let p = c.start; p < c.end; p++)this.items[p].row && this.updateItemInDOM(this.items[p], p);
                if (typeof s == "number") {
                    const p = this.scrollable.getFutureScrollPosition().scrollTop - t, g = this.elementTop(s) - o + p;
                    this.setScrollTop(g, i);
                }
                this._onDidChangeContentHeight.fire(this.contentHeight);
                return;
            }
        }
    }
    probeDynamicHeight(t) {
        const n = this.items[t], i = this.probeDynamicHeightForItem(n, t);
        return i > 0 && this.virtualDelegate.setDynamicHeight?.(n.element, n.size), i;
    }
    probeDynamicHeightForItem(t, n) {
        if (this.virtualDelegate.getDynamicHeight) {
            const o = this.virtualDelegate.getDynamicHeight(t.element);
            if (o !== null) {
                const a = t.size;
                return t.size = o, t.lastDynamicHeightWidth = this.renderWidth, o - a;
            }
        }
        if (!t.hasDynamicHeight || t.lastDynamicHeightWidth === this.renderWidth || this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(t.element)) return 0;
        const i = t.size;
        if (t.row) return t.row.domNode.style.height = "", t.size = t.row.domNode.offsetHeight, t.size === 0 && !iw(t.row.domNode, xi(t.row.domNode).document.body) && console.warn("Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!", new Error().stack), t.lastDynamicHeightWidth = this.renderWidth, t.size - i;
        const { row: r } = this.cache.alloc(t.templateId);
        r.domNode.style.height = "", this.rowsContainer.appendChild(r.domNode);
        const s = this.renderers.get(t.templateId);
        if (!s) throw new Zu("Missing renderer for templateId: " + t.templateId);
        return s.renderElement(t.element, n, r.templateData, void 0), t.size = r.domNode.offsetHeight, s.disposeElement?.(t.element, n, r.templateData, void 0), t.lastDynamicHeightWidth = this.renderWidth, r.domNode.remove(), this.cache.release(r), t.size - i;
    }
    getElementDomId(t) {
        return `${this.domId}_${t}`;
    }
    dispose() {
        this.currentSelectionDisposable.clear(), this.currentDragFeedbackDisposable.clear();
        for (const t of this.items)if (t.dragStartDisposable.dispose(), t.checkedDisposable.dispose(), t.row) {
            const n = this.renderers.get(t.row.templateId);
            n && (n.disposeElement?.(t.element, -1, t.row.templateData, void 0), n.disposeTemplate(t.row.templateData));
        }
        this.items = [], this.domNode?.remove(), this.disposables.dispose();
    }
}, bre.InstanceCount = 0, ie([
    xo
], bre.prototype, "onMouseClick", null), ie([
    xo
], bre.prototype, "onMouseDblClick", null), ie([
    xo
], bre.prototype, "onMouseMiddleClick", null), ie([
    xo
], bre.prototype, "onMouseUp", null), ie([
    xo
], bre.prototype, "onMouseDown", null), ie([
    xo
], bre.prototype, "onMouseOver", null), ie([
    xo
], bre.prototype, "onMouseMove", null), ie([
    xo
], bre.prototype, "onMouseOut", null), ie([
    xo
], bre.prototype, "onContextMenu", null), ie([
    xo
], bre.prototype, "onTouchStart", null), ie([
    xo
], bre.prototype, "onTap", null), gns = bre;

}
