require.r(exports);
require.d(exports, {
    BackgroundComposerAuthorityResolver: ()=>BackgroundComposerAuthorityResolver
});
var vscode__WEBPACK_IMPORTED_MODULE_0__ = require("./module-1.js");
var vscode__WEBPACK_IMPORTED_MODULE_0___default = ()=>vscode__WEBPACK_IMPORTED_MODULE_0__ && vscode__WEBPACK_IMPORTED_MODULE_0__.__esModule ? vscode__WEBPACK_IMPORTED_MODULE_0__.default : vscode__WEBPACK_IMPORTED_MODULE_0__;
var _backgroundComposerAuthority_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-3.js");
var _cursorServerConnectionToken_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-196.js");
var _cursorServerSocketEndpoint_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-197.js");
var _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-198.js");
const CURSOR_SOCKET_CLOSE_ERROR_CODE_TRANSIENT = "CursorSocketTransient";
function toTemporarilyNotAvailableIfCursorSocketTransient(error) {
    if (!(error instanceof Error)) {
        return error;
    }
    if (error.code === CURSOR_SOCKET_CLOSE_ERROR_CODE_TRANSIENT) {
        return vscode__WEBPACK_IMPORTED_MODULE_0__.RemoteAuthorityResolverError.TemporarilyNotAvailable(error.message);
    }
    return error;
}
function toNotAvailableIfPodGone(error) {
    if ((0, _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_4__.isPodGoneCursorServerUrlError)(error)) {
        return vscode__WEBPACK_IMPORTED_MODULE_0__.RemoteAuthorityResolverError.NotAvailable("This cloud agent's environment is no longer available.");
    }
    const workerDetail = (0, _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_4__.getTerminalWorkerCursorServerUrlDetail)(error);
    if (workerDetail !== void 0) {
        return vscode__WEBPACK_IMPORTED_MODULE_0__.RemoteAuthorityResolverError.NotAvailable(workerDetail);
    }
    return error;
}
function toTemporarilyNotAvailableIfRetryable(error) {
    if (!(0, _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_4__.isWorkbenchRetryableCursorServerUrlError)(error)) {
        return error;
    }
    const message = error instanceof Error ? error.message : String(error);
    return vscode__WEBPACK_IMPORTED_MODULE_0__.RemoteAuthorityResolverError.TemporarilyNotAvailable(message);
}
let _outputChannel;
function initLogger(outputChannel) {
    _outputChannel = outputChannel;
}
function log(...args) {
    const msg = args.map(String).join(" ");
    console.log(`[cursor-resolver]  ${msg}`);
    _outputChannel?.appendLine(`[INFO]  ${msg}`);
}
function logError(...args) {
    const msg = args.map(String).join(" ");
    _outputChannel?.appendLine(`[ERROR] ${msg}`);
}
function isCursorServerReservedPort(port) {
    return port >= 26e3 && port <= 26999;
}
function isFilteredBackgroundComposerPort(port) {
    if (isCursorServerReservedPort(port)) {
        return true;
    }
    if (port >= 5870 && port <= 5890) {
        return true;
    }
    if (port === 2375 || port === 5901 || port === 50052) {
        return true;
    }
    return false;
}
function getProductCommit() {
    const commit = vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.productCommit ?? vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.cursorServerCommit;
    if (!commit || !/^[a-zA-Z0-9\-_.]+$/.test(commit)) {
        logError("Invalid or missing product commit", commit);
        throw new Error("Invalid or missing product commit");
    }
    return commit;
}
function reportMetric(name, value) {
    try {
        vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.metricsDistribution({
            stat: `background-composer.${name}`,
            value,
            tags: {}
        });
    } catch  {}
}
class BackgroundComposerAuthorityResolver {
    constructor(connectionTokenProvider, outputChannel){
        this.connectionTokenProvider = connectionTokenProvider;
        this.staleCursorServerUrlBcIds = new Set();
        this.alwaysShowPortsView = true;
        initLogger(outputChannel);
        log("RemoteAuthorityResolver constructor");
    }
    createManagedResolvedAuthority(makeConnection, connectionToken, tunnelFactory) {
        return Object.assign(new vscode__WEBPACK_IMPORTED_MODULE_0__.ManagedResolvedAuthority(makeConnection, connectionToken, tunnelFactory), {
            skipCreateInspectTunnel: true,
            isTrusted: true
        });
    }
    async showCandidatePort(_host, port, _detail) {
        if (isFilteredBackgroundComposerPort(port)) {
            log(`Filtering out reserved/internal port ${port} from candidates`);
            return false;
        }
        return true;
    }
    async fetchCursorServerUrl({ bcId, commit, initialUseCache, progress }) {
        return (0, _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_4__.retryGetCursorServerUrl)({
            initialUseCache,
            getCursorServerUrl: (useCache)=>withTimer("getCursorServerUrl", async ()=>{
                    try {
                        return await this.connectionTokenProvider.getOrCreateCursorServerUrl(bcId, commit, useCache);
                    } catch (error) {
                        logError("Error getting cursor server url", error);
                        throw error;
                    }
                }),
            onRetry: (error, attempt, delayMs)=>{
                const statusText = (0, _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_4__.getCursorServerUrlRetryStatusText)(error);
                if (statusText !== void 0) {
                    progress?.report({
                        kind: "retrying",
                        phase: "connect",
                        attempt,
                        detail: statusText
                    });
                }
                const delayDescription = delayMs > 0 ? `retrying in ${delayMs / 1e3}s` : "retrying immediately";
                log("Error getting cursor server url,", delayDescription, `attempt=${attempt}`, error);
            }
        });
    }
    async resolve(authority, context, progress) {
        return withTimer("resolve", async ()=>{
            log("resolve", authority, `resolveAttempt=${context.resolveAttempt}`);
            progress?.report({
                phase: "init"
            });
            const parsedAuthority = (0, _backgroundComposerAuthority_js__WEBPACK_IMPORTED_MODULE_1__.parseBackgroundComposerAuthority)(authority, {
                allowInlineJson: (0, _backgroundComposerAuthority_js__WEBPACK_IMPORTED_MODULE_1__.allowsInlineJsonRemoteAuthority)(vscode__WEBPACK_IMPORTED_MODULE_0__.env.uriScheme)
            });
            if (parsedAuthority.kind === "inlineUrl") {
                const url2 = parsedAuthority.url;
                log("resolved url (inline)", url2.host, url2.port);
                const makeConnection2 = async ()=>{
                    try {
                        return await createManagedTcpConnection(url2);
                    } catch (error) {
                        throw toTemporarilyNotAvailableIfCursorSocketTransient(error);
                    }
                };
                const tunnelFactory2 = vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.createSocketConsumerTunnelFactory({
                    makeConnection: makeConnection2,
                    connectionToken: url2.connectionToken
                });
                return this.createManagedResolvedAuthority(makeConnection2, url2.connectionToken, tunnelFactory2);
            }
            const bcId = parsedAuthority.bcId;
            progress?.report({
                phase: "auth"
            });
            const commit = getProductCommit();
            const { connectionToken } = await this.connectionTokenProvider.getOrCreateConnectionToken(bcId, commit);
            progress?.report({
                phase: "get-url"
            });
            const useCachedUrl = !this.staleCursorServerUrlBcIds.delete(bcId);
            let url;
            try {
                url = await this.fetchCursorServerUrl({
                    bcId,
                    commit,
                    initialUseCache: useCachedUrl,
                    progress
                });
            } catch (error) {
                throw toTemporarilyNotAvailableIfRetryable(toNotAvailableIfPodGone(error));
            }
            log("resolved url", url.host, url.port, `useCachedUrl=${useCachedUrl}`);
            const serverConnectionToken = (0, _cursorServerConnectionToken_js__WEBPACK_IMPORTED_MODULE_2__.selectCursorServerConnectionToken)({
                returnedToken: url.connectionToken,
                mintedToken: connectionToken
            });
            const markCursorServerUrlSuspect = ()=>{
                if (!this.staleCursorServerUrlBcIds.has(bcId)) {
                    log("marking cursor server url suspect, next resolve fetches fresh", bcId);
                    this.staleCursorServerUrlBcIds.add(bcId);
                }
            };
            const endpointForSocket = (0, _cursorServerSocketEndpoint_js__WEBPACK_IMPORTED_MODULE_3__.socketEndpointSource)(url, async ()=>{
                try {
                    return await this.fetchCursorServerUrl({
                        bcId,
                        commit,
                        initialUseCache: !this.staleCursorServerUrlBcIds.delete(bcId),
                        progress
                    });
                } catch (error) {
                    throw toTemporarilyNotAvailableIfRetryable(toNotAvailableIfPodGone(error));
                }
            });
            const makeConnection = async ()=>{
                progress?.report({
                    phase: "socket"
                });
                const endpoint = await endpointForSocket();
                try {
                    return await createManagedTcpConnection(endpoint, markCursorServerUrlSuspect);
                } catch (error) {
                    markCursorServerUrlSuspect();
                    throw toTemporarilyNotAvailableIfCursorSocketTransient(error);
                }
            };
            const tunnelFactory = vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.createSocketConsumerTunnelFactory({
                makeConnection,
                connectionToken: serverConnectionToken
            });
            return this.createManagedResolvedAuthority(makeConnection, serverConnectionToken, tunnelFactory);
        });
    }
}
const SUSPECT_QUICK_CLOSE_WINDOW_MS = 1e4;
async function createManagedTcpConnection(url, onSuspectClose) {
    const useTls = url.port === 443 || (0, _cursorServerSocketEndpoint_js__WEBPACK_IMPORTED_MODULE_3__.usesRelayPath)(url);
    const tcpConn = await vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.createTcpConnection({
        host: url.host,
        port: url.port,
        tls: useTls ? {
            rejectUnauthorized: true,
            servername: url.host
        } : void 0
    });
    log("tcp connection established", `${url.host}:${url.port}`, useTls ? "(tls)" : "(plain)");
    const dataEmitter = new vscode__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    const closeEmitter = new vscode__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    const endEmitter = new vscode__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    const establishedAtMs = Date.now();
    let endedLocally = false;
    tcpConn.onDidReceiveData((data)=>dataEmitter.fire(data));
    tcpConn.onDidClose((err)=>{
        const quickClose = Date.now() - establishedAtMs < SUSPECT_QUICK_CLOSE_WINDOW_MS;
        if (!endedLocally && (err !== void 0 || quickClose)) {
            onSuspectClose?.();
        }
        closeEmitter.fire(err);
        endEmitter.fire();
    });
    return {
        onDidReceiveMessage: dataEmitter.event,
        onDidClose: closeEmitter.event,
        onDidEnd: endEmitter.event,
        send: (data)=>{
            tcpConn.send(data);
        },
        end: ()=>{
            endedLocally = true;
            tcpConn.close();
        },
        connectionOptions: {
            headers: [
                `Host: ${url.host}:${url.port}`,
                ...url.headers.map((h)=>`${h.key}: ${h.value}`)
            ],
            doNotIncludeWsLocalhostPrefix: true,
            ...(0, _cursorServerSocketEndpoint_js__WEBPACK_IMPORTED_MODULE_3__.usesRelayPath)(url) ? {
                path: url.upgradePath
            } : {}
        }
    };
}
async function withTimer(name, fn) {
    const start = performance.now();
    try {
        return await fn();
    } finally{
        const end = performance.now();
        reportMetric(name, end - start);
    }
}
