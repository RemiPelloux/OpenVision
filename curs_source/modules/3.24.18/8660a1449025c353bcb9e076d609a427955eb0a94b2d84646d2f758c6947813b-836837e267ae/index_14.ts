import { GM } from "./automations_pb.js";
import { bE } from "./privacy_mode_pb.js";
import { E } from "./tslib.es6.js";
import { d0i } from "./yBp.js";
var JQr, BVa, UVa, jVa, $Va, HVa, i4m, r4m, s4m, o4m, a4m, l4m, c4m, u4m, d4m, eJr, WVa, h4m, p4m, m4m, g4m, f4m, v4m, _4m, b4m, y4m, S4m, GVa, qVa, k4m, w4m, C4m;
export { $Va, BVa, C4m, GVa, HVa, JQr, S4m, UVa, WVa, _4m, a4m, b4m, c4m, d4m, eJr, f4m, g4m, h4m, i4m, jVa, k4m, l4m, m4m, o4m, p4m, qVa, r4m, s4m, u4m, v4m, w4m, y4m };
var __wakaru_T4m_initialized = false;
export function T4m() {
if (__wakaru_T4m_initialized) return;
__wakaru_T4m_initialized = true;
E(), GM(), bE(), JQr = "cursor-backend-control", BVa = "list_automations", UVa = "get_automation", jVa = "create_automation", $Va = "update_automation", HVa = "build_automation_prefill_url", i4m = "https://cursor.com/automations/new", r4m = `The cursor-backend-control MCP calls Cursor backend APIs through the current user's authenticated Cursor session.

Cursor Automations product tools:
- list_automations lists minimal, non-author-text Cursor Automation rows visible to the current user. Its query matches only fields returned by the tool, such as IDs and trigger/action types.
- get_automation fetches one Cursor Automation by ID with stored author text redacted and workflow values returned only as a redacted shape. Use it only after the user selected or provided the exact automation ID.
- create_automation creates a Cursor Automation from a reviewed CreateAutomationRequest-shaped payload.
- update_automation updates a Cursor Automation from a reviewed UpdateAutomationRequest-shaped payload.
- build_automation_prefill_url builds a cursor.com Automations prefill URL from a reviewed Cursor Automation workflow JSON. Returns the URL string for the caller to open via open_resource or surface to the user.

Rules:
- These tools are only for Cursor's Automations product. Do not use them for GitHub Actions, CI pipelines, scripts, cron jobs, workflow engines, browser automation, or other generic automation tasks unless the user explicitly asks for Cursor Automations or confirms Cursor Automations is the intended surface.
- Only call create_automation or update_automation after the user has reviewed the automation draft or requested the exact change.
- Do not invent an automation ID. If the user did not provide an ID, resolve it with list_automations, ask the user to choose from the returned IDs, and only then call get_automation when needed.
- These tools are unavailable in UNSPECIFIED and NO_STORAGE privacy modes because automations require reconciled storage eligibility.
- list_automations and get_automation require a fresh read confirmation before reading automation metadata; responses are redacted.
- create_automation and update_automation show a compact payload check generated from the serialized request in a final confirmation modal before saving.
- build_automation_prefill_url is read-only and side-effect free; it does not call the backend, but still requires storage-eligible privacy mode because prefill serializes the draft outside the no-storage boundary.`, s4m = "Automations are not available until privacy mode is reconciled to a storage-eligible setting.", o4m = "[stored automation name redacted]", a4m = "[stored automation description redacted]", l4m = /__securitybot_metadata__|customInstruction/i, c4m = "[stored automation field redacted]", u4m = "[stored automation workflow details redacted]", d4m = [
    "model",
    "isFilter",
    "is_filter",
    "runMode",
    "run_mode"
], eJr = {
    type: "object",
    description: "Cursor Automation Workflow proto JSON. Include reviewed triggers, actions, prompts, model, git, memory, and workflow options.",
    additionalProperties: !0
}, WVa = {
    oneOf: [
        {
            type: "string"
        },
        {
            type: "integer"
        }
    ]
}, h4m = {
    type: "object",
    additionalProperties: !1,
    properties: {
        query: {
            type: "string",
            description: "Optional search text matched only against returned Cursor Automations list fields, such as automation ID, trigger/action types, scope, enabled state, URL, and timestamps."
        },
        teamId: {
            type: "integer",
            description: "Optional numeric team id used to scope team-visible automations."
        },
        includeDisabled: {
            type: "boolean",
            description: "When true, disabled automations are included. Omitted or false returns only enabled automations."
        }
    }
}, p4m = {
    type: "object",
    additionalProperties: !1,
    required: [
        "automationId"
    ],
    properties: {
        automationId: {
            type: "string",
            minLength: 1,
            description: "Automation ID (UUID) of the Cursor Automation to fetch."
        }
    }
}, m4m = {
    type: "object",
    additionalProperties: !1,
    required: [
        "name",
        "workflow"
    ],
    properties: {
        name: {
            type: "string",
            minLength: 1,
            description: "Display name for the Cursor Automation."
        },
        description: {
            type: "string",
            description: "Optional short description shown in the Cursor Automations UI."
        },
        workflow: eJr,
        scope: {
            ...WVa,
            description: "Optional AutomationScope proto JSON value. When omitted, team members get their team's default automation visibility (team-visible unless an admin configured otherwise) and solo users get user scope. Pass an explicit scope when the user asked for a specific visibility."
        },
        templateId: {
            type: "string",
            description: "Optional template id when creating from a template-like draft."
        },
        teamId: {
            type: "integer",
            description: "Optional numeric team id for team-scoped creation."
        }
    }
}, g4m = {
    type: "object",
    additionalProperties: !1,
    required: [
        "workflow"
    ],
    properties: {
        workflow: {
            ...eJr,
            description: "Reviewed Cursor Automation Workflow proto JSON. Include triggers, actions, prompts, model, gitConfig, agentOptions, memoryEnabled, etc. The exact same shape passed to create_automation.workflow."
        },
        name: {
            type: "string",
            description: "Optional display name carried into the prefilled Automations form."
        },
        description: {
            type: "string",
            description: "Optional short description carried into the prefilled Automations form."
        },
        templateId: {
            type: "string",
            description: "Optional template id; passed through to the Automations form when prefilling from a template-like draft."
        }
    }
}, f4m = {
    type: "object",
    additionalProperties: !1,
    required: [
        "automationId"
    ],
    properties: {
        automationId: {
            type: "string",
            minLength: 1,
            description: "Automation ID (UUID) of the Cursor Automation to update."
        },
        name: {
            type: "string",
            minLength: 1,
            description: "Optional new display name for the Cursor Automation."
        },
        description: {
            type: "string",
            description: "Optional new description shown in the Cursor Automations UI."
        },
        workflow: {
            ...eJr,
            description: "Optional complete replacement workflow in UpdateAutomationRequest proto JSON form. This replaces the entire stored workflow; set replaceWorkflow to true only after the user reviewed the complete replacement."
        },
        replaceWorkflow: {
            type: "boolean",
            description: "Must be true when workflow is provided, acknowledging that workflow replaces the entire stored workflow instead of patching it."
        },
        enabled: {
            type: "boolean",
            description: "Optional enabled state for the automation."
        },
        scope: {
            ...WVa,
            description: "Optional AutomationScope proto JSON value."
        }
    }
}, v4m = d0i({
    name: BVa,
    description: "List Cursor Automations product entries visible to the current user. Use only when the user explicitly asks about Cursor Automations. Returns compact summaries and only searches fields included in those summaries.",
    schema: h4m,
    transcriptDisplay: {
        loading: "Listing automations",
        success: "Listed automations",
        error: "Couldn't list automations"
    }
}), _4m = d0i({
    name: UVa,
    description: "Fetch one Cursor Automations product entry by automationId. Use only when the user explicitly asks about Cursor Automations. Stored author text is redacted and workflow values are returned only as a redacted shape before entering chat context.",
    schema: p4m,
    transcriptDisplay: {
        loading: "Fetching automation",
        success: "Fetched automation",
        error: "Couldn't fetch automation"
    }
}), b4m = d0i({
    name: jVa,
    description: "Create a Cursor Automation product entry with the current user's authenticated Cursor session. Use only when the user explicitly asks for Cursor Automations. Call only after the user has reviewed the automation draft. Saving shows a compact payload check generated from the serialized request.",
    schema: m4m,
    transcriptDisplay: {
        loading: "Creating automation",
        success: "Created automation",
        error: "Couldn't create automation"
    }
}), y4m = d0i({
    name: $Va,
    description: "Update a Cursor Automation product entry with the current user's authenticated Cursor session. Use only when the user explicitly asks for Cursor Automations. Non-workflow fields can be patched independently. Workflow updates require a complete replacement workflow plus replaceWorkflow: true after the user reviewed the full replacement. Saving shows a compact payload check generated from the serialized request.",
    schema: f4m,
    transcriptDisplay: {
        loading: "Updating automation",
        success: "Updated automation",
        error: "Couldn't update automation"
    }
}), S4m = d0i({
    name: HVa,
    description: "Build a cursor.com Automations prefill URL from a reviewed Cursor Automation workflow JSON. Use only when the user explicitly asks for Cursor Automations. Returns the URL as plain text; the caller is expected to open it via open_resource or surface it to the user. Read-only: does not call the backend or create any automation.",
    schema: g4m,
    transcriptDisplay: {
        loading: "Building automation prefill URL",
        success: "Built automation prefill URL",
        error: "Couldn't build automation prefill URL"
    }
}), GVa = {
    cron: "cron",
    git: "git",
    slackTrigger: "slack message",
    slackReactionAdded: "slack reaction",
    linear: "linear",
    slackChannelCreated: "slack channel created",
    pagerduty: "pagerduty",
    sentry: "sentry",
    microsoftTeamsTrigger: "microsoft teams message",
    microsoftTeamsChannelCreated: "microsoft teams channel created",
    emailReceived: "email received",
    webhook: "webhook"
}, qVa = {
    mcp: "mcp",
    slack: "slack",
    microsoftTeams: "microsoft teams",
    gitPr: "git PR",
    prComment: "PR comment",
    manageCheckRun: "manage check run",
    requestReviewers: "request reviewers",
    readSlack: "read Slack",
    approvePr: "approve PR",
    resolveReviewThreads: "resolve review threads",
    readMicrosoftTeams: "read Microsoft Teams"
}, k4m = {
    fields: new Set([
        "triggers",
        "actions",
        "model",
        "memoryEnabled",
        "slackNotifiedChannels",
        "slackCompletionReactionMode",
        "slackCompletionReactionCustomEmoji",
        "managedConfig"
    ]),
    nested: {
        gitConfig: {
            fields: new Set([
                "repo",
                "repos",
                "branch"
            ])
        },
        prompts: {
            fields: new Set([
                "prompt",
                "effortLevel"
            ])
        },
        agentOptions: {
            fields: new Set([
                "skipInstall",
                "environmentPublicId"
            ]),
            nested: {
                privateWorker: {
                    fields: new Set([
                        "labels"
                    ])
                }
            }
        }
    }
}, w4m = {
    cron: {
        fields: new Set([
            "cron"
        ])
    },
    git: {
        fields: new Set([
            "userAllowlist"
        ]),
        nested: {
            pullRequest: {
                fields: new Set([
                    "repo",
                    "repos",
                    "orgs",
                    "ignoreDraftPrs",
                    "onlyOnce",
                    "prAction",
                    "commenterAllowlist",
                    "commentContains",
                    "commentContainsIsRegex"
                ])
            },
            push: {
                fields: new Set([
                    "repo",
                    "repos",
                    "branch"
                ])
            },
            ciCompleted: {
                fields: new Set([
                    "repos",
                    "condition",
                    "ignoreBaseFailures",
                    "branch"
                ])
            },
            label: {
                fields: new Set([
                    "repos",
                    "labelName",
                    "onAdded",
                    "onRemoved",
                    "pullRequests",
                    "issues"
                ])
            }
        }
    },
    slackTrigger: {
        fields: new Set([
            "channels",
            "channel",
            "messageContains",
            "messageContainsIsRegex",
            "blockUnauthenticatedSlackUsers",
            "slackCompletionReactionMode",
            "slackCompletionReactionCustomEmoji"
        ])
    },
    slackReactionAdded: {
        fields: new Set([
            "channels",
            "channel",
            "emojiName",
            "blockUnauthenticatedSlackUsers"
        ])
    },
    slackChannelCreated: {
        fields: new Set([
            "channelNameContains"
        ])
    },
    microsoftTeamsTrigger: {
        fields: new Set([
            "tenantId",
            "teamId",
            "teamIds",
            "channelIds",
            "messageContains",
            "messageContainsIsRegex",
            "blockUnauthenticatedTeamsUsers"
        ])
    },
    microsoftTeamsChannelCreated: {
        fields: new Set([
            "tenantId",
            "teamIds",
            "channelNameContains"
        ])
    },
    emailReceived: {
        fields: new Set([
            "inboxEmail",
            "fromAddresses",
            "requireAuthPass"
        ])
    }
}, C4m = {
    mcp: {
        fields: new Set,
        nested: {
            server: {
                fields: new Set([
                    "id",
                    "name"
                ])
            }
        }
    },
    slack: {
        fields: new Set([
            "generalized",
            "channels",
            "channel",
            "postAsThread"
        ])
    },
    microsoftTeams: {
        fields: new Set([
            "tenantId",
            "teamId",
            "channelId",
            "channelIds",
            "generalized",
            "respondInThread",
            "postAsThread"
        ])
    }
};

}
