import { Pe, _i } from "./codicons.js";
import { x } from "./tslib.es6.js";
var FYr, Ft;
export { FYr, Ft };
var __wakaru_Sr_initialized = false;
export function Sr() {
if (__wakaru_Sr_initialized) return;
__wakaru_Sr_initialized = true;
"use strict";
x(), _i(), ((e)=>{
    function t(n) {
        return n && typeof n == "object" && typeof n.id == "string";
    }
    e.isThemeColor = t;
})(FYr || (FYr = {})), ((e)=>{
    e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
    const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);
    function n(p) {
        if (!p) return n(Pe.error);
        const g = t.exec(p.id);
        if (!g) return n(Pe.error);
        const [, f, v] = g, b = [
            "codicon",
            "codicon-" + f
        ];
        return v && b.push("codicon-modifier-" + v.substring(1)), b;
    }
    e.asClassNameArray = n;
    function i(p) {
        if (!p) return i(Pe.error);
        const g = t.exec(p.id);
        if (!g) return i(Pe.error);
        const [, f, v] = g;
        let b = `codicon codicon-${f}`;
        return v && (b += ` codicon-modifier-${v.substring(1)}`), b;
    }
    e.asClassName = i;
    function r(p) {
        if (!p) return r(Pe.error);
        const g = t.exec(p.id);
        if (!g) return r(Pe.error);
        const [, f, v] = g;
        let b = `.codicon.codicon-${f}`;
        return v && (b += `.codicon-modifier-${v.substring(1)}`), b;
    }
    e.asCSSSelector = r;
    function s(p) {
        return p && typeof p == "object" && typeof p.id == "string" && (typeof p.color > "u" || FYr.isThemeColor(p.color));
    }
    e.isThemeIcon = s;
    const o = new RegExp(`^\\$\\((${e.iconNameExpression}(?:${e.iconModifierExpression})?)\\)$`);
    function a(p) {
        const g = o.exec(p);
        if (!g) return;
        const [, f] = g;
        return {
            id: f
        };
    }
    e.fromString = a;
    function c(p) {
        return {
            id: p
        };
    }
    e.fromId = c;
    function l(p, g) {
        let f = p.id;
        const v = f.lastIndexOf("~");
        return v !== -1 && (f = f.substring(0, v)), g && (f = `${f}~${g}`), {
            id: f
        };
    }
    e.modify = l;
    function u(p) {
        const g = p.id.lastIndexOf("~");
        if (g !== -1) return p.id.substring(g + 1);
    }
    e.getModifier = u;
    function h(p, g) {
        return p.id === g.id && p.color?.id === g.color?.id;
    }
    e.isEqual = h;
})(Ft || (Ft = {}));

}
