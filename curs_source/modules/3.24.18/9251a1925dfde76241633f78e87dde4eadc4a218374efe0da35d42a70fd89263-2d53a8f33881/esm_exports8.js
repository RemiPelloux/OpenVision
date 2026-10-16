import { isDeclaredReadOnlyMcpTool } from "./bidi_connect_exports.js";
import { dist_exports2 } from "./dist_exports2.js";
import { esm_exports } from "./esm_exports.js";
import { esm_exports2 } from "./esm_exports2.js";
import { esm_exports3 } from "./esm_exports3.js";
import { esm_exports4 } from "./esm_exports4.js";
import { esm_exports6 } from "./esm_exports6.js";
import { esm_exports7 } from "./esm_exports7.js";
import { AGENT_TOOLS_DIR, MAX_OUTPUT_FILE_SIZE, import_node_crypto12, import_node_path44 } from "./agent-exec/dist/agent-tools-file.js";
import { hookAbortSignals } from "./agent-exec/dist/hook-abort-signal.js";
import { MAC_WEBP_IMPORT_HOOK, MAC_WEBP_RUNTIME_HELPER, NodeModuleNs, createCurrentModuleRequire, import_node_path42, import_node_url3 } from "./local-exec/dist/computer-use/mac-webp.js";
import { INT32_MAX2, INT32_MIN2 } from "./local-exec/dist/int32.js";
import { CharCode, LineBounds } from "./local-exec/dist/line-scan.js";
import { CURSOR_MCP_PROVIDER_URL_PREFIX } from "./mcp-core/dist/admin-mcp-policy.js";
import { MAX_MCP_LIST_PAGES } from "./mcp-core/dist/collect-paginated-mcp-list.js";
import { MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES } from "./mcp-core/dist/http-logging.js";
import { EVENT_MESSAGES, REDACTED_LOG_VALUE, SENSITIVE_ERROR_SUMMARY_KEY_PATTERN, import_crypto } from "./mcp-core/dist/oauth-logging.js";
import { PROXY_MEDIATED_ALLOW_ALL2 } from "./mcp-core/dist/transport/mcp-sandbox-policy-fingerprint.js";
import { PROXY_MEDIATED_ALLOW_ALL } from "./mcp-core/dist/transport/mcp-sandbox-policy.js";
import { BIGINT_EIGHT2, BIGINT_SIXTEEN2, BIGINT_ZERO2, CIDR_ALLOWLIST_PATTERN_REGEX, CLIENT_METRIC_PROVIDER_HOSTS, HOSTNAME_ALLOWLIST_PATTERN_REGEX, IPV4_LITERAL_REGEX, IPV4_LOW_HEXTET_MASK2, IPV6_LITERAL_REGEX, MCP_NETWORK_CONTROLS_BLOCK_MESSAGE, VALUE_MEMO_LIMIT, WILDCARD_HOST_ALLOWLIST_PATTERN_REGEX, adminServerUrlParseMemo, hostIpAddressMemo, normalizedAllowlistPatternMemo, parsedDomainPatternMemo } from "./mcp-core/dist/transport/mcp-url-utils.js";
import { init_esm12 } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/index.js";
import { init_esm16 } from "./node_modules/.pnpm/@jimp+js-bmp@1.6.0/node_modules/@jimp/js-bmp/dist/esm/index.js";
import { init_esm17 } from "./node_modules/.pnpm/@jimp+js-gif@1.6.0/node_modules/@jimp/js-gif/dist/esm/index.js";
import { init_esm14 } from "./node_modules/.pnpm/@jimp+js-jpeg@1.6.0/node_modules/@jimp/js-jpeg/dist/esm/index.js";
import { init_esm13 } from "./node_modules/.pnpm/@jimp+js-png@1.6.0/node_modules/@jimp/js-png/dist/esm/index.js";
import { init_esm18 } from "./node_modules/.pnpm/@jimp+js-tiff@1.6.0/node_modules/@jimp/js-tiff/dist/esm/index.js";
import { ResizeStrategy } from "./node_modules/.pnpm/@jimp+plugin-resize@1.6.0/node_modules/@jimp/plugin-resize/dist/esm/constants.js";
import { init_esm19, methods } from "./node_modules/.pnpm/@jimp+plugin-resize@1.6.0/node_modules/@jimp/plugin-resize/dist/esm/index.js";
import { crypto4 } from "./node_modules/.pnpm/pkce-challenge@5.0.0/node_modules/pkce-challenge/dist/index.node.js";
import { globalConfig } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/core.js";
import { McpTextContent, McpToolResultContentItem } from "./proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { OutputLocation } from "./proto/dist/generated/agent/v1/utils_pb.js";
import { WriteArgs } from "./proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_dist13 } from "./shell-exec/dist/index.js";
async function createJimpInstance() {
    const [{ createJimp: createJimp2 }, { default: png2 }, { default: jpeg2 }, { default: bmp2, msBmp: msBmp2 }, { default: gif2 }, { default: tiff2 }, { methods: resizeMethods }] = await Promise.all([
        Promise.resolve().then(()=>(init_esm12(), esm_exports)),
        Promise.resolve().then(()=>(init_esm13(), esm_exports2)),
        Promise.resolve().then(()=>(init_esm14(), esm_exports3)),
        Promise.resolve().then(()=>(init_esm16(), esm_exports4)),
        Promise.resolve().then(()=>(init_esm17(), esm_exports6)),
        Promise.resolve().then(()=>(init_esm18(), esm_exports7)),
        Promise.resolve().then(()=>(init_esm19(), esm_exports8))
    ]);
    return createJimp2({
        formats: [
            png2,
            jpeg2,
            bmp2,
            msBmp2,
            gif2,
            tiff2
        ],
        plugins: [
            resizeMethods
        ]
    });
}
export function getMinimalJimp() {
    if (jimpPromise === void 0) {
        const initPromise = createJimpInstance().catch((error3)=>{
            if (jimpPromise === initPromise) {
                jimpPromise = void 0;
            }
            throw error3;
        });
        jimpPromise = initPromise;
    }
    return jimpPromise;
}
var jimpPromise;
export function getCreateRequire() {
    const ns2 = NodeModuleNs;
    const createRequire4 = ns2.createRequire ?? ns2.default?.createRequire;
    if (typeof createRequire4 !== "function") {
        throw new Error("node:module createRequire is unavailable");
    }
    return createRequire4;
}
function getNodeRequire() {
    nodeRequire ??= createCurrentModuleRequire();
    return nodeRequire;
}
function resolveFilename(id) {
    return getNodeRequire().resolve(id);
}
function stackFileNames() {
    const originalPrepareStackTrace = Error.prepareStackTrace;
    try {
        Error.prepareStackTrace = (_2, callSites)=>callSites;
        const stack = new Error().stack;
        if (!Array.isArray(stack)) {
            return [];
        }
        const names3 = [];
        for (const site of stack){
            const fileName = site.getFileName();
            if (typeof fileName === "string" && fileName.length > 0) {
                names3.push(fileName);
            }
        }
        return names3;
    } finally{
        Error.prepareStackTrace = originalPrepareStackTrace;
    }
}
function fileNameToPath(fileName) {
    return fileName.startsWith("file:") ? (0, import_node_url3.fileURLToPath)(fileName) : fileName;
}
function loadRuntimeImporter() {
    const candidates = [];
    const seen = new Set();
    const add2 = (helperPath)=>{
        if (!seen.has(helperPath)) {
            seen.add(helperPath);
            candidates.push(helperPath);
        }
    };
    for (const moduleFile of stackFileNames()){
        const dir = (0, import_node_path42.dirname)(fileNameToPath(moduleFile));
        add2((0, import_node_path42.join)(dir, MAC_WEBP_RUNTIME_HELPER));
        add2((0, import_node_path42.join)(dir, "..", "..", "src", "computer-use", MAC_WEBP_RUNTIME_HELPER));
    }
    if (typeof process.argv[1] === "string" && process.argv[1].length > 0) {
        add2((0, import_node_path42.join)((0, import_node_path42.dirname)(process.argv[1]), MAC_WEBP_RUNTIME_HELPER));
    }
    add2((0, import_node_path42.join)(process.cwd(), "src", "computer-use", MAC_WEBP_RUNTIME_HELPER));
    add2((0, import_node_path42.join)(process.cwd(), "computer-use", MAC_WEBP_RUNTIME_HELPER));
    try {
        const packageRoot = (0, import_node_path42.dirname)(getNodeRequire().resolve("@anysphere/local-exec/package.json"));
        add2((0, import_node_path42.join)(packageRoot, "src", "computer-use", MAC_WEBP_RUNTIME_HELPER));
        add2((0, import_node_path42.join)(packageRoot, "dist", "computer-use", MAC_WEBP_RUNTIME_HELPER));
    } catch  {}
    for (const helperPath of candidates){
        try {
            const loaded = getNodeRequire()(helperPath);
            if (typeof loaded.importFile === "function") {
                return loaded.importFile.bind(loaded);
            }
        } catch  {}
    }
    throw new Error("mac-webp runtime importer was not found next to the bundle");
}
function resolveRuntimeImporter() {
    const injected = globalThis[MAC_WEBP_IMPORT_HOOK];
    if (typeof injected === "function") {
        return injected;
    }
    runtimeImporter ??= loadRuntimeImporter();
    return runtimeImporter;
}
function importSpecifier(specifier) {
    return resolveRuntimeImporter()(specifier);
}
export function resolveJsquashFile(...parts) {
    return resolveFilename([
        "@jsquash",
        "webp",
        ...parts
    ].join("/"));
}
export async function importJsquash(...parts) {
    return await importSpecifier((0, import_node_url3.pathToFileURL)(resolveJsquashFile(...parts)).href);
}
var nodeRequire, runtimeImporter;
export function clampInt32(n) {
    if (Number.isNaN(n)) {
        return 0;
    }
    if (n < INT32_MIN2) {
        return INT32_MIN2;
    }
    if (n > INT32_MAX2) {
        return INT32_MAX2;
    }
    return n;
}
export function toOptionalDurationMsInt32(value) {
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
        return void 0;
    }
    return clampInt32(Math.trunc(value));
}
function nextRecordLineBounds(s3, start, out) {
    const n = s3.length;
    if (start >= n) {
        return false;
    }
    const nl = s3.indexOf("\n", start);
    if (nl !== -1) {
        for(let q2 = start; q2 < nl; q2++){
            if (s3.charCodeAt(q2) === CharCode.CR && q2 + 1 !== nl) {
                out.lineEnd = q2;
                out.nextStart = q2 + 1;
                return true;
            }
        }
        const crlf = nl > start && s3.charCodeAt(nl - 1) === CharCode.CR;
        out.lineEnd = crlf ? nl - 1 : nl;
        out.nextStart = nl + 1;
        return true;
    }
    const cr2 = s3.indexOf("\r", start);
    if (cr2 !== -1) {
        out.lineEnd = cr2;
        out.nextStart = cr2 + 1;
        return true;
    }
    out.lineEnd = n;
    out.nextStart = n;
    return true;
}
function isDashDashLine(s3, start, end) {
    return end - start === 2 && s3.charCodeAt(start) === CharCode.DASH && s3.charCodeAt(start + 1) === CharCode.DASH;
}
export function parseRipgrepContentOutput(stdout, clientLimitLines, ripgrepHardCuttoffLines) {
    const empty = {
        byFile: new Map(),
        totalLines: 0,
        totalMatchedLines: 0,
        totalFiles: 0,
        clientTruncated: false,
        ripgrepTruncated: false
    };
    if (stdout.trim() === "") {
        return empty;
    }
    const byFile = new Map();
    const allFiles = new Set();
    const bounds = new LineBounds();
    let totalMatchedLines = 0;
    let linesProcessed = 0;
    let totalLines = 0;
    let i = 0;
    while(nextRecordLineBounds(stdout, i, bounds)){
        const lineStart = i;
        const lineEnd = bounds.lineEnd;
        i = bounds.nextStart;
        totalLines++;
        if (isDashDashLine(stdout, lineStart, lineEnd)) {
            continue;
        }
        let nul = -1;
        for(let q2 = lineStart; q2 < lineEnd; q2++){
            if (stdout.charCodeAt(q2) === CharCode.NUL) {
                nul = q2;
                break;
            }
        }
        if (nul === -1) {
            continue;
        }
        let p2 = nul + 1;
        if (p2 >= lineEnd) {
            continue;
        }
        let lineNumber = 0;
        let digits = 0;
        while(p2 < lineEnd){
            const c = stdout.charCodeAt(p2);
            if (c < CharCode.ZERO || c > CharCode.NINE) {
                break;
            }
            lineNumber = lineNumber * 10 + (c - CharCode.ZERO);
            digits++;
            p2++;
        }
        if (digits === 0 || p2 >= lineEnd || !Number.isFinite(lineNumber)) {
            continue;
        }
        const sep14 = stdout.charCodeAt(p2);
        if (sep14 !== CharCode.COLON && sep14 !== CharCode.DASH) {
            continue;
        }
        const isContextLine = sep14 === CharCode.DASH;
        if (isContextLine === false) {
            totalMatchedLines++;
        }
        const filename = stdout.slice(lineStart, nul);
        if (!allFiles.has(filename)) {
            allFiles.add(filename);
        }
        if (linesProcessed >= clientLimitLines) {
            continue;
        }
        const content = stdout.slice(p2 + 1, lineEnd);
        let fileResults = byFile.get(filename);
        if (fileResults === void 0) {
            fileResults = {
                file: filename,
                matches: []
            };
            byFile.set(filename, fileResults);
        }
        fileResults.matches.push({
            lineNumber,
            content,
            isContextLine
        });
        linesProcessed++;
    }
    const result = {
        byFile,
        totalLines: clampInt32(totalLines),
        totalMatchedLines: clampInt32(totalMatchedLines),
        totalFiles: clampInt32(allFiles.size),
        clientTruncated: linesProcessed >= clientLimitLines,
        ripgrepTruncated: totalLines >= ripgrepHardCuttoffLines
    };
    return result;
}
export function parseRipgrepCountOutput(stdout, clientLimitLines, ripgrepHardCuttoffLines) {
    const trimmed = stdout.trim();
    if (trimmed === "") {
        return {
            counts: [],
            totalFiles: 0,
            totalMatches: 0,
            clientTruncated: false,
            ripgrepTruncated: false
        };
    }
    const allCounts = [];
    const bounds = new LineBounds();
    let i = 0;
    while(nextRecordLineBounds(trimmed, i, bounds)){
        const lineStart = i;
        const lineEnd = bounds.lineEnd;
        i = bounds.nextStart;
        if (lineEnd === lineStart) {
            continue;
        }
        const colon = trimmed.lastIndexOf(":", lineEnd - 1);
        if (colon < lineStart || colon === lineStart) {
            continue;
        }
        const countString = trimmed.slice(colon + 1, lineEnd).trim();
        const parsedCount = parseInt(countString, 10);
        if (!Number.isFinite(parsedCount)) {
            continue;
        }
        allCounts.push({
            file: trimmed.slice(lineStart, colon),
            count: parsedCount
        });
    }
    const totalFiles = allCounts.length;
    let totalMatches = 0;
    for(let c = 0; c < allCounts.length; c++){
        const entry = allCounts[c];
        if (entry !== void 0) {
            totalMatches += entry.count;
        }
    }
    const sliced = [];
    const keep = totalFiles < clientLimitLines ? totalFiles : clientLimitLines;
    for(let c = 0; c < keep; c++){
        const entry = allCounts[c];
        if (entry !== void 0) {
            sliced.push(entry);
        }
    }
    return {
        counts: sliced,
        totalFiles: clampInt32(totalFiles),
        totalMatches: clampInt32(totalMatches),
        clientTruncated: totalFiles > clientLimitLines,
        ripgrepTruncated: totalFiles >= ripgrepHardCuttoffLines
    };
}
export function parseRipgrepFilesOutput(stdout, clientLimitLines, ripgrepHardCuttoffLines) {
    const trimmed = stdout.trim();
    if (trimmed === "") {
        return {
            files: [],
            totalFiles: 0,
            clientTruncated: false,
            ripgrepTruncated: false
        };
    }
    const files = [];
    const bounds = new LineBounds();
    let totalFiles = 0;
    let i = 0;
    while(nextRecordLineBounds(trimmed, i, bounds)){
        const lineStart = i;
        const lineEnd = bounds.lineEnd;
        i = bounds.nextStart;
        if (totalFiles < clientLimitLines) {
            files.push(trimmed.slice(lineStart, lineEnd));
        }
        totalFiles++;
    }
    return {
        files,
        totalFiles: clampInt32(totalFiles),
        clientTruncated: totalFiles > clientLimitLines,
        ripgrepTruncated: totalFiles >= ripgrepHardCuttoffLines
    };
}
export async function materializeMcpTextOutput({ contentItems, thresholdBytes, write: write2 }) {
    const inlineTextItems = contentItems.filter((item)=>item.content.case === "text" && item.content.value.outputLocation === void 0);
    const aggregateText = inlineTextItems.map((item)=>item.content.case === "text" ? item.content.value.text : "").join("\n\n");
    if (thresholdBytes <= 0 || Buffer.byteLength(aggregateText, "utf8") <= thresholdBytes) {
        return contentItems;
    }
    const outputLocation = await write2(aggregateText);
    if (outputLocation === void 0) {
        return void 0;
    }
    const materializedItems = [];
    let emittedOutputLocation = false;
    for (const item of contentItems){
        const isInlineText = item.content.case === "text" && item.content.value.outputLocation === void 0;
        if (!isInlineText) {
            materializedItems.push(item);
            continue;
        }
        if (!emittedOutputLocation) {
            materializedItems.push(new McpToolResultContentItem({
                content: {
                    case: "text",
                    value: new McpTextContent({
                        text: "",
                        outputLocation
                    })
                }
            }));
            emittedOutputLocation = true;
        }
    }
    return materializedItems;
}
function truncateUtf8(text4, maxBytes) {
    const buffer = Buffer.from(text4, "utf8");
    if (buffer.byteLength <= maxBytes) {
        return text4;
    }
    const decoded = buffer.subarray(0, maxBytes).toString("utf8");
    return decoded.endsWith("\uFFFD") ? decoded.slice(0, -1) : decoded;
}
export async function writeToAgentToolsFile(ctx, writeExecutor, { content, projectDir, osPlatform, toolCallId, maxSize }) {
    const maxBytes = Math.min(maxSize ?? MAX_OUTPUT_FILE_SIZE, MAX_OUTPUT_FILE_SIZE);
    const contentToWrite = truncateUtf8(content, maxBytes);
    const joinFn = osPlatform === "win32" ? import_node_path44.default.win32.join : import_node_path44.default.posix.join;
    const filePath = joinFn(projectDir, AGENT_TOOLS_DIR, `${(0, import_node_crypto12.randomUUID)()}.txt`);
    const lineCount = contentToWrite.split("\n").length;
    const sizeBytes = Buffer.byteLength(contentToWrite, "utf8");
    const result = await writeExecutor.execute(ctx, new WriteArgs({
        path: filePath,
        fileText: contentToWrite,
        toolCallId
    }));
    switch(result.result.case){
        case "success":
            return new OutputLocation({
                filePath: result.result.value.path,
                sizeBytes: BigInt(sizeBytes),
                lineCount: BigInt(lineCount)
            });
        case "permissionDenied":
        case "noSpace":
        case "error":
        case "rejected":
        case void 0:
            return void 0;
        default:
            {
                const _exhaustive = result.result;
                throw new Error(`Unhandled write result case: ${_exhaustive}`);
            }
    }
}
function formatOutputLocationSize(sizeBytes) {
    const total = Number(sizeBytes);
    return total >= 1024 ? `${(total / 1024).toFixed(1)} KB` : `${total} bytes`;
}
export function describeOutputLocation(loc, opts) {
    const lead = opts?.leadText ?? "Content";
    return `${lead} written to file: ${loc.filePath}
Size: ${formatOutputLocationSize(loc.sizeBytes)}, ${loc.lineCount} lines`;
}
export function runWithHookAbortSignal(signal, fn) {
    return hookAbortSignals.run(signal, fn);
}
export function currentHookAbortSignal() {
    return hookAbortSignals.getStore();
}
function tryParseIpv42(input) {
    const parts = input.split(".");
    if (parts.length !== 4) {
        return void 0;
    }
    let value = BIGINT_ZERO2;
    for (const part of parts){
        if (!/^\d{1,3}$/.test(part)) {
            return void 0;
        }
        const octet = Number(part);
        if (!Number.isInteger(octet) || octet < 0 || octet > 255) {
            return void 0;
        }
        value = value << BIGINT_EIGHT2 | BigInt(octet);
    }
    return {
        version: 4,
        value
    };
}
function parseIpv6Groups2(part) {
    if (part.length === 0) {
        return [];
    }
    const groups = [];
    const segments = part.split(":");
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        if (segment.length === 0) {
            return void 0;
        }
        if (segment.includes(".")) {
            if (i !== segments.length - 1) {
                return void 0;
            }
            const ipv42 = tryParseIpv42(segment);
            if (!ipv42) {
                return void 0;
            }
            groups.push(Number(ipv42.value >> BIGINT_SIXTEEN2 & IPV4_LOW_HEXTET_MASK2));
            groups.push(Number(ipv42.value & IPV4_LOW_HEXTET_MASK2));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(segment)) {
            return void 0;
        }
        groups.push(Number.parseInt(segment, 16));
    }
    return groups;
}
function tryParseIpv62(input) {
    const normalized = normalizePatternValue2(input);
    if (normalized.length === 0 || normalized.includes(":::")) {
        return void 0;
    }
    const doubleColonIndex = normalized.indexOf("::");
    if (doubleColonIndex === -1) {
        const groups2 = parseIpv6Groups2(normalized);
        if (!groups2 || groups2.length !== 8) {
            return void 0;
        }
        return {
            version: 6,
            value: groups2.reduce((acc, group)=>acc << BIGINT_SIXTEEN2 | BigInt(group), BIGINT_ZERO2)
        };
    }
    if (normalized.indexOf("::", doubleColonIndex + 1) !== -1) {
        return void 0;
    }
    const leftPart = normalized.slice(0, doubleColonIndex);
    const rightPart = normalized.slice(doubleColonIndex + 2);
    const leftGroups = parseIpv6Groups2(leftPart);
    const rightGroups = parseIpv6Groups2(rightPart);
    if (!leftGroups || !rightGroups) {
        return void 0;
    }
    const totalGroups = leftGroups.length + rightGroups.length;
    if (totalGroups > 7) {
        return void 0;
    }
    const groups = [
        ...leftGroups,
        ...new Array(8 - totalGroups).fill(0),
        ...rightGroups
    ];
    return {
        version: 6,
        value: groups.reduce((acc, group)=>acc << BIGINT_SIXTEEN2 | BigInt(group), BIGINT_ZERO2)
    };
}
function tryParseIpAddress2(input) {
    return tryParseIpv42(input) ?? tryParseIpv62(input);
}
function computeParsedDomainPattern(pattern) {
    const normalizedPattern = normalizePatternValue2(pattern);
    if (normalizedPattern === "*") {
        return {
            kind: "matchAll"
        };
    }
    if (normalizedPattern.includes("/")) {
        const slashIndex = normalizedPattern.lastIndexOf("/");
        if (slashIndex <= 0 || slashIndex === normalizedPattern.length - 1) {
            return {
                kind: "invalidCidr"
            };
        }
        const network = tryParseIpAddress2(normalizedPattern.slice(0, slashIndex));
        if (!network) {
            return {
                kind: "invalidCidr"
            };
        }
        const prefixLength = Number(normalizedPattern.slice(slashIndex + 1));
        const totalBits = network.version === 4 ? 32 : 128;
        if (!Number.isInteger(prefixLength) || prefixLength < 0 || prefixLength > totalBits) {
            return {
                kind: "invalidCidr"
            };
        }
        const shift = BigInt(totalBits - prefixLength);
        return {
            kind: "cidr",
            version: network.version,
            shift,
            shiftedNetwork: network.value >> shift
        };
    }
    if (normalizedPattern.startsWith("*.")) {
        return {
            kind: "subdomainOrBase",
            suffix: normalizedPattern.slice(2)
        };
    }
    return {
        kind: "exact",
        value: normalizedPattern
    };
}
function getParsedDomainPattern(pattern) {
    const cached2 = parsedDomainPatternMemo.get(pattern);
    if (cached2) {
        return cached2;
    }
    if (parsedDomainPatternMemo.size >= VALUE_MEMO_LIMIT) {
        parsedDomainPatternMemo.clear();
    }
    const parsed = computeParsedDomainPattern(pattern);
    parsedDomainPatternMemo.set(pattern, parsed);
    return parsed;
}
function getHostIpAddress(normalizedHost) {
    if (hostIpAddressMemo.has(normalizedHost)) {
        return hostIpAddressMemo.get(normalizedHost);
    }
    if (hostIpAddressMemo.size >= VALUE_MEMO_LIMIT) {
        hostIpAddressMemo.clear();
    }
    const parsed = tryParseIpAddress2(normalizedHost);
    hostIpAddressMemo.set(normalizedHost, parsed);
    return parsed;
}
function matchesParsedDomainPattern(normalizedDomain, pattern) {
    switch(pattern.kind){
        case "matchAll":
            return true;
        case "invalidCidr":
            return false;
        case "cidr":
            {
                const hostIp = getHostIpAddress(normalizedDomain);
                return hostIp !== void 0 && hostIp.version === pattern.version && hostIp.value >> pattern.shift === pattern.shiftedNetwork;
            }
        case "subdomainOrBase":
            return normalizedDomain === pattern.suffix || normalizedDomain.endsWith(`.${pattern.suffix}`);
        case "exact":
            return normalizedDomain === pattern.value;
    }
}
function matchesDomainPattern2(domain, pattern) {
    return matchesParsedDomainPattern(normalizePatternValue2(domain), getParsedDomainPattern(pattern));
}
export function normalizeMcpServerUrl(rawServerUrl) {
    try {
        const parsed = new URL(rawServerUrl);
        const normalized = new URL(parsed.pathname, parsed.origin);
        normalized.search = parsed.search;
        if (normalized.pathname.endsWith("/") && normalized.pathname.length > 1) {
            normalized.pathname = normalized.pathname.slice(0, -1);
        }
        if (normalized.pathname === "/") {
            return normalized.origin + normalized.search;
        }
        return normalized.toString();
    } catch  {
        return rawServerUrl.toLowerCase().trim();
    }
}
function mcpProviderHostTag(serverUrl) {
    let hostname3;
    try {
        hostname3 = new URL(serverUrl).hostname.toLowerCase();
    } catch  {
        return "invalid";
    }
    const labels = hostname3.split(".").filter((label)=>label.length > 0);
    if (labels.length <= 2) {
        return labels.join(".") || "invalid";
    }
    return labels.slice(-2).join(".");
}
export function mcpClientMetricProviderHostTag(serverUrl) {
    if (serverUrl === void 0 || serverUrl.trim().length === 0) {
        return "unknown";
    }
    const host = mcpProviderHostTag(serverUrl);
    return CLIENT_METRIC_PROVIDER_HOSTS.has(host) ? host : "other";
}
function stripPortFromHostPattern(pattern) {
    const firstColonIndex = pattern.indexOf(":");
    if (firstColonIndex === -1) {
        return pattern;
    }
    const port = pattern.slice(firstColonIndex + 1);
    if (!/^\d+$/.test(port)) {
        return pattern;
    }
    return pattern.slice(0, firstColonIndex);
}
function hasEmbeddedWhitespace(value) {
    return /\s/.test(value);
}
function isValidHostnamePattern(pattern) {
    const normalizedPattern = normalizePatternValue2(pattern);
    return normalizedPattern.length > 0 && normalizedPattern.length <= 253 && HOSTNAME_ALLOWLIST_PATTERN_REGEX.test(normalizedPattern);
}
function isValidIpv6LiteralPattern(pattern) {
    const normalizedPattern = normalizePatternValue2(pattern);
    if (!IPV6_LITERAL_REGEX.test(normalizedPattern)) {
        return false;
    }
    try {
        new URL(`https://[${normalizedPattern}]`);
        return true;
    } catch  {
        return false;
    }
}
function isValidIpLiteralPattern(pattern) {
    const normalizedPattern = normalizePatternValue2(pattern);
    return IPV4_LITERAL_REGEX.test(normalizedPattern) || isValidIpv6LiteralPattern(normalizedPattern);
}
function isDefaultHttpPort(protocol, port) {
    return port === "" || protocol === "http:" && port === "80" || protocol === "https:" && port === "443";
}
function isValidCidrAllowlistPattern(pattern) {
    const normalizedPattern = normalizePatternValue2(pattern);
    if (!CIDR_ALLOWLIST_PATTERN_REGEX.test(normalizedPattern)) {
        return false;
    }
    const [network] = normalizedPattern.split("/");
    return network !== void 0 && matchesDomainPattern2(network, normalizedPattern);
}
function isValidExactUrlAllowlistHostname(hostname3) {
    const normalizedHostname = hostname3.toLowerCase();
    return !normalizedHostname.includes("*") && (isValidHostnamePattern(normalizedHostname) || isValidIpLiteralPattern(normalizedHostname));
}
function isValidUrlShapedAllowlistPattern(pattern) {
    try {
        const parsed = new URL(pattern);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
            return false;
        }
        if (parsed.hostname.length === 0 || parsed.username.length > 0 || parsed.password.length > 0) {
            return false;
        }
        if (parsed.hash !== "") {
            return false;
        }
        return isValidExactUrlAllowlistHostname(parsed.hostname);
    } catch  {
        return false;
    }
}
function buildCanonicalEndpointAllowlistPattern(parsed) {
    const normalized = new URL(parsed.pathname || "/", parsed.origin);
    normalized.search = parsed.search;
    if (normalized.pathname.endsWith("/") && normalized.pathname.length > 1) {
        normalized.pathname = normalized.pathname.slice(0, -1);
    }
    if (normalized.pathname === "/" && normalized.search === "") {
        const protocol2 = parsed.protocol.toLowerCase();
        const hostname4 = parsed.hostname.toLowerCase();
        let origin = `${protocol2}//${hostname4}`;
        if (!isDefaultHttpPort(protocol2, parsed.port)) {
            origin += `:${parsed.port}`;
        }
        return origin;
    }
    const protocol = parsed.protocol.toLowerCase();
    const hostname3 = parsed.hostname.toLowerCase();
    let authority = `${protocol}//${hostname3}`;
    if (!isDefaultHttpPort(protocol, parsed.port)) {
        authority += `:${parsed.port}`;
    }
    return `${authority}${normalized.pathname}${normalized.search}`;
}
function isValidNormalizedMcpAllowlistPattern(pattern) {
    if (pattern.includes("://")) {
        return isValidUrlShapedAllowlistPattern(pattern);
    }
    const normalizedPattern = normalizePatternValue2(pattern);
    if (normalizedPattern === "*") {
        return true;
    }
    if (WILDCARD_HOST_ALLOWLIST_PATTERN_REGEX.test(normalizedPattern)) {
        return true;
    }
    if (normalizedPattern.includes("/")) {
        return isValidCidrAllowlistPattern(normalizedPattern);
    }
    return isValidHostnamePattern(normalizedPattern) || isValidIpLiteralPattern(normalizedPattern);
}
function normalizeMcpNetworkAllowlistPattern(entry) {
    if (normalizedAllowlistPatternMemo.has(entry)) {
        return normalizedAllowlistPatternMemo.get(entry);
    }
    if (normalizedAllowlistPatternMemo.size >= VALUE_MEMO_LIMIT) {
        normalizedAllowlistPatternMemo.clear();
    }
    const normalized = computeNormalizedMcpNetworkAllowlistPattern(entry);
    normalizedAllowlistPatternMemo.set(entry, normalized);
    return normalized;
}
function computeNormalizedMcpNetworkAllowlistPattern(entry) {
    const rawValue = entry.trim();
    if (rawValue.length === 0) {
        return void 0;
    }
    const cidrSlashIndex = rawValue.lastIndexOf("/");
    if (!rawValue.includes("://") && cidrSlashIndex > 0 && /^\d+$/.test(rawValue.slice(cidrSlashIndex + 1).trim())) {
        const networkPart = normalizePatternValue2(rawValue.slice(0, cidrSlashIndex));
        const prefixPart = rawValue.slice(cidrSlashIndex + 1).trim();
        const candidate = `${networkPart}/${prefixPart}`;
        return isValidNormalizedMcpAllowlistPattern(candidate) ? candidate : void 0;
    }
    if (hasEmbeddedWhitespace(rawValue) || rawValue.includes("#") || rawValue.includes("@")) {
        return void 0;
    }
    const schemeIndex = rawValue.indexOf("://");
    if (schemeIndex !== -1) {
        const protocol = rawValue.slice(0, schemeIndex).toLowerCase();
        if (protocol !== "http" && protocol !== "https") {
            return void 0;
        }
        try {
            const parsed = new URL(rawValue);
            if (parsed.hostname.length === 0 || parsed.username.length > 0 || parsed.password.length > 0) {
                return void 0;
            }
            const hasExplicitPath = parsed.pathname !== "/" && parsed.pathname !== "";
            const hasQuery = parsed.search !== "";
            if (parsed.hostname.includes("*")) {
                return void 0;
            } else if (!hasExplicitPath && !hasQuery) {
                const canonical = buildCanonicalEndpointAllowlistPattern(parsed);
                if (!isValidNormalizedMcpAllowlistPattern(canonical)) {
                    return void 0;
                }
                return canonical;
            } else {
                const canonical = buildCanonicalEndpointAllowlistPattern(parsed);
                if (!isValidNormalizedMcpAllowlistPattern(canonical)) {
                    return void 0;
                }
                return canonical;
            }
        } catch  {
            return void 0;
        }
    } else if (rawValue.includes("/")) {
        return void 0;
    }
    const lowered = rawValue.trim().toLowerCase();
    const normalized = stripPortFromHostPattern(lowered);
    if (normalized.length === 0 || !isValidNormalizedMcpAllowlistPattern(normalized)) {
        return void 0;
    }
    if (normalized !== lowered && normalized === "*") {
        return void 0;
    }
    return normalized;
}
function matchesWildcardPattern(pattern, stringToMatch) {
    if (!pattern.includes("*")) {
        return pattern === stringToMatch;
    }
    const escapedPattern = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    const regexPattern = escapedPattern.replace(/\*/g, ".*");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(stringToMatch);
}
function matchesEndpointHostnamePattern(patternHostname, requestHostname) {
    return !patternHostname.includes("*") && normalizePatternValue2(patternHostname) === normalizePatternValue2(requestHostname);
}
function normalizeEndpointPathname(pathname) {
    if (pathname.endsWith("/") && pathname.length > 1) {
        return pathname.slice(0, -1);
    }
    return pathname;
}
function matchesEndpointPathnamePattern(patternPathname, requestPathname) {
    return matchesWildcardPattern(patternPathname, requestPathname) || matchesWildcardPattern(normalizeEndpointPathname(patternPathname), normalizeEndpointPathname(requestPathname));
}
function matchesEndpointSearchPattern(patternSearch, requestSearch, options2) {
    if (patternSearch === "") {
        return options2.allowRequestQueryWhenPatternOmitsQuery || requestSearch === "";
    }
    return matchesWildcardPattern(patternSearch, requestSearch);
}
function getOriginWideUrlPattern(pattern) {
    try {
        const parsed = new URL(pattern);
        if (parsed.username !== "" || parsed.password !== "" || parsed.pathname !== "/" || parsed.search !== "" || parsed.hash !== "") {
            return void 0;
        }
        return `${parsed.protocol}//${parsed.host}/*`;
    } catch  {
        return void 0;
    }
}
function matchesEndpointUrlPattern(pattern, requestUrl, options2) {
    const parsedRequestUrl = parseMcpNetworkRequestUrl(requestUrl);
    if (!parsedRequestUrl) {
        return false;
    }
    let parsedPattern;
    try {
        parsedPattern = new URL(pattern);
    } catch  {
        return false;
    }
    if (parsedPattern.username !== "" || parsedPattern.password !== "" || parsedRequestUrl.username !== "" || parsedRequestUrl.password !== "" || parsedPattern.protocol !== parsedRequestUrl.protocol || parsedPattern.port !== parsedRequestUrl.port) {
        return false;
    }
    if (!matchesEndpointHostnamePattern(parsedPattern.hostname, parsedRequestUrl.hostname)) {
        return false;
    }
    return matchesEndpointPathnamePattern(parsedPattern.pathname, parsedRequestUrl.pathname) && matchesEndpointSearchPattern(parsedPattern.search, parsedRequestUrl.search, options2);
}
function matchesMcpEndpointUrlPattern(pattern, requestUrl) {
    return matchesEndpointUrlPattern(pattern, requestUrl, {
        allowRequestQueryWhenPatternOmitsQuery: true
    });
}
function hasUnclosedIpv6Bracket(input) {
    const openIndex = input.indexOf("[");
    if (openIndex === -1) {
        return false;
    }
    return input.indexOf("]", openIndex) === -1;
}
function parseMcpNetworkRequestUrl(url2) {
    const trimmed = url2.trim();
    if (trimmed.length === 0 || hasEmbeddedWhitespace(trimmed)) {
        return void 0;
    }
    if (hasUnclosedIpv6Bracket(trimmed)) {
        return void 0;
    }
    const parsed = tryParseUrl2(trimmed);
    if (!parsed) {
        return void 0;
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        return void 0;
    }
    if (parsed.username !== "" || parsed.password !== "") {
        return void 0;
    }
    if (parsed.hostname.length === 0) {
        return void 0;
    }
    if (normalizePatternValue2(parsed.hostname).includes(":") && !trimmed.includes("[")) {
        return void 0;
    }
    if (trimmed.includes("[")) {
        const openIndex = trimmed.indexOf("[");
        const closeIndex = trimmed.indexOf("]", openIndex);
        if (closeIndex === -1) {
            return void 0;
        }
        const literal3 = trimmed.slice(openIndex + 1, closeIndex);
        if (normalizePatternValue2(parsed.hostname) !== normalizePatternValue2(literal3)) {
            return void 0;
        }
    }
    return parsed;
}
function matchesAdminServerUrlPattern(pattern, serverUrl) {
    if (matchesWildcardPattern(pattern, serverUrl)) {
        return true;
    }
    let parsedServerUrl;
    if (adminServerUrlParseMemo.has(serverUrl)) {
        parsedServerUrl = adminServerUrlParseMemo.get(serverUrl);
    } else {
        if (adminServerUrlParseMemo.size >= VALUE_MEMO_LIMIT) {
            adminServerUrlParseMemo.clear();
        }
        parsedServerUrl = tryParseUrl2(serverUrl);
        adminServerUrlParseMemo.set(serverUrl, parsedServerUrl);
    }
    if (!parsedServerUrl) {
        return false;
    }
    return matchesDomainPattern2(parsedServerUrl.hostname, pattern);
}
function matchesMcpAllowlistPattern(pattern, url2) {
    const parsedUrl = parseMcpNetworkRequestUrl(url2);
    if (!parsedUrl) {
        return false;
    }
    if (!pattern.includes("://")) {
        return matchesDomainPattern2(normalizePatternValue2(parsedUrl.hostname), pattern);
    }
    if (matchesMcpEndpointUrlPattern(pattern, url2)) {
        return true;
    }
    const originWidePattern = getOriginWideUrlPattern(pattern);
    return originWidePattern !== void 0 && matchesMcpEndpointUrlPattern(originWidePattern, url2);
}
function normalizeAllowlist(entries) {
    return (entries ?? []).flatMap((entry)=>{
        const normalized = normalizeMcpNetworkAllowlistPattern(entry);
        return normalized === void 0 ? [] : [
            normalized
        ];
    });
}
function normalizePatternValue2(value) {
    const normalized = value.trim().toLowerCase();
    if (normalized.startsWith("[") && normalized.endsWith("]")) {
        return normalized.slice(1, -1);
    }
    return normalized;
}
function tryParseUrl2(url2) {
    const trimmed = url2.trim();
    if (trimmed.length === 0) {
        return void 0;
    }
    const urlToParse = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
    try {
        return new URL(urlToParse);
    } catch  {
        return void 0;
    }
}
function getEffectiveMcpNetworkAllowlist(config2) {
    return normalizeAllowlist(config2.mcpNetworkAllowlist);
}
export function checkMcpNetworkUrl(url2, config2) {
    if (config2.enabled !== true) {
        return {
            allowed: true
        };
    }
    if (config2.mcpNetworkMode === "no_sandbox") {
        return {
            allowed: true
        };
    }
    if (!parseMcpNetworkRequestUrl(url2)) {
        return {
            allowed: false,
            message: config2.blockMessage ?? MCP_NETWORK_CONTROLS_BLOCK_MESSAGE
        };
    }
    const allowlist = getEffectiveMcpNetworkAllowlist(config2);
    if (allowlist.length > 0 && allowlist.some((pattern)=>matchesMcpAllowlistPattern(pattern, url2))) {
        return {
            allowed: true
        };
    }
    return {
        allowed: false,
        message: config2.blockMessage ?? MCP_NETWORK_CONTROLS_BLOCK_MESSAGE
    };
}
function parseMcpNetworkMode(value) {
    return value === "allow_all" || value === "allowlist" || value === "deny_all" || value === "no_sandbox" ? value : void 0;
}
function getConfiguredMcpAllowlistField(value) {
    const trimmedValue = value?.trim();
    return trimmedValue && trimmedValue.length > 0 ? trimmedValue : void 0;
}
function hasDenylistPathOrQueryWildcard(rawValue) {
    const schemeIndex = rawValue.indexOf("://");
    if (schemeIndex === -1) {
        return false;
    }
    const afterScheme = rawValue.slice(schemeIndex + "://".length);
    const slashIndex = afterScheme.indexOf("/");
    if (slashIndex === -1) {
        return afterScheme.includes("?");
    }
    return afterScheme.slice(slashIndex).includes("*");
}
function normalizeMcpNetworkDenylistPattern(serverUrl) {
    const rawValue = serverUrl.trim();
    if (rawValue.length === 0) {
        return void 0;
    }
    if (hasDenylistPathOrQueryWildcard(rawValue)) {
        const schemeIndex2 = rawValue.indexOf("://");
        if (schemeIndex2 !== -1) {
            const authority2 = rawValue.slice(schemeIndex2 + "://".length).split(/[/?#]/, 1)[0];
            if (authority2?.includes("*")) {
                const hostPattern2 = authority2.replace(/:\d+$/, "");
                const normalizedHost2 = normalizeMcpNetworkAllowlistPattern(hostPattern2);
                if (normalizedHost2 !== void 0) {
                    return normalizedHost2;
                }
            }
        }
        return void 0;
    }
    if (!rawValue.includes("://") && rawValue.includes("*") && rawValue !== "*" && !rawValue.startsWith("*.")) {
        return void 0;
    }
    const normalized = normalizeMcpNetworkAllowlistPattern(serverUrl);
    if (normalized !== void 0) {
        return normalized;
    }
    const schemeIndex = serverUrl.indexOf("://");
    if (schemeIndex === -1) {
        return void 0;
    }
    const protocol = serverUrl.slice(0, schemeIndex).toLowerCase();
    if (protocol !== "http" && protocol !== "https") {
        return void 0;
    }
    const authority = serverUrl.slice(schemeIndex + "://".length).split(/[/?#]/, 1)[0];
    if (authority === void 0 || authority.includes("@")) {
        return void 0;
    }
    const hostPattern = authority.replace(/:\d+$/, "");
    const normalizedHost = normalizeMcpNetworkAllowlistPattern(hostPattern);
    if (normalizedHost !== void 0) {
        return normalizedHost;
    }
    try {
        return normalizeMcpNetworkAllowlistPattern(new URL(serverUrl).hostname);
    } catch  {
        return void 0;
    }
}
function resolveMcpNetworkDenylistForUserExtensionServers(allowedMcpConfiguration) {
    if (allowedMcpConfiguration?.allowUserOverrideMcpServers !== true) {
        return void 0;
    }
    const denylist = (allowedMcpConfiguration.deniedMcpServers ?? []).flatMap((serverEntry)=>{
        const serverUrl = getConfiguredMcpAllowlistField(serverEntry.serverUrl);
        const normalized = serverUrl === void 0 ? void 0 : normalizeMcpNetworkDenylistPattern(serverUrl);
        return normalized === void 0 ? [] : [
            normalized
        ];
    });
    return denylist.length > 0 ? denylist : void 0;
}
function normalizeBuiltinServerIdentifier(value) {
    return getConfiguredMcpAllowlistField(value)?.toLowerCase();
}
function matchesAllowedMcpServerEntry(serverEntry, server) {
    const builtinRule = normalizeBuiltinServerIdentifier(serverEntry.builtinServer);
    const builtinServer = normalizeBuiltinServerIdentifier(server.builtinServer);
    if (builtinRule !== void 0 || builtinServer !== void 0) {
        return builtinRule !== void 0 && builtinRule === builtinServer;
    }
    const commandPattern = getConfiguredMcpAllowlistField(serverEntry.command);
    const serverUrlPattern = getConfiguredMcpAllowlistField(serverEntry.serverUrl);
    if (commandPattern === void 0 && serverUrlPattern === void 0) {
        return false;
    }
    const passesCommandPolicy = commandPattern === void 0 || server.command !== void 0 && matchesWildcardPattern(commandPattern, server.command);
    const passesServerUrlPolicy = serverUrlPattern === void 0 || server.url !== void 0 && matchesAdminServerUrlPattern(serverUrlPattern, server.url);
    return passesCommandPolicy && passesServerUrlPolicy;
}
function getMatchedAllowedMcpServer(allowedMcpServers, server) {
    return allowedMcpServers?.find((serverEntry)=>matchesAllowedMcpServerEntry(serverEntry, server));
}
function isAllowedUserExtensionCommandServer(allowedMcpConfiguration, matchedServer, server) {
    return server?.command !== void 0 && server.url === void 0 && matchedServer === void 0 && allowedMcpConfiguration?.allowUserOverrideMcpServers === true;
}
function shouldEnableMcpNetworkControlsConfigForServer({ allowedMcpConfiguration, matchedServer, server }) {
    if (server === void 0) {
        return (allowedMcpConfiguration?.allowedMcpServers?.length ?? 0) > 0;
    }
    if (matchedServer !== void 0) {
        return true;
    }
    return isAllowedUserExtensionCommandServer(allowedMcpConfiguration, matchedServer, server);
}
function resolveMcpNetworkAllowlistForMatchedServer(matchedServer, server, unmatchedServerAllowlist) {
    if (matchedServer === void 0) {
        return unmatchedServerAllowlist;
    }
    return [
        ...matchedServer.networkAllowlist ?? [],
        ...getConfiguredMcpAllowlistField(matchedServer.serverUrl) !== void 0 && server.url !== void 0 ? [
            server.url
        ] : []
    ];
}
function resolveMcpNetworkModeForMatchedCommandServer(matchedServer, server) {
    if (getConfiguredMcpAllowlistField(matchedServer?.command) === void 0 || server.command === void 0 || server.url !== void 0) {
        return void 0;
    }
    return parseMcpNetworkMode(matchedServer?.networkMode) ?? "no_sandbox";
}
export function resolveMcpNetworkControlsConfigFromAdminPolicy({ allowedMcpConfiguration, server, localAgentNetworkAllowlist, blockMessage, unmatchedServerAllowlist, aggregateManagedServerNetworkAllowlists = true, stdioPlatform, unsandboxUserExtensionStdio }) {
    const allowedMcpServers = allowedMcpConfiguration?.allowedMcpServers;
    const userExtensionMcpNetworkDenylist = resolveMcpNetworkDenylistForUserExtensionServers(allowedMcpConfiguration);
    const matchedServer = server === void 0 ? void 0 : getMatchedAllowedMcpServer(allowedMcpServers, server);
    const allowedUserExtensionCommandServer = isAllowedUserExtensionCommandServer(allowedMcpConfiguration, matchedServer, server);
    const enabled = shouldEnableMcpNetworkControlsConfigForServer({
        allowedMcpConfiguration,
        matchedServer,
        server
    }) || (server === void 0 ? userExtensionMcpNetworkDenylist !== void 0 : false);
    const mcpNetworkAllowlist = server === void 0 ? aggregateManagedServerNetworkAllowlists ? allowedMcpServers?.flatMap((serverEntry)=>serverEntry.networkAllowlist ?? []) : void 0 : allowedUserExtensionCommandServer ? [] : resolveMcpNetworkAllowlistForMatchedServer(matchedServer, server, unmatchedServerAllowlist);
    const isWindowsStdio = stdioPlatform === "win32";
    const gateAllowsUnsandbox = unsandboxUserExtensionStdio === true;
    const shouldUnsandboxUserExtensionStdio = allowedUserExtensionCommandServer && isWindowsStdio && gateAllowsUnsandbox;
    let mcpNetworkMode;
    if (server === void 0) {
        mcpNetworkMode = void 0;
    } else if (shouldUnsandboxUserExtensionStdio) {
        mcpNetworkMode = "no_sandbox";
    } else if (allowedUserExtensionCommandServer) {
        mcpNetworkMode = "allow_all";
    } else {
        mcpNetworkMode = resolveMcpNetworkModeForMatchedCommandServer(matchedServer, server);
    }
    const mcpNetworkDenylist = server === void 0 || allowedUserExtensionCommandServer ? userExtensionMcpNetworkDenylist : void 0;
    return {
        enabled,
        mcpNetworkAllowlist,
        ...mcpNetworkMode !== void 0 ? {
            mcpNetworkMode
        } : {},
        ...mcpNetworkDenylist !== void 0 ? {
            mcpNetworkDenylist
        } : {},
        ...localAgentNetworkAllowlist !== void 0 ? {
            localAgentNetworkAllowlist
        } : {},
        ...blockMessage !== void 0 ? {
            blockMessage
        } : {},
        ...shouldUnsandboxUserExtensionStdio ? {
            win32UserExtensionUnsandbox: true
        } : {}
    };
}
export function getStdioMcpSandboxConfig(networkControlsConfig) {
    if (networkControlsConfig?.enabled !== true) {
        return void 0;
    }
    if (networkControlsConfig.mcpNetworkMode === "no_sandbox") {
        return void 0;
    }
    return networkControlsConfig;
}
function isCursorInProcessMcpProviderServer(server) {
    return server.url?.startsWith(CURSOR_MCP_PROVIDER_URL_PREFIX) === true;
}
function normalizeCommandPattern(pattern) {
    const normalized = pattern?.trim();
    return normalized === void 0 || normalized.length === 0 ? void 0 : normalized;
}
function normalizeServerUrlPattern(pattern) {
    const normalized = pattern?.trim();
    return normalized === void 0 || normalized.length === 0 ? void 0 : normalized;
}
function matchesDeniedMcpServerEntry(server, deniedMcpServers, options2) {
    const matchesServerUrl = options2?.matchesServerUrlPattern ?? matchesAdminServerUrlPattern;
    return (deniedMcpServers ?? []).some((serverEntry)=>{
        const commandPattern = normalizeCommandPattern(serverEntry.command);
        const serverUrlPattern = normalizeServerUrlPattern(serverEntry.serverUrl);
        const hasCommandPattern = commandPattern !== void 0;
        const hasServerUrlPattern = serverUrlPattern !== void 0;
        if (!hasCommandPattern && !hasServerUrlPattern) {
            return false;
        }
        const passesCommandPolicy = commandPattern === void 0 || server.command !== void 0 && matchesWildcardPattern(commandPattern, server.command);
        const passesServerUrlPolicy = serverUrlPattern === void 0 || server.url !== void 0 && matchesServerUrl(serverUrlPattern, server.url);
        return passesCommandPolicy && passesServerUrlPolicy;
    });
}
function matchesExplicitAdminAllowlistEntry(server, allowedMcpServers, options2) {
    return allowedMcpServers.length > 0 && matchesConfiguredAllowedMcpServerEntry(server, allowedMcpServers, options2);
}
function matchesConfiguredAllowedMcpServerEntry(server, allowedMcpServers, options2) {
    const matchesServerUrl = options2?.matchesServerUrlPattern ?? matchesAdminServerUrlPattern;
    return allowedMcpServers.some((serverEntry)=>{
        const commandPattern = normalizeCommandPattern(serverEntry.command);
        const serverUrlPattern = normalizeServerUrlPattern(serverEntry.serverUrl);
        const hasCommandPattern = commandPattern !== void 0;
        const hasServerUrlPattern = serverUrlPattern !== void 0;
        if (!hasCommandPattern && !hasServerUrlPattern) {
            return false;
        }
        const passesCommandPolicy = commandPattern === void 0 || server.command !== void 0 && matchesWildcardPattern(commandPattern, server.command);
        const passesServerUrlPolicy = serverUrlPattern === void 0 || server.url !== void 0 && matchesServerUrl(serverUrlPattern, server.url);
        return passesCommandPolicy && passesServerUrlPolicy;
    });
}
export function isMcpServerAllowedByAdminPolicy(server, config2, options2) {
    if (config2 === void 0) {
        return true;
    }
    if (config2.disableAll === true) {
        return false;
    }
    if (isCursorInProcessMcpProviderServer(server)) {
        return true;
    }
    const allowedMcpServers = config2.allowedMcpServers ?? [];
    if (allowedMcpServers.length === 0 && config2.allowUserOverrideMcpServers !== true) {
        return true;
    }
    if (matchesExplicitAdminAllowlistEntry(server, allowedMcpServers, options2)) {
        return true;
    }
    if (config2.allowUserOverrideMcpServers === true) {
        return !matchesDeniedMcpServerEntry(server, config2.deniedMcpServers, options2);
    }
    return false;
}
function deduplicateStrings(values) {
    return [
        ...new Set(values)
    ];
}
function normalizeName(name17) {
    return name17.trim().toLowerCase();
}
function normalizeNames(names3) {
    return (names3 ?? []).map(normalizeName).filter((name17)=>name17.length > 0);
}
function isToolNameInAllowlist(name17, tools) {
    const normalized = normalizeName(name17);
    if (normalized.length === 0) {
        return false;
    }
    return tools.some((tool)=>normalizeName(tool) === normalized);
}
function inferAdminToolPolicyFromAllowlist({ mode, tools }) {
    const normalizedTools = normalizeNames(tools);
    const normalizedMode = mode === void 0 ? void 0 : normalizeName(mode);
    if (normalizedMode === "all") {
        return {
            mode: "all"
        };
    }
    if (normalizedMode === "reads") {
        return {
            mode: "reads"
        };
    }
    if (normalizedMode === "custom") {
        return normalizedTools.length > 0 ? {
            mode: "custom",
            tools: normalizedTools
        } : {
            mode: "all"
        };
    }
    return normalizedTools.length > 0 ? {
        mode: "custom",
        tools: normalizedTools
    } : {
        mode: "all"
    };
}
export function isMcpToolAllowedByAdminToolPolicy(policy, tool) {
    switch(policy.mode){
        case "all":
            return true;
        case "custom":
            return isToolNameInAllowlist(tool.name, policy.tools);
        case "reads":
            return isDeclaredReadOnlyMcpTool(tool.annotations);
        default:
            {
                const _exhaustive = policy;
                return _exhaustive;
            }
    }
}
function flattenAdminToolPolicy(serverName, policy) {
    switch(policy.mode){
        case "all":
            return [
                `${serverName}:*`
            ];
        case "custom":
            return policy.tools.map((tool)=>`${serverName}:${tool}`);
        case "reads":
            return [];
        default:
            {
                const _exhaustive = policy;
                return _exhaustive;
            }
    }
}
function resolvePerMcpToolAllowlist(allowedMcpServers) {
    return (allowedMcpServers ?? []).flatMap((serverEntry)=>{
        const serverName = serverEntry.name === void 0 ? "" : normalizeName(serverEntry.name);
        if (serverName.length === 0) {
            return [];
        }
        const policy = inferAdminToolPolicyFromAllowlist({
            mode: serverEntry.toolAllowlistMode,
            tools: serverEntry.toolAllowlist
        });
        return [
            {
                name: serverName,
                policy,
                flattened: flattenAdminToolPolicy(serverName, policy)
            }
        ];
    });
}
export function resolveAdminMcpToolAllowlistConfig({ autoRunControls, allowedMcpServers }) {
    const legacyAutoRunMcpToolAllowlist = autoRunControls?.enabled === true ? autoRunControls.mcpToolAllowlist ?? [] : [];
    const perServer = resolvePerMcpToolAllowlist(allowedMcpServers);
    return {
        tools: deduplicateStrings([
            ...perServer.flatMap((entry)=>[
                    ...entry.flattened
                ]),
            ...legacyAutoRunMcpToolAllowlist
        ]),
        policies: perServer.map((entry)=>({
                name: entry.name,
                policy: entry.policy
            }))
    };
}
export async function collectPaginatedMcpList(args) {
    const items = [];
    const seenCursors = new Set();
    let cursor;
    for(let pageCount = 1;; pageCount++){
        const page = await args.fetchPage(cursor);
        const pageItems = args.itemsOf(page);
        items.push(...pageItems);
        const nextCursor = args.nextCursorOf(page);
        if (!nextCursor || seenCursors.has(nextCursor)) {
            return items;
        }
        if (pageCount >= MAX_MCP_LIST_PAGES) {
            throw new Error(`MCP list did not end after ${MAX_MCP_LIST_PAGES} pages; refusing to keep paging`);
        }
        seenCursors.add(nextCursor);
        cursor = nextCursor;
    }
}
function compactLogMetadata(value) {
    return Object.fromEntries(Object.entries(value).filter(([, entry])=>entry !== void 0));
}
function snapshotUrlPartsForLog(url2) {
    try {
        const parsed = new URL(url2);
        return {
            host: parsed.host,
            origin: parsed.origin,
            pathname: parsed.pathname
        };
    } catch  {
        return {
            host: null,
            origin: null,
            pathname: null
        };
    }
}
function snapshotUrlForLog(url2, options2) {
    const parts = snapshotUrlPartsForLog(url2);
    const includePath = options2?.includePath !== false;
    return {
        host: parts.host,
        origin: parts.origin,
        path: includePath ? parts.pathname : null
    };
}
export function snapshotServerUrlForLog(url2, options2) {
    return snapshotUrlForLog(url2, options2);
}
export function buildOAuthTokensSnapshotForLog(tokens, options2) {
    const accessToken = tokens?.access_token;
    const accessTokenLen = typeof accessToken === "string" ? accessToken.length : 0;
    const refreshTokenPresent = Boolean(tokens?.refresh_token);
    const expiresInSec = typeof tokens?.expires_in === "number" && Number.isFinite(tokens.expires_in) ? tokens.expires_in : null;
    const expiresAtTimestamp = options2?.expiresInIsFresh && expiresInSec !== null ? Date.now() + Math.round(expiresInSec * 1e3) : null;
    const grantedScope = typeof tokens?.scope === "string" && tokens.scope.length > 0 ? tokens.scope : null;
    return {
        accessTokenLen,
        refreshTokenPresent,
        expiresAtTimestamp,
        grantedScope
    };
}
function hashMcpOAuthValueForLog(value) {
    if (!value) {
        return void 0;
    }
    return (0, import_crypto.createHash)("sha256").update(value).digest("hex").slice(0, 12);
}
function hashMcpOAuthStringArrayForLog(values) {
    if (!values || values.length === 0) {
        return void 0;
    }
    return hashMcpOAuthValueForLog(JSON.stringify([
        ...values
    ].sort()));
}
export function buildOAuthClientInformationSnapshotForLog(clientInformation) {
    return {
        clientIdHash: hashMcpOAuthValueForLog(clientInformation?.client_id),
        hasClientSecret: (clientInformation?.client_secret ?? "").length > 0,
        redirectUrisHash: hashMcpOAuthStringArrayForLog(clientInformation?.redirect_uris),
        redirectUriCount: clientInformation?.redirect_uris?.length ?? 0
    };
}
function classifyNetworkError(args) {
    const normalized = args.message?.toLowerCase();
    const normalizedCode = args.code?.toLowerCase();
    if (normalized?.includes("timed out") || normalized?.includes("timeout") || normalized?.includes("etimedout") || normalizedCode === "etimedout") {
        return "timeout";
    }
    if (normalized?.includes("enotfound") || normalized?.includes("eai_again") || normalized?.includes("dns") || normalizedCode === "enotfound" || normalizedCode === "eai_again") {
        return "dns";
    }
    if (normalized?.includes("certificate") || normalized?.includes("tls") || normalized?.includes("ssl")) {
        return "tls";
    }
    if (normalized?.includes("econnreset") || normalized?.includes("connection reset") || normalizedCode === "econnreset") {
        return "connection_reset";
    }
    if (normalized?.includes("econnrefused") || normalized?.includes("connection refused") || normalizedCode === "econnrefused") {
        return "connection_refused";
    }
    return void 0;
}
function readNestedRecordValue(value, path64) {
    let current = value;
    for (const key of path64){
        if (typeof current !== "object" || current === null || !(key in current)) {
            return void 0;
        }
        current = current[key];
    }
    return current;
}
function firstString(value, keys) {
    for (const key of keys){
        if (typeof readNestedRecordValue(value, key.split(".")) === "string") {
            return readNestedRecordValue(value, key.split("."));
        }
    }
    return void 0;
}
function readSdkOAuthErrorCode(error3) {
    if (!error3 || typeof error3 !== "object") {
        return void 0;
    }
    const errorCode3 = error3.errorCode;
    return typeof errorCode3 === "string" ? errorCode3 : void 0;
}
function firstNumber(value, keys) {
    for (const key of keys){
        const candidate = readNestedRecordValue(value, key.split("."));
        if (typeof candidate === "number" && Number.isFinite(candidate)) {
            return candidate;
        }
    }
    return void 0;
}
function parseHttpStatusFromErrorMessage(message) {
    if (!message) {
        return void 0;
    }
    const match2 = message.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i);
    const matchedStatus = match2?.[1] ?? match2?.[2] ?? match2?.[3];
    if (!matchedStatus) {
        return void 0;
    }
    const parsed = Number.parseInt(matchedStatus, 10);
    return Number.isNaN(parsed) ? void 0 : parsed;
}
function usefulErrorMessage(error3) {
    if (error3 instanceof Error) {
        const raw = error3.message;
        if (raw && raw !== error3.name) {
            return sanitizeErrorMessageForLog(raw);
        }
        return void 0;
    }
    if (error3 != null) {
        const raw = String(error3);
        return raw ? sanitizeErrorMessageForLog(raw) : void 0;
    }
    return void 0;
}
function readCause(error3) {
    if (!error3 || typeof error3 !== "object") {
        return void 0;
    }
    return error3.cause;
}
function buildCauseChainForLog(error3, maxDepth = 4) {
    const parts = [];
    let current = error3;
    for(let depth = 0; depth < maxDepth && current != null; depth++){
        if (current instanceof Error) {
            const message = usefulErrorMessage(current);
            parts.push(message ? `${current.name}: ${message}` : current.name);
            current = readCause(current);
            continue;
        }
        parts.push(sanitizeErrorMessageForLog(String(current)));
        break;
    }
    return parts.length > 1 ? parts.join(" > ") : void 0;
}
function isSensitiveErrorSummaryKey(key) {
    const normalized = key.toLowerCase();
    return normalized === "code" || normalized === "authorization" || normalized.includes("token") || normalized.includes("secret") || normalized.includes("password") || normalized.includes("assertion") || normalized.includes("verifier") || normalized.includes("challenge") || SENSITIVE_ERROR_SUMMARY_KEY_PATTERN.test(normalized);
}
function redactSensitiveText(value) {
    return value.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${REDACTED_LOG_VALUE}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${REDACTED_LOG_VALUE}`);
}
function truncateLogValue(value, maxLength = 256) {
    return value.length > maxLength ? `${value.slice(0, Math.max(0, maxLength - 3))}...` : value;
}
export function sanitizeErrorMessageForLog(value, options2) {
    return truncateLogValue(redactSensitiveText(value), options2?.maxLength);
}
function sanitizeStructuredValueForLog(value) {
    return sanitizeStructuredValue(value);
}
function sanitizeStructuredValue(value) {
    if (typeof value === "string") {
        return truncateLogValue(redactSensitiveText(value));
    }
    if (value === void 0) {
        return void 0;
    }
    try {
        const serialized = JSON.stringify(value, (key, nestedValue)=>{
            if (key && isSensitiveErrorSummaryKey(key)) {
                return REDACTED_LOG_VALUE;
            }
            if (typeof nestedValue === "string") {
                return redactSensitiveText(nestedValue);
            }
            return nestedValue;
        });
        if (!serialized) {
            return void 0;
        }
        return truncateLogValue(serialized);
    } catch  {
        return void 0;
    }
}
function extractResponseFromFetchError(error3) {
    if (!error3 || typeof error3 !== "object") {
        return void 0;
    }
    const candidates = [
        error3.response,
        error3.cause?.response
    ];
    for (const candidate of candidates){
        if (candidate && typeof candidate === "object" && "status" in candidate && typeof candidate.status === "number" && "headers" in candidate && typeof candidate.headers?.get === "function") {
            return candidate;
        }
    }
    return void 0;
}
export function getMcpOAuthErrorLogMetadata(error3) {
    const cause = readCause(error3);
    const errorName = error3 instanceof Error ? error3.name : error3 != null ? typeof error3 : void 0;
    const causeName = cause instanceof Error ? cause.name : void 0;
    const causeMessage = usefulErrorMessage(cause);
    const errorMessage4 = usefulErrorMessage(error3) ?? causeMessage;
    const systemErrorCode = firstString(error3, [
        "code",
        "cause.code"
    ]);
    const oauthErrorCode = readSdkOAuthErrorCode(error3) ?? readSdkOAuthErrorCode(cause) ?? firstString(error3, [
        "errorCode",
        "error",
        "cause.errorCode",
        "cause.error",
        "body.error",
        "response.body.error"
    ]);
    const httpStatus = firstNumber(error3, [
        "status",
        "statusCode",
        "response.status",
        "response.statusCode",
        "cause.status",
        "cause.statusCode",
        "cause.response.status",
        "cause.response.statusCode"
    ]) ?? parseHttpStatusFromErrorMessage(errorMessage4) ?? parseHttpStatusFromErrorMessage(causeMessage);
    const errorResponseSummary = sanitizeStructuredValue(readNestedRecordValue(error3, [
        "response",
        "body"
    ]) ?? readNestedRecordValue(error3, [
        "body"
    ]) ?? readNestedRecordValue(error3, [
        "data"
    ]) ?? readNestedRecordValue(error3, [
        "cause",
        "body"
    ]) ?? readNestedRecordValue(error3, [
        "cause",
        "response",
        "body"
    ]));
    const networkClassification = classifyNetworkError({
        message: errorMessage4,
        code: systemErrorCode
    });
    const sdkErrorKind = oauthErrorCode ? "oauth_error" : networkClassification ? "auth_transport_error" : errorMessage4 ? "generic_error" : void 0;
    return compactLogMetadata({
        errorName,
        errorMessage: errorMessage4,
        errorType: error3 != null ? typeof error3 : void 0,
        httpStatus,
        oauthErrorCode,
        errorResponseSummary,
        networkClassification,
        causeName,
        causeMessage,
        causeChain: buildCauseChainForLog(error3),
        sdkErrorKind
    });
}
export function emitMcpOAuthLifecycleLog(args) {
    const message = args.message ?? EVENT_MESSAGES[args.event];
    const metadata = {
        event: args.event,
        cursorMcp: {
            oauth: compactLogMetadata({
                ...args.metadata
            })
        }
    };
    const level = args.level ?? "info";
    if (level === "error") {
        args.logger.error?.(message, args.error, metadata);
        return;
    }
    if (level === "warn") {
        args.logger.warn?.(message, metadata);
        return;
    }
    if (level === "debug") {
        args.logger.debug?.(message, metadata);
        return;
    }
    args.logger.info?.(message, metadata);
}
function isMcpHttpRequestLike(value) {
    return typeof value === "object" && value !== null && "url" in value && typeof value.url === "string";
}
function resolveRequestUrl(input) {
    if (typeof input === "string") {
        return input;
    }
    if (input instanceof URL) {
        return input.toString();
    }
    return input.url;
}
function buildMergedHeaders(input, init) {
    const merged = new Headers(isMcpHttpRequestLike(input) ? input.headers : void 0);
    const extra = new Headers(init?.headers);
    extra.forEach((value, key)=>{
        merged.set(key, value);
    });
    return merged;
}
function getHeaderNames(headers) {
    const names3 = [];
    headers.forEach((_value, key)=>{
        names3.push(key);
    });
    return names3.sort();
}
function parseContentLength(value) {
    if (value === null) {
        return null;
    }
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
}
function summarizeBody(body, headers) {
    if (body === void 0 || body === null) {
        return {
            kind: "none",
            bytes: 0,
            contentLength: parseContentLength(headers.get("content-length"))
        };
    }
    if (typeof body === "string") {
        const bodyBytes = new TextEncoder().encode(body).length;
        return {
            kind: "text",
            bytes: bodyBytes,
            contentLength: parseContentLength(headers.get("content-length")) ?? bodyBytes
        };
    }
    if (body instanceof URLSearchParams) {
        const serialized = body.toString();
        const bodyBytes = new TextEncoder().encode(serialized).length;
        return {
            kind: "text",
            bytes: bodyBytes,
            contentLength: parseContentLength(headers.get("content-length")) ?? bodyBytes
        };
    }
    if (body instanceof Blob) {
        return {
            kind: "blob",
            bytes: body.size,
            contentLength: parseContentLength(headers.get("content-length")) ?? body.size
        };
    }
    if (body instanceof ArrayBuffer) {
        return {
            kind: "binary",
            bytes: body.byteLength,
            contentLength: parseContentLength(headers.get("content-length")) ?? body.byteLength
        };
    }
    if (ArrayBuffer.isView(body)) {
        return {
            kind: "binary",
            bytes: body.byteLength,
            contentLength: parseContentLength(headers.get("content-length")) ?? body.byteLength
        };
    }
    if (typeof body === "object" && body !== null) {
        if ("getReader" in body || Symbol.asyncIterator in body) {
            return {
                kind: "stream",
                bytes: null,
                contentLength: parseContentLength(headers.get("content-length"))
            };
        }
    }
    return {
        kind: "unknown",
        bytes: null,
        contentLength: parseContentLength(headers.get("content-length"))
    };
}
function extractFormValue(body, fieldName) {
    for (const pair of body.split("&")){
        const separatorIndex = pair.indexOf("=");
        const rawKey = separatorIndex >= 0 ? pair.slice(0, separatorIndex) : pair;
        let key;
        try {
            key = decodeURIComponent(rawKey.replaceAll("+", " "));
        } catch  {
            return void 0;
        }
        if (key !== fieldName) {
            continue;
        }
        const rawValue = separatorIndex >= 0 ? pair.slice(separatorIndex + 1) : "";
        try {
            return decodeURIComponent(rawValue.replaceAll("+", " "));
        } catch  {
            return void 0;
        }
    }
    return void 0;
}
function sanitizeOAuthGrantTypeForLog(grantType) {
    switch(grantType){
        case "authorization_code":
        case "refresh_token":
        case "client_credentials":
        case "urn:ietf:params:oauth:grant-type:jwt-bearer":
        case "urn:ietf:params:oauth:grant-type:token-exchange":
            return grantType;
        default:
            return "other";
    }
}
function extractOAuthGrantTypeForLog(contentType, body) {
    if (contentType === null || !contentType.toLowerCase().startsWith("application/x-www-form-urlencoded")) {
        return void 0;
    }
    const grantType = typeof body === "string" ? extractFormValue(body, "grant_type") : body instanceof URLSearchParams ? body.get("grant_type") ?? void 0 : void 0;
    return grantType ? sanitizeOAuthGrantTypeForLog(grantType) : void 0;
}
function buildMcpHttpRequestSnapshotForLog(args) {
    const { input, init } = args;
    const requestUrl = resolveRequestUrl(input);
    const urlSnapshot = snapshotUrlForLog(requestUrl);
    const headers = buildMergedHeaders(input, init);
    const headerNames = getHeaderNames(headers);
    const contentType = headers.get("content-type");
    const sessionIdHash = hashMcpOAuthValueForLog(headers.get("mcp-session-id") ?? void 0);
    const authorizationHeader = headers.get("authorization");
    const authorizationScheme = authorizationHeader ? authorizationHeader.split(/\s+/, 1)[0] ?? null : null;
    return {
        method: (init?.method ?? (isMcpHttpRequestLike(input) ? input.method : void 0) ?? "GET").toUpperCase(),
        url: urlSnapshot,
        headers: {
            names: headerNames,
            count: headerNames.length
        },
        contentType,
        body: summarizeBody(init?.body, headers),
        sessionIdHash: sessionIdHash ?? null,
        authorizationScheme
    };
}
function buildMcpHttpResponseSnapshotForLog(response, errorSummary) {
    const headerNames = getHeaderNames(response.headers);
    const contentLength = parseContentLength(response.headers.get("content-length"));
    return {
        status: response.status,
        ok: response.ok,
        headers: {
            names: headerNames,
            count: headerNames.length
        },
        contentType: response.headers.get("content-type"),
        body: {
            kind: response.body === null ? "none" : "stream",
            bytes: response.body === null ? 0 : contentLength,
            contentLength,
            ...errorSummary !== void 0 ? {
                errorSummary
            } : {}
        },
        sessionIdHash: hashMcpOAuthValueForLog(response.headers.get("mcp-session-id") ?? void 0) ?? null,
        wwwAuthenticateHash: hashMcpOAuthValueForLog(response.headers.get("www-authenticate") ?? void 0) ?? null,
        mcpProtocolVersion: response.headers.get("mcp-protocol-version") ?? null,
        requestId: response.headers.get("x-request-id") ?? null
    };
}
function buildErrorSnapshotForLog(errorMeta) {
    const result = {};
    if (errorMeta.errorName !== void 0) result.name = errorMeta.errorName;
    if (errorMeta.errorMessage !== void 0) result.message = errorMeta.errorMessage;
    if (errorMeta.errorType !== void 0) result.type = errorMeta.errorType;
    if (errorMeta.oauthErrorCode !== void 0) result.oauthErrorCode = errorMeta.oauthErrorCode;
    if (errorMeta.errorResponseSummary !== void 0) result.responseSummary = errorMeta.errorResponseSummary;
    if (errorMeta.networkClassification !== void 0) result.networkClassification = errorMeta.networkClassification;
    if (errorMeta.sdkErrorKind !== void 0) result.sdkErrorKind = errorMeta.sdkErrorKind;
    return result;
}
function buildMcpHttpExchangeSuccessMetadata(args) {
    const { input, init, response, durationMs: durationMs2, metadata, responseErrorSummary, oauthTokenErrorBodySummary } = args;
    const request3 = buildMcpHttpRequestSnapshotForLog({
        input,
        init
    });
    const oauthGrantType = extractOAuthGrantTypeForLog(request3.contentType, init?.body);
    return {
        event: "mcp_http_exchange",
        outcome: response.ok ? "success" : "http_error",
        durationMs: durationMs2,
        cursorMcp: {
            transport: {
                ...metadata,
                request: request3,
                response: buildMcpHttpResponseSnapshotForLog(response, responseErrorSummary),
                ...oauthGrantType !== void 0 ? {
                    oauth: {
                        grantType: oauthGrantType
                    }
                } : {},
                ...oauthTokenErrorBodySummary !== void 0 ? {
                    oauthTokenErrorBodySummary
                } : {}
            }
        }
    };
}
function isOAuthTokenEndpointRequest(input, init) {
    const request3 = buildMcpHttpRequestSnapshotForLog({
        input,
        init
    });
    if (extractOAuthGrantTypeForLog(request3.contentType, init?.body) !== void 0) {
        return true;
    }
    const path64 = request3.url.path?.toLowerCase() ?? "";
    return path64.endsWith("/token") || path64.includes("/oauth/token") || path64.includes("/connect/token");
}
async function readClonedResponseTextUpToMax(response, maxBytes) {
    try {
        const text4 = await response.clone().text();
        return text4.length > maxBytes ? text4.slice(0, maxBytes) : text4;
    } catch  {
        return void 0;
    }
}
function summarizeResponseBodyForLog(args) {
    const path64 = snapshotUrlForLog(resolveRequestUrl(args.input)).path;
    if (!isMcpEndpointPath(path64)) {
        return sanitizeErrorMessageForLog(args.rawText, {
            maxLength: MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES
        });
    }
    try {
        const parsed = JSON.parse(args.rawText);
        return typeof parsed === "object" && parsed !== null ? summarizeMcpErrorBody(parsed) : void 0;
    } catch  {
        return void 0;
    }
}
async function buildOAuthTokenEndpointErrorBodySummaryForLog(args) {
    if (!isOAuthTokenEndpointRequest(args.input, args.init)) {
        return void 0;
    }
    const rawText = await readClonedResponseTextUpToMax(args.response, MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES);
    if (rawText === void 0) {
        return void 0;
    }
    try {
        return sanitizeStructuredValueForLog(JSON.parse(rawText));
    } catch  {
        return sanitizeErrorMessageForLog(rawText, {
            maxLength: MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES
        });
    }
}
async function readHttpExchangeErrorSummariesForLog(args) {
    const responseErrorSummary = await readErrorResponseSummaryForLog(args.input, args.response);
    const oauthTokenErrorBodySummary = responseErrorSummary === void 0 ? await buildOAuthTokenEndpointErrorBodySummaryForLog({
        input: args.input,
        response: args.response,
        init: args.init
    }) : void 0;
    return {
        responseErrorSummary,
        oauthTokenErrorBodySummary
    };
}
function buildMcpHttpExchangeFailureMetadata(args) {
    const { input, init, error: error3, durationMs: durationMs2, metadata, responseFromError, responseErrorSummary, oauthTokenErrorBodySummary } = args;
    const errorMetadata = getMcpOAuthErrorLogMetadata(error3);
    const request3 = buildMcpHttpRequestSnapshotForLog({
        input,
        init
    });
    const oauthGrantType = extractOAuthGrantTypeForLog(request3.contentType, init?.body);
    const response = responseFromError !== void 0 ? buildMcpHttpResponseSnapshotForLog(responseFromError, responseErrorSummary) : {
        status: errorMetadata.httpStatus ?? null,
        ok: null,
        headers: {
            names: [],
            count: 0
        },
        contentType: null,
        body: {
            kind: "none",
            bytes: null,
            contentLength: null,
            ...responseErrorSummary !== void 0 ? {
                errorSummary: responseErrorSummary
            } : {}
        },
        requestId: null,
        sessionIdHash: null,
        wwwAuthenticateHash: null,
        mcpProtocolVersion: null
    };
    return {
        event: "mcp_http_exchange",
        outcome: "error",
        durationMs: durationMs2,
        cursorMcp: {
            transport: {
                ...metadata,
                request: request3,
                response,
                ...oauthGrantType !== void 0 ? {
                    oauth: {
                        grantType: oauthGrantType
                    }
                } : {},
                ...oauthTokenErrorBodySummary !== void 0 ? {
                    oauthTokenErrorBodySummary
                } : {},
                error: buildErrorSnapshotForLog(errorMetadata)
            }
        }
    };
}
function logMcpHttpExchangeSuccess(args) {
    const { logger: logger146, response } = args;
    const logMetadata = buildMcpHttpExchangeSuccessMetadata(args);
    if (response.ok) {
        logger146.info?.("MCP HTTP exchange completed", logMetadata);
    } else if (isUnauthenticatedAuthChallenge({
        response,
        request: logMetadata.cursorMcp.transport.request,
        input: args.input,
        init: args.init
    })) {
        logger146.debug?.("MCP HTTP exchange completed", logMetadata);
    } else {
        logger146.warn?.("MCP HTTP exchange completed", logMetadata);
    }
}
function isUnauthenticatedAuthChallenge(args) {
    return args.response.status === 401 && args.request.authorizationScheme === null && args.response.headers.has("www-authenticate") && !isOAuthTokenEndpointRequest(args.input, args.init);
}
function logMcpHttpExchangeFailure(args) {
    const { logger: logger146 } = args;
    logger146.warn?.("MCP HTTP exchange failed", buildMcpHttpExchangeFailureMetadata(args));
}
function isMcpEndpointPath(path64) {
    return path64 === "/mcp" || path64?.endsWith("/mcp") === true;
}
function summarizeMcpErrorBody(parsed) {
    const error3 = parsed.error;
    if (typeof error3 === "string") {
        return JSON.stringify({
            error: error3
        });
    }
    if (typeof error3 !== "object" || error3 === null) {
        return void 0;
    }
    const errorRecord = error3;
    const code = typeof errorRecord.code === "number" || typeof errorRecord.code === "string" ? errorRecord.code : void 0;
    const message = typeof errorRecord.message === "string" ? sanitizeErrorMessageForLog(errorRecord.message, {
        maxLength: MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES
    }) : void 0;
    if (code === void 0 && message === void 0) {
        return void 0;
    }
    return JSON.stringify({
        ...code !== void 0 ? {
            code
        } : {},
        ...message !== void 0 ? {
            message
        } : {}
    });
}
async function readErrorResponseSummaryForLog(input, response) {
    try {
        if (response.ok) {
            return void 0;
        }
        const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
        if (!contentType.includes("json") && !contentType.includes("text")) {
            return void 0;
        }
        const rawText = await readClonedResponseTextUpToMax(response, MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES);
        if (rawText === void 0) {
            return void 0;
        }
        return summarizeResponseBodyForLog({
            input,
            rawText
        });
    } catch  {
        return void 0;
    }
}
function safelyLogExchange(action, logger146, phase) {
    try {
        action();
    } catch  {
        logger146.warn?.("MCP HTTP exchange logging failed", {
            event: "mcp_http_exchange_logging_failure",
            phase
        });
    }
}
export function createLoggedMcpHttpFetch(options2) {
    const { fetch: fetch2, logger: logger146, metadata, logSuccessfulExchanges = true } = options2;
    return async (input, init)=>{
        const startedAtMs = Date.now();
        try {
            const response = await fetch2(input, init);
            const { responseErrorSummary, oauthTokenErrorBodySummary } = response.ok ? {} : await readHttpExchangeErrorSummariesForLog({
                input,
                init,
                response
            });
            if (logSuccessfulExchanges || !response.ok) {
                safelyLogExchange(()=>{
                    logMcpHttpExchangeSuccess({
                        logger: logger146,
                        input,
                        init,
                        response,
                        durationMs: Date.now() - startedAtMs,
                        metadata,
                        responseErrorSummary,
                        oauthTokenErrorBodySummary
                    });
                }, logger146, "success");
            }
            return response;
        } catch (error3) {
            const responseFromError = extractResponseFromFetchError(error3);
            const { responseErrorSummary, oauthTokenErrorBodySummary } = responseFromError ? await readHttpExchangeErrorSummariesForLog({
                input,
                init,
                response: responseFromError
            }) : {};
            safelyLogExchange(()=>{
                logMcpHttpExchangeFailure({
                    logger: logger146,
                    input,
                    init,
                    error: error3,
                    durationMs: Date.now() - startedAtMs,
                    metadata,
                    responseFromError,
                    responseErrorSummary,
                    oauthTokenErrorBodySummary
                });
            }, logger146, "failure");
            throw error3;
        }
    };
}
function normalizeNetworkList(entries) {
    const configuredEntries = (entries ?? []).filter((entry)=>entry.trim().length > 0);
    const normalizedEntries = configuredEntries.flatMap((entry)=>{
        const normalized = normalizeMcpNetworkAllowlistPattern(entry);
        return normalized === void 0 ? [] : [
            normalized
        ];
    });
    return {
        hasConfiguredEntries: configuredEntries.length > 0,
        hasInvalidEntries: normalizedEntries.length !== configuredEntries.length,
        entries: normalizedEntries
    };
}
function getSandboxAllowlistEntries(allowlist) {
    return allowlist.entries.includes("*") ? [
        ...PROXY_MEDIATED_ALLOW_ALL
    ] : allowlist.entries;
}
function buildMcpNetworkPolicy(config2) {
    const allowlist = normalizeNetworkList(config2.mcpNetworkAllowlist);
    const denylist = normalizeNetworkList(config2.mcpNetworkDenylist);
    const mode = config2.mcpNetworkMode;
    if (mode === "deny_all" || denylist.entries.includes("*") || denylist.hasInvalidEntries) {
        return {
            version: 1,
            default: "deny"
        };
    }
    if (mode === "allow_all") {
        return {
            version: 1,
            default: "deny",
            allow: [
                ...PROXY_MEDIATED_ALLOW_ALL
            ],
            ...denylist.entries.length > 0 ? {
                deny: denylist.entries
            } : {}
        };
    }
    if (mode === "allowlist" || allowlist.hasConfiguredEntries) {
        const sandboxAllowlist = getSandboxAllowlistEntries(allowlist);
        return sandboxAllowlist.length > 0 ? {
            version: 1,
            default: "deny",
            allow: sandboxAllowlist,
            ...denylist.entries.length > 0 ? {
                deny: denylist.entries
            } : {}
        } : {
            version: 1,
            default: "deny"
        };
    }
    return {
        version: 1,
        default: "deny",
        allow: [
            ...PROXY_MEDIATED_ALLOW_ALL
        ],
        ...denylist.entries.length > 0 ? {
            deny: denylist.entries
        } : {}
    };
}
export async function buildMcpSandboxPolicy(config2, workspaceDir) {
    const { resolveSandboxPolicyForWorkspace: resolveSandboxPolicyForWorkspace2 } = await Promise.resolve().then(()=>(init_dist13(), dist_exports2));
    const mcpNetworkPolicy = {
        type: "workspace_readwrite",
        sandboxWorkspaceRoot: workspaceDir,
        networkPolicy: buildMcpNetworkPolicy(config2),
        networkPolicyStrict: true
    };
    const { policy } = await resolveSandboxPolicyForWorkspace2(workspaceDir, {
        perUser: mcpNetworkPolicy
    });
    return policy;
}
function hasConfiguredNetworkAllowlist(config2) {
    return (config2.mcpNetworkAllowlist ?? []).some((entry)=>entry.trim().length > 0);
}
function normalizeNetworkListForFingerprint(entries) {
    const configuredEntries = (entries ?? []).filter((entry)=>entry.trim().length > 0);
    const normalizedEntries = configuredEntries.flatMap((entry)=>{
        const normalized = normalizeMcpNetworkAllowlistPattern(entry);
        return normalized === void 0 ? [] : [
            normalized
        ];
    });
    return {
        hasInvalidEntries: normalizedEntries.length !== configuredEntries.length,
        entries: normalizedEntries
    };
}
function getSandboxAllowlistFingerprintEntries(config2) {
    if (config2.mcpNetworkMode === "allow_all") {
        return [
            ...PROXY_MEDIATED_ALLOW_ALL2
        ];
    }
    const allowlist = normalizeNetworkListForFingerprint(config2.mcpNetworkAllowlist);
    if (config2.mcpNetworkMode === "allowlist") {
        return allowlist.entries.includes("*") ? [
            ...PROXY_MEDIATED_ALLOW_ALL2
        ] : allowlist.entries;
    }
    if (!hasConfiguredNetworkAllowlist(config2)) {
        return [
            ...PROXY_MEDIATED_ALLOW_ALL2
        ];
    }
    const effectiveAllowlist = getEffectiveMcpNetworkAllowlist(config2);
    return effectiveAllowlist.includes("*") ? [
        ...PROXY_MEDIATED_ALLOW_ALL2
    ] : effectiveAllowlist;
}
export function computeMcpSandboxPolicyFingerprint(config2) {
    const enabled = config2.enabled === true;
    const denylist = normalizeNetworkListForFingerprint(config2.mcpNetworkDenylist);
    const denyAll = config2.mcpNetworkMode === "deny_all" || denylist.entries.includes("*") || denylist.hasInvalidEntries;
    const allow = enabled ? getSandboxAllowlistFingerprintEntries(config2) : [];
    const deny = enabled ? denyAll ? [
        "*"
    ] : denylist.entries : [];
    return JSON.stringify({
        enabled,
        mode: config2.mcpNetworkMode,
        allow: denyAll ? [] : allow,
        deny
    });
}
export function isTimeoutErrorMessage(message) {
    return /\b(timeout|timed out|deadline exceeded)\b/i.test(message);
}
async function getRandomValues(size) {
    return (await crypto4).getRandomValues(new Uint8Array(size));
}
async function random(size) {
    const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
    let result = "";
    const randomUints = await getRandomValues(size);
    for(let i = 0; i < size; i++){
        const randomIndex = randomUints[i] % mask.length;
        result += mask[randomIndex];
    }
    return result;
}
async function generateVerifier(length) {
    return await random(length);
}
async function generateChallenge(code_verifier) {
    const buffer = await (await crypto4).subtle.digest("SHA-256", new TextEncoder().encode(code_verifier));
    return btoa(String.fromCharCode(...new Uint8Array(buffer))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
export async function pkceChallenge(length) {
    if (!length) length = 43;
    if (length < 43 || length > 128) {
        throw `Expected a length between 43 and 128. Received ${length}.`;
    }
    const verifier = await generateVerifier(length);
    const challenge = await generateChallenge(verifier);
    return {
        code_verifier: verifier,
        code_challenge: challenge
    };
}
export function $constructor(name17, initializer3, params) {
    function init(inst, def) {
        var _a18;
        Object.defineProperty(inst, "_zod", {
            value: inst._zod ?? {},
            enumerable: false
        });
        (_a18 = inst._zod).traits ?? (_a18.traits = new Set());
        inst._zod.traits.add(name17);
        initializer3(inst, def);
        for(const k2 in _2.prototype){
            if (!(k2 in inst)) Object.defineProperty(inst, k2, {
                value: _2.prototype[k2].bind(inst)
            });
        }
        inst._zod.constr = _2;
        inst._zod.def = def;
    }
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name17
    });
    function _2(def) {
        var _a18;
        const inst = params?.Parent ? new Definition() : this;
        init(inst, def);
        (_a18 = inst._zod).deferred ?? (_a18.deferred = []);
        for (const fn of inst._zod.deferred){
            fn();
        }
        return inst;
    }
    Object.defineProperty(_2, "init", {
        value: init
    });
    Object.defineProperty(_2, Symbol.hasInstance, {
        value: (inst)=>{
            if (params?.Parent && inst instanceof params.Parent) return true;
            return inst?._zod?.traits?.has(name17);
        }
    });
    Object.defineProperty(_2, "name", {
        value: name17
    });
    return _2;
}
export function config(newConfig) {
    if (newConfig) Object.assign(globalConfig, newConfig);
    return globalConfig;
}
export { ResizeStrategy, methods };

export var esm_exports8 = {};
Object.defineProperty(esm_exports8, "ResizeStrategy", {
    enumerable: true,
    get: ()=>ResizeStrategy
});
Object.defineProperty(esm_exports8, "methods", {
    enumerable: true,
    get: ()=>methods
});
