import { $u } from "./index_10.js";
import { yWr } from "./qIc.js";
import { K4, SWr, kWr } from "./stacktrace.js";
import { x } from "./tslib.es6.js";
function Kdi(...e) {
    const t = e.sort((n, i)=>n[0] - i[0]).map((n)=>n[1]);
    return (n, i = 0, r = 0)=>{
        const s = [], o = n.split(`
`);
        for(let a = i; a < o.length; a++){
            let c = o[a];
            c.length > 1024 && (c = c.slice(0, 1024));
            const l = kWr.test(c) ? c.replace(kWr, "$1") : c;
            if (!l.match(/\S*Error: /)) {
                for (const u of t){
                    const h = u(l);
                    if (h) {
                        s.push(h);
                        break;
                    }
                }
                if (s.length >= SWr + r) break;
            }
        }
        return yWr(s.slice(r));
    };
}
function Xzt(e, t, n, i) {
    const r = {
        filename: e,
        function: t === "<anonymous>" ? K4 : t,
        in_app: !0
    };
    return n !== void 0 && (r.lineno = n), i !== void 0 && (r.colno = i), r;
}
var Ejh, xjh, Ijh, Ajh, Rjh, Djh, Mjh, Pjh, Ljh, Njh, y2o, Ojh, Fjh, Bjh, S2o, Ujh, $jh, Hjh, Wjh, Gjh, Vjh, jjh, qjh, zjh, k2o, w2o, C2o;
export { $jh, Ajh, Bjh, C2o, Djh, Ejh, Fjh, Gjh, Hjh, Ijh, Kdi, Ljh, Mjh, Njh, Ojh, Pjh, Rjh, S2o, Ujh, Vjh, Wjh, Xzt, jjh, k2o, qjh, w2o, xjh, y2o, zjh };
var __wakaru_Kjh_initialized = false;
export function Kjh() {
if (__wakaru_Kjh_initialized) return;
__wakaru_Kjh_initialized = true;
x(), $u(), Ejh = 10, xjh = 20, Ijh = 30, Ajh = 40, Rjh = 50, Djh = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Mjh = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Pjh = /\((\S*)(?::(\d+))(?::(\d+))\)/, Ljh = /at (.+?) ?\(data:(.+?),/, Njh = (e)=>{
    const t = e.match(Ljh);
    if (t) return {
        filename: `<data:${t[2]}>`,
        function: t[1]
    };
    const n = Djh.exec(e);
    if (n) {
        const [, r, s, o] = n;
        return Xzt(r, K4, +s, +o);
    }
    const i = Mjh.exec(e);
    if (i) {
        if (i[2] && i[2].indexOf("eval") === 0) {
            const a = Pjh.exec(i[2]);
            a && (i[2] = a[1], i[3] = a[2], i[4] = a[3]);
        }
        const [s, o] = C2o(i[1] || K4, i[2]);
        return Xzt(o, s, i[3] ? +i[3] : void 0, i[4] ? +i[4] : void 0);
    }
}, y2o = [
    Ijh,
    Njh
], Ojh = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Fjh = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Bjh = (e)=>{
    const t = Ojh.exec(e);
    if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
            const s = Fjh.exec(t[3]);
            s && (t[1] = t[1] || "eval", t[3] = s[1], t[4] = s[2], t[5] = "");
        }
        let i = t[3], r = t[1] || K4;
        return [r, i] = C2o(r, i), Xzt(i, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
    }
}, S2o = [
    Rjh,
    Bjh
], Ujh = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, $jh = (e)=>{
    const t = Ujh.exec(e);
    return t ? Xzt(t[2], t[1] || K4, +t[3], t[4] ? +t[4] : void 0) : void 0;
}, Hjh = [
    Ajh,
    $jh
], Wjh = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, Gjh = (e)=>{
    const t = Wjh.exec(e);
    return t ? Xzt(t[2], t[3] || K4, +t[1]) : void 0;
}, Vjh = [
    Ejh,
    Gjh
], jjh = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i, qjh = (e)=>{
    const t = jjh.exec(e);
    return t ? Xzt(t[5], t[3] || t[4] || K4, +t[1], +t[2]) : void 0;
}, zjh = [
    xjh,
    qjh
], k2o = [
    y2o,
    S2o
], w2o = Kdi(...k2o), C2o = (e, t)=>{
    const n = e.indexOf("safari-extension") !== -1, i = e.indexOf("safari-web-extension") !== -1;
    return n || i ? [
        e.indexOf("@") !== -1 ? e.split("@")[0] : K4,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`
    ] : [
        e,
        t
    ];
};

}
