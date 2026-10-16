import { E } from "./tslib.es6.js";
var yd, OJt;
export { OJt, yd };
var __wakaru_$k_initialized = false;
export function $k() {
if (__wakaru_$k_initialized) return;
__wakaru_$k_initialized = true;
"use strict";
E(), yd = {
    all: [
        "automations"
    ],
    lists: ()=>[
            ...yd.all,
            "list"
        ],
    list: (t)=>[
            ...yd.lists(),
            t ?? "legacy"
        ],
    detail: (t)=>[
            ...yd.all,
            "detail",
            t
        ],
    memories: (t)=>[
            ...yd.all,
            "memories",
            t
        ],
    memory: (t)=>[
            ...yd.all,
            "memory",
            t.workflowUuid,
            t.file
        ],
    allRuns: ()=>[
            ...yd.all,
            "allRuns"
        ],
    allRunsScope: (t)=>[
            ...yd.allRuns(),
            t?.automationId ?? "team",
            t?.automationId !== void 0 ? "automation" : t?.teamId ?? "legacy",
            t?.runKind ?? "default",
            t?.ownerOnly === !0 ? "mine" : "all"
        ],
    runSummary: (t)=>[
            ...yd.all,
            "runSummary",
            t?.automationId ?? "team",
            t?.automationId !== void 0 ? "automation" : t?.teamId ?? "legacy",
            t?.ownerOnly === !0 ? "mine" : "all"
        ],
    githubInstallations: (t, e, n)=>[
            ...yd.all,
            "githubInstallations",
            t,
            e ?? "personal",
            n
        ],
    githubUsers: (t, e, n)=>[
            ...yd.all,
            "githubUsers",
            t,
            e ?? "personal",
            n
        ],
    teamMembers: (t, e)=>[
            ...yd.all,
            "teamMembers",
            t,
            e ?? "personal"
        ],
    slackConversations: (t, e, n, i)=>[
            ...yd.all,
            "slackConversations",
            t,
            e ?? "personal",
            n ?? "",
            i
        ],
    editingSlackConversations: (t, e, n)=>[
            ...yd.all,
            "editingSlackConversations",
            t,
            e ?? "personal",
            n
        ],
    slackConversationsByIds: (t, e, n)=>[
            ...yd.all,
            "slackConversationsByIds",
            t,
            e ?? "personal",
            n
        ],
    microsoftTeamsChannels: (t, e)=>[
            ...yd.all,
            "microsoftTeamsChannels",
            t,
            e ?? "personal"
        ],
    linearTeams: (t, e)=>[
            ...yd.all,
            "linearTeams",
            t,
            e ?? "personal"
        ],
    pagerDutyServices: (t, e)=>[
            ...yd.all,
            "pagerDutyServices",
            t,
            e ?? "personal"
        ],
    sentryProjects: (t, e)=>[
            ...yd.all,
            "sentryProjects",
            t,
            e ?? "personal"
        ],
    integrationAuth: (t, e)=>[
            ...yd.all,
            "integrationAuth",
            t,
            e ?? "personal"
        ],
    logicalEnvironmentsRoot: ()=>[
            ...yd.all,
            "logicalEnvironments"
        ],
    logicalEnvironments: (t, e, n)=>[
            ...yd.logicalEnvironmentsRoot(),
            t,
            e ?? "personal",
            n
        ],
    teamCommands: (t, e)=>[
            ...yd.all,
            "teamCommands",
            t,
            e ?? "personal"
        ],
    globalCommands: (t, e, n)=>[
            ...yd.all,
            "globalCommands",
            t,
            e ?? "personal",
            n
        ],
    availableMcpServers: (t, e)=>[
            ...yd.all,
            "availableMcpServers",
            t,
            e ?? "personal"
        ],
    marketplacePlugins: (t, e)=>[
            ...yd.all,
            "marketplacePlugins",
            t,
            e ?? "personal"
        ],
    httpMcpStatusesRoot: ()=>[
            ...yd.all,
            "httpMcpStatuses"
        ],
    httpMcpStatuses: (t, e, n, i, r)=>[
            ...yd.httpMcpStatusesRoot(),
            t,
            e ?? "personal",
            n,
            i ?? "none",
            r
        ],
    teamBackgroundAgentSettings: (t, e)=>[
            ...yd.all,
            "teamBackgroundAgentSettings",
            t,
            e ?? "personal"
        ],
    managedAutomationTeamSettings: (t, e)=>[
            ...yd.all,
            "managedAutomationTeamSettings",
            t,
            e ?? "personal"
        ],
    repositoryBranches: (t)=>[
            ...yd.all,
            "repositoryBranches",
            t.authId,
            t.teamId ?? "personal",
            t.repoUrl,
            t.search,
            t.onlyUserBranches
        ],
    verifyRepositoryBranch: (t, e, n, i)=>[
            ...yd.all,
            "verifyRepositoryBranch",
            t,
            e ?? "personal",
            n,
            i
        ],
    changeMonitorTeamSettings: (t, e)=>[
            ...yd.all,
            "changeMonitorTeamSettings",
            t,
            e ?? "personal"
        ],
    originRepositoryBranches: (t)=>[
            ...yd.all,
            "originRepositoryBranches",
            t.authId,
            t.teamId ?? "personal",
            t.owner,
            t.name,
            t.search
        ],
    repositoryDefaultBranch: (t)=>[
            ...yd.all,
            "repositoryDefaultBranch",
            t.authId,
            t.teamId ?? "personal",
            t.repoUrl
        ],
    originRepositoryDefaultBranch: (t)=>[
            ...yd.all,
            "originRepositoryDefaultBranch",
            t.authId,
            t.teamId ?? "personal",
            t.owner,
            t.name
        ]
}, OJt = {
    all: [
        "workflowTemplates"
    ],
    lists: ()=>[
            ...OJt.all,
            "list"
        ],
    list: (t)=>[
            ...OJt.lists(),
            t
        ],
    detail: (t)=>[
            ...OJt.all,
            "detail",
            t
        ]
};

}
