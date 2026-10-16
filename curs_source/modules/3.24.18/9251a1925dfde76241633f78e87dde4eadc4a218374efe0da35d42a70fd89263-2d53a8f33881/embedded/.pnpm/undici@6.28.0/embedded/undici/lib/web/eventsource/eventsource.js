import { require_util8 } from "../../core/util.js";
import { require_eventsource_stream } from "./eventsource-stream.js";
import { require_util15 } from "./util.js";
import { require_data_url } from "../fetch/data-url.js";
import { require_fetch2 } from "../fetch/index.js";
import { require_request4 } from "../fetch/request.js";
import { require_response2 } from "../fetch/response.js";
import { require_util9 } from "../fetch/util.js";
import { require_webidl2 } from "../fetch/webidl.js";
import { require_events2 } from "../websocket/events.js";
var __wakaru_require_eventsource_cache;
export function require_eventsource() {
if (__wakaru_require_eventsource_cache) return __wakaru_require_eventsource_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_eventsource_cache = module2;
"use strict";
var { pipeline: pipeline2 } = require("node:stream");
var { fetching } = require_fetch2();
var { makeRequest } = require_request4();
var { webidl } = require_webidl2();
var { EventSourceStream } = require_eventsource_stream();
var { parseMIMEType } = require_data_url();
var { createFastMessageEvent } = require_events2();
var { isNetworkError } = require_response2();
var { delay: delay3 } = require_util15();
var { kEnumerableProperty } = require_util8();
var { environmentSettingsObject } = require_util9();
var experimentalWarned = false;
var defaultReconnectionTime = 3e3;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var ANONYMOUS = "anonymous";
var USE_CREDENTIALS = "use-credentials";
var EventSource2 = class _EventSource extends EventTarget {
    #events = {
        open: null,
        error: null,
        message: null
    };
    #url = null;
    #withCredentials = false;
    #readyState = CONNECTING;
    #request = null;
    #controller = null;
    #dispatcher;
    #state;
    constructor(url2, eventSourceInitDict = {}){
        super();
        webidl.util.markAsUncloneable(this);
        const prefix = "EventSource constructor";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        if (!experimentalWarned) {
            experimentalWarned = true;
            process.emitWarning("EventSource is experimental, expect them to change at any time.", {
                code: "UNDICI-ES"
            });
        }
        url2 = webidl.converters.USVString(url2, prefix, "url");
        eventSourceInitDict = webidl.converters.EventSourceInitDict(eventSourceInitDict, prefix, "eventSourceInitDict");
        this.#dispatcher = eventSourceInitDict.dispatcher;
        this.#state = {
            lastEventId: "",
            reconnectionTime: defaultReconnectionTime
        };
        const settings = environmentSettingsObject;
        let urlRecord;
        try {
            urlRecord = new URL(url2, settings.settingsObject.baseUrl);
            this.#state.origin = urlRecord.origin;
        } catch (e) {
            throw new DOMException(e, "SyntaxError");
        }
        this.#url = urlRecord.href;
        let corsAttributeState = ANONYMOUS;
        if (eventSourceInitDict.withCredentials) {
            corsAttributeState = USE_CREDENTIALS;
            this.#withCredentials = true;
        }
        const initRequest = {
            redirect: "follow",
            keepalive: true,
            mode: "cors",
            credentials: corsAttributeState === "anonymous" ? "same-origin" : "omit",
            referrer: "no-referrer"
        };
        initRequest.client = environmentSettingsObject.settingsObject;
        initRequest.headersList = [
            [
                "accept",
                {
                    name: "accept",
                    value: "text/event-stream"
                }
            ]
        ];
        initRequest.cache = "no-store";
        initRequest.initiator = "other";
        initRequest.urlList = [
            new URL(this.#url)
        ];
        this.#request = makeRequest(initRequest);
        this.#connect();
    }
    get readyState() {
        return this.#readyState;
    }
    get url() {
        return this.#url;
    }
    get withCredentials() {
        return this.#withCredentials;
    }
    #connect() {
        if (this.#readyState === CLOSED) return;
        this.#readyState = CONNECTING;
        const fetchParams = {
            request: this.#request,
            dispatcher: this.#dispatcher
        };
        const processEventSourceEndOfBody = (response)=>{
            if (isNetworkError(response)) {
                this.dispatchEvent(new Event("error"));
                this.close();
            }
            this.#reconnect();
        };
        fetchParams.processResponseEndOfBody = processEventSourceEndOfBody;
        fetchParams.processResponse = (response)=>{
            if (isNetworkError(response)) {
                if (response.aborted) {
                    this.close();
                    this.dispatchEvent(new Event("error"));
                    return;
                } else {
                    this.#reconnect();
                    return;
                }
            }
            const contentType = response.headersList.get("content-type", true);
            const mimeType = contentType !== null ? parseMIMEType(contentType) : "failure";
            const contentTypeValid = mimeType !== "failure" && mimeType.essence === "text/event-stream";
            if (response.status !== 200 || contentTypeValid === false) {
                this.close();
                this.dispatchEvent(new Event("error"));
                return;
            }
            this.#readyState = OPEN;
            this.dispatchEvent(new Event("open"));
            this.#state.origin = response.urlList[response.urlList.length - 1].origin;
            const eventSourceStream = new EventSourceStream({
                eventSourceSettings: this.#state,
                push: (event)=>{
                    this.dispatchEvent(createFastMessageEvent(event.type, event.options));
                }
            });
            pipeline2(response.body.stream, eventSourceStream, (error3)=>{
                if (error3?.aborted === false) {
                    this.close();
                    this.dispatchEvent(new Event("error"));
                }
            });
        };
        this.#controller = fetching(fetchParams);
    }
    async #reconnect() {
        if (this.#readyState === CLOSED) return;
        this.#readyState = CONNECTING;
        this.dispatchEvent(new Event("error"));
        await delay3(this.#state.reconnectionTime);
        if (this.#readyState !== CONNECTING) return;
        if (this.#state.lastEventId.length) {
            this.#request.headersList.set("last-event-id", this.#state.lastEventId, true);
        }
        this.#connect();
    }
    close() {
        webidl.brandCheck(this, _EventSource);
        if (this.#readyState === CLOSED) return;
        this.#readyState = CLOSED;
        this.#controller.abort();
        this.#request = null;
    }
    get onopen() {
        return this.#events.open;
    }
    set onopen(fn) {
        if (this.#events.open) {
            this.removeEventListener("open", this.#events.open);
        }
        if (typeof fn === "function") {
            this.#events.open = fn;
            this.addEventListener("open", fn);
        } else {
            this.#events.open = null;
        }
    }
    get onmessage() {
        return this.#events.message;
    }
    set onmessage(fn) {
        if (this.#events.message) {
            this.removeEventListener("message", this.#events.message);
        }
        if (typeof fn === "function") {
            this.#events.message = fn;
            this.addEventListener("message", fn);
        } else {
            this.#events.message = null;
        }
    }
    get onerror() {
        return this.#events.error;
    }
    set onerror(fn) {
        if (this.#events.error) {
            this.removeEventListener("error", this.#events.error);
        }
        if (typeof fn === "function") {
            this.#events.error = fn;
            this.addEventListener("error", fn);
        } else {
            this.#events.error = null;
        }
    }
};
var constantsPropertyDescriptors = {
    CONNECTING: {
        __proto__: null,
        configurable: false,
        enumerable: true,
        value: CONNECTING,
        writable: false
    },
    OPEN: {
        __proto__: null,
        configurable: false,
        enumerable: true,
        value: OPEN,
        writable: false
    },
    CLOSED: {
        __proto__: null,
        configurable: false,
        enumerable: true,
        value: CLOSED,
        writable: false
    }
};
Object.defineProperties(EventSource2, constantsPropertyDescriptors);
Object.defineProperties(EventSource2.prototype, constantsPropertyDescriptors);
Object.defineProperties(EventSource2.prototype, {
    close: kEnumerableProperty,
    onerror: kEnumerableProperty,
    onmessage: kEnumerableProperty,
    onopen: kEnumerableProperty,
    readyState: kEnumerableProperty,
    url: kEnumerableProperty,
    withCredentials: kEnumerableProperty
});
webidl.converters.EventSourceInitDict = webidl.dictionaryConverter([
    {
        key: "withCredentials",
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: "dispatcher",
        converter: webidl.converters.any
    }
]);
module2.exports = {
    EventSource: EventSource2,
    defaultReconnectionTime
};

return module2.exports;
}
