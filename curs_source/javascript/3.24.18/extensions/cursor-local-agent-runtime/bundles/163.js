"use strict";
((exports.id = 163),
  (exports.ids = [163]),
  (exports.modules = {
    412: (e, t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.commonParams = t.resolveClientEndpointParameters = void 0));
      ((t.resolveClientEndpointParameters = (e) =>
        Object.assign(e, {
          useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
          useFipsEndpoint: e.useFipsEndpoint ?? !1,
          useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
          defaultSigningName: "sts",
        })),
        (t.commonParams = {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        }));
    },
    743: (e, t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHttpAuthRuntimeConfig = t.getHttpAuthExtensionConfiguration = void 0));
      t.getHttpAuthExtensionConfiguration = (e) => {
        const t = e.httpAuthSchemes;
        let n = e.httpAuthSchemeProvider,
          i = e.credentials;
        return {
          setHttpAuthScheme(e) {
            const n = t.findIndex((t) => t.schemeId === e.schemeId);
            -1 === n ? t.push(e) : t.splice(n, 1, e);
          },
          httpAuthSchemes: () => t,
          setHttpAuthSchemeProvider(e) {
            n = e;
          },
          httpAuthSchemeProvider: () => n,
          setCredentials(e) {
            i = e;
          },
          credentials: () => i,
        };
      };
      t.resolveHttpAuthRuntimeConfig = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      });
    },
    9823: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AssumeRoleWithWebIdentity$ =
          t.AssumeRole$ =
          t.Tag$ =
          t.ProvidedContext$ =
          t.PolicyDescriptorType$ =
          t.Credentials$ =
          t.AssumeRoleWithWebIdentityResponse$ =
          t.AssumeRoleWithWebIdentityRequest$ =
          t.AssumeRoleResponse$ =
          t.AssumeRoleRequest$ =
          t.AssumedRoleUser$ =
          t.errorTypeRegistries =
          t.RegionDisabledException$ =
          t.PackedPolicyTooLargeException$ =
          t.MalformedPolicyDocumentException$ =
          t.InvalidIdentityTokenException$ =
          t.IDPRejectedClaimException$ =
          t.IDPCommunicationErrorException$ =
          t.ExpiredTokenException$ =
          t.STSServiceException$ =
            void 0));
      const i = "AssumedRoleUser",
        o = "Credentials",
        r = "DurationSeconds",
        s = "Policy",
        a = "PolicyArns",
        c = "PackedPolicySize",
        l = "RoleArn",
        d = "RoleSessionName",
        u = "SourceIdentity",
        p = "awsQueryError",
        g = "client",
        m = "error",
        h = "httpError",
        S = "message",
        f = "smithy.ts.sdk.synthetic.com.amazonaws.sts",
        v = "com.amazonaws.sts",
        y = n(93353),
        E = n(55339),
        P = n(32834),
        C = y.TypeRegistry.for(f);
      ((t.STSServiceException$ = [-3, f, "STSServiceException", 0, [], []]),
        C.registerError(t.STSServiceException$, P.STSServiceException));
      const A = y.TypeRegistry.for(v);
      ((t.ExpiredTokenException$ = [
        -3,
        v,
        "ExpiredTokenException",
        { [p]: ["ExpiredTokenException", 400], [m]: g, [h]: 400 },
        [S],
        [0],
      ]),
        A.registerError(t.ExpiredTokenException$, E.ExpiredTokenException),
        (t.IDPCommunicationErrorException$ = [
          -3,
          v,
          "IDPCommunicationErrorException",
          { [p]: ["IDPCommunicationError", 400], [m]: g, [h]: 400 },
          [S],
          [0],
        ]),
        A.registerError(t.IDPCommunicationErrorException$, E.IDPCommunicationErrorException),
        (t.IDPRejectedClaimException$ = [
          -3,
          v,
          "IDPRejectedClaimException",
          { [p]: ["IDPRejectedClaim", 403], [m]: g, [h]: 403 },
          [S],
          [0],
        ]),
        A.registerError(t.IDPRejectedClaimException$, E.IDPRejectedClaimException),
        (t.InvalidIdentityTokenException$ = [
          -3,
          v,
          "InvalidIdentityTokenException",
          { [p]: ["InvalidIdentityToken", 400], [m]: g, [h]: 400 },
          [S],
          [0],
        ]),
        A.registerError(t.InvalidIdentityTokenException$, E.InvalidIdentityTokenException),
        (t.MalformedPolicyDocumentException$ = [
          -3,
          v,
          "MalformedPolicyDocumentException",
          { [p]: ["MalformedPolicyDocument", 400], [m]: g, [h]: 400 },
          [S],
          [0],
        ]),
        A.registerError(t.MalformedPolicyDocumentException$, E.MalformedPolicyDocumentException),
        (t.PackedPolicyTooLargeException$ = [
          -3,
          v,
          "PackedPolicyTooLargeException",
          { [p]: ["PackedPolicyTooLarge", 400], [m]: g, [h]: 400 },
          [S],
          [0],
        ]),
        A.registerError(t.PackedPolicyTooLargeException$, E.PackedPolicyTooLargeException),
        (t.RegionDisabledException$ = [
          -3,
          v,
          "RegionDisabledException",
          { [p]: ["RegionDisabledException", 403], [m]: g, [h]: 403 },
          [S],
          [0],
        ]),
        A.registerError(t.RegionDisabledException$, E.RegionDisabledException),
        (t.errorTypeRegistries = [C, A]));
      var R = [0, v, "accessKeySecretType", 8, 0],
        w = [0, v, "clientTokenType", 8, 0];
      ((t.AssumedRoleUser$ = [3, v, i, 0, ["AssumedRoleId", "Arn"], [0, 0], 2]),
        (t.AssumeRoleRequest$ = [
          3,
          v,
          "AssumeRoleRequest",
          0,
          [
            l,
            d,
            a,
            s,
            r,
            "Tags",
            "TransitiveTagKeys",
            "ExternalId",
            "SerialNumber",
            "TokenCode",
            u,
            "ProvidedContexts",
          ],
          [0, 0, () => I, 0, 1, () => T, 64, 0, 0, 0, 0, () => x],
          2,
        ]),
        (t.AssumeRoleResponse$ = [
          3,
          v,
          "AssumeRoleResponse",
          0,
          [o, i, c, u],
          [[() => t.Credentials$, 0], () => t.AssumedRoleUser$, 1, 0],
        ]),
        (t.AssumeRoleWithWebIdentityRequest$ = [
          3,
          v,
          "AssumeRoleWithWebIdentityRequest",
          0,
          [l, d, "WebIdentityToken", "ProviderId", a, s, r],
          [0, 0, [() => w, 0], 0, () => I, 0, 1],
          3,
        ]),
        (t.AssumeRoleWithWebIdentityResponse$ = [
          3,
          v,
          "AssumeRoleWithWebIdentityResponse",
          0,
          [o, "SubjectFromWebIdentityToken", i, c, "Provider", "Audience", u],
          [[() => t.Credentials$, 0], 0, () => t.AssumedRoleUser$, 1, 0, 0, 0],
        ]),
        (t.Credentials$ = [
          3,
          v,
          o,
          0,
          ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"],
          [0, [() => R, 0], 0, 4],
          4,
        ]),
        (t.PolicyDescriptorType$ = [3, v, "PolicyDescriptorType", 0, ["arn"], [0]]),
        (t.ProvidedContext$ = [
          3,
          v,
          "ProvidedContext",
          0,
          ["ProviderArn", "ContextAssertion"],
          [0, 0],
        ]),
        (t.Tag$ = [3, v, "Tag", 0, ["Key", "Value"], [0, 0], 2]));
      var I = [1, v, "policyDescriptorListType", 0, () => t.PolicyDescriptorType$],
        x = [1, v, "ProvidedContextsListType", 0, () => t.ProvidedContext$],
        T = [1, v, "tagListType", 0, () => t.Tag$];
      ((t.AssumeRole$ = [
        9,
        v,
        "AssumeRole",
        0,
        () => t.AssumeRoleRequest$,
        () => t.AssumeRoleResponse$,
      ]),
        (t.AssumeRoleWithWebIdentity$ = [
          9,
          v,
          "AssumeRoleWithWebIdentity",
          0,
          () => t.AssumeRoleWithWebIdentityRequest$,
          () => t.AssumeRoleWithWebIdentityResponse$,
        ]));
    },
    20577: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveRuntimeExtensions = void 0));
      const i = n(18415),
        o = n(59344),
        r = n(90099),
        s = n(743);
      t.resolveRuntimeExtensions = (e, t) => {
        const n = Object.assign(
          (0, i.getAwsRegionExtensionConfiguration)(e),
          (0, r.getDefaultExtensionConfiguration)(e),
          (0, o.getHttpHandlerExtensionConfiguration)(e),
          (0, s.getHttpAuthExtensionConfiguration)(e),
        );
        return (
          t.forEach((e) => e.configure(n)),
          Object.assign(
            e,
            (0, i.resolveAwsRegionExtensionConfiguration)(n),
            (0, r.resolveDefaultRuntimeConfig)(n),
            (0, o.resolveHttpHandlerRuntimeConfig)(n),
            (0, s.resolveHttpAuthRuntimeConfig)(n),
          )
        );
      };
    },
    25103: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bdd = void 0));
      const i = n(82713),
        o = "ref",
        r = -1,
        s = !0,
        a = "isSet",
        c = "PartitionResult",
        l = "booleanEquals",
        d = "stringEquals",
        u = "getAttr",
        p = "us-east-1",
        g = "sigv4",
        m = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        h = { [o]: "Endpoint" },
        S = { [o]: "Region" },
        f = { [o]: c },
        v = {},
        y = [S],
        E = {
          conditions: [
            [a, [h]],
            [a, y],
            ["aws.partition", y, c],
            [l, [{ [o]: "UseFIPS" }, s]],
            [l, [{ [o]: "UseDualStack" }, s]],
            [d, [S, "aws-global"]],
            [l, [{ [o]: "UseGlobalEndpoint" }, s]],
            [d, [S, "eu-central-1"]],
            [l, [{ fn: u, argv: [f, "supportsDualStack"] }, s]],
            [l, [{ fn: u, argv: [f, "supportsFIPS"] }, s]],
            [d, [S, "ap-south-1"]],
            [d, [S, "eu-north-1"]],
            [d, [S, "eu-west-1"]],
            [d, [S, "eu-west-2"]],
            [d, [S, "eu-west-3"]],
            [d, [S, "sa-east-1"]],
            [d, [S, p]],
            [d, [S, "us-east-2"]],
            [d, [S, "us-west-2"]],
            [d, [S, "us-west-1"]],
            [d, [S, "ca-central-1"]],
            [d, [S, "ap-southeast-1"]],
            [d, [S, "ap-northeast-1"]],
            [d, [S, "ap-southeast-2"]],
            [d, [{ fn: u, argv: [f, "name"] }, "aws-us-gov"]],
          ],
          results: [
            [r],
            [
              "https://sts.amazonaws.com",
              { authSchemes: [{ name: g, signingName: "sts", signingRegion: p }] },
            ],
            [m, { authSchemes: [{ name: g, signingName: "sts", signingRegion: "{Region}" }] }],
            [r, "Invalid Configuration: FIPS and custom endpoint are not supported"],
            [r, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
            [h, v],
            ["https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", v],
            [r, "FIPS and DualStack are enabled, but this partition does not support one or both"],
            ["https://sts.{Region}.amazonaws.com", v],
            ["https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", v],
            [r, "FIPS is enabled but this partition does not support FIPS"],
            ["https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", v],
            [r, "DualStack is enabled but this partition does not support DualStack"],
            [m, v],
            [r, "Invalid Configuration: Missing Region"],
          ],
        },
        P = 1e8,
        C = new Int32Array([
          -1,
          1,
          -1,
          0,
          30,
          3,
          1,
          4,
          P + 14,
          2,
          5,
          P + 14,
          3,
          25,
          6,
          4,
          24,
          7,
          5,
          P + 1,
          8,
          6,
          9,
          P + 13,
          7,
          P + 1,
          10,
          10,
          P + 1,
          11,
          11,
          P + 1,
          12,
          12,
          P + 1,
          13,
          13,
          P + 1,
          14,
          14,
          P + 1,
          15,
          15,
          P + 1,
          16,
          16,
          P + 1,
          17,
          17,
          P + 1,
          18,
          18,
          P + 1,
          19,
          19,
          P + 1,
          20,
          20,
          P + 1,
          21,
          21,
          P + 1,
          22,
          22,
          P + 1,
          23,
          23,
          P + 1,
          P + 2,
          8,
          P + 11,
          P + 12,
          4,
          28,
          26,
          9,
          27,
          P + 10,
          24,
          P + 8,
          P + 9,
          8,
          29,
          P + 7,
          9,
          P + 6,
          P + 7,
          3,
          P + 3,
          31,
          4,
          P + 4,
          P + 5,
        ]);
      t.bdd = i.BinaryDecisionDiagram.from(C, 2, E.conditions, E.results);
    },
    32834: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STSServiceException = t.__ServiceException = void 0));
      const i = n(90099);
      Object.defineProperty(t, "__ServiceException", {
        enumerable: !0,
        get: function () {
          return i.ServiceException;
        },
      });
      class o extends i.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, o.prototype));
        }
      }
      t.STSServiceException = o;
    },
    34842: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.defaultEndpointResolver = void 0));
      const i = n(41119),
        o = n(82713),
        r = n(25103),
        s = new o.EndpointCache({
          size: 50,
          params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"],
        });
      ((t.defaultEndpointResolver = (e, t = {}) =>
        s.get(e, () => (0, o.decideEndpoint)(r.bdd, { endpointParams: e, logger: t.logger }))),
        (o.customEndpointFunctions.aws = i.awsEndpointFunctions));
    },
    37163: (e, t, n) => {
      var i = n(78920),
        o = n(90099),
        r = n(55164),
        s = n(412),
        a = n(9823),
        c = n(55339),
        l = n(97464),
        d = n(18415),
        u = n(32834);
      class p extends o.Command.classBuilder()
        .ep(s.commonParams)
        .m(function (e, t, n, i) {
          return [r.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
        .n("STSClient", "AssumeRoleCommand")
        .sc(a.AssumeRole$)
        .build() {}
      class g extends o.Command.classBuilder()
        .ep(s.commonParams)
        .m(function (e, t, n, i) {
          return [r.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
        .n("STSClient", "AssumeRoleWithWebIdentityCommand")
        .sc(a.AssumeRoleWithWebIdentity$)
        .build() {}
      const m = { AssumeRoleCommand: p, AssumeRoleWithWebIdentityCommand: g };
      class h extends i.STSClient {}
      o.createAggregatedClient(m, h);
      const S = (e) => {
          if ("string" == typeof e?.Arn) {
            const t = e.Arn.split(":");
            if (t.length > 4 && "" !== t[4]) return t[4];
          }
        },
        f = async (e, t, n, i = {}) => {
          const o = "function" == typeof e ? await e() : e,
            r = "function" == typeof t ? await t() : t;
          let s = "";
          const a = o ?? r ?? (s = await d.stsRegionDefaultResolver(i)());
          return (
            n?.debug?.(
              "@aws-sdk/client-sts::resolveRegion",
              "accepting first of:",
              `${o} (credential provider clientConfig)`,
              `${r} (contextual client)`,
              `${s} (STS default: AWS_REGION, profile region, or us-east-1)`,
            ),
            a
          );
        },
        v = (e) => "h2" === e?.metadata?.handlerProtocol,
        y = (e, t) =>
          t
            ? class extends e {
                constructor(e) {
                  super(e);
                  for (const e of t) this.middlewareStack.use(e);
                }
              }
            : e,
        E = (e = {}, t) =>
          ((e, t) => {
            let n, i;
            return async (o, r) => {
              if (((i = o), !n)) {
                const {
                    logger: o = e?.parentClientConfig?.logger,
                    profile: r = e?.parentClientConfig?.profile,
                    region: s,
                    requestHandler: a = e?.parentClientConfig?.requestHandler,
                    credentialProviderLogger: c,
                    userAgentAppId: l = e?.parentClientConfig?.userAgentAppId,
                  } = e,
                  d = await f(s, e?.parentClientConfig?.region, c, { logger: o, profile: r }),
                  u = !v(a);
                n = new t({
                  ...e,
                  userAgentAppId: l,
                  profile: r,
                  credentialDefaultProvider: () => async () => i,
                  region: d,
                  requestHandler: u ? a : void 0,
                  logger: o,
                });
              }
              const { Credentials: s, AssumedRoleUser: a } = await n.send(new p(r));
              if (!s || !s.AccessKeyId || !s.SecretAccessKey)
                throw new Error(`Invalid response from STS.assumeRole call with role ${r.RoleArn}`);
              const c = S(a),
                d = {
                  accessKeyId: s.AccessKeyId,
                  secretAccessKey: s.SecretAccessKey,
                  sessionToken: s.SessionToken,
                  expiration: s.Expiration,
                  ...(s.CredentialScope && { credentialScope: s.CredentialScope }),
                  ...(c && { accountId: c }),
                };
              return (l.setCredentialFeature(d, "CREDENTIALS_STS_ASSUME_ROLE", "i"), d);
            };
          })(e, y(i.STSClient, t)),
        P = (e = {}, t) =>
          ((e, t) => {
            let n;
            return async (i) => {
              if (!n) {
                const {
                    logger: i = e?.parentClientConfig?.logger,
                    profile: o = e?.parentClientConfig?.profile,
                    region: r,
                    requestHandler: s = e?.parentClientConfig?.requestHandler,
                    credentialProviderLogger: a,
                    userAgentAppId: c = e?.parentClientConfig?.userAgentAppId,
                  } = e,
                  l = await f(r, e?.parentClientConfig?.region, a, { logger: i, profile: o }),
                  d = !v(s);
                n = new t({
                  ...e,
                  userAgentAppId: c,
                  profile: o,
                  region: l,
                  requestHandler: d ? s : void 0,
                  logger: i,
                });
              }
              const { Credentials: o, AssumedRoleUser: r } = await n.send(new g(i));
              if (!o || !o.AccessKeyId || !o.SecretAccessKey)
                throw new Error(
                  `Invalid response from STS.assumeRoleWithWebIdentity call with role ${i.RoleArn}`,
                );
              const s = S(r),
                a = {
                  accessKeyId: o.AccessKeyId,
                  secretAccessKey: o.SecretAccessKey,
                  sessionToken: o.SessionToken,
                  expiration: o.Expiration,
                  ...(o.CredentialScope && { credentialScope: o.CredentialScope }),
                  ...(s && { accountId: s }),
                };
              return (
                s && l.setCredentialFeature(a, "RESOLVED_ACCOUNT_ID", "T"),
                l.setCredentialFeature(a, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"),
                a
              );
            };
          })(e, y(i.STSClient, t));
      ((t.$Command = o.Command),
        (t.STSServiceException = u.STSServiceException),
        (t.AssumeRoleCommand = p),
        (t.AssumeRoleWithWebIdentityCommand = g),
        (t.STS = h),
        (t.decorateDefaultCredentialProvider = (e) => (t) =>
          e({ roleAssumer: E(t), roleAssumerWithWebIdentity: P(t), ...t })),
        (t.getDefaultRoleAssumer = E),
        (t.getDefaultRoleAssumerWithWebIdentity = P),
        Object.prototype.hasOwnProperty.call(i, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: i.__proto__ }),
        Object.keys(i).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = i[e]);
        }),
        Object.prototype.hasOwnProperty.call(a, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: a.__proto__ }),
        Object.keys(a).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = a[e]);
        }),
        Object.prototype.hasOwnProperty.call(c, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: c.__proto__ }),
        Object.keys(c).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = c[e]);
        }));
    },
    52850: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const i = n(58571),
        o = n(93664),
        r = n(81694),
        s = n(55909),
        a = n(90099),
        c = n(53043),
        l = n(3865),
        d = n(49125),
        u = n(87812),
        p = n(34842),
        g = n(9823);
      t.getRuntimeConfig = (e) => ({
        apiVersion: "2011-06-15",
        base64Decoder: e?.base64Decoder ?? l.fromBase64,
        base64Encoder: e?.base64Encoder ?? l.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? p.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? u.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4"),
            signer: new i.AwsSdkSigV4Signer(),
          },
          {
            schemeId: "aws.auth#sigv4a",
            identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4a"),
            signer: new i.AwsSdkSigV4ASigner(),
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (e) =>
              e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new s.NoAuthSigner(),
          },
        ],
        logger: e?.logger ?? new a.NoOpLogger(),
        protocol: e?.protocol ?? o.AwsQueryProtocol,
        protocolSettings: e?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.sts",
          errorTypeRegistries: g.errorTypeRegistries,
          xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
          version: "2011-06-15",
          serviceTarget: "AWSSecurityTokenServiceV20110615",
        },
        serviceId: e?.serviceId ?? "STS",
        signerConstructor: e?.signerConstructor ?? r.SignatureV4MultiRegion,
        urlParser: e?.urlParser ?? c.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? d.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? d.toUtf8,
      });
    },
    55339: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IDPCommunicationErrorException =
          t.InvalidIdentityTokenException =
          t.IDPRejectedClaimException =
          t.RegionDisabledException =
          t.PackedPolicyTooLargeException =
          t.MalformedPolicyDocumentException =
          t.ExpiredTokenException =
            void 0));
      const i = n(32834);
      class o extends i.STSServiceException {
        name = "ExpiredTokenException";
        $fault = "client";
        constructor(e) {
          (super({ name: "ExpiredTokenException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, o.prototype));
        }
      }
      t.ExpiredTokenException = o;
      class r extends i.STSServiceException {
        name = "MalformedPolicyDocumentException";
        $fault = "client";
        constructor(e) {
          (super({ name: "MalformedPolicyDocumentException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, r.prototype));
        }
      }
      t.MalformedPolicyDocumentException = r;
      class s extends i.STSServiceException {
        name = "PackedPolicyTooLargeException";
        $fault = "client";
        constructor(e) {
          (super({ name: "PackedPolicyTooLargeException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, s.prototype));
        }
      }
      t.PackedPolicyTooLargeException = s;
      class a extends i.STSServiceException {
        name = "RegionDisabledException";
        $fault = "client";
        constructor(e) {
          (super({ name: "RegionDisabledException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, a.prototype));
        }
      }
      t.RegionDisabledException = a;
      class c extends i.STSServiceException {
        name = "IDPRejectedClaimException";
        $fault = "client";
        constructor(e) {
          (super({ name: "IDPRejectedClaimException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, c.prototype));
        }
      }
      t.IDPRejectedClaimException = c;
      class l extends i.STSServiceException {
        name = "InvalidIdentityTokenException";
        $fault = "client";
        constructor(e) {
          (super({ name: "InvalidIdentityTokenException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, l.prototype));
        }
      }
      t.InvalidIdentityTokenException = l;
      class d extends i.STSServiceException {
        name = "IDPCommunicationErrorException";
        $fault = "client";
        $retryable = {};
        constructor(e) {
          (super({ name: "IDPCommunicationErrorException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, d.prototype));
        }
      }
      t.IDPCommunicationErrorException = d;
    },
    72829: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const i = n(16317).__importDefault(n(26939)),
        o = n(97464),
        r = n(58571),
        s = n(81124),
        a = n(78520),
        c = n(55909),
        l = n(23296),
        d = n(39022),
        u = n(85802),
        p = n(99202),
        g = n(90099),
        m = n(50358),
        h = n(31643),
        S = n(18020),
        f = n(52850);
      t.getRuntimeConfig = (e) => {
        (0, g.emitWarningIfUnsupportedVersion)(process.version);
        const t = (0, h.resolveDefaultsModeConfig)(e),
          n = () => t().then(g.loadConfigsForDefaultMode),
          v = (0, f.getRuntimeConfig)(e);
        (0, o.emitWarningIfUnsupportedVersion)(process.version);
        const y = { profile: e?.profile, logger: v.logger };
        return {
          ...v,
          ...e,
          runtime: "node",
          defaultsMode: t,
          authSchemePreference:
            e?.authSchemePreference ?? (0, u.loadConfig)(r.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, y),
          bodyLengthChecker: e?.bodyLengthChecker ?? m.calculateBodyLength,
          defaultUserAgentProvider:
            e?.defaultUserAgentProvider ??
            (0, s.createDefaultUserAgentProvider)({
              serviceId: v.serviceId,
              clientVersion: i.default.version,
            }),
          httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
              schemeId: "aws.auth#sigv4",
              identityProvider: (t) =>
                t.getIdentityProvider("aws.auth#sigv4") ||
                (async (t) => await e.credentialDefaultProvider(t?.__config || {})()),
              signer: new r.AwsSdkSigV4Signer(),
            },
            {
              schemeId: "aws.auth#sigv4a",
              identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4a"),
              signer: new r.AwsSdkSigV4ASigner(),
            },
            {
              schemeId: "smithy.api#noAuth",
              identityProvider: (e) =>
                e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
              signer: new c.NoAuthSigner(),
            },
          ],
          maxAttempts: e?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
          region:
            e?.region ??
            (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, {
              ...a.NODE_REGION_CONFIG_FILE_OPTIONS,
              ...y,
            }),
          requestHandler: p.NodeHttpHandler.create(e?.requestHandler ?? n),
          retryMode:
            e?.retryMode ??
            (0, u.loadConfig)(
              {
                ...d.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await n()).retryMode || S.DEFAULT_RETRY_MODE,
              },
              e,
            ),
          sha256: e?.sha256 ?? l.Hash.bind(null, "sha256"),
          sigv4aSigningRegionSet:
            e?.sigv4aSigningRegionSet ?? (0, u.loadConfig)(r.NODE_SIGV4A_CONFIG_OPTIONS, y),
          streamCollector: e?.streamCollector ?? p.streamCollector,
          useDualstackEndpoint:
            e?.useDualstackEndpoint ??
            (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, y),
          useFipsEndpoint:
            e?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, y),
          userAgentAppId: e?.userAgentAppId ?? (0, u.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, y),
        };
      };
    },
    78920: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.STSClient = t.__Client = void 0));
      const i = n(21413),
        o = n(30740),
        r = n(9622),
        s = n(35517),
        a = n(78520),
        c = n(55909),
        l = n(93353),
        d = n(34770),
        u = n(55164),
        p = n(39022),
        g = n(90099);
      Object.defineProperty(t, "__Client", {
        enumerable: !0,
        get: function () {
          return g.Client;
        },
      });
      const m = n(87812),
        h = n(412),
        S = n(72829),
        f = n(20577);
      class v extends g.Client {
        config;
        constructor(...[e]) {
          const t = (0, S.getRuntimeConfig)(e || {});
          (super(t), (this.initConfig = t));
          const n = (0, h.resolveClientEndpointParameters)(t),
            g = (0, s.resolveUserAgentConfig)(n),
            v = (0, p.resolveRetryConfig)(g),
            y = (0, a.resolveRegionConfig)(v),
            E = (0, i.resolveHostHeaderConfig)(y),
            P = (0, u.resolveEndpointConfig)(E),
            C = (0, m.resolveHttpAuthSchemeConfig)(P),
            A = (0, f.resolveRuntimeExtensions)(C, e?.extensions || []);
          ((this.config = A),
            this.middlewareStack.use((0, l.getSchemaSerdePlugin)(this.config)),
            this.middlewareStack.use((0, s.getUserAgentPlugin)(this.config)),
            this.middlewareStack.use((0, p.getRetryPlugin)(this.config)),
            this.middlewareStack.use((0, d.getContentLengthPlugin)(this.config)),
            this.middlewareStack.use((0, i.getHostHeaderPlugin)(this.config)),
            this.middlewareStack.use((0, o.getLoggerPlugin)(this.config)),
            this.middlewareStack.use((0, r.getRecursionDetectionPlugin)(this.config)),
            this.middlewareStack.use(
              (0, c.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: m.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (e) =>
                  new c.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": e.credentials,
                    "aws.auth#sigv4a": e.credentials,
                  }),
              }),
            ),
            this.middlewareStack.use((0, c.getHttpSigningPlugin)(this.config)));
        }
        destroy() {
          super.destroy();
        }
      }
      t.STSClient = v;
    },
    81694: (e, t, n) => {
      (n.r(t), n.d(t, { SignatureV4MultiRegion: () => u, signatureV4CrtContainer: () => d }));
      var i = n(84329);
      (n(86349), n(98025));
      const o = "X-Amz-S3session-Token",
        r = o.toLowerCase();
      class s extends i.B {
        async signWithCredentials(e, t, n) {
          const i = a(t);
          e.headers[r] = t.sessionToken;
          return (c(this, i), this.signRequest(e, n ?? {}));
        }
        async presignWithCredentials(e, t, n) {
          const i = a(t);
          (delete e.headers[r],
            (e.headers[o] = t.sessionToken),
            (e.query = e.query ?? {}),
            (e.query[o] = t.sessionToken));
          return (c(this, i), this.presign(e, n));
        }
      }
      function a(e) {
        return {
          accessKeyId: e.accessKeyId,
          secretAccessKey: e.secretAccessKey,
          expiration: e.expiration,
        };
      }
      function c(e, t) {
        const n = setTimeout(() => {
            throw new Error("SignatureV4S3Express credential override was created but not called.");
          }, 10),
          i = e.credentialProvider;
        e.credentialProvider = () => (
          clearTimeout(n),
          (e.credentialProvider = i),
          Promise.resolve(t)
        );
      }
      var l = n(16936);
      const d = { CrtSignerV4: null };
      class u {
        sigv4aSigner;
        sigv4Signer;
        signerOptions;
        static sigv4aDependency() {
          return "function" == typeof d.CrtSignerV4
            ? "crt"
            : "function" == typeof l.d.SignatureV4a
              ? "js"
              : "none";
        }
        constructor(e) {
          ((this.sigv4Signer = new s(e)), (this.signerOptions = e));
        }
        async sign(e, t = {}) {
          return "*" === t.signingRegion
            ? this.getSigv4aSigner().sign(e, t)
            : this.sigv4Signer.sign(e, t);
        }
        async signWithCredentials(e, t, n = {}) {
          if ("*" === n.signingRegion) {
            const i = this.getSigv4aSigner(),
              o = d.CrtSignerV4;
            if (o && i instanceof o) return i.signWithCredentials(e, t, n);
            throw new Error(
              'signWithCredentials with signingRegion \'*\' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt',
            );
          }
          return this.sigv4Signer.signWithCredentials(e, t, n);
        }
        async presign(e, t = {}) {
          if ("*" === t.signingRegion) {
            const n = this.getSigv4aSigner(),
              i = d.CrtSignerV4;
            if (i && n instanceof i) return n.presign(e, t);
            throw new Error(
              'presign with signingRegion \'*\' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt',
            );
          }
          return this.sigv4Signer.presign(e, t);
        }
        async presignWithCredentials(e, t, n = {}) {
          if ("*" === n.signingRegion)
            throw new Error(
              "Method presignWithCredentials is not supported for [signingRegion=*].",
            );
          return this.sigv4Signer.presignWithCredentials(e, t, n);
        }
        getSigv4aSigner() {
          if (!this.sigv4aSigner) {
            const e = d.CrtSignerV4,
              t = l.d.SignatureV4a;
            if ("node" === this.signerOptions.runtime) {
              if (!e && !t)
                throw new Error(
                  "Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt",
                );
              if (e && "function" == typeof e)
                this.sigv4aSigner = new e({ ...this.signerOptions, signingAlgorithm: 1 });
              else {
                if (!t || "function" != typeof t)
                  throw new Error(
                    "Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt",
                  );
                this.sigv4aSigner = new t({ ...this.signerOptions });
              }
            } else {
              if (!t || "function" != typeof t)
                throw new Error(
                  "JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a",
                );
              this.sigv4aSigner = new t({ ...this.signerOptions });
            }
          }
          return this.sigv4aSigner;
        }
      }
    },
    87812: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHttpAuthSchemeConfig =
          t.resolveStsAuthConfig =
          t.defaultSTSHttpAuthSchemeProvider =
          t.defaultSTSHttpAuthSchemeParametersProvider =
            void 0));
      const i = n(58571),
        o = n(81694),
        r = n(55164),
        s = n(5944),
        a = n(34842),
        c = n(78920);
      var l;
      function d(e) {
        return {
          schemeId: "aws.auth#sigv4",
          signingProperties: { name: "sts", region: e.region },
          propertiesExtractor: (e, t) => ({ signingProperties: { config: e, context: t } }),
        };
      }
      function u(e) {
        return {
          schemeId: "aws.auth#sigv4a",
          signingProperties: { name: "sts", region: e.region },
          propertiesExtractor: (e, t) => ({ signingProperties: { config: e, context: t } }),
        };
      }
      function p(e) {
        return { schemeId: "smithy.api#noAuth" };
      }
      t.defaultSTSHttpAuthSchemeParametersProvider =
        ((l = async (e, t, n) => ({
          operation: (0, s.getSmithyContext)(t).operation,
          region:
            (await (0, s.normalizeProvider)(e.region)()) ||
            (() => {
              throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
        })),
        async (e, t, n) => {
          if (!n)
            throw new Error(
              "Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`",
            );
          const i = await l(e, t, n),
            o = (0, s.getSmithyContext)(t)?.commandInstance?.constructor
              ?.getEndpointParameterInstructions;
          if (!o)
            throw new Error(
              `getEndpointParameterInstructions() is not defined on '${t.commandName}'`,
            );
          const a = await (0, r.resolveParams)(n, { getEndpointParameterInstructions: o }, e);
          return Object.assign(i, a);
        });
      var g, m, h;
      t.defaultSTSHttpAuthSchemeProvider =
        ((g = a.defaultEndpointResolver),
        (m = (e) => {
          const t = [];
          return (
            "AssumeRoleWithWebIdentity" === e.operation
              ? (t.push({ schemeId: "smithy.api#noAuth" }), t.push(u(e)))
              : (t.push(d(e)), t.push(u(e))),
            t
          );
        }),
        (h = { "aws.auth#sigv4": d, "aws.auth#sigv4a": u, "smithy.api#noAuth": p }),
        (e) => {
          const t = g(e),
            n = t.properties?.authSchemes;
          if (!n) return m(e);
          const i = [];
          for (const t of n) {
            const { name: r, properties: s = {}, ...a } = t,
              c = r.toLowerCase();
            let l;
            if (
              (r !== c &&
                console.warn(
                  `HttpAuthScheme has been normalized with lowercasing: '${r}' to '${c}'`,
                ),
              "sigv4a" === c)
            ) {
              l = "aws.auth#sigv4a";
              const e = n.find((e) => {
                const t = e.name.toLowerCase();
                return "sigv4a" !== t && t.startsWith("sigv4");
              });
              if ("none" === o.SignatureV4MultiRegion.sigv4aDependency() && e) continue;
            } else {
              if (!c.startsWith("sigv4"))
                throw new Error(
                  `Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${c}'`,
                );
              l = "aws.auth#sigv4";
            }
            const d = h[l];
            if (!d) throw new Error(`Could not find HttpAuthOption create function for '${l}'`);
            const u = d(e);
            ((u.schemeId = l),
              (u.signingProperties = { ...(u.signingProperties || {}), ...a, ...s }),
              i.push(u));
          }
          return i;
        });
      t.resolveStsAuthConfig = (e) => Object.assign(e, { stsClientCtor: c.STSClient });
      t.resolveHttpAuthSchemeConfig = (e) => {
        const n = (0, t.resolveStsAuthConfig)(e),
          o = (0, i.resolveAwsSdkSigV4Config)(n),
          r = (0, i.resolveAwsSdkSigV4AConfig)(o);
        return Object.assign(r, {
          authSchemePreference: (0, s.normalizeProvider)(e.authSchemePreference ?? []),
        });
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-local-agent-runtime/dist/163.js.map
