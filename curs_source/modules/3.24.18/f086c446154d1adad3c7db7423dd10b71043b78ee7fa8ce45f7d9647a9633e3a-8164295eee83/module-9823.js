Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AssumeRoleWithWebIdentity$ = exports.AssumeRole$ = exports.Tag$ = exports.ProvidedContext$ = exports.PolicyDescriptorType$ = exports.Credentials$ = exports.AssumeRoleWithWebIdentityResponse$ = exports.AssumeRoleWithWebIdentityRequest$ = exports.AssumeRoleResponse$ = exports.AssumeRoleRequest$ = exports.AssumedRoleUser$ = exports.errorTypeRegistries = exports.RegionDisabledException$ = exports.PackedPolicyTooLargeException$ = exports.MalformedPolicyDocumentException$ = exports.InvalidIdentityTokenException$ = exports.IDPRejectedClaimException$ = exports.IDPCommunicationErrorException$ = exports.ExpiredTokenException$ = exports.STSServiceException$ = void 0;
const i = "AssumedRoleUser", o = "Credentials", r = "DurationSeconds", s = "Policy", a = "PolicyArns", c = "PackedPolicySize", l = "RoleArn", d = "RoleSessionName", u = "SourceIdentity", p = "awsQueryError", g = "client", m = "error", h = "httpError", S = "message", f = "smithy.ts.sdk.synthetic.com.amazonaws.sts", v = "com.amazonaws.sts", y = require(93353), E = require("./module-55339.js"), P = require("./module-32834.js"), C = y.TypeRegistry.for(f);
exports.STSServiceException$ = [
    -3,
    f,
    "STSServiceException",
    0,
    [],
    []
], C.registerError(exports.STSServiceException$, P.STSServiceException);
const A = y.TypeRegistry.for(v);
exports.ExpiredTokenException$ = [
    -3,
    v,
    "ExpiredTokenException",
    {
        [p]: [
            "ExpiredTokenException",
            400
        ],
        [m]: g,
        [h]: 400
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.ExpiredTokenException$, E.ExpiredTokenException), exports.IDPCommunicationErrorException$ = [
    -3,
    v,
    "IDPCommunicationErrorException",
    {
        [p]: [
            "IDPCommunicationError",
            400
        ],
        [m]: g,
        [h]: 400
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.IDPCommunicationErrorException$, E.IDPCommunicationErrorException), exports.IDPRejectedClaimException$ = [
    -3,
    v,
    "IDPRejectedClaimException",
    {
        [p]: [
            "IDPRejectedClaim",
            403
        ],
        [m]: g,
        [h]: 403
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.IDPRejectedClaimException$, E.IDPRejectedClaimException), exports.InvalidIdentityTokenException$ = [
    -3,
    v,
    "InvalidIdentityTokenException",
    {
        [p]: [
            "InvalidIdentityToken",
            400
        ],
        [m]: g,
        [h]: 400
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.InvalidIdentityTokenException$, E.InvalidIdentityTokenException), exports.MalformedPolicyDocumentException$ = [
    -3,
    v,
    "MalformedPolicyDocumentException",
    {
        [p]: [
            "MalformedPolicyDocument",
            400
        ],
        [m]: g,
        [h]: 400
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.MalformedPolicyDocumentException$, E.MalformedPolicyDocumentException), exports.PackedPolicyTooLargeException$ = [
    -3,
    v,
    "PackedPolicyTooLargeException",
    {
        [p]: [
            "PackedPolicyTooLarge",
            400
        ],
        [m]: g,
        [h]: 400
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.PackedPolicyTooLargeException$, E.PackedPolicyTooLargeException), exports.RegionDisabledException$ = [
    -3,
    v,
    "RegionDisabledException",
    {
        [p]: [
            "RegionDisabledException",
            403
        ],
        [m]: g,
        [h]: 403
    },
    [
        S
    ],
    [
        0
    ]
], A.registerError(exports.RegionDisabledException$, E.RegionDisabledException), exports.errorTypeRegistries = [
    C,
    A
];
var R = [
    0,
    v,
    "accessKeySecretType",
    8,
    0
], w = [
    0,
    v,
    "clientTokenType",
    8,
    0
];
exports.AssumedRoleUser$ = [
    3,
    v,
    i,
    0,
    [
        "AssumedRoleId",
        "Arn"
    ],
    [
        0,
        0
    ],
    2
], exports.AssumeRoleRequest$ = [
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
        "ProvidedContexts"
    ],
    [
        0,
        0,
        ()=>I,
        0,
        1,
        ()=>T,
        64,
        0,
        0,
        0,
        0,
        ()=>x
    ],
    2
], exports.AssumeRoleResponse$ = [
    3,
    v,
    "AssumeRoleResponse",
    0,
    [
        o,
        i,
        c,
        u
    ],
    [
        [
            ()=>exports.Credentials$,
            0
        ],
        ()=>exports.AssumedRoleUser$,
        1,
        0
    ]
], exports.AssumeRoleWithWebIdentityRequest$ = [
    3,
    v,
    "AssumeRoleWithWebIdentityRequest",
    0,
    [
        l,
        d,
        "WebIdentityToken",
        "ProviderId",
        a,
        s,
        r
    ],
    [
        0,
        0,
        [
            ()=>w,
            0
        ],
        0,
        ()=>I,
        0,
        1
    ],
    3
], exports.AssumeRoleWithWebIdentityResponse$ = [
    3,
    v,
    "AssumeRoleWithWebIdentityResponse",
    0,
    [
        o,
        "SubjectFromWebIdentityToken",
        i,
        c,
        "Provider",
        "Audience",
        u
    ],
    [
        [
            ()=>exports.Credentials$,
            0
        ],
        0,
        ()=>exports.AssumedRoleUser$,
        1,
        0,
        0,
        0
    ]
], exports.Credentials$ = [
    3,
    v,
    o,
    0,
    [
        "AccessKeyId",
        "SecretAccessKey",
        "SessionToken",
        "Expiration"
    ],
    [
        0,
        [
            ()=>R,
            0
        ],
        0,
        4
    ],
    4
], exports.PolicyDescriptorType$ = [
    3,
    v,
    "PolicyDescriptorType",
    0,
    [
        "arn"
    ],
    [
        0
    ]
], exports.ProvidedContext$ = [
    3,
    v,
    "ProvidedContext",
    0,
    [
        "ProviderArn",
        "ContextAssertion"
    ],
    [
        0,
        0
    ]
], exports.Tag$ = [
    3,
    v,
    "Tag",
    0,
    [
        "Key",
        "Value"
    ],
    [
        0,
        0
    ],
    2
];
var I = [
    1,
    v,
    "policyDescriptorListType",
    0,
    ()=>exports.PolicyDescriptorType$
], x = [
    1,
    v,
    "ProvidedContextsListType",
    0,
    ()=>exports.ProvidedContext$
], T = [
    1,
    v,
    "tagListType",
    0,
    ()=>exports.Tag$
];
exports.AssumeRole$ = [
    9,
    v,
    "AssumeRole",
    0,
    ()=>exports.AssumeRoleRequest$,
    ()=>exports.AssumeRoleResponse$
], exports.AssumeRoleWithWebIdentity$ = [
    9,
    v,
    "AssumeRoleWithWebIdentity",
    0,
    ()=>exports.AssumeRoleWithWebIdentityRequest$,
    ()=>exports.AssumeRoleWithWebIdentityResponse$
];
