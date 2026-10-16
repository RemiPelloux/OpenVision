import { N, ge, se } from "./event.js";
import { G0, V0, l6 } from "./fileService.js";
import { Wt } from "./files.js";
import { J, j } from "./lifecycle.js";
import { mr, tR } from "./map.js";
import { fa, lc } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
var I9e;
export { I9e };
var __wakaru_Blt_initialized = false;
export function Blt() {
if (__wakaru_Blt_initialized) return;
__wakaru_Blt_initialized = true;
"use strict";
h(), se(), j(), Wt(), lc(), mr(), I9e = class extends J {
    constructor(e, t, n, r, s, i){
        super(), this.fileSystemScheme = e, this.fileSystemProvider = t, this.userDataScheme = n, this.userDataProfilesService = r, this.uriIdentityService = s, this.logService = i, this.capabilities = G0(this.fileSystemProvider) ? this.fileSystemProvider.capabilities : this.fileSystemProvider.capabilities & -262145, this.onDidChangeCapabilities = this.fileSystemProvider.onDidChangeCapabilities, this._onDidChangeFile = this._register(new N), this.onDidChangeFile = this._onDidChangeFile.event, this.watchResources = fa.forUris(()=>!(this.capabilities & 1024)), this.atomicReadWriteResources = new tR((a)=>this.uriIdentityService.extUri.getComparisonKey(this.toFileSystemResource(a))), this.updateAtomicReadWritesResources(), this._register(r.onDidChangeProfiles(()=>this.updateAtomicReadWritesResources())), this._register(this.fileSystemProvider.onDidChangeFile((a)=>this.handleFileChanges(a)));
    }
    updateAtomicReadWritesResources() {
        this.atomicReadWriteResources.clear();
        for (const e of this.userDataProfilesService.profiles)this.atomicReadWriteResources.add(e.settingsResource), this.atomicReadWriteResources.add(e.keybindingsResource), this.atomicReadWriteResources.add(e.tasksResource), this.atomicReadWriteResources.add(e.extensionsResource);
    }
    open(e, t) {
        return this.fileSystemProvider.open(this.toFileSystemResource(e), t);
    }
    close(e) {
        return this.fileSystemProvider.close(e);
    }
    read(e, t, n, r, s) {
        return this.fileSystemProvider.read(e, t, n, r, s);
    }
    write(e, t, n, r, s) {
        return this.fileSystemProvider.write(e, t, n, r, s);
    }
    watch(e, t) {
        this.watchResources.set(e, e);
        const n = this.fileSystemProvider.watch(this.toFileSystemResource(e), t);
        return ge(()=>{
            this.watchResources.delete(e), n.dispose();
        });
    }
    stat(e) {
        return this.fileSystemProvider.stat(this.toFileSystemResource(e));
    }
    mkdir(e) {
        return this.fileSystemProvider.mkdir(this.toFileSystemResource(e));
    }
    rename(e, t, n) {
        return this.fileSystemProvider.rename(this.toFileSystemResource(e), this.toFileSystemResource(t), n);
    }
    readFile(e, t) {
        return this.fileSystemProvider.readFile(this.toFileSystemResource(e), t);
    }
    readFileStream(e, t, n) {
        return this.fileSystemProvider.readFileStream(this.toFileSystemResource(e), t, n);
    }
    readdir(e) {
        return this.fileSystemProvider.readdir(this.toFileSystemResource(e));
    }
    readdirWithMetadata(e) {
        if (G0(this.fileSystemProvider)) return this.fileSystemProvider.readdirWithMetadata(this.toFileSystemResource(e));
        throw new Error("readdirWithMetadata not supported");
    }
    enforceAtomicReadFile(e) {
        return this.atomicReadWriteResources.has(e);
    }
    writeFile(e, t, n) {
        return this.fileSystemProvider.writeFile(this.toFileSystemResource(e), t, n);
    }
    enforceAtomicWriteFile(e) {
        return this.atomicReadWriteResources.has(e) ? {
            postfix: ".vsctmp"
        } : !1;
    }
    delete(e, t) {
        return this.fileSystemProvider.delete(this.toFileSystemResource(e), t);
    }
    copy(e, t, n) {
        if (V0(this.fileSystemProvider)) return this.fileSystemProvider.copy(this.toFileSystemResource(e), this.toFileSystemResource(t), n);
        throw new Error("copy not supported");
    }
    cloneFile(e, t) {
        if (l6(this.fileSystemProvider)) return this.fileSystemProvider.cloneFile(this.toFileSystemResource(e), this.toFileSystemResource(t));
        throw new Error("clone not supported");
    }
    handleFileChanges(e) {
        const t = [];
        for (const n of e){
            if (n.resource.scheme !== this.fileSystemScheme) continue;
            const r = this.toUserDataResource(n.resource);
            this.watchResources.findSubstr(r) && t.push({
                resource: r,
                type: n.type,
                cId: n.cId
            });
        }
        t.length && (this.logService.debug("User data changed"), this._onDidChangeFile.fire(t));
    }
    toFileSystemResource(e) {
        return e.with({
            scheme: this.fileSystemScheme
        });
    }
    toUserDataResource(e) {
        return e.with({
            scheme: this.userDataScheme
        });
    }
};

}
