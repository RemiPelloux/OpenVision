import { init_git_remote_ref_resolve } from "./git-remote-ref-resolve.js";
import { init_git_sparse_clone } from "./git-sparse-clone.js";
import { init_git_subprocess_env } from "./git-subprocess-env.js";
import { init_git_url_parsing } from "./git-url-parsing.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { init_types5, noopPluginMetricsLogger } from "./types.js";
import { init_validate_subpath } from "./validate-subpath.js";
import { withTimeout } from "../../dist_exports.js";
import { classifyCloneError, cloneErrorTag, discoverPluginsFromManifest, execGitNonInteractive, getCanonicalMarketplacePathSegments, isKilledSubprocessError, isPathSafe, isSparseCheckoutRepo, manifestCacheKey, materializeSparseDirs, readMarketplaceManifestFromDir, resolveExtraGitConfig, resolveGitRemoteRef, resolvePluginSourcePath, resolveSparseClonePlan, sanitize, serverIgnoredFilter, setSparseCheckoutDirs, toScmSshUrl, validateAndResolveSubpath } from "../../dist_exports2.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_crypto9, import_promises14, import_node_path32, WINDOWS_RESERVED_PATH_NAMES, LS_REMOTE_TIMEOUT_MS, REMOTE_GIT_TIMEOUT_MS, LOCAL_GIT_TIMEOUT_MS, RECURSIVE_RM_OPTIONS, USER_GIT_ACCESS_PATTERNS, LOCAL_CACHE_PATTERNS, STALE_PINNED_REF_PATTERNS, _globalInFlight, MarketplaceCacheManager;
export { LOCAL_CACHE_PATTERNS, LOCAL_GIT_TIMEOUT_MS, LS_REMOTE_TIMEOUT_MS, MarketplaceCacheManager, RECURSIVE_RM_OPTIONS, REMOTE_GIT_TIMEOUT_MS, STALE_PINNED_REF_PATTERNS, USER_GIT_ACCESS_PATTERNS, WINDOWS_RESERVED_PATH_NAMES, _globalInFlight, import_node_crypto9, import_node_path32, import_promises14 };
var __wakaru_init_marketplace_cache_initialized = false;
export function init_marketplace_cache() {
if (__wakaru_init_marketplace_cache_initialized) return;
__wakaru_init_marketplace_cache_initialized = true;
"use strict";
import_node_crypto9 = require("node:crypto");
import_promises14 = require("node:fs/promises");
import_node_path32 = require("node:path");
init_dist3();
init_git_remote_ref_resolve();
init_git_sparse_clone();
init_git_subprocess_env();
init_git_url_parsing();
init_manifest_parser();
init_types5();
init_validate_subpath();
WINDOWS_RESERVED_PATH_NAMES = new Set([
    "con",
    "prn",
    "aux",
    "nul",
    "com1",
    "com2",
    "com3",
    "com4",
    "com5",
    "com6",
    "com7",
    "com8",
    "com9",
    "lpt1",
    "lpt2",
    "lpt3",
    "lpt4",
    "lpt5",
    "lpt6",
    "lpt7",
    "lpt8",
    "lpt9"
]);
LS_REMOTE_TIMEOUT_MS = 3e4;
REMOTE_GIT_TIMEOUT_MS = 30 * 6e4;
LOCAL_GIT_TIMEOUT_MS = 10 * 6e4;
RECURSIVE_RM_OPTIONS = {
    recursive: true,
    force: true,
    maxRetries: 3
};
USER_GIT_ACCESS_PATTERNS = [
    "terminal prompts disabled",
    "could not read username",
    "host key verification failed",
    "could not read from remote repository",
    "permission denied",
    "repository not found",
    "user cancelled dialog",
    "spawn git enoent",
    "authentication failed",
    "unable to get password from user"
];
LOCAL_CACHE_PATTERNS = [
    "enotempty: directory not empty, rename",
    "/_staging/"
];
STALE_PINNED_REF_PATTERNS = [
    "upload-pack: not our ref",
    "server does not allow request for unadvertised object"
];
_globalInFlight = new Map();
MarketplaceCacheManager = class _MarketplaceCacheManager {
    constructor(cacheRoot, options2){
        this.cacheRoot = cacheRoot;
        this.options = options2;
        this.manifestCache = new Map();
    }
    get sparsePluginClones() {
        return this.options?.sparsePluginClones ?? false;
    }
    remoteTimeoutMs() {
        return this.sparsePluginClones ? REMOTE_GIT_TIMEOUT_MS : void 0;
    }
    localTimeoutMs() {
        return this.sparsePluginClones ? LOCAL_GIT_TIMEOUT_MS : void 0;
    }
    lsRemoteTimeoutMs() {
        return this.sparsePluginClones ? LS_REMOTE_TIMEOUT_MS : void 0;
    }
    async cloneResolvedRef(cloneDir, gitUrl, resolvedRef, options2) {
        const execOpts = {
            cwd: cloneDir,
            sshBatchMode: options2?.sshBatchMode,
            extraGitConfig: {
                ...resolveExtraGitConfig(this.options?.extraGitConfig),
                "safe.directory": cloneDir
            }
        };
        const { sparse, sparseDirs } = await resolveSparseClonePlan(options2?.materialize ?? "all", this.sparsePluginClones);
        await execGitNonInteractive([
            "init"
        ], {
            ...execOpts,
            timeoutMs: this.localTimeoutMs()
        });
        if (sparse) {
            await setSparseCheckoutDirs(cloneDir, sparseDirs, {
                sshBatchMode: options2?.sshBatchMode,
                extraGitConfig: resolveExtraGitConfig(this.options?.extraGitConfig),
                timeoutMs: this.localTimeoutMs()
            });
        }
        const { stderr: fetchStderr } = await execGitNonInteractive([
            "fetch",
            "--depth",
            "1",
            ...sparse ? [
                "--filter=blob:none"
            ] : [],
            gitUrl,
            resolvedRef
        ], {
            ...execOpts,
            timeoutMs: this.remoteTimeoutMs()
        });
        await execGitNonInteractive([
            "checkout",
            "FETCH_HEAD"
        ], {
            ...execOpts,
            timeoutMs: this.remoteTimeoutMs()
        });
        return {
            strategy: sparse ? "sparse" : "full",
            filterIgnoredByServer: sparse && serverIgnoredFilter(fetchStderr ?? "")
        };
    }
    async createStagingDir() {
        const stagingDir = (0, import_node_path32.join)(this.cacheRoot, "_staging", (0, import_node_crypto9.randomUUID)());
        await (0, import_promises14.mkdir)(stagingDir, {
            recursive: true
        });
        return stagingDir;
    }
    async moveToCanonicalDir(stagingDir, cloneDir) {
        await (0, import_promises14.mkdir)((0, import_node_path32.dirname)(cloneDir), {
            recursive: true
        });
        await (0, import_promises14.rm)(cloneDir, RECURSIVE_RM_OPTIONS);
        await (0, import_promises14.rename)(stagingDir, cloneDir);
        return cloneDir;
    }
    async cleanStaleStagingDirs() {
        const stagingRoot = (0, import_node_path32.join)(this.cacheRoot, "_staging");
        try {
            const entries = await (0, import_promises14.readdir)(stagingRoot, {
                withFileTypes: true
            });
            const now2 = Date.now();
            await Promise.all(entries.filter((entry)=>entry.isDirectory()).map(async (entry)=>{
                try {
                    const entryPath = (0, import_node_path32.join)(stagingRoot, entry.name);
                    const stats = await (0, import_promises14.stat)(entryPath);
                    if (now2 - stats.mtimeMs > _MarketplaceCacheManager.STALE_STAGING_THRESHOLD_MS) {
                        await (0, import_promises14.rm)(entryPath, RECURSIVE_RM_OPTIONS);
                    }
                } catch  {}
            }));
        } catch  {}
    }
    getLegacyCloneDir(marketplaceId, ref) {
        return (0, import_node_path32.join)(this.cacheRoot, sanitize(marketplaceId), sanitize(ref));
    }
    getCanonicalCloneDir(gitUrl, ref) {
        const { host, pathSegments } = getCanonicalMarketplacePathSegments(gitUrl);
        return (0, import_node_path32.join)(this.cacheRoot, sanitize(host), ...pathSegments.map(sanitize), sanitize(ref));
    }
    getCanonicalRepoRootDir(gitUrl) {
        const { host, pathSegments } = getCanonicalMarketplacePathSegments(gitUrl);
        return (0, import_node_path32.join)(this.cacheRoot, sanitize(host), ...pathSegments.map(sanitize));
    }
    async pruneSiblingCloneDirs(gitUrl, keepRef, legacyCloneDir) {
        const repoRootDir = this.getCanonicalRepoRootDir(gitUrl);
        const keepDirName = sanitize(keepRef);
        try {
            const entries = await (0, import_promises14.readdir)(repoRootDir, {
                withFileTypes: true
            });
            await Promise.all(entries.filter((entry)=>entry.isDirectory() && entry.name !== keepDirName).map((entry)=>(0, import_promises14.rm)((0, import_node_path32.join)(repoRootDir, entry.name), RECURSIVE_RM_OPTIONS)));
        } catch  {}
        if (legacyCloneDir !== void 0) {
            try {
                await (0, import_promises14.rm)(legacyCloneDir, RECURSIVE_RM_OPTIONS);
            } catch  {}
        }
    }
    async ensureCloned(marketplaceId, gitUrl, ref, pluginLogger = noopPluginMetricsLogger, options2) {
        const inner = this.serializedOnRepo(this.getCanonicalRepoRootDir(gitUrl), ()=>this.ensureClonedImpl(marketplaceId, gitUrl, ref, pluginLogger, options2?.materialize ?? "all"));
        if (this.sparsePluginClones) {
            return inner;
        }
        const CLONE_TIMEOUT_MS = 3e4;
        return withTimeout(inner, CLONE_TIMEOUT_MS, `ensureCloned timed out after ${CLONE_TIMEOUT_MS}ms for ${gitUrl} @ ${ref}`);
    }
    async ensureMaterialized(clonePath, spec, pluginLogger = noopPluginMetricsLogger) {
        const inner = this.serializedOnRepo((0, import_node_path32.dirname)(clonePath), async ()=>{
            const start = performance.now();
            try {
                await materializeSparseDirs(clonePath, spec, {
                    extraGitConfig: resolveExtraGitConfig(this.options?.extraGitConfig),
                    timeoutMs: this.remoteTimeoutMs()
                });
                pluginLogger.increment("marketplace_cache_manager.ensure_materialized.success", 1);
                pluginLogger.distribution("marketplace_cache_manager.ensure_materialized.duration", performance.now() - start);
            } catch (err) {
                pluginLogger.log("error", "Failed to materialize plugin directories in sparse marketplace clone", {
                    clonePath,
                    spec: spec === "all" ? "all" : spec.join(","),
                    error: String(err),
                    errorCategory: cloneErrorTag(err)
                });
                pluginLogger.increment("marketplace_cache_manager.ensure_materialized.error", 1, {
                    error_category: cloneErrorTag(err)
                });
                pluginLogger.distribution("marketplace_cache_manager.ensure_materialized.duration", performance.now() - start, {
                    outcome: "error"
                });
                throw err;
            }
        });
        if (this.sparsePluginClones) {
            return inner;
        }
        const MATERIALIZE_TIMEOUT_MS = 3e4;
        return withTimeout(inner, MATERIALIZE_TIMEOUT_MS, `ensureMaterialized timed out after ${MATERIALIZE_TIMEOUT_MS}ms for ${clonePath}`);
    }
    async serializedOnRepo(repoRootDir, work) {
        const serializationKey = `${this.cacheRoot}:${repoRootDir}`;
        const predecessor = _globalInFlight.get(serializationKey);
        const myWork = (predecessor ?? Promise.resolve()).catch(()=>{}).then(work);
        _globalInFlight.set(serializationKey, myWork);
        try {
            return await myWork;
        } finally{
            if (_globalInFlight.get(serializationKey) === myWork) {
                _globalInFlight.delete(serializationKey);
            }
        }
    }
    async ensureClonedImpl(marketplaceId, gitUrl, ref, pluginLogger, materialize2) {
        pluginLogger.log("info", `MarketplaceCacheManager: Ensuring cloned ${marketplaceId} at ${gitUrl}@${ref}`, {
            marketplaceId,
            gitUrl,
            ref
        });
        const originalRef = ref.trim();
        let sshCloneUrl = !gitUrl.startsWith("git@") && !gitUrl.startsWith("ssh://") ? toScmSshUrl(gitUrl) : null;
        let resolvedRef;
        if (sshCloneUrl !== null) {
            try {
                resolvedRef = (await resolveGitRemoteRef(sshCloneUrl, originalRef, {
                    sshBatchMode: true,
                    extraGitConfig: resolveExtraGitConfig(this.options?.extraGitConfig),
                    timeoutMs: this.lsRemoteTimeoutMs()
                })).fullSha;
            } catch (error3) {
                if (this.sparsePluginClones && isKilledSubprocessError(error3)) {
                    throw error3;
                }
                pluginLogger.log("debug", "Failed to resolve remote ref using SSH URL, falling back to HTTPS", {
                    gitUrl,
                    ref,
                    error: String(error3),
                    errorCategory: classifyCloneError(error3)
                });
                sshCloneUrl = null;
                resolvedRef = (await resolveGitRemoteRef(gitUrl, originalRef, {
                    extraGitConfig: resolveExtraGitConfig(this.options?.extraGitConfig),
                    timeoutMs: this.lsRemoteTimeoutMs()
                })).fullSha;
            }
        } else {
            resolvedRef = (await resolveGitRemoteRef(gitUrl, originalRef, {
                extraGitConfig: resolveExtraGitConfig(this.options?.extraGitConfig),
                timeoutMs: this.lsRemoteTimeoutMs()
            })).fullSha;
        }
        const cloneDir = this.getCanonicalCloneDir(gitUrl, resolvedRef);
        const legacyCloneDir = this.getLegacyCloneDir(marketplaceId, originalRef);
        pluginLogger.log("info", `MarketplaceCacheManager: Resolved clone directory for ${marketplaceId} at ${gitUrl}@${ref} to ${cloneDir}`, {
            marketplaceId,
            resolvedRef,
            originalRef
        });
        const start = performance.now();
        const emitMetric = (suffix, tags)=>{
            pluginLogger.increment(`marketplace_cache_manager.ensure_cloned.${suffix}`, 1, tags);
            pluginLogger.distribution(`marketplace_cache_manager.ensure_cloned.${suffix}.duration`, performance.now() - start, tags);
        };
        if (await this.isCloneComplete(cloneDir)) {
            await this.pruneSiblingCloneDirs(gitUrl, resolvedRef, legacyCloneDir);
            const cachedCloneIsSparse = await isSparseCheckoutRepo(cloneDir);
            if (cachedCloneIsSparse) {
                await materializeSparseDirs(cloneDir, materialize2, {
                    extraGitConfig: resolveExtraGitConfig(this.options?.extraGitConfig),
                    timeoutMs: this.remoteTimeoutMs()
                });
            }
            emitMetric("cache_hit", {
                strategy: cachedCloneIsSparse ? "sparse" : "full"
            });
            return cloneDir;
        }
        pluginLogger.increment("marketplace_cache_manager.ensure_cloned.cache_miss", 1);
        return this.cloneViaStaging(cloneDir, gitUrl, sshCloneUrl, resolvedRef, legacyCloneDir, ref, pluginLogger, emitMetric, materialize2);
    }
    async cloneViaStaging(cloneDir, gitUrl, sshCloneUrl, resolvedRef, legacyCloneDir, ref, pluginLogger, emitMetric, materialize2) {
        await this.cleanStaleStagingDirs();
        const stagingDir = await this.createStagingDir();
        pluginLogger.log("info", `MarketplaceCacheManager: Cloning ${gitUrl}@${ref} into staging directory: ${stagingDir}`, {
            gitUrl,
            ref,
            cloneDir
        });
        const heartbeat = this.sparsePluginClones ? setInterval(()=>{
            const now2 = new Date();
            void (0, import_promises14.utimes)(stagingDir, now2, now2).catch(()=>{});
        }, _MarketplaceCacheManager.STAGING_HEARTBEAT_INTERVAL_MS) : void 0;
        heartbeat?.unref?.();
        try {
            let outcome;
            if (sshCloneUrl !== null) {
                try {
                    outcome = await this.cloneResolvedRef(stagingDir, sshCloneUrl, resolvedRef, {
                        sshBatchMode: true,
                        materialize: materialize2
                    });
                } catch (error3) {
                    if (this.sparsePluginClones && isKilledSubprocessError(error3)) {
                        throw error3;
                    }
                    pluginLogger.log("debug", "Falling back to HTTPS clone due to SSH clone failure", {
                        gitUrl,
                        ref,
                        error: String(error3),
                        errorCategory: cloneErrorTag(error3)
                    });
                    await (0, import_promises14.rm)(stagingDir, RECURSIVE_RM_OPTIONS);
                    await (0, import_promises14.mkdir)(stagingDir, {
                        recursive: true
                    });
                    outcome = await this.cloneResolvedRef(stagingDir, gitUrl, resolvedRef, {
                        materialize: materialize2
                    });
                }
            } else {
                outcome = await this.cloneResolvedRef(stagingDir, gitUrl, resolvedRef, {
                    materialize: materialize2
                });
            }
            if (outcome.filterIgnoredByServer) {
                pluginLogger.log("warn", "Server ignored --filter=blob:none; sparse clone downloaded a full pack", {
                    gitUrl,
                    ref
                });
                pluginLogger.increment("marketplace_cache_manager.ensure_cloned.filter_ignored_by_server", 1);
            }
            const resultDir = await this.moveToCanonicalDir(stagingDir, cloneDir);
            await this.pruneSiblingCloneDirs(gitUrl, resolvedRef, legacyCloneDir);
            emitMetric("cache_write_success", {
                strategy: outcome.strategy
            });
            return resultDir;
        } catch (err) {
            const errorCategory = cloneErrorTag(err);
            emitMetric("error", {
                error_category: errorCategory
            });
            pluginLogger.log("error", "Failed to clone marketplace repository via staging clone", {
                gitUrl,
                ref,
                error: String(err),
                errorCategory
            });
            pluginLogger.captureException(err, {
                error_type: "clone_marketplace_repository",
                error_category: errorCategory
            });
            throw err;
        } finally{
            if (heartbeat !== void 0) {
                clearInterval(heartbeat);
            }
            try {
                await (0, import_promises14.rm)(stagingDir, RECURSIVE_RM_OPTIONS);
            } catch  {}
        }
    }
    async isCloneComplete(cloneDir) {
        try {
            const stats = await (0, import_promises14.stat)(cloneDir);
            if (!stats.isDirectory()) return false;
            const entries = await (0, import_promises14.readdir)(cloneDir);
            if (!entries.includes(".git")) return false;
            if (entries.length > 1) return true;
            try {
                const sparseMarker = await (0, import_promises14.stat)((0, import_node_path32.join)(cloneDir, ".git", "info", "sparse-checkout"));
                return sparseMarker.isFile();
            } catch  {
                return false;
            }
        } catch  {
            return false;
        }
    }
    getPluginDir(clonePath, gitPath) {
        return validateAndResolveSubpath(clonePath, gitPath);
    }
    async copyPluginToDir(sourcePath, targetDir) {
        await (0, import_promises14.mkdir)(targetDir, {
            recursive: true
        });
        await (0, import_promises14.cp)(sourcePath, targetDir, {
            recursive: true,
            verbatimSymlinks: true
        });
    }
    async readManifest(clonePath, options2 = {}) {
        const cacheKey2 = manifestCacheKey(clonePath, options2);
        if (this.manifestCache.has(cacheKey2)) {
            return this.manifestCache.get(cacheKey2) ?? null;
        }
        const manifest = await readMarketplaceManifestFromDir(clonePath, options2);
        this.manifestCache.set(cacheKey2, manifest);
        return manifest;
    }
    async resolvePluginPath(clonePath, pluginName) {
        const manifest = await this.readManifest(clonePath);
        if (!manifest) return null;
        const entry = manifest.plugins.find((p2)=>p2.name === pluginName.toLowerCase());
        if (!entry) return null;
        const resolved = resolvePluginSourcePath(entry.source, manifest.metadata?.pluginRoot);
        if (!resolved) return null;
        if (!isPathSafe(resolved)) return null;
        return resolved;
    }
    async discoverPlugins(clonePath) {
        const manifest = await this.readManifest(clonePath);
        if (!manifest) return [];
        return discoverPluginsFromManifest(manifest);
    }
};
MarketplaceCacheManager.STALE_STAGING_THRESHOLD_MS = 5 * 60 * 1e3;
MarketplaceCacheManager.STAGING_HEARTBEAT_INTERVAL_MS = 60 * 1e3;

}
