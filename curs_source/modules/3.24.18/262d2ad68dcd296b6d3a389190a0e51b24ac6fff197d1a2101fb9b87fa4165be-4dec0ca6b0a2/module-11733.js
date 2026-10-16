"use strict";
var n;
try {
    n = require("./module-7898.js");
} catch (e) {
    "undefined" != typeof window && (n = window.esprima);
}
var o = require("./module-77454.js");
module.exports = new o("tag:yaml.org,2002:js/function", {
    kind: "scalar",
    resolve: function(e) {
        if (null === e) return !1;
        try {
            var t = "(" + e + ")", r = n.parse(t, {
                range: !0
            });
            return "Program" === r.type && 1 === r.body.length && "ExpressionStatement" === r.body[0].type && ("ArrowFunctionExpression" === r.body[0].expression.type || "FunctionExpression" === r.body[0].expression.type);
        } catch (e) {
            return !1;
        }
    },
    construct: function(e) {
        var t, r = "(" + e + ")", o = n.parse(r, {
            range: !0
        }), s = [];
        if ("Program" !== o.type || 1 !== o.body.length || "ExpressionStatement" !== o.body[0].type || "ArrowFunctionExpression" !== o.body[0].expression.type && "FunctionExpression" !== o.body[0].expression.type) throw new Error("Failed to resolve function");
        return o.body[0].expression.params.forEach(function(e) {
            s.push(e.name);
        }), t = o.body[0].expression.body.range, "BlockStatement" === o.body[0].expression.body.type ? new Function(s, r.slice(t[0] + 1, t[1] - 1)) : new Function(s, "return " + r.slice(t[0], t[1]));
    },
    predicate: function(e) {
        return "[object Function]" === Object.prototype.toString.call(e);
    },
    represent: function(e) {
        return e.toString();
    }
});
