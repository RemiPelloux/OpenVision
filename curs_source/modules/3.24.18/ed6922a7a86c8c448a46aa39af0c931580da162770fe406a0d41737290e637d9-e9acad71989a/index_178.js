import { $0i, G0i, Ggt, H0i, V0i, W0i, ihs, j0i, nhs, ths } from "./floating-ui.dom.js";
import { M0 } from "./index_18.js";
import { A_, bS, cy, eel, fgt, pus, rb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mru, JNs, hqf;
export { JNs, Mru, hqf };
var __wakaru_pqf_initialized = false;
export function pqf() {
if (__wakaru_pqf_initialized) return;
__wakaru_pqf_initialized = true;
x(), A_(), Ggt(), M0(), zS(), Mru = class {
    constructor({ editor: e, element: t, view: n, options: i, appendTo: r, shouldShow: s }){
        this.preventHide = !1, this.isVisible = !1, this.shouldShow = ({ view: o, state: a })=>{
            const { selection: c } = a, { $anchor: l, empty: u } = c, h = l.depth === 1, p = l.parent.isTextblock && !l.parent.type.spec.code && !l.parent.textContent && l.parent.childCount === 0 && !this.getTextContent(l.parent);
            return !(!o.hasFocus() || !u || !h || !p || !this.editor.isEditable);
        }, this.floatingUIOptions = {
            strategy: "absolute",
            placement: "right",
            offset: 8,
            flip: {},
            shift: {},
            arrow: !1,
            size: !1,
            autoPlacement: !1,
            hide: !1,
            inline: !1
        }, this.updateHandler = (o, a, c, l)=>{
            const { composing: u } = o;
            if (u || !a && !c) return;
            if (!this.getShouldShow(l)) {
                this.hide();
                return;
            }
            this.updatePosition(), this.show();
        }, this.mousedownHandler = ()=>{
            this.preventHide = !0;
        }, this.focusHandler = ()=>{
            setTimeout(()=>this.update(this.editor.view));
        }, this.blurHandler = ({ event: o })=>{
            var a;
            if (this.preventHide) {
                this.preventHide = !1;
                return;
            }
            o?.relatedTarget && ((a = this.element.parentNode) != null && a.contains(o.relatedTarget)) || o?.relatedTarget !== this.editor.view.dom && this.hide();
        }, this.editor = e, this.element = t, this.view = n, this.appendTo = r, this.floatingUIOptions = {
            ...this.floatingUIOptions,
            ...i
        }, this.element.tabIndex = 0, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
    }
    getTextContent(e) {
        return eel(e, {
            textSerializers: pus(this.editor.schema)
        });
    }
    get middlewares() {
        const e = [];
        return this.floatingUIOptions.flip && e.push(W0i(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(H0i(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)), this.floatingUIOptions.offset && e.push($0i(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)), this.floatingUIOptions.arrow && e.push(nhs(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(G0i(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(ths(typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0)), this.floatingUIOptions.hide && e.push(V0i(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(ihs(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)), e;
    }
    getShouldShow(e) {
        var t;
        const { state: n } = this.view, { selection: i } = n, { ranges: r } = i, s = Math.min(...r.map((c)=>c.$from.pos)), o = Math.max(...r.map((c)=>c.$to.pos));
        return (t = this.shouldShow) == null ? void 0 : t.call(this, {
            editor: this.editor,
            view: this.view,
            state: n,
            oldState: e,
            from: s,
            to: o
        });
    }
    updatePosition() {
        const { selection: e } = this.editor.state, t = fgt(this.view, e.from, e.to);
        j0i({
            getBoundingClientRect: ()=>t,
            getClientRects: ()=>[
                    t
                ]
        }, this.element, {
            placement: this.floatingUIOptions.placement,
            strategy: this.floatingUIOptions.strategy,
            middleware: this.middlewares
        }).then(({ x: i, y: r, strategy: s })=>{
            this.element.style.width = "max-content", this.element.style.position = s, this.element.style.left = `${i}px`, this.element.style.top = `${r}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
        });
    }
    update(e, t) {
        const n = !t?.selection.eq(e.state.selection), i = !t?.doc.eq(e.state.doc);
        this.updateHandler(e, n, i, t);
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
        }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
    }
}, JNs = (e)=>new rb({
        key: typeof e.pluginKey == "string" ? new cy(e.pluginKey) : e.pluginKey,
        view: (t)=>new Mru({
                view: t,
                ...e
            })
    }), hqf = bS.create({
    name: "floatingMenu",
    addOptions () {
        return {
            element: null,
            options: {},
            pluginKey: "floatingMenu",
            appendTo: void 0,
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        return this.options.element ? [
            JNs({
                pluginKey: this.options.pluginKey,
                editor: this.editor,
                element: this.options.element,
                options: this.options.options,
                appendTo: this.options.appendTo,
                shouldShow: this.options.shouldShow
            })
        ] : [];
    }
});

}
