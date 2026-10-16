import { config } from "../../../../../../../esm_exports8.js";
import { $ZodAsyncError, init_core3 } from "./core.js";
import { $ZodError, $ZodRealError, init_errors4 } from "./errors.js";
import { captureStackTrace, init_util4 } from "./util.js";
import { finalizeIssue } from "../../../../../../../util_exports.js";
var _parse, parse7, _parseAsync, parseAsync, _safeParse, safeParse, _safeParseAsync, safeParseAsync;
export { _parse, _parseAsync, _safeParse, _safeParseAsync, parse7, parseAsync, safeParse, safeParseAsync };
var __wakaru_init_parse2_initialized = false;
export function init_parse2() {
if (__wakaru_init_parse2_initialized) return;
__wakaru_init_parse2_initialized = true;
init_core3();
init_errors4();
init_util4();
_parse = (_Err)=>(schema2, value, _ctx, _params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: false
        }) : {
            async: false
        };
        const result = schema2._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new $ZodAsyncError();
        }
        if (result.issues.length) {
            const e = new (_params?.Err ?? _Err)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, _params?.callee);
            throw e;
        }
        return result.value;
    };
parse7 = _parse($ZodRealError);
_parseAsync = (_Err)=>async (schema2, value, _ctx, params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema2._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        if (result.issues.length) {
            const e = new (params?.Err ?? _Err)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, params?.callee);
            throw e;
        }
        return result.value;
    };
parseAsync = _parseAsync($ZodRealError);
_safeParse = (_Err)=>(schema2, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: false
        } : {
            async: false
        };
        const result = schema2._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new $ZodAsyncError();
        }
        return result.issues.length ? {
            success: false,
            error: new (_Err ?? $ZodError)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
        } : {
            success: true,
            data: result.value
        };
    };
safeParse = _safeParse($ZodRealError);
_safeParseAsync = (_Err)=>async (schema2, value, _ctx)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema2._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        return result.issues.length ? {
            success: false,
            error: new _Err(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
        } : {
            success: true,
            data: result.value
        };
    };
safeParseAsync = _safeParseAsync($ZodRealError);

}
