import { Di, _r, a_, xa } from "./Iwo.js";
import { IT, np } from "./iterator.js";
import { E } from "./tslib.es6.js";
var Bol, eMe;
export { Bol, eMe };
var __wakaru_Vzt_initialized = false;
export function Vzt() {
if (__wakaru_Vzt_initialized) return;
__wakaru_Vzt_initialized = true;
"use strict";
E(), IT(), Di(), Bol = class eeu {
    constructor(e){
        this.locations = new Map, typeof e == "string" ? (this.stringRoot = !0, this.root = {
            value: e
        }) : (this.stringRoot = !1, this.root = structuredClone(e));
    }
    static parse(e) {
        if (e instanceof eeu) return e;
        const n = new eeu(e);
        return n.applyPlatformSpecificKeys(), n.parseObject(n.root), n;
    }
    applyPlatformSpecificKeys() {
        const e = this.root, n = xa ? "windows" : _r ? "osx" : a_ ? "linux" : void 0;
        n === void 0 || !e || typeof e != "object" || !e.hasOwnProperty(n) || (Object.keys(e[n]).forEach((i)=>e[i] = e[n][i]), delete e.windows, delete e.osx, delete e.linux);
    }
    parseVariable(e, n) {
        if (e[n] !== "$" || e[n + 1] !== "{") return;
        let i = n + 2, r = 1;
        for(; i < e.length;){
            if (e[i] === "{") r++;
            else if (e[i] === "}" && (r--, r === 0)) break;
            i++;
        }
        if (r !== 0) return;
        const s = e.slice(n, i + 1), o = e.substring(n + 2, i), a = o.indexOf(":");
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
    parseObject(e) {
        if (!(typeof e != "object" || e === null)) {
            if (Array.isArray(e)) {
                for(let n = 0; n < e.length; n++){
                    const i = e[n];
                    typeof i == "string" ? this.parseString(e, n, i) : this.parseObject(i);
                }
                return;
            }
            for (const [n, i] of Object.entries(e))typeof i == "string" ? this.parseString(e, n, i) : this.parseObject(i);
        }
    }
    parseString(e, n, i) {
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
                    object: e,
                    propertyName: n
                }), this.locations.set(o.replacement.id, a), r = o.end + 1;
            } else r = s + 2;
        }
    }
    unresolved() {
        return np.map(np.filter(this.locations.values(), (e)=>e.resolved === void 0), (e)=>e.replacement);
    }
    resolved() {
        return np.map(np.filter(this.locations.values(), (e)=>!!e.resolved), (e)=>[
                e.replacement,
                e.resolved
            ]);
    }
    resolve(e, n) {
        typeof n != "object" && (n = {
            value: String(n)
        });
        const i = this.locations.get(e.id);
        if (i) {
            if (n.value !== void 0) for (const { object: r, propertyName: s } of i.locations || []){
                const o = r[s].replaceAll(e.id, n.value);
                r[s] = o;
            }
            i.resolved = n;
        }
    }
    toObject() {
        return this.stringRoot ? this.root.value : this.root;
    }
}, Bol.VARIABLE_LHS = "${", eMe = Bol;

}
