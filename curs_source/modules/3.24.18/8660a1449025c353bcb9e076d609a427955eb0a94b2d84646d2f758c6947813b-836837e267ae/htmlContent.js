import { Ei, Fa, dA, p1 } from "./Iwo.js";
import { tRe } from "./iconLabels.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { A3y, M3y, uWd } from "./ze.js";
var zf;
export { zf };
var __wakaru_Ek_initialized = false;
export function Ek() {
if (__wakaru_Ek_initialized) return;
__wakaru_Ek_initialized = true;
"use strict";
E(), Ei(), tRe(), Lr(), Fa(), fn(), zf = class oRb {
    static lift(e) {
        const n = new oRb(e.value, e);
        return n.uris = e.uris, n.baseUri = e.baseUri ? rt.revive(e.baseUri) : void 0, n;
    }
    constructor(e = "", n = !1){
        if (this.value = e, typeof this.value != "string") throw p1("value");
        typeof n == "boolean" ? (this.isTrusted = n, this.supportThemeIcons = !1, this.supportHtml = !1) : (this.isTrusted = n.isTrusted ?? void 0, this.supportThemeIcons = n.supportThemeIcons ?? !1, this.supportHtml = n.supportHtml ?? !1);
    }
    appendText(e, n = 0) {
        return this.value += uWd(this.supportThemeIcons ? A3y(e) : e).replace(/([ \t]+)/g, (i, r)=>"&nbsp;".repeat(r.length)).replace(/\>/gm, "\\>").replace(/\n/g, n === 1 ? `\\
` : `

`), this;
    }
    appendMarkdown(e) {
        return this.value += e, this;
    }
    appendCodeblock(e, n) {
        return this.value += `
${M3y(n, e)}
`, this;
    }
    appendLink(e, n, i) {
        return this.value += "[", this.value += this._escape(n, "]"), this.value += "](", this.value += this._escape(String(e), ")"), i && (this.value += ` "${this._escape(this._escape(i, '"'), ")")}"`), this.value += ")", this;
    }
    _escape(e, n) {
        const i = new RegExp(dA(n), "g");
        return e.replace(i, (r, s)=>e.charAt(s - 1) !== "\\" ? `\\${r}` : r);
    }
};

}
