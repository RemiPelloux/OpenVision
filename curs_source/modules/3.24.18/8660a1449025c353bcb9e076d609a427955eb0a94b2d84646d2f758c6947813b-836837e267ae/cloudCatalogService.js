import { Ei, Gt, Qe, Ya, st, tt, yke } from "./Iwo.js";
import { Il, bn, uhn } from "./SZu.js";
import { Rs, ss } from "./authenticationService.js";
import { hTt, pTt } from "./cachedRequest.js";
import { BPe, tat } from "./cloudMcpOAuthFlowState.js";
import { Zns, axn } from "./cloudMcpServerState.js";
import { Du, JVr, TKr } from "./dashboard_pb.js";
import { Rn } from "./extensions.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Qns, mJm, dTi, Jns, gJm, hTi, eis;
export { Jns, Qns, dTi, eis, gJm, hTi, mJm };
var __wakaru_lxn_initialized = false;
export function lxn() {
if (__wakaru_lxn_initialized) return;
__wakaru_lxn_initialized = true;
"use strict";
E(), nl(), Ei(), Gt(), Qe(), Rn(), It(), Du(), pTt(), Rs(), BPe(), axn(), Qns = 5 * 6e4, mJm = 9e4, dTi = 3e4, Jns = 4, gJm = 8, hTi = Il("cloudCatalogService"), eis = class extends st {
    constructor(t){
        super(), this.cursorAuthenticationService = t, this._mcpServers = this._register(new hTt({
            cacheTtlMs: Qns,
            timeoutMs: dTi,
            maxEntries: Jns
        })), this._pluginLogos = this._register(new hTt({
            cacheTtlMs: Qns,
            timeoutMs: dTi,
            maxEntries: Jns
        })), this._mcpStatuses = this._register(new hTt({
            cacheTtlMs: mJm,
            timeoutMs: dTi,
            maxEntries: gJm
        })), this._managedSkills = this._register(new hTt({
            cacheTtlMs: Qns,
            timeoutMs: dTi,
            maxEntries: Jns
        })), this._lastPluginBrandLogosByKey = new Map, this._onDidInvalidate = this._register(new tt), this.onDidInvalidate = this._onDidInvalidate.event;
        const e = (n)=>{
            n || this.invalidate("all");
        };
        this.cursorAuthenticationService.addLoginChangedListener(e), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(e);
            }
        }), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>{
            this._onDidInvalidate.fire("all");
        })), this._register(Zns(()=>{
            this.invalidate("mcp");
        })), this._register(tat(()=>{
            this.invalidate("mcp");
        }));
    }
    async getMcpCatalog(t) {
        this._throwIfSignedOut();
        const e = this._catalogKey(), [n, i] = await Promise.all([
            this._mcpServers.get(e, async (r)=>{
                const o = await (await this._dashboardClientForKey(e, r)).getAvailableMcpServers({}, {
                    signal: r
                });
                return this._throwIfCatalogKeyChanged(e), o.servers ?? [];
            }, t),
            this._readPluginBrandLogos(e, t)
        ]);
        return {
            servers: n,
            pluginBrandLogoByPluginId: i.logos,
            pluginBrandLogosResolved: i.resolved
        };
    }
    async getMcpStatuses(t, e) {
        this._throwIfSignedOut();
        const n = this._catalogKey(), i = [
            ...new Set(t.serverIds)
        ].sort((o, a)=>o - a), r = t.accountKey?.trim(), s = r !== void 0 && r.length > 0 ? r : void 0;
        return this._mcpStatuses.get(s === void 0 ? `${n}\0${t.oauthRedirectUri}\0${i.join(",")}` : `${n}\0${t.oauthRedirectUri}\0${i.join(",")}\0${s}`, async (o)=>{
            const l = await (await this._dashboardClientForKey(n, o)).checkHttpMcpStatus({
                serverIds: i,
                oauthRedirectUri: t.oauthRedirectUri,
                ...s !== void 0 ? {
                    accountKey: s
                } : {}
            }, {
                signal: o
            });
            return this._throwIfCatalogKeyChanged(n), l;
        }, e);
    }
    async getManagedSkills(t) {
        this._throwIfSignedOut();
        const e = this._catalogKey();
        return this._managedSkills.get(e, async (n)=>{
            const r = await (await this._dashboardClientForKey(e, n)).getManagedSkills(new TKr({}), {
                signal: n
            });
            return this._throwIfCatalogKeyChanged(e), r;
        }, t);
    }
    invalidate(t = "all") {
        const e = t === "all";
        (t === "all" || t === "mcp") && (this._mcpServers.invalidateAll({
            abortInFlight: e
        }), this._pluginLogos.invalidateAll({
            abortInFlight: e
        }), this._mcpStatuses.invalidateAll({
            abortInFlight: e
        })), (t === "all" || t === "skills") && this._managedSkills.invalidateAll({
            abortInFlight: e
        }), t === "all" && this._lastPluginBrandLogosByKey.clear(), this._onDidInvalidate.fire(t);
    }
    _catalogKey() {
        const t = this.cursorAuthenticationService.getCurrentAuthId() ?? "", e = this.cursorAuthenticationService.getTeamId();
        return `${t}:${e ?? ""}`;
    }
    _throwIfSignedOut() {
        if (!this.cursorAuthenticationService.isAuthenticated()) throw new Error("Cannot read cloud catalog: not authenticated");
    }
    _throwIfCatalogKeyChanged(t) {
        if (this._catalogKey() !== t) throw yke("Cloud catalog identity changed during fetch");
    }
    async _dashboardClientForKey(t, e) {
        const n = await this.cursorAuthenticationService.dashboardClient();
        return e.throwIfAborted(), this._throwIfCatalogKeyChanged(t), n;
    }
    async _readPluginBrandLogos(t, e) {
        try {
            return {
                logos: await this._pluginLogos.get(t, async (i)=>{
                    const r = await this._dashboardClientForKey(t, i), s = await this._fetchPluginBrandLogos(r, t, i);
                    return this._throwIfCatalogKeyChanged(t), s;
                }, e),
                resolved: !0
            };
        } catch (n) {
            if (e?.signal?.aborted === !0 || n instanceof DOMException && n.name === "AbortError" || Ya(n)) throw n;
            const r = this._lastPluginBrandLogosByKey.get(t);
            return r !== void 0 ? {
                logos: r,
                resolved: !0
            } : {
                logos: new Map,
                resolved: !1
            };
        }
    }
    async _fetchPluginBrandLogos(t, e, n) {
        const i = await t.getCloudAgentPluginsSnapshot(new JVr({
            useReplica: !0
        }), {
            signal: n
        });
        n.throwIfAborted(), this._throwIfCatalogKeyChanged(e);
        const r = new Map;
        for (const s of i.plugins ?? []){
            const o = s.effectivePlugin?.plugin, a = o?.id?.toString();
            if (!o || a === void 0) continue;
            const l = uhn([
                o
            ]);
            l !== void 0 && r.set(a, l);
        }
        return this._lastPluginBrandLogosByKey.set(e, r), r;
    }
}, eis = Re([
    F(0, ss)
], eis), bn(hTi, eis, 1, 1);

}
