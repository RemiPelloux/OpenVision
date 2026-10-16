"use strict";
function n(e, t) {
    if ((e.disabledEnvironments ?? []).includes(t)) return !1;
    const r = e.environments ?? [];
    return 0 === r.length || r.includes(t);
}
function s(e, t) {
    return e.filter((e)=>n(e, t));
}
require.d(exports, {
    D: ()=>s,
    r: ()=>n
});
