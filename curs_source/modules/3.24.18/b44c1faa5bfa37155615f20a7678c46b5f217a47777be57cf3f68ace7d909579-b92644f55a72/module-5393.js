"use strict";
let n;
function s() {
    if (void 0 === n) {
        const e = (async function() {
            const [{ createJimp: e }, { default: t }, { default: n }, { default: s, msBmp: o }, { default: i }, { default: a }, { methods: c }] = await Promise.all([
                Promise.all([
                    require.e(716),
                    require.e(273)
                ]).then(require.bind(require, 95273)),
                require.e(621).then(require.bind(require, 37621)),
                require.e(502).then(require.bind(require, 86502)),
                Promise.all([
                    require.e(716),
                    require.e(691)
                ]).then(require.bind(require, 63691)),
                require.e(46).then(require.bind(require, 93046)),
                require.e(928).then(require.bind(require, 69928)),
                require.e(853).then(require.bind(require, 65853))
            ]);
            return e({
                formats: [
                    t,
                    n,
                    s,
                    o,
                    i,
                    a
                ],
                plugins: [
                    c
                ]
            });
        })().catch((t)=>{
            throw n === e && (n = void 0), t;
        });
        n = e;
    }
    return n;
}
require.d(exports, {
    I: ()=>s
});
