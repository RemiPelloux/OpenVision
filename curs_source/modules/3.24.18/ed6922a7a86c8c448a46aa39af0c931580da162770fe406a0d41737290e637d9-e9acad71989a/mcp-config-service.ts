import { SKv, bKv, i0o, mwh, wKv } from "./ECo.js";
import { _Kv } from "./account-mcp-identifier.ts";
import { TCo } from "./mcp-url-utils_2.ts";
import { x } from "./tslib.es6.js";
var gwh, fwh;
export { fwh, gwh };
var __wakaru_CKv_initialized = false;
export function CKv() {
if (__wakaru_CKv_initialized) return;
__wakaru_CKv_initialized = true;
x(), TCo(), _Kv(), gwh = [
    "user",
    "project",
    "extension",
    "team",
    "plugin",
    "default",
    "provider"
], fwh = class {
    snapshot = {
        groups: [],
        effectiveServers: []
    };
    lastInput = {
        servers: []
    };
    preferenceStore;
    constructor(e){
        this.preferenceStore = e.preferenceStore;
    }
    updateServers(e) {
        return this.lastInput = {
            servers: e.servers,
            disabledServerIdentifiers: e.disabledServerIdentifiers
        }, this.snapshot = this.computeSnapshot(e), this.snapshot;
    }
    getEffectiveServers() {
        return this.snapshot.effectiveServers;
    }
    getFullMCPServerState() {
        return this.snapshot.groups;
    }
    setMCPSelection({ groupId: e, serverIdentifiers: t }) {
        const n = this.snapshot.groups.find((s)=>s.groupId === e);
        if (!n) throw new Error(`Unknown MCP server group: ${e}`);
        const i = new Set(n.servers.map((s)=>s.identifier)), r = mwh(t.filter((s)=>i.has(s)));
        if (r.length === 0) throw new Error(`Selection for MCP server group ${e} must include at least one group member`);
        this.preferenceStore.setSelection({
            groupId: e,
            serverIdentifiers: r
        }), this.snapshot = this.computeSnapshot(this.lastInput);
    }
    getGroupedServerIdentifiers(e) {
        for (const t of this.snapshot.groups)if (t.servers.some((n)=>n.identifier === e)) return t.servers.map((n)=>n.identifier);
        return [
            e
        ];
    }
    computeSnapshot(e) {
        const t = wKv(e.disabledServerIdentifiers), n = bKv(e.servers).map((o)=>{
            const a = SKv(o, t, this.preferenceStore), c = a[0] ?? o.servers[0];
            return {
                ...o,
                sourceKind: i0o(c),
                selectedServers: a,
                selectedServerIdentifiers: a.map((l)=>l.identifier)
            };
        }), i = new Map;
        for (const o of n)for (const a of o.servers)i.has(a.identifier) || i.set(a.identifier, o);
        const r = new Set, s = [];
        for (const o of e.servers){
            const a = i.get(o.identifier);
            !a || r.has(a.groupId) || (r.add(a.groupId), s.push(...a.selectedServers));
        }
        return {
            groups: n,
            effectiveServers: s
        };
    }
};

}
