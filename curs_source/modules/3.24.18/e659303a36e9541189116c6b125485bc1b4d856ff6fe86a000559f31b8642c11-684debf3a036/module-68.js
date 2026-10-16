Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CancellationTokenSource = exports.CancellationToken = void 0, exports.cancellationTokenSourceFromAbortSignal = function(e) {
    const t = new a;
    let n;
    e && (e.aborted ? t.cancel() : (n = ()=>t.cancel(), e.addEventListener("abort", n, {
        once: !0
    })));
    const i = ()=>{
        e && n && e.removeEventListener("abort", n), t.dispose();
    };
    return {
        get token () {
            return t.token;
        },
        dispose: i,
        [Symbol.dispose]: i
    };
}, exports.cancelOnDispose = function(e) {
    const t = new a;
    return e.add({
        dispose () {
            t.cancel();
        }
    }), t.token;
};
const i = require("./module-3.js"), r = Object.freeze(function(e, t) {
    const n = setTimeout(e.bind(t), 0);
    return {
        dispose () {
            clearTimeout(n);
        }
    };
});
var s;
!function(e) {
    e.isCancellationToken = function(t) {
        return t === e.None || t === e.Cancelled || t instanceof o || !(!t || "object" != typeof t) && "boolean" == typeof t.isCancellationRequested && "function" == typeof t.onCancellationRequested;
    }, e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: i.Event.None
    }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: r
    });
}(s || (exports.CancellationToken = s = {}));
class o {
    constructor(){
        this._isCancelled = !1, this._emitter = null;
    }
    cancel() {
        this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
        return this._isCancelled;
    }
    get onCancellationRequested() {
        return this._isCancelled ? r : (this._emitter || (this._emitter = new i.Emitter), this._emitter.event);
    }
    dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
}
class a {
    constructor(e){
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
    }
    get token() {
        return this._token || (this._token = new o), this._token;
    }
    cancel() {
        this._token ? this._token instanceof o && this._token.cancel() : this._token = s.Cancelled;
    }
    dispose(e = !1) {
        e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof o && this._token.dispose() : this._token = s.None;
    }
}
exports.CancellationTokenSource = a;
