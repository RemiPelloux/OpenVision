import { Oo, jn } from "./HVr.js";
import { h9h, wTe } from "./environmentVariable_2.js";
import { x } from "./tslib.es6.js";
function p9h(e, t, n = !1) {
    return e.scope ? !!(e.scope.workspaceFolder && t?.workspaceFolder && e.scope.workspaceFolder.index === t.workspaceFolder.index) : n ? t === e.scope : !0;
}
function m9h(e, t) {
    if (!t) return e;
    const n = new Set;
    t.forEach((r)=>n.add(r.extensionIdentifier));
    const i = [];
    return e.forEach((r)=>{
        n.has(r.extensionIdentifier) || i.push(r);
    }), i.length === 0 ? void 0 : i;
}
function ih_(e, t) {
    if (!t) return;
    const n = new Map;
    t.forEach((r)=>n.set(r.extensionIdentifier, r));
    const i = [];
    return e.forEach((r)=>{
        const s = n.get(r.extensionIdentifier);
        s && (r.type !== s.type || r.value !== s.value || r.scope?.workspaceFolder?.index !== s.scope?.workspaceFolder?.index) && i.push(s);
    }), i.length === 0 ? void 0 : i;
}
var g9h, nMo;
export { g9h, ih_, m9h, nMo, p9h };
var __wakaru_f9h_initialized = false;
export function f9h() {
if (__wakaru_f9h_initialized) return;
__wakaru_f9h_initialized = true;
"use strict";
x(), jn(), h9h(), g9h = new Map([
    [
        wTe.Append,
        "APPEND"
    ],
    [
        wTe.Prepend,
        "PREPEND"
    ],
    [
        wTe.Replace,
        "REPLACE"
    ]
]), nMo = class {
    constructor(e){
        this.collections = e, this.map = new Map, this.descriptionMap = new Map, e.forEach((t, n)=>{
            this.populateDescriptionMap(t, n);
            const i = t.map.entries();
            let r = i.next();
            for(; !r.done;){
                const s = r.value[1], o = r.value[0];
                let a = this.map.get(o);
                if (a || (a = [], this.map.set(o, a)), a.length > 0 && a[0].type === wTe.Replace) {
                    r = i.next();
                    continue;
                }
                const c = {
                    extensionIdentifier: n,
                    value: s.value,
                    type: s.type,
                    scope: s.scope,
                    variable: s.variable,
                    options: s.options
                };
                c.scope || delete c.scope, a.unshift(c), r = i.next();
            }
        });
    }
    async applyToProcessEnvironment(e, t, n) {
        let i;
        Oo && (i = {}, Object.keys(e).forEach((r)=>i[r.toLowerCase()] = r));
        for (const [r, s] of this.getVariableMap(t)){
            const o = Oo && i[r.toLowerCase()] || r;
            for (const a of s){
                const c = n ? await n(a.value) : a.value;
                if (a.options?.applyAtProcessCreation ?? !0) switch(a.type){
                    case wTe.Append:
                        e[o] = (e[o] || "") + c;
                        break;
                    case wTe.Prepend:
                        e[o] = c + (e[o] || "");
                        break;
                    case wTe.Replace:
                        e[o] = c;
                        break;
                }
                if (a.options?.applyAtShellIntegration ?? !1) {
                    const l = `VSCODE_ENV_${g9h.get(a.type)}`;
                    e[l] = (e[l] ? e[l] + ":" : "") + r + "=" + this._encodeColons(c);
                }
            }
        }
    }
    _encodeColons(e) {
        return e.replaceAll(":", "\\x3a");
    }
    diff(e, t) {
        const n = new Map, i = new Map, r = new Map;
        if (e.getVariableMap(t).forEach((s, o)=>{
            const a = this.getVariableMap(t).get(o), c = m9h(s, a);
            c && n.set(o, c);
        }), this.getVariableMap(t).forEach((s, o)=>{
            const a = e.getVariableMap(t).get(o), c = m9h(s, a);
            c && r.set(o, c);
        }), this.getVariableMap(t).forEach((s, o)=>{
            const a = e.getVariableMap(t).get(o), c = ih_(s, a);
            c && i.set(o, c);
        }), !(n.size === 0 && i.size === 0 && r.size === 0)) return {
            added: n,
            changed: i,
            removed: r
        };
    }
    getVariableMap(e) {
        const t = new Map;
        for (const n of this.map.values()){
            const i = n.filter((r)=>p9h(r, e));
            i.length > 0 && t.set(i[0].variable, i);
        }
        return t;
    }
    getDescriptionMap(e) {
        const t = new Map;
        for (const n of this.descriptionMap.values()){
            const i = n.filter((r)=>p9h(r, e, !0));
            for (const r of i)t.set(r.extensionIdentifier, r.description);
        }
        return t;
    }
    populateDescriptionMap(e, t) {
        if (!e.descriptionMap) return;
        const n = e.descriptionMap.entries();
        let i = n.next();
        for(; !i.done;){
            const r = i.value[1], s = i.value[0];
            let o = this.descriptionMap.get(s);
            o || (o = [], this.descriptionMap.set(s, o));
            const a = {
                extensionIdentifier: t,
                scope: r.scope,
                description: r.description
            };
            a.scope || delete a.scope, o.push(a), i = n.next();
        }
    }
};

}
