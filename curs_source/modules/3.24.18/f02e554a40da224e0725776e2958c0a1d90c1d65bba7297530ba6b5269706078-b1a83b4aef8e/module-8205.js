"use strict";
require.d(exports, {
    Fs: ()=>p,
    Jt: ()=>v,
    LX: ()=>d,
    PS: ()=>A,
    Qe: ()=>h,
    SM: ()=>f,
    T$: ()=>q,
    WK: ()=>m,
    XO: ()=>w,
    Xw: ()=>C,
    bp: ()=>y,
    du: ()=>g,
    ew: ()=>B,
    fM: ()=>J,
    lG: ()=>k,
    pY: ()=>I,
    p_: ()=>_,
    uv: ()=>S,
    yQ: ()=>E,
    zm: ()=>b
});
var n = require("./module-8032.js"), s = require("./module-328.js"), i = require("./module-7684.js"), o = require("./module-278.js"), a = function(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, r = t[Symbol.asyncIterator];
    return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function n(r) {
        e[r] = t[r] && function(e) {
            return new Promise(function(n, s) {
                (function(t, e, r, n) {
                    Promise.resolve(n).then(function(e) {
                        t({
                            value: e,
                            done: r
                        });
                    }, e);
                })(n, s, (e = t[r](e)).done, e.value);
            });
        };
    }
}, u = function(t) {
    return this instanceof u ? (this.v = t, this) : new u(t);
}, c = function(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(t, e || []), i = [];
    return n = {}, o("next"), o("throw"), o("return", function(t) {
        return function(e) {
            return Promise.resolve(e).then(t, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function o(t, e) {
        s[t] && (n[t] = function(e) {
            return new Promise(function(r, n) {
                i.push([
                    t,
                    e,
                    r,
                    n
                ]) > 1 || a(t, e);
            });
        }, e && (n[t] = e(n[t])));
    }
    function a(t, e) {
        try {
            (r = s[t](e)).value instanceof u ? Promise.resolve(r.value.v).then(c, l) : m(i[0][2], r);
        } catch (t) {
            m(i[0][3], t);
        }
        var r;
    }
    function c(t) {
        a("next", t);
    }
    function l(t) {
        a("throw", t);
    }
    function m(t, e) {
        t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
    }
}, l = function(t) {
    var e, r;
    return e = {}, n("next"), n("throw", function(t) {
        throw t;
    }), n("return"), e[Symbol.iterator] = function() {
        return this;
    }, e;
    function n(n, s) {
        e[n] = t[n] ? function(e) {
            return (r = !r) ? {
                value: u(t[n](e)),
                done: !1
            } : s ? s(e) : e;
        } : s;
    }
};
function m(t, ...e) {
    const [r, n, s] = function(t) {
        let e;
        "function" != typeof t[t.length - 1] && (e = t.pop());
        const r = t.pop();
        return [
            t,
            r,
            e
        ];
    }(e);
    let i, o = t;
    return !0 === (null == s ? void 0 : s.propagateDownStreamError) && (o = i = k(o)), o = p(o, ...r, {
        propagateDownStreamError: !1
    }), n(o).catch((t)=>i ? i.abort(t).then(()=>Promise.reject(t)) : Promise.reject(t));
}
function d() {
    return async function(t) {
        var e, r, n, s;
        const i = [];
        try {
            for(var o, u = !0, c = a(t); !(e = (o = await c.next()).done); u = !0){
                s = o.value, u = !1;
                const t = s;
                i.push(t);
            }
        } catch (t) {
            r = {
                error: t
            };
        } finally{
            try {
                u || e || !(n = c.return) || await n.call(c);
            } finally{
                if (r) throw r.error;
            }
        }
        return i;
    };
}
function f(t, e) {
    return async function(r) {
        return await C(r, t, e);
    };
}
function p(t, ...e) {
    return c(this, arguments, function*() {
        var r;
        const [n, s] = function(t) {
            let e;
            "function" != typeof t[t.length - 1] && (e = t.pop());
            return [
                t,
                e
            ];
        }(e);
        let i;
        const o = t[Symbol.asyncIterator]();
        let a = {
            [Symbol.asyncIterator]: ()=>o
        };
        !0 === (null == s ? void 0 : s.propagateDownStreamError) && (a = i = k(a));
        for (const t of n)a = t(a);
        const c = a[Symbol.asyncIterator]();
        try {
            for(;;){
                const t = yield u(c.next());
                if (!0 === t.done) break;
                if (i) try {
                    yield yield u(t.value);
                } catch (t) {
                    throw yield u(i.abort(t)), t;
                }
                else yield yield u(t.value);
            }
        } finally{
            !0 === (null == s ? void 0 : s.propagateDownStreamError) && (null === (r = o.return) || void 0 === r || r.call(o).catch(()=>{}));
        }
    });
}
function h(t) {
    return function(e) {
        return c(this, arguments, function*() {
            const r = e[Symbol.asyncIterator]();
            for(;;){
                let e;
                try {
                    e = yield u(r.next());
                } catch (e) {
                    const r = yield u(t(e));
                    void 0 !== r && (yield yield u(r));
                    break;
                }
                if (!0 === e.done) break;
                yield yield u(e.value);
            }
        });
    };
}
function g(t) {
    return function(e) {
        return c(this, arguments, function*() {
            let r;
            const n = e[Symbol.asyncIterator]();
            for(;;){
                let t;
                try {
                    t = yield u(n.next());
                } catch (t) {
                    r = t;
                    break;
                }
                if (!0 === t.done) break;
                yield yield u(t.value);
            }
            const s = yield u(t(r));
            void 0 !== s && (yield yield u(s));
        });
    };
}
function A(t) {
    return function(e) {
        return c(this, arguments, function*() {
            var r, n, s, i;
            try {
                for(var o, c = !0, l = a(e); !(r = (o = yield u(l.next())).done); c = !0){
                    i = o.value, c = !1;
                    const t = i;
                    yield yield u(t);
                }
            } catch (t) {
                n = {
                    error: t
                };
            } finally{
                try {
                    c || r || !(s = l.return) || (yield u(s.call(l)));
                } finally{
                    if (n) throw n.error;
                }
            }
            const m = yield u(t());
            void 0 !== m && (yield yield u(m));
        });
    };
}
function _(t) {
    return function(e) {
        return c(this, arguments, function*() {
            var r, n, s, i;
            const o = yield u(t());
            void 0 !== o && (yield yield u(o));
            try {
                for(var c, l = !0, m = a(e); !(r = (c = yield u(m.next())).done); l = !0){
                    i = c.value, l = !1;
                    const t = i;
                    yield yield u(t);
                }
            } catch (t) {
                n = {
                    error: t
                };
            } finally{
                try {
                    l || r || !(s = m.return) || (yield u(s.call(m)));
                } finally{
                    if (n) throw n.error;
                }
            }
        });
    };
}
function y(t, e) {
    return function(r) {
        return c(this, arguments, function*() {
            yield yield u((yield u(C(r, t, e))));
        });
    };
}
function w(t, e, r) {
    return void 0 === e || void 0 === r ? function(e) {
        return c(this, arguments, function*() {
            var r, n, s, i;
            try {
                for(var o, c = !0, l = a(e); !(r = (o = yield u(l.next())).done); c = !0){
                    i = o.value, c = !1;
                    const e = i, r = t.serialize(e);
                    yield yield u({
                        flags: 0,
                        data: r
                    });
                }
            } catch (t) {
                n = {
                    error: t
                };
            } finally{
                try {
                    c || r || !(s = l.return) || (yield u(s.call(l)));
                } finally{
                    if (n) throw n.error;
                }
            }
        });
    } : function(n) {
        return c(this, arguments, function*() {
            var s, i, o, c;
            try {
                for(var l, m = !0, d = a(n); !(s = (l = yield u(d.next())).done); m = !0){
                    c = l.value, m = !1;
                    const n = c;
                    let s, i = 0;
                    n.end ? (i |= e, s = r.serialize(n.value)) : s = t.serialize(n.value), yield yield u({
                        flags: i,
                        data: s
                    });
                }
            } catch (t) {
                i = {
                    error: t
                };
            } finally{
                try {
                    m || s || !(o = d.return) || (yield u(o.call(d)));
                } finally{
                    if (i) throw i.error;
                }
            }
        });
    };
}
function S(t, e, r) {
    return r && void 0 !== e ? function(n) {
        return c(this, arguments, function*() {
            var s, i, o, c;
            try {
                for(var l, m = !0, d = a(n); !(s = (l = yield u(d.next())).done); m = !0){
                    c = l.value, m = !1;
                    const { flags: n, data: s } = c;
                    (n & e) === e ? yield yield u({
                        value: r.parse(s),
                        end: !0
                    }) : yield yield u({
                        value: t.parse(s),
                        end: !1
                    });
                }
            } catch (t) {
                i = {
                    error: t
                };
            } finally{
                try {
                    m || s || !(o = d.return) || (yield u(o.call(d)));
                } finally{
                    if (i) throw i.error;
                }
            }
        });
    } : function(i) {
        return c(this, arguments, function*() {
            var o, c, l, m;
            try {
                for(var d, f = !0, p = a(i); !(o = (d = yield u(p.next())).done); f = !0){
                    m = d.value, f = !1;
                    const { flags: i, data: o } = m;
                    if (void 0 === e || (i & e) !== e) yield yield u(t.parse(o));
                    else if (null === r) throw new s.T("unexpected end flag", n.C.InvalidArgument);
                }
            } catch (t) {
                c = {
                    error: t
                };
            } finally{
                try {
                    f || o || !(l = p.return) || (yield u(l.call(p)));
                } finally{
                    if (c) throw c.error;
                }
            }
        });
    };
}
function J(t, e) {
    return function(r) {
        return c(this, arguments, function*() {
            var n, s, o, c;
            try {
                for(var l, m = !0, d = a(r); !(n = (l = yield u(d.next())).done); m = !0){
                    c = l.value, m = !1;
                    const r = c;
                    yield yield u((yield u((0, i.$t)(r, t, e))));
                }
            } catch (t) {
                s = {
                    error: t
                };
            } finally{
                try {
                    m || n || !(o = d.return) || (yield u(o.call(d)));
                } finally{
                    if (s) throw s.error;
                }
            }
        });
    };
}
function B(t, e) {
    return function(r) {
        return c(this, arguments, function*() {
            var n, s, o, c;
            try {
                for(var l, m = !0, d = a(r); !(n = (l = yield u(d.next())).done); m = !0){
                    c = l.value, m = !1;
                    const r = c;
                    yield yield u((yield u((0, i.qb)(r, t, e))));
                }
            } catch (t) {
                s = {
                    error: t
                };
            } finally{
                try {
                    m || n || !(o = d.return) || (yield u(o.call(d)));
                } finally{
                    if (s) throw s.error;
                }
            }
        });
    };
}
function E() {
    return function(t) {
        return c(this, arguments, function*() {
            var e, r, n, s;
            try {
                for(var o, c = !0, l = a(t); !(e = (o = yield u(l.next())).done); c = !0){
                    s = o.value, c = !1;
                    const { flags: t, data: e } = s;
                    yield yield u((0, i.zK)(t, e));
                }
            } catch (t) {
                r = {
                    error: t
                };
            } finally{
                try {
                    c || e || !(n = l.return) || (yield u(n.call(l)));
                } finally{
                    if (r) throw r.error;
                }
            }
        });
    };
}
function I(t) {
    return function(e) {
        return c(this, arguments, function*() {
            var r, o, c, l;
            const m = (0, i.Fn)(t);
            try {
                for(var d, f = !0, p = a(e); !(r = (d = yield u(p.next())).done); f = !0){
                    l = d.value, f = !1;
                    const t = l;
                    for (const e of m.decode(t))yield yield u(e);
                }
            } catch (t) {
                o = {
                    error: t
                };
            } finally{
                try {
                    f || r || !(c = p.return) || (yield u(c.call(p)));
                } finally{
                    if (o) throw o.error;
                }
            }
            if (m.byteLength > 0) throw new s.T("protocol error: incomplete envelope", n.C.InvalidArgument);
        });
    };
}
async function C(t, e, r) {
    var i, u, c, l, m, d, f, p;
    const [h, g] = function(t) {
        if (null == t) return [
            !1,
            0
        ];
        const e = "string" == typeof t ? parseInt(t, 10) : t;
        if (!Number.isSafeInteger(e) || e < 0) return [
            !1,
            e
        ];
        return [
            !0,
            e
        ];
    }(r);
    if (h) {
        g > e && (0, o.kk)(e, g, !0);
        const r = new Uint8Array(g);
        let m = 0;
        try {
            for(var A, _ = !0, y = a(t); !(i = (A = await y.next()).done); _ = !0){
                l = A.value, _ = !1;
                const t = l;
                if (m + t.byteLength > g) throw new s.T(`protocol error: promised ${g} bytes, received ${m + t.byteLength}`, n.C.InvalidArgument);
                r.set(t, m), m += t.byteLength;
            }
        } catch (t) {
            u = {
                error: t
            };
        } finally{
            try {
                _ || i || !(c = y.return) || await c.call(y);
            } finally{
                if (u) throw u.error;
            }
        }
        if (m < g) throw new s.T(`protocol error: promised ${g} bytes, received ${m}`, n.C.InvalidArgument);
        return r;
    }
    const w = [];
    let S = 0;
    try {
        for(var J, B = !0, E = a(t); !(m = (J = await E.next()).done); B = !0){
            p = J.value, B = !1;
            const t = p;
            S += t.byteLength, (0, o.kk)(e, S), w.push(t);
        }
    } catch (t) {
        d = {
            error: t
        };
    } finally{
        try {
            B || m || !(f = E.return) || await f.call(E);
        } finally{
            if (d) throw d.error;
        }
    }
    const I = new Uint8Array(S);
    let C = 0;
    for(let t = w.shift(); t; t = w.shift())I.set(t, C), C += t.byteLength;
    return I;
}
async function b(t) {
    const e = t[Symbol.asyncIterator]();
    let r = await e.next();
    return {
        [Symbol.asyncIterator] () {
            const t = {
                async next () {
                    if (null !== r) {
                        const t = r;
                        return r = null, t;
                    }
                    return await e.next();
                }
            };
            return void 0 !== e.throw && (t.throw = (t)=>e.throw(t)), void 0 !== e.return && (t.return = (t)=>e.return(t)), t;
        }
    };
}
function k(t) {
    const e = t[Symbol.asyncIterator]();
    if (void 0 === e.throw) throw new Error("AsyncIterable does not implement throw");
    const r = e;
    let n, s, i = {
        next: ()=>(s = r.next().finally(()=>{
                s = void 0;
            }), s),
        throw: (t)=>r.throw(t)
    };
    void 0 !== e.return && (i = Object.assign(Object.assign({}, i), {
        return: (t)=>r.return(t)
    }));
    let o = !1;
    return {
        abort (t) {
            if (n) return n.state;
            const e = ()=>r.throw(t).then((t)=>!0 === t.done ? "completed" : "caught", ()=>"rethrown");
            return s ? (n = {
                reason: t,
                state: s.then(e, e)
            }, n.state) : (n = {
                reason: t,
                state: e()
            }, n.state);
        },
        [Symbol.asyncIterator] () {
            if (o) throw new Error("AsyncIterable cannot be re-used");
            return o = !0, i;
        }
    };
}
function v() {
    const t = [], e = [];
    let r, n, s, i = new Promise((t, e)=>{
        n = t, s = e;
    }), o = !1;
    function a() {
        for (const e of t.splice(0, t.length))e({
            done: !0,
            value: void 0
        });
    }
    return {
        close () {
            o = !0, a();
        },
        async write (n) {
            if (o) throw null != r ? r : new Error("cannot write, WritableIterable already closed");
            const s = t.shift();
            if (void 0 === s) e.push(n);
            else if (s({
                done: !1,
                value: n
            }), t.length > 0) return;
            const a = e.length + 1;
            for(let t = 0; t < a; t++)await i;
        },
        [Symbol.asyncIterator]: ()=>({
                next () {
                    n(), i = new Promise((t, e)=>{
                        n = t, s = e;
                    });
                    const r = e.shift();
                    if (void 0 !== r) return Promise.resolve({
                        done: !1,
                        value: r
                    });
                    if (o) return Promise.resolve({
                        done: !0,
                        value: void 0
                    });
                    let a;
                    const u = new Promise((t)=>a = t);
                    return t.push(a), u;
                },
                throw: (t)=>(r = t, o = !0, e.splice(0, e.length), i.catch(()=>{}), s(r), a(), Promise.resolve({
                        done: !0,
                        value: void 0
                    })),
                return: ()=>(o = !0, e.splice(0, e.length), n(), i = Promise.reject(new Error("cannot write, consumer called return")), i.catch(()=>{}), a(), Promise.resolve({
                        done: !0,
                        value: void 0
                    }))
            })
    };
}
function q(t) {
    return c(this, arguments, function*() {
        yield u((yield* l(a(t))));
    });
}
