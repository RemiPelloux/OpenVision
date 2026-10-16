import { Di, xa } from "./Iwo.js";
import { G2g, dDk, q2g } from "./Ycg.js";
import { N9e, W2g } from "./environmentVariable_2.js";
import { E } from "./tslib.es6.js";
var z2g, Dvl;
export { Dvl, z2g };
var __wakaru_V2g_initialized = false;
export function V2g() {
if (__wakaru_V2g_initialized) return;
__wakaru_V2g_initialized = true;
"use strict";
E(), Di(), W2g(), z2g = new Map([
    [
        N9e.Append,
        "APPEND"
    ],
    [
        N9e.Prepend,
        "PREPEND"
    ],
    [
        N9e.Replace,
        "REPLACE"
    ]
]), Dvl = class {
    constructor(t){
        this.collections = t, this.map = new Map, this.descriptionMap = new Map, t.forEach((e, n)=>{
            this.populateDescriptionMap(e, n);
            const i = e.map.entries();
            let r = i.next();
            for(; !r.done;){
                const s = r.value[1], o = r.value[0];
                let a = this.map.get(o);
                if (a || (a = [], this.map.set(o, a)), a.length > 0 && a[0].type === N9e.Replace) {
                    r = i.next();
                    continue;
                }
                const l = {
                    extensionIdentifier: n,
                    value: s.value,
                    type: s.type,
                    scope: s.scope,
                    variable: s.variable,
                    options: s.options
                };
                l.scope || delete l.scope, a.unshift(l), r = i.next();
            }
        });
    }
    async applyToProcessEnvironment(t, e, n) {
        let i;
        xa && (i = {}, Object.keys(t).forEach((r)=>i[r.toLowerCase()] = r));
        for (const [r, s] of this.getVariableMap(e)){
            const o = xa && i[r.toLowerCase()] || r;
            for (const a of s){
                const l = n ? await n(a.value) : a.value;
                if (a.options?.applyAtProcessCreation ?? !0) switch(a.type){
                    case N9e.Append:
                        t[o] = (t[o] || "") + l;
                        break;
                    case N9e.Prepend:
                        t[o] = l + (t[o] || "");
                        break;
                    case N9e.Replace:
                        t[o] = l;
                        break;
                }
                if (a.options?.applyAtShellIntegration ?? !1) {
                    const c = `VSCODE_ENV_${z2g.get(a.type)}`;
                    t[c] = (t[c] ? t[c] + ":" : "") + r + "=" + this._encodeColons(l);
                }
            }
        }
    }
    _encodeColons(t) {
        return t.replaceAll(":", "\\x3a");
    }
    diff(t, e) {
        const n = new Map, i = new Map, r = new Map;
        if (t.getVariableMap(e).forEach((s, o)=>{
            const a = this.getVariableMap(e).get(o), l = q2g(s, a);
            l && n.set(o, l);
        }), this.getVariableMap(e).forEach((s, o)=>{
            const a = t.getVariableMap(e).get(o), l = q2g(s, a);
            l && r.set(o, l);
        }), this.getVariableMap(e).forEach((s, o)=>{
            const a = t.getVariableMap(e).get(o), l = dDk(s, a);
            l && i.set(o, l);
        }), !(n.size === 0 && i.size === 0 && r.size === 0)) return {
            added: n,
            changed: i,
            removed: r
        };
    }
    getVariableMap(t) {
        const e = new Map;
        for (const n of this.map.values()){
            const i = n.filter((r)=>G2g(r, t));
            i.length > 0 && e.set(i[0].variable, i);
        }
        return e;
    }
    getDescriptionMap(t) {
        const e = new Map;
        for (const n of this.descriptionMap.values()){
            const i = n.filter((r)=>G2g(r, t, !0));
            for (const r of i)e.set(r.extensionIdentifier, r.description);
        }
        return e;
    }
    populateDescriptionMap(t, e) {
        if (!t.descriptionMap) return;
        const n = t.descriptionMap.entries();
        let i = n.next();
        for(; !i.done;){
            const r = i.value[1], s = i.value[0];
            let o = this.descriptionMap.get(s);
            o || (o = [], this.descriptionMap.set(s, o));
            const a = {
                extensionIdentifier: e,
                scope: r.scope,
                description: r.description
            };
            a.scope || delete a.scope, o.push(a), i = n.next();
        }
    }
};

}
