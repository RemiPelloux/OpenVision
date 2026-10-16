var __wakaru_require_react_production_cache;
export function require_react_production() {
if (__wakaru_require_react_production_cache) return __wakaru_require_react_production_cache;
var e = {};
__wakaru_require_react_production_cache = e;
"use strict";
var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), d = Symbol.iterator;
var g = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, h = Object.assign, b = {};
function f(e, n, t) {
    this.props = e, this.context = n, this.refs = b, this.updater = t || g;
}
function y() {}
function _(e, n, t) {
    this.props = e, this.context = n, this.refs = b, this.updater = t || g;
}
f.prototype.isReactComponent = {}, f.prototype.setState = function(e, n) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, n, "setState");
}, f.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
}, y.prototype = f.prototype;
var x = _.prototype = new y;
x.constructor = _, h(x, f.prototype), x.isPureReactComponent = !0;
var k = Array.isArray;
function $() {}
var w = {
    H: null,
    A: null,
    T: null,
    S: null
}, v = Object.prototype.hasOwnProperty;
function j(e, t, a) {
    var r = a.ref;
    return {
        $$typeof: n,
        type: e,
        key: t,
        ref: void 0 !== r ? r : null,
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
function A(e, a, r, s, i) {
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
                case p:
                    return A((u = e._init)(e._payload), a, r, s, i);
            }
    }
    if (u) return i = i(e), u = "" === s ? "." + E(e, 0) : s, k(i) ? (r = "", null != u && (r = u.replace(S, "$&/") + "/"), A(i, a, r, "", function(e) {
        return e;
    })) : null != i && (C(i) && (l = i, c = r + (null == i.key || e && e.key === i.key ? "" : ("" + i.key).replace(S, "$&/") + "/") + u, i = j(l.type, c, l.props)), a.push(i)), 1;
    u = 0;
    var m, g = "" === s ? "." : s + ":";
    if (k(e)) for(var h = 0; h < e.length; h++)u += A(s = e[h], a, r, o = g + E(s, h), i);
    else if ("function" == typeof (h = null === (m = e) || "object" != typeof m ? null : "function" == typeof (m = d && m[d] || m["@@iterator"]) ? m : null)) for(e = h.call(e), h = 0; !(s = e.next()).done;)u += A(s = s.value, a, r, o = g + E(s, h++), i);
    else if ("object" === o) {
        if ("function" == typeof e.then) return A(function(e) {
            switch(e.status){
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    switch("string" == typeof e.status ? e.then($, $) : (e.status = "pending", e.then(function(n) {
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
        }(e), a, r, s, i);
        throw a = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(e).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    return u;
}
function T(e, n, t) {
    if (null == e) return e;
    var a = [], r = 0;
    return A(e, a, "", "", function(e) {
        return n.call(t, e, r++);
    }), a;
}
function F(e) {
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
var N = "function" == typeof reportError ? reportError : function(e) {
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
}, P = {
    map: T,
    forEach: function(e, n, t) {
        T(e, function() {
            n.apply(this, arguments);
        }, t);
    },
    count: function(e) {
        var n = 0;
        return T(e, function() {
            n++;
        }), n;
    },
    toArray: function(e) {
        return T(e, function(e) {
            return e;
        }) || [];
    },
    only: function(e) {
        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    }
};
e.Activity = m, e.Children = P, e.Component = f, e.Fragment = a, e.Profiler = s, e.PureComponent = _, e.StrictMode = r, e.Suspense = c, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
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
    var a = h({}, e.props), r = e.key;
    if (null != n) for(s in void 0 !== n.key && (r = "" + n.key), n)!v.call(n, s) || "key" === s || "__self" === s || "__source" === s || "ref" === s && void 0 === n.ref || (a[s] = n[s]);
    var s = arguments.length - 2;
    if (1 === s) a.children = t;
    else if (1 < s) {
        for(var i = Array(s), o = 0; o < s; o++)i[o] = arguments[o + 2];
        a.children = i;
    }
    return j(e.type, r, a);
}, e.createContext = function(e) {
    return (e = {
        $$typeof: o,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    }).Provider = e, e.Consumer = {
        $$typeof: i,
        _context: e
    }, e;
}, e.createElement = function(e, n, t) {
    var a, r = {}, s = null;
    if (null != n) for(a in void 0 !== n.key && (s = "" + n.key), n)v.call(n, a) && "key" !== a && "__self" !== a && "__source" !== a && (r[a] = n[a]);
    var i = arguments.length - 2;
    if (1 === i) r.children = t;
    else if (1 < i) {
        for(var o = Array(i), l = 0; l < i; l++)o[l] = arguments[l + 2];
        r.children = o;
    }
    if (e && e.defaultProps) for(a in i = e.defaultProps)void 0 === r[a] && (r[a] = i[a]);
    return j(e, s, r);
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
        $$typeof: p,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: F
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
        var a = e(), r = w.S;
        null !== r && r(t, a), "object" == typeof a && null !== a && "function" == typeof a.then && a.then($, N);
    } catch (e) {
        N(e);
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
