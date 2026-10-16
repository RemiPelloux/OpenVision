import { _Yo } from "./LYd.js";
import { DY, tC } from "./Scalar_2.js";
import { Fxr } from "./stringifyString.js";
import { E } from "./tslib.es6.js";
var Gxr;
export { Gxr };
var __wakaru_jJd_initialized = false;
export function jJd() {
if (__wakaru_jJd_initialized) return;
__wakaru_jJd_initialized = true;
E(), DY(), Fxr(), Gxr = {
    identify: (t)=>t instanceof Uint8Array,
    default: !1,
    tag: "tag:yaml.org,2002:binary",
    resolve (t, e) {
        if (typeof atob == "function") {
            const n = atob(t.replace(/[\n\r]/g, "")), i = new Uint8Array(n.length);
            for(let r = 0; r < n.length; ++r)i[r] = n.charCodeAt(r);
            return i;
        } else return e("This environment does not support reading binary tags; either Buffer or atob is required"), t;
    },
    stringify ({ comment: t, type: e, value: n }, i, r, s) {
        if (!n) return "";
        const o = n;
        let a;
        if (typeof btoa == "function") {
            let l = "";
            for(let c = 0; c < o.length; ++c)l += String.fromCharCode(o[c]);
            a = btoa(l);
        } else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
        if (e ?? (e = tC.BLOCK_LITERAL), e !== tC.QUOTE_DOUBLE) {
            const l = Math.max(i.options.lineWidth - i.indent.length, i.options.minContentWidth), c = Math.ceil(a.length / l), u = new Array(c);
            for(let d = 0, h = 0; d < c; ++d, h += l)u[d] = a.substr(h, l);
            a = u.join(e === tC.BLOCK_LITERAL ? `
` : " ");
        }
        return _Yo({
            comment: t,
            type: e,
            value: a
        }, i, r, s);
    }
};

}
