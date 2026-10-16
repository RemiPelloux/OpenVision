import { Gik, Rts, iTt, wVm } from "./gYa.js";
import { Pts } from "./markdownFrontmatter.js";
import { E } from "./tslib.es6.js";
var IYf, xYf;
export { IYf, xYf };
var __wakaru_YBw_initialized = false;
export function YBw() {
if (__wakaru_YBw_initialized) return;
__wakaru_YBw_initialized = true;
"use strict";
E(), Pts(), IYf = {
    fullContent: "",
    body: "",
    frontmatter: {},
    hasFrontmatter: !1,
    duplicateKeys: [],
    frontmatterEditRejectionRevision: 0
}, xYf = class {
    constructor(t){
        this.enableFrontmatter = t, this.rawPrefix = "", this.prevFrontmatter = {}, this.snap = IYf, this.listeners = new Set, this.frontmatterEditRejectionRevision = 0, this.subscribe = (e)=>(this.listeners.add(e), ()=>{
                this.listeners.delete(e);
            }), this.getSnapshot = ()=>this.snap;
    }
    emit() {
        for (const t of this.listeners)t();
    }
    setSnapshot(t, e, n, i) {
        this.snap = {
            fullContent: this.rawPrefix ? this.rawPrefix + t : t,
            body: t,
            frontmatter: e,
            hasFrontmatter: n,
            duplicateKeys: i,
            frontmatterEditRejectionRevision: this.frontmatterEditRejectionRevision
        };
    }
    rejectFrontmatterEdit() {
        return this.frontmatterEditRejectionRevision++, this.setSnapshot(this.snap.body, this.snap.frontmatter, this.snap.hasFrontmatter, this.snap.duplicateKeys), this.emit(), this.snap.fullContent;
    }
    load(t) {
        if (this.enableFrontmatter) {
            const e = iTt(t);
            if (e.hasFrontmatter) return this.rawPrefix = t.slice(0, t.length - e.body.length), this.prevFrontmatter = e.frontmatter, this.setSnapshot(e.body, e.frontmatter, !0, e.duplicateKeys ?? []), this.emit(), this.snap;
        }
        return this.rawPrefix = "", this.prevFrontmatter = {}, this.setSnapshot(t, {}, !1, []), this.emit(), this.snap;
    }
    setBody(t) {
        return this.setSnapshot(t, this.snap.frontmatter, this.snap.hasFrontmatter, this.snap.duplicateKeys), this.emit(), this.snap.fullContent;
    }
    setFrontmatter(t) {
        if (!this.snap.hasFrontmatter) {
            this.rawPrefix = Rts(t);
            const a = iTt(this.rawPrefix + this.snap.body);
            return this.prevFrontmatter = a.frontmatter, this.setSnapshot(a.body, a.frontmatter, a.hasFrontmatter, a.duplicateKeys ?? []), this.emit(), this.snap.fullContent;
        }
        const e = new Set(wVm(this.rawPrefix)), n = Object.keys(this.prevFrontmatter), i = Object.keys(t), r = n.length !== i.length || n.some((a, l)=>a !== i[l]), s = Object.keys(t).filter((a)=>this.prevFrontmatter[a] !== t[a]);
        if (e.size > 0 && (r || s.some((a)=>e.has(a)))) return this.rejectFrontmatterEdit();
        this.rawPrefix = Gik(this.rawPrefix, this.prevFrontmatter, t);
        const o = iTt(this.rawPrefix + this.snap.body);
        return this.prevFrontmatter = t, this.setSnapshot(this.snap.body, t, this.snap.hasFrontmatter, o.duplicateKeys ?? []), this.emit(), this.snap.fullContent;
    }
};

}
