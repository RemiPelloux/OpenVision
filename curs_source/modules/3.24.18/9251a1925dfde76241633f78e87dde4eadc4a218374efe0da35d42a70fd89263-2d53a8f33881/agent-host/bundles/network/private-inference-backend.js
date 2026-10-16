import { __toESM } from "../storage/sqlite-store.js";
import { authIdFromToken, backendNamespace, identityChangedError, sameIdentity } from "../../../bidi_connect_exports.js";
import { require_dist } from "../../../cursor-network/dist/index.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var import_cursor_network, NetworkPrivateInferenceBackend;
export { NetworkPrivateInferenceBackend, import_cursor_network };
var __wakaru_init_private_inference_backend_initialized = false;
export function init_private_inference_backend() {
if (__wakaru_init_private_inference_backend_initialized) return;
__wakaru_init_private_inference_backend_initialized = true;
"use strict";
import_cursor_network = __toESM(require_dist(), 1);
init_esm3();
NetworkPrivateInferenceBackend = class {
    constructor(host, client){
        this.host = host;
        this.client = client;
        this.identityController = new AbortController();
        this.listeners = new Set();
        this.disposed = false;
        this.identity = this.readIdentity();
        this.subscriptions = [
            host.onDidChangeCursorAuthToken(()=>this.updateIdentity()),
            host.onDidChangeCursorCreds(()=>this.updateIdentity())
        ];
    }
    async getIdentity() {
        this.updateIdentity();
        return this.identity;
    }
    onDidChangeIdentity(listener) {
        if (!this.disposed) {
            this.listeners.add(listener);
        }
        return {
            dispose: ()=>this.listeners.delete(listener)
        };
    }
    async admitRun(identity, request3, signal, { headers } = {}) {
        signal?.throwIfAborted();
        return await this.call(identity, void 0, (options2)=>this.client.admitRun(request3, headers === void 0 ? options2 : {
                ...options2,
                headers
            }), {
            abortInFlight: false,
            fenceAfterResponse: false
        });
    }
    reportUsage(identity, request3, signal) {
        return this.call(identity, signal, (options2)=>this.client.reportUsage(request3, options2));
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.identity = void 0;
        this.identityController.abort(identityChangedError());
        for (const subscription of this.subscriptions){
            subscription.dispose();
        }
        this.listeners.clear();
    }
    readIdentity() {
        const authId = authIdFromToken(this.host.getCursorAuthToken());
        const backendUrl = backendNamespace(this.host.getCursorCreds()?.backendUrl);
        return authId === void 0 || backendUrl === void 0 ? void 0 : Object.freeze({
            authId,
            backendUrl
        });
    }
    updateIdentity() {
        if (this.disposed) {
            return;
        }
        const next = this.readIdentity();
        if (sameIdentity(this.identity, next)) {
            return;
        }
        this.identity = next;
        const previous = this.identityController;
        this.identityController = new AbortController();
        previous.abort(identityChangedError());
        for (const listener of this.listeners){
            listener();
        }
    }
    assertCurrent(identity) {
        this.updateIdentity();
        if (this.disposed || !sameIdentity(this.identity, identity)) {
            throw identityChangedError();
        }
    }
    async call(identity, signal, invoke, { abortInFlight = true, fenceAfterResponse = true } = {}) {
        const expected = {
            ...identity
        };
        this.assertCurrent(expected);
        const requestSignal = signal === void 0 ? this.identityController.signal : AbortSignal.any([
            signal,
            this.identityController.signal
        ]);
        requestSignal.throwIfAborted();
        const response = await invoke(abortInFlight ? {
            signal: requestSignal
        } : {});
        if (fenceAfterResponse) {
            this.assertCurrent(expected);
            requestSignal.throwIfAborted();
        }
        return response;
    }
};

}
