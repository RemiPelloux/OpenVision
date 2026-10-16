var __wakaru_require_scheduler_production_cache;
export function require_scheduler_production() {
if (__wakaru_require_scheduler_production_cache) return __wakaru_require_scheduler_production_cache;
var e = {};
__wakaru_require_scheduler_production_cache = e;
"use strict";
function n(e, n) {
    var t = e.length;
    e.push(n);
    e: for(; 0 < t;){
        var a = t - 1 >>> 1, s = e[a];
        if (!(0 < r(s, n))) break e;
        e[a] = n, e[t] = s, t = a;
    }
}
function t(e) {
    return 0 === e.length ? null : e[0];
}
function a(e) {
    if (0 === e.length) return null;
    var n = e[0], t = e.pop();
    if (t !== n) {
        e[0] = t;
        e: for(var a = 0, s = e.length, i = s >>> 1; a < i;){
            var o = 2 * (a + 1) - 1, l = e[o], c = o + 1, u = e[c];
            if (0 > r(l, t)) c < s && 0 > r(u, l) ? (e[a] = u, e[c] = t, a = c) : (e[a] = l, e[o] = t, a = o);
            else {
                if (!(c < s && 0 > r(u, t))) break e;
                e[a] = u, e[c] = t, a = c;
            }
        }
    }
    return n;
}
function r(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return 0 !== t ? t : e.id - n.id;
}
var s, i, o;
e.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now ? (s = performance, e.unstable_now = function() {
    return s.now();
}) : (i = Date, o = i.now(), e.unstable_now = function() {
    return i.now() - o;
});
var l = [], c = [], u = 1, p = null, m = 3, d = !1, g = !1, h = !1, b = !1, f = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, _ = "undefined" != typeof setImmediate ? setImmediate : null;
function x(e) {
    for(var r = t(c); null !== r;){
        if (null === r.callback) a(c);
        else {
            if (!(r.startTime <= e)) break;
            a(c), r.sortIndex = r.expirationTime, n(l, r);
        }
        r = t(c);
    }
}
function k(e) {
    if (h = !1, x(e), !g) if (null !== t(l)) g = !0, j || (j = !0, $());
    else {
        var n = t(c);
        null !== n && F(k, n.startTime - e);
    }
}
var $, w, v, j = !1, C = -1, S = 5, E = -1;
function A() {
    return !!b || !(e.unstable_now() - E < S);
}
function T() {
    if (b = !1, j) {
        var n = e.unstable_now();
        E = n;
        var r = !0;
        try {
            e: {
                g = !1, h && (h = !1, y(C), C = -1), d = !0;
                var s = m;
                try {
                    n: {
                        for(x(n), p = t(l); null !== p && !(p.expirationTime > n && A());){
                            var i = p.callback;
                            if ("function" == typeof i) {
                                p.callback = null, m = p.priorityLevel;
                                var o = i(p.expirationTime <= n);
                                if (n = e.unstable_now(), "function" == typeof o) {
                                    p.callback = o, x(n), r = !0;
                                    break n;
                                }
                                p === t(l) && a(l), x(n);
                            } else a(l);
                            p = t(l);
                        }
                        if (null !== p) r = !0;
                        else {
                            var u = t(c);
                            null !== u && F(k, u.startTime - n), r = !1;
                        }
                    }
                    break e;
                } finally{
                    p = null, m = s, d = !1;
                }
                r = void 0;
            }
        } finally{
            r ? $() : j = !1;
        }
    }
}
function F(n, t) {
    C = f(function() {
        n(e.unstable_now());
    }, t);
}
"function" == typeof _ ? $ = function() {
    _(T);
} : "undefined" != typeof MessageChannel ? (w = new MessageChannel, v = w.port2, w.port1.onmessage = T, $ = function() {
    v.postMessage(null);
}) : $ = function() {
    f(T, 0);
}, e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
    e.callback = null;
}, e.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < e ? Math.floor(1e3 / e) : 5;
}, e.unstable_getCurrentPriorityLevel = function() {
    return m;
}, e.unstable_next = function(e) {
    switch(m){
        case 1:
        case 2:
        case 3:
            var n = 3;
            break;
        default:
            n = m;
    }
    var t = m;
    m = n;
    try {
        return e();
    } finally{
        m = t;
    }
}, e.unstable_requestPaint = function() {
    b = !0;
}, e.unstable_runWithPriority = function(e, n) {
    switch(e){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3;
    }
    var t = m;
    m = e;
    try {
        return n();
    } finally{
        m = t;
    }
}, e.unstable_scheduleCallback = function(a, r, s) {
    var i = e.unstable_now();
    switch("object" == typeof s && null !== s ? s = "number" == typeof (s = s.delay) && 0 < s ? i + s : i : s = i, a){
        case 1:
            var o = -1;
            break;
        case 2:
            o = 250;
            break;
        case 5:
            o = 1073741823;
            break;
        case 4:
            o = 1e4;
            break;
        default:
            o = 5e3;
    }
    return a = {
        id: u++,
        callback: r,
        priorityLevel: a,
        startTime: s,
        expirationTime: o = s + o,
        sortIndex: -1
    }, s > i ? (a.sortIndex = s, n(c, a), null === t(l) && a === t(c) && (h ? (y(C), C = -1) : h = !0, F(k, s - i))) : (a.sortIndex = o, n(l, a), g || d || (g = !0, j || (j = !0, $()))), a;
}, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(e) {
    var n = m;
    return function() {
        var t = m;
        m = n;
        try {
            return e.apply(this, arguments);
        } finally{
            m = t;
        }
    };
};

return e;
}
