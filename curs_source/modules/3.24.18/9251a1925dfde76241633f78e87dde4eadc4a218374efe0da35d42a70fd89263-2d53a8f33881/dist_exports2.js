import { external_exports } from "./external_exports.js";
import { getAdminCommandDenylistRuleError, matchesCommandGlob, normalizeAdminCommandDenylistText, parseAdminCommandDenylistColonRule } from "./utils_pb_exports.js";
import { detectHooksSchema, findActualExecutable, getProtectedFoldersUnder, isAzureDevopsServicesHost, isBitbucketCloudHost, isGitHubDotComHost, isGitLabHost, isOriginGitHost, parseAzureDevopsRepositoryPathSegments, parseBitbucketRepositoryPathSegments, parseGitHubRepositoryPathSegments, parseGitLabRepositoryPathSegments, readText, resolveRealPathStrict, sanitizeFilename, skillDescriptionError, skillFrontmatterError, skillReadError, transformClaudeHooksToConfig } from "./dist_exports.js";
import { gitExecFile } from "./dashboard_connect_exports.js";
import { configureRipgrepPath, configureSandboxPrereqs2, createIgnoreMapping, createNaiveTerminalExecutor, getHardcodedAllowedReadPaths, getLastSandboxFailureReason, getPowerShellExecutable, getRipgrepBinaryPath, getSandboxPolicyType, getSandboxProjectDir, initBashState, initPowerShellState, initZshLightState, initZshState, isAllowAllNetworkByPolicy, isHardcodedWriteProtected, isNetworkEnabledByPolicy, isRipgrepConfigured, isSandboxSupported, loadSandboxPolicyFromFileOrUndefined, mergeAdditionalReadPaths, mergeNetworkPolicies, mergePathsIntersection, mergePathsUnion, mergeReadBoundary, networkAllowAllPolicy, networkDisabledPolicy, parseSandboxPolicyJson, primeSandboxSupport, resolvePolicyPaths, resolveRipgrepFromPath, resolveSandboxPolicyForWorkspace, spawnInSandbox, spawnWithSignal, withConfiguredRipgrepEnv } from "./bidi_connect_exports.js";
import { CapabilitiesSchema } from "./cursor-plugins/dist/capabilities.js";
import { FRONTMATTER_REGEX, PluginComponentDiscovery, import_node_path33 } from "./cursor-plugins/dist/component-discovery.js";
import { ENV_VAR_PATTERN } from "./cursor-plugins/dist/env-expansion.js";
import { FULL_SHA_REGEX, SHA_REF_REGEX } from "./cursor-plugins/dist/git-remote-ref-resolve.js";
import { ALWAYS_SPARSE_DIRS, DISABLE_SPARSE_PLUGIN_CLONES_ENV, MIN_SPARSE_GIT, import_node_path30, import_promises13 } from "./cursor-plugins/dist/git-sparse-clone.js";
import { MAX_FILE_SIZE, import_node_path34, import_node_url2, import_promises15 } from "./cursor-plugins/dist/loader.js";
import { MARKETPLACE_MANIFEST_PATHS, MAX_MANIFEST_SIZE_BYTES, MinClientVersionsSchema, PLUGIN_MANIFEST_PATHS, PluginManifestSchema, PluginVariableSchemaSchema, import_node_crypto7, import_node_path20 } from "./cursor-plugins/dist/manifest-parser.js";
import { LOCAL_CACHE_PATTERNS, STALE_PINNED_REF_PATTERNS, USER_GIT_ACCESS_PATTERNS, WINDOWS_RESERVED_PATH_NAMES, import_node_path32, import_promises14 } from "./cursor-plugins/dist/marketplace-cache.js";
import { NON_SERVER_METADATA_KEY_SET, PLUGIN_MCP_CONFIG_FILE_NAMES } from "./cursor-plugins/dist/mcp-parser.js";
import { ACRONYMS, LOADER_PROVIDED, PLACEHOLDER } from "./cursor-plugins/dist/mcp-placeholder-variables.js";
import { SUPPORTED_SCHEMA_IDS, VERSION_SEGMENT_PATTERN } from "./cursor-plugins/dist/schema-version.js";
import { SECRET_WORDS } from "./cursor-plugins/dist/secret-variable-names.js";
import { import_node_path36 } from "./cursor-plugins/dist/translations.js";
import { mcpConfigSchema, noopPluginMetricsLogger } from "./cursor-plugins/dist/types.js";
import { import_node_path31 } from "./cursor-plugins/dist/validate-subpath.js";
import { validateHooksConfig } from "./hooks/dist/validators/hooksConfig.js";
import { CoreShellFactory, EventStreamingShellFactory, FileLoggingShellFactory, MAX_NOTIFICATION_TEXT_CHARS, MAX_OUTPUT_NOTIFICATION_MATCHED_TEXT_CHARS, MAX_SHELL_ID, MIN_SHELL_ID, RUNNING_MS_WIDTH, TERMINAL_TASK_STATUS_WIDTH, import_node_buffer2 } from "./local-exec/dist/background-shell.js";
import { resolveRealPath } from "./local-exec/dist/common.js";
import { DEFAULT_COMPUTER_USE_API_WIDTH, DEFAULT_COMPUTER_USE_DISPLAY_HEIGHT, DEFAULT_COMPUTER_USE_DISPLAY_WIDTH, execFileUtf8Async } from "./local-exec/dist/computer-use/display.js";
import { MacComputerUseRPCError, os9 } from "./local-exec/dist/computer-use/mac-rpc-client.js";
import { MacRPCProtocolError } from "./local-exec/dist/computer-use/mac-rpc-protocol.js";
import { DEFAULT_TIMEOUT_MS, execFileUtf82 } from "./local-exec/dist/computer-use/shell.js";
import { CONTROL_OPERATOR_RE, ENV_ASSIGNMENT_PREFIX, FORCED_SHELL_EGRESS_ALLOW_DOMAINS_ENV, FORCED_SHELL_EGRESS_DENY_DOMAINS_ENV, FORCED_SHELL_EGRESS_DEPENDENCY_DENY_DOMAINS_ENV, FORCED_SHELL_EGRESS_DEPENDENCY_REGEX_ENV, FORCED_SHELL_EGRESS_ENV, FORCED_SHELL_EGRESS_EXTRA_DEPENDENCY_REGEX_ENV, FORCED_SHELL_EGRESS_EXTRA_SOURCE_REGEX_ENV, FORCED_SHELL_EGRESS_NETWORK_DEFAULT_ENV, FORCED_SHELL_EGRESS_SOURCE_REGEX_ENV, FORCED_SHELL_EGRESS_WRITABLE_PATHS_ENV, SUBSTITUTION_RE } from "./local-exec/dist/forced-egress.js";
import { DEFAULT_MAX_RIPWALK_THREADS, RIPWALK_THREADS_ENV_VAR, __addDisposableResource15, __disposeResources15, import_node_os9 } from "./local-exec/dist/ripgrep-stream.js";
import { DEFAULT_RIPWALK_CACHE_TTL_MS, RIPWALK_CACHE_TTL_ENV_VAR } from "./local-exec/dist/ripwalk-cache.js";
import { ADMIN_COMMAND_DENYLIST_UNANALYZABLE_REASON, ANSI_C_ESCAPES } from "./local-exec/dist/services/admin-command-denylist.js";
import { import_node_path18 } from "./local-exec/dist/services/common.js";
import { SNAPSHOT_VERSION, import_node_crypto10, import_promises16, log2 } from "./local-exec/dist/services/extensibility/agent-skills-catalog-cache.js";
import { MAX_RULE_OR_SKILL_DESCRIPTION_LENGTH, skillsLog } from "./local-exec/dist/services/extensibility/cursor-rules-service.js";
import { AGENTS_DIR_PATTERNS, MARKDOWN_FILENAMES, RULES_DIR_PATTERN, SKILLS_DIR_PATTERNS, import_node_path38 } from "./local-exec/dist/services/extensibility/nested-extensibility.js";
import { MAX_EXTENSIBILITY_SEARCH_DEPTH, NON_HIDDEN_SKIP_DIRECTORIES, import_node_path39, import_promises17 } from "./local-exec/dist/services/extensibility/recursive-file-discovery.js";
import { BUILTIN_SKILL_CONFIG_DIR, EXCLUDED_CODEX_SKILL_NAMES, SKILL_CONFIG_DIRS, import_node_path37 } from "./local-exec/dist/services/extensibility/skill-discovery.js";
import { import_node_path41 } from "./local-exec/dist/services/extensibility/subagents-service.js";
import { import_node_path19 } from "./local-exec/dist/services/ignore-service.js";
import { balanced } from "./node_modules/.pnpm/balanced-match@4.0.4/node_modules/balanced-match/dist/esm/index.js";
import { EXPANSION_MAX, EXPANSION_MAX_LENGTH, closePattern, commaPattern, escClose, escClosePattern, escComma, escCommaPattern, escOpen, escOpenPattern, escPeriod, escPeriodPattern, escSlash, escSlashPattern, openPattern, periodPattern, slashPattern } from "./node_modules/.pnpm/brace-expansion@5.0.9/node_modules/brace-expansion/dist/esm/index.js";
import { common, dumper, jsYaml, loader, yaml2 } from "./node_modules/.pnpm/js-yaml@4.3.1/node_modules/js-yaml/dist/js-yaml.mjs";
import { ParseOptions } from "./node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/parser.js";
import { parse6 } from "./node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js";
import { ue } from "./node_modules/.pnpm/tar@7.5.21/node_modules/tar/dist/esm/index.min.js";
import { matchers, names, trimLeft, trimRight } from "./node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js";
import { AgentSkill } from "./proto/dist/generated/agent/v1/agent_skills_pb.js";
import { BackgroundShellSpawnResult } from "./proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { CanvasDiagnosticsError, CanvasDiagnosticsResult } from "./proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { CursorRule, CursorRuleType, CursorRuleTypeAgentFetched, CursorRuleTypeFileGlobs, CursorRuleTypeGlobal, CursorRuleTypeManuallyAttached } from "./proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { Diagnostic, DiagnosticSeverity } from "./proto/dist/generated/agent/v1/diagnostics_exec_pb.js";
import { NetworkPolicy, NetworkPolicyLoggingConfig, NetworkPolicy_DefaultAction, SandboxPolicy, SandboxPolicy_ReadBoundaryMode, SandboxPolicy_Type } from "./proto/dist/generated/agent/v1/sandbox_pb.js";
import { ShellPermissionDenied, ShellRejected } from "./proto/dist/generated/agent/v1/shell_exec_pb.js";
import { CustomSubagentPermissionMode } from "./proto/dist/generated/agent/v1/subagents_pb.js";
import { Position, Range2 } from "./proto/dist/generated/agent/v1/utils_pb.js";
import { BashState } from "./shell-exec/dist/bash.js";
import { INSECURE_NONE_SANDBOX_POLICY, import_node_path17 } from "./shell-exec/dist/index.js";
import { LazyTerminalExecutor } from "./shell-exec/dist/lazy.js";
import { NaiveTerminalExecutor } from "./shell-exec/dist/naive.js";
import { OutputSuppressionController, SHELL_OUTPUT_SUPPRESSED_NOTICE } from "./shell-exec/dist/output-suppression.js";
import { PowerShellState } from "./shell-exec/dist/powershell.js";
import { SandboxUnsupportedError } from "./shell-exec/dist/sandbox/sandbox.js";
import { TREE_SITTER_STUBBED_ERROR_CODE, fileRedirectOperatorTypes, import_tree_sitter, import_tree_sitter_bash, redirectNodeTypes } from "./shell-exec/dist/shell-parser.js";
import { KnownShellExecutor } from "./shell-exec/dist/types.js";
import { ZshState } from "./shell-exec/dist/zsh.js";
import { import_gray_matter, parseJavascriptFrontmatterAsPlaintext } from "./utils/dist/gray-matter.js";
import { spawnWorkload } from "./utils/dist/workload-spawn.js";
export function getShellExecutablePath(shell) {
    switch(shell){
        case KnownShellExecutor.Zsh:
        case KnownShellExecutor.ZshLight:
            return findActualExecutable("zsh", []).cmd;
        case KnownShellExecutor.Bash:
            return findActualExecutable("bash", []).cmd;
        case KnownShellExecutor.PowerShell:
            return getPowerShellExecutable();
        default:
            return process.env.SHELL || "/bin/sh";
    }
}
function commandExists(command) {
    try {
        return findActualExecutable(command, []).cmd !== command;
    } catch (_e2) {
        return false;
    }
}
function getGitBashPathFromExePath(exepath) {
    const normalizedExePath = exepath.replace(/[\\/]+$/, "");
    const basename18 = import_node_path17.default.win32.basename(normalizedExePath).toLowerCase();
    if (basename18 === "bash.exe") {
        return normalizedExePath;
    }
    if (basename18 === "bin") {
        return import_node_path17.default.win32.join(normalizedExePath, "bash.exe");
    }
    return import_node_path17.default.win32.join(normalizedExePath, "bin", "bash.exe");
}
function detectGitBashFromEnvironment() {
    if (process.platform !== "win32") {
        return void 0;
    }
    const msystem = process.env.MSYSTEM;
    if (!msystem) {
        return void 0;
    }
    const exepath = process.env.EXEPATH;
    if (exepath) {
        return getGitBashPathFromExePath(exepath);
    }
    const commonPaths = [
        "C:\\Program Files\\Git\\bin\\bash.exe",
        "C:\\Program Files (x86)\\Git\\bin\\bash.exe"
    ];
    for (const candidatePath of commonPaths){
        try {
            const result = findActualExecutable(candidatePath, []);
            if (result.cmd === candidatePath) {
                return candidatePath;
            }
        } catch  {}
    }
    return "C:\\Program Files\\Git\\bin\\bash.exe";
}
export function getSuggestedShell(userTerminalHint) {
    if (userTerminalHint === KnownShellExecutor.ZshLight) {
        return KnownShellExecutor.ZshLight;
    }
    const shell = userTerminalHint || process.env.SHELL || "";
    const isWindows5 = process.platform === "win32";
    const gitBashFromEnv = isWindows5 && !userTerminalHint ? detectGitBashFromEnvironment() : void 0;
    const isGitBash = gitBashFromEnv !== void 0 || /git.*bash\.exe$/i.test(shell) || /program.*git.*bin.*bash\.exe$/i.test(shell);
    const bashIsOkay = !isWindows5 || isGitBash;
    if (shell.includes("zsh")) {
        return KnownShellExecutor.Zsh;
    } else if (shell.includes("bash") && bashIsOkay) {
        return KnownShellExecutor.Bash;
    } else if (shell.includes("pwsh") || shell.includes("powershell")) {
        return KnownShellExecutor.PowerShell;
    } else if (gitBashFromEnv) {
        return KnownShellExecutor.Bash;
    } else {
        if (isWindows5) {
            if (commandExists("pwsh") || commandExists("powershell")) {
                return KnownShellExecutor.PowerShell;
            }
        }
        if (commandExists("zsh")) {
            return KnownShellExecutor.Zsh;
        } else if (commandExists("bash") && bashIsOkay) {
            return KnownShellExecutor.Bash;
        } else if (commandExists("pwsh") || commandExists("powershell")) {
            return KnownShellExecutor.PowerShell;
        } else {
            return KnownShellExecutor.Naive;
        }
    }
}
export function createDefaultTerminalExecutor(options2) {
    let effectiveOptions = options2;
    if (!options2?.userTerminalHint) {
        const gitBashPath = detectGitBashFromEnvironment();
        if (gitBashPath) {
            effectiveOptions = {
                ...options2,
                userTerminalHint: gitBashPath
            };
        }
    }
    const suggestedShell = getSuggestedShell(effectiveOptions?.userTerminalHint ?? "");
    switch(suggestedShell){
        case KnownShellExecutor.Zsh:
            return new LazyTerminalExecutor(()=>initZshState(effectiveOptions));
        case KnownShellExecutor.Bash:
            return new LazyTerminalExecutor(()=>initBashState(effectiveOptions));
        case KnownShellExecutor.PowerShell:
            return new LazyTerminalExecutor(()=>initPowerShellState());
        case KnownShellExecutor.ZshLight:
            return new LazyTerminalExecutor(()=>initZshLightState(effectiveOptions));
        default:
            return createNaiveTerminalExecutor(effectiveOptions);
    }
}
function isStubbedTreeSitterError(error3) {
    return typeof error3 === "object" && error3 !== null && error3.code === TREE_SITTER_STUBBED_ERROR_CODE;
}
function getParser() {
    if (cachedParser !== void 0) {
        return cachedParser;
    }
    try {
        const parser = new import_tree_sitter.default();
        parser.setLanguage(import_tree_sitter_bash.default);
        cachedParser = parser;
    } catch (error3) {
        if (!isStubbedTreeSitterError(error3)) {
            throw error3;
        }
        cachedParser = null;
        console.warn("shell-parser: tree-sitter natives are unavailable in this artifact; shell command analysis degrades to parsingFailed");
    }
    return cachedParser;
}
export function analyzeShellCommand(cmd) {
    const parser = getParser();
    if (parser === null) {
        return {
            legacy: {
                simpleCommands: [],
                hasInputRedirect: false,
                hasOutputRedirect: false
            },
            structured: {
                parsingFailed: true,
                executableCommands: [],
                hasRedirects: false,
                hasCommandSubstitution: false,
                redirects: []
            }
        };
    }
    const tree = parser.parse(cmd);
    const processedRedirectNodes = new WeakSet();
    let sawRedirect = false;
    let allRedirectsAreAllowlistSafe = true;
    const legacy = {
        simpleCommands: [],
        hasInputRedirect: false,
        hasOutputRedirect: false
    };
    const structured = {
        parsingFailed: false,
        executableCommands: [],
        hasRedirects: false,
        hasCommandSubstitution: false,
        redirects: []
    };
    const recordRedirect = (isAllowlistSafe)=>{
        sawRedirect = true;
        structured.hasRedirects = true;
        allRedirectsAreAllowlistSafe = allRedirectsAreAllowlistSafe && isAllowlistSafe;
    };
    const markRedirectsFromText = (txt)=>{
        if (/(^|\s)[0-9]*<<?<?/.test(txt)) {
            legacy.hasInputRedirect = true;
        }
        if (/(^|\s)[0-9]*>>/.test(txt) || /(^|\s)[0-9]*>(\||&)?/.test(txt) || /(^|\s)&>/.test(txt) || /(^|\s)[0-9]+>&[0-9]+/.test(txt)) {
            legacy.hasOutputRedirect = true;
        }
    };
    const getFileRedirectParts = (node)=>{
        const children = node.children;
        const operatorIndex = children.findIndex((child)=>fileRedirectOperatorTypes.has(child.type));
        if (operatorIndex === -1) {
            return void 0;
        }
        return {
            operator: children[operatorIndex]?.type ?? "",
            target: children.slice(operatorIndex + 1).find((child)=>child.type !== "comment")
        };
    };
    const parseFd = (node)=>{
        if (!node || !/^\d+$/.test(node.text)) {
            return void 0;
        }
        return Number.parseInt(node.text, 10);
    };
    const getExplicitRedirectFd = (node)=>parseFd(node.children.find((child)=>child.type === "file_descriptor"));
    const createRedirectClassificationState2 = ()=>({
            fdTargets: new Map([
                [
                    0,
                    "original-stdin"
                ],
                [
                    1,
                    "original-stdout"
                ],
                [
                    2,
                    "original-stderr"
                ]
            ])
        });
    const isAllowlistSafeOutputTarget2 = (target)=>target === "original-stdout" || target === "original-stderr" || target === "dev-null";
    const getRedirectDestinationFds = (node, operator)=>{
        if (operator === "&>" || operator === "&>>") {
            return [
                1,
                2
            ];
        }
        const explicitFd = getExplicitRedirectFd(node);
        if (explicitFd !== void 0) {
            return [
                explicitFd
            ];
        }
        return operator.startsWith("<") ? [
            0
        ] : [
            1
        ];
    };
    const markRedirectLegacyFields = (node)=>{
        markRedirectsFromText(node.text);
        if (node.type === "heredoc_redirect" || node.type === "herestring_redirect") {
            legacy.hasInputRedirect = true;
        }
    };
    const getHeredocReceiverCommandName = (node)=>{
        const redirectedStatement = node.parent;
        if (redirectedStatement?.type !== "redirected_statement") {
            return void 0;
        }
        const commandNode = redirectedStatement.children.find((child)=>child.type === "command");
        const commandName = commandNode?.childForFieldName("name");
        return commandName?.text;
    };
    const isInsideUnquotedCommandSubstitution = (node)=>{
        let current = node.parent;
        while(current){
            if (current.type === "command_substitution" && current.parent?.type !== "string") {
                return true;
            }
            current = current.parent;
        }
        return false;
    };
    const classifyHeredocRedirect = (node)=>{
        const receiverCommandName = getHeredocReceiverCommandName(node);
        const isAllowlistSafe = receiverCommandName !== void 0 && !isInsideUnquotedCommandSubstitution(node);
        const redirect = {
            operator: isAllowlistSafe ? "<<" : "",
            destinationFds: isAllowlistSafe ? [
                0
            ] : [],
            targetNodeType: node.type
        };
        if (isAllowlistSafe) {
            redirect.targetText = receiverCommandName;
        }
        return {
            redirect,
            isAllowlistSafe
        };
    };
    const isExactDevNullTarget = (node)=>{
        if (!node) {
            return false;
        }
        if (node.type === "word") {
            return node.text === "/dev/null";
        }
        if (node.type === "raw_string") {
            return node.text === "'/dev/null'";
        }
        if (node.type === "string") {
            const namedChildren = node.namedChildren;
            return namedChildren.length === 1 && namedChildren[0]?.type === "string_content" && namedChildren[0].text === "/dev/null";
        }
        return false;
    };
    const getStaticRedirectTargetText = (node)=>{
        if (!node) {
            return void 0;
        }
        if (node.type === "word") {
            return node.namedChildren.length === 0 ? node.text : void 0;
        }
        if (node.type === "number") {
            return node.text;
        }
        if (node.type === "raw_string") {
            if (node.text.length < 2) {
                return void 0;
            }
            return node.text.slice(1, -1);
        }
        if (node.type === "string") {
            const namedChildren = node.namedChildren;
            if (namedChildren.length === 0 || namedChildren.some((child)=>child.type !== "string_content")) {
                return void 0;
            }
            return namedChildren.map((child)=>child.text).join("");
        }
        return void 0;
    };
    const classifyFileRedirect = (node, state)=>{
        const parts = getFileRedirectParts(node);
        if (!parts) {
            return false;
        }
        const { operator, target } = parts;
        const destinationFds = getRedirectDestinationFds(node, operator);
        const targetText = getStaticRedirectTargetText(target);
        const redirect = {
            operator,
            destinationFds,
            targetNodeType: target?.type ?? ""
        };
        if (targetText !== void 0) {
            redirect.targetText = targetText;
        }
        structured.redirects.push(redirect);
        if (operator === ">&") {
            const sourceFd = parseFd(target);
            const sourceTarget = sourceFd === void 0 ? void 0 : state.fdTargets.get(sourceFd);
            if (!isAllowlistSafeOutputTarget2(sourceTarget)) {
                for (const fd of destinationFds){
                    state.fdTargets.set(fd, "unsafe");
                }
                return false;
            }
            for (const fd of destinationFds){
                state.fdTargets.set(fd, sourceTarget);
            }
            return true;
        }
        if (operator === "<&") {
            const sourceFd = parseFd(target);
            const sourceTarget = sourceFd === void 0 ? void 0 : state.fdTargets.get(sourceFd);
            if (sourceTarget !== "dev-null") {
                for (const fd of destinationFds){
                    state.fdTargets.set(fd, "unsafe");
                }
                return false;
            }
            for (const fd of destinationFds){
                state.fdTargets.set(fd, sourceTarget);
            }
            return true;
        }
        if (!isExactDevNullTarget(target)) {
            for (const fd of destinationFds){
                state.fdTargets.set(fd, "unsafe");
            }
            return false;
        }
        for (const fd of destinationFds){
            state.fdTargets.set(fd, "dev-null");
        }
        return true;
    };
    const processRedirectNode = (node, state)=>{
        if (processedRedirectNodes.has(node)) {
            return;
        }
        processedRedirectNodes.add(node);
        markRedirectLegacyFields(node);
        if (node.type === "heredoc_redirect") {
            const { redirect, isAllowlistSafe } = classifyHeredocRedirect(node);
            structured.redirects.push(redirect);
            recordRedirect(isAllowlistSafe);
            return;
        }
        if (node.type !== "file_redirect") {
            structured.redirects.push({
                operator: "",
                destinationFds: [],
                targetNodeType: node.type
            });
            recordRedirect(false);
            return;
        }
        recordRedirect(classifyFileRedirect(node, state));
    };
    const processDirectRedirectChildren = (node)=>{
        const state = createRedirectClassificationState2();
        for (const child of node.children){
            if (redirectNodeTypes.has(child.type)) {
                processRedirectNode(child, state);
            }
        }
    };
    function traverse(node) {
        const type2 = node.type;
        processDirectRedirectChildren(node);
        if (redirectNodeTypes.has(type2) && !processedRedirectNodes.has(node)) {
            processRedirectNode(node, createRedirectClassificationState2());
        }
        if (type2 === "command") {
            const commandName = node.childForFieldName("name");
            if (commandName === null) {
                structured.parsingFailed = true;
            } else {
                legacy.simpleCommands.push(commandName.text);
                let commandFullText = commandName.text;
                const commandArgs = [];
                for (const arg of node.childrenForFieldName("argument")){
                    commandArgs.push({
                        type: arg.type,
                        value: arg.text
                    });
                    commandFullText += ` ${arg.text}`;
                }
                structured.executableCommands.push({
                    name: commandName.text,
                    args: commandArgs,
                    fullText: commandFullText
                });
            }
        }
        if (type2 === "command_name" || type2 === "simple_command") {
            if (type2 === "command_name" && !legacy.simpleCommands.includes(node.text)) {
                legacy.simpleCommands.push(node.text);
            } else if (type2 === "simple_command") {
                const firstChild = node.firstNamedChild;
                if (firstChild && firstChild.type === "command_name") {
                    if (!legacy.simpleCommands.includes(firstChild.text)) {
                        legacy.simpleCommands.push(firstChild.text);
                    }
                } else {
                    legacy.simpleCommands.push(node.text);
                }
            }
        }
        if (type2 === "command_substitution" || type2 === "process_substitution") {
            structured.hasCommandSubstitution = true;
        }
        for (const child of node.children){
            traverse(child);
        }
    }
    traverse(tree.rootNode);
    if (sawRedirect) {
        structured.allRedirectsAreDevNull = allRedirectsAreAllowlistSafe;
    }
    return {
        legacy,
        structured
    };
}
var cachedParser;
export function isForcedShellEgressEnabled() {
    if (cachedEnabled === void 0) {
        const raw = (process.env[FORCED_SHELL_EGRESS_ENV] ?? "").trim().toLowerCase();
        cachedEnabled = raw !== "" && raw !== "0" && raw !== "false" && raw !== "off";
    }
    return cachedEnabled;
}
function requiredRegexSource(envVar) {
    const raw = (process.env[envVar] ?? "").trim();
    if (!raw) {
        return void 0;
    }
    try {
        new RegExp(raw, "i");
        return raw;
    } catch (error3) {
        throw new Error(`[forced-egress] invalid regex in ${envVar}: ${String(error3)}`);
    }
}
function parseDomainListEnv(envVar) {
    return (process.env[envVar] ?? "").split(",").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
}
function parseWritablePathsEnv(envVar) {
    const entries = (process.env[envVar] ?? "").split(":").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
    const absolute = entries.filter((entry)=>entry.startsWith("/"));
    const dropped = entries.length - absolute.length;
    if (dropped > 0) {
        console.error(`[forced-egress] ignoring ${dropped} non-absolute path(s) in ${envVar}.`);
    }
    return absolute;
}
function policyOverrides() {
    if (cachedPolicyOverrides === void 0) {
        const rawDefault = (process.env[FORCED_SHELL_EGRESS_NETWORK_DEFAULT_ENV] ?? "").trim().toLowerCase();
        let networkDefault = "deny";
        if (rawDefault === "allow" || rawDefault === "deny") {
            networkDefault = rawDefault;
        } else if (rawDefault !== "") {
            console.error(`[forced-egress] ignoring invalid value in ${FORCED_SHELL_EGRESS_NETWORK_DEFAULT_ENV} (expected "allow" or "deny"); using "deny".`);
        }
        const denyDomains = parseDomainListEnv(FORCED_SHELL_EGRESS_DENY_DOMAINS_ENV);
        const rawDependencyDeny = (process.env[FORCED_SHELL_EGRESS_DEPENDENCY_DENY_DOMAINS_ENV] ?? "").trim();
        let dependencyDenyDomains = denyDomains;
        if (rawDependencyDeny.toLowerCase() === "none") {
            dependencyDenyDomains = [];
        } else if (rawDependencyDeny !== "") {
            dependencyDenyDomains = parseDomainListEnv(FORCED_SHELL_EGRESS_DEPENDENCY_DENY_DOMAINS_ENV);
        }
        cachedPolicyOverrides = {
            networkDefault,
            denyDomains,
            dependencyDenyDomains,
            allowDomains: parseDomainListEnv(FORCED_SHELL_EGRESS_ALLOW_DOMAINS_ENV),
            writablePaths: parseWritablePathsEnv(FORCED_SHELL_EGRESS_WRITABLE_PATHS_ENV)
        };
    }
    return cachedPolicyOverrides;
}
function compileConfigurablePattern(overrideEnv, extraEnv, options2 = {}) {
    const parts = [
        requiredRegexSource(overrideEnv),
        requiredRegexSource(extraEnv)
    ].filter((part)=>part !== void 0).map((part)=>`(?:${part})`);
    if (parts.length === 0) {
        return null;
    }
    const body = parts.join("|");
    const pattern = options2.anchorToExecutable ? `^\\s*${ENV_ASSIGNMENT_PREFIX}(?:${body})` : body;
    return new RegExp(pattern, "i");
}
function dependencyRegex() {
    if (cachedDependencyRe === void 0) {
        cachedDependencyRe = compileConfigurablePattern(FORCED_SHELL_EGRESS_DEPENDENCY_REGEX_ENV, FORCED_SHELL_EGRESS_EXTRA_DEPENDENCY_REGEX_ENV, {
            anchorToExecutable: true
        });
    }
    return cachedDependencyRe;
}
function sourceLookupRegex() {
    if (cachedSourceLookupRe === void 0) {
        cachedSourceLookupRe = compileConfigurablePattern(FORCED_SHELL_EGRESS_SOURCE_REGEX_ENV, FORCED_SHELL_EGRESS_EXTRA_SOURCE_REGEX_ENV);
    }
    return cachedSourceLookupRe;
}
function forcedLoopbackEgressPolicy() {
    const overrides = policyOverrides();
    return {
        type: "workspace_readwrite",
        ...overrides.writablePaths.length > 0 ? {
            additionalReadwritePaths: overrides.writablePaths
        } : {},
        networkPolicy: {
            version: 1,
            default: overrides.networkDefault,
            allow: [
                "127.0.0.0/8",
                "::1/128",
                "localhost",
                ...overrides.allowDomains
            ],
            ...overrides.denyDomains.length > 0 ? {
                deny: overrides.denyDomains
            } : {}
        },
        networkPolicyStrict: true,
        skipStatsigDefaults: true,
        enableSharedBuildCache: true
    };
}
function forcedDependencyEgressPolicy() {
    const overrides = policyOverrides();
    return {
        type: "workspace_readwrite",
        ...overrides.writablePaths.length > 0 ? {
            additionalReadwritePaths: overrides.writablePaths
        } : {},
        networkPolicy: {
            version: 1,
            default: "allow",
            ...overrides.dependencyDenyDomains.length > 0 ? {
                deny: overrides.dependencyDenyDomains
            } : {}
        },
        skipStatsigDefaults: true,
        enableSharedBuildCache: true
    };
}
export function forcedShellSandboxPolicy(command, parsingResult) {
    const loopback = forcedLoopbackEgressPolicy();
    const dependencyRe = dependencyRegex();
    if (dependencyRe === null) {
        return loopback;
    }
    const commands = parsingResult?.executableCommands ?? [];
    if (parsingResult?.parsingFailed || commands.length === 0) {
        return loopback;
    }
    if (SUBSTITUTION_RE.test(command)) {
        return loopback;
    }
    const sourceLookupRe = sourceLookupRegex();
    for (const cmd of commands){
        const text4 = cmd.fullText?.trim() || cmd.name?.trim() || "";
        if (!text4 || sourceLookupRe?.test(text4) || CONTROL_OPERATOR_RE.test(text4)) {
            return loopback;
        }
    }
    const allDependency = commands.every((cmd)=>dependencyRe.test(cmd.fullText?.trim() || cmd.name?.trim() || ""));
    return allDependency ? forcedDependencyEgressPolicy() : loopback;
}
var cachedEnabled, cachedDependencyRe, cachedSourceLookupRe, cachedPolicyOverrides;
function convertProtoToNetworkPolicy(policy) {
    if (!policy) return void 0;
    const result = {};
    if (policy.version !== void 0) {
        result.version = policy.version;
    }
    if (policy.defaultAction !== void 0) {
        switch(policy.defaultAction){
            case NetworkPolicy_DefaultAction.ALLOW:
                result.default = "allow";
                break;
            case NetworkPolicy_DefaultAction.DENY:
                result.default = "deny";
                break;
        }
    }
    if (policy.deny && policy.deny.length > 0) {
        result.deny = policy.deny;
    }
    if (policy.allow && policy.allow.length > 0) {
        result.allow = policy.allow;
    }
    if (policy.logging) {
        result.logging = convertProtoToNetworkPolicyLoggingConfig(policy.logging);
    }
    return result;
}
function convertNetworkPolicyToProto(policy) {
    if (!policy) return void 0;
    let defaultAction;
    if (policy.default === "allow") {
        defaultAction = NetworkPolicy_DefaultAction.ALLOW;
    } else if (policy.default === "deny") {
        defaultAction = NetworkPolicy_DefaultAction.DENY;
    }
    return new NetworkPolicy({
        version: policy.version,
        defaultAction,
        deny: policy.deny ?? [],
        allow: policy.allow ?? [],
        logging: policy.logging ? convertNetworkPolicyLoggingConfigToProto(policy.logging) : void 0
    });
}
function convertProtoToNetworkPolicyLoggingConfig(config2) {
    const result = {};
    if (config2.decisionLogPath) {
        result.decisionLogPath = config2.decisionLogPath;
    }
    if (config2.logFormat === "jsonl") {
        result.logFormat = "jsonl";
    }
    return result;
}
function convertNetworkPolicyLoggingConfigToProto(config2) {
    return new NetworkPolicyLoggingConfig({
        decisionLogPath: config2.decisionLogPath,
        logFormat: config2.logFormat
    });
}
function resolveNetworkPolicy(policy) {
    const explicit = convertProtoToNetworkPolicy(policy.networkPolicy);
    if (explicit) return explicit;
    return policy.networkAccess ? networkAllowAllPolicy() : networkDisabledPolicy();
}
function convertProtoToReadBoundary(mode) {
    switch(mode){
        case SandboxPolicy_ReadBoundaryMode.SYSTEM:
            return "system";
        case SandboxPolicy_ReadBoundaryMode.WORKSPACE:
            return "workspace";
        case SandboxPolicy_ReadBoundaryMode.UNSPECIFIED:
        default:
            return void 0;
    }
}
function convertReadBoundaryToProto(boundary) {
    switch(boundary){
        case "system":
            return SandboxPolicy_ReadBoundaryMode.SYSTEM;
        case "workspace":
            return SandboxPolicy_ReadBoundaryMode.WORKSPACE;
        default:
            return SandboxPolicy_ReadBoundaryMode.UNSPECIFIED;
    }
}
function sandboxedProtoFields(policy) {
    const readBoundary = convertProtoToReadBoundary(policy.readBoundary);
    const paths = policy.additionalReadPaths ?? [];
    return {
        readBoundary,
        additionalReadPaths: readBoundary === "workspace" && paths.length > 0 ? paths : void 0
    };
}
export function convertProtoToInternalPolicy(policy) {
    if (!policy) {
        return {
            type: "insecure_none"
        };
    }
    switch(policy.type){
        case SandboxPolicy_Type.INSECURE_NONE:
        case SandboxPolicy_Type.UNSPECIFIED:
            return {
                type: "insecure_none",
                allowlistEscalated: policy.allowlistEscalated,
                enableSharedBuildCache: policy.enableSharedBuildCache,
                debugOutputDir: policy.debugOutputDir,
                captureDenies: policy.captureDenies
            };
        case SandboxPolicy_Type.WORKSPACE_READWRITE:
            return {
                type: "workspace_readwrite",
                networkPolicy: resolveNetworkPolicy(policy),
                skipStatsigDefaults: policy.skipStatsigDefaults,
                additionalReadwritePaths: policy.additionalReadwritePaths,
                additionalReadonlyPaths: policy.additionalReadonlyPaths,
                disableTmpWrite: policy.disableTmpWrite,
                enableSharedBuildCache: policy.enableSharedBuildCache,
                debugOutputDir: policy.debugOutputDir,
                captureDenies: policy.captureDenies,
                networkPolicyStrict: policy.networkPolicyStrict,
                ...sandboxedProtoFields(policy)
            };
        case SandboxPolicy_Type.WORKSPACE_READONLY:
            return {
                type: "workspace_readonly",
                networkPolicy: resolveNetworkPolicy(policy),
                skipStatsigDefaults: policy.skipStatsigDefaults,
                additionalReadonlyPaths: policy.additionalReadonlyPaths,
                disableTmpWrite: policy.disableTmpWrite,
                enableSharedBuildCache: policy.enableSharedBuildCache,
                debugOutputDir: policy.debugOutputDir,
                captureDenies: policy.captureDenies,
                networkPolicyStrict: policy.networkPolicyStrict,
                ...sandboxedProtoFields(policy)
            };
        default:
            return {
                type: "insecure_none"
            };
    }
}
export function convertInternalToProtoPolicy(policy) {
    if (!policy) return void 0;
    if (policy.type === "insecure_none") {
        return new SandboxPolicy({
            type: SandboxPolicy_Type.INSECURE_NONE,
            allowlistEscalated: policy.allowlistEscalated,
            enableSharedBuildCache: policy.enableSharedBuildCache,
            debugOutputDir: policy.debugOutputDir,
            captureDenies: policy.captureDenies
        });
    }
    if (policy.type === "workspace_readwrite") {
        return new SandboxPolicy({
            type: SandboxPolicy_Type.WORKSPACE_READWRITE,
            networkAccess: isNetworkEnabledByPolicy(policy.networkPolicy),
            skipStatsigDefaults: policy.skipStatsigDefaults,
            additionalReadwritePaths: policy.additionalReadwritePaths ?? [],
            additionalReadonlyPaths: policy.additionalReadonlyPaths ?? [],
            disableTmpWrite: policy.disableTmpWrite,
            enableSharedBuildCache: policy.enableSharedBuildCache,
            debugOutputDir: policy.debugOutputDir,
            captureDenies: policy.captureDenies,
            networkPolicy: convertNetworkPolicyToProto(policy.networkPolicy),
            networkPolicyStrict: policy.networkPolicyStrict,
            readBoundary: convertReadBoundaryToProto(policy.readBoundary),
            additionalReadPaths: policy.readBoundary === "workspace" ? policy.additionalReadPaths ?? [] : []
        });
    }
    if (policy.type === "workspace_readonly") {
        return new SandboxPolicy({
            type: SandboxPolicy_Type.WORKSPACE_READONLY,
            networkAccess: isNetworkEnabledByPolicy(policy.networkPolicy),
            skipStatsigDefaults: policy.skipStatsigDefaults,
            additionalReadonlyPaths: policy.additionalReadonlyPaths ?? [],
            disableTmpWrite: policy.disableTmpWrite,
            enableSharedBuildCache: policy.enableSharedBuildCache,
            debugOutputDir: policy.debugOutputDir,
            captureDenies: policy.captureDenies,
            networkPolicy: convertNetworkPolicyToProto(policy.networkPolicy),
            networkPolicyStrict: policy.networkPolicyStrict,
            readBoundary: convertReadBoundaryToProto(policy.readBoundary),
            additionalReadPaths: policy.readBoundary === "workspace" ? policy.additionalReadPaths ?? [] : []
        });
    }
    return new SandboxPolicy({
        type: SandboxPolicy_Type.INSECURE_NONE
    });
}
export function deriveAdminCommandDenylistMatchForms({ command, parsingResult }) {
    return [
        ...new Set([
            command,
            ...parsingResult.executableCommands.map((c)=>c.fullText)
        ])
    ];
}
function canonicalizeCommandForDenylistMatching(command) {
    let result = "";
    let mode = "plain";
    let i = 0;
    while(i < command.length){
        const character = command[i];
        if (mode === "plain") {
            if (character === "$" && command[i + 1] === "'") {
                mode = "ansi";
                i += 2;
            } else if (character === "$" && command[i + 1] === '"') {
                mode = "double";
                i += 2;
            } else if (character === "'") {
                mode = "single";
                i++;
            } else if (character === '"') {
                mode = "double";
                i++;
            } else if (character === "\\" && i + 1 < command.length) {
                if (command[i + 1] !== "\n") {
                    result += command[i + 1];
                }
                i += 2;
            } else {
                result += character;
                i++;
            }
            continue;
        }
        if (mode === "single") {
            if (character === "'") {
                mode = "plain";
            } else {
                result += character;
            }
            i++;
            continue;
        }
        if (mode === "double") {
            if (character === '"') {
                mode = "plain";
                i++;
                continue;
            }
            if (character === "\\" && i + 1 < command.length) {
                const escaped2 = command[i + 1];
                if (escaped2 === "$" || escaped2 === "`" || escaped2 === '"' || escaped2 === "\\" || escaped2 === "\n") {
                    if (escaped2 !== "\n") {
                        result += escaped2;
                    }
                    i += 2;
                    continue;
                }
            }
            result += character;
            i++;
            continue;
        }
        if (character === "'") {
            mode = "plain";
            i++;
            continue;
        }
        if (character !== "\\" || i + 1 >= command.length) {
            result += character;
            i++;
            continue;
        }
        const escaped = command[i + 1];
        const namedEscape = ANSI_C_ESCAPES[escaped];
        if (namedEscape !== void 0) {
            result += namedEscape;
            i += 2;
            continue;
        }
        const encoded = escaped === "x" ? command.slice(i + 2).match(/^[0-9a-fA-F]{1,2}/)?.[0] : escaped === "u" ? command.slice(i + 2).match(/^[0-9a-fA-F]{1,4}/)?.[0] : escaped === "U" ? command.slice(i + 2).match(/^[0-9a-fA-F]{1,8}/)?.[0] : command.slice(i + 1).match(/^[0-7]{1,3}/)?.[0];
        const isUnicodeEscape = escaped === "u" || escaped === "U";
        const radix = escaped === "x" || isUnicodeEscape ? 16 : 8;
        if (encoded !== void 0) {
            const value = Number.parseInt(encoded, radix);
            if (!isUnicodeEscape || value <= 1114111) {
                result += isUnicodeEscape ? String.fromCodePoint(value) : String.fromCharCode(value);
                i += encoded.length + (radix === 16 ? 2 : 1);
                continue;
            }
        }
        result += escaped;
        i += 2;
    }
    return normalizeAdminCommandDenylistText(result);
}
function matchAdminCommandDenylistRule({ rule, command }) {
    const trimmedRule = normalizeAdminCommandDenylistText(rule).trim();
    if (trimmedRule.length === 0) {
        return false;
    }
    if (getAdminCommandDenylistRuleError(trimmedRule) !== null) {
        return true;
    }
    return [
        command.trim(),
        normalizeAdminCommandDenylistText(command).trim(),
        canonicalizeCommandForDenylistMatching(command).trim()
    ].some((commandForm)=>matchRuleAgainstCommand(trimmedRule, commandForm));
}
function matchRuleAgainstCommand(trimmedRule, trimmedCommand) {
    const colonRule = parseAdminCommandDenylistColonRule(trimmedRule);
    if (colonRule !== void 0) {
        const { executablePattern, argsPattern } = colonRule;
        const spaceIdx = trimmedCommand.indexOf(" ");
        const executable = spaceIdx === -1 ? trimmedCommand : trimmedCommand.slice(0, spaceIdx);
        const argsText = spaceIdx === -1 ? "" : trimmedCommand.slice(spaceIdx + 1).trim();
        if (matchesCommandGlob(executablePattern, executable) && matchesCommandGlob(argsPattern, argsText)) {
            return true;
        }
    }
    if (trimmedRule.includes("*")) {
        return matchesCommandGlob(trimmedRule, trimmedCommand);
    }
    return trimmedCommand === trimmedRule || trimmedCommand.startsWith(`${trimmedRule} `);
}
export function findMatchingAdminCommandDenylistPattern({ matchForms, blockedCommands }) {
    const rules = blockedCommands.map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
    if (rules.length === 0) {
        return void 0;
    }
    const forms = matchForms.map((form)=>form.trim()).filter((form)=>form.length > 0);
    const effectiveForms = forms.length > 0 ? forms : [
        ""
    ];
    for (const rule of rules){
        if (effectiveForms.some((command)=>matchAdminCommandDenylistRule({
                rule,
                command
            }))) {
            return rule;
        }
    }
    return void 0;
}
export function formatAdminCommandDenylistBlockReason(pattern) {
    return `Denied: this command was blocked by administrator policy (denylist rule: ${pattern}) and was not executed. It cannot be approved from this conversation; only a user can run it manually outside the agent. You may continue working on the task.`;
}
export function getModelShellAdminCommandDenylistBlockReason({ command, parsingResult, blockedCommands }) {
    if (blockedCommands.length === 0) {
        return void 0;
    }
    if (parsingResult.parsingFailed || parsingResult.executableCommands.length === 0) {
        return ADMIN_COMMAND_DENYLIST_UNANALYZABLE_REASON;
    }
    const matchedPattern = findMatchingAdminCommandDenylistPattern({
        matchForms: deriveAdminCommandDenylistMatchForms({
            command,
            parsingResult
        }),
        blockedCommands
    });
    return matchedPattern === void 0 ? void 0 : formatAdminCommandDenylistBlockReason(matchedPattern);
}
export function isRipgrepInvocationRecordingEnabled() {
    return _handler !== void 0;
}
export function recordRipgrepInvocation(record3) {
    if (_handler === void 0) {
        return;
    }
    try {
        _handler(record3);
    } catch  {}
}
var _handler;
function getRipwalkThreadCount(env = process.env) {
    const raw = env[RIPWALK_THREADS_ENV_VAR]?.trim();
    if (raw !== void 0 && raw !== "") {
        const override = Number(raw);
        if (Number.isInteger(override) && override >= 0) {
            return override === 0 ? void 0 : override;
        }
    }
    return Math.min(DEFAULT_MAX_RIPWALK_THREADS, (0, import_node_os9.availableParallelism)());
}
function spawnRipgrep(ctx, args, cwd, sandboxPolicy) {
    const proc = spawnInSandbox(getRipgrepBinaryPath(), args, {
        cwd
    }, sandboxPolicy);
    const stderrChunks = [];
    proc.stderr?.on("data", (chunk)=>{
        stderrChunks.push(chunk);
    });
    const processExit = new Promise((resolve36, reject2)=>{
        proc.on("error", reject2);
        proc.on("close", (code)=>resolve36(code ?? 0));
    });
    processExit.catch(()=>void 0);
    if (!proc.stdout) {
        throw new Error("No stdout from ripgrep process");
    }
    const aborted2 = new Promise((resolve36)=>{
        if (ctx.signal.aborted) {
            resolve36("aborted");
            return;
        }
        ctx.signal.addEventListener("abort", ()=>resolve36("aborted"), {
            once: true
        });
    });
    return {
        stdout: proc.stdout,
        processExit,
        stderr: ()=>Buffer.concat(stderrChunks).toString(),
        aborted: aborted2,
        [Symbol.dispose] () {
            proc.kill();
        }
    };
}
export function ripwalk(ctx, { root, searchPaths = [], includeGlobs = [], excludeGlobs = [], caseSensitive = false, cursorIgnoreFiles = [], sandboxPolicy = {
    type: "insecure_none"
}, noIgnoreVcs = false, followSymlinks = false, source = "ripwalk" }) {
    const args = [
        "--files",
        "--hidden",
        "--no-require-git",
        "--no-config",
        "--color=never"
    ];
    const threads = getRipwalkThreadCount();
    if (threads !== void 0) {
        args.push("--threads", String(threads));
    }
    if (followSymlinks) {
        args.push("--follow");
    }
    if (noIgnoreVcs) {
        args.push("--no-ignore-vcs");
    }
    if (caseSensitive) {
        args.push("--case-sensitive");
    }
    for (const ignoreFile of cursorIgnoreFiles){
        args.push("--cursor-ignore", ignoreFile);
    }
    for (const glob of includeGlobs){
        args.push("--iglob", glob);
    }
    for (const glob of excludeGlobs){
        args.push("--iglob", `!${glob}`);
    }
    if (searchPaths.length > 0) {
        args.push("--", ...searchPaths);
    }
    let abortResolved = false;
    let resolveDidTimeout;
    const didTimeout = new Promise((resolve36)=>{
        resolveDidTimeout = resolve36;
    });
    async function* streamLines() {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const ripgrep = __addDisposableResource15(env_1, spawnRipgrep(ctx, args, root, sandboxPolicy), false);
            if (isRipgrepInvocationRecordingEnabled()) {
                recordRipgrepInvocation({
                    timestamp: Date.now(),
                    source,
                    mode: "files",
                    patternLength: 0,
                    hasPath: true,
                    includeGlobCount: includeGlobs.length,
                    excludeGlobCount: excludeGlobs.length,
                    sandboxPolicyType: sandboxPolicy.type
                });
            }
            let filesYielded = 0;
            const fileIterator = lines(ripgrep.stdout)[Symbol.asyncIterator]();
            while(true){
                const result = await Promise.race([
                    fileIterator.next(),
                    ripgrep.aborted
                ]);
                if (result === "aborted") {
                    abortResolved = true;
                    resolveDidTimeout(true);
                    break;
                }
                if (result.done) break;
                filesYielded++;
                yield result.value;
            }
            if (filesYielded > 0) {} else if (!abortResolved) {
                const exitCode = await ripgrep.processExit;
                if (exitCode !== 0 && exitCode !== 1) {
                    const stderr = ripgrep.stderr();
                    throw new Error(`Ripgrep failed (exit ${exitCode}) with no results${stderr ? `: ${stderr}` : ""}`);
                }
            }
            if (!abortResolved) {
                resolveDidTimeout(false);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources15(env_1);
        }
    }
    return {
        lines: streamLines(),
        didTimeout
    };
}
async function* lines(stream3) {
    let buffer = "";
    for await (const chunk of stream3){
        buffer += chunk.toString();
        const parts = buffer.split("\n");
        buffer = parts.pop() ?? "";
        yield* parts;
    }
    if (buffer) yield buffer;
}
export function getRipwalkCacheTtlMs(env = process.env) {
    if (ripwalkCacheTtlOverrideMs !== void 0) {
        return ripwalkCacheTtlOverrideMs;
    }
    const raw = env[RIPWALK_CACHE_TTL_ENV_VAR]?.trim();
    if (raw !== void 0 && raw !== "") {
        const parsed = Number(raw);
        if (Number.isFinite(parsed) && parsed > 0) {
            return parsed;
        }
    }
    return DEFAULT_RIPWALK_CACHE_TTL_MS;
}
export function getAbortPromise(signal) {
    return new Promise((resolve36)=>{
        if (signal.aborted) {
            resolve36("aborted");
            return;
        }
        signal.addEventListener("abort", ()=>resolve36("aborted"), {
            once: true
        });
    });
}
export function getRipwalkCacheKey({ root, searchPaths = [], includeGlobs = [], excludeGlobs = [], caseSensitive = false, cursorIgnoreFiles = [], sandboxPolicy = {
    type: "insecure_none"
}, noIgnoreVcs = false, followSymlinks = false }) {
    return JSON.stringify({
        root,
        searchPaths,
        includeGlobs,
        excludeGlobs,
        caseSensitive,
        cursorIgnoreFiles,
        sandboxPolicy,
        noIgnoreVcs,
        followSymlinks
    });
}
var ripwalkCacheTtlOverrideMs;
export async function findGitRoot(ctx, gitExecutor, startPath) {
    try {
        const result = await gitExecutor.exec(ctx, startPath, [
            "rev-parse",
            "--show-toplevel"
        ], {
            caller: "findGitRoot"
        });
        return result.stdout.trim();
    } catch  {
        return null;
    }
}
export async function getGitRemoteUrl(ctx, gitExecutor, gitRoot) {
    try {
        const result = await gitExecutor.exec(ctx, gitRoot, [
            "config",
            "--get",
            "remote.origin.url"
        ], {
            caller: "getGitRemoteUrl"
        });
        return result.stdout.trim();
    } catch  {
        return void 0;
    }
}
export function sanitizeGitRemoteUrl(remoteUrl) {
    const trimmedRemoteUrl = remoteUrl.trim();
    if (trimmedRemoteUrl === "") {
        return trimmedRemoteUrl;
    }
    try {
        const parsedRemoteUrl = new URL(trimmedRemoteUrl);
        parsedRemoteUrl.username = "";
        parsedRemoteUrl.password = "";
        return parsedRemoteUrl.toString();
    } catch  {
        return trimmedRemoteUrl;
    }
}
export function toHostPath(rawUrl) {
    let url2 = rawUrl.trim();
    if (url2.startsWith("git@")) {
        url2 = `https://${url2.slice("git@".length).replace(":", "/")}`;
    }
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(url2) && !/^https?:\/\//i.test(url2)) {
        url2 = url2.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://");
    }
    if (!/^https?:\/\//i.test(url2)) {
        url2 = `https://${url2}`;
    }
    try {
        const parsed = new URL(url2);
        const pathname = parsed.pathname.replace(/\/+$/, "").replace(/\.git$/i, "").replace(/\/+$/, "");
        return parsed.hostname + pathname;
    } catch  {
        url2 = url2.replace(/^https?:\/\//i, "");
        url2 = url2.replace(/[?#].*$/, "");
        url2 = url2.replace(/\/+$/, "");
        url2 = url2.replace(/\.git$/i, "");
        url2 = url2.replace(/\/+$/, "");
        return url2;
    }
}
export function getProtectedFolderExcludeGlobs(root, environment) {
    return getProtectedFoldersUnder(root, environment).map((folder)=>`/${import_node_path18.posix.relative(root, folder)}`);
}
export function makeResolvedIgnorePath(path64) {
    return path64;
}
export function unsafeMintResolvedIgnorePath(path64) {
    return path64;
}
export async function resolvePathForIgnoreService(absolutePath) {
    if (!(0, import_node_path19.isAbsolute)(absolutePath)) {
        return null;
    }
    const resolved = await resolveRealPathStrict(absolutePath);
    if (resolved === null) return null;
    return makeResolvedIgnorePath(resolved);
}
export async function resolveShellSandboxIgnoreMapping(ignoreService) {
    return ignoreService.getShellSandboxIgnoreMapping ? ignoreService.getShellSandboxIgnoreMapping() : ignoreService.getCursorIgnoreMapping();
}
export async function handleBlockReason(blockReason, callbacks) {
    switch(blockReason.type){
        case "needsApproval":
            return callbacks.onNeedsApproval(blockReason.approvalReason, blockReason.approvalDetails);
        case "userRejected":
            return callbacks.onUserRejected(blockReason.reason);
        case "cursorIgnore":
            return callbacks.onPermissionDenied("Blocked by cursor ignore");
        case "permissionsConfig":
            return callbacks.onPermissionDenied("Blocked by permissions configuration", {
                isReadonly: blockReason.isReadonly
            });
        case "cursorFiles":
            return callbacks.onPermissionDenied("Blocked by cursor files protection");
        case "adminBlock":
            return callbacks.onPermissionDenied("Blocked by admin repository block");
        case "adminCommandDenylist":
            return callbacks.onPermissionDenied(formatAdminCommandDenylistBlockReason(blockReason.pattern));
        case "unsafeResolution":
            return callbacks.onPermissionDenied(blockReason.message);
        default:
            {
                const _exhaustive = blockReason;
                throw new Error(`Unhandled block reason type: ${JSON.stringify(_exhaustive)}`);
            }
    }
}
export function shellBlockReasonMessage(reason) {
    switch(reason.type){
        case "userRejected":
            return reason.reason;
        case "unsafeResolution":
            return reason.message;
        case "adminCommandDenylist":
            return formatAdminCommandDenylistBlockReason(reason.pattern);
        case "needsApproval":
        case "cursorIgnore":
        case "adminBlock":
        case "permissionsConfig":
        case "cursorFiles":
            return "Command is not allowed";
        default:
            {
                const _exhaustive = reason;
                return `Command is not allowed (${JSON.stringify(_exhaustive)})`;
            }
    }
}
export function shellCommandBlockResult(command, workingDirectory, reason) {
    if (reason.type === "permissionsConfig") {
        return {
            case: "permissionDenied",
            value: new ShellPermissionDenied({
                command,
                workingDirectory,
                error: "Command blocked by permissions configuration",
                isReadonly: reason.isReadonly ?? false
            })
        };
    }
    return {
        case: "rejected",
        value: new ShellRejected({
            command,
            workingDirectory,
            reason: shellBlockReasonMessage(reason)
        })
    };
}
export function backgroundShellSpawnBlockResult(command, resolvedWorkingDir, reason) {
    return new BackgroundShellSpawnResult({
        result: shellCommandBlockResult(command, resolvedWorkingDir, reason)
    });
}
export async function consumeShellEvents(shell, eventIterator) {
    let completion;
    try {
        for(let result = await eventIterator.next(); !result.done; result = await eventIterator.next()){
            if (result.value.type === "stdin_ready") {
                shell.stdin = result.value.stdin;
                shell.pid = result.value.pid;
            } else if (result.value.type === "exit") {
                completion = {
                    code: result.value.code,
                    aborted: result.value.aborted,
                    outputPath: result.value.outputLocation?.filePath
                };
            }
        }
    } catch (_error) {} finally{
        shell.markCompleted(completion ?? {
            code: null,
            aborted: shell.signal.aborted
        });
    }
}
export function runInBackground(fn) {
    fn().catch(()=>{});
}
export function randomInitialShellId() {
    return MIN_SHELL_ID + Math.floor(Math.random() * (MAX_SHELL_ID - MIN_SHELL_ID + 1));
}
export function getConfiguredOutputNotificationDebounceMs(config2) {
    const debounceSeconds = config2.debounce;
    if (debounceSeconds === void 0 || !Number.isFinite(debounceSeconds)) {
        return void 0;
    }
    return Math.ceil(debounceSeconds * 1e3);
}
export function truncateNotificationText(value) {
    if (value.length <= MAX_NOTIFICATION_TEXT_CHARS) {
        return value;
    }
    return `${value.slice(0, MAX_NOTIFICATION_TEXT_CHARS)}...`;
}
export function formatMatchedTextDetail(matchedText, label) {
    if (matchedText.length <= MAX_OUTPUT_NOTIFICATION_MATCHED_TEXT_CHARS) {
        return `${label}: ${matchedText}`;
    }
    return `${label} is ${matchedText.length} characters; omitted from notification detail.`;
}
export function escapeYamlString(value) {
    const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
    return `"${escaped}"`;
}
export function buildFrontmatter(params) {
    const paddedMs = String(params.runningForMs).padEnd(RUNNING_MS_WIDTH, " ");
    const paddedStatus = params.status.padEnd(TERMINAL_TASK_STATUS_WIDTH, " ");
    let content = "---\n";
    if (params.pid !== void 0 && params.pid !== 0) {
        content += `pid: ${params.pid}
`;
    }
    content += `cwd: ${escapeYamlString(params.cwd)}
`;
    content += `command: ${escapeYamlString(params.command)}
`;
    if (params.title !== void 0 && params.title.trim().length > 0) {
        content += `title: ${escapeYamlString(params.title)}
`;
    }
    content += `status: ${paddedStatus}
`;
    content += `started_at: ${params.startedAt}
`;
    content += `running_for_ms: ${paddedMs}
`;
    content += "---\n";
    return content;
}
export async function writeStdinBytes(stdin, data) {
    if (stdin === void 0) {
        throw new Error("Shell stdin not available");
    }
    if (data.byteLength === 0) {
        return 0;
    }
    const buffer = import_node_buffer2.Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    const eotIndex = buffer.indexOf(4);
    if (eotIndex !== -1) {
        const before = buffer.subarray(0, eotIndex);
        if (before.byteLength > 0) {
            await writeStdinBuffer(stdin, before);
        }
        stdin.end();
        return before.byteLength;
    }
    await writeStdinBuffer(stdin, buffer);
    return buffer.byteLength;
}
function writeStdinBuffer(stdin, chunk) {
    return new Promise((resolve36, reject2)=>{
        stdin.write(chunk, (error3)=>{
            if (error3 !== null && error3 !== void 0) {
                reject2(error3);
                return;
            }
            resolve36();
        });
    });
}
export function createBackgroundShellFactory(projectDir) {
    const coreFactory = new CoreShellFactory();
    return new FileLoggingShellFactory(coreFactory, projectDir);
}
export function createBackgroundShellFactoryWithEventStreaming(projectDir, creationCallback, conversationIdExtractor) {
    const coreFactory = new CoreShellFactory();
    const fileLoggingFactory = new FileLoggingShellFactory(coreFactory, projectDir);
    return new EventStreamingShellFactory(fileLoggingFactory, creationCallback, conversationIdExtractor);
}
export function grayMatter(content, options2) {
    return (0, import_gray_matter.default)(content, {
        ...options2,
        engines: {
            ...options2?.engines,
            js: parseJavascriptFrontmatterAsPlaintext,
            javascript: parseJavascriptFrontmatterAsPlaintext
        }
    });
}
export function grayMatterStringify(content, data, options2) {
    return import_gray_matter.default.stringify({
        content,
        data: {}
    }, data, options2);
}
function grayMatterFrontmatter(parsed) {
    const rawFrontmatter = (parsed.matter ?? "").trim();
    const language = parsed.language?.toLowerCase();
    if (rawFrontmatter.length > 0 && language !== "js" && language !== "javascript") {
        return `---
${rawFrontmatter}
---`;
    }
    return grayMatterStringify("", parsed.data ?? {}).trim();
}
function numeric(str3) {
    return !isNaN(str3) ? parseInt(str3, 10) : str3.charCodeAt(0);
}
function escapeBraces(str3) {
    return str3.replace(slashPattern, escSlash).replace(openPattern, escOpen).replace(closePattern, escClose).replace(commaPattern, escComma).replace(periodPattern, escPeriod);
}
function unescapeBraces(str3) {
    return str3.replace(escSlashPattern, "\\").replace(escOpenPattern, "{").replace(escClosePattern, "}").replace(escCommaPattern, ",").replace(escPeriodPattern, ".");
}
function parseCommaParts(str3) {
    if (!str3) {
        return [
            ""
        ];
    }
    const parts = [];
    const m2 = balanced("{", "}", str3);
    if (!m2) {
        return str3.split(",");
    }
    const { pre, body, post } = m2;
    const p2 = pre.split(",");
    p2[p2.length - 1] += "{" + body + "}";
    const postParts = parseCommaParts(post);
    if (post.length) {
        ;
        p2[p2.length - 1] += postParts.shift();
        p2.push.apply(p2, postParts);
    }
    parts.push.apply(parts, p2);
    return parts;
}
export function expand(str3, options2 = {}) {
    if (!str3) {
        return [];
    }
    const { max = EXPANSION_MAX, maxLength = EXPANSION_MAX_LENGTH } = options2;
    if (str3.slice(0, 2) === "{}") {
        str3 = "\\{\\}" + str3.slice(2);
    }
    return expand_(escapeBraces(str3), max, maxLength, true).map(unescapeBraces);
}
function embrace(str3) {
    return "{" + str3 + "}";
}
function isPadded(el) {
    return /^-?0\d/.test(el);
}
function lte(i, y) {
    return i <= y;
}
function gte(i, y) {
    return i >= y;
}
function combine(acc, pre, values, max, maxLength, dropEmpties) {
    const out = [];
    let length = 0;
    for(let a = 0; a < acc.length; a++){
        for(let v2 = 0; v2 < values.length; v2++){
            if (out.length >= max) return out;
            const expansion = acc[a] + pre + values[v2];
            if (dropEmpties && !expansion) continue;
            if (length + expansion.length > maxLength) return out;
            out.push(expansion);
            length += expansion.length;
        }
    }
    return out;
}
function expandSequence(body, isAlphaSequence, max, maxLength) {
    const n = body.split(/\.\./);
    const N2 = [];
    if (n[0] === void 0 || n[1] === void 0) {
        return N2;
    }
    const x = numeric(n[0]);
    const y = numeric(n[1]);
    const width = Math.max(n[0].length, n[1].length);
    let incr = n.length === 3 && n[2] !== void 0 ? Math.max(Math.abs(numeric(n[2])), 1) : 1;
    let test = lte;
    const reverse = y < x;
    if (reverse) {
        incr *= -1;
        test = gte;
    }
    const pad = n.some(isPadded);
    let length = 0;
    for(let i = x; test(i, y) && N2.length < max; i += incr){
        let c;
        if (isAlphaSequence) {
            c = String.fromCharCode(i);
            if (c === "\\") {
                c = "";
            }
        } else {
            c = String(i);
            if (pad) {
                const need = width - c.length;
                if (need > 0) {
                    const z2 = new Array(need + 1).join("0");
                    if (i < 0) {
                        c = "-" + z2 + c.slice(1);
                    } else {
                        c = z2 + c;
                    }
                }
            }
        }
        if (length + c.length > maxLength) break;
        N2.push(c);
        length += c.length;
    }
    return N2;
}
function expand_(str3, max, maxLength, isTop) {
    let acc = [
        ""
    ];
    let dropEmpties = false;
    let firstGroup = true;
    for(;;){
        const m2 = balanced("{", "}", str3);
        if (!m2) {
            return combine(acc, str3, [
                ""
            ], max, maxLength, dropEmpties);
        }
        const pre = m2.pre;
        if (/\$$/.test(pre)) {
            acc = combine(acc, pre + "{" + m2.body + "}", [
                ""
            ], max, maxLength, dropEmpties && !m2.post.length);
            firstGroup = false;
            if (!m2.post.length) break;
            str3 = m2.post;
            continue;
        }
        const isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m2.body);
        const isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m2.body);
        const isSequence = isNumericSequence || isAlphaSequence;
        const isOptions = m2.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
            if (m2.post.match(/,(?!,).*\}/)) {
                str3 = m2.pre + "{" + m2.body + escClose + m2.post;
                isTop = true;
                continue;
            }
            return combine(acc, pre + "{" + m2.body + "}" + m2.post, [
                ""
            ], max, maxLength, dropEmpties);
        }
        if (firstGroup) {
            dropEmpties = isTop && !isSequence;
            firstGroup = false;
        }
        let values;
        if (isSequence) {
            values = expandSequence(m2.body, isAlphaSequence, max, maxLength);
        } else {
            let n = parseCommaParts(m2.body);
            if (n.length === 1 && n[0] !== void 0) {
                n = expand_(n[0], max, maxLength, false).map(embrace);
                if (n.length === 1) {
                    acc = combine(acc, pre + n[0], [
                        ""
                    ], max, maxLength, dropEmpties && !m2.post.length);
                    if (!m2.post.length) break;
                    str3 = m2.post;
                    continue;
                }
            }
            let dropsEmpties = dropEmpties && !m2.post.length && !pre;
            for(let d = 0; dropsEmpties && d < acc.length; d++){
                if (acc[d]) {
                    dropsEmpties = false;
                }
            }
            values = [];
            let valuesLength = 0;
            outer: for(let j2 = 0; j2 < n.length; j2++){
                const expanded = expand_(n[j2], max, maxLength, false);
                for(let k2 = 0; k2 < expanded.length; k2++){
                    const v2 = expanded[k2];
                    if (dropsEmpties && !v2) continue;
                    if (values.length >= max || valuesLength + v2.length > maxLength) {
                        break outer;
                    }
                    values.push(v2);
                    valuesLength += v2.length;
                }
            }
        }
        acc = combine(acc, pre, values, max, maxLength, dropEmpties && !m2.post.length);
        if (!m2.post.length) break;
        str3 = m2.post;
    }
    return acc;
}
export function getPluginIdentifierKey(ident) {
    if (ident.source === "claude-plugin") {
        return ident.sourceInfo.raw;
    }
    if (ident.source === "user-local") {
        const info3 = ident.sourceInfo;
        return `user-local:${info3.name}`;
    }
    if (ident.source === "extension") {
        const info3 = ident.sourceInfo;
        return `extension:${info3.extensionId}:${info3.localPath}`;
    }
    const info2 = ident.sourceInfo;
    return `${info2.name}-${info2.version}`;
}
export function getPluginName(ident) {
    return ident.sourceInfo.name;
}
export function getPluginMarketplace(ident) {
    switch(ident.source){
        case "claude-plugin":
            return ident.sourceInfo.marketplace;
        case "cursor-first-party":
        case "cursor-third-party":
            return ident.sourceInfo.marketplace;
        case "user-local":
        case "extension":
            return void 0;
        default:
            {
                const _exhaustive = ident;
                return void 0;
            }
    }
}
export function getPluginDbId(ident) {
    switch(ident.source){
        case "cursor-first-party":
        case "cursor-third-party":
            return ident.sourceInfo.pluginDbId;
        case "claude-plugin":
        case "user-local":
        case "extension":
            return void 0;
        default:
            {
                const _exhaustive = ident;
                return void 0;
            }
    }
}
export function getPluginMarketplaceDbId(ident) {
    switch(ident.source){
        case "cursor-first-party":
        case "cursor-third-party":
            return ident.sourceInfo.marketplaceDbId;
        case "claude-plugin":
        case "user-local":
        case "extension":
            return void 0;
        default:
            {
                const _exhaustive = ident;
                return void 0;
            }
    }
}
function recordToCaseInsensitiveLookup(variables) {
    const variablesByLowercaseKey = new Map(Object.entries(variables).map(([key, value])=>[
            key.toLowerCase(),
            value
        ]));
    return (key)=>variables[key] ?? variablesByLowercaseKey.get(key.toLowerCase());
}
function expandEnvVarsWithLookup(obj, envLookup) {
    const lookup3 = typeof envLookup === "function" ? envLookup : recordToCaseInsensitiveLookup(envLookup);
    return expandWithLookup(obj, lookup3);
}
function expandWithLookup(obj, lookup3) {
    if (typeof obj === "string") {
        return obj.replace(ENV_VAR_PATTERN, (match2, envVarName, varName, defaultValue)=>{
            if (envVarName !== void 0) {
                return lookup3(envVarName) ?? match2;
            }
            const envValue = lookup3(varName);
            if (envValue !== void 0) {
                return envValue;
            }
            if (defaultValue !== void 0) {
                return defaultValue;
            }
            return match2;
        });
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>expandWithLookup(item, lookup3));
    }
    if (obj !== null && typeof obj === "object") {
        const result = {};
        for (const [key, value] of Object.entries(obj)){
            result[key] = expandWithLookup(value, lookup3);
        }
        return result;
    }
    return obj;
}
function toSegments(name17) {
    return name17.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/[^a-z\d]+/gi, "_").toUpperCase().split("_").filter((segment)=>segment.length > 0);
}
function isSecretPluginVariableName(name17) {
    return toSegments(name17).some((segment)=>SECRET_WORDS.has(segment));
}
function humanize(name17) {
    return name17.split("_").filter((word)=>word.length > 0).map((word)=>{
        const lower = word.toLowerCase();
        return ACRONYMS.has(lower) ? word.toUpperCase() : word.charAt(0).toUpperCase() + lower.slice(1);
    }).join(" ");
}
function collectFromStrings(value, into) {
    if (typeof value === "string") {
        for (const [, envName, plainName, defaultValue] of value.matchAll(PLACEHOLDER)){
            const name17 = envName ?? plainName;
            if (name17 === void 0 || LOADER_PROVIDED.has(name17) || into.has(name17)) {
                continue;
            }
            const reference = envName === void 0 ? `\${${name17}}` : `\${env:${name17}}`;
            into.set(name17, {
                reference,
                defaultValue
            });
        }
        return;
    }
    if (Array.isArray(value)) {
        for (const item of value){
            collectFromStrings(item, into);
        }
        return;
    }
    if (value !== null && typeof value === "object") {
        for (const nested of Object.values(value)){
            collectFromStrings(nested, into);
        }
    }
}
export function inferMcpPlaceholderVariables(config2) {
    if (config2?.mcpServers === void 0) {
        return void 0;
    }
    const placeholders = new Map();
    collectFromStrings(config2.mcpServers, placeholders);
    if (placeholders.size === 0) {
        return void 0;
    }
    const properties = {};
    for (const name17 of [
        ...placeholders.keys()
    ].sort()){
        const { reference, defaultValue } = placeholders.get(name17);
        properties[name17] = {
            type: "string",
            title: humanize(name17),
            description: defaultValue === void 0 || defaultValue.length === 0 ? `Referenced as \`${reference}\` in this plugin's MCP configuration.` : `Referenced as \`${reference}\` in this plugin's MCP configuration. Defaults to \`${defaultValue}\` when left blank.`,
            ...isSecretPluginVariableName(name17) ? {
                writeOnly: true
            } : {}
        };
    }
    return {
        type: "object",
        properties
    };
}
function expandPluginVariables(value, pluginPath) {
    return value.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, ()=>pluginPath).replace(/\$\{CURSOR_PLUGIN_ROOT\}/g, ()=>pluginPath);
}
function readSchemaId(data) {
    if (typeof data !== "object" || data === null || Array.isArray(data)) {
        return void 0;
    }
    const schema2 = data["$schema"];
    return typeof schema2 === "string" && schema2.length > 0 ? schema2 : void 0;
}
function extractSchemaVersion(id) {
    let segments;
    try {
        segments = new URL(id).pathname.split("/");
    } catch  {
        segments = id.split("/");
    }
    for (const segment of segments){
        const match2 = VERSION_SEGMENT_PATTERN.exec(segment);
        if (match2 !== null) {
            return match2[1];
        }
    }
    return void 0;
}
function resolveSchemaVersion(id) {
    if (id === void 0) {
        return {
            kind: "absent"
        };
    }
    if (SUPPORTED_SCHEMA_IDS.has(id)) {
        return {
            kind: "supported",
            id,
            version: extractSchemaVersion(id) ?? id
        };
    }
    return {
        kind: "unsupported",
        id
    };
}
function schemaVersionsDisagree(pluginSchemaId, mcpSchemaId) {
    if (pluginSchemaId === void 0 || mcpSchemaId === void 0) {
        return false;
    }
    const pluginVersion = extractSchemaVersion(pluginSchemaId);
    const mcpVersion = extractSchemaVersion(mcpSchemaId);
    if (pluginVersion === void 0 || mcpVersion === void 0) {
        return false;
    }
    return pluginVersion !== mcpVersion;
}
function parsePluginMinClientVersions(value) {
    const result = MinClientVersionsSchema.safeParse(value);
    if (!result.success) {
        return void 0;
    }
    if (result.data.cursor === void 0 && result.data.sand === void 0) {
        return void 0;
    }
    return result.data;
}
export function validatePluginVariableSchemaShape(schema2, ctx) {
    if (schema2.required !== void 0) {
        if (schema2.properties === void 0) {
            for (const propertyName of schema2.required){
                ctx.addIssue({
                    code: external_exports.ZodIssueCode.custom,
                    message: `Required property "${propertyName}" must be declared in properties`,
                    path: [
                        "required"
                    ]
                });
            }
        } else {
            for (const propertyName of schema2.required){
                if (!(propertyName in schema2.properties)) {
                    ctx.addIssue({
                        code: external_exports.ZodIssueCode.custom,
                        message: `Required property "${propertyName}" must be declared in properties`,
                        path: [
                            "required"
                        ]
                    });
                }
            }
        }
    }
    if (schema2.minLength !== void 0 && schema2.maxLength !== void 0 && schema2.minLength > schema2.maxLength) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: "minLength must be less than or equal to maxLength",
            path: [
                "minLength"
            ]
        });
    }
    if (schema2.minimum !== void 0 && schema2.maximum !== void 0 && schema2.minimum > schema2.maximum) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: "minimum must be less than or equal to maximum",
            path: [
                "minimum"
            ]
        });
    }
    if (schema2.exclusiveMinimum !== void 0 && schema2.exclusiveMaximum !== void 0 && schema2.exclusiveMinimum >= schema2.exclusiveMaximum) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: "exclusiveMinimum must be less than exclusiveMaximum",
            path: [
                "exclusiveMinimum"
            ]
        });
    }
    if (schema2.minItems !== void 0 && schema2.maxItems !== void 0 && schema2.minItems > schema2.maxItems) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: "minItems must be less than or equal to maxItems",
            path: [
                "minItems"
            ]
        });
    }
    if (schema2.minProperties !== void 0 && schema2.maxProperties !== void 0 && schema2.minProperties > schema2.maxProperties) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: "minProperties must be less than or equal to maxProperties",
            path: [
                "minProperties"
            ]
        });
    }
}
export function parsePluginVariablesJsonSchema(schema2) {
    const result = PluginVariableSchemaSchema.superRefine((value, ctx)=>{
        const candidate = value;
        if (candidate.type !== "object") {
            ctx.addIssue({
                code: external_exports.ZodIssueCode.custom,
                message: 'Plugin variable schemas must declare type "object"',
                path: [
                    "type"
                ]
            });
        }
    }).safeParse(schema2);
    if (!result.success) {
        return result;
    }
    return {
        success: true,
        data: result.data
    };
}
function isRecord3(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function normalizeMarketplaceName(value) {
    return value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function fallbackMarketplaceName(options2) {
    const repoName = options2.repoName !== void 0 ? normalizeMarketplaceName(options2.repoName) : "";
    if (repoName.length > 0) {
        return repoName;
    }
    return `cursor-marketplace-${options2.fallbackId ?? (0, import_node_crypto7.randomUUID)()}`;
}
function readMarketplaceName(json2, options2) {
    if (isRecord3(json2) && typeof json2.name === "string") {
        const name17 = normalizeMarketplaceName(json2.name);
        if (name17.length > 0) {
            return name17;
        }
    }
    return fallbackMarketplaceName(options2);
}
function readOwner(json2) {
    if (isRecord3(json2) && isRecord3(json2.owner)) {
        const name17 = typeof json2.owner.name === "string" && json2.owner.name.trim().length > 0 ? json2.owner.name : "Unknown";
        const email2 = typeof json2.owner.email === "string" && json2.owner.email.trim().length > 0 ? json2.owner.email : void 0;
        return {
            name: name17,
            ...email2 !== void 0 ? {
                email: email2
            } : {}
        };
    }
    return {
        name: "Unknown"
    };
}
function readOptionalString(value) {
    return typeof value === "string" ? value : void 0;
}
function readStringArray(value) {
    if (!Array.isArray(value)) {
        return void 0;
    }
    const strings = value.filter((item)=>typeof item === "string");
    return strings.length > 0 ? strings : void 0;
}
function readComponentPaths(value) {
    if (typeof value === "string") {
        return value;
    }
    return readStringArray(value);
}
function readMetadata(json2) {
    if (!isRecord3(json2) || !isRecord3(json2.metadata)) {
        return void 0;
    }
    const metadata = {
        description: readOptionalString(json2.metadata.description),
        version: readOptionalString(json2.metadata.version),
        pluginRoot: readOptionalString(json2.metadata.pluginRoot)
    };
    return metadata.description !== void 0 || metadata.version !== void 0 || metadata.pluginRoot !== void 0 ? metadata : void 0;
}
function readAuthor(value) {
    if (!isRecord3(value)) {
        return void 0;
    }
    const name17 = readOptionalString(value.name);
    if (name17 === void 0 || name17.length === 0) {
        return void 0;
    }
    const email2 = readOptionalString(value.email);
    return {
        name: name17,
        ...email2 !== void 0 ? {
            email: email2
        } : {}
    };
}
function readMcpServers(value) {
    if (typeof value === "string" || isRecord3(value)) {
        return value;
    }
    if (Array.isArray(value)) {
        const servers = value.filter((item)=>typeof item === "string" || isRecord3(item));
        return servers.length > 0 ? servers : void 0;
    }
    return void 0;
}
function readHooks(value) {
    if (typeof value === "string" || isRecord3(value)) {
        return value;
    }
    return void 0;
}
function readVariables(value) {
    if (value === void 0) {
        return void 0;
    }
    const result = parsePluginVariablesJsonSchema(value);
    return result.success ? result.data : void 0;
}
function readPluginSource(value) {
    if (typeof value === "string") {
        return value;
    }
    if (!isRecord3(value)) {
        return void 0;
    }
    if (value.source === "github" && typeof value.repo === "string" && value.repo.length > 0) {
        return {
            source: "github",
            repo: value.repo,
            ref: readOptionalString(value.ref),
            sha: readOptionalString(value.sha)
        };
    }
    if ((value.source === "url" || value.source === void 0) && typeof value.url === "string" && value.url.length > 0) {
        return {
            source: "url",
            url: value.url,
            ref: readOptionalString(value.ref),
            sha: readOptionalString(value.sha)
        };
    }
    if (value.source === "git-subdir" && typeof value.url === "string" && value.url.length > 0 && typeof value.path === "string" && value.path.length > 0) {
        return {
            source: "git-subdir",
            url: value.url,
            path: value.path,
            ref: readOptionalString(value.ref),
            sha: readOptionalString(value.sha)
        };
    }
    if (typeof value.repo === "string" && value.repo.length > 0) {
        return {
            source: "github",
            repo: value.repo,
            ref: readOptionalString(value.ref),
            sha: readOptionalString(value.sha)
        };
    }
    return void 0;
}
function derivePluginNameFromSource(source) {
    if (typeof source === "string") {
        const name18 = normalizeMarketplaceName((0, import_node_path20.basename)(source));
        return name18.length > 0 ? name18 : void 0;
    }
    if (source.source === "github") {
        const name18 = normalizeMarketplaceName(source.repo.split("/").at(-1) ?? "");
        return name18.length > 0 ? name18 : void 0;
    }
    if (source.source === "git-subdir") {
        const name18 = normalizeMarketplaceName((0, import_node_path20.basename)(source.path));
        return name18.length > 0 ? name18 : void 0;
    }
    let urlPath = source.url;
    try {
        urlPath = new URL(source.url).pathname;
    } catch  {}
    while(urlPath.endsWith("/")){
        urlPath = urlPath.slice(0, -1);
    }
    if (urlPath.toLowerCase().endsWith(".git")) {
        urlPath = urlPath.slice(0, -4);
    }
    const name17 = normalizeMarketplaceName((0, import_node_path20.basename)(urlPath));
    return name17.length > 0 ? name17 : void 0;
}
function readMarketplacePluginEntry(rawEntry, index) {
    if (!isRecord3(rawEntry)) {
        return {
            skippedEntry: {
                index,
                error: `Plugin entry at index ${index} is not an object`
            }
        };
    }
    const source = readPluginSource(rawEntry.source);
    if (source === void 0) {
        const rawName = readOptionalString(rawEntry.name);
        return {
            skippedEntry: {
                index,
                ...rawName !== void 0 && rawName.length > 0 ? {
                    name: rawName
                } : {},
                error: `Plugin entry at index ${index} has no usable source`
            }
        };
    }
    const nameFromEntry = typeof rawEntry.name === "string" ? normalizeMarketplaceName(rawEntry.name) : "";
    const name17 = nameFromEntry || derivePluginNameFromSource(source);
    if (name17 === void 0) {
        return {
            skippedEntry: {
                index,
                error: `Plugin entry at index ${index} has no usable name`
            }
        };
    }
    const capabilitiesResult = CapabilitiesSchema.safeParse(rawEntry.capabilities);
    if (rawEntry.capabilities !== void 0 && !capabilitiesResult.success) {
        return {
            skippedEntry: {
                index,
                name: name17,
                error: `Plugin entry at index ${index} has invalid capabilities: ${capabilitiesResult.error.issues.map((i)=>`${i.path.join(".")}: ${i.message}`).join(", ")}`
            }
        };
    }
    const capabilities = capabilitiesResult.success ? capabilitiesResult.data : void 0;
    const minClientVersions = parsePluginMinClientVersions(rawEntry.minClientVersions);
    return {
        entry: {
            name: name17,
            displayName: readOptionalString(rawEntry.displayName),
            source,
            description: readOptionalString(rawEntry.description),
            version: readOptionalString(rawEntry.version),
            author: readAuthor(rawEntry.author),
            publisher: readOptionalString(rawEntry.publisher),
            homepage: readOptionalString(rawEntry.homepage),
            repository: readOptionalString(rawEntry.repository),
            license: readOptionalString(rawEntry.license),
            keywords: readStringArray(rawEntry.keywords),
            logo: readOptionalString(rawEntry.logo),
            category: readOptionalString(rawEntry.category),
            tags: readStringArray(rawEntry.tags),
            strict: typeof rawEntry.strict === "boolean" ? rawEntry.strict : true,
            commands: readComponentPaths(rawEntry.commands),
            agents: readComponentPaths(rawEntry.agents),
            skills: readComponentPaths(rawEntry.skills),
            rules: readComponentPaths(rawEntry.rules),
            hooks: readHooks(rawEntry.hooks),
            variables: readVariables(rawEntry.variables),
            mcpServers: readMcpServers(rawEntry.mcpServers),
            ...capabilities !== void 0 && {
                capabilities
            },
            ...minClientVersions !== void 0 && {
                minClientVersions
            }
        }
    };
}
function parseMarketplaceManifest(content, options2 = {}) {
    if (content.length > MAX_MANIFEST_SIZE_BYTES) {
        return {
            success: false,
            error: `Manifest exceeds maximum size of ${MAX_MANIFEST_SIZE_BYTES} bytes`
        };
    }
    let json2;
    try {
        json2 = JSON.parse(content);
    } catch (e) {
        return {
            success: false,
            error: `Invalid JSON: ${e instanceof Error ? e.message : "Unknown error"}`
        };
    }
    if (!isRecord3(json2)) {
        return {
            success: false,
            error: "Invalid marketplace manifest: expected a JSON object"
        };
    }
    const validPlugins = [];
    const skippedPluginEntries = [];
    const seenNames = new Set();
    const rawPlugins = Array.isArray(json2.plugins) ? json2.plugins : [];
    rawPlugins.forEach((rawEntry, index)=>{
        const entryResult = readMarketplacePluginEntry(rawEntry, index);
        if ("skippedEntry" in entryResult) {
            skippedPluginEntries.push(entryResult.skippedEntry);
            return;
        }
        if (seenNames.has(entryResult.entry.name)) {
            skippedPluginEntries.push({
                index,
                name: entryResult.entry.name,
                error: `Duplicate plugin name "${entryResult.entry.name}" at index ${index}`
            });
            return;
        }
        seenNames.add(entryResult.entry.name);
        validPlugins.push(entryResult.entry);
    });
    return {
        success: true,
        data: {
            name: readMarketplaceName(json2, options2),
            owner: readOwner(json2),
            description: readOptionalString(json2.description),
            plugins: validPlugins,
            metadata: readMetadata(json2),
            skippedPluginEntries
        }
    };
}
function parsePluginManifest(content) {
    if (content.length > MAX_MANIFEST_SIZE_BYTES) {
        return {
            success: false,
            error: `Manifest exceeds maximum size of ${MAX_MANIFEST_SIZE_BYTES} bytes`
        };
    }
    let json2;
    try {
        json2 = JSON.parse(content);
    } catch (e) {
        return {
            success: false,
            error: `Invalid JSON: ${e instanceof Error ? e.message : "Unknown error"}`
        };
    }
    const schema2 = resolveSchemaVersion(readSchemaId(json2));
    const result = PluginManifestSchema.safeParse(json2);
    if (!result.success) {
        return {
            success: false,
            error: `Invalid plugin manifest: ${result.error.errors.map((e)=>`${e.path.join(".")}: ${e.message}`).join(", ")}`,
            details: result.error
        };
    }
    return {
        success: true,
        data: result.data,
        ...schema2.kind === "unsupported" && {
            unrecognizedSchemaId: schema2.id
        }
    };
}
function parseAndClassifyManifestEntries(plugins, pluginRoot) {
    const results = [];
    for (const entry of plugins){
        const source = entry.source;
        if (typeof source === "string") {
            const resolved = resolvePluginSourcePath(source, pluginRoot);
            if (resolved !== null) {
                results.push({
                    entry,
                    kind: "local",
                    localPath: resolved
                });
            } else {
                results.push({
                    entry,
                    kind: "unresolvable",
                    rawSource: source
                });
            }
            continue;
        }
        switch(source.source){
            case "github":
                results.push({
                    entry,
                    kind: "external-github",
                    externalUrl: `https://github.com/${source.repo}.git`,
                    externalRef: source.ref,
                    externalSha: source.sha,
                    effectiveRef: source.sha ?? source.ref
                });
                break;
            case "url":
                results.push({
                    entry,
                    kind: "external-url",
                    externalUrl: source.url,
                    externalRef: source.ref,
                    externalSha: source.sha,
                    effectiveRef: source.sha ?? source.ref
                });
                break;
            case "git-subdir":
                results.push({
                    entry,
                    kind: "external-git-subdir",
                    externalUrl: source.url,
                    externalRef: source.ref,
                    externalSha: source.sha,
                    effectiveRef: source.sha ?? source.ref,
                    subdirPath: source.path
                });
                break;
            default:
                {
                    const _exhaustive = source;
                    void _exhaustive;
                }
        }
    }
    return results;
}
export function resolvePluginSourcePath(source, pluginRoot) {
    if (typeof source !== "string") {
        return null;
    }
    let path64 = source;
    if (path64.startsWith("./")) {
        path64 = path64.slice(2);
    }
    if (pluginRoot !== void 0) {
        let root = pluginRoot;
        if (root.startsWith("./")) {
            root = root.slice(2);
        }
        if (root.endsWith("/")) {
            root = root.slice(0, -1);
        }
        path64 = `${root}/${path64}`;
    }
    return path64 || ".";
}
export function isPathSafe(path64) {
    if (path64.includes("..")) {
        return false;
    }
    if ((0, import_node_path20.isAbsolute)(path64)) {
        return false;
    }
    if (path64.includes("://")) {
        return false;
    }
    return true;
}
function createScanner(text4, ignoreTrivia = false) {
    const len = text4.length;
    let pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
    function scanHexDigits(count2, exact) {
        let digits = 0;
        let value2 = 0;
        while(digits < count2 || !exact){
            let ch = text4.charCodeAt(pos);
            if (ch >= 48 && ch <= 57) {
                value2 = value2 * 16 + ch - 48;
            } else if (ch >= 65 && ch <= 70) {
                value2 = value2 * 16 + ch - 65 + 10;
            } else if (ch >= 97 && ch <= 102) {
                value2 = value2 * 16 + ch - 97 + 10;
            } else {
                break;
            }
            pos++;
            digits++;
        }
        if (digits < count2) {
            value2 = -1;
        }
        return value2;
    }
    function setPosition(newPosition) {
        pos = newPosition;
        value = "";
        tokenOffset = 0;
        token = 16;
        scanError = 0;
    }
    function scanNumber() {
        let start = pos;
        if (text4.charCodeAt(pos) === 48) {
            pos++;
        } else {
            pos++;
            while(pos < text4.length && isDigit(text4.charCodeAt(pos))){
                pos++;
            }
        }
        if (pos < text4.length && text4.charCodeAt(pos) === 46) {
            pos++;
            if (pos < text4.length && isDigit(text4.charCodeAt(pos))) {
                pos++;
                while(pos < text4.length && isDigit(text4.charCodeAt(pos))){
                    pos++;
                }
            } else {
                scanError = 3;
                return text4.substring(start, pos);
            }
        }
        let end = pos;
        if (pos < text4.length && (text4.charCodeAt(pos) === 69 || text4.charCodeAt(pos) === 101)) {
            pos++;
            if (pos < text4.length && text4.charCodeAt(pos) === 43 || text4.charCodeAt(pos) === 45) {
                pos++;
            }
            if (pos < text4.length && isDigit(text4.charCodeAt(pos))) {
                pos++;
                while(pos < text4.length && isDigit(text4.charCodeAt(pos))){
                    pos++;
                }
                end = pos;
            } else {
                scanError = 3;
            }
        }
        return text4.substring(start, end);
    }
    function scanString() {
        let result = "", start = pos;
        while(true){
            if (pos >= len) {
                result += text4.substring(start, pos);
                scanError = 2;
                break;
            }
            const ch = text4.charCodeAt(pos);
            if (ch === 34) {
                result += text4.substring(start, pos);
                pos++;
                break;
            }
            if (ch === 92) {
                result += text4.substring(start, pos);
                pos++;
                if (pos >= len) {
                    scanError = 2;
                    break;
                }
                const ch2 = text4.charCodeAt(pos++);
                switch(ch2){
                    case 34:
                        result += '"';
                        break;
                    case 92:
                        result += "\\";
                        break;
                    case 47:
                        result += "/";
                        break;
                    case 98:
                        result += "\b";
                        break;
                    case 102:
                        result += "\f";
                        break;
                    case 110:
                        result += "\n";
                        break;
                    case 114:
                        result += "\r";
                        break;
                    case 116:
                        result += "	";
                        break;
                    case 117:
                        const ch3 = scanHexDigits(4, true);
                        if (ch3 >= 0) {
                            result += String.fromCharCode(ch3);
                        } else {
                            scanError = 4;
                        }
                        break;
                    default:
                        scanError = 5;
                }
                start = pos;
                continue;
            }
            if (ch >= 0 && ch <= 31) {
                if (isLineBreak(ch)) {
                    result += text4.substring(start, pos);
                    scanError = 2;
                    break;
                } else {
                    scanError = 6;
                }
            }
            pos++;
        }
        return result;
    }
    function scanNext() {
        value = "";
        scanError = 0;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
            tokenOffset = len;
            return token = 17;
        }
        let code = text4.charCodeAt(pos);
        if (isWhiteSpace(code)) {
            do {
                pos++;
                value += String.fromCharCode(code);
                code = text4.charCodeAt(pos);
            }while (isWhiteSpace(code))
            return token = 15;
        }
        if (isLineBreak(code)) {
            pos++;
            value += String.fromCharCode(code);
            if (code === 13 && text4.charCodeAt(pos) === 10) {
                pos++;
                value += "\n";
            }
            lineNumber++;
            tokenLineStartOffset = pos;
            return token = 14;
        }
        switch(code){
            case 123:
                pos++;
                return token = 1;
            case 125:
                pos++;
                return token = 2;
            case 91:
                pos++;
                return token = 3;
            case 93:
                pos++;
                return token = 4;
            case 58:
                pos++;
                return token = 6;
            case 44:
                pos++;
                return token = 5;
            case 34:
                pos++;
                value = scanString();
                return token = 10;
            case 47:
                const start = pos - 1;
                if (text4.charCodeAt(pos + 1) === 47) {
                    pos += 2;
                    while(pos < len){
                        if (isLineBreak(text4.charCodeAt(pos))) {
                            break;
                        }
                        pos++;
                    }
                    value = text4.substring(start, pos);
                    return token = 12;
                }
                if (text4.charCodeAt(pos + 1) === 42) {
                    pos += 2;
                    const safeLength2 = len - 1;
                    let commentClosed = false;
                    while(pos < safeLength2){
                        const ch = text4.charCodeAt(pos);
                        if (ch === 42 && text4.charCodeAt(pos + 1) === 47) {
                            pos += 2;
                            commentClosed = true;
                            break;
                        }
                        pos++;
                        if (isLineBreak(ch)) {
                            if (ch === 13 && text4.charCodeAt(pos) === 10) {
                                pos++;
                            }
                            lineNumber++;
                            tokenLineStartOffset = pos;
                        }
                    }
                    if (!commentClosed) {
                        pos++;
                        scanError = 1;
                    }
                    value = text4.substring(start, pos);
                    return token = 13;
                }
                value += String.fromCharCode(code);
                pos++;
                return token = 16;
            case 45:
                value += String.fromCharCode(code);
                pos++;
                if (pos === len || !isDigit(text4.charCodeAt(pos))) {
                    return token = 16;
                }
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                value += scanNumber();
                return token = 11;
            default:
                while(pos < len && isUnknownContentCharacter(code)){
                    pos++;
                    code = text4.charCodeAt(pos);
                }
                if (tokenOffset !== pos) {
                    value = text4.substring(tokenOffset, pos);
                    switch(value){
                        case "true":
                            return token = 8;
                        case "false":
                            return token = 9;
                        case "null":
                            return token = 7;
                    }
                    return token = 16;
                }
                value += String.fromCharCode(code);
                pos++;
                return token = 16;
        }
    }
    function isUnknownContentCharacter(code) {
        if (isWhiteSpace(code) || isLineBreak(code)) {
            return false;
        }
        switch(code){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return false;
        }
        return true;
    }
    function scanNextNonTrivia() {
        let result;
        do {
            result = scanNext();
        }while (result >= 12 && result <= 15)
        return result;
    }
    return {
        setPosition,
        getPosition: ()=>pos,
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: ()=>token,
        getTokenValue: ()=>value,
        getTokenOffset: ()=>tokenOffset,
        getTokenLength: ()=>pos - tokenOffset,
        getTokenStartLine: ()=>lineStartOffset,
        getTokenStartCharacter: ()=>tokenOffset - prevTokenLineStartOffset,
        getTokenError: ()=>scanError
    };
}
function isWhiteSpace(ch) {
    return ch === 32 || ch === 9;
}
function isLineBreak(ch) {
    return ch === 10 || ch === 13;
}
function isDigit(ch) {
    return ch >= 48 && ch <= 57;
}
export function parse5(text4, errors = [], options2 = ParseOptions.DEFAULT) {
    let currentProperty = null;
    let currentParent = [];
    const previousParents = [];
    function onValue(value) {
        if (Array.isArray(currentParent)) {
            currentParent.push(value);
        } else if (currentProperty !== null) {
            currentParent[currentProperty] = value;
        }
    }
    const visitor = {
        onObjectBegin: ()=>{
            const object4 = {};
            onValue(object4);
            previousParents.push(currentParent);
            currentParent = object4;
            currentProperty = null;
        },
        onObjectProperty: (name17)=>{
            currentProperty = name17;
        },
        onObjectEnd: ()=>{
            currentParent = previousParents.pop();
        },
        onArrayBegin: ()=>{
            const array3 = [];
            onValue(array3);
            previousParents.push(currentParent);
            currentParent = array3;
            currentProperty = null;
        },
        onArrayEnd: ()=>{
            currentParent = previousParents.pop();
        },
        onLiteralValue: onValue,
        onError: (error3, offset, length)=>{
            errors.push({
                error: error3,
                offset,
                length
            });
        }
    };
    visit(text4, visitor, options2);
    return currentParent[0];
}
function visit(text4, visitor, options2 = ParseOptions.DEFAULT) {
    const _scanner = createScanner(text4, false);
    const _jsonPath = [];
    let suppressedCallbacks = 0;
    function toNoArgVisit(visitFunction) {
        return visitFunction ? ()=>suppressedCallbacks === 0 && visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : ()=>true;
    }
    function toOneArgVisit(visitFunction) {
        return visitFunction ? (arg)=>suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : ()=>true;
    }
    function toOneArgVisitWithPath(visitFunction) {
        return visitFunction ? (arg)=>suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), ()=>_jsonPath.slice()) : ()=>true;
    }
    function toBeginVisit(visitFunction) {
        return visitFunction ? ()=>{
            if (suppressedCallbacks > 0) {
                suppressedCallbacks++;
            } else {
                let cbReturn = visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), ()=>_jsonPath.slice());
                if (cbReturn === false) {
                    suppressedCallbacks = 1;
                }
            }
        } : ()=>true;
    }
    function toEndVisit(visitFunction) {
        return visitFunction ? ()=>{
            if (suppressedCallbacks > 0) {
                suppressedCallbacks--;
            }
            if (suppressedCallbacks === 0) {
                visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
            }
        } : ()=>true;
    }
    const onObjectBegin = toBeginVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisitWithPath(visitor.onObjectProperty), onObjectEnd = toEndVisit(visitor.onObjectEnd), onArrayBegin = toBeginVisit(visitor.onArrayBegin), onArrayEnd = toEndVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisitWithPath(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
    const disallowComments = options2 && options2.disallowComments;
    const allowTrailingComma = options2 && options2.allowTrailingComma;
    function scanNext() {
        while(true){
            const token = _scanner.scan();
            switch(_scanner.getTokenError()){
                case 4:
                    handleError(14);
                    break;
                case 5:
                    handleError(15);
                    break;
                case 3:
                    handleError(13);
                    break;
                case 1:
                    if (!disallowComments) {
                        handleError(11);
                    }
                    break;
                case 2:
                    handleError(12);
                    break;
                case 6:
                    handleError(16);
                    break;
            }
            switch(token){
                case 12:
                case 13:
                    if (disallowComments) {
                        handleError(10);
                    } else {
                        onComment();
                    }
                    break;
                case 16:
                    handleError(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return token;
            }
        }
    }
    function handleError(error3, skipUntilAfter = [], skipUntil2 = []) {
        onError(error3);
        if (skipUntilAfter.length + skipUntil2.length > 0) {
            let token = _scanner.getToken();
            while(token !== 17){
                if (skipUntilAfter.indexOf(token) !== -1) {
                    scanNext();
                    break;
                } else if (skipUntil2.indexOf(token) !== -1) {
                    break;
                }
                token = scanNext();
            }
        }
    }
    function parseString2(isValue) {
        const value = _scanner.getTokenValue();
        if (isValue) {
            onLiteralValue(value);
        } else {
            onObjectProperty(value);
            _jsonPath.push(value);
        }
        scanNext();
        return true;
    }
    function parseLiteral() {
        switch(_scanner.getToken()){
            case 11:
                const tokenValue = _scanner.getTokenValue();
                let value = Number(tokenValue);
                if (isNaN(value)) {
                    handleError(2);
                    value = 0;
                }
                onLiteralValue(value);
                break;
            case 7:
                onLiteralValue(null);
                break;
            case 8:
                onLiteralValue(true);
                break;
            case 9:
                onLiteralValue(false);
                break;
            default:
                return false;
        }
        scanNext();
        return true;
    }
    function parseProperty() {
        if (_scanner.getToken() !== 10) {
            handleError(3, [], [
                2,
                5
            ]);
            return false;
        }
        parseString2(false);
        if (_scanner.getToken() === 6) {
            onSeparator(":");
            scanNext();
            if (!parseValue2()) {
                handleError(4, [], [
                    2,
                    5
                ]);
            }
        } else {
            handleError(5, [], [
                2,
                5
            ]);
        }
        _jsonPath.pop();
        return true;
    }
    function parseObject() {
        onObjectBegin();
        scanNext();
        let needsComma = false;
        while(_scanner.getToken() !== 2 && _scanner.getToken() !== 17){
            if (_scanner.getToken() === 5) {
                if (!needsComma) {
                    handleError(4, [], []);
                }
                onSeparator(",");
                scanNext();
                if (_scanner.getToken() === 2 && allowTrailingComma) {
                    break;
                }
            } else if (needsComma) {
                handleError(6, [], []);
            }
            if (!parseProperty()) {
                handleError(4, [], [
                    2,
                    5
                ]);
            }
            needsComma = true;
        }
        onObjectEnd();
        if (_scanner.getToken() !== 2) {
            handleError(7, [
                2
            ], []);
        } else {
            scanNext();
        }
        return true;
    }
    function parseArray2() {
        onArrayBegin();
        scanNext();
        let isFirstElement = true;
        let needsComma = false;
        while(_scanner.getToken() !== 4 && _scanner.getToken() !== 17){
            if (_scanner.getToken() === 5) {
                if (!needsComma) {
                    handleError(4, [], []);
                }
                onSeparator(",");
                scanNext();
                if (_scanner.getToken() === 4 && allowTrailingComma) {
                    break;
                }
            } else if (needsComma) {
                handleError(6, [], []);
            }
            if (isFirstElement) {
                _jsonPath.push(0);
                isFirstElement = false;
            } else {
                _jsonPath[_jsonPath.length - 1]++;
            }
            if (!parseValue2()) {
                handleError(4, [], [
                    4,
                    5
                ]);
            }
            needsComma = true;
        }
        onArrayEnd();
        if (!isFirstElement) {
            _jsonPath.pop();
        }
        if (_scanner.getToken() !== 4) {
            handleError(8, [
                4
            ], []);
        } else {
            scanNext();
        }
        return true;
    }
    function parseValue2() {
        switch(_scanner.getToken()){
            case 3:
                return parseArray2();
            case 1:
                return parseObject();
            case 10:
                return parseString2(true);
            default:
                return parseLiteral();
        }
    }
    scanNext();
    if (_scanner.getToken() === 17) {
        if (options2.allowEmptyContent) {
            return true;
        }
        handleError(4, [], []);
        return false;
    }
    if (!parseValue2()) {
        handleError(4, [], []);
        return false;
    }
    if (_scanner.getToken() !== 17) {
        handleError(9, [], []);
    }
    return true;
}
function isMcpMetadataKey(key) {
    return NON_SERVER_METADATA_KEY_SET.has(key.toLowerCase());
}
function isMcpLikelyMetadataObject(key, value) {
    if (!isMcpMetadataKey(key)) {
        return false;
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const metadata = value;
    switch(key.toLowerCase()){
        case "author":
        case "owner":
            return typeof metadata.name === "string";
        case "source":
            return typeof metadata.source === "string" || typeof metadata.repo === "string" || typeof metadata.path === "string" || typeof metadata.ref === "string" || typeof metadata.sha === "string";
        case "metadata":
            return typeof metadata.description === "string" || typeof metadata.version === "string" || typeof metadata.pluginRoot === "string";
        default:
            return false;
    }
}
function isMcpServerLikeObject(value) {
    return typeof value === "object" && value !== null && ("command" in value || "url" in value);
}
function resolvePluginMcpConfigPaths(pluginPath) {
    const normalizedPluginPath = pluginPath !== void 0 && pluginPath.length > 0 ? pluginPath.replace(/\/+$/, "") : void 0;
    return PLUGIN_MCP_CONFIG_FILE_NAMES.map((mcpConfigFileName)=>normalizedPluginPath !== void 0 ? `${normalizedPluginPath}/${mcpConfigFileName}` : mcpConfigFileName);
}
function expandMcpEnvPlaceholders(obj, options2) {
    const cloud = options2?.cloudAgentEnvLookup;
    const configured = options2?.configuredVariables;
    if (cloud !== void 0) {
        return expandEnvVarsWithLookup(obj, cloud);
    }
    const lookup3 = (key)=>{
        const env = process.env[key];
        if (env !== void 0) {
            return env;
        }
        const val = configured?.[key];
        if (val === void 0 || val === null) {
            return void 0;
        }
        return typeof val === "string" ? val : String(val);
    };
    return expandEnvVarsWithLookup(obj, lookup3);
}
function expandMcpServerConfig(config2, pluginPath, options2) {
    if (!config2.mcpServers) {
        return config2;
    }
    const expandedServers = {};
    for (const [serverName, serverConfig] of Object.entries(config2.mcpServers)){
        const expanded = {
            ...serverConfig
        };
        if (typeof serverConfig.command === "string") {
            expanded.command = expandPluginVariables(serverConfig.command, pluginPath);
        }
        if (Array.isArray(serverConfig.args)) {
            expanded.args = serverConfig.args.map((arg)=>typeof arg === "string" ? expandPluginVariables(arg, pluginPath) : arg);
        }
        if (serverConfig.env && typeof serverConfig.env === "object") {
            const expandedEnv = {};
            for (const [key, value] of Object.entries(serverConfig.env)){
                expandedEnv[key] = typeof value === "string" ? expandPluginVariables(value, pluginPath) : value;
            }
            expanded.env = expandedEnv;
        }
        if (typeof serverConfig.cwd === "string") {
            expanded.cwd = expandPluginVariables(serverConfig.cwd, pluginPath);
        }
        expandedServers[serverName] = expanded;
    }
    return expandMcpEnvPlaceholders({
        ...config2,
        mcpServers: expandedServers
    }, options2);
}
function parsePluginMcpConfig(content, installPath, options2) {
    try {
        const data = parse6(content);
        const mcpSchemaId = readSchemaId(data);
        if (mcpSchemaId !== void 0) {
            const logger146 = options2?.log ?? noopPluginMetricsLogger;
            if (resolveSchemaVersion(mcpSchemaId).kind === "unsupported") {
                logger146.log("debug", `mcp.json declares an unrecognized $schema, loading anyway: ${mcpSchemaId}`);
            } else if (schemaVersionsDisagree(options2?.pluginSchemaId, mcpSchemaId)) {
                logger146.log("debug", `mcp.json $schema ${mcpSchemaId} disagrees with plugin.json $schema ${options2?.pluginSchemaId}, loading anyway`);
            }
        }
        const parsed = mcpConfigSchema.safeParse(data);
        const skipExpansion = options2?.skipExpansion === true;
        if (parsed.success && parsed.data.mcpServers && Object.keys(parsed.data.mcpServers).length > 0) {
            return skipExpansion ? parsed.data : expandMcpServerConfig(parsed.data, installPath, options2);
        }
        const rootServers = {};
        for (const [key, value] of Object.entries(data)){
            if (key !== "mcpServers" && !isMcpLikelyMetadataObject(key, value) && isMcpServerLikeObject(value)) {
                rootServers[key] = value;
            }
        }
        if (Object.keys(rootServers).length > 0) {
            const wrappedParsed = mcpConfigSchema.safeParse({
                mcpServers: rootServers
            });
            if (wrappedParsed.success) {
                return skipExpansion ? wrappedParsed.data : expandMcpServerConfig(wrappedParsed.data, installPath, options2);
            }
        }
        return null;
    } catch  {
        return null;
    }
}
function mergeResolvedServers(target, servers, sourcePath) {
    for (const [name17, server] of Object.entries(servers)){
        target.mcpServers[name17] = server;
        target.mcpServerSourcePaths[name17] = sourcePath;
    }
}
async function resolveManifestMcpServersWithReader(mcpServers, readFileContent, options2 = {}) {
    const toSourcePath = options2.toSourcePath ?? ((p2)=>p2);
    const installPathForExpansion = options2.installPathForExpansion ?? "";
    const resolved = {
        mcpServers: {},
        mcpServerSourcePaths: {}
    };
    const loadFromPath = async (rawPath)=>{
        const normalized = rawPath.replace(/^\.\//, "");
        if (!isPathSafe(normalized)) {
            return;
        }
        const content = await readFileContent(normalized);
        if (content === null) {
            return;
        }
        const config2 = parsePluginMcpConfig(content, installPathForExpansion, options2.parserOptions);
        if (config2?.mcpServers && Object.keys(config2.mcpServers).length > 0) {
            mergeResolvedServers(resolved, config2.mcpServers, toSourcePath(normalized));
        }
    };
    const loadInline = (item)=>{
        const config2 = parsePluginMcpConfig(JSON.stringify(item), installPathForExpansion, options2.parserOptions);
        if (config2?.mcpServers && Object.keys(config2.mcpServers).length > 0) {
            mergeResolvedServers(resolved, config2.mcpServers, options2.manifestSourcePath ?? "manifest");
        }
    };
    if (typeof mcpServers === "string") {
        await loadFromPath(mcpServers);
    } else if (Array.isArray(mcpServers)) {
        for (const item of mcpServers){
            if (typeof item === "string") {
                await loadFromPath(item);
            } else if (typeof item === "object" && item !== null) {
                loadInline(item);
            }
        }
    } else if (typeof mcpServers === "object" && mcpServers !== null) {
        loadInline(mcpServers);
    }
    return resolved;
}
export async function resolvePluginMcpConfigFromReader(readFileContent, manifestMcpServers, manifestSourcePath, options2 = {}) {
    const toSourcePath = options2.toSourcePath ?? ((p2)=>p2);
    const installPathForExpansion = options2.installPathForExpansion ?? "";
    const fallbackFileNames = options2.fallbackFileNames ?? PLUGIN_MCP_CONFIG_FILE_NAMES;
    const manifestPrecedence = options2.manifestPrecedence ?? "override";
    const mcpServers = {};
    const mcpServerSourcePaths = {};
    for (const fileName of fallbackFileNames){
        const content = await readFileContent(fileName);
        if (content === null) {
            continue;
        }
        const config2 = parsePluginMcpConfig(content, installPathForExpansion, options2.parserOptions);
        if (!config2?.mcpServers) {
            continue;
        }
        for (const [name17, server] of Object.entries(config2.mcpServers)){
            if (mcpServers[name17] === void 0) {
                mcpServers[name17] = server;
                mcpServerSourcePaths[name17] = toSourcePath(fileName);
            }
        }
    }
    if (manifestMcpServers !== void 0) {
        const fromManifest = await resolveManifestMcpServersWithReader(manifestMcpServers, readFileContent, {
            toSourcePath,
            manifestSourcePath,
            installPathForExpansion,
            parserOptions: options2.parserOptions
        });
        for (const [name17, server] of Object.entries(fromManifest.mcpServers)){
            if (manifestPrecedence === "fill" && mcpServers[name17] !== void 0) {
                continue;
            }
            mcpServers[name17] = server;
            mcpServerSourcePaths[name17] = fromManifest.mcpServerSourcePaths[name17];
        }
    }
    if (Object.keys(mcpServers).length === 0) {
        return null;
    }
    return {
        mcpServers,
        ...Object.keys(mcpServerSourcePaths).length > 0 && {
            mcpServerSourcePaths
        }
    };
}
async function resolvePluginMcpConfigWithManifestLookup(readFileContent, options2 = {}) {
    const toSourcePath = options2.toSourcePath ?? ((p2)=>p2);
    let manifestMcpServers;
    let manifestSourcePath;
    let pluginSchemaId;
    for (const manifestPath of PLUGIN_MANIFEST_PATHS){
        const content = await readFileContent(manifestPath);
        if (content === null) {
            continue;
        }
        let rawManifest;
        try {
            rawManifest = JSON.parse(content);
        } catch  {
            continue;
        }
        pluginSchemaId = readSchemaId(rawManifest);
        const parsed = parsePluginManifest(content);
        if (!parsed.success) {
            continue;
        }
        if (parsed.data.mcpServers !== void 0) {
            manifestMcpServers = parsed.data.mcpServers;
            manifestSourcePath = toSourcePath(manifestPath);
        }
        break;
    }
    const resolvedOptions = pluginSchemaId === void 0 ? options2 : {
        ...options2,
        parserOptions: {
            ...options2.parserOptions,
            pluginSchemaId
        }
    };
    return resolvePluginMcpConfigFromReader(readFileContent, manifestMcpServers, manifestSourcePath, resolvedOptions);
}
export function Zn(s3, t, e) {
    let i = t, r = t ? t.next : s3.head, n = new ue(e, i, r, s3);
    return n.next === void 0 && (s3.tail = n), n.prev === void 0 && (s3.head = n), s3.length++, n;
}
export function Yn(s3, t) {
    s3.tail = new ue(t, s3.tail, void 0, s3), s3.head || (s3.head = s3.tail), s3.length++;
}
export function Kn(s3, t) {
    s3.head = new ue(t, void 0, s3.head, s3), s3.tail || (s3.tail = s3.head), s3.length++;
}
function gitNonInteractiveLeadingArgs() {
    const args = [
        "-c",
        "credential.interactive=false",
        "-c",
        "core.fsmonitor=false"
    ];
    if (process.platform === "win32") {
        args.push("-c", "core.longpaths=true");
    }
    return args;
}
function gitNonInteractiveExecOptions(extra) {
    const env = {
        ...process.env,
        GIT_TERMINAL_PROMPT: "0",
        GIT_ASKPASS: void 0,
        VSCODE_GIT_ASKPASS_NODE: void 0,
        VSCODE_GIT_ASKPASS_MAIN: void 0,
        VSCODE_GIT_ASKPASS_EXTRA_ARGS: void 0,
        GCM_INTERACTIVE: "Never"
    };
    env.GIT_CONFIG_NOSYSTEM = void 0;
    if (extra?.sshBatchMode === true) {
        const baseSshCommand = process.env.GIT_SSH_COMMAND?.trim() || "ssh";
        env.GIT_SSH_COMMAND = `${baseSshCommand} -oBatchMode=yes`;
    }
    if (extra?.extraGitConfig !== void 0) {
        const entries = Object.entries(extra.extraGitConfig).flatMap(([key, value])=>Array.isArray(value) ? value.map((v2)=>[
                    key,
                    v2
                ]) : [
                [
                    key,
                    value
                ]
            ]);
        env.GIT_CONFIG_COUNT = String(entries.length);
        for (const [index, [key, value]] of entries.entries()){
            env[`GIT_CONFIG_KEY_${index}`] = key;
            env[`GIT_CONFIG_VALUE_${index}`] = value;
        }
    }
    return {
        cwd: extra?.cwd,
        env
    };
}
export function resolveExtraGitConfig(provider) {
    return typeof provider === "function" ? provider() : provider;
}
export async function execGitNonInteractive(args, options2) {
    const execOptions = gitNonInteractiveExecOptions({
        cwd: options2?.cwd,
        sshBatchMode: options2?.sshBatchMode,
        extraGitConfig: options2?.extraGitConfig
    });
    return gitExecFile("git", [
        ...gitNonInteractiveLeadingArgs(),
        ...args
    ], {
        ...execOptions,
        ...options2?.timeoutMs !== void 0 && {
            timeout: options2.timeoutMs,
            killSignal: "SIGTERM"
        }
    });
}
function parseResolvedCommitSha(stdout) {
    if (stdout === void 0 || stdout === "") {
        return void 0;
    }
    const shaLines = stdout.split(/\r?\n/).map((line)=>{
        const [sha, refName] = line.split("	");
        if (!sha || !refName || !/^[0-9a-f]{40}$/i.test(sha)) {
            return void 0;
        }
        return {
            sha,
            refName
        };
    }).filter((line)=>line !== void 0);
    if (shaLines.length === 0) {
        return void 0;
    }
    return shaLines.find((line)=>line.refName.endsWith("^{}"))?.sha ?? shaLines[0].sha;
}
async function resolveExactRemoteNamedHexRef(gitUrl, ref, options2) {
    const { stdout } = await execGitNonInteractive([
        "ls-remote",
        gitUrl,
        `refs/heads/${ref}`,
        `refs/tags/${ref}`,
        `refs/tags/${ref}^{}`
    ], {
        sshBatchMode: options2?.sshBatchMode,
        extraGitConfig: options2?.extraGitConfig,
        timeoutMs: options2?.timeoutMs
    });
    return parseResolvedCommitSha(stdout)?.toLowerCase();
}
export async function resolveGitRemoteRef(gitUrl, ref, options2) {
    const r = ref.trim();
    if (FULL_SHA_REGEX.test(r)) {
        return {
            fullSha: r.toLowerCase()
        };
    }
    if (SHA_REF_REGEX.test(r)) {
        try {
            const namedRefSha = await resolveExactRemoteNamedHexRef(gitUrl, r, options2);
            if (namedRefSha) {
                return {
                    fullSha: namedRefSha
                };
            }
        } catch  {}
        return {
            fullSha: r.toLowerCase()
        };
    }
    let stdout;
    try {
        if (r.toUpperCase() === "HEAD") {
            const result2 = await execGitNonInteractive([
                "ls-remote",
                "--symref",
                gitUrl,
                "HEAD"
            ], {
                sshBatchMode: options2?.sshBatchMode,
                extraGitConfig: options2?.extraGitConfig,
                timeoutMs: options2?.timeoutMs
            });
            const commitSha2 = parseResolvedCommitSha(result2.stdout);
            if (!commitSha2) {
                throw new Error(`git ls-remote did not return a resolvable commit for HEAD (${gitUrl})`);
            }
            return {
                fullSha: commitSha2.toLowerCase(),
                headSymrefStdout: result2.stdout
            };
        }
        const result = await execGitNonInteractive([
            "ls-remote",
            gitUrl,
            r
        ], {
            sshBatchMode: options2?.sshBatchMode,
            extraGitConfig: options2?.extraGitConfig,
            timeoutMs: options2?.timeoutMs
        });
        stdout = result.stdout;
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        const wrappedError = new Error(`Failed to resolve git ref "${r}" for ${gitUrl}: ${message}`);
        wrappedError.cause = err;
        throw wrappedError;
    }
    const commitSha = parseResolvedCommitSha(stdout);
    if (!commitSha) {
        throw new Error(`git ls-remote did not return a resolvable commit for ref "${r}" (${gitUrl})`);
    }
    return {
        fullSha: commitSha.toLowerCase()
    };
}
function parseGitVersion(stdout) {
    const match2 = /git version (\d+)\.(\d+)/.exec(stdout);
    if (!match2) {
        return null;
    }
    return {
        major: Number(match2[1]),
        minor: Number(match2[2])
    };
}
function isSparseCloneSupported() {
    if (process.env[DISABLE_SPARSE_PLUGIN_CLONES_ENV]) {
        return Promise.resolve(false);
    }
    sparseSupportPromise ??= (async ()=>{
        try {
            const { stdout } = await execGitNonInteractive([
                "--version"
            ]);
            const version4 = parseGitVersion(stdout);
            if (version4 === null) {
                return false;
            }
            return version4.major > MIN_SPARSE_GIT.major || version4.major === MIN_SPARSE_GIT.major && version4.minor >= MIN_SPARSE_GIT.minor;
        } catch  {
            return false;
        }
    })();
    return sparseSupportPromise;
}
function normalizeSparseCheckoutDir(dir) {
    let normalized = dir.trim().replaceAll("\\", "/");
    while(normalized.startsWith("./")){
        normalized = normalized.slice(2);
    }
    normalized = normalized.replace(/\/+$/, "");
    if (normalized === "" || normalized === ".") {
        return null;
    }
    if (normalized.startsWith("/") || /^[a-zA-Z]:/.test(normalized)) {
        return null;
    }
    const segments = normalized.split("/");
    if (segments.some((s3)=>s3 === "" || s3 === "." || s3 === "..")) {
        return null;
    }
    return normalized;
}
function materializeSpecForGitPaths(gitPaths) {
    const dirs = [];
    for (const gitPath of gitPaths){
        const normalized = normalizeSparseCheckoutDir(gitPath);
        if (normalized === null) {
            return "all";
        }
        dirs.push(normalized);
    }
    return dirs;
}
function sparseDirsForInitialCheckout(dirs) {
    return [
        ...new Set([
            ...ALWAYS_SPARSE_DIRS,
            ...dirs
        ])
    ];
}
export async function resolveSparseClonePlan(requested, sparsePluginClones) {
    const materialize2 = requested === "all" ? "all" : materializeSpecForGitPaths(requested);
    const sparse = sparsePluginClones && materialize2 !== "all" && await isSparseCloneSupported();
    return {
        materialize: materialize2,
        sparse,
        sparseDirs: sparse ? sparseDirsForInitialCheckout(materialize2) : []
    };
}
export function serverIgnoredFilter(stderr) {
    return stderr.toLowerCase().includes("filtering not recognized by server");
}
export async function setSparseCheckoutDirs(repoDir, dirs, execOpts) {
    await execGitNonInteractive([
        "sparse-checkout",
        "set",
        "--cone",
        "--",
        ...dirs
    ], {
        ...execOpts,
        cwd: repoDir
    });
}
export async function isSparseCheckoutRepo(repoDir) {
    try {
        await (0, import_promises13.access)((0, import_node_path30.join)(repoDir, ".git", "info", "sparse-checkout"));
    } catch  {
        return false;
    }
    try {
        const { stdout } = await execGitNonInteractive([
            "config",
            "--bool",
            "--get",
            "core.sparseCheckout"
        ], {
            cwd: repoDir
        });
        return stdout.trim() === "true";
    } catch  {
        return false;
    }
}
export async function materializeSparseDirs(repoDir, spec, execOpts) {
    if (spec !== "all" && spec.length === 0) {
        return;
    }
    if (!await isSparseCheckoutRepo(repoDir)) {
        return;
    }
    const gitOpts = {
        ...execOpts,
        cwd: repoDir,
        sshBatchMode: true
    };
    if (spec === "all") {
        await execGitNonInteractive([
            "sparse-checkout",
            "disable"
        ], gitOpts);
        return;
    }
    const dirs = materializeSpecForGitPaths(spec);
    if (dirs === "all") {
        await execGitNonInteractive([
            "sparse-checkout",
            "disable"
        ], gitOpts);
        return;
    }
    await execGitNonInteractive([
        "sparse-checkout",
        "add",
        "--",
        ...dirs
    ], gitOpts);
}
var sparseSupportPromise;
function detectNonGitHubProvider(host) {
    const lowerHost = host.toLowerCase();
    if (isGitLabHost(host)) {
        return "GitLab";
    }
    if (lowerHost.includes("bitbucket")) {
        return "Bitbucket";
    }
    if (lowerHost.includes("gitea") || lowerHost.includes("codeberg")) {
        return "Gitea/Codeberg";
    }
    if (lowerHost.includes("azure") && lowerHost.includes("dev")) {
        return "Azure DevOps";
    }
    return null;
}
function getProvider(host) {
    if (isGitHubDotComHost(host)) {
        return "github";
    }
    if (isGitLabHost(host)) {
        return "gitlab";
    }
    if (isBitbucketCloudHost(host)) {
        return "bitbucket";
    }
    if (isAzureDevopsServicesHost(host)) {
        return "azure_devops";
    }
    return "generic";
}
function parseGitUrl(gitUrl) {
    let url2;
    try {
        const normalized = gitUrl.startsWith("git@") ? `ssh://${gitUrl.replace(":", "/")}` : gitUrl;
        url2 = new URL(normalized.includes("://") ? normalized : `https://${normalized}`);
    } catch  {
        return null;
    }
    const host = url2.hostname;
    let pathSegments = url2.pathname.split("/").filter(Boolean);
    if (isOriginGitHost(host) && pathSegments[0]?.toLowerCase() === "git") {
        pathSegments = pathSegments.slice(1);
    }
    if (pathSegments.length >= 3 && pathSegments[0].toLowerCase() === "scm") {
        pathSegments = pathSegments.slice(1);
    }
    const repositoryPath = parseGitHubRepositoryPathSegments(pathSegments);
    if (repositoryPath === void 0) {
        return null;
    }
    return {
        provider: getProvider(host),
        owner: repositoryPath.owner,
        repo: repositoryPath.repo,
        host
    };
}
function hasBitbucketServerScmPrefix(input) {
    const url2 = normalizeToUrl(input);
    if (url2 === null) {
        return false;
    }
    const segments = url2.pathname.split("/").filter(Boolean);
    return segments.length >= 3 && segments[0].toLowerCase() === "scm";
}
function normalizeToUrl(gitUrl) {
    try {
        const normalized = gitUrl.startsWith("git@") ? `ssh://${gitUrl.replace(":", "/")}` : gitUrl;
        return new URL(normalized.includes("://") ? normalized : `https://${normalized}`);
    } catch  {
        return null;
    }
}
function bitbucketPathSegments(url2) {
    const segments = url2.pathname.split("/");
    if (segments[0] === "") {
        segments.shift();
    }
    if (segments[segments.length - 1] === "") {
        segments.pop();
    }
    return segments;
}
function parseBitbucketRepositoryUrl(input) {
    const url2 = normalizeToUrl(input.trim());
    if (url2 === null || !isBitbucketCloudHost(url2.hostname)) {
        return void 0;
    }
    return parseBitbucketRepositoryPathSegments(bitbucketPathSegments(url2));
}
function parseAndValidateScmUrl(input) {
    const trimmed = input.trim();
    if (trimmed === "") {
        return {
            error: "URL cannot be empty"
        };
    }
    const parsed = parseGitUrl(trimmed);
    if (parsed === null) {
        return {
            error: "Invalid URL format. Expected: github.com/owner/repo or gitlab.com/namespace/repo"
        };
    }
    if (isGitLabHost(parsed.host)) {
        const url2 = normalizeToUrl(trimmed);
        const repositoryPath = url2 === null ? void 0 : parseGitLabRepositoryPathSegments(url2.pathname.split("/").filter(Boolean));
        if (url2 === null || repositoryPath === void 0) {
            return {
                error: "Invalid GitLab repository URL format. Expected: https://gitlab.com/namespace/repo"
            };
        }
        const host = url2.host.replace(/^www\./i, "");
        return {
            url: `https://${host}/${repositoryPath.repositorySegments.join("/")}`,
            owner: repositoryPath.repositorySegments[0],
            repo: repositoryPath.repositorySegments[repositoryPath.repositorySegments.length - 1],
            host,
            provider: "gitlab"
        };
    }
    if (parsed.provider === "bitbucket") {
        const repositoryPath = parseBitbucketRepositoryUrl(trimmed);
        if (repositoryPath === void 0) {
            return {
                error: "Invalid Bitbucket repository URL format. Expected: https://bitbucket.org/{workspace}/{repo}"
            };
        }
        const host = parsed.host.replace(/^www\./i, "");
        return {
            url: `https://${host}/${repositoryPath.workspace}/${repositoryPath.repo}`,
            owner: repositoryPath.workspace,
            repo: repositoryPath.repo,
            host,
            provider: "bitbucket"
        };
    }
    if (parsed.provider === "azure_devops") {
        const url2 = normalizeToUrl(trimmed);
        const repositoryPath = url2 === null ? void 0 : parseAzureDevopsRepositoryPathSegments(url2.pathname.split("/").filter(Boolean));
        if (url2 === null || repositoryPath === void 0) {
            return {
                error: "Invalid Azure DevOps repository URL format. Expected: https://dev.azure.com/{organization}/{project}/_git/{repo}"
            };
        }
        const host = parsed.host.replace(/^www\./i, "");
        return {
            url: `https://${host}/${repositoryPath.organization}/${repositoryPath.project}/_git/${repositoryPath.repo}`,
            owner: repositoryPath.organization,
            repo: repositoryPath.repo,
            host,
            provider: "azure_devops",
            project: repositoryPath.project
        };
    }
    if (isGitHubCompatibleHost(parsed)) {
        const host = canonicalRepoHost(parsed.host.replace(/^www\./i, ""));
        const pathPrefix = hasBitbucketServerScmPrefix(trimmed) ? "scm/" : "";
        return {
            url: `https://${host}/${pathPrefix}${parsed.owner}/${parsed.repo}`,
            owner: parsed.owner,
            repo: parsed.repo,
            host,
            provider: "github"
        };
    }
    const nonGitHubProvider = detectNonGitHubProvider(parsed.host);
    return {
        error: `Only GitHub, GitLab, Bitbucket, and Azure DevOps URLs are currently supported.${nonGitHubProvider !== null ? ` ${nonGitHubProvider} is not supported yet.` : ""}`
    };
}
function isGitHubCompatibleHost(parsed) {
    switch(parsed.provider){
        case "github":
            return true;
        case "generic":
            if (isOriginGitHost(parsed.host)) {
                return false;
            }
            return detectNonGitHubProvider(parsed.host) === null;
        case "gitlab":
        case "bitbucket":
        case "azure_devops":
            return false;
        default:
            {
                const _exhaustive = parsed.provider;
                return false;
            }
    }
}
export function toScmSshUrl(gitUrl) {
    const scm = parseAndValidateScmUrl(gitUrl);
    if ("error" in scm) {
        return null;
    }
    switch(scm.provider){
        case "github":
            return `git@${scm.host}:${scm.owner}/${scm.repo}.git`;
        case "gitlab":
            return gitlabScmToSshUrl(scm);
        case "bitbucket":
        case "azure_devops":
            return null;
        default:
            {
                const _exhaustive = scm.provider;
                return null;
            }
    }
}
function gitlabScmToSshUrl(scm) {
    let pathname;
    try {
        pathname = new URL(scm.url).pathname.replace(/^\//, "").replace(/\.git$/i, "");
    } catch  {
        return null;
    }
    if (pathname.length === 0) {
        return null;
    }
    const hostWithoutPort = scm.host.replace(/:\d+$/, "");
    return `git@${hostWithoutPort}:${pathname}.git`;
}
function canonicalRepoHost(host) {
    if (isGitHubDotComHost(host)) {
        return "github.com";
    }
    return host;
}
export function validateAndResolveSubpath(baseDir, subPath) {
    const resolvedBase = (0, import_node_path31.resolve)(baseDir);
    const resolved = (0, import_node_path31.resolve)(baseDir, subPath);
    const rel = (0, import_node_path31.relative)(resolvedBase, resolved);
    if (rel.startsWith("..") || (0, import_node_path31.isAbsolute)(rel)) {
        throw new Error(`Invalid subPath: path traversal not allowed (${JSON.stringify(subPath)})`);
    }
    return resolved;
}
export function sanitize(value) {
    const sanitized = sanitizeFilename(value).replace(/[. ]+$/g, "");
    if (sanitized === "" || sanitized === "." || sanitized === "..") {
        return "_";
    }
    if (WINDOWS_RESERVED_PATH_NAMES.has(sanitized.toLowerCase())) {
        return `_${sanitized}`;
    }
    return sanitized;
}
export function classifyCloneError(error3) {
    const msg = String(error3).toLowerCase().replaceAll("\\", "/");
    if (USER_GIT_ACCESS_PATTERNS.some((p2)=>msg.includes(p2))) {
        return "user_git_access";
    }
    if (LOCAL_CACHE_PATTERNS.every((p2)=>msg.includes(p2))) {
        return "local_cache_race";
    }
    if (STALE_PINNED_REF_PATTERNS.some((p2)=>msg.includes(p2))) {
        return "stale_pinned_ref";
    }
    return "infrastructure";
}
export function isKilledSubprocessError(error3) {
    if (typeof error3 !== "object" || error3 === null) {
        return false;
    }
    if (error3.killed === true) {
        return true;
    }
    return isKilledSubprocessError(error3.cause);
}
export function cloneErrorTag(error3) {
    return isKilledSubprocessError(error3) ? "killed_by_budget" : classifyCloneError(error3);
}
export function getCanonicalMarketplacePathSegments(gitUrl) {
    const scm = parseAndValidateScmUrl(gitUrl);
    if (!("error" in scm) && scm.provider === "gitlab") {
        let pathname;
        try {
            pathname = new URL(scm.url).pathname.replace(/^\//, "");
        } catch  {
            throw new Error(`Invalid git URL: ${gitUrl}`);
        }
        const pathSegments = pathname.split("/").filter(Boolean).map((segment)=>segment.toLowerCase());
        if (pathSegments.length < 2) {
            throw new Error(`Invalid git URL: ${gitUrl}`);
        }
        return {
            host: scm.host.toLowerCase(),
            pathSegments
        };
    }
    const parsed = parseGitUrl(gitUrl);
    if (parsed === null) {
        throw new Error(`Invalid git URL: ${gitUrl}`);
    }
    return {
        host: canonicalRepoHost(parsed.host.replace(/^www\./i, "")).toLowerCase(),
        pathSegments: [
            parsed.owner.toLowerCase(),
            parsed.repo.toLowerCase()
        ]
    };
}
export function manifestCacheKey(clonePath, options2) {
    return JSON.stringify({
        clonePath,
        repoName: options2.repoName ?? null,
        fallbackId: options2.fallbackId ?? null
    });
}
export async function readMarketplaceManifestFromDir(dir, options2 = {}) {
    for (const manifestRelPath of MARKETPLACE_MANIFEST_PATHS){
        const manifestPath = (0, import_node_path32.join)(dir, manifestRelPath);
        let content;
        try {
            content = await (0, import_promises14.readFile)(manifestPath, "utf-8");
        } catch  {
            continue;
        }
        const result = parseMarketplaceManifest(content, options2);
        if (result.success) {
            return result.data;
        }
    }
    return null;
}
export function discoverPluginsFromManifest(manifest) {
    const plugins = [];
    const classified = parseAndClassifyManifestEntries(manifest.plugins, manifest.metadata?.pluginRoot);
    for (const c of classified){
        const { name: name17, displayName, description: description3, version: version4 } = c.entry;
        const common2 = {
            name: name17,
            displayName,
            description: description3,
            version: version4
        };
        switch(c.kind){
            case "local":
                if (isPathSafe(c.localPath)) {
                    plugins.push({
                        ...common2,
                        sourceType: "local",
                        gitPath: c.localPath
                    });
                }
                break;
            case "external-github":
                plugins.push({
                    ...common2,
                    sourceType: "github",
                    gitUrl: c.externalUrl,
                    gitRef: c.externalRef,
                    sha: c.externalSha
                });
                break;
            case "external-url":
                plugins.push({
                    ...common2,
                    sourceType: "url",
                    gitUrl: c.externalUrl,
                    gitRef: c.externalRef,
                    sha: c.externalSha
                });
                break;
            case "external-git-subdir":
                plugins.push({
                    ...common2,
                    sourceType: "git-subdir",
                    gitUrl: c.externalUrl,
                    gitRef: c.externalRef,
                    sha: c.externalSha,
                    subdirPath: c.subdirPath
                });
                break;
            case "unresolvable":
                break;
            default:
                {
                    const _exhaustive = c;
                    void _exhaustive;
                }
        }
    }
    return plugins;
}
export function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function requireCommon() {
    if (hasRequiredCommon) return common;
    hasRequiredCommon = 1;
    function isNothing(subject) {
        return typeof subject === "undefined" || subject === null;
    }
    function isObject5(subject) {
        return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
        if (Array.isArray(sequence)) return sequence;
        else if (isNothing(sequence)) return [];
        return [
            sequence
        ];
    }
    function extend2(target, source) {
        if (source) {
            const sourceKeys = Object.keys(source);
            for(let index = 0, length = sourceKeys.length; index < length; index += 1){
                const key = sourceKeys[index];
                target[key] = source[key];
            }
        }
        return target;
    }
    function repeat(string5, count2) {
        let result = "";
        for(let cycle = 0; cycle < count2; cycle += 1){
            result += string5;
        }
        return result;
    }
    function isNegativeZero(number4) {
        return number4 === 0 && Number.NEGATIVE_INFINITY === 1 / number4;
    }
    common.isNothing = isNothing;
    common.isObject = isObject5;
    common.toArray = toArray;
    common.repeat = repeat;
    common.isNegativeZero = isNegativeZero;
    common.extend = extend2;
    return common;
}
function requireException() {
    if (hasRequiredException) return exception;
    hasRequiredException = 1;
    function formatError3(exception2, compact) {
        let where = "";
        const message = exception2.reason || "(unknown reason)";
        if (!exception2.mark) return message;
        if (exception2.mark.name) {
            where += 'in "' + exception2.mark.name + '" ';
        }
        where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
        if (!compact && exception2.mark.snippet) {
            where += "\n\n" + exception2.mark.snippet;
        }
        return message + " " + where;
    }
    function YAMLException2(reason, mark) {
        Error.call(this);
        this.name = "YAMLException";
        this.reason = reason;
        this.mark = mark;
        this.message = formatError3(this, false);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error().stack || "";
        }
    }
    YAMLException2.prototype = Object.create(Error.prototype);
    YAMLException2.prototype.constructor = YAMLException2;
    YAMLException2.prototype.toString = function toString2(compact) {
        return this.name + ": " + formatError3(this, compact);
    };
    exception = YAMLException2;
    return exception;
}
function requireSnippet() {
    if (hasRequiredSnippet) return snippet;
    hasRequiredSnippet = 1;
    const common2 = requireCommon();
    function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
        let head = "";
        let tail = "";
        const maxHalfLength = Math.floor(maxLineLength / 2) - 1;
        if (position - lineStart > maxHalfLength) {
            head = " ... ";
            lineStart = position - maxHalfLength + head.length;
        }
        if (lineEnd - position > maxHalfLength) {
            tail = " ...";
            lineEnd = position + maxHalfLength - tail.length;
        }
        return {
            str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
            pos: position - lineStart + head.length
        };
    }
    function padStart(string5, max) {
        return common2.repeat(" ", max - string5.length) + string5;
    }
    function makeSnippet(mark, options2) {
        options2 = Object.create(options2 || null);
        if (!mark.buffer) return null;
        if (!options2.maxLength) options2.maxLength = 79;
        if (typeof options2.indent !== "number") options2.indent = 1;
        if (typeof options2.linesBefore !== "number") options2.linesBefore = 3;
        if (typeof options2.linesAfter !== "number") options2.linesAfter = 2;
        const re3 = /\r?\n|\r|\0/g;
        const lineStarts = [
            0
        ];
        const lineEnds = [];
        let match2;
        let foundLineNo = -1;
        while(match2 = re3.exec(mark.buffer)){
            lineEnds.push(match2.index);
            lineStarts.push(match2.index + match2[0].length);
            if (mark.position <= match2.index && foundLineNo < 0) {
                foundLineNo = lineStarts.length - 2;
            }
        }
        if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
        let result = "";
        const lineNoLength = Math.min(mark.line + options2.linesAfter, lineEnds.length).toString().length;
        const maxLineLength = options2.maxLength - (options2.indent + lineNoLength + 3);
        for(let i = 1; i <= options2.linesBefore; i++){
            if (foundLineNo - i < 0) break;
            const line2 = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
            result = common2.repeat(" ", options2.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line2.str + "\n" + result;
        }
        const line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
        result += common2.repeat(" ", options2.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
        result += common2.repeat("-", options2.indent + lineNoLength + 3 + line.pos) + "^\n";
        for(let i = 1; i <= options2.linesAfter; i++){
            if (foundLineNo + i >= lineEnds.length) break;
            const line2 = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
            result += common2.repeat(" ", options2.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line2.str + "\n";
        }
        return result.replace(/\n$/, "");
    }
    snippet = makeSnippet;
    return snippet;
}
function requireType() {
    if (hasRequiredType) return type;
    hasRequiredType = 1;
    const YAMLException2 = requireException();
    const TYPE_CONSTRUCTOR_OPTIONS = [
        "kind",
        "multi",
        "resolve",
        "construct",
        "instanceOf",
        "predicate",
        "represent",
        "representName",
        "defaultStyle",
        "styleAliases"
    ];
    const YAML_NODE_KINDS = [
        "scalar",
        "sequence",
        "mapping"
    ];
    function compileStyleAliases(map22) {
        const result = {};
        if (map22 !== null) {
            Object.keys(map22).forEach(function(style) {
                map22[style].forEach(function(alias) {
                    result[String(alias)] = style;
                });
            });
        }
        return result;
    }
    function Type22(tag, options2) {
        options2 = options2 || {};
        Object.keys(options2).forEach(function(name17) {
            if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name17) === -1) {
                throw new YAMLException2('Unknown option "' + name17 + '" is met in definition of "' + tag + '" YAML type.');
            }
        });
        this.options = options2;
        this.tag = tag;
        this.kind = options2["kind"] || null;
        this.resolve = options2["resolve"] || function() {
            return true;
        };
        this.construct = options2["construct"] || function(data) {
            return data;
        };
        this.instanceOf = options2["instanceOf"] || null;
        this.predicate = options2["predicate"] || null;
        this.represent = options2["represent"] || null;
        this.representName = options2["representName"] || null;
        this.defaultStyle = options2["defaultStyle"] || null;
        this.multi = options2["multi"] || false;
        this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
        if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
            throw new YAMLException2('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
        }
    }
    type = Type22;
    return type;
}
function requireSchema() {
    if (hasRequiredSchema) return schema;
    hasRequiredSchema = 1;
    const YAMLException2 = requireException();
    const Type22 = requireType();
    function compileList(schema2, name17) {
        const result = [];
        schema2[name17].forEach(function(currentType) {
            let newIndex = result.length;
            result.forEach(function(previousType, previousIndex) {
                if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
                    newIndex = previousIndex;
                }
            });
            result[newIndex] = currentType;
        });
        return result;
    }
    function compileMap() {
        const result = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {},
            multi: {
                scalar: [],
                sequence: [],
                mapping: [],
                fallback: []
            }
        };
        function collectType(type2) {
            if (type2.multi) {
                result.multi[type2.kind].push(type2);
                result.multi["fallback"].push(type2);
            } else {
                result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
            }
        }
        for(let index = 0, length = arguments.length; index < length; index += 1){
            arguments[index].forEach(collectType);
        }
        return result;
    }
    function Schema2(definition) {
        return this.extend(definition);
    }
    Schema2.prototype.extend = function extend2(definition) {
        let implicit = [];
        let explicit = [];
        if (definition instanceof Type22) {
            explicit.push(definition);
        } else if (Array.isArray(definition)) {
            explicit = explicit.concat(definition);
        } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
            if (definition.implicit) implicit = implicit.concat(definition.implicit);
            if (definition.explicit) explicit = explicit.concat(definition.explicit);
        } else {
            throw new YAMLException2("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
        }
        implicit.forEach(function(type2) {
            if (!(type2 instanceof Type22)) {
                throw new YAMLException2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            }
            if (type2.loadKind && type2.loadKind !== "scalar") {
                throw new YAMLException2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            }
            if (type2.multi) {
                throw new YAMLException2("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
            }
        });
        explicit.forEach(function(type2) {
            if (!(type2 instanceof Type22)) {
                throw new YAMLException2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            }
        });
        const result = Object.create(Schema2.prototype);
        result.implicit = (this.implicit || []).concat(implicit);
        result.explicit = (this.explicit || []).concat(explicit);
        result.compiledImplicit = compileList(result, "implicit");
        result.compiledExplicit = compileList(result, "explicit");
        result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
        return result;
    };
    schema = Schema2;
    return schema;
}
function requireStr() {
    if (hasRequiredStr) return str2;
    hasRequiredStr = 1;
    const Type22 = requireType();
    str2 = new Type22("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(data) {
            return data !== null ? data : "";
        }
    });
    return str2;
}
function requireSeq() {
    if (hasRequiredSeq) return seq;
    hasRequiredSeq = 1;
    const Type22 = requireType();
    seq = new Type22("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(data) {
            return data !== null ? data : [];
        }
    });
    return seq;
}
function requireMap() {
    if (hasRequiredMap) return map3;
    hasRequiredMap = 1;
    const Type22 = requireType();
    map3 = new Type22("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(data) {
            return data !== null ? data : {};
        }
    });
    return map3;
}
function requireFailsafe() {
    if (hasRequiredFailsafe) return failsafe;
    hasRequiredFailsafe = 1;
    const Schema2 = requireSchema();
    failsafe = new Schema2({
        explicit: [
            requireStr(),
            requireSeq(),
            requireMap()
        ]
    });
    return failsafe;
}
function require_null2() {
    if (hasRequired_null) return _null;
    hasRequired_null = 1;
    const Type22 = requireType();
    function resolveYamlNull(data) {
        if (data === null) return true;
        const max = data.length;
        return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
        return null;
    }
    function isNull(object4) {
        return object4 === null;
    }
    _null = new Type22("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: resolveYamlNull,
        construct: constructYamlNull,
        predicate: isNull,
        represent: {
            canonical: function() {
                return "~";
            },
            lowercase: function() {
                return "null";
            },
            uppercase: function() {
                return "NULL";
            },
            camelcase: function() {
                return "Null";
            },
            empty: function() {
                return "";
            }
        },
        defaultStyle: "lowercase"
    });
    return _null;
}
function requireBool() {
    if (hasRequiredBool) return bool;
    hasRequiredBool = 1;
    const Type22 = requireType();
    function resolveYamlBoolean(data) {
        if (data === null) return false;
        const max = data.length;
        return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
        return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object4) {
        return Object.prototype.toString.call(object4) === "[object Boolean]";
    }
    bool = new Type22("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: resolveYamlBoolean,
        construct: constructYamlBoolean,
        predicate: isBoolean,
        represent: {
            lowercase: function(object4) {
                return object4 ? "true" : "false";
            },
            uppercase: function(object4) {
                return object4 ? "TRUE" : "FALSE";
            },
            camelcase: function(object4) {
                return object4 ? "True" : "False";
            }
        },
        defaultStyle: "lowercase"
    });
    return bool;
}
function requireInt() {
    if (hasRequiredInt) return int;
    hasRequiredInt = 1;
    const common2 = requireCommon();
    const Type22 = requireType();
    function isHexCode(c) {
        return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102;
    }
    function isOctCode(c) {
        return c >= 48 && c <= 55;
    }
    function isDecCode(c) {
        return c >= 48 && c <= 57;
    }
    function resolveYamlInteger(data) {
        if (data === null) return false;
        const max = data.length;
        let index = 0;
        let hasDigits = false;
        if (!max) return false;
        let ch = data[index];
        if (ch === "-" || ch === "+") {
            ch = data[++index];
        }
        if (ch === "0") {
            if (index + 1 === max) return true;
            ch = data[++index];
            if (ch === "b") {
                index++;
                for(; index < max; index++){
                    ch = data[index];
                    if (ch !== "0" && ch !== "1") return false;
                    hasDigits = true;
                }
                return hasDigits && isFinite(parseYamlInteger(data));
            }
            if (ch === "x") {
                index++;
                for(; index < max; index++){
                    if (!isHexCode(data.charCodeAt(index))) return false;
                    hasDigits = true;
                }
                return hasDigits && isFinite(parseYamlInteger(data));
            }
            if (ch === "o") {
                index++;
                for(; index < max; index++){
                    if (!isOctCode(data.charCodeAt(index))) return false;
                    hasDigits = true;
                }
                return hasDigits && isFinite(parseYamlInteger(data));
            }
        }
        for(; index < max; index++){
            if (!isDecCode(data.charCodeAt(index))) {
                return false;
            }
            hasDigits = true;
        }
        if (!hasDigits) return false;
        return isFinite(parseYamlInteger(data));
    }
    function parseYamlInteger(data) {
        let value = data;
        let sign = 1;
        let ch = value[0];
        if (ch === "-" || ch === "+") {
            if (ch === "-") sign = -1;
            value = value.slice(1);
            ch = value[0];
        }
        if (value === "0") return 0;
        if (ch === "0") {
            if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
            if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
            if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
        }
        return sign * parseInt(value, 10);
    }
    function constructYamlInteger(data) {
        return parseYamlInteger(data);
    }
    function isInteger(object4) {
        return Object.prototype.toString.call(object4) === "[object Number]" && (object4 % 1 === 0 && !common2.isNegativeZero(object4));
    }
    int = new Type22("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: resolveYamlInteger,
        construct: constructYamlInteger,
        predicate: isInteger,
        represent: {
            binary: function(obj) {
                return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
            },
            octal: function(obj) {
                return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
            },
            decimal: function(obj) {
                return obj.toString(10);
            },
            hexadecimal: function(obj) {
                return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
            }
        },
        defaultStyle: "decimal",
        styleAliases: {
            binary: [
                2,
                "bin"
            ],
            octal: [
                8,
                "oct"
            ],
            decimal: [
                10,
                "dec"
            ],
            hexadecimal: [
                16,
                "hex"
            ]
        }
    });
    return int;
}
function requireFloat() {
    if (hasRequiredFloat) return float;
    hasRequiredFloat = 1;
    const common2 = requireCommon();
    const Type22 = requireType();
    const YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
    const YAML_FLOAT_SPECIAL_PATTERN = new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
    function resolveYamlFloat(data) {
        if (data === null) return false;
        if (!YAML_FLOAT_PATTERN.test(data)) {
            return false;
        }
        if (isFinite(parseFloat(data, 10))) {
            return true;
        }
        return YAML_FLOAT_SPECIAL_PATTERN.test(data);
    }
    function constructYamlFloat(data) {
        let value = data.toLowerCase();
        const sign = value[0] === "-" ? -1 : 1;
        if ("+-".indexOf(value[0]) >= 0) {
            value = value.slice(1);
        }
        if (value === ".inf") {
            return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        } else if (value === ".nan") {
            return NaN;
        }
        return sign * parseFloat(value, 10);
    }
    const SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object4, style) {
        if (isNaN(object4)) {
            switch(style){
                case "lowercase":
                    return ".nan";
                case "uppercase":
                    return ".NAN";
                case "camelcase":
                    return ".NaN";
            }
        } else if (Number.POSITIVE_INFINITY === object4) {
            switch(style){
                case "lowercase":
                    return ".inf";
                case "uppercase":
                    return ".INF";
                case "camelcase":
                    return ".Inf";
            }
        } else if (Number.NEGATIVE_INFINITY === object4) {
            switch(style){
                case "lowercase":
                    return "-.inf";
                case "uppercase":
                    return "-.INF";
                case "camelcase":
                    return "-.Inf";
            }
        } else if (common2.isNegativeZero(object4)) {
            return "-0.0";
        }
        const res = object4.toString(10);
        return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object4) {
        return Object.prototype.toString.call(object4) === "[object Number]" && (object4 % 1 !== 0 || common2.isNegativeZero(object4));
    }
    float = new Type22("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: resolveYamlFloat,
        construct: constructYamlFloat,
        predicate: isFloat,
        represent: representYamlFloat,
        defaultStyle: "lowercase"
    });
    return float;
}
function requireJson() {
    if (hasRequiredJson) return json;
    hasRequiredJson = 1;
    json = requireFailsafe().extend({
        implicit: [
            require_null2(),
            requireBool(),
            requireInt(),
            requireFloat()
        ]
    });
    return json;
}
function requireCore() {
    if (hasRequiredCore) return core;
    hasRequiredCore = 1;
    core = requireJson();
    return core;
}
function requireTimestamp() {
    if (hasRequiredTimestamp) return timestamp;
    hasRequiredTimestamp = 1;
    const Type22 = requireType();
    const YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
    const YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
    function resolveYamlTimestamp(data) {
        if (data === null) return false;
        if (YAML_DATE_REGEXP.exec(data) !== null) return true;
        if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
        return false;
    }
    function constructYamlTimestamp(data) {
        let fraction = 0;
        let delta = null;
        let match2 = YAML_DATE_REGEXP.exec(data);
        if (match2 === null) match2 = YAML_TIMESTAMP_REGEXP.exec(data);
        if (match2 === null) throw new Error("Date resolve error");
        const year = +match2[1];
        const month = +match2[2] - 1;
        const day = +match2[3];
        if (!match2[4]) {
            return new Date(Date.UTC(year, month, day));
        }
        const hour = +match2[4];
        const minute = +match2[5];
        const second = +match2[6];
        if (match2[7]) {
            fraction = match2[7].slice(0, 3);
            while(fraction.length < 3){
                fraction += "0";
            }
            fraction = +fraction;
        }
        if (match2[9]) {
            const tzHour = +match2[10];
            const tzMinute = +(match2[11] || 0);
            delta = (tzHour * 60 + tzMinute) * 6e4;
            if (match2[9] === "-") delta = -delta;
        }
        const date4 = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
        if (delta) date4.setTime(date4.getTime() - delta);
        return date4;
    }
    function representYamlTimestamp(object4) {
        return object4.toISOString();
    }
    timestamp = new Type22("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: resolveYamlTimestamp,
        construct: constructYamlTimestamp,
        instanceOf: Date,
        represent: representYamlTimestamp
    });
    return timestamp;
}
function requireMerge() {
    if (hasRequiredMerge) return merge2;
    hasRequiredMerge = 1;
    const Type22 = requireType();
    function resolveYamlMerge(data) {
        return data === "<<" || data === null;
    }
    merge2 = new Type22("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: resolveYamlMerge
    });
    return merge2;
}
function requireBinary() {
    if (hasRequiredBinary) return binary;
    hasRequiredBinary = 1;
    const Type22 = requireType();
    const BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
        if (data === null) return false;
        let bitlen = 0;
        const max = data.length;
        const map22 = BASE64_MAP;
        for(let idx = 0; idx < max; idx++){
            const code = map22.indexOf(data.charAt(idx));
            if (code > 64) continue;
            if (code < 0) return false;
            bitlen += 6;
        }
        return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
        const input = data.replace(/[\r\n=]/g, "");
        const max = input.length;
        const map22 = BASE64_MAP;
        let bits = 0;
        const result = [];
        for(let idx = 0; idx < max; idx++){
            if (idx % 4 === 0 && idx) {
                result.push(bits >> 16 & 255);
                result.push(bits >> 8 & 255);
                result.push(bits & 255);
            }
            bits = bits << 6 | map22.indexOf(input.charAt(idx));
        }
        const tailbits = max % 4 * 6;
        if (tailbits === 0) {
            result.push(bits >> 16 & 255);
            result.push(bits >> 8 & 255);
            result.push(bits & 255);
        } else if (tailbits === 18) {
            result.push(bits >> 10 & 255);
            result.push(bits >> 2 & 255);
        } else if (tailbits === 12) {
            result.push(bits >> 4 & 255);
        }
        return new Uint8Array(result);
    }
    function representYamlBinary(object4) {
        let result = "";
        let bits = 0;
        const max = object4.length;
        const map22 = BASE64_MAP;
        for(let idx = 0; idx < max; idx++){
            if (idx % 3 === 0 && idx) {
                result += map22[bits >> 18 & 63];
                result += map22[bits >> 12 & 63];
                result += map22[bits >> 6 & 63];
                result += map22[bits & 63];
            }
            bits = (bits << 8) + object4[idx];
        }
        const tail = max % 3;
        if (tail === 0) {
            result += map22[bits >> 18 & 63];
            result += map22[bits >> 12 & 63];
            result += map22[bits >> 6 & 63];
            result += map22[bits & 63];
        } else if (tail === 2) {
            result += map22[bits >> 10 & 63];
            result += map22[bits >> 4 & 63];
            result += map22[bits << 2 & 63];
            result += map22[64];
        } else if (tail === 1) {
            result += map22[bits >> 2 & 63];
            result += map22[bits << 4 & 63];
            result += map22[64];
            result += map22[64];
        }
        return result;
    }
    function isBinary(obj) {
        return Object.prototype.toString.call(obj) === "[object Uint8Array]";
    }
    binary = new Type22("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: resolveYamlBinary,
        construct: constructYamlBinary,
        predicate: isBinary,
        represent: representYamlBinary
    });
    return binary;
}
function requireOmap() {
    if (hasRequiredOmap) return omap;
    hasRequiredOmap = 1;
    const Type22 = requireType();
    const _hasOwnProperty = Object.prototype.hasOwnProperty;
    const _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
        if (data === null) return true;
        const objectKeys = {};
        const object4 = data;
        for(let index = 0, length = object4.length; index < length; index += 1){
            const pair = object4[index];
            let pairHasKey = false;
            if (_toString.call(pair) !== "[object Object]") return false;
            let pairKey;
            for(pairKey in pair){
                if (_hasOwnProperty.call(pair, pairKey)) {
                    if (!pairHasKey) pairHasKey = true;
                    else return false;
                }
            }
            if (!pairHasKey) return false;
            if (_hasOwnProperty.call(objectKeys, pairKey)) return false;
            Object.defineProperty(objectKeys, pairKey, {
                value: true
            });
        }
        return true;
    }
    function constructYamlOmap(data) {
        return data !== null ? data : [];
    }
    omap = new Type22("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: resolveYamlOmap,
        construct: constructYamlOmap
    });
    return omap;
}
function requirePairs() {
    if (hasRequiredPairs) return pairs;
    hasRequiredPairs = 1;
    const Type22 = requireType();
    const _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
        if (data === null) return true;
        const object4 = data;
        const result = new Array(object4.length);
        for(let index = 0, length = object4.length; index < length; index += 1){
            const pair = object4[index];
            if (_toString.call(pair) !== "[object Object]") return false;
            const keys = Object.keys(pair);
            if (keys.length !== 1) return false;
            result[index] = [
                keys[0],
                pair[keys[0]]
            ];
        }
        return true;
    }
    function constructYamlPairs(data) {
        if (data === null) return [];
        const object4 = data;
        const result = new Array(object4.length);
        for(let index = 0, length = object4.length; index < length; index += 1){
            const pair = object4[index];
            const keys = Object.keys(pair);
            result[index] = [
                keys[0],
                pair[keys[0]]
            ];
        }
        return result;
    }
    pairs = new Type22("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: resolveYamlPairs,
        construct: constructYamlPairs
    });
    return pairs;
}
function requireSet() {
    if (hasRequiredSet) return set;
    hasRequiredSet = 1;
    const Type22 = requireType();
    const _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
        if (data === null) return true;
        const object4 = data;
        for(const key in object4){
            if (_hasOwnProperty.call(object4, key)) {
                if (object4[key] !== null) return false;
            }
        }
        return true;
    }
    function constructYamlSet(data) {
        return data !== null ? data : {};
    }
    set = new Type22("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: resolveYamlSet,
        construct: constructYamlSet
    });
    return set;
}
function require_default() {
    if (hasRequired_default) return _default;
    hasRequired_default = 1;
    _default = requireCore().extend({
        implicit: [
            requireTimestamp(),
            requireMerge()
        ],
        explicit: [
            requireBinary(),
            requireOmap(),
            requirePairs(),
            requireSet()
        ]
    });
    return _default;
}
function requireLoader() {
    if (hasRequiredLoader) return loader;
    hasRequiredLoader = 1;
    const common2 = requireCommon();
    const YAMLException2 = requireException();
    const makeSnippet = requireSnippet();
    const DEFAULT_SCHEMA2 = require_default();
    const _hasOwnProperty = Object.prototype.hasOwnProperty;
    const CONTEXT_FLOW_IN = 1;
    const CONTEXT_FLOW_OUT = 2;
    const CONTEXT_BLOCK_IN = 3;
    const CONTEXT_BLOCK_OUT = 4;
    const CHOMPING_CLIP = 1;
    const CHOMPING_STRIP = 2;
    const CHOMPING_KEEP = 3;
    const PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    const PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    const PATTERN_FLOW_INDICATORS = /[,\[\]{}]/;
    const PATTERN_TAG_HANDLE = /^(?:!|!!|![0-9A-Za-z-]+!)$/;
    const PATTERN_TAG_URI = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
    function _class(obj) {
        return Object.prototype.toString.call(obj);
    }
    function isEol(c) {
        return c === 10 || c === 13;
    }
    function isWhiteSpace2(c) {
        return c === 9 || c === 32;
    }
    function isWsOrEol(c) {
        return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function isFlowIndicator(c) {
        return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
        if (c >= 48 && c <= 57) {
            return c - 48;
        }
        const lc = c | 32;
        if (lc >= 97 && lc <= 102) {
            return lc - 97 + 10;
        }
        return -1;
    }
    function escapedHexLen(c) {
        if (c === 120) {
            return 2;
        }
        if (c === 117) {
            return 4;
        }
        if (c === 85) {
            return 8;
        }
        return 0;
    }
    function fromDecimalCode(c) {
        if (c >= 48 && c <= 57) {
            return c - 48;
        }
        return -1;
    }
    function simpleEscapeSequence(c) {
        switch(c){
            case 48:
                return "\0";
            case 97:
                return "\x07";
            case 98:
                return "\b";
            case 116:
                return "	";
            case 9:
                return "	";
            case 110:
                return "\n";
            case 118:
                return "\v";
            case 102:
                return "\f";
            case 114:
                return "\r";
            case 101:
                return "\x1B";
            case 32:
                return " ";
            case 34:
                return '"';
            case 47:
                return "/";
            case 92:
                return "\\";
            case 78:
                return "\x85";
            case 95:
                return "\xA0";
            case 76:
                return "\u2028";
            case 80:
                return "\u2029";
            default:
                return "";
        }
    }
    function charFromCodepoint(c) {
        if (c <= 65535) {
            return String.fromCharCode(c);
        }
        return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
    }
    function setProperty2(object4, key, value) {
        if (key === "__proto__") {
            Object.defineProperty(object4, key, {
                configurable: true,
                enumerable: true,
                writable: true,
                value
            });
        } else {
            object4[key] = value;
        }
    }
    const simpleEscapeCheck = new Array(256);
    const simpleEscapeMap = new Array(256);
    for(let i = 0; i < 256; i++){
        simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
        simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    function State(input, options2) {
        this.input = input;
        this.filename = options2["filename"] || null;
        this.schema = options2["schema"] || DEFAULT_SCHEMA2;
        this.onWarning = options2["onWarning"] || null;
        this.legacy = options2["legacy"] || false;
        this.json = options2["json"] || false;
        this.listener = options2["listener"] || null;
        this.maxDepth = typeof options2["maxDepth"] === "number" ? options2["maxDepth"] : 100;
        this.maxTotalMergeKeys = typeof options2["maxTotalMergeKeys"] === "number" ? options2["maxTotalMergeKeys"] : 1e4;
        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;
        this.length = input.length;
        this.position = 0;
        this.line = 0;
        this.lineStart = 0;
        this.lineIndent = 0;
        this.depth = 0;
        this.totalMergeKeys = 0;
        this.firstTabInLine = -1;
        this.documents = [];
        this.anchorMapTransactions = [];
    }
    function generateError(state, message) {
        const mark = {
            name: state.filename,
            buffer: state.input.slice(0, -1),
            position: state.position,
            line: state.line,
            column: state.position - state.lineStart
        };
        mark.snippet = makeSnippet(mark);
        return new YAMLException2(message, mark);
    }
    function throwError2(state, message) {
        throw generateError(state, message);
    }
    function throwWarning(state, message) {
        if (state.onWarning) {
            state.onWarning.call(null, generateError(state, message));
        }
    }
    function storeAnchor(state, name17, value) {
        const transactions = state.anchorMapTransactions;
        if (transactions.length !== 0) {
            const transaction = transactions[transactions.length - 1];
            if (!_hasOwnProperty.call(transaction, name17)) {
                transaction[name17] = {
                    existed: _hasOwnProperty.call(state.anchorMap, name17),
                    value: state.anchorMap[name17]
                };
            }
        }
        state.anchorMap[name17] = value;
    }
    function beginAnchorTransaction(state) {
        state.anchorMapTransactions.push(Object.create(null));
    }
    function commitAnchorTransaction(state) {
        const transaction = state.anchorMapTransactions.pop();
        const transactions = state.anchorMapTransactions;
        if (transactions.length === 0) return;
        const parent = transactions[transactions.length - 1];
        const names3 = Object.keys(transaction);
        for(let index = 0, length = names3.length; index < length; index += 1){
            const name17 = names3[index];
            if (!_hasOwnProperty.call(parent, name17)) {
                parent[name17] = transaction[name17];
            }
        }
    }
    function rollbackAnchorTransaction(state) {
        const transaction = state.anchorMapTransactions.pop();
        const names3 = Object.keys(transaction);
        for(let index = names3.length - 1; index >= 0; index -= 1){
            const entry = transaction[names3[index]];
            if (entry.existed) {
                state.anchorMap[names3[index]] = entry.value;
            } else {
                delete state.anchorMap[names3[index]];
            }
        }
    }
    function snapshotState(state) {
        return {
            position: state.position,
            line: state.line,
            lineStart: state.lineStart,
            lineIndent: state.lineIndent,
            firstTabInLine: state.firstTabInLine,
            tag: state.tag,
            anchor: state.anchor,
            kind: state.kind,
            result: state.result
        };
    }
    function restoreState(state, snapshot) {
        state.position = snapshot.position;
        state.line = snapshot.line;
        state.lineStart = snapshot.lineStart;
        state.lineIndent = snapshot.lineIndent;
        state.firstTabInLine = snapshot.firstTabInLine;
        state.tag = snapshot.tag;
        state.anchor = snapshot.anchor;
        state.kind = snapshot.kind;
        state.result = snapshot.result;
    }
    const directiveHandlers = {
        YAML: function handleYamlDirective(state, name17, args) {
            if (state.version !== null) {
                throwError2(state, "duplication of %YAML directive");
            }
            if (args.length !== 1) {
                throwError2(state, "YAML directive accepts exactly one argument");
            }
            const match2 = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
            if (match2 === null) {
                throwError2(state, "ill-formed argument of the YAML directive");
            }
            const major3 = parseInt(match2[1], 10);
            const minor = parseInt(match2[2], 10);
            if (major3 !== 1) {
                throwError2(state, "unacceptable YAML version of the document");
            }
            state.version = args[0];
            state.checkLineBreaks = minor < 2;
            if (minor !== 1 && minor !== 2) {
                throwWarning(state, "unsupported YAML version of the document");
            }
        },
        TAG: function handleTagDirective(state, name17, args) {
            let prefix;
            if (args.length !== 2) {
                throwError2(state, "TAG directive accepts exactly two arguments");
            }
            const handle = args[0];
            prefix = args[1];
            if (!PATTERN_TAG_HANDLE.test(handle)) {
                throwError2(state, "ill-formed tag handle (first argument) of the TAG directive");
            }
            if (_hasOwnProperty.call(state.tagMap, handle)) {
                throwError2(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
            }
            if (!PATTERN_TAG_URI.test(prefix)) {
                throwError2(state, "ill-formed tag prefix (second argument) of the TAG directive");
            }
            try {
                prefix = decodeURIComponent(prefix);
            } catch (err) {
                throwError2(state, "tag prefix is malformed: " + prefix);
            }
            state.tagMap[handle] = prefix;
        }
    };
    function captureSegment(state, start, end, checkJson) {
        if (start < end) {
            const _result = state.input.slice(start, end);
            if (checkJson) {
                for(let _position = 0, _length2 = _result.length; _position < _length2; _position += 1){
                    const _character = _result.charCodeAt(_position);
                    if (!(_character === 9 || _character >= 32 && _character <= 1114111)) {
                        throwError2(state, "expected valid JSON character");
                    }
                }
            } else if (PATTERN_NON_PRINTABLE.test(_result)) {
                throwError2(state, "the stream contains non-printable characters");
            }
            state.result += _result;
        }
    }
    function mergeMappings(state, destination, source, overridableKeys) {
        if (!common2.isObject(source)) {
            throwError2(state, "cannot merge mappings; the provided source object is unacceptable");
        }
        const sourceKeys = Object.keys(source);
        for(let index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
            const key = sourceKeys[index];
            if (state.maxTotalMergeKeys !== -1 && ++state.totalMergeKeys > state.maxTotalMergeKeys) {
                throwError2(state, "merge keys exceeded maxTotalMergeKeys (" + state.maxTotalMergeKeys + ")");
            }
            if (!_hasOwnProperty.call(destination, key)) {
                setProperty2(destination, key, source[key]);
                overridableKeys[key] = true;
            }
        }
    }
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
        if (Array.isArray(keyNode)) {
            keyNode = Array.prototype.slice.call(keyNode);
            for(let index = 0, quantity = keyNode.length; index < quantity; index += 1){
                if (Array.isArray(keyNode[index])) {
                    throwError2(state, "nested arrays are not supported inside keys");
                }
                if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
                    keyNode[index] = "[object Object]";
                }
            }
        }
        if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
            keyNode = "[object Object]";
        }
        keyNode = String(keyNode);
        if (_result === null) {
            _result = {};
        }
        if (keyTag === "tag:yaml.org,2002:merge") {
            if (Array.isArray(valueNode)) {
                for(let index = 0, quantity = valueNode.length; index < quantity; index += 1){
                    mergeMappings(state, _result, valueNode[index], overridableKeys);
                }
            } else {
                mergeMappings(state, _result, valueNode, overridableKeys);
            }
        } else {
            if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
                state.line = startLine || state.line;
                state.lineStart = startLineStart || state.lineStart;
                state.position = startPos || state.position;
                throwError2(state, "duplicated mapping key");
            }
            setProperty2(_result, keyNode, valueNode);
            delete overridableKeys[keyNode];
        }
        return _result;
    }
    function readLineBreak(state) {
        const ch = state.input.charCodeAt(state.position);
        if (ch === 10) {
            state.position++;
        } else if (ch === 13) {
            state.position++;
            if (state.input.charCodeAt(state.position) === 10) {
                state.position++;
            }
        } else {
            throwError2(state, "a line break is expected");
        }
        state.line += 1;
        state.lineStart = state.position;
        state.firstTabInLine = -1;
    }
    function skipSeparationSpace(state, allowComments, checkIndent) {
        let lineBreaks = 0;
        let ch = state.input.charCodeAt(state.position);
        while(ch !== 0){
            while(isWhiteSpace2(ch)){
                if (ch === 9 && state.firstTabInLine === -1) {
                    state.firstTabInLine = state.position;
                }
                ch = state.input.charCodeAt(++state.position);
            }
            if (allowComments && ch === 35) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                }while (ch !== 10 && ch !== 13 && ch !== 0)
            }
            if (isEol(ch)) {
                readLineBreak(state);
                ch = state.input.charCodeAt(state.position);
                lineBreaks++;
                state.lineIndent = 0;
                while(ch === 32){
                    state.lineIndent++;
                    ch = state.input.charCodeAt(++state.position);
                }
            } else {
                break;
            }
        }
        if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
            throwWarning(state, "deficient indentation");
        }
        return lineBreaks;
    }
    function testDocumentSeparator(state) {
        let _position = state.position;
        let ch = state.input.charCodeAt(_position);
        if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
            _position += 3;
            ch = state.input.charCodeAt(_position);
            if (ch === 0 || isWsOrEol(ch)) {
                return true;
            }
        }
        return false;
    }
    function writeFoldedLines(state, count2) {
        if (count2 === 1) {
            state.result += " ";
        } else if (count2 > 1) {
            state.result += common2.repeat("\n", count2 - 1);
        }
    }
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
        let captureStart;
        let captureEnd;
        let hasPendingContent;
        let _line;
        let _lineStart;
        let _lineIndent;
        const _kind = state.kind;
        const _result = state.result;
        let ch = state.input.charCodeAt(state.position);
        if (isWsOrEol(ch) || isFlowIndicator(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
            return false;
        }
        if (ch === 63 || ch === 45) {
            const following = state.input.charCodeAt(state.position + 1);
            if (isWsOrEol(following) || withinFlowCollection && isFlowIndicator(following)) {
                return false;
            }
        }
        state.kind = "scalar";
        state.result = "";
        captureStart = captureEnd = state.position;
        hasPendingContent = false;
        while(ch !== 0){
            if (ch === 58) {
                const following = state.input.charCodeAt(state.position + 1);
                if (isWsOrEol(following) || withinFlowCollection && isFlowIndicator(following)) {
                    break;
                }
            } else if (ch === 35) {
                const preceding = state.input.charCodeAt(state.position - 1);
                if (isWsOrEol(preceding)) {
                    break;
                }
            } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && isFlowIndicator(ch)) {
                break;
            } else if (isEol(ch)) {
                _line = state.line;
                _lineStart = state.lineStart;
                _lineIndent = state.lineIndent;
                skipSeparationSpace(state, false, -1);
                if (state.lineIndent >= nodeIndent) {
                    hasPendingContent = true;
                    ch = state.input.charCodeAt(state.position);
                    continue;
                } else {
                    state.position = captureEnd;
                    state.line = _line;
                    state.lineStart = _lineStart;
                    state.lineIndent = _lineIndent;
                    break;
                }
            }
            if (hasPendingContent) {
                captureSegment(state, captureStart, captureEnd, false);
                writeFoldedLines(state, state.line - _line);
                captureStart = captureEnd = state.position;
                hasPendingContent = false;
            }
            if (!isWhiteSpace2(ch)) {
                captureEnd = state.position + 1;
            }
            ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, captureEnd, false);
        if (state.result) {
            return true;
        }
        state.kind = _kind;
        state.result = _result;
        return false;
    }
    function readSingleQuotedScalar(state, nodeIndent) {
        let captureStart;
        let captureEnd;
        let ch = state.input.charCodeAt(state.position);
        if (ch !== 39) {
            return false;
        }
        state.kind = "scalar";
        state.result = "";
        state.position++;
        captureStart = captureEnd = state.position;
        while((ch = state.input.charCodeAt(state.position)) !== 0){
            if (ch === 39) {
                captureSegment(state, captureStart, state.position, true);
                ch = state.input.charCodeAt(++state.position);
                if (ch === 39) {
                    captureStart = state.position;
                    state.position++;
                    captureEnd = state.position;
                } else {
                    return true;
                }
            } else if (isEol(ch)) {
                captureSegment(state, captureStart, captureEnd, true);
                writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
                captureStart = captureEnd = state.position;
            } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
                throwError2(state, "unexpected end of the document within a single quoted scalar");
            } else {
                state.position++;
                if (!isWhiteSpace2(ch)) {
                    captureEnd = state.position;
                }
            }
        }
        throwError2(state, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state, nodeIndent) {
        let captureStart;
        let captureEnd;
        let tmp;
        let ch = state.input.charCodeAt(state.position);
        if (ch !== 34) {
            return false;
        }
        state.kind = "scalar";
        state.result = "";
        state.position++;
        captureStart = captureEnd = state.position;
        while((ch = state.input.charCodeAt(state.position)) !== 0){
            if (ch === 34) {
                captureSegment(state, captureStart, state.position, true);
                state.position++;
                return true;
            } else if (ch === 92) {
                captureSegment(state, captureStart, state.position, true);
                ch = state.input.charCodeAt(++state.position);
                if (isEol(ch)) {
                    skipSeparationSpace(state, false, nodeIndent);
                } else if (ch < 256 && simpleEscapeCheck[ch]) {
                    state.result += simpleEscapeMap[ch];
                    state.position++;
                } else if ((tmp = escapedHexLen(ch)) > 0) {
                    let hexLength = tmp;
                    let hexResult = 0;
                    for(; hexLength > 0; hexLength--){
                        ch = state.input.charCodeAt(++state.position);
                        if ((tmp = fromHexCode(ch)) >= 0) {
                            hexResult = (hexResult << 4) + tmp;
                        } else {
                            throwError2(state, "expected hexadecimal character");
                        }
                    }
                    state.result += charFromCodepoint(hexResult);
                    state.position++;
                } else {
                    throwError2(state, "unknown escape sequence");
                }
                captureStart = captureEnd = state.position;
            } else if (isEol(ch)) {
                captureSegment(state, captureStart, captureEnd, true);
                writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
                captureStart = captureEnd = state.position;
            } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
                throwError2(state, "unexpected end of the document within a double quoted scalar");
            } else {
                state.position++;
                if (!isWhiteSpace2(ch)) {
                    captureEnd = state.position;
                }
            }
        }
        throwError2(state, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state, nodeIndent) {
        let readNext = true;
        let _line;
        let _lineStart;
        let _pos;
        const _tag = state.tag;
        let _result;
        const _anchor = state.anchor;
        let terminator;
        let isPair;
        let isExplicitPair;
        let isMapping;
        const overridableKeys = Object.create(null);
        let keyNode;
        let keyTag;
        let valueNode;
        let ch = state.input.charCodeAt(state.position);
        if (ch === 91) {
            terminator = 93;
            isMapping = false;
            _result = [];
        } else if (ch === 123) {
            terminator = 125;
            isMapping = true;
            _result = {};
        } else {
            return false;
        }
        if (state.anchor !== null) {
            storeAnchor(state, state.anchor, _result);
        }
        ch = state.input.charCodeAt(++state.position);
        while(ch !== 0){
            skipSeparationSpace(state, true, nodeIndent);
            ch = state.input.charCodeAt(state.position);
            if (ch === terminator) {
                state.position++;
                state.tag = _tag;
                state.anchor = _anchor;
                state.kind = isMapping ? "mapping" : "sequence";
                state.result = _result;
                return true;
            } else if (!readNext) {
                throwError2(state, "missed comma between flow collection entries");
            } else if (ch === 44) {
                throwError2(state, "expected the node content, but found ','");
            }
            keyTag = keyNode = valueNode = null;
            isPair = isExplicitPair = false;
            if (ch === 63) {
                const following = state.input.charCodeAt(state.position + 1);
                if (isWsOrEol(following)) {
                    isPair = isExplicitPair = true;
                    state.position++;
                    skipSeparationSpace(state, true, nodeIndent);
                }
            }
            _line = state.line;
            _lineStart = state.lineStart;
            _pos = state.position;
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            keyTag = state.tag;
            keyNode = state.result;
            skipSeparationSpace(state, true, nodeIndent);
            ch = state.input.charCodeAt(state.position);
            if ((isExplicitPair || state.line === _line) && ch === 58) {
                isPair = true;
                ch = state.input.charCodeAt(++state.position);
                skipSeparationSpace(state, true, nodeIndent);
                composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
                valueNode = state.result;
            }
            if (isMapping) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
            } else if (isPair) {
                _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
            } else {
                _result.push(keyNode);
            }
            skipSeparationSpace(state, true, nodeIndent);
            ch = state.input.charCodeAt(state.position);
            if (ch === 44) {
                readNext = true;
                ch = state.input.charCodeAt(++state.position);
            } else {
                readNext = false;
            }
        }
        throwError2(state, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state, nodeIndent) {
        let folding;
        let chomping = CHOMPING_CLIP;
        let didReadContent = false;
        let detectedIndent = false;
        let textIndent = nodeIndent;
        let emptyLines = 0;
        let atMoreIndented = false;
        let tmp;
        let ch = state.input.charCodeAt(state.position);
        if (ch === 124) {
            folding = false;
        } else if (ch === 62) {
            folding = true;
        } else {
            return false;
        }
        state.kind = "scalar";
        state.result = "";
        while(ch !== 0){
            ch = state.input.charCodeAt(++state.position);
            if (ch === 43 || ch === 45) {
                if (CHOMPING_CLIP === chomping) {
                    chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
                } else {
                    throwError2(state, "repeat of a chomping mode identifier");
                }
            } else if ((tmp = fromDecimalCode(ch)) >= 0) {
                if (tmp === 0) {
                    throwError2(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
                } else if (!detectedIndent) {
                    textIndent = nodeIndent + tmp - 1;
                    detectedIndent = true;
                } else {
                    throwError2(state, "repeat of an indentation width identifier");
                }
            } else {
                break;
            }
        }
        if (isWhiteSpace2(ch)) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (isWhiteSpace2(ch))
            if (ch === 35) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                }while (!isEol(ch) && ch !== 0)
            }
        }
        while(ch !== 0){
            readLineBreak(state);
            state.lineIndent = 0;
            ch = state.input.charCodeAt(state.position);
            while((!detectedIndent || state.lineIndent < textIndent) && ch === 32){
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
            if (!detectedIndent && state.lineIndent > textIndent) {
                textIndent = state.lineIndent;
            }
            if (isEol(ch)) {
                emptyLines++;
                continue;
            }
            if (!detectedIndent && textIndent === 0) {
                throwError2(state, "missing indentation for block scalar");
            }
            if (state.lineIndent < textIndent) {
                if (chomping === CHOMPING_KEEP) {
                    state.result += common2.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
                } else if (chomping === CHOMPING_CLIP) {
                    if (didReadContent) {
                        state.result += "\n";
                    }
                }
                break;
            }
            if (folding) {
                if (isWhiteSpace2(ch)) {
                    atMoreIndented = true;
                    state.result += common2.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
                } else if (atMoreIndented) {
                    atMoreIndented = false;
                    state.result += common2.repeat("\n", emptyLines + 1);
                } else if (emptyLines === 0) {
                    if (didReadContent) {
                        state.result += " ";
                    }
                } else {
                    state.result += common2.repeat("\n", emptyLines);
                }
            } else {
                state.result += common2.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            }
            didReadContent = true;
            detectedIndent = true;
            emptyLines = 0;
            const captureStart = state.position;
            while(!isEol(ch) && ch !== 0){
                ch = state.input.charCodeAt(++state.position);
            }
            captureSegment(state, captureStart, state.position, false);
        }
        return true;
    }
    function readBlockSequence(state, nodeIndent) {
        const _tag = state.tag;
        const _anchor = state.anchor;
        const _result = [];
        let detected = false;
        if (state.firstTabInLine !== -1) return false;
        if (state.anchor !== null) {
            storeAnchor(state, state.anchor, _result);
        }
        let ch = state.input.charCodeAt(state.position);
        while(ch !== 0){
            if (state.firstTabInLine !== -1) {
                state.position = state.firstTabInLine;
                throwError2(state, "tab characters must not be used in indentation");
            }
            if (ch !== 45) {
                break;
            }
            const following = state.input.charCodeAt(state.position + 1);
            if (!isWsOrEol(following)) {
                break;
            }
            detected = true;
            state.position++;
            if (skipSeparationSpace(state, true, -1)) {
                if (state.lineIndent <= nodeIndent) {
                    _result.push(null);
                    ch = state.input.charCodeAt(state.position);
                    continue;
                }
            }
            const _line = state.line;
            composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
            _result.push(state.result);
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
            if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
                throwError2(state, "bad indentation of a sequence entry");
            } else if (state.lineIndent < nodeIndent) {
                break;
            }
        }
        if (detected) {
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = "sequence";
            state.result = _result;
            return true;
        }
        return false;
    }
    function readBlockMapping(state, nodeIndent, flowIndent) {
        let allowCompact;
        let _keyLine;
        let _keyLineStart;
        let _keyPos;
        const _tag = state.tag;
        const _anchor = state.anchor;
        const _result = {};
        const overridableKeys = Object.create(null);
        let keyTag = null;
        let keyNode = null;
        let valueNode = null;
        let atExplicitKey = false;
        let detected = false;
        if (state.firstTabInLine !== -1) return false;
        if (state.anchor !== null) {
            storeAnchor(state, state.anchor, _result);
        }
        let ch = state.input.charCodeAt(state.position);
        while(ch !== 0){
            if (!atExplicitKey && state.firstTabInLine !== -1) {
                state.position = state.firstTabInLine;
                throwError2(state, "tab characters must not be used in indentation");
            }
            const following = state.input.charCodeAt(state.position + 1);
            const _line = state.line;
            if ((ch === 63 || ch === 58) && isWsOrEol(following)) {
                if (ch === 63) {
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = true;
                    allowCompact = true;
                } else if (atExplicitKey) {
                    atExplicitKey = false;
                    allowCompact = true;
                } else {
                    throwError2(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
                }
                state.position += 1;
                ch = following;
            } else {
                _keyLine = state.line;
                _keyLineStart = state.lineStart;
                _keyPos = state.position;
                if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
                    break;
                }
                if (state.line === _line) {
                    ch = state.input.charCodeAt(state.position);
                    while(isWhiteSpace2(ch)){
                        ch = state.input.charCodeAt(++state.position);
                    }
                    if (ch === 58) {
                        ch = state.input.charCodeAt(++state.position);
                        if (!isWsOrEol(ch)) {
                            throwError2(state, "a whitespace character is expected after the key-value separator within a block mapping");
                        }
                        if (atExplicitKey) {
                            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                            keyTag = keyNode = valueNode = null;
                        }
                        detected = true;
                        atExplicitKey = false;
                        allowCompact = false;
                        keyTag = state.tag;
                        keyNode = state.result;
                    } else if (detected) {
                        throwError2(state, "can not read an implicit mapping pair; a colon is missed");
                    } else {
                        state.tag = _tag;
                        state.anchor = _anchor;
                        return true;
                    }
                } else if (detected) {
                    throwError2(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
                } else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true;
                }
            }
            if (state.line === _line || state.lineIndent > nodeIndent) {
                if (atExplicitKey) {
                    _keyLine = state.line;
                    _keyLineStart = state.lineStart;
                    _keyPos = state.position;
                }
                if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                    if (atExplicitKey) {
                        keyNode = state.result;
                    } else {
                        valueNode = state.result;
                    }
                }
                if (!atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                    keyTag = keyNode = valueNode = null;
                }
                skipSeparationSpace(state, true, -1);
                ch = state.input.charCodeAt(state.position);
            }
            if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
                throwError2(state, "bad indentation of a mapping entry");
            } else if (state.lineIndent < nodeIndent) {
                break;
            }
        }
        if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
        }
        if (detected) {
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = "mapping";
            state.result = _result;
        }
        return detected;
    }
    function readTagProperty(state) {
        let isVerbatim = false;
        let isNamed = false;
        let tagHandle;
        let tagName;
        let ch = state.input.charCodeAt(state.position);
        if (ch !== 33) return false;
        if (state.tag !== null) {
            throwError2(state, "duplication of a tag property");
        }
        ch = state.input.charCodeAt(++state.position);
        if (ch === 60) {
            isVerbatim = true;
            ch = state.input.charCodeAt(++state.position);
        } else if (ch === 33) {
            isNamed = true;
            tagHandle = "!!";
            ch = state.input.charCodeAt(++state.position);
        } else {
            tagHandle = "!";
        }
        let _position = state.position;
        if (isVerbatim) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (ch !== 0 && ch !== 62)
            if (state.position < state.length) {
                tagName = state.input.slice(_position, state.position);
                ch = state.input.charCodeAt(++state.position);
            } else {
                throwError2(state, "unexpected end of the stream within a verbatim tag");
            }
        } else {
            while(ch !== 0 && !isWsOrEol(ch)){
                if (ch === 33) {
                    if (!isNamed) {
                        tagHandle = state.input.slice(_position - 1, state.position + 1);
                        if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                            throwError2(state, "named tag handle cannot contain such characters");
                        }
                        isNamed = true;
                        _position = state.position + 1;
                    } else {
                        throwError2(state, "tag suffix cannot contain exclamation marks");
                    }
                }
                ch = state.input.charCodeAt(++state.position);
            }
            tagName = state.input.slice(_position, state.position);
            if (PATTERN_FLOW_INDICATORS.test(tagName)) {
                throwError2(state, "tag suffix cannot contain flow indicator characters");
            }
        }
        if (tagName && !PATTERN_TAG_URI.test(tagName)) {
            throwError2(state, "tag name cannot contain such characters: " + tagName);
        }
        try {
            tagName = decodeURIComponent(tagName);
        } catch (err) {
            throwError2(state, "tag name is malformed: " + tagName);
        }
        if (isVerbatim) {
            state.tag = tagName;
        } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
            state.tag = state.tagMap[tagHandle] + tagName;
        } else if (tagHandle === "!") {
            state.tag = "!" + tagName;
        } else if (tagHandle === "!!") {
            state.tag = "tag:yaml.org,2002:" + tagName;
        } else {
            throwError2(state, 'undeclared tag handle "' + tagHandle + '"');
        }
        return true;
    }
    function readAnchorProperty(state) {
        let ch = state.input.charCodeAt(state.position);
        if (ch !== 38) return false;
        if (state.anchor !== null) {
            throwError2(state, "duplication of an anchor property");
        }
        ch = state.input.charCodeAt(++state.position);
        const _position = state.position;
        while(ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        if (state.position === _position) {
            throwError2(state, "name of an anchor node must contain at least one character");
        }
        state.anchor = state.input.slice(_position, state.position);
        return true;
    }
    function readAlias(state) {
        let ch = state.input.charCodeAt(state.position);
        if (ch !== 42) return false;
        ch = state.input.charCodeAt(++state.position);
        const _position = state.position;
        while(ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        if (state.position === _position) {
            throwError2(state, "name of an alias node must contain at least one character");
        }
        const alias = state.input.slice(_position, state.position);
        if (!_hasOwnProperty.call(state.anchorMap, alias)) {
            throwError2(state, 'unidentified alias "' + alias + '"');
        }
        state.result = state.anchorMap[alias];
        skipSeparationSpace(state, true, -1);
        return true;
    }
    function tryReadBlockMappingFromProperty(state, propertyStart, nodeIndent, flowIndent) {
        const fallbackState = snapshotState(state);
        beginAnchorTransaction(state);
        restoreState(state, propertyStart);
        state.tag = null;
        state.anchor = null;
        state.kind = null;
        state.result = null;
        if (readBlockMapping(state, nodeIndent, flowIndent) && state.kind === "mapping") {
            commitAnchorTransaction(state);
            return true;
        }
        rollbackAnchorTransaction(state);
        restoreState(state, fallbackState);
        return false;
    }
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
        let allowBlockScalars;
        let allowBlockCollections;
        let indentStatus = 1;
        let atNewLine = false;
        let hasContent = false;
        let propertyStart = null;
        let type2;
        let flowIndent;
        let blockIndent;
        if (state.depth >= state.maxDepth) {
            throwError2(state, "nesting exceeded maxDepth (" + state.maxDepth + ")");
        }
        state.depth += 1;
        if (state.listener !== null) {
            state.listener("open", state);
        }
        state.tag = null;
        state.anchor = null;
        state.kind = null;
        state.result = null;
        const allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
        if (allowToSeek) {
            if (skipSeparationSpace(state, true, -1)) {
                atNewLine = true;
                if (state.lineIndent > parentIndent) {
                    indentStatus = 1;
                } else if (state.lineIndent === parentIndent) {
                    indentStatus = 0;
                } else if (state.lineIndent < parentIndent) {
                    indentStatus = -1;
                }
            }
        }
        if (indentStatus === 1) {
            while(true){
                const ch = state.input.charCodeAt(state.position);
                const propertyState = snapshotState(state);
                if (atNewLine && (ch === 33 && state.tag !== null || ch === 38 && state.anchor !== null)) {
                    break;
                }
                if (!readTagProperty(state) && !readAnchorProperty(state)) {
                    break;
                }
                if (propertyStart === null) {
                    propertyStart = propertyState;
                }
                if (skipSeparationSpace(state, true, -1)) {
                    atNewLine = true;
                    allowBlockCollections = allowBlockStyles;
                    if (state.lineIndent > parentIndent) {
                        indentStatus = 1;
                    } else if (state.lineIndent === parentIndent) {
                        indentStatus = 0;
                    } else if (state.lineIndent < parentIndent) {
                        indentStatus = -1;
                    }
                } else {
                    allowBlockCollections = false;
                }
            }
        }
        if (allowBlockCollections) {
            allowBlockCollections = atNewLine || allowCompact;
        }
        if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
            if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
                flowIndent = parentIndent;
            } else {
                flowIndent = parentIndent + 1;
            }
            blockIndent = state.position - state.lineStart;
            if (indentStatus === 1) {
                if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                    hasContent = true;
                } else {
                    const ch = state.input.charCodeAt(state.position);
                    if (propertyStart !== null && allowBlockStyles && !allowBlockCollections && ch !== 124 && ch !== 62 && tryReadBlockMappingFromProperty(state, propertyStart, propertyStart.position - propertyStart.lineStart, flowIndent)) {
                        hasContent = true;
                    } else if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                        hasContent = true;
                    } else if (readAlias(state)) {
                        hasContent = true;
                        if (state.tag !== null || state.anchor !== null) {
                            throwError2(state, "alias node should not have any properties");
                        }
                    } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                        hasContent = true;
                        if (state.tag === null) {
                            state.tag = "?";
                        }
                    }
                    if (state.anchor !== null) {
                        storeAnchor(state, state.anchor, state.result);
                    }
                }
            } else if (indentStatus === 0) {
                hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
            }
        }
        if (state.tag === null) {
            if (state.anchor !== null) {
                storeAnchor(state, state.anchor, state.result);
            }
        } else if (state.tag === "?") {
            if (state.result !== null && state.kind !== "scalar") {
                throwError2(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
            }
            for(let typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
                type2 = state.implicitTypes[typeIndex];
                if (type2.resolve(state.result)) {
                    state.result = type2.construct(state.result);
                    state.tag = type2.tag;
                    if (state.anchor !== null) {
                        storeAnchor(state, state.anchor, state.result);
                    }
                    break;
                }
            }
        } else if (state.tag !== "!") {
            if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
                type2 = state.typeMap[state.kind || "fallback"][state.tag];
            } else {
                type2 = null;
                const typeList = state.typeMap.multi[state.kind || "fallback"];
                for(let typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1){
                    if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                        type2 = typeList[typeIndex];
                        break;
                    }
                }
            }
            if (!type2) {
                throwError2(state, "unknown tag !<" + state.tag + ">");
            }
            if (state.result !== null && type2.kind !== state.kind) {
                throwError2(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
            }
            if (!type2.resolve(state.result, state.tag)) {
                throwError2(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
            } else {
                state.result = type2.construct(state.result, state.tag);
                if (state.anchor !== null) {
                    storeAnchor(state, state.anchor, state.result);
                }
            }
        }
        if (state.listener !== null) {
            state.listener("close", state);
        }
        state.depth -= 1;
        return state.tag !== null || state.anchor !== null || hasContent;
    }
    function readDocument(state) {
        const documentStart = state.position;
        let hasDirectives = false;
        let ch;
        state.version = null;
        state.checkLineBreaks = state.legacy;
        state.tagMap = Object.create(null);
        state.anchorMap = Object.create(null);
        while((ch = state.input.charCodeAt(state.position)) !== 0){
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
            if (state.lineIndent > 0 || ch !== 37) {
                break;
            }
            hasDirectives = true;
            ch = state.input.charCodeAt(++state.position);
            let _position = state.position;
            while(ch !== 0 && !isWsOrEol(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            const directiveName = state.input.slice(_position, state.position);
            const directiveArgs = [];
            if (directiveName.length < 1) {
                throwError2(state, "directive name must not be less than one character in length");
            }
            while(ch !== 0){
                while(isWhiteSpace2(ch)){
                    ch = state.input.charCodeAt(++state.position);
                }
                if (ch === 35) {
                    do {
                        ch = state.input.charCodeAt(++state.position);
                    }while (ch !== 0 && !isEol(ch))
                    break;
                }
                if (isEol(ch)) break;
                _position = state.position;
                while(ch !== 0 && !isWsOrEol(ch)){
                    ch = state.input.charCodeAt(++state.position);
                }
                directiveArgs.push(state.input.slice(_position, state.position));
            }
            if (ch !== 0) readLineBreak(state);
            if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
                directiveHandlers[directiveName](state, directiveName, directiveArgs);
            } else {
                throwWarning(state, 'unknown document directive "' + directiveName + '"');
            }
        }
        skipSeparationSpace(state, true, -1);
        if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        } else if (hasDirectives) {
            throwError2(state, "directives end mark is expected");
        }
        composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
        skipSeparationSpace(state, true, -1);
        if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
            throwWarning(state, "non-ASCII line breaks are interpreted as content");
        }
        state.documents.push(state.result);
        if (state.position === state.lineStart && testDocumentSeparator(state)) {
            if (state.input.charCodeAt(state.position) === 46) {
                state.position += 3;
                skipSeparationSpace(state, true, -1);
            }
            return;
        }
        if (state.position < state.length - 1) {
            throwError2(state, "end of the stream or a document separator is expected");
        }
    }
    function loadDocuments(input, options2) {
        input = String(input);
        options2 = options2 || {};
        if (input.length !== 0) {
            if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
                input += "\n";
            }
            if (input.charCodeAt(0) === 65279) {
                input = input.slice(1);
            }
        }
        const state = new State(input, options2);
        const nullpos = input.indexOf("\0");
        if (nullpos !== -1) {
            state.position = nullpos;
            throwError2(state, "null byte is not allowed in input");
        }
        state.input += "\0";
        while(state.input.charCodeAt(state.position) === 32){
            state.lineIndent += 1;
            state.position += 1;
        }
        while(state.position < state.length - 1){
            readDocument(state);
        }
        return state.documents;
    }
    function loadAll2(input, iterator, options2) {
        if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
            options2 = iterator;
            iterator = null;
        }
        const documents = loadDocuments(input, options2);
        if (typeof iterator !== "function") {
            return documents;
        }
        for(let index = 0, length = documents.length; index < length; index += 1){
            iterator(documents[index]);
        }
    }
    function load2(input, options2) {
        const documents = loadDocuments(input, options2);
        if (documents.length === 0) {
            return void 0;
        } else if (documents.length === 1) {
            return documents[0];
        }
        throw new YAMLException2("expected a single document in the stream, but found more");
    }
    loader.loadAll = loadAll2;
    loader.load = load2;
    return loader;
}
function requireDumper() {
    if (hasRequiredDumper) return dumper;
    hasRequiredDumper = 1;
    const common2 = requireCommon();
    const YAMLException2 = requireException();
    const DEFAULT_SCHEMA2 = require_default();
    const _toString = Object.prototype.toString;
    const _hasOwnProperty = Object.prototype.hasOwnProperty;
    const CHAR_BOM = 65279;
    const CHAR_TAB = 9;
    const CHAR_LINE_FEED = 10;
    const CHAR_CARRIAGE_RETURN = 13;
    const CHAR_SPACE = 32;
    const CHAR_EXCLAMATION = 33;
    const CHAR_DOUBLE_QUOTE = 34;
    const CHAR_SHARP = 35;
    const CHAR_PERCENT = 37;
    const CHAR_AMPERSAND = 38;
    const CHAR_SINGLE_QUOTE = 39;
    const CHAR_ASTERISK = 42;
    const CHAR_COMMA = 44;
    const CHAR_MINUS = 45;
    const CHAR_COLON = 58;
    const CHAR_EQUALS = 61;
    const CHAR_GREATER_THAN = 62;
    const CHAR_QUESTION = 63;
    const CHAR_COMMERCIAL_AT = 64;
    const CHAR_LEFT_SQUARE_BRACKET = 91;
    const CHAR_RIGHT_SQUARE_BRACKET = 93;
    const CHAR_GRAVE_ACCENT = 96;
    const CHAR_LEFT_CURLY_BRACKET = 123;
    const CHAR_VERTICAL_LINE = 124;
    const CHAR_RIGHT_CURLY_BRACKET = 125;
    const ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    const DEPRECATED_BOOLEANS_SYNTAX = [
        "y",
        "Y",
        "yes",
        "Yes",
        "YES",
        "on",
        "On",
        "ON",
        "n",
        "N",
        "no",
        "No",
        "NO",
        "off",
        "Off",
        "OFF"
    ];
    const DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    function compileStyleMap(schema2, map22) {
        if (map22 === null) return {};
        const result = {};
        const keys = Object.keys(map22);
        for(let index = 0, length = keys.length; index < length; index += 1){
            let tag = keys[index];
            let style = String(map22[tag]);
            if (tag.slice(0, 2) === "!!") {
                tag = "tag:yaml.org,2002:" + tag.slice(2);
            }
            const type2 = schema2.compiledTypeMap["fallback"][tag];
            if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
                style = type2.styleAliases[style];
            }
            result[tag] = style;
        }
        return result;
    }
    function encodeHex(character) {
        let handle;
        let length;
        const string5 = character.toString(16).toUpperCase();
        if (character <= 255) {
            handle = "x";
            length = 2;
        } else if (character <= 65535) {
            handle = "u";
            length = 4;
        } else if (character <= 4294967295) {
            handle = "U";
            length = 8;
        } else {
            throw new YAMLException2("code point within a string may not be greater than 0xFFFFFFFF");
        }
        return "\\" + handle + common2.repeat("0", length - string5.length) + string5;
    }
    const QUOTING_TYPE_SINGLE = 1;
    const QUOTING_TYPE_DOUBLE = 2;
    function State(options2) {
        this.schema = options2["schema"] || DEFAULT_SCHEMA2;
        this.indent = Math.max(1, options2["indent"] || 2);
        this.noArrayIndent = options2["noArrayIndent"] || false;
        this.skipInvalid = options2["skipInvalid"] || false;
        this.flowLevel = common2.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
        this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
        this.sortKeys = options2["sortKeys"] || false;
        this.lineWidth = options2["lineWidth"] || 80;
        this.noRefs = options2["noRefs"] || false;
        this.noCompatMode = options2["noCompatMode"] || false;
        this.condenseFlow = options2["condenseFlow"] || false;
        this.quotingType = options2["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
        this.forceQuotes = options2["forceQuotes"] || false;
        this.replacer = typeof options2["replacer"] === "function" ? options2["replacer"] : null;
        this.implicitTypes = this.schema.compiledImplicit;
        this.explicitTypes = this.schema.compiledExplicit;
        this.tag = null;
        this.result = "";
        this.duplicates = [];
        this.usedDuplicates = null;
    }
    function indentString(string5, spaces) {
        const ind = common2.repeat(" ", spaces);
        let position = 0;
        let result = "";
        const length = string5.length;
        while(position < length){
            let line;
            const next = string5.indexOf("\n", position);
            if (next === -1) {
                line = string5.slice(position);
                position = length;
            } else {
                line = string5.slice(position, next + 1);
                position = next + 1;
            }
            if (line.length && line !== "\n") result += ind;
            result += line;
        }
        return result;
    }
    function generateNextLine(state, level) {
        return "\n" + common2.repeat(" ", state.indent * level);
    }
    function testImplicitResolving(state, str22) {
        for(let index = 0, length = state.implicitTypes.length; index < length; index += 1){
            const type2 = state.implicitTypes[index];
            if (type2.resolve(str22)) {
                return true;
            }
        }
        return false;
    }
    function isWhitespace2(c) {
        return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
        return c >= 32 && c <= 126 || c >= 161 && c <= 55295 && c !== 8232 && c !== 8233 || c >= 57344 && c <= 65533 && c !== CHAR_BOM || c >= 65536 && c <= 1114111;
    }
    function isNsCharOrWhitespace(c) {
        return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev, inblock) {
        const cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
        const cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace2(c);
        return ((inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace2(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar);
    }
    function isPlainSafeFirst(c) {
        return isPrintable(c) && c !== CHAR_BOM && !isWhitespace2(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function isPlainSafeLast(c) {
        return !isWhitespace2(c) && c !== CHAR_COLON;
    }
    function codePointAt(string5, pos) {
        const first = string5.charCodeAt(pos);
        let second;
        if (first >= 55296 && first <= 56319 && pos + 1 < string5.length) {
            second = string5.charCodeAt(pos + 1);
            if (second >= 56320 && second <= 57343) {
                return (first - 55296) * 1024 + second - 56320 + 65536;
            }
        }
        return first;
    }
    function needIndentIndicator(string5) {
        const leadingSpaceRe = /^\n* /;
        return leadingSpaceRe.test(string5);
    }
    const STYLE_PLAIN = 1;
    const STYLE_SINGLE = 2;
    const STYLE_LITERAL = 3;
    const STYLE_FOLDED = 4;
    const STYLE_DOUBLE = 5;
    function chooseScalarStyle(string5, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
        let i;
        let char = 0;
        let prevChar = null;
        let hasLineBreak = false;
        let hasFoldableLine = false;
        const shouldTrackWidth = lineWidth !== -1;
        let previousLineBreak = -1;
        let plain = isPlainSafeFirst(codePointAt(string5, 0)) && isPlainSafeLast(codePointAt(string5, string5.length - 1));
        if (singleLineOnly || forceQuotes) {
            for(i = 0; i < string5.length; char >= 65536 ? i += 2 : i++){
                char = codePointAt(string5, i);
                if (!isPrintable(char)) {
                    return STYLE_DOUBLE;
                }
                plain = plain && isPlainSafe(char, prevChar, inblock);
                prevChar = char;
            }
        } else {
            for(i = 0; i < string5.length; char >= 65536 ? i += 2 : i++){
                char = codePointAt(string5, i);
                if (char === CHAR_LINE_FEED) {
                    hasLineBreak = true;
                    if (shouldTrackWidth) {
                        hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string5[previousLineBreak + 1] !== " ";
                        previousLineBreak = i;
                    }
                } else if (!isPrintable(char)) {
                    return STYLE_DOUBLE;
                }
                plain = plain && isPlainSafe(char, prevChar, inblock);
                prevChar = char;
            }
            hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string5[previousLineBreak + 1] !== " ");
        }
        if (!hasLineBreak && !hasFoldableLine) {
            if (plain && !forceQuotes && !testAmbiguousType(string5)) {
                return STYLE_PLAIN;
            }
            return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
        }
        if (indentPerLevel > 9 && needIndentIndicator(string5)) {
            return STYLE_DOUBLE;
        }
        if (!forceQuotes) {
            return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    function writeScalar3(state, string5, level, iskey, inblock) {
        state.dump = (function() {
            if (string5.length === 0) {
                return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
            }
            if (!state.noCompatMode) {
                if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string5) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string5)) {
                    return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string5 + '"' : "'" + string5 + "'";
                }
            }
            const indent = state.indent * Math.max(1, level);
            const lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
            const singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
            function testAmbiguity(string22) {
                return testImplicitResolving(state, string22);
            }
            switch(chooseScalarStyle(string5, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)){
                case STYLE_PLAIN:
                    return string5;
                case STYLE_SINGLE:
                    return "'" + string5.replace(/'/g, "''") + "'";
                case STYLE_LITERAL:
                    return "|" + blockHeader(string5, state.indent) + dropEndingNewline(indentString(string5, indent));
                case STYLE_FOLDED:
                    return ">" + blockHeader(string5, state.indent) + dropEndingNewline(indentString(foldString(string5, lineWidth), indent));
                case STYLE_DOUBLE:
                    return '"' + escapeString(string5) + '"';
                default:
                    throw new YAMLException2("impossible error: invalid scalar style");
            }
        })();
    }
    function blockHeader(string5, indentPerLevel) {
        const indentIndicator = needIndentIndicator(string5) ? String(indentPerLevel) : "";
        const clip = string5[string5.length - 1] === "\n";
        const keep = clip && (string5[string5.length - 2] === "\n" || string5 === "\n");
        const chomp = keep ? "+" : clip ? "" : "-";
        return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string5) {
        return string5[string5.length - 1] === "\n" ? string5.slice(0, -1) : string5;
    }
    function foldString(string5, width) {
        const lineRe = /(\n+)([^\n]*)/g;
        let result = (function() {
            let nextLF = string5.indexOf("\n");
            nextLF = nextLF !== -1 ? nextLF : string5.length;
            lineRe.lastIndex = nextLF;
            return foldLine(string5.slice(0, nextLF), width);
        })();
        let prevMoreIndented = string5[0] === "\n" || string5[0] === " ";
        let moreIndented;
        let match2;
        while(match2 = lineRe.exec(string5)){
            const prefix = match2[1];
            const line = match2[2];
            moreIndented = line[0] === " ";
            result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
            prevMoreIndented = moreIndented;
        }
        return result;
    }
    function foldLine(line, width) {
        if (line === "" || line[0] === " ") return line;
        const breakRe = / [^ ]/g;
        let match2;
        let start = 0;
        let end;
        let curr = 0;
        let next = 0;
        let result = "";
        while(match2 = breakRe.exec(line)){
            next = match2.index;
            if (next - start > width) {
                end = curr > start ? curr : next;
                result += "\n" + line.slice(start, end);
                start = end + 1;
            }
            curr = next;
        }
        result += "\n";
        if (line.length - start > width && curr > start) {
            result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
        } else {
            result += line.slice(start);
        }
        return result.slice(1);
    }
    function escapeString(string5) {
        let result = "";
        let char = 0;
        for(let i = 0; i < string5.length; char >= 65536 ? i += 2 : i++){
            char = codePointAt(string5, i);
            const escapeSeq = ESCAPE_SEQUENCES[char];
            if (!escapeSeq && isPrintable(char)) {
                result += string5[i];
                if (char >= 65536) result += string5[i + 1];
            } else {
                result += escapeSeq || encodeHex(char);
            }
        }
        return result;
    }
    function writeFlowSequence(state, level, object4) {
        let _result = "";
        const _tag = state.tag;
        for(let index = 0, length = object4.length; index < length; index += 1){
            let value = object4[index];
            if (state.replacer) {
                value = state.replacer.call(object4, String(index), value);
            }
            if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
                if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
                _result += state.dump;
            }
        }
        state.tag = _tag;
        state.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state, level, object4, compact) {
        let _result = "";
        const _tag = state.tag;
        for(let index = 0, length = object4.length; index < length; index += 1){
            let value = object4[index];
            if (state.replacer) {
                value = state.replacer.call(object4, String(index), value);
            }
            if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
                if (!compact || _result !== "") {
                    _result += generateNextLine(state, level);
                }
                if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                    _result += "-";
                } else {
                    _result += "- ";
                }
                _result += state.dump;
            }
        }
        state.tag = _tag;
        state.dump = _result || "[]";
    }
    function writeFlowMapping(state, level, object4) {
        let _result = "";
        const _tag = state.tag;
        const objectKeyList = Object.keys(object4);
        for(let index = 0, length = objectKeyList.length; index < length; index += 1){
            let pairBuffer = "";
            if (_result !== "") pairBuffer += ", ";
            if (state.condenseFlow) pairBuffer += '"';
            const objectKey = objectKeyList[index];
            let objectValue = object4[objectKey];
            if (state.replacer) {
                objectValue = state.replacer.call(object4, objectKey, objectValue);
            }
            if (!writeNode(state, level, objectKey, false, false)) {
                continue;
            }
            if (state.dump.length > 1024) pairBuffer += "? ";
            pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
            if (!writeNode(state, level, objectValue, false, false)) {
                continue;
            }
            pairBuffer += state.dump;
            _result += pairBuffer;
        }
        state.tag = _tag;
        state.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state, level, object4, compact) {
        let _result = "";
        const _tag = state.tag;
        const objectKeyList = Object.keys(object4);
        if (state.sortKeys === true) {
            objectKeyList.sort();
        } else if (typeof state.sortKeys === "function") {
            objectKeyList.sort(state.sortKeys);
        } else if (state.sortKeys) {
            throw new YAMLException2("sortKeys must be a boolean or a function");
        }
        for(let index = 0, length = objectKeyList.length; index < length; index += 1){
            let pairBuffer = "";
            if (!compact || _result !== "") {
                pairBuffer += generateNextLine(state, level);
            }
            const objectKey = objectKeyList[index];
            let objectValue = object4[objectKey];
            if (state.replacer) {
                objectValue = state.replacer.call(object4, objectKey, objectValue);
            }
            if (!writeNode(state, level + 1, objectKey, true, true, true)) {
                continue;
            }
            const explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
            if (explicitPair) {
                if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                    pairBuffer += "?";
                } else {
                    pairBuffer += "? ";
                }
            }
            pairBuffer += state.dump;
            if (explicitPair) {
                pairBuffer += generateNextLine(state, level);
            }
            if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
                continue;
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += ":";
            } else {
                pairBuffer += ": ";
            }
            pairBuffer += state.dump;
            _result += pairBuffer;
        }
        state.tag = _tag;
        state.dump = _result || "{}";
    }
    function detectType(state, object4, explicit) {
        const typeList = explicit ? state.explicitTypes : state.implicitTypes;
        for(let index = 0, length = typeList.length; index < length; index += 1){
            const type2 = typeList[index];
            if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object4 === "object" && object4 instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object4))) {
                if (explicit) {
                    if (type2.multi && type2.representName) {
                        state.tag = type2.representName(object4);
                    } else {
                        state.tag = type2.tag;
                    }
                } else {
                    state.tag = "?";
                }
                if (type2.represent) {
                    const style = state.styleMap[type2.tag] || type2.defaultStyle;
                    let _result;
                    if (_toString.call(type2.represent) === "[object Function]") {
                        _result = type2.represent(object4, style);
                    } else if (_hasOwnProperty.call(type2.represent, style)) {
                        _result = type2.represent[style](object4, style);
                    } else {
                        throw new YAMLException2("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
                    }
                    state.dump = _result;
                }
                return true;
            }
        }
        return false;
    }
    function writeNode(state, level, object4, block, compact, iskey, isblockseq) {
        state.tag = null;
        state.dump = object4;
        if (!detectType(state, object4, false)) {
            detectType(state, object4, true);
        }
        const type2 = _toString.call(state.dump);
        const inblock = block;
        if (block) {
            block = state.flowLevel < 0 || state.flowLevel > level;
        }
        const objectOrArray = type2 === "[object Object]" || type2 === "[object Array]";
        let duplicateIndex;
        let duplicate;
        if (objectOrArray) {
            duplicateIndex = state.duplicates.indexOf(object4);
            duplicate = duplicateIndex !== -1;
        }
        if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
            compact = false;
        }
        if (duplicate && state.usedDuplicates[duplicateIndex]) {
            state.dump = "*ref_" + duplicateIndex;
        } else {
            if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
                state.usedDuplicates[duplicateIndex] = true;
            }
            if (type2 === "[object Object]") {
                if (block && Object.keys(state.dump).length !== 0) {
                    writeBlockMapping(state, level, state.dump, compact);
                    if (duplicate) {
                        state.dump = "&ref_" + duplicateIndex + state.dump;
                    }
                } else {
                    writeFlowMapping(state, level, state.dump);
                    if (duplicate) {
                        state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                    }
                }
            } else if (type2 === "[object Array]") {
                if (block && state.dump.length !== 0) {
                    if (state.noArrayIndent && !isblockseq && level > 0) {
                        writeBlockSequence(state, level - 1, state.dump, compact);
                    } else {
                        writeBlockSequence(state, level, state.dump, compact);
                    }
                    if (duplicate) {
                        state.dump = "&ref_" + duplicateIndex + state.dump;
                    }
                } else {
                    writeFlowSequence(state, level, state.dump);
                    if (duplicate) {
                        state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                    }
                }
            } else if (type2 === "[object String]") {
                if (state.tag !== "?") {
                    writeScalar3(state, state.dump, level, iskey, inblock);
                }
            } else if (type2 === "[object Undefined]") {
                return false;
            } else {
                if (state.skipInvalid) return false;
                throw new YAMLException2("unacceptable kind of an object to dump " + type2);
            }
            if (state.tag !== null && state.tag !== "?") {
                let tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
                if (state.tag[0] === "!") {
                    tagStr = "!" + tagStr;
                } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
                    tagStr = "!!" + tagStr.slice(18);
                } else {
                    tagStr = "!<" + tagStr + ">";
                }
                state.dump = tagStr + " " + state.dump;
            }
        }
        return true;
    }
    function getDuplicateReferences(object4, state) {
        const objects = [];
        const duplicatesIndexes = [];
        inspectNode(object4, objects, duplicatesIndexes);
        const length = duplicatesIndexes.length;
        for(let index = 0; index < length; index += 1){
            state.duplicates.push(objects[duplicatesIndexes[index]]);
        }
        state.usedDuplicates = new Array(length);
    }
    function inspectNode(object4, objects, duplicatesIndexes) {
        if (object4 !== null && typeof object4 === "object") {
            const index = objects.indexOf(object4);
            if (index !== -1) {
                if (duplicatesIndexes.indexOf(index) === -1) {
                    duplicatesIndexes.push(index);
                }
            } else {
                objects.push(object4);
                if (Array.isArray(object4)) {
                    for(let i = 0, length = object4.length; i < length; i += 1){
                        inspectNode(object4[i], objects, duplicatesIndexes);
                    }
                } else {
                    const objectKeyList = Object.keys(object4);
                    for(let i = 0, length = objectKeyList.length; i < length; i += 1){
                        inspectNode(object4[objectKeyList[i]], objects, duplicatesIndexes);
                    }
                }
            }
        }
    }
    function dump2(input, options2) {
        options2 = options2 || {};
        const state = new State(options2);
        if (!state.noRefs) getDuplicateReferences(input, state);
        let value = input;
        if (state.replacer) {
            value = state.replacer.call({
                "": value
            }, "", value);
        }
        if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
        return "";
    }
    dumper.dump = dump2;
    return dumper;
}
export function requireJsYaml() {
    if (hasRequiredJsYaml) return jsYaml;
    hasRequiredJsYaml = 1;
    const loader2 = requireLoader();
    const dumper2 = requireDumper();
    function renamed(from2, to3) {
        return function() {
            throw new Error("Function yaml." + from2 + " is removed in js-yaml 4. Use yaml." + to3 + " instead, which is now safe by default.");
        };
    }
    jsYaml.Type = requireType();
    jsYaml.Schema = requireSchema();
    jsYaml.FAILSAFE_SCHEMA = requireFailsafe();
    jsYaml.JSON_SCHEMA = requireJson();
    jsYaml.CORE_SCHEMA = requireCore();
    jsYaml.DEFAULT_SCHEMA = require_default();
    jsYaml.load = loader2.load;
    jsYaml.loadAll = loader2.loadAll;
    jsYaml.dump = dumper2.dump;
    jsYaml.YAMLException = requireException();
    jsYaml.types = {
        binary: requireBinary(),
        float: requireFloat(),
        map: requireMap(),
        null: require_null2(),
        pairs: requirePairs(),
        set: requireSet(),
        timestamp: requireTimestamp(),
        bool: requireBool(),
        int: requireInt(),
        merge: requireMerge(),
        omap: requireOmap(),
        seq: requireSeq(),
        str: requireStr()
    };
    jsYaml.safeLoad = renamed("safeLoad", "load");
    jsYaml.safeLoadAll = renamed("safeLoadAll", "loadAll");
    jsYaml.safeDump = renamed("safeDump", "dump");
    return jsYaml;
}
var hasRequiredCommon, exception, hasRequiredException, snippet, hasRequiredSnippet, type, hasRequiredType, schema, hasRequiredSchema, str2, hasRequiredStr, seq, hasRequiredSeq, map3, hasRequiredMap, failsafe, hasRequiredFailsafe, _null, hasRequired_null, bool, hasRequiredBool, int, hasRequiredInt, float, hasRequiredFloat, json, hasRequiredJson, core, hasRequiredCore, timestamp, hasRequiredTimestamp, merge2, hasRequiredMerge, binary, hasRequiredBinary, omap, hasRequiredOmap, pairs, hasRequiredPairs, set, hasRequiredSet, _default, hasRequired_default, hasRequiredLoader, hasRequiredDumper, hasRequiredJsYaml;
export function toKebabCase(str3) {
    return str3.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9.-]/g, "");
}
export function parseNameAndDescription(content) {
    const frontmatterMatch = content.match(FRONTMATTER_REGEX);
    if (!frontmatterMatch) {
        return {};
    }
    try {
        const parsed = yaml2.load(frontmatterMatch[1], {
            schema: yaml2.JSON_SCHEMA
        });
        if (!parsed || typeof parsed !== "object") {
            return {};
        }
        const metadata = parsed.metadata !== null && typeof parsed.metadata === "object" ? parsed.metadata : void 0;
        const environments = normalizeEnvironmentList(parsed.environments ?? metadata?.environments);
        const disabledEnvironments = normalizeEnvironmentList(parsed["disabled-environments"] ?? metadata?.disabledEnvironments);
        return {
            disabledEnvironments,
            environments,
            name: typeof parsed.name === "string" ? parsed.name : void 0,
            description: typeof parsed.description === "string" ? parsed.description : void 0
        };
    } catch  {
        const raw = frontmatterMatch[1];
        const nameMatch = raw.match(/^name:\s*(.+)$/m);
        const descMatch = raw.match(/^description:\s*(.+)$/m);
        if (nameMatch || descMatch) {
            return {
                name: nameMatch ? nameMatch[1].trim() : void 0,
                description: descMatch ? descMatch[1].trim() : void 0
            };
        }
        return {};
    }
}
function normalizeEnvironmentList(value) {
    if (Array.isArray(value)) {
        const normalized = value.filter((entry)=>typeof entry === "string" && entry.length > 0);
        return normalized.length === 0 ? void 0 : normalized;
    }
    if (typeof value === "string") {
        const normalized = value.split(",").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
        return normalized.length === 0 ? void 0 : normalized;
    }
    return void 0;
}
export function deriveNameFromPath(filePath) {
    const fileName = (0, import_node_path33.basename)(filePath);
    const baseName = fileName.replace(/\.(md|mdc|markdown|txt)$/i, "");
    return toKebabCase(baseName);
}
export function deduplicateByName(components) {
    const seen = new Set();
    const result = [];
    for (const component of components){
        if (!seen.has(component.name)) {
            seen.add(component.name);
            result.push(component);
        }
    }
    return result;
}
async function isSymlink(filePath) {
    try {
        const stats = await (0, import_promises15.lstat)(filePath);
        return stats.isSymbolicLink();
    } catch  {
        return false;
    }
}
async function readFileNoSymlink(filePath) {
    if (await isSymlink(filePath)) {
        throw new Error(`Refusing to read symlink: ${filePath}`);
    }
    return (0, import_promises15.readFile)(filePath, "utf-8");
}
async function checkFileSize(filePath) {
    const stats = await (0, import_promises15.stat)(filePath);
    if (stats.size > MAX_FILE_SIZE) {
        throw new Error(`File ${filePath} exceeds maximum size of ${MAX_FILE_SIZE} bytes`);
    }
}
function createLocalPluginFileFetcher(basePath, options2) {
    const fileContentCache = new Map();
    const resolvedBasePath = (0, import_node_path34.resolve)(basePath);
    const resolvedSymlinkTargetRoot = (0, import_node_path34.resolve)(options2?.symlinkTargetRoot ?? resolvedBasePath);
    const resolvedSymlinkTargetRootPromise = (0, import_promises15.realpath)(resolvedSymlinkTargetRoot).catch(()=>resolvedSymlinkTargetRoot);
    function assertContained(fullPath) {
        const resolvedFullPath = (0, import_node_path34.resolve)(fullPath);
        try {
            return validateAndResolveSubpath(resolvedBasePath, resolvedFullPath);
        } catch  {
            throw new Error(`Path escapes plugin directory: ${fullPath}`);
        }
    }
    async function assertContainedRealPath(fullPath) {
        const containedPath = assertContained(fullPath);
        const resolvedAllowedRealPath = await resolvedSymlinkTargetRootPromise;
        const resolvedRealPath = await (0, import_promises15.realpath)(containedPath);
        try {
            return validateAndResolveSubpath(resolvedAllowedRealPath, resolvedRealPath);
        } catch  {
            throw new Error(`Path escapes plugin directory via symlink: ${fullPath}`);
        }
    }
    return {
        async listDirectory (dirPath, visitedRealDirPaths) {
            const candidatePath = assertContained(dirPath ? (0, import_node_path34.join)(basePath, dirPath) : basePath);
            try {
                const fullPath = await assertContainedRealPath(candidatePath);
                if (visitedRealDirPaths?.has(fullPath)) {
                    return [];
                }
                visitedRealDirPaths?.add(fullPath);
                const entries = await (0, import_promises15.readdir)(fullPath, {
                    withFileTypes: true
                });
                const results = [];
                for (const e of entries){
                    const entryFullPath = (0, import_node_path34.join)(candidatePath, e.name);
                    let entryType = e.isDirectory() ? "dir" : "file";
                    if (e.isSymbolicLink()) {
                        try {
                            const resolvedEntryPath = await assertContainedRealPath(entryFullPath);
                            const resolvedEntryStats = await (0, import_promises15.stat)(resolvedEntryPath);
                            entryType = resolvedEntryStats.isDirectory() ? "dir" : "file";
                        } catch  {
                            continue;
                        }
                    }
                    results.push({
                        name: e.name,
                        type: entryType,
                        path: dirPath ? `${dirPath}/${e.name}` : e.name
                    });
                }
                return results;
            } catch  {
                return [];
            }
        },
        async fetchFile (filePath) {
            const cached2 = fileContentCache.get(filePath);
            if (cached2 !== void 0) {
                return {
                    content: cached2
                };
            }
            const candidatePath = assertContained((0, import_node_path34.join)(basePath, filePath));
            const fullPath = await assertContainedRealPath(candidatePath);
            await checkFileSize(fullPath);
            const content = await (0, import_promises15.readFile)(fullPath, "utf-8");
            fileContentCache.set(filePath, content);
            return {
                content
            };
        },
        async fileExists (filePath) {
            try {
                const candidatePath = assertContained((0, import_node_path34.join)(basePath, filePath));
                const fullPath = await assertContainedRealPath(candidatePath);
                const stats = await (0, import_promises15.stat)(fullPath);
                return stats.isFile();
            } catch  {
                return false;
            }
        }
    };
}
async function resolveLocalPluginLogoUrl({ installPath, logo }) {
    const relativeLogoPath = logo?.trim();
    if (!relativeLogoPath || (0, import_node_path34.isAbsolute)(relativeLogoPath) || relativeLogoPath.includes("://")) {
        return void 0;
    }
    try {
        const canonicalRoot = await (0, import_promises15.realpath)(installPath);
        const targetPath = validateAndResolveSubpath(canonicalRoot, relativeLogoPath);
        const canonicalTarget = await (0, import_promises15.realpath)(targetPath);
        validateAndResolveSubpath(canonicalRoot, canonicalTarget);
        const targetStats = await (0, import_promises15.stat)(canonicalTarget);
        if (!targetStats.isFile()) {
            return void 0;
        }
        await checkFileSize(canonicalTarget);
        return (0, import_node_url2.pathToFileURL)(canonicalTarget).href;
    } catch  {
        return void 0;
    }
}
function pickIdentity(source) {
    const fields = {};
    if (source.version !== void 0) {
        fields.version = source.version;
    }
    if (source.homepage !== void 0) {
        fields.homepage = source.homepage;
    }
    if (source.repository !== void 0) {
        fields.repository = source.repository;
    }
    return fields;
}
function hasIdentity(fields) {
    return fields.version !== void 0 || fields.homepage !== void 0 || fields.repository !== void 0;
}
function preferIdentity(preferred, fallback3) {
    return pickIdentity({
        version: preferred.version ?? fallback3?.version,
        homepage: preferred.homepage ?? fallback3?.homepage,
        repository: preferred.repository ?? fallback3?.repository
    });
}
async function readLocalPluginManifestData(installPath, pluginDisplayName2, pluginLogger) {
    let identityOnly;
    for (const manifestPath of PLUGIN_MANIFEST_PATHS){
        const fullPath = (0, import_node_path34.join)(installPath, manifestPath);
        let content;
        try {
            if (await isSymlink(fullPath)) continue;
            const stats = await (0, import_promises15.stat)(fullPath);
            if (!stats.isFile()) continue;
            await checkFileSize(fullPath);
            content = await readFileNoSymlink(fullPath);
        } catch  {
            continue;
        }
        const parseResult = parsePluginManifest(content);
        if (!parseResult.success) {
            continue;
        }
        const manifest = parseResult.data;
        const commands = manifest.commands;
        const agents = manifest.agents;
        const skills = manifest.skills;
        const rules = manifest.rules;
        const hooks = manifest.hooks;
        const mcpServers = manifest.mcpServers;
        const hasManifestOptions = commands !== void 0 || agents !== void 0 || skills !== void 0 || rules !== void 0 || hooks !== void 0 || mcpServers !== void 0;
        const displayName = typeof manifest.displayName === "string" ? manifest.displayName : void 0;
        const description3 = typeof manifest.description === "string" ? manifest.description : void 0;
        const authorName = manifest.author?.name;
        const logoUrl = await resolveLocalPluginLogoUrl({
            installPath,
            logo: manifest.logo
        });
        const identity = pickIdentity(manifest);
        const variables = manifest.variables;
        const capabilities = manifest.capabilities;
        const hasUiMetadata = displayName !== void 0 || description3 !== void 0 || authorName !== void 0 || logoUrl !== void 0 || variables !== void 0 || capabilities !== void 0;
        if (!hasManifestOptions && !hasUiMetadata && !hasIdentity(identity)) {
            continue;
        }
        if (!hasManifestOptions && !hasUiMetadata) {
            identityOnly = identityOnly ? {
                ...identityOnly,
                fields: preferIdentity(identityOnly.fields, identity)
            } : {
                fields: identity,
                path: fullPath,
                relPath: manifestPath,
                unrecognizedSchemaId: parseResult.unrecognizedSchemaId
            };
            continue;
        }
        if (parseResult.unrecognizedSchemaId !== void 0) {
            pluginLogger.log("debug", `${pluginDisplayName2}: ${manifestPath} declares an unrecognized $schema, loading anyway: ${parseResult.unrecognizedSchemaId}`);
        }
        const mergedIdentity = preferIdentity(identity, identityOnly?.fields);
        const hasMetadata = hasUiMetadata || hasIdentity(mergedIdentity);
        return {
            manifestFilePath: fullPath,
            ...hasManifestOptions && {
                manifestOptions: {
                    commands,
                    agents,
                    skills,
                    rules,
                    hooks,
                    mcpServers
                }
            },
            ...hasMetadata && {
                metadata: {
                    displayName,
                    description: description3,
                    authorName,
                    logoUrl,
                    ...mergedIdentity,
                    variables,
                    capabilities
                }
            }
        };
    }
    if (identityOnly === void 0) {
        return void 0;
    }
    if (identityOnly.unrecognizedSchemaId !== void 0) {
        pluginLogger.log("debug", `${pluginDisplayName2}: ${identityOnly.relPath} declares an unrecognized $schema, loading anyway: ${identityOnly.unrecognizedSchemaId}`);
    }
    return {
        manifestFilePath: identityOnly.path,
        metadata: identityOnly.fields
    };
}
async function discoverAndLoadComponents(installPath, manifestOptions) {
    const fetcher = createLocalPluginFileFetcher(installPath);
    const discovery = new PluginComponentDiscovery(fetcher);
    const discovered = await discovery.discoverComponents({
        manifest: manifestOptions
    });
    const [skills, agents, commands, rules] = await Promise.all([
        loadSkillsFromDiscovered(fetcher, discovered.skills, installPath),
        loadAgentsFromDiscovered(fetcher, discovered.agents, installPath),
        loadCommandsFromDiscovered(fetcher, discovered.commands, installPath),
        loadRulesFromDiscovered(fetcher, discovered.rules, installPath)
    ]);
    return {
        skills,
        agents,
        commands,
        rules
    };
}
async function loadSkillsFromDiscovered(fetcher, descriptors, installPath) {
    const skills = [];
    for (const desc of descriptors){
        try {
            const { content: rawContent } = await fetcher.fetchFile(desc.path);
            const content = expandPluginVariables(rawContent, installPath);
            const skill = parseSkillContent({
                content,
                relativePath: desc.path
            });
            if (skill) skills.push(skill);
        } catch  {}
    }
    return skills;
}
async function loadRulesFromDiscovered(fetcher, descriptors, installPath) {
    const rules = [];
    for (const desc of descriptors){
        try {
            const { content: rawContent } = await fetcher.fetchFile(desc.path);
            const content = expandPluginVariables(rawContent, installPath);
            const skill = parseSkillContent({
                content,
                relativePath: desc.path
            });
            if (skill) rules.push({
                ...skill,
                name: desc.name
            });
        } catch  {}
    }
    return rules;
}
async function loadAgentsFromDiscovered(fetcher, descriptors, installPath) {
    const agents = [];
    for (const desc of descriptors){
        try {
            const { content: rawContent } = await fetcher.fetchFile(desc.path);
            const content = expandPluginVariables(rawContent, installPath);
            const agent = parseAgentContent({
                content,
                relativePath: desc.path
            });
            if (agent) agents.push(agent);
        } catch  {}
    }
    return agents;
}
async function loadCommandsFromDiscovered(fetcher, descriptors, installPath) {
    const commands = [];
    for (const desc of descriptors){
        try {
            const { content: rawContent } = await fetcher.fetchFile(desc.path);
            const content = expandPluginVariables(rawContent, installPath);
            const command = parseCommandContent({
                content,
                relativePath: desc.path
            });
            if (command) commands.push(command);
        } catch  {}
    }
    return commands;
}
function splitCommaSeparatedGlobs(value) {
    const globs = [];
    let start = 0;
    let braceDepth = 0;
    for(let index = 0; index < value.length; index++){
        const character = value[index];
        if (character === "{") {
            braceDepth++;
        } else if (character === "}" && braceDepth > 0) {
            braceDepth--;
        } else if (character === "," && braceDepth === 0) {
            const glob2 = value.slice(start, index).trim();
            if (glob2) globs.push(glob2);
            start = index + 1;
        }
    }
    const glob = value.slice(start).trim();
    if (glob) globs.push(glob);
    return globs;
}
function parseGlobs(value) {
    if (typeof value === "string") {
        const globs = splitCommaSeparatedGlobs(value);
        return globs.length > 0 ? globs : void 0;
    }
    if (Array.isArray(value)) {
        const globs = value.filter((g2)=>typeof g2 === "string").map((g2)=>g2.trim()).filter(Boolean);
        return globs.length > 0 ? globs : void 0;
    }
    return void 0;
}
function parseSkillContent({ content, relativePath: relativePath2 }) {
    try {
        const parsed = grayMatter(content);
        const normalizedRelativePath = relativePath2.replace(/\\/g, "/");
        const pathSegments = normalizedRelativePath.split("/").filter((segment)=>segment.length > 0);
        const parentDirectoryName = pathSegments.length >= 2 ? pathSegments[pathSegments.length - 2] : void 0;
        const fileName = pathSegments[pathSegments.length - 1] ?? normalizedRelativePath;
        const fallbackName = parentDirectoryName ?? fileName.replace(/\.md$/i, "");
        const frontmatterName = typeof parsed.data.name === "string" ? parsed.data.name.trim() : void 0;
        const environments = normalizeEnvironmentList(parsed.data.environments ?? parsed.data.metadata?.environments);
        const disabledEnvironments = normalizeEnvironmentList(parsed.data["disabled-environments"] ?? parsed.data.metadata?.disabledEnvironments);
        return {
            path: relativePath2,
            name: frontmatterName && frontmatterName.length > 0 ? frontmatterName : fallbackName,
            description: typeof parsed.data.description === "string" ? parsed.data.description : void 0,
            globs: parseGlobs(parsed.data.globs),
            alwaysApply: parsed.data.alwaysApply === true,
            content,
            environments,
            disabledEnvironments
        };
    } catch  {
        return null;
    }
}
function parsePermissionMode(raw) {
    const normalized = (raw ?? "").trim().toLowerCase();
    return normalized === "readonly" ? "readonly" : "default";
}
function parseAgentContent({ content, relativePath: relativePath2 }) {
    try {
        const parsed = grayMatter(content);
        const body = parsed.content.trim();
        if (!body) return null;
        let tools;
        if (typeof parsed.data.tools === "string") {
            tools = parsed.data.tools.split(",").map((t)=>t.trim()).filter(Boolean);
        } else if (Array.isArray(parsed.data.tools)) {
            tools = parsed.data.tools.map((t)=>typeof t === "string" ? t.trim() : String(t)).filter(Boolean);
        }
        const permissionModeRaw = parsed.data.permissionMode ?? parsed.data.permissionmode;
        const fileName = (0, import_node_path34.basename)(relativePath2);
        return {
            path: relativePath2,
            name: typeof parsed.data.name === "string" ? parsed.data.name : (0, import_node_path34.basename)(fileName, (0, import_node_path34.extname)(fileName)).replace(/[\s_]+/g, "-"),
            description: typeof parsed.data.description === "string" ? parsed.data.description : void 0,
            tools,
            model: typeof parsed.data.model === "string" ? parsed.data.model : "inherit",
            prompt: body,
            permissionMode: parsePermissionMode(permissionModeRaw)
        };
    } catch  {
        return null;
    }
}
function parseCommandContent({ content, relativePath: relativePath2 }) {
    try {
        const parsed = grayMatter(content);
        let argumentHint;
        const argumentHintRaw = parsed.data["argument-hint"];
        if (typeof argumentHintRaw === "string") {
            argumentHint = argumentHintRaw;
        } else if (Array.isArray(argumentHintRaw)) {
            argumentHint = `[${argumentHintRaw.join(" ")}]`;
        }
        const fileName = (0, import_node_path34.basename)(relativePath2);
        return {
            path: relativePath2,
            name: typeof parsed.data.name === "string" ? parsed.data.name : (0, import_node_path34.basename)(fileName, (0, import_node_path34.extname)(fileName)),
            description: typeof parsed.data.description === "string" ? parsed.data.description : void 0,
            argumentHint,
            content: parsed.content.trim()
        };
    } catch  {
        return null;
    }
}
function mcpParseOptionsFromPluginSource(sourceInfo) {
    if (sourceInfo === void 0) {
        return void 0;
    }
    return {
        configuredVariables: sourceInfo.configuredVariables
    };
}
function createSafeFsPluginMcpFileReader(installPath) {
    return async (relativePath2)=>{
        if (!isPathSafe(relativePath2)) {
            return null;
        }
        const fullPath = (0, import_node_path34.join)(installPath, relativePath2);
        try {
            if (await isSymlink(fullPath)) return null;
            const fileStats = await (0, import_promises15.stat)(fullPath);
            if (!fileStats.isFile()) return null;
            await checkFileSize(fullPath);
            return await readFileNoSymlink(fullPath);
        } catch  {
            return null;
        }
    };
}
async function readPluginMcpConfigSimple(installPath, sourceInfo, explicitMcpOptions) {
    const mcpOptions = explicitMcpOptions ?? mcpParseOptionsFromPluginSource(sourceInfo);
    return resolvePluginMcpConfigWithManifestLookup(createSafeFsPluginMcpFileReader(installPath), {
        fallbackFileNames: resolvePluginMcpConfigPaths(),
        manifestPrecedence: "override",
        toSourcePath: (relativePath2)=>(0, import_node_path34.join)(installPath, relativePath2),
        installPathForExpansion: installPath,
        parserOptions: mcpOptions
    });
}
async function readClaudePluginMcpConfig(installPath, ccSourceInfo, pluginLogger) {
    const simpleConfig = await readPluginMcpConfigSimple(installPath, void 0, {
        log: pluginLogger
    });
    if (simpleConfig) {
        return simpleConfig;
    }
    for (const manifestRelPath of MARKETPLACE_MANIFEST_PATHS){
        const marketplacePath = (0, import_node_path34.join)(installPath, manifestRelPath);
        try {
            const stats = await (0, import_promises15.stat)(marketplacePath);
            if (!stats.isFile()) {
                continue;
            }
            const content = await (0, import_promises15.readFile)(marketplacePath, "utf-8");
            const marketplace = JSON.parse(content);
            const plugins = marketplace.plugins;
            if (!Array.isArray(plugins)) {
                continue;
            }
            const pluginName = ccSourceInfo.name;
            const entry = plugins.find((p2)=>p2.name === pluginName);
            if (!entry?.mcpServers?.length) {
                continue;
            }
            for (const mcpPath of entry.mcpServers){
                const normalized = mcpPath.replace(/^\.\//, "");
                if (!isPathSafe(normalized)) {
                    continue;
                }
                const mcpFile = (0, import_node_path34.join)(installPath, normalized);
                try {
                    await checkFileSize(mcpFile);
                    const mcpContent = await readFileNoSymlink(mcpFile);
                    const config2 = parsePluginMcpConfig(mcpContent, installPath, {
                        log: pluginLogger
                    });
                    if (config2?.mcpServers && Object.keys(config2.mcpServers).length > 0) {
                        const mcpServerSourcePaths = Object.fromEntries(Object.keys(config2.mcpServers).map((serverName)=>[
                                serverName,
                                mcpFile
                            ]));
                        return {
                            ...config2,
                            mcpServerSourcePaths
                        };
                    }
                } catch  {}
            }
            return null;
        } catch  {}
    }
    return null;
}
function expandHooksConfigVariables(config2, installPath) {
    const expandedHooks = {};
    for (const [step, scripts] of Object.entries(config2.hooks)){
        if (!Array.isArray(scripts)) continue;
        expandedHooks[step] = scripts.map((script)=>{
            if ("command" in script && typeof script.command === "string") {
                return {
                    ...script,
                    command: expandPluginVariables(script.command, installPath)
                };
            }
            if ("prompt" in script && typeof script.prompt === "string") {
                return {
                    ...script,
                    prompt: expandPluginVariables(script.prompt, installPath)
                };
            }
            return script;
        });
    }
    return {
        ...config2,
        hooks: expandedHooks
    };
}
async function loadPluginHooksInternal(installPath, pluginDisplayName2, manifestHooks, manifestSourcePath) {
    if (typeof manifestHooks === "object") {
        const result2 = validateAndTransformHooks(manifestHooks, pluginDisplayName2);
        if (result2 && "config" in result2) {
            return {
                config: expandHooksConfigVariables(result2.config, installPath),
                ...manifestSourcePath !== void 0 && {
                    sourcePath: manifestSourcePath
                }
            };
        }
        return result2;
    }
    let hooksPath;
    if (typeof manifestHooks === "string") {
        const resolved = manifestHooks.replace(/^\.\//, "");
        if (!isPathSafe(resolved)) {
            return void 0;
        }
        hooksPath = resolved.endsWith(".json") ? (0, import_node_path34.join)(installPath, resolved) : (0, import_node_path34.join)(installPath, resolved, "hooks.json");
    } else {
        hooksPath = (0, import_node_path34.join)(installPath, "hooks", "hooks.json");
    }
    try {
        if (await isSymlink(hooksPath)) return void 0;
        const st2 = await (0, import_promises15.stat)(hooksPath);
        if (!st2.isFile()) return void 0;
    } catch  {
        return void 0;
    }
    let raw;
    try {
        await checkFileSize(hooksPath);
        raw = await (0, import_promises15.readFile)(hooksPath, "utf-8");
    } catch  {
        return void 0;
    }
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch  {
        return {
            error: {
                source: "claude-plugin",
                message: `Plugin ${pluginDisplayName2} ${hooksPath}: invalid JSON`
            }
        };
    }
    const result = validateAndTransformHooks(parsed, pluginDisplayName2);
    if (result && "config" in result) {
        return {
            config: expandHooksConfigVariables(result.config, installPath),
            sourcePath: hooksPath
        };
    }
    return result;
}
function validateAndTransformHooks(parsed, pluginDisplayName2) {
    const schemaType = detectHooksSchema(parsed);
    if (schemaType === "cursor") {
        const config2 = parsed;
        const validation = validateHooksConfig(config2);
        if (!validation.isValid) {
            return {
                error: {
                    source: "claude-plugin",
                    message: `Plugin ${pluginDisplayName2} hooks: ${validation.errors.join("; ")}`
                }
            };
        }
        return {
            config: config2
        };
    }
    if (schemaType === "claude-code") {
        const parsedObj = parsed;
        const parsedHooks = parsedObj?.hooks;
        if (!parsedHooks || Object.keys(parsedHooks).length === 0) return void 0;
        const config2 = transformClaudeHooksToConfig(parsedHooks);
        const validation = validateHooksConfig(config2);
        if (!validation.isValid) {
            return {
                error: {
                    source: "claude-plugin",
                    message: `Plugin ${pluginDisplayName2} hooks: ${validation.errors.join("; ")}`
                }
            };
        }
        return {
            config: config2
        };
    }
    return void 0;
}
export async function loadPluginContentFromDir(installPath, pluginDisplayName2, sourceInfo, options2) {
    const pluginLogger = options2?.log ?? noopPluginMetricsLogger;
    const manifestData = await readLocalPluginManifestData(installPath, pluginDisplayName2, pluginLogger);
    const mcpOptions = {
        ...mcpParseOptionsFromPluginSource(sourceInfo) ?? (options2?.configuredVariables ? {
            configuredVariables: options2.configuredVariables
        } : void 0),
        log: pluginLogger
    };
    const [components, mcpConfig, hooks] = await Promise.all([
        discoverAndLoadComponents(installPath, manifestData?.manifestOptions),
        readPluginMcpConfigSimple(installPath, sourceInfo, mcpOptions),
        loadPluginHooksInternal(installPath, pluginDisplayName2, manifestData?.manifestOptions?.hooks, manifestData?.manifestFilePath)
    ]);
    return {
        ...components,
        ...manifestData?.metadata?.displayName !== void 0 && {
            displayName: manifestData.metadata.displayName
        },
        ...manifestData?.metadata?.description !== void 0 && {
            description: manifestData.metadata.description
        },
        ...manifestData?.metadata?.authorName !== void 0 && {
            authorName: manifestData.metadata.authorName
        },
        ...manifestData?.metadata?.logoUrl !== void 0 && {
            logoUrl: manifestData.metadata.logoUrl
        },
        ...manifestData?.metadata?.version !== void 0 && {
            version: manifestData.metadata.version
        },
        ...manifestData?.metadata?.homepage !== void 0 && {
            homepage: manifestData.metadata.homepage
        },
        ...manifestData?.metadata?.repository !== void 0 && {
            repository: manifestData.metadata.repository
        },
        variablesSchema: manifestData?.metadata?.variables,
        mcpConfig,
        capabilities: manifestData?.metadata?.capabilities ?? [],
        hooks
    };
}
export async function loadClaudePluginFromPath(installPath, sourceInfo, options2) {
    const pluginLogger = options2?.log ?? noopPluginMetricsLogger;
    const manifestData = await readLocalPluginManifestData(installPath, sourceInfo.raw, pluginLogger);
    const [components, mcpConfig, hooks] = await Promise.all([
        discoverAndLoadComponents(installPath, manifestData?.manifestOptions),
        readClaudePluginMcpConfig(installPath, sourceInfo, pluginLogger),
        loadPluginHooksInternal(installPath, sourceInfo.raw, manifestData?.manifestOptions?.hooks, manifestData?.manifestFilePath)
    ]);
    const identifier2 = {
        source: "claude-plugin",
        sourceInfo
    };
    return {
        identifier: identifier2,
        installPath,
        ...manifestData?.metadata?.displayName !== void 0 && {
            displayName: manifestData.metadata.displayName
        },
        ...manifestData?.metadata?.description !== void 0 && {
            description: manifestData.metadata.description
        },
        ...manifestData?.metadata?.authorName !== void 0 && {
            authorName: manifestData.metadata.authorName
        },
        ...manifestData?.metadata?.logoUrl !== void 0 && {
            logoUrl: manifestData.metadata.logoUrl
        },
        ...manifestData?.metadata?.version !== void 0 && {
            version: manifestData.metadata.version
        },
        ...manifestData?.metadata?.homepage !== void 0 && {
            homepage: manifestData.metadata.homepage
        },
        ...manifestData?.metadata?.repository !== void 0 && {
            repository: manifestData.metadata.repository
        },
        ...components,
        mcpConfig: mcpConfig ?? void 0,
        capabilities: manifestData?.metadata?.capabilities ?? [],
        hooks
    };
}
function translatePluginAgent(agent, options2 = {}) {
    return {
        ...agent,
        model: options2.stripModel ? void 0 : agent.model,
        tools: options2.stripTools ? void 0 : agent.tools
    };
}
export function translatePluginSkillsToCursorRules(plugins) {
    return translateToCursorRules(plugins, (plugin)=>plugin.skills);
}
export function translatePluginRulesToCursorRules(plugins) {
    return translateToCursorRules(plugins, (plugin)=>plugin.rules);
}
function translateToCursorRules(plugins, getItems) {
    const rules = [];
    for (const plugin of plugins){
        const pluginKey = getPluginIdentifierKey(plugin.identifier);
        const gitRemoteOrigin = `plugin:${pluginKey}`;
        const pluginName = getPluginName(plugin.identifier);
        const marketplace = getPluginMarketplace(plugin.identifier);
        const pluginId = getPluginDbId(plugin.identifier);
        const marketplaceId = getPluginMarketplaceDbId(plugin.identifier);
        for (const item of getItems(plugin)){
            const fullPath = (0, import_node_path36.join)(plugin.installPath, item.path);
            const { type: type2, globs, description: description3 } = skillToRuleType(item);
            rules.push({
                fullPath,
                content: item.content,
                type: type2,
                globs,
                description: description3,
                pluginIdentifier: pluginKey,
                gitRemoteOrigin,
                plugin: pluginName,
                marketplace,
                pluginId,
                marketplaceId,
                environments: item.environments,
                disabledEnvironments: item.disabledEnvironments
            });
        }
    }
    return rules;
}
function skillToRuleType(skill) {
    if (skill.alwaysApply) {
        return {
            type: "global"
        };
    }
    if (skill.globs && skill.globs.length > 0) {
        return {
            type: "fileGlobbed",
            globs: skill.globs
        };
    }
    if (skill.description) {
        return {
            type: "agentFetched",
            description: skill.description
        };
    }
    return {
        type: "manuallyAttached"
    };
}
export function translatePluginAgentsToSubagents(plugins, options2 = {
    stripModel: true,
    stripTools: true
}) {
    const subagents = [];
    for (const plugin of plugins){
        const pluginName = getPluginName(plugin.identifier);
        const marketplace = getPluginMarketplace(plugin.identifier);
        const pluginId = getPluginDbId(plugin.identifier);
        const marketplaceId = getPluginMarketplaceDbId(plugin.identifier);
        for (const agent of plugin.agents){
            const a = translatePluginAgent(agent, options2);
            const fullPath = (0, import_node_path36.join)(plugin.installPath, a.path);
            subagents.push({
                name: a.name,
                description: a.description ?? "",
                prompt: a.prompt,
                fullPath,
                permissionMode: a.permissionMode === "readonly" ? "readonly" : "default",
                plugin: pluginName,
                marketplace,
                pluginId,
                marketplaceId
            });
        }
    }
    return subagents;
}
export function agentSkillsCatalogCacheKey(parts) {
    return (0, import_node_crypto10.createHash)("sha256").update(JSON.stringify({
        v: SNAPSHOT_VERSION,
        ...parts
    })).digest("hex");
}
export async function buildAgentSkillsCatalogSnapshot(entries) {
    const realPaths = new Set(entries.realSkillFilePathsByFullPath.values());
    const fileMtimesMs = {};
    await Promise.all(Array.from(realPaths, async (realPath)=>{
        const mtimeMs = await mtimeMsOrUndefined(realPath);
        if (mtimeMs !== void 0) {
            fileMtimesMs[realPath] = mtimeMs;
        }
    }));
    return {
        version: SNAPSHOT_VERSION,
        rules: entries.rules.map((rule)=>rule.toJson()),
        agentSkills: entries.agentSkills.map((skill)=>skill.toJson()),
        realSkillFilePathsByFullPath: Array.from(entries.realSkillFilePathsByFullPath),
        fileMtimesMs
    };
}
export async function restoreAgentSkillsCatalogSnapshot(snapshot) {
    if (!isAgentSkillsCatalogSnapshot(snapshot)) {
        return void 0;
    }
    const realSkillFilePathsByFullPath = new Map();
    await Promise.all(snapshot.realSkillFilePathsByFullPath.map(async ([fullPath, realPath])=>{
        const recordedMtimeMs = snapshot.fileMtimesMs[realPath];
        if (recordedMtimeMs !== void 0 && await mtimeMsOrUndefined(fullPath) === recordedMtimeMs) {
            realSkillFilePathsByFullPath.set(fullPath, realPath);
        }
    }));
    if (realSkillFilePathsByFullPath.size === 0) {
        return void 0;
    }
    const isLive = (fullPath)=>fullPath !== void 0 && realSkillFilePathsByFullPath.has(fullPath);
    try {
        const rules = snapshot.rules.map((json2)=>CursorRule.fromJson(json2, {
                ignoreUnknownFields: true
            })).filter((rule)=>isLive(rule.fullPath));
        const agentSkills = snapshot.agentSkills.map((json2)=>AgentSkill.fromJson(json2, {
                ignoreUnknownFields: true
            })).filter((skill)=>isLive(skill.fullPath));
        return {
            rules,
            agentSkills,
            realSkillFilePathsByFullPath
        };
    } catch (error3) {
        log2("snapshot failed to decode: %O", error3);
        return void 0;
    }
}
async function mtimeMsOrUndefined(path64) {
    try {
        return (await (0, import_promises16.stat)(path64)).mtimeMs;
    } catch  {
        return void 0;
    }
}
function isAgentSkillsCatalogSnapshot(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const candidate = value;
    return candidate.version === SNAPSHOT_VERSION && Array.isArray(candidate.rules) && Array.isArray(candidate.agentSkills) && Array.isArray(candidate.realSkillFilePathsByFullPath) && candidate.realSkillFilePathsByFullPath.every((entry)=>Array.isArray(entry) && entry.length === 2 && typeof entry[0] === "string" && typeof entry[1] === "string") && typeof candidate.fileMtimesMs === "object" && candidate.fileMtimesMs !== null && Object.values(candidate.fileMtimesMs).every((mtime)=>typeof mtime === "number" && Number.isFinite(mtime));
}
function getNormalizedSegments(path64) {
    return path64.replace(/\\/g, "/").split("/").filter(Boolean);
}
function isExtensibilitySkillRoot(segment, nextSegment) {
    return SKILL_CONFIG_DIRS.some((dir)=>dir.configDir === segment && dir.subdir === nextSegment);
}
function hasHiddenSegmentAfterExtensibilitySkillRoot(segments) {
    const rootIndex = segments.findIndex((segment, i)=>isExtensibilitySkillRoot(segment, segments[i + 1]));
    if (rootIndex === -1) {
        return false;
    }
    return segments.slice(rootIndex + 2).some((segment)=>segment.startsWith("."));
}
export function shouldIgnoreExtensibilitySkillPath(skillPath) {
    const segments = getNormalizedSegments(skillPath);
    if (hasHiddenSegmentAfterExtensibilitySkillRoot(segments)) {
        return true;
    }
    const codexIndex = segments.lastIndexOf(".codex");
    if (codexIndex === -1 || segments[codexIndex + 1] !== "skills") {
        return false;
    }
    const lastSegment = segments.at(-1);
    const skillName = lastSegment === "SKILL.md" ? segments.at(-2) : lastSegment;
    return skillName !== void 0 && EXCLUDED_CODEX_SKILL_NAMES.has(skillName);
}
export function getBuiltinExtensibilitySkillRoot(userHomeDirectory) {
    return {
        dirPath: (0, import_node_path37.join)(userHomeDirectory, BUILTIN_SKILL_CONFIG_DIR.configDir, BUILTIN_SKILL_CONFIG_DIR.subdir),
        scope: "builtin",
        source: "builtin"
    };
}
function getDiscoverableSkillConfigDirs(thirdPartyExtensibilityEnabled) {
    return SKILL_CONFIG_DIRS.filter((dir)=>!dir.builtin && (thirdPartyExtensibilityEnabled || !dir.thirdParty));
}
export function getProjectExtensibilitySkillRoots(projectRoot, thirdPartyExtensibilityEnabled) {
    return getDiscoverableSkillConfigDirs(thirdPartyExtensibilityEnabled).map((dir)=>({
            dirPath: (0, import_node_path37.join)(projectRoot, dir.configDir, dir.subdir),
            scope: "project",
            source: "workspace"
        }));
}
export function getUserExtensibilitySkillRoots(userHomeDirectory, thirdPartyExtensibilityEnabled) {
    return getDiscoverableSkillConfigDirs(thirdPartyExtensibilityEnabled).map((dir)=>({
            dirPath: (0, import_node_path37.join)(userHomeDirectory, dir.configDir, dir.subdir),
            scope: "user",
            source: "user"
        }));
}
export function escapeRegExp4(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function normalizeToForwardSlash(p2) {
    return p2.replace(/\\/g, "/");
}
export function classifyPath(relativePath2, thirdPartyEnabled) {
    const normalized = normalizeToForwardSlash(relativePath2);
    const filename = (0, import_node_path38.basename)(normalized);
    if (MARKDOWN_FILENAMES.has(filename)) {
        if (filename === "AGENTS.md" || thirdPartyEnabled && (filename === "CLAUDE.md" || filename === "CLAUDE.local.md")) {
            return "markdown";
        }
        return void 0;
    }
    if (RULES_DIR_PATTERN.test(normalized) && filename.endsWith(".mdc")) {
        return "rules";
    }
    if (filename === "SKILL.md") {
        for (const { pattern, requiresThirdParty } of SKILLS_DIR_PATTERNS){
            if (pattern.test(normalized)) {
                if (requiresThirdParty && !thirdPartyEnabled) continue;
                return "skills";
            }
        }
    }
    if (filename.endsWith(".md")) {
        for (const { pattern, requiresThirdParty } of AGENTS_DIR_PATTERNS){
            if (pattern.test(normalized)) {
                if (requiresThirdParty && !thirdPartyEnabled) continue;
                return "agents";
            }
        }
    }
    return void 0;
}
function shouldSkipExtensibilityScanDirectory(name17) {
    return name17.startsWith(".") || NON_HIDDEN_SKIP_DIRECTORIES.has(name17);
}
async function findFilesRecursive({ rootDir, includeFile, maxDepth = MAX_EXTENSIBILITY_SEARCH_DEPTH, containmentRootDir }) {
    const files = [];
    const dirsToScan = [
        {
            dir: rootDir,
            depth: 0
        }
    ];
    const visitedPaths = new Set();
    const realContainmentRoot = containmentRootDir !== void 0 ? await (0, import_promises17.realpath)(containmentRootDir) : null;
    const isWithinContainmentRoot = (realDir)=>{
        if (realContainmentRoot === null) {
            return true;
        }
        const relativePath2 = (0, import_node_path39.relative)(realContainmentRoot, realDir);
        return relativePath2 === "" || !relativePath2.startsWith("..") && !(0, import_node_path39.isAbsolute)(relativePath2);
    };
    while(dirsToScan.length > 0){
        const currentDir = dirsToScan.pop();
        if (currentDir === void 0) {
            continue;
        }
        const { dir, depth } = currentDir;
        if (depth > maxDepth) {
            continue;
        }
        try {
            const realDir = await (0, import_promises17.realpath)(dir);
            if (!isWithinContainmentRoot(realDir)) {
                continue;
            }
            if (visitedPaths.has(realDir)) {
                continue;
            }
            visitedPaths.add(realDir);
        } catch  {
            continue;
        }
        const dirEntries = await (0, import_promises17.readdir)(dir, {
            withFileTypes: true,
            encoding: "utf8"
        }).catch(()=>{
            return null;
        });
        if (dirEntries === null) {
            continue;
        }
        for (const entry of dirEntries){
            const fullPath = (0, import_node_path39.join)(dir, entry.name);
            let isDir = entry.isDirectory();
            let isFile = entry.isFile();
            if (entry.isSymbolicLink()) {
                try {
                    const targetStat = await (0, import_promises17.stat)(fullPath);
                    isDir = targetStat.isDirectory();
                    isFile = targetStat.isFile();
                } catch  {
                    continue;
                }
            }
            if (isDir) {
                if (shouldSkipExtensibilityScanDirectory(entry.name)) {
                    continue;
                }
                dirsToScan.push({
                    dir: fullPath,
                    depth: depth + 1
                });
                continue;
            }
            if (isFile && includeFile(entry.name)) {
                files.push(fullPath);
            }
        }
    }
    files.sort((a, b2)=>a.localeCompare(b2));
    return files;
}
function normalizeSkillDir(dirPath) {
    const normalized = dirPath.replace(/\\/g, "/");
    return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
}
export function classifySkillPath(fullPath, context2) {
    const home = normalizeSkillDir(context2.userHomeDirectory);
    const normalized = fullPath.replace(/\\/g, "/");
    if (home.length > 0) {
        for (const storeSkillsDir of context2.agentStoreSkillsDirs){
            const dir = normalizeSkillDir(storeSkillsDir);
            if (dir.length > 0 && normalized.startsWith(`${dir}/`)) {
                return {
                    key: `${home}::skills/${normalized.slice(dir.length + 1)}`,
                    inAgentStore: true
                };
            }
        }
    }
    return {
        key: dedupeKey(fullPath),
        inAgentStore: false
    };
}
function dedupeKey(fullPath) {
    const n = fullPath.replace(/\\/g, "/");
    const lower = n.toLowerCase();
    const cursorIdx = lower.indexOf("/.cursor/");
    const claudeIdx = lower.indexOf("/.claude/");
    const codexIdx = lower.indexOf("/.codex/");
    const grokIdx = lower.indexOf("/.grok/");
    const agentsIdx = lower.indexOf("/.agents/");
    if (cursorIdx !== -1) {
        const configRoot = n.slice(0, cursorIdx);
        const under = n.slice(cursorIdx + "/.cursor/".length);
        return `${configRoot}::${under}`;
    }
    if (claudeIdx !== -1) {
        const configRoot = n.slice(0, claudeIdx);
        const under = n.slice(claudeIdx + "/.claude/".length);
        return `${configRoot}::${under}`;
    }
    if (codexIdx !== -1) {
        const configRoot = n.slice(0, codexIdx);
        const under = n.slice(codexIdx + "/.codex/".length);
        return `${configRoot}::${under}`;
    }
    if (grokIdx !== -1) {
        const configRoot = n.slice(0, grokIdx);
        const under = n.slice(grokIdx + "/.grok/".length);
        return `${configRoot}::${under}`;
    }
    if (agentsIdx !== -1) {
        const configRoot = n.slice(0, agentsIdx);
        const under = n.slice(agentsIdx + "/.agents/".length);
        return `${configRoot}::${under}`;
    }
    return fullPath;
}
export function dedupePreferringAgentStore(items, context2) {
    const positionByKey = new Map();
    const kept = [];
    for (const item of items){
        const { key, inAgentStore } = classifySkillPath(item.fullPath, context2);
        const position = positionByKey.get(key);
        if (position === void 0) {
            positionByKey.set(key, kept.length);
            kept.push({
                item,
                inAgentStore
            });
            continue;
        }
        if (inAgentStore && !kept[position].inAgentStore) {
            kept[position] = {
                item,
                inAgentStore
            };
        }
    }
    return kept.map((entry)=>entry.item);
}
export async function findSkillMdFilesRecursive(dir) {
    return await findFilesRecursive({
        rootDir: dir,
        includeFile: (filename)=>filename === "SKILL.md"
    });
}
async function readSkillFile(skillFilePath) {
    let content;
    try {
        content = await readText(skillFilePath);
    } catch (error3) {
        return {
            skillFilePath,
            error: skillReadError(error3)
        };
    }
    try {
        return {
            skillFilePath,
            content,
            parsed: grayMatter(content)
        };
    } catch (error3) {
        return {
            skillFilePath,
            error: skillFrontmatterError(error3)
        };
    }
}
export async function readAndParseSkillFileWithRealPath(skillFilePath) {
    const realSkillFilePath = await resolveRealPath(skillFilePath);
    return {
        ...await readSkillFile(skillFilePath),
        realSkillFilePath
    };
}
function extractEnvironments(parsed) {
    return parseStringListFrontmatter(parsed.data?.environments ?? parsed.data?.metadata?.environments) ?? [];
}
function extractDisabledEnvironments(parsed) {
    return parseStringListFrontmatter(parsed.data?.["disabled-environments"] ?? parsed.data?.metadata?.disabledEnvironments) ?? [];
}
function extractScopedTo(parsed) {
    return parseStringListFrontmatter(parsed.data?.metadata?.scopedTo ?? parsed.data?.["metadata.scopedTo"]) ?? [];
}
function parseStringListFrontmatter(value) {
    if (Array.isArray(value)) {
        const normalized = value.filter((entry)=>typeof entry === "string" && entry.length > 0);
        return normalized.length === 0 ? void 0 : normalized;
    }
    if (typeof value === "string") {
        const normalized = value.split(",").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
        return normalized.length === 0 ? void 0 : normalized;
    }
    return void 0;
}
function extractSurfaces(parsed) {
    const surfaces = parsed.data?.metadata?.surfaces;
    if (Array.isArray(surfaces)) {
        return surfaces;
    }
    if (typeof surfaces === "string") {
        return surfaces.split(",").map((s3)=>s3.trim()).filter(Boolean);
    }
    return [];
}
export function isExcludedBySurface(parsed, surface) {
    const surfaces = extractSurfaces(parsed);
    return surfaces.length > 0 && !surfaces.includes(surface);
}
export function truncateRuleOrSkillDescription(description3) {
    return description3.slice(0, MAX_RULE_OR_SKILL_DESCRIPTION_LENGTH);
}
function buildSkillFrontmatter(parsed) {
    return grayMatterFrontmatter(parsed);
}
export async function readAndParseSkillFile(skillFilePath) {
    const content = await readText(skillFilePath);
    const parsed = grayMatter(content);
    return {
        skillFilePath,
        content,
        parsed
    };
}
export function isAlwaysApplySkillParsed(parsed) {
    return parsed.data?.alwaysApply === true;
}
function disablesModelInvocation(parsed) {
    return parsed.data?.["disable-model-invocation"] === true;
}
export function buildCursorRuleFromParsed({ skillFilePath, content, parsed }) {
    const frontmatter = buildSkillFrontmatter(parsed);
    if (isAlwaysApplySkillParsed(parsed)) {
        return new CursorRule({
            fullPath: skillFilePath,
            content,
            frontmatter,
            type: new CursorRuleType({
                type: {
                    case: "global",
                    value: new CursorRuleTypeGlobal()
                }
            }),
            environments: extractEnvironments(parsed),
            disabledEnvironments: extractDisabledEnvironments(parsed),
            scopedTo: extractScopedTo(parsed)
        });
    }
    const description3 = typeof parsed.data?.description === "string" ? truncateRuleOrSkillDescription(parsed.data.description) : void 0;
    const parseError = skillDescriptionError(description3, disablesModelInvocation(parsed));
    if (parseError) {
        return new CursorRule({
            fullPath: skillFilePath,
            parseError,
            frontmatter,
            scopedTo: extractScopedTo(parsed),
            type: new CursorRuleType({
                type: {
                    case: "agentFetched",
                    value: new CursorRuleTypeAgentFetched()
                }
            })
        });
    }
    return new CursorRule({
        fullPath: skillFilePath,
        content,
        frontmatter,
        type: new CursorRuleType({
            type: {
                case: "agentFetched",
                value: new CursorRuleTypeAgentFetched({
                    description: description3
                })
            }
        }),
        environments: extractEnvironments(parsed),
        disabledEnvironments: extractDisabledEnvironments(parsed),
        scopedTo: extractScopedTo(parsed)
    });
}
export function buildAgentSkillFromParsed({ skillFilePath, content, parsed }) {
    const description3 = typeof parsed.data?.description === "string" ? truncateRuleOrSkillDescription(parsed.data.description) : "";
    const globs = parseGlobs(parsed.data?.paths ?? parsed.data?.globs);
    const disableModelInvocation = disablesModelInvocation(parsed);
    return new AgentSkill({
        fullPath: skillFilePath,
        content,
        description: description3,
        globs: globs ?? [],
        parseError: skillDescriptionError(description3, disableModelInvocation),
        environments: extractEnvironments(parsed),
        disabledEnvironments: extractDisabledEnvironments(parsed),
        scopedTo: extractScopedTo(parsed),
        disableModelInvocation
    });
}
function buildErrorCursorRule({ skillFilePath, errorMessage: errorMessage4 }) {
    return new CursorRule({
        fullPath: skillFilePath,
        parseError: errorMessage4,
        type: new CursorRuleType({
            type: {
                case: "agentFetched",
                value: new CursorRuleTypeAgentFetched()
            }
        })
    });
}
function buildErrorAgentSkill({ skillFilePath, errorMessage: errorMessage4 }) {
    return new AgentSkill({
        fullPath: skillFilePath,
        parseError: errorMessage4
    });
}
export function addSkillError({ rules, agentSkills, skillFilePath, errorMessage: errorMessage4 }) {
    rules.push(buildErrorCursorRule({
        skillFilePath,
        errorMessage: errorMessage4
    }));
    agentSkills.push(buildErrorAgentSkill({
        skillFilePath,
        errorMessage: errorMessage4
    }));
}
export function applyParsedSkillToLoaded(target, result, surface) {
    if ("error" in result) {
        target.realSkillFilePathsByFullPath.set(result.skillFilePath, result.realSkillFilePath);
        addSkillError({
            rules: target.rules,
            agentSkills: target.agentSkills,
            skillFilePath: result.skillFilePath,
            errorMessage: result.error
        });
        return;
    }
    if (isExcludedBySurface(result.parsed, surface)) {
        return;
    }
    target.realSkillFilePathsByFullPath.set(result.skillFilePath, result.realSkillFilePath);
    target.rules.push(buildCursorRuleFromParsed(result));
    if (!isAlwaysApplySkillParsed(result.parsed)) {
        target.agentSkills.push(buildAgentSkillFromParsed(result));
    }
}
export function cloneLoadedWithoutPaths(loaded, skillFilePaths) {
    const realSkillFilePathsByFullPath = new Map(loaded.realSkillFilePathsByFullPath);
    for (const skillFilePath of skillFilePaths){
        realSkillFilePathsByFullPath.delete(skillFilePath);
    }
    return {
        rules: loaded.rules.filter((rule)=>!skillFilePaths.has(rule.fullPath)),
        agentSkills: loaded.agentSkills.filter((skill)=>!skillFilePaths.has(skill.fullPath)),
        realSkillFilePathsByFullPath
    };
}
export function emptyAgentSkillsLoadResult() {
    return {
        rules: [],
        agentSkills: [],
        realSkillFilePathsByFullPath: new Map()
    };
}
export function orEmptyCatalog(what) {
    return (error3)=>{
        skillsLog("%s: %O", what, error3);
        return emptyAgentSkillsLoadResult();
    };
}
export function agentStoreCatalogKey(surface, roots) {
    return agentSkillsCatalogCacheKey({
        kind: "agent-store",
        surface,
        roots: [
            ...roots
        ].sort()
    });
}
export function haveSameRoots(a, b2) {
    return a.length === b2.length && a.every((root, index)=>root === b2[index]);
}
export function isUnderSkillRoot(fullPath, root) {
    const normalizedRoot = root.replace(/\\/g, "/").replace(/\/+$/, "");
    if (normalizedRoot === "") {
        return false;
    }
    return fullPath.replace(/\\/g, "/").startsWith(`${normalizedRoot}/`);
}
function parseCursorRulesScalarValue(rawValue) {
    const value = rawValue.trim();
    if (value === "true") return true;
    if (value === "false") return false;
    if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
        return value.slice(1, -1);
    }
    return value;
}
export function parseCursorRulesMdcContent(content) {
    const trimmedContent = content.trimStart();
    if (!trimmedContent.startsWith("---")) {
        return null;
    }
    const parts = trimmedContent.split("---").filter(Boolean);
    if (parts.length < 2) return null;
    const frontmatterText = parts[0].trim();
    const body = parts.slice(1).join("---").trim();
    const frontmatter = {};
    let currentParent = null;
    let parsingArrayKey = null;
    for (const rawLine of frontmatterText.split("\n")){
        const line = rawLine.replace(/\r$/, "");
        const arrayItemMatch = line.match(/^\s+-\s+(.*)$/);
        if (arrayItemMatch && parsingArrayKey) {
            let item = arrayItemMatch[1].trim();
            if (item.startsWith('"') && item.endsWith('"') || item.startsWith("'") && item.endsWith("'")) {
                item = item.slice(1, -1);
            }
            const arr = frontmatter[parsingArrayKey];
            if (Array.isArray(arr)) {
                arr.push(item);
            }
            continue;
        }
        const isIndented = line.startsWith("  ") || line.startsWith("	");
        if (currentParent && isIndented) {
            const trimmed = line.trim();
            const colonIndex = trimmed.indexOf(":");
            if (colonIndex === -1) continue;
            const childKey = trimmed.slice(0, colonIndex).trim();
            const value2 = trimmed.slice(colonIndex + 1).trim();
            const parsedValue2 = parseCursorRulesScalarValue(value2);
            const flatKey = `${currentParent}.${childKey}`;
            if (value2 === "") {
                frontmatter[flatKey] = [];
                parsingArrayKey = flatKey;
            } else if (flatKey === "metadata.environments" || flatKey === "metadata.disabledEnvironments" || flatKey === "metadata.scopedTo") {
                frontmatter[flatKey] = String(parsedValue2).split(",").map((s3)=>s3.trim()).filter(Boolean);
                parsingArrayKey = null;
            } else {
                frontmatter[flatKey] = parsedValue2;
                parsingArrayKey = null;
            }
            continue;
        }
        currentParent = null;
        parsingArrayKey = null;
        const i = line.indexOf(":");
        if (i === -1) continue;
        const key = line.slice(0, i).trim();
        const value = line.slice(i + 1).trim();
        if (value === "" && key === "metadata") {
            currentParent = key;
            continue;
        }
        if (key === "globs" && value === "") {
            frontmatter.globs = [];
            parsingArrayKey = "globs";
            continue;
        }
        const parsedValue = parseCursorRulesScalarValue(value);
        if (key === "metadata.environments" || key === "metadata.disabledEnvironments" || key === "metadata.scopedTo") {
            frontmatter[key] = String(parsedValue).split(",").map((s3)=>s3.trim()).filter(Boolean);
            continue;
        }
        frontmatter[key] = parsedValue;
    }
    const rawFrontmatter = `---
${frontmatterText}
---`;
    return {
        frontmatter,
        rawFrontmatter,
        body
    };
}
export function cursorRuleFromParsedMdc(rule) {
    let type2;
    if (rule.frontmatter.alwaysApply === true) {
        type2 = {
            case: "global",
            value: new CursorRuleTypeGlobal()
        };
    } else {
        const globs = parseGlobs(rule.frontmatter.globs);
        if (globs && globs.length > 0) {
            type2 = {
                case: "fileGlobbed",
                value: new CursorRuleTypeFileGlobs({
                    globs
                })
            };
        } else if (typeof rule.frontmatter.description === "string" && rule.frontmatter.description.trim().length > 0) {
            type2 = {
                case: "agentFetched",
                value: new CursorRuleTypeAgentFetched({
                    description: truncateRuleOrSkillDescription(rule.frontmatter.description)
                })
            };
        } else {
            type2 = {
                case: "manuallyAttached",
                value: new CursorRuleTypeManuallyAttached()
            };
        }
    }
    const envValue = rule.frontmatter["metadata.environments"];
    const environments = Array.isArray(envValue) ? envValue : [];
    const disabledEnvValue = rule.frontmatter["metadata.disabledEnvironments"];
    const disabledEnvironments = Array.isArray(disabledEnvValue) ? disabledEnvValue : [];
    const scopedToValue = rule.frontmatter["metadata.scopedTo"];
    const scopedTo = Array.isArray(scopedToValue) ? scopedToValue : [];
    return new CursorRule({
        fullPath: rule.path,
        content: rule.body,
        type: new CursorRuleType({
            type: type2
        }),
        environments,
        disabledEnvironments,
        scopedTo,
        frontmatter: rule.rawFrontmatter ?? ""
    });
}
export function mapTranslatedRuleToCursorRule(r) {
    let ruleType;
    switch(r.type){
        case "global":
            ruleType = new CursorRuleType({
                type: {
                    case: "global",
                    value: new CursorRuleTypeGlobal()
                }
            });
            break;
        case "fileGlobbed":
            ruleType = new CursorRuleType({
                type: {
                    case: "fileGlobbed",
                    value: new CursorRuleTypeFileGlobs({
                        globs: r.globs ?? []
                    })
                }
            });
            break;
        case "agentFetched":
            ruleType = new CursorRuleType({
                type: {
                    case: "agentFetched",
                    value: new CursorRuleTypeAgentFetched({
                        description: truncateRuleOrSkillDescription(r.description ?? "")
                    })
                }
            });
            break;
        case "manuallyAttached":
            ruleType = new CursorRuleType({
                type: {
                    case: "manuallyAttached",
                    value: new CursorRuleTypeManuallyAttached()
                }
            });
            break;
        default:
            {
                const _2 = r.type;
                ruleType = new CursorRuleType({
                    type: {
                        case: "manuallyAttached",
                        value: new CursorRuleTypeManuallyAttached()
                    }
                });
            }
    }
    return new CursorRule({
        fullPath: r.fullPath,
        content: r.content,
        type: ruleType,
        gitRemoteOrigin: r.gitRemoteOrigin,
        plugin: r.plugin,
        marketplace: r.marketplace,
        pluginId: r.pluginId,
        marketplaceId: r.marketplaceId,
        environments: r.environments ?? [],
        disabledEnvironments: r.disabledEnvironments ?? [],
        scopedTo: []
    });
}
function parseReadonly(raw) {
    const normalized = (raw ?? "").trim().toLowerCase();
    return normalized === "true" ? CustomSubagentPermissionMode.READONLY : CustomSubagentPermissionMode.DEFAULT;
}
function parseBoolean(raw) {
    return (raw ?? "").trim().toLowerCase() === "true";
}
export function parseSubagentFile(content) {
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/m);
    if (!frontmatterMatch) return null;
    const frontmatterText = frontmatterMatch[1] ?? "";
    const body = (frontmatterMatch[2] ?? "").trim();
    if (body.length === 0) return null;
    const frontmatter = {};
    for (const rawLine of frontmatterText.split("\n")){
        const line = rawLine.trim();
        if (line.length === 0 || line.startsWith("#")) continue;
        const delimiterIndex = line.indexOf(":");
        if (delimiterIndex === -1) continue;
        const key = line.slice(0, delimiterIndex).trim().toLowerCase();
        const value = line.slice(delimiterIndex + 1).trim();
        if (key.length === 0) continue;
        frontmatter[key] = value;
    }
    const name17 = frontmatter.name ?? "";
    const description3 = frontmatter.description;
    const model = frontmatter.model;
    const forceDefaultModel = parseBoolean(frontmatter["force-default-model"]);
    const permissionMode = parseReadonly(frontmatter.readonly);
    const isBackground = parseBoolean(frontmatter.background ?? frontmatter.is_background);
    const toolsValue = frontmatter.tools;
    const tools = toolsValue !== void 0 && toolsValue.length > 0 ? toolsValue.split(",").map((tool)=>tool.trim()).filter((tool)=>tool.length > 0) : [];
    return {
        name: name17,
        description: description3,
        tools,
        model,
        forceDefaultModel,
        prompt: body,
        permissionMode,
        isBackground
    };
}
function isMarkdownFile(filename) {
    const extension3 = (0, import_node_path41.extname)(filename).toLowerCase();
    return extension3 === ".md" || extension3 === ".mdc" || extension3 === ".markdown";
}
export function deriveNameFromFilename(filename) {
    const name17 = (0, import_node_path41.basename)(filename, (0, import_node_path41.extname)(filename));
    return name17.replace(/[\s_]+/g, "-");
}
export async function findSubagentFilesRecursive(rootDir, containmentRootDir) {
    return await findFilesRecursive({
        rootDir,
        includeFile: isMarkdownFile,
        containmentRootDir
    });
}
export function applySaveSnapshot(result, snapshot) {
    if (snapshot === void 0) {
        return result;
    }
    result.saveState = snapshot.saveState;
    result.canvasId = snapshot.canvasId;
    result.title = snapshot.title;
    result.saveDetail = snapshot.saveDetail;
    return result;
}
export function canvasDiagnosticsError(path64, error3) {
    return new CanvasDiagnosticsResult({
        result: {
            case: "error",
            value: new CanvasDiagnosticsError({
                path: path64,
                error: error3
            })
        }
    });
}
export function convertDiagnostic(diag) {
    return new Diagnostic({
        severity: convertSeverity(diag.severity),
        range: new Range2({
            start: new Position({
                line: diag.range.start.line + 1,
                column: diag.range.start.character + 1
            }),
            end: new Position({
                line: diag.range.end.line + 1,
                column: diag.range.end.character + 1
            })
        }),
        message: diag.message,
        source: "ts",
        code: diag.code ?? ""
    });
}
function convertSeverity(severity) {
    switch(severity){
        case 1:
            return DiagnosticSeverity.ERROR;
        case 2:
            return DiagnosticSeverity.WARNING;
        case 3:
            return DiagnosticSeverity.INFORMATION;
        case 4:
            return DiagnosticSeverity.HINT;
        default:
            return DiagnosticSeverity.UNSPECIFIED;
    }
}
export function parseDisplayNum(display) {
    const colonIndex = display.lastIndexOf(":");
    if (colonIndex === -1) {
        throw new Error(`Invalid X11 display string: ${display} (missing ':')`);
    }
    const afterColon = display.slice(colonIndex + 1);
    const numStr = afterColon.split(".")[0];
    const num = parseInt(numStr, 10);
    if (!Number.isFinite(num) || num < 0) {
        throw new Error(`Invalid X11 display number in: ${display} (parsed: ${numStr})`);
    }
    return num;
}
function parseXrandrOutput(output) {
    let width;
    let height;
    let refreshRate;
    for (const line of output.split("\n")){
        if (line.includes("*")) {
            const resMatch = line.trim().match(/^(\d+)x(\d+)/);
            if (resMatch) {
                width = parseInt(resMatch[1], 10);
                height = parseInt(resMatch[2], 10);
            }
            const rateMatch = line.match(/(\d+(?:\.\d+)?)\*(?:\+)?/);
            if (rateMatch) {
                const rate = parseFloat(rateMatch[1]);
                if (rate > 0 && rate <= 500) {
                    refreshRate = Math.round(rate);
                }
            }
            if (width && height) {
                break;
            }
        }
    }
    if (!width || !height) {
        const currentMatch = output.match(/current\s+(\d+)\s*x\s*(\d+)/i);
        if (currentMatch) {
            width = parseInt(currentMatch[1], 10);
            height = parseInt(currentMatch[2], 10);
        }
    }
    if (!width || !height) {
        throw new Error(`Could not detect display resolution from xrandr output.
Expected a line with '*' indicating active mode, or 'current WxH'.
xrandr output:
${output}`);
    }
    if (!refreshRate) {
        refreshRate = 60;
    }
    return {
        width,
        height,
        refreshRate
    };
}
function computerUseApiCanvas(args = {}) {
    const displayWidth = args.displayWidth ?? DEFAULT_COMPUTER_USE_DISPLAY_WIDTH;
    const displayHeight = args.displayHeight ?? DEFAULT_COMPUTER_USE_DISPLAY_HEIGHT;
    const width = args.apiWidth ?? DEFAULT_COMPUTER_USE_API_WIDTH;
    return {
        width,
        height: Math.round(width * displayHeight / displayWidth)
    };
}
function resolutionConfigForDisplay(displayWidth, displayHeight, apiWidth, apiHeight) {
    const api = computerUseApiCanvas({
        displayWidth,
        displayHeight,
        apiWidth
    });
    return {
        display: {
            width: displayWidth,
            height: displayHeight
        },
        api: {
            width: api.width,
            height: apiHeight ?? api.height
        }
    };
}
export async function detectDisplay(display) {
    const { stdout } = await spawnWorkload(execFileUtf8Async, "xrandr", [
        "--display",
        display
    ], {
        timeout: 5e3,
        encoding: "utf8"
    });
    const info2 = parseXrandrOutput(stdout);
    const resolution = resolutionConfigForDisplay(info2.width, info2.height);
    return {
        display: info2,
        resolution,
        resolutionString: `${info2.width}x${info2.height}`
    };
}
export function exec(command, args, options2) {
    return new Promise((resolve36, reject2)=>{
        options2?.signal?.throwIfAborted();
        const opts = {
            timeout: options2?.timeoutMs ?? DEFAULT_TIMEOUT_MS,
            env: options2?.env ? {
                ...process.env,
                ...options2.env
            } : void 0,
            signal: options2?.signal
        };
        spawnWorkload(execFileUtf82, command, args.map(String), {
            ...opts,
            encoding: "utf8"
        }, (error3, stdout)=>{
            if (error3) reject2(error3);
            else resolve36(stdout);
        });
    });
}
export function parseJSON(raw, description3) {
    try {
        return JSON.parse(raw);
    } catch  {
        throw new MacRPCProtocolError(`local-cua ${description3} is not valid JSON`);
    }
}
export function userFacingMacComputerUseError(error3) {
    if (error3 instanceof MacComputerUseRPCError && error3.userFacing && error3.message.trim().length > 0 && !macComputerUseErrorContainsPath(error3.message)) {
        return error3.message.trim();
    }
    return void 0;
}
export function isMacComputerUseCaptureBlocked(error3) {
    if (!(error3 instanceof MacComputerUseRPCError)) {
        return false;
    }
    return error3.tool === "computer_use_screenshot" || error3.code === "permission_required";
}
export function redactMacComputerUseError(error3) {
    if (typeof error3 === "object" && error3 !== null && "code" in error3 && typeof error3.code === "string") {
        return error3.code;
    }
    if (error3 instanceof Error) {
        if (macComputerUseErrorContainsPath(error3.message)) {
            return error3.name;
        }
        return error3.message.length > 0 ? `${error3.name}: ${error3.message}` : error3.name;
    }
    return "unknown";
}
function macComputerUseErrorContainsPath(message) {
    if (message.includes(os9.homedir())) {
        return true;
    }
    return message.includes("node_modules") || message.includes("Application Support") || /\.wasm\b/.test(message) || /(?:^|[\s'`"])(?:\/|\.{1,2}\/|[A-Za-z]:[\\/]|\\\\)/.test(message);
}
export function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
    } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
}
export function tinycolor(color, opts) {
    color = color ? color : "";
    opts = opts || {};
    if (color instanceof tinycolor) {
        return color;
    }
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;
    if (this._r < 1) this._r = Math.round(this._r);
    if (this._g < 1) this._g = Math.round(this._g);
    if (this._b < 1) this._b = Math.round(this._b);
    this._ok = rgb.ok;
}
function inputToRGB(color) {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    var a = 1;
    var s3 = null;
    var v2 = null;
    var l = null;
    var ok = false;
    var format2 = false;
    if (typeof color == "string") {
        color = stringInputToObject(color);
    }
    if (_typeof(color) == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s3 = convertToPercentage(color.s);
            v2 = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s3, v2);
            ok = true;
            format2 = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s3 = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s3, l);
            ok = true;
            format2 = "hsl";
        }
        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok,
        format: color.format || format2,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a
    };
}
function rgbToRgb(r, g2, b2) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g2, 255) * 255,
        b: bound01(b2, 255) * 255
    };
}
export function rgbToHsl(r, g2, b2) {
    r = bound01(r, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r, g2, b2), min = Math.min(r, g2, b2);
    var h, s3, l = (max + min) / 2;
    if (max == min) {
        h = s3 = 0;
    } else {
        var d = max - min;
        s3 = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g2 - b2) / d + (g2 < b2 ? 6 : 0);
                break;
            case g2:
                h = (b2 - r) / d + 2;
                break;
            case b2:
                h = (r - g2) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h,
        s: s3,
        l
    };
}
function hslToRgb(h, s3, l) {
    var r, g2, b2;
    h = bound01(h, 360);
    s3 = bound01(s3, 100);
    l = bound01(l, 100);
    function hue2rgb(p3, q3, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p3 + (q3 - p3) * 6 * t;
        if (t < 1 / 2) return q3;
        if (t < 2 / 3) return p3 + (q3 - p3) * (2 / 3 - t) * 6;
        return p3;
    }
    if (s3 === 0) {
        r = g2 = b2 = l;
    } else {
        var q2 = l < 0.5 ? l * (1 + s3) : l + s3 - l * s3;
        var p2 = 2 * l - q2;
        r = hue2rgb(p2, q2, h + 1 / 3);
        g2 = hue2rgb(p2, q2, h);
        b2 = hue2rgb(p2, q2, h - 1 / 3);
    }
    return {
        r: r * 255,
        g: g2 * 255,
        b: b2 * 255
    };
}
export function rgbToHsv(r, g2, b2) {
    r = bound01(r, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r, g2, b2), min = Math.min(r, g2, b2);
    var h, s3, v2 = max;
    var d = max - min;
    s3 = max === 0 ? 0 : d / max;
    if (max == min) {
        h = 0;
    } else {
        switch(max){
            case r:
                h = (g2 - b2) / d + (g2 < b2 ? 6 : 0);
                break;
            case g2:
                h = (b2 - r) / d + 2;
                break;
            case b2:
                h = (r - g2) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h,
        s: s3,
        v: v2
    };
}
function hsvToRgb(h, s3, v2) {
    h = bound01(h, 360) * 6;
    s3 = bound01(s3, 100);
    v2 = bound01(v2, 100);
    var i = Math.floor(h), f2 = h - i, p2 = v2 * (1 - s3), q2 = v2 * (1 - f2 * s3), t = v2 * (1 - (1 - f2) * s3), mod2 = i % 6, r = [
        v2,
        q2,
        p2,
        p2,
        t,
        v2
    ][mod2], g2 = [
        t,
        v2,
        v2,
        q2,
        p2,
        p2
    ][mod2], b2 = [
        p2,
        p2,
        t,
        v2,
        v2,
        q2
    ][mod2];
    return {
        r: r * 255,
        g: g2 * 255,
        b: b2 * 255
    };
}
export function rgbToHex(r, g2, b2, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16))
    ];
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
}
export function rgbaToHex(r, g2, b2, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16)),
        pad2(convertDecimalToHex(a))
    ];
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
}
export function rgbaToArgbHex(r, g2, b2, a) {
    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16))
    ];
    return hex.join("");
}
export function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}
export function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}
export function _greyscale(color) {
    return tinycolor(color).desaturate(100);
}
export function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}
export function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return tinycolor(rgb);
}
export function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}
export function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}
export function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}
export function polyad(color, number4) {
    if (isNaN(number4) || number4 <= 0) {
        throw new Error("Argument to polyad must be a positive number");
    }
    var hsl = tinycolor(color).toHsl();
    var result = [
        tinycolor(color)
    ];
    var step = 360 / number4;
    for(var i = 1; i < number4; i++){
        result.push(tinycolor({
            h: (hsl.h + i * step) % 360,
            s: hsl.s,
            l: hsl.l
        }));
    }
    return result;
}
export function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({
            h: (h + 72) % 360,
            s: hsl.s,
            l: hsl.l
        }),
        tinycolor({
            h: (h + 216) % 360,
            s: hsl.s,
            l: hsl.l
        })
    ];
}
export function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [
        tinycolor(color)
    ];
    for(hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;){
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}
export function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s3 = hsv.s, v2 = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while(results--){
        ret.push(tinycolor({
            h,
            s: s3,
            v: v2
        }));
        v2 = (v2 + modification) % 1;
    }
    return ret;
}
export function flip(o) {
    var flipped = {};
    for(var i in o){
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}
export function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
export function bound01(n, max) {
    if (isOnePointZero(n)) n = "100%";
    var processPercent = isPercentage(n);
    n = Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }
    if (Math.abs(n - max) < 1e-6) {
        return 1;
    }
    return n % max / parseFloat(max);
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") != -1;
}
function pad2(c) {
    return c.length == 1 ? "0" + c : "" + c;
}
export function convertToPercentage(n) {
    if (n <= 1) {
        n = n * 100 + "%";
    }
    return n;
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
    color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    } else if (color == "transparent") {
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    }
    var match2;
    if (match2 = matchers.rgb.exec(color)) {
        return {
            r: match2[1],
            g: match2[2],
            b: match2[3]
        };
    }
    if (match2 = matchers.rgba.exec(color)) {
        return {
            r: match2[1],
            g: match2[2],
            b: match2[3],
            a: match2[4]
        };
    }
    if (match2 = matchers.hsl.exec(color)) {
        return {
            h: match2[1],
            s: match2[2],
            l: match2[3]
        };
    }
    if (match2 = matchers.hsla.exec(color)) {
        return {
            h: match2[1],
            s: match2[2],
            l: match2[3],
            a: match2[4]
        };
    }
    if (match2 = matchers.hsv.exec(color)) {
        return {
            h: match2[1],
            s: match2[2],
            v: match2[3]
        };
    }
    if (match2 = matchers.hsva.exec(color)) {
        return {
            h: match2[1],
            s: match2[2],
            v: match2[3],
            a: match2[4]
        };
    }
    if (match2 = matchers.hex8.exec(color)) {
        return {
            r: parseIntFromHex(match2[1]),
            g: parseIntFromHex(match2[2]),
            b: parseIntFromHex(match2[3]),
            a: convertHexToDecimal(match2[4]),
            format: named ? "name" : "hex8"
        };
    }
    if (match2 = matchers.hex6.exec(color)) {
        return {
            r: parseIntFromHex(match2[1]),
            g: parseIntFromHex(match2[2]),
            b: parseIntFromHex(match2[3]),
            format: named ? "name" : "hex"
        };
    }
    if (match2 = matchers.hex4.exec(color)) {
        return {
            r: parseIntFromHex(match2[1] + "" + match2[1]),
            g: parseIntFromHex(match2[2] + "" + match2[2]),
            b: parseIntFromHex(match2[3] + "" + match2[3]),
            a: convertHexToDecimal(match2[4] + "" + match2[4]),
            format: named ? "name" : "hex8"
        };
    }
    if (match2 = matchers.hex3.exec(color)) {
        return {
            r: parseIntFromHex(match2[1] + "" + match2[1]),
            g: parseIntFromHex(match2[2] + "" + match2[2]),
            b: parseIntFromHex(match2[3] + "" + match2[3]),
            format: named ? "name" : "hex"
        };
    }
    return false;
}
export function validateWCAG2Parms(parms) {
    var level, size;
    parms = parms || {
        level: "AA",
        size: "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {
        level,
        size
    };
}
export function scan(image2, xArg, yArg, wArg, hArg, cbArg) {
    let x;
    let y;
    let w2;
    let h;
    let cb;
    if (typeof xArg === "function") {
        cb = xArg;
        x = 0;
        y = 0;
        w2 = image2.bitmap.width;
        h = image2.bitmap.height;
    } else {
        x = xArg;
        if (typeof yArg !== "number") throw new Error("y must be a number");
        y = yArg;
        if (typeof wArg !== "number") throw new Error("w must be a number");
        w2 = wArg;
        if (typeof hArg !== "number") throw new Error("h must be a number");
        h = hArg;
        if (typeof cbArg !== "function") throw new Error("cb must be a function");
        cb = cbArg;
    }
    x = Math.round(x);
    y = Math.round(y);
    w2 = Math.round(w2);
    h = Math.round(h);
    const bound = cb.bind(image2);
    for(let _y = y; _y < y + h; _y++){
        for(let _x = x; _x < x + w2; _x++){
            const idx = image2.bitmap.width * _y + _x << 2;
            bound(_x, _y, idx);
        }
    }
    return image2;
}
export function* scanIterator(image2, x, y, w2, h) {
    x = Math.round(x);
    y = Math.round(y);
    w2 = Math.round(w2);
    h = Math.round(h);
    for(let _y = y; _y < y + h; _y++){
        for(let _x = x; _x < x + w2; _x++){
            const idx = image2.bitmap.width * _y + _x << 2;
            yield {
                x: _x,
                y: _y,
                idx,
                image: image2
            };
        }
    }
}
export function limit255(n) {
    n = Math.max(n, 0);
    n = Math.min(n, 255);
    return n;
}
export function cssColorToHex(cssColor) {
    if (typeof cssColor === "number") {
        return cssColor;
    }
    return parseInt(tinycolor(cssColor).toHex8(), 16);
}
export { BashState, INSECURE_NONE_SANDBOX_POLICY, KnownShellExecutor, NaiveTerminalExecutor, OutputSuppressionController, PowerShellState, SHELL_OUTPUT_SUPPRESSED_NOTICE, SandboxUnsupportedError, ZshState, configureRipgrepPath, configureSandboxPrereqs2, createIgnoreMapping, createNaiveTerminalExecutor, getHardcodedAllowedReadPaths, getLastSandboxFailureReason, getPowerShellExecutable, getRipgrepBinaryPath, getSandboxPolicyType, getSandboxProjectDir, isAllowAllNetworkByPolicy, isHardcodedWriteProtected, isNetworkEnabledByPolicy, isRipgrepConfigured, isSandboxSupported, loadSandboxPolicyFromFileOrUndefined, mergeAdditionalReadPaths, mergeNetworkPolicies, mergePathsIntersection, mergePathsUnion, mergeReadBoundary, networkAllowAllPolicy, networkDisabledPolicy, parseSandboxPolicyJson, primeSandboxSupport, resolvePolicyPaths, resolveRipgrepFromPath, resolveSandboxPolicyForWorkspace, spawnInSandbox, spawnWithSignal, withConfiguredRipgrepEnv };

