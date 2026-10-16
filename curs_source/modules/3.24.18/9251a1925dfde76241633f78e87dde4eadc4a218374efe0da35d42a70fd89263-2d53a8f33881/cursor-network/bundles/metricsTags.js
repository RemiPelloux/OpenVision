var __wakaru_require_metricsTags_cache;
export function require_metricsTags() {
if (__wakaru_require_metricsTags_cache) return __wakaru_require_metricsTags_cache;
var exports2 = {};
__wakaru_require_metricsTags_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.normalizeMetricsProviderTags = normalizeMetricsProviderTags;
function normalizeMetricsProviderTags(tags) {
    if (tags === void 0) {
        return {};
    }
    if (Array.isArray(tags)) {
        return tags.reduce((acc, tag)=>{
            const colonIdx = tag.indexOf(":");
            if (colonIdx === -1) {
                acc[tag] = "";
            } else {
                acc[tag.substring(0, colonIdx)] = tag.substring(colonIdx + 1);
            }
            return acc;
        }, {});
    }
    return tags;
}

return exports2;
}
