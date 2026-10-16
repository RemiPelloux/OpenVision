import { Ydn, s_t } from "./Hashing.js";
import { Dke, WQu, lgr } from "./NetworkConfig.js";
import { E } from "./tslib.es6.js";
var JQu, nEo;
export { JQu, nEo };
var __wakaru_eJu_initialized = false;
export function eJu() {
if (__wakaru_eJu_initialized) return;
__wakaru_eJu_initialized = true;
"use strict";
E(), Ydn(), lgr(), JQu = {
    [Dke._initialize]: "i",
    [Dke._rgstr]: "e",
    [Dke._download_config_specs]: "d"
}, nEo = class {
    constructor(t, e, n, i){
        this.customUrl = null, this.fallbackUrls = null, this.endpoint = t, this.endpointDnsKey = JQu[t], e && (this.customUrl = e), !e && n && (this.customUrl = n.endsWith("/") ? `${n}${t}` : `${n}/${t}`), i && (this.fallbackUrls = i);
        const r = WQu[t];
        this.defaultUrl = `${r}/${t}`;
    }
    getUrl() {
        return this.customUrl ?? this.defaultUrl;
    }
    getChecksum() {
        const t = (this.fallbackUrls ?? []).sort().join(",");
        return s_t(this.customUrl + t);
    }
};

}
