import { A8t, Aw, Fy, MS, PS, Rw, j1, lZo } from "./LYd.js";
import { $Rr, BSt, GRr, HRr, WRr, iJo, jRr, nJo, qRr, tJo } from "./floating-ui.dom.js";
import { DO, EUr } from "./index_181.js";
import { LIa } from "./index_182.js";
import { gE } from "./index_23.js";
import { hl1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
var uvp, OIa, pl1;
export { OIa, pl1, uvp };
var __wakaru_ml1_initialized = false;
export function ml1() {
if (__wakaru_ml1_initialized) return;
__wakaru_ml1_initialized = true;
E(), Fy(), BSt(), gE(), LIa(), Aw(), EUr(), uvp = class {
    constructor({ editor: t, element: e, view: n, updateDelay: i = 250, resizeDelay: r = 60, shouldShow: s, appendTo: o, getReferencedVirtualElement: a, options: l }){
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
        }, this.shouldShow = ({ view: u, state: d, from: h, to: p })=>{
            const { doc: g, selection: f } = d, { empty: _ } = f, b = !g.textBetween(h, p).length && lZo(d.selection), y = this.element.contains(document.activeElement);
            return !(!(u.hasFocus() || y) || _ || b || !this.editor.isEditable);
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
            var d;
            if (this.editor.isDestroyed) {
                this.destroy();
                return;
            }
            if (this.preventHide) {
                this.preventHide = !1;
                return;
            }
            u?.relatedTarget && ((d = this.element.parentNode) != null && d.contains(u.relatedTarget)) || u?.relatedTarget !== this.editor.view.dom && this.hide();
        }, this.handleDebouncedUpdate = (u, d)=>{
            const h = !d?.selection.eq(u.state.selection), p = !d?.doc.eq(u.state.doc);
            !h && !p || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(()=>{
                this.updateHandler(u, h, p, d);
            }, this.updateDelay));
        }, this.updateHandler = (u, d, h, p)=>{
            const { composing: g } = u;
            if (g || !d && !h) return;
            if (!this.getShouldShow(p)) {
                this.hide();
                return;
            }
            this.updatePosition(), this.show();
        }, this.transactionHandler = ({ transaction: u })=>{
            u.getMeta("bubbleMenu") === "updatePosition" && this.updatePosition();
        };
        var c;
        this.editor = t, this.element = e, this.view = n, this.updateDelay = i, this.resizeDelay = r, this.appendTo = o, this.scrollTarget = (c = l?.scrollTarget) != null ? c : window, this.getReferencedVirtualElement = a, this.floatingUIOptions = {
            ...this.floatingUIOptions,
            ...l
        }, this.element.tabIndex = 0, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
    }
    get middlewares() {
        const t = [];
        return this.floatingUIOptions.flip && t.push(HRr(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push($Rr(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)), this.floatingUIOptions.offset && t.push(jRr(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)), this.floatingUIOptions.arrow && t.push(nJo(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(WRr(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(tJo(typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0)), this.floatingUIOptions.hide && t.push(GRr(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(iJo(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)), t;
    }
    get virtualElement() {
        var t;
        const { selection: e } = this.editor.state, n = (t = this.getReferencedVirtualElement) == null ? void 0 : t.call(this);
        if (n) return n;
        const i = A8t(this.view, e.from, e.to);
        let r = {
            getBoundingClientRect: ()=>i,
            getClientRects: ()=>[
                    i
                ]
        };
        if (e instanceof PS) {
            let s = this.view.nodeDOM(e.from);
            const o = s.dataset.nodeViewWrapper ? s : s.querySelector("[data-node-view-wrapper]");
            o && (s = o), s && (r = {
                getBoundingClientRect: ()=>s.getBoundingClientRect(),
                getClientRects: ()=>[
                        s.getBoundingClientRect()
                    ]
            });
        }
        if (e instanceof DO) {
            const { $anchorCell: s, $headCell: o } = e, a = s ? s.pos : o.pos, l = o ? o.pos : s.pos, c = this.view.nodeDOM(a), u = this.view.nodeDOM(l);
            if (!c || !u) return;
            const d = c === u ? c.getBoundingClientRect() : hl1(c.getBoundingClientRect(), u.getBoundingClientRect());
            r = {
                getBoundingClientRect: ()=>d,
                getClientRects: ()=>[
                        d
                    ]
            };
        }
        return r;
    }
    updatePosition() {
        const t = this.virtualElement;
        t && qRr(t, this.element, {
            placement: this.floatingUIOptions.placement,
            strategy: this.floatingUIOptions.strategy,
            middleware: this.middlewares
        }).then(({ x: e, y: n, strategy: i })=>{
            this.element.style.width = "max-content", this.element.style.position = i, this.element.style.left = `${e}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
        });
    }
    update(t, e) {
        const { state: n } = t, i = n.selection.from !== n.selection.to;
        if (this.updateDelay > 0 && i) {
            this.handleDebouncedUpdate(t, e);
            return;
        }
        const r = !e?.selection.eq(t.state.selection), s = !e?.doc.eq(t.state.doc);
        this.updateHandler(t, r, s, e);
    }
    getShouldShow(t) {
        var e;
        const { state: n } = this.view, { selection: i } = n, { ranges: r } = i, s = Math.min(...r.map((l)=>l.$from.pos)), o = Math.max(...r.map((l)=>l.$to.pos));
        return ((e = this.shouldShow) == null ? void 0 : e.call(this, {
            editor: this.editor,
            element: this.element,
            view: this.view,
            state: n,
            oldState: t,
            from: s,
            to: o
        })) || !1;
    }
    show() {
        var t;
        if (this.isVisible) return;
        this.element.style.visibility = "visible", this.element.style.opacity = "1";
        const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
        (t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
    }
    hide() {
        this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
    }
    destroy() {
        this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
    }
}, OIa = (t)=>new MS({
        key: typeof t.pluginKey == "string" ? new j1(t.pluginKey) : t.pluginKey,
        view: (e)=>new uvp({
                view: e,
                ...t
            })
    }), pl1 = Rw.create({
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
            OIa({
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
