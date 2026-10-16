import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../../context/dist/index.js";
import { getProtectedFoldersUnder } from "../../../../dist_exports.js";
import { classifyPath, escapeRegExp4, findGitRoot } from "../../../../dist_exports2.js";
import { RipwalkTtlCache, init_ripwalk_cache } from "../../ripwalk-cache.js";
import { DEFAULT_GLOB_IGNORE_DIRS, init_common4 } from "../common.js";
import { SKILL_CONFIG_DIRS, init_skill_discovery } from "./skill-discovery.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var import_node_path38, __addDisposableResource17, __disposeResources17, SKILLS_DIR_PATTERNS, RULES_DIR_PATTERN, AGENTS_DIR_PATTERNS, MARKDOWN_FILENAMES, NestedExtensibilityService;
export { AGENTS_DIR_PATTERNS, MARKDOWN_FILENAMES, NestedExtensibilityService, RULES_DIR_PATTERN, SKILLS_DIR_PATTERNS, __addDisposableResource17, __disposeResources17, import_node_path38 };
var __wakaru_init_nested_extensibility_initialized = false;
export function init_nested_extensibility() {
if (__wakaru_init_nested_extensibility_initialized) return;
__wakaru_init_nested_extensibility_initialized = true;
"use strict";
import_node_path38 = require("node:path");
init_dist();
init_dist3();
init_ripwalk_cache();
init_common4();
init_skill_discovery();
__addDisposableResource17 = function(env, value, async) {
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
__disposeResources17 = (function(SuppressedError2) {
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
SKILLS_DIR_PATTERNS = SKILL_CONFIG_DIRS.map(({ configDir, subdir, thirdParty })=>({
        pattern: new RegExp(`[/\\\\]${escapeRegExp4(configDir)}[/\\\\]${escapeRegExp4(subdir)}[/\\\\]`, "i"),
        requiresThirdParty: thirdParty
    }));
RULES_DIR_PATTERN = /[/\\]\.cursor[/\\]rules[/\\]/i;
AGENTS_DIR_PATTERNS = [
    {
        pattern: /[/\\]\.cursor[/\\]agents[/\\]/i,
        requiresThirdParty: false
    },
    {
        pattern: /[/\\]\.claude[/\\]agents[/\\]/i,
        requiresThirdParty: true
    }
];
MARKDOWN_FILENAMES = new Set([
    "AGENTS.md",
    "CLAUDE.md",
    "CLAUDE.local.md"
]);
NestedExtensibilityService = class _NestedExtensibilityService {
    constructor(root, gitExecutor, userHomeDirectory, getThirdPartyExtensibilityEnabled){
        this.root = root;
        this.gitExecutor = gitExecutor;
        this.userHomeDirectory = userHomeDirectory;
        this.getThirdPartyExtensibilityEnabled = getThirdPartyExtensibilityEnabled;
    }
    static getRipwalkCache() {
        _NestedExtensibilityService.ripwalkCache ??= new RipwalkTtlCache();
        return _NestedExtensibilityService.ripwalkCache;
    }
    async discover(ctx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource17(env_1, createSpan(ctx.withName("NestedExtensibilityService.discover")), false);
            const empty = {
                rules: [],
                skills: [],
                markdown: [],
                agents: []
            };
            const root = (0, import_node_path38.resolve)(this.root);
            const home = (0, import_node_path38.resolve)(this.userHomeDirectory);
            if (root === home || getProtectedFoldersUnder(root, {
                platform: process.platform,
                homeDirectory: home
            }).length > 0) {
                span.span.setAttribute("nested_extensibility.rules", 0);
                span.span.setAttribute("nested_extensibility.skills", 0);
                span.span.setAttribute("nested_extensibility.markdown", 0);
                span.span.setAttribute("nested_extensibility.agents", 0);
                return empty;
            }
            const gitRoot = await findGitRoot(ctx, this.gitExecutor, (0, import_node_path38.resolve)(this.root));
            if (!gitRoot) {
                span.span.setAttribute("nested_extensibility.rules", 0);
                span.span.setAttribute("nested_extensibility.skills", 0);
                span.span.setAttribute("nested_extensibility.markdown", 0);
                span.span.setAttribute("nested_extensibility.agents", 0);
                return empty;
            }
            const thirdPartyEnabled = this.getThirdPartyExtensibilityEnabled();
            const includeGlobs = this.buildIncludeGlobs(thirdPartyEnabled);
            const ripwalkOptions = {
                root: this.root,
                includeGlobs,
                excludeGlobs: DEFAULT_GLOB_IGNORE_DIRS,
                followSymlinks: true,
                source: "nested_extensibility"
            };
            const result = {
                rules: [],
                skills: [],
                markdown: [],
                agents: []
            };
            const ripwalkCache = _NestedExtensibilityService.getRipwalkCache();
            try {
                const ripwalkResult = ripwalkCache.walk(span.ctx, ripwalkOptions);
                try {
                    for await (const relativePath2 of ripwalkResult.lines){
                        const category = classifyPath(relativePath2, thirdPartyEnabled);
                        if (category) {
                            result[category].push((0, import_node_path38.resolve)(this.root, relativePath2));
                        }
                    }
                } finally{
                    ripwalkCache.delete(ripwalkOptions);
                }
            } catch  {}
            span.span.setAttribute("nested_extensibility.rules", result.rules.length);
            span.span.setAttribute("nested_extensibility.skills", result.skills.length);
            span.span.setAttribute("nested_extensibility.markdown", result.markdown.length);
            span.span.setAttribute("nested_extensibility.agents", result.agents.length);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources17(env_1);
        }
    }
    buildIncludeGlobs(thirdPartyEnabled) {
        const globs = [
            "*/**/.cursor/**",
            "*/**/.agents/**",
            "*/**/AGENTS.md"
        ];
        if (thirdPartyEnabled) {
            globs.push("*/**/.claude/**", "*/**/.codex/**", "*/**/.grok/**", "*/**/CLAUDE.md", "*/**/CLAUDE.local.md");
        }
        return globs;
    }
};

}
