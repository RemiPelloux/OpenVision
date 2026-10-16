import { He, Se, Zu, si } from "./HVr.js";
import { en } from "./dom_2.js";
import { qa } from "./observable.js";
import { CDc, Ds, Fht, SDc, TDc, Xo, bDc, g3, kDc, uJ, vYr, wDc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ef, EDc, xDc, IDc;
export { EDc, IDc, ef, xDc };
var __wakaru_Ahg_initialized = false;
export function Ahg() {
if (__wakaru_Ahg_initialized) return;
__wakaru_Ahg_initialized = true;
"use strict";
x(), si(), Se(), qa(), en(), ((e)=>{
    function t(r = void 0) {
        return (s, o, a)=>{
            const c = o.class;
            delete o.class;
            const l = o.ref;
            delete o.ref;
            const u = o.obsRef;
            return delete o.obsRef, new IDc(s, l, u, r, c, o, a);
        };
    }
    function n(r, s = void 0) {
        const o = t(s);
        return (a, c)=>o(r, a, c);
    }
    e.div = n("div"), e.elem = t(void 0), e.svg = n("svg", "http://www.w3.org/2000/svg"), e.svgElem = t("http://www.w3.org/2000/svg");
    function i() {
        let r;
        const s = function(o) {
            r = o;
        };
        return Object.defineProperty(s, "element", {
            get () {
                if (!r) throw new Zu("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
                return r;
            }
        }), s;
    }
    e.ref = i;
})(ef || (ef = {})), EDc = class ESm {
    constructor(t, n, i, r, s, o, a){
        this._deriveds = [], this._element = r ? document.createElementNS(r, t) : document.createElement(t), n && n(this._element), i && this._deriveds.push(uJ((l, u)=>{
            i(this), u.add({
                dispose: ()=>{
                    i(null);
                }
            });
        })), s && (kDc(s) ? this._deriveds.push(Ds(this, (l)=>{
            bDc(this._element, SDc(s, l));
        })) : bDc(this._element, SDc(s, void 0)));
        for (const [l, u] of Object.entries(o))if (l === "style") for (const [h, p] of Object.entries(u)){
            const g = vYr(h);
            Fht(p) ? this._deriveds.push(g3({
                owner: this,
                debugName: ()=>`set.style.${g}`
            }, (f)=>{
                this._element.style.setProperty(g, wDc(p.read(f)));
            })) : this._element.style.setProperty(g, wDc(p));
        }
        else l === "tabIndex" ? Fht(u) ? this._deriveds.push(Ds(this, (h)=>{
            this._element.tabIndex = u.read(h);
        })) : this._element.tabIndex = u : l.startsWith("on") ? this._element[l] = u : Fht(u) ? this._deriveds.push(g3({
            owner: this,
            debugName: ()=>`set.${l}`
        }, (h)=>{
            TDc(this._element, l, u.read(h));
        })) : TDc(this._element, l, u);
        if (a) {
            let l = function(h, p) {
                return Fht(p) ? l(h, p.read(h)) : Array.isArray(p) ? p.flatMap((g)=>l(h, g)) : p instanceof ESm ? (h && p.readEffect(h), [
                    p._element
                ]) : p ? [
                    p
                ] : [];
            };
            var c = l;
            const u = Ds(this, (h)=>{
                this._element.replaceChildren(...l(h, a));
            });
            this._deriveds.push(u), CDc(a) || u.get();
        }
    }
    readEffect(t) {
        for (const n of this._deriveds)n.read(t);
    }
    keepUpdated(t) {
        return Ds((n)=>{
            this.readEffect(n);
        }).recomputeInitiallyAndOnChange(t), this;
    }
    toDisposableLiveElement() {
        const t = new He;
        return this.keepUpdated(t), new xDc(this._element, t);
    }
}, xDc = class {
    constructor(e, t){
        this.element = e, this._disposable = t;
    }
    dispose() {
        this._disposable.dispose();
    }
}, IDc = class extends EDc {
    constructor(){
        super(...arguments), this._isHovered = void 0, this._didMouseMoveDuringHover = void 0;
    }
    get element() {
        return this._element;
    }
    get isHovered() {
        if (!this._isHovered) {
            const e = Xo("hovered", !1);
            this._element.addEventListener("mouseenter", (t)=>e.set(!0, void 0)), this._element.addEventListener("mouseleave", (t)=>e.set(!1, void 0)), this._isHovered = e;
        }
        return this._isHovered;
    }
    get didMouseMoveDuringHover() {
        if (!this._didMouseMoveDuringHover) {
            let e = !1;
            const t = Xo("didMouseMoveDuringHover", !1);
            this._element.addEventListener("mouseenter", (n)=>{
                e = !0;
            }), this._element.addEventListener("mousemove", (n)=>{
                e && t.set(!0, void 0);
            }), this._element.addEventListener("mouseleave", (n)=>{
                e = !1, t.set(!1, void 0);
            }), this._didMouseMoveDuringHover = t;
        }
        return this._didMouseMoveDuringHover;
    }
};

}
