function r(e) {
    const t = e && "object" == typeof e && "reason" in e ? e.reason : void 0;
    if (t) {
        if (t instanceof Error) {
            const e = new Error("Request aborted");
            return e.name = "AbortError", e.cause = t, e;
        }
        const e = new Error(String(t));
        return e.name = "AbortError", e;
    }
    const o = new Error("Request aborted");
    return o.name = "AbortError", o;
}
require.d(exports, {
    F: ()=>r
});
