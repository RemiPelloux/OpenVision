import { Qe, st } from "./Iwo.js";
import { bn, jn, tR } from "./SZu.js";
import { es, sn } from "./actions_2.js";
import { nr, rs } from "./commands.js";
import { $Po, jPo, pa } from "./constants_8.js";
import { Rn } from "./extensions.js";
import { Xy } from "./hash.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { Z4d, h2y } from "./tooltipPipelines.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ht } from "./ze.js";
var zwr, tjo, Q4d, J4d, e9d, njo, iHe, V9t, t9d, Tri, ehe, Vwr;
export { J4d, Q4d, Tri, V9t, Vwr, e9d, ehe, iHe, njo, t9d, tjo, zwr };
var __wakaru_uwe_initialized = false;
export function uwe() {
if (__wakaru_uwe_initialized) return;
__wakaru_uwe_initialized = true;
"use strict";
E(), Rn(), It(), Qe(), Zi(), h2y(), Xy(), rs(), pa(), es(), zwr = "tooltipServicePipelines", tjo = "lastShownTooltipTime", Q4d = 14400 * 1e3, J4d = 336 * 60 * 60 * 1e3, e9d = 3600 * 1e3, njo = !1, iHe = !1, V9t = !1, t9d = !1, Tri = [], ehe = jn("tooltipService"), Vwr = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._commandService = e, this._sequenceConfigToSequenceHashMap = new Map, this._initializedState = !1, this._numActivePromises = 0, this._pipelineConfigs = Z4d, this._loadEventPipelineStates();
    }
    _initializeEmptyStates() {
        const t = {
            state: []
        };
        this._pipelineConfigs.forEach((e)=>{
            t.state.push({
                name: e.name,
                disableStatus: void 0,
                createdAt: Date.now()
            });
        }), this.pipelinesState_persistent = t, this._initializeEmptySequenceState();
    }
    _initializeEmptySequenceState() {
        const t = {
            sequences: []
        };
        this._pipelineConfigs.forEach((e)=>{
            e.showOn.sequences.forEach((n)=>{
                t.sequences.push({
                    activeEventIndices: [],
                    sequenceHash: this._getSequenceConfigHash(n)
                });
            }), e.disableOn.sequences.forEach((n)=>{
                t.sequences.push({
                    activeEventIndices: [],
                    sequenceHash: this._getSequenceConfigHash(n)
                });
            });
        }), this._sequenceStates_nonPersistent = t;
    }
    _getSavedEventPipelineStateByName(t) {
        if (V9t) return;
        const e = this._storageService.get(zwr, -1);
        if (!e || e === "") {
            iHe && console.log("[Tooltip][Initializing Empty Pipeline State]"), this._initializeEmptyStates();
            return;
        }
        return JSON.parse(e).state.find((r)=>r.name === t);
    }
    _updatePipelineStateIfDisabledInBackgroundIsHigher(t) {
        if (V9t) return this.pipelinesState_persistent?.state.find((s)=>s.name === t);
        if (this.pipelinesState_persistent === void 0) return;
        const e = this.pipelinesState_persistent.state.findIndex((s)=>s.name === t);
        if (e === -1) return;
        const n = this._getSavedEventPipelineStateByName(t), i = n?.disableStatus?.disabledUntil, r = this.pipelinesState_persistent.state[e].disableStatus?.disabledUntil;
        return n === void 0 || i === void 0 ? this.pipelinesState_persistent.state[e] : r !== void 0 && r >= i ? this.pipelinesState_persistent.state[e] : (this.pipelinesState_persistent.state[e] = n, n);
    }
    _loadEventPipelineStates() {
        try {
            const t = this._storageService.get(zwr, -1);
            if (V9t || !t || t === "") {
                iHe && console.log("[Tooltip][Initializing Empty Pipeline State]"), this._initializeEmptyStates();
                return;
            }
            iHe && console.log("[Tooltip][Loading Pipeline State]");
            const e = JSON.parse(t);
            iHe && console.log("[Tooltip][Current Pipelines State]", e);
            const n = {
                state: []
            };
            for (let i of this._pipelineConfigs){
                const r = e.state.find((s)=>s.name === i.name);
                r ? n.state.push(r) : n.state.push({
                    name: i.name,
                    disableStatus: void 0,
                    createdAt: Date.now()
                });
            }
            this.pipelinesState_persistent = n;
        } catch (t) {
            iHe && console.log("[Tooltip][Error Loading Pipeline State]", t), this._initializeEmptyStates();
        } finally{
            this._initializeEmptySequenceState(), this._initializedState = !0;
        }
    }
    _getSequenceConfigHash(t) {
        const e = {
            ...t
        };
        return "debug" in e && delete e.debug, tR(JSON.stringify(e));
    }
    _getSequenceState(t) {
        const e = {
            ...t
        };
        "debug" in e && delete e.debug;
        let n = this._sequenceConfigToSequenceHashMap.get(e);
        return n === void 0 && (n = this._getSequenceConfigHash(t), this._sequenceConfigToSequenceHashMap.set(t, n)), this._sequenceStates_nonPersistent.sequences.find((i)=>i.sequenceHash === n);
    }
    _resetSequence(t) {
        const e = this._getSequenceState(t);
        e && (e.activeEventIndices = []);
    }
    _savePipelineState() {
        V9t || (iHe && console.log("[Tooltip][Saving Pipeline State]", this.pipelinesState_persistent), this._storageService.store(zwr, JSON.stringify(this.pipelinesState_persistent), -1, 1), this._lastStateSaveTime = Date.now());
    }
    _maybeSavePipelineState() {
        this._lastStateSaveTime && Date.now() - this._lastStateSaveTime < e9d || this._savePipelineState();
    }
    _triggerPipeline(t) {
        if (this.pipelinesState_persistent === void 0) return;
        t.showOn.sequences.forEach((n)=>this._resetSequence(n));
        const e = this.pipelinesState_persistent.state.find((n)=>n.name === t.name);
        e && (e.disableStatus = {
            disabledUntil: Date.now() + t.showOn.gracePeriod_ms
        }, this._commandService.executeCommand(jPo, {
            location: t.popup.location,
            header: t.popup.header,
            subheader: t.popup.subheader,
            name: t.name
        }), console.log(`[Tooltip][Show Tooltip]
${t.popup.header}
---
${t.popup.subheader}`), njo || this._storageService.store(tjo, new Date().getTime().toString(), -1, 1), V9t || this._savePipelineState());
    }
    _disablePipeline(t) {
        if (this.pipelinesState_persistent === void 0) return;
        const e = this._pipelineConfigs.find((r)=>r.name === t);
        let n = this.pipelinesState_persistent.state.find((r)=>r.name === t);
        if (!e || !n || (iHe && console.log(`[Tooltip][Disable Tooltip]
${e.name}`), n = this._updatePipelineStateIfDisabledInBackgroundIsHigher(t), !n)) return;
        const i = Date.now() + e.disableOn.gracePeriod_ms;
        n?.disableStatus !== void 0 && n.disableStatus.disabledUntil > i || (e.showOn.sequences.forEach((r)=>this._resetSequence(r)), e.disableOn.sequences.forEach((r)=>this._resetSequence(r)), n.disableStatus = {
            disabledUntil: i
        }, this._savePipelineState());
    }
    _processEventInSequenceEvent(t, e) {
        if (typeof e == "string") return {
            isEventAccepted: t.startsWith(e),
            shouldAllowMultipleOfCurrentEvent: !1,
            isSkippingAllowed: !1
        };
        if (e.length == 2 && e[0] === "*" && e[1] === "*") return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !0,
            isSkippingAllowed: !1
        };
        if (e.length === 3 && e.filter((o)=>o === "*").length === 2 && e.filter((o)=>o === "_").length === 1) return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !0,
            isSkippingAllowed: !0
        };
        if (e.length === 1 && e[0] === "*") return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !1,
            isSkippingAllowed: !1
        };
        if (e.length == 2 && e.filter((o)=>o === "*").length === 1 && e.filter((o)=>o === "_").length === 1) return {
            isEventAccepted: !0,
            shouldAllowMultipleOfCurrentEvent: !1,
            isSkippingAllowed: !0
        };
        const n = e.includes("!"), i = e.includes("*"), r = e.includes("_");
        return {
            isEventAccepted: n ? !e.some((o)=>t.startsWith(o)) : e.some((o)=>t.startsWith(o)),
            shouldAllowMultipleOfCurrentEvent: i,
            isSkippingAllowed: r
        };
    }
    _processEventInSequence(t, e, n, i, r) {
        const s = this._getSequenceState(e);
        if (!s) return;
        s.activeEventIndices.length === 0 && s.activeEventIndices.push(0), s.startTime && Date.now() - s.startTime > e.timeout_ms && this._resetSequence(e);
        const o = s.activeEventIndices;
        let a = !1, l = !1, c = [], u = [];
        for(let d = 0; d < o.length; d++){
            const h = o[d], p = e.events[h], { shouldAllowMultipleOfCurrentEvent: g, isEventAccepted: f, isSkippingAllowed: _ } = this._processEventInSequenceEvent(n, p);
            if (_) {
                if (h + 1 === e.events.length) {
                    l = !0, i();
                    break;
                }
                o.includes(h + 1) || o.push(h + 1);
            }
            if (f && (a = !0, s.startTime === void 0 && (s.activeEventIndices.length === 1 && s.activeEventIndices[0] === 0 && !g || s.activeEventIndices.some((b)=>b > 0)) && (s.startTime = Date.now()), s.activeEventIndices.includes(h + 1) || (Tri.includes(t) && e.debug && console.log(`[Accepted Event ${n} as Event ${p}. Adding index ${h + 1}]`), c.push(h + 1)), g || u.push(d), h + 1 === e.events.length)) {
                l = !0, i();
                break;
            }
        }
        if (!l) {
            u.sort((d, h)=>h - d);
            for (const d of u)s.activeEventIndices.splice(d, 1), Tri.includes(t) && e.debug && console.log("[Finished Removing]", s.activeEventIndices);
            for (const d of c)s.activeEventIndices.includes(d) || s.activeEventIndices.push(d), Tri.includes(t) && e.debug && console.log("[Finished Adding]", s.activeEventIndices);
            a || (Tri.includes(t) && e.debug && console.log(`[Failed Sequence], ${JSON.stringify(e)}`), r());
        }
    }
    async _registerEvent(t) {
        if (!(!this._initializedState || this.pipelinesState_persistent === void 0)) {
            iHe && console.log("[Tooltip][Registering event]", t);
            for (const e of this._pipelineConfigs){
                let n = this.pipelinesState_persistent.state.find((s)=>s.name === e.name);
                if (n === void 0) continue;
                for (const s of e.disableOn.sequences)this._processEventInSequence(e.name, s, t, ()=>{
                    this._disablePipeline(e.name);
                }, ()=>{
                    this._resetSequence(s);
                });
                if (n.disableStatus) if (n.disableStatus.disabledUntil < Date.now()) n.disableStatus = void 0, e.showOn.sequences.forEach((s)=>this._resetSequence(s));
                else continue;
                const i = n.createdAt ? Date.now() - n.createdAt : 0, r = e.initialDisabledPeriod_ms ?? J4d;
                if (!t9d && i <= r) {
                    iHe && console.log("[Tooltip][Initial Disable Period]", e.name, i, r);
                    continue;
                }
                for (const s of e.showOn.sequences)this._processEventInSequence(e.name, s, t, ()=>{
                    if (n = this._updatePipelineStateIfDisabledInBackgroundIsHigher(e.name), n?.disableStatus !== void 0 && n.disableStatus.disabledUntil > Date.now()) return;
                    const o = Number(this._storageService.get(tjo, -1)), a = Date.now() - o;
                    (njo || a > Q4d || isNaN(a) || isNaN(o)) && this._triggerPipeline(e);
                }, ()=>{
                    this._resetSequence(s);
                });
            }
            V9t || this._maybeSavePipelineState();
        }
    }
    async registerEvent(t) {
        if (this._numActivePromises > 1e3) {
            console.error("Too many active promises from tooltipservice. Possible leak");
            return;
        }
        Promise.resolve().then(async ()=>{
            const e = new Promise((n, i)=>setTimeout(()=>i(new Error("Timeout")), 1));
            this._numActivePromises++, Promise.race([
                e,
                new Promise((n)=>{
                    this._registerEvent(t).then(()=>{
                        n(!0);
                    });
                })
            ]).then(()=>{
                this._numActivePromises--;
            }).catch((n)=>{
                console.error(n), this._numActivePromises--;
            });
        }).catch((e)=>{
            console.error("tooltipservice timeout!");
        });
    }
    async registerUserCloseTooltip(t) {
        if (this.pipelinesState_persistent === void 0) return;
        const e = this.pipelinesState_persistent.state.find((n)=>n.name === t);
        e !== void 0 && (e.disableStatus = {
            disabledUntil: Date.now() + 10 * 365 * 24 * 60 * 60 * 1e3
        }, this._savePipelineState());
    }
}, Vwr = Re([
    F(0, ki),
    F(1, nr)
], Vwr), bn(ehe, Vwr, 1), Ht(class extends sn {
    constructor(){
        super({
            id: $Po,
            title: "Register Close Tooltip",
            category: "Tooltip",
            f1: !1
        });
    }
    run(t, e) {
        const { tooltipName: n } = e;
        t.get(ehe).registerUserCloseTooltip(n);
    }
});

}
