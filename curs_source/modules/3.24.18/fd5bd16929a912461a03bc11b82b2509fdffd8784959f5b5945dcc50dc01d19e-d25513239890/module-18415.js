"use strict";
require.r(exports), require.d(exports, {
    NODE_REGION_CONFIG_FILE_OPTIONS: ()=>i.zH,
    NODE_REGION_CONFIG_OPTIONS: ()=>i.GG,
    REGION_ENV_NAME: ()=>i.Fc,
    REGION_INI_NAME: ()=>i.OR,
    getAwsRegionExtensionConfiguration: ()=>n,
    resolveAwsRegionExtensionConfiguration: ()=>s,
    resolveRegionConfig: ()=>o.T,
    stsRegionDefaultResolver: ()=>c,
    warning: ()=>l
});
const n = (e)=>({
        setRegion (t) {
            e.region = t;
        },
        region: ()=>e.region
    }), s = (e)=>({
        region: e.region()
    });
var i = require("./module-24060.js"), o = require("./module-77654.js"), a = require("./module-74935.js");
function c(e = {}) {
    return (0, a.Z)({
        ...i.GG,
        default: async ()=>(l.silence || console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly."), "us-east-1")
    }, {
        ...i.zH,
        ...e
    });
}
const l = {
    silence: !1
};
