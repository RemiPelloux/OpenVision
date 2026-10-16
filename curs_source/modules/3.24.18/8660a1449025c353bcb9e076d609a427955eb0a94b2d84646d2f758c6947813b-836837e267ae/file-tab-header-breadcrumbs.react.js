import { mv } from "./editor-panel-context.react.js";
import { pP } from "./extpath.js";
import { Dnc } from "./file-tab-agent-store-breadcrumbs.js";
import { Lnc } from "./file-tree-panel-context-menu.react.js";
import { kJt } from "./file-tree-row-density.js";
import { yp } from "./glass-command-service.js";
import { AL } from "./glass-configuration-service.js";
import { hv } from "./glass-file-service.js";
import { SYe } from "./glass-file-tree-context-menu.js";
import { xd } from "./glass-workspace-context-service.js";
import { Hv } from "./glassActiveAgentService.js";
import { NB } from "./glob.js";
import { nl } from "./index.ts";
import { Mt } from "./index_197.js";
import { Ki } from "./network.js";
import { Lr, iL } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { zIs } from "./use-file-provider-change-epoch.react.js";
import { In } from "./use-service.react_2.js";
var edt, LMv, OMv;
export { LMv, OMv, edt };
var __wakaru_Z30_initialized = false;
export function Z30() {
if (__wakaru_Z30_initialized) return;
__wakaru_Z30_initialized = true;
"use strict";
E(), nl(), Mt(), pP(), NB(), Ki(), Lr(), fn(), hv(), xd(), Hv(), kJt(), zIs(), In(), yp(), AL(), SYe(), mv(), Dnc(), Lnc(), edt = {
    treePopupSurface: {
        kB7OPa: "glass-9f619",
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kzqmXN: "glass-ezivpi",
        k7Eaqz: "glass-17upfok",
        ks0D6T: "glass-1lr1uin",
        kskxy: "glass-10vn2fr",
        kAzted: "glass-2lwn1j",
        kLKAdn: "glass-exx8yu",
        kwRFfy: "glass-yri2b",
        kGO01o: "glass-18d9i69",
        kZCmMZ: "glass-1c1uobl",
        kXHlph: "glass-6ikm8r",
        kORKVm: "glass-10wlt62",
        kWkggS: "glass-1ua6jya",
        $$css: !0
    },
    treePopupFileTreeRoot: {
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kzqmXN: "glass-h8yej3",
        k7Eaqz: "glass-euugli",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        kAzted: "glass-2lwn1j",
        kskxy: "glass-mz0i5r",
        kZKoxP: "glass-5yr21d",
        $$css: !0
    },
    treePopupFileTreeScroll: {
        kzqmXN: "glass-h8yej3",
        $$css: !0
    },
    treePopupFileTreeSpacer: {
        kLKAdn: "glass-f6zju3",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-cnij5n",
        kE3dHu: "glass-43mhey",
        $$css: !0
    },
    treePopupFileTreeSticky: {
        kbCHJM: "glass-6qt6f",
        kCIrl2: "glass-7zl9wm",
        $$css: !0
    },
    treePopupFileTreeEmpty: {
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    },
    treePopupFileTreeLoading: {
        kWkggS: "glass-jbqb8w",
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    }
}, LMv = {
    root: edt.treePopupFileTreeRoot,
    scrollViewport: edt.treePopupFileTreeScroll,
    scrollContent: edt.treePopupFileTreeScroll,
    spacerContainer: edt.treePopupFileTreeSpacer,
    stickyContainer: edt.treePopupFileTreeSticky,
    empty: edt.treePopupFileTreeEmpty,
    loading: edt.treePopupFileTreeLoading
}, OMv = class {
    constructor(t, e, n, i){
        this._pathToUri = new Map, this._fileService = t, this._directoryUri = e, this._rootUri = n, this._filesExclude = i;
    }
    resolveUriFromPath(t) {
        return this._pathToUri.get(t);
    }
    async getChildren(t) {
        const e = t === null ? this._directoryUri : this._pathToUri.get(t);
        if (!e) return [];
        const i = (await this._fileService.resolve(e, {
            resolveMetadata: !1
        })).children ?? [], r = new Set(i.map((l)=>l.name)), s = this._filesExclude ? i.filter((l)=>{
            const c = iL(this._rootUri, l.resource);
            return c ? !this._filesExclude(c, l.name, (u)=>r.has(u)) : !0;
        }) : i, o = t ?? "", a = s.map((l)=>{
            const c = l.name, u = `${o}${c}${l.isDirectory ? "/" : ""}`;
            return this._pathToUri.set(u, l.resource), {
                name: c,
                path: u,
                isDirectory: l.isDirectory
            };
        });
        return a.sort((l, c)=>l.isDirectory !== c.isDirectory ? l.isDirectory ? -1 : 1 : l.name.localeCompare(c.name)), a;
    }
};

}
