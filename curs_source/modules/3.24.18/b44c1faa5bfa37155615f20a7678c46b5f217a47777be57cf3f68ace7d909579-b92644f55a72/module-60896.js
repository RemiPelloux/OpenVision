"use strict";
require.d(exports, {
    $Y: ()=>a,
    Ib: ()=>i,
    be: ()=>o
});
var n = require("./module-70890.js");
const s = ()=>({});
function o(e, t) {
    return n(e, {
        ...t,
        engines: {
            ...t?.engines,
            js: s,
            javascript: s
        }
    });
}
function i(e, t, r) {
    return n.stringify({
        content: e,
        data: {}
    }, t, r);
}
function a(e) {
    const t = (e.matter ?? "").trim(), r = e.language?.toLowerCase();
    return t.length > 0 && "js" !== r && "javascript" !== r ? `---\n${t}\n---` : i("", e.data ?? {}).trim();
}
