import { Se, bt, ve, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ABn, fLh;
export { ABn, fLh };
var __wakaru_itr_initialized = false;
export function itr() {
if (__wakaru_itr_initialized) return;
__wakaru_itr_initialized = true;
"use strict";
x(), bt(), Se(), Ze(), Pn(), ABn = pd("browserScreenshotService"), fLh = class extends we {
    constructor(){
        super(...arguments), this.screenshots = new Map, this.composerToViewId = new Map, this._onScreenshotUpdate = this._register(new ve), this.onScreenshotUpdate = this._onScreenshotUpdate.event;
    }
    getLatestScreenshot(e) {
        return this.screenshots.get(e);
    }
    getViewIdsWithScreenshots() {
        return Array.from(this.screenshots.keys());
    }
    updateScreenshot(e, t, n) {
        const i = {
            viewId: e,
            screenshotData: t,
            timestamp: Date.now(),
            url: n
        };
        this.screenshots.set(e, i), this._onScreenshotUpdate.fire(i);
    }
    clearScreenshot(e) {
        this.screenshots.delete(e);
    }
    registerComposerViewId(e, t) {
        this.composerToViewId.set(e, t);
    }
    getViewIdForComposer(e) {
        return this.composerToViewId.get(e);
    }
}, mn(ABn, fLh, 2, 1);

}
