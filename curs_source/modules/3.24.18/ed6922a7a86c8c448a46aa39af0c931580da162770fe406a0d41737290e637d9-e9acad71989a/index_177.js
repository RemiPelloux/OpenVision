import { lqf } from "./f0s.js";
import { $0i, G0i, Ggt, H0i, V0i, W0i, ihs, j0i, nhs, ths } from "./floating-ui.dom.js";
import { $Oi, FM } from "./index_175.js";
import { ZNs } from "./index_176.js";
import { M0 } from "./index_18.js";
import { A_, I_, bS, cus, cy, fgt, rb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Dru, QNs, uqf;
export { Dru, QNs, uqf };
var __wakaru_dqf_initialized = false;
export function dqf() {
if (__wakaru_dqf_initialized) return;
__wakaru_dqf_initialized = true;
x(), A_(), Ggt(), M0(), ZNs(), zS(), $Oi(), Dru = class {
    constructor({ editor: e, element: t, view: n, updateDelay: i = 250, resizeDelay: r = 60, shouldShow: s, appendTo: o, getReferencedVirtualElement: a, options: c }){
        this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.floatingUIOptions = {
            strategy: "absolute",
            placement: "top",
            offset: 8,
            flip: {},
            shift: {},
            arrow: !1,
            size: !1,
            autoPlacement: !1,
            hide: !1,
            inline: !1,
            onShow: void 0,
            onHide: void 0,
            onUpdate: void 0,
            onDestroy: void 0
        }, this.shouldShow = ({ view: u, state: h, from: p, to: g })=>{
            const { doc: f, selection: v } = h, { empty: b } = v, y = !f.textBetween(p, g).length && cus(h.selection), T = this.element.contains(document.activeElement);
            return !(!(u.hasFocus() || T) || b || y || !this.editor.isEditable);
        }, this.mousedownHandler = ()=>{
            this.preventHide = !0;
        }, this.dragstartHandler = ()=>{
            this.hide();
        }, this.resizeHandler = ()=>{
            this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(()=>{
                this.updatePosition();
            }, this.resizeDelay);
        }, this.focusHandler = ()=>{
            setTimeout(()=>this.update(this.editor.view));
        }, this.blurHandler = ({ event: u })=>{
            var h;
            if (this.editor.isDestroyed) {
                this.destroy();
                return;
            }
            if (this.preventHide) {
                this.preventHide = !1;
                return;
            }
            u?.relatedTarget && ((h = this.element.parentNode) != null && h.contains(u.relatedTarget)) || u?.relatedTarget !== this.editor.view.dom && this.hide();
        }, this.handleDebouncedUpdate = (u, h)=>{
            const p = !h?.selection.eq(u.state.selection), g = !h?.doc.eq(u.state.doc);
            !p && !g || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(()=>{
                this.updateHandler(u, p, g, h);
            }, this.updateDelay));
        }, this.updateHandler = (u, h, p, g)=>{
            const { composing: f } = u;
            if (f || !h && !p) return;
            if (!this.getShouldShow(g)) {
                this.hide();
                return;
            }
            this.updatePosition(), this.show();
        }, this.transactionHandler = ({ transaction: u })=>{
            u.getMeta("bubbleMenu") === "updatePosition" && this.updatePosition();
        };
        var l;
        this.editor = e, this.element = t, this.view = n, this.updateDelay = i, this.resizeDelay = r, this.appendTo = o, this.scrollTarget = (l = c?.scrollTarget) != null ? l : window, this.getReferencedVirtualElement = a, this.floatingUIOptions = {
            ...this.floatingUIOptions,
            ...c
        }, this.element.tabIndex = 0, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
    }
    get middlewares() {
        const e = [];
        return this.floatingUIOptions.flip && e.push(W0i(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(H0i(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)), this.floatingUIOptions.offset && e.push($0i(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)), this.floatingUIOptions.arrow && e.push(nhs(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(G0i(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(ths(typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0)), this.floatingUIOptions.hide && e.push(V0i(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(ihs(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)), e;
    }
    get virtualElement() {
        var e;
        const { selection: t } = this.editor.state, n = (e = this.getReferencedVirtualElement) == null ? void 0 : e.call(this);
        if (n) return n;
        const i = fgt(this.view, t.from, t.to);
        let r = {
            getBoundingClientRect: ()=>i,
            getClientRects: ()=>[
                    i
                ]
        };
        if (t instanceof I_) {
            let s = this.view.nodeDOM(t.from);
            const o = s.dataset.nodeViewWrapper ? s : s.querySelector("[data-node-view-wrapper]");
            o && (s = o), s && (r = {
                getBoundingClientRect: ()=>s.getBoundingClientRect(),
                getClientRects: ()=>[
                        s.getBoundingClientRect()
                    ]
            });
        }
        if (t instanceof FM) {
            const { $anchorCell: s, $headCell: o } = t, a = s ? s.pos : o.pos, c = o ? o.pos : s.pos, l = this.view.nodeDOM(a), u = this.view.nodeDOM(c);
            if (!l || !u) return;
            const h = l === u ? l.getBoundingClientRect() : lqf(l.getBoundingClientRect(), u.getBoundingClientRect());
            r = {
                getBoundingClientRect: ()=>h,
                getClientRects: ()=>[
                        h
                    ]
            };
        }
        return r;
    }
    updatePosition() {
        const e = this.virtualElement;
        e && j0i(e, this.element, {
            placement: this.floatingUIOptions.placement,
            strategy: this.floatingUIOptions.strategy,
            middleware: this.middlewares
        }).then(({ x: t, y: n, strategy: i })=>{
            this.element.style.width = "max-content", this.element.style.position = i, this.element.style.left = `${t}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
        });
    }
    update(e, t) {
        const { state: n } = e, i = n.selection.from !== n.selection.to;
        if (this.updateDelay > 0 && i) {
            this.handleDebouncedUpdate(e, t);
            return;
        }
        const r = !t?.selection.eq(e.state.selection), s = !t?.doc.eq(e.state.doc);
        this.updateHandler(e, r, s, t);
    }
    getShouldShow(e) {
        var t;
        const { state: n } = this.view, { selection: i } = n, { ranges: r } = i, s = Math.min(...r.map((c)=>c.$from.pos)), o = Math.max(...r.map((c)=>c.$to.pos));
        return ((t = this.shouldShow) == null ? void 0 : t.call(this, {
            editor: this.editor,
            element: this.element,
            view: this.view,
            state: n,
            oldState: e,
            from: s,
            to: o
        })) || !1;
    }
    show() {
        var e;
        if (this.isVisible) return;
        this.element.style.visibility = "visible", this.element.style.opacity = "1";
        const t = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
        (e = t ?? this.view.dom.parentElement) == null || e.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
    }
    hide() {
        this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
    }
    destroy() {
        this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
    }
}, QNs = (e)=>new rb({
        key: typeof e.pluginKey == "string" ? new cy(e.pluginKey) : e.pluginKey,
        view: (t)=>new Dru({
                view: t,
                ...e
            })
    }), uqf = bS.create({
    name: "bubbleMenu",
    addOptions () {
        return {
            element: null,
            pluginKey: "bubbleMenu",
            updateDelay: void 0,
            appendTo: void 0,
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        return this.options.element ? [
            QNs({
                pluginKey: this.options.pluginKey,
                editor: this.editor,
                element: this.options.element,
                updateDelay: this.options.updateDelay,
                options: this.options.options,
                appendTo: this.options.appendTo,
                getReferencedVirtualElement: this.options.getReferencedVirtualElement,
                shouldShow: this.options.shouldShow
            })
        ] : [];
    }
});

}
