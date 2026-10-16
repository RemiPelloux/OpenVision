"use strict";
require.r(exports), require.d(exports, {
    EndpointError: ()=>S.c,
    awsEndpointFunctions: ()=>p,
    getUserAgentPrefix: ()=>f,
    isIpAddress: ()=>i.o,
    partition: ()=>u,
    resolveDefaultAwsRegionalEndpointsConfig: ()=>m,
    resolveEndpoint: ()=>w.s,
    setPartitionInfo: ()=>d,
    toEndpointV1: ()=>y,
    useDefaultPartitionInfo: ()=>h
});
var n = require("./module-6685.js"), s = require("./module-62340.js"), i = require("./module-3871.js");
const o = (e, t = !1)=>{
    if (t) {
        for (const t of e.split("."))if (!o(t)) return !1;
        return !0;
    }
    return !!(0, s.X)(e) && !(e.length < 3 || e.length > 63) && e === e.toLowerCase() && !(0, i.o)(e);
}, a = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-east-2":{"description":"Asia Pacific (Taipei)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"ap-southeast-6":{"description":"Asia Pacific (New Zealand)"},"ap-southeast-7":{"description":"Asia Pacific (Thailand)"},"aws-global":{"description":"aws global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"mx-central-1":{"description":"Mexico (Central)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"aws-cn global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-eusc","outputs":{"dnsSuffix":"amazonaws.eu","dualStackDnsSuffix":"api.amazonwebservices.eu","implicitGlobalRegion":"eusc-de-east-1","name":"aws-eusc","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^eusc\\\\-(de)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eusc-de-east-1":{"description":"AWS European Sovereign Cloud (Germany)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"api.aws.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"aws-iso global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"api.aws.scloud","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"aws-iso-b global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"},"us-isob-west-1":{"description":"US ISOB West"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"api.cloud-aws.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-e-global":{"description":"aws-iso-e global region"},"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"api.aws.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-f-global":{"description":"aws-iso-f global region"},"us-isof-east-1":{"description":"US ISOF EAST"},"us-isof-south-1":{"description":"US ISOF SOUTH"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"aws-us-gov global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}}],"version":"1.1"}');
let c = a, l = "";
const u = (e)=>{
    const { partitions: t } = c;
    for (const r of t){
        const { regions: t, outputs: n } = r;
        for (const [r, s] of Object.entries(t))if (r === e) return {
            ...n,
            ...s
        };
    }
    for (const r of t){
        const { regionRegex: t, outputs: n } = r;
        if (new RegExp(t).test(e)) return {
            ...n
        };
    }
    const r = t.find((e)=>"aws" === e.id);
    if (!r) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    return {
        ...r.outputs
    };
}, d = (e, t = "")=>{
    c = e, l = t;
}, h = ()=>{
    d(a, "");
}, f = ()=>l, p = {
    isVirtualHostableS3Bucket: o,
    parseArn: (e)=>{
        const t = e.split(":");
        if (t.length < 6) return null;
        const [r, n, s, i, o, ...a] = t;
        if ("arn" !== r || "" === n || "" === s || "" === a.join(":")) return null;
        return {
            partition: n,
            service: s,
            region: i,
            accountId: o,
            resourceId: a.map((e)=>e.split("/")).flat()
        };
    },
    partition: u
};
n.m.aws = p;
var g = require("./module-53043.js");
const m = (e)=>{
    if ("function" != typeof e.endpointProvider) throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
    const { endpoint: t } = e;
    return void 0 === t && (e.endpoint = async ()=>y(e.endpointProvider({
            Region: "function" == typeof e.region ? await e.region() : e.region,
            UseDualStack: "function" == typeof e.useDualstackEndpoint ? await e.useDualstackEndpoint() : e.useDualstackEndpoint,
            UseFIPS: "function" == typeof e.useFipsEndpoint ? await e.useFipsEndpoint() : e.useFipsEndpoint,
            Endpoint: void 0
        }, {
            logger: e.logger
        }))), e;
}, y = (e)=>(0, g.parseUrl)(e.url);
var w = require("./module-14074.js"), S = require("./module-93451.js");
