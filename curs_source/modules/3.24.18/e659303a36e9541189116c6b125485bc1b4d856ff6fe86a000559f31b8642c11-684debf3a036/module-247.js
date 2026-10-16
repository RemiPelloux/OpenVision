Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isReadable = function(e) {
    const t = e;
    if (!t) return !1;
    return "function" == typeof t.read;
}, exports.isReadableStream = s, exports.isReadableBufferedStream = function(e) {
    const t = e;
    if (!t) return !1;
    return s(t.stream) && Array.isArray(t.buffer) && "boolean" == typeof t.ended;
}, exports.newWriteableStream = o, exports.consumeReadable = function(e, t) {
    const n = [];
    let i;
    for(; null !== (i = e.read());)n.push(i);
    return t(n);
}, exports.peekReadable = function(e, t, n) {
    const i = [];
    let r;
    for(; null !== (r = e.read()) && i.length < n;)i.push(r);
    if (null === r && i.length > 0) return t(i);
    return {
        read: ()=>{
            if (i.length > 0) return i.shift();
            if (void 0 !== r) {
                const e = r;
                return r = void 0, e;
            }
            return e.read();
        }
    };
}, exports.consumeStream = function(e, t) {
    return new Promise((n, i)=>{
        const r = [];
        u(e, {
            onData: (e)=>{
                t && r.push(e);
            },
            onError: (e)=>{
                t ? i(e) : n(void 0);
            },
            onEnd: ()=>{
                n(t ? t(r) : void 0);
            }
        });
    });
}, exports.listenStream = u, exports.peekStream = function(e, t) {
    return new Promise((n, i)=>{
        const s = new r.DisposableStore, o = [], a = (i)=>{
            if (o.push(i), o.length > t) return s.dispose(), e.pause(), n({
                stream: e,
                buffer: o,
                ended: !1
            });
        }, u = (e)=>(s.dispose(), i(e)), l = ()=>(s.dispose(), n({
                stream: e,
                buffer: o,
                ended: !0
            }));
        s.add((0, r.toDisposable)(()=>e.removeListener("error", u))), e.on("error", u), s.add((0, r.toDisposable)(()=>e.removeListener("end", l))), e.on("end", l), s.add((0, r.toDisposable)(()=>e.removeListener("data", a))), e.on("data", a);
    });
}, exports.toStream = function(e, t) {
    const n = o(t);
    return n.end(e), n;
}, exports.emptyStream = function() {
    const e = o(()=>{
        throw new Error("not supported");
    });
    return e.end(), e;
}, exports.toReadable = function(e) {
    let t = !1;
    return {
        read: ()=>t ? null : (t = !0, e)
    };
}, exports.transform = function(e, t, n) {
    const i = o(n);
    return u(e, {
        onData: (e)=>i.write(t.data(e)),
        onError: (e)=>i.error(t.error ? t.error(e) : e),
        onEnd: ()=>i.end()
    }), i;
}, exports.prefixedReadable = function(e, t, n) {
    let i = !1;
    return {
        read: ()=>{
            const r = t.read();
            return i ? r : (i = !0, null !== r ? n([
                e,
                r
            ]) : e);
        }
    };
}, exports.prefixedStream = function(e, t, n) {
    let i = !1;
    const r = o(n);
    return u(t, {
        onData: (t)=>i ? r.write(t) : (i = !0, r.write(n([
                e,
                t
            ]))),
        onError: (e)=>r.error(e),
        onEnd: ()=>{
            i || (i = !0, r.write(e)), r.end();
        }
    }), r;
};
const i = require("./module-976.js"), r = require("./module-147.js");
function s(e) {
    const t = e;
    return !!t && [
        t.on,
        t.pause,
        t.resume,
        t.destroy
    ].every((e)=>"function" == typeof e);
}
function o(e, t) {
    return new a(e, t);
}
class a {
    constructor(e, t){
        this.reducer = e, this.options = t, this.state = {
            flowing: !1,
            ended: !1,
            destroyed: !1
        }, this.buffer = {
            data: [],
            error: []
        }, this.listeners = {
            data: [],
            error: [],
            end: []
        }, this.pendingWritePromises = [];
    }
    pause() {
        this.state.destroyed || (this.state.flowing = !1);
    }
    resume() {
        this.state.destroyed || this.state.flowing || (this.state.flowing = !0, this.flowData(), this.flowErrors(), this.flowEnd());
    }
    write(e) {
        if (!this.state.destroyed) {
            if (this.state.flowing) this.emitData(e);
            else if (this.buffer.data.push(e), "number" == typeof this.options?.highWaterMark && this.buffer.data.length > this.options.highWaterMark) return new Promise((e)=>this.pendingWritePromises.push(e));
        }
    }
    error(e) {
        this.state.destroyed || (this.state.flowing ? this.emitError(e) : this.buffer.error.push(e));
    }
    end(e) {
        this.state.destroyed || (void 0 !== e && this.write(e), this.state.flowing ? (this.emitEnd(), this.destroy()) : this.state.ended = !0);
    }
    emitData(e) {
        this.listeners.data.slice(0).forEach((t)=>t(e));
    }
    emitError(e) {
        0 === this.listeners.error.length ? (0, i.onUnexpectedError)(e) : this.listeners.error.slice(0).forEach((t)=>t(e));
    }
    emitEnd() {
        this.listeners.end.slice(0).forEach((e)=>e());
    }
    on(e, t) {
        if (!this.state.destroyed) switch(e){
            case "data":
                this.listeners.data.push(t), this.resume();
                break;
            case "end":
                this.listeners.end.push(t), this.state.flowing && this.flowEnd() && this.destroy();
                break;
            case "error":
                this.listeners.error.push(t), this.state.flowing && this.flowErrors();
        }
    }
    removeListener(e, t) {
        if (this.state.destroyed) return;
        let n;
        switch(e){
            case "data":
                n = this.listeners.data;
                break;
            case "end":
                n = this.listeners.end;
                break;
            case "error":
                n = this.listeners.error;
        }
        if (n) {
            const e = n.indexOf(t);
            e >= 0 && n.splice(e, 1);
        }
    }
    flowData() {
        if (0 === this.buffer.data.length) return;
        if ("function" == typeof this.reducer) {
            const e = 1 === this.buffer.data.length ? this.buffer.data[0] : this.reducer(this.buffer.data);
            this.emitData(e);
        } else for (const e of this.buffer.data)this.emitData(e);
        this.buffer.data.length = 0;
        const e = [
            ...this.pendingWritePromises
        ];
        this.pendingWritePromises.length = 0, e.forEach((e)=>e());
    }
    flowErrors() {
        if (this.listeners.error.length > 0) {
            for (const e of this.buffer.error)this.emitError(e);
            this.buffer.error.length = 0;
        }
    }
    flowEnd() {
        return !!this.state.ended && (this.emitEnd(), this.listeners.end.length > 0);
    }
    destroy() {
        this.state.destroyed || (this.state.destroyed = !0, this.state.ended = !0, this.buffer.data.length = 0, this.buffer.error.length = 0, this.listeners.data.length = 0, this.listeners.error.length = 0, this.listeners.end.length = 0, this.pendingWritePromises.length = 0);
    }
}
function u(e, t, n) {
    e.on("error", (e)=>{
        n?.isCancellationRequested || t.onError(e);
    }), e.on("end", ()=>{
        n?.isCancellationRequested || t.onEnd();
    }), e.on("data", (e)=>{
        n?.isCancellationRequested || t.onData(e);
    });
}
