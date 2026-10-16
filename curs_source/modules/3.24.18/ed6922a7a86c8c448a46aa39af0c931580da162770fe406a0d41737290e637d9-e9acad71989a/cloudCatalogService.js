import { JLt, Se, bt, ja, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Za, na } from "./authenticationService.js";
import { $wt, ntt } from "./cachedRequest.js";
import { Pwt, WPe } from "./cloudMcpOAuthFlowState.js";
import { PYi, fFn } from "./cloudMcpServerState.js";
import { H$i, Jh, neo } from "./dashboard_pb.js";
import { Pn } from "./extensions.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { Ski, mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var LYi, Mph, vFn, NYi, Pph, OYi, FYi;
export { FYi, LYi, Mph, NYi, OYi, Pph, vFn };
var __wakaru_mVt_initialized = false;
export function mVt() {
if (__wakaru_mVt_initialized) return;
__wakaru_mVt_initialized = true;
"use strict";
x(), Ml(), si(), bt(), Se(), Pn(), Ze(), Jh(), $wt(), Za(), WPe(), fFn(), LYi = 5 * 6e4, Mph = 9e4, vFn = 3e4, NYi = 4, Pph = 8, OYi = pd("cloudCatalogService"), FYi = class extends we {
    constructor(e){
        super(), this.cursorAuthenticationService = e, this._mcpServers = this._register(new ntt({
            cacheTtlMs: LYi,
            timeoutMs: vFn,
            maxEntries: NYi
        })), this._pluginLogos = this._register(new ntt({
            cacheTtlMs: LYi,
            timeoutMs: vFn,
            maxEntries: NYi
        })), this._mcpStatuses = this._register(new ntt({
            cacheTtlMs: Mph,
            timeoutMs: vFn,
            maxEntries: Pph
        })), this._managedSkills = this._register(new ntt({
            cacheTtlMs: LYi,
            timeoutMs: vFn,
            maxEntries: NYi
        })), this._lastPluginBrandLogosByKey = new Map, this._onDidInvalidate = this._register(new ve), this.onDidInvalidate = this._onDidInvalidate.event;
        const t = (n)=>{
            n || this.invalidate("all");
        };
        this.cursorAuthenticationService.addLoginChangedListener(t), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(t);
            }
        }), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>{
            this._onDidInvalidate.fire("all");
        })), this._register(PYi(()=>{
            this.invalidate("mcp");
        })), this._register(Pwt(()=>{
            this.invalidate("mcp");
        }));
    }
    async getMcpCatalog(e) {
        this._throwIfSignedOut();
        const t = this._catalogKey(), [n, i] = await Promise.all([
            this._mcpServers.get(t, async (r)=>{
                const o = await (await this._dashboardClientForKey(t, r)).getAvailableMcpServers({}, {
                    signal: r
                });
                return this._throwIfCatalogKeyChanged(t), o.servers ?? [];
            }, e),
            this._readPluginBrandLogos(t, e)
        ]);
        return {
            servers: n,
            pluginBrandLogoByPluginId: i.logos,
            pluginBrandLogosResolved: i.resolved
        };
    }
    async getMcpStatuses(e, t) {
        this._throwIfSignedOut();
        const n = this._catalogKey(), i = [
            ...new Set(e.serverIds)
        ].sort((o, a)=>o - a), r = e.accountKey?.trim(), s = r !== void 0 && r.length > 0 ? r : void 0;
        return this._mcpStatuses.get(s === void 0 ? `${n}\0${e.oauthRedirectUri}\0${i.join(",")}` : `${n}\0${e.oauthRedirectUri}\0${i.join(",")}\0${s}`, async (o)=>{
            const c = await (await this._dashboardClientForKey(n, o)).checkHttpMcpStatus({
                serverIds: i,
                oauthRedirectUri: e.oauthRedirectUri,
                ...s !== void 0 ? {
                    accountKey: s
                } : {}
            }, {
                signal: o
            });
            return this._throwIfCatalogKeyChanged(n), c;
        }, t);
    }
    async getManagedSkills(e) {
        this._throwIfSignedOut();
        const t = this._catalogKey();
        return this._managedSkills.get(t, async (n)=>{
            const r = await (await this._dashboardClientForKey(t, n)).getManagedSkills(new H$i({}), {
                signal: n
            });
            return this._throwIfCatalogKeyChanged(t), r;
        }, e);
    }
    invalidate(e = "all") {
        const t = e === "all";
        (e === "all" || e === "mcp") && (this._mcpServers.invalidateAll({
            abortInFlight: t
        }), this._pluginLogos.invalidateAll({
            abortInFlight: t
        }), this._mcpStatuses.invalidateAll({
            abortInFlight: t
        })), (e === "all" || e === "skills") && this._managedSkills.invalidateAll({
            abortInFlight: t
        }), e === "all" && this._lastPluginBrandLogosByKey.clear(), this._onDidInvalidate.fire(e);
    }
    _catalogKey() {
        const e = this.cursorAuthenticationService.getCurrentAuthId() ?? "", t = this.cursorAuthenticationService.getTeamId();
        return `${e}:${t ?? ""}`;
    }
    _throwIfSignedOut() {
        if (!this.cursorAuthenticationService.isAuthenticated()) throw new Error("Cannot read cloud catalog: not authenticated");
    }
    _throwIfCatalogKeyChanged(e) {
        if (this._catalogKey() !== e) throw JLt("Cloud catalog identity changed during fetch");
    }
    async _dashboardClientForKey(e, t) {
        const n = await this.cursorAuthenticationService.dashboardClient();
        return t.throwIfAborted(), this._throwIfCatalogKeyChanged(e), n;
    }
    async _readPluginBrandLogos(e, t) {
        try {
            return {
                logos: await this._pluginLogos.get(e, async (i)=>{
                    const r = await this._dashboardClientForKey(e, i), s = await this._fetchPluginBrandLogos(r, e, i);
                    return this._throwIfCatalogKeyChanged(e), s;
                }, t),
                resolved: !0
            };
        } catch (n) {
            if (t?.signal?.aborted === !0 || n instanceof DOMException && n.name === "AbortError" || ja(n)) throw n;
            const r = this._lastPluginBrandLogosByKey.get(e);
            return r !== void 0 ? {
                logos: r,
                resolved: !0
            } : {
                logos: new Map,
                resolved: !1
            };
        }
    }
    async _fetchPluginBrandLogos(e, t, n) {
        const i = await e.getCloudAgentPluginsSnapshot(new neo({
            useReplica: !0
        }), {
            signal: n
        });
        n.throwIfAborted(), this._throwIfCatalogKeyChanged(t);
        const r = new Map;
        for (const s of i.plugins ?? []){
            const o = s.effectivePlugin?.plugin, a = o?.id?.toString();
            if (!o || a === void 0) continue;
            const c = Ski([
                o
            ]);
            c !== void 0 && r.set(a, c);
        }
        return this._lastPluginBrandLogosByKey.set(t, r), r;
    }
}, FYi = ie([
    C(0, na)
], FYi), mn(OYi, FYi, 1, 1);

}
