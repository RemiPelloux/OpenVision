import { AJe, vHt } from "./Hashing.js";
import { bde, iHi, ifd } from "./NetworkConfig.js";
import { x } from "./tslib.es6.js";
var pfd, Tto;
export { Tto, pfd };
var __wakaru_mfd_initialized = false;
export function mfd() {
if (__wakaru_mfd_initialized) return;
__wakaru_mfd_initialized = true;
"use strict";
x(), vHt(), iHi(), pfd = {
    [bde._initialize]: "i",
    [bde._rgstr]: "e",
    [bde._download_config_specs]: "d"
}, Tto = class {
    constructor(e, t, n, i){
        this.customUrl = null, this.fallbackUrls = null, this.endpoint = e, this.endpointDnsKey = pfd[e], t && (this.customUrl = t), !t && n && (this.customUrl = n.endsWith("/") ? `${n}${e}` : `${n}/${e}`), i && (this.fallbackUrls = i);
        const r = ifd[e];
        this.defaultUrl = `${r}/${e}`;
    }
    getUrl() {
        return this.customUrl ?? this.defaultUrl;
    }
    getChecksum() {
        const e = (this.fallbackUrls ?? []).sort().join(",");
        return AJe(this.customUrl + e);
    }
};

}
