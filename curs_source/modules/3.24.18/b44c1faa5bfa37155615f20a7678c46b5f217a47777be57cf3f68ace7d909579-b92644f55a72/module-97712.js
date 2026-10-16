"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
const n = require("./module-44968.js"), s = require("./module-90414.js"), o = require("./module-93819.js"), i = require("./module-88345.js"), a = [
    "/properties"
], c = "http://json-schema.org/draft-07/schema";
class l extends n.default {
    _addVocabularies() {
        super._addVocabularies(), s.default.forEach((e)=>this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(o.default);
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
exports.Ajv = l;
var _t;
module.exports = _t = l;
module.exports.Ajv = l, Object.defineProperty(_t, "__esModule", {
    value: !0
}), _t.default = l;
var u = require("./module-21188.js");
Object.defineProperty(_t, "KeywordCxt", {
    enumerable: !0,
    get: function() {
        return u.KeywordCxt;
    }
});
var d = require("./module-95183.js");
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
var p = require("./module-98532.js");
Object.defineProperty(_t, "ValidationError", {
    enumerable: !0,
    get: function() {
        return p.default;
    }
});
var m = require("./module-4989.js");
Object.defineProperty(_t, "MissingRefError", {
    enumerable: !0,
    get: function() {
        return m.default;
    }
});
