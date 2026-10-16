import { Ai, Oo, jn, vf } from "./HVr.js";
import { Eg, _a } from "./iterator.js";
import { x } from "./tslib.es6.js";
var GCo, z_e;
export { GCo, z_e };
var __wakaru_SCt_initialized = false;
export function SCt() {
if (__wakaru_SCt_initialized) return;
__wakaru_SCt_initialized = true;
"use strict";
x(), Eg(), jn(), GCo = class gAa {
    constructor(t){
        this.locations = new Map, typeof t == "string" ? (this.stringRoot = !0, this.root = {
            value: t
        }) : (this.stringRoot = !1, this.root = structuredClone(t));
    }
    static parse(t) {
        if (t instanceof gAa) return t;
        const n = new gAa(t);
        return n.applyPlatformSpecificKeys(), n.parseObject(n.root), n;
    }
    applyPlatformSpecificKeys() {
        const t = this.root, n = Oo ? "windows" : Ai ? "osx" : vf ? "linux" : void 0;
        n === void 0 || !t || typeof t != "object" || !t.hasOwnProperty(n) || (Object.keys(t[n]).forEach((i)=>t[i] = t[n][i]), delete t.windows, delete t.osx, delete t.linux);
    }
    parseVariable(t, n) {
        if (t[n] !== "$" || t[n + 1] !== "{") return;
        let i = n + 2, r = 1;
        for(; i < t.length;){
            if (t[i] === "{") r++;
            else if (t[i] === "}" && (r--, r === 0)) break;
            i++;
        }
        if (r !== 0) return;
        const s = t.slice(n, i + 1), o = t.substring(n + 2, i), a = o.indexOf(":");
        return a === -1 ? {
            replacement: {
                id: s,
                name: o,
                inner: o
            },
            end: i
        } : {
            replacement: {
                id: s,
                inner: o,
                name: o.slice(0, a),
                arg: o.slice(a + 1)
            },
            end: i
        };
    }
    parseObject(t) {
        if (!(typeof t != "object" || t === null)) {
            if (Array.isArray(t)) {
                for(let n = 0; n < t.length; n++){
                    const i = t[n];
                    typeof i == "string" ? this.parseString(t, n, i) : this.parseObject(i);
                }
                return;
            }
            for (const [n, i] of Object.entries(t))typeof i == "string" ? this.parseString(t, n, i) : this.parseObject(i);
        }
    }
    parseString(t, n, i) {
        let r = 0;
        for(; r < i.length;){
            const s = i.indexOf("${", r);
            if (s === -1) break;
            const o = this.parseVariable(i, s);
            if (o) {
                const a = this.locations.get(o.replacement.id) || {
                    locations: [],
                    replacement: o.replacement
                };
                a.locations.push({
                    object: t,
                    propertyName: n
                }), this.locations.set(o.replacement.id, a), r = o.end + 1;
            } else r = s + 2;
        }
    }
    unresolved() {
        return _a.map(_a.filter(this.locations.values(), (t)=>t.resolved === void 0), (t)=>t.replacement);
    }
    resolved() {
        return _a.map(_a.filter(this.locations.values(), (t)=>!!t.resolved), (t)=>[
                t.replacement,
                t.resolved
            ]);
    }
    resolve(t, n) {
        typeof n != "object" && (n = {
            value: String(n)
        });
        const i = this.locations.get(t.id);
        if (i) {
            if (n.value !== void 0) for (const { object: r, propertyName: s } of i.locations || []){
                const o = r[s].replaceAll(t.id, n.value);
                r[s] = o;
            }
            i.resolved = n;
        }
    }
    toObject() {
        return this.stringRoot ? this.root.value : this.root;
    }
}, GCo.VARIABLE_LHS = "${", z_e = GCo;

}
