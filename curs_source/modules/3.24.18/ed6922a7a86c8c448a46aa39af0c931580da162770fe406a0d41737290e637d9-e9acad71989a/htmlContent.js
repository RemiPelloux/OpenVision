import { C_, Ps, l1, si } from "./HVr.js";
import { bW } from "./iconLabels.js";
import { Bbg, Obg, ovn } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var Ec;
export { Ec };
var __wakaru__g_initialized = false;
export function _g() {
if (__wakaru__g_initialized) return;
__wakaru__g_initialized = true;
"use strict";
x(), si(), bW(), Li(), Ps(), Qt(), Ec = class Nkm {
    static lift(t) {
        const n = new Nkm(t.value, t);
        return n.uris = t.uris, n.baseUri = t.baseUri ? Ee.revive(t.baseUri) : void 0, n;
    }
    constructor(t = "", n = !1){
        if (this.value = t, typeof this.value != "string") throw C_("value");
        typeof n == "boolean" ? (this.isTrusted = n, this.supportThemeIcons = !1, this.supportHtml = !1) : (this.isTrusted = n.isTrusted ?? void 0, this.supportThemeIcons = n.supportThemeIcons ?? !1, this.supportHtml = n.supportHtml ?? !1);
    }
    appendText(t, n = 0) {
        return this.value += ovn(this.supportThemeIcons ? Obg(t) : t).replace(/([ \t]+)/g, (i, r)=>"&nbsp;".repeat(r.length)).replace(/\>/gm, "\\>").replace(/\n/g, n === 1 ? `\\
` : `

`), this;
    }
    appendMarkdown(t) {
        return this.value += t, this;
    }
    appendCodeblock(t, n) {
        return this.value += `
${Bbg(n, t)}
`, this;
    }
    appendLink(t, n, i) {
        return this.value += "[", this.value += this._escape(n, "]"), this.value += "](", this.value += this._escape(String(t), ")"), i && (this.value += ` "${this._escape(this._escape(i, '"'), ")")}"`), this.value += ")", this;
    }
    _escape(t, n) {
        const i = new RegExp(l1(n), "g");
        return t.replace(i, (r, s)=>t.charAt(s - 1) !== "\\" ? `\\${r}` : r);
    }
};

}
