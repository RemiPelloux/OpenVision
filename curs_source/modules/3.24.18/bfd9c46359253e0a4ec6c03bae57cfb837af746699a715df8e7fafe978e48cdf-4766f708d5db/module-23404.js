var r, n, s, o, i, a, c, l, u, d, p, m, h, f, g, y, w, v, _, b, S, k, x, E, I, T, C, P, A, R, M, J, O;
!function() {
    var B = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : {};
    function D(e, t) {
        return e !== B && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
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
            }, s = Object.assign || function(e) {
                for(var t, r = 1, n = arguments.length; r < n; r++)for(var s in t = arguments[r])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e;
            }, o = function(e, t) {
                var r = {};
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for(n = Object.getOwnPropertySymbols(e); s < n.length; s++)t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
                }
                return r;
            }, i = function(e, t, r, n) {
                var s, o = arguments.length, i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else for(var a = e.length - 1; a >= 0; a--)(s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(t, r, i) : s(t, r)) || i);
                return o > 3 && i && Object.defineProperty(t, r, i), i;
            }, a = function(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }, c = function(e, t, r, n, s, o) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for(var a, c = n.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), p = !1, m = r.length - 1; m >= 0; m--){
                    var h = {};
                    for(var f in n)h[f] = "access" === f ? {} : n[f];
                    for(var f in n.access)h.access[f] = n.access[f];
                    h.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        o.push(i(e || null));
                    };
                    var g = (0, r[m])("accessor" === c ? {
                        get: d.get,
                        set: d.set
                    } : d[l], h);
                    if ("accessor" === c) {
                        if (void 0 === g) continue;
                        if (null === g || "object" != typeof g) throw new TypeError("Object expected");
                        (a = i(g.get)) && (d.get = a), (a = i(g.set)) && (d.set = a), (a = i(g.init)) && s.unshift(a);
                    } else (a = i(g)) && ("field" === c ? s.unshift(a) : d[l] = a);
                }
                u && Object.defineProperty(u, n.name, d), p = !0;
            }, l = function(e, t, r) {
                for(var n = arguments.length > 2, s = 0; s < t.length; s++)r = n ? t[s].call(e, r) : t[s].call(e);
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
            }, m = function(e, t, r, n) {
                function s(e) {
                    return e instanceof r ? e : new r(function(t) {
                        t(e);
                    });
                }
                return new (r || (r = Promise))(function(r, o) {
                    function i(e) {
                        try {
                            c(n.next(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function a(e) {
                        try {
                            c(n.throw(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function c(e) {
                        e.done ? r(e.value) : s(e.value).then(i, a);
                    }
                    c((n = n.apply(e, t || [])).next());
                });
            }, h = function(e, t) {
                var r, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1];
                    },
                    trys: [],
                    ops: []
                }, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this;
                }), i;
                function a(e) {
                    return function(t) {
                        return c([
                            e,
                            t
                        ]);
                    };
                }
                function c(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for(; i && (i = 0, a[0] && (o = 0)), o;)try {
                        if (r = 1, n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
                        switch(n = 0, s && (a = [
                            2 & a[0],
                            s.value
                        ]), a[0]){
                            case 0:
                            case 1:
                                s = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [
                                    0
                                ];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                    o.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && o.label < s[1]) {
                                    o.label = s[1], s = a;
                                    break;
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2], o.ops.push(a);
                                    break;
                                }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        a = t.call(e, o);
                    } catch (e) {
                        a = [
                            6,
                            e
                        ], n = 0;
                    } finally{
                        r = s = 0;
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    };
                }
            }, f = function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || R(t, e, r);
            }, R = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, s);
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
                var n, s, o = r.call(e), i = [];
                try {
                    for(; (void 0 === t || t-- > 0) && !(n = o.next()).done;)i.push(n.value);
                } catch (e) {
                    s = {
                        error: e
                    };
                } finally{
                    try {
                        n && !n.done && (r = o.return) && r.call(o);
                    } finally{
                        if (s) throw s.error;
                    }
                }
                return i;
            }, w = function() {
                for(var e = [], t = 0; t < arguments.length; t++)e = e.concat(y(arguments[t]));
                return e;
            }, v = function() {
                for(var e = 0, t = 0, r = arguments.length; t < r; t++)e += arguments[t].length;
                var n = Array(e), s = 0;
                for(t = 0; t < r; t++)for(var o = arguments[t], i = 0, a = o.length; i < a; i++, s++)n[s] = o[i];
                return n;
            }, _ = function(e, t, r) {
                if (r || 2 === arguments.length) for(var n, s = 0, o = t.length; s < o; s++)!n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
                return e.concat(n || Array.prototype.slice.call(t));
            }, b = function(e) {
                return this instanceof b ? (this.v = e, this) : new b(e);
            }, S = function(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, s = r.apply(e, t || []), o = [];
                return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", i), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    return function(t) {
                        return Promise.resolve(t).then(e, d);
                    };
                }
                function a(e, t) {
                    s[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            o.push([
                                e,
                                t,
                                r,
                                n
                            ]) > 1 || c(e, t);
                        });
                    }, t && (n[e] = t(n[e])));
                }
                function c(e, t) {
                    try {
                        l(s[e](t));
                    } catch (e) {
                        p(o[0][3], e);
                    }
                }
                function l(e) {
                    e.value instanceof b ? Promise.resolve(e.value.v).then(u, d) : p(o[0][2], e);
                }
                function u(e) {
                    c("next", e);
                }
                function d(e) {
                    c("throw", e);
                }
                function p(e, t) {
                    e(t), o.shift(), o.length && c(o[0][0], o[0][1]);
                }
            }, k = function(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e;
                }), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, s) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: !1
                        } : s ? s(t) : t;
                    } : s;
                }
            }, x = function(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = g(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this;
                }, t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, o) {
                            s(n, o, (t = e[r](t)).done, t.value);
                        });
                    };
                }
                function s(e, t, r, n) {
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
            }, B = function(e) {
                return B = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                }, B(e);
            };
            I = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for(var n = B(e), s = 0; s < n.length; s++)"default" !== n[s] && R(t, e, n[s]);
                return r(t, e), t;
            }, T = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }, C = function(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }, P = function(e, t, r, n, s) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !s) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
            }, A = function(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }, M = function(e, t, r) {
                if (null != t) {
                    if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
                    var n, s;
                    if (r) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose];
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose], r && (s = n);
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    s && (n = function() {
                        try {
                            s.call(this);
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
            var D = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
            };
            J = function(e) {
                function t(t) {
                    e.error = e.hasError ? new D(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
                }
                var r, n = 0;
                function s() {
                    for(; r = e.stack.pop();)try {
                        if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(s);
                        if (r.dispose) {
                            var o = r.dispose.call(r.value);
                            if (r.async) return n |= 2, Promise.resolve(o).then(s, function(e) {
                                return t(e), s();
                            });
                        } else n |= 1;
                    } catch (e) {
                        t(e);
                    }
                    if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
                    if (e.hasError) throw e.error;
                }
                return s();
            }, O = function(e, t) {
                return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, s, o) {
                    return r ? t ? ".jsx" : ".js" : !n || s && o ? n + s + "." + o.toLowerCase() + "js" : e;
                }) : e;
            }, e("__extends", n), e("__assign", s), e("__rest", o), e("__decorate", i), e("__param", a), e("__esDecorate", c), e("__runInitializers", l), e("__propKey", u), e("__setFunctionName", d), e("__metadata", p), e("__awaiter", m), e("__generator", h), e("__exportStar", f), e("__createBinding", R), e("__values", g), e("__read", y), e("__spread", w), e("__spreadArrays", v), e("__spreadArray", _), e("__await", b), e("__asyncGenerator", S), e("__asyncDelegator", k), e("__asyncValues", x), e("__makeTemplateObject", E), e("__importStar", I), e("__importDefault", T), e("__classPrivateFieldGet", C), e("__classPrivateFieldSet", P), e("__classPrivateFieldIn", A), e("__addDisposableResource", M), e("__disposeResources", J), e("__rewriteRelativeImportExtension", O);
        }(D(B, D(e)));
    }).apply(exports, [
        exports
    ]), void 0 === r || (module.exports = r);
}();
