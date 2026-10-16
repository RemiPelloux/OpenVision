"use strict";
((exports.id = 59),
  (exports.ids = [59]),
  (exports.modules = {
    6486: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SigninServiceException = t.__ServiceException = void 0));
      const o = n(90099);
      Object.defineProperty(t, "__ServiceException", {
        enumerable: !0,
        get: function () {
          return o.ServiceException;
        },
      });
      class r extends o.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, r.prototype));
        }
      }
      t.SigninServiceException = r;
    },
    25964: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHttpAuthSchemeConfig =
          t.defaultSigninHttpAuthSchemeProvider =
          t.defaultSigninHttpAuthSchemeParametersProvider =
            void 0));
      const o = n(58571),
        r = n(5944);
      t.defaultSigninHttpAuthSchemeParametersProvider = async (e, t, n) => ({
        operation: (0, r.getSmithyContext)(t).operation,
        region:
          (await (0, r.normalizeProvider)(e.region)()) ||
          (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })(),
      });
      t.defaultSigninHttpAuthSchemeProvider = (e) => {
        const t = [];
        if ("CreateOAuth2Token" === e.operation) t.push({ schemeId: "smithy.api#noAuth" });
        else
          t.push(
            (function (e) {
              return {
                schemeId: "aws.auth#sigv4",
                signingProperties: { name: "signin", region: e.region },
                propertiesExtractor: (e, t) => ({ signingProperties: { config: e, context: t } }),
              };
            })(e),
          );
        return t;
      };
      t.resolveHttpAuthSchemeConfig = (e) => {
        const t = (0, o.resolveAwsSdkSigV4Config)(e);
        return Object.assign(t, {
          authSchemePreference: (0, r.normalizeProvider)(e.authSchemePreference ?? []),
        });
      };
    },
    29539: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ValidationException =
          t.TooManyRequestsError =
          t.InternalServerException =
          t.AccessDeniedException =
            void 0));
      const o = n(6486);
      class r extends o.SigninServiceException {
        name = "AccessDeniedException";
        $fault = "client";
        error;
        constructor(e) {
          (super({ name: "AccessDeniedException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, r.prototype),
            (this.error = e.error));
        }
      }
      t.AccessDeniedException = r;
      class i extends o.SigninServiceException {
        name = "InternalServerException";
        $fault = "server";
        error;
        constructor(e) {
          (super({ name: "InternalServerException", $fault: "server", ...e }),
            Object.setPrototypeOf(this, i.prototype),
            (this.error = e.error));
        }
      }
      t.InternalServerException = i;
      class s extends o.SigninServiceException {
        name = "TooManyRequestsError";
        $fault = "client";
        error;
        constructor(e) {
          (super({ name: "TooManyRequestsError", $fault: "client", ...e }),
            Object.setPrototypeOf(this, s.prototype),
            (this.error = e.error));
        }
      }
      t.TooManyRequestsError = s;
      class a extends o.SigninServiceException {
        name = "ValidationException";
        $fault = "client";
        error;
        constructor(e) {
          (super({ name: "ValidationException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, a.prototype),
            (this.error = e.error));
        }
      }
      t.ValidationException = a;
    },
    39946: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const o = n(58571),
        r = n(93664),
        i = n(55909),
        s = n(90099),
        a = n(53043),
        c = n(3865),
        u = n(49125),
        d = n(25964),
        p = n(94450),
        l = n(73415);
      t.getRuntimeConfig = (e) => ({
        apiVersion: "2023-01-01",
        base64Decoder: e?.base64Decoder ?? c.fromBase64,
        base64Encoder: e?.base64Encoder ?? c.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? p.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? d.defaultSigninHttpAuthSchemeProvider,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4"),
            signer: new o.AwsSdkSigV4Signer(),
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (e) =>
              e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new i.NoAuthSigner(),
          },
        ],
        logger: e?.logger ?? new s.NoOpLogger(),
        protocol: e?.protocol ?? r.AwsRestJsonProtocol,
        protocolSettings: e?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.signin",
          errorTypeRegistries: l.errorTypeRegistries,
          version: "2023-01-01",
          serviceTarget: "Signin",
        },
        serviceId: e?.serviceId ?? "Signin",
        urlParser: e?.urlParser ?? a.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? u.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? u.toUtf8,
      });
    },
    59575: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bdd = void 0));
      const o = n(82713),
        r = "ref",
        i = -1,
        s = !0,
        a = "isSet",
        c = "PartitionResult",
        u = "booleanEquals",
        d = "getAttr",
        p = "stringEquals",
        l = { [r]: "Endpoint" },
        g = { [r]: c },
        h = { fn: d, argv: [g, "name"] },
        E = {},
        S = [{ [r]: "Region" }],
        f = {
          conditions: [
            [a, [l]],
            [a, S],
            ["aws.partition", S, c],
            [u, [{ [r]: "UseFIPS" }, s]],
            [u, [{ [r]: "UseDualStack" }, s]],
            [u, [{ fn: d, argv: [g, "supportsDualStack"] }, s]],
            [u, [{ fn: d, argv: [g, "supportsFIPS"] }, s]],
            [p, [h, "aws"]],
            [p, [h, "aws-cn"]],
            [p, [h, "aws-us-gov"]],
          ],
          results: [
            [i],
            [i, "Invalid Configuration: FIPS and custom endpoint are not supported"],
            [i, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
            [l, E],
            ["https://{Region}.signin.aws.amazon.com", E],
            ["https://{Region}.signin.amazonaws.cn", E],
            ["https://{Region}.signin.amazonaws-us-gov.com", E],
            ["https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", E],
            [i, "FIPS and DualStack are enabled, but this partition does not support one or both"],
            ["https://signin-fips.{Region}.{PartitionResult#dnsSuffix}", E],
            [i, "FIPS is enabled but this partition does not support FIPS"],
            ["https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}", E],
            [i, "DualStack is enabled but this partition does not support DualStack"],
            ["https://signin.{Region}.{PartitionResult#dnsSuffix}", E],
            [i, "Invalid Configuration: Missing Region"],
          ],
        },
        m = 1e8,
        v = new Int32Array([
          -1,
          1,
          -1,
          0,
          15,
          3,
          1,
          4,
          m + 14,
          2,
          5,
          m + 14,
          3,
          11,
          6,
          4,
          10,
          7,
          7,
          m + 4,
          8,
          8,
          m + 5,
          9,
          9,
          m + 6,
          m + 13,
          5,
          m + 11,
          m + 12,
          4,
          13,
          12,
          6,
          m + 9,
          m + 10,
          5,
          14,
          m + 8,
          6,
          m + 7,
          m + 8,
          3,
          m + 1,
          16,
          4,
          m + 2,
          m + 3,
        ]);
      t.bdd = o.BinaryDecisionDiagram.from(v, 2, f.conditions, f.results);
    },
    73059: (e, t, n) => {
      var o = n(21413),
        r = n(30740),
        i = n(9622),
        s = n(35517),
        a = n(78520),
        c = n(55909),
        u = n(93353),
        d = n(34770),
        p = n(55164),
        l = n(39022),
        g = n(90099),
        h = n(25964),
        E = n(93413),
        S = n(18415),
        f = n(59344),
        m = n(73415),
        v = n(29539),
        P = n(6486);
      const O = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      };
      class _ extends g.Client {
        config;
        constructor(...[e]) {
          const t = E.getRuntimeConfig(e || {});
          (super(t), (this.initConfig = t));
          const n =
            ((m = t),
            Object.assign(m, {
              useDualstackEndpoint: m.useDualstackEndpoint ?? !1,
              useFipsEndpoint: m.useFipsEndpoint ?? !1,
              defaultSigningName: "signin",
            }));
          var m;
          const v = s.resolveUserAgentConfig(n),
            P = l.resolveRetryConfig(v),
            O = a.resolveRegionConfig(P),
            _ = o.resolveHostHeaderConfig(O),
            A = p.resolveEndpointConfig(_),
            C = ((e, t) => {
              const n = Object.assign(
                S.getAwsRegionExtensionConfiguration(e),
                g.getDefaultExtensionConfiguration(e),
                f.getHttpHandlerExtensionConfiguration(e),
                ((e) => {
                  const t = e.httpAuthSchemes;
                  let n = e.httpAuthSchemeProvider,
                    o = e.credentials;
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
                      o = e;
                    },
                    credentials: () => o,
                  };
                })(e),
              );
              return (
                t.forEach((e) => e.configure(n)),
                Object.assign(
                  e,
                  S.resolveAwsRegionExtensionConfiguration(n),
                  g.resolveDefaultRuntimeConfig(n),
                  f.resolveHttpHandlerRuntimeConfig(n),
                  {
                    httpAuthSchemes: (o = n).httpAuthSchemes(),
                    httpAuthSchemeProvider: o.httpAuthSchemeProvider(),
                    credentials: o.credentials(),
                  },
                )
              );
              var o;
            })(h.resolveHttpAuthSchemeConfig(A), e?.extensions || []);
          ((this.config = C),
            this.middlewareStack.use(u.getSchemaSerdePlugin(this.config)),
            this.middlewareStack.use(s.getUserAgentPlugin(this.config)),
            this.middlewareStack.use(l.getRetryPlugin(this.config)),
            this.middlewareStack.use(d.getContentLengthPlugin(this.config)),
            this.middlewareStack.use(o.getHostHeaderPlugin(this.config)),
            this.middlewareStack.use(r.getLoggerPlugin(this.config)),
            this.middlewareStack.use(i.getRecursionDetectionPlugin(this.config)),
            this.middlewareStack.use(
              c.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
                httpAuthSchemeParametersProvider: h.defaultSigninHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (e) =>
                  new c.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e.credentials }),
              }),
            ),
            this.middlewareStack.use(c.getHttpSigningPlugin(this.config)));
        }
        destroy() {
          super.destroy();
        }
      }
      class A extends g.Command.classBuilder()
        .ep(O)
        .m(function (e, t, n, o) {
          return [p.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
        })
        .s("Signin", "CreateOAuth2Token", {})
        .n("SigninClient", "CreateOAuth2TokenCommand")
        .sc(m.CreateOAuth2Token$)
        .build() {}
      const C = { CreateOAuth2TokenCommand: A };
      class y extends _ {}
      g.createAggregatedClient(C, y);
      ((t.$Command = g.Command),
        (t.__Client = g.Client),
        (t.SigninServiceException = P.SigninServiceException),
        (t.CreateOAuth2TokenCommand = A),
        (t.OAuth2ErrorCode = {
          AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
          INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
          INVALID_REQUEST: "INVALID_REQUEST",
          SERVER_ERROR: "server_error",
          TOKEN_EXPIRED: "TOKEN_EXPIRED",
          USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED",
        }),
        (t.Signin = y),
        (t.SigninClient = _),
        Object.prototype.hasOwnProperty.call(m, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: m.__proto__ }),
        Object.keys(m).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = m[e]);
        }),
        Object.prototype.hasOwnProperty.call(v, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: v.__proto__ }),
        Object.keys(v).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = v[e]);
        }));
    },
    73415: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CreateOAuth2Token$ =
          t.CreateOAuth2TokenResponseBody$ =
          t.CreateOAuth2TokenResponse$ =
          t.CreateOAuth2TokenRequestBody$ =
          t.CreateOAuth2TokenRequest$ =
          t.AccessToken$ =
          t.errorTypeRegistries =
          t.ValidationException$ =
          t.TooManyRequestsError$ =
          t.InternalServerException$ =
          t.AccessDeniedException$ =
          t.SigninServiceException$ =
            void 0));
      const o = "accessKeyId",
        r = "accessToken",
        i = "client",
        s = "clientId",
        a = "codeVerifier",
        c = "error",
        u = "expiresIn",
        d = "grantType",
        p = "http",
        l = "httpError",
        g = "idToken",
        h = "jsonName",
        E = "message",
        S = "refreshToken",
        f = "redirectUri",
        m = "smithy.ts.sdk.synthetic.com.amazonaws.signin",
        v = "secretAccessKey",
        P = "sessionToken",
        O = "tokenType",
        _ = "com.amazonaws.signin",
        A = n(93353),
        C = n(29539),
        y = n(6486),
        R = A.TypeRegistry.for(m);
      ((t.SigninServiceException$ = [-3, m, "SigninServiceException", 0, [], []]),
        R.registerError(t.SigninServiceException$, y.SigninServiceException));
      const I = A.TypeRegistry.for(_);
      ((t.AccessDeniedException$ = [-3, _, "AccessDeniedException", { [c]: i }, [c, E], [0, 0], 2]),
        I.registerError(t.AccessDeniedException$, C.AccessDeniedException),
        (t.InternalServerException$ = [
          -3,
          _,
          "InternalServerException",
          { [c]: "server", [l]: 500 },
          [c, E],
          [0, 0],
          2,
        ]),
        I.registerError(t.InternalServerException$, C.InternalServerException),
        (t.TooManyRequestsError$ = [
          -3,
          _,
          "TooManyRequestsError",
          { [c]: i, [l]: 429 },
          [c, E],
          [0, 0],
          2,
        ]),
        I.registerError(t.TooManyRequestsError$, C.TooManyRequestsError),
        (t.ValidationException$ = [
          -3,
          _,
          "ValidationException",
          { [c]: i, [l]: 400 },
          [c, E],
          [0, 0],
          2,
        ]),
        I.registerError(t.ValidationException$, C.ValidationException),
        (t.errorTypeRegistries = [R, I]));
      var T = [0, _, "RefreshToken", 8, 0];
      ((t.AccessToken$ = [
        3,
        _,
        "AccessToken",
        8,
        [o, v, P],
        [
          [0, { [h]: o }],
          [0, { [h]: v }],
          [0, { [h]: P }],
        ],
        3,
      ]),
        (t.CreateOAuth2TokenRequest$ = [
          3,
          _,
          "CreateOAuth2TokenRequest",
          0,
          ["tokenInput"],
          [[() => t.CreateOAuth2TokenRequestBody$, 16]],
          1,
        ]),
        (t.CreateOAuth2TokenRequestBody$ = [
          3,
          _,
          "CreateOAuth2TokenRequestBody",
          0,
          [s, d, "code", f, a, S],
          [
            [0, { [h]: s }],
            [0, { [h]: d }],
            0,
            [0, { [h]: f }],
            [0, { [h]: a }],
            [() => T, { [h]: S }],
          ],
          2,
        ]),
        (t.CreateOAuth2TokenResponse$ = [
          3,
          _,
          "CreateOAuth2TokenResponse",
          0,
          ["tokenOutput"],
          [[() => t.CreateOAuth2TokenResponseBody$, 16]],
          1,
        ]),
        (t.CreateOAuth2TokenResponseBody$ = [
          3,
          _,
          "CreateOAuth2TokenResponseBody",
          0,
          [r, O, u, S, g],
          [
            [() => t.AccessToken$, { [h]: r }],
            [0, { [h]: O }],
            [1, { [h]: u }],
            [() => T, { [h]: S }],
            [0, { [h]: g }],
          ],
          4,
        ]),
        (t.CreateOAuth2Token$ = [
          9,
          _,
          "CreateOAuth2Token",
          { [p]: ["POST", "/v1/token", 200] },
          () => t.CreateOAuth2TokenRequest$,
          () => t.CreateOAuth2TokenResponse$,
        ]));
    },
    93413: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const o = n(16317).__importDefault(n(26939)),
        r = n(97464),
        i = n(58571),
        s = n(81124),
        a = n(78520),
        c = n(23296),
        u = n(39022),
        d = n(85802),
        p = n(99202),
        l = n(90099),
        g = n(50358),
        h = n(31643),
        E = n(18020),
        S = n(39946);
      t.getRuntimeConfig = (e) => {
        (0, l.emitWarningIfUnsupportedVersion)(process.version);
        const t = (0, h.resolveDefaultsModeConfig)(e),
          n = () => t().then(l.loadConfigsForDefaultMode),
          f = (0, S.getRuntimeConfig)(e);
        (0, r.emitWarningIfUnsupportedVersion)(process.version);
        const m = { profile: e?.profile, logger: f.logger };
        return {
          ...f,
          ...e,
          runtime: "node",
          defaultsMode: t,
          authSchemePreference:
            e?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, m),
          bodyLengthChecker: e?.bodyLengthChecker ?? g.calculateBodyLength,
          defaultUserAgentProvider:
            e?.defaultUserAgentProvider ??
            (0, s.createDefaultUserAgentProvider)({
              serviceId: f.serviceId,
              clientVersion: o.default.version,
            }),
          maxAttempts: e?.maxAttempts ?? (0, d.loadConfig)(u.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
          region:
            e?.region ??
            (0, d.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, {
              ...a.NODE_REGION_CONFIG_FILE_OPTIONS,
              ...m,
            }),
          requestHandler: p.NodeHttpHandler.create(e?.requestHandler ?? n),
          retryMode:
            e?.retryMode ??
            (0, d.loadConfig)(
              {
                ...u.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await n()).retryMode || E.DEFAULT_RETRY_MODE,
              },
              e,
            ),
          sha256: e?.sha256 ?? c.Hash.bind(null, "sha256"),
          streamCollector: e?.streamCollector ?? p.streamCollector,
          useDualstackEndpoint:
            e?.useDualstackEndpoint ??
            (0, d.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, m),
          useFipsEndpoint:
            e?.useFipsEndpoint ?? (0, d.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, m),
          userAgentAppId: e?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, m),
        };
      };
    },
    94450: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.defaultEndpointResolver = void 0));
      const o = n(41119),
        r = n(82713),
        i = n(59575),
        s = new r.EndpointCache({
          size: 50,
          params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
        });
      ((t.defaultEndpointResolver = (e, t = {}) =>
        s.get(e, () => (0, r.decideEndpoint)(i.bdd, { endpointParams: e, logger: t.logger }))),
        (r.customEndpointFunctions.aws = o.awsEndpointFunctions));
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/59.js.map
