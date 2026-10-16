import { init_dist7 } from "../../../agent-core/dist/index.js";
import { checkMcpNetworkUrl, resolveAdminMcpToolAllowlistConfig, resolveMcpNetworkControlsConfigFromAdminPolicy } from "../../../esm_exports8.js";
import { init_dist19 } from "../../../mcp-agent-exec/dist/index.js";
import { init_admin_mcp_tool_allowlist } from "../../../mcp-core/dist/admin-mcp-tool-allowlist.js";
import { adminSandboxReadBoundaryFromProto, getLegacyMcpServerNetworkAllowlistBlockInfo, getMcpServerTeamNetworkAllowlistBlockInfo, isMcpServerBlockedByAdminPolicy, sandboxReadAllowlistPathsFromProto } from "../../../mcp_sandbox_policy_exports.js";
import { GetTeamAdminSettingsRequest, GetTeamReposRequest, GitMode, NetworkingMode, SandboxingMode, init_dashboard_pb } from "../../../proto/dist/generated/aiserver/v1/dashboard_pb.js";
var CACHE_EXPIRY_MS, CACHE_MAX_STALE_MS, BIGINT_ZERO3, BIGINT_EIGHT3, BIGINT_SIXTEEN3, IPV4_LOW_HEXTET_MASK3, ConnectTeamAdminSettingsProvider, StaleWhileRevalidateCache, CachedTeamSettingsService;
export { BIGINT_EIGHT3, BIGINT_SIXTEEN3, BIGINT_ZERO3, CACHE_EXPIRY_MS, CACHE_MAX_STALE_MS, CachedTeamSettingsService, ConnectTeamAdminSettingsProvider, IPV4_LOW_HEXTET_MASK3, StaleWhileRevalidateCache };
var __wakaru_init_team_settings_service_initialized = false;
export function init_team_settings_service() {
if (__wakaru_init_team_settings_service_initialized) return;
__wakaru_init_team_settings_service_initialized = true;
"use strict";
init_dist7();
init_dist19();
init_admin_mcp_tool_allowlist();
init_dashboard_pb();
CACHE_EXPIRY_MS = 5 * 60 * 1e3;
CACHE_MAX_STALE_MS = 2 * CACHE_EXPIRY_MS;
BIGINT_ZERO3 = BigInt(0);
BIGINT_EIGHT3 = BigInt(8);
BIGINT_SIXTEEN3 = BigInt(16);
IPV4_LOW_HEXTET_MASK3 = BigInt(65535);
ConnectTeamAdminSettingsProvider = class {
    constructor(dashboardClient){
        this.dashboardClient = dashboardClient;
    }
    getTeamAdminSettings() {
        return this.dashboardClient.getTeamAdminSettingsOrEmptyIfNotInTeam(new GetTeamAdminSettingsRequest({}));
    }
    getTeamRepos() {
        return this.dashboardClient.getTeamReposOrEmptyIfNotInTeam(new GetTeamReposRequest({}));
    }
};
StaleWhileRevalidateCache = class {
    constructor(fetch2){
        this.fetch = fetch2;
    }
    get() {
        const cached2 = this.cached;
        const age = cached2 === void 0 ? Infinity : Date.now() - cached2.fetchedAt;
        if (cached2 === void 0 || age > CACHE_MAX_STALE_MS) {
            this.cached = void 0;
            return this.refresh();
        }
        if (age > CACHE_EXPIRY_MS) {
            this.refresh().catch(()=>{});
        }
        return Promise.resolve(cached2.value);
    }
    invalidate() {
        this.cached = void 0;
        this.inFlight = void 0;
    }
    refresh() {
        if (this.inFlight === void 0) {
            const inFlight = this.fetch().then((value)=>{
                if (this.inFlight === inFlight && (value !== void 0 || this.cached === void 0)) {
                    this.cached = {
                        value,
                        fetchedAt: Date.now()
                    };
                }
                return value;
            }).finally(()=>{
                if (this.inFlight === inFlight) {
                    this.inFlight = void 0;
                }
            });
            this.inFlight = inFlight;
        }
        return this.inFlight;
    }
};
CachedTeamSettingsService = class {
    constructor(teamAdminSettingsProvider, defaultAllowlistProvider, options2 = {}){
        this.teamAdminSettingsProvider = teamAdminSettingsProvider;
        this.defaultAllowlistProvider = defaultAllowlistProvider;
        this.options = options2;
        this.lastFetchSucceeded = true;
        this.settings = new StaleWhileRevalidateCache(()=>this.fetchSettings());
        this.teamRepos = new StaleWhileRevalidateCache(()=>this.teamAdminSettingsProvider.getTeamRepos());
        this.defaultAllowlist = new StaleWhileRevalidateCache(()=>this.fetchDefaultAllowlist());
        void this.getTeamAdminSettings();
    }
    invalidateCache() {
        this.settings.invalidate();
        this.defaultAllowlist.invalidate();
    }
    async fetchSettings() {
        try {
            const settings = await this.teamAdminSettingsProvider.getTeamAdminSettings();
            this.lastFetchSucceeded = true;
            return settings;
        } catch (error3) {
            this.lastFetchSucceeded = false;
            throw error3;
        }
    }
    getTeamAdminSettings() {
        return this.settings.get().catch(()=>void 0);
    }
    async getDotCursorProtection() {
        const settings = await this.getTeamAdminSettings();
        return settings?.dotCursorProtection ?? true;
    }
    async getShouldBlockMcp() {
        const settings = await this.getTeamAdminSettings();
        if (settings?.autoRunControls?.enabled && settings?.autoRunControls?.disableMcpAutoRun) {
            return true;
        }
        return false;
    }
    async getDeleteFileProtection() {
        const settings = await this.getTeamAdminSettings();
        if (settings?.autoRunControls?.enabled && settings?.autoRunControls?.deleteFileProtection) {
            return true;
        }
        return false;
    }
    async getIsHeadlessDisabled() {
        return (await this.getHeadlessCliPolicy()).kind === "disabled";
    }
    async getHeadlessCliPolicy() {
        const settings = await this.getTeamAdminSettings();
        if (settings === void 0 && !this.lastFetchSucceeded) {
            return {
                kind: "unavailable"
            };
        }
        return settings?.cliSettings?.disableHeadless === true ? {
            kind: "disabled"
        } : {
            kind: "enabled"
        };
    }
    async getMcpServerBlockInfo(server) {
        const settings = await this.getTeamAdminSettings();
        const allowedMCPConfig = settings?.allowedMcpConfiguration;
        const overhaulEnabled = await this.isMcpSettingsOverhaulEnabled({
            disableExposureLog: true
        });
        if (allowedMCPConfig?.disableAll === true) {
            return {
                blocked: true,
                reason: "teamPolicy",
                message: "Blocked by team policy"
            };
        }
        if (overhaulEnabled) {
            if (isMcpServerBlockedByAdminPolicy(server, allowedMCPConfig, {
                useCorePolicy: true
            })) {
                return {
                    blocked: true,
                    reason: "teamPolicy",
                    message: "Blocked by team policy"
                };
            }
            const config2 = await this.getMcpNetworkControlsConfig(server);
            const result = server.url === void 0 ? {
                allowed: true
            } : checkMcpNetworkUrl(server.url, config2);
            if (!result.allowed) {
                return {
                    blocked: true,
                    reason: "teamNetworkAllowlist",
                    message: result.message
                };
            }
            const teamNetworkAllowlistBlockInfo = getMcpServerTeamNetworkAllowlistBlockInfo({
                failOpenWhenEmpty: false,
                server,
                settings
            });
            if (teamNetworkAllowlistBlockInfo.blocked) {
                return teamNetworkAllowlistBlockInfo;
            }
        } else {}
        if (!overhaulEnabled) {
            const legacyNetworkAllowlistBlockInfo = getLegacyMcpServerNetworkAllowlistBlockInfo({
                isMcpAccessNetworkAllowlistEnabled: await this.isMcpAccessNetworkAllowlistEnabled(),
                server,
                settings
            });
            if (legacyNetworkAllowlistBlockInfo.blocked) {
                return legacyNetworkAllowlistBlockInfo;
            }
        }
        return {
            blocked: false
        };
    }
    async getMcpNetworkControlsConfig(server) {
        const settings = await this.getTeamAdminSettings();
        const allowedMCPConfig = settings?.allowedMcpConfiguration;
        const overhaulEnabled = await this.isMcpSettingsOverhaulEnabled();
        if (overhaulEnabled) {
            const unsandboxUserExtensionStdio = process.platform === "win32" && await this.isWin32UserExtensionStdioUnsandboxEnabled();
            return resolveMcpNetworkControlsConfigFromAdminPolicy({
                allowedMcpConfiguration: allowedMCPConfig,
                server,
                localAgentNetworkAllowlist: settings?.networkAllowlist,
                blockMessage: "Not on the team network allowlist",
                aggregateManagedServerNetworkAllowlists: false,
                stdioPlatform: process.platform,
                unsandboxUserExtensionStdio
            });
        }
        return {
            enabled: false,
            localAgentNetworkAllowlist: settings?.networkAllowlist,
            blockMessage: "Not on the team network allowlist"
        };
    }
    async isServerBlocked(server) {
        return (await this.getMcpServerBlockInfo(server)).blocked;
    }
    async getAutoRunControls() {
        const settings = await this.getTeamAdminSettings();
        if (!settings?.autoRunControls?.enabled) {
            return void 0;
        }
        return {
            enabled: settings.autoRunControls.enabled,
            allowed: settings.autoRunControls.allowed ?? [],
            blocked: settings.autoRunControls.blocked ?? [],
            enableAllowlistMode: settings.autoRunControls.enableAllowlistMode ?? true,
            enableRunEverything: settings.autoRunControls.enableRunEverything ?? false,
            enableSmartAuto: settings.autoRunControls.enableSmartAuto ?? true,
            mcpToolAllowlist: settings.autoRunControls.mcpToolAllowlist ?? []
        };
    }
    async isReadControlEnabled() {
        try {
            return await this.options.isReadControlEnabled?.() ?? true;
        } catch  {
            return false;
        }
    }
    async isDenylistEnforcementKilled() {
        try {
            return await this.options.isAdminCommandDenylistEnforcementKilled?.() === true;
        } catch  {
            return false;
        }
    }
    async getAdminCommandDenylist() {
        if (await this.isDenylistEnforcementKilled()) {
            return {
                rules: []
            };
        }
        const settings = await this.getTeamAdminSettings();
        return {
            rules: settings?.autoRunControls?.adminCommandDenylist?.rules ?? []
        };
    }
    async isMcpSettingsOverhaulEnabled(options2) {
        const enabled = this.options.isMcpSettingsOverhaulEnabled?.(options2);
        if (enabled === void 0) {
            return false;
        }
        return await enabled;
    }
    async isWin32UserExtensionStdioUnsandboxEnabled() {
        try {
            const enabled = this.options.isWin32UserExtensionStdioUnsandboxEnabled?.();
            if (enabled === void 0) {
                return false;
            }
            return await enabled;
        } catch  {
            return false;
        }
    }
    async getMcpToolControls() {
        const settings = await this.getTeamAdminSettings();
        const allowedMCPConfig = settings?.allowedMcpConfiguration;
        if (allowedMCPConfig === void 0) {
            return void 0;
        }
        const mcpToolAllowlistOptions = resolveAdminMcpToolAllowlistConfig({
            autoRunControls: settings?.autoRunControls,
            allowedMcpServers: allowedMCPConfig?.allowedMcpServers
        });
        const hasAdminMcpOwner = mcpToolAllowlistOptions.policies.length > 0 || mcpToolAllowlistOptions.tools.length > 0;
        if (!hasAdminMcpOwner) {
            return void 0;
        }
        return {
            enabled: true,
            mcpToolAllowlist: mcpToolAllowlistOptions.tools,
            allowUserOverride: allowedMCPConfig?.allowUserOverrideMcpServers ?? false,
            serverPolicies: mcpToolAllowlistOptions.policies
        };
    }
    async getNetworkAccessControls() {
        const settings = await this.getTeamAdminSettings();
        if (settings === void 0 && !this.lastFetchSucceeded) {
            return {
                allowlist: [],
                denylist: [],
                available: false
            };
        }
        return {
            allowlist: settings?.networkAllowlist ?? [],
            denylist: settings?.networkDenylist ?? [],
            available: true
        };
    }
    async getSandboxingControls() {
        const settings = await this.getTeamAdminSettings();
        const controls = settings?.autoRunControls?.sandboxingControls;
        const readBoundary = adminSandboxReadBoundaryFromProto(controls?.sandboxReadBoundary);
        return {
            sandboxingDisabled: controls?.sandboxing === SandboxingMode.DISABLED,
            networkingDisabled: controls?.sandboxNetworking === NetworkingMode.ALWAYS_DISABLED,
            gitDisabled: controls?.sandboxGit === GitMode.ALWAYS_DISABLED,
            readBoundary,
            readAllowlistPaths: sandboxReadAllowlistPathsFromProto(readBoundary, controls?.sandboxReadAllowlistPaths),
            allowUserOverrideReadAllowlist: controls?.allowUserOverrideSandboxReadAllowlist !== false
        };
    }
    async isAttributionDisabledByAdmin() {
        const settings = await this.getTeamAdminSettings();
        if (settings === void 0 && !this.lastFetchSucceeded) {
            return true;
        }
        return settings?.attributionControls?.disableAttribution ?? false;
    }
    getDefaultNetworkAllowlist() {
        return this.defaultAllowlist.get().catch(()=>({
                allowlist: [],
                available: false
            }));
    }
    async fetchDefaultAllowlist() {
        if (!this.defaultAllowlistProvider) {
            return {
                allowlist: [],
                available: true
            };
        }
        const allowlist = await this.defaultAllowlistProvider.getDefaultNetworkAllowlist();
        return {
            allowlist,
            available: true
        };
    }
    getTeamRepos() {
        return this.teamRepos.get();
    }
    async isMcpAccessNetworkAllowlistEnabled() {
        return await this.options.isMcpAccessNetworkAllowlistEnabled?.() ?? false;
    }
};

}
