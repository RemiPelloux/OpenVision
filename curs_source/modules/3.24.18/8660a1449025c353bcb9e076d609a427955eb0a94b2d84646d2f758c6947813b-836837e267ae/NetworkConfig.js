import { E } from "./tslib.es6.js";
var Dke, WQu, yet;
export { Dke, WQu, yet };
var __wakaru_lgr_initialized = false;
export function lgr() {
if (__wakaru_lgr_initialized) return;
__wakaru_lgr_initialized = true;
"use strict";
E(), Dke = {
    _initialize: "initialize",
    _rgstr: "rgstr",
    _download_config_specs: "download_config_specs"
}, WQu = {
    [Dke._rgstr]: "https://prodregistryv2.org/v1",
    [Dke._initialize]: "https://featureassets.org/v1",
    [Dke._download_config_specs]: "https://api.statsigcdn.com/v1"
}, yet = {
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
