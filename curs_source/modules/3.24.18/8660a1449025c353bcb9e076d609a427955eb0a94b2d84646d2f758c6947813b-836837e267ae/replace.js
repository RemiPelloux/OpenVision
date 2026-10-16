import { Fa, cmr } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { s3a } from "./ipa.js";
import { $Pp } from "./search.js";
import { E } from "./tslib.es6.js";
var Fhs;
export { Fhs };
var __wakaru_$Mg_initialized = false;
export function $Mg() {
if (__wakaru_$Mg_initialized) return;
__wakaru_$Mg_initialized = true;
"use strict";
E(), Fa(), Cw(), $Pp(), Fhs = class {
    constructor(t, e, n){
        this._hasParameters = !1, this._replacePattern = t;
        let i, r;
        typeof e == "boolean" ? (r = e, this._regExp = n) : (i = e, r = !!i.isRegExp, this._regExp = cmr(i.pattern, !!i.isRegExp, {
            matchCase: i.isCaseSensitive,
            wholeWord: i.isWordMatch,
            multiline: i.isMultiline,
            global: !1,
            unicode: !0
        })), r && this.parseReplaceString(t), this._regExp.global && (this._regExp = cmr(this._regExp.source, !0, {
            matchCase: !this._regExp.ignoreCase,
            wholeWord: !1,
            multiline: this._regExp.multiline,
            global: !1
        })), this._caseOpsRegExp = new RegExp(/([\s\S]*?)((?:\\[uUlL])+?|)(\$[0-9]+)([\s\S]*?)/g);
    }
    get hasParameters() {
        return this._hasParameters;
    }
    get pattern() {
        return this._replacePattern;
    }
    get regExp() {
        return this._regExp;
    }
    getReplaceString(t, e) {
        this._regExp.lastIndex = 0;
        const n = this._regExp.exec(t);
        if (n) {
            if (this.hasParameters) {
                const i = this.replaceWithCaseOperations(t, this._regExp, this.buildReplaceString(n, e));
                return n[0] === t ? i : i.substr(n.index, n[0].length - (t.length - i.length));
            }
            return this.buildReplaceString(n, e);
        }
        return null;
    }
    replaceWithCaseOperations(t, e, n) {
        if (!/\\[uUlL]/.test(n)) return t.replace(e, n);
        const i = e.exec(t);
        if (i === null) return t.replace(e, n);
        let r, s = "", o = 0, a = "";
        for(; (r = this._caseOpsRegExp.exec(n)) !== null;){
            o = r.index;
            const l = r[0];
            a = l;
            let c = r[2];
            const u = r[3];
            if (!c) {
                s += l;
                continue;
            }
            const d = i[parseInt(u.slice(1))];
            if (!d) {
                s += l;
                continue;
            }
            const h = d.length;
            s += r[1], c = c.replace(/\\/g, "");
            let p = 0;
            for(; p < c.length; p++)switch(c[p]){
                case "U":
                    s += d.slice(p).toUpperCase(), p = h;
                    break;
                case "u":
                    s += d[p].toUpperCase();
                    break;
                case "L":
                    s += d.slice(p).toLowerCase(), p = h;
                    break;
                case "l":
                    s += d[p].toLowerCase();
                    break;
            }
            p < h && (s += d.slice(p)), s += r[4];
        }
        return s += n.slice(o + a.length), t.replace(e, s);
    }
    buildReplaceString(t, e) {
        return e ? s3a(t, this._replacePattern) : this._replacePattern;
    }
    parseReplaceString(t) {
        if (!t || t.length === 0) return;
        let e = 0, n = "";
        for(let i = 0, r = t.length; i < r; i++){
            const s = t.charCodeAt(i);
            if (s === ti.Backslash) {
                if (i++, i >= r) break;
                const o = t.charCodeAt(i);
                let a = null;
                switch(o){
                    case ti.Backslash:
                        a = "\\";
                        break;
                    case ti.n:
                        a = `
`;
                        break;
                    case ti.t:
                        a = "	";
                        break;
                }
                a && (n += t.substring(e, i - 1) + a, e = i + 1);
            }
            if (s === ti.DollarSign) {
                if (i++, i >= r) break;
                const o = t.charCodeAt(i);
                let a = null;
                switch(o){
                    case ti.Digit0:
                        a = "$&", this._hasParameters = !0;
                        break;
                    case ti.BackTick:
                    case ti.SingleQuote:
                        this._hasParameters = !0;
                        break;
                    default:
                        {
                            if (!this.between(o, ti.Digit1, ti.Digit9)) break;
                            if (i === t.length - 1) {
                                this._hasParameters = !0;
                                break;
                            }
                            let l = t.charCodeAt(++i);
                            if (!this.between(l, ti.Digit0, ti.Digit9)) {
                                this._hasParameters = !0, --i;
                                break;
                            }
                            if (i === t.length - 1) {
                                this._hasParameters = !0;
                                break;
                            }
                            if (l = t.charCodeAt(++i), !this.between(l, ti.Digit0, ti.Digit9)) {
                                this._hasParameters = !0, --i;
                                break;
                            }
                            break;
                        }
                }
                a && (n += t.substring(e, i - 1) + a, e = i + 1);
            }
        }
        e !== 0 && (this._replacePattern = n + t.substring(e));
    }
    between(t, e, n) {
        return e <= t && t <= n;
    }
};

}
