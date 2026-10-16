"use strict";
const { webidl: n } = require("./module-18193.js"), { kEnumerableProperty: s } = require("./module-83589.js"), { MessagePort: o } = require("./module-28167.js");
class i extends Event {
    #f;
    constructor(e, t = {}){
        n.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        }), super(e = n.converters.DOMString(e), t = n.converters.MessageEventInit(t)), this.#f = t;
    }
    get data() {
        return n.brandCheck(this, i), this.#f.data;
    }
    get origin() {
        return n.brandCheck(this, i), this.#f.origin;
    }
    get lastEventId() {
        return n.brandCheck(this, i), this.#f.lastEventId;
    }
    get source() {
        return n.brandCheck(this, i), this.#f.source;
    }
    get ports() {
        return n.brandCheck(this, i), Object.isFrozen(this.#f.ports) || Object.freeze(this.#f.ports), this.#f.ports;
    }
    initMessageEvent(e, t = !1, r = !1, s = null, o = "", a = "", c = null, l = []) {
        return n.brandCheck(this, i), n.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        }), new i(e, {
            bubbles: t,
            cancelable: r,
            data: s,
            origin: o,
            lastEventId: a,
            source: c,
            ports: l
        });
    }
}
class a extends Event {
    #f;
    constructor(e, t = {}){
        n.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        }), super(e = n.converters.DOMString(e), t = n.converters.CloseEventInit(t)), this.#f = t;
    }
    get wasClean() {
        return n.brandCheck(this, a), this.#f.wasClean;
    }
    get code() {
        return n.brandCheck(this, a), this.#f.code;
    }
    get reason() {
        return n.brandCheck(this, a), this.#f.reason;
    }
}
class c extends Event {
    #f;
    constructor(e, t){
        n.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        }), super(e, t), e = n.converters.DOMString(e), t = n.converters.ErrorEventInit(t ?? {}), this.#f = t;
    }
    get message() {
        return n.brandCheck(this, c), this.#f.message;
    }
    get filename() {
        return n.brandCheck(this, c), this.#f.filename;
    }
    get lineno() {
        return n.brandCheck(this, c), this.#f.lineno;
    }
    get colno() {
        return n.brandCheck(this, c), this.#f.colno;
    }
    get error() {
        return n.brandCheck(this, c), this.#f.error;
    }
}
Object.defineProperties(i.prototype, {
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
}), Object.defineProperties(c.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: s,
    filename: s,
    lineno: s,
    colno: s,
    error: s
}), n.converters.MessagePort = n.interfaceConverter(o), n.converters["sequence<MessagePort>"] = n.sequenceConverter(n.converters.MessagePort);
const l = [
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
    ...l,
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
    ...l,
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
    ...l,
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
    MessageEvent: i,
    CloseEvent: a,
    ErrorEvent: c
};
