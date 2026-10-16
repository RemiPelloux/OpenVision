Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = exports.BugIndicatingError = exports.ErrorNoTelemetry = exports.ExpectedError = exports.NotSupportedError = exports.NotImplementedError = exports.ReadonlyError = exports.CancellationError = exports.errorHandler = exports.ErrorHandler = void 0, exports.setUnexpectedErrorHandler = function(e) {
    exports.errorHandler.setUnexpectedErrorHandler(e);
}, exports.isSigPipeError = function(e) {
    if (!e || "object" != typeof e) return !1;
    const t = e;
    return "EPIPE" === t.code && "WRITE" === t.syscall?.toUpperCase();
}, exports.onBugIndicatingError = function(e) {
    return void exports.errorHandler.onUnexpectedError(e);
}, exports.onUnexpectedError = function(e) {
    r(e) || exports.errorHandler.onUnexpectedError(e);
    return;
}, exports.onUnexpectedExternalError = function(e) {
    r(e) || exports.errorHandler.onUnexpectedExternalError(e);
    return;
}, exports.transformErrorForSerialization = function e(t) {
    if (t instanceof Error) {
        const { name: n, message: i, cause: r } = t;
        return {
            $isError: !0,
            name: n,
            message: i,
            stack: t.stacktrace || t.stack,
            noTelemetry: h.isErrorNoTelemetry(t),
            cause: r ? e(r) : void 0,
            code: t.code
        };
    }
    return t;
}, exports.transformErrorFromSerialization = function e(t) {
    let n;
    t.noTelemetry ? n = new h : (n = new Error, n.name = t.name);
    n.message = t.message, n.stack = t.stack, t.code && (n.code = t.code);
    t.cause && (n.cause = e(t.cause));
    return n;
}, exports.isCancellationError = r, exports.canceled = function() {
    const e = new Error(i);
    return e.name = e.message, e;
}, exports.createAbortError = function(e) {
    return new DOMException(e, "AbortError");
}, exports.illegalArgument = function(e) {
    return e ? new Error(`Illegal argument: ${e}`) : new Error("Illegal argument");
}, exports.illegalState = function(e) {
    return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}, exports.getErrorMessage = function(e) {
    if (!e) return "Error";
    if (e.message) return e.message;
    if (e.stack) return e.stack.split("\n")[0];
    return String(e);
}, exports.hasTimeoutErrorInCause = function(e) {
    let t = e;
    for(; t;){
        if (t instanceof DOMException && "TimeoutError" === t.name) return !0;
        if (!(t instanceof Error && t.cause)) break;
        t = t.cause;
    }
    return !1;
}, exports.abortablePromise = function(e, t, n) {
    if (!n) return e;
    n.throwIfAborted();
    let i, r, s = n;
    const o = new Promise((e, t)=>{
        i = e, r = t;
    }), a = ()=>{
        const e = {
            signal: s,
            resolve: i,
            reject: r
        };
        return s?.removeEventListener("abort", u), s = void 0, i = void 0, r = void 0, e;
    }, u = ()=>{
        const { signal: e, reject: n } = a(), i = new Error(t);
        i.cause = e?.reason, n?.(i);
    };
    return n.addEventListener("abort", u), e.then((e)=>a().resolve?.(e), (e)=>a().reject?.(e)), o;
}, exports.shouldLogCancellationDebugTrace = g, exports.enableCancellationErrorLoggingForDevUser = function(e) {
    e && (m = !0);
}, exports.isCancellationErrorLoggingEnabled = function() {
    return m;
};
class n {
    constructor(){
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
            setTimeout(()=>{
                if (e.stack) {
                    if (h.isErrorNoTelemetry(e)) throw new h(e.message + "\n\n" + e.stack);
                    throw new Error(e.message + "\n\n" + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    addListener(e) {
        return this.listeners.push(e), ()=>{
            this._removeListener(e);
        };
    }
    emit(e) {
        this.listeners.forEach((t)=>{
            t(e);
        });
    }
    _removeListener(e) {
        this.listeners.splice(this.listeners.indexOf(e), 1);
    }
    setUnexpectedErrorHandler(e) {
        this.unexpectedErrorHandler = e;
    }
    getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
    }
    onUnexpectedError(e) {
        this.unexpectedErrorHandler(e), this.emit(e);
    }
    onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
    }
}
exports.ErrorHandler = n, exports.errorHandler = new n;
const i = "Canceled";
function r(e) {
    return e instanceof s || e instanceof Error && e.name === i && e.message === i;
}
class s extends Error {
    constructor(){
        if (super(i), this.name = this.message, m && "undefined" != typeof console && g()) {
            const e = (new Error).stack ?? "";
            exports.ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING.some((t)=>e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
        }
    }
}
exports.CancellationError = s;
class o extends TypeError {
    constructor(e){
        super(e ? `${e} is read-only and cannot be changed` : "Cannot change read-only property");
    }
}
exports.ReadonlyError = o;
class a extends Error {
    constructor(e){
        super("NotImplemented"), e && (this.message = e);
    }
}
exports.NotImplementedError = a;
class u extends Error {
    constructor(e){
        super("NotSupported"), e && (this.message = e);
    }
}
exports.NotSupportedError = u;
class l extends Error {
    constructor(){
        super(...arguments), this.isExpected = !0;
    }
}
exports.ExpectedError = l;
class h extends Error {
    constructor(e){
        super(e), this.name = "CodeExpectedError";
    }
    static fromError(e) {
        if (e instanceof h) return e;
        const t = new h;
        return t.message = e.message, t.stack = e.stack, t;
    }
    static isErrorNoTelemetry(e) {
        return "CodeExpectedError" === e.name;
    }
}
exports.ErrorNoTelemetry = h;
class c extends Error {
    constructor(e){
        super(e || "An unexpected bug occurred."), Object.setPrototypeOf(this, c.prototype);
    }
}
exports.BugIndicatingError = c, exports.ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = [
    "composerChatService",
    "composerService",
    "composerUtilsService",
    "composerAgentService",
    "composerCapabilities",
    "composerDecisionsService",
    "aiServiceImpl",
    "toolsV2Service",
    "toolsV2HandlerRegistryService",
    "agentCompatService",
    "mockAgentStreamController",
    "mockComposerStreamController",
    "toolFormer",
    "ToolFormer",
    "tool",
    "agent",
    "Agent",
    "stream",
    "Stream",
    "ComposerFullInputBox",
    "composerActions",
    "cancelAll",
    "abortChatAndWaitForFinish",
    "abortGenerationUUID"
];
const f = 5e3;
let d = 0;
function g() {
    const e = Date.now();
    return !(e < d) && (d = e + f, !0);
}
let m = !1;
