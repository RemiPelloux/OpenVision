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
        var a = t - 1 >>> 1, i = e[a];
        if (!(0 < s(i, n))) break e;
        e[a] = n, e[t] = i, t = a;
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
        e: for(var a = 0, i = e.length, r = i >>> 1; a < r;){
            var o = 2 * (a + 1) - 1, l = e[o], c = o + 1, u = e[c];
            if (0 > s(l, t)) c < i && 0 > s(u, l) ? (e[a] = u, e[c] = t, a = c) : (e[a] = l, e[o] = t, a = o);
            else {
                if (!(c < i && 0 > s(u, t))) break e;
                e[a] = u, e[c] = t, a = c;
            }
        }
    }
    return n;
}
function s(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return 0 !== t ? t : e.id - n.id;
}
var i, r, o;
e.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now ? (i = performance, e.unstable_now = function() {
    return i.now();
}) : (r = Date, o = r.now(), e.unstable_now = function() {
    return r.now() - o;
});
var l = [], c = [], u = 1, m = null, p = 3, d = !1, b = !1, g = !1, h = !1, f = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, _ = "undefined" != typeof setImmediate ? setImmediate : null;
function $(e) {
    for(var s = t(c); null !== s;){
        if (null === s.callback) a(c);
        else {
            if (!(s.startTime <= e)) break;
            a(c), s.sortIndex = s.expirationTime, n(l, s);
        }
        s = t(c);
    }
}
function x(e) {
    if (g = !1, $(e), !b) if (null !== t(l)) b = !0, v || (v = !0, k());
    else {
        var n = t(c);
        null !== n && N(x, n.startTime - e);
    }
}
var k, w, j, v = !1, C = -1, S = 5, E = -1;
function F() {
    return !!h || !(e.unstable_now() - E < S);
}
function q() {
    if (h = !1, v) {
        var n = e.unstable_now();
        E = n;
        var s = !0;
        try {
            e: {
                b = !1, g && (g = !1, y(C), C = -1), d = !0;
                var i = p;
                try {
                    n: {
                        for($(n), m = t(l); null !== m && !(m.expirationTime > n && F());){
                            var r = m.callback;
                            if ("function" == typeof r) {
                                m.callback = null, p = m.priorityLevel;
                                var o = r(m.expirationTime <= n);
                                if (n = e.unstable_now(), "function" == typeof o) {
                                    m.callback = o, $(n), s = !0;
                                    break n;
                                }
                                m === t(l) && a(l), $(n);
                            } else a(l);
                            m = t(l);
                        }
                        if (null !== m) s = !0;
                        else {
                            var u = t(c);
                            null !== u && N(x, u.startTime - n), s = !1;
                        }
                    }
                    break e;
                } finally{
                    m = null, p = i, d = !1;
                }
                s = void 0;
            }
        } finally{
            s ? k() : v = !1;
        }
    }
}
function N(n, t) {
    C = f(function() {
        n(e.unstable_now());
    }, t);
}
"function" == typeof _ ? k = function() {
    _(q);
} : "undefined" != typeof MessageChannel ? (w = new MessageChannel, j = w.port2, w.port1.onmessage = q, k = function() {
    j.postMessage(null);
}) : k = function() {
    f(q, 0);
}, e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
    e.callback = null;
}, e.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < e ? Math.floor(1e3 / e) : 5;
}, e.unstable_getCurrentPriorityLevel = function() {
    return p;
}, e.unstable_next = function(e) {
    switch(p){
        case 1:
        case 2:
        case 3:
            var n = 3;
            break;
        default:
            n = p;
    }
    var t = p;
    p = n;
    try {
        return e();
    } finally{
        p = t;
    }
}, e.unstable_requestPaint = function() {
    h = !0;
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
    var t = p;
    p = e;
    try {
        return n();
    } finally{
        p = t;
    }
}, e.unstable_scheduleCallback = function(a, s, i) {
    var r = e.unstable_now();
    switch("object" == typeof i && null !== i ? i = "number" == typeof (i = i.delay) && 0 < i ? r + i : r : i = r, a){
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
        callback: s,
        priorityLevel: a,
        startTime: i,
        expirationTime: o = i + o,
        sortIndex: -1
    }, i > r ? (a.sortIndex = i, n(c, a), null === t(l) && a === t(c) && (g ? (y(C), C = -1) : g = !0, N(x, i - r))) : (a.sortIndex = o, n(l, a), b || d || (b = !0, v || (v = !0, k()))), a;
}, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(e) {
    var n = p;
    return function() {
        var t = p;
        p = n;
        try {
            return e.apply(this, arguments);
        } finally{
            p = t;
        }
    };
};

return e;
}
