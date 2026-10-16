import { A7y, D7y, N7y, O8t, zVo } from "./LYd.js";
import { BZo, j_n } from "./index_39.js";
import { VVo } from "./reactVersion.js";
import { E } from "./tslib.es6.js";
import { Hrh } from "./with-selector_2.js";
var xsh, Ash;
export { Ash, xsh };
var __wakaru_TW_initialized = false;
export function TW() {
if (__wakaru_TW_initialized) return;
__wakaru_TW_initialized = true;
E(), BZo(), Hrh(), VVo(), O8t(), xsh = zVo(19), Ash = xsh ? D7y : N7y, A7y({
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
        }), j_n.useSyncExternalStore(t.subscribe, t.getSnapshot, t.getSnapshot));
    }
});

}
