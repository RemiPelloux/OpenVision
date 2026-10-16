import { NE } from "./identity.js";
import { iBt, w5 } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Iwi } from "./visit.js";
var UXc, $Xc, tgt;
export { $Xc, UXc, tgt };
var __wakaru_HXc_initialized = false;
export function HXc() {
if (__wakaru_HXc_initialized) return;
__wakaru_HXc_initialized = true;
x(), NE(), Iwi(), UXc = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
}, $Xc = (e)=>e.replace(/[!,[\]{}]/g, (t)=>UXc[t]), tgt = class zWe {
    constructor(t, n){
        this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, zWe.defaultYaml, t), this.tags = Object.assign({}, zWe.defaultTags, n);
    }
    clone() {
        const t = new zWe(this.yaml, this.tags);
        return t.docStart = this.docStart, t;
    }
    atDocument() {
        const t = new zWe(this.yaml, this.tags);
        switch(this.yaml.version){
            case "1.1":
                this.atNextDocument = !0;
                break;
            case "1.2":
                this.atNextDocument = !1, this.yaml = {
                    explicit: zWe.defaultYaml.explicit,
                    version: "1.2"
                }, this.tags = Object.assign({}, zWe.defaultTags);
                break;
        }
        return t;
    }
    add(t, n) {
        this.atNextDocument && (this.yaml = {
            explicit: zWe.defaultYaml.explicit,
            version: "1.1"
        }, this.tags = Object.assign({}, zWe.defaultTags), this.atNextDocument = !1);
        const i = t.trim().split(/[ \t]+/), r = i.shift();
        switch(r){
            case "%TAG":
                {
                    if (i.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), i.length < 2)) return !1;
                    const [s, o] = i;
                    return this.tags[s] = o, !0;
                }
            case "%YAML":
                {
                    if (this.yaml.explicit = !0, i.length !== 1) return n(0, "%YAML directive should contain exactly one part"), !1;
                    const [s] = i;
                    if (s === "1.1" || s === "1.2") return this.yaml.version = s, !0;
                    {
                        const o = /^\d+\.\d+$/.test(s);
                        return n(6, `Unsupported YAML version ${s}`, o), !1;
                    }
                }
            default:
                return n(0, `Unknown directive ${r}`, !0), !1;
        }
    }
    tagName(t, n) {
        if (t === "!") return "!";
        if (t[0] !== "!") return n(`Not a valid tag: ${t}`), null;
        if (t[1] === "<") {
            const o = t.slice(2, -1);
            return o === "!" || o === "!!" ? (n(`Verbatim tags aren't resolved, so ${t} is invalid.`), null) : (t[t.length - 1] !== ">" && n("Verbatim tags must end with a >"), o);
        }
        const [, i, r] = t.match(/^(.*!)([^!]*)$/s);
        r || n(`The ${t} tag has no suffix`);
        const s = this.tags[i];
        if (s) try {
            return s + decodeURIComponent(r);
        } catch (o) {
            return n(String(o)), null;
        }
        return i === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
    }
    tagString(t) {
        for (const [n, i] of Object.entries(this.tags))if (t.startsWith(i)) return n + $Xc(t.substring(i.length));
        return t[0] === "!" ? t : `!<${t}>`;
    }
    toString(t) {
        const n = this.yaml.explicit ? [
            `%YAML ${this.yaml.version || "1.2"}`
        ] : [], i = Object.entries(this.tags);
        let r;
        if (t && i.length > 0 && w5(t.contents)) {
            const s = {};
            iBt(t.contents, (o, a)=>{
                w5(a) && a.tag && (s[a.tag] = !0);
            }), r = Object.keys(s);
        } else r = [];
        for (const [s, o] of i)s === "!!" && o === "tag:yaml.org,2002:" || (!t || r.some((a)=>a.startsWith(o))) && n.push(`%TAG ${s} ${o}`);
        return n.join(`
`);
    }
}, tgt.defaultYaml = {
    explicit: !1,
    version: "1.2"
}, tgt.defaultTags = {
    "!!": "tag:yaml.org,2002:"
};

}
