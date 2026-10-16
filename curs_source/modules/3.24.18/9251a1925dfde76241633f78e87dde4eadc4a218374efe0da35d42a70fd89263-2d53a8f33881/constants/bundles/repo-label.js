var KNOWN_GIT_HOSTING_DOMAINS, SCP_STYLE_GIT_URL_REGEX, ORIGIN_WEB_HOST_PATTERN, REPO_LABEL_FIXTURES;
export { KNOWN_GIT_HOSTING_DOMAINS, ORIGIN_WEB_HOST_PATTERN, REPO_LABEL_FIXTURES, SCP_STYLE_GIT_URL_REGEX };
var __wakaru_init_repo_label_initialized = false;
export function init_repo_label() {
if (__wakaru_init_repo_label_initialized) return;
__wakaru_init_repo_label_initialized = true;
"use strict";
KNOWN_GIT_HOSTING_DOMAINS = new Set([
    "github.com",
    "gitlab.com",
    "bitbucket.org",
    "bitbucket.com",
    "codeberg.org",
    "gitea.com",
    "sr.ht"
]);
SCP_STYLE_GIT_URL_REGEX = /^[^@/]+@[^:]+:.+$/;
ORIGIN_WEB_HOST_PATTERN = /^origin(?:-[a-z0-9]+)?\.cursor\.com$/i;
REPO_LABEL_FIXTURES = [
    {
        description: "GitHub https URL \u2192 owner/repo",
        input: "https://github.com/anysphere/everysphere",
        expected: "anysphere/everysphere"
    },
    {
        description: "GitHub https URL strips trailing .git",
        input: "https://github.com/anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "GitHub https URL ignores query / fragment",
        input: "https://github.com/anysphere/everysphere?ref=main#L10",
        expected: "anysphere/everysphere"
    },
    {
        description: "GitLab nested groups preserve subgroup path",
        input: "https://gitlab.com/group/subgroup/repo",
        expected: "group/subgroup/repo"
    },
    {
        description: "Bitbucket public host collapses to owner/repo",
        input: "https://bitbucket.org/acme/payments",
        expected: "acme/payments"
    },
    {
        description: "GitHub Enterprise subdomain collapses (no host prefix)",
        input: "https://ghe.company.github.com/org/repo",
        expected: "org/repo"
    },
    {
        description: "Self-hosted GitLab host preserves host:port prefix when single-segment project",
        input: "ssh://developer@gerrit.example.com:29418/rdx-code",
        expected: "gerrit.example.com:29418/rdx-code"
    },
    {
        description: "Self-hosted host with multi-segment path keeps host as the first label segment",
        input: "https://gitlab.example.com/group/subgroup/repo",
        expected: "gitlab.example.com/group/subgroup/repo"
    },
    {
        description: "Two self-hosted hosts with the same owner/repo path produce different labels",
        input: "https://gerrit-a.example.com/team/proj",
        expected: "gerrit-a.example.com/team/proj"
    },
    {
        description: "SCP-style git remote rewritten to https before parsing",
        input: "git@github.com:anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "Origin legacy /git/ clone URL collapses to owner/repo (same label as the GitHub mirror)",
        input: "https://origin.cursor.com/git/anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "Origin legacy /git/ clone path without .git collapses too",
        input: "https://origin.cursor.com/git/anysphere/everysphere",
        expected: "anysphere/everysphere"
    },
    {
        description: "Origin root-shape clone URL collapses to owner/repo",
        input: "https://origin.cursor.com/anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "Origin env host (staging) collapses like production",
        input: "https://origin-staging.cursor.com/git/anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "Origin env host (test) root shape collapses like production",
        input: "https://origin-test.cursor.com/anysphere/everysphere",
        expected: "anysphere/everysphere"
    },
    {
        description: "Schemeless Origin legacy path collapses to owner/repo",
        input: "origin.cursor.com/git/anysphere/everysphere",
        expected: "anysphere/everysphere"
    },
    {
        description: "SCP-style Origin remote is rewritten to https then collapsed",
        input: "git@origin.cursor.com:git/anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "Unrecognized Origin path shape fails closed instead of emitting an unroutable host-qualified label",
        input: "https://origin.cursor.com/git/anysphere",
        expected: void 0
    },
    {
        description: "Origin lookalike host is not collapsed (keeps the self-hosted host prefix)",
        input: "https://origin.cursor.com.evil.example/git/anysphere/everysphere",
        expected: "origin.cursor.com.evil.example/git/anysphere/everysphere"
    },
    {
        description: "Self-hosted host keeps a leading git/ path segment",
        input: "https://gitlab.example.com/git/team/proj",
        expected: "gitlab.example.com/git/team/proj"
    },
    {
        description: "ssh:// URL with git user parses natively",
        input: "ssh://git@github.com/anysphere/everysphere.git",
        expected: "anysphere/everysphere"
    },
    {
        description: "Schemeless owner/repo passes through",
        input: "anysphere/everysphere",
        expected: "anysphere/everysphere"
    },
    {
        description: "Schemeless host/owner/repo strips the known host",
        input: "github.com/anysphere/everysphere",
        expected: "anysphere/everysphere"
    },
    {
        description: "Schemeless dotted owner is preserved (not mistaken for host)",
        input: "my.org/repo",
        expected: "my.org/repo"
    },
    {
        description: "Empty input \u2192 undefined",
        input: "",
        expected: void 0
    },
    {
        description: "Whitespace-only input \u2192 undefined",
        input: "   ",
        expected: void 0
    },
    {
        description: "Single-segment GitHub path \u2192 undefined (no repo)",
        input: "https://github.com/anysphere",
        expected: void 0
    },
    {
        description: "Bare hostname \u2192 undefined",
        input: "https://github.com",
        expected: void 0
    }
];

}
