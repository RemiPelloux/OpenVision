import { St, Vi } from "./async.js";
import { it } from "./cancellation.js";
import { Et } from "./cli.js";
import { ht } from "./errors.js";
import { Je } from "./extpath.js";
import { m1 } from "./nodejsWatcherLib.js";
import { Qi } from "./normalization.js";
import { F, Q, Qt, le } from "./path.js";
import { V, X, we, xe } from "./platform.js";
import { $i, Ci, Pe, c1 } from "./resources.js";
import { w } from "./tslib.es6.js";
import { Y, Ye } from "./uri.js";
import { promisify as At } from "util";
import * as N from "fs";
import { tmpdir as h2 } from "os";
function Zo(e) {
    return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function xa(e) {
    const t = Qt(e);
    return V ? e.length > 3 ? !1 : Ia(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === F.sep;
}
function Ia(e, t = V) {
    return t ? Ci(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : !1;
}
function a2(e) {
    const t = new it, r = e(t.token);
    let s = !1;
    const i = new Promise((n, a)=>{
        const o = t.token.onCancellationRequested(()=>{
            s = !0, o.dispose(), a(new ht);
        });
        Promise.resolve(r).then((l)=>{
            o.dispose(), t.dispose(), s ? Zo(l) && l.dispose() : n(l);
        }, (l)=>{
            o.dispose(), t.dispose(), a(l);
        });
    });
    return new class {
        cancel() {
            t.cancel(), t.dispose();
        }
        then(n, a) {
            return i.then(n, a);
        }
        catch(n) {
            return this.then(void 0, n);
        }
        finally(n) {
            return i.finally(n);
        }
    };
}
function qi(e, t) {
    return t ? new Promise((r, s)=>{
        const i = setTimeout(()=>{
            n.dispose(), r();
        }, e), n = t.onCancellationRequested(()=>{
            clearTimeout(i), n.dispose(), s(new ht);
        });
    }) : a2((r)=>qi(e, r));
}
async function Yi(e, t = 0, r) {
    if (xa(e)) throw new Error("rimraf - will refuse to recursively delete root");
    return t === 0 ? g1(e) : f2(e, r);
}
async function f2(e, t = Et(h2())) {
    try {
        try {
            await N.promises.rename(e, t);
        } catch (r) {
            return r.code === "ENOENT" ? void 0 : g1(e);
        }
        g1(t).catch((r)=>{});
    } catch (r) {
        if (r.code !== "ENOENT") throw r;
    }
}
async function g1(e) {
    return N.promises.rm(e, {
        recursive: !0,
        force: !0,
        maxRetries: 3
    });
}
async function sr(e, t) {
    return p2(await (t ? d2(e) : N.promises.readdir(e)));
}
async function d2(e) {
    try {
        return await N.promises.readdir(e, {
            withFileTypes: !0
        });
    } catch (s) {
        console.warn("[node.js fs] readdir with filetypes failed with error: ", s);
    }
    const t = [], r = await sr(e);
    for (const s of r){
        let i = !1, n = !1, a = !1;
        try {
            const o = await N.promises.lstat(Q(e, s));
            i = o.isFile(), n = o.isDirectory(), a = o.isSymbolicLink();
        } catch (o) {
            console.warn("[node.js fs] unexpected error from lstat after readdir: ", o);
        }
        t.push({
            name: s,
            isFile: ()=>i,
            isDirectory: ()=>n,
            isSymbolicLink: ()=>a
        });
    }
    return t;
}
function p2(e) {
    return e.map((t)=>typeof t == "string" ? xe ? m1(t) : t : (t.name = xe ? m1(t.name) : t.name, t));
}
async function m2(e) {
    const t = await sr(e), r = [];
    for (const s of t)await kt.existsDirectory(Q(e, s)) && r.push(s);
    return r;
}
function g2(e, t, r) {
    return nn.queueFor(Y.file(e), ()=>{
        const s = en(r);
        return new Promise((i, n)=>_2(e, t, s, (a)=>a ? n(a) : i()));
    }, $i);
}
function Xi(e) {
    ir = e;
}
function _2(e, t, r, s) {
    if (!ir) return N.writeFile(e, t, {
        mode: r.mode,
        flag: r.flag
    }, s);
    N.open(e, r.flag, r.mode, (i, n)=>{
        if (i) return s(i);
        N.writeFile(n, t, (a)=>{
            if (a) return N.close(n, ()=>s(a));
            N.fdatasync(n, (o)=>(o && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", o), Xi(!1)), N.close(n, (l)=>s(l))));
        });
    });
}
function en(e) {
    return e ? {
        mode: typeof e.mode == "number" ? e.mode : 438,
        flag: typeof e.flag == "string" ? e.flag : "w"
    } : {
        mode: 438,
        flag: "w"
    };
}
async function y2(e, t, r = 6e4) {
    if (e !== t) try {
        V && typeof r == "number" ? await tn(e, t, Date.now(), r) : await N.promises.rename(e, t);
    } catch (s) {
        if (e.toLowerCase() !== t.toLowerCase() && s.code === "EXDEV" || e.endsWith(".")) await rn(e, t, {
            preserveSymlinks: !1
        }), await Yi(e, 1);
        else throw s;
    }
}
async function tn(e, t, r, s, i = 0) {
    try {
        return await N.promises.rename(e, t);
    } catch (n) {
        if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
        if (Date.now() - r >= s) throw console.error(`[node.js fs] rename failed after ${i} retries with error: ${n}`), n;
        if (i === 0) {
            let a = !1;
            try {
                const { stat: o } = await kt.stat(t);
                o.isFile() || (a = !0);
            } catch  {}
            if (a) throw n;
        }
        return await qi(Math.min(100, i * 10)), tn(e, t, r, s, i + 1);
    }
}
async function rn(e, t, r) {
    return sn(e, t, {
        root: {
            source: e,
            target: t
        },
        options: r,
        handledSourcePaths: new Set
    });
}
async function sn(e, t, r) {
    if (r.handledSourcePaths.has(e)) return;
    r.handledSourcePaths.add(e);
    const { stat: s, symbolicLink: i } = await kt.stat(e);
    if (i) {
        if (r.options.preserveSymlinks) try {
            return await b2(e, t, r);
        } catch  {}
        if (i.dangling) return;
    }
    return s.isDirectory() ? v2(e, t, s.mode & _1, r) : w2(e, t, s.mode & _1);
}
async function v2(e, t, r, s) {
    await N.promises.mkdir(t, {
        recursive: !0,
        mode: r
    });
    const i = await sr(e);
    for (const n of i)await sn(Q(e, n), Q(t, n), s);
}
async function w2(e, t, r) {
    await N.promises.copyFile(e, t), await N.promises.chmod(t, r);
}
async function b2(e, t, r) {
    let s = await N.promises.readlink(e);
    Pe(s, r.root.source, !we) && (s = Q(r.root.target, s.substr(r.root.source.length + 1))), await N.promises.symlink(s, t);
}
var kt, nn, ir, _1, Ce;
export { Ce, Ia, Xi, Yi, Zo, _1, _2, a2, b2, d2, en, f2, g1, g2, ir, kt, m2, nn, p2, qi, rn, sn, sr, tn, v2, w2, xa, y2 };
var __wakaru_y1_initialized = false;
export function y1() {
if (__wakaru_y1_initialized) return;
__wakaru_y1_initialized = true;
"use strict";
w(), St(), Je(), Qi(), le(), X(), c1(), Ye(), ((e)=>{
    async function t(i) {
        let n;
        try {
            if (n = await N.promises.lstat(i), !n.isSymbolicLink()) return {
                stat: n
            };
        } catch  {}
        try {
            return {
                stat: await N.promises.stat(i),
                symbolicLink: n?.isSymbolicLink() ? {
                    dangling: !1
                } : void 0
            };
        } catch (a) {
            if (a.code === "ENOENT" && n) return {
                stat: n,
                symbolicLink: {
                    dangling: !0
                }
            };
            if (V && a.code === "EACCES") try {
                return {
                    stat: await N.promises.stat(await N.promises.readlink(i)),
                    symbolicLink: {
                        dangling: !1
                    }
                };
            } catch (o) {
                if (o.code === "ENOENT" && n) return {
                    stat: n,
                    symbolicLink: {
                        dangling: !0
                    }
                };
                throw o;
            }
            throw a;
        }
    }
    e.stat = t;
    async function r(i) {
        try {
            const { stat: n, symbolicLink: a } = await e.stat(i);
            return n.isFile() && a?.dangling !== !0;
        } catch  {}
        return !1;
    }
    e.existsFile = r;
    async function s(i) {
        try {
            const { stat: n, symbolicLink: a } = await e.stat(i);
            return n.isDirectory() && a?.dangling !== !0;
        } catch  {}
        return !1;
    }
    e.existsDirectory = s;
})(kt || (kt = {})), nn = new Vi, ir = !0, _1 = 511, Ce = new class {
    get read() {
        return (e, t, r, s, i)=>new Promise((n, a)=>{
                N.read(e, t, r, s, i, (o, l, c)=>o ? a(o) : n({
                        bytesRead: l,
                        buffer: c
                    }));
            });
    }
    get write() {
        return (e, t, r, s, i)=>new Promise((n, a)=>{
                N.write(e, t, r, s, i, (o, l, c)=>o ? a(o) : n({
                        bytesWritten: l,
                        buffer: c
                    }));
            });
    }
    get fdatasync() {
        return At(N.fdatasync);
    }
    get open() {
        return At(N.open);
    }
    get close() {
        return At(N.close);
    }
    get realpath() {
        return At(N.realpath);
    }
    get ftruncate() {
        return At(N.ftruncate);
    }
    async exists(e) {
        try {
            return await N.promises.access(e), !0;
        } catch  {
            return !1;
        }
    }
    get readdir() {
        return sr;
    }
    get readDirsInDir() {
        return m2;
    }
    get writeFile() {
        return g2;
    }
    get rm() {
        return Yi;
    }
    get rename() {
        return y2;
    }
    get copy() {
        return rn;
    }
};

}
