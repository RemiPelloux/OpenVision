import { init_dist14 } from "../../../../cursor-plugins/dist/index.js";
import { readText } from "../../../../dist_exports.js";
import { deriveNameFromFilename, findSubagentFilesRecursive, parseSubagentFile, translatePluginAgentsToSubagents } from "../../../../dist_exports2.js";
import { init_recursive_file_discovery } from "./recursive-file-discovery.js";
import { CustomSubagent, CustomSubagentPermissionMode, init_subagents_pb } from "../../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var import_promises19, import_node_path41, import_node_util7, log3, NoopSubagentsService, LocalSubagentsService, EXCLUDED_SUBAGENT_NAMES, MergedSubagentsService, CursorPluginsSubagentsService;
export { CursorPluginsSubagentsService, EXCLUDED_SUBAGENT_NAMES, LocalSubagentsService, MergedSubagentsService, NoopSubagentsService, import_node_path41, import_node_util7, import_promises19, log3 };
var __wakaru_init_subagents_service_initialized = false;
export function init_subagents_service() {
if (__wakaru_init_subagents_service_initialized) return;
__wakaru_init_subagents_service_initialized = true;
"use strict";
import_promises19 = require("node:fs/promises");
import_node_path41 = require("node:path");
import_node_util7 = require("node:util");
init_dist14();
init_subagents_pb();
init_dist3();
init_recursive_file_discovery();
log3 = (0, import_node_util7.debuglog)("local-subagents");
NoopSubagentsService = class {
    async getAllSubagents() {
        return [];
    }
    async reload() {
        return [];
    }
};
LocalSubagentsService = class {
    constructor(workspacePath, getThirdPartyExtensibilityEnabled, cursorAgentsSource = "workspace", allowExternalAgentSymlinks = false){
        this.workspacePath = workspacePath;
        this.cursorAgentsSource = cursorAgentsSource;
        this.allowExternalAgentSymlinks = allowExternalAgentSymlinks;
        this.getThirdPartyExtensibilityEnabled = getThirdPartyExtensibilityEnabled ?? (()=>true);
        this.subagents = this.load().catch((err)=>{
            log3("Failed to load subagents: %o", err);
            return [];
        });
    }
    async getAllSubagents() {
        return this.subagents;
    }
    async reload() {
        this.subagents = this.load().catch((err)=>{
            log3("Failed to load subagents: %o", err);
            return [];
        });
        return await this.subagents;
    }
    computeAgentsDirs() {
        const workspaceRoot = (0, import_node_path41.resolve)(this.workspacePath);
        const dirs = [
            {
                dirPath: (0, import_node_path41.join)(workspaceRoot, ".cursor", "agents"),
                source: this.cursorAgentsSource
            }
        ];
        if (this.getThirdPartyExtensibilityEnabled()) {
            dirs.push({
                dirPath: (0, import_node_path41.join)(workspaceRoot, ".claude", "agents"),
                source: "claude"
            });
            dirs.push({
                dirPath: (0, import_node_path41.join)(workspaceRoot, ".grok", "agents"),
                source: "grok"
            });
        }
        return dirs;
    }
    async load() {
        const agentsDirs = this.computeAgentsDirs();
        const subagents = [];
        for (const { dirPath: agentsDir, source } of agentsDirs){
            const subagentFiles = await findSubagentFilesRecursive(agentsDir, this.allowExternalAgentSymlinks ? void 0 : this.workspacePath);
            for (const fullPath of subagentFiles){
                const filename = (0, import_node_path41.basename)(fullPath);
                try {
                    const fileStat = await (0, import_promises19.stat)(fullPath);
                    if (!fileStat.isFile()) continue;
                } catch (error3) {
                    log3("Skipping subagent file %s due to stat error: %o", fullPath, error3);
                    continue;
                }
                try {
                    const content = await readText(fullPath);
                    const parsed = parseSubagentFile(content);
                    if (!parsed) continue;
                    subagents.push(new CustomSubagent({
                        fullPath,
                        name: parsed.name || deriveNameFromFilename(filename),
                        description: parsed.description ?? "",
                        tools: parsed.tools,
                        model: parsed.model ?? "inherit",
                        forceDefaultModel: parsed.forceDefaultModel,
                        prompt: parsed.prompt,
                        permissionMode: parsed.permissionMode,
                        isBackground: parsed.isBackground,
                        source
                    }));
                } catch (error3) {
                    log3("Failed to parse subagent file %s: %o", fullPath, error3);
                }
            }
        }
        return subagents;
    }
};
EXCLUDED_SUBAGENT_NAMES = new Set([
    "claude-code-tutor"
]);
MergedSubagentsService = class {
    constructor(subagentsServices){
        this.subagentsServices = subagentsServices;
    }
    async getAllSubagents() {
        const allSubagents = await Promise.all(this.subagentsServices.map((service)=>service.getAllSubagents().catch((err)=>{
                log3("Failed to load subagents from merged service: %o", err);
                return [];
            })));
        const deduped = new Map();
        for (const subagents of allSubagents){
            for (const subagent of subagents){
                if (EXCLUDED_SUBAGENT_NAMES.has(subagent.name)) {
                    continue;
                }
                if (!deduped.has(subagent.name)) {
                    deduped.set(subagent.name, subagent);
                }
            }
        }
        const result = Array.from(deduped.values());
        return result;
    }
    async reload() {
        await Promise.all(this.subagentsServices.map((service)=>service.reload()));
        return this.getAllSubagents();
    }
};
CursorPluginsSubagentsService = class {
    constructor(getSettings, pluginsService){
        this.getSettings = getSettings;
        this.pluginsService = pluginsService;
        this._subagentsCache = [];
        this._loadId = 0;
        this._loadPromise = null;
        this._loadedOnce = false;
        this.runLoadInBackground();
    }
    async getAllSubagents() {
        if (this._loadPromise) {
            await this._loadPromise;
        }
        if (!this._loadedOnce) {
            await this.reload();
        }
        return [
            ...this._subagentsCache
        ];
    }
    async reload() {
        this.runLoadInBackground(true);
        if (this._loadPromise) await this._loadPromise;
        return this._subagentsCache;
    }
    runLoadInBackground(reloadPlugins = false) {
        const loadId = ++this._loadId;
        this._loadPromise = this.load(reloadPlugins).then((result)=>{
            if (loadId !== this._loadId) return;
            this._subagentsCache = result;
            this._loadedOnce = true;
        }).catch((err)=>{
            if (loadId !== this._loadId) return;
            log3("Failed to load Cursor plugin subagents: %o", err);
            this._subagentsCache = [];
            this._loadedOnce = true;
        }).finally(()=>{
            if (loadId === this._loadId) {
                this._loadPromise = null;
            }
        });
    }
    dispose() {}
    async load(reloadPlugins) {
        const subagents = [];
        try {
            let plugins = reloadPlugins ? await this.pluginsService.reload() : await this.pluginsService.getAllEnabledPlugins();
            const settings = this.getSettings();
            if (!settings.importThirdPartyPlugins) {
                plugins = plugins.filter((p2)=>p2.identifier.source !== "claude-plugin");
            }
            const translated = translatePluginAgentsToSubagents(plugins, {
                stripModel: true,
                stripTools: true
            });
            for (const s3 of translated){
                const permissionMode = s3.permissionMode === "readonly" ? CustomSubagentPermissionMode.READONLY : CustomSubagentPermissionMode.DEFAULT;
                subagents.push(new CustomSubagent({
                    name: s3.name,
                    description: s3.description,
                    tools: [],
                    model: "inherit",
                    prompt: s3.prompt,
                    fullPath: s3.fullPath,
                    permissionMode,
                    plugin: s3.plugin,
                    marketplace: s3.marketplace,
                    pluginId: s3.pluginId,
                    marketplaceId: s3.marketplaceId,
                    source: "plugin"
                }));
            }
        } catch  {}
        return subagents;
    }
};

}
