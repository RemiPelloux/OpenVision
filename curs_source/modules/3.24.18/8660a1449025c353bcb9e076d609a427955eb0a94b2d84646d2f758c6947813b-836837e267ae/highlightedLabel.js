import { Qe, st } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { bW } from "./iconLabels_2.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { Fj, Ii, O5, Rp, c2, fr, gz, hE, sR } from "./ze.js";
var ynt;
export { ynt };
var __wakaru_sIr_initialized = false;
export function sIr() {
if (__wakaru_sIr_initialized) return;
__wakaru_sIr_initialized = true;
"use strict";
E(), Hn(), gz(), sR(), bW(), Qe(), cp(), ynt = class jRb extends st {
    constructor(e, n){
        super(), this.options = n, this.text = "", this.title = "", this.highlights = [], this.supportIcons = !1, this.didEverRender = !1, this.domNode = fr(e, Ii("span.monaco-highlighted-label"));
    }
    get element() {
        return this.domNode;
    }
    set(e, n = [], i = "", r, s) {
        e || (e = "");
        const o = !!s;
        r && (e = jRb.escapeNewLines(e, n)), !(this.didEverRender && this.text === e && this.title === i && this.supportIcons === o && Rp(this.highlights, n)) && (this.text = e, this.title = i, this.highlights = n, this.supportIcons = o, this.render());
    }
    render() {
        const e = [];
        let n = 0;
        for (const i of this.highlights){
            if (i.end === i.start) continue;
            if (n < i.start) {
                const o = this.text.substring(n, i.start);
                this.supportIcons ? e.push(...O5(o)) : e.push(o), n = i.start;
            }
            const r = this.text.substring(n, i.end), s = Ii("span.highlight", void 0, ...this.supportIcons ? O5(r) : [
                r
            ]);
            i.extraClasses && s.classList.add(...i.extraClasses), e.push(s), n = i.end;
        }
        if (n < this.text.length) {
            const i = this.text.substring(n);
            this.supportIcons ? e.push(...O5(i)) : e.push(i);
        }
        if (hE(this.domNode, ...e), this.options?.hoverDelegate?.showNativeHover) this.domNode.title = this.title;
        else if (!this.customHover && this.title !== "") {
            const i = this.options?.hoverDelegate ?? c2("mouse");
            this.customHover = this._register(Fj().setupManagedHover(i, this.domNode, this.title));
        } else this.customHover && this.customHover.update(this.title);
        this.didEverRender = !0;
    }
    static escapeNewLines(e, n) {
        let i = 0, r = 0;
        return e.replace(/\r\n|\r|\n/g, (s, o)=>{
            r = s === `\r
` ? -1 : 0, o += i;
            for (const a of n)a.end <= o || (a.start >= o && (a.start += r), a.end >= o && (a.end += r));
            return i += r, "\u23CE";
        });
    }
};

}
