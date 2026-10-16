"use strict";
var n = this && this.__awaiter || function(t, e, r, n) {
    return new (r || (r = Promise))(function(s, i) {
        function o(t) {
            try {
                u(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            try {
                u(n.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function u(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                t(e);
            })).then(o, a);
        }
        u((n = n.apply(t, e || [])).next());
    });
}, s = this && this.__generator || function(t, e) {
    var r, n, s, i, o = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function a(i) {
        return function(a) {
            return function(i) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; o;)try {
                    if (r = 1, n && (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, i[1])).done) return s;
                    switch(n = 0, s && (i = [
                        2 & i[0],
                        s.value
                    ]), i[0]){
                        case 0:
                        case 1:
                            s = i;
                            break;
                        case 4:
                            return o.label++, {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            o.label++, n = i[1], i = [
                                0
                            ];
                            continue;
                        case 7:
                            i = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                o = 0;
                                continue;
                            }
                            if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                o.label = i[1];
                                break;
                            }
                            if (6 === i[0] && o.label < s[1]) {
                                o.label = s[1], s = i;
                                break;
                            }
                            if (s && o.label < s[2]) {
                                o.label = s[2], o.ops.push(i);
                                break;
                            }
                            s[2] && o.ops.pop(), o.trys.pop();
                            continue;
                    }
                    i = e.call(t, o);
                } catch (t) {
                    i = [
                        6,
                        t
                    ], n = 0;
                } finally{
                    r = s = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([
                i,
                a
            ]);
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var i = require("./module-3851.js"), o = require("./module-2918.js");
exports.backOff = function(t, e) {
    return void 0 === e && (e = {}), n(this, void 0, void 0, function() {
        var r;
        return s(this, function(n) {
            switch(n.label){
                case 0:
                    return r = i.getSanitizedOptions(e), [
                        4,
                        new a(t, r).execute()
                    ];
                case 1:
                    return [
                        2,
                        n.sent()
                    ];
            }
        });
    });
};
var a = function() {
    function t(t, e) {
        this.request = t, this.options = e, this.attemptNumber = 0;
    }
    return t.prototype.execute = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return s(this, function(e) {
                switch(e.label){
                    case 0:
                        if (this.attemptLimitReached) return [
                            3,
                            7
                        ];
                        e.label = 1;
                    case 1:
                        return e.trys.push([
                            1,
                            4,
                            ,
                            6
                        ]), [
                            4,
                            this.applyDelay()
                        ];
                    case 2:
                        return e.sent(), [
                            4,
                            this.request()
                        ];
                    case 3:
                        return [
                            2,
                            e.sent()
                        ];
                    case 4:
                        return t = e.sent(), this.attemptNumber++, [
                            4,
                            this.options.retry(t, this.attemptNumber)
                        ];
                    case 5:
                        if (!e.sent() || this.attemptLimitReached) throw t;
                        return [
                            3,
                            6
                        ];
                    case 6:
                        return [
                            3,
                            0
                        ];
                    case 7:
                        throw new Error("Something went wrong.");
                }
            });
        });
    }, Object.defineProperty(t.prototype, "attemptLimitReached", {
        get: function() {
            return this.attemptNumber >= this.options.numOfAttempts;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.applyDelay = function() {
        return n(this, void 0, void 0, function() {
            return s(this, function(t) {
                switch(t.label){
                    case 0:
                        return [
                            4,
                            o.DelayFactory(this.options, this.attemptNumber).apply()
                        ];
                    case 1:
                        return t.sent(), [
                            2
                        ];
                }
            });
        });
    }, t;
}();
