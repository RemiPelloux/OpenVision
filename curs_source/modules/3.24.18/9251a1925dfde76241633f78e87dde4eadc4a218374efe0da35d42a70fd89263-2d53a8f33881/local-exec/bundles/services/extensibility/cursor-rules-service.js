import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { createContext } from "../../../../agent-host/dist/storage/instruments.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_dist14 } from "../../../../cursor-plugins/dist/index.js";
import { readText, withTimeout } from "../../../../dist_exports.js";
import { addSkillError, agentSkillsCatalogCacheKey, agentStoreCatalogKey, applyParsedSkillToLoaded, buildAgentSkillFromParsed, buildAgentSkillsCatalogSnapshot, buildCursorRuleFromParsed, cloneLoadedWithoutPaths, cursorRuleFromParsedMdc, dedupePreferringAgentStore, emptyAgentSkillsLoadResult, findGitRoot, findSkillMdFilesRecursive, getBuiltinExtensibilitySkillRoot, getPluginDbId, getPluginIdentifierKey, getPluginMarketplace, getPluginMarketplaceDbId, getPluginName, getProjectExtensibilitySkillRoots, getUserExtensibilitySkillRoots, grayMatter, haveSameRoots, isAlwaysApplySkillParsed, isExcludedBySurface, isUnderSkillRoot, mapTranslatedRuleToCursorRule, orEmptyCatalog, parseCursorRulesMdcContent, readAndParseSkillFile, readAndParseSkillFileWithRealPath, resolvePathForIgnoreService, restoreAgentSkillsCatalogSnapshot, shouldIgnoreExtensibilitySkillPath, translatePluginRulesToCursorRules, translatePluginSkillsToCursorRules, truncateRuleOrSkillDescription } from "../../../../dist_exports2.js";
import { init_common3, resolveRealPath } from "../../common.js";
import { RipwalkTtlCache, init_ripwalk_cache } from "../../ripwalk-cache.js";
import { init_common4 } from "../common.js";
import { init_agent_skills_catalog_cache } from "./agent-skills-catalog-cache.js";
import { NestedExtensibilityService, init_nested_extensibility } from "./nested-extensibility.js";
import { init_recursive_file_discovery } from "./recursive-file-discovery.js";
import { init_skill_dedupe } from "./skill-dedupe.js";
import { init_skill_discovery } from "./skill-discovery.js";
import { LazyIgnoreService, init_ignore_service } from "../ignore-service.js";
import { AgentSkill, init_agent_skills_pb } from "../../../../proto/dist/generated/agent/v1/agent_skills_pb.js";
import { init_cursor_rules_pb } from "../../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_gray_matter } from "../../../../utils/dist/gray-matter.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var import_promises18, import_node_os12, import_node_path40, import_node_util6, __addDisposableResource18, __disposeResources18, rulesLogger, MAX_RULE_OR_SKILL_DESCRIPTION_LENGTH, AGENT_STORE_SKILLS_WALK_TIMEOUT_MS, rulesDiscoveryRespectsCursorIgnore, skillsLog, AGENT_STORE_SEED_WAIT_MS, MergedCursorRulesService, LocalCursorRulesService, AgentSkillsCursorRulesService, PLUGIN_LOAD_WAIT_MS, CursorPluginsAgentSkillsService;
export { AGENT_STORE_SEED_WAIT_MS, AGENT_STORE_SKILLS_WALK_TIMEOUT_MS, AgentSkillsCursorRulesService, CursorPluginsAgentSkillsService, LocalCursorRulesService, MAX_RULE_OR_SKILL_DESCRIPTION_LENGTH, MergedCursorRulesService, PLUGIN_LOAD_WAIT_MS, __addDisposableResource18, __disposeResources18, import_node_os12, import_node_path40, import_node_util6, import_promises18, rulesDiscoveryRespectsCursorIgnore, rulesLogger, skillsLog };
var __wakaru_init_cursor_rules_service_initialized = false;
export function init_cursor_rules_service() {
if (__wakaru_init_cursor_rules_service_initialized) return;
__wakaru_init_cursor_rules_service_initialized = true;
"use strict";
import_promises18 = require("node:fs/promises");
import_node_os12 = require("node:os");
import_node_path40 = require("node:path");
import_node_util6 = require("node:util");
init_dist8();
init_dist();
init_dist14();
init_agent_skills_pb();
init_cursor_rules_pb();
init_dist3();
init_gray_matter();
init_common3();
init_ripwalk_cache();
init_common4();
init_ignore_service();
init_agent_skills_catalog_cache();
init_nested_extensibility();
init_recursive_file_discovery();
init_skill_dedupe();
init_skill_discovery();
__addDisposableResource18 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources18 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
rulesLogger = createLogger("local-exec:cursor-rules");
MAX_RULE_OR_SKILL_DESCRIPTION_LENGTH = 1536;
AGENT_STORE_SKILLS_WALK_TIMEOUT_MS = 3e4;
rulesDiscoveryRespectsCursorIgnore = false;
skillsLog = (0, import_node_util6.debuglog)("cursor-rules-service");
AGENT_STORE_SEED_WAIT_MS = 250;
MergedCursorRulesService = class _MergedCursorRulesService {
    constructor(cursorRulesServices, getAgentStoreSkillsContext){
        this.cursorRulesServices = cursorRulesServices;
        this.getAgentStoreSkillsContext = getAgentStoreSkillsContext;
        this.onChangeCallbacks = new Set();
    }
    async getAllCursorRules(ctx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_1, createSpan(ctx.withName("MergedCursorRulesService.getAllCursorRules")), false);
            const allRulesPromises = this.cursorRulesServices.map((service)=>service.getAllCursorRules(span.ctx).catch((err)=>{
                    (0, import_node_util6.debuglog)("Failed to load cursor rules from service:", err);
                    return [];
                }));
            const allRulesArrays = await Promise.all(allRulesPromises);
            const allRules = allRulesArrays.flat();
            return dedupePreferringAgentStore(allRules, this.getAgentStoreSkillsContext());
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources18(env_1);
        }
    }
    reload(ctx) {
        for (const service of this.cursorRulesServices){
            service.reload(ctx);
        }
    }
    scheduleDidChangeRules() {
        if (this.changeTimer !== void 0) {
            return;
        }
        this.changeTimer = setTimeout(()=>{
            this.changeTimer = void 0;
            for (const callback of Array.from(this.onChangeCallbacks)){
                callback();
            }
        }, _MergedCursorRulesService.CHANGE_COALESCE_MS);
    }
    ensureChangeListenersRegistered() {
        if (this.disposeChangeListeners !== void 0) {
            return;
        }
        this.disposeChangeListeners = this.cursorRulesServices.map((service)=>service.onDidChangeRules(()=>this.scheduleDidChangeRules()));
    }
    disposeChangeListenersIfUnused() {
        if (this.onChangeCallbacks.size > 0 || this.disposeChangeListeners === void 0) {
            return;
        }
        for (const dispose2 of this.disposeChangeListeners){
            dispose2();
        }
        this.disposeChangeListeners = void 0;
        if (this.changeTimer !== void 0) {
            clearTimeout(this.changeTimer);
            this.changeTimer = void 0;
        }
    }
    onDidChangeRules(callback) {
        this.onChangeCallbacks.add(callback);
        this.ensureChangeListenersRegistered();
        return ()=>{
            this.onChangeCallbacks.delete(callback);
            this.disposeChangeListenersIfUnused();
        };
    }
    dispose() {
        if (this.changeTimer !== void 0) {
            clearTimeout(this.changeTimer);
            this.changeTimer = void 0;
        }
        this.onChangeCallbacks.clear();
        if (this.disposeChangeListeners !== void 0) {
            for (const dispose2 of this.disposeChangeListeners){
                dispose2();
            }
            this.disposeChangeListeners = void 0;
        }
        for (const service of this.cursorRulesServices){
            if (service.dispose) {
                service.dispose();
            }
        }
    }
};
MergedCursorRulesService.CHANGE_COALESCE_MS = 1e3;
LocalCursorRulesService = class _LocalCursorRulesService {
    constructor(ctx, gitExecutor, rootDirectory, loadNestedRules, getThirdPartyExtensibilityEnabled, fileWatcher, ignoreService, initialNestedExtensibilityResult){
        this.gitExecutor = gitExecutor;
        this.rootDirectory = rootDirectory;
        this.loadNestedRules = loadNestedRules;
        this.getThirdPartyExtensibilityEnabled = getThirdPartyExtensibilityEnabled;
        this.loadTraceId = void 0;
        this.onChangeCallbacks = new Set();
        this.nestedExtensibilityService = new NestedExtensibilityService(rootDirectory, gitExecutor, (0, import_node_os12.homedir)(), getThirdPartyExtensibilityEnabled);
        this.ignoreService = ignoreService ?? new LazyIgnoreService(gitExecutor, void 0, [
            this.rootDirectory
        ]);
        const loadStartMs = performance.now();
        this._rules = this.load(ctx, initialNestedExtensibilityResult).then((rules)=>{
            try {
                rulesLogger.info(ctx, "LocalCursorRulesService load completed", {
                    durationMs: Math.round(performance.now() - loadStartMs),
                    ruleCount: rules.length
                });
            } catch  {}
            return rules;
        }).catch((err)=>{
            (0, import_node_util6.debuglog)("Failed to load cursor rules:", err);
            return [];
        });
        if (fileWatcher) {
            const patterns = [
                ".cursor/rules/**/*.mdc",
                "AGENTS.md",
                "CLAUDE.md",
                "CLAUDE.local.md",
                ".cursorrules",
                ".cursorignore"
            ];
            this.unsubscribeWatcher = fileWatcher.subscribe(this.rootDirectory, patterns, (path64)=>{
                const env_2 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const reloadCtx = createContext();
                    const span = __addDisposableResource18(env_2, createSpan(reloadCtx.withName("LocalCursorRulesService.fileWatcher.subscribe")), false);
                    if ((0, import_node_path40.basename)(path64) === ".cursorignore") {
                        _LocalCursorRulesService.getRipwalkCache().clear();
                        this.reload(span.ctx);
                        return;
                    }
                    this.reloadAtPath(span.ctx, path64);
                } catch (e_2) {
                    env_2.error = e_2;
                    env_2.hasError = true;
                } finally{
                    __disposeResources18(env_2);
                }
            });
        }
    }
    reload(ctx) {
        this._rules = this.load(ctx).catch((err)=>{
            (0, import_node_util6.debuglog)("Failed to load cursor rules:", err);
            return [];
        });
        for (const callback of this.onChangeCallbacks){
            callback();
        }
    }
    static getRipwalkCache() {
        _LocalCursorRulesService.ripwalkCache ??= new RipwalkTtlCache();
        return _LocalCursorRulesService.ripwalkCache;
    }
    reloadAtPath(ctx, path64) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_3, createSpan(ctx.withName("LocalCursorRulesService.reloadAtPath")), false);
            const previousRules = this._rules;
            this._rules = (async ()=>{
                const previousRulesAtOtherPaths = (await previousRules).filter((r)=>r.fullPath !== path64);
                if (rulesDiscoveryRespectsCursorIgnore && path64.endsWith(".mdc") && await this.isCursorIgnored(path64)) {
                    return previousRulesAtOtherPaths;
                }
                const rulesAtPath = (await this.readRulesAtPath(span.ctx, path64)).map((r)=>this.toCursorRule(r));
                return [
                    ...previousRulesAtOtherPaths,
                    ...rulesAtPath
                ];
            })().catch((err)=>{
                (0, import_node_util6.debuglog)("Failed to load cursor rules at path:", err);
                return [];
            });
            for (const callback of this.onChangeCallbacks){
                callback();
            }
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources18(env_3);
        }
    }
    isRuleMarkdownFile(filename) {
        return filename === "CLAUDE.md" || filename === "CLAUDE.local.md" || filename === "AGENTS.md";
    }
    async readRulesAtPath(ctx, path64) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_4, createSpan(ctx.withName("LocalCursorRulesService.readRulesAtPath")), false);
            const filename = (0, import_node_path40.basename)(path64);
            if (filename === ".cursorrules") {
                const cwd = (0, import_node_path40.resolve)(this.rootDirectory);
                const gitRoot = await findGitRoot(span.ctx, this.gitExecutor, cwd);
                const workspaceRoot = gitRoot || cwd;
                const cursorRulesRule = await this.loadCursorRulesRule(span.ctx, workspaceRoot);
                return cursorRulesRule ? [
                    cursorRulesRule
                ] : [];
            } else if (filename.endsWith(".mdc")) {
                try {
                    const content = await readText(path64);
                    const parsed = parseCursorRulesMdcContent(content);
                    if (parsed) {
                        return [
                            {
                                filename: (0, import_node_path40.basename)(path64, ".mdc"),
                                path: path64,
                                frontmatter: parsed.frontmatter,
                                rawFrontmatter: parsed.rawFrontmatter,
                                body: parsed.body
                            }
                        ];
                    }
                } catch  {}
            } else if (this.isRuleMarkdownFile(filename)) {
                try {
                    return await this.loadRulesFromMarkdownFile(span.ctx, (0, import_node_path40.dirname)(path64), filename);
                } catch  {}
            }
            return [];
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources18(env_4);
        }
    }
    onDidChangeRules(callback) {
        this.onChangeCallbacks.add(callback);
        return ()=>{
            this.onChangeCallbacks.delete(callback);
        };
    }
    dispose() {
        if (this.unsubscribeWatcher) {
            this.unsubscribeWatcher();
            this.unsubscribeWatcher = void 0;
        }
    }
    async load(ctx, initialNestedExtensibilityResult) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_5, createSpan(ctx.withName("LocalCursorRulesService.load")), false);
            this.loadTraceId = span.span.spanContext().traceId;
            const cwd = (0, import_node_path40.resolve)(this.rootDirectory);
            const gitRoot = await findGitRoot(span.ctx, this.gitExecutor, cwd);
            const workspaceRoot = gitRoot || cwd;
            const cursorRulesRule = this.loadCursorRulesRule(span.ctx, workspaceRoot).then((r)=>r ? [
                    r
                ] : []);
            const hierarchical = this.loadRulesFromDirAndAncestors(span.ctx, cwd);
            let fromSubdirectories;
            let markdownFilesFromSubdirectories;
            if (this.loadNestedRules) {
                const discovered = initialNestedExtensibilityResult ?? this.nestedExtensibilityService.discover(span.ctx);
                fromSubdirectories = discovered.then((d)=>this.parseNestedRuleFiles(span.ctx, d.rules));
                markdownFilesFromSubdirectories = discovered.then((d)=>this.parseNestedMarkdownFiles(span.ctx, d.markdown));
            } else {
                fromSubdirectories = [];
                markdownFilesFromSubdirectories = [];
            }
            const allRules = (await Promise.all([
                cursorRulesRule,
                hierarchical,
                fromSubdirectories,
                markdownFilesFromSubdirectories
            ])).flat();
            const map4 = new Map();
            for (const r of allRules){
                map4.set(r.path, r);
            }
            return [
                ...map4.values()
            ].map((pr2)=>this.toCursorRule(pr2));
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources18(env_5);
        }
    }
    async loadCursorRulesRule(ctx, workspaceRoot) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource18(env_6, createSpan(ctx.withName("LocalCursorRulesService.loadCursorrules")), false);
            try {
                const cursorRulesPath = (0, import_node_path40.join)(workspaceRoot, ".cursorrules");
                const st2 = await (0, import_promises18.stat)(cursorRulesPath);
                if (st2.isFile()) {
                    const content = await readText(cursorRulesPath);
                    return {
                        filename: ".cursorrules",
                        path: cursorRulesPath,
                        frontmatter: {
                            alwaysApply: true
                        },
                        body: content
                    };
                }
            } catch  {}
            return null;
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources18(env_6);
        }
    }
    async getAllCursorRules(ctx) {
        const env_7 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_7, createSpan(ctx.withName("LocalCursorRulesService.getAllCursorRules")), false);
            span.span.setAttribute("cacheTraceId", this.loadTraceId ?? "undefined");
            return await this._rules;
        } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        } finally{
            __disposeResources18(env_7);
        }
    }
    toCursorRule(rule) {
        return cursorRuleFromParsedMdc({
            path: rule.path,
            body: rule.body,
            frontmatter: rule.frontmatter,
            rawFrontmatter: rule.rawFrontmatter
        });
    }
    async loadRulesFromDirAndAncestors(ctx, startPath) {
        const env_8 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_8, createSpan(ctx.withName("LocalCursorRulesService.loadRulesFromDirAndAncestors")), false);
            const rulePromises = [];
            let currentPath = startPath;
            const thirdPartyExtensibilityEnabled = this.getThirdPartyExtensibilityEnabled();
            while(true){
                const rulesDir = (0, import_node_path40.join)(currentPath, ".cursor", "rules");
                const baseDir = currentPath;
                rulePromises.push((async ()=>{
                    if (await this.dirIsDirectory(span.ctx, rulesDir)) {
                        return this.loadRulesFromDirectory(span.ctx, baseDir);
                    }
                    return [];
                })());
                const files = [];
                if (thirdPartyExtensibilityEnabled) {
                    files.push("CLAUDE.md", "CLAUDE.local.md");
                }
                files.push("AGENTS.md");
                for (const file of files){
                    rulePromises.push(this.loadRulesFromMarkdownFile(span.ctx, currentPath, file));
                }
                const parentPath = (0, import_node_path40.dirname)(currentPath);
                if (parentPath === currentPath) break;
                currentPath = parentPath;
            }
            const rules = (await Promise.all(rulePromises)).flat();
            span.span.setAttribute("rules", rules.length);
            return rules;
        } catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
        } finally{
            __disposeResources18(env_8);
        }
    }
    async loadRulesFromMarkdownFile(ctx, currentPath, filename) {
        const env_9 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_9, createSpan(ctx.withName("LocalCursorRulesService.loadRulesFromMarkdownFile")), false);
            span.span.setAttribute("filename", filename);
            try {
                const path64 = (0, import_node_path40.join)(currentPath, filename);
                if (await this.isCursorIgnored(path64)) {
                    return [];
                }
                const st2 = await (0, import_promises18.stat)(path64);
                if (st2.isFile()) {
                    const content = await readText(path64);
                    return [
                        {
                            filename: (0, import_node_path40.basename)(path64, ".md"),
                            path: path64,
                            frontmatter: {
                                alwaysApply: true
                            },
                            body: content
                        }
                    ];
                }
            } catch  {}
            return [];
        } catch (e_9) {
            env_9.error = e_9;
            env_9.hasError = true;
        } finally{
            __disposeResources18(env_9);
        }
    }
    async isCursorIgnored(path64) {
        try {
            const resolved = await resolvePathForIgnoreService((0, import_node_path40.resolve)(this.rootDirectory, path64));
            if (resolved === null) {
                return true;
            }
            return await this.ignoreService.isCursorIgnored(resolved);
        } catch  {
            return false;
        }
    }
    async parseNestedRuleFiles(ctx, paths) {
        const env_10 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_10, createSpan(ctx.withName("LocalCursorRulesService.parseNestedRuleFiles")), false);
            const results = await Promise.all(paths.map(async (path64)=>{
                try {
                    const content = await readText(path64);
                    const parsed = parseCursorRulesMdcContent(content);
                    if (parsed) {
                        return {
                            filename: (0, import_node_path40.basename)(path64, ".mdc"),
                            path: path64,
                            frontmatter: parsed.frontmatter,
                            rawFrontmatter: parsed.rawFrontmatter,
                            body: parsed.body
                        };
                    }
                } catch  {}
                return void 0;
            }));
            const acc = results.filter((r)=>r !== void 0);
            span.span.setAttribute("ruleFiles", acc.length);
            return acc;
        } catch (e_10) {
            env_10.error = e_10;
            env_10.hasError = true;
        } finally{
            __disposeResources18(env_10);
        }
    }
    async parseNestedMarkdownFiles(ctx, paths) {
        const env_11 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_11, createSpan(ctx.withName("LocalCursorRulesService.parseNestedMarkdownFiles")), false);
            const results = await Promise.all(paths.map(async (path64)=>{
                try {
                    const filename = (0, import_node_path40.basename)(path64);
                    if (!this.isRuleMarkdownFile(filename)) {
                        return [];
                    }
                    const dirPath = (0, import_node_path40.dirname)(path64);
                    return await this.loadRulesFromMarkdownFile(span.ctx, dirPath, filename);
                } catch  {}
                return [];
            }));
            const acc = results.flat();
            span.span.setAttribute("markdownFiles", acc.length);
            return acc;
        } catch (e_11) {
            env_11.error = e_11;
            env_11.hasError = true;
        } finally{
            __disposeResources18(env_11);
        }
    }
    async loadRulesFromDirectory(ctx, baseDir) {
        const env_12 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_12, createSpan(ctx.withName("LocalCursorRulesService.loadRulesFromDirectory")), false);
            const rules = [];
            try {
                const cursorIgnoreFile = (0, import_node_path40.join)(baseDir, ".cursorignore");
                const cursorIgnoreFiles = rulesDiscoveryRespectsCursorIgnore ? await (0, import_promises18.stat)(cursorIgnoreFile).then((st2)=>st2.isFile() ? [
                        cursorIgnoreFile
                    ] : [], ()=>[]) : [];
                const ripwalkOptions = rulesDiscoveryRespectsCursorIgnore ? {
                    root: baseDir,
                    searchPaths: [
                        (0, import_node_path40.join)(".cursor", "rules")
                    ],
                    includeGlobs: [
                        "**/*.mdc"
                    ],
                    cursorIgnoreFiles,
                    followSymlinks: true,
                    source: "cursor_rules"
                } : {
                    root: (0, import_node_path40.join)(baseDir, ".cursor", "rules"),
                    includeGlobs: [
                        "**/*.mdc"
                    ],
                    followSymlinks: true,
                    source: "cursor_rules"
                };
                const ripwalkResult = _LocalCursorRulesService.getRipwalkCache().walk(span.ctx, ripwalkOptions);
                for await (const relativePath2 of ripwalkResult.lines){
                    const fullPath = (0, import_node_path40.join)(ripwalkOptions.root, relativePath2);
                    rules.push(...await this.readRulesAtPath(span.ctx, fullPath));
                }
            } catch  {}
            span.span.setAttribute("rules", rules.length);
            return rules;
        } catch (e_12) {
            env_12.error = e_12;
            env_12.hasError = true;
        } finally{
            __disposeResources18(env_12);
        }
    }
    async dirIsDirectory(ctx, path64) {
        const env_13 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource18(env_13, createSpan(ctx.withName("LocalCursorRulesService.dirIsDirectory")), false);
            try {
                const st2 = await (0, import_promises18.stat)(path64);
                return st2.isDirectory();
            } catch  {
                return false;
            }
        } catch (e_13) {
            env_13.error = e_13;
            env_13.hasError = true;
        } finally{
            __disposeResources18(env_13);
        }
    }
};
AgentSkillsCursorRulesService = class {
    constructor(ctx, workspacePaths, userHomeDirectory, gitExecutor, loadNestedSkills, fileWatcher, getThirdPartyExtensibilityEnabled = ()=>true, initialBuiltinSkillsSyncPromise = Promise.resolve(), surface = "ide", initialNestedExtensibilityResults, getAgentStoreSkillRoots = ()=>[], catalogCache){
        this.workspacePaths = workspacePaths;
        this.userHomeDirectory = userHomeDirectory;
        this.gitExecutor = gitExecutor;
        this.initialBuiltinSkillsSyncPromise = initialBuiltinSkillsSyncPromise;
        this.agentStoreLoadInFlight = false;
        this.agentStoreLoadRequestedWhileInFlight = false;
        this.agentStoreLoadGeneration = 0;
        this.watchersByFolder = new Map();
        this.onChangeCallbacks = new Set();
        this.reloadRequestedDuringSeed = false;
        this.surface = surface;
        this.getAgentStoreSkillRoots = getAgentStoreSkillRoots;
        this.fileWatcher = fileWatcher;
        this.getThirdPartyExtensibilityEnabled = getThirdPartyExtensibilityEnabled;
        this.catalogCache = catalogCache;
        this.workspaceCatalogKey = agentSkillsCatalogCacheKey({
            kind: "workspace",
            surface,
            loadNestedSkills,
            thirdPartyExtensibility: getThirdPartyExtensibilityEnabled(),
            workspacePaths: [
                ...workspacePaths
            ].sort(),
            userHomeDirectory
        });
        if (initialNestedExtensibilityResults !== void 0 && initialNestedExtensibilityResults.length !== workspacePaths.length) {
            throw new Error(`initialNestedExtensibilityResults length (${initialNestedExtensibilityResults.length}) must match workspacePaths length (${workspacePaths.length})`);
        }
        this.nestedExtensibilityEntries = loadNestedSkills ? workspacePaths.map((workspacePath)=>new NestedExtensibilityService(workspacePath, gitExecutor, userHomeDirectory, getThirdPartyExtensibilityEnabled)) : [];
        this.foldersToWatch = this.computeFoldersToWatch();
        const loadStartMs = performance.now();
        let servedFromCache = false;
        let walkFailed = false;
        let snapshotReadSettled = false;
        const loaded = this.loadAll(ctx, initialNestedExtensibilityResults).then((result)=>{
            try {
                rulesLogger.info(ctx, "AgentSkillsCursorRulesService load completed", {
                    durationMs: Math.round(performance.now() - loadStartMs),
                    ruleCount: result.rules.length,
                    skillCount: result.agentSkills.length,
                    servedFromCache
                });
            } catch  {}
            return result;
        }).catch((error3)=>{
            walkFailed = true;
            return orEmptyCatalog("Failed to load Agent Skills")(error3);
        });
        if (this.catalogCache === void 0) {
            this._loaded = loaded;
        } else {
            const seeded = this.readCatalog(this.workspaceCatalogKey).then((cached2)=>{
                snapshotReadSettled = true;
                if (this._loaded !== seeded) {
                    return this._loaded;
                }
                if (walkFailed) {
                    this.closeSeedWindow(ctx);
                }
                if (cached2 === void 0) {
                    return loaded;
                }
                servedFromCache = true;
                return cached2;
            });
            this.seededLoaded = seeded;
            this._loaded = seeded;
            void loaded.then((result)=>{
                if (this._loaded !== seeded) {
                    this.seededLoaded = void 0;
                    return;
                }
                if (walkFailed) {
                    if (snapshotReadSettled) {
                        this.closeSeedWindow(ctx);
                    }
                    return;
                }
                this._loaded = loaded;
                if (servedFromCache) {
                    this.notifyChanged();
                }
                this.persistCatalog(this.workspaceCatalogKey, result);
                this.closeSeedWindow(ctx);
            });
        }
        this.refreshAgentStoreSkills();
        this.setupWatchers(this.foldersToWatch);
    }
    closeSeedWindow(ctx) {
        this.seededLoaded = void 0;
        if (this.reloadRequestedDuringSeed) {
            this.reloadRequestedDuringSeed = false;
            this.reload(ctx);
        }
    }
    async readCatalog(key) {
        if (this.catalogCache === void 0) {
            return void 0;
        }
        try {
            const snapshot = await this.catalogCache.read(key);
            return snapshot === void 0 ? void 0 : await restoreAgentSkillsCatalogSnapshot(snapshot);
        } catch (error3) {
            skillsLog("Failed to read the skills catalog cache: %O", error3);
            return void 0;
        }
    }
    persistCatalog(key, result) {
        const cache2 = this.catalogCache;
        if (cache2 === void 0) {
            return;
        }
        void buildAgentSkillsCatalogSnapshot(result).then((snapshot)=>cache2.write(key, snapshot)).catch((error3)=>{
            skillsLog("Failed to persist the skills catalog cache: %O", error3);
        });
    }
    computeFoldersToWatch() {
        const thirdPartyExtensibilityEnabled = this.getThirdPartyExtensibilityEnabled();
        const folders = new Set();
        for (const workspacePath of this.workspacePaths){
            folders.add((0, import_node_path40.join)(workspacePath, ".cursor", "rules"));
            for (const root of getProjectExtensibilitySkillRoots(workspacePath, thirdPartyExtensibilityEnabled)){
                folders.add(root.dirPath);
            }
        }
        for (const root of getUserExtensibilitySkillRoots(this.userHomeDirectory, thirdPartyExtensibilityEnabled)){
            folders.add(root.dirPath);
        }
        for (const storeSkillsDir of this.getAgentStoreSkillRoots()){
            folders.add(storeSkillsDir);
        }
        folders.add(getBuiltinExtensibilitySkillRoot(this.userHomeDirectory).dirPath);
        return Array.from(folders);
    }
    setupWatchers(folders) {
        if (!this.fileWatcher) return;
        const skillsPatterns = [
            "**"
        ];
        for (const folder of folders){
            if (this.watchersByFolder.has(folder)) continue;
            const unsubscribe = this.fileWatcher.subscribe(folder, skillsPatterns, (path64)=>{
                const env_14 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const reloadCtx = createContext();
                    const span = __addDisposableResource18(env_14, createSpan(reloadCtx.withName("AgentSkillsCursorRulesService.fileWatcher.subscribe")), false);
                    this.reloadAtPath(span.ctx, path64);
                } catch (e_14) {
                    env_14.error = e_14;
                    env_14.hasError = true;
                } finally{
                    __disposeResources18(env_14);
                }
            });
            this.watchersByFolder.set(folder, unsubscribe);
        }
    }
    removeWatchers(folders) {
        for (const folder of folders){
            const unsubscribe = this.watchersByFolder.get(folder);
            if (unsubscribe) {
                unsubscribe();
                this.watchersByFolder.delete(folder);
            }
        }
    }
    async getAllCursorRules(_ctx) {
        const [loaded] = await Promise.all([
            this._loaded,
            this.awaitAgentStoreSeed()
        ]);
        return this.withAgentStoreSkills(loaded).rules;
    }
    async awaitAgentStoreSeed() {
        if (this.agentStoreSeedInFlight === void 0) {
            return;
        }
        await withTimeout(this.agentStoreSeedInFlight, AGENT_STORE_SEED_WAIT_MS, "Agent Store skills cache read timed out").catch(()=>void 0);
    }
    reload(ctx) {
        this.syncWatchers();
        this.seededLoaded = void 0;
        this.reloadRequestedDuringSeed = false;
        const walk2 = this.loadAll(ctx);
        const reloaded = walk2.catch(orEmptyCatalog("Failed to load Agent Skills"));
        this._loaded = reloaded;
        void walk2.then((result)=>{
            if (this._loaded === reloaded) {
                this.persistCatalog(this.workspaceCatalogKey, result);
            }
        }, ()=>void 0);
        this.refreshAgentStoreSkills();
        this.notifyChanged();
    }
    reloadSkillRoots() {
        try {
            this.syncWatchers();
        } finally{
            this.refreshAgentStoreSkills();
        }
    }
    syncWatchers() {
        const newFoldersToWatch = this.computeFoldersToWatch();
        const oldFoldersSet = new Set(this.foldersToWatch);
        const newFoldersSet = new Set(newFoldersToWatch);
        this.removeWatchers(this.foldersToWatch.filter((f2)=>!newFoldersSet.has(f2)));
        this.setupWatchers(newFoldersToWatch.filter((f2)=>!oldFoldersSet.has(f2)));
        this.foldersToWatch = newFoldersToWatch;
    }
    isPrunedByExtensibilityScan(skillFilePath) {
        const normalizedPath = skillFilePath.replace(/\\/g, "/");
        for (const folder of this.foldersToWatch){
            const root = folder.replace(/\\/g, "/");
            if (!normalizedPath.startsWith(`${root}/`)) {
                continue;
            }
            return normalizedPath.slice(root.length + 1).split("/").slice(0, -1).some((segment)=>segment.startsWith("."));
        }
        return false;
    }
    reloadAtPath(ctx, path64) {
        const env_15 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_15, createSpan(ctx.withName("AgentSkillsCursorRulesService.reloadAtPath")), false);
            const pathWithSkillMd = path64.endsWith("SKILL.md") ? path64 : (0, import_node_path40.join)(path64, "SKILL.md");
            if (this.seededLoaded !== void 0 && this._loaded === this.seededLoaded && !this.getAgentStoreSkillRoots().some((root)=>isUnderSkillRoot(pathWithSkillMd, root))) {
                this.reloadRequestedDuringSeed = true;
                return;
            }
            if (this.getAgentStoreSkillRoots().some((root)=>isUnderSkillRoot(pathWithSkillMd, root))) {
                this.refreshAgentStoreSkills();
                return;
            }
            if (this.foldersToWatch.some((folder)=>(0, import_node_path40.relative)(folder, path64) === "")) {
                this.reload(span.ctx);
                return;
            }
            const previousLoaded = this._loaded;
            const reloaded = (async ()=>{
                const previous = await previousLoaded;
                const { realSkillFilePathsByFullPath } = previous;
                const withoutPath = cloneLoadedWithoutPaths(previous, new Set([
                    pathWithSkillMd
                ]));
                if (shouldIgnoreExtensibilitySkillPath(pathWithSkillMd) || this.isPrunedByExtensibilityScan(pathWithSkillMd)) {
                    return withoutPath;
                }
                const previousRealSkillFilePath = realSkillFilePathsByFullPath.get(pathWithSkillMd);
                if (previousRealSkillFilePath === void 0) {
                    try {
                        await (0, import_promises18.stat)(pathWithSkillMd);
                    } catch  {
                        return withoutPath;
                    }
                    return await this.loadAll(span.ctx);
                }
                let currentRealSkillFilePath;
                try {
                    currentRealSkillFilePath = await (0, import_promises18.realpath)(pathWithSkillMd);
                } catch  {
                    return await this.loadAll(span.ctx);
                }
                if (currentRealSkillFilePath !== previousRealSkillFilePath) {
                    return await this.loadAll(span.ctx);
                }
                try {
                    const parsed = await readAndParseSkillFile(pathWithSkillMd);
                    applyParsedSkillToLoaded(withoutPath, {
                        ...parsed,
                        realSkillFilePath: currentRealSkillFilePath
                    }, this.surface);
                    return withoutPath;
                } catch  {
                    return await this.loadAll(span.ctx);
                }
            })().catch(orEmptyCatalog("Failed to load Agent Skills at path"));
            this._loaded = reloaded;
            this.notifyChanged();
        } catch (e_15) {
            env_15.error = e_15;
            env_15.hasError = true;
        } finally{
            __disposeResources18(env_15);
        }
    }
    async getAllAgentSkills(_ctx) {
        const [loaded] = await Promise.all([
            this._loaded,
            this.awaitAgentStoreSeed()
        ]);
        return this.withAgentStoreSkills(loaded).agentSkills;
    }
    withAgentStoreSkills(loaded) {
        const storeSkills = this.settledAgentStoreSkills?.loaded;
        if (storeSkills === void 0 || storeSkills.realSkillFilePathsByFullPath.size === 0) {
            return loaded;
        }
        const loadedRealPaths = new Set(loaded.realSkillFilePathsByFullPath.values());
        const merged = {
            rules: [
                ...loaded.rules
            ],
            agentSkills: [
                ...loaded.agentSkills
            ],
            realSkillFilePathsByFullPath: new Map(loaded.realSkillFilePathsByFullPath)
        };
        const alreadyCataloged = new Set();
        for (const [fullPath, realPath] of storeSkills.realSkillFilePathsByFullPath){
            if (merged.realSkillFilePathsByFullPath.has(fullPath) || loadedRealPaths.has(realPath)) {
                alreadyCataloged.add(fullPath);
                continue;
            }
            merged.realSkillFilePathsByFullPath.set(fullPath, realPath);
        }
        for (const rule of storeSkills.rules){
            if (!alreadyCataloged.has(rule.fullPath)) {
                merged.rules.push(rule);
            }
        }
        for (const skill of storeSkills.agentSkills){
            if (!alreadyCataloged.has(skill.fullPath)) {
                merged.agentSkills.push(skill);
            }
        }
        return merged;
    }
    refreshAgentStoreSkills() {
        const roots = this.getAgentStoreSkillRoots().filter((root)=>root.trim() !== "");
        const generation = ++this.agentStoreLoadGeneration;
        if (this.settledAgentStoreSkills !== void 0 && !haveSameRoots(this.settledAgentStoreSkills.roots, roots)) {
            this.settledAgentStoreSkills = void 0;
            this.notifyChanged();
        }
        if (roots.length === 0) {
            return;
        }
        if (this.settledAgentStoreSkills === void 0) {
            const seed = this.seedAgentStoreSkills(roots, generation).finally(()=>{
                if (this.agentStoreSeedInFlight === seed) {
                    this.agentStoreSeedInFlight = void 0;
                }
            });
            this.agentStoreSeedInFlight = seed;
        }
        if (this.agentStoreLoadInFlight) {
            this.agentStoreLoadRequestedWhileInFlight = true;
            return;
        }
        this.agentStoreLoadInFlight = true;
        void withTimeout(this.loadAgentStoreSkills(roots), AGENT_STORE_SKILLS_WALK_TIMEOUT_MS, "Agent Store skills walk timed out").then((loaded)=>{
            if (generation !== this.agentStoreLoadGeneration) {
                return;
            }
            this.settledAgentStoreSkills = {
                roots,
                loaded
            };
            this.notifyChanged();
            if (loaded.rules.length > 0 || loaded.agentSkills.length > 0) {
                this.persistCatalog(agentStoreCatalogKey(this.surface, roots), loaded);
            }
        }, (error3)=>{
            skillsLog("Failed to load Agent Store skills: %O", error3);
        }).finally(()=>{
            this.agentStoreLoadInFlight = false;
            if (this.agentStoreLoadRequestedWhileInFlight) {
                this.agentStoreLoadRequestedWhileInFlight = false;
                this.refreshAgentStoreSkills();
            }
        });
    }
    async seedAgentStoreSkills(roots, generation) {
        const cached2 = await this.readCatalog(agentStoreCatalogKey(this.surface, roots));
        if (cached2 === void 0 || generation !== this.agentStoreLoadGeneration || this.settledAgentStoreSkills !== void 0) {
            return;
        }
        this.settledAgentStoreSkills = {
            roots,
            loaded: cached2
        };
        this.notifyChanged();
    }
    async loadAgentStoreSkills(roots) {
        const loaded = emptyAgentSkillsLoadResult();
        const discovered = (await Promise.all(roots.map((root)=>findSkillMdFilesRecursive(root)))).flat().filter((skillFilePath)=>!shouldIgnoreExtensibilitySkillPath(skillFilePath));
        const parsedFiles = await Promise.all(discovered.map((skillFilePath)=>readAndParseSkillFileWithRealPath(skillFilePath)));
        const seenRealPaths = new Set();
        for (const result of parsedFiles){
            if (seenRealPaths.has(result.realSkillFilePath)) {
                continue;
            }
            seenRealPaths.add(result.realSkillFilePath);
            applyParsedSkillToLoaded(loaded, result, this.surface);
        }
        return loaded;
    }
    notifyChanged() {
        for (const callback of Array.from(this.onChangeCallbacks)){
            callback();
        }
    }
    onDidChangeSkills(callback) {
        return this.onDidChangeRules(callback);
    }
    onDidChangeRules(callback) {
        this.onChangeCallbacks.add(callback);
        return ()=>{
            this.onChangeCallbacks.delete(callback);
        };
    }
    dispose() {
        for (const unsubscribe of this.watchersByFolder.values()){
            unsubscribe();
        }
        this.watchersByFolder.clear();
    }
    async loadAll(ctx, initialNestedExtensibilityResults) {
        const env_16 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_16, createSpan(ctx.withName("AgentSkillsCursorRulesService.loadAll")), false);
            await this.initialBuiltinSkillsSyncPromise;
            const rules = [];
            const agentSkills = [];
            const realSkillFilePathsByFullPath = new Map();
            const nestedResultsPromise = Promise.all(this.nestedExtensibilityEntries.map((service, idx)=>(initialNestedExtensibilityResults?.[idx] ?? service.discover(span.ctx)).catch((error3)=>{
                    skillsLog("Failed to discover nested agent skills: %O", error3);
                    return void 0;
                })));
            const storeRoots = new Set(this.getAgentStoreSkillRoots());
            const parsedByFolder = await Promise.all(this.foldersToWatch.filter((skillsDir)=>!storeRoots.has(skillsDir)).map(async (skillsDir)=>{
                const skillFiles = (await findSkillMdFilesRecursive(skillsDir)).filter((skillFilePath)=>!shouldIgnoreExtensibilitySkillPath(skillFilePath));
                return Promise.all(skillFiles.map((skillFilePath)=>readAndParseSkillFileWithRealPath(skillFilePath)));
            }));
            const seenRealPaths = new Set();
            for (const parsedFiles of parsedByFolder){
                for (const result of parsedFiles){
                    if (seenRealPaths.has(result.realSkillFilePath)) {
                        continue;
                    }
                    seenRealPaths.add(result.realSkillFilePath);
                    if ("error" in result) {
                        realSkillFilePathsByFullPath.set(result.skillFilePath, result.realSkillFilePath);
                        addSkillError({
                            rules,
                            agentSkills,
                            skillFilePath: result.skillFilePath,
                            errorMessage: result.error
                        });
                    } else {
                        if (isExcludedBySurface(result.parsed, this.surface)) {
                            continue;
                        }
                        realSkillFilePathsByFullPath.set(result.skillFilePath, result.realSkillFilePath);
                        rules.push(buildCursorRuleFromParsed(result));
                        if (!isAlwaysApplySkillParsed(result.parsed)) {
                            agentSkills.push(buildAgentSkillFromParsed(result));
                        }
                    }
                }
            }
            const nestedResults = await nestedResultsPromise;
            const nestedSkillPaths = nestedResults.flatMap((nested)=>nested?.skills ?? []).filter((skillPath)=>!shouldIgnoreExtensibilitySkillPath(skillPath));
            const nestedRealSkillFilePaths = await Promise.all(nestedSkillPaths.map((skillPath)=>resolveRealPath(skillPath)));
            const dedupedNestedSkillPaths = [];
            for (const [index, skillPath] of nestedSkillPaths.entries()){
                const realSkillFilePath = nestedRealSkillFilePaths[index];
                if (seenRealPaths.has(realSkillFilePath)) {
                    continue;
                }
                seenRealPaths.add(realSkillFilePath);
                dedupedNestedSkillPaths.push(skillPath);
            }
            const parsedNestedFiles = await Promise.all(dedupedNestedSkillPaths.map((skillFilePath)=>readAndParseSkillFileWithRealPath(skillFilePath)));
            for (const result of parsedNestedFiles){
                if ("error" in result) {
                    realSkillFilePathsByFullPath.set(result.skillFilePath, result.realSkillFilePath);
                    addSkillError({
                        rules,
                        agentSkills,
                        skillFilePath: result.skillFilePath,
                        errorMessage: result.error
                    });
                } else {
                    if (isExcludedBySurface(result.parsed, this.surface)) {
                        continue;
                    }
                    realSkillFilePathsByFullPath.set(result.skillFilePath, result.realSkillFilePath);
                    rules.push(buildCursorRuleFromParsed(result));
                    if (!isAlwaysApplySkillParsed(result.parsed)) {
                        agentSkills.push(buildAgentSkillFromParsed(result));
                    }
                }
            }
            span.span.setAttribute("agent_skills.total", rules.length);
            span.span.setAttribute("agent_skills_proto.total", agentSkills.length);
            return {
                rules,
                agentSkills,
                realSkillFilePathsByFullPath
            };
        } catch (e_16) {
            env_16.error = e_16;
            env_16.hasError = true;
        } finally{
            __disposeResources18(env_16);
        }
    }
};
PLUGIN_LOAD_WAIT_MS = 5e3;
CursorPluginsAgentSkillsService = class {
    constructor(ctx, getImportSettings, _fileWatcher, pluginsService){
        this.getImportSettings = getImportSettings;
        this.pluginsService = pluginsService;
        this._rules = Promise.resolve([]);
        this._agentSkills = Promise.resolve([]);
        this._lastLoaded = {
            rules: [],
            agentSkills: []
        };
        this._loadGeneration = 0;
        this.onChangeCallbacks = new Set();
        this.currentImportSettings = this.getImportSettings();
        const loadStartMs = performance.now();
        this.startLoad(ctx, false, (result)=>{
            try {
                rulesLogger.info(ctx, "CursorPluginsAgentSkillsService load completed", {
                    durationMs: Math.round(performance.now() - loadStartMs),
                    ruleCount: result.rules.length,
                    skillCount: result.agentSkills.length
                });
            } catch  {}
        });
    }
    startLoad(ctx, reloadPlugins, onLoaded) {
        const generation = ++this._loadGeneration;
        const loaded = this.loadAll(ctx, reloadPlugins).catch((err)=>{
            const d = (0, import_node_util6.debuglog)("cursor-plugins-agent-skills");
            d("Failed to load Cursor Plugins Agent Skills: %s", err instanceof Error ? err.message : String(err));
            return {
                rules: [],
                agentSkills: []
            };
        }).then((result)=>{
            if (generation === this._loadGeneration) {
                this._lastLoaded = result;
                onLoaded?.(result);
            }
            return result;
        });
        const publishWhenLoaded = ()=>{
            void loaded.then((result)=>{
                if (generation !== this._loadGeneration) {
                    return;
                }
                this._rules = Promise.resolve(result.rules);
                this._agentSkills = Promise.resolve(result.agentSkills);
                this.notifyChange();
            });
            return this._lastLoaded;
        };
        const bounded2 = this._overBudgetLoad !== void 0 ? Promise.resolve(publishWhenLoaded()) : withTimeout(loaded, PLUGIN_LOAD_WAIT_MS, "Cursor plugin load did not finish within the rules wait budget").catch((err)=>{
            rulesLogger.warn(ctx, "Serving rules without plugin primitives while plugins load", {
                error: err instanceof Error ? err.message : String(err),
                waitMs: PLUGIN_LOAD_WAIT_MS
            });
            this._overBudgetLoad = loaded;
            void loaded.then(()=>{
                if (this._overBudgetLoad === loaded) {
                    this._overBudgetLoad = void 0;
                }
            });
            return publishWhenLoaded();
        });
        this._rules = bounded2.then((r)=>r.rules);
        this._agentSkills = bounded2.then((r)=>r.agentSkills);
    }
    notifyChange() {
        for (const callback of Array.from(this.onChangeCallbacks)){
            callback();
        }
    }
    async getAllCursorRules(_ctx) {
        return await this._rules;
    }
    async getAllAgentSkills(_ctx) {
        return await this._agentSkills;
    }
    reload(ctx) {
        const newSettings = this.getImportSettings();
        this.currentImportSettings = newSettings;
        this.startLoad(ctx, true);
        this.notifyChange();
    }
    onDidChangeRules(callback) {
        this.onChangeCallbacks.add(callback);
        return ()=>{
            this.onChangeCallbacks.delete(callback);
        };
    }
    onDidChangeSkills(callback) {
        return this.onDidChangeRules(callback);
    }
    dispose() {
        this.onChangeCallbacks.clear();
    }
    async loadAll(ctx, reloadPlugins = false) {
        const env_17 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource18(env_17, createSpan(ctx.withName("CursorPluginsAgentSkillsService.loadAll")), false);
            const rules = [];
            const agentSkills = [];
            try {
                let plugins = reloadPlugins ? await this.pluginsService.reload() : await this.pluginsService.getAllEnabledPlugins();
                if (!this.currentImportSettings.importThirdPartyPlugins) {
                    plugins = plugins.filter((p2)=>p2.identifier.source !== "claude-plugin");
                }
                span.span.setAttribute("cursor_plugins.loaded", plugins.length);
                const translatedSkills = translatePluginSkillsToCursorRules(plugins);
                const translatedRules = translatePluginRulesToCursorRules(plugins);
                for (const r of [
                    ...translatedSkills,
                    ...translatedRules
                ]){
                    rules.push(mapTranslatedRuleToCursorRule(r));
                }
                for (const plugin of plugins){
                    const pluginOrigin = `plugin:${getPluginIdentifierKey(plugin.identifier)}`;
                    const pluginName = getPluginName(plugin.identifier);
                    const marketplace = getPluginMarketplace(plugin.identifier);
                    const pluginId = getPluginDbId(plugin.identifier);
                    const marketplaceId = getPluginMarketplaceDbId(plugin.identifier);
                    for (const skill of plugin.skills){
                        if (skill.alwaysApply === true) {
                            continue;
                        }
                        let disableModelInvocation = false;
                        if (skill.content?.includes("disable-model-invocation")) {
                            try {
                                disableModelInvocation = grayMatter(skill.content).data?.["disable-model-invocation"] === true;
                            } catch  {}
                        }
                        agentSkills.push(new AgentSkill({
                            fullPath: (0, import_node_path40.join)(plugin.installPath, skill.path),
                            content: skill.content,
                            description: truncateRuleOrSkillDescription(skill.description ?? ""),
                            environments: skill.environments ?? [],
                            disabledEnvironments: skill.disabledEnvironments ?? [],
                            gitRemoteOrigin: pluginOrigin,
                            plugin: pluginName,
                            marketplace,
                            pluginId,
                            marketplaceId,
                            disableModelInvocation
                        }));
                    }
                }
            } catch (err) {
                span.span.setAttribute("cursor_plugins.error", String(err));
            }
            span.span.setAttribute("cursor_plugins.total", rules.length);
            span.span.setAttribute("cursor_plugins_proto.total", agentSkills.length);
            return {
                rules,
                agentSkills
            };
        } catch (e_17) {
            env_17.error = e_17;
            env_17.hasError = true;
        } finally{
            __disposeResources18(env_17);
        }
    }
};

}
