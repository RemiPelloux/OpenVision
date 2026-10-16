"use strict";
require.d(exports, {
    I: ()=>s,
    g: ()=>o
});
const n = (0, require("./module-33002.js").cF)(Symbol("agent-host.blob-reads"), void 0);
function s(e, t) {
    const r = {
        source: t,
        counts: {
            hits: 0,
            misses: 0,
            errors: 0
        }
    };
    return {
        ctx: e.with(n, r),
        ...r
    };
}
function o(e, t, r) {
    const s = e.get(n);
    void 0 !== s && s.source === t && ("hit" === r ? s.counts.hits++ : "miss" === r ? s.counts.misses++ : s.counts.errors++);
}
