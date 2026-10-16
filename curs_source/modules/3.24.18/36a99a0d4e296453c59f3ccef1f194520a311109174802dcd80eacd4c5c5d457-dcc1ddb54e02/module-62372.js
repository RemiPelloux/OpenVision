Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.GetRoleCredentials$ = exports.RoleCredentials$ = exports.GetRoleCredentialsResponse$ = exports.GetRoleCredentialsRequest$ = exports.errorTypeRegistries = exports.UnauthorizedException$ = exports.TooManyRequestsException$ = exports.ResourceNotFoundException$ = exports.InvalidRequestException$ = exports.SSOServiceException$ = void 0;
const n = "client", r = "error", s = "http", i = "httpError", a = "httpHeader", c = "httpQuery", d = "message", u = "smithy.ts.sdk.synthetic.com.amazonaws.sso", l = "com.amazonaws.sso", p = require(93353), h = require("./module-8392.js"), g = require("./module-33784.js"), S = p.TypeRegistry.for(u);
exports.SSOServiceException$ = [
    -3,
    u,
    "SSOServiceException",
    0,
    [],
    []
], S.registerError(exports.SSOServiceException$, g.SSOServiceException);
const f = p.TypeRegistry.for(l);
exports.InvalidRequestException$ = [
    -3,
    l,
    "InvalidRequestException",
    {
        [r]: n,
        [i]: 400
    },
    [
        d
    ],
    [
        0
    ]
], f.registerError(exports.InvalidRequestException$, h.InvalidRequestException), exports.ResourceNotFoundException$ = [
    -3,
    l,
    "ResourceNotFoundException",
    {
        [r]: n,
        [i]: 404
    },
    [
        d
    ],
    [
        0
    ]
], f.registerError(exports.ResourceNotFoundException$, h.ResourceNotFoundException), exports.TooManyRequestsException$ = [
    -3,
    l,
    "TooManyRequestsException",
    {
        [r]: n,
        [i]: 429
    },
    [
        d
    ],
    [
        0
    ]
], f.registerError(exports.TooManyRequestsException$, h.TooManyRequestsException), exports.UnauthorizedException$ = [
    -3,
    l,
    "UnauthorizedException",
    {
        [r]: n,
        [i]: 401
    },
    [
        d
    ],
    [
        0
    ]
], f.registerError(exports.UnauthorizedException$, h.UnauthorizedException), exports.errorTypeRegistries = [
    S,
    f
];
var m = [
    0,
    l,
    "AccessTokenType",
    8,
    0
], E = [
    0,
    l,
    "SecretAccessKeyType",
    8,
    0
], v = [
    0,
    l,
    "SessionTokenType",
    8,
    0
];
exports.GetRoleCredentialsRequest$ = [
    3,
    l,
    "GetRoleCredentialsRequest",
    0,
    [
        "roleName",
        "accountId",
        "accessToken"
    ],
    [
        [
            0,
            {
                [c]: "role_name"
            }
        ],
        [
            0,
            {
                [c]: "account_id"
            }
        ],
        [
            ()=>m,
            {
                [a]: "x-amz-sso_bearer_token"
            }
        ]
    ],
    3
], exports.GetRoleCredentialsResponse$ = [
    3,
    l,
    "GetRoleCredentialsResponse",
    0,
    [
        "roleCredentials"
    ],
    [
        [
            ()=>exports.RoleCredentials$,
            0
        ]
    ]
], exports.RoleCredentials$ = [
    3,
    l,
    "RoleCredentials",
    0,
    [
        "accessKeyId",
        "secretAccessKey",
        "sessionToken",
        "expiration"
    ],
    [
        0,
        [
            ()=>E,
            0
        ],
        [
            ()=>v,
            0
        ],
        1
    ]
], exports.GetRoleCredentials$ = [
    9,
    l,
    "GetRoleCredentials",
    {
        [s]: [
            "GET",
            "/federation/credentials",
            200
        ]
    },
    ()=>exports.GetRoleCredentialsRequest$,
    ()=>exports.GetRoleCredentialsResponse$
];
