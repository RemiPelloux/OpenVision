import { BQw } from "./Asv.js";
import { Gt, Qe, Zm, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { bo } from "./arrays.js";
import { Rn } from "./extensions.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It } from "./instantiation.js";
import { Vd, dv } from "./storage-keys.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var NGl, LGl, zEs, wce, OGl, FGl, VEs, KEs;
export { FGl, KEs, LGl, NGl, OGl, VEs, wce, zEs };
var __wakaru_Vye_initialized = false;
export function Vye() {
if (__wakaru_Vye_initialized) return;
__wakaru_Vye_initialized = true;
"use strict";
E(), bo(), Gt(), Qe(), Rn(), It(), dv(), xc(), NGl = 32, LGl = 100, zEs = [], wce = Il("glassProjectSubagentOpenStateService"), OGl = Il("glassAgentSubagentOpenStateService"), FGl = class extends st {
    constructor(t, e){
        super(), this.storageService = t, this.storageKey = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.openIdsByParentAgentId = new Map(this.readPersistedState());
        const n = t.onDidChangeValue(io.APPLICATION, e, this._store);
        this._register(n(()=>this.replaceOpenState(this.readPersistedState())));
    }
    getOpenSubagentIds(t) {
        return this.openIdsByParentAgentId.get(t) ?? zEs;
    }
    open({ parentAgentId: t, subagentId: e }) {
        const n = new Map(this.readPersistedState()), i = n.get(t) ?? zEs;
        if (i.includes(e)) {
            n.delete(t), n.set(t, i), this.persist(n), this.replaceOpenState(n);
            return;
        }
        for(n.delete(t), n.set(t, [
            ...i,
            e
        ].slice(-LGl)); n.size > NGl;){
            const r = n.keys().next().value;
            if (r === void 0) break;
            n.delete(r);
        }
        this.persist(n), this.replaceOpenState(n);
    }
    close({ parentAgentId: t, subagentId: e }) {
        const n = new Map(this.readPersistedState()), i = n.get(t) ?? zEs;
        if (!i.includes(e)) {
            this.replaceOpenState(n);
            return;
        }
        const r = i.filter((s)=>s !== e);
        r.length === 0 ? n.delete(t) : n.set(t, r), this.persist(n), this.replaceOpenState(n);
    }
    readPersistedState() {
        return BQw(this.storageService.get(this.storageKey, io.APPLICATION));
    }
    replaceOpenState(t) {
        const e = new Set([
            ...this.openIdsByParentAgentId.keys(),
            ...t.keys()
        ]);
        for (const n of e){
            const i = this.openIdsByParentAgentId.get(n), r = t.get(n);
            Zm(i, r) || (r === void 0 ? this.openIdsByParentAgentId.delete(n) : this.openIdsByParentAgentId.set(n, r), this._onDidChange.fire({
                parentAgentId: n
            }));
        }
    }
    persist(t) {
        const e = {
            projects: Array.from(t, ([n, i])=>({
                    parentAgentId: n,
                    subagentIds: i
                }))
        };
        this.storageService.store(this.storageKey, JSON.stringify(e), io.APPLICATION, Wg.MACHINE);
    }
}, VEs = class extends FGl {
    constructor(t){
        super(t, Vd.PROJECT_SUBAGENT_OPEN_STATE);
    }
}, VEs = Re([
    F(0, Nu)
], VEs), KEs = class extends FGl {
    constructor(t){
        super(t, Vd.AGENT_SUBAGENT_OPEN_STATE);
    }
}, KEs = Re([
    F(0, Nu)
], KEs), bn(wce, VEs, 1, 1), bn(OGl, KEs, 1, 1);

}
