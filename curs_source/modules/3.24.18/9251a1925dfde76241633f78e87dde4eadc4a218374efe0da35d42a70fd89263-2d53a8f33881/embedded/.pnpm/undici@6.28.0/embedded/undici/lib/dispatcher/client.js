import { require_connect3 } from "../core/connect.js";
import { require_diagnostics } from "../core/diagnostics.js";
import { require_errors2 } from "../core/errors.js";
import { require_request3 } from "../core/request.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
import { require_client_h1 } from "./client-h1.js";
import { require_client_h2 } from "./client-h2.js";
import { require_dispatcher_base2 } from "./dispatcher-base.js";
import { require_redirect_interceptor } from "../interceptor/redirect-interceptor.js";
var __wakaru_require_client2_cache;
export function require_client2() {
if (__wakaru_require_client2_cache) return __wakaru_require_client2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_client2_cache = module2;
"use strict";
var assert4 = require("node:assert");
var net = require("node:net");
var http4 = require("node:http");
var util2 = require_util8();
var { channels } = require_diagnostics();
var Request2 = require_request3();
var DispatcherBase = require_dispatcher_base2();
var { InvalidArgumentError: InvalidArgumentError3, InformationalError, ClientDestroyedError } = require_errors2();
var buildConnector = require_connect3();
var { kUrl, kServerName, kClient, kBusy, kConnect, kResuming, kRunning, kPending, kSize, kQueue, kConnected, kConnecting, kNeedDrain, kKeepAliveDefaultTimeout, kHostHeader, kPendingIdx, kRunningIdx, kError, kPipelining, kKeepAliveTimeoutValue, kMaxHeadersSize, kKeepAliveMaxTimeout, kKeepAliveTimeoutThreshold, kHeadersTimeout, kBodyTimeout, kStrictContentLength, kConnector, kMaxRedirections, kMaxRequests, kCounter, kClose, kDestroy, kDispatch, kInterceptors, kLocalAddress, kMaxResponseSize, kOnError, kHTTPContext, kMaxConcurrentStreams, kResume } = require_symbols6();
var connectH1 = require_client_h1();
var connectH2 = require_client_h2();
var deprecatedInterceptorWarned = false;
var kClosedResolve = Symbol("kClosedResolve");
var noop5 = ()=>{};
function getPipelining(client) {
    return client[kPipelining] ?? client[kHTTPContext]?.defaultPipelining ?? 1;
}
var Client2 = class extends DispatcherBase {
    constructor(url2, { interceptors, maxHeaderSize, headersTimeout, socketTimeout, requestTimeout, connectTimeout, bodyTimeout, idleTimeout, keepAlive, keepAliveTimeout, maxKeepAliveTimeout, keepAliveMaxTimeout, keepAliveTimeoutThreshold, socketPath, pipelining, tls: tls3, strictContentLength, maxCachedSessions, maxRedirections, connect: connect4, maxRequestsPerClient, localAddress, maxResponseSize, autoSelectFamily, autoSelectFamilyAttemptTimeout, maxConcurrentStreams, allowH2, webSocket } = {}){
        super({
            webSocket
        });
        if (keepAlive !== void 0) {
            throw new InvalidArgumentError3("unsupported keepAlive, use pipelining=0 instead");
        }
        if (socketTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (requestTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (idleTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported idleTimeout, use keepAliveTimeout instead");
        }
        if (maxKeepAliveTimeout !== void 0) {
            throw new InvalidArgumentError3("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        }
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) {
            throw new InvalidArgumentError3("invalid maxHeaderSize");
        }
        if (socketPath != null && typeof socketPath !== "string") {
            throw new InvalidArgumentError3("invalid socketPath");
        }
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) {
            throw new InvalidArgumentError3("invalid connectTimeout");
        }
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) {
            throw new InvalidArgumentError3("invalid keepAliveTimeout");
        }
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) {
            throw new InvalidArgumentError3("invalid keepAliveMaxTimeout");
        }
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) {
            throw new InvalidArgumentError3("invalid keepAliveTimeoutThreshold");
        }
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) {
            throw new InvalidArgumentError3("headersTimeout must be a positive integer or zero");
        }
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) {
            throw new InvalidArgumentError3("bodyTimeout must be a positive integer or zero");
        }
        if (connect4 != null && typeof connect4 !== "function" && typeof connect4 !== "object") {
            throw new InvalidArgumentError3("connect must be a function or an object");
        }
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
            throw new InvalidArgumentError3("maxRedirections must be a positive number");
        }
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) {
            throw new InvalidArgumentError3("maxRequestsPerClient must be a positive number");
        }
        if (localAddress != null && (typeof localAddress !== "string" || net.isIP(localAddress) === 0)) {
            throw new InvalidArgumentError3("localAddress must be valid string IP address");
        }
        if (maxResponseSize != null && (!Number.isInteger(maxResponseSize) || maxResponseSize < -1)) {
            throw new InvalidArgumentError3("maxResponseSize must be a positive number");
        }
        if (autoSelectFamilyAttemptTimeout != null && (!Number.isInteger(autoSelectFamilyAttemptTimeout) || autoSelectFamilyAttemptTimeout < -1)) {
            throw new InvalidArgumentError3("autoSelectFamilyAttemptTimeout must be a positive number");
        }
        if (allowH2 != null && typeof allowH2 !== "boolean") {
            throw new InvalidArgumentError3("allowH2 must be a valid boolean value");
        }
        if (maxConcurrentStreams != null && (typeof maxConcurrentStreams !== "number" || maxConcurrentStreams < 1)) {
            throw new InvalidArgumentError3("maxConcurrentStreams must be a positive integer, greater than 0");
        }
        if (typeof connect4 !== "function") {
            connect4 = buildConnector({
                ...tls3,
                maxCachedSessions,
                allowH2,
                socketPath,
                timeout: connectTimeout,
                ...autoSelectFamily ? {
                    autoSelectFamily,
                    autoSelectFamilyAttemptTimeout
                } : void 0,
                ...connect4
            });
        }
        if (interceptors?.Client && Array.isArray(interceptors.Client)) {
            this[kInterceptors] = interceptors.Client;
            if (!deprecatedInterceptorWarned) {
                deprecatedInterceptorWarned = true;
                process.emitWarning("Client.Options#interceptor is deprecated. Use Dispatcher#compose instead.", {
                    code: "UNDICI-CLIENT-INTERCEPTOR-DEPRECATED"
                });
            }
        } else {
            this[kInterceptors] = [
                createRedirectInterceptor({
                    maxRedirections
                })
            ];
        }
        this[kUrl] = util2.parseOrigin(url2);
        this[kConnector] = connect4;
        this[kPipelining] = pipelining != null ? pipelining : 1;
        this[kMaxHeadersSize] = maxHeaderSize || http4.maxHeaderSize;
        this[kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 6e5 : keepAliveMaxTimeout;
        this[kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 2e3 : keepAliveTimeoutThreshold;
        this[kKeepAliveTimeoutValue] = this[kKeepAliveDefaultTimeout];
        this[kServerName] = null;
        this[kLocalAddress] = localAddress != null ? localAddress : null;
        this[kResuming] = 0;
        this[kNeedDrain] = 0;
        this[kHostHeader] = `host: ${this[kUrl].hostname}${this[kUrl].port ? `:${this[kUrl].port}` : ""}\r
`;
        this[kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 3e5;
        this[kHeadersTimeout] = headersTimeout != null ? headersTimeout : 3e5;
        this[kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[kMaxRedirections] = maxRedirections;
        this[kMaxRequests] = maxRequestsPerClient;
        this[kClosedResolve] = null;
        this[kMaxResponseSize] = maxResponseSize > -1 ? maxResponseSize : -1;
        this[kMaxConcurrentStreams] = maxConcurrentStreams != null ? maxConcurrentStreams : 100;
        this[kHTTPContext] = null;
        this[kQueue] = [];
        this[kRunningIdx] = 0;
        this[kPendingIdx] = 0;
        this[kResume] = (sync)=>resume(this, sync);
        this[kOnError] = (err)=>onError(this, err);
    }
    get pipelining() {
        return this[kPipelining];
    }
    set pipelining(value) {
        this[kPipelining] = value;
        this[kResume](true);
    }
    get [kPending]() {
        return this[kQueue].length - this[kPendingIdx];
    }
    get [kRunning]() {
        return this[kPendingIdx] - this[kRunningIdx];
    }
    get [kSize]() {
        return this[kQueue].length - this[kRunningIdx];
    }
    get [kConnected]() {
        return !!this[kHTTPContext] && !this[kConnecting] && !this[kHTTPContext].destroyed;
    }
    get [kBusy]() {
        return Boolean(this[kHTTPContext]?.busy(null) || this[kSize] >= (getPipelining(this) || 1) || this[kPending] > 0);
    }
    [kConnect](cb) {
        connect3(this);
        this.once("connect", cb);
    }
    [kDispatch](opts, handler) {
        const origin = opts.origin || this[kUrl].origin;
        const request3 = new Request2(origin, opts, handler);
        this[kQueue].push(request3);
        if (this[kResuming]) {} else if (util2.bodyLength(request3.body) == null && util2.isIterable(request3.body)) {
            this[kResuming] = 1;
            queueMicrotask(()=>resume(this));
        } else {
            this[kResume](true);
        }
        if (this[kResuming] && this[kNeedDrain] !== 2 && this[kBusy]) {
            this[kNeedDrain] = 2;
        }
        return this[kNeedDrain] < 2;
    }
    async [kClose]() {
        return new Promise((resolve36)=>{
            if (this[kSize]) {
                this[kClosedResolve] = resolve36;
            } else {
                resolve36(null);
            }
        });
    }
    async [kDestroy](err) {
        return new Promise((resolve36)=>{
            const requests = this[kQueue].splice(this[kPendingIdx]);
            for(let i = 0; i < requests.length; i++){
                const request3 = requests[i];
                util2.errorRequest(this, request3, err);
            }
            const callback = ()=>{
                if (this[kClosedResolve]) {
                    this[kClosedResolve]();
                    this[kClosedResolve] = null;
                }
                resolve36(null);
            };
            if (this[kHTTPContext]) {
                this[kHTTPContext].destroy(err, callback);
                this[kHTTPContext] = null;
            } else {
                queueMicrotask(callback);
            }
            this[kResume]();
        });
    }
};
var createRedirectInterceptor = require_redirect_interceptor();
function onError(client, err) {
    if (client[kRunning] === 0 && err.code !== "UND_ERR_INFO" && err.code !== "UND_ERR_SOCKET") {
        assert4(client[kPendingIdx] === client[kRunningIdx]);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request3 = requests[i];
            util2.errorRequest(client, request3, err);
        }
        assert4(client[kSize] === 0);
    }
}
async function connect3(client) {
    assert4(!client[kConnecting]);
    assert4(!client[kHTTPContext]);
    let { host, hostname: hostname3, protocol, port } = client[kUrl];
    if (hostname3[0] === "[") {
        const idx = hostname3.indexOf("]");
        assert4(idx !== -1);
        const ip = hostname3.substring(1, idx);
        assert4(net.isIP(ip));
        hostname3 = ip;
    }
    client[kConnecting] = true;
    if (channels.beforeConnect.hasSubscribers) {
        channels.beforeConnect.publish({
            connectParams: {
                host,
                hostname: hostname3,
                protocol,
                port,
                version: client[kHTTPContext]?.version,
                servername: client[kServerName],
                localAddress: client[kLocalAddress]
            },
            connector: client[kConnector]
        });
    }
    try {
        const socket = await new Promise((resolve36, reject2)=>{
            client[kConnector]({
                host,
                hostname: hostname3,
                protocol,
                port,
                servername: client[kServerName],
                localAddress: client[kLocalAddress]
            }, (err, socket2)=>{
                if (err) {
                    reject2(err);
                } else {
                    resolve36(socket2);
                }
            });
        });
        if (client.destroyed) {
            util2.destroy(socket.on("error", noop5), new ClientDestroyedError());
            return;
        }
        assert4(socket);
        try {
            client[kHTTPContext] = socket.alpnProtocol === "h2" ? await connectH2(client, socket) : await connectH1(client, socket);
        } catch (err) {
            socket.destroy().on("error", noop5);
            throw err;
        }
        client[kConnecting] = false;
        socket[kCounter] = 0;
        socket[kMaxRequests] = client[kMaxRequests];
        socket[kClient] = client;
        socket[kError] = null;
        if (channels.connected.hasSubscribers) {
            channels.connected.publish({
                connectParams: {
                    host,
                    hostname: hostname3,
                    protocol,
                    port,
                    version: client[kHTTPContext]?.version,
                    servername: client[kServerName],
                    localAddress: client[kLocalAddress]
                },
                connector: client[kConnector],
                socket
            });
        }
        client.emit("connect", client[kUrl], [
            client
        ]);
    } catch (err) {
        if (client.destroyed) {
            return;
        }
        client[kConnecting] = false;
        if (channels.connectError.hasSubscribers) {
            channels.connectError.publish({
                connectParams: {
                    host,
                    hostname: hostname3,
                    protocol,
                    port,
                    version: client[kHTTPContext]?.version,
                    servername: client[kServerName],
                    localAddress: client[kLocalAddress]
                },
                connector: client[kConnector],
                error: err
            });
        }
        if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
            assert4(client[kRunning] === 0);
            while(client[kPending] > 0 && client[kQueue][client[kPendingIdx]].servername === client[kServerName]){
                const request3 = client[kQueue][client[kPendingIdx]++];
                util2.errorRequest(client, request3, err);
            }
        } else {
            onError(client, err);
        }
        client.emit("connectionError", client[kUrl], [
            client
        ], err);
    }
    client[kResume]();
}
function emitDrain(client) {
    client[kNeedDrain] = 0;
    client.emit("drain", client[kUrl], [
        client
    ]);
}
function resume(client, sync) {
    if (client[kResuming] === 2) {
        return;
    }
    client[kResuming] = 2;
    _resume(client, sync);
    client[kResuming] = 0;
    if (client[kRunningIdx] > 256) {
        client[kQueue].splice(0, client[kRunningIdx]);
        client[kPendingIdx] -= client[kRunningIdx];
        client[kRunningIdx] = 0;
    }
}
function _resume(client, sync) {
    while(true){
        if (client.destroyed) {
            assert4(client[kPending] === 0);
            return;
        }
        if (client[kClosedResolve] && !client[kSize]) {
            client[kClosedResolve]();
            client[kClosedResolve] = null;
            return;
        }
        if (client[kHTTPContext]) {
            client[kHTTPContext].resume();
        }
        if (client[kBusy]) {
            client[kNeedDrain] = 2;
        } else if (client[kNeedDrain] === 2) {
            if (sync) {
                client[kNeedDrain] = 1;
                queueMicrotask(()=>emitDrain(client));
            } else {
                emitDrain(client);
            }
            continue;
        }
        if (client[kPending] === 0) {
            return;
        }
        if (client[kRunning] >= (getPipelining(client) || 1)) {
            return;
        }
        const request3 = client[kQueue][client[kPendingIdx]];
        if (client[kUrl].protocol === "https:" && client[kServerName] !== request3.servername) {
            if (client[kRunning] > 0) {
                return;
            }
            client[kServerName] = request3.servername;
            client[kHTTPContext]?.destroy(new InformationalError("servername changed"), ()=>{
                client[kHTTPContext] = null;
                resume(client);
            });
        }
        if (client[kConnecting]) {
            return;
        }
        if (!client[kHTTPContext]) {
            connect3(client);
            return;
        }
        if (client[kHTTPContext].destroyed) {
            return;
        }
        if (client[kHTTPContext].busy(request3)) {
            return;
        }
        if (!request3.aborted && client[kHTTPContext].write(request3)) {
            client[kPendingIdx]++;
        } else {
            client[kQueue].splice(client[kPendingIdx], 1);
        }
    }
}
module2.exports = Client2;

return module2.exports;
}
