import { Bfk, Elg, Nfk, Ofk, eal } from "./Sol.js";
import { Dfk } from "./account-mcp-identifier.ts";
import { yol } from "./mcp-url-utils_2.ts";
import { E } from "./tslib.es6.js";
var Ilg, xlg;
export { Ilg, xlg };
var __wakaru_Ufk_initialized = false;
export function Ufk() {
if (__wakaru_Ufk_initialized) return;
__wakaru_Ufk_initialized = true;
E(), yol(), Dfk(), Ilg = [
    "user",
    "project",
    "extension",
    "team",
    "plugin",
    "default",
    "provider"
], xlg = class {
    snapshot = {
        groups: [],
        effectiveServers: []
    };
    lastInput = {
        servers: []
    };
    preferenceStore;
    constructor(t){
        this.preferenceStore = t.preferenceStore;
    }
    updateServers(t) {
        return this.lastInput = {
            servers: t.servers,
            disabledServerIdentifiers: t.disabledServerIdentifiers
        }, this.snapshot = this.computeSnapshot(t), this.snapshot;
    }
    getEffectiveServers() {
        return this.snapshot.effectiveServers;
    }
    getFullMCPServerState() {
        return this.snapshot.groups;
    }
    setMCPSelection({ groupId: t, serverIdentifiers: e }) {
        const n = this.snapshot.groups.find((s)=>s.groupId === t);
        if (!n) throw new Error(`Unknown MCP server group: ${t}`);
        const i = new Set(n.servers.map((s)=>s.identifier)), r = Elg(e.filter((s)=>i.has(s)));
        if (r.length === 0) throw new Error(`Selection for MCP server group ${t} must include at least one group member`);
        this.preferenceStore.setSelection({
            groupId: t,
            serverIdentifiers: r
        }), this.snapshot = this.computeSnapshot(this.lastInput);
    }
    getGroupedServerIdentifiers(t) {
        for (const e of this.snapshot.groups)if (e.servers.some((n)=>n.identifier === t)) return e.servers.map((n)=>n.identifier);
        return [
            t
        ];
    }
    computeSnapshot(t) {
        const e = Bfk(t.disabledServerIdentifiers), n = Nfk(t.servers).map((o)=>{
            const a = Ofk(o, e, this.preferenceStore), l = a[0] ?? o.servers[0];
            return {
                ...o,
                sourceKind: eal(l),
                selectedServers: a,
                selectedServerIdentifiers: a.map((c)=>c.identifier)
            };
        }), i = new Map;
        for (const o of n)for (const a of o.servers)i.has(a.identifier) || i.set(a.identifier, o);
        const r = new Set, s = [];
        for (const o of t.servers){
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
