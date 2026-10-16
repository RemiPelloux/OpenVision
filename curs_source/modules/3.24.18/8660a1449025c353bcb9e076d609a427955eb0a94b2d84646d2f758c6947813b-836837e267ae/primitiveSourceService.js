import { BMw, DBl, EUf, FMw, Gws, IUf, LMw, MBl, OBe, OMw, PMw, TUf, qws, xUf } from "./BA.js";
import { Ga, Gt, Qe, Tr, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Wgr } from "./agent-store-commands.ts";
import { Wqm } from "./builtInCursorRules.js";
import { nr, rs } from "./commands.js";
import { DJ, uG } from "./cursorCommands.js";
import { a0, qbe, xA } from "./cursorRules.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { Gqm, Snk, jqm, wnk, ynk, yts } from "./gYa.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { N0, y2 } from "./mcpServiceTypes.js";
import { Ku, Ul } from "./path_2.js";
import { IA, VI } from "./pluginsProviderService.js";
import { Zi, ki } from "./storage_2.js";
import { jPe, yze } from "./subagentsService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { kPe } from "./yBp.js";
var AKe, zws, NBl, AUf, nNn, RUf, Vws;
export { AKe, AUf, NBl, RUf, Vws, nNn, zws };
var __wakaru_lZt_initialized = false;
export function lZt() {
if (__wakaru_lZt_initialized) return;
__wakaru_lZt_initialized = true;
"use strict";
E(), nl(), Ga(), Gt(), Qe(), Ul(), fn(), rs(), ms(), Rn(), It(), Ji(), Zi(), Sr(), y2(), yze(), DJ(), IA(), Wqm(), a0(), Wo(), fo(), AKe = jn("primitiveSourceService"), zws = {
    skill: "workbench.customize.primitiveSourceSnapshot.skills.v3",
    rule: "workbench.customize.primitiveSourceSnapshot.rules.v3",
    mcp: "workbench.customize.primitiveSourceSnapshot.mcps.v3",
    subagent: "workbench.customize.primitiveSourceSnapshot.subagents.v3",
    command: "workbench.customize.primitiveSourceSnapshot.commands.v3"
}, NBl = 1, AUf = [
    "skill",
    "mcp",
    "subagent",
    "command"
], nNn = [
    "skill",
    "rule",
    "mcp",
    "subagent",
    "command"
], RUf = new Map([
    [
        "Skills",
        "skill"
    ],
    [
        "MCPs",
        "mcp"
    ],
    [
        "Subagents",
        "subagent"
    ],
    [
        "Commands",
        "command"
    ]
]), Vws = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this.cursorRulesService = t, this.subagentsService = e, this.cursorCommandsService = n, this.mcpService = i, this.pluginsProviderService = r, this.editorService = s, this.commandService = o, this.workbenchEnvironmentService = a, this.workspaceContextService = l, this.fileService = c, this.storageService = u, this.logService = d, this._onDidChangeSkillDescriptors = this._register(new tt), this.onDidChangeSkillDescriptors = this._onDidChangeSkillDescriptors.event, this._onDidChangeRuleDescriptors = this._register(new tt), this.onDidChangeRuleDescriptors = this._onDidChangeRuleDescriptors.event, this._onDidChangeMcpDescriptors = this._register(new tt), this.onDidChangeMcpDescriptors = this._onDidChangeMcpDescriptors.event, this._onDidChangeSubagentDescriptors = this._register(new tt), this.onDidChangeSubagentDescriptors = this._onDidChangeSubagentDescriptors.event, this._onDidChangeCommandDescriptors = this._register(new tt), this.onDidChangeCommandDescriptors = this._onDidChangeCommandDescriptors.event, this.baseDescriptorsByKind = qws(), this.pluginDescriptorsByKind = qws(), this.descriptorsByKind = qws(), this.hasLoadedInitialKind = xUf(), this.hasHydratedSnapshotKind = xUf(), this.initialLoadPromiseByKind = OMw(), this.generationByKind = FMw(), this.pendingDeletionFilePathsByKind = BMw(), this.inFlightAuthorshipByDescriptorKey = new Set, this.authorshipCacheGeneration = 0, this.hydrateFromStorage(), this.cursorRulesService.refreshTeamRules(), this._register(this.cursorRulesService.onDidChangeRules(()=>{
            this.startRefreshKind("skill"), this.startRefreshKind("rule");
        })), this._register(this.subagentsService.onDidSubagentsChange(()=>this.startRefreshKind("subagent"))), this._register(this.cursorCommandsService.onDidChangeCommands(()=>this.startRefreshKind("command"))), this._register(this.mcpService.onSettingsChanged(()=>this.startRefreshKind("mcp"))), this._register(this.mcpService.onDidInitialize(()=>this.startRefreshKind("mcp"))), this._register(this.pluginsProviderService.onDidPluginsCacheChange(()=>this.refreshPluginComponentDescriptors())), this._register(this.pluginsProviderService.onDidPluginsChange(()=>{
            this.refreshPluginDataIfNeeded(), this.refreshPluginComponentDescriptors();
        })), this._register(this.pluginsProviderService.onDidPluginsChangeWithoutRefetch(()=>{
            this.refreshPluginDataIfNeeded(), this.refreshPluginComponentDescriptors();
        }));
        for (const h of nNn)this.startRefreshKind(h);
        this.refreshPluginComponentDescriptors();
    }
    async getSkillDescriptors() {
        return this.getDescriptorsForKind("skill");
    }
    async getRuleDescriptors() {
        return this.getDescriptorsForKind("rule");
    }
    async getMcpDescriptors() {
        return this.getDescriptorsForKind("mcp");
    }
    async getSubagentDescriptors() {
        return this.getDescriptorsForKind("subagent");
    }
    async getCommandDescriptors() {
        return this.getDescriptorsForKind("command");
    }
    async openPrimitiveDescriptor(t, e) {
        this.findDescriptor(t, e) || await this.startRefreshKind(e);
        const i = this.findDescriptor(t, e);
        if (!i || i.filePath === "") return;
        const r = this.createUriFromFullPath(i.filePath);
        e === "mcp" && !await this.fileService.exists(r) && await this.fileService.writeFile(r, Tr.fromString(JSON.stringify({
            mcpServers: {}
        }, null, 2))), await this.openUri(r);
    }
    async deletePrimitiveDescriptor(t, e) {
        const n = this.findDescriptor(t, e);
        if (!n || n.deletable !== !0 || n.filePath === "" || e === "mcp") return;
        const i = OBe(n.filePath);
        this.pendingDeletionFilePathsByKind[e].add(i), this.optimisticallyRemoveDescriptor(t, e, n.filePath);
        try {
            switch(e){
                case "skill":
                case "rule":
                    {
                        const r = n.aliases?.[0], s = (r ? this.cursorRulesService.getRuleUriByFilename(r) : void 0) ?? this.createUriFromFullPath(n.filePath);
                        await this.fileService.del(s), await this.cursorRulesService.refresh();
                        return;
                    }
                case "subagent":
                    {
                        const r = this.createUriFromFullPath(n.filePath);
                        await this.fileService.del(r), await this.subagentsService.reload();
                        return;
                    }
                case "command":
                    {
                        const r = this.createUriFromFullPath(n.filePath);
                        await this.fileService.del(r), await this.cursorCommandsService.refresh();
                        return;
                    }
            }
        } catch (r) {
            throw this.logService.error(`[PrimitiveSourceService] Failed to delete ${e} descriptor`, r instanceof Error ? r.message : String(r)), this.pendingDeletionFilePathsByKind[e].delete(i), await this.startRefreshKind(e), r;
        } finally{
            this.pendingDeletionFilePathsByKind[e].delete(i);
        }
    }
    setTeamRulePrimitiveEnabled(t, e) {
        const i = this.findDescriptor(t, "rule")?.aliases?.[0];
        i !== void 0 && (this.cursorRulesService.setTeamRuleEnabled(i, e), this.optimisticallyUpdateTeamRuleEnabled(t, e));
    }
    async resolvePrimitiveDescriptorAuthorship(t) {
        const e = [], n = [], i = new Map;
        for (const s of t){
            const o = this.findDescriptor(s.primitiveId, s.primitiveKind);
            if (!o || o.kind === "rule") continue;
            const a = this.findPluginAuthorshipFields(o);
            if (o.authorship !== void 0 && !this.isStalePluginAuthorship(o, a)) {
                e.push({
                    primitiveId: o.id,
                    primitiveKind: o.kind,
                    authorship: o.authorship
                });
                continue;
            }
            const l = this.authorshipSourceId(o.id, o.kind);
            this.inFlightAuthorshipByDescriptorKey.has(l) || i.has(l) || (i.set(l, {
                primitiveId: o.id,
                primitiveKind: o.kind
            }), n.push({
                sourceId: l,
                filePath: o.filePath,
                ...a
            }));
        }
        if (n.length === 0) return e;
        const r = this.authorshipCacheGeneration;
        for (const s of n)this.inFlightAuthorshipByDescriptorKey.add(s.sourceId);
        try {
            const s = await this.pluginsProviderService.getPrimitiveAuthorship(n);
            if (r !== this.authorshipCacheGeneration) return e;
            const o = new Map(s.map((l)=>[
                    l.sourceId,
                    l.authorship?.label ?? null
                ])), a = new Set;
            for (const l of n){
                const c = i.get(l.sourceId);
                if (!c) continue;
                const u = o.get(l.sourceId) ?? null;
                this.updateDescriptorAuthorship(c.primitiveId, c.primitiveKind, u), a.add(c.primitiveKind), e.push({
                    primitiveId: c.primitiveId,
                    primitiveKind: c.primitiveKind,
                    authorship: u
                });
            }
            for (const l of a)this.persistKind(l), this.fireDidChangeKind(l);
        } catch  {
            if (r !== this.authorshipCacheGeneration) return e;
            const s = new Set;
            for (const o of n){
                const a = i.get(o.sourceId);
                a && (this.updateDescriptorAuthorship(a.primitiveId, a.primitiveKind, null), s.add(a.primitiveKind), e.push({
                    primitiveId: a.primitiveId,
                    primitiveKind: a.primitiveKind,
                    authorship: null
                }));
            }
            for (const o of s)this.persistKind(o), this.fireDidChangeKind(o);
        } finally{
            for (const s of n)this.inFlightAuthorshipByDescriptorKey.delete(s.sourceId);
        }
        return e;
    }
    clearAuthorshipCache() {
        this.authorshipCacheGeneration += 1;
        for (const t of nNn)this.descriptorsByKind[t] = this.descriptorsByKind[t].map(Gws), this.baseDescriptorsByKind[t] = this.baseDescriptorsByKind[t].map(Gws), this.pluginDescriptorsByKind[t] = this.pluginDescriptorsByKind[t].map(Gws), this.persistKind(t), this.fireDidChangeKind(t);
        this.inFlightAuthorshipByDescriptorKey.clear();
    }
    clearAllCaches() {
        this.authorshipCacheGeneration += 1;
        for (const t of nNn)this.storageService.remove(zws[t], 1), this.generationByKind[t] += 1, this.baseDescriptorsByKind[t] = [], this.pluginDescriptorsByKind[t] = [], this.descriptorsByKind[t] = [], this.hasLoadedInitialKind[t] = !1, this.hasHydratedSnapshotKind[t] = !1, this.initialLoadPromiseByKind[t] = void 0;
        this.inFlightAuthorshipByDescriptorKey.clear(), this.pluginDataRefreshInFlight = void 0;
        for (const t of nNn)this.fireDidChangeKind(t), this.startRefreshKind(t);
        this.refreshPluginComponentDescriptors();
    }
    async getDescriptorsForKind(t) {
        if (!this.hasLoadedInitialKind[t]) {
            if (this.hasHydratedSnapshotKind[t]) return this.startRefreshKind(t), [
                ...this.descriptorsByKind[t]
            ];
            await this.startRefreshKind(t);
        }
        return [
            ...this.descriptorsByKind[t]
        ];
    }
    startRefreshKind(t) {
        const e = this.initialLoadPromiseByKind[t];
        if (e !== void 0 && !this.hasLoadedInitialKind[t]) return e;
        const n = this.refreshKind(t).catch(()=>{}).finally(()=>{
            this.initialLoadPromiseByKind[t] === n && (this.initialLoadPromiseByKind[t] = void 0);
        });
        return this.initialLoadPromiseByKind[t] = n, n;
    }
    async refreshKind(t) {
        const e = ++this.generationByKind[t];
        let n;
        switch(t){
            case "skill":
                n = await this.getSkillDescriptorSources();
                break;
            case "rule":
                n = await this.getRuleDescriptorSources();
                break;
            case "mcp":
                n = await this.getMcpDescriptorSources();
                break;
            case "subagent":
                n = await this.getSubagentDescriptorSources();
                break;
            case "command":
                n = await this.getCommandDescriptorSources();
                break;
        }
        e === this.generationByKind[t] && (this.baseDescriptorsByKind[t] = n, this.hasLoadedInitialKind[t] = !0, this.publishKind(t));
    }
    publishKind(t) {
        const e = new Map(this.descriptorsByKind[t].map((c)=>[
                c.id,
                c.authorship
            ])), n = new Set, i = new Set(this.pluginDescriptorsByKind[t].map((c)=>OBe(c.filePath))), r = this.pendingDeletionFilePathsByKind[t], s = this.pluginsProviderService.pluginsCache.get()?.pluginComponentFiles !== void 0, o = t === "skill" && s, l = [
            ...this.baseDescriptorsByKind[t].filter((c)=>{
                const u = OBe(c.filePath);
                return u !== "" && r.has(u) || i.has(u) ? !1 : !(o && ynk(c.filePath));
            }),
            ...this.pluginDescriptorsByKind[t]
        ].map((c)=>{
            const u = this.descriptorBaseId(c);
            let d = u, h = 2;
            for(; n.has(d);)d = `${u}#${h}`, h += 1;
            n.add(d);
            const p = e.get(d), g = e.has(d) && !this.isStalePluginAuthorship({
                ...c,
                id: d,
                authorship: p
            }, this.findPluginAuthorshipFields(c));
            return {
                ...c,
                id: d,
                ...g && {
                    authorship: p
                }
            };
        });
        this.descriptorsByKind[t] = l, s ? this.persistKind(t) : this.refreshPluginDataIfNeeded(), this.fireDidChangeKind(t);
    }
    hydrateFromStorage() {
        for (const t of nNn){
            const e = this.storageService.get(zws[t], 1), n = LMw(e);
            if (n === void 0) continue;
            const i = n.authorshipVersion === NBl ? n.descriptors : n.descriptors.map(Gws);
            this.descriptorsByKind[t] = i, this.pluginDescriptorsByKind[t] = i.filter((r)=>r.scope === "plugin"), this.hasHydratedSnapshotKind[t] = !0;
        }
    }
    persistKind(t) {
        const e = {
            lastWrittenAt: Date.now(),
            authorshipVersion: NBl,
            descriptors: this.descriptorsByKind[t]
        };
        this.storageService.store(zws[t], JSON.stringify(e), 1, 1);
    }
    fireDidChangeKind(t) {
        switch(t){
            case "skill":
                this._onDidChangeSkillDescriptors.fire();
                return;
            case "rule":
                this._onDidChangeRuleDescriptors.fire();
                return;
            case "mcp":
                this._onDidChangeMcpDescriptors.fire();
                return;
            case "subagent":
                this._onDidChangeSubagentDescriptors.fire();
                return;
            case "command":
                this._onDidChangeCommandDescriptors.fire();
                return;
        }
    }
    async getAllRulesForDescriptors(t) {
        const e = this.cursorRulesService.getAllRulesCached();
        return e.length > 0 ? e : this.cursorRulesService.getAllRules(void 0, t);
    }
    mapRuleToDescriptor(t, e) {
        const n = this.isProjectPath(t.fullPath), i = e === "skill" ? yts(t) : Gqm(t.fullPath || t.filename);
        return {
            id: "",
            kind: e,
            name: i,
            description: t.description,
            ...e === "skill" && t.parseError ? {
                parseError: t.parseError
            } : {},
            filePath: t.fullPath,
            aliases: [
                t.filename
            ],
            scope: n ? "project" : "user",
            sourceLabel: n ? "Project" : "User",
            isWorkspaceViewable: n,
            deletable: !wnk(t.fullPath)
        };
    }
    mapTeamRuleToDescriptor(t) {
        return {
            ...this.mapRuleToDescriptor(t, "rule"),
            scope: "team",
            sourceLabel: "Team",
            isWorkspaceViewable: !1,
            deletable: !1,
            teamRuleRequired: t.isRequired === !0,
            teamRuleEnabled: !this.cursorRulesService.isTeamRuleDisabled(t.filename)
        };
    }
    async readAgentStoreSkillsDirs() {
        try {
            return await this.commandService.executeCommand(Wgr) ?? [];
        } catch  {
            return [];
        }
    }
    async getSkillDescriptorSources() {
        const [t, e] = await Promise.all([
            this.getAllRulesForDescriptors({
                awaitTeamRules: !1
            }),
            this.readAgentStoreSkillsDirs()
        ]);
        return t.filter((n)=>EUf(n.fullPath, e)).map((n)=>{
            const i = this.mapRuleToDescriptor(n, "skill");
            return TUf(n.fullPath, e) ? {
                ...i,
                inAgentStore: !0
            } : i;
        });
    }
    async getRuleDescriptorSources() {
        const [t, e] = await Promise.all([
            this.getAllRulesForDescriptors({
                awaitTeamRules: !0
            }),
            this.readAgentStoreSkillsDirs()
        ]), n = t.filter((r)=>!jqm(r.fullPath)).filter((r)=>!qbe(r.fullPath)).filter((r)=>!EUf(r.fullPath, e)).map((r)=>this.mapRuleToDescriptor(r, "rule")), i = this.cursorRulesService.getTeamRules({
            includeDisabled: !0
        }).map((r)=>this.mapTeamRuleToDescriptor(r));
        return [
            ...n,
            ...i
        ];
    }
    async getSubagentDescriptorSources() {
        return (this.subagentsService.peekRawSubagents() ?? await this.subagentsService.getAllSubagents()).map((e)=>{
            const n = PMw(e.fullPath, e.name), i = Ku(MBl(e.fullPath)), r = this.isProjectPath(e.fullPath);
            return {
                id: "",
                kind: "subagent",
                name: n,
                description: e.description,
                filePath: e.fullPath,
                aliases: n === i ? [] : [
                    i
                ],
                scope: r ? "project" : "user",
                sourceLabel: r ? "Project" : "User",
                isWorkspaceViewable: r,
                deletable: e.fullPath !== "" && !Snk(e.fullPath)
            };
        });
    }
    async getCommandDescriptorSources() {
        const t = await this.cursorCommandsService.getCommands(), e = [];
        for (const n of t){
            const i = this.cursorCommandsService.getCommandMetadata(n.filename), r = i?.source === "team";
            let s;
            if (r) s = "";
            else {
                if (!this.cursorCommandsService.hasCommandUri(n.filename)) continue;
                const h = this.cursorCommandsService.getCommandSourceUri(n.filename);
                if (h?.fsPath === void 0) continue;
                s = h.fsPath;
            }
            const o = i?.name ?? IUf(n.filename), a = IUf(n.filename), l = a === o ? [] : [
                a
            ], c = i?.source === "project" && this.isProjectPath(s), u = i?.source, d = s !== "" && i?.isClaudeCommand !== !0 && (u === void 0 || u === "user" || u === "project");
            e.push({
                id: "",
                kind: "command",
                name: o,
                filePath: s,
                aliases: l,
                scope: i?.source === "plugin" ? "plugin" : i?.source === "project" ? "project" : i?.source === "team" ? "team" : "user",
                sourceLabel: i?.source,
                pluginId: i?.pluginId,
                marketplaceId: i?.marketplaceId,
                isWorkspaceViewable: c,
                deletable: d
            });
        }
        return e;
    }
    async getMcpDescriptorSources() {
        const t = [];
        for (const e of this.mcpService.allServers()){
            const n = kPe(e);
            if (n !== "user" && n !== "project" || !e.name.trim()) continue;
            const i = await this.getMcpServerConfigFilePath(e);
            i !== void 0 && t.push({
                id: "",
                kind: "mcp",
                name: e.name,
                filePath: i,
                scope: n,
                sourceLabel: n,
                isWorkspaceViewable: n === "project"
            });
        }
        return t;
    }
    async getMcpServerConfigFilePath(t) {
        if (t.projectManaged) {
            const e = this.workspaceContextService.getWorkspace().folders.find((n)=>this.mcpService.folderToKey(n) === t.projectPath);
            return e ? rt.joinPath(e.uri, ".cursor", "mcp.json").fsPath : void 0;
        }
        return (await this.mcpService.getUserConfigFilePath()).fsPath;
    }
    refreshPluginComponentDescriptors() {
        const t = this.pluginsProviderService.pluginsCache.get()?.pluginComponentFiles;
        if (t === void 0) {
            this.refreshPluginDataIfNeeded();
            return;
        }
        const e = qws();
        for (const i of t)for (const r of i.components){
            const s = RUf.get(r.type);
            s && e[s].push({
                id: "",
                kind: s,
                name: r.name,
                description: r.description,
                filePath: r.filePath,
                scope: "plugin",
                sourceLabel: i.pluginKey ?? i.pluginName,
                pluginId: i.pluginId,
                marketplaceId: i.marketplaceId,
                isWorkspaceViewable: !0,
                deletable: !1
            });
        }
        const n = new Set;
        for (const i of AUf)this.areDescriptorInputsEqual(this.pluginDescriptorsByKind[i], e[i]) || (this.pluginDescriptorsByKind[i] = e[i], n.add(i));
        for (const i of n)this.hasLoadedInitialKind[i] && this.publishKind(i);
    }
    refreshPluginDataIfNeeded() {
        this.pluginsProviderService.pluginsCache.get()?.pluginComponentFiles !== void 0 && !this.pluginsProviderService.isPluginComponentDataStale() || this.pluginDataRefreshInFlight === void 0 && (this.pluginDataRefreshInFlight = this.pluginsProviderService.refreshPluginData().catch(()=>{}).finally(()=>{
            this.pluginDataRefreshInFlight = void 0;
        }));
    }
    findPluginAuthorshipFields(t) {
        if (t.scope !== "plugin" && t.pluginId === void 0 && t.marketplaceId === void 0) return;
        const e = this.pluginsProviderService.pluginsCache.get()?.pluginComponentFiles;
        if (e === void 0) return;
        const n = OBe(t.filePath), i = e.filter((s)=>s.components.some((o)=>OBe(o.filePath) === n));
        if (i.length === 0) return;
        const r = i.find((s)=>t.pluginId !== void 0 && s.pluginId === t.pluginId) ?? i.find((s)=>t.marketplaceId !== void 0 && s.marketplaceId === t.marketplaceId) ?? i.find((s)=>t.sourceLabel !== void 0 && (s.pluginKey === t.sourceLabel || s.pluginName === t.sourceLabel)) ?? i[0];
        if (r !== void 0) return {
            pluginName: r.pluginName,
            ...r.pluginKey !== void 0 && {
                pluginKey: r.pluginKey
            },
            ...r.pluginSource !== void 0 && {
                pluginSource: r.pluginSource
            },
            ...r.publisherName !== void 0 && {
                publisherName: r.publisherName
            }
        };
    }
    isStalePluginAuthorship(t, e) {
        const n = e?.publisherName?.trim();
        return t.authorship !== void 0 && t.authorship !== null && e?.pluginSource !== void 0 && n !== void 0 && n.length > 0 && t.authorship !== n;
    }
    findDescriptor(t, e) {
        return this.descriptorsByKind[e].find((n)=>n.id === t);
    }
    optimisticallyRemoveDescriptor(t, e, n) {
        const i = OBe(n), r = this.descriptorsByKind[e].filter((o)=>o.id !== t), s = i === "" ? this.baseDescriptorsByKind[e] : this.baseDescriptorsByKind[e].filter((o)=>OBe(o.filePath) !== i);
        r.length === this.descriptorsByKind[e].length && s.length === this.baseDescriptorsByKind[e].length || (this.descriptorsByKind[e] = r, this.baseDescriptorsByKind[e] = s, this.persistKind(e), this.fireDidChangeKind(e));
    }
    optimisticallyUpdateTeamRuleEnabled(t, e) {
        let n = !1;
        const i = (r, s)=>!s || r.scope !== "team" || r.teamRuleRequired === !0 || r.teamRuleEnabled === e ? r : (n = !0, {
                ...r,
                teamRuleEnabled: e
            });
        this.descriptorsByKind.rule = this.descriptorsByKind.rule.map((r)=>i(r, r.id === t)), this.baseDescriptorsByKind.rule = this.baseDescriptorsByKind.rule.map((r)=>i(r, this.descriptorBaseId(r) === t)), n && (this.persistKind("rule"), this.fireDidChangeKind("rule"));
    }
    updateDescriptorAuthorship(t, e, n) {
        this.descriptorsByKind[e] = this.descriptorsByKind[e].map((i)=>i.id === t ? {
                ...i,
                authorship: n
            } : i), this.baseDescriptorsByKind[e] = this.baseDescriptorsByKind[e].map((i)=>this.descriptorBaseId(i) === t ? {
                ...i,
                authorship: n
            } : i), this.pluginDescriptorsByKind[e] = this.pluginDescriptorsByKind[e].map((i)=>this.descriptorBaseId(i) === t ? {
                ...i,
                authorship: n
            } : i);
    }
    authorshipSourceId(t, e) {
        return `${e}:${t}`;
    }
    descriptorBaseId(t) {
        return [
            t.kind,
            t.pluginId ?? "no-plugin",
            t.marketplaceId ?? "no-marketplace",
            t.sourceLabel ?? "no-source",
            t.filePath,
            t.name
        ].map((e)=>encodeURIComponent(e)).join(":");
    }
    areDescriptorInputsEqual(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0; n < t.length; n++){
            const i = t[n], r = e[n];
            if (i?.kind !== r?.kind || i?.name !== r?.name || i?.description !== r?.description || i?.filePath !== r?.filePath || i?.pluginId !== r?.pluginId || i?.marketplaceId !== r?.marketplaceId || i?.sourceLabel !== r?.sourceLabel) return !1;
        }
        return !0;
    }
    async openUri(t) {
        if (this.workbenchEnvironmentService.isGlass) {
            await this.commandService.executeCommand("glass.openFileInStableTab", {
                uri: t.toJSON()
            });
            return;
        }
        await this.editorService.openEditor({
            resource: t,
            options: {
                pinned: !0
            }
        });
    }
    createUriFromFullPath(t) {
        const e = this.workspaceContextService.getWorkspace().folders.find((n)=>DBl(t, n) !== void 0);
        if (e) {
            const n = DBl(t, e);
            return n ? rt.joinPath(e.uri, ...n.split("/")) : e.uri;
        }
        return rt.file(t);
    }
    isProjectPath(t) {
        return this.workspaceContextService.getWorkspace().folders.some((e)=>DBl(t, e) !== void 0);
    }
}, Vws = Re([
    F(0, xA),
    F(1, jPe),
    F(2, uG),
    F(3, N0),
    F(4, VI),
    F(5, gr),
    F(6, nr),
    F(7, ps),
    F(8, yr),
    F(9, is),
    F(10, ki),
    F(11, Li)
], Vws), bn(AKe, Vws, 1);

}
