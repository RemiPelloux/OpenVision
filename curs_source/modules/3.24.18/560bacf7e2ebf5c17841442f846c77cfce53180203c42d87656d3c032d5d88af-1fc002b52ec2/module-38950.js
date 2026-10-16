Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CreateToken$ = exports.CreateTokenResponse$ = exports.CreateTokenRequest$ = exports.errorTypeRegistries = exports.UnsupportedGrantTypeException$ = exports.UnauthorizedClientException$ = exports.SlowDownException$ = exports.InvalidScopeException$ = exports.InvalidRequestException$ = exports.InvalidGrantException$ = exports.InvalidClientException$ = exports.InternalServerException$ = exports.ExpiredTokenException$ = exports.AuthorizationPendingException$ = exports.AccessDeniedException$ = exports.SSOOIDCServiceException$ = void 0;
const o = "client", n = "error", i = "error_description", s = "http", c = "httpError", a = "reason", p = "refreshToken", d = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc", l = "com.amazonaws.ssooidc", u = require(93353), h = require("./module-87242.js"), E = require("./module-47647.js"), S = u.TypeRegistry.for(d);
exports.SSOOIDCServiceException$ = [
    -3,
    d,
    "SSOOIDCServiceException",
    0,
    [],
    []
], S.registerError(exports.SSOOIDCServiceException$, E.SSOOIDCServiceException);
const g = u.TypeRegistry.for(l);
exports.AccessDeniedException$ = [
    -3,
    l,
    "AccessDeniedException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        a,
        i
    ],
    [
        0,
        0,
        0
    ]
], g.registerError(exports.AccessDeniedException$, h.AccessDeniedException), exports.AuthorizationPendingException$ = [
    -3,
    l,
    "AuthorizationPendingException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.AuthorizationPendingException$, h.AuthorizationPendingException), exports.ExpiredTokenException$ = [
    -3,
    l,
    "ExpiredTokenException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.ExpiredTokenException$, h.ExpiredTokenException), exports.InternalServerException$ = [
    -3,
    l,
    "InternalServerException",
    {
        [n]: "server",
        [c]: 500
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.InternalServerException$, h.InternalServerException), exports.InvalidClientException$ = [
    -3,
    l,
    "InvalidClientException",
    {
        [n]: o,
        [c]: 401
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.InvalidClientException$, h.InvalidClientException), exports.InvalidGrantException$ = [
    -3,
    l,
    "InvalidGrantException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.InvalidGrantException$, h.InvalidGrantException), exports.InvalidRequestException$ = [
    -3,
    l,
    "InvalidRequestException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        a,
        i
    ],
    [
        0,
        0,
        0
    ]
], g.registerError(exports.InvalidRequestException$, h.InvalidRequestException), exports.InvalidScopeException$ = [
    -3,
    l,
    "InvalidScopeException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.InvalidScopeException$, h.InvalidScopeException), exports.SlowDownException$ = [
    -3,
    l,
    "SlowDownException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.SlowDownException$, h.SlowDownException), exports.UnauthorizedClientException$ = [
    -3,
    l,
    "UnauthorizedClientException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.UnauthorizedClientException$, h.UnauthorizedClientException), exports.UnsupportedGrantTypeException$ = [
    -3,
    l,
    "UnsupportedGrantTypeException",
    {
        [n]: o,
        [c]: 400
    },
    [
        n,
        i
    ],
    [
        0,
        0
    ]
], g.registerError(exports.UnsupportedGrantTypeException$, h.UnsupportedGrantTypeException), exports.errorTypeRegistries = [
    S,
    g
];
var x = [
    0,
    l,
    "AccessToken",
    8,
    0
], f = [
    0,
    l,
    "ClientSecret",
    8,
    0
], v = [
    0,
    l,
    "CodeVerifier",
    8,
    0
], O = [
    0,
    l,
    "IdToken",
    8,
    0
], m = [
    0,
    l,
    "RefreshToken",
    8,
    0
];
exports.CreateTokenRequest$ = [
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
        "codeVerifier"
    ],
    [
        0,
        [
            ()=>f,
            0
        ],
        0,
        0,
        0,
        [
            ()=>m,
            0
        ],
        64,
        0,
        [
            ()=>v,
            0
        ]
    ],
    3
], exports.CreateTokenResponse$ = [
    3,
    l,
    "CreateTokenResponse",
    0,
    [
        "accessToken",
        "tokenType",
        "expiresIn",
        p,
        "idToken"
    ],
    [
        [
            ()=>x,
            0
        ],
        0,
        1,
        [
            ()=>m,
            0
        ],
        [
            ()=>O,
            0
        ]
    ]
];
exports.CreateToken$ = [
    9,
    l,
    "CreateToken",
    {
        [s]: [
            "POST",
            "/token",
            200
        ]
    },
    ()=>exports.CreateTokenRequest$,
    ()=>exports.CreateTokenResponse$
];
