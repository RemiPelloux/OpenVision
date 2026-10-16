import { Bus, IBt } from "./index_34.js";
import { IDg, Tgt, Zos, wDg, xDg } from "./qIc.js";
import { Qos } from "./reactVersion.js";
import { x } from "./tslib.es6.js";
import { mnl } from "./with-selector_2.js";
var jnl, qnl;
export { jnl, qnl };
var __wakaru_kU_initialized = false;
export function kU() {
if (__wakaru_kU_initialized) return;
__wakaru_kU_initialized = true;
x(), Bus(), mnl(), Qos(), Tgt(), jnl = Zos(19), qnl = jnl ? xDg : IDg, wDg({
    before (e) {
        e.syncIndex = 0, e.didInitialize || (e.syncTick = 1, e.syncHooks = [], e.didChangeStore = !0, e.getSnapshot = ()=>{
            let t = !1;
            for(let n = 0; n < e.syncHooks.length; n += 1){
                const i = e.syncHooks[n], r = i.selector(i.store.state, i.a1, i.a2, i.a3);
                Object.is(i.value, r) || (t = !0, i.value = r);
            }
            return t && (e.syncTick += 1), e.syncTick;
        });
    },
    after (e) {
        e.syncHooks.length > 0 && (e.didChangeStore && (e.didChangeStore = !1, e.subscribe = (t)=>{
            const n = new Set;
            for (const r of e.syncHooks)n.add(r.store);
            const i = [];
            for (const r of n)i.push(r.subscribe(t));
            return ()=>{
                for (const r of i)r();
            };
        }), IBt.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot));
    }
});

}
