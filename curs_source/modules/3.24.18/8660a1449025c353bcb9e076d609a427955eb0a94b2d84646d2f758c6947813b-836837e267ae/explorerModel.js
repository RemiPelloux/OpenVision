import { $vt, Eke, Fa, Gt, Md, Mm, Nc, Qe, Zw, tt, vmr } from "./Iwo.js";
import { bo } from "./arrays.js";
import { SM } from "./decorators.js";
import { Ecf, b$k } from "./explorerFileNestingTrie.js";
import { pP } from "./extpath.js";
import { du, gd } from "./map.js";
import { Ul, lh } from "./path_2.js";
import { Lr, Os, YR, l7 } from "./resources.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { sl } from "./ze.js";
var xcf, MIl, pBe, DIl;
export { DIl, MIl, pBe, xcf };
var __wakaru_ivs_initialized = false;
export function ivs() {
if (__wakaru_ivs_initialized) return;
__wakaru_ivs_initialized = true;
"use strict";
E(), fn(), pP(), Ul(), du(), Fa(), bo(), Qe(), SM(), Gt(), Lr(), b$k(), To(), xcf = class {
    constructor(t, e, n, i, r){
        this.contextService = t, this.uriIdentityService = e, this._onDidChangeRoots = new tt;
        const s = ()=>this._roots = this.contextService.getWorkspace().folders.map((o)=>new pBe(o.uri, n, i, r, void 0, !0, !1, !1, !1, o.name));
        s(), this._listener = this.contextService.onDidChangeWorkspaceFolders(()=>{
            s(), this._onDidChangeRoots.fire();
        });
    }
    get roots() {
        return this._roots;
    }
    get onDidChangeRoots() {
        return this._onDidChangeRoots.event;
    }
    findAll(t) {
        return Mm(this.roots.map((e)=>e.find(t)));
    }
    findClosest(t) {
        const e = this.contextService.getWorkspaceFolder(t);
        if (e) {
            const n = this.roots.find((i)=>this.uriIdentityService.extUri.isEqual(i.resource, e.uri));
            if (n) return n.find(t);
        }
        return null;
    }
    dispose() {
        Nc(this._listener);
    }
}, MIl = class m$n {
    constructor(e, n, i, r, s, o, a, l, c, u = l7(e), d, h = !1){
        this.resource = e, this.fileService = n, this.configService = i, this.filesConfigService = r, this._parent = s, this._isDirectory = o, this._isSymbolicLink = a, this._readonly = l, this._locked = c, this._name = u, this._mtime = d, this._unknown = h, this.error = void 0, this._isExcluded = !1, this.markedAsFindResult = !1, this._isDirectoryResolved = !1;
    }
    get isExcluded() {
        return this._isExcluded ? !0 : this._parent ? this._parent.isExcluded : !1;
    }
    set isExcluded(e) {
        this._isExcluded = e;
    }
    hasChildren(e) {
        return this.hasNests ? this.nestedChildren?.some((n)=>e(n)) ?? !1 : this.isDirectory;
    }
    get hasNests() {
        return !!this.nestedChildren?.length;
    }
    get isDirectoryResolved() {
        return this._isDirectoryResolved;
    }
    get isSymbolicLink() {
        return !!this._isSymbolicLink;
    }
    get isDirectory() {
        return !!this._isDirectory;
    }
    get isReadonly() {
        return this.filesConfigService.isReadonly(this.resource, {
            resource: this.resource,
            name: this.name,
            readonly: this._readonly,
            locked: this._locked
        });
    }
    get mtime() {
        return this._mtime;
    }
    get name() {
        return this._name;
    }
    get isUnknown() {
        return this._unknown;
    }
    get parent() {
        return this._parent;
    }
    get root() {
        return this._parent ? this._parent.root : this;
    }
    get children() {
        return new Map;
    }
    updateName(e) {
        this._parent?.removeChild(this), this._name = e, this._parent?.addChild(this);
    }
    getId() {
        let e = this.root.resource.toString() + "::" + this.resource.toString();
        return this.isMarkedAsFiltered() && (e += "::findFilterResult"), e;
    }
    toString() {
        return `ExplorerItem: ${this.name}`;
    }
    get isRoot() {
        return this === this.root;
    }
    static create(e, n, i, r, s, o) {
        const a = new m$n(r.resource, e, n, i, s, r.isDirectory, r.isSymbolicLink, r.readonly, r.locked, r.name, r.mtime, !r.isFile && !r.isDirectory);
        if (a.isDirectory && (a._isDirectoryResolved = !!r.children || !!o && o.some((l)=>YR(l, a.resource)), r.children)) for(let l = 0, c = r.children.length; l < c; l++){
            const u = m$n.create(e, n, i, r.children[l], a, o);
            a.addChild(u);
        }
        return a;
    }
    static mergeLocalWithDisk(e, n) {
        if (e.resource.toString() !== n.resource.toString()) return;
        const i = e.isDirectory || n.isDirectory;
        if (!(i && n._isDirectoryResolved && !e._isDirectoryResolved) && (n.resource = e.resource, n.isRoot || n.updateName(e.name), n._isDirectory = e.isDirectory, n._mtime = e.mtime, n._isDirectoryResolved = e._isDirectoryResolved, n._isSymbolicLink = e.isSymbolicLink, n.error = e.error, i && e._isDirectoryResolved)) {
            const r = new gd;
            n.children.forEach((s)=>{
                r.set(s.resource, s);
            }), n.children.clear(), e.children.forEach((s)=>{
                const o = r.get(s.resource);
                o ? (m$n.mergeLocalWithDisk(s, o), n.addChild(o), r.delete(s.resource)) : n.addChild(s);
            }), r.forEach((s)=>{
                s instanceof DIl && n.addChild(s);
            });
        }
    }
    addChild(e) {
        e._parent = this, e.updateResource(!1), this.children.set(this.getPlatformAwareName(e.name), e);
    }
    getChild(e) {
        return this.children.get(this.getPlatformAwareName(e));
    }
    fetchChildren(e) {
        const n = this.configService.getValue({
            resource: this.root.resource
        }).explorer.fileNesting;
        return n.enabled && this.nestedChildren ? this.nestedChildren : (async ()=>{
            if (!this._isDirectoryResolved) {
                const r = e === "modified";
                this.error = void 0;
                try {
                    const s = await this.fileService.resolve(this.resource, {
                        resolveSingleChildDescendants: !0,
                        resolveMetadata: r
                    }), o = m$n.create(this.fileService, this.configService, this.filesConfigService, s, this);
                    m$n.mergeLocalWithDisk(o, this);
                } catch (s) {
                    throw this.error = s, s;
                }
                this._isDirectoryResolved = !0;
            }
            const i = [];
            if (n.enabled) {
                const r = [], s = [];
                for (const a of this.children.entries())a[1].nestedParent = void 0, a[1].isDirectory ? s.push(a) : r.push(a);
                const o = this.fileNester.nest(r.map(([a])=>a), this.getPlatformAwareName(this.name));
                for (const [a, l] of r){
                    const c = o.get(a);
                    if (c !== void 0) {
                        l.nestedChildren = [];
                        for (const u of c.keys()){
                            const d = Md(this.children.get(u));
                            l.nestedChildren.push(d), d.nestedParent = l;
                        }
                        i.push(l);
                    } else l.nestedChildren = void 0;
                }
                for (const [a, l] of s.values())i.push(l);
            } else this.children.forEach((r)=>{
                i.push(r);
            });
            return i;
        })();
    }
    get fileNester() {
        if (!this.root._fileNester) {
            const e = this.configService.getValue({
                resource: this.root.resource
            }).explorer.fileNesting, n = Object.entries(e.patterns).filter((i)=>typeof i[0] == "string" && typeof i[1] == "string" && i[0] && i[1]).map(([i, r])=>[
                    this.getPlatformAwareName(i.trim()),
                    r.split(",").map((s)=>this.getPlatformAwareName(s.trim().replace(/\u200b/g, "").trim())).filter((s)=>s !== "")
                ]);
            this.root._fileNester = new Ecf(n);
        }
        return this.root._fileNester;
    }
    removeChild(e) {
        this.nestedChildren = void 0, this.children.delete(this.getPlatformAwareName(e.name));
    }
    forgetChildren() {
        this.children.clear(), this.nestedChildren = void 0, this._isDirectoryResolved = !1, this._fileNester = void 0;
    }
    getPlatformAwareName(e) {
        return this.fileService.hasCapability(this.resource, 1024) ? e : e.toLowerCase();
    }
    move(e) {
        this.nestedParent?.removeChild(this), this._parent?.removeChild(this), e.removeChild(this), e.addChild(this), this.updateResource(!0);
    }
    updateResource(e) {
        this._parent && (this.resource = Os(this._parent.resource, this.name)), e && this.isDirectory && this.children.forEach((n)=>{
            n.updateResource(!0);
        });
    }
    rename(e) {
        this.updateName(e.name), this._mtime = e.mtime, this.updateResource(!0);
    }
    find(e) {
        const n = !this.fileService.hasCapability(e, 1024);
        return e && this.resource.scheme === e.scheme && Zw(this.resource.authority, e.authority) && (n ? $vt(e.path, this.resource.path) : e.path.startsWith(this.resource.path)) ? this.findByPath(Eke(e.path, lh.sep), this.resource.path.length, n) : null;
    }
    findByPath(e, n, i) {
        if (vmr(Eke(this.resource.path, lh.sep), e, i)) return this;
        if (this.isDirectory) {
            for(; n < e.length && e[n] === lh.sep;)n++;
            let r = e.indexOf(lh.sep, n);
            r === -1 && (r = e.length);
            const s = e.substring(n, r), o = this.children.get(this.getPlatformAwareName(s));
            if (o) return o.findByPath(e, r, i);
        }
        return null;
    }
    isMarkedAsFiltered() {
        return this.markedAsFindResult;
    }
    markItemAndParentsAsFiltered() {
        this.markedAsFindResult = !0, this.parent?.markItemAndParentsAsFiltered();
    }
    unmarkItemAndChildren() {
        this.markedAsFindResult = !1, this.children.forEach((e)=>e.unmarkItemAndChildren());
    }
}, Re([
    sl
], MIl.prototype, "children", null), pBe = MIl, DIl = class extends pBe {
    constructor(t, e, n, i, r){
        super(rt.file(""), t, e, n, i, r), this._isDirectoryResolved = !0;
    }
};

}
