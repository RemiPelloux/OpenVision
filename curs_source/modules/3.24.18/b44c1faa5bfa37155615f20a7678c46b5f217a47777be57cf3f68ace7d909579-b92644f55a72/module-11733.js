"use strict";
var n;
try {
    n = require("./module-7898.js");
} catch (e) {
    "undefined" != typeof window && (n = window.esprima);
}
var s = require("./module-77454.js");
module.exports = new s("tag:yaml.org,2002:js/function", {
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
        var t, r = "(" + e + ")", s = n.parse(r, {
            range: !0
        }), o = [];
        if ("Program" !== s.type || 1 !== s.body.length || "ExpressionStatement" !== s.body[0].type || "ArrowFunctionExpression" !== s.body[0].expression.type && "FunctionExpression" !== s.body[0].expression.type) throw new Error("Failed to resolve function");
        return s.body[0].expression.params.forEach(function(e) {
            o.push(e.name);
        }), t = s.body[0].expression.body.range, "BlockStatement" === s.body[0].expression.body.type ? new Function(o, r.slice(t[0] + 1, t[1] - 1)) : new Function(o, "return " + r.slice(t[0], t[1]));
    },
    predicate: function(e) {
        return "[object Function]" === Object.prototype.toString.call(e);
    },
    represent: function(e) {
        return e.toString();
    }
});
