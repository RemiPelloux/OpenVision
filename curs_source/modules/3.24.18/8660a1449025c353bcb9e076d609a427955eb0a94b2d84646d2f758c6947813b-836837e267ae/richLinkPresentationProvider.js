import { Mt } from "./index_197.js";
import { pPa } from "./ipa.js";
import { E } from "./tslib.es6.js";
var s6l, WOf, o6l, a6l;
export { WOf, a6l, o6l, s6l };
var __wakaru_J1s_initialized = false;
export function J1s() {
if (__wakaru_J1s_initialized) return;
__wakaru_J1s_initialized = true;
"use strict";
E(), Mt(), s6l = [
    {
        domain: "github.com",
        presentation: {
            icon: {
                name: "logo-github"
            }
        }
    },
    {
        domain: "gitlab.com",
        presentation: {
            icon: {
                name: "logo-gitlab"
            }
        }
    },
    {
        domain: "linear.app",
        presentation: {
            icon: {
                name: "logo-linear"
            }
        }
    },
    {
        domain: "slack.com",
        presentation: {
            icon: {
                name: "logo-slack"
            }
        }
    },
    {
        domain: "cursor.com",
        presentation: {
            icon: {
                name: "cursor-logo"
            }
        }
    },
    {
        domain: "sentry.io",
        presentation: {
            icon: {
                name: "logo-sentry"
            }
        }
    },
    {
        domain: "notion.so",
        presentation: {
            icon: {
                name: "logo-notion"
            }
        }
    },
    {
        domain: "notion.site",
        presentation: {
            icon: {
                name: "logo-notion"
            }
        }
    },
    {
        domain: "figma.com",
        presentation: {
            icon: {
                name: "logo-figma"
            }
        }
    },
    {
        domain: "jira.com",
        presentation: {
            icon: {
                name: "logo-jira"
            }
        }
    },
    {
        domain: "atlassian.net",
        presentation: {
            icon: {
                name: "logo-jira"
            }
        }
    },
    {
        domain: "teams.microsoft.com",
        presentation: {
            icon: {
                name: "logo-microsoft-teams"
            }
        }
    },
    {
        domain: "teams.live.com",
        presentation: {
            icon: {
                name: "logo-microsoft-teams"
            }
        }
    }
], WOf = [
    ...s6l,
    {
        domain: "buildkite.com",
        presentation: {
            icon: {
                name: "globe"
            }
        }
    },
    {
        domain: "datadoghq.com",
        presentation: {
            icon: {
                name: "globe"
            }
        }
    }
], o6l = pPa({
    rules: WOf,
    fallbackPresentation: {
        icon: {
            name: "globe"
        }
    }
}), a6l = pPa({
    rules: s6l
});

}
