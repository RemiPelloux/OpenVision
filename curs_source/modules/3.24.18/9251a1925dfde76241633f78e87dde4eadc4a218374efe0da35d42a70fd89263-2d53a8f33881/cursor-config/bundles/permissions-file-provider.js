import { init_paths } from "./paths.js";
import { init_project_permissions_file_provider } from "./project-permissions-file-provider.js";
import { filterStrings2, getConfigDir, getFieldCaseInsensitive, parsePermissionsAutoRunConfig } from "../../mcp_sandbox_policy_exports.js";
import { init_main, parse6 } from "../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js";
var import_node_fs31, import_promises45, import_node_path69, PermissionsFileProvider;
export { PermissionsFileProvider, import_node_fs31, import_node_path69, import_promises45 };
var __wakaru_init_permissions_file_provider_initialized = false;
export function init_permissions_file_provider() {
if (__wakaru_init_permissions_file_provider_initialized) return;
__wakaru_init_permissions_file_provider_initialized = true;
"use strict";
import_node_fs31 = require("node:fs");
import_promises45 = require("node:fs/promises");
import_node_path69 = require("node:path");
init_main();
init_paths();
init_project_permissions_file_provider();
PermissionsFileProvider = class _PermissionsFileProvider {
    constructor(permissions, autoRunInstructions){
        this.permissions = permissions;
        this.autoRunInstructions = autoRunInstructions;
    }
    static getPermissionsFilePath() {
        return (0, import_node_path69.join)(getConfigDir(), "permissions.json");
    }
    static async load(filePath) {
        const path64 = filePath ?? _PermissionsFileProvider.getPermissionsFilePath();
        if (!(0, import_node_fs31.existsSync)(path64)) {
            return void 0;
        }
        try {
            const raw = await (0, import_promises45.readFile)(path64, "utf8");
            const parsed = parse6(raw);
            if (!parsed || typeof parsed !== "object") {
                return void 0;
            }
            const mcpEntries = filterStrings2(getFieldCaseInsensitive(parsed, "mcpAllowlist"));
            const terminalEntries = filterStrings2(getFieldCaseInsensitive(parsed, "terminalAllowlist"));
            const autoRunConfig = getFieldCaseInsensitive(parsed, "autoReview") ?? getFieldCaseInsensitive(parsed, "autoRun");
            const autoRun = parsePermissionsAutoRunConfig(autoRunConfig);
            const autoRunInstructions = {
                allowInstructions: autoRun?.allowInstructions ?? [],
                blockInstructions: autoRun?.blockInstructions ?? []
            };
            if (mcpEntries.length === 0 && terminalEntries.length === 0 && autoRunInstructions.allowInstructions.length === 0 && autoRunInstructions.blockInstructions.length === 0) {
                return void 0;
            }
            const allow = [
                ...terminalEntries.map((cmd)=>`Shell(${cmd})`),
                ...mcpEntries.map((entry)=>`Mcp(${entry})`)
            ];
            return new _PermissionsFileProvider({
                allow,
                deny: []
            }, autoRunInstructions);
        } catch  {
            return void 0;
        }
    }
    async getPermissions() {
        return {
            allow: this.permissions.allow,
            deny: this.permissions.deny,
            approvalMode: "unrestricted",
            userConfiguredPolicy: {
                type: "insecure_none"
            }
        };
    }
    getAutoRunInstructions() {
        return {
            allowInstructions: [
                ...this.autoRunInstructions.allowInstructions
            ],
            blockInstructions: [
                ...this.autoRunInstructions.blockInstructions
            ]
        };
    }
    async updatePermissions(transformer) {
        void transformer;
    }
};

}
