var __wakaru_require_react_production_cache;
export function require_react_production() {
if (__wakaru_require_react_production_cache) return __wakaru_require_react_production_cache;
var e = {};
__wakaru_require_react_production_cache = e;
"use strict";
var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), r = Symbol.for("react.consumer"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), d = Symbol.iterator;
var b = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, g = Object.assign, h = {};
function f(e, n, t) {
    this.props = e, this.context = n, this.refs = h, this.updater = t || b;
}
function y() {}
function _(e, n, t) {
    this.props = e, this.context = n, this.refs = h, this.updater = t || b;
}
f.prototype.isReactComponent = {}, f.prototype.setState = function(e, n) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, n, "setState");
}, f.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
}, y.prototype = f.prototype;
var $ = _.prototype = new y;
$.constructor = _, g($, f.prototype), $.isPureReactComponent = !0;
var x = Array.isArray;
function k() {}
var w = {
    H: null,
    A: null,
    T: null,
    S: null
}, j = Object.prototype.hasOwnProperty;
function v(e, t, a) {
    var s = a.ref;
    return {
        $$typeof: n,
        type: e,
        key: t,
        ref: void 0 !== s ? s : null,
        props: a
    };
}
function C(e) {
    return "object" == typeof e && null !== e && e.$$typeof === n;
}
var S = /\/+/g;
function E(e, n) {
    return "object" == typeof e && null !== e && null != e.key ? (t = "" + e.key, a = {
        "=": "=0",
        ":": "=2"
    }, "$" + t.replace(/[=:]/g, function(e) {
        return a[e];
    })) : n.toString(36);
    var t, a;
}
function F(e, a, s, i, r) {
    var o = typeof e;
    "undefined" !== o && "boolean" !== o || (e = null);
    var l, c, u = !1;
    if (null === e) u = !0;
    else switch(o){
        case "bigint":
        case "string":
        case "number":
            u = !0;
            break;
        case "object":
            switch(e.$$typeof){
                case n:
                case t:
                    u = !0;
                    break;
                case m:
                    return F((u = e._init)(e._payload), a, s, i, r);
            }
    }
    if (u) return r = r(e), u = "" === i ? "." + E(e, 0) : i, x(r) ? (s = "", null != u && (s = u.replace(S, "$&/") + "/"), F(r, a, s, "", function(e) {
        return e;
    })) : null != r && (C(r) && (l = r, c = s + (null == r.key || e && e.key === r.key ? "" : ("" + r.key).replace(S, "$&/") + "/") + u, r = v(l.type, c, l.props)), a.push(r)), 1;
    u = 0;
    var p, b = "" === i ? "." : i + ":";
    if (x(e)) for(var g = 0; g < e.length; g++)u += F(i = e[g], a, s, o = b + E(i, g), r);
    else if ("function" == typeof (g = null === (p = e) || "object" != typeof p ? null : "function" == typeof (p = d && p[d] || p["@@iterator"]) ? p : null)) for(e = g.call(e), g = 0; !(i = e.next()).done;)u += F(i = i.value, a, s, o = b + E(i, g++), r);
    else if ("object" === o) {
        if ("function" == typeof e.then) return F(function(e) {
            switch(e.status){
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    switch("string" == typeof e.status ? e.then(k, k) : (e.status = "pending", e.then(function(n) {
                        "pending" === e.status && (e.status = "fulfilled", e.value = n);
                    }, function(n) {
                        "pending" === e.status && (e.status = "rejected", e.reason = n);
                    })), e.status){
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                    }
            }
            throw e;
        }(e), a, s, i, r);
        throw a = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(e).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    return u;
}
function q(e, n, t) {
    if (null == e) return e;
    var a = [], s = 0;
    return F(e, a, "", "", function(e) {
        return n.call(t, e, s++);
    }), a;
}
function N(e) {
    if (-1 === e._status) {
        var n = e._result;
        (n = n()).then(function(n) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = n);
        }, function(n) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = n);
        }), -1 === e._status && (e._status = 0, e._result = n);
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var A = "function" == typeof reportError ? reportError : function(e) {
    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
        var n = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
            error: e
        });
        if (!window.dispatchEvent(n)) return;
    } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
    console.error(e);
}, z = {
    map: q,
    forEach: function(e, n, t) {
        q(e, function() {
            n.apply(this, arguments);
        }, t);
    },
    count: function(e) {
        var n = 0;
        return q(e, function() {
            n++;
        }), n;
    },
    toArray: function(e) {
        return q(e, function(e) {
            return e;
        }) || [];
    },
    only: function(e) {
        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    }
};
e.Activity = p, e.Children = z, e.Component = f, e.Fragment = a, e.Profiler = i, e.PureComponent = _, e.StrictMode = s, e.Suspense = c, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e) {
        return w.H.useMemoCache(e);
    }
}, e.cache = function(e) {
    return function() {
        return e.apply(null, arguments);
    };
}, e.cacheSignal = function() {
    return null;
}, e.cloneElement = function(e, n, t) {
    if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
    var a = g({}, e.props), s = e.key;
    if (null != n) for(i in void 0 !== n.key && (s = "" + n.key), n)!j.call(n, i) || "key" === i || "__self" === i || "__source" === i || "ref" === i && void 0 === n.ref || (a[i] = n[i]);
    var i = arguments.length - 2;
    if (1 === i) a.children = t;
    else if (1 < i) {
        for(var r = Array(i), o = 0; o < i; o++)r[o] = arguments[o + 2];
        a.children = r;
    }
    return v(e.type, s, a);
}, e.createContext = function(e) {
    return (e = {
        $$typeof: o,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    }).Provider = e, e.Consumer = {
        $$typeof: r,
        _context: e
    }, e;
}, e.createElement = function(e, n, t) {
    var a, s = {}, i = null;
    if (null != n) for(a in void 0 !== n.key && (i = "" + n.key), n)j.call(n, a) && "key" !== a && "__self" !== a && "__source" !== a && (s[a] = n[a]);
    var r = arguments.length - 2;
    if (1 === r) s.children = t;
    else if (1 < r) {
        for(var o = Array(r), l = 0; l < r; l++)o[l] = arguments[l + 2];
        s.children = o;
    }
    if (e && e.defaultProps) for(a in r = e.defaultProps)void 0 === s[a] && (s[a] = r[a]);
    return v(e, i, s);
}, e.createRef = function() {
    return {
        current: null
    };
}, e.forwardRef = function(e) {
    return {
        $$typeof: l,
        render: e
    };
}, e.isValidElement = C, e.lazy = function(e) {
    return {
        $$typeof: m,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: N
    };
}, e.memo = function(e, n) {
    return {
        $$typeof: u,
        type: e,
        compare: void 0 === n ? null : n
    };
}, e.startTransition = function(e) {
    var n = w.T, t = {};
    w.T = t;
    try {
        var a = e(), s = w.S;
        null !== s && s(t, a), "object" == typeof a && null !== a && "function" == typeof a.then && a.then(k, A);
    } catch (e) {
        A(e);
    } finally{
        null !== n && null !== t.types && (n.types = t.types), w.T = n;
    }
}, e.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
}, e.use = function(e) {
    return w.H.use(e);
}, e.useActionState = function(e, n, t) {
    return w.H.useActionState(e, n, t);
}, e.useCallback = function(e, n) {
    return w.H.useCallback(e, n);
}, e.useContext = function(e) {
    return w.H.useContext(e);
}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, n) {
    return w.H.useDeferredValue(e, n);
}, e.useEffect = function(e, n) {
    return w.H.useEffect(e, n);
}, e.useEffectEvent = function(e) {
    return w.H.useEffectEvent(e);
}, e.useId = function() {
    return w.H.useId();
}, e.useImperativeHandle = function(e, n, t) {
    return w.H.useImperativeHandle(e, n, t);
}, e.useInsertionEffect = function(e, n) {
    return w.H.useInsertionEffect(e, n);
}, e.useLayoutEffect = function(e, n) {
    return w.H.useLayoutEffect(e, n);
}, e.useMemo = function(e, n) {
    return w.H.useMemo(e, n);
}, e.useOptimistic = function(e, n) {
    return w.H.useOptimistic(e, n);
}, e.useReducer = function(e, n, t) {
    return w.H.useReducer(e, n, t);
}, e.useRef = function(e) {
    return w.H.useRef(e);
}, e.useState = function(e) {
    return w.H.useState(e);
}, e.useSyncExternalStore = function(e, n, t) {
    return w.H.useSyncExternalStore(e, n, t);
}, e.useTransition = function() {
    return w.H.useTransition();
}, e.version = "19.2.6";

return e;
}
