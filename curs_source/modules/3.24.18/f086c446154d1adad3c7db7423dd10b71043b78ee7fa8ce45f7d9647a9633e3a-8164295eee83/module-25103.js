Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bdd = void 0;
const i = require(82713), o = "ref", r = -1, s = !0, a = "isSet", c = "PartitionResult", l = "booleanEquals", d = "stringEquals", u = "getAttr", p = "us-east-1", g = "sigv4", m = "https://sts.{Region}.{PartitionResult#dnsSuffix}", h = {
    [o]: "Endpoint"
}, S = {
    [o]: "Region"
}, f = {
    [o]: c
}, v = {}, y = [
    S
], E = {
    conditions: [
        [
            a,
            [
                h
            ]
        ],
        [
            a,
            y
        ],
        [
            "aws.partition",
            y,
            c
        ],
        [
            l,
            [
                {
                    [o]: "UseFIPS"
                },
                s
            ]
        ],
        [
            l,
            [
                {
                    [o]: "UseDualStack"
                },
                s
            ]
        ],
        [
            d,
            [
                S,
                "aws-global"
            ]
        ],
        [
            l,
            [
                {
                    [o]: "UseGlobalEndpoint"
                },
                s
            ]
        ],
        [
            d,
            [
                S,
                "eu-central-1"
            ]
        ],
        [
            l,
            [
                {
                    fn: u,
                    argv: [
                        f,
                        "supportsDualStack"
                    ]
                },
                s
            ]
        ],
        [
            l,
            [
                {
                    fn: u,
                    argv: [
                        f,
                        "supportsFIPS"
                    ]
                },
                s
            ]
        ],
        [
            d,
            [
                S,
                "ap-south-1"
            ]
        ],
        [
            d,
            [
                S,
                "eu-north-1"
            ]
        ],
        [
            d,
            [
                S,
                "eu-west-1"
            ]
        ],
        [
            d,
            [
                S,
                "eu-west-2"
            ]
        ],
        [
            d,
            [
                S,
                "eu-west-3"
            ]
        ],
        [
            d,
            [
                S,
                "sa-east-1"
            ]
        ],
        [
            d,
            [
                S,
                p
            ]
        ],
        [
            d,
            [
                S,
                "us-east-2"
            ]
        ],
        [
            d,
            [
                S,
                "us-west-2"
            ]
        ],
        [
            d,
            [
                S,
                "us-west-1"
            ]
        ],
        [
            d,
            [
                S,
                "ca-central-1"
            ]
        ],
        [
            d,
            [
                S,
                "ap-southeast-1"
            ]
        ],
        [
            d,
            [
                S,
                "ap-northeast-1"
            ]
        ],
        [
            d,
            [
                S,
                "ap-southeast-2"
            ]
        ],
        [
            d,
            [
                {
                    fn: u,
                    argv: [
                        f,
                        "name"
                    ]
                },
                "aws-us-gov"
            ]
        ]
    ],
    results: [
        [
            r
        ],
        [
            "https://sts.amazonaws.com",
            {
                authSchemes: [
                    {
                        name: g,
                        signingName: "sts",
                        signingRegion: p
                    }
                ]
            }
        ],
        [
            m,
            {
                authSchemes: [
                    {
                        name: g,
                        signingName: "sts",
                        signingRegion: "{Region}"
                    }
                ]
            }
        ],
        [
            r,
            "Invalid Configuration: FIPS and custom endpoint are not supported"
        ],
        [
            r,
            "Invalid Configuration: Dualstack and custom endpoint are not supported"
        ],
        [
            h,
            v
        ],
        [
            "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
            v
        ],
        [
            r,
            "FIPS and DualStack are enabled, but this partition does not support one or both"
        ],
        [
            "https://sts.{Region}.amazonaws.com",
            v
        ],
        [
            "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
            v
        ],
        [
            r,
            "FIPS is enabled but this partition does not support FIPS"
        ],
        [
            "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
            v
        ],
        [
            r,
            "DualStack is enabled but this partition does not support DualStack"
        ],
        [
            m,
            v
        ],
        [
            r,
            "Invalid Configuration: Missing Region"
        ]
    ]
}, P = 1e8, C = new Int32Array([
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
    P + 5
]);
exports.bdd = i.BinaryDecisionDiagram.from(C, 2, E.conditions, E.results);
