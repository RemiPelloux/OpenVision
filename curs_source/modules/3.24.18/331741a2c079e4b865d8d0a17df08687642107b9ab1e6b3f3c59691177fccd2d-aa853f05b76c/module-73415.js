Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CreateOAuth2Token$ = exports.CreateOAuth2TokenResponseBody$ = exports.CreateOAuth2TokenResponse$ = exports.CreateOAuth2TokenRequestBody$ = exports.CreateOAuth2TokenRequest$ = exports.AccessToken$ = exports.errorTypeRegistries = exports.ValidationException$ = exports.TooManyRequestsError$ = exports.InternalServerException$ = exports.AccessDeniedException$ = exports.SigninServiceException$ = void 0;
const o = "accessKeyId", r = "accessToken", i = "client", s = "clientId", a = "codeVerifier", c = "error", u = "expiresIn", d = "grantType", p = "http", l = "httpError", g = "idToken", h = "jsonName", E = "message", S = "refreshToken", f = "redirectUri", m = "smithy.ts.sdk.synthetic.com.amazonaws.signin", v = "secretAccessKey", P = "sessionToken", O = "tokenType", _ = "com.amazonaws.signin", A = require(93353), C = require("./module-29539.js"), y = require("./module-6486.js"), R = A.TypeRegistry.for(m);
exports.SigninServiceException$ = [
    -3,
    m,
    "SigninServiceException",
    0,
    [],
    []
], R.registerError(exports.SigninServiceException$, y.SigninServiceException);
const I = A.TypeRegistry.for(_);
exports.AccessDeniedException$ = [
    -3,
    _,
    "AccessDeniedException",
    {
        [c]: i
    },
    [
        c,
        E
    ],
    [
        0,
        0
    ],
    2
], I.registerError(exports.AccessDeniedException$, C.AccessDeniedException), exports.InternalServerException$ = [
    -3,
    _,
    "InternalServerException",
    {
        [c]: "server",
        [l]: 500
    },
    [
        c,
        E
    ],
    [
        0,
        0
    ],
    2
], I.registerError(exports.InternalServerException$, C.InternalServerException), exports.TooManyRequestsError$ = [
    -3,
    _,
    "TooManyRequestsError",
    {
        [c]: i,
        [l]: 429
    },
    [
        c,
        E
    ],
    [
        0,
        0
    ],
    2
], I.registerError(exports.TooManyRequestsError$, C.TooManyRequestsError), exports.ValidationException$ = [
    -3,
    _,
    "ValidationException",
    {
        [c]: i,
        [l]: 400
    },
    [
        c,
        E
    ],
    [
        0,
        0
    ],
    2
], I.registerError(exports.ValidationException$, C.ValidationException), exports.errorTypeRegistries = [
    R,
    I
];
var T = [
    0,
    _,
    "RefreshToken",
    8,
    0
];
exports.AccessToken$ = [
    3,
    _,
    "AccessToken",
    8,
    [
        o,
        v,
        P
    ],
    [
        [
            0,
            {
                [h]: o
            }
        ],
        [
            0,
            {
                [h]: v
            }
        ],
        [
            0,
            {
                [h]: P
            }
        ]
    ],
    3
], exports.CreateOAuth2TokenRequest$ = [
    3,
    _,
    "CreateOAuth2TokenRequest",
    0,
    [
        "tokenInput"
    ],
    [
        [
            ()=>exports.CreateOAuth2TokenRequestBody$,
            16
        ]
    ],
    1
], exports.CreateOAuth2TokenRequestBody$ = [
    3,
    _,
    "CreateOAuth2TokenRequestBody",
    0,
    [
        s,
        d,
        "code",
        f,
        a,
        S
    ],
    [
        [
            0,
            {
                [h]: s
            }
        ],
        [
            0,
            {
                [h]: d
            }
        ],
        0,
        [
            0,
            {
                [h]: f
            }
        ],
        [
            0,
            {
                [h]: a
            }
        ],
        [
            ()=>T,
            {
                [h]: S
            }
        ]
    ],
    2
], exports.CreateOAuth2TokenResponse$ = [
    3,
    _,
    "CreateOAuth2TokenResponse",
    0,
    [
        "tokenOutput"
    ],
    [
        [
            ()=>exports.CreateOAuth2TokenResponseBody$,
            16
        ]
    ],
    1
], exports.CreateOAuth2TokenResponseBody$ = [
    3,
    _,
    "CreateOAuth2TokenResponseBody",
    0,
    [
        r,
        O,
        u,
        S,
        g
    ],
    [
        [
            ()=>exports.AccessToken$,
            {
                [h]: r
            }
        ],
        [
            0,
            {
                [h]: O
            }
        ],
        [
            1,
            {
                [h]: u
            }
        ],
        [
            ()=>T,
            {
                [h]: S
            }
        ],
        [
            0,
            {
                [h]: g
            }
        ]
    ],
    4
], exports.CreateOAuth2Token$ = [
    9,
    _,
    "CreateOAuth2Token",
    {
        [p]: [
            "POST",
            "/v1/token",
            200
        ]
    },
    ()=>exports.CreateOAuth2TokenRequest$,
    ()=>exports.CreateOAuth2TokenResponse$
];
