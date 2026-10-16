"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(t, r);
    s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, n, s);
} : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
}), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), i = this && this.__importStar || (n = function(e) {
    return n = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t;
    }, n(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r = n(e), i = 0; i < r.length; i++)"default" !== r[i] && s(t, e, r[i]);
    return o(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Http2SessionReplacer = exports.SILENT_SESSION_THRESHOLD_MS = void 0;
const a = i(require("./module-32467.js")), c = require("./module-97163.js");
exports.SILENT_SESSION_THRESHOLD_MS = 15e3;
exports.Http2SessionReplacer = class {
    constructor(e){
        this.options = e, this.sessionOf = new WeakMap, this.openStreams = new Set, this.goawayWatched = new WeakSet, this.now = e.now ?? (()=>Date.now()), this.current = e.create(), this.lastResponseByteAt = this.now();
    }
    get authority() {
        return this.current.authority;
    }
    async request(e, t, r, n) {
        this.judgeClosedStreams();
        const s = this.current, o = this.now(), i = await this.requestWithEstablishTimeout(s, e, t, r, n);
        this.sessionOf.set(i, s);
        const a = {
            stream: i,
            session: s,
            openedAt: o,
            errored: !1
        };
        return this.openStreams.add(a), i.once("error", ()=>{
            a.errored = !0;
        }), i.once("close", ()=>this.judge(a)), this.watchGoaway(i.session), i;
    }
    watchGoaway(e) {
        const t = this.options.onGoaway;
        void 0 === t || void 0 === e || this.goawayWatched.has(e) || (this.goawayWatched.add(e), e.once("goaway", (r)=>{
            if (r === a.constants.NGHTTP2_NO_ERROR) {
                for (const r of this.openStreams)if (r.stream.session === e && !r.stream.closed) return void t();
            }
        }));
    }
    judgeClosedStreams() {
        for (const e of this.openStreams)e.stream.closed && this.judge(e);
    }
    judge(e) {
        if (!this.openStreams.delete(e)) return;
        const { stream: r, session: n, openedAt: s } = e;
        if (e.errored || r.rstCode === a.constants.NGHTTP2_NO_ERROR || n !== this.current) return;
        const o = this.now() - Math.max(s, this.lastResponseByteAt);
        o < exports.SILENT_SESSION_THRESHOLD_MS || this.replace(n, o, "silent_stream_abandoned");
    }
    replace(e, t, r) {
        this.current = this.options.create(), this.lastResponseByteAt = this.now(), this.options.onReplaced(e, t, r);
    }
    async requestWithEstablishTimeout(e, t, r, n, s) {
        const o = this.options.establishTimeoutMs?.() ?? 0;
        if (!(o > 0)) return e.request(t, r, n, s);
        const i = this.now();
        let a;
        const l = ()=>{
            a = setTimeout(()=>{
                const t = e.state();
                if ("connecting" === t || "verifying" === t) {
                    const t = this.now() - i;
                    e === this.current && this.replace(e, t, "establish_timeout"), e.abortCurrent(new c.ConnectError(`HTTP/2 session not established after ${Math.round(t)} ms`, c.Code.Unavailable));
                }
                l();
            }, o), a.unref?.();
        };
        l();
        try {
            return await e.request(t, r, n, s);
        } finally{
            clearTimeout(a);
        }
    }
    notifyResponseByteRead(e) {
        const t = this.sessionOf.get(e);
        void 0 !== t ? (t === this.current && (this.lastResponseByteAt = this.now()), t.notifyResponseByteRead(e)) : this.current.notifyResponseByteRead(e);
    }
};
