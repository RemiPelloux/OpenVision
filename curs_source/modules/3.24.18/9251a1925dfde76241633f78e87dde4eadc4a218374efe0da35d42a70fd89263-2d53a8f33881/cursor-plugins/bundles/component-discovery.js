import { init_manifest_parser } from "./manifest-parser.js";
import { PLUGIN_MCP_CONFIG_FILE_NAMES, init_mcp_parser } from "./mcp-parser.js";
import { init_mcp_placeholder_variables } from "./mcp-placeholder-variables.js";
import { deduplicateByName, deriveNameFromPath, inferMcpPlaceholderVariables, isPathSafe, parseNameAndDescription, resolvePluginMcpConfigFromReader, toKebabCase } from "../../dist_exports2.js";
import { init_js_yaml } from "../../node_modules/.pnpm/js-yaml@4.3.1/node_modules/js-yaml/dist/js-yaml.mjs";
var import_node_path33, MARKDOWN_EXTENSIONS, COMMAND_EXTRA_EXTENSIONS, COMMAND_EXTENSIONS, FRONTMATTER_REGEX, PluginComponentDiscovery;
export { COMMAND_EXTENSIONS, COMMAND_EXTRA_EXTENSIONS, FRONTMATTER_REGEX, MARKDOWN_EXTENSIONS, PluginComponentDiscovery, import_node_path33 };
var __wakaru_init_component_discovery_initialized = false;
export function init_component_discovery() {
if (__wakaru_init_component_discovery_initialized) return;
__wakaru_init_component_discovery_initialized = true;
"use strict";
import_node_path33 = require("node:path");
init_js_yaml();
init_manifest_parser();
init_mcp_parser();
init_mcp_placeholder_variables();
MARKDOWN_EXTENSIONS = [
    ".md",
    ".mdc",
    ".markdown"
];
COMMAND_EXTRA_EXTENSIONS = [
    ".txt"
];
COMMAND_EXTENSIONS = [
    ...MARKDOWN_EXTENSIONS,
    ...COMMAND_EXTRA_EXTENSIONS
];
FRONTMATTER_REGEX = /^---\s*\n([\s\S]*?)\n---/;
PluginComponentDiscovery = class {
    constructor(fetcher){
        this.fetcher = fetcher;
    }
    async discoverComponents(options2 = {}) {
        const basePath = options2.basePath ?? "";
        const basePrefix = basePath ? `${basePath}/` : "";
        const manifest = options2.manifest;
        let rootContents;
        try {
            rootContents = await this.fetcher.listDirectory(basePath);
        } catch  {
            rootContents = [];
        }
        const folderNames = new Set(rootContents.filter((item)=>item.type === "dir").map((item)=>item.name.toLowerCase()));
        const presentMcpConfigFiles = PLUGIN_MCP_CONFIG_FILE_NAMES.filter((name17)=>rootContents.some((item)=>item.type === "file" && item.name === name17));
        const hasRootSkillMd = rootContents.some((item)=>item.type === "file" && item.name === "SKILL.md");
        const [rootSkill, skillsFromManifestOrFolder, agents, hooks, commands, rules, mcpServers] = await Promise.all([
            hasRootSkillMd && manifest?.skills === void 0 ? this.discoverRootSkill(basePrefix) : Promise.resolve(null),
            manifest?.skills !== void 0 ? this.discoverFromManifestPaths(basePrefix, manifest.skills, true, MARKDOWN_EXTENSIONS) : folderNames.has("skills") ? this.discoverSkills(`${basePrefix}skills`) : Promise.resolve([]),
            manifest?.agents !== void 0 ? this.discoverFromManifestPaths(basePrefix, manifest.agents, false, MARKDOWN_EXTENSIONS) : folderNames.has("agents") ? this.discoverMarkdownComponents(`${basePrefix}agents`, MARKDOWN_EXTENSIONS) : Promise.resolve([]),
            manifest?.hooks !== void 0 ? this.discoverHooksFromManifest(basePrefix, manifest.hooks) : folderNames.has("hooks") ? this.discoverHooksFromJson(`${basePrefix}hooks/hooks.json`) : Promise.resolve([]),
            manifest?.commands !== void 0 ? this.discoverFromManifestPaths(basePrefix, manifest.commands, false, COMMAND_EXTENSIONS) : folderNames.has("commands") ? this.discoverMarkdownComponents(`${basePrefix}commands`, COMMAND_EXTENSIONS) : Promise.resolve([]),
            manifest?.rules !== void 0 ? this.discoverFromManifestPaths(basePrefix, manifest.rules, false, MARKDOWN_EXTENSIONS) : folderNames.has("rules") ? this.discoverMarkdownComponents(`${basePrefix}rules`, MARKDOWN_EXTENSIONS) : Promise.resolve([]),
            this.discoverMcpServers(basePrefix, manifest?.mcpServers, presentMcpConfigFiles)
        ]);
        const combinedSkills = rootSkill ? [
            rootSkill,
            ...skillsFromManifestOrFolder
        ] : skillsFromManifestOrFolder;
        return {
            skills: deduplicateByName(combinedSkills),
            agents: deduplicateByName(agents),
            hooks,
            commands: deduplicateByName(commands),
            rules: deduplicateByName(rules),
            mcpServers: mcpServers.servers,
            mcpVariables: mcpServers.variables,
            mcpConfigs: mcpServers.configs
        };
    }
    async discoverHooksFromJson(hooksJsonPath) {
        try {
            const exists = await this.fetcher.fileExists(hooksJsonPath);
            if (!exists) {
                return [];
            }
            const { content } = await this.fetcher.fetchFile(hooksJsonPath);
            const config2 = JSON.parse(content);
            if (!config2.hooks || typeof config2.hooks !== "object" || Array.isArray(config2.hooks)) {
                return [];
            }
            const hookNames = Object.keys(config2.hooks);
            return hookNames.map((name17)=>({
                    name: toKebabCase(name17),
                    path: hooksJsonPath,
                    description: `Hook: ${name17}`
                }));
        } catch  {
            return [];
        }
    }
    async discoverHooksFromManifest(basePrefix, hooksConfig) {
        if (typeof hooksConfig === "string") {
            if (!isPathSafe(hooksConfig)) {
                return [];
            }
            const fullPath = `${basePrefix}${hooksConfig.replace(/^\.\//, "")}`;
            if (fullPath.endsWith(".json")) {
                return this.discoverHooksFromJson(fullPath);
            }
            return this.discoverHooksFromJson(`${fullPath}/hooks.json`);
        }
        const hooks = hooksConfig.hooks ?? hooksConfig;
        if (!hooks || typeof hooks !== "object" || Array.isArray(hooks)) {
            return [];
        }
        const hookNames = Object.keys(hooks);
        return hookNames.map((name17)=>({
                name: toKebabCase(name17),
                path: "manifest",
                description: `Hook: ${name17}`
            }));
    }
    async discoverFromManifestPaths(basePrefix, paths, isSkillDir = false, extensions = MARKDOWN_EXTENSIONS) {
        if (typeof paths === "string") {
            if (!isPathSafe(paths)) {
                return [];
            }
            const dirPath = `${basePrefix}${paths.replace(/^\.\//, "")}`.replace(/\/$/, "");
            if (isSkillDir) {
                return this.discoverSkills(dirPath);
            }
            return this.discoverMarkdownComponents(dirPath, extensions);
        }
        const results = [];
        for (const itemPath of paths){
            try {
                if (!isPathSafe(itemPath)) {
                    continue;
                }
                const fullPath = `${basePrefix}${itemPath.replace(/^\.\//, "")}`;
                if (isSkillDir) {
                    const skillMdPath = fullPath.endsWith("SKILL.md") ? fullPath : `${fullPath.replace(/\/$/, "")}/SKILL.md`;
                    const exists = await this.fetcher.fileExists(skillMdPath);
                    if (!exists) {
                        const dirPath2 = fullPath.replace(/\/$/, "");
                        const discovered = await this.discoverSkills(dirPath2);
                        results.push(...discovered);
                        continue;
                    }
                    const dirPath = fullPath.endsWith("SKILL.md") ? fullPath.slice(0, -"SKILL.md".length).replace(/\/$/, "") : fullPath;
                    let finalName = deriveNameFromPath(dirPath);
                    const { content } = await this.fetcher.fetchFile(skillMdPath);
                    const parsed = parseNameAndDescription(content);
                    finalName = parsed.name ?? finalName;
                    if (finalName) {
                        const component = {
                            disabledEnvironments: parsed.disabledEnvironments,
                            environments: parsed.environments,
                            name: toKebabCase(finalName),
                            path: skillMdPath
                        };
                        if (parsed.description !== void 0) {
                            component.description = parsed.description;
                        }
                        results.push(component);
                    }
                } else {
                    const exists = await this.fetcher.fileExists(fullPath);
                    if (!exists) {
                        continue;
                    }
                    let finalName = deriveNameFromPath(fullPath);
                    const { content } = await this.fetcher.fetchFile(fullPath);
                    const parsed = parseNameAndDescription(content);
                    finalName = parsed.name ?? finalName;
                    const description3 = parsed.description;
                    if (finalName) {
                        const component = {
                            name: toKebabCase(finalName),
                            path: fullPath
                        };
                        if (description3 !== void 0) {
                            component.description = description3;
                        }
                        results.push(component);
                    }
                }
            } catch  {}
        }
        return results;
    }
    async discoverMarkdownComponents(folderPath, extensions = MARKDOWN_EXTENSIONS, visitedRealDirPaths = new Set()) {
        let contents;
        try {
            contents = await this.fetcher.listDirectory(folderPath, visitedRealDirPaths);
        } catch  {
            return [];
        }
        const matchingFiles = contents.filter((item)=>item.type === "file" && extensions.some((ext2)=>item.name.endsWith(ext2)));
        const subdirs = contents.filter((item)=>item.type === "dir");
        const [fileResults, subdirResults] = await Promise.all([
            Promise.all(matchingFiles.map(async (file)=>{
                try {
                    let finalName = deriveNameFromPath(file.name);
                    const { content } = await this.fetcher.fetchFile(file.path);
                    const parsed = parseNameAndDescription(content);
                    finalName = parsed.name ? toKebabCase(parsed.name) : finalName;
                    const description3 = parsed.description;
                    if (!finalName) {
                        return null;
                    }
                    const component = {
                        name: finalName,
                        path: file.path
                    };
                    if (description3 !== void 0) {
                        component.description = description3;
                    }
                    return component;
                } catch  {
                    return null;
                }
            })),
            Promise.all(subdirs.map((dir)=>this.discoverMarkdownComponents(dir.path, extensions, visitedRealDirPaths)))
        ]);
        return [
            ...fileResults.filter((r)=>r !== null),
            ...subdirResults.flat()
        ];
    }
    async discoverRootSkill(basePrefix) {
        try {
            const skillMdPath = `${basePrefix}SKILL.md`;
            const dirName = (0, import_node_path33.basename)(basePrefix.replace(/[\\/]+$/, ""));
            let finalName = toKebabCase(dirName);
            const { content } = await this.fetcher.fetchFile(skillMdPath);
            const parsed = parseNameAndDescription(content);
            finalName = parsed.name ? toKebabCase(parsed.name) : finalName;
            if (!finalName) {
                return null;
            }
            const component = {
                disabledEnvironments: parsed.disabledEnvironments,
                environments: parsed.environments,
                name: finalName,
                path: skillMdPath
            };
            if (parsed.description !== void 0) {
                component.description = parsed.description;
            }
            return component;
        } catch  {
            return null;
        }
    }
    async discoverSkills(skillsPath) {
        let contents;
        try {
            contents = await this.fetcher.listDirectory(skillsPath);
        } catch  {
            return [];
        }
        const skillDirs = contents.filter((item)=>item.type === "dir");
        const results = await Promise.all(skillDirs.map(async (dir)=>{
            try {
                const skillMdPath = `${dir.path}/SKILL.md`;
                const exists = await this.fetcher.fileExists(skillMdPath);
                if (!exists) {
                    return null;
                }
                const { content } = await this.fetcher.fetchFile(skillMdPath);
                const parsed = parseNameAndDescription(content);
                const finalName = parsed.name ? toKebabCase(parsed.name) : toKebabCase(dir.name);
                if (!finalName) {
                    return null;
                }
                const component = {
                    disabledEnvironments: parsed.disabledEnvironments,
                    environments: parsed.environments,
                    name: finalName,
                    path: skillMdPath
                };
                if (parsed.description !== void 0) {
                    component.description = parsed.description;
                }
                return component;
            } catch  {
                return null;
            }
        }));
        return results.filter((r)=>r !== null);
    }
    async discoverMcpServers(basePrefix, manifestMcpServers, presentMcpConfigFiles) {
        const fetched = new Map();
        const readFileContent = async (relativePath2)=>{
            const cached2 = fetched.get(relativePath2);
            if (cached2 !== void 0) {
                return cached2;
            }
            const pending = this.fetcher.fetchFile(`${basePrefix}${relativePath2}`).then(({ content })=>content).catch(()=>null);
            fetched.set(relativePath2, pending);
            return pending;
        };
        const resolveWith = async (manifestPrecedence)=>resolvePluginMcpConfigFromReader(readFileContent, manifestMcpServers, manifestMcpServers !== void 0 ? "manifest" : void 0, {
                fallbackFileNames: presentMcpConfigFiles,
                manifestPrecedence,
                toSourcePath: (relativePath2)=>`${basePrefix}${relativePath2}`,
                parserOptions: {
                    skipExpansion: true
                }
            });
        const resolved = await resolveWith("fill");
        if (resolved?.mcpServers === void 0) {
            return {
                servers: [],
                variables: void 0,
                configs: void 0
            };
        }
        const runtimeResolved = manifestMcpServers === void 0 ? resolved : await resolveWith("override");
        const runtimeServers = runtimeResolved?.mcpServers ?? resolved.mcpServers;
        const configs = {};
        for (const [name17, config2] of Object.entries(runtimeServers)){
            configs[name17] = config2;
        }
        return {
            servers: Object.keys(resolved.mcpServers).map((name17)=>({
                    name: toKebabCase(name17),
                    path: resolved.mcpServerSourcePaths?.[name17] ?? "manifest"
                })),
            variables: inferMcpPlaceholderVariables(runtimeResolved ?? resolved),
            configs
        };
    }
};

}
