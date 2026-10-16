import { E1, dr } from "./codicons.js";
import { h } from "./tslib.es6.js";
var u2, lf;
export { lf, u2 };
var __wakaru_yfe_initialized = false;
export function yfe() {
if (__wakaru_yfe_initialized) return;
__wakaru_yfe_initialized = true;
"use strict";
h(), E1(), ((e)=>{
    function t(n) {
        return n && typeof n == "object" && typeof n.id == "string";
    }
    e.isThemeColor = t;
})(u2 || (u2 = {})), ((e)=>{
    e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
    const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);
    function n(f) {
        if (!f) return n(dr.error);
        const v = t.exec(f.id);
        if (!v) return n(dr.error);
        const [, T, S] = v, k = [
            "codicon",
            "codicon-" + T
        ];
        return S && k.push("codicon-modifier-" + S.substring(1)), k;
    }
    e.asClassNameArray = n;
    function r(f) {
        if (!f) return r(dr.error);
        const v = t.exec(f.id);
        if (!v) return r(dr.error);
        const [, T, S] = v;
        let k = `codicon codicon-${T}`;
        return S && (k += ` codicon-modifier-${S.substring(1)}`), k;
    }
    e.asClassName = r;
    function s(f) {
        if (!f) return s(dr.error);
        const v = t.exec(f.id);
        if (!v) return s(dr.error);
        const [, T, S] = v;
        let k = `.codicon.codicon-${T}`;
        return S && (k += `.codicon-modifier-${S.substring(1)}`), k;
    }
    e.asCSSSelector = s;
    function i(f) {
        return f && typeof f == "object" && typeof f.id == "string" && (typeof f.color > "u" || u2.isThemeColor(f.color));
    }
    e.isThemeIcon = i;
    const a = new RegExp(`^\\$\\((${e.iconNameExpression}(?:${e.iconModifierExpression})?)\\)$`);
    function o(f) {
        const v = a.exec(f);
        if (!v) return;
        const [, T] = v;
        return {
            id: T
        };
    }
    e.fromString = o;
    function l(f) {
        return {
            id: f
        };
    }
    e.fromId = l;
    function d(f, v) {
        let T = f.id;
        const S = T.lastIndexOf("~");
        return S !== -1 && (T = T.substring(0, S)), v && (T = `${T}~${v}`), {
            id: T
        };
    }
    e.modify = d;
    function u(f) {
        const v = f.id.lastIndexOf("~");
        if (v !== -1) return f.id.substring(v + 1);
    }
    e.getModifier = u;
    function m(f, v) {
        return f.id === v.id && f.color?.id === v.color?.id;
    }
    e.isEqual = m;
})(lf || (lf = {}));

}
