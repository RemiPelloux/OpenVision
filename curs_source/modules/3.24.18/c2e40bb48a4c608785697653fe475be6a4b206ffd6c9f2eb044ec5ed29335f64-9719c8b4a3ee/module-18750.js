require.d(exports, {
    fromHttp: ()=>A
});
var r = require(97464), n = require("./module-41741.js"), s = require(61178), i = require(51455), a = ()=>i && i.__esModule ? i.default : i;
var c = require("./module-50333.js"), u = require(96851), h = require(90443), l = require(2203), d = require("./module-55936.js"), f = require(8353), m = require(86507);
const p = (e)=>"function" == typeof ReadableStream && (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream), g = "The stream has already been transformed.", y = (e)=>{
    if (!w(e) && !p(e)) {
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${e?.__proto__?.constructor?.name || e}`);
    }
    let t = !1;
    const o = async ()=>{
        if (t) throw new Error(g);
        return t = !0, await (0, u.streamCollector)(e);
    };
    return Object.assign(e, {
        transformToByteArray: o,
        transformToString: async (e)=>{
            const t = await o();
            if ("base64" === e) return (0, d.n)(t);
            if ("hex" === e) return (0, f.n)(t);
            if (void 0 === e || "utf8" === e || "utf-8" === e) return (0, m.P)(t);
            if ("function" == typeof TextDecoder) return new TextDecoder(e).decode(t);
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
        },
        transformToWebStream: ()=>{
            if (t) throw new Error(g);
            if (t = !0, w(e)) return ((e)=>{
                if ("function" != typeof e.stream) throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
                return e.stream();
            })(e);
            if (p(e)) return e;
            throw new Error(`Cannot transform payload to web stream, got ${e}`);
        }
    });
}, w = (e)=>"function" == typeof Blob && e instanceof Blob, T = "The stream has already been transformed.";
async function b(e, t) {
    const o = ((e)=>{
        if (!(e instanceof l.Readable)) try {
            return y(e);
        } catch (t) {
            throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${e?.__proto__?.constructor?.name || e}`);
        }
        let t = !1;
        const o = async ()=>{
            if (t) throw new Error(T);
            return t = !0, await (0, u.streamCollector)(e);
        };
        return Object.assign(e, {
            transformToByteArray: o,
            transformToString: async (e)=>{
                const t = await o();
                return void 0 === e || Buffer.isEncoding(e) ? (0, h.Q)(t.buffer, t.byteOffset, t.byteLength).toString(e) : new TextDecoder(e).decode(t);
            },
            transformToWebStream: ()=>{
                if (t) throw new Error(T);
                if (null !== e.readableFlowing) throw new Error("The stream has been consumed by other callbacks.");
                if ("function" != typeof l.Readable.toWeb) throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
                return t = !0, l.Readable.toWeb(e);
            }
        });
    })(e.body), r = await o.transformToString();
    if (200 === e.statusCode) {
        const e = JSON.parse(r);
        if ("string" != typeof e.AccessKeyId || "string" != typeof e.SecretAccessKey || "string" != typeof e.Token || "string" != typeof e.Expiration) throw new s.C("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
            logger: t
        });
        return {
            accessKeyId: e.AccessKeyId,
            secretAccessKey: e.SecretAccessKey,
            sessionToken: e.Token,
            expiration: (0, u.parseRfc3339DateTime)(e.Expiration)
        };
    }
    if (e.statusCode >= 400 && e.statusCode < 500) {
        let o = {};
        try {
            o = JSON.parse(r);
        } catch (e) {}
        throw Object.assign(new s.C(`Server responded with status: ${e.statusCode}`, {
            logger: t
        }), {
            Code: o.Code,
            Message: o.Message
        });
    }
    throw new s.C(`Server responded with status: ${e.statusCode}`, {
        logger: t
    });
}
const A = (e = {})=>{
    let t;
    e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
    const o = e.awsContainerCredentialsRelativeUri ?? process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, i = e.awsContainerCredentialsFullUri ?? process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI, u = e.awsContainerAuthorizationToken ?? process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN, h = e.awsContainerAuthorizationTokenFile ?? process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE, l = "NoOpLogger" !== e.logger?.constructor?.name && e.logger?.warn ? e.logger.warn.bind(e.logger) : console.warn;
    if (o && i && (l("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), l("awsContainerCredentialsFullUri will take precedence.")), u && h && (l("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), l("awsContainerAuthorizationToken will take precedence.")), i) t = i;
    else {
        if (!o) throw new s.C("No HTTP credential provider host provided.\nSet AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.", {
            logger: e.logger
        });
        t = `http://169.254.170.2${o}`;
    }
    const d = new URL(t);
    ((e, t)=>{
        if ("https:" !== e.protocol && "169.254.170.2" !== e.hostname && "169.254.170.23" !== e.hostname && "[fd00:ec2::23]" !== e.hostname) {
            if (e.hostname.includes("[")) {
                if ("[::1]" === e.hostname || "[0000:0000:0000:0000:0000:0000:0000:0001]" === e.hostname) return;
            } else {
                if ("localhost" === e.hostname) return;
                const t = e.hostname.split("."), o = (e)=>{
                    const t = parseInt(e, 10);
                    return 0 <= t && t <= 255;
                };
                if ("127" === t[0] && o(t[1]) && o(t[2]) && o(t[3]) && 4 === t.length) return;
            }
            throw new s.C("URL not accepted. It must either be HTTPS or match one of the following:\n  - loopback CIDR 127.0.0.0/8 or [::1/128]\n  - ECS container host 169.254.170.2\n  - EKS container host 169.254.170.23 or [fd00:ec2::23]", {
                logger: t
            });
        }
    })(d, e.logger);
    const f = n.$.create({
        requestTimeout: e.timeout ?? 1e3,
        connectionTimeout: e.timeout ?? 1e3
    });
    return m = async ()=>{
        const t = function(e) {
            return new c.K({
                protocol: e.protocol,
                hostname: e.hostname,
                port: Number(e.port),
                path: e.pathname,
                query: Array.from(e.searchParams.entries()).reduce((e, [t, o])=>(e[t] = o, e), {}),
                fragment: e.hash
            });
        }(d);
        u ? t.headers.Authorization = u : h && (t.headers.Authorization = (await a().readFile(h)).toString());
        try {
            return b((await f.handle(t)).response).then((e)=>(0, r.setCredentialFeature)(e, "CREDENTIALS_HTTP", "z"));
        } catch (t) {
            throw new s.C(String(t), {
                logger: e.logger
            });
        }
    }, p = e.maxRetries ?? 3, g = e.timeout ?? 1e3, async ()=>{
        for(let e = 0; e < p; ++e)try {
            return await m();
        } catch (e) {
            await new Promise((e)=>setTimeout(e, g));
        }
        return await m();
    };
    var m, p, g;
};
