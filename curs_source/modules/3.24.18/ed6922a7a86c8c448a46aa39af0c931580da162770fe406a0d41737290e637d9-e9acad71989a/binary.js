import { bk, n$ } from "./Scalar_2.js";
import { vcs } from "./qIc.js";
import { Uwi } from "./stringifyString.js";
import { x } from "./tslib.es6.js";
var qwi;
export { qwi };
var __wakaru_pZc_initialized = false;
export function pZc() {
if (__wakaru_pZc_initialized) return;
__wakaru_pZc_initialized = true;
x(), n$(), Uwi(), qwi = {
    identify: (e)=>e instanceof Uint8Array,
    default: !1,
    tag: "tag:yaml.org,2002:binary",
    resolve (e, t) {
        if (typeof atob == "function") {
            const n = atob(e.replace(/[\n\r]/g, "")), i = new Uint8Array(n.length);
            for(let r = 0; r < n.length; ++r)i[r] = n.charCodeAt(r);
            return i;
        } else return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
    },
    stringify ({ comment: e, type: t, value: n }, i, r, s) {
        if (!n) return "";
        const o = n;
        let a;
        if (typeof btoa == "function") {
            let c = "";
            for(let l = 0; l < o.length; ++l)c += String.fromCharCode(o[l]);
            a = btoa(c);
        } else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
        if (t ?? (t = bk.BLOCK_LITERAL), t !== bk.QUOTE_DOUBLE) {
            const c = Math.max(i.options.lineWidth - i.indent.length, i.options.minContentWidth), l = Math.ceil(a.length / c), u = new Array(l);
            for(let h = 0, p = 0; h < l; ++h, p += c)u[h] = a.substr(p, c);
            a = u.join(t === bk.BLOCK_LITERAL ? `
` : " ");
        }
        return vcs({
            comment: e,
            type: t,
            value: a
        }, i, r, s);
    }
};

}
