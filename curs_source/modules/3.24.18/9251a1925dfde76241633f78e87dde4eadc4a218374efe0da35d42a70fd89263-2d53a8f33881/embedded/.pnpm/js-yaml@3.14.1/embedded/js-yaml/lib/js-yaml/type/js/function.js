import { require_type } from "../../type.js";
var __wakaru_require_function_cache;
export function require_function() {
if (__wakaru_require_function_cache) return __wakaru_require_function_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_function_cache = module2;
"use strict";
var esprima;
try {
    _require = require;
    esprima = _require("esprima");
} catch (_2) {
    if (typeof window !== "undefined") esprima = window.esprima;
}
var _require;
var Type3 = require_type();
function resolveJavascriptFunction(data) {
    if (data === null) return false;
    try {
        var source = "(" + data + ")", ast = esprima.parse(source, {
            range: true
        });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
function constructJavascriptFunction(data) {
    var source = "(" + data + ")", ast = esprima.parse(source, {
        range: true
    }), params = [], body;
    if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
    }
    ast.body[0].expression.params.forEach(function(param) {
        params.push(param.name);
    });
    body = ast.body[0].expression.body.range;
    if (ast.body[0].expression.body.type === "BlockStatement") {
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
    }
    return new Function(params, "return " + source.slice(body[0], body[1]));
}
function representJavascriptFunction(object4) {
    return object4.toString();
}
function isFunction(object4) {
    return Object.prototype.toString.call(object4) === "[object Function]";
}
module2.exports = new Type3("tag:yaml.org,2002:js/function", {
    kind: "scalar",
    resolve: resolveJavascriptFunction,
    construct: constructJavascriptFunction,
    predicate: isFunction,
    represent: representJavascriptFunction
});

return module2.exports;
}
