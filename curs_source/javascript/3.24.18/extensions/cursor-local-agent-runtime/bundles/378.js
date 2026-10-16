"use strict";
((exports.id = 378),
  (exports.ids = [378]),
  (exports.modules = {
    8392: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnauthorizedException =
          t.TooManyRequestsException =
          t.ResourceNotFoundException =
          t.InvalidRequestException =
            void 0));
      const n = o(33784);
      class r extends n.SSOServiceException {
        name = "InvalidRequestException";
        $fault = "client";
        constructor(e) {
          (super({ name: "InvalidRequestException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, r.prototype));
        }
      }
      t.InvalidRequestException = r;
      class s extends n.SSOServiceException {
        name = "ResourceNotFoundException";
        $fault = "client";
        constructor(e) {
          (super({ name: "ResourceNotFoundException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, s.prototype));
        }
      }
      t.ResourceNotFoundException = s;
      class i extends n.SSOServiceException {
        name = "TooManyRequestsException";
        $fault = "client";
        constructor(e) {
          (super({ name: "TooManyRequestsException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, i.prototype));
        }
      }
      t.TooManyRequestsException = i;
      class a extends n.SSOServiceException {
        name = "UnauthorizedException";
        $fault = "client";
        constructor(e) {
          (super({ name: "UnauthorizedException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, a.prototype));
        }
      }
      t.UnauthorizedException = a;
    },
    25504: (e, t, o) => {
      var n = o(21413),
        r = o(30740),
        s = o(9622),
        i = o(35517),
        a = o(78520),
        c = o(55909),
        d = o(93353),
        u = o(34770),
        l = o(55164),
        p = o(39022),
        h = o(90099),
        g = o(56475),
        S = o(34066),
        f = o(18415),
        m = o(59344),
        E = o(62372),
        v = o(8392),
        P = o(33784);
      const y = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      };
      class R extends h.Client {
        config;
        constructor(...[e]) {
          const t = S.getRuntimeConfig(e || {});
          (super(t), (this.initConfig = t));
          const o =
            ((E = t),
            Object.assign(E, {
              useDualstackEndpoint: E.useDualstackEndpoint ?? !1,
              useFipsEndpoint: E.useFipsEndpoint ?? !1,
              defaultSigningName: "awsssoportal",
            }));
          var E;
          const v = i.resolveUserAgentConfig(o),
            P = p.resolveRetryConfig(v),
            y = a.resolveRegionConfig(P),
            R = n.resolveHostHeaderConfig(y),
            O = l.resolveEndpointConfig(R),
            C = ((e, t) => {
              const o = Object.assign(
                f.getAwsRegionExtensionConfiguration(e),
                h.getDefaultExtensionConfiguration(e),
                m.getHttpHandlerExtensionConfiguration(e),
                ((e) => {
                  const t = e.httpAuthSchemes;
                  let o = e.httpAuthSchemeProvider,
                    n = e.credentials;
                  return {
                    setHttpAuthScheme(e) {
                      const o = t.findIndex((t) => t.schemeId === e.schemeId);
                      -1 === o ? t.push(e) : t.splice(o, 1, e);
                    },
                    httpAuthSchemes: () => t,
                    setHttpAuthSchemeProvider(e) {
                      o = e;
                    },
                    httpAuthSchemeProvider: () => o,
                    setCredentials(e) {
                      n = e;
                    },
                    credentials: () => n,
                  };
                })(e),
              );
              return (
                t.forEach((e) => e.configure(o)),
                Object.assign(
                  e,
                  f.resolveAwsRegionExtensionConfiguration(o),
                  h.resolveDefaultRuntimeConfig(o),
                  m.resolveHttpHandlerRuntimeConfig(o),
                  {
                    httpAuthSchemes: (n = o).httpAuthSchemes(),
                    httpAuthSchemeProvider: n.httpAuthSchemeProvider(),
                    credentials: n.credentials(),
                  },
                )
              );
              var n;
            })(g.resolveHttpAuthSchemeConfig(O), e?.extensions || []);
          ((this.config = C),
            this.middlewareStack.use(d.getSchemaSerdePlugin(this.config)),
            this.middlewareStack.use(i.getUserAgentPlugin(this.config)),
            this.middlewareStack.use(p.getRetryPlugin(this.config)),
            this.middlewareStack.use(u.getContentLengthPlugin(this.config)),
            this.middlewareStack.use(n.getHostHeaderPlugin(this.config)),
            this.middlewareStack.use(r.getLoggerPlugin(this.config)),
            this.middlewareStack.use(s.getRecursionDetectionPlugin(this.config)),
            this.middlewareStack.use(
              c.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
                httpAuthSchemeParametersProvider: g.defaultSSOHttpAuthSchemeParametersProvider,
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
      class O extends h.Command.classBuilder()
        .ep(y)
        .m(function (e, t, o, n) {
          return [l.getEndpointPlugin(o, e.getEndpointParameterInstructions())];
        })
        .s("SWBPortalService", "GetRoleCredentials", {})
        .n("SSOClient", "GetRoleCredentialsCommand")
        .sc(E.GetRoleCredentials$)
        .build() {}
      const C = { GetRoleCredentialsCommand: O };
      class _ extends R {}
      (h.createAggregatedClient(C, _),
        (t.$Command = h.Command),
        (t.__Client = h.Client),
        (t.SSOServiceException = P.SSOServiceException),
        (t.GetRoleCredentialsCommand = O),
        (t.SSO = _),
        (t.SSOClient = R),
        Object.prototype.hasOwnProperty.call(E, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: E.__proto__ }),
        Object.keys(E).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = E[e]);
        }),
        Object.prototype.hasOwnProperty.call(v, "__proto__") &&
          !Object.prototype.hasOwnProperty.call(t, "__proto__") &&
          Object.defineProperty(t, "__proto__", { enumerable: !0, value: v.__proto__ }),
        Object.keys(v).forEach(function (e) {
          "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = v[e]);
        }));
    },
    27846: (e, t, o) => {
      o.d(t, {
        GetRoleCredentialsCommand: () => n.GetRoleCredentialsCommand,
        SSOClient: () => n.SSOClient,
      });
      var n = o(25504);
    },
    33784: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SSOServiceException = t.__ServiceException = void 0));
      const n = o(90099);
      Object.defineProperty(t, "__ServiceException", {
        enumerable: !0,
        get: function () {
          return n.ServiceException;
        },
      });
      class r extends n.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, r.prototype));
        }
      }
      t.SSOServiceException = r;
    },
    34066: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const n = o(16317).__importDefault(o(26939)),
        r = o(97464),
        s = o(58571),
        i = o(81124),
        a = o(78520),
        c = o(23296),
        d = o(39022),
        u = o(85802),
        l = o(99202),
        p = o(90099),
        h = o(50358),
        g = o(31643),
        S = o(18020),
        f = o(82571);
      t.getRuntimeConfig = (e) => {
        (0, p.emitWarningIfUnsupportedVersion)(process.version);
        const t = (0, g.resolveDefaultsModeConfig)(e),
          o = () => t().then(p.loadConfigsForDefaultMode),
          m = (0, f.getRuntimeConfig)(e);
        (0, r.emitWarningIfUnsupportedVersion)(process.version);
        const E = { profile: e?.profile, logger: m.logger };
        return {
          ...m,
          ...e,
          runtime: "node",
          defaultsMode: t,
          authSchemePreference:
            e?.authSchemePreference ?? (0, u.loadConfig)(s.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, E),
          bodyLengthChecker: e?.bodyLengthChecker ?? h.calculateBodyLength,
          defaultUserAgentProvider:
            e?.defaultUserAgentProvider ??
            (0, i.createDefaultUserAgentProvider)({
              serviceId: m.serviceId,
              clientVersion: n.default.version,
            }),
          maxAttempts: e?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
          region:
            e?.region ??
            (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, {
              ...a.NODE_REGION_CONFIG_FILE_OPTIONS,
              ...E,
            }),
          requestHandler: l.NodeHttpHandler.create(e?.requestHandler ?? o),
          retryMode:
            e?.retryMode ??
            (0, u.loadConfig)(
              {
                ...d.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await o()).retryMode || S.DEFAULT_RETRY_MODE,
              },
              e,
            ),
          sha256: e?.sha256 ?? c.Hash.bind(null, "sha256"),
          streamCollector: e?.streamCollector ?? l.streamCollector,
          useDualstackEndpoint:
            e?.useDualstackEndpoint ??
            (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, E),
          useFipsEndpoint:
            e?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, E),
          userAgentAppId: e?.userAgentAppId ?? (0, u.loadConfig)(i.NODE_APP_ID_CONFIG_OPTIONS, E),
        };
      };
    },
    50333: (e, t, o) => {
      o.d(t, { K: () => n });
      class n {
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
          const t = new n({ ...e, headers: { ...e.headers } });
          var o;
          return (
            t.query &&
              (t.query =
                ((o = t.query),
                Object.keys(o).reduce((e, t) => {
                  const n = o[t];
                  return { ...e, [t]: Array.isArray(n) ? [...n] : n };
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
          return n.clone(this);
        }
      }
    },
    56475: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHttpAuthSchemeConfig =
          t.defaultSSOHttpAuthSchemeProvider =
          t.defaultSSOHttpAuthSchemeParametersProvider =
            void 0));
      const n = o(58571),
        r = o(5944);
      t.defaultSSOHttpAuthSchemeParametersProvider = async (e, t, o) => ({
        operation: (0, r.getSmithyContext)(t).operation,
        region:
          (await (0, r.normalizeProvider)(e.region)()) ||
          (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })(),
      });
      t.defaultSSOHttpAuthSchemeProvider = (e) => {
        const t = [];
        if ("GetRoleCredentials" === e.operation) t.push({ schemeId: "smithy.api#noAuth" });
        else
          t.push(
            (function (e) {
              return {
                schemeId: "aws.auth#sigv4",
                signingProperties: { name: "awsssoportal", region: e.region },
                propertiesExtractor: (e, t) => ({ signingProperties: { config: e, context: t } }),
              };
            })(e),
          );
        return t;
      };
      t.resolveHttpAuthSchemeConfig = (e) => {
        const t = (0, n.resolveAwsSdkSigV4Config)(e);
        return Object.assign(t, {
          authSchemePreference: (0, r.normalizeProvider)(e.authSchemePreference ?? []),
        });
      };
    },
    62372: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GetRoleCredentials$ =
          t.RoleCredentials$ =
          t.GetRoleCredentialsResponse$ =
          t.GetRoleCredentialsRequest$ =
          t.errorTypeRegistries =
          t.UnauthorizedException$ =
          t.TooManyRequestsException$ =
          t.ResourceNotFoundException$ =
          t.InvalidRequestException$ =
          t.SSOServiceException$ =
            void 0));
      const n = "client",
        r = "error",
        s = "http",
        i = "httpError",
        a = "httpHeader",
        c = "httpQuery",
        d = "message",
        u = "smithy.ts.sdk.synthetic.com.amazonaws.sso",
        l = "com.amazonaws.sso",
        p = o(93353),
        h = o(8392),
        g = o(33784),
        S = p.TypeRegistry.for(u);
      ((t.SSOServiceException$ = [-3, u, "SSOServiceException", 0, [], []]),
        S.registerError(t.SSOServiceException$, g.SSOServiceException));
      const f = p.TypeRegistry.for(l);
      ((t.InvalidRequestException$ = [
        -3,
        l,
        "InvalidRequestException",
        { [r]: n, [i]: 400 },
        [d],
        [0],
      ]),
        f.registerError(t.InvalidRequestException$, h.InvalidRequestException),
        (t.ResourceNotFoundException$ = [
          -3,
          l,
          "ResourceNotFoundException",
          { [r]: n, [i]: 404 },
          [d],
          [0],
        ]),
        f.registerError(t.ResourceNotFoundException$, h.ResourceNotFoundException),
        (t.TooManyRequestsException$ = [
          -3,
          l,
          "TooManyRequestsException",
          { [r]: n, [i]: 429 },
          [d],
          [0],
        ]),
        f.registerError(t.TooManyRequestsException$, h.TooManyRequestsException),
        (t.UnauthorizedException$ = [
          -3,
          l,
          "UnauthorizedException",
          { [r]: n, [i]: 401 },
          [d],
          [0],
        ]),
        f.registerError(t.UnauthorizedException$, h.UnauthorizedException),
        (t.errorTypeRegistries = [S, f]));
      var m = [0, l, "AccessTokenType", 8, 0],
        E = [0, l, "SecretAccessKeyType", 8, 0],
        v = [0, l, "SessionTokenType", 8, 0];
      ((t.GetRoleCredentialsRequest$ = [
        3,
        l,
        "GetRoleCredentialsRequest",
        0,
        ["roleName", "accountId", "accessToken"],
        [
          [0, { [c]: "role_name" }],
          [0, { [c]: "account_id" }],
          [() => m, { [a]: "x-amz-sso_bearer_token" }],
        ],
        3,
      ]),
        (t.GetRoleCredentialsResponse$ = [
          3,
          l,
          "GetRoleCredentialsResponse",
          0,
          ["roleCredentials"],
          [[() => t.RoleCredentials$, 0]],
        ]),
        (t.RoleCredentials$ = [
          3,
          l,
          "RoleCredentials",
          0,
          ["accessKeyId", "secretAccessKey", "sessionToken", "expiration"],
          [0, [() => E, 0], [() => v, 0], 1],
        ]),
        (t.GetRoleCredentials$ = [
          9,
          l,
          "GetRoleCredentials",
          { [s]: ["GET", "/federation/credentials", 200] },
          () => t.GetRoleCredentialsRequest$,
          () => t.GetRoleCredentialsResponse$,
        ]));
    },
    78674: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bdd = void 0));
      const n = o(82713),
        r = "ref",
        s = -1,
        i = !0,
        a = "isSet",
        c = "PartitionResult",
        d = "booleanEquals",
        u = "getAttr",
        l = { [r]: "Endpoint" },
        p = { [r]: c },
        h = {},
        g = [{ [r]: "Region" }],
        S = {
          conditions: [
            [a, [l]],
            [a, g],
            ["aws.partition", g, c],
            [d, [{ [r]: "UseFIPS" }, i]],
            [d, [{ [r]: "UseDualStack" }, i]],
            [d, [{ fn: u, argv: [p, "supportsDualStack"] }, i]],
            [d, [{ fn: u, argv: [p, "supportsFIPS"] }, i]],
            ["stringEquals", [{ fn: u, argv: [p, "name"] }, "aws-us-gov"]],
          ],
          results: [
            [s],
            [s, "Invalid Configuration: FIPS and custom endpoint are not supported"],
            [s, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
            [l, h],
            ["https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", h],
            [s, "FIPS and DualStack are enabled, but this partition does not support one or both"],
            ["https://portal.sso.{Region}.amazonaws.com", h],
            ["https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", h],
            [s, "FIPS is enabled but this partition does not support FIPS"],
            ["https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", h],
            [s, "DualStack is enabled but this partition does not support DualStack"],
            ["https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", h],
            [s, "Invalid Configuration: Missing Region"],
          ],
        },
        f = 1e8,
        m = new Int32Array([
          -1,
          1,
          -1,
          0,
          13,
          3,
          1,
          4,
          f + 12,
          2,
          5,
          f + 12,
          3,
          8,
          6,
          4,
          7,
          f + 11,
          5,
          f + 9,
          f + 10,
          4,
          11,
          9,
          6,
          10,
          f + 8,
          7,
          f + 6,
          f + 7,
          5,
          12,
          f + 5,
          6,
          f + 4,
          f + 5,
          3,
          f + 1,
          14,
          4,
          f + 2,
          f + 3,
        ]);
      t.bdd = n.BinaryDecisionDiagram.from(m, 2, S.conditions, S.results);
    },
    82571: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRuntimeConfig = void 0));
      const n = o(58571),
        r = o(93664),
        s = o(55909),
        i = o(90099),
        a = o(53043),
        c = o(3865),
        d = o(49125),
        u = o(56475),
        l = o(89765),
        p = o(62372);
      t.getRuntimeConfig = (e) => ({
        apiVersion: "2019-06-10",
        base64Decoder: e?.base64Decoder ?? c.fromBase64,
        base64Encoder: e?.base64Encoder ?? c.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? l.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? u.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4"),
            signer: new n.AwsSdkSigV4Signer(),
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (e) =>
              e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new s.NoAuthSigner(),
          },
        ],
        logger: e?.logger ?? new i.NoOpLogger(),
        protocol: e?.protocol ?? r.AwsRestJsonProtocol,
        protocolSettings: e?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.sso",
          errorTypeRegistries: p.errorTypeRegistries,
          version: "2019-06-10",
          serviceTarget: "SWBPortalService",
        },
        serviceId: e?.serviceId ?? "SSO",
        urlParser: e?.urlParser ?? a.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? d.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? d.toUtf8,
      });
    },
    89765: (e, t, o) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.defaultEndpointResolver = void 0));
      const n = o(41119),
        r = o(82713),
        s = o(78674),
        i = new r.EndpointCache({
          size: 50,
          params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
        });
      ((t.defaultEndpointResolver = (e, t = {}) =>
        i.get(e, () => (0, r.decideEndpoint)(s.bdd, { endpointParams: e, logger: t.logger }))),
        (r.customEndpointFunctions.aws = n.awsEndpointFunctions));
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-local-agent-runtime/dist/378.js.map
