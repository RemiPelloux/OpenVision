import { Ei, Nt, Qe, xh } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { Kde, R7o, Zo, b7, bc, d5d, h5d, l5d, m5d, p5d, u5d, y9t } from "./ze.js";
var R_, g5d, f5d, v5d;
export { R_, f5d, g5d, v5d };
var __wakaru_Hxy_initialized = false;
export function Hxy() {
if (__wakaru_Hxy_initialized) return;
__wakaru_Hxy_initialized = true;
"use strict";
E(), Ei(), Qe(), Jc(), Hn(), ((t)=>{
    function e(r = void 0) {
        return (s, o, a)=>{
            const l = o.class;
            delete o.class;
            const c = o.ref;
            delete o.ref;
            const u = o.obsRef;
            return delete o.obsRef, new v5d(s, c, u, r, l, o, a);
        };
    }
    function n(r, s = void 0) {
        const o = e(s);
        return (a, l)=>o(r, a, l);
    }
    t.div = n("div"), t.elem = e(void 0), t.svg = n("svg", "http://www.w3.org/2000/svg"), t.svgElem = e("http://www.w3.org/2000/svg");
    function i() {
        let r;
        const s = function(o) {
            r = o;
        };
        return Object.defineProperty(s, "element", {
            get () {
                if (!r) throw new xh("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
                return r;
            }
        }), s;
    }
    t.ref = i;
})(R_ || (R_ = {})), g5d = class dAb {
    constructor(e, n, i, r, s, o, a){
        this._deriveds = [], this._element = r ? document.createElementNS(r, e) : document.createElement(e), n && n(this._element), i && this._deriveds.push(Kde((c, u)=>{
            i(this), u.add({
                dispose: ()=>{
                    i(null);
                }
            });
        })), s && (d5d(s) ? this._deriveds.push(Zo(this, (c)=>{
            l5d(this._element, u5d(s, c));
        })) : l5d(this._element, u5d(s, void 0)));
        for (const [c, u] of Object.entries(o))if (c === "style") for (const [d, h] of Object.entries(u)){
            const p = R7o(d);
            y9t(h) ? this._deriveds.push(b7({
                owner: this,
                debugName: ()=>`set.style.${p}`
            }, (g)=>{
                this._element.style.setProperty(p, h5d(h.read(g)));
            })) : this._element.style.setProperty(p, h5d(h));
        }
        else c === "tabIndex" ? y9t(u) ? this._deriveds.push(Zo(this, (d)=>{
            this._element.tabIndex = u.read(d);
        })) : this._element.tabIndex = u : c.startsWith("on") ? this._element[c] = u : y9t(u) ? this._deriveds.push(b7({
            owner: this,
            debugName: ()=>`set.${c}`
        }, (d)=>{
            m5d(this._element, c, u.read(d));
        })) : m5d(this._element, c, u);
        if (a) {
            let c = function(d, h) {
                return y9t(h) ? c(d, h.read(d)) : Array.isArray(h) ? h.flatMap((p)=>c(d, p)) : h instanceof dAb ? (d && h.readEffect(d), [
                    h._element
                ]) : h ? [
                    h
                ] : [];
            };
            var l = c;
            const u = Zo(this, (d)=>{
                this._element.replaceChildren(...c(d, a));
            });
            this._deriveds.push(u), p5d(a) || u.get();
        }
    }
    readEffect(e) {
        for (const n of this._deriveds)n.read(e);
    }
    keepUpdated(e) {
        return Zo((n)=>{
            this.readEffect(n);
        }).recomputeInitiallyAndOnChange(e), this;
    }
    toDisposableLiveElement() {
        const e = new Nt;
        return this.keepUpdated(e), new f5d(this._element, e);
    }
}, f5d = class {
    constructor(t, e){
        this.element = t, this._disposable = e;
    }
    dispose() {
        this._disposable.dispose();
    }
}, v5d = class extends g5d {
    constructor(){
        super(...arguments), this._isHovered = void 0, this._didMouseMoveDuringHover = void 0;
    }
    get element() {
        return this._element;
    }
    get isHovered() {
        if (!this._isHovered) {
            const t = bc("hovered", !1);
            this._element.addEventListener("mouseenter", (e)=>t.set(!0, void 0)), this._element.addEventListener("mouseleave", (e)=>t.set(!1, void 0)), this._isHovered = t;
        }
        return this._isHovered;
    }
    get didMouseMoveDuringHover() {
        if (!this._didMouseMoveDuringHover) {
            let t = !1;
            const e = bc("didMouseMoveDuringHover", !1);
            this._element.addEventListener("mouseenter", (n)=>{
                t = !0;
            }), this._element.addEventListener("mousemove", (n)=>{
                t && e.set(!0, void 0);
            }), this._element.addEventListener("mouseleave", (n)=>{
                t = !1, e.set(!1, void 0);
            }), this._didMouseMoveDuringHover = e;
        }
        return this._didMouseMoveDuringHover;
    }
};

}
