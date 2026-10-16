import { Gt, Qe, st, tt } from "./Iwo.js";
import { End, Sid, bn, jn, wnd } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { cb, sC } from "./backendClient.js";
import { Rn } from "./extensions.js";
import { L8m } from "./favicon.js";
import { Cq1, D8m, GYa, J8m, Sqt, WYa, bq1, fq1, yq1 } from "./gYa.js";
import { nl } from "./index.ts";
import { It, dn } from "./instantiation.js";
import { CCe, R4m, uqt, zVa } from "./mcpConstants.js";
import { QYa } from "./mcpDisplayName.js";
import { L0i, QJr } from "./mcpInstallationService.js";
import { Sq1 } from "./mcpKnownServerCatalog.js";
import { N0, y2 } from "./mcpServiceTypes.js";
import { U8m, VYa } from "./mcp_connectweb.js";
import { Qzr, zFa } from "./mcp_pb_2.js";
import { Ki, em } from "./network.js";
import { vq1 } from "./pluginLogoLookup.js";
import { IA, VI } from "./pluginsProviderService.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var c7m, F0i, Obe, $Ct;
export { $Ct, F0i, Obe, c7m };
var __wakaru_ACe_initialized = false;
export function ACe() {
if (__wakaru_ACe_initialized) return;
__wakaru_ACe_initialized = true;
"use strict";
E(), nl(), It(), Rn(), Gt(), Qe(), Ki(), L8m(), QJr(), Ss(), sC(), U8m(), Qzr(), CCe(), IA(), vq1(), y2(), Cm(), Sqt(), Sq1(), QYa(), c7m = [
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
], F0i = 512 * 1024, Obe = jn("mcpWellKnownDetectionService"), $Ct = class extends st {
    constructor(t, e, n, i, r){
        super(), this.mcpInstallationService = t, this.analyticsService = e, this.instantiationService = n, this.pluginsProviderService = i, this.cursorOwnedIconDataUris = new Map, this.registryIconDataUris = new Map, this.pluginIconDataUris = new Map, this.knownServerByUrl = new WeakMap, this.faviconFallbackByUrl = new Map, this.pluginLogoCandidatesByLookup = new WeakMap, this.serverLookupByList = new WeakMap, this.nextIconRequest = 0, this.latestAppliedPluginIconRequests = new Map, this.attemptedPluginIconSources = new Map, this._onDidResolveIcons = this._register(new tt), this.onDidResolveIcons = this._onDidResolveIcons.event, this._log = GYa(r, "well_known_detection"), this.onDidPluginIconSourcesChange = this.pluginsProviderService.onDidPluginsCacheChange, this.mcpRegistryBackendClient = this._register(this.instantiationService.createInstance(cb, {
            service: VYa
        })), this.preResolveCursorOwnedIcons(), this.preResolveWellKnownIcons();
    }
    preResolveCursorOwnedIcons() {
        $Ct.resolveIconToDataUri(R4m).then((t)=>{
            for (const e of zVa)this.cursorOwnedIconDataUris.set(e.toLowerCase(), t);
            this._onDidResolveIcons.fire();
        }).catch((t)=>{
            this._log("debug", "[MCPWellKnownDetection] Failed to pre-resolve Cursor-owned server icon:", t);
        });
    }
    preResolveWellKnownIcons() {
        this.fetchKnownServersCatalog().catch((t)=>{
            this._log("debug", "[MCPWellKnownDetection] Failed to fetch known servers for icon pre-resolution:", t);
        });
    }
    preResolveKnownServerIcons(t) {
        let e = !1;
        Promise.allSettled(t.entries.map(async ({ info: n })=>{
            if (n.icon) try {
                const i = await $Ct.resolveIconToDataUri(n.icon);
                this.registryIconDataUris.has(n) || (this.registryIconDataUris.set(n, i), e = !0);
            } catch (i) {
                this._log("debug", `[MCPWellKnownDetection] Failed to pre-resolve icon for server "${n.name}":`, i);
            }
        })).then(()=>{
            e && this._onDidResolveIcons.fire();
        });
    }
    async resolveFirstIcon(t, e) {
        for (const n of e)try {
            return await $Ct.resolveIconToDataUri(n);
        } catch (i) {
            this._log("debug", `[MCPWellKnownDetection] Failed icon candidate for server "${t.identifier}":`, i, {
                identifier: t.identifier
            });
        }
    }
    preResolveServerIcons(t) {
        Promise.all(t.map(async (e)=>{
            const n = e.identifier.toLowerCase();
            if (zVa.has(n)) return !1;
            let i = !1;
            const r = this.getPluginLogoUrls(e), s = r.join(`
`);
            if (r.length > 0 && this.attemptedPluginIconSources.get(n) !== s) {
                this.attemptedPluginIconSources.set(n, s);
                const a = ++this.nextIconRequest, l = await this.resolveFirstIcon(e, r), c = this.latestAppliedPluginIconRequests.get(n) ?? 0;
                a > c && (this.latestAppliedPluginIconRequests.set(n, a), l ? (this.pluginIconDataUris.set(n, l), i = !0) : this.pluginIconDataUris.delete(n) && (i = !0));
            }
            if (this.pluginIconDataUris.has(n)) return i;
            const o = await this.preResolveRegistryIcon(e);
            return i || o;
        })).then((e)=>{
            e.some(Boolean) && this._onDidResolveIcons.fire();
        }).catch((e)=>{
            this._log("debug", "[MCPWellKnownDetection] Failed to pre-resolve server icons:", e);
        });
    }
    async preResolveRegistryIcon(t) {
        let e;
        try {
            e = await this.fetchKnownServersCatalog();
        } catch  {
            return !1;
        }
        const n = this.findKnownServerCached(e, t);
        if (!n?.icon || this.registryIconDataUris.has(n)) return !1;
        const i = await this.resolveFirstIcon(t, [
            n.icon
        ]);
        return !i || this.registryIconDataUris.has(n) ? !1 : (this.registryIconDataUris.set(n, i), !0);
    }
    getPluginLogoUrls(t) {
        const e = this.pluginsProviderService.pluginsCache.get();
        if (!e || !t.pluginManaged || !t.pluginName) return [];
        const n = {
            name: t.pluginName,
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId
        };
        return Sid(this.findPluginLogoCandidatesCached(e, n));
    }
    static async resolveIconToDataUri(t) {
        if (t.startsWith("data:")) return t;
        let e = t;
        t.startsWith("vs/") && (e = em.asBrowserUri(t).toString(!0));
        const n = await fetch(e);
        if (!n.ok) throw new Error(`Icon request failed with HTTP ${n.status}`);
        const i = Number(n.headers.get("content-length"));
        if (i > F0i) throw new Error(`Icon Content-Length ${i} exceeds ${F0i} bytes`);
        const r = await n.blob();
        if (r.size > F0i) throw new Error(`Icon size ${r.size} exceeds ${F0i} bytes`);
        return new Promise((s, o)=>{
            const a = new FileReader;
            a.onload = ()=>s(a.result), a.onerror = ()=>o(), a.readAsDataURL(r);
        });
    }
    getPreResolvedIconDataUri(t) {
        const e = t.toLowerCase(), n = this.pluginIconDataUris.get(e);
        if (n) return n;
        const i = this.getServerLookup(), r = i.byIdentifier.get(e);
        if (r) return this.getPreResolvedIconDataUriForServer(r);
        const s = i.byName.get(e);
        return s ? this.getPreResolvedIconDataUriForServer(s) : this.cursorOwnedIconDataUris.get(e) ?? this.getPreResolvedRegistryIconByName(e);
    }
    getPreResolvedIconDataUriForServer(t) {
        const e = t.identifier.toLowerCase(), n = this.pluginIconDataUris.get(e) ?? this.cursorOwnedIconDataUris.get(e);
        if (n || !this.knownServersCatalog) return n;
        const i = this.findKnownServerCached(this.knownServersCatalog, t);
        return i ? this.registryIconDataUris.get(i) : void 0;
    }
    getServerDescription(t) {
        const e = t.pluginManaged === !0 && (t.pluginId !== void 0 || t.pluginName !== void 0);
        return this.lookupServerDescription(t.name, e ? {
            name: t.pluginName ?? "",
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId
        } : void 0, t);
    }
    getServerDescriptionByName(t, e, n) {
        return this.lookupServerDescription(t, e !== void 0 ? {
            name: "",
            pluginId: e
        } : void 0, {
            name: t,
            url: n
        });
    }
    getServerDisplayName(t) {
        const e = t.pluginManaged === !0 && (t.pluginId !== void 0 || t.pluginName !== void 0);
        return this.lookupServerDisplayName(t.name, e ? {
            name: t.pluginName ?? "",
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId
        } : void 0, t);
    }
    getServerDisplayNameByName(t, e, n) {
        return this.lookupServerDisplayName(t, e !== void 0 ? {
            name: "",
            pluginId: e
        } : void 0, {
            name: t,
            url: n
        });
    }
    lookupServerDisplayName(t, e, n) {
        const i = this.knownServersCatalog ? this.findKnownServerCached(this.knownServersCatalog, n)?.name?.trim() : void 0;
        return Cq1({
            rawName: t,
            knownServerName: i,
            plugin: this.findPluginDisplayNameInput(e)
        });
    }
    lookupServerDescription(t, e, n) {
        if (e !== void 0) {
            const r = this.findPluginLogoCandidatesCached(this.pluginsProviderService.pluginsCache.get(), e);
            for (const s of r){
                const o = s.mcpServers?.find((a)=>a.name === t)?.description?.trim();
                if (o) return o;
            }
        }
        const i = this.knownServersCatalog ? this.findKnownServerCached(this.knownServersCatalog, n)?.description?.trim() : void 0;
        return i || void 0;
    }
    findPluginDisplayNameInput(t) {
        if (t === void 0) return;
        const e = this.findPluginLogoCandidatesCached(this.pluginsProviderService.pluginsCache.get(), t);
        for (const n of e){
            const i = n.displayName?.trim();
            if (i) return {
                displayName: i,
                mcpServerNames: (n.mcpServers ?? []).map((r)=>r.name)
            };
        }
    }
    findKnownServerByUrlCached(t, e) {
        let n = this.knownServerByUrl.get(t);
        n || (n = new Map, this.knownServerByUrl.set(t, n));
        let i = n.get(e);
        return i === void 0 && (i = J8m(t, e) ?? null, n.set(e, i)), i ?? void 0;
    }
    findKnownServerCached(t, e) {
        return e.url ? this.findKnownServerByUrlCached(t, e.url) : yq1(t, e);
    }
    findPluginLogoCandidatesCached(t, e) {
        if (!t) return [];
        let n = this.pluginLogoCandidatesByLookup.get(t);
        n || (n = new Map, this.pluginLogoCandidatesByLookup.set(t, n));
        const i = JSON.stringify([
            e.pluginId ?? null,
            e.marketplaceId ?? null,
            e.name
        ]);
        let r = n.get(i);
        return r === void 0 && (r = fq1(t, e), n.set(i, r)), r;
    }
    getPreResolvedRegistryIconByName(t) {
        const e = this.knownServersCatalog?.byName.get(t);
        return e ? this.registryIconDataUris.get(e) : void 0;
    }
    getMcpService() {
        if (!this._mcpService) try {
            this._mcpService = this.instantiationService.invokeFunction((t)=>t.get(N0));
        } catch  {
            return;
        }
        return this._mcpService;
    }
    getFaviconFallbackUrl(t) {
        const e = typeof t == "string" ? this.findServerByIdentity(t) : t;
        if (!e || e.type !== "streamableHttp" || !e.url || e.url.startsWith("mcp-provider://")) return;
        if (this.faviconFallbackByUrl.has(e.url)) return this.faviconFallbackByUrl.get(e.url);
        const n = $Ct.computeFaviconFallbackUrl(e.url);
        return this.faviconFallbackByUrl.set(e.url, n), n;
    }
    static computeFaviconFallbackUrl(t) {
        try {
            const n = WYa(new URL(t).hostname.toLowerCase());
            if (n && c7m.some((i)=>n === i || n.endsWith(`.${i}`))) return;
        } catch  {
            return;
        }
        const e = D8m(t);
        if (e) return e;
    }
    getServerLookup() {
        const t = this.getMcpService()?.allServers() ?? [];
        let e = this.serverLookupByList.get(t);
        if (!e) {
            const n = new Map, i = new Map;
            for (const r of t){
                const s = r.identifier.toLowerCase();
                n.has(s) || n.set(s, r);
                const o = r.name.toLowerCase();
                i.set(o, i.has(o) ? null : r);
            }
            e = {
                byIdentifier: n,
                byName: i
            }, this.serverLookupByList.set(t, e);
        }
        return e;
    }
    findServerByIdentity(t) {
        const e = t.toLowerCase(), n = this.getServerLookup().byIdentifier.get(e);
        if (n) return n;
        const i = (this.getMcpService()?.allServers() ?? []).map((r)=>({
                name: r.name,
                pluginId: r.pluginManaged === !0 ? r.pluginId?.trim() || r.identifier : void 0,
                isTeamServer: r.dashboardManaged === !0,
                server: r
            }));
        return End(i, t)?.server;
    }
    getServerIcon(t) {
        const e = this.findServerByIdentity(t);
        if (e) return this.getPreResolvedIconDataUriForServer(e) ?? this.getFaviconFallbackUrl(e);
        const n = wnd(t.trim())?.baseName ?? t;
        if (!(this.getMcpService()?.allServers() ?? []).some((r)=>r.name.toLowerCase() === n.toLowerCase())) return this.getPreResolvedIconDataUri(n);
    }
    async fetchKnownServersCatalog() {
        return this.knownServersCatalog ? this.knownServersCatalog : (this.knownServersFetchPromise || (this.knownServersFetchPromise = (async ()=>{
            try {
                const e = await (await this.mcpRegistryBackendClient.get()).getKnownServers({}), n = bq1(e.servers);
                return this.knownServersCatalog = n, this._onDidResolveIcons.fire(), this.preResolveKnownServerIcons(n), n;
            } catch (t) {
                throw this.knownServersFetchPromise = void 0, t;
            }
        })()), this.knownServersFetchPromise);
    }
    async findMatchingMCPServer(t) {
        return this.findKnownServerByUrlCached(await this.fetchKnownServersCatalog(), t);
    }
    async checkUrlAndSuggestInstallation(t, e) {
        try {
            const n = await this.findMatchingMCPServer(t);
            if (!n) return;
            this.analyticsService.trackEvent("mcp.discovery.found", {
                serverName: n.name
            }), this.mcpInstallationService.showMCPNotification(t, n, e);
        } catch  {}
    }
    async getPlaywrightServer() {
        try {
            return new zFa({
                name: uqt,
                description: "Let Cursor see logs and view your app with Playwright MCP",
                icon: "vs/workbench/services/ai/browser/media/playwright.svg",
                endpoint: "",
                isFeatured: !1
            });
        } catch  {
            return;
        }
    }
}, $Ct = Re([
    F(0, L0i),
    F(1, Qr),
    F(2, dn),
    F(3, VI),
    F(4, wh)
], $Ct), bn(Obe, $Ct, 1);

}
