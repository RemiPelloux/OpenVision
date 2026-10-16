import { J, j } from "./lifecycle.js";
import { $, $e, Jt, xm } from "./network.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { protocol as PXe } from "electron";
var ZO, yge;
export { ZO, yge };
var __wakaru_NXe_initialized = false;
export function NXe() {
if (__wakaru_NXe_initialized) return;
__wakaru_NXe_initialized = true;
"use strict";
h(), j(), $e(), ye(), ZO = class kLe extends J {
    constructor(){
        super();
        const t = this.handleWebviewRequest.bind(this);
        PXe.registerFileProtocol($.vscodeWebview, t);
    }
    handleWebviewRequest(t, n) {
        try {
            const r = x.parse(t.url), s = kLe.validWebviewFilePaths.get(r.path);
            if (typeof s == "string") {
                const i = `vs/workbench/contrib/webview/browser/pre/${s}`, a = Jt.asFileUri(i);
                return n({
                    path: a.fsPath,
                    headers: {
                        ...xm.getHeadersFromQuery(t.url),
                        "Cross-Origin-Resource-Policy": "cross-origin"
                    }
                });
            } else return n({
                error: -10
            });
        } catch  {}
        return n({
            error: -2
        });
    }
}, ZO.validWebviewFilePaths = new Map([
    [
        "/index.html",
        "index.html"
    ],
    [
        "/fake.html",
        "fake.html"
    ],
    [
        "/service-worker.js",
        "service-worker.js"
    ]
]), yge = ZO;

}
