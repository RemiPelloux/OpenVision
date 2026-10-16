"use strict";
var n = require("./module-39425.js"), o = [
    "kind",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "defaultStyle",
    "styleAliases"
], s = [
    "scalar",
    "sequence",
    "mapping"
];
module.exports = function(e, t) {
    if (t = t || {}, Object.keys(t).forEach(function(t) {
        if (-1 === o.indexOf(t)) throw new n('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.');
    }), this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
        return !0;
    }, this.construct = t.construct || function(e) {
        return e;
    }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.defaultStyle = t.defaultStyle || null, this.styleAliases = function(e) {
        var t = {};
        return null !== e && Object.keys(e).forEach(function(r) {
            e[r].forEach(function(e) {
                t[String(e)] = r;
            });
        }), t;
    }(t.styleAliases || null), -1 === s.indexOf(this.kind)) throw new n('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
};
