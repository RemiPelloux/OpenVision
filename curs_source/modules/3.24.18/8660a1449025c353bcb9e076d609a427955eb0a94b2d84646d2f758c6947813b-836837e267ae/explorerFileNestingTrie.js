import { E } from "./tslib.es6.js";
var Ecf, AIl, Icf, RIl, PIl;
export { AIl, Ecf, Icf, PIl, RIl };
var __wakaru_b$k_initialized = false;
export function b$k() {
if (__wakaru_b$k_initialized) return;
__wakaru_b$k_initialized = true;
"use strict";
E(), Ecf = class {
    constructor(t){
        this.root = new AIl;
        for (const [e, n] of t)for (const i of n)this.root.add(e, i);
    }
    toString() {
        return this.root.toString();
    }
    getAttributes(t, e) {
        const n = t.lastIndexOf(".");
        return n < 1 ? {
            dirname: e,
            basename: t,
            extname: ""
        } : {
            dirname: e,
            basename: t.substring(0, n),
            extname: t.substring(n + 1)
        };
    }
    nest(t, e) {
        const n = new AIl;
        for (const s of t){
            const o = this.getAttributes(s, e), a = this.root.get(s, o);
            for (const l of a)n.add(l, s);
        }
        const i = (s, o = new Set)=>{
            if (o.has(s)) return [];
            o.add(s);
            const a = this.getAttributes(s, e), l = n.get(s, a);
            return l.length === 0 ? [
                s
            ] : l.length === 1 && l[0] === s ? [
                s
            ] : l.flatMap((c)=>i(c, o));
        }, r = new Map;
        for (const s of t){
            let o = i(s);
            o.length === 0 && (o = [
                s
            ]);
            for (const a of o){
                let l = r.get(a);
                l || r.set(a, l = new Set), s !== a && l.add(s);
            }
        }
        return r;
    }
}, AIl = class pMb {
    constructor(){
        this.value = new Icf, this.map = new Map;
    }
    add(e, n) {
        if (e === "") this.value.add(e, n);
        else if (e[0] === "*") this.value.add(e, n);
        else {
            const i = e[0], r = e.slice(1);
            let s = this.map.get(i);
            s || this.map.set(i, s = new pMb), s.add(r, n);
        }
    }
    get(e, n) {
        const i = [];
        i.push(...this.value.get(e, n));
        const r = e[0], s = e.slice(1), o = this.map.get(r);
        return o && i.push(...o.get(s, n)), i;
    }
    toString(e = "") {
        const n = [];
        return this.value.hasItems && n.push(`* => 
` + this.value.toString(e + "  ")), [
            ...this.map.entries()
        ].map(([i, r])=>n.push("^" + i + ` => 
` + r.toString(e + "  "))), n.map((i)=>e + i).join(`
`);
    }
}, Icf = class mMb {
    constructor(){
        this.star = [], this.epsilon = [], this.map = new Map, this.hasItems = !1;
    }
    add(e, n) {
        if (this.hasItems = !0, e === "*") this.star.push(new PIl(n));
        else if (e === "") this.epsilon.push(new PIl(n));
        else {
            const i = e[e.length - 1], r = e.slice(0, e.length - 1);
            if (i === "*") throw Error("Unexpected star in SufTrie key: " + e);
            {
                let s = this.map.get(i);
                s || this.map.set(i, s = new mMb), s.add(r, n);
            }
        }
    }
    get(e, n) {
        const i = [];
        e === "" && i.push(...this.epsilon.map((a)=>a.substitute(n))), this.star.length && i.push(...this.star.map((a)=>a.substitute(n, e)));
        const r = e[e.length - 1], s = e.slice(0, e.length - 1), o = this.map.get(r);
        return o && i.push(...o.get(s, n)), i;
    }
    toString(e = "") {
        const n = [];
        return this.star.length && n.push("* => " + this.star.join("; ")), this.epsilon.length && n.push("\u03B5 => " + this.epsilon.join("; ")), [
            ...this.map.entries()
        ].map(([i, r])=>n.push(i + `$ => 
` + r.toString(e + "  "))), n.map((i)=>e + i).join(`
`);
    }
}, RIl = /\$[({](capture|basename|dirname|extname)[)}]/g, PIl = class {
    constructor(t){
        this.tokens = [], RIl.lastIndex = 0;
        let e, n = 0;
        for(; e = RIl.exec(t);){
            const i = t.slice(n, e.index);
            this.tokens.push(i);
            const r = e[1];
            switch(r){
                case "basename":
                case "dirname":
                case "extname":
                case "capture":
                    this.tokens.push({
                        capture: r
                    });
                    break;
                default:
                    throw Error("unknown substitution type: " + r);
            }
            n = e.index + e[0].length;
        }
        if (n !== t.length) {
            const i = t.slice(n, t.length);
            this.tokens.push(i);
        }
    }
    substitute(t, e) {
        return this.tokens.map((n)=>{
            if (typeof n == "string") return n;
            switch(n.capture){
                case "basename":
                    return t.basename;
                case "dirname":
                    return t.dirname;
                case "extname":
                    return t.extname;
                case "capture":
                    return e || "";
            }
        }).join("");
    }
};

}
