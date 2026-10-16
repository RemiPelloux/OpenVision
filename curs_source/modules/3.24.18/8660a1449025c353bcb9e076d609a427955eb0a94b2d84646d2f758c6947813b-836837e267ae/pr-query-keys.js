import { Apf, Gqk, xpf } from "./Ycg.js";
import { XS } from "./githubUtils.js";
import { E } from "./tslib.es6.js";
var Bk;
export { Bk };
var __wakaru_Rpf_initialized = false;
export function Rpf() {
if (__wakaru_Rpf_initialized) return;
__wakaru_Rpf_initialized = true;
"use strict";
E(), XS(), Bk = {
    all: [
        "pr"
    ],
    byUrl: (t)=>[
            ...Bk.all,
            xpf(t)
        ],
    metadata: (t)=>[
            ...Bk.byUrl(t),
            "metadata"
        ],
    stack: (t)=>[
            ...Bk.byUrl(t),
            "stack"
        ],
    checks: (t)=>[
            ...Bk.byUrl(t),
            "checks"
        ],
    commits: (t)=>[
            ...Bk.byUrl(t),
            "commits"
        ],
    timeline: (t)=>[
            ...Bk.byUrl(t),
            "timeline"
        ],
    discussions: (t)=>[
            ...Bk.byUrl(t),
            "discussions"
        ],
    fileContext: ({ prUrl: t, baseSha: e, headSha: n, originalPath: i, modifiedPath: r, maxBytes: s })=>[
            ...Bk.byUrl(t),
            "fileContext",
            e,
            n,
            i,
            r,
            s
        ],
    codeowners: (t, e)=>[
            ...Bk.byUrl(t),
            "codeowners",
            Apf(e)
        ],
    ghCliAvailability: ()=>[
            ...Bk.all,
            "ghCliAvailability"
        ],
    trayStacks: (t)=>[
            ...Bk.all,
            "trayStacks",
            Gqk(t)
        ]
};

}
