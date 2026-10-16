import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { db, nE } from "./backendClient.js";
import { Pn } from "./extensions.js";
import { xJd } from "./favicon.js";
import { Ml } from "./index.ts";
import { Ze, _t } from "./instantiation.js";
import { Ykt, apo, v1e, wXd } from "./mcpConstants.js";
import { mgo } from "./mcpDisplayName.js";
import { V2n, Yqi } from "./mcpInstallationService.js";
import { tPv } from "./mcpKnownServerCatalog.js";
import { MR, P1 } from "./mcpServiceTypes.js";
import { DJd, lgo } from "./mcp_connectweb.js";
import { R7i, VXs } from "./mcp_pb_2.js";
import { Gd, li } from "./network.js";
import { ZMv } from "./pluginLogoLookup.js";
import { EN, lF } from "./pluginsProviderService.js";
import { gzc, mn, vn, wqc, yqc } from "./qIc.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { JMv, TJd, VJd, XMv, ePv, ogo, owt, rPv, sgo } from "./xmo.js";
var eeh, q2n, S1e, Oet;
export { Oet, S1e, eeh, q2n };
var __wakaru_k1e_initialized = false;
export function k1e() {
if (__wakaru_k1e_initialized) return;
__wakaru_k1e_initialized = true;
"use strict";
x(), Ml(), Ze(), Pn(), bt(), Se(), li(), xJd(), Yqi(), la(), nE(), DJd(), R7i(), v1e(), lF(), ZMv(), MR(), im(), owt(), tPv(), mgo(), eeh = [
    "amazonaws.com",
    "cloudfront.net",
    "herokuapp.com",
    "herokudns.com",
    "vercel.app",
    "netlify.app",
    "fly.dev",
    "fly.io",
    "onrender.com",
    "render.com",
    "run.app",
    "googleusercontent.com",
    "azurewebsites.net",
    "workers.dev",
    "pages.dev",
    "trycloudflare.com",
    "ngrok.io",
    "ngrok-free.app",
    "ngrok.app",
    "railway.app",
    "replit.dev",
    "repl.co",
    "deno.dev",
    "modal.run",
    "modal.host",
    "koyeb.app"
], q2n = 512 * 1024, S1e = vn("mcpWellKnownDetectionService"), Oet = class extends we {
    constructor(e, t, n, i, r){
        super(), this.mcpInstallationService = e, this.analyticsService = t, this.instantiationService = n, this.pluginsProviderService = i, this.cursorOwnedIconDataUris = new Map, this.registryIconDataUris = new Map, this.pluginIconDataUris = new Map, this.knownServerByUrl = new WeakMap, this.faviconFallbackByUrl = new Map, this.pluginLogoCandidatesByLookup = new WeakMap, this.serverLookupByList = new WeakMap, this.nextIconRequest = 0, this.latestAppliedPluginIconRequests = new Map, this.attemptedPluginIconSources = new Map, this._onDidResolveIcons = this._register(new ve), this.onDidResolveIcons = this._onDidResolveIcons.event, this._log = ogo(r, "well_known_detection"), this.onDidPluginIconSourcesChange = this.pluginsProviderService.onDidPluginsCacheChange, this.mcpRegistryBackendClient = this._register(this.instantiationService.createInstance(db, {
            service: lgo
        })), this.preResolveCursorOwnedIcons(), this.preResolveWellKnownIcons();
    }
    preResolveCursorOwnedIcons() {
        Oet.resolveIconToDataUri(wXd).then((e)=>{
            for (const t of apo)this.cursorOwnedIconDataUris.set(t.toLowerCase(), e);
            this._onDidResolveIcons.fire();
        }).catch((e)=>{
            this._log("debug", "[MCPWellKnownDetection] Failed to pre-resolve Cursor-owned server icon:", e);
        });
    }
    preResolveWellKnownIcons() {
        this.fetchKnownServersCatalog().catch((e)=>{
            this._log("debug", "[MCPWellKnownDetection] Failed to fetch known servers for icon pre-resolution:", e);
        });
    }
    preResolveKnownServerIcons(e) {
        let t = !1;
        Promise.allSettled(e.entries.map(async ({ info: n })=>{
            if (n.icon) try {
                const i = await Oet.resolveIconToDataUri(n.icon);
                this.registryIconDataUris.has(n) || (this.registryIconDataUris.set(n, i), t = !0);
            } catch (i) {
                this._log("debug", `[MCPWellKnownDetection] Failed to pre-resolve icon for server "${n.name}":`, i);
            }
        })).then(()=>{
            t && this._onDidResolveIcons.fire();
        });
    }
    async resolveFirstIcon(e, t) {
        for (const n of t)try {
            return await Oet.resolveIconToDataUri(n);
        } catch (i) {
            this._log("debug", `[MCPWellKnownDetection] Failed icon candidate for server "${e.identifier}":`, i, {
                identifier: e.identifier
            });
        }
    }
    preResolveServerIcons(e) {
        Promise.all(e.map(async (t)=>{
            const n = t.identifier.toLowerCase();
            if (apo.has(n)) return !1;
            let i = !1;
            const r = this.getPluginLogoUrls(t), s = r.join(`
`);
            if (r.length > 0 && this.attemptedPluginIconSources.get(n) !== s) {
                this.attemptedPluginIconSources.set(n, s);
                const a = ++this.nextIconRequest, c = await this.resolveFirstIcon(t, r), l = this.latestAppliedPluginIconRequests.get(n) ?? 0;
                a > l && (this.latestAppliedPluginIconRequests.set(n, a), c ? (this.pluginIconDataUris.set(n, c), i = !0) : this.pluginIconDataUris.delete(n) && (i = !0));
            }
            if (this.pluginIconDataUris.has(n)) return i;
            const o = await this.preResolveRegistryIcon(t);
            return i || o;
        })).then((t)=>{
            t.some(Boolean) && this._onDidResolveIcons.fire();
        }).catch((t)=>{
            this._log("debug", "[MCPWellKnownDetection] Failed to pre-resolve server icons:", t);
        });
    }
    async preResolveRegistryIcon(e) {
        let t;
        try {
            t = await this.fetchKnownServersCatalog();
        } catch  {
            return !1;
        }
        const n = this.findKnownServerCached(t, e);
        if (!n?.icon || this.registryIconDataUris.has(n)) return !1;
        const i = await this.resolveFirstIcon(e, [
            n.icon
        ]);
        return !i || this.registryIconDataUris.has(n) ? !1 : (this.registryIconDataUris.set(n, i), !0);
    }
    getPluginLogoUrls(e) {
        const t = this.pluginsProviderService.pluginsCache.get();
        if (!t || !e.pluginManaged || !e.pluginName) return [];
        const n = {
            name: e.pluginName,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId
        };
        return gzc(this.findPluginLogoCandidatesCached(t, n));
    }
    static async resolveIconToDataUri(e) {
        if (e.startsWith("data:")) return e;
        let t = e;
        e.startsWith("vs/") && (t = Gd.asBrowserUri(e).toString(!0));
        const n = await fetch(t);
        if (!n.ok) throw new Error(`Icon request failed with HTTP ${n.status}`);
        const i = Number(n.headers.get("content-length"));
        if (i > q2n) throw new Error(`Icon Content-Length ${i} exceeds ${q2n} bytes`);
        const r = await n.blob();
        if (r.size > q2n) throw new Error(`Icon size ${r.size} exceeds ${q2n} bytes`);
        return new Promise((s, o)=>{
            const a = new FileReader;
            a.onload = ()=>s(a.result), a.onerror = ()=>o(), a.readAsDataURL(r);
        });
    }
    getPreResolvedIconDataUri(e) {
        const t = e.toLowerCase(), n = this.pluginIconDataUris.get(t);
        if (n) return n;
        const i = this.getServerLookup(), r = i.byIdentifier.get(t);
        if (r) return this.getPreResolvedIconDataUriForServer(r);
        const s = i.byName.get(t);
        return s ? this.getPreResolvedIconDataUriForServer(s) : this.cursorOwnedIconDataUris.get(t) ?? this.getPreResolvedRegistryIconByName(t);
    }
    getPreResolvedIconDataUriForServer(e) {
        const t = e.identifier.toLowerCase(), n = this.pluginIconDataUris.get(t) ?? this.cursorOwnedIconDataUris.get(t);
        if (n || !this.knownServersCatalog) return n;
        const i = this.findKnownServerCached(this.knownServersCatalog, e);
        return i ? this.registryIconDataUris.get(i) : void 0;
    }
    getServerDescription(e) {
        const t = e.pluginManaged === !0 && (e.pluginId !== void 0 || e.pluginName !== void 0);
        return this.lookupServerDescription(e.name, t ? {
            name: e.pluginName ?? "",
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId
        } : void 0, e);
    }
    getServerDescriptionByName(e, t, n) {
        return this.lookupServerDescription(e, t !== void 0 ? {
            name: "",
            pluginId: t
        } : void 0, {
            name: e,
            url: n
        });
    }
    getServerDisplayName(e) {
        const t = e.pluginManaged === !0 && (e.pluginId !== void 0 || e.pluginName !== void 0);
        return this.lookupServerDisplayName(e.name, t ? {
            name: e.pluginName ?? "",
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId
        } : void 0, e);
    }
    getServerDisplayNameByName(e, t, n) {
        return this.lookupServerDisplayName(e, t !== void 0 ? {
            name: "",
            pluginId: t
        } : void 0, {
            name: e,
            url: n
        });
    }
    lookupServerDisplayName(e, t, n) {
        const i = this.knownServersCatalog ? this.findKnownServerCached(this.knownServersCatalog, n)?.name?.trim() : void 0;
        return rPv({
            rawName: e,
            knownServerName: i,
            plugin: this.findPluginDisplayNameInput(t)
        });
    }
    lookupServerDescription(e, t, n) {
        if (t !== void 0) {
            const r = this.findPluginLogoCandidatesCached(this.pluginsProviderService.pluginsCache.get(), t);
            for (const s of r){
                const o = s.mcpServers?.find((a)=>a.name === e)?.description?.trim();
                if (o) return o;
            }
        }
        const i = this.knownServersCatalog ? this.findKnownServerCached(this.knownServersCatalog, n)?.description?.trim() : void 0;
        return i || void 0;
    }
    findPluginDisplayNameInput(e) {
        if (e === void 0) return;
        const t = this.findPluginLogoCandidatesCached(this.pluginsProviderService.pluginsCache.get(), e);
        for (const n of t){
            const i = n.displayName?.trim();
            if (i) return {
                displayName: i,
                mcpServerNames: (n.mcpServers ?? []).map((r)=>r.name)
            };
        }
    }
    findKnownServerByUrlCached(e, t) {
        let n = this.knownServerByUrl.get(e);
        n || (n = new Map, this.knownServerByUrl.set(e, n));
        let i = n.get(t);
        return i === void 0 && (i = VJd(e, t) ?? null, n.set(t, i)), i ?? void 0;
    }
    findKnownServerCached(e, t) {
        return t.url ? this.findKnownServerByUrlCached(e, t.url) : ePv(e, t);
    }
    findPluginLogoCandidatesCached(e, t) {
        if (!e) return [];
        let n = this.pluginLogoCandidatesByLookup.get(e);
        n || (n = new Map, this.pluginLogoCandidatesByLookup.set(e, n));
        const i = JSON.stringify([
            t.pluginId ?? null,
            t.marketplaceId ?? null,
            t.name
        ]);
        let r = n.get(i);
        return r === void 0 && (r = XMv(e, t), n.set(i, r)), r;
    }
    getPreResolvedRegistryIconByName(e) {
        const t = this.knownServersCatalog?.byName.get(e);
        return t ? this.registryIconDataUris.get(t) : void 0;
    }
    getMcpService() {
        if (!this._mcpService) try {
            this._mcpService = this.instantiationService.invokeFunction((e)=>e.get(P1));
        } catch  {
            return;
        }
        return this._mcpService;
    }
    getFaviconFallbackUrl(e) {
        const t = typeof e == "string" ? this.findServerByIdentity(e) : e;
        if (!t || t.type !== "streamableHttp" || !t.url || t.url.startsWith("mcp-provider://")) return;
        if (this.faviconFallbackByUrl.has(t.url)) return this.faviconFallbackByUrl.get(t.url);
        const n = Oet.computeFaviconFallbackUrl(t.url);
        return this.faviconFallbackByUrl.set(t.url, n), n;
    }
    static computeFaviconFallbackUrl(e) {
        try {
            const n = sgo(new URL(e).hostname.toLowerCase());
            if (n && eeh.some((i)=>n === i || n.endsWith(`.${i}`))) return;
        } catch  {
            return;
        }
        const t = TJd(e);
        if (t) return t;
    }
    getServerLookup() {
        const e = this.getMcpService()?.allServers() ?? [];
        let t = this.serverLookupByList.get(e);
        if (!t) {
            const n = new Map, i = new Map;
            for (const r of e){
                const s = r.identifier.toLowerCase();
                n.has(s) || n.set(s, r);
                const o = r.name.toLowerCase();
                i.set(o, i.has(o) ? null : r);
            }
            t = {
                byIdentifier: n,
                byName: i
            }, this.serverLookupByList.set(e, t);
        }
        return t;
    }
    findServerByIdentity(e) {
        const t = e.toLowerCase(), n = this.getServerLookup().byIdentifier.get(t);
        if (n) return n;
        const i = (this.getMcpService()?.allServers() ?? []).map((r)=>({
                name: r.name,
                pluginId: r.pluginManaged === !0 ? r.pluginId?.trim() || r.identifier : void 0,
                isTeamServer: r.dashboardManaged === !0,
                server: r
            }));
        return wqc(i, e)?.server;
    }
    getServerIcon(e) {
        const t = this.findServerByIdentity(e);
        if (t) return this.getPreResolvedIconDataUriForServer(t) ?? this.getFaviconFallbackUrl(t);
        const n = yqc(e.trim())?.baseName ?? e;
        if (!(this.getMcpService()?.allServers() ?? []).some((r)=>r.name.toLowerCase() === n.toLowerCase())) return this.getPreResolvedIconDataUri(n);
    }
    async fetchKnownServersCatalog() {
        return this.knownServersCatalog ? this.knownServersCatalog : (this.knownServersFetchPromise || (this.knownServersFetchPromise = (async ()=>{
            try {
                const t = await (await this.mcpRegistryBackendClient.get()).getKnownServers({}), n = JMv(t.servers);
                return this.knownServersCatalog = n, this._onDidResolveIcons.fire(), this.preResolveKnownServerIcons(n), n;
            } catch (e) {
                throw this.knownServersFetchPromise = void 0, e;
            }
        })()), this.knownServersFetchPromise);
    }
    async findMatchingMCPServer(e) {
        return this.findKnownServerByUrlCached(await this.fetchKnownServersCatalog(), e);
    }
    async checkUrlAndSuggestInstallation(e, t) {
        try {
            const n = await this.findMatchingMCPServer(e);
            if (!n) return;
            this.analyticsService.trackEvent("mcp.discovery.found", {
                serverName: n.name
            }), this.mcpInstallationService.showMCPNotification(e, n, t);
        } catch  {}
    }
    async getPlaywrightServer() {
        try {
            return new VXs({
                name: Ykt,
                description: "Let Cursor see logs and view your app with Playwright MCP",
                icon: "vs/workbench/services/ai/browser/media/playwright.svg",
                endpoint: "",
                isFeatured: !1
            });
        } catch  {
            return;
        }
    }
}, Oet = ie([
    C(0, V2n),
    C(1, ca),
    C(2, _t),
    C(3, EN),
    C(4, Xh)
], Oet), mn(S1e, Oet, 1);

}
