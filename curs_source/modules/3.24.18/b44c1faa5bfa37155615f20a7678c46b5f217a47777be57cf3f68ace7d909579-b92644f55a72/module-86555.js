"use strict";
const { kForOnEventAttribute: n, kListener: s } = require("./module-78864.js"), o = Symbol("kCode"), i = Symbol("kData"), a = Symbol("kError"), c = Symbol("kMessage"), l = Symbol("kReason"), u = Symbol("kTarget"), d = Symbol("kType"), p = Symbol("kWasClean");
class m {
    constructor(e){
        this[u] = null, this[d] = e;
    }
    get target() {
        return this[u];
    }
    get type() {
        return this[d];
    }
}
Object.defineProperty(m.prototype, "target", {
    enumerable: !0
}), Object.defineProperty(m.prototype, "type", {
    enumerable: !0
});
class h extends m {
    constructor(e, t = {}){
        super(e), this[o] = void 0 === t.code ? 0 : t.code, this[l] = void 0 === t.reason ? "" : t.reason, this[p] = void 0 !== t.wasClean && t.wasClean;
    }
    get code() {
        return this[o];
    }
    get reason() {
        return this[l];
    }
    get wasClean() {
        return this[p];
    }
}
Object.defineProperty(h.prototype, "code", {
    enumerable: !0
}), Object.defineProperty(h.prototype, "reason", {
    enumerable: !0
}), Object.defineProperty(h.prototype, "wasClean", {
    enumerable: !0
});
class f extends m {
    constructor(e, t = {}){
        super(e), this[a] = void 0 === t.error ? null : t.error, this[c] = void 0 === t.message ? "" : t.message;
    }
    get error() {
        return this[a];
    }
    get message() {
        return this[c];
    }
}
Object.defineProperty(f.prototype, "error", {
    enumerable: !0
}), Object.defineProperty(f.prototype, "message", {
    enumerable: !0
});
class g extends m {
    constructor(e, t = {}){
        super(e), this[i] = void 0 === t.data ? null : t.data;
    }
    get data() {
        return this[i];
    }
}
Object.defineProperty(g.prototype, "data", {
    enumerable: !0
});
const y = {
    addEventListener (e, t, r = {}) {
        for (const o of this.listeners(e))if (!r[n] && o[s] === t && !o[n]) return;
        let o;
        if ("message" === e) o = function(e, r) {
            const n = new g("message", {
                data: r ? e : e.toString()
            });
            n[u] = this, w(t, this, n);
        };
        else if ("close" === e) o = function(e, r) {
            const n = new h("close", {
                code: e,
                reason: r.toString(),
                wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            n[u] = this, w(t, this, n);
        };
        else if ("error" === e) o = function(e) {
            const r = new f("error", {
                error: e,
                message: e.message
            });
            r[u] = this, w(t, this, r);
        };
        else {
            if ("open" !== e) return;
            o = function() {
                const e = new m("open");
                e[u] = this, w(t, this, e);
            };
        }
        o[n] = !!r[n], o[s] = t, r.once ? this.once(e, o) : this.on(e, o);
    },
    removeEventListener (e, t) {
        for (const r of this.listeners(e))if (r[s] === t && !r[n]) {
            this.removeListener(e, r);
            break;
        }
    }
};
function w(e, t, r) {
    "object" == typeof e && e.handleEvent ? e.handleEvent.call(e, r) : e.call(t, r);
}
module.exports = {
    CloseEvent: h,
    ErrorEvent: f,
    Event: m,
    EventTarget: y,
    MessageEvent: g
};
