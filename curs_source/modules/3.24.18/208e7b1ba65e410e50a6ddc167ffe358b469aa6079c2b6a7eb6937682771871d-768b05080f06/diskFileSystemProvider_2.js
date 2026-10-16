import { Bl, le } from "./async.js";
import { Xm } from "./backupMainService.js";
import { ae, it } from "./buffer.js";
import { E } from "./configurationRegistry.js";
import { PVe, i$ } from "./diskFileSystemProvider.js";
import { O, ge, se } from "./event.js";
import { Ml } from "./extensionHostStarter_2.js";
import { Lr } from "./extpath.js";
import { eA } from "./extpath_2.js";
import { dc } from "./fileService.js";
import { BT, Wt, id, ln, qn } from "./files.js";
import { s$ } from "./io.js";
import { j, ve } from "./lifecycle.js";
import { En } from "./lifecycleMainService.js";
import { Yn, mr } from "./map.js";
import { iS } from "./nativeHostMainService.js";
import { Ne } from "./nls.js";
import { p$, zVe } from "./nodejsClient.js";
import { Ce, L, _t, st } from "./path.js";
import { Zn, gn, ie, mT } from "./pfs.js";
import { Fe, ee, oe } from "./platform.js";
import { Ae, Ft, Mi, St, p3 } from "./resources.js";
import { A5, Dl } from "./stream.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { WVe, o$ } from "./watcherClient.js";
import { promises as uo } from "fs";
function Kv(e, t) {
    return new A5(e, t);
}
async function Vxe(e, t, n) {
    let r;
    for(let s = 0; s < n; s++)try {
        return await e();
    } catch (i) {
        r = i, await En(t);
    }
    throw r;
}
function sd(e) {
    return e.create === !0;
}
function Ns(e, t) {
    return BT.create(e, t);
}
async function r$(e, t, n, r, s, i) {
    let a;
    try {
        await AVe(e, t, n, r, s, i);
    } catch (o) {
        a = o;
    } finally{
        a && s.errorTransformer && (a = s.errorTransformer(a)), typeof a < "u" && n.error(a), n.end();
    }
}
async function AVe(e, t, n, r, s, i) {
    lM(i);
    const a = await e.open(t, {
        create: !1
    });
    try {
        lM(i);
        let o = 0, l = 0, d = s && typeof s.length == "number" ? s.length : void 0, u = ae.alloc(Math.min(s.bufferSize, typeof d == "number" ? d : s.bufferSize)), m = s && typeof s.position == "number" ? s.position : 0, f = 0;
        do l = await e.read(a, m, u.buffer, f, u.byteLength - f), m += l, f += l, o += l, typeof d == "number" && (d -= l), f === u.byteLength && (await n.write(r(u)), u = ae.alloc(Math.min(s.bufferSize, typeof d == "number" ? d : s.bufferSize)), f = 0);
        while (l > 0 && (typeof d != "number" || d > 0) && lM(i) && MVe(o, s))
        if (f > 0) {
            let v = f;
            typeof d == "number" && (v = Math.min(f, d)), n.write(r(u.slice(0, v)));
        }
    } catch (o) {
        throw dc(o);
    } finally{
        await e.close(a);
    }
}
function lM(e) {
    if (e.isCancellationRequested) throw Ml();
    return !0;
}
function MVe(e, t) {
    if (typeof t?.limits?.size == "number" && e > t.limits.size) throw Ns(E(2057, null), ln.FileTooLarge);
    return !0;
}
var xS, FS;
export { AVe, FS, Kv, MVe, Ns, Vxe, lM, r$, sd, xS };
var __wakaru_uM_initialized = false;
export function uM() {
if (__wakaru_uM_initialized) return;
__wakaru_uM_initialized = true;
"use strict";
h(), le(), mr(), it(), se(), Lr(), eA(), j(), Ce(), oe(), Ft(), Dl(), ye(), gn(), Ne(), Wt(), s$(), PVe(), WVe(), zVe(), xS = class l_ extends i$ {
    constructor(t, n){
        super(t, n), this.onDidChangeCapabilities = O.None, this.resourceLocks = new Yn((r)=>St.getComparisonKey(r)), this.mapHandleToPos = new Map, this.mapHandleToLock = new Map, this.writeHandles = new Map;
    }
    get capabilities() {
        return this._capabilities || (this._capabilities = 516126, Fe && (this._capabilities |= 1024)), this._capabilities;
    }
    async stat(t) {
        try {
            return await this.doStat(this.toFilePath(t));
        } catch (n) {
            throw this.toFileSystemProviderError(n);
        }
    }
    async doStat(t) {
        const { stat: n, symbolicLink: r } = await Zn.stat(t);
        return {
            type: this.toType(n, r),
            ctime: n.birthtime.getTime(),
            mtime: n.mtime.getTime(),
            size: n.size,
            permissions: (n.mode & 128) === 0 ? id.Locked : void 0
        };
    }
    async statIgnoreError(t) {
        try {
            return await this.stat(t);
        } catch  {
            return;
        }
    }
    async realpath(t) {
        try {
            const n = this.toFilePath(t), r = await iS(n);
            return x.file(r);
        } catch (n) {
            throw this.toFileSystemProviderError(n);
        }
    }
    async readdir(t) {
        try {
            const n = await ie.readdir(this.toFilePath(t), {
                withFileTypes: !0
            }), r = [];
            return await Promise.all(n.map(async (s)=>{
                try {
                    let i;
                    s.isSymbolicLink() ? i = (await this.stat(Ae(t, s.name))).type : i = this.toType(s), r.push([
                        s.name,
                        i
                    ]);
                } catch (i) {
                    this.logService.trace(i);
                }
            })), r;
        } catch (n) {
            throw this.toFileSystemProviderError(n);
        }
    }
    async readdirWithMetadata(t) {
        try {
            const n = this.toFilePath(t), r = await ie.readdir(n, {
                withFileTypes: !0
            }), s = [];
            return await Promise.all(r.map(async (i)=>{
                try {
                    s.push([
                        i.name,
                        await this.doStat(L(n, i.name))
                    ]);
                } catch (a) {
                    this.logService.trace(a);
                }
            })), s;
        } catch (n) {
            throw this.toFileSystemProviderError(n);
        }
    }
    toType(t, n) {
        let r;
        return n?.dangling ? r = qn.Unknown : t.isFile() ? r = qn.File : t.isDirectory() ? r = qn.Directory : r = qn.Unknown, n && (r |= qn.SymbolicLink), r;
    }
    async createResourceLock(t) {
        const n = this.toFilePath(t);
        this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - request to acquire resource lock (${n})`);
        let r;
        for(; r = this.resourceLocks.get(t);)this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - waiting for resource lock to be released (${n})`), await r.wait();
        const s = new Bl;
        return this.resourceLocks.set(t, s), this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - new resource lock created (${n})`), ge(()=>{
            this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - resource lock dispose() (${n})`), this.resourceLocks.get(t) === s && (this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - resource lock removed from resource-lock map (${n})`), this.resourceLocks.delete(t)), this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - resource lock barrier open() (${n})`), s.open();
        });
    }
    async readFile(t, n) {
        let r;
        try {
            n?.atomic && (this.traceLock(`[Disk FileSystemProvider]: atomic read operation started (${this.toFilePath(t)})`), r = await this.createResourceLock(t));
            const s = this.toFilePath(t);
            return await uo.readFile(s);
        } catch (s) {
            throw this.toFileSystemProviderError(s);
        } finally{
            r?.dispose();
        }
    }
    traceLock(t) {
        l_.TRACE_LOG_RESOURCE_LOCKS && this.logService.trace(t);
    }
    readFileStream(t, n, r) {
        const s = Kv((i)=>ae.concat(i.map((a)=>ae.wrap(a))).buffer);
        return r$(this, t, s, (i)=>i.buffer, {
            ...n,
            bufferSize: 256 * 1024
        }, r), s;
    }
    async writeFile(t, n, r) {
        return r?.atomic !== !1 && r?.atomic?.postfix && await this.canWriteFileAtomic(t) ? this.doWriteFileAtomic(t, Ae(p3(t), `${Mi(t)}${r.atomic.postfix}`), n, r) : this.doWriteFile(t, n, r);
    }
    async canWriteFileAtomic(t) {
        try {
            const n = this.toFilePath(t), { symbolicLink: r } = await Zn.stat(n);
            if (r) return !1;
        } catch  {}
        return !0;
    }
    async doWriteFileAtomic(t, n, r, s) {
        const i = new ve;
        try {
            i.add(await this.createResourceLock(t)), i.add(await this.createResourceLock(n)), await this.doWriteFile(n, r, s, !0);
            try {
                await this.rename(n, t, {
                    overwrite: !0
                });
            } catch (a) {
                try {
                    await this.delete(n, {
                        recursive: !1,
                        useTrash: !1,
                        atomic: !1
                    });
                } catch  {}
                throw a;
            }
        } finally{
            i.dispose();
        }
    }
    async doWriteFile(t, n, r, s) {
        let i;
        try {
            const a = this.toFilePath(t);
            if (!r.create || !r.overwrite) {
                if (await ie.exists(a)) {
                    if (!r.overwrite) throw Ns(E(2060, null), ln.FileExists);
                } else if (!r.create) throw Ns(E(2061, null), ln.FileNotFound);
            }
            if (i = await this.open(t, {
                create: !0,
                unlock: r.unlock
            }, s), await this.write(i, 0, n, 0, n.byteLength), a.endsWith(".cursor/mcp.json") && !ee) try {
                await uo.chmod(a, 384), this.logService.trace(`Set secure permissions on MCP config file: ${a}`);
            } catch (o) {
                this.logService.error(`Failed to set secure permissions on MCP config file: ${a}`, o);
            }
        } catch (a) {
            throw await this.toFileSystemProviderWriteError(t, a);
        } finally{
            typeof i == "number" && await this.close(i);
        }
    }
    static configureFlushOnWrite(t) {
        l_.canFlush = t;
    }
    async open(t, n, r) {
        const s = this.toFilePath(t);
        let i;
        sd(n) && !r && (i = await this.createResourceLock(t));
        let a;
        try {
            if (sd(n) && n.unlock) try {
                const { stat: o } = await Zn.stat(s);
                o.mode & 128 || await uo.chmod(s, o.mode | 128);
            } catch (o) {
                o.code !== "ENOENT" && this.logService.trace(o);
            }
            if (ee && sd(n)) try {
                a = await ie.open(s, "r+"), await ie.ftruncate(a, 0);
            } catch (o) {
                if (o.code !== "ENOENT" && this.logService.trace(o), typeof a == "number") {
                    try {
                        await ie.close(a);
                    } catch (l) {
                        this.logService.trace(l);
                    }
                    a = void 0;
                }
            }
            typeof a != "number" && (a = await ie.open(s, sd(n) ? "w" : "r"));
        } catch (o) {
            throw i?.dispose(), sd(n) ? await this.toFileSystemProviderWriteError(t, o) : this.toFileSystemProviderError(o);
        }
        if (this.mapHandleToPos.set(a, 0), sd(n) && this.writeHandles.set(a, t), i) {
            const o = this.mapHandleToLock.get(a);
            this.traceLock(`[Disk FileSystemProvider]: open() - storing lock for handle ${a} (${s})`), this.mapHandleToLock.set(a, i), o && (this.traceLock(`[Disk FileSystemProvider]: open() - disposing a previous lock that was still stored on same handle ${a} (${s})`), o.dispose());
        }
        return a;
    }
    async close(t) {
        const n = this.mapHandleToLock.get(t);
        try {
            if (this.mapHandleToPos.delete(t), this.writeHandles.delete(t) && l_.canFlush) try {
                await ie.fdatasync(t);
            } catch (r) {
                l_.configureFlushOnWrite(!1), this.logService.error(r);
            }
            return await ie.close(t);
        } catch (r) {
            throw this.toFileSystemProviderError(r);
        } finally{
            n && (this.mapHandleToLock.get(t) === n && (this.traceLock(`[Disk FileSystemProvider]: close() - resource lock removed from handle-lock map ${t}`), this.mapHandleToLock.delete(t)), this.traceLock(`[Disk FileSystemProvider]: close() - disposing lock for handle ${t}`), n.dispose());
        }
    }
    async read(t, n, r, s, i) {
        const a = this.normalizePos(t, n);
        let o = null;
        try {
            o = (await ie.read(t, r, s, i, a)).bytesRead;
        } catch (l) {
            throw this.toFileSystemProviderError(l);
        } finally{
            this.updatePos(t, a, o);
        }
        return o;
    }
    normalizePos(t, n) {
        return n === this.mapHandleToPos.get(t) ? null : n;
    }
    updatePos(t, n, r) {
        const s = this.mapHandleToPos.get(t);
        typeof s == "number" && (typeof n == "number" || (typeof r == "number" ? this.mapHandleToPos.set(t, s + r) : this.mapHandleToPos.delete(t)));
    }
    async write(t, n, r, s, i) {
        return Vxe(()=>this.doWrite(t, n, r, s, i), 100, 3);
    }
    async doWrite(t, n, r, s, i) {
        const a = this.normalizePos(t, n);
        let o = null;
        try {
            o = (await ie.write(t, r, s, i, a)).bytesWritten;
        } catch (l) {
            throw await this.toFileSystemProviderWriteError(this.writeHandles.get(t), l);
        } finally{
            this.updatePos(t, a, o);
        }
        return o;
    }
    async mkdir(t) {
        try {
            await uo.mkdir(this.toFilePath(t));
        } catch (n) {
            throw this.toFileSystemProviderError(n);
        }
    }
    async delete(t, n) {
        try {
            const r = this.toFilePath(t);
            if (n.recursive) {
                let s;
                n?.atomic !== !1 && n.atomic.postfix && (s = L(st(r), `${_t(r)}${n.atomic.postfix}`)), await ie.rm(r, mT.MOVE, s);
            } else try {
                await uo.unlink(r);
            } catch (s) {
                if (s.code === "EPERM" || s.code === "EISDIR") {
                    let i = !1;
                    try {
                        const { stat: a, symbolicLink: o } = await Zn.stat(r);
                        i = a.isDirectory() && !o;
                    } catch  {}
                    if (i) await uo.rmdir(r);
                    else throw s;
                } else throw s;
            }
        } catch (r) {
            throw this.toFileSystemProviderError(r);
        }
    }
    async rename(t, n, r) {
        const s = this.toFilePath(t), i = this.toFilePath(n);
        if (s !== i) try {
            await this.validateMoveCopy(t, n, "move", r.overwrite), await ie.rename(s, i);
        } catch (a) {
            throw (a.code === "EINVAL" || a.code === "EBUSY" || a.code === "ENAMETOOLONG") && (a = new Error(E(2062, null, _t(s), _t(st(i)), a.toString()))), this.toFileSystemProviderError(a);
        }
    }
    async copy(t, n, r) {
        const s = this.toFilePath(t), i = this.toFilePath(n);
        if (s !== i) try {
            await this.validateMoveCopy(t, n, "copy", r.overwrite), await ie.copy(s, i, {
                preserveSymlinks: !0
            });
        } catch (a) {
            throw (a.code === "EINVAL" || a.code === "EBUSY" || a.code === "ENAMETOOLONG") && (a = new Error(E(2063, null, _t(s), _t(st(i)), a.toString()))), this.toFileSystemProviderError(a);
        }
    }
    async validateMoveCopy(t, n, r, s) {
        const i = this.toFilePath(t), a = this.toFilePath(n);
        let o = !1;
        if (!!(this.capabilities & 1024) || (o = Xm(i, a, !0)), o) {
            if (r === "copy") throw Ns(E(2064, null), ln.FileExists);
            if (r === "move") return;
        }
        const d = await this.statIgnoreError(t);
        if (!d) throw Ns(E(2065, null), ln.FileNotFound);
        const u = await this.statIgnoreError(n);
        if (u) {
            if (!s) throw Ns(E(2066, null), ln.FileExists);
            (d.type & qn.File) !== 0 && (u.type & qn.File) !== 0 || await this.delete(n, {
                recursive: !0,
                useTrash: !1,
                atomic: !1
            });
        }
    }
    async cloneFile(t, n) {
        return this.doCloneFile(t, n, !1);
    }
    async doCloneFile(t, n, r) {
        const s = this.toFilePath(t), i = this.toFilePath(n), a = !!(this.capabilities & 1024);
        if (Xm(s, i, !a)) return;
        const o = new ve;
        try {
            o.add(await this.createResourceLock(t)), o.add(await this.createResourceLock(n)), r && await uo.mkdir(st(i), {
                recursive: !0
            }), await uo.copyFile(s, i);
        } catch (l) {
            if (l.code === "ENOENT" && !r) return this.doCloneFile(t, n, !0);
            throw this.toFileSystemProviderError(l);
        } finally{
            o.dispose();
        }
    }
    createUniversalWatcher(t, n, r) {
        return new o$((s)=>t(s), (s)=>n(s), r);
    }
    createNonRecursiveWatcher(t, n, r) {
        return new p$((s)=>t(s), (s)=>n(s), r);
    }
    toFileSystemProviderError(t) {
        if (t instanceof BT) return t;
        let n = t, r;
        switch(t.code){
            case "ENOENT":
                r = ln.FileNotFound;
                break;
            case "EISDIR":
                r = ln.FileIsADirectory;
                break;
            case "ENOTDIR":
                r = ln.FileNotADirectory;
                break;
            case "EEXIST":
                r = ln.FileExists;
                break;
            case "EPERM":
            case "EACCES":
                r = ln.NoPermissions;
                break;
            case "ERR_UNC_HOST_NOT_ALLOWED":
                n = `${t.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`, r = ln.Unknown;
                break;
            default:
                r = ln.Unknown;
        }
        return Ns(n, r);
    }
    async toFileSystemProviderWriteError(t, n) {
        let r = this.toFileSystemProviderError(n);
        if (t && r.code === ln.NoPermissions) try {
            const { stat: s } = await Zn.stat(this.toFilePath(t));
            s.mode & 128 || (r = Ns(n, ln.FileWriteLocked));
        } catch (s) {
            this.logService.trace(s);
        }
        return r;
    }
}, xS.TRACE_LOG_RESOURCE_LOCKS = !1, xS.canFlush = !0, FS = xS;

}
