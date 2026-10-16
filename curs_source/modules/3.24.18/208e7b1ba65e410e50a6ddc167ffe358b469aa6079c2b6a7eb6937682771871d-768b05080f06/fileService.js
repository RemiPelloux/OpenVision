import { Vn } from "./arrays.js";
import { Qn, YR, le } from "./async.js";
import { ae, it } from "./buffer.js";
import { Ie, Jn, Mt } from "./cancellation.js";
import { E } from "./configurationRegistry.js";
import { Fm } from "./diskFileSystemProviderServer.js";
import { Kv, Ns, r$ } from "./diskFileSystemProvider_2.js";
import { Ve, wi } from "./errors.js";
import { N, ge, se } from "./event.js";
import { BT, GT, VT, Wt, gr, id, jT, ln, m6, qn, uc } from "./files.js";
import { Qa } from "./hash.js";
import { s$ } from "./io.js";
import { B } from "./ipc.js";
import { xv, zo } from "./iterator.js";
import { J, ei, j, ve, yr } from "./lifecycle.js";
import { Xa, Z, te } from "./log.js";
import { Hct, j2e } from "./mdc.js";
import { $, $e } from "./network.js";
import { Ne } from "./nls.js";
import { At, sa } from "./performance.js";
import { Ft, VR, h3, nt } from "./resources.js";
import { Dl } from "./stream.js";
import { fa, lc } from "./ternarySearchTree.js";
import { w, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ai } from "./userDataProfile.js";
function qv(e) {
    const t = e;
    return t ? [
        t.on,
        t.pause,
        t.resume,
        t.destroy
    ].every((n)=>typeof n == "function") : !1;
}
function bR(e) {
    const t = e;
    return t ? qv(t.stream) && Array.isArray(t.buffer) && typeof t.ended == "boolean" : !1;
}
function BUe(e, t) {
    const n = [];
    let r;
    for(; (r = e.read()) !== null;)n.push(r);
    return t(n);
}
function GUe(e, t, n) {
    const r = [];
    let s;
    for(; (s = e.read()) !== null && r.length < n;)r.push(s);
    return s === null && r.length > 0 ? t(r) : {
        read: ()=>{
            if (r.length > 0) return r.shift();
            if (typeof s < "u") {
                const i = s;
                return s = void 0, i;
            }
            return e.read();
        }
    };
}
function C5(e, t) {
    return new Promise((n, r)=>{
        const s = [];
        Fm(e, {
            onData: (i)=>{
                t && s.push(i);
            },
            onError: (i)=>{
                t ? r(i) : n(void 0);
            },
            onEnd: ()=>{
                n(t ? t(s) : void 0);
            }
        });
    });
}
function VUe(e, t) {
    return new Promise((n, r)=>{
        const s = new ve, i = [], a = (d)=>{
            if (i.push(d), i.length > t) return s.dispose(), e.pause(), n({
                stream: e,
                buffer: i,
                ended: !1
            });
        }, o = (d)=>(s.dispose(), r(d)), l = ()=>(s.dispose(), n({
                stream: e,
                buffer: i,
                ended: !0
            }));
        s.add(ge(()=>e.removeListener("error", o))), e.on("error", o), s.add(ge(()=>e.removeListener("end", l))), e.on("end", l), s.add(ge(()=>e.removeListener("data", a))), e.on("data", a);
    });
}
function $Ue(e) {
    let t = !1;
    return {
        read: ()=>t ? null : (t = !0, e)
    };
}
function I5(e, t, n) {
    const r = Kv(n);
    return Fm(e, {
        onData: (s)=>r.write(t.data(s)),
        onError: (s)=>r.error(t.error ? t.error(s) : s),
        onEnd: ()=>r.end()
    }), r;
}
function QUe(e) {
    return BUe(e, (t)=>ae.concat(t));
}
function ZUe(e) {
    return $Ue(e);
}
function Wm(e) {
    return C5(e, (t)=>t.length === 1 ? t[0] : ae.concat(t));
}
async function exe(e) {
    return e.ended ? ae.concat(e.buffer) : ae.concat([
        ...e.buffer,
        await Wm(e.stream)
    ]);
}
function nxe(e) {
    return Kv((t)=>ae.concat(t), e);
}
function Ps(e) {
    return !!(e.capabilities & 2);
}
function G0(e) {
    return !!(e.capabilities & 262144) && typeof e.readdirWithMetadata == "function";
}
function V0(e) {
    return !!(e.capabilities & 8);
}
function l6(e) {
    return !!(e.capabilities & 131072);
}
function eo(e) {
    return !!(e.capabilities & 4);
}
function $0(e) {
    return !!(e.capabilities & 16);
}
function j0(e) {
    return Ps(e) ? !!(e.capabilities & 16384) : !1;
}
function d6(e) {
    return Ps(e) ? !!(e.capabilities & 32768) : !1;
}
function d5e(e) {
    return !!(e.capabilities & 65536);
}
function dc(e) {
    return e || Ns(E(2023, null), "Unknown");
}
function WT(e) {
    if (!e) return "Unknown";
    if (e instanceof BT) return e.code;
    const t = /^(.+) \(FileSystemError\)$/.exec(e.name);
    if (!t) return "Unknown";
    switch(t[1]){
        case "EntryExists":
            return "EntryExists";
        case "EntryIsADirectory":
            return "EntryIsADirectory";
        case "EntryNotADirectory":
            return "EntryNotADirectory";
        case "EntryNotFound":
            return "EntryNotFound";
        case "EntryTooLarge":
            return "EntryTooLarge";
        case "EntryWriteLocked":
            return "EntryWriteLocked";
        case "NoPermissions":
            return "NoPermissions";
        case "Unavailable":
            return "Unavailable";
    }
    return "Unknown";
}
function u6(e) {
    if (!(typeof e.size != "number" || typeof e.mtime != "number")) return e.mtime.toString(29) + e.size.toString(31);
}
function jct(e) {
    return (e.scheme === "file" || e.scheme === "vscode-remote") && e.path.endsWith(".mdc");
}
var nm, H2e;
export { $0, $Ue, BUe, C5, G0, GUe, H2e, I5, Ps, QUe, V0, VUe, WT, Wm, ZUe, bR, d5e, d6, dc, eo, exe, j0, jct, l6, nm, nxe, qv, u6 };
var __wakaru_qct_initialized = false;
export function qct() {
if (__wakaru_qct_initialized) return;
__wakaru_qct_initialized = true;
"use strict";
h(), Vn(), le(), it(), Mt(), se(), Qa(), xv(), j(), lc(), $e(), sa(), Ft(), Dl(), Ne(), Wt(), s$(), te(), Ve(), Hct(), nm = class extends J {
    constructor(e){
        super(), this.logService = e, this.BUFFER_SIZE = 256 * 1024, this._onDidChangeFileSystemProviderRegistrations = this._register(new N), this.onDidChangeFileSystemProviderRegistrations = this._onDidChangeFileSystemProviderRegistrations.event, this._onWillActivateFileSystemProvider = this._register(new N), this.onWillActivateFileSystemProvider = this._onWillActivateFileSystemProvider.event, this._onDidChangeFileSystemProviderCapabilities = this._register(new N), this.onDidChangeFileSystemProviderCapabilities = this._onDidChangeFileSystemProviderCapabilities.event, this.providers = new ei, this._disposingProviders = !1, this._onDidRunOperation = this._register(new N), this.onDidRunOperation = this._onDidRunOperation.event, this.internalOnDidFilesChange = this._register(new N), this._onDidUncorrelatedFilesChange = this._register(new N), this.onDidFilesChange = this._onDidUncorrelatedFilesChange.event, this._onDidWatchError = this._register(new N), this.onDidWatchError = this._onDidWatchError.event, this.activeWatchers = new Map, this.writeQueue = this._register(new YR);
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    registerNotebookCellChecker(e) {
        return this.notebookCellExistsChecker = e, ge(()=>{
            this.notebookCellExistsChecker = void 0;
        });
    }
    registerProvider(e, t) {
        if (this.providers.has(e)) throw new Error(`A filesystem provider for the scheme '${e}' is already registered.`);
        At(`code/registerFilesystem/${e}`);
        const n = new H2e(t);
        n.add(t.onDidChangeFile((s)=>{
            const i = new m6(s, !this.isPathCaseSensitive(t));
            this.internalOnDidFilesChange.fire(i), i.hasCorrelation() || this._onDidUncorrelatedFilesChange.fire(i);
        })), typeof t.onDidWatchError == "function" && n.add(t.onDidWatchError((s)=>this._onDidWatchError.fire(new Error(s)))), n.add(t.onDidChangeCapabilities(()=>this._onDidChangeFileSystemProviderCapabilities.fire({
                provider: t,
                scheme: e
            }))), this.providers.set(e, n), this._onDidChangeFileSystemProviderRegistrations.fire({
            added: !0,
            scheme: e,
            provider: t
        });
        const r = ge(()=>this.unregisterProvider(e));
        return n.add(r), r;
    }
    unregisterProvider(e) {
        const t = this.providers.deleteAndLeak(e);
        t && (this._disposingProviders || this._onDidChangeFileSystemProviderRegistrations.fire({
            added: !1,
            scheme: e,
            provider: t.provider
        }), t.dispose());
    }
    getProvider(e) {
        return this.providers.get(e)?.provider;
    }
    async activateProvider(e) {
        const t = [];
        this._onWillActivateFileSystemProvider.fire({
            scheme: e,
            join (n) {
                t.push(n);
            }
        }), !this.providers.has(e) && await Qn.settled(t);
    }
    async canHandleResource(e) {
        return await this.activateProvider(e.scheme), this.hasProvider(e);
    }
    hasProvider(e) {
        return this.providers.has(e.scheme);
    }
    hasCapability(e, t) {
        const n = this.getProvider(e.scheme);
        return !!(n && n.capabilities & t);
    }
    listCapabilities() {
        return zo.map(this.providers, ([e, t])=>({
                scheme: e,
                capabilities: t.provider.capabilities
            }));
    }
    async withProvider(e) {
        if (!h3(e)) throw new gr(E(2029, null, this.resourceForError(e)), 8);
        await this.activateProvider(e.scheme);
        const t = this.getProvider(e.scheme);
        if (!t) {
            const n = new wi;
            throw n.message = E(2030, null, e.toString()), n;
        }
        return t;
    }
    async withReadProvider(e) {
        const t = await this.withProvider(e);
        if (eo(t) || Ps(t) || $0(t)) return t;
        throw new Error(`Filesystem provider for scheme '${e.scheme}' neither has FileReadWrite, FileReadStream nor FileOpenReadWriteClose capability which is needed for the read operation.`);
    }
    async withWriteProvider(e) {
        const t = await this.withProvider(e);
        if (eo(t) || Ps(t)) return t;
        throw new Error(`Filesystem provider for scheme '${e.scheme}' neither has FileReadWrite nor FileOpenReadWriteClose capability which is needed for the write operation.`);
    }
    async resolve(e, t) {
        try {
            return await this.doResolveFile(e, t);
        } catch (n) {
            throw WT(n) === ln.FileNotFound ? new gr(E(2031, null, this.resourceForError(e)), 1) : dc(n);
        }
    }
    async doResolveFile(e, t) {
        const n = await this.withProvider(e), r = this.isPathCaseSensitive(n), s = t?.resolveTo, i = t?.resolveSingleChildDescendants, a = t?.resolveMetadata, o = await n.stat(e);
        let l;
        return this.toFileStat(n, e, o, void 0, !!a, (d, u)=>(l || (l = fa.forUris(()=>!r), l.set(e, !0), s && l.fill(!0, s)), l.get(d.resource) || l.findSuperstr(d.resource.with({
                query: null,
                fragment: null
            })) ? !0 : d.isDirectory && i ? u === 1 : !1));
    }
    async toFileStat(e, t, n, r, s, i) {
        if (!n || typeof n.type != "number") throw Ns(E(2032, null), ln.Unknown);
        const { providerExtUri: a } = this.getExtUri(e), o = {
            resource: t,
            name: a.basename(t),
            isFile: (n.type & qn.File) !== 0,
            isDirectory: (n.type & qn.Directory) !== 0,
            isSymbolicLink: (n.type & qn.SymbolicLink) !== 0,
            mtime: n.mtime,
            ctime: n.ctime,
            size: n.size,
            readonly: !!((n.permissions ?? 0) & id.Readonly) || !!(e.capabilities & 2048),
            locked: !!((n.permissions ?? 0) & id.Locked),
            etag: u6({
                mtime: n.mtime,
                size: n.size
            }),
            children: void 0
        };
        if (o.isDirectory && i(o, r)) {
            try {
                const l = s && G0(e), d = l ? await e.readdirWithMetadata(t) : (await e.readdir(t)).map(([m, f])=>[
                        m,
                        {
                            type: f
                        }
                    ]), u = await Qn.settled(d.map(async ([m, f])=>{
                    try {
                        const v = a.joinPath(t, m), T = s && !l ? await e.stat(v) : f;
                        return await this.toFileStat(e, v, T, d.length, s, i);
                    } catch (v) {
                        return this.logService.trace(v), null;
                    }
                }));
                o.children = wn(u);
            } catch (l) {
                this.logService.trace(l), o.children = [];
            }
            return o;
        }
        return o;
    }
    async resolveAll(e) {
        return Qn.settled(e.map(async (t)=>{
            try {
                return {
                    stat: await this.doResolveFile(t.resource, t.options),
                    success: !0
                };
            } catch (n) {
                return this.logService.trace(n), {
                    stat: void 0,
                    success: !1
                };
            }
        }));
    }
    async stat(e) {
        const t = await this.withProvider(e), n = await t.stat(e);
        return this.toFileStat(t, e, n, void 0, !0, ()=>!1);
    }
    async exists(e) {
        if (e.scheme === $.vscodeNotebookCell) return this.notebookCellExistsChecker ? await this.notebookCellExistsChecker(e) : (console.log(`[fileService.exists] Can't check if notebook cell exists: ${e.toString()}`), !1);
        const t = await this.withProvider(e);
        try {
            return !!await t.stat(e);
        } catch  {
            return !1;
        }
    }
    async canCreateFile(e, t) {
        try {
            await this.doValidateCreateFile(e, t);
        } catch (n) {
            return n;
        }
        return !0;
    }
    async doValidateCreateFile(e, t) {
        if (!t?.overwrite && await this.exists(e)) throw new gr(E(2033, null, this.resourceForError(e)), 3, t);
    }
    async createFile(e, t = ae.fromString(""), n) {
        jct(e) && t.toString().trim() === "" && (t = ae.fromString(j2e)), await this.doValidateCreateFile(e, n);
        const r = await this.writeFile(e, t);
        return this._onDidRunOperation.fire(new uc(e, 0, r)), r;
    }
    async writeFile(e, t, n) {
        const r = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(e), e), { providerExtUri: s } = this.getExtUri(r);
        let i = n;
        if (d6(r) && !i?.atomic) {
            const o = r.enforceAtomicWriteFile?.(e);
            o && (i = {
                ...n,
                atomic: o
            });
        }
        let a;
        try {
            let { stat: o, buffer: l } = await this.validateWriteFile(r, e, t, i);
            o || await this.mkdirp(r, s.dirname(e)), l || (l = await this.peekBufferForWriting(r, t)), !eo(r) || Ps(r) && l instanceof ae || Ps(r) && d6(r) && i?.atomic ? a = await this.doWriteUnbuffered(r, e, i, l) : await this.doWriteBuffered(r, e, i, l instanceof ae ? ZUe(l) : l), this._onDidRunOperation.fire(new uc(e, 4));
        } catch (o) {
            throw new gr(E(2034, null, this.resourceForError(e), dc(o).toString()), ai(o), i);
        }
        return a && typeof a.type == "number" ? this.toFileStat(r, e, a, void 0, !0, ()=>!1) : this.resolve(e, {
            resolveMetadata: !0
        });
    }
    async peekBufferForWriting(e, t) {
        let n;
        if (Ps(e) && !(t instanceof ae)) if (qv(t)) {
            const r = await VUe(t, 3);
            r.ended ? n = ae.concat(r.buffer) : n = r;
        } else n = GUe(t, (r)=>ae.concat(r), 3);
        else n = t;
        return n;
    }
    async validateWriteFile(e, t, n, r) {
        const s = !!r?.unlock;
        if (s && !(e.capabilities & 8192)) throw new Error(E(2035, null, this.resourceForError(t)));
        if (!!r?.atomic) {
            if (!(e.capabilities & 32768)) throw new Error(E(2036, null, this.resourceForError(t)));
            if (!(e.capabilities & 2)) throw new Error(E(2037, null, this.resourceForError(t)));
            if (s) throw new Error(E(2038, null, this.resourceForError(t)));
        }
        let a;
        try {
            a = await e.stat(t);
        } catch  {
            return Object.create(null);
        }
        if (!a || typeof a.type != "number") return Object.create(null);
        if ((a.type & qn.Directory) !== 0) throw new gr(E(2039, null, this.resourceForError(t)), 0, r);
        this.throwIfFileIsReadonly(t, a);
        let o;
        if (typeof r?.mtime == "number" && typeof r.etag == "string" && r.etag !== jT && typeof a.mtime == "number" && typeof a.size == "number" && r.mtime < a.mtime && r.etag !== u6({
            mtime: r.mtime,
            size: a.size
        })) {
            if (o = await this.peekBufferForWriting(e, n), o instanceof ae && o.byteLength === a.size) try {
                const { value: l } = await this.readFile(t, {
                    limits: {
                        size: a.size
                    }
                });
                if (o.equals(l)) return {
                    stat: a,
                    buffer: o
                };
            } catch  {}
            throw new gr(E(2040, null), 3, r);
        }
        return {
            stat: a,
            buffer: o
        };
    }
    async readFile(e, t, n) {
        const r = await this.withReadProvider(e);
        return t?.atomic ? this.doReadFileAtomic(r, e, t, n) : this.doReadFile(r, e, t, n);
    }
    async doReadFileAtomic(e, t, n, r) {
        return new Promise((s, i)=>{
            this.writeQueue.queueFor(t, async ()=>{
                try {
                    const a = await this.doReadFile(e, t, n, r);
                    s(a);
                } catch (a) {
                    i(a);
                }
            }, this.getExtUri(e).providerExtUri);
        });
    }
    async doReadFile(e, t, n, r) {
        const s = await this.doReadFileStream(e, t, {
            ...n,
            preferUnbuffered: !0
        }, r);
        return {
            ...s,
            value: await Wm(s.value)
        };
    }
    async readFileStream(e, t, n) {
        const r = await this.withReadProvider(e);
        return this.doReadFileStream(r, e, t, n);
    }
    async doReadFileStream(e, t, n, r) {
        const s = new Jn(r);
        let i = n;
        j0(e) && e.enforceAtomicReadFile?.(t) && (i = {
            ...n,
            atomic: !0
        });
        const a = this.validateReadFile(t, i).then((l)=>l, (l)=>{
            throw s.dispose(!0), l;
        });
        let o;
        try {
            return typeof i?.etag == "string" && i.etag !== jT && await a, i?.atomic && j0(e) || !(eo(e) || $0(e)) || Ps(e) && i?.preferUnbuffered ? o = this.readFileUnbuffered(e, t, i) : $0(e) ? o = this.readFileStreamed(e, t, s.token, i) : o = this.readFileBuffered(e, t, s.token, i), o.on("end", ()=>s.dispose()), o.on("error", ()=>s.dispose()), {
                ...await a,
                value: o
            };
        } catch (l) {
            throw o && await C5(o), this.restoreReadError(l, t, i);
        }
    }
    restoreReadError(e, t, n) {
        const r = E(2041, null, this.resourceForError(t), dc(e).toString());
        return e instanceof VT ? new VT(r, e.stat, n) : e instanceof GT ? new GT(r, e.fileOperationResult, e.size, e.options) : new gr(r, ai(e), n);
    }
    readFileStreamed(e, t, n, r = Object.create(null)) {
        const s = e.readFileStream(t, r, n);
        return I5(s, {
            data: (i)=>i instanceof ae ? i : ae.wrap(i),
            error: (i)=>this.restoreReadError(i, t, r)
        }, (i)=>ae.concat(i));
    }
    readFileBuffered(e, t, n, r = Object.create(null)) {
        const s = nxe();
        return r$(e, t, s, (i)=>i, {
            ...r,
            bufferSize: this.BUFFER_SIZE,
            errorTransformer: (i)=>this.restoreReadError(i, t, r)
        }, n), s;
    }
    readFileUnbuffered(e, t, n) {
        const r = Kv((s)=>ae.concat(s));
        return (async ()=>{
            try {
                let s;
                n?.atomic && j0(e) ? s = await e.readFile(t, {
                    atomic: !0
                }) : s = await e.readFile(t), typeof n?.position == "number" && (s = s.slice(n.position)), typeof n?.length == "number" && (s = s.slice(0, n.length)), this.validateReadFileLimits(t, s.byteLength, n), r.end(ae.wrap(s));
            } catch (s) {
                r.error(s), r.end();
            }
        })(), r;
    }
    async validateReadFile(e, t) {
        const n = await this.resolve(e, {
            resolveMetadata: !0
        });
        if (n.isDirectory) throw new gr(E(2042, null, this.resourceForError(e)), 0, t);
        if (typeof t?.etag == "string" && t.etag !== jT && t.etag === n.etag) throw new VT(E(2043, null), n, t);
        return this.validateReadFileLimits(e, n.size, t), n;
    }
    validateReadFileLimits(e, t, n) {
        if (typeof n?.limits?.size == "number" && t > n.limits.size) throw new GT(E(2044, null, this.resourceForError(e)), 7, t, n);
    }
    async canMove(e, t, n) {
        return this.doCanMoveCopy(e, t, "move", n);
    }
    async canCopy(e, t, n) {
        return this.doCanMoveCopy(e, t, "copy", n);
    }
    async doCanMoveCopy(e, t, n, r) {
        if (e.toString() !== t.toString()) try {
            const s = n === "move" ? this.throwIfFileSystemIsReadonly(await this.withWriteProvider(e), e) : await this.withReadProvider(e), i = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t);
            await this.doValidateMoveCopy(s, e, i, t, n, r);
        } catch (s) {
            return s;
        }
        return !0;
    }
    async move(e, t, n) {
        const r = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(e), e), s = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t), i = await this.doMoveCopy(r, e, s, t, "move", !!n), a = await this.resolve(t, {
            resolveMetadata: !0
        });
        return this._onDidRunOperation.fire(new uc(e, i === "move" ? 2 : 3, a)), a;
    }
    async copy(e, t, n) {
        const r = await this.withReadProvider(e), s = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t), i = await this.doMoveCopy(r, e, s, t, "copy", !!n), a = await this.resolve(t, {
            resolveMetadata: !0
        });
        return this._onDidRunOperation.fire(new uc(e, i === "copy" ? 3 : 2, a)), a;
    }
    async doMoveCopy(e, t, n, r, s, i) {
        if (t.toString() === r.toString()) return s;
        const { exists: a, isSameResourceWithDifferentPathCase: o } = await this.doValidateMoveCopy(e, t, n, r, s, i);
        if (a && !o && i && await this.del(r, {
            recursive: !0
        }), await this.mkdirp(n, this.getExtUri(n).providerExtUri.dirname(r)), s === "copy") {
            if (e === n && V0(e)) await e.copy(t, r, {
                overwrite: i
            });
            else {
                const l = await this.resolve(t);
                l.isDirectory ? await this.doCopyFolder(e, l, n, r) : await this.doCopyFile(e, t, n, r);
            }
            return s;
        } else return e === n ? (await e.rename(t, r, {
            overwrite: i
        }), s) : (await this.doMoveCopy(e, t, n, r, "copy", i), await this.del(t, {
            recursive: !0
        }), "copy");
    }
    async doCopyFile(e, t, n, r) {
        if (eo(e) && eo(n)) return this.doPipeBuffered(e, t, n, r);
        if (eo(e) && Ps(n)) return this.doPipeBufferedToUnbuffered(e, t, n, r);
        if (Ps(e) && eo(n)) return this.doPipeUnbufferedToBuffered(e, t, n, r);
        if (Ps(e) && Ps(n)) return this.doPipeUnbuffered(e, t, n, r);
    }
    async doCopyFolder(e, t, n, r) {
        await n.mkdir(r), Array.isArray(t.children) && await Qn.settled(t.children.map(async (s)=>{
            const i = this.getExtUri(n).providerExtUri.joinPath(r, s.name);
            return s.isDirectory ? this.doCopyFolder(e, await this.resolve(s.resource), n, i) : this.doCopyFile(e, s.resource, n, i);
        }));
    }
    async doValidateMoveCopy(e, t, n, r, s, i) {
        let a = !1;
        if (e === n) {
            const { providerExtUri: l, isPathCaseSensitive: d } = this.getExtUri(e);
            if (d || (a = l.isEqual(t, r)), a && s === "copy") throw new Error(E(2045, null, this.resourceForError(t), this.resourceForError(r)));
            if (!a && l.isEqualOrParent(r, t)) throw new Error(E(2046, null, this.resourceForError(t), this.resourceForError(r)));
        }
        const o = await this.exists(r);
        if (o && !a) {
            if (!i) throw new gr(E(2047, null, this.resourceForError(t), this.resourceForError(r)), 4);
            if (e === n) {
                const { providerExtUri: l } = this.getExtUri(e);
                if (l.isEqualOrParent(t, r)) throw new Error(E(2048, null, this.resourceForError(t), this.resourceForError(r)));
            }
        }
        return {
            exists: o,
            isSameResourceWithDifferentPathCase: a
        };
    }
    getExtUri(e) {
        const t = this.isPathCaseSensitive(e);
        return {
            providerExtUri: t ? nt : VR,
            isPathCaseSensitive: t
        };
    }
    isPathCaseSensitive(e) {
        return !!(e.capabilities & 1024);
    }
    async createFolder(e) {
        const t = this.throwIfFileSystemIsReadonly(await this.withProvider(e), e);
        await this.mkdirp(t, e);
        const n = await this.resolve(e, {
            resolveMetadata: !0
        });
        return this._onDidRunOperation.fire(new uc(e, 0, n)), n;
    }
    async mkdirp(e, t) {
        const n = [], { providerExtUri: r } = this.getExtUri(e);
        for(; !r.isEqual(t, r.dirname(t));)try {
            const s = await e.stat(t);
            if (!s || typeof s.type != "number") {
                n.push(r.basename(t)), t = r.dirname(t);
                continue;
            }
            if ((s.type & qn.Directory) === 0) throw new Error(E(2049, null, this.resourceForError(t)));
            break;
        } catch (s) {
            if (WT(s) !== ln.FileNotFound) throw s;
            n.push(r.basename(t)), t = r.dirname(t);
        }
        for(let s = n.length - 1; s >= 0; s--){
            t = r.joinPath(t, n[s]);
            try {
                await e.mkdir(t);
            } catch (i) {
                if (WT(i) !== ln.FileExists) throw i;
            }
        }
    }
    async canDelete(e, t) {
        try {
            await this.doValidateDelete(e, t);
        } catch (n) {
            return n;
        }
        return !0;
    }
    async doValidateDelete(e, t) {
        const n = this.throwIfFileSystemIsReadonly(await this.withProvider(e), e), r = !!t?.useTrash;
        if (r && !(n.capabilities & 4096)) throw new Error(E(2050, null, this.resourceForError(e)));
        const s = t?.atomic;
        if (s && !(n.capabilities & 65536)) throw new Error(E(2051, null, this.resourceForError(e)));
        if (r && s) throw new Error(E(2052, null, this.resourceForError(e)));
        let i;
        try {
            i = await n.stat(e);
        } catch  {}
        if (i) this.throwIfFileIsReadonly(e, i);
        else throw new gr(E(2053, null, this.resourceForError(e)), 1);
        if (!!!t?.recursive) {
            const o = await this.resolve(e);
            if (o.isDirectory && Array.isArray(o.children) && o.children.length > 0) throw new Error(E(2054, null, this.resourceForError(e)));
        }
        return n;
    }
    async del(e, t) {
        const n = await this.doValidateDelete(e, t);
        let r = t;
        if (d5e(n) && !r?.atomic) {
            const o = n.enforceAtomicDelete?.(e);
            o && (r = {
                ...t,
                atomic: o
            });
        }
        const s = !!r?.useTrash, i = !!r?.recursive, a = r?.atomic ?? !1;
        await n.delete(e, {
            recursive: i,
            useTrash: s,
            atomic: a
        }), this._onDidRunOperation.fire(new uc(e, 1));
    }
    async cloneFile(e, t) {
        const n = await this.withProvider(e), r = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t);
        if (!(n === r && this.getExtUri(n).providerExtUri.isEqual(e, t))) return n === r && l6(n) ? n.cloneFile(e, t) : (await this.mkdirp(r, this.getExtUri(r).providerExtUri.dirname(t)), n === r && V0(n) ? this.writeQueue.queueFor(e, ()=>n.copy(e, t, {
                overwrite: !0
            }), this.getExtUri(n).providerExtUri) : this.writeQueue.queueFor(e, ()=>this.doCopyFile(n, e, r, t), this.getExtUri(n).providerExtUri));
    }
    createWatcher(e, t) {
        return this.watch(e, {
            ...t,
            correlationId: nm.WATCHER_CORRELATION_IDS++
        });
    }
    watch(e, t = {
        recursive: !1,
        excludes: []
    }) {
        const n = new ve;
        let r = !1, s = ()=>{
            r = !0;
        };
        n.add(ge(()=>s())), (async ()=>{
            try {
                const a = await this.doWatch(e, t);
                r ? yr(a) : s = ()=>yr(a);
            } catch (a) {
                this.logService.error(a);
            }
        })();
        const i = t.correlationId;
        if (typeof i == "number") {
            const a = n.add(new N);
            return n.add(this.internalOnDidFilesChange.event((l)=>{
                l.correlates(i) && a.fire(l);
            })), {
                onDidChange: a.event,
                dispose: ()=>n.dispose()
            };
        }
        return n;
    }
    async doWatch(e, t) {
        const n = await this.withProvider(e), r = Xa([
            this.getExtUri(n).providerExtUri.getComparisonKey(e),
            t
        ]);
        let s = this.activeWatchers.get(r);
        return s || (s = {
            count: 0,
            disposable: n.watch(e, t)
        }, this.activeWatchers.set(r, s)), s.count += 1, ge(()=>{
            s && (s.count--, s.count === 0 && (yr(s.disposable), this.activeWatchers.delete(r)));
        });
    }
    dispose() {
        this._disposingProviders = !0, this.providers.dispose(), super.dispose();
        for (const [, e] of this.activeWatchers)yr(e.disposable);
        this.activeWatchers.clear();
    }
    async doWriteBuffered(e, t, n, r) {
        return this.writeQueue.queueFor(t, async ()=>{
            const s = await e.open(t, {
                create: !0,
                unlock: n?.unlock ?? !1
            });
            try {
                qv(r) || bR(r) ? await this.doWriteStreamBufferedQueued(e, s, r) : await this.doWriteReadableBufferedQueued(e, s, r);
            } catch (i) {
                throw dc(i);
            } finally{
                await e.close(s);
            }
        }, this.getExtUri(e).providerExtUri);
    }
    async doWriteStreamBufferedQueued(e, t, n) {
        let r = 0, s;
        if (bR(n)) {
            if (n.buffer.length > 0) {
                const i = ae.concat(n.buffer);
                await this.doWriteBuffer(e, t, i, i.byteLength, r, 0), r += i.byteLength;
            }
            if (n.ended) return;
            s = n.stream;
        } else s = n;
        return new Promise((i, a)=>{
            Fm(s, {
                onData: async (o)=>{
                    s.pause();
                    try {
                        await this.doWriteBuffer(e, t, o, o.byteLength, r, 0);
                    } catch (l) {
                        return a(l);
                    }
                    r += o.byteLength, setTimeout(()=>s.resume());
                },
                onError: (o)=>a(o),
                onEnd: ()=>i()
            });
        });
    }
    async doWriteReadableBufferedQueued(e, t, n) {
        let r = 0, s;
        for(; (s = n.read()) !== null;)await this.doWriteBuffer(e, t, s, s.byteLength, r, 0), r += s.byteLength;
    }
    async doWriteBuffer(e, t, n, r, s, i) {
        let a = 0;
        for(; a < r;){
            const o = await e.write(t, s + a, n.buffer, i + a, r - a);
            a += o;
        }
    }
    async doWriteUnbuffered(e, t, n, r) {
        let s;
        return await this.writeQueue.queueFor(t, async ()=>{
            s = await this.doWriteUnbufferedQueued(e, t, n, r);
        }, this.getExtUri(e).providerExtUri), s;
    }
    async doWriteUnbufferedQueued(e, t, n, r) {
        let s;
        return r instanceof ae ? s = r : qv(r) ? s = await Wm(r) : bR(r) ? s = await exe(r) : s = QUe(r), e.writeFile(t, s.buffer, {
            create: !0,
            overwrite: !0,
            unlock: n?.unlock ?? !1,
            atomic: n?.atomic ?? !1
        });
    }
    async doPipeBuffered(e, t, n, r) {
        return this.writeQueue.queueFor(r, ()=>this.doPipeBufferedQueued(e, t, n, r), this.getExtUri(n).providerExtUri);
    }
    async doPipeBufferedQueued(e, t, n, r) {
        let s, i;
        try {
            s = await e.open(t, {
                create: !1
            }), i = await n.open(r, {
                create: !0,
                unlock: !1
            });
            const a = ae.alloc(this.BUFFER_SIZE);
            let o = 0, l = 0, d = 0;
            do d = await e.read(s, o, a.buffer, l, a.byteLength - l), await this.doWriteBuffer(n, i, a, d, o, l), o += d, l += d, l === a.byteLength && (l = 0);
            while (d > 0)
        } catch (a) {
            throw dc(a);
        } finally{
            await Qn.settled([
                typeof s == "number" ? e.close(s) : Promise.resolve(),
                typeof i == "number" ? n.close(i) : Promise.resolve()
            ]);
        }
    }
    async doPipeUnbuffered(e, t, n, r) {
        return this.writeQueue.queueFor(r, ()=>this.doPipeUnbufferedQueued(e, t, n, r), this.getExtUri(n).providerExtUri);
    }
    async doPipeUnbufferedQueued(e, t, n, r) {
        await n.writeFile(r, await e.readFile(t), {
            create: !0,
            overwrite: !0,
            unlock: !1,
            atomic: !1
        });
    }
    async doPipeUnbufferedToBuffered(e, t, n, r) {
        return this.writeQueue.queueFor(r, ()=>this.doPipeUnbufferedToBufferedQueued(e, t, n, r), this.getExtUri(n).providerExtUri);
    }
    async doPipeUnbufferedToBufferedQueued(e, t, n, r) {
        const s = await n.open(r, {
            create: !0,
            unlock: !1
        });
        try {
            const i = await e.readFile(t);
            await this.doWriteBuffer(n, s, ae.wrap(i), i.byteLength, 0, 0);
        } catch (i) {
            throw dc(i);
        } finally{
            await n.close(s);
        }
    }
    async doPipeBufferedToUnbuffered(e, t, n, r) {
        const s = await Wm(this.readFileBuffered(e, t, Ie.None));
        await this.doWriteUnbuffered(n, r, void 0, s);
    }
    throwIfFileSystemIsReadonly(e, t) {
        if (e.capabilities & 2048) throw new gr(E(2055, null, this.resourceForError(t)), 6);
        return e;
    }
    throwIfFileIsReadonly(e, t) {
        if ((t.permissions ?? 0) & id.Readonly) throw new gr(E(2056, null, this.resourceForError(e)), 6);
    }
    resourceForError(e) {
        return e.scheme === $.file ? e.fsPath : e.toString(!0);
    }
    async realpath(e) {
        try {
            const t = await this.withProvider(e);
            return "realpath" in t && typeof t.realpath == "function" ? t.realpath(e) : e;
        } catch  {
            return e;
        }
    }
}, nm.WATCHER_CORRELATION_IDS = 0, nm = B([
    w(0, Z)
], nm), H2e = class extends ve {
    constructor(e){
        super(), this.provider = e;
    }
};

}
