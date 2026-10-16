import { D } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Ul } from "./path_2.js";
import { Lr, Os } from "./resources.js";
import { Xq, wve } from "./ternarySearchTree.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var yr, wed, RI, zEo, Ced, Lgr, Lde, WOe, VEo, Ted, Eed;
export { Ced, Eed, Lde, Lgr, RI, Ted, VEo, WOe, wed, yr, zEo };
var __wakaru_Sr_initialized = false;
export function Sr() {
if (__wakaru_Sr_initialized) return;
__wakaru_Sr_initialized = true;
"use strict";
E(), Bt(), Ul(), wve(), Lr(), fn(), It(), Ki(), yr = jn("contextService"), wed = {
    id: "ext-dev"
}, RI = {
    id: "empty-window"
}, zEo = ((t)=>(t[t.EMPTY = 1] = "EMPTY", t[t.FOLDER = 2] = "FOLDER", t[t.WORKSPACE = 3] = "WORKSPACE", t))(zEo || {}), Ced = class {
    constructor(t, e, n, i, r){
        this._id = t, this._transient = n, this._configuration = i, this.ignorePathCasing = r, this.foldersMap = Xq.forUris(this.ignorePathCasing, ()=>!0), this.folders = e;
    }
    get folders() {
        return this._folders;
    }
    set folders(t) {
        this._folders = t, this.updateFoldersMap();
    }
    update(t) {
        this._id = t.id, this._configuration = t.configuration, this._transient = t.transient, this.ignorePathCasing = t.ignorePathCasing, this.folders = t.folders;
    }
    get id() {
        return this._id;
    }
    get transient() {
        return this._transient;
    }
    get configuration() {
        return this._configuration;
    }
    set configuration(t) {
        this._configuration = t;
    }
    getFolder(t) {
        return t && this.foldersMap.findSubstr(t) || null;
    }
    updateFoldersMap() {
        this.foldersMap = Xq.forUris(this.ignorePathCasing, ()=>!0);
        for (const t of this.folders)this.foldersMap.set(t.uri, t);
    }
    toJSON() {
        return {
            id: this.id,
            folders: this.folders,
            transient: this.transient,
            configuration: this.configuration
        };
    }
}, Lgr = class {
    constructor(t, e){
        this.raw = e, this.uri = t.uri, this.index = t.index, this.name = t.name;
    }
    toResource(t) {
        return Os(this.uri, t);
    }
    toJSON() {
        return {
            uri: this.uri,
            name: this.name,
            index: this.index
        };
    }
}, Lde = "code-workspace", WOe = `.${Lde}`, VEo = [
    {
        name: D(2692, null),
        extensions: [
            Lde
        ]
    }
], Ted = "workspace.json", Eed = "4064f6ec-cb38-4ad0-af64-ee6467e63c82";

}
