"use strict";
const { webidl: n } = require("./module-8193.js"), { kEnumerableProperty: s } = require("./module-3589.js"), { MessagePort: i } = require("./module-8167.js");
class o extends Event {
    #t;
    constructor(t, e = {}){
        n.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        }), super(t = n.converters.DOMString(t), e = n.converters.MessageEventInit(e)), this.#t = e;
    }
    get data() {
        return n.brandCheck(this, o), this.#t.data;
    }
    get origin() {
        return n.brandCheck(this, o), this.#t.origin;
    }
    get lastEventId() {
        return n.brandCheck(this, o), this.#t.lastEventId;
    }
    get source() {
        return n.brandCheck(this, o), this.#t.source;
    }
    get ports() {
        return n.brandCheck(this, o), Object.isFrozen(this.#t.ports) || Object.freeze(this.#t.ports), this.#t.ports;
    }
    initMessageEvent(t, e = !1, r = !1, s = null, i = "", a = "", u = null, c = []) {
        return n.brandCheck(this, o), n.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        }), new o(t, {
            bubbles: e,
            cancelable: r,
            data: s,
            origin: i,
            lastEventId: a,
            source: u,
            ports: c
        });
    }
}
class a extends Event {
    #t;
    constructor(t, e = {}){
        n.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        }), super(t = n.converters.DOMString(t), e = n.converters.CloseEventInit(e)), this.#t = e;
    }
    get wasClean() {
        return n.brandCheck(this, a), this.#t.wasClean;
    }
    get code() {
        return n.brandCheck(this, a), this.#t.code;
    }
    get reason() {
        return n.brandCheck(this, a), this.#t.reason;
    }
}
class u extends Event {
    #t;
    constructor(t, e){
        n.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        }), super(t, e), t = n.converters.DOMString(t), e = n.converters.ErrorEventInit(e ?? {}), this.#t = e;
    }
    get message() {
        return n.brandCheck(this, u), this.#t.message;
    }
    get filename() {
        return n.brandCheck(this, u), this.#t.filename;
    }
    get lineno() {
        return n.brandCheck(this, u), this.#t.lineno;
    }
    get colno() {
        return n.brandCheck(this, u), this.#t.colno;
    }
    get error() {
        return n.brandCheck(this, u), this.#t.error;
    }
}
Object.defineProperties(o.prototype, {
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
}), Object.defineProperties(a.prototype, {
    [Symbol.toStringTag]: {
        value: "CloseEvent",
        configurable: !0
    },
    reason: s,
    code: s,
    wasClean: s
}), Object.defineProperties(u.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: s,
    filename: s,
    lineno: s,
    colno: s,
    error: s
}), n.converters.MessagePort = n.interfaceConverter(i), n.converters["sequence<MessagePort>"] = n.sequenceConverter(n.converters.MessagePort);
const c = [
    {
        key: "bubbles",
        converter: n.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: n.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: n.converters.boolean,
        defaultValue: !1
    }
];
n.converters.MessageEventInit = n.dictionaryConverter([
    ...c,
    {
        key: "data",
        converter: n.converters.any,
        defaultValue: null
    },
    {
        key: "origin",
        converter: n.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lastEventId",
        converter: n.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "source",
        converter: n.nullableConverter(n.converters.MessagePort),
        defaultValue: null
    },
    {
        key: "ports",
        converter: n.converters["sequence<MessagePort>"],
        get defaultValue () {
            return [];
        }
    }
]), n.converters.CloseEventInit = n.dictionaryConverter([
    ...c,
    {
        key: "wasClean",
        converter: n.converters.boolean,
        defaultValue: !1
    },
    {
        key: "code",
        converter: n.converters["unsigned short"],
        defaultValue: 0
    },
    {
        key: "reason",
        converter: n.converters.USVString,
        defaultValue: ""
    }
]), n.converters.ErrorEventInit = n.dictionaryConverter([
    ...c,
    {
        key: "message",
        converter: n.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "filename",
        converter: n.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lineno",
        converter: n.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "colno",
        converter: n.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "error",
        converter: n.converters.any
    }
]), module.exports = {
    MessageEvent: o,
    CloseEvent: a,
    ErrorEvent: u
};
