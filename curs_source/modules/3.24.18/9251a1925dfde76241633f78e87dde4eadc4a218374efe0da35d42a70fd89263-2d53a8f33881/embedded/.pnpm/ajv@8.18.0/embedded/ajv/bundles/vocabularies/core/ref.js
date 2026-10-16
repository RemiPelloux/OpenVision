import { require_codegen } from "../../compile/codegen/index.js";
import { require_compile } from "../../compile/index.js";
import { require_names2 } from "../../compile/names.js";
import { require_ref_error } from "../../compile/ref_error.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_ref_cache;
export function require_ref() {
if (__wakaru_require_ref_cache) return __wakaru_require_ref_cache;
var exports2 = {};
__wakaru_require_ref_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.callRef = exports2.getValidate = void 0;
var ref_error_1 = require_ref_error();
var code_1 = require_code3();
var codegen_1 = require_codegen();
var names_1 = require_names2();
var compile_1 = require_compile();
var util_1 = require_util16();
var def = {
    keyword: "$ref",
    schemaType: "string",
    code (cxt) {
        const { gen, schema: $ref, it: it2 } = cxt;
        const { baseId, schemaEnv: env, validateName, opts, self: self2 } = it2;
        const { root } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId) return callRootRef();
        const schOrEnv = compile_1.resolveRef.call(self2, root, baseId, $ref);
        if (schOrEnv === void 0) throw new ref_error_1.default(it2.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile_1.SchemaEnv) return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
            if (env === root) return callRef(cxt, validateName, env, env.$async);
            const rootName = gen.scopeValue("root", {
                ref: root
            });
            return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
        }
        function callValidate(sch) {
            const v2 = getValidate(cxt, sch);
            callRef(cxt, v2, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
            const schName = gen.scopeValue("schema", opts.code.source === true ? {
                ref: sch,
                code: (0, codegen_1.stringify)(sch)
            } : {
                ref: sch
            });
            const valid = gen.name("valid");
            const schCxt = cxt.subschema({
                schema: sch,
                dataTypes: [],
                schemaPath: codegen_1.nil,
                topSchemaRef: schName,
                errSchemaPath: $ref
            }, valid);
            cxt.mergeEvaluated(schCxt);
            cxt.ok(valid);
        }
    }
};
function getValidate(cxt, sch) {
    const { gen } = cxt;
    return sch.validate ? gen.scopeValue("validate", {
        ref: sch.validate
    }) : (0, codegen_1._)`${gen.scopeValue("wrapper", {
        ref: sch
    })}.validate`;
}
exports2.getValidate = getValidate;
function callRef(cxt, v2, sch, $async) {
    const { gen, it: it2 } = cxt;
    const { allErrors, schemaEnv: env, opts } = it2;
    const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
    if ($async) callAsyncRef();
    else callSyncRef();
    function callAsyncRef() {
        if (!env.$async) throw new Error("async schema referenced by sync schema");
        const valid = gen.let("valid");
        gen.try(()=>{
            gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v2, passCxt)}`);
            addEvaluatedFrom(v2);
            if (!allErrors) gen.assign(valid, true);
        }, (e)=>{
            gen.if((0, codegen_1._)`!(${e} instanceof ${it2.ValidationError})`, ()=>gen.throw(e));
            addErrorsFrom(e);
            if (!allErrors) gen.assign(valid, false);
        });
        cxt.ok(valid);
    }
    function callSyncRef() {
        cxt.result((0, code_1.callValidateCode)(cxt, v2, passCxt), ()=>addEvaluatedFrom(v2), ()=>addErrorsFrom(v2));
    }
    function addErrorsFrom(source) {
        const errs = (0, codegen_1._)`${source}.errors`;
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`);
        gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
    }
    function addEvaluatedFrom(source) {
        var _a18;
        if (!it2.opts.unevaluated) return;
        const schEvaluated = (_a18 = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a18 === void 0 ? void 0 : _a18.evaluated;
        if (it2.props !== true) {
            if (schEvaluated && !schEvaluated.dynamicProps) {
                if (schEvaluated.props !== void 0) {
                    it2.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it2.props);
                }
            } else {
                const props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
                it2.props = util_1.mergeEvaluated.props(gen, props, it2.props, codegen_1.Name);
            }
        }
        if (it2.items !== true) {
            if (schEvaluated && !schEvaluated.dynamicItems) {
                if (schEvaluated.items !== void 0) {
                    it2.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it2.items);
                }
            } else {
                const items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
                it2.items = util_1.mergeEvaluated.items(gen, items, it2.items, codegen_1.Name);
            }
        }
    }
}
exports2.callRef = callRef;
exports2.default = def;

return exports2;
}
