import { ZodRealError, init_errors5 } from "./errors.js";
import { init_core4 } from "../core/index.js";
import { _parse, _parseAsync, _safeParse, _safeParseAsync } from "../core/parse.js";
var parse8, parseAsync2, safeParse2, safeParseAsync2;
export { parse8, parseAsync2, safeParse2, safeParseAsync2 };
var __wakaru_init_parse3_initialized = false;
export function init_parse3() {
if (__wakaru_init_parse3_initialized) return;
__wakaru_init_parse3_initialized = true;
init_core4();
init_errors5();
parse8 = _parse(ZodRealError);
parseAsync2 = _parseAsync(ZodRealError);
safeParse2 = _safeParse(ZodRealError);
safeParseAsync2 = _safeParseAsync(ZodRealError);

}
