import { auth, createFetchWithInit, extractWWWAuthenticateParams, normalizeHeaders } from "../../../../../../../../../coerce_exports.js";
import { UnauthorizedError, init_auth3 } from "./auth.js";
import { init_transport3 } from "../shared/transport.js";
import { JSONRPCMessageSchema, init_types8 } from "../types.js";
import { EventSource, init_dist18 } from "../../../../../../../eventsource@3.0.7/node_modules/eventsource/dist/index.js";
var SseError, SSEClientTransport;
export { SSEClientTransport, SseError };
var __wakaru_init_sse_initialized = false;
export function init_sse() {
if (__wakaru_init_sse_initialized) return;
__wakaru_init_sse_initialized = true;
init_dist18();
init_transport3();
init_types8();
init_auth3();
SseError = class extends Error {
    constructor(code, message, event){
        super(`SSE error: ${message}`);
        this.code = code;
        this.event = event;
    }
};
SSEClientTransport = class {
    constructor(url2, opts){
        this._url = url2;
        this._resourceMetadataUrl = void 0;
        this._scope = void 0;
        this._eventSourceInit = opts?.eventSourceInit;
        this._requestInit = opts?.requestInit;
        this._authProvider = opts?.authProvider;
        this._fetch = opts?.fetch;
        this._fetchWithInit = createFetchWithInit(opts?.fetch, opts?.requestInit);
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
        return await this._startOrAuth();
    }
    async _commonHeaders() {
        const headers = {};
        if (this._authProvider) {
            const tokens = await this._authProvider.tokens();
            if (tokens) {
                headers["Authorization"] = `Bearer ${tokens.access_token}`;
            }
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
    _startOrAuth() {
        const fetchImpl = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
        return new Promise((resolve36, reject2)=>{
            this._eventSource = new EventSource(this._url.href, {
                ...this._eventSourceInit,
                fetch: async (url2, init)=>{
                    const headers = await this._commonHeaders();
                    headers.set("Accept", "text/event-stream");
                    const response = await fetchImpl(url2, {
                        ...init,
                        headers
                    });
                    if (response.status === 401 && response.headers.has("www-authenticate")) {
                        const { resourceMetadataUrl, scope } = extractWWWAuthenticateParams(response);
                        this._resourceMetadataUrl = resourceMetadataUrl;
                        this._scope = scope;
                    }
                    return response;
                }
            });
            this._abortController = new AbortController();
            this._eventSource.onerror = (event)=>{
                if (event.code === 401 && this._authProvider) {
                    this._authThenStart().then(resolve36, reject2);
                    return;
                }
                const error3 = new SseError(event.code, event.message, event);
                reject2(error3);
                this.onerror?.(error3);
            };
            this._eventSource.onopen = ()=>{};
            this._eventSource.addEventListener("endpoint", (event)=>{
                const messageEvent = event;
                try {
                    this._endpoint = new URL(messageEvent.data, this._url);
                    if (this._endpoint.origin !== this._url.origin) {
                        throw new Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
                    }
                } catch (error3) {
                    reject2(error3);
                    this.onerror?.(error3);
                    void this.close();
                    return;
                }
                resolve36();
            });
            this._eventSource.onmessage = (event)=>{
                const messageEvent = event;
                let message;
                try {
                    message = JSONRPCMessageSchema.parse(JSON.parse(messageEvent.data));
                } catch (error3) {
                    this.onerror?.(error3);
                    return;
                }
                this.onmessage?.(message);
            };
        });
    }
    async start() {
        if (this._eventSource) {
            throw new Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        }
        return await this._startOrAuth();
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
        this._abortController?.abort();
        this._eventSource?.close();
        this.onclose?.();
    }
    async send(message) {
        if (!this._endpoint) {
            throw new Error("Not connected");
        }
        try {
            const headers = await this._commonHeaders();
            headers.set("content-type", "application/json");
            const init = {
                ...this._requestInit,
                method: "POST",
                headers,
                body: JSON.stringify(message),
                signal: this._abortController?.signal
            };
            const response = await (this._fetch ?? fetch)(this._endpoint, init);
            if (!response.ok) {
                const text4 = await response.text().catch(()=>null);
                if (response.status === 401 && this._authProvider) {
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
                    return this.send(message);
                }
                throw new Error(`Error POSTing to endpoint (HTTP ${response.status}): ${text4}`);
            }
            await response.body?.cancel();
        } catch (error3) {
            this.onerror?.(error3);
            throw error3;
        }
    }
    setProtocolVersion(version4) {
        this._protocolVersion = version4;
    }
};

}
