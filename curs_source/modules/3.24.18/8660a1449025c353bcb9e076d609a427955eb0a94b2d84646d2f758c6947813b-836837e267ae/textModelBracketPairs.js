import { E } from "./tslib.es6.js";
var Ijo, OBd, FBd;
export { FBd, Ijo, OBd };
var __wakaru_U2y_initialized = false;
export function U2y() {
if (__wakaru_U2y_initialized) return;
__wakaru_U2y_initialized = true;
"use strict";
E(), Ijo = class {
    constructor(t, e, n, i){
        this.range = t, this.nestingLevel = e, this.nestingLevelOfEqualBracketType = n, this.isInvalid = i;
    }
}, OBd = class {
    constructor(t, e, n, i, r, s){
        this.range = t, this.openingBracketRange = e, this.closingBracketRange = n, this.nestingLevel = i, this.nestingLevelOfEqualBracketType = r, this.bracketPairNode = s;
    }
    get openingBracketInfo() {
        return this.bracketPairNode.openingBracket.bracketInfo;
    }
    get closingBracketInfo() {
        return this.bracketPairNode.closingBracket?.bracketInfo;
    }
}, FBd = class extends OBd {
    constructor(t, e, n, i, r, s, o){
        super(t, e, n, i, r, s), this.minVisibleColumnIndentation = o;
    }
};

}
