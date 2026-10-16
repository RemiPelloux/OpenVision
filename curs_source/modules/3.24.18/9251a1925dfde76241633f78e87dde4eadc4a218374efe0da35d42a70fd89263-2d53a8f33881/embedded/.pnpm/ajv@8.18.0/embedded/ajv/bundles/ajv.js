import { require_codegen } from "./compile/codegen/index.js";
import { require_ref_error } from "./compile/ref_error.js";
import { require_validate } from "./compile/validate/index.js";
import { require_core2 } from "./core.js";
import { require_json_schema_draft_07 } from "./refs/json-schema-draft-07.json";
import { require_validation_error } from "./runtime/validation_error.js";
import { require_discriminator } from "./vocabularies/discriminator/index.js";
import { require_draft7 } from "./vocabularies/draft7.js";
var __wakaru_require_ajv_cache;
export function require_ajv() {
if (__wakaru_require_ajv_cache) return __wakaru_require_ajv_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_ajv_cache = module2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.MissingRefError = exports2.ValidationError = exports2.CodeGen = exports2.Name = exports2.nil = exports2.stringify = exports2.str = exports2._ = exports2.KeywordCxt = exports2.Ajv = void 0;
var core_1 = require_core2();
var draft7_1 = require_draft7();
var discriminator_1 = require_discriminator();
var draft7MetaSchema = require_json_schema_draft_07();
var META_SUPPORT_DATA = [
    "/properties"
];
var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
var Ajv3 = class extends core_1.default {
    _addVocabularies() {
        super._addVocabularies();
        draft7_1.default.forEach((v2)=>this.addVocabulary(v2));
        if (this.opts.discriminator) this.addKeyword(discriminator_1.default);
    }
    _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta) return;
        const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
    }
};
exports2.Ajv = Ajv3;
module2.exports = exports2 = Ajv3;
module2.exports.Ajv = Ajv3;
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.default = Ajv3;
var validate_1 = require_validate();
Object.defineProperty(exports2, "KeywordCxt", {
    enumerable: true,
    get: function() {
        return validate_1.KeywordCxt;
    }
});
var codegen_1 = require_codegen();
Object.defineProperty(exports2, "_", {
    enumerable: true,
    get: function() {
        return codegen_1._;
    }
});
Object.defineProperty(exports2, "str", {
    enumerable: true,
    get: function() {
        return codegen_1.str;
    }
});
Object.defineProperty(exports2, "stringify", {
    enumerable: true,
    get: function() {
        return codegen_1.stringify;
    }
});
Object.defineProperty(exports2, "nil", {
    enumerable: true,
    get: function() {
        return codegen_1.nil;
    }
});
Object.defineProperty(exports2, "Name", {
    enumerable: true,
    get: function() {
        return codegen_1.Name;
    }
});
Object.defineProperty(exports2, "CodeGen", {
    enumerable: true,
    get: function() {
        return codegen_1.CodeGen;
    }
});
var validation_error_1 = require_validation_error();
Object.defineProperty(exports2, "ValidationError", {
    enumerable: true,
    get: function() {
        return validation_error_1.default;
    }
});
var ref_error_1 = require_ref_error();
Object.defineProperty(exports2, "MissingRefError", {
    enumerable: true,
    get: function() {
        return ref_error_1.default;
    }
});

return module2.exports;
}
