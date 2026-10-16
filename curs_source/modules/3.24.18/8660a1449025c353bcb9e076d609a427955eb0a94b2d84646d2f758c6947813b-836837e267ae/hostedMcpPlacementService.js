import { Ei, Gt, Pn, Qe, Vn, Ya, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { c_, lie, ype } from "./async.cursor.js";
import { Rs, ss } from "./authenticationService.js";
import { BPe, tat } from "./cloudMcpOAuthFlowState.js";
import { hs, rs } from "./commands.js";
import { fqe, uot } from "./connectRequestService.js";
import { kie, zpe } from "./cursorAgentHostService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { $el, Ssk, _ok, _sk, aXm, bok, oXm, ook, rXm, sXm, vok, yok } from "./gYa.js";
import { Od, Tc } from "./host.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { $nd } from "./mcp.ts";
import { KCi, exn } from "./mcpToolServiceClient.js";
import { bsk } from "./mcpToolServiceRefusal.js";
import { VCi } from "./mcpUtils.js";
import { Iel, uns, xel } from "./mcp_tool_pb_2.js";
import { Uh, ip } from "./metricsService.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
var Hel, yns, YCi, lXm, cXm, uXm, dXm, hXm, Sns, Wel, pXm, mXm, gXm, fXm, vXm, _Xm, gze, bXm, UPe, kns;
export { Hel, Sns, UPe, Wel, YCi, _Xm, bXm, cXm, dXm, fXm, gXm, gze, hXm, kns, lXm, mXm, pXm, uXm, vXm, yns };
var __wakaru_dle_initialized = false;
export function dle() {
if (__wakaru_dle_initialized) return;
__wakaru_dle_initialized = true;
"use strict";
E(), nl(), uns(), Bs(), c_(), Ei(), Gt(), Qe(), rs(), Rn(), It(), Ji(), bsk(), Zi(), BPe(), Rs(), uot(), _s(), zpe(), Od(), VCi(), KCi(), ip(), Hel = "hosted_mcp_routing_enabled", yns = "This server connects from Cursor's servers. Sign in and manage it from Cursor Settings.", YCi = "Checking where this server runs\u2026", lXm = 3e4, cXm = 5 * 6e4, uXm = "mcp.hosted_placement.snapshot", dXm = _sk, hXm = new Set([
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
]), Sns = "hostedMcpPlacement.lastSnapshot", Wel = 1, pXm = 5 * 6e4, mXm = 15 * 6e4, gXm = 30 * 6e4, fXm = 3e4, vXm = 3 * 6e4, _Xm = (()=>{
    const t = xel.fields.findJsonName("viewerCanDecide");
    return t !== void 0 && t.kind === "scalar" && t.opt === !0;
})(), gze = {
    source: "none",
    rows: [],
    listedRows: [],
    serverPlacedIdentifiers: new Set,
    serverPlacedUrls: new Set,
    fetchedAtMs: void 0
}, bXm = {
    1: "plugin",
    2: "custom",
    3: "team"
}, UPe = Il("hostedMcpPlacementService"), kns = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this.mcpToolServiceClient = t, this.experimentService = e, this.hostService = n, this.cursorAuthenticationService = i, this.aiConnectRequestService = r, this.storageService = s, this.logService = o, this.metricsService = a, this._onDidChangeSnapshot = this._register(new tt), this.onDidChangeSnapshot = this._onDidChangeSnapshot.event, this._snapshot = gze, this._snapshotKey = aXm(gze), this._serverPlacedSetKey = sXm(gze), this._listedPlacementKey = oXm(gze), this._fetchFlight = this._register(new ype), this._poller = this._register(new Vn), this._unknownPlacementRetry = this._register(new Vn), this._unknownPlacementRetryAttempt = 0, this._loginChangedListener = (c)=>this._onDidChangeLogin(c), this._routingEnabled = this._readGate(), this._agentHostRouting = this._routingEnabled && l.isCursorAgentHostEnabled(), this._routingEnabled && !this._agentHostRouting && this.logService.info("[HostedMcpPlacement] routing gate on but this window runs no agent host; server-placed rows dial locally"), this._routingEnabled && this._loadPersistedSnapshot(), this._register(this.experimentService.onDidChangeGates((c)=>{
            (c.changedGates === void 0 || c.changedGates.has(Hel)) && this._applyGate(this._readGate());
        })), this.cursorAuthenticationService.addLoginChangedListener(this._loginChangedListener), this._register({
            dispose: ()=>this.cursorAuthenticationService.removeLoginChangedListener(this._loginChangedListener)
        }), this._register(tat((c)=>{
            c.stage === "completed" && this.refresh("cloud_oauth_completed", {
                force: !0,
                fresh: !0
            });
        })), this._register(this.hostService.onDidChangeFocus((c)=>{
            c && this._snapshot.rows.some((u)=>u.status === "needsAuth") && this._focusRefreshDue() && this.refresh("window_focus");
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
    isServerPlaced(t) {
        return this._routingEnabled && $el(this._snapshot, t);
    }
    serverPlacedRowFor(t) {
        return this._routingEnabled ? yok(this._snapshot, t) : void 0;
    }
    listedRowFor(t) {
        return this._routingEnabled && t.isHttp ? rXm(this._snapshot, t) : void 0;
    }
    get isAgentHostRouting() {
        return this._routingEnabled && this._agentHostRouting;
    }
    reportAgentHostRouting(t) {
        t !== this._agentHostRouting && (this._agentHostRouting = t, this.logService.info(`[HostedMcpPlacement] agent host reports routing ${t ? "live" : "not live"}; server-placed rows are ${t ? "withheld from" : "released to"} the local MCP process`), this._routingEnabled && this._onDidChangeSnapshot.fire());
    }
    withholdReason(t) {
        if (!(!this.isAgentHostRouting || !t.isHttp || t.declaredPlacement === "client")) return this._snapshot.source === "none" ? "placement_unknown" : $el(this._snapshot, t) ? "server_placed" : void 0;
    }
    async refresh(t, e) {
        if (this._routingEnabled && (e?.fresh === !0 && this._fetchFlight.invalidate(), !(e?.localHttpRowsKey !== void 0 && e.localHttpRowsKey === this._lastLocalHttpRowsKey && e.force !== !0 && this.isPlacementKnown) && !(e?.force !== !0 && !this._fetchFlight.isInFlight && this._lastFetchStartedAtMs !== void 0 && this._now() - this._lastFetchStartedAtMs < fXm))) try {
            await this._fetchOnce(t), e?.localHttpRowsKey !== void 0 && (this._lastLocalHttpRowsKey = e.localHttpRowsKey);
        } catch (n) {
            Ya(n) || this.logService.warn(`[HostedMcpPlacement] ListMcpTools failed (${t})`, n);
        }
    }
    _focusRefreshDue() {
        return Ssk(this._now()) || this._lastFetchStartedAtMs === void 0 || this._now() - this._lastFetchStartedAtMs >= vXm;
    }
    _scheduleUnknownPlacementRetry() {
        if (!this._routingEnabled || this._snapshot.source !== "none" || this._unknownPlacementRetry.value !== void 0) return;
        const t = Math.min(lXm * 2 ** this._unknownPlacementRetryAttempt, cXm);
        this._unknownPlacementRetryAttempt++, this._unknownPlacementRetry.value = this._scheduleTimer(t, ()=>{
            this._unknownPlacementRetry.clear(), this.refresh("placement_unknown_retry", {
                force: !0
            });
        });
    }
    _clearUnknownPlacementRetry() {
        this._unknownPlacementRetry.clear(), this._unknownPlacementRetryAttempt = 0;
    }
    _scheduleTimer(t, e) {
        const n = $t.setTimeout(e, t);
        return Pn(()=>$t.clearTimeout(n));
    }
    _readGate() {
        return this.experimentService.checkFeatureGate(Hel, {
            disableExposureLog: !0
        });
    }
    _loadPersistedSnapshot() {
        if (this._snapshot.source !== "none") return;
        const t = bok(this.storageService.get(Sns, -1));
        t !== void 0 && this._replaceSnapshot(t);
    }
    _applyGate(t) {
        t !== this._routingEnabled && (this._routingEnabled = t, this._clearUnknownPlacementRetry(), t ? this._loadPersistedSnapshot() : (this._fetchFlight.invalidate(), this._replaceSnapshot(gze)), this._syncPoller(), this._onDidChangeSnapshot.fire());
    }
    _onDidChangeLogin(t) {
        if (this._fetchFlight.invalidate(), this._lastFetchStartedAtMs = void 0, this._clearUnknownPlacementRetry(), !t) {
            this.storageService.remove(Sns, -1), this._replaceSnapshot(gze).changed && this._onDidChangeSnapshot.fire();
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
        const t = this._createPoller();
        this._poller.value = t, t.start({
            immediate: !0
        });
    }
    _createPoller() {
        return new lie(()=>this._fetchOnce("poll"), {
            focusedIntervalMs: pXm,
            unfocusedIntervalMs: mXm,
            maxIntervalMs: gXm,
            focus: this.hostService,
            isCancellation: Ya,
            onTickError: (t)=>this.logService.warn("[HostedMcpPlacement] ListMcpTools poll failed", t),
            context: $t
        });
    }
    _now() {
        return Date.now();
    }
    _fetchOnce(t) {
        const e = this._fetchFlight.run((n)=>this._fetch(n, t));
        return e.catch((n)=>{
            Ya(n) || this._scheduleUnknownPlacementRetry();
        }), e;
    }
    _recordSnapshotResult(t, e) {
        this.metricsService.increment({
            stat: uXm,
            value: 1,
            tags: {
                result: t,
                source: ook(e)
            }
        });
    }
    async _fetch(t, e) {
        if (this._lastFetchStartedAtMs = this._now(), await this.aiConnectRequestService.waitForAuthReady(), t.throwIfStale(), !this.cursorAuthenticationService.isAuthenticated()) {
            this._lastFetchStartedAtMs = void 0, this._recordSnapshotResult("skipped:signed_out", e);
            return;
        }
        let n, i = !1;
        try {
            const o = await this.mcpToolServiceClient.client();
            t.throwIfStale();
            const a = await o.listMcpTools(new Iel({}));
            t.throwIfStale(), n = vok(a, this._now()), this.logService.trace(`[HostedMcpPlacement] ListMcpTools (${e}): ${n.rows.length} server-placed row(s) of ${n.listedRows.length} listed`);
        } catch (o) {
            if (Ya(o)) throw o;
            if (!dXm(o)) throw this._recordSnapshotResult("failed", e), o;
            t.throwIfStale(), this.logService.info(`[HostedMcpPlacement] ListMcpTools (${e}): hosted MCP is not enabled for this account; every row dials locally`), i = !0, n = {
                ...gze,
                source: "listing",
                fetchedAtMs: this._now()
            };
        }
        this.storageService.store(Sns, _ok(n), -1, 1), this._clearUnknownPlacementRetry();
        const { changed: r, placementMoved: s } = this._replaceSnapshot(n);
        this._recordSnapshotResult(i ? "refused" : s ? "applied" : "unchanged", e), r && this._onDidChangeSnapshot.fire();
    }
    _replaceSnapshot(t) {
        const e = this._snapshot.source, n = aXm(t), i = sXm(t), r = oXm(t), s = n !== this._snapshotKey, o = i !== this._serverPlacedSetKey || e === "listing" && t.source === "listing" && r !== this._listedPlacementKey;
        return this._snapshot = t, this._snapshotKey = n, this._serverPlacedSetKey = i, this._listedPlacementKey = r, {
            changed: s,
            placementMoved: o
        };
    }
}, kns = Re([
    F(0, exn),
    F(1, Cr),
    F(2, Tc),
    F(3, ss),
    F(4, fqe),
    F(5, ki),
    F(6, Li),
    F(7, Uh),
    F(8, kie)
], kns), bn(UPe, kns, 1, 1), hs.registerCommand($nd, (t, e)=>{
    t.get(UPe).reportAgentHostRouting(e?.live === !0);
});

}
