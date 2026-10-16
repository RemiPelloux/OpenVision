import { ae, it } from "./buffer.js";
import { Jn, Mt } from "./cancellation.js";
import { GR } from "./diskFileSystemProvider.js";
import { FS, uM } from "./diskFileSystemProvider_2.js";
import { N, ge, se } from "./event.js";
import { Lr } from "./extpath.js";
import { J, ei, j, yr } from "./lifecycle.js";
import { Ce, on } from "./path.js";
import { Ft, St } from "./resources.js";
import { Dl } from "./stream.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
function Fm(e, t, n) {
    e.on("error", (r)=>{
        n?.isCancellationRequested || t.onError(r);
    }), e.on("end", ()=>{
        n?.isCancellationRequested || t.onEnd();
    }), e.on("data", (r)=>{
        n?.isCancellationRequested || t.onData(r);
    });
}
var h$, g$, mM, f$;
export { Fm, f$, g$, h$, mM };
var __wakaru_YVe_initialized = false;
export function YVe() {
if (__wakaru_YVe_initialized) return;
__wakaru_YVe_initialized = true;
"use strict";
h(), se(), uM(), j(), ye(), it(), Dl(), Mt(), Ft(), Ce(), Lr(), h$ = class extends J {
    constructor(e, t){
        super(), this.provider = e, this.logService = t, this.sessionToWatcher = new ei, this.watchRequests = new Map;
    }
    call(e, t, n) {
        const r = this.getUriTransformer(e);
        switch(t){
            case "stat":
                return this.stat(r, n[0]);
            case "readdir":
                return this.readdir(r, n[0]);
            case "readdirWithMetadata":
                return this.readdirWithMetadata(r, n[0]);
            case "realpath":
                return this.realpath(r, n[0]);
            case "open":
                return this.open(r, n[0], n[1]);
            case "close":
                return this.close(n[0]);
            case "read":
                return this.read(n[0], n[1], n[2]);
            case "readFile":
                return this.readFile(r, n[0], n[1]);
            case "write":
                return this.write(n[0], n[1], n[2], n[3], n[4]);
            case "writeFile":
                return this.writeFile(r, n[0], n[1], n[2]);
            case "rename":
                return this.rename(r, n[0], n[1], n[2]);
            case "copy":
                return this.copy(r, n[0], n[1], n[2]);
            case "cloneFile":
                return this.cloneFile(r, n[0], n[1]);
            case "mkdir":
                return this.mkdir(r, n[0]);
            case "delete":
                return this.delete(r, n[0], n[1]);
            case "watch":
                return this.watch(r, n[0], n[1], n[2], n[3]);
            case "unwatch":
                return this.unwatch(n[0], n[1]);
        }
        throw new Error(`IPC Command ${t} not found`);
    }
    listen(e, t, n) {
        const r = this.getUriTransformer(e);
        switch(t){
            case "fileChange":
                return this.onFileChange(r, n[0]);
            case "readFileStream":
                return this.onReadFileStream(r, n[0], n[1]);
        }
        throw new Error(`Unknown event ${t}`);
    }
    stat(e, t) {
        const n = this.transformIncoming(e, t, !0);
        return this.provider.stat(n);
    }
    readdir(e, t) {
        const n = this.transformIncoming(e, t);
        return this.provider.readdir(n);
    }
    readdirWithMetadata(e, t) {
        const n = this.transformIncoming(e, t);
        return this.provider.readdirWithMetadata(n);
    }
    async realpath(e, t) {
        const n = this.transformIncoming(e, t), r = await this.provider.realpath(n);
        return e.transformOutgoingURI(r);
    }
    async readFile(e, t, n) {
        const r = this.transformIncoming(e, t, !0), s = await this.provider.readFile(r, n);
        return ae.wrap(s);
    }
    onReadFileStream(e, t, n) {
        const r = this.transformIncoming(e, t, !0), s = new Jn, i = new N({
            onDidRemoveLastListener: ()=>{
                s.cancel();
            }
        }), a = this.provider.readFileStream(r, n, s.token);
        return Fm(a, {
            onData: (o)=>i.fire(ae.wrap(o)),
            onError: (o)=>i.fire(o),
            onEnd: ()=>{
                i.fire("end"), i.dispose(), s.dispose();
            }
        }), i.event;
    }
    async writeFile(e, t, n, r) {
        const s = this.transformIncoming(e, t);
        return await this.provider.writeFile(s, n.buffer, r), this.provider.stat(s).catch(()=>{});
    }
    open(e, t, n) {
        const r = this.transformIncoming(e, t, !0);
        return this.provider.open(r, n);
    }
    close(e) {
        return this.provider.close(e);
    }
    async read(e, t, n) {
        const r = ae.alloc(n), i = await this.provider.read(e, t, r.buffer, 0, n);
        return [
            r,
            i
        ];
    }
    write(e, t, n, r, s) {
        return this.provider.write(e, t, n.buffer, r, s);
    }
    mkdir(e, t) {
        const n = this.transformIncoming(e, t);
        return this.provider.mkdir(n);
    }
    delete(e, t, n) {
        const r = this.transformIncoming(e, t);
        return this.provider.delete(r, n);
    }
    rename(e, t, n, r) {
        const s = this.transformIncoming(e, t), i = this.transformIncoming(e, n);
        return this.provider.rename(s, i, r);
    }
    copy(e, t, n, r) {
        const s = this.transformIncoming(e, t), i = this.transformIncoming(e, n);
        return this.provider.copy(s, i, r);
    }
    cloneFile(e, t, n) {
        const r = this.transformIncoming(e, t), s = this.transformIncoming(e, n);
        return this.provider.cloneFile(r, s);
    }
    onFileChange(e, t) {
        let n;
        const r = new N({
            onWillAddFirstListener: ()=>{
                let s = this.sessionToWatcher.get(t);
                if (!s) {
                    const i = new N;
                    s = new g$(this.createSessionFileWatcher(e, i), i), this.sessionToWatcher.set(t, s);
                }
                s.listeners++, n = s.emitter.event((i)=>r.fire(i));
            },
            onDidRemoveLastListener: ()=>{
                n?.dispose(), n = void 0;
                const s = this.sessionToWatcher.get(t);
                s && --s.listeners === 0 && this.sessionToWatcher.deleteAndDispose(t);
            }
        });
        return r.event;
    }
    async watch(e, t, n, r, s) {
        const i = this.sessionToWatcher.get(t)?.watcher;
        if (i) {
            const a = this.transformIncoming(e, r), o = i.watch(n, a, s);
            this.watchRequests.set(t + n, o);
        }
    }
    async unwatch(e, t) {
        const n = e + t, r = this.watchRequests.get(n);
        r && (yr(r), this.watchRequests.delete(n));
    }
    dispose() {
        super.dispose();
        for (const [, e] of this.watchRequests)e.dispose();
        this.watchRequests.clear(), this.sessionToWatcher.dispose();
    }
}, g$ = class {
    constructor(e, t){
        this.watcher = e, this.emitter = t, this.listeners = 0;
    }
    dispose() {
        this.watcher.dispose(), this.emitter.dispose();
    }
}, mM = class _Le extends J {
    constructor(t, n, r, s, i){
        super(), this.uriTransformer = t, this.environmentService = s, this.watcherRequests = new Map, this.ownsFileWatcher = !i, this.fileWatcher = i ?? this._register(new FS(r)), this.registerListeners(n);
    }
    registerListeners(t) {
        const n = this._register(new N);
        this._register(n.event((r)=>{
            t.fire(r.map((s)=>({
                    resource: this.uriTransformer.transformOutgoingURI(s.resource),
                    type: s.type,
                    cId: s.cId
                })));
        })), this._register(this.fileWatcher.onDidChangeFile((r)=>{
            if (!this.ownsFileWatcher) {
                const s = [];
                for (const i of r){
                    const a = this.findSessionRequest(i);
                    if (a) {
                        const { correlationId: o } = a;
                        s.push(o === void 0 || i.cId === o ? i : {
                            ...i,
                            cId: o
                        });
                    }
                }
                if (s.length === 0) return;
                r = s;
            }
            n.fire(r);
        })), this._register(this.fileWatcher.onDidWatchError((r)=>{
            this.ownsFileWatcher && t.fire(r);
        }));
    }
    findSessionRequest(t) {
        for (const n of this.watcherRequests.values())if (t.cId === n.watchCorrelationId) {
            if (n.recursive) {
                if (St.isEqualOrParent(t.resource, n.resource)) return n;
            } else if (St.isEqual(t.resource, n.resource) || St.isEqual(St.dirname(t.resource), n.resource)) return n;
        }
    }
    getRecursiveWatcherOptions(t) {}
    getExtraExcludes(t) {}
    watch(t, n, r) {
        const s = this.getExtraExcludes(this.environmentService);
        Array.isArray(s) && (r.excludes = [
            ...r.excludes,
            ...s
        ]);
        const i = r.correlationId;
        let a = i;
        return !this.ownsFileWatcher && typeof i == "number" && (a = --_Le.SHARED_WATCHER_CORRELATION_IDS, r = {
            ...r,
            correlationId: a
        }), this.watcherRequests.set(t, {
            disposable: this.fileWatcher.watch(n, r),
            resource: x.file(GR(on(n.fsPath))),
            recursive: r.recursive,
            correlationId: i,
            watchCorrelationId: a
        }), ge(()=>{
            yr(this.watcherRequests.get(t)?.disposable), this.watcherRequests.delete(t);
        });
    }
    dispose() {
        for (const [, t] of this.watcherRequests)t.disposable.dispose();
        this.watcherRequests.clear(), super.dispose();
    }
}, mM.SHARED_WATCHER_CORRELATION_IDS = 0, f$ = mM;

}
