"use strict";
require.d(exports, {
    Q: ()=>n
});
const n = (e, t, r)=>{
    if (t in e) {
        if ("true" === e[t]) return !0;
        if ("false" === e[t]) return !1;
        throw new Error(`Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`);
    }
};
