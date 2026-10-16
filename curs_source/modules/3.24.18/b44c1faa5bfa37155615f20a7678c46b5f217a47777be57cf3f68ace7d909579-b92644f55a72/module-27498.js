"use strict";
require.d(exports, {
    cK: ()=>c
});
var n = require("./module-98875.js"), s = require("./module-66058.js"), o = function(e, t, r) {
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
}, i = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class a {
    async exec(e, t, r, a) {
        const c = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            o(c, (0, n.VI)(e.withName("LocalGitExecutor.exec"), {
                attributes: {
                    "git.cwd": t,
                    "git.args": r,
                    "git.caller": a?.caller
                }
            }), !1);
            const { stdout: i, stderr: l } = await (0, s.uM)("git", r, {
                cwd: t,
                timeout: a?.timeout
            });
            return {
                exitCode: 0,
                stdout: i.toString(),
                stderr: l.toString()
            };
        } catch (e) {
            c.error = e, c.hasError = !0;
        } finally{
            i(c);
        }
    }
}
function c(e = {}) {
    return e.gitExecutor ?? new a;
}
