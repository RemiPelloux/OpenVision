import { Ei, Gt, Hc, Nt, Pn, Qe, Vn, da, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { $8a, c_ } from "./async.cursor.js";
import { pd } from "./background_composer_pb.js";
import { Hx, ZI } from "./cloudAgentRepositoryService.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { _7i } from "./machineResources.js";
import { Dv_, K7C, P7C, V7C, X7C, Y7C, Z7C, byc, d6s } from "./mm_.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var M4n, yyc, Nv_, Syc, kyc, Lv_, Ov_, Fv_, Bv_, wyc, Uv_, Cyc, h6s;
export { Bv_, Cyc, Fv_, Lv_, M4n, Nv_, Ov_, Syc, Uv_, h6s, kyc, wyc, yyc };
var __wakaru_Tyc_initialized = false;
export function Tyc() {
if (__wakaru_Tyc_initialized) return;
__wakaru_Tyc_initialized = true;
"use strict";
E(), dp(), pd(), c_(), Ei(), Gt(), Qe(), Rn(), It(), _7i(), Hx(), Dc(), M4n = Il("glassMachineResourcesService"), yyc = {
    usage: void 0,
    availability: "loading"
}, Nv_ = 300 * 1e3, Syc = [
    5e3,
    1e4,
    15e3
], kyc = 15e3, Lv_ = 3e4, Ov_ = 3e4, Fv_ = 300 * 1e3, Bv_ = 3, wyc = 1e4, Uv_ = class extends st {
    constructor(t, e, n, i, r){
        super(), this.key = t, this._fetch = e, this._describeError = n, this._isTopLevel = i, this._events = r, this._state = yyc, this._cursor = "", this._members = new Map, this._wakeAfterTick = !1, this._parked = !1, this._consecutiveAsleep = 0, this._afterTurnChange = !1, this._loop = this._register(new Vn);
    }
    get current() {
        return this._state;
    }
    get hasMembers() {
        return this._members.size > 0;
    }
    get bcIds() {
        const t = [
            ...this._members.keys()
        ], e = t.filter((i)=>this._members.get(i)?.live === !0), n = e.find(this._isTopLevel) ?? e[0] ?? t.find(this._isTopLevel) ?? t[0];
        return n === void 0 ? t : [
            n,
            ...t.filter((i)=>i !== n)
        ];
    }
    get primaryBcId() {
        return this.bcIds[0];
    }
    hasMember(t) {
        return this._members.has(t);
    }
    isMemberWanted(t) {
        const e = this._members.get(t);
        return e !== void 0 && (e.listeners.size > 0 || e.watchers > 0);
    }
    _member(t, e) {
        let n = this._members.get(t);
        return n === void 0 && (n = {
            listeners: new Set,
            watchers: 0,
            live: e
        }, this._members.set(t, n)), n;
    }
    addListener(t, e, n) {
        const i = this._hasListeners;
        this._member(t, e).listeners.add(n), !i && this._parked && this._unpark("tab-opened"), this._sync(i ? "none" : "always");
    }
    removeListener(t, e) {
        this._members.get(t)?.listeners.delete(e), this._sync("none");
    }
    addWatcher(t, { live: e, afterTurnChange: n }) {
        this._member(t, e).watchers += 1, n && this._unpark("turn-changed"), this._sync("none");
    }
    removeWatcher(t) {
        const e = this._members.get(t);
        e !== void 0 && (e.watchers -= 1), this._sync("none");
    }
    setLive(t, { live: e, turnChanged: n }) {
        const i = this._members.get(t);
        i !== void 0 && (i.live = e), n && this._unpark("turn-changed"), this._sync("if-away");
    }
    resumeIfParked() {
        this._parked && (this._unpark("turn-changed"), this._sync("none"));
    }
    removeMember(t) {
        this._members.delete(t), this._sync("none");
    }
    adoptMembers(t) {
        const e = this._hasListeners;
        for (const [i, r] of t._members){
            const s = this._member(i, r.live);
            s.live = r.live, s.watchers += r.watchers;
            for (const o of r.listeners)s.listeners.add(o), o(this._state);
        }
        t._members.clear();
        const n = !e && this._hasListeners;
        n && this._parked && this._unpark("tab-opened"), this._sync(n ? "always" : "if-away-and-idle");
    }
    track(t) {
        this._register(t);
    }
    get _hasListeners() {
        for (const t of this._members.values())if (t.listeners.size > 0) return !0;
        return !1;
    }
    _unpark(t) {
        this._parked = !1, this._consecutiveAsleep = 0, this._afterTurnChange = t === "turn-changed";
    }
    get _shouldRun() {
        if (this._parked) return !1;
        for (const t of this._members.values())if (t.listeners.size > 0 || t.watchers > 0 && t.live) return !0;
        return !1;
    }
    _sync(t) {
        if (!this._store.isDisposed) {
            if (!this._shouldRun) {
                this._loop.value !== void 0 && (this._loop.clear(), this._wakeAfterTick = !1, this._events.onPause(this));
                return;
            }
            if (this._loop.value === void 0) {
                const e = new $8a((n)=>this._tick(n), {
                    computeNextDelayMs: ({ consecutiveFailures: n })=>{
                        if (this._wakeAfterTick) return this._wakeAfterTick = !1, 0;
                        const i = K7C(this._state.availability, n);
                        return this._hasListeners ? i : Math.max(i, Y7C(n));
                    }
                });
                this._loop.value = e, e.start();
                return;
            }
            t === "always" ? this._pollSoon() : t === "if-away" ? this.pollNow() : t === "if-away-and-idle" && !this._loop.value.isTickInFlight && this.pollNow();
        }
    }
    pollNow() {
        this._loop.value !== void 0 && this._state.availability !== "live" && this._pollSoon();
    }
    _pollSoon() {
        const t = this._loop.value;
        if (t !== void 0) {
            if (t.isTickInFlight) {
                this._wakeAfterTick = !0;
                return;
            }
            t.reschedule(0);
        }
    }
    _setState(t) {
        this._state = t;
        for (const e of this._members.values())for (const n of e.listeners)n(t);
    }
    async _tick(t) {
        const e = !this._hasListeners;
        let n;
        try {
            n = await this._fetchFrom(this._cursor, e, t);
        } catch (r) {
            if (t.aborted) throw r;
            const s = this._describeError(r);
            throw this._consecutiveAsleep = s === "asleep" ? this._consecutiveAsleep + 1 : 0, this._setState({
                usage: this._state.usage,
                availability: s
            }), !this._wakeAfterTick && X7C(s, {
                consecutiveAsleep: this._consecutiveAsleep,
                afterTurnChange: this._afterTurnChange
            }) && (this._parked = !0, this._afterTurnChange = !1, this._sync("none")), r;
        }
        if (t.aborted) return;
        this._consecutiveAsleep = 0, this._afterTurnChange = !1;
        const i = P7C(this._state.usage, n.response, n.machine);
        if (i === void 0) throw this._setState({
            usage: this._state.usage,
            availability: "error"
        }), new Error("GetResourceUsage answered without limits or a sample");
        e || (this._cursor = n.response.nextCursor), this._setState({
            usage: i,
            availability: "live"
        }), this._events.onSample(this, i);
    }
    async _fetchFrom(t, e, n) {
        try {
            return await this._fetch(this, {
                cursor: t,
                omitHistory: e
            }, n);
        } catch (i) {
            if (t === "" || n.aborted || Us.from(i).code !== pr.InvalidArgument) throw i;
            return this._cursor = "", await this._fetch(this, {
                cursor: "",
                omitHistory: e
            }, n);
        }
    }
}, Cyc = "agent:", h6s = class extends st {
    constructor(t, e){
        super(), this._aiService = t, this._cloudAgentRepositoryService = e, this._pollers = this._register(new da), this._pollerByBcId = new Map, this._agentTracking = this._register(new da), this._machineIdentities = new Map, this._machineIdentityEpochs = new Map, this._knownScopeByMachine = new Map, this._onDidChangePressure = this._register(new tt), this.onDidChangePressure = this._onDidChangePressure.event, this._onDidChangeKnownScope = this._register(new tt), this.onDidChangeKnownScope = this._onDidChangeKnownScope.event;
    }
    observe(t, e) {
        return this._join(t).addListener(t, this._isLive(t), e), Pn(()=>{
            this._pollerByBcId.get(t)?.removeListener(t, e), this._releaseIfUnwanted(t);
        });
    }
    watch(t) {
        return this._watch(t, {
            afterTurnChange: !1
        });
    }
    _watch(t, { afterTurnChange: e }) {
        return this._join(t).addWatcher(t, {
            live: this._isLive(t),
            afterTurnChange: e
        }), Pn(()=>{
            this._pollerByBcId.get(t)?.removeWatcher(t), this._releaseIfUnwanted(t);
        });
    }
    watchLiveAgents() {
        const t = new Nt, e = new Map, n = (r, { turnChanged: s })=>{
            const o = e.get(r);
            if (o === void 0) return;
            const a = this._cloudAgentRepositoryService.getAgentHeader(r), l = a !== void 0 && !a.isArchived.value && byc(a);
            l && o.watch === void 0 ? o.watch = this._watch(r, {
                afterTurnChange: s
            }) : !l && o.watch !== void 0 && (o.watch.dispose(), o.watch = void 0);
        }, i = ()=>{
            const r = new Set;
            for (const s of this._cloudAgentRepositoryService.agents.value){
                if (s.source !== "cloud") continue;
                r.add(s.id);
                let o = e.get(s.id);
                o === void 0 && (o = {
                    subscriptions: new Nt,
                    header: void 0,
                    watch: void 0
                }, e.set(s.id, o));
                let a = !1;
                if (o.header !== s) {
                    a = o.header !== void 0 && d6s(o.header) !== d6s(s), o.header = s, o.subscriptions.clear();
                    const l = ()=>n(s.id, {
                            turnChanged: !0
                        });
                    o.subscriptions.add(s.status.onChange(l)), o.subscriptions.add(s.isArchived.onChange(()=>n(s.id, {
                            turnChanged: !1
                        }))), s.hasPendingInteraction !== void 0 && o.subscriptions.add(s.hasPendingInteraction.onChange(l));
                }
                n(s.id, {
                    turnChanged: a
                });
            }
            for (const [s, o] of e)r.has(s) || (o.subscriptions.dispose(), o.watch?.dispose(), e.delete(s));
        };
        return i(), t.add(this._cloudAgentRepositoryService.agents.onChange(i)), t.add(Pn(()=>{
            for (const r of e.values())r.subscriptions.dispose(), r.watch?.dispose();
            e.clear();
        })), t;
    }
    getState(t) {
        return this._pollerByBcId.get(t)?.current ?? yyc;
    }
    getPressure(t) {
        return this._pollerByBcId.get(t)?.pressure;
    }
    getMachinePressure(t) {
        return this._pollers.get(t)?.pressure;
    }
    currentMachinePressures() {
        const t = [];
        for (const [e, n] of this._pollers)n.pressure === void 0 || Dv_(e) || t.push({
            machine: e,
            bcIds: n.bcIds,
            pressure: n.pressure,
            usage: n.current.usage
        });
        return t;
    }
    getKnownScope(t) {
        const e = this._pollerByBcId.get(t)?.key;
        return e === void 0 ? void 0 : this._knownScopeByMachine.get(e);
    }
    _join(t) {
        let e = this._pollerByBcId.get(t);
        return e !== void 0 || (e = this._createPoller(Z7C(t)), this._pollers.set(e.key, e), this._pollerByBcId.set(t, e), this._forgetMachineIdentity(t), this._trackAgent(t)), e;
    }
    _createPoller(t) {
        return new Uv_(t, (e, n, i)=>this._fetch(e, n, i), V7C, (e)=>{
            const n = this._cloudAgentRepositoryService.getAgentHeader(e);
            return n !== void 0 && n.subagentParentId === void 0;
        }, {
            onSample: (e, n)=>{
                this._recordScope(e, n), this._setPressure(e, n.current.pressure, n);
            },
            onPause: (e)=>this._forgetPressure(e)
        });
    }
    _releaseIfUnwanted(t) {
        const e = this._pollerByBcId.get(t);
        if (e === void 0 || e.isMemberWanted(t)) return;
        const n = e.pressure !== void 0;
        e.removeMember(t), this._pollerByBcId.delete(t), this._agentTracking.deleteAndDispose(t), e.hasMembers || this._pollers.deleteAndDispose(e.key), n && this._onDidChangePressure.fire({
            machine: e.key,
            bcIds: [
                t
            ],
            pressure: void 0
        });
    }
    _forgetPressure(t) {
        if (t.pressure === void 0) return;
        t.pressure = void 0;
        const e = t.bcIds;
        e.length > 0 && this._onDidChangePressure.fire({
            machine: t.key,
            bcIds: e,
            pressure: void 0
        });
    }
    _trackAgent(t) {
        const e = new Nt, n = e.add(new Vn), i = e.add(new Vn), r = e.add(new Vn);
        let s, o, a, l = !0, c = d6s(this._cloudAgentRepositoryService.getAgentHeader(t));
        const u = ()=>{
            this._forgetMachineIdentity(t);
            const h = this._cloudAgentRepositoryService.getAgentHeader(t), p = d6s(h), g = p !== c;
            c = p, this._pollerByBcId.get(t)?.setLive(t, {
                live: byc(h),
                turnChanged: g
            });
        }, d = ()=>{
            const h = this._cloudAgentRepositoryService.getAgentHeader(t);
            let p = !1;
            h?.status !== s && (s = h?.status, n.value = s?.onChange(u), p = !0), h?.hasPendingInteraction !== o && (o = h?.hasPendingInteraction, i.value = o?.onChange(u), p = !0), h?.lastUpdatedAt !== a && (a = h?.lastUpdatedAt, r.value = a?.onChange(()=>this._pollerByBcId.get(t)?.resumeIfParked())), !l && p && u(), l = !1;
        };
        d(), e.add(this._cloudAgentRepositoryService.agents.onChange(d)), this._agentTracking.set(t, e);
    }
    _isLive(t) {
        return byc(this._cloudAgentRepositoryService.getAgentHeader(t));
    }
    _recordScope(t, e) {
        const n = e.limits.scope;
        this._knownScopeByMachine.get(t.key) !== n && (this._knownScopeByMachine.set(t.key, n), this._onDidChangeKnownScope.fire({
            machine: t.key,
            bcIds: t.bcIds,
            scope: n
        }));
    }
    _setPressure(t, e, n) {
        t.pressure !== e && (t.pressure = e, this._onDidChangePressure.fire({
            machine: t.key,
            bcIds: t.bcIds,
            pressure: e,
            usage: n
        }));
    }
    async _fetch(t, { cursor: e, omitHistory: n }, i) {
        const r = t.primaryBcId;
        if (r === void 0) throw new Hc;
        const s = await this._resolveMachineIdentity(r, i);
        if (i.aborted) throw new Hc;
        if (this._adoptMachine(t, s.key) !== t) throw new Hc;
        const o = await this._aiService.backgroundComposerClient();
        try {
            const a = await o.getMachineResourceUsage({
                bcId: r,
                cursor: e,
                omitHistory: n
            }, {
                timeoutMs: wyc,
                signal: i
            });
            return {
                machine: s.kind,
                response: a
            };
        } catch (a) {
            const l = Us.from(a).code;
            throw (l === pr.NotFound || l === pr.Unauthenticated) && this._forgetMachineIdentity(r), a;
        }
    }
    _adoptMachine(t, e) {
        if (t.key === e) return t;
        const n = this._pollers.get(e), i = t.key, r = t.bcIds;
        for (const o of r)o !== t.primaryBcId && this._forgetMachineIdentity(o);
        const s = (o)=>{
            Dv_(i) || this._onDidChangePressure.fire({
                machine: i,
                bcIds: r,
                pressure: void 0,
                replacedBy: o
            });
        };
        if (n === void 0) return t.pressure = void 0, this._pollers.deleteAndLeak(i), t.key = e, this._pollers.set(e, t), s(e), t;
        n.adoptMembers(t);
        for (const o of r)this._pollerByBcId.set(o, n);
        return this._pollers.deleteAndDispose(i), s(n.key), n.pressure !== void 0 && this._onDidChangePressure.fire({
            machine: n.key,
            bcIds: n.bcIds,
            pressure: n.pressure
        }), n;
    }
    async _resolveMachineIdentity(t, e) {
        const n = this._machineIdentities.get(t);
        if (n && Date.now() - n.fetchedAtMs < Nv_) return n;
        const i = this._machineIdentityEpochs.get(t) ?? 0, o = (await (await this._aiService.backgroundComposerClient()).getMachine({
            bcId: t
        }, {
            timeoutMs: wyc,
            signal: e
        })).machine?.reference;
        let a;
        switch(o?.case){
            case "pod":
                a = {
                    key: `pod:${o.value.podId}`,
                    kind: "pod"
                };
                break;
            case "worker":
                a = {
                    key: `worker:${o.value.workerId}`,
                    kind: "worker"
                };
                break;
            default:
                throw new Us("Cloud agent has no machine reference", pr.NotFound);
        }
        return (this._machineIdentityEpochs.get(t) ?? 0) === i && this._machineIdentities.set(t, {
            ...a,
            fetchedAtMs: Date.now()
        }), a;
    }
    _forgetMachineIdentity(t) {
        this._machineIdentities.delete(t), this._machineIdentityEpochs.set(t, (this._machineIdentityEpochs.get(t) ?? 0) + 1);
    }
}, h6s = Re([
    F(0, jl),
    F(1, ZI)
], h6s), bn(M4n, h6s, 1, 1);

}
