import { $vt, Fa } from "./Iwo.js";
import { NB } from "./glob.js";
import { E } from "./tslib.es6.js";
import { gCe } from "./yBp.js";
var O2v;
export { O2v };
var __wakaru_FP0_initialized = false;
export function FP0() {
if (__wakaru_FP0_initialized) return;
__wakaru_FP0_initialized = true;
"use strict";
E(), NB(), Fa(), O2v = class {
    constructor(t, e, n, i = !1){
        if (this.location = e, this.parent = n, this.ignoreCase = i, e[e.length - 1] === "\\") throw Error("Unexpected path format, do not use trailing backslashes");
        e[e.length - 1] !== "/" && (e += "/"), this.isPathIgnored = this.parseIgnoreFile(t, this.location, this.parent);
    }
    updateContents(t) {
        this.isPathIgnored = this.parseIgnoreFile(t, this.location, this.parent);
    }
    isPathIncludedInTraversal(t, e) {
        if (t[0] !== "/" || t[t.length - 1] === "/") throw Error("Unexpected path format, expectred to begin with slash and end without. got:" + t);
        return !this.isPathIgnored(t, e);
    }
    isArbitraryPathIgnored(t, e) {
        if (t[0] !== "/" || t[t.length - 1] === "/") throw Error("Unexpected path format, expectred to begin with slash and end without. got:" + t);
        const n = t.split("/").filter((s)=>s);
        let i = !1, r = "";
        for(let s = 0; s < n.length; s++){
            const o = s === n.length - 1, a = n[s];
            if (r = r + "/" + a, !this.isPathIncludedInTraversal(r, o ? e : !0)) {
                i = !0;
                break;
            }
        }
        return i;
    }
    gitignoreLinesToExpression(t, e, n) {
        const i = t.map((s)=>this.gitignoreLineToGlob(s, e)), r = Object.create(null);
        for (const s of i)r[s] = !0;
        return gCe(r, {
            trimForExclusions: n,
            ignoreCase: this.ignoreCase
        });
    }
    parseIgnoreFile(t, e, n) {
        const i = t.split(`
`).map((g)=>g.trim()).filter((g)=>g && g[0] !== "#"), r = i.filter((g)=>!g.endsWith("/")), s = r.filter((g)=>!g.includes("!")), o = this.gitignoreLinesToExpression(s, e, !0), a = r.filter((g)=>g.includes("!")).map((g)=>g.replace(/!/g, "")), l = this.gitignoreLinesToExpression(a, e, !1), c = i.filter((g)=>!g.includes("!")), u = this.gitignoreLinesToExpression(c, e, !0), d = i.filter((g)=>g.includes("!")).map((g)=>g.replace(/!/g, "")), h = this.gitignoreLinesToExpression(d, e, !1);
        return (g, f)=>{
            if (!(this.ignoreCase ? $vt(g, e) : g.startsWith(e))) return !1;
            const _ = f && h(g);
            if (f && u(g) && !_) return !0;
            const b = l(g);
            return o(g) && !b ? !0 : _ || b ? !1 : n ? n.isPathIgnored(g, f) : !1;
        };
    }
    gitignoreLineToGlob(t, e) {
        const n = t.indexOf("/");
        return n === -1 || n === t.length - 1 ? t = "**/" + t : (n === 0 ? e.slice(-1) === "/" && (t = t.slice(1)) : e.slice(-1) !== "/" && (t = "/" + t), t = e + t), t;
    }
};

}
