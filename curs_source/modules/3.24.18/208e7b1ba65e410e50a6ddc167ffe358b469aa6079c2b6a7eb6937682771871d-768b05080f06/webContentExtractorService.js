import { aT, le } from "./async.js";
import { jst } from "./cdpAccessibilityDomain.js";
import { Yn, mr } from "./map.js";
import { h } from "./tslib.es6.js";
import { BrowserWindow as Hst } from "electron";
function $st(e) {
    if (!e.length) return "";
    const t = new Map, n = new Set, r = [];
    for (const d of e)t.set(d.nodeId, d), (!d.parentId || !e.some((u)=>u.nodeId === d.parentId)) && r.push(d);
    function s(d) {
        const u = [
            "navigation",
            "banner",
            "complementary",
            "toolbar",
            "menu",
            "menuitem",
            "tab",
            "tablist"
        ], m = [
            "Skip to main content",
            "Toggle navigation",
            "Previous",
            "Next",
            "Copy",
            "Direct link to",
            "On this page",
            "Edit this page",
            "Search",
            "Command+K"
        ], f = i(d), v = d.role?.value?.toString().toLowerCase() || "";
        return u.includes(v) || m.some((T)=>f.includes(T)) || f.startsWith("Direct link to") || f.startsWith("\xAB ") || f.endsWith(" \xBB") || /^#\s*$/.test(f) || f === "\u200B";
    }
    function i(d) {
        const u = [];
        return d.name?.value && u.push(String(d.name.value)), d.value?.value && d.value.value !== d.name?.value && u.push(String(d.value.value)), d.description?.value && d.description.value !== d.name?.value && d.description.value !== d.value?.value && u.push(String(d.description.value)), u.join(" ").trim();
    }
    function a(d) {
        return d.role?.value === "code" || (d.properties || []).some((u)=>u.name === "code-block" || u.name === "pre");
    }
    function o(d, u = 0, m = {
        inCodeBlock: !1,
        codeText: []
    }) {
        if (!d || d.ignored || n.has(d.nodeId)) return [];
        if (s(d)) return [];
        n.add(d.nodeId);
        const f = [], v = i(d), T = a(d), S = T ? {
            inCodeBlock: !0,
            codeText: []
        } : m;
        if (v) {
            const k = "  ".repeat(u);
            T || S.inCodeBlock ? S.codeText.push(v.trim()) : f.push(k + v);
        }
        if (d.childIds) for (const k of d.childIds){
            const y = t.get(k);
            if (y) {
                const b = o(y, u + 1, S);
                f.push(...b);
            }
        }
        if (T && S.codeText.length > 0) {
            const k = "  ".repeat(u);
            f.push(k + S.codeText.join(" "));
        }
        return f;
    }
    const l = [];
    for (const d of r){
        const u = o(d);
        u.length > 0 && l.push(...u);
    }
    for (const d of e)if (!n.has(d.nodeId)) {
        const u = o(d);
        u.length > 0 && l.push(...u);
    }
    return l.filter((d, u, m)=>d.trim() || u > 0 && m[u - 1].trim()).join(`
`).trim();
}
var FTe;
export { $st, FTe };
var __wakaru_qst_initialized = false;
export function qst() {
if (__wakaru_qst_initialized) return;
__wakaru_qst_initialized = true;
"use strict";
h(), jst(), le(), mr(), FTe = class {
    constructor(){
        this._limiter = new aT(3), this._webContentsCache = new Yn, this._cacheDuration = 1440 * 60 * 1e3;
    }
    isExpired(e) {
        return Date.now() - e.timestamp > this._cacheDuration;
    }
    extract(e) {
        return e.length === 0 ? Promise.resolve([]) : Promise.all(e.map((t)=>this._limiter.queue(()=>this.doExtract(t))));
    }
    async doExtract(e) {
        const t = this._webContentsCache.get(e);
        if (t) if (this.isExpired(t)) this._webContentsCache.delete(e);
        else return t.content;
        const n = new Hst({
            width: 800,
            height: 600,
            show: !1,
            webPreferences: {
                javascript: !1,
                offscreen: !0,
                sandbox: !0,
                webgl: !1
            }
        });
        try {
            await n.loadURL(e.toString(!0)), n.webContents.debugger.attach("1.1");
            const r = await n.webContents.debugger.sendCommand("Accessibility.getFullAXTree"), s = $st(r.nodes);
            return this._webContentsCache.set(e, {
                content: s,
                timestamp: Date.now()
            }), s;
        } catch (r) {
            console.log(r);
        } finally{
            n.destroy();
        }
        return "";
    }
};

}
