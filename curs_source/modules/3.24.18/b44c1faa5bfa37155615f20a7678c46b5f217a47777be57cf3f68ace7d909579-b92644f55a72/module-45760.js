"use strict";
function n(e, t) {
    const r = {};
    for (const [n, s] of Object.entries(e.methods)){
        const o = t(Object.assign(Object.assign({}, s), {
            localName: n,
            service: e
        }));
        null != o && (r[n] = o);
    }
    return r;
}
require.d(exports, {
    w: ()=>n
});
