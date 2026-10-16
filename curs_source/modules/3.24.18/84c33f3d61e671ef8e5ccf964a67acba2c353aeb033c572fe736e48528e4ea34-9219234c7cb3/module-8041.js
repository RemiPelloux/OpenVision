require.d(exports, {
    A: ()=>a
});
var t = require(65835), n = require("./module-42757.js");
const i = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, r = [
    "__proto__",
    "profile __proto__"
], a = (e)=>{
    const s = {};
    let o, a;
    for (const c of e.split(/\r?\n/)){
        const e = c.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e[0] && "]" === e[e.length - 1]) {
            o = void 0, a = void 0;
            const s = e.substring(1, e.length - 1), c = i.exec(s);
            if (c) {
                const [, e, , s] = c;
                Object.values(t.I).includes(e) && (o = [
                    e,
                    s
                ].join(n.Q));
            } else o = s;
            if (r.includes(s)) throw new Error(`Found invalid profile name "${s}"`);
        } else if (o) {
            const t = e.indexOf("=");
            if (![
                0,
                -1
            ].includes(t)) {
                const [i, r] = [
                    e.substring(0, t).trim(),
                    e.substring(t + 1).trim()
                ];
                if ("" === r) a = i;
                else {
                    a && c.trimStart() === c && (a = void 0), s[o] = s[o] || {};
                    const e = a ? [
                        a,
                        i
                    ].join(n.Q) : i;
                    s[o][e] = r;
                }
            }
        }
    }
    return s;
};
