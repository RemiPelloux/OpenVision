import { Zp } from "./Aeg.js";
import { Qe, da, st } from "./Iwo.js";
import { MP0 } from "./XRv.js";
import { kYt } from "./Ycg.js";
import { mN } from "./agentLinks.js";
import { XS } from "./githubUtils.js";
import { Ect } from "./pr-lifecycle-presentation_2.js";
import { ome, sMe } from "./prLifecycleStore.js";
import { Mk } from "./pullRequestIdentity.js";
import { J1s, o6l } from "./richLinkPresentationProvider.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { iw } from "./yBp.js";
var PPs;
export { PPs };
var __wakaru_DP0_initialized = false;
export function DP0() {
if (__wakaru_DP0_initialized) return;
__wakaru_DP0_initialized = true;
"use strict";
E(), Qe(), mN(), XS(), sMe(), Mk(), Ect(), J1s(), PPs = class extends st {
    constructor(t){
        super(), this._lifecycleStore = t, this._storeSubscriptions = this._register(new da), this._listenersByPrKey = new Map, this._register(this._lifecycleStore.onDidChangeLifecycle((e)=>{
            const n = this._listenersByPrKey.get(e);
            if (n) for (const i of [
                ...n
            ])i();
        }));
    }
    resolve(t) {
        const e = MP0(t);
        if (e) return e;
        const n = o6l.resolve(t), i = iw(t);
        if (!i) return n;
        const r = kYt(this._lifecycleStore.getLifecycle(i.canonicalUrl));
        return r ? {
            icon: {
                name: r.name,
                color: r.color
            },
            statusLabel: r.label
        } : n;
    }
    subscribe(t, e) {
        const n = iw(t);
        if (this._store.isDisposed || !n) return ()=>{};
        const i = Zp(n.canonicalUrl);
        let r = this._listenersByPrKey.get(i);
        return r || (r = new Set, this._listenersByPrKey.set(i, r), this._storeSubscriptions.set(i, this._lifecycleStore.subscribe(n.canonicalUrl))), r.add(e), ()=>{
            const s = this._listenersByPrKey.get(i);
            s?.delete(e), s?.size === 0 && (this._listenersByPrKey.delete(i), this._storeSubscriptions.deleteAndDispose(i));
        };
    }
}, PPs = Re([
    F(0, ome)
], PPs);

}
