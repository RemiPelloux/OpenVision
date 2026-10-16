"use strict";
const { pipeline: r } = require(57075), { fetching: s } = require("./module-75319.js"), { makeRequest: o } = require("./module-78078.js"), { webidl: n } = require("./module-43290.js"), { EventSourceStream: i } = require("./module-51364.js"), { parseMIMEType: a } = require("./module-52603.js"), { createFastMessageEvent: Q } = require("./module-63315.js"), { isNetworkError: g } = require("./module-54768.js"), { delay: E } = require("./module-42136.js"), { kEnumerableProperty: B } = require("./module-55201.js"), { environmentSettingsObject: c } = require("./module-48215.js");
let I = !1;
class C extends EventTarget {
    #_ = {
        open: null,
        error: null,
        message: null
    };
    #tA = null;
    #rA = !1;
    #sA = 0;
    #oA = null;
    #nA = null;
    #M;
    #c;
    constructor(A, e = {}){
        super(), n.util.markAsUncloneable(this);
        const t = "EventSource constructor";
        n.argumentLengthCheck(arguments, 1, t), I || (I = !0, process.emitWarning("EventSource is experimental, expect them to change at any time.", {
            code: "UNDICI-ES"
        })), A = n.converters.USVString(A, t, "url"), e = n.converters.EventSourceInitDict(e, t, "eventSourceInitDict"), this.#M = e.dispatcher, this.#c = {
            lastEventId: "",
            reconnectionTime: 3e3
        };
        const r = c;
        let s;
        try {
            s = new URL(A, r.settingsObject.baseUrl), this.#c.origin = s.origin;
        } catch (A) {
            throw new DOMException(A, "SyntaxError");
        }
        this.#tA = s.href;
        let i = "anonymous";
        e.withCredentials && (i = "use-credentials", this.#rA = !0);
        const a = {
            redirect: "follow",
            keepalive: !0,
            mode: "cors",
            credentials: "anonymous" === i ? "same-origin" : "omit",
            referrer: "no-referrer"
        };
        a.client = c.settingsObject, a.headersList = [
            [
                "accept",
                {
                    name: "accept",
                    value: "text/event-stream"
                }
            ]
        ], a.cache = "no-store", a.initiator = "other", a.urlList = [
            new URL(this.#tA)
        ], this.#oA = o(a), this.#iA();
    }
    get readyState() {
        return this.#sA;
    }
    get url() {
        return this.#tA;
    }
    get withCredentials() {
        return this.#rA;
    }
    #iA() {
        if (2 === this.#sA) return;
        this.#sA = 0;
        const A = {
            request: this.#oA,
            dispatcher: this.#M
        };
        A.processResponseEndOfBody = (A)=>{
            g(A) && (this.dispatchEvent(new Event("error")), this.close()), this.#aA();
        }, A.processResponse = (A)=>{
            if (g(A)) return A.aborted ? (this.close(), void this.dispatchEvent(new Event("error"))) : void this.#aA();
            const e = A.headersList.get("content-type", !0), t = null !== e ? a(e) : "failure", s = "failure" !== t && "text/event-stream" === t.essence;
            if (200 !== A.status || !1 === s) return this.close(), void this.dispatchEvent(new Event("error"));
            this.#sA = 1, this.dispatchEvent(new Event("open")), this.#c.origin = A.urlList[A.urlList.length - 1].origin;
            const o = new i({
                eventSourceSettings: this.#c,
                push: (A)=>{
                    this.dispatchEvent(Q(A.type, A.options));
                }
            });
            r(A.body.stream, o, (A)=>{
                !1 === A?.aborted && (this.close(), this.dispatchEvent(new Event("error")));
            });
        }, this.#nA = s(A);
    }
    async #aA() {
        2 !== this.#sA && (this.#sA = 0, this.dispatchEvent(new Event("error")), await E(this.#c.reconnectionTime), 0 === this.#sA && (this.#c.lastEventId.length && this.#oA.headersList.set("last-event-id", this.#c.lastEventId, !0), this.#iA()));
    }
    close() {
        n.brandCheck(this, C), 2 !== this.#sA && (this.#sA = 2, this.#nA.abort(), this.#oA = null);
    }
    get onopen() {
        return this.#_.open;
    }
    set onopen(A) {
        this.#_.open && this.removeEventListener("open", this.#_.open), "function" == typeof A ? (this.#_.open = A, this.addEventListener("open", A)) : this.#_.open = null;
    }
    get onmessage() {
        return this.#_.message;
    }
    set onmessage(A) {
        this.#_.message && this.removeEventListener("message", this.#_.message), "function" == typeof A ? (this.#_.message = A, this.addEventListener("message", A)) : this.#_.message = null;
    }
    get onerror() {
        return this.#_.error;
    }
    set onerror(A) {
        this.#_.error && this.removeEventListener("error", this.#_.error), "function" == typeof A ? (this.#_.error = A, this.addEventListener("error", A)) : this.#_.error = null;
    }
}
const h = {
    CONNECTING: {
        __proto__: null,
        configurable: !1,
        enumerable: !0,
        value: 0,
        writable: !1
    },
    OPEN: {
        __proto__: null,
        configurable: !1,
        enumerable: !0,
        value: 1,
        writable: !1
    },
    CLOSED: {
        __proto__: null,
        configurable: !1,
        enumerable: !0,
        value: 2,
        writable: !1
    }
};
Object.defineProperties(C, h), Object.defineProperties(C.prototype, h), Object.defineProperties(C.prototype, {
    close: B,
    onerror: B,
    onmessage: B,
    onopen: B,
    readyState: B,
    url: B,
    withCredentials: B
}), n.converters.EventSourceInitDict = n.dictionaryConverter([
    {
        key: "withCredentials",
        converter: n.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "dispatcher",
        converter: n.converters.any
    }
]), module.exports = {
    EventSource: C,
    defaultReconnectionTime: 3e3
};
