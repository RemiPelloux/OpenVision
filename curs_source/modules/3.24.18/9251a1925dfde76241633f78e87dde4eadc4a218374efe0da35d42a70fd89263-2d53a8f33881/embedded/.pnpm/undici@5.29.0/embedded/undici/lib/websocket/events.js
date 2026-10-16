import { require_util } from "../core/util.js";
import { require_webidl } from "../fetch/webidl.js";
var __wakaru_require_events_cache;
export function require_events() {
if (__wakaru_require_events_cache) return __wakaru_require_events_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_events_cache = module2;
"use strict";
var { webidl } = require_webidl();
var { kEnumerableProperty } = require_util();
var { MessagePort } = require("worker_threads");
var MessageEvent2 = class _MessageEvent extends Event {
    #eventInit;
    constructor(type2, eventInitDict = {}){
        webidl.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        });
        type2 = webidl.converters.DOMString(type2);
        eventInitDict = webidl.converters.MessageEventInit(eventInitDict);
        super(type2, eventInitDict);
        this.#eventInit = eventInitDict;
    }
    get data() {
        webidl.brandCheck(this, _MessageEvent);
        return this.#eventInit.data;
    }
    get origin() {
        webidl.brandCheck(this, _MessageEvent);
        return this.#eventInit.origin;
    }
    get lastEventId() {
        webidl.brandCheck(this, _MessageEvent);
        return this.#eventInit.lastEventId;
    }
    get source() {
        webidl.brandCheck(this, _MessageEvent);
        return this.#eventInit.source;
    }
    get ports() {
        webidl.brandCheck(this, _MessageEvent);
        if (!Object.isFrozen(this.#eventInit.ports)) {
            Object.freeze(this.#eventInit.ports);
        }
        return this.#eventInit.ports;
    }
    initMessageEvent(type2, bubbles = false, cancelable = false, data = null, origin = "", lastEventId = "", source = null, ports = []) {
        webidl.brandCheck(this, _MessageEvent);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        });
        return new _MessageEvent(type2, {
            bubbles,
            cancelable,
            data,
            origin,
            lastEventId,
            source,
            ports
        });
    }
};
var CloseEvent = class _CloseEvent extends Event {
    #eventInit;
    constructor(type2, eventInitDict = {}){
        webidl.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        });
        type2 = webidl.converters.DOMString(type2);
        eventInitDict = webidl.converters.CloseEventInit(eventInitDict);
        super(type2, eventInitDict);
        this.#eventInit = eventInitDict;
    }
    get wasClean() {
        webidl.brandCheck(this, _CloseEvent);
        return this.#eventInit.wasClean;
    }
    get code() {
        webidl.brandCheck(this, _CloseEvent);
        return this.#eventInit.code;
    }
    get reason() {
        webidl.brandCheck(this, _CloseEvent);
        return this.#eventInit.reason;
    }
};
var ErrorEvent2 = class _ErrorEvent extends Event {
    #eventInit;
    constructor(type2, eventInitDict){
        webidl.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        });
        super(type2, eventInitDict);
        type2 = webidl.converters.DOMString(type2);
        eventInitDict = webidl.converters.ErrorEventInit(eventInitDict ?? {});
        this.#eventInit = eventInitDict;
    }
    get message() {
        webidl.brandCheck(this, _ErrorEvent);
        return this.#eventInit.message;
    }
    get filename() {
        webidl.brandCheck(this, _ErrorEvent);
        return this.#eventInit.filename;
    }
    get lineno() {
        webidl.brandCheck(this, _ErrorEvent);
        return this.#eventInit.lineno;
    }
    get colno() {
        webidl.brandCheck(this, _ErrorEvent);
        return this.#eventInit.colno;
    }
    get error() {
        webidl.brandCheck(this, _ErrorEvent);
        return this.#eventInit.error;
    }
};
Object.defineProperties(MessageEvent2.prototype, {
    [Symbol.toStringTag]: {
        value: "MessageEvent",
        configurable: true
    },
    data: kEnumerableProperty,
    origin: kEnumerableProperty,
    lastEventId: kEnumerableProperty,
    source: kEnumerableProperty,
    ports: kEnumerableProperty,
    initMessageEvent: kEnumerableProperty
});
Object.defineProperties(CloseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "CloseEvent",
        configurable: true
    },
    reason: kEnumerableProperty,
    code: kEnumerableProperty,
    wasClean: kEnumerableProperty
});
Object.defineProperties(ErrorEvent2.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: true
    },
    message: kEnumerableProperty,
    filename: kEnumerableProperty,
    lineno: kEnumerableProperty,
    colno: kEnumerableProperty,
    error: kEnumerableProperty
});
webidl.converters.MessagePort = webidl.interfaceConverter(MessagePort);
webidl.converters["sequence<MessagePort>"] = webidl.sequenceConverter(webidl.converters.MessagePort);
var eventInit = [
    {
        key: "bubbles",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "cancelable",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "composed",
        converter: webidl.converters.boolean,
        defaultValue: false
    }
];
webidl.converters.MessageEventInit = webidl.dictionaryConverter([
    ...eventInit,
    {
        key: "data",
        converter: webidl.converters.any,
        defaultValue: null
    },
    {
        key: "origin",
        converter: webidl.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lastEventId",
        converter: webidl.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "source",
        converter: webidl.nullableConverter(webidl.converters.MessagePort),
        defaultValue: null
    },
    {
        key: "ports",
        converter: webidl.converters["sequence<MessagePort>"],
        get defaultValue () {
            return [];
        }
    }
]);
webidl.converters.CloseEventInit = webidl.dictionaryConverter([
    ...eventInit,
    {
        key: "wasClean",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "code",
        converter: webidl.converters["unsigned short"],
        defaultValue: 0
    },
    {
        key: "reason",
        converter: webidl.converters.USVString,
        defaultValue: ""
    }
]);
webidl.converters.ErrorEventInit = webidl.dictionaryConverter([
    ...eventInit,
    {
        key: "message",
        converter: webidl.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "filename",
        converter: webidl.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lineno",
        converter: webidl.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "colno",
        converter: webidl.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "error",
        converter: webidl.converters.any
    }
]);
module2.exports = {
    MessageEvent: MessageEvent2,
    CloseEvent,
    ErrorEvent: ErrorEvent2
};

return module2.exports;
}
