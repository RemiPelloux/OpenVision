"use strict";
const { webidl: t } = require("./module-8005.js"), { kEnumerableProperty: s } = require("./module-9361.js"), { MessagePort: o } = require("./module-8167.js");
class r extends Event {
    #e;
    constructor(e, a = {}){
        t.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent constructor"
        }), super(e = t.converters.DOMString(e), a = t.converters.MessageEventInit(a)), this.#e = a;
    }
    get data() {
        return t.brandCheck(this, r), this.#e.data;
    }
    get origin() {
        return t.brandCheck(this, r), this.#e.origin;
    }
    get lastEventId() {
        return t.brandCheck(this, r), this.#e.lastEventId;
    }
    get source() {
        return t.brandCheck(this, r), this.#e.source;
    }
    get ports() {
        return t.brandCheck(this, r), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports;
    }
    initMessageEvent(e, a = !1, n = !1, s = null, o = "", i = "", l = null, d = []) {
        return t.brandCheck(this, r), t.argumentLengthCheck(arguments, 1, {
            header: "MessageEvent.initMessageEvent"
        }), new r(e, {
            bubbles: a,
            cancelable: n,
            data: s,
            origin: o,
            lastEventId: i,
            source: l,
            ports: d
        });
    }
}
class i extends Event {
    #e;
    constructor(e, a = {}){
        t.argumentLengthCheck(arguments, 1, {
            header: "CloseEvent constructor"
        }), super(e = t.converters.DOMString(e), a = t.converters.CloseEventInit(a)), this.#e = a;
    }
    get wasClean() {
        return t.brandCheck(this, i), this.#e.wasClean;
    }
    get code() {
        return t.brandCheck(this, i), this.#e.code;
    }
    get reason() {
        return t.brandCheck(this, i), this.#e.reason;
    }
}
class l extends Event {
    #e;
    constructor(e, a){
        t.argumentLengthCheck(arguments, 1, {
            header: "ErrorEvent constructor"
        }), super(e, a), e = t.converters.DOMString(e), a = t.converters.ErrorEventInit(a ?? {}), this.#e = a;
    }
    get message() {
        return t.brandCheck(this, l), this.#e.message;
    }
    get filename() {
        return t.brandCheck(this, l), this.#e.filename;
    }
    get lineno() {
        return t.brandCheck(this, l), this.#e.lineno;
    }
    get colno() {
        return t.brandCheck(this, l), this.#e.colno;
    }
    get error() {
        return t.brandCheck(this, l), this.#e.error;
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
}), Object.defineProperties(l.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: s,
    filename: s,
    lineno: s,
    colno: s,
    error: s
}), t.converters.MessagePort = t.interfaceConverter(o), t.converters["sequence<MessagePort>"] = t.sequenceConverter(t.converters.MessagePort);
const d = [
    {
        key: "bubbles",
        converter: t.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: t.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: t.converters.boolean,
        defaultValue: !1
    }
];
t.converters.MessageEventInit = t.dictionaryConverter([
    ...d,
    {
        key: "data",
        converter: t.converters.any,
        defaultValue: null
    },
    {
        key: "origin",
        converter: t.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lastEventId",
        converter: t.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "source",
        converter: t.nullableConverter(t.converters.MessagePort),
        defaultValue: null
    },
    {
        key: "ports",
        converter: t.converters["sequence<MessagePort>"],
        get defaultValue () {
            return [];
        }
    }
]), t.converters.CloseEventInit = t.dictionaryConverter([
    ...d,
    {
        key: "wasClean",
        converter: t.converters.boolean,
        defaultValue: !1
    },
    {
        key: "code",
        converter: t.converters["unsigned short"],
        defaultValue: 0
    },
    {
        key: "reason",
        converter: t.converters.USVString,
        defaultValue: ""
    }
]), t.converters.ErrorEventInit = t.dictionaryConverter([
    ...d,
    {
        key: "message",
        converter: t.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "filename",
        converter: t.converters.USVString,
        defaultValue: ""
    },
    {
        key: "lineno",
        converter: t.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "colno",
        converter: t.converters["unsigned long"],
        defaultValue: 0
    },
    {
        key: "error",
        converter: t.converters.any
    }
]), module.exports = {
    MessageEvent: r,
    CloseEvent: i,
    ErrorEvent: l
};
