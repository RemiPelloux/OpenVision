import { Ei, Gt, Qe, da, st, tt, xr } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { K1, PX } from "./browserViewStore.js";
import { Rn } from "./extensions.js";
import { hme, vG } from "./glass-panel-resource-ownership-service.js";
import { It } from "./instantiation.js";
import { a1_ } from "./local-dev-url.js";
import { Ocs, iml } from "./localServerProbeService.js";
import { o1_ } from "./mm_.js";
import { E } from "./tslib.es6.js";
import { tF } from "./tunnel.js";
import { F, Re } from "./userDataProfile.js";
import { tEn } from "./yBp.js";
var W7i, o4s;
export { W7i, o4s };
var __wakaru_l1__initialized = false;
export function l1_() {
if (__wakaru_l1__initialized) return;
__wakaru_l1__initialized = true;
"use strict";
E(), Ei(), Gt(), Qe(), Rn(), It(), tF(), PX(), iml(), hme(), a1_(), W7i = Il("glassLocalServerService"), o4s = class extends st {
    constructor(t, e, n){
        super(), this.probeService = t, this.browserViewStore = e, this.ownershipService = n, this.checks = new Map, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.viewLoadListeners = this._register(new da), this._register(n.onDidChangeServedPorts(()=>this.check([
                ...this.checks.keys()
            ]))), this._register(e.onDidCreateView((i)=>this.listenToLoads(i))), this._register(e.onDidDestroyView((i)=>this.viewLoadListeners.deleteAndDispose(i)));
        for (const i of e.getAllViewIds())this.listenToLoads(i);
    }
    checkNew(t) {
        const e = new Set;
        for (const n of t){
            const i = tEn(n);
            i !== void 0 && !this.checks.has(i) && e.add(i);
        }
        this.check([
            ...e
        ]);
    }
    isServedLocalDevUrl(t, e) {
        if (!o1_(t, this.ownershipService, e)) return !1;
        const n = tEn(t);
        return n !== void 0 && this.checks.get(n)?.served === !0;
    }
    isUnserved(t) {
        const e = tEn(t);
        return e !== void 0 && this.checks.get(e)?.served === !1;
    }
    listenToLoads(t) {
        const e = this.browserViewStore.getView(t);
        e !== void 0 && this.viewLoadListeners.set(t, e.onDidFinishLoad(()=>{
            const n = tEn(e.getTabState()?.url || e.getURL());
            n !== void 0 && this.check([
                n
            ]);
        }));
    }
    check(t) {
        if (t.length === 0) return;
        let e = this.queued;
        e === void 0 && (e = this.queued = new Map, queueMicrotask(()=>this.capture()));
        for (const n of t)if (!e.has(n)) {
            const i = {
                served: this.checks.get(n)?.served
            };
            this.checks.set(n, i), e.set(n, i);
        }
    }
    capture() {
        const t = this.queued;
        this.queued = void 0, !(t === void 0 || this._store.isDisposed) && this.probeService.captureLocalListeningPorts().then((e)=>{
            if (!this._store.isDisposed) {
                for (const [n, i] of t)i.served = e.status === "unavailable" || e.ports.includes(n);
                this._onDidChange.fire();
            }
        }, xr);
    }
}, o4s = Re([
    F(0, Ocs),
    F(1, K1),
    F(2, vG)
], o4s), bn(W7i, o4s, 2, 1);

}
