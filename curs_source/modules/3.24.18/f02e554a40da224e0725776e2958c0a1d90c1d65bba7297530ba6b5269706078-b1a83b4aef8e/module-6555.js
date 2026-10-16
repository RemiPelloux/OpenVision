"use strict";
const { kForOnEventAttribute: n, kListener: s } = require("./module-8864.js"), i = Symbol("kCode"), o = Symbol("kData"), a = Symbol("kError"), u = Symbol("kMessage"), c = Symbol("kReason"), l = Symbol("kTarget"), m = Symbol("kType"), d = Symbol("kWasClean");
class f {
    constructor(t){
        this[l] = null, this[m] = t;
    }
    get target() {
        return this[l];
    }
    get type() {
        return this[m];
    }
}
Object.defineProperty(f.prototype, "target", {
    enumerable: !0
}), Object.defineProperty(f.prototype, "type", {
    enumerable: !0
});
class p extends f {
    constructor(t, e = {}){
        super(t), this[i] = void 0 === e.code ? 0 : e.code, this[c] = void 0 === e.reason ? "" : e.reason, this[d] = void 0 !== e.wasClean && e.wasClean;
    }
    get code() {
        return this[i];
    }
    get reason() {
        return this[c];
    }
    get wasClean() {
        return this[d];
    }
}
Object.defineProperty(p.prototype, "code", {
    enumerable: !0
}), Object.defineProperty(p.prototype, "reason", {
    enumerable: !0
}), Object.defineProperty(p.prototype, "wasClean", {
    enumerable: !0
});
class h extends f {
    constructor(t, e = {}){
        super(t), this[a] = void 0 === e.error ? null : e.error, this[u] = void 0 === e.message ? "" : e.message;
    }
    get error() {
        return this[a];
    }
    get message() {
        return this[u];
    }
}
Object.defineProperty(h.prototype, "error", {
    enumerable: !0
}), Object.defineProperty(h.prototype, "message", {
    enumerable: !0
});
class g extends f {
    constructor(t, e = {}){
        super(t), this[o] = void 0 === e.data ? null : e.data;
    }
    get data() {
        return this[o];
    }
}
Object.defineProperty(g.prototype, "data", {
    enumerable: !0
});
const A = {
    addEventListener (t, e, r = {}) {
        for (const i of this.listeners(t))if (!r[n] && i[s] === e && !i[n]) return;
        let i;
        if ("message" === t) i = function(t, r) {
            const n = new g("message", {
                data: r ? t : t.toString()
            });
            n[l] = this, _(e, this, n);
        };
        else if ("close" === t) i = function(t, r) {
            const n = new p("close", {
                code: t,
                reason: r.toString(),
                wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            n[l] = this, _(e, this, n);
        };
        else if ("error" === t) i = function(t) {
            const r = new h("error", {
                error: t,
                message: t.message
            });
            r[l] = this, _(e, this, r);
        };
        else {
            if ("open" !== t) return;
            i = function() {
                const t = new f("open");
                t[l] = this, _(e, this, t);
            };
        }
        i[n] = !!r[n], i[s] = e, r.once ? this.once(t, i) : this.on(t, i);
    },
    removeEventListener (t, e) {
        for (const r of this.listeners(t))if (r[s] === e && !r[n]) {
            this.removeListener(t, r);
            break;
        }
    }
};
function _(t, e, r) {
    "object" == typeof t && t.handleEvent ? t.handleEvent.call(t, r) : t.call(e, r);
}
module.exports = {
    CloseEvent: p,
    ErrorEvent: h,
    Event: f,
    EventTarget: A,
    MessageEvent: g
};
