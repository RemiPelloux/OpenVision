"use strict";
const { webidl: a } = require("./module-8005.js"), { kEnumerableProperty: s } = require("./module-9361.js"), { MessagePort: o } = require("./module-8167.js");
class r extends Event {
    #e;
    constructor(e, n = {}){
        a.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        }), super(e = a.converters.DOMString(e), n = a.converters.MessageEventInit(n)), this.#e = n;
    }
    get data() {
        return a.brandCheck(this, r), this.#e.data;
    }
    get origin() {
        return a.brandCheck(this, r), this.#e.origin;
    }
    get lastEventId() {
        return a.brandCheck(this, r), this.#e.lastEventId;
    }
    get source() {
        return a.brandCheck(this, r), this.#e.source;
    }
    get ports() {
        return a.brandCheck(this, r), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports;
    }
    initMessageEvent(e, n = !1, t = !1, s = null, o = "", i = "", A = null, c = []) {
        return a.brandCheck(this, r), a.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        }), new r(e, {
            bubbles: n,
            cancelable: t,
            data: s,
            origin: o,
            lastEventId: i,
            source: A,
            ports: c
        });
    }
}
class i extends Event {
    #e;
    constructor(e, n = {}){
        a.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        }), super(e = a.converters.DOMString(e), n = a.converters.CloseEventInit(n)), this.#e = n;
    }
    get wasClean() {
        return a.brandCheck(this, i), this.#e.wasClean;
    }
    get code() {
        return a.brandCheck(this, i), this.#e.code;
    }
    get reason() {
        return a.brandCheck(this, i), this.#e.reason;
    }
}
class A extends Event {
    #e;
    constructor(e, n){
        a.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        }), super(e, n), e = a.converters.DOMString(e), n = a.converters.ErrorEventInit(n ?? {}), this.#e = n;
    }
    get message() {
        return a.brandCheck(this, A), this.#e.message;
    }
    get filename() {
        return a.brandCheck(this, A), this.#e.filename;
    }
    get lineno() {
        return a.brandCheck(this, A), this.#e.lineno;
    }
    get colno() {
        return a.brandCheck(this, A), this.#e.colno;
    }
    get error() {
        return a.brandCheck(this, A), this.#e.error;
    }
}
Object.defineProperties(r.prototype, {
    [Symbol.toStringTag]: {
        value: "MessageEvent",
        configurable: !0
    },
    data: s,
    origin: s,
    lastEventId: s,
    source: s,
    ports: s,
    initMessageEvent: s
}), Object.defineProperties(i.prototype, {
    [Symbol.toStringTag]: {
        value: "CloseEvent",
        configurable: !0
    },
    reason: s,
    code: s,
    wasClean: s
}), Object.defineProperties(A.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: s,
    filename: s,
    lineno: s,
    colno: s,
    error: s
}), a.converters.MessagePort = a.interfaceConverter(o), a.converters["sequence<MessagePort>"] = a.sequenceConverter(a.converters.MessagePort);
const c = [
    {
        key: "bubbles",
        converter: a.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: a.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: a.converters.boolean,
        defaultValue: !1
    }
];
a.converters.MessageEventInit = a.dictionaryConverter([
    ...c,
    {
        key: "data",
        converter: a.converters.any,
        defaultValue: null
    },
    {
        key: "origin",
        converter: a.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lastEventId",
        converter: a.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "source",
        converter: a.nullableConverter(a.converters.MessagePort),
        defaultValue: null
    },
    {
        key: "ports",
        converter: a.converters["sequence<MessagePort>"],
        get defaultValue () {
            return [];
        }
    }
]), a.converters.CloseEventInit = a.dictionaryConverter([
    ...c,
    {
        key: "wasClean",
        converter: a.converters.boolean,
        defaultValue: !1
    },
    {
        key: "code",
        converter: a.converters["unsigned short"],
        defaultValue: 0
    },
    {
        key: "reason",
        converter: a.converters.USVString,
        defaultValue: ""
    }
]), a.converters.ErrorEventInit = a.dictionaryConverter([
    ...c,
    {
        key: "message",
        converter: a.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "filename",
        converter: a.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lineno",
        converter: a.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "colno",
        converter: a.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "error",
        converter: a.converters.any
    }
]), module.exports = {
    MessageEvent: r,
    CloseEvent: i,
    ErrorEvent: A
};
