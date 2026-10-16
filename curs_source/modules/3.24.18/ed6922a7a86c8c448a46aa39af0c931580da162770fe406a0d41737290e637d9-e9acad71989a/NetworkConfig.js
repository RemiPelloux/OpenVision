import { x } from "./tslib.es6.js";
var bde, ifd, Q4e;
export { Q4e, bde, ifd };
var __wakaru_iHi_initialized = false;
export function iHi() {
if (__wakaru_iHi_initialized) return;
__wakaru_iHi_initialized = true;
"use strict";
x(), bde = {
    _initialize: "initialize",
    _rgstr: "rgstr",
    _download_config_specs: "download_config_specs"
}, ifd = {
    [bde._rgstr]: "https://prodregistryv2.org/v1",
    [bde._initialize]: "https://featureassets.org/v1",
    [bde._download_config_specs]: "https://api.statsigcdn.com/v1"
}, Q4e = {
    EventCount: "ec",
    SdkKey: "k",
    SdkType: "st",
    SdkVersion: "sv",
    Time: "t",
    SessionID: "sid",
    StatsigEncoded: "se",
    IsGzipped: "gz"
};

}
