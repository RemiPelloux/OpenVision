"use strict";
((exports.id = 578),
  (exports.ids = [578]),
  (exports.modules = {
    38950: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CreateToken$ =
          t.CreateTokenResponse$ =
          t.CreateTokenRequest$ =
          t.errorTypeRegistries =
          t.UnsupportedGrantTypeException$ =
          t.UnauthorizedClientException$ =
          t.SlowDownException$ =
          t.InvalidScopeException$ =
          t.InvalidRequestException$ =
          t.InvalidGrantException$ =
          t.InvalidClientException$ =
          t.InternalServerException$ =
          t.ExpiredTokenException$ =
          t.AuthorizationPendingException$ =
          t.AccessDeniedException$ =
          t.SSOOIDCServiceException$ =
            void 0));
      const o = "client",
        n = "error",
        i = "error_description",
        s = "http",
        c = "httpError",
        a = "reason",
        p = "refreshToken",
        d = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc",
        l = "com.amazonaws.ssooidc",
        u = r(93353),
        h = r(87242),
        E = r(47647),
        S = u.TypeRegistry.for(d);
      ((t.SSOOIDCServiceException$ = [-3, d, "SSOOIDCServiceException", 0, [], []]),
        S.registerError(t.SSOOIDCServiceException$, E.SSOOIDCServiceException));
      const g = u.TypeRegistry.for(l);
      ((t.AccessDeniedException$ = [
        -3,
        l,
        "AccessDeniedException",
        { [n]: o, [c]: 400 },
        [n, a, i],
        [0, 0, 0],
      ]),
        g.registerError(t.AccessDeniedException$, h.AccessDeniedException),
        (t.AuthorizationPendingException$ = [
          -3,
          l,
          "AuthorizationPendingException",
          { [n]: o, [c]: 400 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.AuthorizationPendingException$, h.AuthorizationPendingException),
        (t.ExpiredTokenException$ = [
          -3,
          l,
          "ExpiredTokenException",
          { [n]: o, [c]: 400 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.ExpiredTokenException$, h.ExpiredTokenException),
        (t.InternalServerException$ = [
          -3,
          l,
          "InternalServerException",
          { [n]: "server", [c]: 500 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.InternalServerException$, h.InternalServerException),
        (t.InvalidClientException$ = [
          -3,
          l,
          "InvalidClientException",
          { [n]: o, [c]: 401 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.InvalidClientException$, h.InvalidClientException),
        (t.InvalidGrantException$ = [
          -3,
          l,
          "InvalidGrantException",
          { [n]: o, [c]: 400 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.InvalidGrantException$, h.InvalidGrantException),
        (t.InvalidRequestException$ = [
          -3,
          l,
          "InvalidRequestException",
          { [n]: o, [c]: 400 },
          [n, a, i],
          [0, 0, 0],
        ]),
        g.registerError(t.InvalidRequestException$, h.InvalidRequestException),
        (t.InvalidScopeException$ = [
          -3,
          l,
          "InvalidScopeException",
          { [n]: o, [c]: 400 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.InvalidScopeException$, h.InvalidScopeException),
        (t.SlowDownException$ = [-3, l, "SlowDownException", { [n]: o, [c]: 400 }, [n, i], [0, 0]]),
        g.registerError(t.SlowDownException$, h.SlowDownException),
        (t.UnauthorizedClientException$ = [
          -3,
          l,
          "UnauthorizedClientException",
          { [n]: o, [c]: 400 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.UnauthorizedClientException$, h.UnauthorizedClientException),
        (t.UnsupportedGrantTypeException$ = [
          -3,
          l,
          "UnsupportedGrantTypeException",
          { [n]: o, [c]: 400 },
          [n, i],
          [0, 0],
        ]),
        g.registerError(t.UnsupportedGrantTypeException$, h.UnsupportedGrantTypeException),
        (t.errorTypeRegistries = [S, g]));
      var x = [0, l, "AccessToken", 8, 0],
        f = [0, l, "ClientSecret", 8, 0],
        v = [0, l, "CodeVerifier", 8, 0],
        O = [0, l, "IdToken", 8, 0],
        m = [0, l, "RefreshToken", 8, 0];
      ((t.CreateTokenRequest$ = [
        3,
        l,
        "CreateTokenRequest",
        0,
        [
          "clientId",
          "clientSecret",
          "grantType",
          "deviceCode",
          "code",
          p,
          "scope",
          "redirectUri",
          "codeVerifier",
        ],
        [0, [() => f, 0], 0, 0, 0, [() => m, 0], 64, 0, [() => v, 0]],
        3,
      ]),
        (t.CreateTokenResponse$ = [
          3,
          l,
          "CreateTokenResponse",
          0,
          ["accessToken", "tokenType", "expiresIn", p, "idToken"],
          [[() => x, 0], 0, 1, [() => m, 0], [() => O, 0]],
        ]));
      t.CreateToken$ = [
        9,
        l,
        "CreateToken",
        { [s]: ["POST", "/token", 200] },
        () => t.CreateTokenRequest$,
        () => t.CreateTokenResponse$,
      ];
    },
    47647: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SSOOIDCServiceException = t.__ServiceException = void 0));
      const o = r(90099);
      Object.defineProperty(t, "__ServiceException", {
        enumerable: !0,
        get: function () {
          return o.ServiceException;
        },
      });
      class n extends o.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, n.prototype));
        }
      }
      t.SSOOIDCServiceException = n;
    },
    50333: (e, t, r) => {
      r.d(t, { K: () => o });
      class o {
        method;
        protocol;
        hostname;
        port;
        path;
        query;
        headers;
        username;
        password;
        fragment;
        body;
        constructor(e) {
          ((this.method = e.method || "GET"),
            (this.hostname = e.hostname || "localhost"),
            (this.port = e.port),
            (this.query = e.query || {}),
            (this.headers = e.headers || {}),
            (this.body = e.body),
            (this.protocol = e.protocol
              ? ":" !== e.protocol.slice(-1)
                ? `${e.protocol}:`
                : e.protocol
              : "https:"),
            (this.path = e.path ? ("/" !== e.path.charAt(0) ? `/${e.path}` : e.path) : "/"),
            (this.username = e.username),
            (this.password = e.password),
            (this.fragment = e.fragment));
        }
        static clone(e) {
          const t = new o({ ...e, headers: { ...e.headers } });
          var r;
          return (
            t.query &&
              (t.query =
                ((r = t.query),
                Object.keys(r).reduce((e, t) => {
                  const o = r[t];
                  return { ...e, [t]: Array.isArray(o) ? [...o] : o };
                }, {}))),
            t
          );
        }
        static isInstance(e) {
          if (!e) return !1;
          const t = e;
          return (
            "method" in t &&
            "protocol" in t &&
            "hostname" in t &&
            "path" in t &&
            "object" == typeof t.query &&
            "object" == typeof t.headers
          );
        }
        clone() {
          return o.clone(this);
        }
      }
    },
    50532: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bdd = void 0));
      const o = r(82713),
        n = "ref",
        i = -1,
        s = !0,
        c = "isSet",
        a = "PartitionResult",
        p = "booleanEquals",
        d = "getAttr",
        l = { [n]: "Endpoint" },
        u = { [n]: a },
        h = {},
        E = [{ [n]: "Region" }],
        S = {
          conditions: [
            [c, [l]],
            [c, E],
            ["aws.partition", E, a],
            [p, [{ [n]: "UseFIPS" }, s]],
            [p, [{ [n]: "UseDualStack" }, s]],
            [p, [{ fn: d, argv: [u, "supportsDualStack"] }, s]],
            [p, [{ fn: d, argv: [u, "supportsFIPS"] }, s]],
            ["stringEquals", [{ fn: d, argv: [u, "name"] }, "aws-us-gov"]],
          ],
          results: [
            [i],
            [i, "Invalid Configuration: FIPS and custom endpoint are not supported"],
            [i, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
            [l, h],
            ["https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", h],
            [i, "FIPS and DualStack are enabled, but this partition does not support one or both"],
            ["https://oidc.{Region}.amazonaws.com", h],
            ["https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", h],
            [i, "FIPS is enabled but this partition does not support FIPS"],
            ["https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", h],
            [i, "DualStack is enabled but this partition does not support DualStack"],
            ["https://oidc.{Region}.{PartitionResult#dnsSuffix}", h],
            [i, "Invalid Configuration: Missing Region"],
          ],
        },
        g = 1e8,
        x = new Int32Array([
          -1,
          1,
          -1,
          0,
          13,
          3,
          1,
          4,
          g + 12,
          2,
          5,
          g + 12,
          3,
          8,
          6,
          4,
          7,
          g + 11,
          5,
          g + 9,
          g + 10,
          4,
          11,
          9,
          6,
          10,
          g + 8,
          7,
          g + 6,
          g + 7,
          5,
          12,
          g + 5,
          6,
          g + 4,
          g + 5,
          3,
          g + 1,
          14,
          4,
          g + 2,
          g + 3,
        ]);
      t.bdd = o.BinaryDecisionDiagram.from(x, 2, S.conditions, S.results);
    },
    59673: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const o = r(58571),
        n = r(93664),
        i = r(55909),
        s = r(90099),
        c = r(53043),
        a = r(3865),
        p = r(49125),
        d = r(83209),
        l = r(67647),
        u = r(38950);
      t.getRuntimeConfig = (e) => ({
        apiVersion: "2019-06-10",
        base64Decoder: e?.base64Decoder ?? a.fromBase64,
        base64Encoder: e?.base64Encoder ?? a.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? l.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? d.defaultSSOOIDCHttpAuthSchemeProvider,
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
        protocol: e?.protocol ?? n.AwsRestJsonProtocol,
        protocolSettings: e?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.ssooidc",
          errorTypeRegistries: u.errorTypeRegistries,
          version: "2019-06-10",
          serviceTarget: "AWSSSOOIDCService",
        },
        serviceId: e?.serviceId ?? "SSO OIDC",
        urlParser: e?.urlParser ?? c.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? p.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? p.toUtf8,
      });
    },
    67647: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.defaultEndpointResolver = void 0));
      const o = r(41119),
        n = r(82713),
        i = r(50532),
        s = new n.EndpointCache({
          size: 50,
          params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
        });
      ((t.defaultEndpointResolver = (e, t = {}) =>
        s.get(e, () => (0, n.decideEndpoint)(i.bdd, { endpointParams: e, logger: t.logger }))),
        (n.customEndpointFunctions.aws = o.awsEndpointFunctions));
    },
    69654: (e, t, r) => {
      var o = r(21413),
        n = r(30740),
        i = r(9622),
        s = r(35517),
        c = r(78520),
        a = r(55909),
        p = r(93353),
        d = r(34770),
        l = r(55164),
        u = r(39022),
        h = r(90099),
        E = r(83209),
        S = r(79928),
        g = r(18415),
        x = r(59344),
        f = r(38950),
        v = r(87242),
        O = r(47647);
      const m = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      };
      class I extends h.Client {
        config;
        constructor(...[e]) {
          const t = S.getRuntimeConfig(e || {});
          (super(t), (this.initConfig = t));
          const r =
            ((f = t),
            Object.assign(f, {
              useDualstackEndpoint: f.useDualstackEndpoint ?? !1,
              useFipsEndpoint: f.useFipsEndpoint ?? !1,
              defaultSigningName: "sso-oauth",
            }));
          var f;
          const v = s.resolveUserAgentConfig(r),
            O = u.resolveRetryConfig(v),
            m = c.resolveRegionConfig(O),
            I = o.resolveHostHeaderConfig(m),
            _ = l.resolveEndpointConfig(I),
            C = ((e, t) => {
              const r = Object.assign(
                g.getAwsRegionExtensionConfiguration(e),
                h.getDefaultExtensionConfiguration(e),
                x.getHttpHandlerExtensionConfiguration(e),
                ((e) => {
                  const t = e.httpAuthSchemes;
                  let r = e.httpAuthSchemeProvider,
                    o = e.credentials;
                  return {
                    setHttpAuthScheme(e) {
                      const r = t.findIndex((t) => t.schemeId === e.schemeId);
                      -1 === r ? t.push(e) : t.splice(r, 1, e);
                    },
                    httpAuthSchemes: () => t,
                    setHttpAuthSchemeProvider(e) {
                      r = e;
                    },
                    httpAuthSchemeProvider: () => r,
                    setCredentials(e) {
                      o = e;
                    },
                    credentials: () => o,
                  };
                })(e),
              );
              return (
                t.forEach((e) => e.configure(r)),
                Object.assign(
                  e,
                  g.resolveAwsRegionExtensionConfiguration(r),
                  h.resolveDefaultRuntimeConfig(r),
                  x.resolveHttpHandlerRuntimeConfig(r),
                  {
                    httpAuthSchemes: (o = r).httpAuthSchemes(),
                    httpAuthSchemeProvider: o.httpAuthSchemeProvider(),
                    credentials: o.credentials(),
                  },
                )
              );
              var o;
            })(E.resolveHttpAuthSchemeConfig(_), e?.extensions || []);
          ((this.config = C),
            this.middlewareStack.use(p.getSchemaSerdePlugin(this.config)),
            this.middlewareStack.use(s.getUserAgentPlugin(this.config)),
            this.middlewareStack.use(u.getRetryPlugin(this.config)),
            this.middlewareStack.use(d.getContentLengthPlugin(this.config)),
            this.middlewareStack.use(o.getHostHeaderPlugin(this.config)),
            this.middlewareStack.use(n.getLoggerPlugin(this.config)),
            this.middlewareStack.use(i.getRecursionDetectionPlugin(this.config)),
            this.middlewareStack.use(
              a.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
                httpAuthSchemeParametersProvider: E.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (e) =>
                  new a.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e.credentials }),
              }),
            ),
            this.middlewareStack.use(a.getHttpSigningPlugin(this.config)));
        }
        destroy() {
          super.destroy();
        }
      }
      class _ extends h.Command.classBuilder()
        .ep(m)
        .m(function (e, t, r, o) {
          return [l.getEndpointPlugin(r, e.getEndpointParameterInstructions())];
        })
        .s("AWSSSOOIDCService", "CreateToken", {})
        .n("SSOOIDCClient", "CreateTokenCommand")
        .sc(f.CreateToken$)
        .build() {}
      const C = { CreateTokenCommand: _ };
      class P extends I {}
      h.createAggregatedClient(C, P);
      ((t.$Command = h.Command),
        (t.__Client = h.Client),
        (t.SSOOIDCServiceException = O.SSOOIDCServiceException),
        (t.AccessDeniedExceptionReason = { KMS_ACCESS_DENIED: "KMS_AccessDeniedException" }),
        (t.CreateTokenCommand = _),
        (t.InvalidRequestExceptionReason = {
          KMS_DISABLED_KEY: "KMS_DisabledException",
          KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
          KMS_INVALID_STATE: "KMS_InvalidStateException",
          KMS_KEY_NOT_FOUND: "KMS_NotFoundException",
        }),
        (t.SSOOIDC = P),
        (t.SSOOIDCClient = I),
        Object.prototype.hasOwnProperty.call(f, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: f.__proto__ }),
        Object.keys(f).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = f[e]);
        }),
        Object.prototype.hasOwnProperty.call(v, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: v.__proto__ }),
        Object.keys(v).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = v[e]);
        }));
    },
    79928: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const o = r(16317).__importDefault(r(26939)),
        n = r(97464),
        i = r(58571),
        s = r(81124),
        c = r(78520),
        a = r(23296),
        p = r(39022),
        d = r(85802),
        l = r(99202),
        u = r(90099),
        h = r(50358),
        E = r(31643),
        S = r(18020),
        g = r(59673);
      t.getRuntimeConfig = (e) => {
        (0, u.emitWarningIfUnsupportedVersion)(process.version);
        const t = (0, E.resolveDefaultsModeConfig)(e),
          r = () => t().then(u.loadConfigsForDefaultMode),
          x = (0, g.getRuntimeConfig)(e);
        (0, n.emitWarningIfUnsupportedVersion)(process.version);
        const f = { profile: e?.profile, logger: x.logger };
        return {
          ...x,
          ...e,
          runtime: "node",
          defaultsMode: t,
          authSchemePreference:
            e?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, f),
          bodyLengthChecker: e?.bodyLengthChecker ?? h.calculateBodyLength,
          defaultUserAgentProvider:
            e?.defaultUserAgentProvider ??
            (0, s.createDefaultUserAgentProvider)({
              serviceId: x.serviceId,
              clientVersion: o.default.version,
            }),
          maxAttempts: e?.maxAttempts ?? (0, d.loadConfig)(p.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
          region:
            e?.region ??
            (0, d.loadConfig)(c.NODE_REGION_CONFIG_OPTIONS, {
              ...c.NODE_REGION_CONFIG_FILE_OPTIONS,
              ...f,
            }),
          requestHandler: l.NodeHttpHandler.create(e?.requestHandler ?? r),
          retryMode:
            e?.retryMode ??
            (0, d.loadConfig)(
              {
                ...p.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await r()).retryMode || S.DEFAULT_RETRY_MODE,
              },
              e,
            ),
          sha256: e?.sha256 ?? a.Hash.bind(null, "sha256"),
          streamCollector: e?.streamCollector ?? l.streamCollector,
          useDualstackEndpoint:
            e?.useDualstackEndpoint ??
            (0, d.loadConfig)(c.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, f),
          useFipsEndpoint:
            e?.useFipsEndpoint ?? (0, d.loadConfig)(c.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, f),
          userAgentAppId: e?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, f),
        };
      };
    },
    83209: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHttpAuthSchemeConfig =
          t.defaultSSOOIDCHttpAuthSchemeProvider =
          t.defaultSSOOIDCHttpAuthSchemeParametersProvider =
            void 0));
      const o = r(58571),
        n = r(5944);
      t.defaultSSOOIDCHttpAuthSchemeParametersProvider = async (e, t, r) => ({
        operation: (0, n.getSmithyContext)(t).operation,
        region:
          (await (0, n.normalizeProvider)(e.region)()) ||
          (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })(),
      });
      t.defaultSSOOIDCHttpAuthSchemeProvider = (e) => {
        const t = [];
        if ("CreateToken" === e.operation) t.push({ schemeId: "smithy.api#noAuth" });
        else
          t.push(
            (function (e) {
              return {
                schemeId: "aws.auth#sigv4",
                signingProperties: { name: "sso-oauth", region: e.region },
                propertiesExtractor: (e, t) => ({ signingProperties: { config: e, context: t } }),
              };
            })(e),
          );
        return t;
      };
      t.resolveHttpAuthSchemeConfig = (e) => {
        const t = (0, o.resolveAwsSdkSigV4Config)(e);
        return Object.assign(t, {
          authSchemePreference: (0, n.normalizeProvider)(e.authSchemePreference ?? []),
        });
      };
    },
    87242: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnsupportedGrantTypeException =
          t.UnauthorizedClientException =
          t.SlowDownException =
          t.InvalidScopeException =
          t.InvalidRequestException =
          t.InvalidGrantException =
          t.InvalidClientException =
          t.InternalServerException =
          t.ExpiredTokenException =
          t.AuthorizationPendingException =
          t.AccessDeniedException =
            void 0));
      const o = r(47647);
      class n extends o.SSOOIDCServiceException {
        name = "AccessDeniedException";
        $fault = "client";
        error;
        reason;
        error_description;
        constructor(e) {
          (super({ name: "AccessDeniedException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, n.prototype),
            (this.error = e.error),
            (this.reason = e.reason),
            (this.error_description = e.error_description));
        }
      }
      t.AccessDeniedException = n;
      class i extends o.SSOOIDCServiceException {
        name = "AuthorizationPendingException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "AuthorizationPendingException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, i.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.AuthorizationPendingException = i;
      class s extends o.SSOOIDCServiceException {
        name = "ExpiredTokenException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "ExpiredTokenException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, s.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.ExpiredTokenException = s;
      class c extends o.SSOOIDCServiceException {
        name = "InternalServerException";
        $fault = "server";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InternalServerException", $fault: "server", ...e }),
            Object.setPrototypeOf(this, c.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.InternalServerException = c;
      class a extends o.SSOOIDCServiceException {
        name = "InvalidClientException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InvalidClientException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, a.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.InvalidClientException = a;
      class p extends o.SSOOIDCServiceException {
        name = "InvalidGrantException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InvalidGrantException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, p.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.InvalidGrantException = p;
      class d extends o.SSOOIDCServiceException {
        name = "InvalidRequestException";
        $fault = "client";
        error;
        reason;
        error_description;
        constructor(e) {
          (super({ name: "InvalidRequestException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, d.prototype),
            (this.error = e.error),
            (this.reason = e.reason),
            (this.error_description = e.error_description));
        }
      }
      t.InvalidRequestException = d;
      class l extends o.SSOOIDCServiceException {
        name = "InvalidScopeException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InvalidScopeException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, l.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.InvalidScopeException = l;
      class u extends o.SSOOIDCServiceException {
        name = "SlowDownException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "SlowDownException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, u.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.SlowDownException = u;
      class h extends o.SSOOIDCServiceException {
        name = "UnauthorizedClientException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "UnauthorizedClientException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, h.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.UnauthorizedClientException = h;
      class E extends o.SSOOIDCServiceException {
        name = "UnsupportedGrantTypeException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "UnsupportedGrantTypeException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, E.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }
      t.UnsupportedGrantTypeException = E;
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-local-agent-runtime/dist/578.js.map
