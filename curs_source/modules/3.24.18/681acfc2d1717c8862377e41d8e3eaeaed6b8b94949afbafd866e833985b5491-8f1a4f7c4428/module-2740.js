"use strict";
const { webidl: n } = require("./module-8005.js"), { kEnumerableProperty: r } = require("./module-9361.js"), { MessagePort: o } = require("./module-8167.js");
class s extends Event {
    #e;
    constructor(e, t = {}){
        n.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        }), super(e = n.converters.DOMString(e), t = n.converters.MessageEventInit(t)), this.#e = t;
    }
    get data() {
        return n.brandCheck(this, s), this.#e.data;
    }
    get origin() {
        return n.brandCheck(this, s), this.#e.origin;
    }
    get lastEventId() {
        return n.brandCheck(this, s), this.#e.lastEventId;
    }
    get source() {
        return n.brandCheck(this, s), this.#e.source;
    }
    get ports() {
        return n.brandCheck(this, s), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports;
    }
    initMessageEvent(e, t = !1, A = !1, r = null, o = "", i = "", a = null, c = []) {
        return n.brandCheck(this, s), n.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        }), new s(e, {
            bubbles: t,
            cancelable: A,
            data: r,
            origin: o,
            lastEventId: i,
            source: a,
            ports: c
        });
    }
}
class i extends Event {
    #e;
    constructor(e, t = {}){
        n.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        }), super(e = n.converters.DOMString(e), t = n.converters.CloseEventInit(t)), this.#e = t;
    }
    get wasClean() {
        return n.brandCheck(this, i), this.#e.wasClean;
    }
    get code() {
        return n.brandCheck(this, i), this.#e.code;
    }
    get reason() {
        return n.brandCheck(this, i), this.#e.reason;
    }
}
class a extends Event {
    #e;
    constructor(e, t){
        n.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        }), super(e, t), e = n.converters.DOMString(e), t = n.converters.ErrorEventInit(t ?? {}), this.#e = t;
    }
    get message() {
        return n.brandCheck(this, a), this.#e.message;
    }
    get filename() {
        return n.brandCheck(this, a), this.#e.filename;
    }
    get lineno() {
        return n.brandCheck(this, a), this.#e.lineno;
    }
    get colno() {
        return n.brandCheck(this, a), this.#e.colno;
    }
    get error() {
        return n.brandCheck(this, a), this.#e.error;
    }
}
Object.defineProperties(s.prototype, {
    [Symbol.toStringTag]: {
        value: "MessageEvent",
        configurable: !0
    },
    data: r,
    origin: r,
    lastEventId: r,
    source: r,
    ports: r,
    initMessageEvent: r
}), Object.defineProperties(i.prototype, {
    [Symbol.toStringTag]: {
        value: "CloseEvent",
        configurable: !0
    },
    reason: r,
    code: r,
    wasClean: r
}), Object.defineProperties(a.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: r,
    filename: r,
    lineno: r,
    colno: r,
    error: r
}), n.converters.MessagePort = n.interfaceConverter(o), n.converters["sequence<MessagePort>"] = n.sequenceConverter(n.converters.MessagePort);
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
    MessageEvent: s,
    CloseEvent: i,
    ErrorEvent: a
};
