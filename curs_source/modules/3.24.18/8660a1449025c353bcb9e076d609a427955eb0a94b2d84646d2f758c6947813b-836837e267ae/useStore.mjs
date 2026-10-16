import { Xpw, Zpw, qLl, zpw } from "./BA.js";
import { Vpw } from "./fastHooks.mjs";
import { zLl } from "./reactVersion.mjs";
import { $pw, hOl } from "./shim.js";
import { E } from "./tslib.es6.js";
import { Gpw } from "./with-selector_3.js";
var B2f, U2f;
export { B2f, U2f };
var __wakaru_pOl_initialized = false;
export function pOl() {
if (__wakaru_pOl_initialized) return;
__wakaru_pOl_initialized = true;
E(), $pw(), Gpw(), zLl(), Vpw(), B2f = qLl(19), U2f = B2f ? Xpw : Zpw, zpw({
    before (t) {
        t.syncIndex = 0, t.didInitialize || (t.syncTick = 1, t.syncHooks = [], t.didChangeStore = !0, t.getSnapshot = ()=>{
            let e = !1;
            for(let n = 0; n < t.syncHooks.length; n += 1){
                const i = t.syncHooks[n], r = i.selector(i.store.state, i.a1, i.a2, i.a3);
                Object.is(i.value, r) || (e = !0, i.value = r);
            }
            return e && (t.syncTick += 1), t.syncTick;
        });
    },
    after (t) {
        t.syncHooks.length > 0 && (t.didChangeStore && (t.didChangeStore = !1, t.subscribe = (e)=>{
            const n = new Set;
            for (const r of t.syncHooks)n.add(r.store);
            const i = [];
            for (const r of n)i.push(r.subscribe(e));
            return ()=>{
                for (const r of i)r();
            };
        }), hOl(t.subscribe, t.getSnapshot, t.getSnapshot));
    }
});

}
