import { mLn } from "./Asv.js";
import { E } from "./tslib.es6.js";
var dw;
export { dw };
var __wakaru_BEs_initialized = false;
export function BEs() {
if (__wakaru_BEs_initialized) return;
__wakaru_BEs_initialized = true;
"use strict";
E(), dw = {
    all: [
        "environment"
    ],
    secretsRoot: ()=>[
            "environment-secrets"
        ],
    secrets: (t)=>[
            ...dw.secretsRoot(),
            t
        ],
    personal: ()=>[
            ...dw.all,
            "personal"
        ],
    team: (t)=>[
            ...dw.all,
            "team",
            t ?? "none"
        ],
    teamBackgroundAgentSettings: (t)=>[
            ...dw.all,
            "team-background-agent-settings",
            t ?? "none"
        ],
    logical: (t)=>[
            ...dw.all,
            "logical",
            {
                includeEnvironmentJson: t.includeEnvironmentJson === !0,
                limit: t.limit,
                repositoryScopeRepoUrls: mLn(t.repositoryScopeRepoUrls ?? []),
                filterRepoUrls: mLn(t.filterRepoUrls ?? [])
            }
        ],
    draft: (t, e)=>[
            ...dw.all,
            "draft",
            t,
            e
        ],
    setupDraftForEgressDisplay: (t)=>[
            ...dw.all,
            "setup-draft-egress-display",
            t
        ],
    reposWithLocalEnvironment: ()=>[
            ...dw.all,
            "repos-with-local-environment"
        ],
    repoEnvironmentJson: (t, e)=>[
            ...dw.all,
            "repo-environment-json",
            t,
            e
        ],
    setupComposersRoot: ()=>[
            ...dw.all,
            "setup-composers"
        ],
    setupComposers: (t)=>[
            ...dw.setupComposersRoot(),
            t.limit ?? "default",
            t.teamId ?? "none"
        ],
    snapshotStatusesByBcId: (t)=>[
            ...dw.all,
            "snapshot-statuses-by-bc-id",
            {
                bcIds: mLn(t.bcIds),
                usePrimary: t.usePrimary === !0
            }
        ],
    environmentByPublicId: (t, e = !1)=>[
            ...dw.all,
            "by-public-id",
            t.trim(),
            {
                includeEnvironmentJson: e
            }
        ],
    environmentBuilds: (t)=>[
            ...dw.all,
            "environment-builds",
            t ?? "none"
        ],
    backgroundComposerEnvironmentVersion: (t)=>[
            ...dw.all,
            "background-composer-environment-version",
            t ?? "none"
        ],
    backgroundComposerConversationSignals: (t, e)=>[
            ...dw.all,
            "background-composer-conversation-signals",
            t ?? "none",
            e
        ],
    draftWrites: ()=>[
            ...dw.all,
            "draft-writes"
        ],
    finalizationWrites: ()=>[
            ...dw.all,
            "finalization-writes"
        ],
    writes: ()=>[
            ...dw.all,
            "writes"
        ]
};

}
