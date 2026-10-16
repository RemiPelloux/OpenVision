import { QBe, iG } from "./cssDevRefresh.js";
import { Fr, si } from "./environment.js";
import { N, se } from "./event.js";
import { Wt, cn } from "./files.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { $e, Jt } from "./network.js";
import { e7e } from "./ripgrepHelper.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { join as cG } from "path";
import { createHash as lG } from "crypto";
import { relative as oA } from "path";
import { promises as oS } from "fs";
import { spawn as t7e } from "child_process";
function HBe(e, t, n) {
    return e !== void 0 && e.mtimeMs === t && e.size === n;
}
function qBe(e, t, n, r) {
    return !e && HBe(t, n, r);
}
function iA(e) {
    const t = new Map;
    for (const [n, r] of e)t.set(n, r.hash);
    return t;
}
function KBe(e, t) {
    const n = new Map;
    for (const [r, s] of t)e?.get(r) !== s && n.set(r, s);
    return n;
}
function zBe(e, t) {
    if (!e) return;
    const n = KBe(e, t);
    return n.size > 0 ? n : void 0;
}
function aA(e, t) {
    return e === t;
}
function sG(e) {
    return e.endsWith(".css") && e.startsWith("vs/");
}
function YBe(e, t) {
    for (const n of t)if (e.has(n) || sG(n)) return !0;
    return !1;
}
function JBe(e, t, n, r) {
    return e && r < iG && aA(t, n);
}
function XBe(e, t) {
    const n = [];
    for (const r of t)e?.has(r) || n.push(r);
    return n;
}
var aG = {};
var Oc, cS;
export { HBe, JBe, KBe, Oc, XBe, YBe, aA, aG, cS, iA, qBe, sG, zBe };
var __wakaru_Ad_initialized = false;
export function Ad() {
if (__wakaru_Ad_initialized) return;
__wakaru_Ad_initialized = true;
"use strict";
h(), $e(), Fr(), ne(), te(), se(), j(), Wt(), ye(), QBe(), Oc = Q("ICSSDevelopmentService"), cS = class extends J {
    constructor(e, t, n){
        super(), this.envService = e, this.logService = t, this.fileService = n, this._generation = 0, this._missedCssChange = !1, this._watchedFiles = new Set, this._onDidChangeCssModules = this._register(new N), this.onDidChangeCssModules = this._onDidChangeCssModules.event, this.isEnabled && (this._register(this.fileService.onDidFilesChange(this.onDidFilesChange.bind(this))), this.initializeWatcher());
    }
    get isEnabled() {
        return !this.envService.isBuilt;
    }
    getCssModules(e) {
        if (e && (this._inFlight = void 0), !this._inFlight) {
            const t = ++this._generation, n = !!e, r = this.computeUntilClean(t, n).finally(()=>{
                this._inFlight === r && (this._inFlight = void 0);
            });
            this._inFlight = r;
        }
        return this._inFlight;
    }
    async computeUntilClean(e, t) {
        const n = this._records ? iA(this._records) : void 0;
        this._missedCssChange = !1;
        let r = await this.computeCssModules(e, t), s = 0;
        for(; JBe(this._missedCssChange, e, this._generation, s);)this._missedCssChange = !1, s++, r = await this.computeCssModules(e, t);
        if (!aA(e, this._generation)) return r;
        const i = zBe(n, r);
        return i && this._onDidChangeCssModules.fire(i), r;
    }
    async computeCssModules(e, t) {
        if (!this.isEnabled) return new Map;
        const n = await this.listCssPaths(), r = Jt.asFileUri("").fsPath, s = this._records, i = new Map;
        for (const a of n){
            const o = cG(r, a);
            try {
                const l = await oS.stat(o), d = s?.get(a);
                if (d && qBe(t, d, l.mtimeMs, l.size)) {
                    i.set(a, d);
                    continue;
                }
                const u = await oS.readFile(o);
                i.set(a, {
                    hash: lG("sha256").update(u).digest("hex"),
                    mtimeMs: l.mtimeMs,
                    size: l.size
                });
            } catch  {
                i.set(a, {
                    hash: Date.now().toString(),
                    mtimeMs: 0,
                    size: -1
                });
            }
        }
        return aA(e, this._generation) ? (this._records = i, this.watchCssPaths(n), iA(i)) : iA(this._records ?? i);
    }
    async listCssPaths() {
        const { rgDiskPath: e } = await Promise.resolve().then(()=>(e7e(), aG)), t = Jt.asFileUri("").fsPath;
        return await new Promise((n)=>{
            const r = [], s = t7e(e, [
                "-g",
                "**/*.css",
                "-g",
                "!**/fixtures/**",
                "--files",
                "--no-ignore",
                t
            ], {});
            s.stdout.on("data", (i)=>{
                r.push(i);
            }), s.on("error", ()=>{
                n([]);
            }), s.on("close", ()=>{
                const i = Buffer.concat(r).toString("utf8"), a = i.split(`
`).filter(Boolean).map((o)=>oA(t, o).replace(/\\/g, "/")).filter(Boolean).sort();
                a.some((o)=>o.indexOf("vs/") !== 0) && this.logService.error(`[CSS_DEV] Detected invalid paths in css modules, raw output: ${i}`), n(a);
            });
        });
    }
    async initializeWatcher() {
        await this.getCssModules();
    }
    watchCssPaths(e) {
        const t = Jt.asFileUri("").fsPath;
        for (const n of XBe(this._watchedFiles, e))this._watchedFiles.add(n), this._register(this.fileService.watch(x.file(cG(t, n))));
    }
    async onDidFilesChange(e) {
        if (!this.isEnabled) return;
        const t = Jt.asFileUri("").fsPath, n = [
            ...e.rawUpdated,
            ...e.rawAdded
        ].map((s)=>oA(t, s.fsPath).replace(/\\/g, "/"));
        if (this._inFlight) {
            YBe(this._watchedFiles, n) && (this._missedCssChange = !0);
            return;
        }
        const r = [];
        for (const s of [
            ...e.rawUpdated,
            ...e.rawAdded
        ]){
            const i = oA(t, s.fsPath).replace(/\\/g, "/");
            if (!(!this._watchedFiles.has(i) && !sG(i))) try {
                const [a, o] = await Promise.all([
                    oS.readFile(s.fsPath),
                    oS.stat(s.fsPath)
                ]), l = lG("sha256").update(a).digest("hex");
                this._records ??= new Map, this._records.set(i, {
                    hash: l,
                    mtimeMs: o.mtimeMs,
                    size: o.size
                }), this.watchCssPaths([
                    i
                ]), r.push({
                    path: i,
                    newHash: l
                });
            } catch  {
                continue;
            }
        }
        r.length > 0 && this._onDidChangeCssModules.fire(new Map(r.map((s)=>[
                s.path,
                s.newHash
            ])));
    }
}, cS = B([
    w(0, si),
    w(1, Z),
    w(2, cn)
], cS);

}
