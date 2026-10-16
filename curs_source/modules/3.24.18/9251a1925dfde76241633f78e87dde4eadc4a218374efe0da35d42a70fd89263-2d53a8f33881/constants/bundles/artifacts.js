var PUBLIC_ARTIFACT_ORIGINS, PUBLIC_ARTIFACT_CONTENT_PATH_PREFIX, ORIGIN_CODE_TOUR_ARTIFACT_CONTENT_PATHNAME_PATTERN, CODE_TOUR_PLAYABLE_RECORDING_EXTENSIONS, AGENT_ARTIFACTS_VIEWER_PATHNAME_PATTERN, safeInlinePublicArtifactContentTypes;
export { AGENT_ARTIFACTS_VIEWER_PATHNAME_PATTERN, CODE_TOUR_PLAYABLE_RECORDING_EXTENSIONS, ORIGIN_CODE_TOUR_ARTIFACT_CONTENT_PATHNAME_PATTERN, PUBLIC_ARTIFACT_CONTENT_PATH_PREFIX, PUBLIC_ARTIFACT_ORIGINS, safeInlinePublicArtifactContentTypes };
var __wakaru_init_artifacts_initialized = false;
export function init_artifacts() {
if (__wakaru_init_artifacts_initialized) return;
__wakaru_init_artifacts_initialized = true;
"use strict";
PUBLIC_ARTIFACT_ORIGINS = {
    local: "http://localhost:4000",
    production: "https://cursor.com"
};
PUBLIC_ARTIFACT_CONTENT_PATH_PREFIX = "/artifacts/c";
ORIGIN_CODE_TOUR_ARTIFACT_CONTENT_PATHNAME_PATTERN = /^\/api\/origin-cereal\/graphite\/background-agents\/[^/]+\/[^/]+\/cursor\/[^/]+\/artifact-content$/;
CODE_TOUR_PLAYABLE_RECORDING_EXTENSIONS = new Set([
    ".mp4",
    ".webm"
]);
AGENT_ARTIFACTS_VIEWER_PATHNAME_PATTERN = /^\/agents\/([^/]+)\/artifacts$/;
safeInlinePublicArtifactContentTypes = new Set([
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "video/mp4",
    "video/webm"
]);

}
