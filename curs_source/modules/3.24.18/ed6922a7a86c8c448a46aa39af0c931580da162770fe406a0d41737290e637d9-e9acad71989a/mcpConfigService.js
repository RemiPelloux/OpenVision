import { EKv, TKv } from "./ECo.js";
import { Se, bt, dp, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { T_ } from "./hash.js";
import { Ze } from "./instantiation.js";
import { CKv, fwh } from "./mcp-config-service.ts";
import { mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var vwh, $Zi, HZi, rjt, WZi;
export { $Zi, HZi, WZi, rjt, vwh };
var __wakaru_b3n_initialized = false;
export function b3n() {
if (__wakaru_b3n_initialized) return;
__wakaru_b3n_initialized = true;
"use strict";
x(), CKv(), bt(), T_(), Se(), gr(), Pn(), Ze(), Vn(), qs(), vwh = "dedupe_mcp_servers", $Zi = "mcpService.selectionPreferences", HZi = "streamableHttp:", rjt = vn("mcpConfigService"), WZi = class extends we {
    constructor(e, t){
        super(), this.storageService = e, this.experimentsService = t, this._onDidChangeSelection = this._register(new ve), this.onDidChangeSelection = this._onDidChangeSelection.event, this.coreConfigService = new fwh({
            preferenceStore: {
                getSelection: (n)=>this.getMcpSelectionPreference(n),
                setSelection: ({ groupId: n, serverIdentifiers: i })=>this.setMcpSelectionPreference(n, i),
                deleteSelection: (n)=>this.deleteMcpSelectionPreference(n)
            }
        }), this.storageKeyCache = new Map, this._register(this.storageService.onDidChangeValue(0, $Zi, this._store)(()=>{
            this.cachedPreferences = void 0;
        }));
    }
    resolveServers(e) {
        return this.isMcpServerDedupeEnabled() ? (this.coreConfigService.updateServers({
            servers: e.servers,
            disabledServerIdentifiers: e.disabledServerIdentifiers
        }), this.coreConfigService.getEffectiveServers()) : e.servers;
    }
    getFullMCPServerState() {
        return this.isMcpServerDedupeEnabled() ? this.coreConfigService.getFullMCPServerState() : [];
    }
    setMCPSelection(e) {
        if (!this.isMcpServerDedupeEnabled()) return;
        const n = this.coreConfigService.getFullMCPServerState().find((o)=>o.groupId === e.groupId)?.selectedServers ?? [];
        this.coreConfigService.setMCPSelection(e);
        const r = this.coreConfigService.getFullMCPServerState().find((o)=>o.groupId === e.groupId)?.selectedServers ?? [];
        if (EKv(n, r)) return;
        const s = {
            groupId: e.groupId,
            previousSelectedServers: n,
            nextSelectedServers: r
        };
        return this._onDidChangeSelection.fire(s), s;
    }
    getGroupedMCPServerIdentifiers(e) {
        return this.isMcpServerDedupeEnabled() ? this.coreConfigService.getGroupedServerIdentifiers(e) : [
            e
        ];
    }
    getMcpSelectionPreferences() {
        return this.cachedPreferences !== void 0 ? this.cachedPreferences : (this.cachedPreferences = this.readMcpSelectionPreferences(), this.cachedPreferences);
    }
    readMcpSelectionPreferences() {
        const e = this.storageService.get($Zi, 0);
        if (!e) return {};
        try {
            const t = JSON.parse(e);
            if (!dp(t)) return {};
            const n = {};
            for (const [i, r] of Object.entries(t))typeof i == "string" && Array.isArray(r) && r.every((s)=>typeof s == "string") && (n[i] = r);
            return n;
        } catch  {
            return {};
        }
    }
    storeMcpSelectionPreferences(e) {
        this.storageService.store($Zi, JSON.stringify(e), 0, 1);
    }
    getMcpSelectionPreference(e) {
        return this.getMcpSelectionPreferences()[this.getStorageKey(e)];
    }
    setMcpSelectionPreference(e, t) {
        this.storeMcpSelectionPreferences({
            ...this.getMcpSelectionPreferences(),
            [this.getStorageKey(e)]: t
        });
    }
    deleteMcpSelectionPreference(e) {
        const t = this.getStorageKey(e), n = this.getMcpSelectionPreferences();
        if (n[t] === void 0) return;
        const i = {
            ...n
        };
        delete i[t], this.storeMcpSelectionPreferences(i);
    }
    getStorageKey(e) {
        let t = this.storageKeyCache.get(e);
        return t === void 0 && (t = TKv(e), this.storageKeyCache.set(e, t)), t;
    }
    isMcpServerDedupeEnabled() {
        return this.experimentsService.checkFeatureGate(vwh, {
            disableExposureLog: !1
        });
    }
}, WZi = ie([
    C(0, yn),
    C(1, Kr)
], WZi), mn(rjt, WZi, 1);

}
