"use strict";
function n(e) {
    const t = e && "object" == typeof e && "reason" in e ? e.reason : void 0;
    if (t) {
        if (t instanceof Error) {
            const e = new Error("Request aborted");
            return e.name = "AbortError", e.cause = t, e;
        }
        const e = new Error(String(t));
        return e.name = "AbortError", e;
    }
    const r = new Error("Request aborted");
    return r.name = "AbortError", r;
}
require.d(exports, {
    F: ()=>n
});
