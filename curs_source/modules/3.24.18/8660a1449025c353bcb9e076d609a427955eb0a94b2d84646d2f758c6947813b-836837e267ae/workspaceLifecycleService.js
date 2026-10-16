import { Ec, Pn, Qe, Vh, yx } from "./Iwo.js";
import { nv } from "./SZu.js";
import { zTl } from "./Ycg.js";
import { I_, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { tT } from "./errorMessage.js";
import { Ylt, Yrf } from "./lifecycleService.js";
import { kZn, zp } from "./lifecycle_2.js";
import { VTl } from "./lifecycle_3.js";
import { Ji, Li } from "./log.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Lie;
export { Lie };
var __wakaru_sMn_initialized = false;
export function sMn() {
if (__wakaru_sMn_initialized) return;
__wakaru_sMn_initialized = true;
"use strict";
E(), qn(), yo(), tT(), Qe(), Ji(), VTl(), Zi(), zp(), Yrf(), Lie = class extends Ylt {
    constructor(t, e){
        super(t, e), this.didShutdown = !1, this.processesStarted = !1, this.processesStopped = !1, this.processParticipants = new Map;
    }
    registerProcessParticipant(t) {
        return this.processParticipants.has(t.id) ? (this.logService.warn(`[lifecycle]: Duplicate process participant ignored (id: ${t.id})`), Pn(()=>{})) : (this.processParticipants.set(t.id, t), this.processStopPromise ? this.stopParticipant(t, this.shutdownReason ?? 1) : this.processesStarted ? this.startParticipant(t) : this.processStartPromise && this.processStartPromise.finally(()=>this.startParticipant(t)), Pn(()=>{
            this.processParticipants.delete(t.id);
        }));
    }
    async startProcesses() {
        if (this.processStartPromise) return this.processStartPromise;
        if (this.processStopPromise || this.didShutdown) {
            this.logService.warn("[lifecycle]: startProcesses called after shutdown began");
            return;
        }
        const t = this.getOrderedParticipants(!1);
        return this.processStartPromise = (async ()=>{
            for (const e of t)await this.startParticipant(e);
        })().finally(()=>{
            this.processesStarted = !0;
        }), this.processStartPromise;
    }
    async stopProcesses(t) {
        return this.processStopPromise ? this.processStopPromise : (this.shutdownReason = t, this.processStopPromise = (async ()=>{
            const e = this.getOrderedParticipants(!0);
            for (const n of e)await this.stopParticipant(n, t);
        })().finally(()=>{
            this.processesStopped = !0;
        }), this.processStopPromise);
    }
    async requestShutdown(t, e) {
        return this.didShutdown ? !0 : (this.shutdownContext = e?.context, await this.prepareShutdown(t) ? (this.shutdownContext = void 0, !1) : (await this.stopProcesses(t), await this.completeShutdown(t), !0));
    }
    async prepareShutdown(t) {
        return this.didShutdown ? !1 : (this.pendingBeforeShutdown || (this.shutdownReason = t, this.pendingBeforeShutdown = this.handleBeforeShutdown(t).then((e)=>(e && this._onShutdownVeto.fire(), e)).finally(()=>{
            this.pendingBeforeShutdown = void 0;
        })), this.pendingBeforeShutdown);
    }
    async completeShutdown(t) {
        if (!this.didShutdown) return this.pendingWillShutdown || (this.shutdownReason = t, this.pendingWillShutdown = this.handleWillShutdown(t).finally(()=>{
            this.didShutdown || (this.didShutdown = !0, this._onDidShutdown.fire()), this.pendingWillShutdown = void 0;
        })), this.pendingWillShutdown;
    }
    async shutdown() {
        await this.requestShutdown(1);
    }
    async handleBeforeShutdown(t) {
        const e = [], n = new Set;
        let i, r;
        this._onBeforeShutdown.fire({
            reason: t,
            context: this.shutdownContext,
            veto: (o, a)=>{
                e.push(o), o === !0 ? this.logService.info(`[lifecycle]: Shutdown was prevented (id: ${a})`) : o instanceof Promise && (n.add(a), o.then((l)=>{
                    l === !0 && this.logService.info(`[lifecycle]: Shutdown was prevented (id: ${a})`);
                }).finally(()=>n.delete(a)));
            },
            finalVeto: (o, a)=>{
                if (!i) i = o, r = a;
                else throw new Error(`[lifecycle]: Final veto is already defined (id: ${a})`);
            }
        });
        const s = Ec(()=>{
            this.logService.warn(`[lifecycle] onBeforeShutdown is taking a long time, pending operations: ${Array.from(n).join(", ")}`);
        }, Lie.BEFORE_SHUTDOWN_WARNING_DELAY);
        try {
            let o = await zTl(e, (a)=>this.handleBeforeShutdownError(a, t));
            if (o) return o;
            if (i) try {
                n.add(r), o = await i(), o && this.logService.info(`[lifecycle]: Shutdown was prevented by final veto (id: ${r})`);
            } catch (a) {
                o = !0, this.handleBeforeShutdownError(a, t);
            }
            return o;
        } finally{
            s.dispose();
        }
    }
    handleBeforeShutdownError(t, e) {
        this.logService.error(`[lifecycle]: Error during before-shutdown phase (error: ${nv(t)})`), this._onBeforeShutdownError.fire({
            reason: e,
            error: t
        });
    }
    async handleWillShutdown(t) {
        this._willShutdown = !0;
        const e = [], n = [], i = new Set, r = new El;
        this._onWillShutdown.fire({
            reason: t,
            context: this.shutdownContext,
            token: r.token,
            joiners: ()=>Array.from(i.values()),
            join (o, a) {
                if (i.add(a), a.order === kZn.Last) {
                    const l = typeof o == "function" ? o : ()=>o;
                    n.push(()=>l().finally(()=>i.delete(a)));
                } else {
                    const l = typeof o == "function" ? o() : o;
                    l.finally(()=>i.delete(a)), e.push(l);
                }
            },
            force: ()=>{
                r.dispose(!0);
            }
        });
        const s = Ec(()=>{
            this.logService.warn(`[lifecycle] onWillShutdown is taking a long time, pending operations: ${Array.from(i).map((o)=>o.id).join(", ")}`);
        }, Lie.WILL_SHUTDOWN_WARNING_DELAY);
        try {
            await yx(I_.settled(e), r.token);
        } catch (o) {
            this.logService.error(`[lifecycle]: Error during will-shutdown phase in default joiners (error: ${nv(o)})`);
        }
        try {
            await yx(I_.settled(n.map((o)=>o())), r.token);
        } catch (o) {
            this.logService.error(`[lifecycle]: Error during will-shutdown phase in last joiners (error: ${nv(o)})`);
        }
        s.dispose();
    }
    getDiagnosticState() {
        return {
            processesStarted: this.processesStarted,
            processesStopped: this.processesStopped,
            didShutdown: this.didShutdown,
            isStarting: !!this.processStartPromise && !this.processesStarted,
            isStopping: !!this.processStopPromise && !this.processesStopped,
            processParticipants: Array.from(this.processParticipants.keys())
        };
    }
    getOrderedParticipants(t) {
        const e = Array.from(this.processParticipants.values()).sort((n, i)=>(n.order ?? 1) - (i.order ?? 1));
        return t ? e.reverse() : e;
    }
    async startParticipant(t) {
        if (this.processStopPromise || this.processesStopped) return;
        const e = Date.now();
        try {
            if (!await Vh(Promise.resolve(t.start()).then(()=>!0), Lie.PROCESS_START_TIMEOUT)) throw new Error(`Process start timed out (id: ${t.id})`);
            this.logService.info(`[lifecycle]: Process participant started (id: ${t.id}, ms: ${Date.now() - e})`);
        } catch (n) {
            this.logService.error(`[lifecycle]: Process participant start failed (id: ${t.id}, ms: ${Date.now() - e})`, n);
        }
    }
    async stopParticipant(t, e) {
        const n = Date.now(), i = this.shutdownContext ? `, context: ${this.shutdownContext}` : "";
        try {
            if (!await Vh(Promise.resolve(t.stop(e, this.shutdownContext)).then(()=>!0), Lie.PROCESS_STOP_TIMEOUT)) throw new Error(`Process stop timed out (id: ${t.id})`);
            this.logService.info(`[lifecycle]: Process participant stopped (id: ${t.id}, ms: ${Date.now() - n}, reason: ${e}${i})`);
        } catch (r) {
            this.logService.error(`[lifecycle]: Process participant stop failed (id: ${t.id}, ms: ${Date.now() - n}, reason: ${e}${i})`, r);
        }
    }
}, Lie.BEFORE_SHUTDOWN_WARNING_DELAY = 5e3, Lie.WILL_SHUTDOWN_WARNING_DELAY = 800, Lie.PROCESS_START_TIMEOUT = 15e3, Lie.PROCESS_STOP_TIMEOUT = 15e3, Lie = Re([
    F(0, Li),
    F(1, ki)
], Lie);

}
