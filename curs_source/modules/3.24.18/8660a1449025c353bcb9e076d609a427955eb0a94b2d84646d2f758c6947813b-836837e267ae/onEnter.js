import { Ei, Fa, dA, xr } from "./Iwo.js";
import { H3, Lbt } from "./languageConfiguration.js";
import { E } from "./tslib.es6.js";
var CFd;
export { CFd };
var __wakaru_MAy_initialized = false;
export function MAy() {
if (__wakaru_MAy_initialized) return;
__wakaru_MAy_initialized = true;
"use strict";
E(), Ei(), Fa(), Lbt(), CFd = class yZi {
    constructor(e){
        e = e || {}, e.brackets = e.brackets || [
            [
                "(",
                ")"
            ],
            [
                "{",
                "}"
            ],
            [
                "[",
                "]"
            ]
        ], this._brackets = [], e.brackets.forEach((n)=>{
            const i = yZi._createOpenBracketRegExp(n[0]), r = yZi._createCloseBracketRegExp(n[1]);
            i && r && this._brackets.push({
                open: n[0],
                openRegExp: i,
                close: n[1],
                closeRegExp: r
            });
        }), this._regExpRules = e.onEnterRules || [];
    }
    onEnter(e, n, i, r) {
        if (e >= 3) for(let s = 0, o = this._regExpRules.length; s < o; s++){
            const a = this._regExpRules[s];
            if ([
                {
                    reg: a.beforeText,
                    text: i
                },
                {
                    reg: a.afterText,
                    text: r
                },
                {
                    reg: a.previousLineText,
                    text: n
                }
            ].every((c)=>c.reg ? (c.reg.lastIndex = 0, c.reg.test(c.text)) : !0)) return a.action;
        }
        if (e >= 2 && i.length > 0 && r.length > 0) for(let s = 0, o = this._brackets.length; s < o; s++){
            const a = this._brackets[s];
            if (a.openRegExp.test(i) && a.closeRegExp.test(r)) return {
                indentAction: H3.IndentOutdent
            };
        }
        if (e >= 2 && i.length > 0) {
            for(let s = 0, o = this._brackets.length; s < o; s++)if (this._brackets[s].openRegExp.test(i)) return {
                indentAction: H3.Indent
            };
        }
        return null;
    }
    static _createOpenBracketRegExp(e) {
        let n = dA(e);
        return /\B/.test(n.charAt(0)) || (n = "\\b" + n), n += "\\s*$", yZi._safeRegExp(n);
    }
    static _createCloseBracketRegExp(e) {
        let n = dA(e);
        return /\B/.test(n.charAt(n.length - 1)) || (n = n + "\\b"), n = "^\\s*" + n, yZi._safeRegExp(n);
    }
    static _safeRegExp(e) {
        try {
            return new RegExp(e);
        } catch (n) {
            return xr(n), null;
        }
    }
};

}
