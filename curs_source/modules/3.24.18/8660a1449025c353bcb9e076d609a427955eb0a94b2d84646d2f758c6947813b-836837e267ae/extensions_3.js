import { Fa, Zw } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { epe } from "./remoteHosts.js";
import { E } from "./tslib.es6.js";
var MMp, DMp, E3a, NMp, I3a, lm, pbe, O4, ex1;
export { DMp, E3a, I3a, MMp, NMp, O4, ex1, lm, pbe };
var __wakaru_Pw_initialized = false;
export function Pw() {
if (__wakaru_Pw_initialized) return;
__wakaru_Pw_initialized = true;
"use strict";
E(), Fa(), It(), epe(), MMp = "extensions.user.cache", DMp = "extensions.builtin.cache", E3a = "undefined_publisher", NMp = [
    "ui",
    "workspace",
    "web"
], I3a = [
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
], lm = class {
    constructor(t){
        this.value = t, this._lower = t.toLowerCase();
    }
    static equals(t, e) {
        if (typeof t > "u" || t === null) return typeof e > "u" || e === null;
        if (typeof e > "u" || e === null) return !1;
        if (typeof t == "string" || typeof e == "string") {
            const n = typeof t == "string" ? t : t.value, i = typeof e == "string" ? e : e.value;
            return Zw(n, i);
        }
        return t._lower === e._lower;
    }
    static toKey(t) {
        return typeof t == "string" ? t.toLowerCase() : t._lower;
    }
}, pbe = class {
    constructor(t){
        if (this._set = new Set, t) for (const e of t)this.add(e);
    }
    get size() {
        return this._set.size;
    }
    add(t) {
        this._set.add(lm.toKey(t));
    }
    delete(t) {
        return this._set.delete(lm.toKey(t));
    }
    has(t) {
        return this._set.has(lm.toKey(t));
    }
}, O4 = class {
    constructor(){
        this._map = new Map;
    }
    clear() {
        this._map.clear();
    }
    delete(t) {
        this._map.delete(lm.toKey(t));
    }
    get(t) {
        return this._map.get(lm.toKey(t));
    }
    has(t) {
        return this._map.has(lm.toKey(t));
    }
    set(t, e) {
        this._map.set(lm.toKey(t), e);
    }
    values() {
        return this._map.values();
    }
    forEach(t) {
        this._map.forEach(t);
    }
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }
}, ex1 = jn("IBuiltinExtensionsScannerService");

}
