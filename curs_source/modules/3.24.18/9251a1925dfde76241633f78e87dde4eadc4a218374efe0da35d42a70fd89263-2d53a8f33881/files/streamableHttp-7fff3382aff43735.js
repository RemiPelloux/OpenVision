import { auth, createFetchWithInit, extractWWWAuthenticateParams, normalizeHeaders } from "../../../../../../../../../coerce_exports.js";
import { UnauthorizedError, init_auth3 } from "./auth.js";
import { init_transport3 } from "../shared/transport.js";
import { JSONRPCMessageSchema, init_types8, isInitializedNotification, isJSONRPCRequest, isJSONRPCResultResponse } from "../types.js";
import { EventSourceParserStream, init_stream } from "../../../../../../../eventsource-parser@3.0.8/node_modules/eventsource-parser/dist/stream.js";
var DEFAULT_STREAMABLE_HTTP_RECONNECTION_OPTIONS, StreamableHTTPError, StreamableHTTPClientTransport;
export { DEFAULT_STREAMABLE_HTTP_RECONNECTION_OPTIONS, StreamableHTTPClientTransport, StreamableHTTPError };
var __wakaru_init_streamableHttp_initialized = false;
export function init_streamableHttp() {
if (__wakaru_init_streamableHttp_initialized) return;
__wakaru_init_streamableHttp_initialized = true;
init_transport3();
init_types8();
init_auth3();
init_stream();
DEFAULT_STREAMABLE_HTTP_RECONNECTION_OPTIONS = {
    initialReconnectionDelay: 1e3,
    maxReconnectionDelay: 3e4,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
};
StreamableHTTPError = class extends Error {
    constructor(code, message){
        super(`Streamable HTTP error: ${message}`);
        this.code = code;
    }
};
StreamableHTTPClientTransport = class {
    constructor(url2, opts){
        this._hasCompletedAuthFlow = false;
        this._url = url2;
        this._resourceMetadataUrl = void 0;
        this._scope = void 0;
        this._requestInit = opts?.requestInit;
        this._authProvider = opts?.authProvider;
        this._fetch = opts?.fetch;
        this._fetchWithInit = createFetchWithInit(opts?.fetch, opts?.requestInit);
        this._sessionId = opts?.sessionId;
        this._reconnectionOptions = opts?.reconnectionOptions ?? DEFAULT_STREAMABLE_HTTP_RECONNECTION_OPTIONS;
    }
    async _authThenStart() {
        if (!this._authProvider) {
            throw new UnauthorizedError("No auth provider");
        }
        let result;
        try {
            result = await auth(this._authProvider, {
                serverUrl: this._url,
                resourceMetadataUrl: this._resourceMetadataUrl,
                scope: this._scope,
                fetchFn: this._fetchWithInit
            });
        } catch (error3) {
            this.onerror?.(error3);
            throw error3;
        }
        if (result !== "AUTHORIZED") {
            throw new UnauthorizedError();
        }
        this._cursorSseAuthCompleted = true;
        return await this._startOrAuthSse({
            resumptionToken: void 0
        });
    }
    async _commonHeaders() {
        const headers = {};
        if (this._authProvider) {
            const tokens = await this._authProvider.tokens();
            if (tokens) {
                headers["Authorization"] = `Bearer ${tokens.access_token}`;
            }
        }
        if (this._sessionId) {
            headers["mcp-session-id"] = this._sessionId;
        }
        if (this._protocolVersion) {
            headers["mcp-protocol-version"] = this._protocolVersion;
        }
        const extraHeaders = normalizeHeaders(this._requestInit?.headers);
        return new Headers({
            ...headers,
            ...extraHeaders
        });
    }
    async _startOrAuthSse(options2) {
        const { resumptionToken } = options2;
        try {
            const headers = await this._commonHeaders();
            headers.set("Accept", "text/event-stream");
            if (resumptionToken) {
                headers.set("last-event-id", resumptionToken);
            }
            const response = await (this._fetch ?? fetch)(this._url, {
                method: "GET",
                headers,
                signal: this._abortController?.signal
            });
            if (!response.ok) {
                await response.body?.cancel();
                if (response.status === 401 && this._authProvider) {
                    if (this._cursorSseAuthCompleted) {
                        return;
                    }
                    return await this._authThenStart();
                }
                if (response.status === 405) {
                    return;
                }
                throw new StreamableHTTPError(response.status, `Failed to open SSE stream: ${response.statusText}`);
            }
            this._cursorSseAuthCompleted = false;
            this._handleSseStream(response.body, options2, true);
        } catch (error3) {
            this.onerror?.(error3);
            throw error3;
        }
    }
    _getNextReconnectionDelay(attempt) {
        if (this._serverRetryMs !== void 0) {
            return this._serverRetryMs;
        }
        const initialDelay = this._reconnectionOptions.initialReconnectionDelay;
        const growFactor = this._reconnectionOptions.reconnectionDelayGrowFactor;
        const maxDelay = this._reconnectionOptions.maxReconnectionDelay;
        return Math.min(initialDelay * Math.pow(growFactor, attempt), maxDelay);
    }
    _scheduleReconnection(options2, attemptCount = 0) {
        const maxRetries = this._reconnectionOptions.maxRetries;
        if (attemptCount >= maxRetries) {
            this.onerror?.(new Error(`Maximum reconnection attempts (${maxRetries}) exceeded.`));
            return;
        }
        const delay3 = this._getNextReconnectionDelay(attemptCount);
        this._reconnectionTimeout = setTimeout(()=>{
            this._startOrAuthSse(options2).catch((error3)=>{
                if (error3 instanceof Error && error3.name === "SiblingAlreadyRefreshedError") {
                    this.onerror?.(error3);
                    return;
                }
                const wrapped = new Error(`Failed to reconnect SSE stream: ${error3 instanceof Error ? error3.message : String(error3)}`);
                if (error3 instanceof Error) {
                    wrapped.cause = error3;
                }
                this.onerror?.(wrapped);
                this._scheduleReconnection(options2, attemptCount + 1);
            });
        }, delay3);
    }
    _handleSseStream(stream3, options2, isReconnectable) {
        if (!stream3) {
            return;
        }
        const { onresumptiontoken, replayMessageId } = options2;
        let lastEventId;
        let hasPrimingEvent = false;
        let receivedResponse = false;
        const processStream = async ()=>{
            try {
                const reader = stream3.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream({
                    onRetry: (retryMs)=>{
                        this._serverRetryMs = retryMs;
                    }
                })).getReader();
                while(true){
                    const { value: event, done } = await reader.read();
                    if (done) {
                        break;
                    }
                    if (event.id) {
                        lastEventId = event.id;
                        hasPrimingEvent = true;
                        onresumptiontoken?.(event.id);
                    }
                    if (!event.data) {
                        continue;
                    }
                    if (!event.event || event.event === "message") {
                        try {
                            const message = JSONRPCMessageSchema.parse(JSON.parse(event.data));
                            if (isJSONRPCResultResponse(message)) {
                                receivedResponse = true;
                                if (replayMessageId !== void 0) {
                                    message.id = replayMessageId;
                                }
                            }
                            this.onmessage?.(message);
                        } catch (error3) {
                            this.onerror?.(error3);
                        }
                    }
                }
                const canResume = isReconnectable || hasPrimingEvent;
                const needsReconnect = canResume && !receivedResponse;
                if (needsReconnect && this._abortController && !this._abortController.signal.aborted) {
                    this._scheduleReconnection({
                        resumptionToken: lastEventId,
                        onresumptiontoken,
                        replayMessageId
                    }, 0);
                }
            } catch (error3) {
                this.onerror?.(new Error(`SSE stream disconnected: ${error3}`));
                const canResume = isReconnectable || hasPrimingEvent;
                const needsReconnect = canResume && !receivedResponse;
                if (needsReconnect && this._abortController && !this._abortController.signal.aborted) {
                    try {
                        this._scheduleReconnection({
                            resumptionToken: lastEventId,
                            onresumptiontoken,
                            replayMessageId
                        }, 0);
                    } catch (error4) {
                        if (error4 instanceof Error && error4.name === "SiblingAlreadyRefreshedError") {
                            this.onerror?.(error4);
                            return;
                        }
                        const wrapped = new Error(`Failed to reconnect: ${error4 instanceof Error ? error4.message : String(error4)}`);
                        if (error4 instanceof Error) {
                            wrapped.cause = error4;
                        }
                        this.onerror?.(wrapped);
                    }
                }
            }
        };
        processStream();
    }
    async start() {
        if (this._abortController) {
            throw new Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        }
        this._abortController = new AbortController();
    }
    async finishAuth(authorizationCode) {
        if (!this._authProvider) {
            throw new UnauthorizedError("No auth provider");
        }
        const result = await auth(this._authProvider, {
            serverUrl: this._url,
            authorizationCode,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
        });
        if (result !== "AUTHORIZED") {
            throw new UnauthorizedError("Failed to authorize");
        }
    }
    async close() {
        if (this._reconnectionTimeout) {
            clearTimeout(this._reconnectionTimeout);
            this._reconnectionTimeout = void 0;
        }
        this._abortController?.abort();
        this.onclose?.();
    }
    async send(message, options2) {
        try {
            const { resumptionToken, onresumptiontoken } = options2 || {};
            if (resumptionToken) {
                this._startOrAuthSse({
                    resumptionToken,
                    replayMessageId: isJSONRPCRequest(message) ? message.id : void 0
                }).catch((err)=>this.onerror?.(err));
                return;
            }
            const headers = await this._commonHeaders();
            headers.set("content-type", "application/json");
            headers.set("accept", "application/json, text/event-stream");
            const init = {
                ...this._requestInit,
                method: "POST",
                headers,
                body: JSON.stringify(message),
                signal: this._abortController?.signal
            };
            const response = await (this._fetch ?? fetch)(this._url, init);
            const sessionId = response.headers.get("mcp-session-id");
            if (sessionId) {
                this._sessionId = sessionId;
            }
            if (!response.ok) {
                const text4 = await response.text().catch(()=>null);
                if (response.status === 401 && this._authProvider) {
                    if (this._hasCompletedAuthFlow) {
                        throw new StreamableHTTPError(401, "Server returned 401 after successful authentication");
                    }
                    const { resourceMetadataUrl, scope } = extractWWWAuthenticateParams(response);
                    this._resourceMetadataUrl = resourceMetadataUrl;
                    this._scope = scope;
                    const result = await auth(this._authProvider, {
                        serverUrl: this._url,
                        resourceMetadataUrl: this._resourceMetadataUrl,
                        scope: this._scope,
                        fetchFn: this._fetchWithInit
                    });
                    if (result !== "AUTHORIZED") {
                        throw new UnauthorizedError();
                    }
                    this._hasCompletedAuthFlow = true;
                    return this.send(message);
                }
                if (response.status === 403 && this._authProvider) {
                    const { resourceMetadataUrl, scope, error: error3 } = extractWWWAuthenticateParams(response);
                    if (error3 === "insufficient_scope") {
                        const wwwAuthHeader = response.headers.get("WWW-Authenticate");
                        if (this._lastUpscopingHeader === wwwAuthHeader) {
                            throw new StreamableHTTPError(403, "Server returned 403 after trying upscoping");
                        }
                        if (scope) {
                            this._scope = scope;
                        }
                        if (resourceMetadataUrl) {
                            this._resourceMetadataUrl = resourceMetadataUrl;
                        }
                        this._lastUpscopingHeader = wwwAuthHeader ?? void 0;
                        const result = await auth(this._authProvider, {
                            serverUrl: this._url,
                            resourceMetadataUrl: this._resourceMetadataUrl,
                            scope: this._scope,
                            fetchFn: this._fetch
                        });
                        if (result !== "AUTHORIZED") {
                            throw new UnauthorizedError();
                        }
                        return this.send(message);
                    }
                }
                throw new StreamableHTTPError(response.status, `Error POSTing to endpoint: ${text4}`);
            }
            this._hasCompletedAuthFlow = false;
            this._lastUpscopingHeader = void 0;
            if (response.status === 202) {
                await response.body?.cancel();
                if (isInitializedNotification(message)) {
                    this._startOrAuthSse({
                        resumptionToken: void 0
                    }).catch((err)=>this.onerror?.(err));
                }
                return;
            }
            const messages = Array.isArray(message) ? message : [
                message
            ];
            const hasRequests = messages.filter((msg)=>"method" in msg && "id" in msg && msg.id !== void 0).length > 0;
            const contentType = response.headers.get("content-type");
            if (hasRequests) {
                if (contentType?.includes("text/event-stream")) {
                    this._handleSseStream(response.body, {
                        onresumptiontoken
                    }, false);
                } else if (contentType?.includes("application/json")) {
                    const data = await response.json();
                    const responseMessages = Array.isArray(data) ? data.map((msg)=>JSONRPCMessageSchema.parse(msg)) : [
                        JSONRPCMessageSchema.parse(data)
                    ];
                    for (const msg of responseMessages){
                        this.onmessage?.(msg);
                    }
                } else {
                    await response.body?.cancel();
                    throw new StreamableHTTPError(-1, `Unexpected content type: ${contentType}`);
                }
            } else {
                await response.body?.cancel();
            }
        } catch (error3) {
            this.onerror?.(error3);
            throw error3;
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    async terminateSession() {
        if (!this._sessionId) {
            return;
        }
        try {
            const headers = await this._commonHeaders();
            const init = {
                ...this._requestInit,
                method: "DELETE",
                headers,
                signal: this._abortController?.signal
            };
            const response = await (this._fetch ?? fetch)(this._url, init);
            await response.body?.cancel();
            if (!response.ok && response.status !== 405) {
                throw new StreamableHTTPError(response.status, `Failed to terminate session: ${response.statusText}`);
            }
            this._sessionId = void 0;
        } catch (error3) {
            this.onerror?.(error3);
            throw error3;
        }
    }
    setProtocolVersion(version4) {
        this._protocolVersion = version4;
    }
    get protocolVersion() {
        return this._protocolVersion;
    }
    async resumeStream(lastEventId, options2) {
        await this._startOrAuthSse({
            resumptionToken: lastEventId,
            onresumptiontoken: options2?.onresumptiontoken
        });
    }
};

}
