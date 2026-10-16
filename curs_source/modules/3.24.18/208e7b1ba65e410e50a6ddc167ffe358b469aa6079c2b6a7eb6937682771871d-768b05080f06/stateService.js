import { le, pa } from "./async.js";
import { ae, it } from "./buffer.js";
import { Sr, aa } from "./configurationRegistry.js";
import { Fr, si } from "./environment.js";
import { Wt, cn } from "./files.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
var r7, Vk, DI;
export { DI, Vk, r7 };
var __wakaru_s7_initialized = false;
export function s7() {
if (__wakaru_s7_initialized) return;
__wakaru_s7_initialized = true;
"use strict";
h(), le(), it(), j(), Ze(), Fr(), Wt(), te(), r7 = class extends J {
    constructor(e, t, n, r){
        super(), this.storagePath = e, this.logService = n, this.fileService = r, this.storage = Object.create(null), this.lastSavedStorageContents = "", this.initializing = void 0, this.closing = void 0, this.flushDelayer = this._register(new pa(t === 0 ? 0 : 100));
    }
    init() {
        return this.initializing || (this.initializing = this.doInit()), this.initializing;
    }
    async doInit() {
        try {
            this.lastSavedStorageContents = (await this.fileService.readFile(this.storagePath)).value.toString(), this.storage = JSON.parse(this.lastSavedStorageContents);
        } catch (e) {
            e.fileOperationResult !== 1 && this.logService.error(e);
        }
    }
    getItem(e, t) {
        const n = this.storage[e];
        return Sr(n) ? t : n;
    }
    setItem(e, t) {
        this.setItems([
            {
                key: e,
                data: t
            }
        ]);
    }
    setItems(e) {
        let t = !1;
        for (const { key: n, data: r } of e)this.storage[n] !== r && (Sr(r) ? aa(this.storage[n]) || (this.storage[n] = void 0, t = !0) : (this.storage[n] = r, t = !0));
        t && this.save();
    }
    removeItem(e) {
        aa(this.storage[e]) || (this.storage[e] = void 0, this.save());
    }
    async save() {
        if (!this.closing) return this.flushDelayer.trigger(()=>this.doSave());
    }
    async doSave() {
        if (!this.initializing) return;
        await this.initializing;
        const e = JSON.stringify(this.storage, null, 4);
        if (e !== this.lastSavedStorageContents) try {
            await this.fileService.writeFile(this.storagePath, ae.fromString(e), {
                atomic: {
                    postfix: ".vsctmp"
                }
            }), this.lastSavedStorageContents = e;
        } catch (t) {
            this.logService.error(t);
        }
    }
    async close() {
        return this.closing || (this.closing = this.flushDelayer.trigger(()=>this.doSave(), 0)), this.closing;
    }
}, Vk = class extends J {
    constructor(e, t, n, r){
        super(), this.fileStorage = this._register(new r7(t.stateResource, e, n, r));
    }
    async init() {
        await this.fileStorage.init();
    }
    getItem(e, t) {
        return this.fileStorage.getItem(e, t);
    }
}, Vk = B([
    w(1, si),
    w(2, Z),
    w(3, cn)
], Vk), DI = class extends Vk {
    setItem(e, t) {
        this.fileStorage.setItem(e, t);
    }
    setItems(e) {
        this.fileStorage.setItems(e);
    }
    removeItem(e) {
        this.fileStorage.removeItem(e);
    }
    close() {
        return this.fileStorage.close();
    }
};

}
