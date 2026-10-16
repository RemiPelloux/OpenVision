import { Cl, Hp, Se, Tw, jpn, rn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Rm, bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { GS } from "./errorMessage.js";
import { P8h, m7e } from "./lifecycleService.js";
import { $d, ALn } from "./lifecycle_2.js";
import { PPo } from "./lifecycle_3.js";
import { Qn, Wn } from "./log.js";
import { Bg } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
function MPo(e, t) {
    if (e.length === 0) return Promise.resolve(!1);
    const n = [];
    let i = !1;
    for (const r of e){
        if (r === !0) return Promise.resolve(!0);
        jpn(r) && n.push(r.then((s)=>{
            s && (i = !0);
        }, (s)=>{
            t(s), i = !0;
        }));
    }
    return Rm.settled(n).then(()=>i);
}
var fte;
export { MPo, fte };
var __wakaru_xrr_initialized = false;
export function xrr() {
if (__wakaru_xrr_initialized) return;
__wakaru_xrr_initialized = true;
"use strict";
x(), bn(), Ar(), GS(), Se(), Qn(), PPo(), Vn(), $d(), P8h(), fte = class extends m7e {
    constructor(e, t){
        super(e, t), this.didShutdown = !1, this.processesStarted = !1, this.processesStopped = !1, this.processParticipants = new Map;
    }
    registerProcessParticipant(e) {
        return this.processParticipants.has(e.id) ? (this.logService.warn(`[lifecycle]: Duplicate process participant ignored (id: ${e.id})`), rn(()=>{})) : (this.processParticipants.set(e.id, e), this.processStopPromise ? this.stopParticipant(e, this.shutdownReason ?? 1) : this.processesStarted ? this.startParticipant(e) : this.processStartPromise && this.processStartPromise.finally(()=>this.startParticipant(e)), rn(()=>{
            this.processParticipants.delete(e.id);
        }));
    }
    async startProcesses() {
        if (this.processStartPromise) return this.processStartPromise;
        if (this.processStopPromise || this.didShutdown) {
            this.logService.warn("[lifecycle]: startProcesses called after shutdown began");
            return;
        }
        const e = this.getOrderedParticipants(!1);
        return this.processStartPromise = (async ()=>{
            for (const t of e)await this.startParticipant(t);
        })().finally(()=>{
            this.processesStarted = !0;
        }), this.processStartPromise;
    }
    async stopProcesses(e) {
        return this.processStopPromise ? this.processStopPromise : (this.shutdownReason = e, this.processStopPromise = (async ()=>{
            const t = this.getOrderedParticipants(!0);
            for (const n of t)await this.stopParticipant(n, e);
        })().finally(()=>{
            this.processesStopped = !0;
        }), this.processStopPromise);
    }
    async requestShutdown(e, t) {
        return this.didShutdown ? !0 : (this.shutdownContext = t?.context, await this.prepareShutdown(e) ? (this.shutdownContext = void 0, !1) : (await this.stopProcesses(e), await this.completeShutdown(e), !0));
    }
    async prepareShutdown(e) {
        return this.didShutdown ? !1 : (this.pendingBeforeShutdown || (this.shutdownReason = e, this.pendingBeforeShutdown = this.handleBeforeShutdown(e).then((t)=>(t && this._onShutdownVeto.fire(), t)).finally(()=>{
            this.pendingBeforeShutdown = void 0;
        })), this.pendingBeforeShutdown);
    }
    async completeShutdown(e) {
        if (!this.didShutdown) return this.pendingWillShutdown || (this.shutdownReason = e, this.pendingWillShutdown = this.handleWillShutdown(e).finally(()=>{
            this.didShutdown || (this.didShutdown = !0, this._onDidShutdown.fire()), this.pendingWillShutdown = void 0;
        })), this.pendingWillShutdown;
    }
    async shutdown() {
        await this.requestShutdown(1);
    }
    async handleBeforeShutdown(e) {
        const t = [], n = new Set;
        let i, r;
        this._onBeforeShutdown.fire({
            reason: e,
            context: this.shutdownContext,
            veto: (o, a)=>{
                t.push(o), o === !0 ? this.logService.info(`[lifecycle]: Shutdown was prevented (id: ${a})`) : o instanceof Promise && (n.add(a), o.then((c)=>{
                    c === !0 && this.logService.info(`[lifecycle]: Shutdown was prevented (id: ${a})`);
                }).finally(()=>n.delete(a)));
            },
            finalVeto: (o, a)=>{
                if (!i) i = o, r = a;
                else throw new Error(`[lifecycle]: Final veto is already defined (id: ${a})`);
            }
        });
        const s = Cl(()=>{
            this.logService.warn(`[lifecycle] onBeforeShutdown is taking a long time, pending operations: ${Array.from(n).join(", ")}`);
        }, fte.BEFORE_SHUTDOWN_WARNING_DELAY);
        try {
            let o = await MPo(t, (a)=>this.handleBeforeShutdownError(a, e));
            if (o) return o;
            if (i) try {
                n.add(r), o = await i(), o && this.logService.info(`[lifecycle]: Shutdown was prevented by final veto (id: ${r})`);
            } catch (a) {
                o = !0, this.handleBeforeShutdownError(a, e);
            }
            return o;
        } finally{
            s.dispose();
        }
    }
    handleBeforeShutdownError(e, t) {
        this.logService.error(`[lifecycle]: Error during before-shutdown phase (error: ${Bg(e)})`), this._onBeforeShutdownError.fire({
            reason: t,
            error: e
        });
    }
    async handleWillShutdown(e) {
        this._willShutdown = !0;
        const t = [], n = [], i = new Set, r = new Eo;
        this._onWillShutdown.fire({
            reason: e,
            context: this.shutdownContext,
            token: r.token,
            joiners: ()=>Array.from(i.values()),
            join (o, a) {
                if (i.add(a), a.order === ALn.Last) {
                    const c = typeof o == "function" ? o : ()=>o;
                    n.push(()=>c().finally(()=>i.delete(a)));
                } else {
                    const c = typeof o == "function" ? o() : o;
                    c.finally(()=>i.delete(a)), t.push(c);
                }
            },
            force: ()=>{
                r.dispose(!0);
            }
        });
        const s = Cl(()=>{
            this.logService.warn(`[lifecycle] onWillShutdown is taking a long time, pending operations: ${Array.from(i).map((o)=>o.id).join(", ")}`);
        }, fte.WILL_SHUTDOWN_WARNING_DELAY);
        try {
            await Tw(Rm.settled(t), r.token);
        } catch (o) {
            this.logService.error(`[lifecycle]: Error during will-shutdown phase in default joiners (error: ${Bg(o)})`);
        }
        try {
            await Tw(Rm.settled(n.map((o)=>o())), r.token);
        } catch (o) {
            this.logService.error(`[lifecycle]: Error during will-shutdown phase in last joiners (error: ${Bg(o)})`);
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
    getOrderedParticipants(e) {
        const t = Array.from(this.processParticipants.values()).sort((n, i)=>(n.order ?? 1) - (i.order ?? 1));
        return e ? t.reverse() : t;
    }
    async startParticipant(e) {
        if (this.processStopPromise || this.processesStopped) return;
        const t = Date.now();
        try {
            if (!await Hp(Promise.resolve(e.start()).then(()=>!0), fte.PROCESS_START_TIMEOUT)) throw new Error(`Process start timed out (id: ${e.id})`);
            this.logService.info(`[lifecycle]: Process participant started (id: ${e.id}, ms: ${Date.now() - t})`);
        } catch (n) {
            this.logService.error(`[lifecycle]: Process participant start failed (id: ${e.id}, ms: ${Date.now() - t})`, n);
        }
    }
    async stopParticipant(e, t) {
        const n = Date.now(), i = this.shutdownContext ? `, context: ${this.shutdownContext}` : "";
        try {
            if (!await Hp(Promise.resolve(e.stop(t, this.shutdownContext)).then(()=>!0), fte.PROCESS_STOP_TIMEOUT)) throw new Error(`Process stop timed out (id: ${e.id})`);
            this.logService.info(`[lifecycle]: Process participant stopped (id: ${e.id}, ms: ${Date.now() - n}, reason: ${t}${i})`);
        } catch (r) {
            this.logService.error(`[lifecycle]: Process participant stop failed (id: ${e.id}, ms: ${Date.now() - n}, reason: ${t}${i})`, r);
        }
    }
}, fte.BEFORE_SHUTDOWN_WARNING_DELAY = 5e3, fte.WILL_SHUTDOWN_WARNING_DELAY = 800, fte.PROCESS_START_TIMEOUT = 15e3, fte.PROCESS_STOP_TIMEOUT = 15e3, fte = ie([
    C(0, Wn),
    C(1, yn)
], fte);

}
