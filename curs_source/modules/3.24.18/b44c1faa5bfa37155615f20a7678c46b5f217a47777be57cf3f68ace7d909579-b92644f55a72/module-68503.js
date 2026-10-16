"use strict";
require.d(exports, {
    O2: ()=>n,
    r_: ()=>o,
    sh: ()=>i
});
const n = "agent-transcripts", s = 200;
function o(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function i(e) {
    let t = encodeURIComponent(e);
    return t = t.replace(/%/g, "_"), t.length > s && (t = t.slice(0, s)), t;
}
