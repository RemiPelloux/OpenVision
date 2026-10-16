import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var dxi, t1g;
export { dxi, t1g };
var __wakaru_Fls_initialized = false;
export function Fls() {
if (__wakaru_Fls_initialized) return;
__wakaru_Fls_initialized = true;
"use strict";
E(), Gt(), Qe(), It(), Rn(), dxi = Il("browserScreenshotService"), t1g = class extends st {
    constructor(){
        super(...arguments), this.screenshots = new Map, this.composerToViewId = new Map, this._onScreenshotUpdate = this._register(new tt), this.onScreenshotUpdate = this._onScreenshotUpdate.event;
    }
    getLatestScreenshot(t) {
        return this.screenshots.get(t);
    }
    getViewIdsWithScreenshots() {
        return Array.from(this.screenshots.keys());
    }
    updateScreenshot(t, e, n) {
        const i = {
            viewId: t,
            screenshotData: e,
            timestamp: Date.now(),
            url: n
        };
        this.screenshots.set(t, i), this._onScreenshotUpdate.fire(i);
    }
    clearScreenshot(t) {
        this.screenshots.delete(t);
    }
    registerComposerViewId(t, e) {
        this.composerToViewId.set(t, e);
    }
    getViewIdForComposer(t) {
        return this.composerToViewId.get(t);
    }
}, bn(dxi, t1g, 2, 1);

}
