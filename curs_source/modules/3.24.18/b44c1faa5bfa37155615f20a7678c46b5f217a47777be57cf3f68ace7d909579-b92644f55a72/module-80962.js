"use strict";
function n(e) {
    return void 0 !== e.parent || e.pendingTurns > 0 || e.events.getLastEventId() > BigInt(1) || e.store.getConversationState().turns.length > 0;
}
function s(e) {
    const t = new Set([
        ...e.beforeList.keys(),
        ...e.afterList.keys()
    ]);
    for (const r of t){
        const t = e.beforeList.get(r), n = e.afterList.get(r);
        t !== n && (void 0 === n ? e.catalogModelIds.delete(r) : e.catalogModelIds.set(r, n));
    }
}
require.d(exports, {
    KH: ()=>i,
    j7: ()=>n,
    oF: ()=>a,
    sZ: ()=>s,
    zZ: ()=>c
});
const o = 50, i = 200;
function a(e) {
    return void 0 === e || e <= 0 ? o : Math.min(e, i);
}
function c(e, t) {
    const r = e.updatedAt?.toDate().getTime(), n = t.updatedAt?.toDate().getTime();
    return void 0 === r ? void 0 === n ? 0 : 1 : void 0 === n ? -1 : n - r;
}
