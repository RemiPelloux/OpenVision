require.d(exports, {
    A: ()=>a
});
var n = require(65835), o = require("./module-42757.js");
const s = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = [
    "__proto__",
    "profile __proto__"
], a = (e)=>{
    const t = {};
    let r, a;
    for (const c of e.split(/\r?\n/)){
        const e = c.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e[0] && "]" === e[e.length - 1]) {
            r = void 0, a = void 0;
            const t = e.substring(1, e.length - 1), c = s.exec(t);
            if (c) {
                const [, e, , t] = c;
                Object.values(n.I).includes(e) && (r = [
                    e,
                    t
                ].join(o.Q));
            } else r = t;
            if (i.includes(t)) throw new Error(`Found invalid profile name "${t}"`);
        } else if (r) {
            const n = e.indexOf("=");
            if (![
                0,
                -1
            ].includes(n)) {
                const [s, i] = [
                    e.substring(0, n).trim(),
                    e.substring(n + 1).trim()
                ];
                if ("" === i) a = s;
                else {
                    a && c.trimStart() === c && (a = void 0), t[r] = t[r] || {};
                    const e = a ? [
                        a,
                        s
                    ].join(o.Q) : s;
                    t[r][e] = i;
                }
            }
        }
    }
    return t;
};
