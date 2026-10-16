import { createContext } from "../../../agent-host/dist/storage/instruments.js";
import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_dist } from "../../../context/dist/index.js";
import { asyncMapValues, getProtectedFoldersUnder, isPathWithin, normalizeToUnixPath, readText, resolvePath, resolveRealPathStrict } from "../../../dist_exports.js";
import { findGitRoot, getGitRemoteUrl, getProtectedFolderExcludeGlobs, makeResolvedIgnorePath, toHostPath } from "../../../dist_exports2.js";
import { init_common3 } from "../common.js";
import { RipwalkTtlCache, init_ripwalk_cache } from "../ripwalk-cache.js";
import { DEFAULT_GLOB_IGNORE_DIRS, init_common4 } from "./common.js";
import { require_ignore } from "../../../node_modules/.pnpm/ignore@7.0.5/node_modules/ignore/index.js";
import { require_picomatch2 } from "../../../node_modules/.pnpm/picomatch@4.0.5/node_modules/picomatch/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
import { LRUCache } from "../../../utils/dist/lru-cache.js";
import { PromiseQueue } from "../../../utils/dist/promise-extras.js";
var import_promises10, import_node_os10, import_node_path19, import_ignore2, import_picomatch, IGNORE_FILE_NAMES, LazyIgnoreService, maxConcurrentSearches, LocalIgnoreService;
export { IGNORE_FILE_NAMES, LazyIgnoreService, LocalIgnoreService, import_ignore2, import_node_os10, import_node_path19, import_picomatch, import_promises10, maxConcurrentSearches };
var __wakaru_init_ignore_service_initialized = false;
export function init_ignore_service() {
if (__wakaru_init_ignore_service_initialized) return;
__wakaru_init_ignore_service_initialized = true;
"use strict";
import_promises10 = __toESM(require("node:fs/promises"), 1);
import_node_os10 = __toESM(require("node:os"), 1);
import_node_path19 = require("node:path");
init_dist();
init_dist3();
import_ignore2 = __toESM(require_ignore(), 1);
import_picomatch = __toESM(require_picomatch2(), 1);
init_common3();
init_ripwalk_cache();
init_common4();
IGNORE_FILE_NAMES = [
    ".gitignore",
    ".cursorignore"
];
LazyIgnoreService = class {
    constructor(gitExecutor, teamSettingsService, rootDirectories){
        this.ignoreServicePromise = LocalIgnoreService.init(createContext(), gitExecutor, rootDirectories ?? [
            process.cwd()
        ], teamSettingsService);
    }
    isIgnoredByAny(filePath) {
        return this.ignoreServicePromise.then((x)=>x.isIgnoredByAny(filePath));
    }
    isGitIgnored(filePath) {
        return this.ignoreServicePromise.then((x)=>x.isGitIgnored(filePath));
    }
    isCursorIgnored(filePath) {
        return this.ignoreServicePromise.then((x)=>x.isCursorIgnored(filePath));
    }
    isRepoBlocked(filePath) {
        return this.ignoreServicePromise.then((x)=>x.isRepoBlocked(filePath));
    }
    listCursorIgnoreFilesByRoot(root) {
        return this.ignoreServicePromise.then((x)=>x.listCursorIgnoreFilesByRoot(root));
    }
    getCursorIgnoreMapping() {
        return this.ignoreServicePromise.then((x)=>x.getCursorIgnoreMapping());
    }
    getShellSandboxIgnoreMapping() {
        return this.ignoreServicePromise.then((x)=>x.getShellSandboxIgnoreMapping());
    }
    getGitIgnoreMapping() {
        return this.ignoreServicePromise.then((x)=>x.getGitIgnoreMapping());
    }
    getRepoBlockExcludeGlobs(rootDirectory) {
        return this.ignoreServicePromise.then((x)=>x.getRepoBlockExcludeGlobs(rootDirectory));
    }
    handleCursorIgnoreCreated(filePath) {
        return this.ignoreServicePromise.then((x)=>x.handleCursorIgnoreCreated(filePath));
    }
    handleCursorIgnoreChanged(filePath) {
        return this.ignoreServicePromise.then((x)=>x.handleCursorIgnoreChanged(filePath));
    }
    handleCursorIgnoreDeleted(filePath) {
        return this.ignoreServicePromise.then((x)=>x.handleCursorIgnoreDeleted(filePath));
    }
};
maxConcurrentSearches = Math.min(8, Math.max(1, Math.floor(import_node_os10.default.availableParallelism() / 2)));
LocalIgnoreService = class _LocalIgnoreService {
    constructor(gitExecutor, gitIgnoreMapping, cursorIgnoreMapping, teamSettingsService, rootDirectories, scanEnvironment){
        this.gitExecutor = gitExecutor;
        this.gitIgnoreMapping = gitIgnoreMapping;
        this.cursorIgnoreMapping = cursorIgnoreMapping;
        this.teamSettingsService = teamSettingsService;
        this.rootDirectories = rootDirectories;
        this.scanEnvironment = scanEnvironment;
        this.gitIgnoreCache = new LRUCache({
            max: 2e3
        });
        this.cursorIgnoreCache = new LRUCache({
            max: 2e3
        });
        this.gitRootCache = new LRUCache({
            max: 1e3
        });
        this.gitRemoteUrlCache = new LRUCache({
            max: 200
        });
        this.hasGitDirCache = new LRUCache({
            max: 1e3
        });
        this.gitParsedIgnoreCache = new Map();
        this.cursorParsedIgnoreCache = new Map();
        this.unwalkedFolders = rootDirectories.flatMap((root)=>getProtectedFoldersUnder(root, scanEnvironment));
    }
    static getRipwalkCache() {
        _LocalIgnoreService.ripwalkCache ??= new RipwalkTtlCache();
        return _LocalIgnoreService.ripwalkCache;
    }
    getIgnoreInstance(path64, patterns, cache2) {
        let instance = cache2.get(path64);
        if (!instance) {
            instance = (0, import_ignore2.default)().add(patterns);
            cache2.set(path64, instance);
        }
        return instance;
    }
    hasNoWorkspaceFolders() {
        return Object.keys(this.gitIgnoreMapping).length === 0 && Object.keys(this.cursorIgnoreMapping).length === 0;
    }
    async resolveLookupRoot(rootDirectory) {
        const resolved = await resolveRealPathStrict(rootDirectory);
        return resolved ?? resolvePath(rootDirectory);
    }
    static async init(ctx, gitExecutor, rootDirectories, teamSettingsService, requestedScanEnvironment = {
        platform: process.platform,
        homeDirectory: import_node_os10.default.homedir()
    }) {
        const scanEnvironment = {
            ...requestedScanEnvironment,
            homeDirectory: await resolveRealPathStrict(requestedScanEnvironment.homeDirectory) ?? requestedScanEnvironment.homeDirectory
        };
        const resolvedRoots = await asyncMapValues(rootDirectories, async (root)=>{
            const resolved = await resolveRealPathStrict(root);
            if (resolved === null) {
                console.warn(`[IgnoreService] Cannot resolve workspace root, using as-is: ${root}`);
                return makeResolvedIgnorePath(root);
            }
            return makeResolvedIgnorePath(resolved);
        });
        const gitIgnoreMapping = {};
        const cursorIgnoreMapping = {};
        const reposInGitRoots = (await asyncMapValues(resolvedRoots, async (root)=>{
            const gitRoot = await findGitRoot(ctx, gitExecutor, root);
            return gitRoot !== null && getProtectedFoldersUnder(gitRoot, scanEnvironment).length > 0 ? root : gitRoot;
        })).filter((root)=>root !== null);
        if (reposInGitRoots.length > 0) {
            await Promise.all([
                _LocalIgnoreService.initializeIgnoreMapping(reposInGitRoots, ".gitignore", gitIgnoreMapping, scanEnvironment),
                _LocalIgnoreService.initializeIgnoreMapping(resolvedRoots, ".cursorignore", cursorIgnoreMapping, scanEnvironment)
            ]);
        }
        return new _LocalIgnoreService(gitExecutor, gitIgnoreMapping, cursorIgnoreMapping, teamSettingsService, resolvedRoots, scanEnvironment);
    }
    static async preloadHierarchy(startPath, ignoreFileName, mapping, processedDirs) {
        let currentPath = resolvePath(startPath);
        const rootPath = (0, import_node_path19.parse)(currentPath).root;
        while(currentPath !== rootPath){
            if (processedDirs?.has(currentPath)) {
                const parentPath2 = (0, import_node_path19.dirname)(currentPath);
                if (parentPath2 === currentPath) break;
                currentPath = parentPath2;
                continue;
            }
            if (mapping[currentPath] === void 0) {
                await _LocalIgnoreService.handleHierarchyIgnore(currentPath, ignoreFileName, mapping);
            }
            processedDirs?.add(currentPath);
            const parentPath = (0, import_node_path19.dirname)(currentPath);
            if (parentPath === currentPath) break;
            currentPath = parentPath;
        }
    }
    static async handleHierarchyIgnore(dir, ignoreFileName, mapping) {
        const ignoreFilePath = (0, import_node_path19.join)(dir, ignoreFileName);
        try {
            await (0, import_promises10.access)(ignoreFilePath, import_promises10.default.constants.F_OK);
            const content = await readText(ignoreFilePath);
            const ignoreRules = _LocalIgnoreService.parseIgnoreRules(content);
            mapping[dir] = ignoreRules;
        } catch (error3) {
            if (error3.code === "ENOENT") {
                mapping[dir] = [];
            } else {
                console.error(`Error reading ${ignoreFileName} file at ${ignoreFilePath}:`, error3);
                mapping[dir] = [];
            }
        }
    }
    static async initializeIgnoreMapping(rootDirectories, ignoreFileName, mapping, scanEnvironment) {
        try {
            const deduplicatedRoots = _LocalIgnoreService.deduplicateRootDirectories(rootDirectories);
            const ignoreFiles = await _LocalIgnoreService.promiseQueue.enqueueList(deduplicatedRoots, (root)=>_LocalIgnoreService.findFilesWithRipgrep(root, ignoreFileName, scanEnvironment));
            const allIgnoreFiles = Array.from(ignoreFiles.values()).flat();
            await Promise.all(allIgnoreFiles.map(async (filePath)=>{
                try {
                    const content = await readText(filePath);
                    const ignoreRules = _LocalIgnoreService.parseIgnoreRules(content);
                    const ignorePath = (0, import_node_path19.dirname)(filePath);
                    mapping[ignorePath] = ignoreRules;
                } catch (error3) {
                    console.error(`Error processing ${ignoreFileName} file at ${filePath}:`, error3);
                }
            }));
            const processedDirs = new Set();
            for (const root of deduplicatedRoots){
                await _LocalIgnoreService.preloadHierarchy(root, ignoreFileName, mapping, processedDirs);
            }
        } catch (error3) {
            console.error(`Error initializing ignore mapping for ${ignoreFileName}:`, error3);
        }
    }
    static async findFilesWithRipgrep(rootDirectory, fileName, scanEnvironment) {
        const ctx = createContext();
        const files = [];
        const ripwalkOptions = {
            root: rootDirectory,
            includeGlobs: IGNORE_FILE_NAMES.map((name17)=>`**/${name17}`),
            excludeGlobs: [
                ...DEFAULT_GLOB_IGNORE_DIRS,
                ...getProtectedFolderExcludeGlobs(rootDirectory, scanEnvironment)
            ],
            source: "ignore_scan"
        };
        const ripwalkResult = _LocalIgnoreService.getRipwalkCache().walk(ctx, ripwalkOptions);
        for await (const path64 of ripwalkResult.lines){
            if ((0, import_node_path19.basename)(path64) === fileName) {
                files.push((0, import_node_path19.join)(rootDirectory, path64));
            }
        }
        return files;
    }
    async handleManualLookupWhenNoWorkspaceDirs(absolutePath, ignoreFileName) {
        const mapping = {};
        let cur = (0, import_node_path19.dirname)(absolutePath);
        const rootPath = (0, import_node_path19.parse)(cur).root;
        while(true){
            const ignoreFilePath = (0, import_node_path19.join)(cur, ignoreFileName);
            try {
                const content = await readText(ignoreFilePath);
                const patterns = _LocalIgnoreService.parseIgnoreRules(content);
                if (patterns.length > 0) {
                    mapping[cur] = patterns;
                }
            } catch  {}
            if (cur === rootPath) break;
            cur = (0, import_node_path19.dirname)(cur);
        }
        return this.testIgnored(absolutePath, mapping, (_path, patterns)=>(0, import_ignore2.default)().add(patterns));
    }
    async isIgnoredByAny(filePath) {
        const [gitIgnored, cursorIgnored, repoBlocked] = await Promise.all([
            this.checkGitIgnored(filePath),
            this.checkCursorIgnored(filePath),
            this.checkRepoBlocked(filePath)
        ]);
        return gitIgnored || cursorIgnored || repoBlocked;
    }
    async isGitIgnored(filePath) {
        return this.checkGitIgnored(filePath);
    }
    async isCursorIgnored(filePath) {
        return this.checkCursorIgnored(filePath);
    }
    async checkGitIgnored(absolutePath) {
        if (this.hasNoWorkspaceFolders()) {
            return this.handleManualLookupWhenNoWorkspaceDirs(absolutePath, ".gitignore");
        }
        const cached2 = this.gitIgnoreCache.get(absolutePath);
        if (cached2 !== void 0) {
            return cached2;
        }
        await this.populateHierarchyIfNeeded(absolutePath, ".gitignore", this.gitIgnoreMapping);
        const result = this.checkIgnored(absolutePath, this.gitIgnoreMapping, this.gitParsedIgnoreCache);
        this.gitIgnoreCache.set(absolutePath, result);
        return result;
    }
    async checkCursorIgnored(absolutePath) {
        if (this.hasNoWorkspaceFolders()) {
            return this.handleManualLookupWhenNoWorkspaceDirs(absolutePath, ".cursorignore");
        }
        const cached2 = this.cursorIgnoreCache.get(absolutePath);
        if (cached2 !== void 0) {
            return cached2;
        }
        await this.populateHierarchyIfNeeded(absolutePath, ".cursorignore", this.cursorIgnoreMapping);
        const result = this.checkIgnored(absolutePath, this.cursorIgnoreMapping, this.cursorParsedIgnoreCache);
        this.cursorIgnoreCache.set(absolutePath, result);
        return result;
    }
    isInUnwalkedFolder(path64) {
        const ignoreCase = this.scanEnvironment.platform === "darwin";
        const targetPath = ignoreCase ? path64.toLowerCase() : path64;
        return this.unwalkedFolders.some((folder)=>isPathWithin({
                basePath: ignoreCase ? folder.toLowerCase() : folder,
                targetPath
            }));
    }
    async populateHierarchyIfNeeded(filePath, ignoreFileName, mapping) {
        let currentPath = (0, import_node_path19.dirname)(resolvePath(filePath));
        const toAdd = [];
        const rootPath = (0, import_node_path19.parse)(currentPath).root;
        while(currentPath !== rootPath){
            const isUnwalked = this.isInUnwalkedFolder(currentPath);
            if (!isUnwalked && this.rootDirectories.some((root)=>isPathWithin({
                    basePath: root,
                    targetPath: currentPath
                }))) {
                currentPath = (0, import_node_path19.dirname)(currentPath);
                continue;
            }
            if (mapping[currentPath] === void 0) {
                toAdd.push(currentPath);
            } else if (!isUnwalked) {
                break;
            }
            const parentPath = (0, import_node_path19.dirname)(currentPath);
            if (parentPath === currentPath) break;
            currentPath = parentPath;
        }
        if (toAdd.length > 0) {
            await _LocalIgnoreService.promiseQueue.enqueueList(toAdd, (dir)=>_LocalIgnoreService.handleHierarchyIgnore(dir, ignoreFileName, mapping));
            if (ignoreFileName === ".gitignore") {
                this.gitIgnoreCache.clear();
            } else {
                this.cursorIgnoreCache.clear();
            }
        }
    }
    testIgnored(absolutePath, mapping, getInstance) {
        for (const [ignorePath, patterns] of Object.entries(mapping)){
            if (patterns.length === 0) {
                continue;
            }
            if (!isPathWithin({
                basePath: ignorePath,
                targetPath: absolutePath
            })) {
                continue;
            }
            const relativePath2 = (0, import_node_path19.relative)(ignorePath, absolutePath);
            if (relativePath2 === "") {
                continue;
            }
            const ignoreInstance = getInstance(ignorePath, patterns);
            const normalizedPath = normalizeToUnixPath(relativePath2);
            const testResult = ignoreInstance.test(normalizedPath);
            if (testResult.ignored && !testResult.unignored) {
                return true;
            }
            const testResultWithSlash = ignoreInstance.test(`${normalizedPath}/`);
            if (testResultWithSlash.ignored && !testResultWithSlash.unignored) {
                return true;
            }
        }
        return false;
    }
    checkIgnored(absolutePath, mapping, cache2) {
        return this.testIgnored(absolutePath, mapping, (path64, patterns)=>this.getIgnoreInstance(path64, patterns, cache2));
    }
    async listCursorIgnoreFilesByRoot(root) {
        const lookupRoot = await this.resolveLookupRoot(root);
        const ignoreFiles = [];
        for (const [base, patterns] of Object.entries(this.cursorIgnoreMapping)){
            if (patterns.length === 0) {
                continue;
            }
            if (!isPathWithin({
                basePath: lookupRoot,
                targetPath: base
            })) {
                continue;
            }
            const filePath = (0, import_node_path19.join)(base, ".cursorignore");
            try {
                await (0, import_promises10.access)(filePath);
                ignoreFiles.push(filePath);
            } catch  {}
        }
        return ignoreFiles;
    }
    async getCursorIgnoreMapping() {
        return {
            ...this.cursorIgnoreMapping
        };
    }
    async getShellSandboxIgnoreMapping() {
        const mapping = {
            ...this.cursorIgnoreMapping
        };
        for (const root of this.rootDirectories){
            const blockGlobs = await this.getRepoBlockExcludeGlobs(root);
            if (blockGlobs.length === 0) {
                continue;
            }
            const existing = mapping[root];
            mapping[root] = existing ? [
                ...existing,
                ...blockGlobs
            ] : blockGlobs;
        }
        return mapping;
    }
    async getGitIgnoreMapping() {
        return {
            ...this.gitIgnoreMapping
        };
    }
    static deduplicateRootDirectories(roots) {
        const resolvedRoots = roots.map((root)=>resolvePath(root));
        const sortedRoots = [
            ...resolvedRoots
        ].sort((a, b2)=>a.length - b2.length);
        const deduplicated = [];
        for (const root of sortedRoots){
            const isContained = deduplicated.some((existing)=>root.startsWith(`${existing}/`) || root.startsWith(`${existing}\\`));
            if (!isContained) {
                deduplicated.push(root);
            }
        }
        return deduplicated;
    }
    static parseIgnoreRules(raw) {
        return raw.split("\n").map((line)=>line.replace(/\r$/, "").trimStart()).filter((line)=>line !== "" && !line.startsWith("#"));
    }
    clearCaches() {
        this.gitIgnoreCache.clear();
        this.cursorIgnoreCache.clear();
        this.gitRootCache.clear();
        this.gitRemoteUrlCache.clear();
        this.hasGitDirCache.clear();
        this.gitParsedIgnoreCache.clear();
        this.cursorParsedIgnoreCache.clear();
    }
    async handleCursorIgnoreCreated(filePath) {
        const ignorePath = (0, import_node_path19.dirname)(filePath);
        const content = await readText(filePath);
        const ignoreRules = _LocalIgnoreService.parseIgnoreRules(content);
        this.cursorIgnoreMapping[ignorePath] = ignoreRules;
        this.cursorParsedIgnoreCache.delete(ignorePath);
        this.cursorIgnoreCache.clear();
    }
    async handleCursorIgnoreChanged(filePath) {
        const ignorePath = (0, import_node_path19.dirname)(filePath);
        const content = await readText(filePath);
        const ignoreRules = _LocalIgnoreService.parseIgnoreRules(content);
        this.cursorIgnoreMapping[ignorePath] = ignoreRules;
        this.cursorParsedIgnoreCache.delete(ignorePath);
        this.cursorIgnoreCache.clear();
    }
    handleCursorIgnoreDeleted(filePath) {
        const ignorePath = (0, import_node_path19.dirname)(filePath);
        this.cursorIgnoreMapping[ignorePath] = [];
        this.cursorParsedIgnoreCache.delete(ignorePath);
        this.cursorIgnoreCache.clear();
    }
    async findGitRootsForFile(filePath) {
        const absolutePath = resolvePath(filePath);
        const directoryPath = absolutePath;
        const cached2 = this.gitRootCache.get(directoryPath);
        if (cached2 !== void 0) {
            return cached2;
        }
        const gitRoots = [];
        const pathsToCheck = [];
        const uncachedPaths = [];
        let currentPath = directoryPath;
        const rootPath = (0, import_node_path19.parse)(currentPath).root;
        while(currentPath !== rootPath){
            pathsToCheck.push(currentPath);
            if (this.hasGitDirCache.get(currentPath) === void 0) {
                uncachedPaths.push(currentPath);
            }
            const parentPath = (0, import_node_path19.dirname)(currentPath);
            if (parentPath === currentPath) break;
            currentPath = parentPath;
        }
        if (uncachedPaths.length > 0) {
            const checkPromises = uncachedPaths.map((path64)=>(0, import_promises10.access)((0, import_node_path19.join)(path64, ".git"), import_promises10.default.constants.F_OK).then(()=>[
                        path64,
                        true
                    ]).catch(()=>[
                        path64,
                        false
                    ]));
            const results = await Promise.all(checkPromises);
            for (const [path64, hasGit] of results){
                this.hasGitDirCache.set(path64, hasGit);
            }
        }
        for (const path64 of pathsToCheck){
            const hasGit = this.hasGitDirCache.get(path64);
            if (hasGit === true) {
                gitRoots.push(path64);
            }
        }
        this.gitRootCache.set(directoryPath, gitRoots);
        return gitRoots;
    }
    async isRepoBlocked(filePath) {
        return this.checkRepoBlocked(filePath);
    }
    async checkRepoBlocked(absolutePath) {
        const gitRoots = await this.findGitRootsForFile(absolutePath);
        const teamReposResponse = await this.teamSettingsService?.getTeamRepos();
        if (!teamReposResponse) {
            return false;
        }
        const blockedRepos = teamReposResponse.repos ?? [];
        const allowedRepos = teamReposResponse.disableLocalExecAllowlistEnforcement ? [] : teamReposResponse.allowedRepos ?? [];
        if (blockedRepos.length === 0 && allowedRepos.length === 0) {
            return false;
        }
        if (gitRoots.length === 0) {
            return this.checkNonRepoPathBlockedByAllowlist(absolutePath, allowedRepos);
        }
        let matchesAllowlist = allowedRepos.length === 0;
        let allowlistEvaluated = false;
        for (const gitRoot of gitRoots){
            let repoUrl;
            if (this.gitRemoteUrlCache.has(gitRoot)) {
                repoUrl = this.gitRemoteUrlCache.get(gitRoot);
            } else {
                repoUrl = await getGitRemoteUrl(createContext(), this.gitExecutor, gitRoot);
                if (repoUrl !== void 0) {
                    this.gitRemoteUrlCache.set(gitRoot, repoUrl);
                }
            }
            if (repoUrl === void 0) {
                continue;
            }
            const resolvedRepoUrl = repoUrl;
            const relativePath2 = (0, import_node_path19.relative)(gitRoot, absolutePath) || ".";
            for (const repo of blockedRepos){
                if (!this.doesRepoUrlMatch(repo.url, resolvedRepoUrl)) {
                    continue;
                }
                for (const pattern of repo.patterns || []){
                    if (this.matchGlob(pattern.pattern, relativePath2)) {
                        return true;
                    }
                }
            }
            if (allowedRepos.length > 0 && !allowlistEvaluated) {
                allowlistEvaluated = true;
                matchesAllowlist = allowedRepos.some((repo)=>this.doesRepoUrlMatch(repo.url, resolvedRepoUrl) && (repo.patterns || []).some((pattern)=>this.matchGlob(pattern.pattern, relativePath2)));
            }
        }
        return !matchesAllowlist;
    }
    async checkNonRepoPathBlockedByAllowlist(absolutePath, allowedRepos) {
        if (allowedRepos.length === 0) {
            return false;
        }
        const cursorDataDir = await this.getCursorDataDir();
        if (isPathWithin({
            basePath: cursorDataDir,
            targetPath: absolutePath
        })) {
            return false;
        }
        const relativePath2 = this.getWorkspaceRelativePath(absolutePath);
        for (const repo of allowedRepos){
            if (this.isWildcardUrl(repo.url)) {
                if ((repo.patterns || []).some((pattern)=>this.matchGlob(pattern.pattern, relativePath2))) {
                    return false;
                }
            } else if (this.isPathPatternUrl(repo.url)) {
                if (this.matchGlob(repo.url, relativePath2)) {
                    return false;
                }
            }
        }
        return true;
    }
    isWildcardUrl(url2) {
        return url2.trim() === "*";
    }
    isPathPatternUrl(url2) {
        return !url2.includes("://") && !url2.includes("github.com") && !url2.includes("gitlab.com") && !url2.includes("bitbucket.org") && !url2.includes("@");
    }
    getWorkspaceRelativePath(absolutePath) {
        let bestRoot;
        for (const root of this.rootDirectories){
            if (isPathWithin({
                basePath: root,
                targetPath: absolutePath
            }) && (bestRoot === void 0 || root.length > bestRoot.length)) {
                bestRoot = root;
            }
        }
        if (bestRoot !== void 0) {
            return normalizeToUnixPath((0, import_node_path19.relative)(bestRoot, absolutePath));
        }
        return normalizeToUnixPath(absolutePath);
    }
    getCursorDataDir() {
        this.cursorDataDirPromise ??= (async ()=>{
            const raw = (0, import_node_path19.join)(import_node_os10.default.homedir(), ".cursor");
            const resolved = await resolveRealPathStrict(raw);
            return resolved ?? raw;
        })();
        return this.cursorDataDirPromise;
    }
    doesRepoUrlMatch(repoUrl1, repoUrl2) {
        const rawPattern = repoUrl1.trim().toLowerCase().replace(/\.git$/i, "");
        const isGlobPattern = repoUrl1.includes("*");
        if (isGlobPattern) {
            if (repoUrl1.trim() === "*") {
                return true;
            }
            const normalizedPattern = toHostPath(repoUrl1).toLowerCase();
            const normalizedUrl = toHostPath(repoUrl2).toLowerCase();
            return this.matchRepoUrlGlob(normalizedPattern, normalizedUrl);
        } else {
            return toHostPath(repoUrl1).toLowerCase() === toHostPath(repoUrl2).toLowerCase();
        }
    }
    matchGlob(pattern, value) {
        const trimmedPattern = pattern.trim();
        if ((value === "." || value === "") && (trimmedPattern === "**" || trimmedPattern === "**/*")) {
            return true;
        }
        try {
            const isMatch = (0, import_picomatch.default)(trimmedPattern, {
                dot: true
            });
            return isMatch(value);
        } catch  {
            return trimmedPattern === value;
        }
    }
    matchRepoUrlGlob(pattern, value) {
        const trimmedPattern = pattern.trim();
        if (this.matchGlob(trimmedPattern, value)) {
            return true;
        }
        if (trimmedPattern.startsWith("*/")) {
            return this.matchGlob(`**/${trimmedPattern.slice(2)}`, value);
        }
        return false;
    }
    async getRepoBlockExcludeGlobs(rootDirectory) {
        const teamReposResponse = await this.teamSettingsService?.getTeamRepos();
        if (!teamReposResponse?.repos?.length) {
            return [];
        }
        const absoluteRoot = await this.resolveLookupRoot(rootDirectory);
        const gitRepoMapping = await this.getGitRepoMapping();
        if (gitRepoMapping.size === 0) {
            return [];
        }
        const excludeGlobs = [];
        for (const [gitRoot, repoUrl] of gitRepoMapping){
            if (repoUrl === void 0) continue;
            const normalizedGitRoot = this.normalizePathForComparison(gitRoot);
            const normalizedRoot = this.normalizePathForComparison(absoluteRoot);
            let isRelevant = false;
            let relativeGitRoot = "";
            if (normalizedRoot.startsWith(normalizedGitRoot)) {
                isRelevant = true;
                relativeGitRoot = "";
            } else if (normalizedGitRoot.startsWith(normalizedRoot)) {
                isRelevant = true;
                relativeGitRoot = (0, import_node_path19.relative)(absoluteRoot, gitRoot);
            }
            if (!isRelevant) continue;
            const matchingRepos = teamReposResponse.repos.filter((repo)=>this.doesRepoUrlMatch(repo.url, repoUrl));
            if (matchingRepos.length === 0) continue;
            for (const repo of matchingRepos){
                for (const pattern of repo.patterns || []){
                    const trimmedPattern = pattern.pattern.trim();
                    if (!trimmedPattern) continue;
                    let glob;
                    if (relativeGitRoot) {
                        glob = (0, import_node_path19.join)(relativeGitRoot, trimmedPattern).replace(/\\/g, "/");
                    } else {
                        glob = trimmedPattern;
                    }
                    excludeGlobs.push(glob);
                    if (!glob.endsWith("/**")) {
                        excludeGlobs.push(`${glob}/**`);
                    }
                }
            }
        }
        return excludeGlobs;
    }
    normalizePathForComparison(path64) {
        let normalized = path64.replace(/\\/g, "/");
        if (normalized.startsWith("/") && normalized.length > 2 && normalized[2] === ":") {
            normalized = normalized.substring(1);
        }
        if (process.platform === "win32") {
            normalized = normalized.toLowerCase();
        }
        return normalized;
    }
    getGitRepoMapping() {
        if (!this.gitRepoMappingPromise) {
            this.gitRepoMappingPromise = this.initializeGitRepoMapping();
        }
        return this.gitRepoMappingPromise;
    }
    async initializeGitRepoMapping() {
        const result = new Map();
        const gitRepoLocations = [];
        const DIRS_TO_SKIP = [
            "**/node_modules/**",
            "**/.turbo/**",
            "**/.next/**",
            "**/.cache/**",
            "**/.pnpm/**",
            "**/.yarn/**",
            "**/dist/**",
            "**/build/**",
            "**/out/**",
            "**/target/**",
            "**/.vscode/**",
            "**/.idea/**",
            "**/venv/**",
            "**/__pycache__/**",
            "**/logs/**",
            "**/tmp/**",
            "**/temp/**"
        ];
        const ctx = createContext();
        for (const rootDir of this.rootDirectories){
            const resolvedRoot = resolvePath(rootDir);
            try {
                await (0, import_promises10.access)((0, import_node_path19.join)(resolvedRoot, ".git"), import_promises10.default.constants.F_OK);
                if (!gitRepoLocations.includes(resolvedRoot)) {
                    gitRepoLocations.push(resolvedRoot);
                }
            } catch  {}
            let currentPath = (0, import_node_path19.dirname)(resolvedRoot);
            const fsRoot = (0, import_node_path19.parse)(currentPath).root;
            while(currentPath !== fsRoot && currentPath !== ""){
                try {
                    await (0, import_promises10.access)((0, import_node_path19.join)(currentPath, ".git"), import_promises10.default.constants.F_OK);
                    if (!gitRepoLocations.includes(currentPath)) {
                        gitRepoLocations.push(currentPath);
                    }
                } catch  {}
                const parentPath = (0, import_node_path19.dirname)(currentPath);
                if (parentPath === currentPath) break;
                currentPath = parentPath;
            }
            try {
                const ripwalkOptions = {
                    root: resolvedRoot,
                    includeGlobs: [
                        "**/.git/config"
                    ],
                    excludeGlobs: [
                        ...DIRS_TO_SKIP,
                        ...getProtectedFolderExcludeGlobs(resolvedRoot, this.scanEnvironment)
                    ],
                    noIgnoreVcs: true,
                    source: "ignore_scan"
                };
                const ripwalkResult = _LocalIgnoreService.getRipwalkCache().walk(ctx, ripwalkOptions);
                for await (const path64 of ripwalkResult.lines){
                    const fullPath = (0, import_node_path19.join)(resolvedRoot, path64);
                    const gitDir = (0, import_node_path19.dirname)(fullPath);
                    const gitRoot = (0, import_node_path19.dirname)(gitDir);
                    if (!gitRepoLocations.includes(gitRoot)) {
                        gitRepoLocations.push(gitRoot);
                    }
                }
            } catch  {}
        }
        await Promise.all(gitRepoLocations.map(async (repoPath)=>{
            try {
                const upstreamUrl = await getGitRemoteUrl(ctx, this.gitExecutor, repoPath);
                result.set(repoPath, upstreamUrl);
            } catch  {
                result.set(repoPath, void 0);
            }
        }));
        return result;
    }
};
LocalIgnoreService.promiseQueue = new PromiseQueue({
    max: maxConcurrentSearches
});

}
