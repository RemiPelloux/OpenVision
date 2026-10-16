import { Hb, Ps } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { Sse } from "./remoteHosts.js";
import { x } from "./tslib.es6.js";
var Lwu, Nwu, pHs, Owu, g7t, xu, kse, vN, Acv;
export { Acv, Lwu, Nwu, Owu, g7t, kse, pHs, vN, xu };
var __wakaru_G__initialized = false;
export function G_() {
if (__wakaru_G__initialized) return;
__wakaru_G__initialized = true;
"use strict";
x(), Ps(), Ze(), Sse(), Lwu = "extensions.user.cache", Nwu = "extensions.builtin.cache", pHs = "undefined_publisher", Owu = [
    "ui",
    "workspace",
    "web"
], g7t = [
    "AI",
    "Azure",
    "Chat",
    "Data Science",
    "Debuggers",
    "Extension Packs",
    "Education",
    "Formatters",
    "Keymaps",
    "Language Packs",
    "Linters",
    "Machine Learning",
    "Notebooks",
    "Programming Languages",
    "SCM Providers",
    "Snippets",
    "Testing",
    "Themes",
    "Visualization",
    "Other"
], xu = class {
    constructor(e){
        this.value = e, this._lower = e.toLowerCase();
    }
    static equals(e, t) {
        if (typeof e > "u" || e === null) return typeof t > "u" || t === null;
        if (typeof t > "u" || t === null) return !1;
        if (typeof e == "string" || typeof t == "string") {
            const n = typeof e == "string" ? e : e.value, i = typeof t == "string" ? t : t.value;
            return Hb(n, i);
        }
        return e._lower === t._lower;
    }
    static toKey(e) {
        return typeof e == "string" ? e.toLowerCase() : e._lower;
    }
}, kse = class {
    constructor(e){
        if (this._set = new Set, e) for (const t of e)this.add(t);
    }
    get size() {
        return this._set.size;
    }
    add(e) {
        this._set.add(xu.toKey(e));
    }
    delete(e) {
        return this._set.delete(xu.toKey(e));
    }
    has(e) {
        return this._set.has(xu.toKey(e));
    }
}, vN = class {
    constructor(){
        this._map = new Map;
    }
    clear() {
        this._map.clear();
    }
    delete(e) {
        this._map.delete(xu.toKey(e));
    }
    get(e) {
        return this._map.get(xu.toKey(e));
    }
    has(e) {
        return this._map.has(xu.toKey(e));
    }
    set(e, t) {
        this._map.set(xu.toKey(e), t);
    }
    values() {
        return this._map.values();
    }
    forEach(e) {
        this._map.forEach(e);
    }
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }
}, Acv = vn("IBuiltinExtensionsScannerService");

}
