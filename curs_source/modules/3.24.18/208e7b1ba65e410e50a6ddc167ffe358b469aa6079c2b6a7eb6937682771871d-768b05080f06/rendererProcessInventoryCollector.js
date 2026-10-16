import { Jx, Wb } from "./appMetricsCache_2.js";
import { Eme, bme } from "./rendererProcessInventory.js";
import { h } from "./tslib.es6.js";
import { webContents as eze } from "electron";
function Cv(e) {
    return Jx.get(e);
}
function XKe(e) {
    return !e || e === "about:blank" ? "blank" : e.startsWith("devtools://") ? "devtools" : "page";
}
function QKe(e) {
    switch(e){
        case "window":
            return "window";
        case "webview":
            return "webview_guest";
        case "browserView":
            return "browser_view";
        default:
            return;
    }
}
function ZKe(e) {
    const t = new Map, n = new Set;
    let r = 0, s = 0, i = 0, a = 0;
    for (const m of e.surfaces){
        if (!Number.isInteger(m.pid) || m.pid <= 0) continue;
        const f = t.get(m.pid);
        if ((f === void 0 || m.role === "webview_guest" && f !== "webview_guest") && t.set(m.pid, m.role), m.role === "webview_guest") switch(r++, n.add(m.pid), m.guestKind ?? "page"){
            case "page":
                s++;
                break;
            case "devtools":
                i++;
                break;
            case "blank":
                a++;
                break;
        }
    }
    const o = new Map;
    for (const m of e.resources)o.set(m.pid, m);
    let l = 0, d;
    for (const m of n){
        const f = o.get(m)?.workingSetKb;
        f !== void 0 && Number.isFinite(f) && (l += f);
        const v = e.cpuPercentByPid.get(m);
        v !== void 0 && (d = (d ?? 0) + v);
    }
    const u = Array.from(t, ([m, f])=>({
            pid: m,
            role: f
        })).sort((m, f)=>m.pid - f.pid);
    return {
        timestampMs: e.timestampMs,
        roles: u,
        webviewGuests: {
            guestCount: r,
            pageGuestCount: s,
            devtoolsGuestCount: i,
            blankGuestCount: a,
            processCount: n.size,
            workingSetKb: l,
            cpuPercent: d
        }
    };
}
var Rme, Cme;
export { Cme, Cv, QKe, Rme, XKe, ZKe };
var __wakaru_tze_initialized = false;
export function tze() {
if (__wakaru_tze_initialized) return;
__wakaru_tze_initialized = true;
"use strict";
h(), Wb(), bme(), Rme = 1e3, Cme = class {
    constructor(){
        this.cpuRates = new Eme;
    }
    collect(e = Date.now()) {
        if (this.cached && e - this.cached.timestampMs < Rme) return this.cached;
        const t = [];
        for (const s of eze.getAllWebContents()){
            if (s.isDestroyed()) continue;
            const i = QKe(s.getType());
            if (i === void 0) continue;
            let a;
            try {
                a = s.getOSProcessId();
            } catch  {
                continue;
            }
            t.push(i === "webview_guest" ? {
                pid: a,
                role: i,
                guestKind: XKe(s.getURL())
            } : {
                pid: a,
                role: i
            });
        }
        const n = Cv(0).map((s)=>({
                pid: s.pid,
                workingSetKb: s.memory?.workingSetSize,
                cumulativeCpuSeconds: s.cpu?.cumulativeCPUUsage
            })), r = ZKe({
            timestampMs: e,
            surfaces: t,
            resources: n,
            cpuPercentByPid: this.cpuRates.update(e, n)
        });
        return this.cached = r, r;
    }
};

}
