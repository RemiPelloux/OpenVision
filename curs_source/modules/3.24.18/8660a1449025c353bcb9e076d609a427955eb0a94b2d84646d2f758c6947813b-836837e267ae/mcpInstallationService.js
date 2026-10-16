import { Ga, Gt, Qe, Tr, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { FT, L0t, Vst, cqe } from "./composerNotificationService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { GYa, Sqt } from "./gYa.js";
import { It } from "./instantiation.js";
import { CCe, uqt } from "./mcpConstants.js";
import { N0, y2 } from "./mcpServiceTypes.js";
import { lFa } from "./solidExports.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { bX, iV } from "./workbenchCommandRegistry.js";
import { Wt } from "./ze.js";
var B8m, L0i, kqt;
export { B8m, L0i, kqt };
var __wakaru_QJr_initialized = false;
export function QJr() {
if (__wakaru_QJr_initialized) return;
__wakaru_QJr_initialized = true;
"use strict";
E(), Ga(), Gt(), Qe(), ms(), Rn(), It(), Vp(), Ss(), y2(), lFa(), CCe(), Vst(), Zi(), Cm(), Sqt(), bX(), Pl(), B8m = !1, L0i = jn("mcpInstallationService"), kqt = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        if (super(), this.mcpService = t, this.fileService = e, this.uriIdentityService = n, this.analyticsService = i, this.composerNotificationService = r, this.composerDataService = s, this.storageService = o, this.workbenchCommandRegistry = a, this._onDidChangeProposedServer = this._register(new tt), this.onDidChangeProposedServer = this._onDidChangeProposedServer.event, this._log = GYa(l, "installation"), [this.proposedServer_reactive, this.setProposedServerSignal] = Wt(), [this.mcpSuccessNotification_reactive, this.setMCPSuccessNotification] = Wt(), B8m) {
            const c = {
                name: "Notion",
                description: "Connect your Notion workspace to search, update, and trigger workflows across tools.",
                icon: "https://www.notion.so/images/notion-logo-block-main.svg",
                endpoint: "https://mcp.notion.com/mcp",
                isFeatured: !0
            }, u = this.composerDataService.selectedComposerId;
            u && this.composerNotificationService.showNotification({
                type: FT.MCP,
                composerId: u,
                url: "https://www.notion.so/cursorai/Ryo-s-Journal-161da74ef045007ac1bf36660e08e4a4",
                mcpInfo: c
            });
        }
        this._register(this.workbenchCommandRegistry.registerCommand({
            id: "mcp.deeplinkInstall",
            handler: (c, u, d)=>{
                this.setProposedServer({
                    name: u,
                    server: d
                });
            }
        }));
    }
    setProposedServer(t) {
        this.setProposedServerSignal(t), this._onDidChangeProposedServer.fire(t);
    }
    getProposedServer() {
        return this.proposedServer_reactive();
    }
    async installProposedServer() {
        const t = this.proposedServer_reactive();
        if (!t) {
            this._log("error", "[MCPInstallationService] No server to install");
            return;
        }
        const e = await this.mcpService.getUserConfigFilePath();
        let n = {
            mcpServers: {}
        };
        try {
            if (await this.fileService.exists(e)) {
                const r = await this.fileService.readFile(e), s = JSON.parse(r.value.toString());
                s && typeof s.mcpServers == "object" && s.mcpServers !== null && !Array.isArray(s.mcpServers) && (n = s);
            } else {
                const r = this.uriIdentityService.extUri.dirname(e);
                await this.fileService.exists(r) || await this.fileService.createFolder(r);
            }
        } catch (i) {
            this._log("error", "[MCPInstallationService] Error reading config file", i);
        }
        n.mcpServers[t.name] = t.server;
        try {
            const i = JSON.stringify(n, null, 2);
            await this.fileService.writeFile(e, Tr.fromString(i)), this.clearInstallation();
            const r = t.server.command;
            let s = "";
            r && r.startsWith("npx") ? s = r.split(" ").slice(0, 3).join(" ") : r && r.startsWith("uvx") && (s = r.split(" ").slice(0, 2).join(" ")), this.analyticsService.trackEvent("mcp.installed", {
                name: t.name,
                url: t.server.url,
                command: s,
                deeplink: !0
            });
        } catch (i) {
            this._log("error", `[MCPInstallationService] Error writing to config file ${e.toString()}`, i);
        }
    }
    clearInstallation() {
        this.setProposedServer(void 0);
    }
    updateProposedServer(t) {
        this.setProposedServer(t);
    }
    showMCPNotification(t, e, n) {
        if (this.isMCPServerDismissed(e.name)) return;
        try {
            if (e.name === uqt) {
                const r = uqt.toLowerCase();
                if (this.mcpService.allServers().some((o)=>o.command === "npx" && Array.isArray(o.args) && o.args.length >= 2 && o.args[0] === "-y" && (o.args[1] === "@playwright/mcp@latest" || o.args[1]?.startsWith("@playwright/mcp")) || o.name?.toLowerCase().includes(r))) return;
            } else {
                const r = e.endpoint;
                if (r) try {
                    const s = new URL(r), o = this.mcpService.allServers(), a = this.mcpService.statusCache(), l = o.find((c)=>{
                        if (!c.url) return !1;
                        try {
                            const u = new URL(c.url);
                            return u.href === s.href || u.origin === s.origin;
                        } catch  {
                            return c.url === r;
                        }
                    });
                    if (l && a[l.identifier]?.type !== "needsAuth") return;
                } catch  {}
            }
        } catch  {}
        const i = n ?? this.composerDataService.selectedComposerId;
        i && this.composerNotificationService.showNotification({
            type: FT.MCP,
            composerId: i,
            url: t,
            mcpInfo: e,
            priority: cqe.ACTION
        });
    }
    clearMCPNotification() {
        this.composerNotificationService.clearNotification(FT.MCP);
    }
    getButtonLabelForMCPServer(t) {
        return t.name === uqt ? "Enable" : this.findMCPServerAuthUrl(t) ? "Connect" : "Add";
    }
    findMCPServerAuthUrl(t) {
        const e = t.endpoint;
        if (e) try {
            const n = new URL(e), i = this.mcpService.allServers(), r = this.mcpService.statusCache();
            for (const s of i)if (s.url) try {
                const o = new URL(s.url);
                if (o.href === n.href || o.origin === n.origin) {
                    const l = r[s.identifier];
                    if (l && l.type === "needsAuth" && l.authorizationUrl) return l.authorizationUrl;
                }
            } catch  {
                if (s.url === e) {
                    const o = r[s.identifier];
                    if (o && o.type === "needsAuth" && o.authorizationUrl) return o.authorizationUrl;
                }
            }
        } catch  {}
    }
    showMCPSuccessNotification(t) {
        this.setMCPSuccessNotification({
            serverName: t,
            message: "Done. Cursor can now see logs and view your browser."
        });
    }
    clearMCPSuccessNotification() {
        this.setMCPSuccessNotification(void 0);
    }
    getDismissedServers() {
        const t = this.storageService.get(kqt.DISMISSED_SERVERS_KEY, 0, "[]");
        try {
            const e = JSON.parse(t);
            return Array.isArray(e) ? e.filter((n)=>typeof n == "string") : [];
        } catch  {
            return [];
        }
    }
    dismissMCPServer(t) {
        const e = this.getDismissedServers();
        e.includes(t) || (e.push(t), this.storageService.store(kqt.DISMISSED_SERVERS_KEY, JSON.stringify(e), 0, 1));
    }
    isMCPServerDismissed(t) {
        return this.getDismissedServers().includes(t);
    }
}, kqt.DISMISSED_SERVERS_KEY = "mcp.dismissedServers", kqt = Re([
    F(0, N0),
    F(1, is),
    F(2, nh),
    F(3, Qr),
    F(4, L0t),
    F(5, no),
    F(6, ki),
    F(7, iV),
    F(8, wh)
], kqt), bn(L0i, kqt, 1);

}