export var dist_exports2 = {};
Object.defineProperty(dist_exports2, "BashState", {
    enumerable: true,
    get: ()=>BashState
});
Object.defineProperty(dist_exports2, "INSECURE_NONE_SANDBOX_POLICY", {
    enumerable: true,
    get: ()=>INSECURE_NONE_SANDBOX_POLICY
});
Object.defineProperty(dist_exports2, "KnownShellExecutor", {
    enumerable: true,
    get: ()=>KnownShellExecutor
});
Object.defineProperty(dist_exports2, "NaiveTerminalExecutor", {
    enumerable: true,
    get: ()=>NaiveTerminalExecutor
});
Object.defineProperty(dist_exports2, "OutputSuppressionController", {
    enumerable: true,
    get: ()=>OutputSuppressionController
});
Object.defineProperty(dist_exports2, "PowerShellState", {
    enumerable: true,
    get: ()=>PowerShellState
});
Object.defineProperty(dist_exports2, "SHELL_OUTPUT_SUPPRESSED_NOTICE", {
    enumerable: true,
    get: ()=>SHELL_OUTPUT_SUPPRESSED_NOTICE
});
Object.defineProperty(dist_exports2, "SandboxUnsupportedError", {
    enumerable: true,
    get: ()=>SandboxUnsupportedError
});
Object.defineProperty(dist_exports2, "ZshState", {
    enumerable: true,
    get: ()=>ZshState
});
Object.defineProperty(dist_exports2, "configureRipgrepPath", {
    enumerable: true,
    get: ()=>configureRipgrepPath
});
Object.defineProperty(dist_exports2, "configureSandboxPrereqs", {
    enumerable: true,
    get: ()=>configureSandboxPrereqs2
});
Object.defineProperty(dist_exports2, "createDefaultTerminalExecutor", {
    enumerable: true,
    get: ()=>createDefaultTerminalExecutor
});
Object.defineProperty(dist_exports2, "createIgnoreMapping", {
    enumerable: true,
    get: ()=>createIgnoreMapping
});
Object.defineProperty(dist_exports2, "createNaiveTerminalExecutor", {
    enumerable: true,
    get: ()=>createNaiveTerminalExecutor
});
Object.defineProperty(dist_exports2, "getHardcodedAllowedReadPaths", {
    enumerable: true,
    get: ()=>getHardcodedAllowedReadPaths
});
Object.defineProperty(dist_exports2, "getLastSandboxFailureReason", {
    enumerable: true,
    get: ()=>getLastSandboxFailureReason
});
Object.defineProperty(dist_exports2, "getPowerShellExecutable", {
    enumerable: true,
    get: ()=>getPowerShellExecutable
});
Object.defineProperty(dist_exports2, "getRipgrepBinaryPath", {
    enumerable: true,
    get: ()=>getRipgrepBinaryPath
});
Object.defineProperty(dist_exports2, "getSandboxPolicyType", {
    enumerable: true,
    get: ()=>getSandboxPolicyType
});
Object.defineProperty(dist_exports2, "getSandboxProjectDir", {
    enumerable: true,
    get: ()=>getSandboxProjectDir
});
Object.defineProperty(dist_exports2, "getShellExecutablePath", {
    enumerable: true,
    get: ()=>getShellExecutablePath
});
Object.defineProperty(dist_exports2, "getSuggestedShell", {
    enumerable: true,
    get: ()=>getSuggestedShell
});
Object.defineProperty(dist_exports2, "isAllowAllNetworkByPolicy", {
    enumerable: true,
    get: ()=>isAllowAllNetworkByPolicy
});
Object.defineProperty(dist_exports2, "isHardcodedWriteProtected", {
    enumerable: true,
    get: ()=>isHardcodedWriteProtected
});
Object.defineProperty(dist_exports2, "isNetworkEnabledByPolicy", {
    enumerable: true,
    get: ()=>isNetworkEnabledByPolicy
});
Object.defineProperty(dist_exports2, "isRipgrepConfigured", {
    enumerable: true,
    get: ()=>isRipgrepConfigured
});
Object.defineProperty(dist_exports2, "isSandboxSupported", {
    enumerable: true,
    get: ()=>isSandboxSupported
});
Object.defineProperty(dist_exports2, "loadSandboxPolicyFromFileOrUndefined", {
    enumerable: true,
    get: ()=>loadSandboxPolicyFromFileOrUndefined
});
Object.defineProperty(dist_exports2, "mergeAdditionalReadPaths", {
    enumerable: true,
    get: ()=>mergeAdditionalReadPaths
});
Object.defineProperty(dist_exports2, "mergeNetworkPolicies", {
    enumerable: true,
    get: ()=>mergeNetworkPolicies
});
Object.defineProperty(dist_exports2, "mergePathsIntersection", {
    enumerable: true,
    get: ()=>mergePathsIntersection
});
Object.defineProperty(dist_exports2, "mergePathsUnion", {
    enumerable: true,
    get: ()=>mergePathsUnion
});
Object.defineProperty(dist_exports2, "mergeReadBoundary", {
    enumerable: true,
    get: ()=>mergeReadBoundary
});
Object.defineProperty(dist_exports2, "networkAllowAllPolicy", {
    enumerable: true,
    get: ()=>networkAllowAllPolicy
});
Object.defineProperty(dist_exports2, "networkDisabledPolicy", {
    enumerable: true,
    get: ()=>networkDisabledPolicy
});
Object.defineProperty(dist_exports2, "parseSandboxPolicyJson", {
    enumerable: true,
    get: ()=>parseSandboxPolicyJson
});
Object.defineProperty(dist_exports2, "primeSandboxSupport", {
    enumerable: true,
    get: ()=>primeSandboxSupport
});
Object.defineProperty(dist_exports2, "resolvePolicyPaths", {
    enumerable: true,
    get: ()=>resolvePolicyPaths
});
Object.defineProperty(dist_exports2, "resolveRipgrepFromPath", {
    enumerable: true,
    get: ()=>resolveRipgrepFromPath
});
Object.defineProperty(dist_exports2, "resolveSandboxPolicyForWorkspace", {
    enumerable: true,
    get: ()=>resolveSandboxPolicyForWorkspace
});
Object.defineProperty(dist_exports2, "spawnInSandbox", {
    enumerable: true,
    get: ()=>spawnInSandbox
});
Object.defineProperty(dist_exports2, "spawnWithSignal", {
    enumerable: true,
    get: ()=>spawnWithSignal
});
Object.defineProperty(dist_exports2, "withConfiguredRipgrepEnv", {
    enumerable: true,
    get: ()=>withConfiguredRipgrepEnv
});
