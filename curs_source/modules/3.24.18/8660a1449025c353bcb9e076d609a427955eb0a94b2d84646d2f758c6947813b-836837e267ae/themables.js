import { gs, yt } from "./codicons.js";
import { E } from "./tslib.es6.js";
var W7o, Gn;
export { Gn, W7o };
var __wakaru_ta_initialized = false;
export function ta() {
if (__wakaru_ta_initialized) return;
__wakaru_ta_initialized = true;
"use strict";
E(), gs(), ((t)=>{
    function e(n) {
        return n && typeof n == "object" && typeof n.id == "string";
    }
    t.isThemeColor = e;
})(W7o || (W7o = {})), ((t)=>{
    t.iconNameSegment = "[A-Za-z0-9]+", t.iconNameExpression = "[A-Za-z0-9-]+", t.iconModifierExpression = "~[A-Za-z]+", t.iconNameCharacter = "[A-Za-z0-9~-]";
    const e = new RegExp(`^(${t.iconNameExpression})(${t.iconModifierExpression})?$`);
    function n(h) {
        if (!h) return n(yt.error);
        const p = e.exec(h.id);
        if (!p) return n(yt.error);
        const [, g, f] = p, _ = [
            "codicon",
            "codicon-" + g
        ];
        return f && _.push("codicon-modifier-" + f.substring(1)), _;
    }
    t.asClassNameArray = n;
    function i(h) {
        if (!h) return i(yt.error);
        const p = e.exec(h.id);
        if (!p) return i(yt.error);
        const [, g, f] = p;
        let _ = `codicon codicon-${g}`;
        return f && (_ += ` codicon-modifier-${f.substring(1)}`), _;
    }
    t.asClassName = i;
    function r(h) {
        if (!h) return r(yt.error);
        const p = e.exec(h.id);
        if (!p) return r(yt.error);
        const [, g, f] = p;
        let _ = `.codicon.codicon-${g}`;
        return f && (_ += `.codicon-modifier-${f.substring(1)}`), _;
    }
    t.asCSSSelector = r;
    function s(h) {
        return h && typeof h == "object" && typeof h.id == "string" && (typeof h.color > "u" || W7o.isThemeColor(h.color));
    }
    t.isThemeIcon = s;
    const o = new RegExp(`^\\$\\((${t.iconNameExpression}(?:${t.iconModifierExpression})?)\\)$`);
    function a(h) {
        const p = o.exec(h);
        if (!p) return;
        const [, g] = p;
        return {
            id: g
        };
    }
    t.fromString = a;
    function l(h) {
        return {
            id: h
        };
    }
    t.fromId = l;
    function c(h, p) {
        let g = h.id;
        const f = g.lastIndexOf("~");
        return f !== -1 && (g = g.substring(0, f)), p && (g = `${g}~${p}`), {
            id: g
        };
    }
    t.modify = c;
    function u(h) {
        const p = h.id.lastIndexOf("~");
        if (p !== -1) return h.id.substring(p + 1);
    }
    t.getModifier = u;
    function d(h, p) {
        return h.id === p.id && h.color?.id === p.color?.id;
    }
    t.isEqual = d;
})(Gn || (Gn = {}));

}
