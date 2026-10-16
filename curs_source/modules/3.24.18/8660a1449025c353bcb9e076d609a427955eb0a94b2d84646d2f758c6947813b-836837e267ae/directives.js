import { p_n, zj } from "./LYd.js";
import { lR } from "./identity.js";
import { E } from "./tslib.es6.js";
import { Exr } from "./visit.js";
var hJd, pJd, m8t;
export { hJd, m8t, pJd };
var __wakaru_mJd_initialized = false;
export function mJd() {
if (__wakaru_mJd_initialized) return;
__wakaru_mJd_initialized = true;
E(), lR(), Exr(), hJd = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
}, pJd = (t)=>t.replace(/[!,[\]{}]/g, (e)=>hJd[e]), m8t = class hmt {
    constructor(e, n){
        this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, hmt.defaultYaml, e), this.tags = Object.assign({}, hmt.defaultTags, n);
    }
    clone() {
        const e = new hmt(this.yaml, this.tags);
        return e.docStart = this.docStart, e;
    }
    atDocument() {
        const e = new hmt(this.yaml, this.tags);
        switch(this.yaml.version){
            case "1.1":
                this.atNextDocument = !0;
                break;
            case "1.2":
                this.atNextDocument = !1, this.yaml = {
                    explicit: hmt.defaultYaml.explicit,
                    version: "1.2"
                }, this.tags = Object.assign({}, hmt.defaultTags);
                break;
        }
        return e;
    }
    add(e, n) {
        this.atNextDocument && (this.yaml = {
            explicit: hmt.defaultYaml.explicit,
            version: "1.1"
        }, this.tags = Object.assign({}, hmt.defaultTags), this.atNextDocument = !1);
        const i = e.trim().split(/[ \t]+/), r = i.shift();
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
    tagName(e, n) {
        if (e === "!") return "!";
        if (e[0] !== "!") return n(`Not a valid tag: ${e}`), null;
        if (e[1] === "<") {
            const o = e.slice(2, -1);
            return o === "!" || o === "!!" ? (n(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (e[e.length - 1] !== ">" && n("Verbatim tags must end with a >"), o);
        }
        const [, i, r] = e.match(/^(.*!)([^!]*)$/s);
        r || n(`The ${e} tag has no suffix`);
        const s = this.tags[i];
        if (s) try {
            return s + decodeURIComponent(r);
        } catch (o) {
            return n(String(o)), null;
        }
        return i === "!" ? e : (n(`Could not resolve tag: ${e}`), null);
    }
    tagString(e) {
        for (const [n, i] of Object.entries(this.tags))if (e.startsWith(i)) return n + pJd(e.substring(i.length));
        return e[0] === "!" ? e : `!<${e}>`;
    }
    toString(e) {
        const n = this.yaml.explicit ? [
            `%YAML ${this.yaml.version || "1.2"}`
        ] : [], i = Object.entries(this.tags);
        let r;
        if (e && i.length > 0 && zj(e.contents)) {
            const s = {};
            p_n(e.contents, (o, a)=>{
                zj(a) && a.tag && (s[a.tag] = !0);
            }), r = Object.keys(s);
        } else r = [];
        for (const [s, o] of i)s === "!!" && o === "tag:yaml.org,2002:" || (!e || r.some((a)=>a.startsWith(o))) && n.push(`%TAG ${s} ${o}`);
        return n.join(`
`);
    }
}, m8t.defaultYaml = {
    explicit: !1,
    version: "1.2"
}, m8t.defaultTags = {
    "!!": "tag:yaml.org,2002:"
};

}
