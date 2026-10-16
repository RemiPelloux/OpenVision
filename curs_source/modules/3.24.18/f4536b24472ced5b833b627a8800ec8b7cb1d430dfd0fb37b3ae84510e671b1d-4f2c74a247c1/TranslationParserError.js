import { a } from "./business-error.js";
var Sc;
export { Sc };
var __wakaru_s2_initialized = false;
export function s2() {
if (__wakaru_s2_initialized) return;
__wakaru_s2_initialized = true;
Sc = class rD extends Error {
    static{
        a(this, "TranslationParserError");
    }
    constructor(t, r, n){
        super(t), this.name = "TranslationParserError", this.position = r, this.translationString = n, Error.captureStackTrace && Error.captureStackTrace(this, rD);
    }
};

}
