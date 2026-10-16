"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
const n = require("./module-4968.js"), o = require("./module-414.js"), s = require("./module-3819.js"), i = require("./module-8345.js"), a = [
    "/properties"
], c = "http://json-schema.org/draft-07/schema";
class u extends n.default {
    _addVocabularies() {
        super._addVocabularies(), o.default.forEach((e)=>this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(s.default);
    }
    _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        const e = this.opts.$data ? this.$dataMetaSchema(i, a) : i;
        this.addMetaSchema(e, c, !1), this.refs["http://json-schema.org/schema"] = c;
    }
    defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0);
    }
}
exports.Ajv = u;
var _t;
module.exports = _t = u;
module.exports.Ajv = u, Object.defineProperty(_t, "__esModule", {
    value: !0
}), _t.default = u;
var l = require("./module-1188.js");
Object.defineProperty(_t, "KeywordCxt", {
    enumerable: !0,
    get: function() {
        return l.KeywordCxt;
    }
});
var d = require("./module-5183.js");
Object.defineProperty(_t, "_", {
    enumerable: !0,
    get: function() {
        return d._;
    }
}), Object.defineProperty(_t, "str", {
    enumerable: !0,
    get: function() {
        return d.str;
    }
}), Object.defineProperty(_t, "stringify", {
    enumerable: !0,
    get: function() {
        return d.stringify;
    }
}), Object.defineProperty(_t, "nil", {
    enumerable: !0,
    get: function() {
        return d.nil;
    }
}), Object.defineProperty(_t, "Name", {
    enumerable: !0,
    get: function() {
        return d.Name;
    }
}), Object.defineProperty(_t, "CodeGen", {
    enumerable: !0,
    get: function() {
        return d.CodeGen;
    }
});
var p = require("./module-8532.js");
Object.defineProperty(_t, "ValidationError", {
    enumerable: !0,
    get: function() {
        return p.default;
    }
});
var f = require("./module-4989.js");
Object.defineProperty(_t, "MissingRefError", {
    enumerable: !0,
    get: function() {
        return f.default;
    }
});
