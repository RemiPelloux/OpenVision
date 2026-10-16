import { S } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { ba } from "./path_2.js";
import { vn } from "./qIc.js";
import { Li, jr } from "./resources.js";
import { J9, gJ } from "./ternarySearchTree.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var Jn, p2c, cW, m2c, ivi, vJ, Bge, g2c, f2c, v2c;
export { Bge, Jn, cW, f2c, g2c, ivi, m2c, p2c, v2c, vJ };
var __wakaru_ci_initialized = false;
export function ci() {
if (__wakaru_ci_initialized) return;
__wakaru_ci_initialized = true;
"use strict";
x(), rt(), ba(), gJ(), Li(), Qt(), Ze(), li(), Jn = vn("contextService"), p2c = {
    id: "ext-dev"
}, cW = {
    id: "empty-window"
}, m2c = class {
    constructor(e, t, n, i, r){
        this._id = e, this._transient = n, this._configuration = i, this.ignorePathCasing = r, this.foldersMap = J9.forUris(this.ignorePathCasing, ()=>!0), this.folders = t;
    }
    get folders() {
        return this._folders;
    }
    set folders(e) {
        this._folders = e, this.updateFoldersMap();
    }
    update(e) {
        this._id = e.id, this._configuration = e.configuration, this._transient = e.transient, this.ignorePathCasing = e.ignorePathCasing, this.folders = e.folders;
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
    set configuration(e) {
        this._configuration = e;
    }
    getFolder(e) {
        return e && this.foldersMap.findSubstr(e) || null;
    }
    updateFoldersMap() {
        this.foldersMap = J9.forUris(this.ignorePathCasing, ()=>!0);
        for (const e of this.folders)this.foldersMap.set(e.uri, e);
    }
    toJSON() {
        return {
            id: this.id,
            folders: this.folders,
            transient: this.transient,
            configuration: this.configuration
        };
    }
}, ivi = class {
    constructor(e, t){
        this.raw = t, this.uri = e.uri, this.index = e.index, this.name = e.name;
    }
    toResource(e) {
        return jr(this.uri, e);
    }
    toJSON() {
        return {
            uri: this.uri,
            name: this.name,
            index: this.index
        };
    }
}, vJ = "code-workspace", Bge = `.${vJ}`, g2c = [
    {
        name: S(2692, null),
        extensions: [
            vJ
        ]
    }
], f2c = "workspace.json", v2c = "4064f6ec-cb38-4ad0-af64-ee6467e63c82";

}
