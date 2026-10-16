import { Se, we } from "./HVr.js";
import { en } from "./dom_2.js";
import { Q9, tb } from "./mime.js";
import { Xt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mts, yD;
export { Mts, yD };
var __wakaru_jK_initialized = false;
export function jK() {
if (__wakaru_jK_initialized) return;
__wakaru_jK_initialized = true;
"use strict";
x(), en(), Se(), Q9(), Mts = class extends we {
    constructor(e, t){
        super(), this._register(Xt(e, "dragover", (n)=>{
            n.preventDefault(), this.timeout || (this.timeout = setTimeout(()=>{
                t(), this.timeout = null;
            }, 800));
        })), [
            "dragleave",
            "drop",
            "dragend"
        ].forEach((n)=>{
            this._register(Xt(e, n, ()=>{
                this.clearDragTimeout();
            }));
        });
    }
    clearDragTimeout() {
        this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    }
    dispose() {
        super.dispose(), this.clearDragTimeout();
    }
}, yD = {
    RESOURCES: "ResourceURLs",
    DOWNLOAD_URL: "DownloadURL",
    FILES: "Files",
    TEXT: tb.text,
    INTERNAL_URI_LIST: "application/vnd.code.uri-list"
};

}
