import { Hi, mt } from "./contextkey.js";
import { Tm, ch, x_ } from "./contextkeys.js";
import { Xz } from "./extensionHostKind.js";
import { E } from "./tslib.es6.js";
import { Sbm, kbm, qI } from "./yBp.js";
var wbm, Cbm, Tbm, Ebm, FKr, BKr, z8a, ski, UKr, Ibe;
export { BKr, Cbm, Ebm, FKr, Ibe, Tbm, UKr, ski, wbm, z8a };
var __wakaru_jKr_initialized = false;
export function jKr() {
if (__wakaru_jKr_initialized) return;
__wakaru_jKr_initialized = true;
"use strict";
E(), Hi(), x_(), Xz(), wbm = 500, Cbm = 200, Tbm = /^[A-Za-z][A-Za-z0-9_]*(?:\.[A-Za-z][A-Za-z0-9_]*)+$/, Ebm = /^[A-Za-z][A-Za-z0-9_]*$/, FKr = "unknown", BKr = mt.or(ch, Tm), z8a = Object.freeze({
    complete () {}
}), ski = class nPb {
    static get instance() {
        return this._instance ??= new nPb;
    }
    isProfiling() {
        return this.session !== void 0;
    }
    start() {
        this.reset(), this.session = {
            methods: new Map,
            overflowedCalls: 0
        };
    }
    reset() {
        this.session?.methods.clear(), this.session = void 0;
    }
    beginCall(e, n) {
        const i = this.session;
        if (i === void 0) return z8a;
        const r = Sbm(e, Tbm), s = r === FKr ? FKr : Sbm(n, Ebm), o = `${r}\0${s}`;
        let a = i.methods.get(o);
        if (a === void 0) {
            if (i.methods.size >= wbm) return i.overflowedCalls++, z8a;
            a = {
                service: r,
                method: s,
                calls: 0,
                ok: 0,
                canceled: 0,
                error: 0,
                totalMs: 0,
                maxMs: 0
            }, i.methods.set(o, a);
        }
        a.calls++;
        let l = !1;
        return {
            complete: (c, u)=>{
                if (l || this.session !== i) return;
                l = !0;
                const d = Number.isFinite(u) ? Math.max(0, u) : 0;
                a.totalMs += d, a.maxMs = Math.max(a.maxMs, d), a[c]++;
            }
        };
    }
    generateReport() {
        const e = this.session;
        let n = `## Cursor Connect

`;
        if (e === void 0 || e.methods.size === 0) return `${n}No Cursor Connect calls were captured.

`;
        n += `|Service|Method|Calls|In flight|OK|Canceled|Errors|Avg|Max|
`, n += `|-|-|-:|-:|-:|-:|-:|-:|-:|
`;
        const i = [
            ...e.methods.values()
        ].sort((r, s)=>{
            const o = r.ok + r.canceled + r.error, a = s.ok + s.canceled + s.error;
            return (a === 0 ? 0 : s.totalMs / a) - (o === 0 ? 0 : r.totalMs / o) || r.service.localeCompare(s.service) || r.method.localeCompare(s.method);
        });
        for (const r of i){
            const s = r.ok + r.canceled + r.error, o = s === 0 ? "\u2014" : `${(r.totalMs / s).toFixed(1)}ms`;
            n += `|\`${r.service}\`|\`${r.method}\`|${r.calls}|${r.calls - s}|${r.ok}|${r.canceled}|${r.error}|${o}|${r.maxMs.toFixed(1)}ms|
`;
        }
        return n += `
Overflow: ${e.overflowedCalls} calls were not retained.

`, n;
    }
}, UKr = class {
    constructor(){
        this._count = 0, this._sum = 0, this._min = Number.MAX_VALUE, this._max = 0;
    }
    record(t) {
        this._count++, this._sum += t, this._min = Math.min(this._min, t), this._max = Math.max(this._max, t);
    }
    get min() {
        return this._count > 0 ? this._min : 0;
    }
    get max() {
        return this._max;
    }
    get avg() {
        return this._count > 0 ? this._sum / this._count : 0;
    }
}, Ibe = class iPb {
    constructor(){
        this.isActive = !1, this.startTime = Date.now(), this.stats = new Map;
    }
    static get instance() {
        return this._instance ??= new iPb;
    }
    getStats(e) {
        let n = this.stats.get(e);
        return n === void 0 && (n = {
            incoming: kbm(),
            outgoing: kbm()
        }, this.stats.set(e, n)), n;
    }
    isProfiling() {
        return this.isActive;
    }
    reset() {
        this.isActive = !1, this.stats.clear(), ski.instance.reset();
    }
    start() {
        this.isActive || (this.isActive = !0, this.startTime = Date.now(), ski.instance.start());
    }
    recordIncoming(e, n, i, r, s) {
        const o = this.getStats(e);
        if (r === 0) {
            if (!s.startsWith("receiveReply")) return;
            const l = o.outgoing.pendingRequests.get(i);
            if (l === void 0 || (o.outgoing.pendingRequests.delete(i), !this.isActive)) return;
            this.recordLatency(o.outgoing, l, Date.now());
            return;
        }
        const a = this.parseCommand(s);
        a !== null && (i !== 0 && o.incoming.pendingRequests.set(i, {
            time: Date.now(),
            command: a
        }), this.isActive && this.recordRequest(o.incoming, a, n));
    }
    recordOutgoing(e, n, i, r, s) {
        const o = this.getStats(e);
        if (r === 0) {
            const l = this.parseCommand(s);
            if (l === null || (i !== 0 && o.outgoing.pendingRequests.set(i, {
                time: Date.now(),
                command: l
            }), !this.isActive)) return;
            this.recordRequest(o.outgoing, l, n);
            return;
        }
        if (!s.startsWith("reply")) return;
        const a = o.incoming.pendingRequests.get(i);
        a !== void 0 && (o.incoming.pendingRequests.delete(i), this.isActive && this.recordLatency(o.incoming, a, Date.now()));
    }
    getPendingRequestsSnapshot() {
        const e = new Map;
        for (const [n, i] of this.stats)e.set(n, {
            total: i.incoming.pendingRequests.size + i.outgoing.pendingRequests.size
        });
        return e;
    }
    generateReport() {
        const e = Date.now(), n = e - this.startTime;
        let i = `# Network & IPC Profile

`;
        i += `*Duration: ${(n / 1e3).toFixed(1)}s*

`, i += `> This local-only profile contains method names, counts, sizes, outcomes, and timing. It does not contain payloads, headers, URLs, request IDs, paths, prompts, error messages, or credentials.

`, i += `Captured: renderer Cursor Connect calls and renderer \u2194 extension-host RPC.

`, i += `Not captured: raw sockets, Electron IPC, MessagePorts, MCP-internal HTTP, third-party extension networking, or the direct Glass terminal WebSocket transport.

`, i += ski.instance.generateReport(), i += `## Extension Host RPC

`;
        for (const [r, s] of this.stats)i += `### ${qI(r)}

`, i += `#### Traffic Summary
`, i += `- **Incoming:** ${this.formatBytes(s.incoming.total)} (${this.formatNumber(s.incoming.count)} messages)
`, i += `- **Outgoing:** ${this.formatBytes(s.outgoing.total)} (${this.formatNumber(s.outgoing.count)} messages)
`, i += `- **Messages/sec:** ${((s.incoming.count + s.outgoing.count) * 1e3 / n).toFixed(1)}

`, i += this.pendingReport(s, e), i += this.latencyReport(s), i += this.commandReport(s);
        return i;
    }
    parseCommand(e) {
        const i = [
            "request: ",
            "notify: ",
            "receiveRequest "
        ].find((s)=>e.startsWith(s));
        if (i === void 0) return null;
        const r = e.indexOf("(", i.length);
        return e.slice(i.length, r < 0 ? void 0 : r).trim();
    }
    recordRequest(e, n, i) {
        e.total += i, e.count++;
        const r = e.byCommand.get(n) ?? {
            count: 0,
            bytes: 0,
            latencies: new UKr
        };
        r.count++, r.bytes += i, e.byCommand.set(n, r);
    }
    recordLatency(e, n, i) {
        const r = i - n.time;
        e.latencies.record(r), e.byCommand.get(n.command)?.latencies.record(r);
    }
    pendingReport(e, n) {
        const i = (a)=>{
            let l;
            for (const c of a.values()){
                const u = n - c.time;
                (l === void 0 || u > l.age) && (l = {
                    command: c.command,
                    age: u
                });
            }
            return l;
        }, r = i(e.incoming.pendingRequests), s = i(e.outgoing.pendingRequests);
        let o = `#### Pending Requests
`;
        return o += `- **Incoming:** ${this.formatNumber(e.incoming.pendingRequests.size)}
`, o += `- **Outgoing:** ${this.formatNumber(e.outgoing.pendingRequests.size)}
`, r && (o += `- **Oldest Incoming:** \`${r.command}\` (${this.formatTime(r.age)})
`), s && (o += `- **Oldest Outgoing:** \`${s.command}\` (${this.formatTime(s.age)})
`), `${o}
`;
    }
    latencyReport(e) {
        let n = `#### Overall Latency (ms)
`;
        return n += `|Direction|Min|Avg|Max|
|-|-|-|-|
`, n += `|**Incoming**|${e.incoming.latencies.min.toFixed(1)}ms|${e.incoming.latencies.avg.toFixed(1)}ms|${e.incoming.latencies.max.toFixed(1)}ms|
`, n += `|**Outgoing**|${e.outgoing.latencies.min.toFixed(1)}ms|${e.outgoing.latencies.avg.toFixed(1)}ms|${e.outgoing.latencies.max.toFixed(1)}ms|

`, n;
    }
    commandReport(e) {
        const n = new Map([
            ...e.incoming.byCommand,
            ...e.outgoing.byCommand
        ]), i = new Map;
        for (const [o, a] of n){
            const l = o.split(".", 2)[0] || "Other", c = i.get(l) ?? {
                count: 0,
                bytes: 0,
                latencies: new UKr,
                commands: []
            };
            c.count += a.count, c.bytes += a.bytes, c.latencies.record(a.latencies.avg), c.commands.push([
                o,
                a
            ]), i.set(l, c);
        }
        const r = [
            ...i.entries()
        ].sort((o, a)=>a[1].latencies.avg - o[1].latencies.avg);
        let s = `#### Command Groups
`;
        s += `|Namespace|Avg Latency|Count|Total Size|
|-|-:|-:|-:|
`;
        for (const [o, a] of r)s += `|**\`${o}\`**|${a.latencies.avg.toFixed(1)}ms|${this.formatNumber(a.count)}|${this.formatBytes(a.bytes)}|
`;
        s += `

#### Top Commands By Latency


`, s += `|Command|Count|Avg|Max|Min|Traffic|
|-|-:|-:|-:|-:|-:|
`;
        for (const [o, a] of r){
            s += `||
|**\`${o}\`**|
||
`;
            for (const [l, c] of a.commands.sort((u, d)=>d[1].latencies.avg - u[1].latencies.avg).slice(0, 10)){
                const u = l.split(".").slice(1).join(".");
                s += `|&nbsp; &nbsp; &nbsp; &nbsp; \`${u}\`|${this.formatNumber(c.count)}|${c.latencies.avg.toFixed(1)}ms|${c.latencies.max.toFixed(1)}ms|${c.latencies.min.toFixed(1)}ms|${this.formatBytes(c.bytes)}|
`;
            }
        }
        return `${s}

`;
    }
    formatNumber(e) {
        return e.toLocaleString();
    }
    formatBytes(e) {
        const n = [
            "B",
            "KB",
            "MB",
            "GB"
        ];
        let i = e, r = 0;
        for(; i >= 1024 && r < n.length - 1;)i /= 1024, r++;
        return `${i.toFixed(1)} ${n[r]}`;
    }
    formatTime(e) {
        return e < 1e3 ? `${e.toFixed(0)}ms` : e < 60 * 1e3 ? `${(e / 1e3).toFixed(1)}s` : `${Math.floor(e / 6e4)}m ${Math.floor(e % 6e4 / 1e3)}s`;
    }
};

}
