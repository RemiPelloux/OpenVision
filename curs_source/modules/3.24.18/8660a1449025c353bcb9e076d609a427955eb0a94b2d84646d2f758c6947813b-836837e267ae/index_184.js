import { A8t, Aw, Fy, MS, Rw, j1, pZo, xnh } from "./LYd.js";
import { $Rr, BSt, GRr, HRr, WRr, iJo, jRr, nJo, qRr, tJo } from "./floating-ui.dom.js";
import { gE } from "./index_23.js";
import { E } from "./tslib.es6.js";
var dvp, FIa, gl1;
export { FIa, dvp, gl1 };
var __wakaru_fl1_initialized = false;
export function fl1() {
if (__wakaru_fl1_initialized) return;
__wakaru_fl1_initialized = true;
E(), Fy(), BSt(), gE(), Aw(), dvp = class {
    constructor({ editor: t, element: e, view: n, options: i, appendTo: r, shouldShow: s }){
        this.preventHide = !1, this.isVisible = !1, this.shouldShow = ({ view: o, state: a })=>{
            const { selection: l } = a, { $anchor: c, empty: u } = l, d = c.depth === 1, h = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent && c.parent.childCount === 0 && !this.getTextContent(c.parent);
            return !(!o.hasFocus() || !u || !d || !h || !this.editor.isEditable);
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
        }, this.updateHandler = (o, a, l, c)=>{
            const { composing: u } = o;
            if (u || !a && !l) return;
            if (!this.getShouldShow(c)) {
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
        }, this.editor = t, this.element = e, this.view = n, this.appendTo = r, this.floatingUIOptions = {
            ...this.floatingUIOptions,
            ...i
        }, this.element.tabIndex = 0, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
    }
    getTextContent(t) {
        return xnh(t, {
            textSerializers: pZo(this.editor.schema)
        });
    }
    get middlewares() {
        const t = [];
        return this.floatingUIOptions.flip && t.push(HRr(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push($Rr(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)), this.floatingUIOptions.offset && t.push(jRr(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)), this.floatingUIOptions.arrow && t.push(nJo(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(WRr(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(tJo(typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0)), this.floatingUIOptions.hide && t.push(GRr(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(iJo(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)), t;
    }
    getShouldShow(t) {
        var e;
        const { state: n } = this.view, { selection: i } = n, { ranges: r } = i, s = Math.min(...r.map((l)=>l.$from.pos)), o = Math.max(...r.map((l)=>l.$to.pos));
        return (e = this.shouldShow) == null ? void 0 : e.call(this, {
            editor: this.editor,
            view: this.view,
            state: n,
            oldState: t,
            from: s,
            to: o
        });
    }
    updatePosition() {
        const { selection: t } = this.editor.state, e = A8t(this.view, t.from, t.to);
        qRr({
            getBoundingClientRect: ()=>e,
            getClientRects: ()=>[
                    e
                ]
        }, this.element, {
            placement: this.floatingUIOptions.placement,
            strategy: this.floatingUIOptions.strategy,
            middleware: this.middlewares
        }).then(({ x: i, y: r, strategy: s })=>{
            this.element.style.width = "max-content", this.element.style.position = s, this.element.style.left = `${i}px`, this.element.style.top = `${r}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
        });
    }
    update(t, e) {
        const n = !e?.selection.eq(t.state.selection), i = !e?.doc.eq(t.state.doc);
        this.updateHandler(t, n, i, e);
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
        }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
    }
}, FIa = (t)=>new MS({
        key: typeof t.pluginKey == "string" ? new j1(t.pluginKey) : t.pluginKey,
        view: (e)=>new dvp({
                view: e,
                ...t
            })
    }), gl1 = Rw.create({
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
            FIa({
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
