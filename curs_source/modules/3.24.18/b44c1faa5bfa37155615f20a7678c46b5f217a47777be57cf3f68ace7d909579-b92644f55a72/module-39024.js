"use strict";
require.d(exports, {
    Gk: ()=>o,
    zl: ()=>s
});
var n = require("./module-76760.js");
function s(e, t) {
    if (void 0 === t) return !0;
    const r = i(t.workspacePathsFilter), n = i(e.workspacePaths), s = t.ownerClientInstanceId?.trim(), o = !0 === t.includeOwnerUnrootedSessions, a = r.length > 0 && n.length > 0 && (!0 === t.matchAnyWorkspaceRoot ? n.some((e)=>r.includes(e)) : function(e, t) {
        if (e.length !== t.length) return !1;
        return e.every((e)=>t.includes(e));
    }(r, n)), c = o && void 0 !== s && s.length > 0 && 0 === n.length && e.owningClientInstanceId === s;
    return 0 === r.length && !o || (0 === r.length ? c : a || c);
}
function o(e, t) {
    const r = t?.parentSessionId;
    return void 0 !== r && r.length > 0 ? e?.parentSessionId === r : !0 === t?.includeChildren || void 0 === e;
}
function i(e) {
    const t = [];
    for (const r of e ?? []){
        if (0 === r.length) continue;
        const e = (0, n.isAbsolute)(r) ? (0, n.resolve)(r) : r;
        t.includes(e) || t.push(e);
    }
    return t;
}
