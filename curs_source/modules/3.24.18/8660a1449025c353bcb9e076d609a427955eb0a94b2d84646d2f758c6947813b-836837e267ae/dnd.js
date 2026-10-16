import { Qe, st } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { Jk, tB } from "./mime.js";
import { E } from "./tslib.es6.js";
import { li } from "./ze.js";
var BHd, r6;
export { BHd, r6 };
var __wakaru_fwe_initialized = false;
export function fwe() {
if (__wakaru_fwe_initialized) return;
__wakaru_fwe_initialized = true;
"use strict";
E(), Hn(), Qe(), tB(), BHd = class extends st {
    constructor(t, e){
        super(), this._register(li(t, "dragover", (n)=>{
            n.preventDefault(), this.timeout || (this.timeout = setTimeout(()=>{
                e(), this.timeout = null;
            }, 800));
        })), [
            "dragleave",
            "drop",
            "dragend"
        ].forEach((n)=>{
            this._register(li(t, n, ()=>{
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
}, r6 = {
    RESOURCES: "ResourceURLs",
    DOWNLOAD_URL: "DownloadURL",
    FILES: "Files",
    TEXT: Jk.text,
    INTERNAL_URI_LIST: "application/vnd.code.uri-list"
};

}
