"use strict";
require.d(exports, {
    FS: ()=>o,
    Mp: ()=>i,
    N3: ()=>c,
    SY: ()=>s,
    Ys: ()=>u,
    cy: ()=>n,
    lh: ()=>a,
    xK: ()=>l
});
const n = "cursoragent@cursor.com", s = "Cursor Agent", o = "Cursor", i = `Co-authored-by: ${o} <${n}>`, a = "Made-with: Cursor", c = [
    n,
    "noreply@cursor.com"
];
function l(e) {
    const t = e.toLowerCase();
    return t.includes(`co-authored-by: ${o.toLowerCase()}`) || t.includes(a.toLowerCase());
}
function u(e) {
    const t = e.email?.trim().toLowerCase();
    return void 0 !== t && c.includes(t);
}
