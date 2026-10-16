import { $Rd, HRd, O0 } from "./A3u.js";
import { dn, he } from "./contextkey.js";
import { bg, of, oy } from "./contextkeys.js";
import { WU } from "./extensionHostKind.js";
import { x } from "./tslib.es6.js";
var WRd, GRd, VRd, jRd, mWi, Nro, Oro, RLn, gWi, sUe;
export { GRd, Nro, Oro, RLn, VRd, WRd, gWi, jRd, mWi, sUe };
var __wakaru_Fro_initialized = false;
export function Fro() {
if (__wakaru_Fro_initialized) return;
__wakaru_Fro_initialized = true;
"use strict";
x(), dn(), of(), WU(), WRd = 500, GRd = 200, VRd = /^[A-Za-z][A-Za-z0-9_]*(?:\.[A-Za-z][A-Za-z0-9_]*)+$/, jRd = /^[A-Za-z][A-Za-z0-9_]*$/, mWi = "unknown", Nro = he.or(bg, oy), Oro = Object.freeze({
    complete () {}
}), RLn = class _Cm {
    static get instance() {
        return this._instance ??= new _Cm;
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
    beginCall(t, n) {
        const i = this.session;
        if (i === void 0) return Oro;
        const r = $Rd(t, VRd), s = r === mWi ? mWi : $Rd(n, jRd), o = `${r}\0${s}`;
        let a = i.methods.get(o);
        if (a === void 0) {
            if (i.methods.size >= WRd) return i.overflowedCalls++, Oro;
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
        let c = !1;
        return {
            complete: (l, u)=>{
                if (c || this.session !== i) return;
                c = !0;
                const h = Number.isFinite(u) ? Math.max(0, u) : 0;
                a.totalMs += h, a.maxMs = Math.max(a.maxMs, h), a[l]++;
            }
        };
    }
    generateReport() {
        const t = this.session;
        let n = `## Cursor Connect

`;
        if (t === void 0 || t.methods.size === 0) return `${n}No Cursor Connect calls were captured.

`;
        n += `|Service|Method|Calls|In flight|OK|Canceled|Errors|Avg|Max|
`, n += `|-|-|-:|-:|-:|-:|-:|-:|-:|
`;
        const i = [
            ...t.methods.values()
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
Overflow: ${t.overflowedCalls} calls were not retained.

`, n;
    }
}, gWi = class {
    constructor(){
        this._count = 0, this._sum = 0, this._min = Number.MAX_VALUE, this._max = 0;
    }
    record(e) {
        this._count++, this._sum += e, this._min = Math.min(this._min, e), this._max = Math.max(this._max, e);
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
}, sUe = class bCm {
    constructor(){
        this.isActive = !1, this.startTime = Date.now(), this.stats = new Map;
    }
    static get instance() {
        return this._instance ??= new bCm;
    }
    getStats(t) {
        let n = this.stats.get(t);
        return n === void 0 && (n = {
            incoming: HRd(),
            outgoing: HRd()
        }, this.stats.set(t, n)), n;
    }
    isProfiling() {
        return this.isActive;
    }
    reset() {
        this.isActive = !1, this.stats.clear(), RLn.instance.reset();
    }
    start() {
        this.isActive || (this.isActive = !0, this.startTime = Date.now(), RLn.instance.start());
    }
    recordIncoming(t, n, i, r, s) {
        const o = this.getStats(t);
        if (r === 0) {
            if (!s.startsWith("receiveReply")) return;
            const c = o.outgoing.pendingRequests.get(i);
            if (c === void 0 || (o.outgoing.pendingRequests.delete(i), !this.isActive)) return;
            this.recordLatency(o.outgoing, c, Date.now());
            return;
        }
        const a = this.parseCommand(s);
        a !== null && (i !== 0 && o.incoming.pendingRequests.set(i, {
            time: Date.now(),
            command: a
        }), this.isActive && this.recordRequest(o.incoming, a, n));
    }
    recordOutgoing(t, n, i, r, s) {
        const o = this.getStats(t);
        if (r === 0) {
            const c = this.parseCommand(s);
            if (c === null || (i !== 0 && o.outgoing.pendingRequests.set(i, {
                time: Date.now(),
                command: c
            }), !this.isActive)) return;
            this.recordRequest(o.outgoing, c, n);
            return;
        }
        if (!s.startsWith("reply")) return;
        const a = o.incoming.pendingRequests.get(i);
        a !== void 0 && (o.incoming.pendingRequests.delete(i), this.isActive && this.recordLatency(o.incoming, a, Date.now()));
    }
    getPendingRequestsSnapshot() {
        const t = new Map;
        for (const [n, i] of this.stats)t.set(n, {
            total: i.incoming.pendingRequests.size + i.outgoing.pendingRequests.size
        });
        return t;
    }
    generateReport() {
        const t = Date.now(), n = t - this.startTime;
        let i = `# Network & IPC Profile

`;
        i += `*Duration: ${(n / 1e3).toFixed(1)}s*

`, i += `> This local-only profile contains method names, counts, sizes, outcomes, and timing. It does not contain payloads, headers, URLs, request IDs, paths, prompts, error messages, or credentials.

`, i += `Captured: renderer Cursor Connect calls and renderer \u2194 extension-host RPC.

`, i += `Not captured: raw sockets, Electron IPC, MessagePorts, MCP-internal HTTP, third-party extension networking, or the direct Glass terminal WebSocket transport.

`, i += RLn.instance.generateReport(), i += `## Extension Host RPC

`;
        for (const [r, s] of this.stats)i += `### ${O0(r)}

`, i += `#### Traffic Summary
`, i += `- **Incoming:** ${this.formatBytes(s.incoming.total)} (${this.formatNumber(s.incoming.count)} messages)
`, i += `- **Outgoing:** ${this.formatBytes(s.outgoing.total)} (${this.formatNumber(s.outgoing.count)} messages)
`, i += `- **Messages/sec:** ${((s.incoming.count + s.outgoing.count) * 1e3 / n).toFixed(1)}

`, i += this.pendingReport(s, t), i += this.latencyReport(s), i += this.commandReport(s);
        return i;
    }
    parseCommand(t) {
        const i = [
            "request: ",
            "notify: ",
            "receiveRequest "
        ].find((s)=>t.startsWith(s));
        if (i === void 0) return null;
        const r = t.indexOf("(", i.length);
        return t.slice(i.length, r < 0 ? void 0 : r).trim();
    }
    recordRequest(t, n, i) {
        t.total += i, t.count++;
        const r = t.byCommand.get(n) ?? {
            count: 0,
            bytes: 0,
            latencies: new gWi
        };
        r.count++, r.bytes += i, t.byCommand.set(n, r);
    }
    recordLatency(t, n, i) {
        const r = i - n.time;
        t.latencies.record(r), t.byCommand.get(n.command)?.latencies.record(r);
    }
    pendingReport(t, n) {
        const i = (a)=>{
            let c;
            for (const l of a.values()){
                const u = n - l.time;
                (c === void 0 || u > c.age) && (c = {
                    command: l.command,
                    age: u
                });
            }
            return c;
        }, r = i(t.incoming.pendingRequests), s = i(t.outgoing.pendingRequests);
        let o = `#### Pending Requests
`;
        return o += `- **Incoming:** ${this.formatNumber(t.incoming.pendingRequests.size)}
`, o += `- **Outgoing:** ${this.formatNumber(t.outgoing.pendingRequests.size)}
`, r && (o += `- **Oldest Incoming:** \`${r.command}\` (${this.formatTime(r.age)})
`), s && (o += `- **Oldest Outgoing:** \`${s.command}\` (${this.formatTime(s.age)})
`), `${o}
`;
    }
    latencyReport(t) {
        let n = `#### Overall Latency (ms)
`;
        return n += `|Direction|Min|Avg|Max|
|-|-|-|-|
`, n += `|**Incoming**|${t.incoming.latencies.min.toFixed(1)}ms|${t.incoming.latencies.avg.toFixed(1)}ms|${t.incoming.latencies.max.toFixed(1)}ms|
`, n += `|**Outgoing**|${t.outgoing.latencies.min.toFixed(1)}ms|${t.outgoing.latencies.avg.toFixed(1)}ms|${t.outgoing.latencies.max.toFixed(1)}ms|

`, n;
    }
    commandReport(t) {
        const n = new Map([
            ...t.incoming.byCommand,
            ...t.outgoing.byCommand
        ]), i = new Map;
        for (const [o, a] of n){
            const c = o.split(".", 2)[0] || "Other", l = i.get(c) ?? {
                count: 0,
                bytes: 0,
                latencies: new gWi,
                commands: []
            };
            l.count += a.count, l.bytes += a.bytes, l.latencies.record(a.latencies.avg), l.commands.push([
                o,
                a
            ]), i.set(c, l);
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
            for (const [c, l] of a.commands.sort((u, h)=>h[1].latencies.avg - u[1].latencies.avg).slice(0, 10)){
                const u = c.split(".").slice(1).join(".");
                s += `|&nbsp; &nbsp; &nbsp; &nbsp; \`${u}\`|${this.formatNumber(l.count)}|${l.latencies.avg.toFixed(1)}ms|${l.latencies.max.toFixed(1)}ms|${l.latencies.min.toFixed(1)}ms|${this.formatBytes(l.bytes)}|
`;
            }
        }
        return `${s}

`;
    }
    formatNumber(t) {
        return t.toLocaleString();
    }
    formatBytes(t) {
        const n = [
            "B",
            "KB",
            "MB",
            "GB"
        ];
        let i = t, r = 0;
        for(; i >= 1024 && r < n.length - 1;)i /= 1024, r++;
        return `${i.toFixed(1)} ${n[r]}`;
    }
    formatTime(t) {
        return t < 1e3 ? `${t.toFixed(0)}ms` : t < 60 * 1e3 ? `${(t / 1e3).toFixed(1)}s` : `${Math.floor(t / 6e4)}m ${Math.floor(t % 6e4 / 1e3)}s`;
    }
};

}
