"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createAbortErrorAndTimeoutInterceptor = function(e, t, s) {
    return (o)=>async (i)=>{
            const a = function(e, t) {
                const n = e.method.name, s = e.url;
                if ("PrepareLocalFullSelfDrivingRun" === n || s.includes("PrepareLocalFullSelfDrivingRun")) return Math.max(t, r);
                return t;
            }(i, s);
            let c, l = !1;
            const u = new Promise((r, s)=>{
                const o = e();
                c = setTimeout(()=>{
                    l || n(()=>t(o).then((e)=>{
                            e && s(new Error("Network disconnected"));
                        }));
                }, a), i.signal && i.signal.addEventListener("abort", ()=>{
                    clearTimeout(c), l || n(t);
                });
            });
            try {
                const e = await Promise.race([
                    o(i),
                    u
                ]);
                if (void 0 === e) throw new Error("Network timeout");
                return l = !0, clearTimeout(c), e;
            } catch (e) {
                throw clearTimeout(c), n(t), e;
            }
        };
}, exports.wrapCallbackInTryCatch = n;
const r = 12e4;
function n(e) {
    try {
        return e();
    } catch (e) {
        return !1;
    }
}
