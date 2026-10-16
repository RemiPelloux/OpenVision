import { YR, le } from "./async.js";
import { jl } from "./dialogMainService.js";
import { Lr } from "./extpath.js";
import { En } from "./lifecycleMainService.js";
import { rc } from "./nativeHostMainService.js";
import { dT } from "./normalization.js";
import { Ce, De, L, on } from "./path.js";
import { Fe, ee, oe, q } from "./platform.js";
import { Ft, St, ma } from "./resources.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { a3 } from "./workspacesHistoryMainService.js";
import * as Rt from "fs";
import { promisify as Zm } from "util";
import { tmpdir as zxe } from "os";
function Oxe(e) {
    const t = on(e);
    return ee ? e.length > 3 ? !1 : a3(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === De.sep;
}
async function L3(e, t = 0, n) {
    if (Oxe(e)) throw new Error("rimraf - will refuse to recursively delete root");
    return t === 0 ? t0(e) : Yxe(e, n);
}
async function Yxe(e, t = rc(zxe())) {
    try {
        try {
            await Rt.promises.rename(e, t);
        } catch (n) {
            return n.code === "ENOENT" ? void 0 : t0(e);
        }
        t0(t).catch((n)=>{});
    } catch (n) {
        if (n.code !== "ENOENT") throw n;
    }
}
async function t0(e) {
    return Rt.promises.rm(e, {
        recursive: !0,
        force: !0,
        maxRetries: 3
    });
}
async function uT(e, t) {
    return Xxe(await (t ? Jxe(e) : Rt.promises.readdir(e)));
}
async function Jxe(e) {
    try {
        return await Rt.promises.readdir(e, {
            withFileTypes: !0
        });
    } catch (r) {
        console.warn("[node.js fs] readdir with filetypes failed with error: ", r);
    }
    const t = [], n = await uT(e);
    for (const r of n){
        let s = !1, i = !1, a = !1;
        try {
            const o = await Rt.promises.lstat(L(e, r));
            s = o.isFile(), i = o.isDirectory(), a = o.isSymbolicLink();
        } catch (o) {
            console.warn("[node.js fs] unexpected error from lstat after readdir: ", o);
        }
        t.push({
            name: r,
            isFile: ()=>s,
            isDirectory: ()=>i,
            isSymbolicLink: ()=>a
        });
    }
    return t;
}
function Xxe(e) {
    return e.map((t)=>typeof t == "string" ? q ? jl(t) : t : (t.name = q ? jl(t.name) : t.name, t));
}
async function Qxe(e) {
    const t = await uT(e), n = [];
    for (const r of t)await Zn.existsDirectory(L(e, r)) && n.push(r);
    return n;
}
function e4e(e, t, n) {
    return W3.queueFor(x.file(e), ()=>{
        const r = r4e(n);
        return new Promise((s, i)=>n4e(e, t, r, (a)=>a ? i(a) : s()));
    }, St);
}
function t4e(e) {
    n0 = e;
}
function n4e(e, t, n, r) {
    if (!n0) return Rt.writeFile(e, t, {
        mode: n.mode,
        flag: n.flag
    }, r);
    Rt.open(e, n.flag, n.mode, (s, i)=>{
        if (s) return r(s);
        Rt.writeFile(i, t, (a)=>{
            if (a) return Rt.close(i, ()=>r(a));
            Rt.fdatasync(i, (o)=>(o && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", o), t4e(!1)), Rt.close(i, (l)=>r(l))));
        });
    });
}
function r4e(e) {
    return e ? {
        mode: typeof e.mode == "number" ? e.mode : 438,
        flag: typeof e.flag == "string" ? e.flag : "w"
    } : {
        mode: 438,
        flag: "w"
    };
}
async function s4e(e, t, n = 6e4) {
    if (e !== t) try {
        ee && typeof n == "number" ? await U3(e, t, Date.now(), n) : await Rt.promises.rename(e, t);
    } catch (r) {
        if (e.toLowerCase() !== t.toLowerCase() && r.code === "EXDEV" || e.endsWith(".")) await x3(e, t, {
            preserveSymlinks: !1
        }), await L3(e, 1);
        else throw r;
    }
}
async function U3(e, t, n, r, s = 0) {
    try {
        return await Rt.promises.rename(e, t);
    } catch (i) {
        if (i.code !== "EACCES" && i.code !== "EPERM" && i.code !== "EBUSY") throw i;
        if (Date.now() - n >= r) throw console.error(`[node.js fs] rename failed after ${s} retries with error: ${i}`), i;
        if (s === 0) {
            let a = !1;
            try {
                const { stat: o } = await Zn.stat(t);
                o.isFile() || (a = !0);
            } catch  {}
            if (a) throw i;
        }
        return await En(Math.min(100, s * 10)), U3(e, t, n, r, s + 1);
    }
}
async function x3(e, t, n) {
    return F3(e, t, {
        root: {
            source: e,
            target: t
        },
        options: n,
        handledSourcePaths: new Set
    });
}
async function F3(e, t, n) {
    if (n.handledSourcePaths.has(e)) return;
    n.handledSourcePaths.add(e);
    const { stat: r, symbolicLink: s } = await Zn.stat(e);
    if (s) {
        if (n.options.preserveSymlinks) try {
            return await o4e(e, t, n);
        } catch  {}
        if (s.dangling) return;
    }
    return r.isDirectory() ? i4e(e, t, r.mode & r0, n) : a4e(e, t, r.mode & r0);
}
async function i4e(e, t, n, r) {
    await Rt.promises.mkdir(t, {
        recursive: !0,
        mode: n
    });
    const s = await uT(e);
    for (const i of s)await F3(L(e, i), L(t, i), r);
}
async function a4e(e, t, n) {
    await Rt.promises.copyFile(e, t), await Rt.promises.chmod(t, n);
}
async function o4e(e, t, n) {
    let r = await Rt.promises.readlink(e);
    ma(r, n.root.source, !Fe) && (r = L(n.root.target, r.substr(n.root.source.length + 1))), await Rt.promises.symlink(r, t);
}
var mT, Zn, W3, n0, r0, ie;
export { F3, Jxe, L3, Oxe, Qxe, U3, W3, Xxe, Yxe, Zn, a4e, e4e, i4e, ie, mT, n0, n4e, o4e, r0, r4e, s4e, t0, t4e, uT, x3 };
var __wakaru_gn_initialized = false;
export function gn() {
if (__wakaru_gn_initialized) return;
__wakaru_gn_initialized = true;
"use strict";
h(), le(), Lr(), dT(), Ce(), oe(), Ft(), ye(), mT = ((e)=>(e[e.UNLINK = 0] = "UNLINK", e[e.MOVE = 1] = "MOVE", e))(mT || {}), ((e)=>{
    async function t(s) {
        let i;
        try {
            if (i = await Rt.promises.lstat(s), !i.isSymbolicLink()) return {
                stat: i
            };
        } catch  {}
        try {
            return {
                stat: await Rt.promises.stat(s),
                symbolicLink: i?.isSymbolicLink() ? {
                    dangling: !1
                } : void 0
            };
        } catch (a) {
            if (a.code === "ENOENT" && i) return {
                stat: i,
                symbolicLink: {
                    dangling: !0
                }
            };
            if (ee && a.code === "EACCES") try {
                return {
                    stat: await Rt.promises.stat(await Rt.promises.readlink(s)),
                    symbolicLink: {
                        dangling: !1
                    }
                };
            } catch (o) {
                if (o.code === "ENOENT" && i) return {
                    stat: i,
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
    async function n(s) {
        try {
            const { stat: i, symbolicLink: a } = await e.stat(s);
            return i.isFile() && a?.dangling !== !0;
        } catch  {}
        return !1;
    }
    e.existsFile = n;
    async function r(s) {
        try {
            const { stat: i, symbolicLink: a } = await e.stat(s);
            return i.isDirectory() && a?.dangling !== !0;
        } catch  {}
        return !1;
    }
    e.existsDirectory = r;
})(Zn || (Zn = {})), W3 = new YR, n0 = !0, r0 = 511, ie = new class {
    get read() {
        return (e, t, n, r, s)=>new Promise((i, a)=>{
                Rt.read(e, t, n, r, s, (o, l, d)=>o ? a(o) : i({
                        bytesRead: l,
                        buffer: d
                    }));
            });
    }
    get write() {
        return (e, t, n, r, s)=>new Promise((i, a)=>{
                Rt.write(e, t, n, r, s, (o, l, d)=>o ? a(o) : i({
                        bytesWritten: l,
                        buffer: d
                    }));
            });
    }
    get fdatasync() {
        return Zm(Rt.fdatasync);
    }
    get open() {
        return Zm(Rt.open);
    }
    get close() {
        return Zm(Rt.close);
    }
    get realpath() {
        return Zm(Rt.realpath);
    }
    get ftruncate() {
        return Zm(Rt.ftruncate);
    }
    async exists(e) {
        try {
            return await Rt.promises.access(e), !0;
        } catch  {
            return !1;
        }
    }
    get readdir() {
        return uT;
    }
    get readDirsInDir() {
        return Qxe;
    }
    get writeFile() {
        return e4e;
    }
    get rm() {
        return L3;
    }
    get rename() {
        return s4e;
    }
    get copy() {
        return x3;
    }
};

}
