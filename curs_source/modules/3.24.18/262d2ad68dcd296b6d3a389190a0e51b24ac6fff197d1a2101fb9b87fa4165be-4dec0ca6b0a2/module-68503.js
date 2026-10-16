"use strict";
require.d(exports, {
    O2: ()=>n,
    r_: ()=>s,
    sh: ()=>i
});
const n = "agent-transcripts", o = 200;
function s(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function i(e) {
    let t = encodeURIComponent(e);
    return t = t.replace(/%/g, "_"), t.length > o && (t = t.slice(0, o)), t;
}
