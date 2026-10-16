import { Se, bt, cn, ja, rn, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { SX, ZMe, ub } from "./async.cursor.js";
import { Za, na } from "./authenticationService.js";
import { Pwt, WPe } from "./cloudMcpOAuthFlowState.js";
import { ki, vi } from "./commands.js";
import { iPe, oUe } from "./connectRequestService.js";
import { M1e, Vde } from "./cursorAgentHostService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fl, rc } from "./host.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { Oqc } from "./mcp.ts";
import { QOn, sVt } from "./mcpToolServiceClient.js";
import { iUv } from "./mcpToolServiceRefusal.js";
import { ZOn } from "./mcpUtils.js";
import { QKi, dbo, ubo } from "./mcp_tool_pb_2.js";
import { Cp, vp } from "./metricsService.js";
import { mn, pd } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
import { Auh, Iuh, Ruh, Tbo, VUv, i8v, n8v, nUv, r8v, sUv, t8v, xuh } from "./xmo.js";
var Ebo, aYi, JOn, Duh, Muh, Puh, Luh, Nuh, cYi, xbo, Ouh, Fuh, Buh, Uuh, $uh, Huh, GPe, Wuh, B_e, lYi;
export { $uh, B_e, Buh, Duh, Ebo, Fuh, GPe, Huh, JOn, Luh, Muh, Nuh, Ouh, Puh, Uuh, Wuh, aYi, cYi, lYi, xbo };
var __wakaru_GX_initialized = false;
export function GX() {
if (__wakaru_GX_initialized) return;
__wakaru_GX_initialized = true;
"use strict";
x(), Ml(), QKi(), lo(), ub(), si(), bt(), Se(), vi(), Pn(), Ze(), Qn(), iUv(), Vn(), WPe(), Za(), oUe(), qs(), M1e(), Fl(), ZOn(), QOn(), Cp(), Ebo = "hosted_mcp_routing_enabled", aYi = "This server connects from Cursor's servers. Sign in and manage it from Cursor Settings.", JOn = "Checking where this server runs\u2026", Duh = 3e4, Muh = 5 * 6e4, Puh = "mcp.hosted_placement.snapshot", Luh = nUv, Nuh = new Set([
    "poll",
    "login",
    "window_focus",
    "cloud_oauth_completed",
    "placement_unknown_retry",
    "mcp_servers_initialized",
    "mcp_server_reload",
    "mcp_auth_request",
    "mcp_auth_completed",
    "hosted_login_completed",
    "hosted_login_no_url",
    "customize_mcp_opened",
    "customize_mcp_retry",
    "customize_mcp_logout",
    "customize_mcp_set_placement",
    "plus_menu_retry",
    "client_probe_kick",
    "client_probe_written",
    "cloud_mcp_saved"
]), cYi = "hostedMcpPlacement.lastSnapshot", xbo = 1, Ouh = 5 * 6e4, Fuh = 15 * 6e4, Buh = 30 * 6e4, Uuh = 3e4, $uh = 3 * 6e4, Huh = (()=>{
    const e = dbo.fields.findJsonName("viewerCanDecide");
    return e !== void 0 && e.kind === "scalar" && e.opt === !0;
})(), GPe = {
    source: "none",
    rows: [],
    listedRows: [],
    serverPlacedIdentifiers: new Set,
    serverPlacedUrls: new Set,
    fetchedAtMs: void 0
}, Wuh = {
    1: "plugin",
    2: "custom",
    3: "team"
}, B_e = pd("hostedMcpPlacementService"), lYi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this.mcpToolServiceClient = e, this.experimentService = t, this.hostService = n, this.cursorAuthenticationService = i, this.aiConnectRequestService = r, this.storageService = s, this.logService = o, this.metricsService = a, this._onDidChangeSnapshot = this._register(new ve), this.onDidChangeSnapshot = this._onDidChangeSnapshot.event, this._snapshot = GPe, this._snapshotKey = Ruh(GPe), this._serverPlacedSetKey = Iuh(GPe), this._listedPlacementKey = Auh(GPe), this._fetchFlight = this._register(new ZMe), this._poller = this._register(new cn), this._unknownPlacementRetry = this._register(new cn), this._unknownPlacementRetryAttempt = 0, this._loginChangedListener = (l)=>this._onDidChangeLogin(l), this._routingEnabled = this._readGate(), this._agentHostRouting = this._routingEnabled && c.isCursorAgentHostEnabled(), this._routingEnabled && !this._agentHostRouting && this.logService.info("[HostedMcpPlacement] routing gate on but this window runs no agent host; server-placed rows dial locally"), this._routingEnabled && this._loadPersistedSnapshot(), this._register(this.experimentService.onDidChangeGates((l)=>{
            (l.changedGates === void 0 || l.changedGates.has(Ebo)) && this._applyGate(this._readGate());
        })), this.cursorAuthenticationService.addLoginChangedListener(this._loginChangedListener), this._register({
            dispose: ()=>this.cursorAuthenticationService.removeLoginChangedListener(this._loginChangedListener)
        }), this._register(Pwt((l)=>{
            l.stage === "completed" && this.refresh("cloud_oauth_completed", {
                force: !0,
                fresh: !0
            });
        })), this._register(this.hostService.onDidChangeFocus((l)=>{
            l && this._snapshot.rows.some((u)=>u.status === "needsAuth") && this._focusRefreshDue() && this.refresh("window_focus");
        })), this._syncPoller();
    }
    get snapshot() {
        return this._snapshot;
    }
    isRoutingEnabled() {
        return this._routingEnabled;
    }
    get isPlacementKnown() {
        return !this._routingEnabled || this._snapshot.source !== "none";
    }
    isServerPlaced(e) {
        return this._routingEnabled && Tbo(this._snapshot, e);
    }
    serverPlacedRowFor(e) {
        return this._routingEnabled ? r8v(this._snapshot, e) : void 0;
    }
    listedRowFor(e) {
        return this._routingEnabled && e.isHttp ? xuh(this._snapshot, e) : void 0;
    }
    get isAgentHostRouting() {
        return this._routingEnabled && this._agentHostRouting;
    }
    reportAgentHostRouting(e) {
        e !== this._agentHostRouting && (this._agentHostRouting = e, this.logService.info(`[HostedMcpPlacement] agent host reports routing ${e ? "live" : "not live"}; server-placed rows are ${e ? "withheld from" : "released to"} the local MCP process`), this._routingEnabled && this._onDidChangeSnapshot.fire());
    }
    withholdReason(e) {
        if (!(!this.isAgentHostRouting || !e.isHttp || e.declaredPlacement === "client")) return this._snapshot.source === "none" ? "placement_unknown" : Tbo(this._snapshot, e) ? "server_placed" : void 0;
    }
    async refresh(e, t) {
        if (this._routingEnabled && (t?.fresh === !0 && this._fetchFlight.invalidate(), !(t?.localHttpRowsKey !== void 0 && t.localHttpRowsKey === this._lastLocalHttpRowsKey && t.force !== !0 && this.isPlacementKnown) && !(t?.force !== !0 && !this._fetchFlight.isInFlight && this._lastFetchStartedAtMs !== void 0 && this._now() - this._lastFetchStartedAtMs < Uuh))) try {
            await this._fetchOnce(e), t?.localHttpRowsKey !== void 0 && (this._lastLocalHttpRowsKey = t.localHttpRowsKey);
        } catch (n) {
            ja(n) || this.logService.warn(`[HostedMcpPlacement] ListMcpTools failed (${e})`, n);
        }
    }
    _focusRefreshDue() {
        return sUv(this._now()) || this._lastFetchStartedAtMs === void 0 || this._now() - this._lastFetchStartedAtMs >= $uh;
    }
    _scheduleUnknownPlacementRetry() {
        if (!this._routingEnabled || this._snapshot.source !== "none" || this._unknownPlacementRetry.value !== void 0) return;
        const e = Math.min(Duh * 2 ** this._unknownPlacementRetryAttempt, Muh);
        this._unknownPlacementRetryAttempt++, this._unknownPlacementRetry.value = this._scheduleTimer(e, ()=>{
            this._unknownPlacementRetry.clear(), this.refresh("placement_unknown_retry", {
                force: !0
            });
        });
    }
    _clearUnknownPlacementRetry() {
        this._unknownPlacementRetry.clear(), this._unknownPlacementRetryAttempt = 0;
    }
    _scheduleTimer(e, t) {
        const n = on.setTimeout(t, e);
        return rn(()=>on.clearTimeout(n));
    }
    _readGate() {
        return this.experimentService.checkFeatureGate(Ebo, {
            disableExposureLog: !0
        });
    }
    _loadPersistedSnapshot() {
        if (this._snapshot.source !== "none") return;
        const e = i8v(this.storageService.get(cYi, -1));
        e !== void 0 && this._replaceSnapshot(e);
    }
    _applyGate(e) {
        e !== this._routingEnabled && (this._routingEnabled = e, this._clearUnknownPlacementRetry(), e ? this._loadPersistedSnapshot() : (this._fetchFlight.invalidate(), this._replaceSnapshot(GPe)), this._syncPoller(), this._onDidChangeSnapshot.fire());
    }
    _onDidChangeLogin(e) {
        if (this._fetchFlight.invalidate(), this._lastFetchStartedAtMs = void 0, this._clearUnknownPlacementRetry(), !e) {
            this.storageService.remove(cYi, -1), this._replaceSnapshot(GPe).changed && this._onDidChangeSnapshot.fire();
            return;
        }
        this._poller.value?.resetBackoff(), this.refresh("login", {
            force: !0
        });
    }
    _syncPoller() {
        if (!this._routingEnabled) {
            this._poller.clear();
            return;
        }
        if (this._poller.value !== void 0) return;
        const e = this._createPoller();
        this._poller.value = e, e.start({
            immediate: !0
        });
    }
    _createPoller() {
        return new SX(()=>this._fetchOnce("poll"), {
            focusedIntervalMs: Ouh,
            unfocusedIntervalMs: Fuh,
            maxIntervalMs: Buh,
            focus: this.hostService,
            isCancellation: ja,
            onTickError: (e)=>this.logService.warn("[HostedMcpPlacement] ListMcpTools poll failed", e),
            context: on
        });
    }
    _now() {
        return Date.now();
    }
    _fetchOnce(e) {
        const t = this._fetchFlight.run((n)=>this._fetch(n, e));
        return t.catch((n)=>{
            ja(n) || this._scheduleUnknownPlacementRetry();
        }), t;
    }
    _recordSnapshotResult(e, t) {
        this.metricsService.increment({
            stat: Puh,
            value: 1,
            tags: {
                result: e,
                source: VUv(t)
            }
        });
    }
    async _fetch(e, t) {
        if (this._lastFetchStartedAtMs = this._now(), await this.aiConnectRequestService.waitForAuthReady(), e.throwIfStale(), !this.cursorAuthenticationService.isAuthenticated()) {
            this._lastFetchStartedAtMs = void 0, this._recordSnapshotResult("skipped:signed_out", t);
            return;
        }
        let n, i = !1;
        try {
            const o = await this.mcpToolServiceClient.client();
            e.throwIfStale();
            const a = await o.listMcpTools(new ubo({}));
            e.throwIfStale(), n = t8v(a, this._now()), this.logService.trace(`[HostedMcpPlacement] ListMcpTools (${t}): ${n.rows.length} server-placed row(s) of ${n.listedRows.length} listed`);
        } catch (o) {
            if (ja(o)) throw o;
            if (!Luh(o)) throw this._recordSnapshotResult("failed", t), o;
            e.throwIfStale(), this.logService.info(`[HostedMcpPlacement] ListMcpTools (${t}): hosted MCP is not enabled for this account; every row dials locally`), i = !0, n = {
                ...GPe,
                source: "listing",
                fetchedAtMs: this._now()
            };
        }
        this.storageService.store(cYi, n8v(n), -1, 1), this._clearUnknownPlacementRetry();
        const { changed: r, placementMoved: s } = this._replaceSnapshot(n);
        this._recordSnapshotResult(i ? "refused" : s ? "applied" : "unchanged", t), r && this._onDidChangeSnapshot.fire();
    }
    _replaceSnapshot(e) {
        const t = this._snapshot.source, n = Ruh(e), i = Iuh(e), r = Auh(e), s = n !== this._snapshotKey, o = i !== this._serverPlacedSetKey || t === "listing" && e.source === "listing" && r !== this._listedPlacementKey;
        return this._snapshot = e, this._snapshotKey = n, this._serverPlacedSetKey = i, this._listedPlacementKey = r, {
            changed: s,
            placementMoved: o
        };
    }
}, lYi = ie([
    C(0, sVt),
    C(1, Kr),
    C(2, rc),
    C(3, na),
    C(4, iPe),
    C(5, yn),
    C(6, Wn),
    C(7, vp),
    C(8, Vde)
], lYi), mn(B_e, lYi, 1, 1), ki.registerCommand(Oqc, (e, t)=>{
    e.get(B_e).reportAgentHostRouting(t?.live === !0);
});

}
