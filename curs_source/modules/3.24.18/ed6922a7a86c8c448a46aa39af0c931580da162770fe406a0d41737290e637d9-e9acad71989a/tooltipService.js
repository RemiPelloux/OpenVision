import { Se, we } from "./HVr.js";
import { C, ei, ie, pt } from "./actions_2.js";
import { $n, vi } from "./commands.js";
import { So, eKr, tKr } from "./constants_8.js";
import { Pn } from "./extensions.js";
import { T_ } from "./hash.js";
import { Ze } from "./instantiation.js";
import { cC, mn, qe, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { dgg, w2c } from "./tooltipPipelines.js";
import { x } from "./tslib.es6.js";
var avi, GZr, C2c, T2c, E2c, VZr, zAe, fpt, x2c, Ggn, PK, cvi;
export { C2c, E2c, GZr, Ggn, PK, T2c, VZr, avi, cvi, fpt, x2c, zAe };
var __wakaru_ure_initialized = false;
export function ure() {
if (__wakaru_ure_initialized) return;
__wakaru_ure_initialized = true;
"use strict";
x(), Pn(), Ze(), Se(), Vn(), dgg(), T_(), vi(), So(), ei(), avi = "tooltipServicePipelines", GZr = "lastShownTooltipTime", C2c = 14400 * 1e3, T2c = 336 * 60 * 60 * 1e3, E2c = 3600 * 1e3, VZr = !1, zAe = !1, fpt = !1, x2c = !1, Ggn = [], PK = vn("tooltipService"), cvi = class extends we {
    constructor(e, t){
        super(), this._storageService = e, this._commandService = t, this._sequenceConfigToSequenceHashMap = new Map, this._initializedState = !1, this._numActivePromises = 0, this._pipelineConfigs = w2c, this._loadEventPipelineStates();
    }
    _initializeEmptyStates() {
        const e = {
            state: []
        };
        this._pipelineConfigs.forEach((t)=>{
            e.state.push({
                name: t.name,
                disableStatus: void 0,
                createdAt: Date.now()
            });
        }), this.pipelinesState_persistent = e, this._initializeEmptySequenceState();
    }
    _initializeEmptySequenceState() {
        const e = {
            sequences: []
        };
        this._pipelineConfigs.forEach((t)=>{
            t.showOn.sequences.forEach((n)=>{
                e.sequences.push({
                    activeEventIndices: [],
                    sequenceHash: this._getSequenceConfigHash(n)
                });
            }), t.disableOn.sequences.forEach((n)=>{
                e.sequences.push({
                    activeEventIndices: [],
                    sequenceHash: this._getSequenceConfigHash(n)
                });
            });
        }), this._sequenceStates_nonPersistent = e;
    }
    _getSavedEventPipelineStateByName(e) {
        if (fpt) return;
        const t = this._storageService.get(avi, -1);
        if (!t || t === "") {
            zAe && console.log("[Tooltip][Initializing Empty Pipeline State]"), this._initializeEmptyStates();
            return;
        }
        return JSON.parse(t).state.find((r)=>r.name === e);
    }
    _updatePipelineStateIfDisabledInBackgroundIsHigher(e) {
        if (fpt) return this.pipelinesState_persistent?.state.find((s)=>s.name === e);
        if (this.pipelinesState_persistent === void 0) return;
        const t = this.pipelinesState_persistent.state.findIndex((s)=>s.name === e);
        if (t === -1) return;
        const n = this._getSavedEventPipelineStateByName(e), i = n?.disableStatus?.disabledUntil, r = this.pipelinesState_persistent.state[t].disableStatus?.disabledUntil;
        return n === void 0 || i === void 0 ? this.pipelinesState_persistent.state[t] : r !== void 0 && r >= i ? this.pipelinesState_persistent.state[t] : (this.pipelinesState_persistent.state[t] = n, n);
    }
    _loadEventPipelineStates() {
        try {
            const e = this._storageService.get(avi, -1);
            if (fpt || !e || e === "") {
                zAe && console.log("[Tooltip][Initializing Empty Pipeline State]"), this._initializeEmptyStates();
                return;
            }
            zAe && console.log("[Tooltip][Loading Pipeline State]");
            const t = JSON.parse(e);
            zAe && console.log("[Tooltip][Current Pipelines State]", t);
            const n = {
                state: []
            };
            for (let i of this._pipelineConfigs){
                const r = t.state.find((s)=>s.name === i.name);
                r ? n.state.push(r) : n.state.push({
                    name: i.name,
                    disableStatus: void 0,
                    createdAt: Date.now()
                });
            }
            this.pipelinesState_persistent = n;
        } catch (e) {
            zAe && console.log("[Tooltip][Error Loading Pipeline State]", e), this._initializeEmptyStates();
        } finally{
            this._initializeEmptySequenceState(), this._initializedState = !0;
        }
    }
    _getSequenceConfigHash(e) {
        const t = {
            ...e
        };
        return "debug" in t && delete t.debug, cC(JSON.stringify(t));
    }
    _getSequenceState(e) {
        const t = {
            ...e
        };
        "debug" in t && delete t.debug;
        let n = this._sequenceConfigToSequenceHashMap.get(t);
        return n === void 0 && (n = this._getSequenceConfigHash(e), this._sequenceConfigToSequenceHashMap.set(e, n)), this._sequenceStates_nonPersistent.sequences.find((i)=>i.sequenceHash === n);
    }
    _resetSequence(e) {
        const t = this._getSequenceState(e);
        t && (t.activeEventIndices = []);
    }
    _savePipelineState() {
        fpt || (zAe && console.log("[Tooltip][Saving Pipeline State]", this.pipelinesState_persistent), this._storageService.store(avi, JSON.stringify(this.pipelinesState_persistent), -1, 1), this._lastStateSaveTime = Date.now());
    }
    _maybeSavePipelineState() {
        this._lastStateSaveTime && Date.now() - this._lastStateSaveTime < E2c || this._savePipelineState();
    }
    _triggerPipeline(e) {
        if (this.pipelinesState_persistent === void 0) return;
        e.showOn.sequences.forEach((n)=>this._resetSequence(n));
        const t = this.pipelinesState_persistent.state.find((n)=>n.name === e.name);
        t && (t.disableStatus = {
            disabledUntil: Date.now() + e.showOn.gracePeriod_ms
        }, this._commandService.executeCommand(eKr, {
            location: e.popup.location,
            header: e.popup.header,
            subheader: e.popup.subheader,
            name: e.name
        }), console.log(`[Tooltip][Show Tooltip]
${e.popup.header}
---
${e.popup.subheader}`), VZr || this._storageService.store(GZr, new Date().getTime().toString(), -1, 1), fpt || this._savePipelineState());
    }
    _disablePipeline(e) {
        if (this.pipelinesState_persistent === void 0) return;
        const t = this._pipelineConfigs.find((r)=>r.name === e);
        let n = this.pipelinesState_persistent.state.find((r)=>r.name === e);
        if (!t || !n || (zAe && console.log(`[Tooltip][Disable Tooltip]
${t.name}`), n = this._updatePipelineStateIfDisabledInBackgroundIsHigher(e), !n)) return;
        const i = Date.now() + t.disableOn.gracePeriod_ms;
        n?.disableStatus !== void 0 && n.disableStatus.disabledUntil > i || (t.showOn.sequences.forEach((r)=>this._resetSequence(r)), t.disableOn.sequences.forEach((r)=>this._resetSequence(r)), n.disableStatus = {
            disabledUntil: i
        }, this._savePipelineState());
    }
    _processEventInSequenceEvent(e, t) {
        if (typeof t == "string") return {
            isEventAccepted: e.startsWith(t),
            shouldAllowMultipleOfCurrentEvent: !1,
            isSkippingAllowed: !1
        };
        if (t.length == 2 && t[0] === "*" && t[1] === "*") return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !0,
            isSkippingAllowed: !1
        };
        if (t.length === 3 && t.filter((o)=>o === "*").length === 2 && t.filter((o)=>o === "_").length === 1) return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !0,
            isSkippingAllowed: !0
        };
        if (t.length === 1 && t[0] === "*") return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !1,
            isSkippingAllowed: !1
        };
        if (t.length == 2 && t.filter((o)=>o === "*").length === 1 && t.filter((o)=>o === "_").length === 1) return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !1,
            isSkippingAllowed: !0
        };
        const n = t.includes("!"), i = t.includes("*"), r = t.includes("_");
        return {
            isEventAccepted: n ? !t.some((o)=>e.startsWith(o)) : t.some((o)=>e.startsWith(o)),
            shouldAllowMultipleOfCurrentEvent: i,
            isSkippingAllowed: r
        };
    }
    _processEventInSequence(e, t, n, i, r) {
        const s = this._getSequenceState(t);
        if (!s) return;
        s.activeEventIndices.length === 0 && s.activeEventIndices.push(0), s.startTime && Date.now() - s.startTime > t.timeout_ms && this._resetSequence(t);
        const o = s.activeEventIndices;
        let a = !1, c = !1, l = [], u = [];
        for(let h = 0; h < o.length; h++){
            const p = o[h], g = t.events[p], { shouldAllowMultipleOfCurrentEvent: f, isEventAccepted: v, isSkippingAllowed: b } = this._processEventInSequenceEvent(n, g);
            if (b) {
                if (p + 1 === t.events.length) {
                    c = !0, i();
                    break;
                }
                o.includes(p + 1) || o.push(p + 1);
            }
            if (v && (a = !0, s.startTime === void 0 && (s.activeEventIndices.length === 1 && s.activeEventIndices[0] === 0 && !f || s.activeEventIndices.some((y)=>y > 0)) && (s.startTime = Date.now()), s.activeEventIndices.includes(p + 1) || (Ggn.includes(e) && t.debug && console.log(`[Accepted Event ${n} as Event ${g}. Adding index ${p + 1}]`), l.push(p + 1)), f || u.push(h), p + 1 === t.events.length)) {
                c = !0, i();
                break;
            }
        }
        if (!c) {
            u.sort((h, p)=>p - h);
            for (const h of u)s.activeEventIndices.splice(h, 1), Ggn.includes(e) && t.debug && console.log("[Finished Removing]", s.activeEventIndices);
            for (const h of l)s.activeEventIndices.includes(h) || s.activeEventIndices.push(h), Ggn.includes(e) && t.debug && console.log("[Finished Adding]", s.activeEventIndices);
            a || (Ggn.includes(e) && t.debug && console.log(`[Failed Sequence], ${JSON.stringify(t)}`), r());
        }
    }
    async _registerEvent(e) {
        if (!(!this._initializedState || this.pipelinesState_persistent === void 0)) {
            zAe && console.log("[Tooltip][Registering event]", e);
            for (const t of this._pipelineConfigs){
                let n = this.pipelinesState_persistent.state.find((s)=>s.name === t.name);
                if (n === void 0) continue;
                for (const s of t.disableOn.sequences)this._processEventInSequence(t.name, s, e, ()=>{
                    this._disablePipeline(t.name);
                }, ()=>{
                    this._resetSequence(s);
                });
                if (n.disableStatus) if (n.disableStatus.disabledUntil < Date.now()) n.disableStatus = void 0, t.showOn.sequences.forEach((s)=>this._resetSequence(s));
                else continue;
                const i = n.createdAt ? Date.now() - n.createdAt : 0, r = t.initialDisabledPeriod_ms ?? T2c;
                if (!x2c && i <= r) {
                    zAe && console.log("[Tooltip][Initial Disable Period]", t.name, i, r);
                    continue;
                }
                for (const s of t.showOn.sequences)this._processEventInSequence(t.name, s, e, ()=>{
                    if (n = this._updatePipelineStateIfDisabledInBackgroundIsHigher(t.name), n?.disableStatus !== void 0 && n.disableStatus.disabledUntil > Date.now()) return;
                    const o = Number(this._storageService.get(GZr, -1)), a = Date.now() - o;
                    (VZr || a > C2c || isNaN(a) || isNaN(o)) && this._triggerPipeline(t);
                }, ()=>{
                    this._resetSequence(s);
                });
            }
            fpt || this._maybeSavePipelineState();
        }
    }
    async registerEvent(e) {
        if (this._numActivePromises > 1e3) {
            console.error("Too many active promises from tooltipservice. Possible leak");
            return;
        }
        Promise.resolve().then(async ()=>{
            const t = new Promise((n, i)=>setTimeout(()=>i(new Error("Timeout")), 1));
            this._numActivePromises++, Promise.race([
                t,
                new Promise((n)=>{
                    this._registerEvent(e).then(()=>{
                        n(!0);
                    });
                })
            ]).then(()=>{
                this._numActivePromises--;
            }).catch((n)=>{
                console.error(n), this._numActivePromises--;
            });
        }).catch((t)=>{
            console.error("tooltipservice timeout!");
        });
    }
    async registerUserCloseTooltip(e) {
        if (this.pipelinesState_persistent === void 0) return;
        const t = this.pipelinesState_persistent.state.find((n)=>n.name === e);
        t !== void 0 && (t.disableStatus = {
            disabledUntil: Date.now() + 10 * 365 * 24 * 60 * 60 * 1e3
        }, this._savePipelineState());
    }
}, cvi = ie([
    C(0, yn),
    C(1, $n)
], cvi), mn(PK, cvi, 1), qe(class extends pt {
    constructor(){
        super({
            id: tKr,
            title: "Register Close Tooltip",
            category: "Tooltip",
            f1: !1
        });
    }
    run(e, t) {
        const { tooltipName: n } = t;
        e.get(PK).registerUserCloseTooltip(n);
    }
});

}
