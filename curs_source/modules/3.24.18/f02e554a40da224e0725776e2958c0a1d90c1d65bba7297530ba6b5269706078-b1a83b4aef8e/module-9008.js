"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(e, r);
    s && !("get" in s ? !e.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
    void 0 === n && (n = r), t[n] = e[r];
}), i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
}), o = this && this.__importStar || (n = function(t) {
    return n = Object.getOwnPropertyNames || function(t) {
        var e = [];
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[e.length] = r);
        return e;
    }, n(t);
}, function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for(var r = n(t), o = 0; o < r.length; o++)"default" !== r[o] && s(e, t, r[o]);
    return i(e, t), e;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Http2SessionReplacer = exports.SILENT_SESSION_THRESHOLD_MS = void 0;
const a = o(require("./module-2467.js")), u = require("./module-8394.js");
exports.SILENT_SESSION_THRESHOLD_MS = 15e3;
exports.Http2SessionReplacer = class {
    constructor(t){
        this.options = t, this.sessionOf = new WeakMap, this.openStreams = new Set, this.goawayWatched = new WeakSet, this.now = t.now ?? (()=>Date.now()), this.current = t.create(), this.lastResponseByteAt = this.now();
    }
    get authority() {
        return this.current.authority;
    }
    async request(t, e, r, n) {
        this.judgeClosedStreams();
        const s = this.current, i = this.now(), o = await this.requestWithEstablishTimeout(s, t, e, r, n);
        this.sessionOf.set(o, s);
        const a = {
            stream: o,
            session: s,
            openedAt: i,
            errored: !1
        };
        return this.openStreams.add(a), o.once("error", ()=>{
            a.errored = !0;
        }), o.once("close", ()=>this.judge(a)), this.watchGoaway(o.session), o;
    }
    watchGoaway(t) {
        const e = this.options.onGoaway;
        void 0 === e || void 0 === t || this.goawayWatched.has(t) || (this.goawayWatched.add(t), t.once("goaway", (r)=>{
            if (r === a.constants.NGHTTP2_NO_ERROR) {
                for (const r of this.openStreams)if (r.stream.session === t && !r.stream.closed) return void e();
            }
        }));
    }
    judgeClosedStreams() {
        for (const t of this.openStreams)t.stream.closed && this.judge(t);
    }
    judge(t) {
        if (!this.openStreams.delete(t)) return;
        const { stream: r, session: n, openedAt: s } = t;
        if (t.errored || r.rstCode === a.constants.NGHTTP2_NO_ERROR || n !== this.current) return;
        const i = this.now() - Math.max(s, this.lastResponseByteAt);
        i < exports.SILENT_SESSION_THRESHOLD_MS || this.replace(n, i, "silent_stream_abandoned");
    }
    replace(t, e, r) {
        this.current = this.options.create(), this.lastResponseByteAt = this.now(), this.options.onReplaced(t, e, r);
    }
    async requestWithEstablishTimeout(t, e, r, n, s) {
        const i = this.options.establishTimeoutMs?.() ?? 0;
        if (!(i > 0)) return t.request(e, r, n, s);
        const o = this.now();
        let a;
        const c = ()=>{
            a = setTimeout(()=>{
                const e = t.state();
                if ("connecting" === e || "verifying" === e) {
                    const e = this.now() - o;
                    t === this.current && this.replace(t, e, "establish_timeout"), t.abortCurrent(new u.ConnectError(`HTTP/2 session not established after ${Math.round(e)} ms`, u.Code.Unavailable));
                }
                c();
            }, i), a.unref?.();
        };
        c();
        try {
            return await t.request(e, r, n, s);
        } finally{
            clearTimeout(a);
        }
    }
    notifyResponseByteRead(t) {
        const e = this.sessionOf.get(t);
        void 0 !== e ? (e === this.current && (this.lastResponseByteAt = this.now()), e.notifyResponseByteRead(t)) : this.current.notifyResponseByteRead(t);
    }
};
