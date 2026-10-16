import { createParser, flattenError2, getBaseURL, inspectableError, syntaxError } from "../../../../../../coerce_exports.js";
import { init_dist17 } from "../../../../eventsource-parser@3.0.8/node_modules/eventsource-parser/dist/index.js";
var ErrorEvent, __typeError, __accessCheck, __privateGet, __privateAdd, __privateSet, __privateMethod, _readyState, _url2, _redirectUrl, _withCredentials, _fetch, _reconnectInterval, _reconnectTimer, _lastEventId, _controller, _parser, _onError, _onMessage, _onOpen, _EventSource_instances, connect_fn, _onFetchResponse, _onFetchError, getRequestOptions_fn, _onEvent, _onRetryChange, failConnection_fn, scheduleReconnect_fn, _reconnect, EventSource;
export { ErrorEvent, EventSource, _EventSource_instances, __accessCheck, __privateAdd, __privateGet, __privateMethod, __privateSet, __typeError, _controller, _fetch, _lastEventId, _onError, _onEvent, _onFetchError, _onFetchResponse, _onMessage, _onOpen, _onRetryChange, _parser, _readyState, _reconnect, _reconnectInterval, _reconnectTimer, _redirectUrl, _url2, _withCredentials, connect_fn, failConnection_fn, getRequestOptions_fn, scheduleReconnect_fn };
var __wakaru_init_dist18_initialized = false;
export function init_dist18() {
if (__wakaru_init_dist18_initialized) return;
__wakaru_init_dist18_initialized = true;
init_dist17();
ErrorEvent = class extends Event {
    constructor(type2, errorEventInitDict){
        var _a18, _b2;
        super(type2), this.code = (_a18 = errorEventInitDict == null ? void 0 : errorEventInitDict.code) != null ? _a18 : void 0, this.message = (_b2 = errorEventInitDict == null ? void 0 : errorEventInitDict.message) != null ? _b2 : void 0;
    }
    [Symbol.for("nodejs.util.inspect.custom")](_depth, options2, inspect) {
        return inspect(inspectableError(this), options2);
    }
    [Symbol.for("Deno.customInspect")](inspect, options2) {
        return inspect(inspectableError(this), options2);
    }
};
__typeError = (msg)=>{
    throw TypeError(msg);
};
__accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
__privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
__privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
__privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
__privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
EventSource = class extends EventTarget {
    constructor(url2, eventSourceInitDict){
        var _a18, _b2;
        super(), __privateAdd(this, _EventSource_instances), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, __privateAdd(this, _readyState), __privateAdd(this, _url2), __privateAdd(this, _redirectUrl), __privateAdd(this, _withCredentials), __privateAdd(this, _fetch), __privateAdd(this, _reconnectInterval), __privateAdd(this, _reconnectTimer), __privateAdd(this, _lastEventId, null), __privateAdd(this, _controller), __privateAdd(this, _parser), __privateAdd(this, _onError, null), __privateAdd(this, _onMessage, null), __privateAdd(this, _onOpen, null), __privateAdd(this, _onFetchResponse, async (response)=>{
            var _a24;
            __privateGet(this, _parser).reset();
            const { body, redirected, status, headers } = response;
            if (status === 204) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
                return;
            }
            if (redirected ? __privateSet(this, _redirectUrl, new URL(response.url)) : __privateSet(this, _redirectUrl, void 0), status !== 200) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, `Non-200 status code (${status})`, status);
                return;
            }
            if (!(headers.get("content-type") || "").startsWith("text/event-stream")) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, 'Invalid content type, expected "text/event-stream"', status);
                return;
            }
            if (__privateGet(this, _readyState) === this.CLOSED) return;
            __privateSet(this, _readyState, this.OPEN);
            const openEvent = new Event("open");
            if ((_a24 = __privateGet(this, _onOpen)) == null || _a24.call(this, openEvent), this.dispatchEvent(openEvent), typeof body != "object" || !body || !("getReader" in body)) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, "Invalid response body, expected a web ReadableStream", status), this.close();
                return;
            }
            const decoder2 = new TextDecoder(), reader = body.getReader();
            let open7 = true;
            do {
                const { done, value } = await reader.read();
                value && __privateGet(this, _parser).feed(decoder2.decode(value, {
                    stream: !done
                })), done && (open7 = false, __privateGet(this, _parser).reset(), __privateMethod(this, _EventSource_instances, scheduleReconnect_fn).call(this));
            }while (open7)
        }), __privateAdd(this, _onFetchError, (err)=>{
            __privateSet(this, _controller, void 0), !(err.name === "AbortError" || err.type === "aborted") && __privateMethod(this, _EventSource_instances, scheduleReconnect_fn).call(this, flattenError2(err));
        }), __privateAdd(this, _onEvent, (event)=>{
            typeof event.id == "string" && __privateSet(this, _lastEventId, event.id);
            const messageEvent = new MessageEvent(event.event || "message", {
                data: event.data,
                origin: __privateGet(this, _redirectUrl) ? __privateGet(this, _redirectUrl).origin : __privateGet(this, _url2).origin,
                lastEventId: event.id || ""
            });
            __privateGet(this, _onMessage) && (!event.event || event.event === "message") && __privateGet(this, _onMessage).call(this, messageEvent), this.dispatchEvent(messageEvent);
        }), __privateAdd(this, _onRetryChange, (value)=>{
            __privateSet(this, _reconnectInterval, value);
        }), __privateAdd(this, _reconnect, ()=>{
            __privateSet(this, _reconnectTimer, void 0), __privateGet(this, _readyState) === this.CONNECTING && __privateMethod(this, _EventSource_instances, connect_fn).call(this);
        });
        try {
            if (url2 instanceof URL) __privateSet(this, _url2, url2);
            else if (typeof url2 == "string") __privateSet(this, _url2, new URL(url2, getBaseURL()));
            else throw new Error("Invalid URL");
        } catch  {
            throw syntaxError("An invalid or illegal string was specified");
        }
        __privateSet(this, _parser, createParser({
            onEvent: __privateGet(this, _onEvent),
            onRetry: __privateGet(this, _onRetryChange)
        })), __privateSet(this, _readyState, this.CONNECTING), __privateSet(this, _reconnectInterval, 3e3), __privateSet(this, _fetch, (_a18 = eventSourceInitDict == null ? void 0 : eventSourceInitDict.fetch) != null ? _a18 : globalThis.fetch), __privateSet(this, _withCredentials, (_b2 = eventSourceInitDict == null ? void 0 : eventSourceInitDict.withCredentials) != null ? _b2 : false), __privateMethod(this, _EventSource_instances, connect_fn).call(this);
    }
    get readyState() {
        return __privateGet(this, _readyState);
    }
    get url() {
        return __privateGet(this, _url2).href;
    }
    get withCredentials() {
        return __privateGet(this, _withCredentials);
    }
    get onerror() {
        return __privateGet(this, _onError);
    }
    set onerror(value) {
        __privateSet(this, _onError, value);
    }
    get onmessage() {
        return __privateGet(this, _onMessage);
    }
    set onmessage(value) {
        __privateSet(this, _onMessage, value);
    }
    get onopen() {
        return __privateGet(this, _onOpen);
    }
    set onopen(value) {
        __privateSet(this, _onOpen, value);
    }
    addEventListener(type2, listener, options2) {
        const listen = listener;
        super.addEventListener(type2, listen, options2);
    }
    removeEventListener(type2, listener, options2) {
        const listen = listener;
        super.removeEventListener(type2, listen, options2);
    }
    close() {
        __privateGet(this, _reconnectTimer) && clearTimeout(__privateGet(this, _reconnectTimer)), __privateGet(this, _readyState) !== this.CLOSED && (__privateGet(this, _controller) && __privateGet(this, _controller).abort(), __privateSet(this, _readyState, this.CLOSED), __privateSet(this, _controller, void 0));
    }
};
_readyState = new WeakMap(), _url2 = new WeakMap(), _redirectUrl = new WeakMap(), _withCredentials = new WeakMap(), _fetch = new WeakMap(), _reconnectInterval = new WeakMap(), _reconnectTimer = new WeakMap(), _lastEventId = new WeakMap(), _controller = new WeakMap(), _parser = new WeakMap(), _onError = new WeakMap(), _onMessage = new WeakMap(), _onOpen = new WeakMap(), _EventSource_instances = new WeakSet(), connect_fn = function() {
    __privateSet(this, _readyState, this.CONNECTING), __privateSet(this, _controller, new AbortController()), __privateGet(this, _fetch)(__privateGet(this, _url2), __privateMethod(this, _EventSource_instances, getRequestOptions_fn).call(this)).then(__privateGet(this, _onFetchResponse)).catch(__privateGet(this, _onFetchError));
}, _onFetchResponse = new WeakMap(), _onFetchError = new WeakMap(), getRequestOptions_fn = function() {
    var _a18;
    const init = {
        mode: "cors",
        redirect: "follow",
        headers: {
            Accept: "text/event-stream",
            ...__privateGet(this, _lastEventId) ? {
                "Last-Event-ID": __privateGet(this, _lastEventId)
            } : void 0
        },
        cache: "no-store",
        signal: (_a18 = __privateGet(this, _controller)) == null ? void 0 : _a18.signal
    };
    return "window" in globalThis && (init.credentials = this.withCredentials ? "include" : "same-origin"), init;
}, _onEvent = new WeakMap(), _onRetryChange = new WeakMap(), failConnection_fn = function(message, code) {
    var _a18;
    __privateGet(this, _readyState) !== this.CLOSED && __privateSet(this, _readyState, this.CLOSED);
    const errorEvent = new ErrorEvent("error", {
        code,
        message
    });
    (_a18 = __privateGet(this, _onError)) == null || _a18.call(this, errorEvent), this.dispatchEvent(errorEvent);
}, scheduleReconnect_fn = function(message, code) {
    var _a18;
    if (__privateGet(this, _readyState) === this.CLOSED) return;
    __privateSet(this, _readyState, this.CONNECTING);
    const errorEvent = new ErrorEvent("error", {
        code,
        message
    });
    (_a18 = __privateGet(this, _onError)) == null || _a18.call(this, errorEvent), this.dispatchEvent(errorEvent), __privateSet(this, _reconnectTimer, setTimeout(__privateGet(this, _reconnect), __privateGet(this, _reconnectInterval)));
}, _reconnect = new WeakMap(), EventSource.CONNECTING = 0, EventSource.OPEN = 1, EventSource.CLOSED = 2;

}
