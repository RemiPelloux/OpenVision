import { hNn } from "./BA.js";
import { o1o } from "./SZu.js";
import { fh } from "./index_10.js";
import { a1o, l1o, qq } from "./stacktrace.js";
import { E } from "./tslib.es6.js";
function Gdr(...t) {
    const e = t.sort((n, i)=>n[0] - i[0]).map((n)=>n[1]);
    return (n, i = 0, r = 0)=>{
        const s = [], o = n.split(`
`);
        for(let a = i; a < o.length; a++){
            let l = o[a];
            l.length > 1024 && (l = l.slice(0, 1024));
            const c = l1o.test(l) ? l.replace(l1o, "$1") : l;
            if (!c.match(/\S*Error: /)) {
                for (const u of e){
                    const d = u(c);
                    if (d) {
                        s.push(d);
                        break;
                    }
                }
                if (s.length >= a1o + r) break;
            }
        }
        return o1o(s.slice(r));
    };
}
var U$f, j$f, $$f, H$f, W$f, G$f, q$f, z$f, V$f, K$f, V8l, Y$f, X$f, Z$f, K8l, Q$f, J$f, eHf, tHf, nHf, iHf, rHf, sHf, oHf, Y8l, X8l, Z8l;
export { $$f, G$f, Gdr, H$f, J$f, K$f, K8l, Q$f, U$f, V$f, V8l, W$f, X$f, X8l, Y$f, Y8l, Z$f, Z8l, eHf, iHf, j$f, nHf, oHf, q$f, rHf, sHf, tHf, z$f };
var __wakaru_aHf_initialized = false;
export function aHf() {
if (__wakaru_aHf_initialized) return;
__wakaru_aHf_initialized = true;
E(), fh(), U$f = 10, j$f = 20, $$f = 30, H$f = 40, W$f = 50, G$f = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, q$f = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, z$f = /\((\S*)(?::(\d+))(?::(\d+))\)/, V$f = /at (.+?) ?\(data:(.+?),/, K$f = (t)=>{
    const e = t.match(V$f);
    if (e) return {
        filename: `<data:${e[2]}>`,
        function: e[1]
    };
    const n = G$f.exec(t);
    if (n) {
        const [, r, s, o] = n;
        return hNn(r, qq, +s, +o);
    }
    const i = q$f.exec(t);
    if (i) {
        if (i[2] && i[2].indexOf("eval") === 0) {
            const a = z$f.exec(i[2]);
            a && (i[2] = a[1], i[3] = a[2], i[4] = a[3]);
        }
        const [s, o] = Z8l(i[1] || qq, i[2]);
        return hNn(o, s, i[3] ? +i[3] : void 0, i[4] ? +i[4] : void 0);
    }
}, V8l = [
    $$f,
    K$f
], Y$f = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, X$f = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Z$f = (t)=>{
    const e = Y$f.exec(t);
    if (e) {
        if (e[3] && e[3].indexOf(" > eval") > -1) {
            const s = X$f.exec(e[3]);
            s && (e[1] = e[1] || "eval", e[3] = s[1], e[4] = s[2], e[5] = "");
        }
        let i = e[3], r = e[1] || qq;
        return [r, i] = Z8l(r, i), hNn(i, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
    }
}, K8l = [
    W$f,
    Z$f
], Q$f = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, J$f = (t)=>{
    const e = Q$f.exec(t);
    return e ? hNn(e[2], e[1] || qq, +e[3], e[4] ? +e[4] : void 0) : void 0;
}, eHf = [
    H$f,
    J$f
], tHf = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, nHf = (t)=>{
    const e = tHf.exec(t);
    return e ? hNn(e[2], e[3] || qq, +e[1]) : void 0;
}, iHf = [
    U$f,
    nHf
], rHf = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i, sHf = (t)=>{
    const e = rHf.exec(t);
    return e ? hNn(e[5], e[3] || e[4] || qq, +e[1], +e[2]) : void 0;
}, oHf = [
    j$f,
    sHf
], Y8l = [
    V8l,
    K8l
], X8l = Gdr(...Y8l), Z8l = (t, e)=>{
    const n = t.indexOf("safari-extension") !== -1, i = t.indexOf("safari-web-extension") !== -1;
    return n || i ? [
        t.indexOf("@") !== -1 ? t.split("@")[0] : qq,
        n ? `safari-extension:${e}` : `safari-web-extension:${e}`
    ] : [
        t,
        e
    ];
};

}
