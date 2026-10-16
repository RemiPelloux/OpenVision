"use strict";
const { webidl: r } = require("./module-43290.js"), { kEnumerableProperty: s } = require("./module-55201.js"), { kConstruct: o } = require("./module-76992.js"), { MessagePort: n } = require(75919);
class i extends Event {
    #X;
    constructor(A, e = {}){
        if (A === o) return super(arguments[1], arguments[2]), void r.util.markAsUncloneable(this);
        const t = "MessageEvent constructor";
        r.argumentLengthCheck(arguments, 1, t), super(A = r.converters.DOMString(A, t, "type"), e = r.converters.MessageEventInit(e, t, "eventInitDict")), this.#X = e, r.util.markAsUncloneable(this);
    }
    get data() {
        return r.brandCheck(this, i), this.#X.data;
    }
    get origin() {
        return r.brandCheck(this, i), this.#X.origin;
    }
    get lastEventId() {
        return r.brandCheck(this, i), this.#X.lastEventId;
    }
    get source() {
        return r.brandCheck(this, i), this.#X.source;
    }
    get ports() {
        return r.brandCheck(this, i), Object.isFrozen(this.#X.ports) || Object.freeze(this.#X.ports), this.#X.ports;
    }
    initMessageEvent(A, e = !1, t = !1, s = null, o = "", n = "", a = null, Q = []) {
        return r.brandCheck(this, i), r.argumentLengthCheck(arguments, 1, "MessageEvent.initMessageEvent"), new i(A, {
            bubbles: e,
            cancelable: t,
            data: s,
            origin: o,
            lastEventId: n,
            source: a,
            ports: Q
        });
    }
    static createFastMessageEvent(A, e) {
        const t = new i(o, A, e);
        return t.#X = e, t.#X.data ??= null, t.#X.origin ??= "", t.#X.lastEventId ??= "", t.#X.source ??= null, t.#X.ports ??= [], t;
    }
}
const { createFastMessageEvent: a } = i;
delete i.createFastMessageEvent;
class Q extends Event {
    #X;
    constructor(A, e = {}){
        const t = "CloseEvent constructor";
        r.argumentLengthCheck(arguments, 1, t), super(A = r.converters.DOMString(A, t, "type"), e = r.converters.CloseEventInit(e)), this.#X = e, r.util.markAsUncloneable(this);
    }
    get wasClean() {
        return r.brandCheck(this, Q), this.#X.wasClean;
    }
    get code() {
        return r.brandCheck(this, Q), this.#X.code;
    }
    get reason() {
        return r.brandCheck(this, Q), this.#X.reason;
    }
}
class g extends Event {
    #X;
    constructor(A, e){
        const t = "ErrorEvent constructor";
        r.argumentLengthCheck(arguments, 1, t), super(A, e), r.util.markAsUncloneable(this), A = r.converters.DOMString(A, t, "type"), e = r.converters.ErrorEventInit(e ?? {}), this.#X = e;
    }
    get message() {
        return r.brandCheck(this, g), this.#X.message;
    }
    get filename() {
        return r.brandCheck(this, g), this.#X.filename;
    }
    get lineno() {
        return r.brandCheck(this, g), this.#X.lineno;
    }
    get colno() {
        return r.brandCheck(this, g), this.#X.colno;
    }
    get error() {
        return r.brandCheck(this, g), this.#X.error;
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
}), Object.defineProperties(Q.prototype, {
    [Symbol.toStringTag]: {
        value: "CloseEvent",
        configurable: !0
    },
    reason: s,
    code: s,
    wasClean: s
}), Object.defineProperties(g.prototype, {
    [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: !0
    },
    message: s,
    filename: s,
    lineno: s,
    colno: s,
    error: s
}), r.converters.MessagePort = r.interfaceConverter(n), r.converters["sequence<MessagePort>"] = r.sequenceConverter(r.converters.MessagePort);
const E = [
    {
        key: "bubbles",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "cancelable",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "composed",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    }
];
r.converters.MessageEventInit = r.dictionaryConverter([
    ...E,
    {
        key: "data",
        converter: r.converters.any,
        defaultValue: ()=>null
    },
    {
        key: "origin",
        converter: r.converters.USVString,
        defaultValue: ()=>""
    },
    {
        key: "lastEventId",
        converter: r.converters.DOMString,
        defaultValue: ()=>""
    },
    {
        key: "source",
        converter: r.nullableConverter(r.converters.MessagePort),
        defaultValue: ()=>null
    },
    {
        key: "ports",
        converter: r.converters["sequence<MessagePort>"],
        defaultValue: ()=>new Array(0)
    }
]), r.converters.CloseEventInit = r.dictionaryConverter([
    ...E,
    {
        key: "wasClean",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "code",
        converter: r.converters["unsigned short"],
        defaultValue: ()=>0
    },
    {
        key: "reason",
        converter: r.converters.USVString,
        defaultValue: ()=>""
    }
]), r.converters.ErrorEventInit = r.dictionaryConverter([
    ...E,
    {
        key: "message",
        converter: r.converters.DOMString,
        defaultValue: ()=>""
    },
    {
        key: "filename",
        converter: r.converters.USVString,
        defaultValue: ()=>""
    },
    {
        key: "lineno",
        converter: r.converters["unsigned long"],
        defaultValue: ()=>0
    },
    {
        key: "colno",
        converter: r.converters["unsigned long"],
        defaultValue: ()=>0
    },
    {
        key: "error",
        converter: r.converters.any
    }
]), module.exports = {
    MessageEvent: i,
    CloseEvent: Q,
    ErrorEvent: g,
    createFastMessageEvent: a
};
