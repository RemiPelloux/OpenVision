import { init_jsonparser } from "./jsonparser.js";
import { init_tokenizer } from "./tokenizer.js";
import { init_tokenparser } from "./tokenparser.js";
import { init_jsonTypes } from "./utils/types/jsonTypes.js";
import { init_parsedElementInfo } from "./utils/types/parsedElementInfo.js";
import { init_parsedTokenInfo } from "./utils/types/parsedTokenInfo.js";
import { init_stackElement } from "./utils/types/stackElement.js";
import { init_tokenType } from "./utils/types/tokenType.js";
import { init_utf_8 } from "./utils/utf-8.js";
var __wakaru_init_mjs_initialized = false;
export function init_mjs() {
if (__wakaru_init_mjs_initialized) return;
__wakaru_init_mjs_initialized = true;
init_jsonparser();
init_tokenizer();
init_tokenparser();
init_utf_8();
init_jsonTypes();
init_parsedTokenInfo();
init_parsedElementInfo();
init_stackElement();
init_tokenType();

}
