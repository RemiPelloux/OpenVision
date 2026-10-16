import { Gt, Qe, st, tt, wf } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { $fk, jfk } from "./Sol.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Xy } from "./hash.js";
import { It } from "./instantiation.js";
import { Ufk, xlg } from "./mcp-config-service.ts";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
var Alg, fss, vss, tAn, _ss;
export { Alg, _ss, fss, tAn, vss };
var __wakaru_PEi_initialized = false;
export function PEi() {
if (__wakaru_PEi_initialized) return;
__wakaru_PEi_initialized = true;
"use strict";
E(), Ufk(), Gt(), Xy(), Qe(), To(), Rn(), It(), Zi(), _s(), Alg = "dedupe_mcp_servers", fss = "mcpService.selectionPreferences", vss = "streamableHttp:", tAn = jn("mcpConfigService"), _ss = class extends st {
    constructor(t, e){
        super(), this.storageService = t, this.experimentsService = e, this._onDidChangeSelection = this._register(new tt), this.onDidChangeSelection = this._onDidChangeSelection.event, this.coreConfigService = new xlg({
            preferenceStore: {
                getSelection: (n)=>this.getMcpSelectionPreference(n),
                setSelection: ({ groupId: n, serverIdentifiers: i })=>this.setMcpSelectionPreference(n, i),
                deleteSelection: (n)=>this.deleteMcpSelectionPreference(n)
            }
        }), this.storageKeyCache = new Map, this._register(this.storageService.onDidChangeValue(0, fss, this._store)(()=>{
            this.cachedPreferences = void 0;
        }));
    }
    resolveServers(t) {
        return this.isMcpServerDedupeEnabled() ? (this.coreConfigService.updateServers({
            servers: t.servers,
            disabledServerIdentifiers: t.disabledServerIdentifiers
        }), this.coreConfigService.getEffectiveServers()) : t.servers;
    }
    getFullMCPServerState() {
        return this.isMcpServerDedupeEnabled() ? this.coreConfigService.getFullMCPServerState() : [];
    }
    setMCPSelection(t) {
        if (!this.isMcpServerDedupeEnabled()) return;
        const n = this.coreConfigService.getFullMCPServerState().find((o)=>o.groupId === t.groupId)?.selectedServers ?? [];
        this.coreConfigService.setMCPSelection(t);
        const r = this.coreConfigService.getFullMCPServerState().find((o)=>o.groupId === t.groupId)?.selectedServers ?? [];
        if ($fk(n, r)) return;
        const s = {
            groupId: t.groupId,
            previousSelectedServers: n,
            nextSelectedServers: r
        };
        return this._onDidChangeSelection.fire(s), s;
    }
    getGroupedMCPServerIdentifiers(t) {
        return this.isMcpServerDedupeEnabled() ? this.coreConfigService.getGroupedServerIdentifiers(t) : [
            t
        ];
    }
    getMcpSelectionPreferences() {
        return this.cachedPreferences !== void 0 ? this.cachedPreferences : (this.cachedPreferences = this.readMcpSelectionPreferences(), this.cachedPreferences);
    }
    readMcpSelectionPreferences() {
        const t = this.storageService.get(fss, 0);
        if (!t) return {};
        try {
            const e = JSON.parse(t);
            if (!wf(e)) return {};
            const n = {};
            for (const [i, r] of Object.entries(e))typeof i == "string" && Array.isArray(r) && r.every((s)=>typeof s == "string") && (n[i] = r);
            return n;
        } catch  {
            return {};
        }
    }
    storeMcpSelectionPreferences(t) {
        this.storageService.store(fss, JSON.stringify(t), 0, 1);
    }
    getMcpSelectionPreference(t) {
        return this.getMcpSelectionPreferences()[this.getStorageKey(t)];
    }
    setMcpSelectionPreference(t, e) {
        this.storeMcpSelectionPreferences({
            ...this.getMcpSelectionPreferences(),
            [this.getStorageKey(t)]: e
        });
    }
    deleteMcpSelectionPreference(t) {
        const e = this.getStorageKey(t), n = this.getMcpSelectionPreferences();
        if (n[e] === void 0) return;
        const i = {
            ...n
        };
        delete i[e], this.storeMcpSelectionPreferences(i);
    }
    getStorageKey(t) {
        let e = this.storageKeyCache.get(t);
        return e === void 0 && (e = jfk(t), this.storageKeyCache.set(t, e)), e;
    }
    isMcpServerDedupeEnabled() {
        return this.experimentsService.checkFeatureGate(Alg, {
            disableExposureLog: !1
        });
    }
}, _ss = Re([
    F(0, ki),
    F(1, Cr)
], _ss), bn(tAn, _ss, 1);

}
