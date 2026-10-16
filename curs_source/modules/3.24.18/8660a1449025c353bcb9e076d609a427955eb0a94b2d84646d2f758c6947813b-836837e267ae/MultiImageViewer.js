import { IZg } from "./MultiImageViewer.react.js";
import { EZg, Gr, Ok, aS } from "./Ycg.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ee } from "./ze.js";
var xZg, AZg;
export { AZg, xZg };
var __wakaru_S5k_initialized = false;
export function S5k() {
if (__wakaru_S5k_initialized) return;
__wakaru_S5k_initialized = true;
"use strict";
E(), at(), aS(), vo(), IZg(), xZg = Ok(EZg), AZg = (t)=>{
    const e = Gr(), n = {
        adminSettingsService: e.adminSettingsService,
        aiService: e.aiService,
        clipboardService: e.clipboardService,
        cursorAuthenticationService: e.cursorAuthenticationService,
        cursorCredsService: e.cursorCredsService,
        fileDialogService: e.fileDialogService,
        fileService: e.fileService,
        notificationService: e.notificationService,
        storageService: e.storageService
    };
    return Ee(xZg, {
        get bcId () {
            return t.bcId;
        },
        get enableDrawing () {
            return t.enableDrawing;
        },
        get images () {
            return t.images;
        },
        get initialIndex () {
            return t.initialIndex;
        },
        get isOpen () {
            return t.isOpen;
        },
        get onClose () {
            return t.onClose;
        },
        get onSaveDrawing () {
            return t.onSaveDrawing;
        },
        get portalRoot () {
            return e.portalElement;
        },
        services: n
    });
};

}
