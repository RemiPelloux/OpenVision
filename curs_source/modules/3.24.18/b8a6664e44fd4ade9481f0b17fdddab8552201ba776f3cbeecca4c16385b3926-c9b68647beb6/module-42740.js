"use strict";
const { webidl: r } = require("./module-48005.js"), { kEnumerableProperty: s } = require("./module-9361.js"), { MessagePort: o } = require(28167);
class n extends Event {
    #o;
    constructor(A, e = {}){
        r.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        }), super(A = r.converters.DOMString(A), e = r.converters.MessageEventInit(e)), this.#o = e;
    }
    get data() {
        return r.brandCheck(this, n), this.#o.data;
    }
    get origin() {
        return r.brandCheck(this, n), this.#o.origin;
    }
    get lastEventId() {
        return r.brandCheck(this, n), this.#o.lastEventId;
    }
    get source() {
        return r.brandCheck(this, n), this.#o.source;
    }
    get ports() {
        return r.brandCheck(this, n), Object.isFrozen(this.#o.ports) || Object.freeze(this.#o.ports), this.#o.ports;
    }
    initMessageEvent(A, e = !1, t = !1, s = null, o = "", i = "", E = null, Q = []) {
        return r.brandCheck(this, n), r.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        }), new n(A, {
            bubbles: e,
            cancelable: t,
            data: s,
            origin: o,
            lastEventId: i,
            source: E,
            ports: Q
        });
    }
}
class i extends Event {
    #o;
    constructor(A, e = {}){
        r.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        }), super(A = r.converters.DOMString(A), e = r.converters.CloseEventInit(e)), this.#o = e;
    }
    get wasClean() {
        return r.brandCheck(this, i), this.#o.wasClean;
    }
    get code() {
        return r.brandCheck(this, i), this.#o.code;
    }
    get reason() {
        return r.brandCheck(this, i), this.#o.reason;
    }
}
class E extends Event {
    #o;
    constructor(A, e){
        r.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        }), super(A, e), A = r.converters.DOMString(A), e = r.converters.ErrorEventInit(e ?? {}), this.#o = e;
    }
    get message() {
        return r.brandCheck(this, E), this.#o.message;
    }
    get filename() {
        return r.brandCheck(this, E), this.#o.filename;
    }
    get lineno() {
        return r.brandCheck(this, E), this.#o.lineno;
    }
    get colno() {
        return r.brandCheck(this, E), this.#o.colno;
    }
    get error() {
        return r.brandCheck(this, E), this.#o.error;
    }
}
Object.defineProperties(n.prototype, {
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
}), Object.defineProperties(E.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: s,
    filename: s,
    lineno: s,
    colno: s,
    error: s
}), r.converters.MessagePort = r.interfaceConverter(o), r.converters["sequence<MessagePort>"] = r.sequenceConverter(r.converters.MessagePort);
const Q = [
    {
        key: "bubbles",
        converter: r.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: r.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: r.converters.boolean,
        defaultValue: !1
    }
];
r.converters.MessageEventInit = r.dictionaryConverter([
    ...Q,
    {
        key: "data",
        converter: r.converters.any,
        defaultValue: null
    },
    {
        key: "origin",
        converter: r.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lastEventId",
        converter: r.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "source",
        converter: r.nullableConverter(r.converters.MessagePort),
        defaultValue: null
    },
    {
        key: "ports",
        converter: r.converters["sequence<MessagePort>"],
        get defaultValue () {
            return [];
        }
    }
]), r.converters.CloseEventInit = r.dictionaryConverter([
    ...Q,
    {
        key: "wasClean",
        converter: r.converters.boolean,
        defaultValue: !1
    },
    {
        key: "code",
        converter: r.converters["unsigned short"],
        defaultValue: 0
    },
    {
        key: "reason",
        converter: r.converters.USVString,
        defaultValue: ""
    }
]), r.converters.ErrorEventInit = r.dictionaryConverter([
    ...Q,
    {
        key: "message",
        converter: r.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "filename",
        converter: r.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lineno",
        converter: r.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "colno",
        converter: r.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "error",
        converter: r.converters.any
    }
]), module.exports = {
    MessageEvent: n,
    CloseEvent: i,
    ErrorEvent: E
};
