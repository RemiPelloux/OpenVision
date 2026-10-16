"use strict";
require.d(exports, {
    Fs: ()=>h,
    Jt: ()=>T,
    LX: ()=>p,
    PS: ()=>y,
    Qe: ()=>f,
    SM: ()=>m,
    T$: ()=>R,
    WK: ()=>d,
    XO: ()=>_,
    Xw: ()=>C,
    bp: ()=>v,
    du: ()=>g,
    ew: ()=>b,
    fM: ()=>S,
    lG: ()=>x,
    pY: ()=>I,
    p_: ()=>w,
    uv: ()=>A,
    yQ: ()=>E,
    zm: ()=>k
});
var n = require("./module-84959.js"), s = require("./module-92801.js"), o = require("./module-91653.js"), i = require("./module-78503.js"), a = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(r) {
        t[r] = e[r] && function(t) {
            return new Promise(function(n, s) {
                (function(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                })(n, s, (t = e[r](t)).done, t.value);
            });
        };
    }
}, c = function(e) {
    return this instanceof c ? (this.v = e, this) : new c(e);
}, l = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, u);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function i(e, t) {
        s[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
                o.push([
                    e,
                    t,
                    r,
                    n
                ]) > 1 || a(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function a(e, t) {
        try {
            (r = s[e](t)).value instanceof c ? Promise.resolve(r.value.v).then(l, u) : d(o[0][2], r);
        } catch (e) {
            d(o[0][3], e);
        }
        var r;
    }
    function l(e) {
        a("next", e);
    }
    function u(e) {
        a("throw", e);
    }
    function d(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
}, u = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(e) {
        throw e;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(n, s) {
        t[n] = e[n] ? function(t) {
            return (r = !r) ? {
                value: c(e[n](t)),
                done: !1
            } : s ? s(t) : t;
        } : s;
    }
};
function d(e, ...t) {
    const [r, n, s] = function(e) {
        let t;
        "function" != typeof e[e.length - 1] && (t = e.pop());
        const r = e.pop();
        return [
            e,
            r,
            t
        ];
    }(t);
    let o, i = e;
    return !0 === (null == s ? void 0 : s.propagateDownStreamError) && (i = o = x(i)), i = h(i, ...r, {
        propagateDownStreamError: !1
    }), n(i).catch((e)=>o ? o.abort(e).then(()=>Promise.reject(e)) : Promise.reject(e));
}
function p() {
    return async function(e) {
        var t, r, n, s;
        const o = [];
        try {
            for(var i, c = !0, l = a(e); !(t = (i = await l.next()).done); c = !0){
                s = i.value, c = !1;
                const e = s;
                o.push(e);
            }
        } catch (e) {
            r = {
                error: e
            };
        } finally{
            try {
                c || t || !(n = l.return) || await n.call(l);
            } finally{
                if (r) throw r.error;
            }
        }
        return o;
    };
}
function m(e, t) {
    return async function(r) {
        return await C(r, e, t);
    };
}
function h(e, ...t) {
    return l(this, arguments, function*() {
        var r;
        const [n, s] = function(e) {
            let t;
            "function" != typeof e[e.length - 1] && (t = e.pop());
            return [
                e,
                t
            ];
        }(t);
        let o;
        const i = e[Symbol.asyncIterator]();
        let a = {
            [Symbol.asyncIterator]: ()=>i
        };
        !0 === (null == s ? void 0 : s.propagateDownStreamError) && (a = o = x(a));
        for (const e of n)a = e(a);
        const l = a[Symbol.asyncIterator]();
        try {
            for(;;){
                const e = yield c(l.next());
                if (!0 === e.done) break;
                if (o) try {
                    yield yield c(e.value);
                } catch (e) {
                    throw yield c(o.abort(e)), e;
                }
                else yield yield c(e.value);
            }
        } finally{
            !0 === (null == s ? void 0 : s.propagateDownStreamError) && (null === (r = i.return) || void 0 === r || r.call(i).catch(()=>{}));
        }
    });
}
function f(e) {
    return function(t) {
        return l(this, arguments, function*() {
            const r = t[Symbol.asyncIterator]();
            for(;;){
                let t;
                try {
                    t = yield c(r.next());
                } catch (t) {
                    const r = yield c(e(t));
                    void 0 !== r && (yield yield c(r));
                    break;
                }
                if (!0 === t.done) break;
                yield yield c(t.value);
            }
        });
    };
}
function g(e) {
    return function(t) {
        return l(this, arguments, function*() {
            let r;
            const n = t[Symbol.asyncIterator]();
            for(;;){
                let e;
                try {
                    e = yield c(n.next());
                } catch (e) {
                    r = e;
                    break;
                }
                if (!0 === e.done) break;
                yield yield c(e.value);
            }
            const s = yield c(e(r));
            void 0 !== s && (yield yield c(s));
        });
    };
}
function y(e) {
    return function(t) {
        return l(this, arguments, function*() {
            var r, n, s, o;
            try {
                for(var i, l = !0, u = a(t); !(r = (i = yield c(u.next())).done); l = !0){
                    o = i.value, l = !1;
                    const e = o;
                    yield yield c(e);
                }
            } catch (e) {
                n = {
                    error: e
                };
            } finally{
                try {
                    l || r || !(s = u.return) || (yield c(s.call(u)));
                } finally{
                    if (n) throw n.error;
                }
            }
            const d = yield c(e());
            void 0 !== d && (yield yield c(d));
        });
    };
}
function w(e) {
    return function(t) {
        return l(this, arguments, function*() {
            var r, n, s, o;
            const i = yield c(e());
            void 0 !== i && (yield yield c(i));
            try {
                for(var l, u = !0, d = a(t); !(r = (l = yield c(d.next())).done); u = !0){
                    o = l.value, u = !1;
                    const e = o;
                    yield yield c(e);
                }
            } catch (e) {
                n = {
                    error: e
                };
            } finally{
                try {
                    u || r || !(s = d.return) || (yield c(s.call(d)));
                } finally{
                    if (n) throw n.error;
                }
            }
        });
    };
}
function v(e, t) {
    return function(r) {
        return l(this, arguments, function*() {
            yield yield c((yield c(C(r, e, t))));
        });
    };
}
function _(e, t, r) {
    return void 0 === t || void 0 === r ? function(t) {
        return l(this, arguments, function*() {
            var r, n, s, o;
            try {
                for(var i, l = !0, u = a(t); !(r = (i = yield c(u.next())).done); l = !0){
                    o = i.value, l = !1;
                    const t = o, r = e.serialize(t);
                    yield yield c({
                        flags: 0,
                        data: r
                    });
                }
            } catch (e) {
                n = {
                    error: e
                };
            } finally{
                try {
                    l || r || !(s = u.return) || (yield c(s.call(u)));
                } finally{
                    if (n) throw n.error;
                }
            }
        });
    } : function(n) {
        return l(this, arguments, function*() {
            var s, o, i, l;
            try {
                for(var u, d = !0, p = a(n); !(s = (u = yield c(p.next())).done); d = !0){
                    l = u.value, d = !1;
                    const n = l;
                    let s, o = 0;
                    n.end ? (o |= t, s = r.serialize(n.value)) : s = e.serialize(n.value), yield yield c({
                        flags: o,
                        data: s
                    });
                }
            } catch (e) {
                o = {
                    error: e
                };
            } finally{
                try {
                    d || s || !(i = p.return) || (yield c(i.call(p)));
                } finally{
                    if (o) throw o.error;
                }
            }
        });
    };
}
function A(e, t, r) {
    return r && void 0 !== t ? function(n) {
        return l(this, arguments, function*() {
            var s, o, i, l;
            try {
                for(var u, d = !0, p = a(n); !(s = (u = yield c(p.next())).done); d = !0){
                    l = u.value, d = !1;
                    const { flags: n, data: s } = l;
                    (n & t) === t ? yield yield c({
                        value: r.parse(s),
                        end: !0
                    }) : yield yield c({
                        value: e.parse(s),
                        end: !1
                    });
                }
            } catch (e) {
                o = {
                    error: e
                };
            } finally{
                try {
                    d || s || !(i = p.return) || (yield c(i.call(p)));
                } finally{
                    if (o) throw o.error;
                }
            }
        });
    } : function(o) {
        return l(this, arguments, function*() {
            var i, l, u, d;
            try {
                for(var p, m = !0, h = a(o); !(i = (p = yield c(h.next())).done); m = !0){
                    d = p.value, m = !1;
                    const { flags: o, data: i } = d;
                    if (void 0 === t || (o & t) !== t) yield yield c(e.parse(i));
                    else if (null === r) throw new s.T("unexpected end flag", n.C.InvalidArgument);
                }
            } catch (e) {
                l = {
                    error: e
                };
            } finally{
                try {
                    m || i || !(u = h.return) || (yield c(u.call(h)));
                } finally{
                    if (l) throw l.error;
                }
            }
        });
    };
}
function S(e, t) {
    return function(r) {
        return l(this, arguments, function*() {
            var n, s, i, l;
            try {
                for(var u, d = !0, p = a(r); !(n = (u = yield c(p.next())).done); d = !0){
                    l = u.value, d = !1;
                    const r = l;
                    yield yield c((yield c((0, o.$t)(r, e, t))));
                }
            } catch (e) {
                s = {
                    error: e
                };
            } finally{
                try {
                    d || n || !(i = p.return) || (yield c(i.call(p)));
                } finally{
                    if (s) throw s.error;
                }
            }
        });
    };
}
function b(e, t) {
    return function(r) {
        return l(this, arguments, function*() {
            var n, s, i, l;
            try {
                for(var u, d = !0, p = a(r); !(n = (u = yield c(p.next())).done); d = !0){
                    l = u.value, d = !1;
                    const r = l;
                    yield yield c((yield c((0, o.qb)(r, e, t))));
                }
            } catch (e) {
                s = {
                    error: e
                };
            } finally{
                try {
                    d || n || !(i = p.return) || (yield c(i.call(p)));
                } finally{
                    if (s) throw s.error;
                }
            }
        });
    };
}
function E() {
    return function(e) {
        return l(this, arguments, function*() {
            var t, r, n, s;
            try {
                for(var i, l = !0, u = a(e); !(t = (i = yield c(u.next())).done); l = !0){
                    s = i.value, l = !1;
                    const { flags: e, data: t } = s;
                    yield yield c((0, o.zK)(e, t));
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    l || t || !(n = u.return) || (yield c(n.call(u)));
                } finally{
                    if (r) throw r.error;
                }
            }
        });
    };
}
function I(e) {
    return function(t) {
        return l(this, arguments, function*() {
            var r, i, l, u;
            const d = (0, o.Fn)(e);
            try {
                for(var p, m = !0, h = a(t); !(r = (p = yield c(h.next())).done); m = !0){
                    u = p.value, m = !1;
                    const e = u;
                    for (const t of d.decode(e))yield yield c(t);
                }
            } catch (e) {
                i = {
                    error: e
                };
            } finally{
                try {
                    m || r || !(l = h.return) || (yield c(l.call(h)));
                } finally{
                    if (i) throw i.error;
                }
            }
            if (d.byteLength > 0) throw new s.T("protocol error: incomplete envelope", n.C.InvalidArgument);
        });
    };
}
async function C(e, t, r) {
    var o, c, l, u, d, p, m, h;
    const [f, g] = function(e) {
        if (null == e) return [
            !1,
            0
        ];
        const t = "string" == typeof e ? parseInt(e, 10) : e;
        if (!Number.isSafeInteger(t) || t < 0) return [
            !1,
            t
        ];
        return [
            !0,
            t
        ];
    }(r);
    if (f) {
        g > t && (0, i.kk)(t, g, !0);
        const r = new Uint8Array(g);
        let d = 0;
        try {
            for(var y, w = !0, v = a(e); !(o = (y = await v.next()).done); w = !0){
                u = y.value, w = !1;
                const e = u;
                if (d + e.byteLength > g) throw new s.T(`protocol error: promised ${g} bytes, received ${d + e.byteLength}`, n.C.InvalidArgument);
                r.set(e, d), d += e.byteLength;
            }
        } catch (e) {
            c = {
                error: e
            };
        } finally{
            try {
                w || o || !(l = v.return) || await l.call(v);
            } finally{
                if (c) throw c.error;
            }
        }
        if (d < g) throw new s.T(`protocol error: promised ${g} bytes, received ${d}`, n.C.InvalidArgument);
        return r;
    }
    const _ = [];
    let A = 0;
    try {
        for(var S, b = !0, E = a(e); !(d = (S = await E.next()).done); b = !0){
            h = S.value, b = !1;
            const e = h;
            A += e.byteLength, (0, i.kk)(t, A), _.push(e);
        }
    } catch (e) {
        p = {
            error: e
        };
    } finally{
        try {
            b || d || !(m = E.return) || await m.call(E);
        } finally{
            if (p) throw p.error;
        }
    }
    const I = new Uint8Array(A);
    let C = 0;
    for(let e = _.shift(); e; e = _.shift())I.set(e, C), C += e.byteLength;
    return I;
}
async function k(e) {
    const t = e[Symbol.asyncIterator]();
    let r = await t.next();
    return {
        [Symbol.asyncIterator] () {
            const e = {
                async next () {
                    if (null !== r) {
                        const e = r;
                        return r = null, e;
                    }
                    return await t.next();
                }
            };
            return void 0 !== t.throw && (e.throw = (e)=>t.throw(e)), void 0 !== t.return && (e.return = (e)=>t.return(e)), e;
        }
    };
}
function x(e) {
    const t = e[Symbol.asyncIterator]();
    if (void 0 === t.throw) throw new Error("AsyncIterable does not implement throw");
    const r = t;
    let n, s, o = {
        next: ()=>(s = r.next().finally(()=>{
                s = void 0;
            }), s),
        throw: (e)=>r.throw(e)
    };
    void 0 !== t.return && (o = Object.assign(Object.assign({}, o), {
        return: (e)=>r.return(e)
    }));
    let i = !1;
    return {
        abort (e) {
            if (n) return n.state;
            const t = ()=>r.throw(e).then((e)=>!0 === e.done ? "completed" : "caught", ()=>"rethrown");
            return s ? (n = {
                reason: e,
                state: s.then(t, t)
            }, n.state) : (n = {
                reason: e,
                state: t()
            }, n.state);
        },
        [Symbol.asyncIterator] () {
            if (i) throw new Error("AsyncIterable cannot be re-used");
            return i = !0, o;
        }
    };
}
function T() {
    const e = [], t = [];
    let r, n, s, o = new Promise((e, t)=>{
        n = e, s = t;
    }), i = !1;
    function a() {
        for (const t of e.splice(0, e.length))t({
            done: !0,
            value: void 0
        });
    }
    return {
        close () {
            i = !0, a();
        },
        async write (n) {
            if (i) throw null != r ? r : new Error("cannot write, WritableIterable already closed");
            const s = e.shift();
            if (void 0 === s) t.push(n);
            else if (s({
                done: !1,
                value: n
            }), e.length > 0) return;
            const a = t.length + 1;
            for(let e = 0; e < a; e++)await o;
        },
        [Symbol.asyncIterator]: ()=>({
                next () {
                    n(), o = new Promise((e, t)=>{
                        n = e, s = t;
                    });
                    const r = t.shift();
                    if (void 0 !== r) return Promise.resolve({
                        done: !1,
                        value: r
                    });
                    if (i) return Promise.resolve({
                        done: !0,
                        value: void 0
                    });
                    let a;
                    const c = new Promise((e)=>a = e);
                    return e.push(a), c;
                },
                throw: (e)=>(r = e, i = !0, t.splice(0, t.length), o.catch(()=>{}), s(r), a(), Promise.resolve({
                        done: !0,
                        value: void 0
                    })),
                return: ()=>(i = !0, t.splice(0, t.length), n(), o = Promise.reject(new Error("cannot write, consumer called return")), o.catch(()=>{}), a(), Promise.resolve({
                        done: !0,
                        value: void 0
                    }))
            })
    };
}
function R(e) {
    return l(this, arguments, function*() {
        yield c((yield* u(a(e))));
    });
}
