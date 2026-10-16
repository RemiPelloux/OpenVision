require.d(exports, {
    ENV_CMDS_FULL_URI: ()=>p,
    ENV_CMDS_RELATIVE_URI: ()=>g,
    fromContainerMetadata: ()=>m,
    fromInstanceMetadata: ()=>$,
    getInstanceMetadataEndpoint: ()=>T,
    httpRequest: ()=>c
});
var r = require(61178), o = require(87016), a = require(75504), s = require(20181), i = require(58611);
function c(e) {
    return new Promise((t, n)=>{
        const r = (0, i.request)({
            method: "GET",
            ...e,
            hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1")
        });
        r.on("error", (e)=>{
            n(Object.assign(new a.m("Unable to connect to instance metadata service"), e)), r.destroy();
        }), r.on("timeout", ()=>{
            n(new a.m("TimeoutError from instance metadata service")), r.destroy();
        }), r.on("response", (e)=>{
            const { statusCode: o = 400 } = e;
            (o < 200 || 300 <= o) && (n(Object.assign(new a.m("Error response received from instance metadata service"), {
                statusCode: o
            })), r.destroy());
            const i = [];
            e.on("data", (e)=>{
                i.push(e);
            }), e.on("end", ()=>{
                t(s.Buffer.concat(i)), r.destroy();
            });
        }), r.end();
    });
}
const l = (e)=>Boolean(e) && "object" == typeof e && "string" == typeof e.AccessKeyId && "string" == typeof e.SecretAccessKey && "string" == typeof e.Token && "string" == typeof e.Expiration, d = (e)=>({
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        sessionToken: e.Token,
        expiration: new Date(e.Expiration),
        ...e.AccountId && {
            accountId: e.AccountId
        }
    }), u = ({ maxRetries: e = 0, timeout: t = 1e3 })=>({
        maxRetries: e,
        timeout: t
    }), f = (e, t)=>{
    let n = e();
    for(let r = 0; r < t; r++)n = n.catch(e);
    return n;
}, p = "AWS_CONTAINER_CREDENTIALS_FULL_URI", g = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", h = "AWS_CONTAINER_AUTHORIZATION_TOKEN", m = (e = {})=>{
    const { timeout: t, maxRetries: n } = u(e);
    return ()=>f(async ()=>{
            const n = await E({
                logger: e.logger
            }), o = JSON.parse(await v(t, n));
            if (!l(o)) throw new r.C("Invalid response received from instance metadata service.", {
                logger: e.logger
            });
            return d(o);
        }, n);
}, v = async (e, t)=>{
    process.env[h] && (t.headers = {
        ...t.headers,
        Authorization: process.env[h]
    });
    return (await c({
        ...t,
        timeout: e
    })).toString();
}, w = {
    localhost: !0,
    "127.0.0.1": !0
}, y = {
    "http:": !0,
    "https:": !0
}, E = async ({ logger: e })=>{
    if (process.env[g]) return {
        hostname: "169.254.170.2",
        path: process.env[g]
    };
    if (process.env[p]) {
        const t = (0, o.parse)(process.env[p]);
        if (!t.hostname || !(t.hostname in w)) throw new r.C(`${t.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: !1,
            logger: e
        });
        if (!t.protocol || !(t.protocol in y)) throw new r.C(`${t.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: !1,
            logger: e
        });
        return {
            ...t,
            port: t.port ? parseInt(t.port, 10) : void 0
        };
    }
    throw new r.C(`The container metadata credential provider cannot be used unless the ${g} or ${p} environment variable is set`, {
        tryNextLink: !1,
        logger: e
    });
};
var I = require("./module-74935.js");
class A extends r.C {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e, t = !0){
        super(e, t), this.tryNextLink = t, Object.setPrototypeOf(this, A.prototype);
    }
}
var _, S = require("./module-53043.js");
!function(e) {
    e.IPv4 = "http://169.254.169.254", e.IPv6 = "http://[fd00:ec2::254]";
}(_ || (_ = {}));
const C = {
    environmentVariableSelector: (e)=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT,
    configFileSelector: (e)=>e.ec2_metadata_service_endpoint,
    default: void 0
};
var b;
!function(e) {
    e.IPv4 = "IPv4", e.IPv6 = "IPv6";
}(b || (b = {}));
const R = {
    environmentVariableSelector: (e)=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,
    configFileSelector: (e)=>e.ec2_metadata_service_endpoint_mode,
    default: b.IPv4
}, T = async ()=>(0, S.parseUrl)(await N() || await O()), N = async ()=>(0, I.Z)(C)(), O = async ()=>{
    const e = await (0, I.Z)(R)();
    switch(e){
        case b.IPv4:
            return _.IPv4;
        case b.IPv6:
            return _.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(b)}`);
    }
}, x = (e, t)=>{
    const n = 300 + Math.floor(300 * Math.random()), r = new Date(Date.now() + 1e3 * n);
    t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(r)}.\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
    const o = e.originalExpiration ?? e.expiration;
    return {
        ...e,
        ...o ? {
            originalExpiration: o
        } : {},
        expiration: r
    };
}, D = "/latest/meta-data/iam/security-credentials/", F = "AWS_EC2_METADATA_V1_DISABLED", P = "ec2_metadata_v1_disabled", M = "x-aws-ec2-metadata-token", $ = (e = {})=>((e, t = {})=>{
        const n = t?.logger || console;
        let r;
        return async ()=>{
            let t;
            try {
                t = await e(), t.expiration && t.expiration.getTime() < Date.now() && (t = x(t, n));
            } catch (e) {
                if (!r) throw e;
                n.warn("Credential renew failed: ", e), t = x(r, n);
            }
            return r = t, t;
        };
    })(L(e), {
        logger: e.logger
    }), L = (e = {})=>{
    let t = !1;
    const { logger: n, profile: o } = e, { timeout: a, maxRetries: s } = u(e), i = async (n, a)=>{
        if (t || null == a.headers?.[M]) {
            let t = !1, n = !1;
            const a = await (0, I.Z)({
                environmentVariableSelector: (t)=>{
                    const o = t[F];
                    if (n = !!o && "false" !== o, void 0 === o) throw new r.C(`${F} not set in env, checking config file next.`, {
                        logger: e.logger
                    });
                    return n;
                },
                configFileSelector: (e)=>{
                    const n = e[P];
                    return t = !!n && "false" !== n, t;
                },
                default: !1
            }, {
                profile: o
            })();
            if (e.ec2MetadataV1Disabled || a) {
                const r = [];
                throw e.ec2MetadataV1Disabled && r.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"), t && r.push(`config file profile (${P})`), n && r.push(`process environment variable (${F})`), new A(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${r.join(", ")}].`);
            }
        }
        const s = (await f(async ()=>{
            let e;
            try {
                e = await j(a);
            } catch (e) {
                throw 401 === e.statusCode && (t = !1), e;
            }
            return e;
        }, n)).trim();
        return f(async ()=>{
            let n;
            try {
                n = await V(s, a, e);
            } catch (e) {
                throw 401 === e.statusCode && (t = !1), e;
            }
            return n;
        }, n);
    };
    return async ()=>{
        const e = await T();
        if (t) return n?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), i(s, {
            ...e,
            timeout: a
        });
        {
            let r;
            try {
                r = (await k({
                    ...e,
                    timeout: a
                })).toString();
            } catch (r) {
                if (400 === r?.statusCode) throw Object.assign(r, {
                    message: "EC2 Metadata token request returned error"
                });
                return ("TimeoutError" === r.message || [
                    403,
                    404,
                    405
                ].includes(r.statusCode)) && (t = !0), n?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), i(s, {
                    ...e,
                    timeout: a
                });
            }
            return i(s, {
                ...e,
                headers: {
                    [M]: r
                },
                timeout: a
            });
        }
    };
}, k = async (e)=>c({
        ...e,
        path: "/latest/api/token",
        method: "PUT",
        headers: {
            "x-aws-ec2-metadata-token-ttl-seconds": "21600"
        }
    }), j = async (e)=>(await c({
        ...e,
        path: D
    })).toString(), V = async (e, t, n)=>{
    const o = JSON.parse((await c({
        ...t,
        path: D + e
    })).toString());
    if (!l(o)) throw new r.C("Invalid response received from instance metadata service.", {
        logger: n.logger
    });
    return d(o);
};
