require.d(exports, {
    A: ()=>c
});
var o = require(65835), r = require("./module-42757.js");
const n = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = [
    "__proto__",
    "profile __proto__"
], c = (t)=>{
    const e = {};
    let s, c;
    for (const a of t.split(/\r?\n/)){
        const t = a.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === t[0] && "]" === t[t.length - 1]) {
            s = void 0, c = void 0;
            const e = t.substring(1, t.length - 1), a = n.exec(e);
            if (a) {
                const [, t, , e] = a;
                Object.values(o.I).includes(t) && (s = [
                    t,
                    e
                ].join(r.Q));
            } else s = e;
            if (i.includes(e)) throw new Error(`Found invalid profile name "${e}"`);
        } else if (s) {
            const o = t.indexOf("=");
            if (![
                0,
                -1
            ].includes(o)) {
                const [n, i] = [
                    t.substring(0, o).trim(),
                    t.substring(o + 1).trim()
                ];
                if ("" === i) c = n;
                else {
                    c && a.trimStart() === a && (c = void 0), e[s] = e[s] || {};
                    const t = c ? [
                        c,
                        n
                    ].join(r.Q) : n;
                    e[s][t] = i;
                }
            }
        }
    }
    return e;
};
