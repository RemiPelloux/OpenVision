var LEGACY_REVIEW_CURSOR_HOST, LEGACY_REVIEW_CURSOR_HOST_STAGING, LEGACY_REVIEW_CURSOR_HOSTS, ORIGIN_PR_IDENTITY_HOST, ORIGIN_PR_IDENTITY_HOST_STAGING, GRAPHITE_ORIGIN, GITHUB_PULL_REQUEST_PATH_PATTERN;
export { GITHUB_PULL_REQUEST_PATH_PATTERN, GRAPHITE_ORIGIN, LEGACY_REVIEW_CURSOR_HOST, LEGACY_REVIEW_CURSOR_HOSTS, LEGACY_REVIEW_CURSOR_HOST_STAGING, ORIGIN_PR_IDENTITY_HOST, ORIGIN_PR_IDENTITY_HOST_STAGING };
var __wakaru_init_pull_request_review_links_initialized = false;
export function init_pull_request_review_links() {
if (__wakaru_init_pull_request_review_links_initialized) return;
__wakaru_init_pull_request_review_links_initialized = true;
"use strict";
LEGACY_REVIEW_CURSOR_HOST = "review.cursor.com";
LEGACY_REVIEW_CURSOR_HOST_STAGING = "review.stg.cursor.com";
LEGACY_REVIEW_CURSOR_HOSTS = [
    LEGACY_REVIEW_CURSOR_HOST,
    LEGACY_REVIEW_CURSOR_HOST_STAGING
];
ORIGIN_PR_IDENTITY_HOST = "cursor.com";
ORIGIN_PR_IDENTITY_HOST_STAGING = "staging.cursor.com";
GRAPHITE_ORIGIN = "https://app.graphite.com";
GITHUB_PULL_REQUEST_PATH_PATTERN = /^\/([^/]+)\/([^/]+)\/pull\/(\d+)(\/.*)?$/;

}
