var r, n, o, s, i, a, l, c, u, d, p, h, m, f, g, y, v, w, b, _, S, x, k, E, T, C, I, A, P, M, R, O, D;
!function() {
    var N = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : {};
    function F(e, t) {
        return e !== N && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
            value: !0
        }) : e.__esModule = !0), function(r, n) {
            return e[r] = t ? t(r, n) : n;
        };
    }
    r = (function(e) {
        !function(e) {
            var t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            };
            n = function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                function n() {
                    this.constructor = e;
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
            }, o = Object.assign || function(e) {
                for(var t, r = 1, n = arguments.length; r < n; r++)for(var o in t = arguments[r])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }, s = function(e, t) {
                var r = {};
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for(n = Object.getOwnPropertySymbols(e); o < n.length; o++)t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                }
                return r;
            }, i = function(e, t, r, n) {
                var o, s = arguments.length, i = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
                return s > 3 && i && Object.defineProperty(t, r, i), i;
            }, a = function(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }, l = function(e, t, r, n, o, s) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for(var a, l = n.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), p = !1, h = r.length - 1; h >= 0; h--){
                    var m = {};
                    for(var f in n)m[f] = "access" === f ? {} : n[f];
                    for(var f in n.access)m.access[f] = n.access[f];
                    m.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        s.push(i(e || null));
                    };
                    var g = (0, r[h])("accessor" === l ? {
                        get: d.get,
                        set: d.set
                    } : d[c], m);
                    if ("accessor" === l) {
                        if (void 0 === g) continue;
                        if (null === g || "object" != typeof g) throw new TypeError("Object expected");
                        (a = i(g.get)) && (d.get = a), (a = i(g.set)) && (d.set = a), (a = i(g.init)) && o.unshift(a);
                    } else (a = i(g)) && ("field" === l ? o.unshift(a) : d[c] = a);
                }
                u && Object.defineProperty(u, n.name, d), p = !0;
            }, c = function(e, t, r) {
                for(var n = arguments.length > 2, o = 0; o < t.length; o++)r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0;
            }, u = function(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }, d = function(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                });
            }, p = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }, h = function(e, t, r, n) {
                function o(e) {
                    return e instanceof r ? e : new r(function(t) {
                        t(e);
                    });
                }
                return new (r || (r = Promise))(function(r, s) {
                    function i(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            s(e);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            s(e);
                        }
                    }
                    function l(e) {
                        e.done ? r(e.value) : o(e.value).then(i, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            }, m = function(e, t) {
                var r, n, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                }, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this;
                }), i;
                function a(e) {
                    return function(t) {
                        return l([
                            e,
                            t
                        ]);
                    };
                }
                function l(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for(; i && (i = 0, a[0] && (s = 0)), s;)try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch(n = 0, o && (a = [
                            2 & a[0],
                            o.value
                        ]), a[0]){
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [
                                    0
                                ];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break;
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break;
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        a = t.call(e, s);
                    } catch (e) {
                        a = [
                            6,
                            e
                        ], n = 0;
                    } finally{
                        r = o = 0;
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    };
                }
            }, f = function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || M(t, e, r);
            }, M = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, o);
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r];
            }, g = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, y = function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, s = r.call(e), i = [];
                try {
                    for(; (void 0 === t || t-- > 0) && !(n = s.next()).done;)i.push(n.value);
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally{
                    try {
                        n && !n.done && (r = s.return) && r.call(s);
                    } finally{
                        if (o) throw o.error;
                    }
                }
                return i;
            }, v = function() {
                for(var e = [], t = 0; t < arguments.length; t++)e = e.concat(y(arguments[t]));
                return e;
            }, w = function() {
                for(var e = 0, t = 0, r = arguments.length; t < r; t++)e += arguments[t].length;
                var n = Array(e), o = 0;
                for(t = 0; t < r; t++)for(var s = arguments[t], i = 0, a = s.length; i < a; i++, o++)n[o] = s[i];
                return n;
            }, b = function(e, t, r) {
                if (r || 2 === arguments.length) for(var n, o = 0, s = t.length; o < s; o++)!n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t));
            }, _ = function(e) {
                return this instanceof _ ? (this.v = e, this) : new _(e);
            }, S = function(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), s = [];
                return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", i), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    return function(t) {
                        return Promise.resolve(t).then(e, d);
                    };
                }
                function a(e, t) {
                    o[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            s.push([
                                e,
                                t,
                                r,
                                n
                            ]) > 1 || l(e, t);
                        });
                    }, t && (n[e] = t(n[e])));
                }
                function l(e, t) {
                    try {
                        c(o[e](t));
                    } catch (e) {
                        p(s[0][3], e);
                    }
                }
                function c(e) {
                    e.value instanceof _ ? Promise.resolve(e.value.v).then(u, d) : p(s[0][2], e);
                }
                function u(e) {
                    l("next", e);
                }
                function d(e) {
                    l("throw", e);
                }
                function p(e, t) {
                    e(t), s.shift(), s.length && l(s[0][0], s[0][1]);
                }
            }, x = function(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e;
                }), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: _(e[n](t)),
                            done: !1
                        } : o ? o(t) : t;
                    } : o;
                }
            }, k = function(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = g(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this;
                }, t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, s) {
                            o(n, s, (t = e[r](t)).done, t.value);
                        });
                    };
                }
                function o(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                }
            }, E = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            };
            var r = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            }, N = function(e) {
                return N = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                }, N(e);
            };
            T = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for(var n = N(e), o = 0; o < n.length; o++)"default" !== n[o] && M(t, e, n[o]);
                return r(t, e), t;
            }, C = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }, I = function(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }, A = function(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
            }, P = function(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }, R = function(e, t, r) {
                if (null != t) {
                    if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
                    var n, o;
                    if (r) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose];
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose], r && (o = n);
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    o && (n = function() {
                        try {
                            o.call(this);
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    }), e.stack.push({
                        value: t,
                        dispose: n,
                        async: r
                    });
                } else r && e.stack.push({
                    async: !0
                });
                return t;
            };
            var F = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
            };
            O = function(e) {
                function t(t) {
                    e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
                }
                var r, n = 0;
                function o() {
                    for(; r = e.stack.pop();)try {
                        if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
                        if (r.dispose) {
                            var s = r.dispose.call(r.value);
                            if (r.async) return n |= 2, Promise.resolve(s).then(o, function(e) {
                                return t(e), o();
                            });
                        } else n |= 1;
                    } catch (e) {
                        t(e);
                    }
                    if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
                    if (e.hasError) throw e.error;
                }
                return o();
            }, D = function(e, t) {
                return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, s) {
                    return r ? t ? ".jsx" : ".js" : !n || o && s ? n + o + "." + s.toLowerCase() + "js" : e;
                }) : e;
            }, e("__extends", n), e("__assign", o), e("__rest", s), e("__decorate", i), e("__param", a), e("__esDecorate", l), e("__runInitializers", c), e("__propKey", u), e("__setFunctionName", d), e("__metadata", p), e("__awaiter", h), e("__generator", m), e("__exportStar", f), e("__createBinding", M), e("__values", g), e("__read", y), e("__spread", v), e("__spreadArrays", w), e("__spreadArray", b), e("__await", _), e("__asyncGenerator", S), e("__asyncDelegator", x), e("__asyncValues", k), e("__makeTemplateObject", E), e("__importStar", T), e("__importDefault", C), e("__classPrivateFieldGet", I), e("__classPrivateFieldSet", A), e("__classPrivateFieldIn", P), e("__addDisposableResource", R), e("__disposeResources", O), e("__rewriteRelativeImportExtension", D);
        }(F(N, F(e)));
    }).apply(exports, [
        exports
    ]), void 0 === r || (module.exports = r);
}();
