import { Ps, l1, ns, si } from "./HVr.js";
import { ize, lR } from "./languageConfiguration.js";
import { x } from "./tslib.es6.js";
var iPc;
export { iPc };
var __wakaru_wpg_initialized = false;
export function wpg() {
if (__wakaru_wpg_initialized) return;
__wakaru_wpg_initialized = true;
"use strict";
x(), si(), Ps(), ize(), iPc = class OXn {
    constructor(t){
        t = t || {}, t.brackets = t.brackets || [
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
        ], this._brackets = [], t.brackets.forEach((n)=>{
            const i = OXn._createOpenBracketRegExp(n[0]), r = OXn._createCloseBracketRegExp(n[1]);
            i && r && this._brackets.push({
                open: n[0],
                openRegExp: i,
                close: n[1],
                closeRegExp: r
            });
        }), this._regExpRules = t.onEnterRules || [];
    }
    onEnter(t, n, i, r) {
        if (t >= 3) for(let s = 0, o = this._regExpRules.length; s < o; s++){
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
            ].every((l)=>l.reg ? (l.reg.lastIndex = 0, l.reg.test(l.text)) : !0)) return a.action;
        }
        if (t >= 2 && i.length > 0 && r.length > 0) for(let s = 0, o = this._brackets.length; s < o; s++){
            const a = this._brackets[s];
            if (a.openRegExp.test(i) && a.closeRegExp.test(r)) return {
                indentAction: lR.IndentOutdent
            };
        }
        if (t >= 2 && i.length > 0) {
            for(let s = 0, o = this._brackets.length; s < o; s++)if (this._brackets[s].openRegExp.test(i)) return {
                indentAction: lR.Indent
            };
        }
        return null;
    }
    static _createOpenBracketRegExp(t) {
        let n = l1(t);
        return /\B/.test(n.charAt(0)) || (n = "\\b" + n), n += "\\s*$", OXn._safeRegExp(n);
    }
    static _createCloseBracketRegExp(t) {
        let n = l1(t);
        return /\B/.test(n.charAt(n.length - 1)) || (n = n + "\\b"), n = "^\\s*" + n, OXn._safeRegExp(n);
    }
    static _safeRegExp(t) {
        try {
            return new RegExp(t);
        } catch (n) {
            return ns(n), null;
        }
    }
};

}
