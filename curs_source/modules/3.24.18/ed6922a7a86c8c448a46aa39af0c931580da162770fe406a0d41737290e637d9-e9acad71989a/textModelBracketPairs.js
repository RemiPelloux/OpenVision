import { x } from "./tslib.es6.js";
var fQr, aFc, cFc;
export { aFc, cFc, fQr };
var __wakaru_Ogg_initialized = false;
export function Ogg() {
if (__wakaru_Ogg_initialized) return;
__wakaru_Ogg_initialized = true;
"use strict";
x(), fQr = class {
    constructor(e, t, n, i){
        this.range = e, this.nestingLevel = t, this.nestingLevelOfEqualBracketType = n, this.isInvalid = i;
    }
}, aFc = class {
    constructor(e, t, n, i, r, s){
        this.range = e, this.openingBracketRange = t, this.closingBracketRange = n, this.nestingLevel = i, this.nestingLevelOfEqualBracketType = r, this.bracketPairNode = s;
    }
    get openingBracketInfo() {
        return this.bracketPairNode.openingBracket.bracketInfo;
    }
    get closingBracketInfo() {
        return this.bracketPairNode.closingBracket?.bracketInfo;
    }
}, cFc = class extends aFc {
    constructor(e, t, n, i, r, s, o){
        super(e, t, n, i, r, s), this.minVisibleColumnIndentation = o;
    }
};

}
