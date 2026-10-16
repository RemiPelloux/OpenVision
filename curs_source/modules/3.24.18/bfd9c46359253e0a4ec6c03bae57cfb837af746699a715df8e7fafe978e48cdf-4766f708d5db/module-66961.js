"use strict";
var n = require("./module-36755.js"), s = require("./module-39425.js"), o = require("./module-77454.js");
function i(e, t, r) {
    var n = [];
    return e.include.forEach(function(e) {
        r = i(e, t, r);
    }), e[t].forEach(function(e) {
        r.forEach(function(t, r) {
            t.tag === e.tag && t.kind === e.kind && n.push(r);
        }), r.push(e);
    }), r.filter(function(e, t) {
        return -1 === n.indexOf(t);
    });
}
function a(e) {
    this.include = e.include || [], this.implicit = e.implicit || [], this.explicit = e.explicit || [], this.implicit.forEach(function(e) {
        if (e.loadKind && "scalar" !== e.loadKind) throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }), this.compiledImplicit = i(this, "implicit", []), this.compiledExplicit = i(this, "explicit", []), this.compiledTypeMap = function() {
        var e, t, r = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {}
        };
        function n(e) {
            r[e.kind][e.tag] = r.fallback[e.tag] = e;
        }
        for(e = 0, t = arguments.length; e < t; e += 1)arguments[e].forEach(n);
        return r;
    }(this.compiledImplicit, this.compiledExplicit);
}
a.DEFAULT = null, a.create = function() {
    var e, t;
    switch(arguments.length){
        case 1:
            e = a.DEFAULT, t = arguments[0];
            break;
        case 2:
            e = arguments[0], t = arguments[1];
            break;
        default:
            throw new s("Wrong number of arguments for Schema.create function");
    }
    if (e = n.toArray(e), t = n.toArray(t), !e.every(function(e) {
        return e instanceof a;
    })) throw new s("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
    if (!t.every(function(e) {
        return e instanceof o;
    })) throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    return new a({
        include: e,
        explicit: t
    });
}, module.exports = a;
