require.d(exports, {
    A: ()=>i
});
var r = require(65835), o = require("./module-42757.js");
const a = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, s = [
    "__proto__",
    "profile __proto__"
], i = (e)=>{
    const t = {};
    let n, i;
    for (const c of e.split(/\r?\n/)){
        const e = c.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e[0] && "]" === e[e.length - 1]) {
            n = void 0, i = void 0;
            const t = e.substring(1, e.length - 1), c = a.exec(t);
            if (c) {
                const [, e, , t] = c;
                Object.values(r.I).includes(e) && (n = [
                    e,
                    t
                ].join(o.Q));
            } else n = t;
            if (s.includes(t)) throw new Error(`Found invalid profile name "${t}"`);
        } else if (n) {
            const r = e.indexOf("=");
            if (![
                0,
                -1
            ].includes(r)) {
                const [a, s] = [
                    e.substring(0, r).trim(),
                    e.substring(r + 1).trim()
                ];
                if ("" === s) i = a;
                else {
                    i && c.trimStart() === c && (i = void 0), t[n] = t[n] || {};
                    const e = i ? [
                        i,
                        a
                    ].join(o.Q) : a;
                    t[n][e] = s;
                }
            }
        }
    }
    return t;
};
