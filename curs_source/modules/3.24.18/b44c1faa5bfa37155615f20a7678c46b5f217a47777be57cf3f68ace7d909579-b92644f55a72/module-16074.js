"use strict";
require.d(exports, {
    Ox: ()=>a,
    Qj: ()=>o,
    YE: ()=>s,
    r6: ()=>i,
    wi: ()=>c
});
const n = 200;
class s extends Error {
    constructor(){
        super("This computer cannot list workspaces yet"), this.code = "WORKSPACE_LIST_UNSUPPORTED", this.name = "AgentHostWorkspaceListUnsupportedError";
    }
}
function o(e) {
    const t = [];
    for (const r of e){
        const e = i(r);
        if (void 0 !== e && (t.push(e), t.length >= n)) break;
    }
    return t;
}
function i(e) {
    const t = e.workspacePaths.filter((e)=>e.length > 0);
    if (0 === t.length) return;
    const r = l(e.worktreeMainPath), n = l(e.displayPath);
    return {
        workspacePaths: t,
        ...void 0 === r ? {} : {
            worktreeMainPath: r
        },
        ...void 0 === n ? {} : {
            displayPath: n
        }
    };
}
function a(e) {
    const t = void 0 === e ? void 0 : i(e);
    return void 0 === t ? {} : {
        workspace: t
    };
}
function c(e, t) {
    const r = 1 === e.length ? e[0] : void 0, n = l(t)?.replace(/\/+$/, "");
    if (void 0 !== r && void 0 !== n) return n.length > 0 && r.startsWith(`${n}/`) ? `~${r.slice(n.length)}` : r;
}
function l(e) {
    return void 0 !== e && e.length > 0 ? e : void 0;
}
