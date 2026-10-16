require.d(exports, {
    A: ()=>c
});
var s = require(65835), n = require("./module-42757.js");
const o = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = [
    "__proto__",
    "profile __proto__"
], c = (e)=>{
    const r = {};
    let t, c;
    for (const a of e.split(/\r?\n/)){
        const e = a.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e[0] && "]" === e[e.length - 1]) {
            t = void 0, c = void 0;
            const r = e.substring(1, e.length - 1), a = o.exec(r);
            if (a) {
                const [, e, , r] = a;
                Object.values(s.I).includes(e) && (t = [
                    e,
                    r
                ].join(n.Q));
            } else t = r;
            if (i.includes(r)) throw new Error(`Found invalid profile name "${r}"`);
        } else if (t) {
            const s = e.indexOf("=");
            if (![
                0,
                -1
            ].includes(s)) {
                const [o, i] = [
                    e.substring(0, s).trim(),
                    e.substring(s + 1).trim()
                ];
                if ("" === i) c = o;
                else {
                    c && a.trimStart() === a && (c = void 0), r[t] = r[t] || {};
                    const e = c ? [
                        c,
                        o
                    ].join(n.Q) : o;
                    r[t][e] = i;
                }
            }
        }
    }
    return r;
};
