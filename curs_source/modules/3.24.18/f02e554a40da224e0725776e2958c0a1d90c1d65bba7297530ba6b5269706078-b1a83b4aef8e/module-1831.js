"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createAbortErrorAndTimeoutInterceptor = function(t, e, s) {
    return (i)=>async (o)=>{
            const a = function(t, e) {
                const n = t.method.name, s = t.url;
                if ("PrepareLocalFullSelfDrivingRun" === n || s.includes("PrepareLocalFullSelfDrivingRun")) return Math.max(e, r);
                return e;
            }(o, s);
            let u, c = !1;
            const l = new Promise((r, s)=>{
                const i = t();
                u = setTimeout(()=>{
                    c || n(()=>e(i).then((t)=>{
                            t && s(new Error("Network disconnected"));
                        }));
                }, a), o.signal && o.signal.addEventListener("abort", ()=>{
                    clearTimeout(u), c || n(e);
                });
            });
            try {
                const t = await Promise.race([
                    i(o),
                    l
                ]);
                if (void 0 === t) throw new Error("Network timeout");
                return c = !0, clearTimeout(u), t;
            } catch (t) {
                throw clearTimeout(u), n(e), t;
            }
        };
}, exports.wrapCallbackInTryCatch = n;
const r = 12e4;
function n(t) {
    try {
        return t();
    } catch (t) {
        return !1;
    }
}
