import { Se, we } from "./HVr.js";
import { en } from "./dom_2.js";
import { DE } from "./iconLabels_2.js";
import { bu } from "./objects.js";
import { $f, Sp, V7, Ve, Ye, ih, p5, vS, yh } from "./qIc.js";
import { x } from "./tslib.es6.js";
var tT;
export { tT };
var __wakaru_ufe_initialized = false;
export function ufe() {
if (__wakaru_ufe_initialized) return;
__wakaru_ufe_initialized = true;
"use strict";
x(), en(), V7(), $f(), DE(), Se(), bu(), tT = class swm extends we {
    constructor(t, n){
        super(), this.options = n, this.text = "", this.title = "", this.highlights = [], this.supportIcons = !1, this.didEverRender = !1, this.domNode = Ye(t, Ve("span.monaco-highlighted-label"));
    }
    get element() {
        return this.domNode;
    }
    set(t, n = [], i = "", r, s) {
        t || (t = "");
        const o = !!s;
        r && (t = swm.escapeNewLines(t, n)), !(this.didEverRender && this.text === t && this.title === i && this.supportIcons === o && yh(this.highlights, n)) && (this.text = t, this.title = i, this.highlights = n, this.supportIcons = o, this.render());
    }
    render() {
        const t = [];
        let n = 0;
        for (const i of this.highlights){
            if (i.end === i.start) continue;
            if (n < i.start) {
                const o = this.text.substring(n, i.start);
                this.supportIcons ? t.push(...vS(o)) : t.push(o), n = i.start;
            }
            const r = this.text.substring(n, i.end), s = Ve("span.highlight", void 0, ...this.supportIcons ? vS(r) : [
                r
            ]);
            i.extraClasses && s.classList.add(...i.extraClasses), t.push(s), n = i.end;
        }
        if (n < this.text.length) {
            const i = this.text.substring(n);
            this.supportIcons ? t.push(...vS(i)) : t.push(i);
        }
        if (Sp(this.domNode, ...t), this.options?.hoverDelegate?.showNativeHover) this.domNode.title = this.title;
        else if (!this.customHover && this.title !== "") {
            const i = this.options?.hoverDelegate ?? ih("mouse");
            this.customHover = this._register(p5().setupManagedHover(i, this.domNode, this.title));
        } else this.customHover && this.customHover.update(this.title);
        this.didEverRender = !0;
    }
    static escapeNewLines(t, n) {
        let i = 0, r = 0;
        return t.replace(/\r\n|\r|\n/g, (s, o)=>{
            r = s === `\r
` ? -1 : 0, o += i;
            for (const a of n)a.end <= o || (a.start >= o && (a.start += r), a.end >= o && (a.end += r));
            return i += r, "\u23CE";
        });
    }
};

}
