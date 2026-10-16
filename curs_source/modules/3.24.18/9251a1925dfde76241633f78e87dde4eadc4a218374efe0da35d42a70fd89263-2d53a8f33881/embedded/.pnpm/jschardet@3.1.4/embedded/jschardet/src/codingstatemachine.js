import { require_constants } from "./constants.js";
var __wakaru_require_codingstatemachine_cache;
export function require_codingstatemachine() {
if (__wakaru_require_codingstatemachine_cache) return __wakaru_require_codingstatemachine_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_codingstatemachine_cache = module2;
var constants14 = require_constants();
function CodingStateMachine(sm) {
    var self2 = this;
    function init(sm2) {
        self2._mModel = sm2;
        self2._mCurrentBytePos = 0;
        self2._mCurrentCharLen = 0;
        self2.reset();
    }
    this.reset = function() {
        this._mCurrentState = constants14.start;
    };
    this.nextState = function(c) {
        var byteCls = this._mModel.classTable[c.charCodeAt(0)];
        if (this._mCurrentState == constants14.start) {
            this._mCurrentBytePos = 0;
            this._mCurrentCharLen = this._mModel.charLenTable[byteCls];
        }
        this._mCurrentState = this._mModel.stateTable[this._mCurrentState * this._mModel.classFactor + byteCls];
        this._mCurrentBytePos++;
        return this._mCurrentState;
    };
    this.getCurrentCharLen = function() {
        return this._mCurrentCharLen;
    };
    this.getCodingStateMachine = function() {
        return this._mModel.name;
    };
    init(sm);
}
module2.exports = CodingStateMachine;

return module2.exports;
}
